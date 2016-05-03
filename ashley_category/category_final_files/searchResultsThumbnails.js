/** 
 * ViewModel used by KnockoutJS for rendering the search results thumbnails.
 * Includes faceting and paging logic for keyword search. Subcategory searches 
 * retrieve all results for each search, so paging is not necessary. 
 * AFHS.Search variables should be specified by the page that uses the 
 * search results thumbnails control.
 */

var globalMaxDescHeight = 0;
var globalMinThumbHeight = 1000;
var bvSizeConst = 20;

function parseQueryString() {
    var result = "";
    var tmp = [];
    var items = location.search.substr(1).split("&");

    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] !== "filter" && tmp[0] !== "sortby") result += "&" + items[index];
    }

    return result.substr(1);
}

function adjustCategoryProductBoxImages() {
    var sel = $(".prodGridBox .pricing-table");

    if (sel.length < 1 || $(window).width() < 321)
        return false;
    sel.find(".productImage").css("max-height", globalMinThumbHeight);
}

function adjustCategoryProductBoxContainers() {
    var sel = $(".prodGridBox .pricing-table");

    if (sel.length < 1 || $(window).width() < 321)
        return false;

    sel.find(".containerDescription").css("height", globalMaxDescHeight);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showProductFlag(data) {
    return data.productFlagText && data.productFlagTextColor && data.productFlagBackgroundColor;
}

var searchResultsViewModel = function () {
    // Initial values and constants

    var searchType = AFHS.Search.searchType;
    var searchUri = AFHS.Search.searchUri;
    var mode = AFHS.Search.mode;
    var bazaarVoiceEnabled = AFHS.Search.bazaarVoiceEnabled;
    var currentContext = AFHS.Search.currentContext;
    // productsPerPage is the number of products to show each time more products are shown
    var productsPerPage = parseInt(AFHS.Search.productsPerPage, 10);
    // pageSize is the number of thumbnails to request from the WebAPI when paging is enabled
    var pageSize = (productsPerPage * 3);
    var currentPage = 0;
    var cookieExpirationDays = 90;
    var pagingEnabled = false;
    var firstSearch = true;

    // subcategory search variables
    var classificationId;

    // keyword search variables
    var searchTerm = "";
    var searchModelId;

    if (searchType === 'subcategory') {
        classificationId = AFHS.Search.classificationId;
    } else if (searchType === 'keyword') {
        searchTerm = AFHS.Search.searchTerm;
        searchModelId = AFHS.Search.searchModelId;
    }


    // Constructors

    var sortByOption = function (value, displayText) {
        this.sortByValue = value;
        this.sortByDisplayText = displayText;
    };

    var facetCategory = function (displayName, name, values) {
        this.displayName = displayName;
        this.name = name;
        this.values = values;

        // hasValueSelected() returns true if any of the values in the category is selected
        this.hasValueSelected = ko.computed(function () {
            var i = 0;
            for (i = 0; i < values.length; i++) {
                if (values[i].selected() === true) {
                    return true;
                }
            }
            return false;
        });
    };

    var facetCategoryValue = function (displayName, name, count, selected) {
        this.displayName = displayName;
        this.name = name;
        this.count = count;
        this.selected = ko.observable(selected);
    };

    // observables
    var selectedSortByOption = ko.observable("featured");
    var displayCount = ko.observable(productsPerPage);
    var zipCode = ko.observable(AFHS.Search.afmZipCodeFromCookie);
    var checkPriceModalZipCode = ko.observable();
    var checkPriceModalImage = ko.observable();
    var checkPriceModalDisplayName = ko.observable();
    var totalResultsCount = ko.observable(0);
    var totalFilteredResultsCount = ko.observable(0);
    var totalWithHidden = ko.observable(0);
    var isLoadingVisible = ko.observable(false);
    var keywordSearchTerm = ko.observable(searchTerm);
    var isNoResultsMessageVisible = ko.observable(false);
    var affiliationId = ko.observable("0");
    var isCheckPriceModalData = ko.observable(false);
    var bvIndex = 0;

    // observableArrays

    var productThumbnailResults = ko.observableArray();
    var facetCategories = ko.observableArray();
    var sortByOptions = ko.observableArray([
        new sortByOption("featured", "Featured"),
        new sortByOption("newest", "Newest to Oldest"),
        new sortByOption("lowtohigh", "Prices: Low to High"),
        new sortByOption("hightolow", "Prices: High to Low"),
        new sortByOption("az", "Alphabetical: A-Z"),
        new sortByOption("onsale", "On Sale")
    ]);


    // Computed values

    // dynamically generated filter string based on selected facets - updated whenever a facet is selected or unselected
    var filterString = ko.computed(function () {
        var i = 0;
        var j = 0;
        var computedFilterString = "";
        var currentValuesString = "";

        for (i = 0; i < facetCategories().length; i++) {
            // for each category with values selected
            if (facetCategories()[i].hasValueSelected()) {
                if (computedFilterString.length > 0) {
                    computedFilterString += "*;*" + facetCategories()[i].name + "::";
                }
                else {
                    computedFilterString = facetCategories()[i].name + "::";
                }

                // generate string of values for current category
                currentValuesString = "";
                for (j = 0; j < facetCategories()[i].values.length; j++) {
                    if (facetCategories()[i].values[j].selected()) {
                        if (currentValuesString.length > 0) {
                            currentValuesString += "||" + facetCategories()[i].values[j].name;
                        } else {
                            currentValuesString = facetCategories()[i].values[j].name;
                        }
                    }
                }
                computedFilterString += currentValuesString;
            }
        }
        return computedFilterString;
    });

    // Product thumbnails that should be displayed. Returns a subset of the results 
    // in the productThumbnailResults observable array. Whenever the displayCount() observable
    // is updated, shownProducts() is updated with the appropriate number of results.
    var shownProducts = ko.computed(function () {
        var slicedArray;
        if (productThumbnailResults().length > displayCount()) {
            slicedArray = productThumbnailResults.slice(0, displayCount());
        } else {
            slicedArray = productThumbnailResults.slice(0, productThumbnailResults().length);
        }
        return slicedArray;
    });

    // the view more option should be displayed if more results exist and the first page is what is being displayed
    var isViewMoreVisible = ko.computed(function () {
        return ((shownProducts().length < productThumbnailResults().length) && (shownProducts().length === productsPerPage))
    });

    // number of currently shown products. updates whenever shownProducts() is modified.
    var numberOfShownProducts = ko.computed(function () {
        if (shownProducts().length == totalFilteredResultsCount())
            return totalWithHidden();
        return shownProducts().length;
    });

    // results count info visible when results exist
    var isResultsCountInfoVisible = ko.computed(function () {
        if (productThumbnailResults().length > 0) {
            return true;
        }

        return false;
    });

    // if affiliation id has been set, show delivery zip code info
    var isDeliveryZipShown = ko.computed(function () {
        return affiliationId() !== "0";
    });

    // Functions

    // map facet category results to the facetCategory and facetCategoryValue objects and load the facetCategories() observable array
    var loadFacetCategories = function (inputArray) {
        var i = 0;
        var j = 0;

        var categories = [];
        var values = [];

        if (inputArray) {
            for (i = 0; i < inputArray.length; i++) {
                values = [];
                if (inputArray[i]) {
                    if (inputArray[i].values) {
                        for (j = 0; j < inputArray[i].values.length; j++) {
                            values.push(new facetCategoryValue(inputArray[i].values[j].displayName, inputArray[i].values[j].name, inputArray[i].values[j].count, inputArray[i].values[j].selected));
                        }
                    }
                    categories.push(new facetCategory(inputArray[i].displayName, inputArray[i].name, values));
                }
            }
        }

        facetCategories([]);
        facetCategories(categories);
    };

    // get next page of products - updates displayCount() which will trigger an update on shownProducts()
    var viewAllProducts = function () {
        var newCount = 0;

        newCount = shownProducts().length + productsPerPage;
        if (newCount >= productThumbnailResults().length) {
            displayCount(productThumbnailResults().length);
        } else {
            displayCount(newCount);
        }
    };

    // toggles facet selection and performs a search
    var filterSelectClick = function (data) {
        data.selected(!data.selected());
        clearAndSearch();
    }

    // clear results and perform a new search
    var clearAndSearch = function () {
        currentPage = 0;
        productThumbnailResults([]);
        performSearch(null);
    };

    // toggles facet selection
    var mobileFilterSelectClick = function (data) {
        data.selected(!data.selected());
    }

    // clear all facet selects and performs a search
    var clearAllFilters = function () {
        var i = 0;
        var j = 0;
        for (i = 0; i < facetCategories().length; i++) {
            if (facetCategories()[i].hasValueSelected()) {
                for (j = 0; j < facetCategories()[i].values.length; j++) {
                    facetCategories()[i].values[j].selected(false);
                }
            }
        }
        clearAndSearch();
    };

    // Calls the WebAPI to get search results. The parameters sent to the WebAPI
    // are set from the state of the view model's variables and observable values.
    var performSearch = function (strFilter) {

        var inputData = null;

        var filter = filterString();

        if (strFilter !== null && firstSearch === false) {
            inputData = strFilter;
        }

        if (searchType === 'keyword' && firstSearch === false) {
            inputData = strFilter;
        }

        if (firstSearch === true && getParameterByName("filter").length) {
            filter = getParameterByName("filter");
        }


        $("#performSearchErrorMessage").html("");

        // don't spin on initial load since calling page is already displaying a spinner
        if (!firstSearch) {
            if (searchType === 'subcategory') {
                $('#subCategorySearch').spin();
            } else if (searchType === 'keyword') {
                if (currentPage > 0) {
                    isLoadingVisible(true);
                } else {
                    $('.searchContent').css('position', 'relative').spin();
                }
            }
        } else {
            if (mode && mode.toLowerCase() === "shopping") {
                filter = "isavailableonline::1";
            }
        }

        if (!inputData) {
            if (searchType === 'subcategory') {
                inputData = {
                    "classificationId": classificationId,
                    "filter": filter,
                    "count": 0,
                    "mode": mode,
                    "orderby": selectedSortByOption(),
                    "affiliationId": affiliationId(),
                    "currentContext": currentContext,
                };
            } else if (searchType === 'keyword') {
                inputData = {
                    "searchModelId": searchModelId,
                    "searchTerm": searchTerm,
                    "filter": filter,
                    "page": currentPage,
                    "count": pageSize,
                    "mode": mode,
                    "orderby": selectedSortByOption(),
                    "affiliationId": affiliationId()
                };
            }
        }
        var queryString = parseQueryString();

        if (filter.length) {
            queryString = queryString === "" ? "" : "&" + queryString;
            if (getParameterByName("s").length) {
                history.replaceState(inputData, null, location.pathname + "?s=" + getParameterByName("s") + "&filter=" + filter + queryString);
            }
            else {
                history.replaceState(inputData, null, location.pathname + "?filter=" + filter + queryString);
            }
        }
        else {
            queryString = queryString === "" ? "" : "?" + queryString;
            history.replaceState(inputData, null, location.pathname + queryString);
        }

        $.ajax({
            url: searchUri,
            data: JSON.stringify(inputData),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                totalFilteredResultsCount(data.filteredProductsTotal);
                totalResultsCount(data.total);
                totalWithHidden(data.totalWithHidden);

                // set count for analytics
                if (firstSearch) {
                    if (typeof window.DDO === "undefined") {
                        window.DDO = { searchData: {} };
                    }
                    if (typeof window.DDO.searchData === "undefined") {
                        window.DDO.searchData = {};
                    }

                    window.DDO.searchData.searchResult = data.totalWithHidden;
                }

                // keyword search - special cases
                if (searchType === "keyword") {
                    // if no results returned, display the no results message
                    if (totalResultsCount() === 0) {
                        isNoResultsMessageVisible(true);
                        var isMobile = /Mobi/i.test(navigator.userAgent);
                        if (isMobile) {
                            $(".tabs a[href='#tabSearch_products'] em").text(" no ");
                        }
                        else {
                            $(".tabs a[href='#tabSearch_products'] em").text("");
                        }
                        return;
                    }
                        // if only one result is returned, redirect to the result's PDP
                    else if (totalResultsCount() === 1) {
                        var firstProductUrl = data.productThumbnailResults[0].url;
                        window.location.replace(firstProductUrl);
                        return;
                    }
                    else {
                        isNoResultsMessageVisible(false);
                    }
                }
                if (pagingEnabled) {
                    // update productThumbnailResults() with the results
                    ko.utils.arrayPushAll(productThumbnailResults, data.productThumbnailResults);
                    productThumbnailResults.valueHasMutated();
                } else {
                    // if paging is not enabled, all results are returned. Clear productThumbnailResults() and the load it with the results
                    productThumbnailResults([]);
                    productThumbnailResults(data.productThumbnailResults);
                    if (localStorage.getItem("categoryCount")) {
                        displayCount(localStorage.getItem("categoryCount"));
                    } else {
                        displayCount(productsPerPage);
                    }
                    if (localStorage.getItem("categorySort")) {
                        selectedSortByOption(localStorage.getItem("categorySort"));
                        localStorage.removeItem("categorySort");
                    }
                    applySort();
                }

                // only load facets for first page
                if (currentPage === 0) {
                    loadFacetCategories(data.facets);
                }

                if (pagingEnabled && currentPage > 0) {
                    var newCount = shownProducts().length + productsPerPage;
                    if (newCount >= totalResultsCount()) {
                        displayCount(totalResultsCount());
                    } else {
                        displayCount(newCount);
                    }
                } else {
                    if (localStorage.getItem("categoryCount")) {
                        displayCount(localStorage.getItem("categoryCount"));
                        localStorage.removeItem("categoryCount");
                    } else {
                        displayCount(productsPerPage);
                    }

                    if (localStorage.getItem("categorySort")) {
                        selectedSortByOption(localStorage.getItem("categorySort"));
                        localStorage.removeItem("categorySort");
                    }
                }

                // attach accordion events
                $(".arrowBlueSub.openArrow").on('click touchend', function (e) {
                    $(this).css("display", "none");
                    $(this).parent().find(".closeArrow").css("display", "inline");
                    $(this).closest("dd").find("div.content").hide();
                    // $(this).closest("dd").find("div.content").css("height", "25px");
                    $(this).closest("dd").find("div.content").css("padding", "0");
                    return false;
                });

                $(".arrowBlueSub.closeArrow").on('click touchend', function (e) {
                    $(this).css("display", "none");
                    $(this).parent().find(".openArrow").css("display", "inline");
                    $(this).closest("dd").find("div.content").show();
                    $(this).closest("dd").find("div.content").css("height", "auto");
                    return false;
                });

                // update the products tab with the total count
                if (searchType === 'keyword') {
                    $(".tabs a[href='#tabSearch_products'] em").text("(" + data.totalWithHidden + ")");
                }

                // show loading message while retrieving a new page from the WebAPI
                if (currentPage > 0) {
                    isLoadingVisible(false);
                }

                // foundation reflow
                $(document).foundation();

            },
            error: function (error) {
                $("#performSearchErrorMessage").html("<span class='alert-box'>We&apos;re sorry, but it seems we are having difficulty displaying this page. Please refresh or try again.</span>");
            },
            complete: function (complete) {
                $('.main-content', parent.document).spin(false);
                if (searchType === 'subcategory') {
                    $('#subCategorySearch').spin(false);
                } else if (searchType === 'keyword') {
                    $('.searchContent').css('position', 'relative').spin(false);
                }
                firstSearch = false;
                if (localStorage.getItem("categoryScroll")) {
                    bazaarVoiceRefresh();
                    setTimeout(function () {
                        $(document).scrollTop(localStorage.getItem("categoryScroll"));
                        localStorage.removeItem("categoryScroll");
                    }, 1000);
                }
            }
        });
        return true;
    }

    // uses jQuery to load the quick view modal with the selected product's quick view page
    var openQuickView = function (data) {
        $("#quickViewPopUp").html("");
        $("#quickViewPopUp").load("/AjaxPages/ProductLightBox.aspx?prd=" + data.id);
    };

    // generate id that will work with foundation accordion
    var getPanelFacetId = function (index) {
        return "panelFacet" + index.toString();
    };

    // generate href that will work with foundation accordion
    var getPanelFacetHref = function (index) {
        return "#panelFacet" + index.toString();
    };

    // perform search and close the mobile refiner control
    var mobilePerformSearch = function () {
        clearAndSearch();
        $("#lightBoxNarrowByProducts").foundation('reveal', 'close');
    };

    // perform search if paging is enabled and close mobile refiner control.
    // if paging is not enabled, a search does not need to be done since the sort
    // is applied on the client side without having to do a new search.
    var mobileSortByClose = function () {
        if (pagingEnabled) {
            clearAndSearch();
        }
        $("#lightBoxSortResultsProducts").foundation('reveal', 'close');
    };

    // actions to perform anytime a change is made to the thumbnails being shown
    var thumbnailsRenderUpdate = function (element, data) {
        var $currentContainerDescription = $(element).find(".containerDescription");
        var currentDescHeight = $currentContainerDescription.height() + bvSizeConst;
        $currentContainerDescription.height(globalMaxDescHeight);
        var $currentImg;
        var currentImgHeight;

        //adjust product boxes if necessary
        if (currentDescHeight > globalMaxDescHeight) {
            globalMaxDescHeight = currentDescHeight;
            adjustProductDescription("#resultsContainer_products .prodGridBox .pricing-table");
        }

        $(element).find(".productImage img")
            .on("load.adjustThumbHeights", function () {
                $currentImg = $(this);
                $currentImg.addClass("loaded");
                currentImgHeight = $currentImg.height();
                //if (currentImgHeight > 0 && currentImgHeight < globalMinThumbHeight) {
                if (currentImgHeight > 30 && currentImgHeight < globalMinThumbHeight) {
                    globalMinThumbHeight = currentImgHeight;
                    adjustCategoryProductBoxImages();
                } else {
                    $currentImg.closest(".productImage").css("max-height", globalMinThumbHeight);
                }
            })
            .on("mouseover", function () {
                $(this).off("load.adjustThumbHeights");
            });

        if (this.foreach()[this.foreach().length - 1] === data) {
            //make bazaarVoice call with new products loaded into grid
            if (bazaarVoiceEnabled) {
                var bvIdCollection = {};
                var currentForEachLength = this.foreach().length;
                var startIndex = currentForEachLength - productsPerPage > 0 ? currentForEachLength - productsPerPage : 0;
                var slicedArray = this.foreach().slice(startIndex, currentForEachLength);

                slicedArray.forEach(function (product) {
                    bvIdCollection[product.externalId.toLowerCase()] = { url: product.url.substring(0, product.url.length - 1) + '#BVRRContainer' };
                });

                var keys = bvIdCollection;

                if (startIndex == 0) {
                    if (typeof newestProductsBvSource !== "undefined" && Object.keys(newestProductsBvSource).length > 0) {
                        for (var attribute in newestProductsBvSource) { keys[attribute] = newestProductsBvSource[attribute]; }
                    }
                }

                if (Object.keys(keys).length > 0) {
                    $BV.ui('rr', 'inline_ratings', {
                        productIds: keys,
                        containerPrefix: 'BVRRInlineRating'
                    });
                }

                if (startIndex == 0) {
                    adjustProductDescription(".thumb-carousel .prodGridBox .pricing-table");
                }
            }
        }
    };

    // set the check price modal observables and open it
    var openCheckPriceModal = function (data) {
        if (data.imageUrlSmall != undefined) {
            checkPriceModalImage(data.imageUrlSmall);
            checkPriceModalDisplayName(data.displayName);
            isCheckPriceModalData(true);
        }
        else {
            isCheckPriceModalData(false);
        }
        $('#CheckPriceModal').foundation('reveal', 'open');
    };

    // set the zip code and affiliation id cookies and observables and perform
    // a new search with the affiliation id
    var CheckPrices = function () {
        zipCode(checkPriceModalZipCode());
        currentPage = 0;
        displayCount(productsPerPage);

        setZipCodeCookie(zipCode());

        $.ajax({
            url: '/api/affiliations/zip/' + zipCode(),
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                setCookie("AffiliationId", data, cookieExpirationDays);
                affiliationId(data);
                clearAndSearch();
                $('#CheckPriceModal').foundation('reveal', 'close');
            }
        });
    };

    // reset affiliation id to 0
    var hideDeliveryZip = function () {
        affiliationId("0");
    };

    // updates displayCount() when triggered. performs search to get more results if necessary.
    // shownProducts() will be updated when it detects the update to displayCount().
    var infiniteScroll = function () {
        if (!isViewMoreVisible() && shownProducts().length < totalResultsCount()) {
            // set newCount to be number of shown products + number of products to show per page
            var newCount = shownProducts().length + productsPerPage;

            if (newCount <= productThumbnailResults().length) {
                // if productThumbnailResults() already contains the next products to display, update displayCount() to show them
                displayCount(newCount);

            } else if (productThumbnailResults().length === totalResultsCount() && newCount >= totalResultsCount()) {
                // if productThumbnailResults() already contains all the results, display the rest of the results
                displayCount(totalResultsCount);

            } else if (productThumbnailResults().length === ((currentPage + 1) * pageSize)) {
                // Get the next page of results from the WebAPI.

                // The condition to check the productThumbnailResults() length is to prevent the search from being
                // fired multiple times when the infiniteScroll event is triggered while a new page is being asynchronously
                // retrieved.
                currentPage += 1;
                performSearch(null);
            }
        }
    };

    $(window).bind("popstate", function (event) {
        if (event.state !== null) {
            firstSearch = false;
            var urlCurrent = location.pathname + location.search;
            urlCurrent = urlCurrent.replace(/&filter=.*(&?)/, '$1');
            if (window.history.state != null && window.history.state.filter != null) {
                if (getParameterByName("s").length) {
                    history.replaceState(window.history.state, null, location.pathname + "?s=" + getParameterByName("s") + "&filter=" + window.history.state.filter);
                } else {
                    history.replaceState(window.history.state, null, location.pathname + "?filter=" + window.history.state.filter);
                    performSearch(window.history.state);
                }
            }
        }
    });

    $('.prodGrid').on('click', 'a', function () {
        var currentItem = ko.contextFor(this);
        localStorage.setItem("categoryScroll", $(document).scrollTop());
        localStorage.setItem("categoryCount", currentItem.$root.displayCount());
        localStorage.setItem("categorySort", currentItem.$root.selectedSortByOption());
    });

    // sets AFM zip code cookie
    var setZipCodeCookie = function (zipcode) {
        var sitecoreCustomerServiceRelativeUrl = "/Services/SitecoreCustomerService.svc/";
        var methodName = "SetAfmZipCodeCookie";
        var data = {
            "zipcode": zipcode
        };

        $.ajax({
            url: "/Services/SitecoreCustomerService.svc/" + methodName,
            data: JSON.stringify(data),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                setCookie("ProductsNotAvailable", "", -1);
            }
        });
    }

    // closure to toggle rollover image and quick view button
    var thumbImageHover = (function () {
        if (Modernizr.touch) {
            return false;
        }

        var toggle = true;
        return function (data, event) {
            var $currentTarget = $(event.currentTarget);
            var currentImgSource = $currentTarget.find(".thumbnailImage").attr("src");
            var notFoundImgSource = AFHS.Search.productImgNotFoundUrl;
            if (toggle) {
                if (data.imageUrlSmall && data.imageUrlSmall.length > 0) {
                    if (currentImgSource != notFoundImgSource) {
                        $currentTarget.find(".thumbnailImage").attr("src", data.imageUrlSmall);
                    }
                }
                $currentTarget.find('.quickView').css('display', 'block');
                toggle = false;
            } else {
                if (data.rolloverImageUrl && data.rolloverImageUrl.length > 0) {
                    if (currentImgSource != notFoundImgSource) {
                        $currentTarget.find(".thumbnailImage").attr("src", data.rolloverImageUrl);
                    }
                }
                $currentTarget.find('.quickView').css('display', 'none');
                toggle = true;
            }
        }
    })();

    var isOnSale = function (data) {
        if (data.salePrice && data.regularPrice && data.salePrice < data.regularPrice) {
            return true;
        }

        return false;
    };

    // show product price if it is not a home delivery item or if an affiliation id is set 
    // or if a price exists for the default affiliation
    var showProductPrice = function (data) {
        return ko.computed(function () {
            return (data.isEcommOwned || isDeliveryZipShown() || data.regularPrice > 0);
        });
    };

    var isSelectedColor = function (data, parent) {
        if (parent && parent.colorDescription && data && data.color) {
            if (parent.colorDescription.toLowerCase() === data.color.toLowerCase()) {
                return true;
            }
        }
        return false;
    };

    function bazaarVoiceRefresh() {
        if (!bazaarVoiceEnabled) {
            return;
        }

        var bvIdCollection = {};

        var slicedArray;
        if (productThumbnailResults().length > displayCount()) {
            slicedArray = productThumbnailResults.slice(0, displayCount());
        } else {
            slicedArray = productThumbnailResults.slice(0, productThumbnailResults().length);
        }

        slicedArray.forEach(function (product) {
            bvIdCollection[product.externalId.toLowerCase()] = { url: product.url.substring(0, product.url.length - 1) + '#BVRRContainer' };
        });

        if (Object.keys(bvIdCollection).length > 0) {
            $BV.ui('rr', 'inline_ratings', {
                productIds: bvIdCollection,
                containerPrefix: 'BVRRInlineRating'
            });
        }

        bvIndex = displayCount();
    }

    // sort functions
    var applySort = function () {
        if (pagingEnabled) {
            clearAndSearch();
        } else {
            sortProductThumbnails();
            var inputData = null;
            var sortBy = vm.selectedSortByOption();
            var filter = filterString();

            if (firstSearch === true && getParameterByName("filter").length) {
                filter = getParameterByName("filter");
            }

            var queryString = parseQueryString();

            if (filter.length) {
                queryString = queryString === "" ? "" : "&" + queryString;
                if (getParameterByName("s").length) {
                    history.replaceState(inputData, null, location.pathname + "?s=" + getParameterByName("s") + "&filter=" + filter + "&sortby=" + sortBy + queryString);
                }
                else {
                    history.replaceState(inputData, null, location.pathname + "?filter=" + filter + "&sortby=" + sortBy + queryString);
                }
            } else {
                queryString = queryString === "" ? "" : "&" + queryString;
                history.replaceState(inputData, null, location.pathname + "?sortby=" + sortBy + queryString);
            }
        }

        if (bvIndex > 0) {
            bvIndex = 0;
            bazaarVoiceRefresh();
        }

        return true;
    };

    var mobileApplySort = function () {
        if (!pagingEnabled) {
            sortProductThumbnails();
        }

        if (bvIndex > 0) {
            bvIndex = 0;

            bazaarVoiceRefresh();
        }

        return true;
    };

    var sortProductThumbnails = function () {
        var sort = vm.selectedSortByOption();

        if (sort === "lowtohigh") {
            productThumbnailResults.sort(sortByPriceLowToHigh);
        } else if (sort === "hightolow") {
            productThumbnailResults.sort(sortByPriceHighToLow);
        } else if (sort === "featured") {
            productThumbnailResults.sort(sortByFeatured);
        } else if (sort === "az") {
            productThumbnailResults.sort(sortByAlpha);
        } else if (sort === "onsale") {
            productThumbnailResults.sort(sortByOnSale);
        } else if (sort === "bestsellers") {
            productThumbnailResults.sort(sortByBestSeller);
        } else if (sort === "newest") {
            productThumbnailResults.sort(sortByNewest);
        }
    };

    var displayRankSort = function (left, right) {
        if ((left.displayRank <= 0 && right.displayRank <= 0) || left.displayRank === 0 || right.displayRank === 0) {
            // sort by descending displayRank
            return left.displayRank === right.displayRank ? 0 : (left.displayRank < right.displayRank ? 1 : -1);
        } else {
            // sort by ascending displayRank
            return left.displayRank === right.displayRank ? 0 : (left.displayRank > right.displayRank ? 1 : -1);
        }
    }

    var sortByFeatured = function (left, right) {
        return displayRankSort(left, right);
    };

    var sortByPriceLowToHigh = function (left, right) {
        var leftPrice = 0;
        var rightPrice = 0;

        if (left.isSoldInStoresOnly && !right.isSoldInStoresOnly) {
            return 1;
        } else if (!left.isSoldInStoresOnly && right.isSoldInStoresOnly) {
            return -1;
        }

        if (left.salePrice < left.regularPrice) {
            leftPrice = left.salePrice;
        } else {
            leftPrice = left.regularPrice;
        }

        if (right.salePrice < right.regularPrice) {
            rightPrice = right.salePrice;
        } else {
            rightPrice = right.regularPrice;
        }

        return leftPrice === rightPrice ? sortByFeatured(left, right) : (leftPrice < rightPrice ? -1 : 1);
    };

    var sortByPriceHighToLow = function (left, right) {
        var leftPrice = 0;
        var rightPrice = 0;

        if (left.salePrice < left.regularPrice) {
            leftPrice = left.salePrice;
        } else {
            leftPrice = left.regularPrice;
        }

        if (right.salePrice < right.regularPrice) {
            rightPrice = right.salePrice;
        } else {
            rightPrice = right.regularPrice;
        }

        return leftPrice === rightPrice ? sortByFeatured(left, right) : (leftPrice > rightPrice ? -1 : 1);
    };

    var sortByAlpha = function (left, right) {
        return left.displayName === right.displayName ? sortByFeatured(left, right) : (left.displayName < right.displayName ? -1 : 1);
    };

    var sortByOnSale = function (left, right) {
        var leftOnSale = false;
        var rightOnSale = false;

        // determine if on sale
        if (left.salePrice < left.regularPrice) {
            leftOnSale = true;
        }

        if (right.salePrice < right.regularPrice) {
            rightOnSale = true;
        }

        // sale items have higher sort priority
        if (!leftOnSale && rightOnSale) {
            return 1;
        } else if (leftOnSale && !rightOnSale) {
            return -1;
        }

        // if both are on sale or both not on sale, sort by default
        return sortByFeatured(left, right);
    };

    var sortByBestSeller = function (left, right) {
        if (!left.isBestSeller && right.isBestSeller) {
            return 1;
        } else if (left.isBestSeller && !right.isBestSeller) {
            return -1;
        }

        // if both are on best sellers or both not best sellers, sort by default
        return sortByFeatured(left, right);
    };

    var sortByNewest = function (left, right) {
        //sort by isNew flag
        if (!left.isNew && right.isNew) {
            return 1;
        } else if (left.isNew && !right.isNew) {
            return -1;
        }

        // if both are new or both not new, sort by default
        return sortByFeatured(left, right);
    };

    if (searchType === 'keyword') {
        pagingEnabled = true;
    }

    var affiliationIdCookieValue = getCookie("AffiliationId");

    if (affiliationIdCookieValue) {
        affiliationId(parseFloat(affiliationIdCookieValue));
    };

    if (selectedSortByOption() === "featured" && firstSearch === true) {
        performSearch(null);
    }

    return {
        openQuickView: openQuickView,
        sortByOptions: sortByOptions,
        selectedSortByOption: selectedSortByOption,
        applySort: applySort,
        shownProducts: shownProducts,
        thumbnailsRenderUpdate: thumbnailsRenderUpdate,
        isViewMoreVisible: isViewMoreVisible,
        viewAllProducts: viewAllProducts,
        displayCount: displayCount,
        facetCategories: facetCategories,
        filterSelectClick: filterSelectClick,
        performSearch: performSearch,
        clearAllFilters: clearAllFilters,
        mobileFilterSelectClick: mobileFilterSelectClick,
        mobilePerformSearch: mobilePerformSearch,
        mobileSortByClose: mobileSortByClose,
        mobileApplySort: mobileApplySort,
        getPanelFacetId: getPanelFacetId,
        getPanelFacetHref: getPanelFacetHref,
        numberOfShownProducts: numberOfShownProducts,
        zipCode: zipCode,
        openCheckPriceModal: openCheckPriceModal,
        checkPriceModalZipCode: checkPriceModalZipCode,
        checkPriceModalImage: checkPriceModalImage,
        checkPriceModalDisplayName: checkPriceModalDisplayName,
        CheckPrices: CheckPrices,
        isDeliveryZipShown: isDeliveryZipShown,
        hideDeliveryZip: hideDeliveryZip,
        totalResultsCount: totalResultsCount,
        infiniteScroll: infiniteScroll,
        isLoadingVisible: isLoadingVisible,
        clearAndSearch: clearAndSearch,
        isResultsCountInfoVisible: isResultsCountInfoVisible,
        isNoResultsMessageVisible: isNoResultsMessageVisible,
        keywordSearchTerm: keywordSearchTerm,
        thumbImageHover: thumbImageHover,
        showProductPrice: showProductPrice,
        isSelectedColor: isSelectedColor,
        isCheckPriceModalData: isCheckPriceModalData,
        totalWithHidden: totalWithHidden,
        isOnSale: isOnSale,
        bazaarVoiceRefresh: bazaarVoiceRefresh
    };
};

$(document).ready(function () {
    // Custom binding handlers

    // show 5 color boxes and then "(more)" if more than 5 colors exist
    ko.bindingHandlers.colorSwatchDisplay = {
        init: function (element, valueAccessor, allBindingsAccessor, data, context) {
            var zeroBasedIndex = valueAccessor();
            $currentDiv = $(element);

            if (zeroBasedIndex < 5) {
                $currentDiv.find(".plus").hide();
            } else if (zeroBasedIndex == 5) {
                $currentDiv.find(".aColor").hide();
            } else {
                $currentDiv.find(".aColor").hide();
                $currentDiv.find(".plus").hide();
            }
        }
    };

    ko.bindingHandlers.ellipseOutput = {
        update: function (element, valueAccessor) {
            // access ellipseOutput's value, this will contain the desired line count  
            var linesToDisplay = valueAccessor(); // edit: thanks Patrick Steele for update
            $clamp(element, { clamp: linesToDisplay });
        }
    };

    AddKeyPressEvents();
    CancelBackspaceEvents();

    var items = location.search.substr(1).split("&");
    // Create ViewModel object for KnockoutJS and bind to UI
    vm = new searchResultsViewModel();
    var tmp = [];

    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === "sortby") {
            vm.selectedSortByOption = ko.observable(tmp[1]);
            selectedSortByOption = ko.observable(tmp[1]);
        }
    }

    ko.applyBindings(vm);

    // Wire-up responsive images
    $('img[data-src]').responsiveImage();

    // Wire-up foundation elements
    $(document).foundation();

});

var ajaxLoading = true;

$(document)
    // ADD keypress detection for enter key on check price modals
    .on("open.fndtn", ".reveal-modal[id*=CheckPriceModal]", function () {
        var ta = $(this),
            bttn = "span[data-bind*=CheckPrice]";
        ta.on("keypress.triggerPrice", function (evt) {
            if (evt.keyCode == 13) {
                ta.find("input").trigger("blur");
                ta.find(bttn).trigger("click");
            }
        });
    })
    //REMOVE keypress detection or enter key on check price modals
    .on("closed.fndtn", ".reveal-modal[id*=CheckPriceModal]", function () {
        $(this).off("keypress.triggerPrice");
    })

    .on("ajaxComplete", function () {
        // Show SEO Cloud Description
        if ($(".subcategory-seo-description").length > 0)
            $(".subcategory-seo-description > .width74").show(500);
        // Category Facets: show all / show less
        $(".show-all-less-cats p").on("click", function () {
            $(".show-all-less-cats p").removeClass("cats-hide");
            $(this).addClass("cats-hide");
            $(".accordion.subCategory .categoryFacetCont li:nth-child(n+11)").attr("style", $(this).hasClass("show-all-cats") ? "display: block" : "");
        });
        // Infinite scroll - call the ViewModel infinite scroll function when scroll reaches bottom of results

        $(window).on('scroll', Foundation.utils.throttle(function (e) {
            if ($(window).scrollTop() + $(window).height() > $("#resultsContainer_products").offset().top + $("#resultsContainer_products").height() + 100) {
                vm.infiniteScroll();
            }
        }, 10));

    });
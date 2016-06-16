function initializeQuickview() {
    var URLString;
    var qvImgObject;

    $('a.quickviewEnabled').each(function () {

        $(this).wrap('<span class="quickViewButtonWrap"></span>').removeClass('quickviewEnabled').parent('span.quickViewButtonWrap').prepend('<a href="javascript:void(0);" title="Open Quick View" class="quickviewButton button" data-btntype="quickview" data-btnname="searchResults_quickview" onmousedown="openQuickViewWithURL(\'' + $.trim($(this).attr('href')) + '\');"><span></span></a>');

        qvImgObject = $('img', this);
    });

    $('.quickViewButtonWrap').unbind();
    $('a.quickviewEnabled').wrap('<span class="quickViewButtonWrap"></span>').removeClass('quickviewEnabled').parent('span.quickViewButtonWrap').each(function () {
        qvImgObject = $('img', this);
        URLString = $.trim($(this).attr('href'));
        alert(URLString);
        $(this).prepend('<a href="javascript:void(0);" title="Open Quick View" class="quickviewButton button" data-btntype="quickview" data-btnname="searchResults_quickview" onmousedown="openQuickViewWithURL(\'' + URLString + '\');"><span></span></a>');
    });

    if (isTouchDevice() && $('.quickViewButtonWrap').length > 0) {

        $('.quickViewButtonWrap').css('display', 'block');
        $('.quickViewButtonWrap a img').css('margin-bottom', '79px');

        var fullURL = window.location.href;

        if (fullURL.search("finalscore") >= 0 || fullURL.search("final-score") >= 0) {
            $('.quickviewButton').css('cssText', 'top: 120px; margin: 0 !important; display: block;');
            $('.block-a').css('height', 'auto');
            $('.block-a .quickViewButtonWrap a img').css('margin-bottom', '55px');
        } else if (fullURL.search("ccs") >= 0) {
            $('.quickviewButton').css('cssText', 'top: 220px; margin: 0 !important; display: block;');
        } else {
            $('.quickviewButton').css('cssText', 'top: 196px; margin: 0 !important; display: block;');
        }

    } else {
        $('span.quickViewButtonWrap').hover(function () {
            $(this).children('.quickviewButton').css({
                'width': qvImgObject.width(),
                'margin-top': qvImgObject.height() - global_quickviewButtonImage.height - global_quickViewButtonBottomMargin,
                'display': 'inline'
            });
        }, function () {
            $(this).children('.quickviewButton').css('display', 'none');
        });
    }

}

function openQuickView(queryString) {
    closeQuickView();

    if ($.browser.msie && $.browser.version == "6.0")
        $("select").css("visibility", "hidden");

    //Inject quick view wrapper and content framework.
    var tags = '<div id="quickviewContentBackground"></div><div id="qv-wrapper"><div id="quickview"><div id="quickview_top"><div id="quickview_topRight"></div></div><div id="quickview_middle"><div id="quickview_middleRight"><div id="quickviewLoading"></div><div id="quickviewContent"></div><div style="clear: both"></div></div></div><div id="quickview_bottom"><div id="quickview_bottomRight"><a href="javascript:closeQuickView()" title="Close Quick View"><span class="red">x</span> ' + RBM.quickView.button.close + '</a></div></div></div></div>';
    $("body").prepend(tags);

    //Display loading graphic
    $("#quickviewLoading").css("display", "block");
    $("#qv-wrapper").css({ width: global_quickViewWidth });
    $("#quickview").css({ width: global_quickViewWidth });

    $("#quickviewContent").load(global_quickViewPDPTemplatePath,
		queryString,
		function (responseText, textStatus, XMLHttpRequest) {
		    $("#quickviewLoading").css("display", "none");
		    if (textStatus != "success") {
		        $("#quickview").remove();
		        // for debugging
		        $("body").html(responseText);
		        alert("There was problem loading Quick View for this product. Please try back again later.");
		    }
		    else {
		        $("#quickview").animate({ top: '50%' }, function () {
		            if (typeof (quickviewCallbackFunction) == "function")
		                quickviewCallbackFunction();
		            $('#quickview_product_form').on('submit', function () {
		                if (isValidQVA2C) {
		                    $('#quickview_middleRight').prepend('<div id="qv_atc_loading" style="display: inline;position: relative;top: 225px;left: 225px;"><img src="http://footaction.uat.msp.guidance.com/images/fa/quickview/quickview_loader.gif"></div>');
		                    $('#qv_atc_button').prop("disabled", true);
		                }
		                
		            });
		            $('#quickview').click(stopPropagationHandler);
		            $('body').on('click touchend', '#quickviewContentBackground', function () {
		                closeQuickView();
		            });
		            //$("#qv_atc_button").on("QA_ADDTOCART_ERROR", function () { $('#qv_atc_loading').remove(); });
		        }
				);
		    }
		}
	);

    if (isTouchDevice()) {
        /* If we are on a touch device we want to set the positions to absolute to prevent odd behaviors */
        /* with form input elements inside other elements with fixed positioning. */
        $("#quickviewContentBackground").css({ margin: '0' });
        $("#qv-wrapper").css({ position: 'absolute', margin: '0' });
        $('#qv-wrapper').center();

        /* add window resize listener */
        $(window).on('resize', function () {
            $('#qv-wrapper').center();
        });

        /* prevent touchmove on mobile device */
        $('#quickviewContentBackground').on('touchmove', function (e) {
            e.preventDefault();
        });
    }
}

jQuery.fn.center = function () {
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
};

function closeQuickView() {
    if ($.browser.msie && $.browser.version == "6.0")
        $("select").css("visibility", "visible");

    if ((typeof (BORISEnabled) != "undefined") && BORISEnabled) {
        if (typeof (modal) != "undefined" && $.modal.data.isOpen) {
            return;
        }
    }

    $('#quickviewContentBackground, #qv-wrapper').remove();

    if (isTouchDevice()) {
        $(window).off('resize');
    }

    quickViewUnbindBackgroundClose();
}
var formOverlay = (function () {

    var state = { isOpen: false, isUAT: window.location.host.indexOf('uat.msp') > -1, formCreated: false};
    var config;

    function init(url) {
        getConfiguration(url).done(setupAutoShow, setupListeners);
    }

    function getConfiguration (url) {
        return $.getJSON(url).done(function (data) {
            // Assign returned configuration to a global config object and finish configuration
            config = data;
            config.formHost = window.location.protocol + '//ebm.cheetahmail.com';

        }).fail(function (err) {
            console.error("Failed to retrieve Email Overlay configuration:", err);
        });
    }

    function setupAutoShow () {
        // If autoShow is enabled and the cookie doesn't already exist
        if (config.autoShow) {
            setTimeout(function () {
                if (!getCookie(config.cookieName)) {
                    openFormOverlay();
                    setCookie(config.cookieName, 1, config.cookieExpirationDays);
                }
            }, config.delaySeconds * 1000);
        }
    }

    function buildForm() {
        var formUrl = config.formHost + '/r/regf2?a=0&aid=' + config.aid + '&n=' + config.n;
        var cd0 = state.isUAT ? '?cd=0': '';
        var uat = state.isUAT ? 'uat/' : '';

        $('<div id="email_form_overlay_screen" style="display: none;" data-action="close-overlay">'
            + '<div id="email_form_overlay">'
                + '<iframe src="' + formUrl + '" frameborder="0"></iframe>'
            + '</div>'
        + '</div>').appendTo('body');
        //console.log('email overlay html added');

        // Grab the style sheet for the overlay
        $('<link rel="stylesheet" type="text/css" href="/ns/common/emailsignup/css/' + uat + 'form-overlay.css' + cd0 + '">').appendTo('head');

        // Let the form's scripts know the host origin of this parent so we can communicate.
        state.$overlayScreen = $('#email_form_overlay_screen');
        state.$overlay = state.$overlayScreen.find('#email_form_overlay');
        state.$overlay.find('iframe').on('load', function() {
            //console.log('email iframe loaded');
            state.formCreated = true;
            state.childWindow = this.contentWindow;
            tellChild('host');
            if (state.isOpen) {
                tellChild('get-height');
                tellChild('focus');
                $(window).scrollTop(0);
                state.$overlayScreen.fadeIn();
            }
        });
        state.childWindow = state.$overlay.find('iframe')[0].contentWindow;
    }

    function setupListeners () {
        $('body').on('click', config.triggerSelector, openFormOverlay);
        $('body').on('click', '[data-action="close-overlay"]', closeFormOverlay);
        $('body').on('click', '#email_form_overlay', function(e) {
            e.stopPropagation();
            return false;
        });

        if (window.addEventListener){
            addEventListener("message", delegateMessage, false);
        } else {
            attachEvent("onmessage", delegateMessage);
        }
    }

    function delegateMessage (event) {
        if (typeof event.data === "object") return;
        if (event.data === 'close-overlay') {
            closeFormOverlay();
        } else if (event.data.indexOf('frame-height:') === 0 ) {
            // get the value after the colon
            var frameHeight = event.data.split(':')[1];
            resizeOverlay(frameHeight);
        } else if (event.data === "scrollUp") {
            $(window).scrollTop(0);
        } else if (event.data === "submit") {
            convert('Signup', 2);
        }
    }

    function resizeOverlay (height) {
        var height = height;

        state.$overlay.css('height', height + 'px');
        state.$overlayScreen.css('height', $(document).height() + 'px');
    }

    function openFormOverlay (e) {
        if (!state.isOpen) {
            if (!state.formCreated) {
                buildForm();
            }
            
            state.isOpen = true;
            if (window.mobileMenu && window.mobileMenu.hide) {
                window.mobileMenu.hide();
            }
            if (state.formCreated) {
                state.$overlayScreen.fadeIn('fast');
            }
            $(window).scrollTop(0);
            /*tellChild('get-height');
            tellChild('focus');*/
            convert('Signup', 1);
            if (e && typeof e.preventDefault === 'function') {
                e.preventDefault(); // don't follow any links
            }
        }
    }

    function closeFormOverlay () {
        if (state.isOpen) {
            state.isOpen = false;
            state.$overlayScreen.fadeOut('fast');
            convert('Close', 1);
        }
    }

    function tellChild (message, retryCount) {
        state.childWindow.postMessage(message, config.formHost);
    }

    function convert (type, value) {
        if (typeof window.cmCreateConversionEventTag === "function") {
            cmCreateConversionEventTag(type, value, "Email Overlay");
        }
    }

    function setCookie (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/;domain=" + document.location.hostname);
    }

    function getCookie (c_name) {
        if (document.cookie.length>0) {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1) {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return null;
    }

    return {
        init: init,
        show: openFormOverlay,
        hide: closeFormOverlay
    };
})();
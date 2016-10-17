(function() {

var geolocationURL = '//www.footlocker.com/locator/locations?action=getGeoLocation&cd=0';
var defaultCountry = 'CA';
var defaultRegion = 'QC';
var findMe = {
	getLocation: function(){
		var ajaxGetLocationData = $.ajax({
			url:geolocationURL,
			type:'get',
			dataType:'json',
			async:false
		});
		ajaxGetLocationData.done(function(data){

			var $modalTitleText = $('.modal_title_text'),
				$modalLangText = $('.modal_lang_text');

			if(data.region_code === defaultRegion){
				$modalTitleText.addClass('lang_fr');
				$modalLangText.append('English');
				$('.french_content').fadeIn();
			} else {
				$modalTitleText.addClass('lang_en');
				$modalLangText.append('Francais');
				$('.english_content').fadeIn();
			}

			$modalTitleText.fadeIn();

			if(data.country_code === defaultCountry){
				//fire modal here
				setTimeout(function(){
					findMe.openModal();
				}, 500);
			}

		});
		ajaxGetLocationData.fail(function(e){
			console.log('Something went wrong, check it out');
			console.log(e);
		});
	},

	switchLanguage: function() {
		$('.modal_title_text a').on('click',function(){
			findMe.swapContent();
		});
	},

	swapContent:function(langClass){

		if($('.modal_title_text').hasClass('lang_en')){
			//swap divs
			$('.modal_lang_text').empty().append('English');
			$('.modal_title_text').removeClass('lang_en').addClass('lang_fr');
			$('.english_content').fadeOut();
			setTimeout(function(){
				$('.french_content').fadeIn();
			}, 500);
		
		} else {
			$('.modal_lang_text').empty().append('Francais');
			$('.modal_title_text').removeClass('lang_fr').addClass('lang_en');
			$('.french_content').fadeOut();
			setTimeout(function(){
				$('.english_content').fadeIn();
			}, 500);
		}
	},

	openModal: function() {
		var $modalScreen = $('#modal_screen');
		$modalScreen.fadeIn(500);
		//findMe.createCookie('visits', 1, 365);

		//Detect if iOS, if so make it so the flyin screen is absolutely positioned at the top of the page, scroll to the top of the page, and disable scrolling.
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$(window).scrollTop();
			$('html, body').css({
				'overflow': 'hidden',
				'height': '100%'
			});
		}
	},

	closeModal: function() {
		var $modalScreen = $('#modal_screen');
		$('.close_it').on('click',function(){
			$modalScreen.fadeOut(500);
			cmCreateManualLinkClickTag(window.location.hostname + '/?cm_sp=' + $(this).attr('data-modaltrack'));
			//console.log($(this).attr('data-modaltrack'));
			//findMe.createCookie('visits', 1, 30);
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
				$(window).scrollTop();
				$('html, body').css({
					'overflow': 'visible',
					'height': 'auto'
				});
			}
		});
	},

	redirectTracking: function() {
		$('.modal_button_container a.button').on('click', function(){
			cmCreateManualLinkClickTag(window.location.hostname + '/?cm_sp=' + $(this).attr('data-modaltrack'));
		})
	},

	dontClose: function(){
		 //Don't close when popup is clicked
		$('#ip_detection_modal').on('click',function(e){
			e.stopPropagation();
		});		
	},

	createCookie: function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	},

	readCookie: function (name) {
        var nameEQ = escape(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
        }
        return null;
    }
}

$(document).ready(function(){
	var hostNameSplit = window.location.hostname.split('.'),
		fullSiteDetect = 'www',
		mobileSiteDetect = 'm';
		
	if(hostNameSplit[0] === fullSiteDetect){
		var pathNameSplit = window.location.pathname.split("/");
		if(pathNameSplit[1] !== 'shoppingcart' && pathNameSplit[1] !== 'checkout'){
			if(findMe.readCookie('visits') !== null){
				if(findMe.readCookie('visits') >= 1){
					createCookie('visits', 2, 30);
				}
				//console.log('do not set the cookie');
			} else {
				findMe.getLocation();
				createCookie('visits', 1, 30);
				//console.log('set the COOKIE');
			}
		}
	} else {
		var mobilePathNameSplit = getParameterByName('uri');
		if(mobilePathNameSplit !== 'cart' && mobilePathNameSplit !== 'checkout'){
			if(findMe.readCookie('visits') !== null){
				if(findMe.readCookie('visits') >= 1){
					createCookie('visits', 2, 30);
				}
				
			} else {
				findMe.getLocation();
				createCookie('visits', 1, 30);
			}
		} else {
			//console.log('do not set the cookie');
		}
	}

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
		

	findMe.closeModal();
	findMe.dontClose();
	findMe.switchLanguage();
	findMe.redirectTracking();
});

})();



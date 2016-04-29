




		usi_alert = function(msg) {}


// <script>
var usi_currentDate = "2016-04-29";
var usi_error_submits = 0;
function usi_stopError(usi_msg, usi_url, usi_linenumber) {
	if (usi_url.indexOf("upsellit.com") != -1 && usi_url.indexOf("err.jsp") == -1 && usi_error_submits < 5) {
		usi_error_submits++;
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_errorScript = document.createElement('script');
		USI_errorScript.type = 'text/javascript';
		USI_errorScript.src = 'https://www.upsellit.com/err.jsp?oops='+escape(usi_msg)+'-'+escape(usi_url)+'-'+escape(usi_linenumber);
		USI_headID.appendChild(USI_errorScript);
	}
	return true;
}
if (location.href.indexOf("usishowerrors") == -1) {
	window.onerror = usi_stopError;
}
USI_setSessionValue = function(name, value) {
	try {
		var usi_win = window.top || window;
		var usi_found = 0;
		var usi_allValues = usi_win.name.split(";");
		var usi_newValues = "";
		for (var i=0; i<usi_allValues.length;i++) {
			var usi_theValue = usi_allValues[i].split("=");
			if (usi_theValue.length == 2) {
				if (usi_theValue[0] == name) {
					usi_theValue[1] = value;
					usi_found = 1;
				}
				if (usi_theValue[1] != null) {
					usi_newValues += usi_theValue[0] + "=" + usi_theValue[1] + ";";
				}
			} else if (usi_allValues[i] != "") {
				usi_newValues += usi_allValues[i] + ";";
			}
		}
		if (usi_found == 0) {
			usi_newValues += name + "=" + value + ";";
		}
		usi_win.name = usi_newValues;
	} catch (e) {}
}
USI_getWindowNameValue = function(name) {
	try {
		var usi_win = window.top || window;
		var usi_allValues = usi_win.name.split(";");
		for (var i=0; i<usi_allValues.length;i++) {
			var usi_theValue = usi_allValues[i].split("=");
			if (usi_theValue.length == 2) {
				if (usi_theValue[0] == name) {
					return usi_theValue[1];
				}
			}
		}
	} catch (e) {}
	return null;
}
USI_createCookie = function(name,value,seconds) {
	if (name == "USI_Session" || typeof(usi_cookieless) === "undefined") {
		var date = new Date();
		date.setTime(date.getTime()+(seconds*1000));
		var expires = "; expires="+date.toGMTString();
		if (typeof(usi_parent_domain) != "undefined" && document.domain.indexOf(usi_parent_domain) != -1) {
			document.cookie = name+"="+value+expires+"; path=/;domain="+usi_parent_domain+";";
		} else {
			document.cookie = name+"="+value+expires+"; path=/;domain="+document.domain+";";
		}
	}
}
USI_readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
var USI_local_cache = {};
USI_getASession = function(name) {
	if (typeof(name) == "undefined") {
		name = "USI_Session";
	}
	if (typeof(USI_local_cache[name]) != "undefined") {
		return USI_local_cache[name];
	}
	var usi_win = window.top || window;
	var USI_Session = USI_readCookie(name);
	if (USI_Session == null || USI_Session == 'null' || USI_Session == '') {
		//Link followed cookie?
		USI_Session = USI_readCookie("USIDataHound");
		if (USI_Session != null) {
			USI_createCookie("USI_Session", USI_Session, 7*24*60*60);
		}
	}
	if (USI_Session == null || USI_Session == 'null' || USI_Session == '') {
		//fix for pre-variable stuff
		try {
			if (usi_win.name.indexOf("dh_") == 0) {
				usi_win.name = "USI_Session="+usi_win.name+";";
			}
			USI_Session = USI_getWindowNameValue(name);
		} catch (e) {}
	}
	if (USI_Session == null || USI_Session == 'null' || USI_Session == '') {
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 4;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		if (name == "USI_Session") {
			USI_Session = "dh_" + randomstring + "" + (new Date()).getTime();
			USI_createCookie("USI_Session", USI_Session, 7*24*60*60);
			USI_setSessionValue("USI_Session", USI_Session);
		} else {
			USI_Session = name + "_" + randomstring + "" + (new Date()).getTime();
			USI_createCookie(name, USI_Session, 7*24*60*60);
			USI_setSessionValue(name, USI_Session);
		}
	}
	USI_local_cache[name] = USI_Session;
	return USI_Session;
}
USI_deleteVariable = function(name) {
	USI_updateASession(name, null, -100);
}
USI_getSessionValue = function(name) {
	if (typeof(USI_local_cache[name]) != "undefined" && USI_local_cache[name] != null) {
		return USI_local_cache[name];
	}
	var usi_value = USI_readCookie(name);
	if (usi_value == null) {
		usi_value = USI_getWindowNameValue(name);
	}
	if (usi_value != null) {
		USI_updateASession(name, usi_value, 7*24*60*60);
		USI_local_cache[name] = usi_value;
	}
  if (usi_value == "null") return null;
	return usi_value;
}
USI_updateASession = function(name, value, exp_seconds) {
	try {
		value = value.replace(/(\r\n|\n|\r)/gm,"");
	} catch(e) {}
	USI_createCookie(name, value, exp_seconds);
	USI_setSessionValue(name, value);
	USI_local_cache[name] = value;
}


if (location.href.indexOf("usi_tester") != -1) {
	USI_updateASession("usi_tester", "1", 24 * 60 * 60);
}

function usi_getElementsByClassName(usi_node, usi_classname) {
	var usi_a = [];
	var usi_re = new RegExp('(^| )' + usi_classname + '( |$)');
	var usi_els = usi_node.getElementsByTagName("*");
	for (var usi_i = 0, usi_j = usi_els.length; usi_i < usi_j; usi_i++)
		if (usi_re.test(usi_els[usi_i].className)) usi_a.push(usi_els[usi_i]);
	return usi_a;
}

function usi_gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

if (usi_gup("usi_couponcode") != "") {
	USI_updateASession("usi_couponcode", usi_gup("usi_couponcode"), 24 * 60 * 60);
}
if (location.href.indexOf("/cart/viewcart") != -1 && USI_getSessionValue("usi_couponcode") != null && USI_getSessionValue("usi_couponcode") != "0") {
	AFM.Ecommerce.Controls.ShoppingCartService.AddOrRemovePromotion(false, USI_getSessionValue("usi_couponcode"), true, 2);
	USI_updateASession("usi_couponcode", "0", 24 * 60 * 60);
}
if (location.href.indexOf("/cart/orderconfirmation?confirmationId=") != -1) {
	var USI_orderID = usi_gup("confirmationId");
	var USI_orderAmt = '';
	var USI_headID = document.getElementsByTagName("head")[0];
	var USI_dynScript = document.createElement("script");
	USI_dynScript.setAttribute('type', 'text/javascript');
	USI_dynScript.src = 'http' + (document.location.protocol == 'https:' ? 's://www' : '://www') + '.upsellit.com/upsellitReporting.jsp?command=REPORT&siteID=11835&productID=77&position=1&orderID=' + escape(USI_orderID) + '&orderAmt=' + escape(USI_orderAmt);
	USI_headID.appendChild(USI_dynScript);
	var USI_dynScript2 = document.createElement("script");
	USI_dynScript2.setAttribute('type', 'text/javascript');
	USI_dynScript2.src = 'http' + (document.location.protocol == 'https:' ? 's://www' : '://www') + '.upsellit.com/hound/sale.jsp?orderID=' + escape(USI_orderID) + '&orderAmt=' + escape(USI_orderAmt);
	USI_headID.appendChild(USI_dynScript2);
} else {
	var usi_cacheBuster = "";//&rand=" + Math.random();

	function usiLoadDisplay(usiQS, usiSiteID, usiKey) {
		usiKey = usiKey || "";
		var usiDocHead = document.getElementsByTagName('head')[0];
		var usiLaunchScript = document.createElement("script");
		if (top.location != location) usiDocHead = parent.document.getElementsByTagName('head')[0];
		usiLaunchScript.type = "text/javascript";
		usiLaunchScript.src = ("https://www.upsellit.com/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_cacheBuster);
		usiDocHead.appendChild(usiLaunchScript);
		usiLoadDisplay = function() {
			usiLog("Display already loaded")
		};
	}
	var usi_isMobile = (/iphone|ipod|ipad|android|blackberry|iemobile/i).test(navigator.userAgent.toLowerCase());
	var usi_called = 0;
	var usi_current_viewers = 0;
	var usi_append = "";
	if (Math.random() > .5) usi_append = "less_expensive=1&";
	function usi_callBack(usi_pid_viewers) {
		if (typeof(usi_product3) != "undefined") {
			var usi_keys = "";
			if (location.href.indexOf("/cart/viewcart") != -1) {
				usi_keys = "cart";
			} else {
				if (usi_append == "") {
					usi_keys = "like";
				} else {
					usi_keys = "4less";
				}
			}
			if (USI_getSessionValue("usi_couponcode") != "ASHLEY15") usiLoadDisplay("262204239209236281278290311279330342308339289304338305306330272", "13448", usi_keys);
		}
	}
	if (USI_getSessionValue("usi_couponcode") != "0") {
		usi_loadBoostBars = function() {
			if (!usi_isMobile) {
				usiLoadDisplay("227231240271223280292344322274305322344342275314306309309296329", "13676");
			} else {
				usiLoadDisplay("223204259225239291337289296323273278308310312325334310328332325", "13619");
			}
		}
		usi_validateEmail = function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		if (1==1 || USI_getSessionValue("usi_tester") != null) {
			if (USI_readCookie("usi_banner_closed") != "closed") {
				if (document.getElementById("ctl13_TbxEmail") == null) {
					usi_loadBoostBars();
				} else {
					usi_checkForUnassistedSignup = function() {
						if (document.getElementById("signUpSuccess") != null && document.getElementById("signUpSuccess").style.visibility == "visible" && document.getElementById("signUpTxtEmail") != null && document.getElementById("signUpTxtEmail").value.indexOf("@") != -1) {
							if (usi_validateEmail(document.getElementById("signUpTxtEmail").value)) {
								clearInterval(usi_checkForUnassistedSignupID);
								usi_email_grabbed = document.getElementById("signUpTxtEmail").value;
								usi_loadBoostBars();
							}
						} else if (document.getElementById("websiteOverlay") != null && document.getElementById("websiteOverlay").style.visibility == "hidden") {
							clearInterval(usi_checkForUnassistedSignupID);
							usi_loadBoostBars();
						}
					}
					var usi_checkForUnassistedSignupID = setInterval("usi_checkForUnassistedSignup()", 500);
				}
			}
		}
	}
	if (location.href.indexOf("/loginpage") != -1 || location.href.toLowerCase().indexOf("/cart/checkout") != -1) {
		usi_includeDH();
	}
}

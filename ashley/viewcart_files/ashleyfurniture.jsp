




	usi_alert = function(msg) {}


var usi_currentDate = "2016-04-25";
var usi_error_submits = 0;
function usi_stopError(usi_msg, usi_url, usi_linenumber) {
	if (usi_url.indexOf("upsellit.com") != -1 && usi_url.indexOf("err.jsp") == -1 && usi_error_submits < 5) {
		usi_error_submits++;
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_errorScript = document.createElement('script');
		USI_errorScript.type = 'text/javascript';
		USI_errorScript.src = '//www.upsellit.com/err.jsp?oops='+escape(usi_msg)+'-'+escape(usi_url)+'-'+escape(usi_linenumber);
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
	USI_updateASession("usi_tester", "1", 24*60*60);
}
		 
function usi_getElementsByClassName(usi_node, usi_classname) {
	var usi_a = [];
	var usi_re = new RegExp('(^| )' + usi_classname + '( |$)');
	var usi_els = usi_node.getElementsByTagName("*");
	for (var usi_i = 0, usi_j = usi_els.length; usi_i < usi_j; usi_i++)
		if (usi_re.test(usi_els[usi_i].className)) usi_a.push(usi_els[usi_i]);
	return usi_a;
}
function usi_gup( name ){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}
if (location.href.indexOf("/cart/orderconfirmation?confirmationId=") != -1) {
	var USI_orderID = usi_gup("confirmationId");
	var USI_orderAmt = '';
	var USI_headID = document.getElementsByTagName("head")[0];
	var USI_dynScript = document.createElement("script");
	USI_dynScript.setAttribute('type','text/javascript');
	USI_dynScript.src = 'http'+ (document.location.protocol=='https:'?'s://www':'://www')+ '.upsellit.com/upsellitReporting.jsp?command=REPORT&siteID=11835&productID=77&position=1&orderID='+escape(USI_orderID)+'&orderAmt='+escape(USI_orderAmt);
	USI_headID.appendChild(USI_dynScript);
	var USI_dynScript2 = document.createElement("script");
	USI_dynScript2.setAttribute('type','text/javascript');
	USI_dynScript2.src = 'http'+ (document.location.protocol=='https:'?'s://www':'://www')+ '.upsellit.com/hound/sale.jsp?orderID='+escape(USI_orderID)+'&orderAmt='+escape(USI_orderAmt);
	USI_headID.appendChild(USI_dynScript2);
} else {
	var usi_cacheBuster = "&rand="+Math.random();
	function usiLoadDisplay(usiQS, usiSiteID, usiKey) {
		usiKey = usiKey || "";
		var usiDocHead = document.getElementsByTagName('head')[0];
		var usiLaunchScript = document.createElement("script");
		if (top.location != location) usiDocHead = parent.document.getElementsByTagName('head')[0];
		usiLaunchScript.type = "text/javascript";
		usiLaunchScript.src = ("//www.upsellit.com/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_cacheBuster);
		usiDocHead.appendChild(usiLaunchScript);
		usiLoadDisplay = function () {
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
			usiLoadDisplay("262204239209236281278290311279330342308339289304338305306330272", "13448", usi_keys);
		}
	}
	function usi_is_eligible(i) {
		if (i!="1660008" && i!="1660021" && i!="1660035" && i!="1660038" && i!="1660039" && i!="1660060" && i!="1660135" && i!="1660138" && i!="1660139" && i!="2350011" && i!="2350018" && i!="2350021" && i!="2350035" && i!="3840047" && i!="3840052" && i!="3840081" && i!="3840082" && i!="3840147" && i!="3840152" && i!="3840181" && i!="3840182" && i!="3840194" && i!="3840196" && i!="4220028" && i!="4220032" && i!="4220043" && i!="4220087" && i!="4220088" && i!="4220091" && i!="8310425" && i!="8310488" && i!="8310494" && i!="8310525" && i!="8310588" && i!="8310594" && i!="8760135" && i!="8760138" && i!="8760139" && i!="8760144" && i!="8760160" && i!="B251-31" && i!="B251-36" && i!="B251-39" && i!="B251-46" && i!="B251-50" && i!="B251-54" && i!="B251-56" && i!="B251-57" && i!="B251-58" && i!="B251-64" && i!="B251-64S" && i!="B251-66" && i!="B251-66S" && i!="B251-67" && i!="B251-68" && i!="B251-70" && i!="B251-92" && i!="B251-98" && i!="B251-99" && i!="B616-09" && i!="B616-81" && i!="B616-82" && i!="B616-91" && i!="B616-96" && i!="B616-97" && i!="B681-31" && i!="B681-36" && i!="B681-46" && i!="B681-54" && i!="B681-56" && i!="B681-57" && i!="B681-58" && i!="B681-93" && i!="B681-94" && i!="B681-96" && i!="B681-97" && i!="D199-13" && i!="D199-324" && i!="D202-124" && i!="D202-130" && i!="D250-124" && i!="D250-224" && i!="D307-12" && i!="D307-124" && i!="D307-13" && i!="D307-130" && i!="D314-124" && i!="D319-324" && i!="D319-42" && i!="D328-124" && i!="D328-32" && i!="D328-320" && i!="D328-323" && i!="D329-124" && i!="D329-13" && i!="D367-124" && i!="D367-32" && i!="D381-124" && i!="D389-0324" && i!="D389-0330" && i!="D389-0424" && i!="D389-0430" && i!="D389-1324" && i!="D389-1330" && i!="D389-1424" && i!="D389-1430" && i!="D436-124" && i!="D436-32" && i!="D442-124" && i!="D442-224" && i!="D442-32" && i!="D463-124" && i!="D468-124" && i!="D469-124" && i!="D469-323" && i!="D480-124" && i!="D480-32" && i!="D500-324" && i!="D500-330" && i!="D500-424" && i!="D500-430" && i!="D512-124" && i!="D520-124" && i!="D520-32" && i!="D521-124" && i!="D521-130" && i!="D540-124" && i!="D540-130" && i!="D540-224" && i!="D540-230" && i!="D542-024" && i!="D542-030" && i!="D542-12" && i!="D542-124" && i!="D542-13" && i!="D542-130" && i!="D542-224" && i!="D542-230" && i!="D544-124" && i!="D544-32" && i!="D548-024" && i!="D548-030" && i!="D548-124" && i!="D548-130" && i!="D548-324" && i!="D548-330" && i!="D550-124" && i!="D550-224" && i!="D550-324" && i!="D550-424" && i!="D550-524" && i!="D553-024" && i!="D553-030" && i!="D553-124" && i!="D553-130" && i!="D553-224" && i!="D553-230" && i!="D560-12" && i!="D560-124" && i!="D560-13" && i!="D560-130" && i!="D562-024" && i!="D562-030" && i!="D562-224" && i!="D562-230" && i!="D567-124" && i!="D567-13" && i!="D569-024" && i!="D569-224" && i!="D574-124" && i!="D580-224" && i!="D580-32" && i!="D580-323" && i!="D583-224" && i!="D583-323" && i!="D585-124" && i!="D585-130" && i!="D586-124" && i!="D594-00" && i!="D594-01" && i!="D594-124" && i!="D594-35" && i!="D594-42" && i!="D594-60" && i!="D599-124" && i!="D599-32" && i!="D608-124" && i!="D608-13" && i!="D608-130" && i!="D608-324" && i!="D608-330" && i!="D608-424" && i!="D608-430" && i!="D608-524" && i!="D608-530" && i!="D608-624" && i!="D608-630" && i!="D644-124" && i!="D646-224" && i!="D653-124" && i!="D653-32" && i!="D671-01" && i!="D671-03A" && i!="D671-224" && i!="D671-45" && i!="D671-60" && i!="D671-61" && i!="D671-70" && i!="D671-76" && i!="D680-124" && i!="D681-01" && i!="D681-02" && i!="D681-35" && i!="D681-60" && i!="D688-124" && i!="D697-124" && i!="D697-230" && i!="D714-124") return true;
		return false;
	}
	function usi_includeDH() {
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_dynScript = document.createElement("script");
		USI_dynScript.setAttribute('type','text/javascript');
		USI_dynScript.src = 'http'+ (document.location.protocol=='https:'?'s://www':'://www')+ '.upsellit.com/hound/monitor.jsp?qs=229252266236229340303294309338291308281309291338300303323328299&siteID=13019';
		USI_headID.appendChild(USI_dynScript);
	}
	function usi_find_cart_stuff() {
		var usi_productname = "";
		var usi_productpic = "";
		var usi_price = "";
		var usi_newprice = "";
		var usi_precaptures = 1;
		var usi_products = usi_getElementsByClassName(document.body, "msax-BorderTop1");
		var usi_first_item_id = "";
		for (var i=0; i<usi_products.length;i++) {
			var usi_innerHTML = usi_products[i].innerHTML;
			usi_productpic = usi_innerHTML.substring(usi_innerHTML.toLowerCase().indexOf("src=")+5, usi_innerHTML.length);
			usi_productpic = usi_productpic.substring(0, usi_productpic.indexOf("\""));
			usi_productname = usi_innerHTML.substring(usi_innerHTML.indexOf("msax-ProductName\""), usi_innerHTML.length);
			usi_productname = usi_productname.substring(usi_productname.indexOf(">")+1, usi_productname.indexOf("<"));
			usi_price = usi_innerHTML.substring(usi_innerHTML.indexOf("PriceWithCurrency"), usi_innerHTML.length);
			usi_price = usi_price.substring(usi_price.indexOf("$")+1, usi_price.indexOf("<"));
			var usi_discount = usi_price;
			if (usi_innerHTML.indexOf("PriceAfterDiscount") != -1) {
				var usi_discount = usi_innerHTML.substring(usi_innerHTML.indexOf("PriceAfterDiscount"), usi_innerHTML.length);
				usi_discount = usi_discount.substring(usi_discount.indexOf("$")+1, usi_discount.indexOf("<"));
			}
			usi_item_id = usi_innerHTML.substring(usi_innerHTML.indexOf("ItemId"), usi_innerHTML.length);
			usi_item_id = usi_item_id.substring(usi_item_id.indexOf(">")+1, usi_item_id.indexOf("<"));
			if (usi_first_item_id == "") usi_first_item_id = usi_item_id;
			usi_producturl = usi_innerHTML.substring(usi_innerHTML.indexOf("href=")+6, usi_innerHTML.length);
			usi_producturl = usi_producturl.substring(0, usi_producturl.indexOf("\""));
			if (usi_producturl.indexOf("/") == 0) usi_producturl = "https://www.ashleyfurniturehomestore.com/" + usi_producturl;
			if (usi_precaptures <= 3) {
				//precapture eligible
				USI_updateASession("usi_product"+usi_precaptures, encodeURIComponent(usi_productpic +"|"+usi_productname+"|"+usi_price), 24*60*60);
				usi_precaptures++;
				if (usi_productname != null && usi_productname != "") {
					try {
						var USI_headID = document.getElementsByTagName("head")[0];
						var USI_dynScript = document.createElement("script");
						USI_dynScript.setAttribute("type","text/javascript");
						USI_dynScript.src = "//www.upsellit.com/active/pv2.js?13019|"+encodeURIComponent(usi_productname)+"|"+encodeURIComponent(usi_producturl)+"|"+encodeURIComponent(usi_item_id)+"|"+encodeURIComponent(usi_price)+"|"+encodeURIComponent(usi_productpic);
						USI_headID.appendChild(USI_dynScript);
					} catch (e) {}
				}
			}
		}
		if (usi_productname != "") {
			USI_updateASession("usi_productpic", encodeURIComponent(usi_productpic), 24*60*60);
			USI_updateASession("usi_productname", encodeURIComponent(usi_productname), 24*60*60);
			USI_updateASession("usi_price", encodeURIComponent(usi_price), 24*60*60);
			USI_updateASession("usi_newprice", encodeURIComponent(usi_discount), 24*60*60);
			if (typeof(triggermail_email_address) != "undefined" && triggermail_email_address != "") {
				usi_includeDH();
			}
			
		} else {
			setTimeout("usi_find_cart_stuff()", 2000);
		}
	}
	if (location.href.toLowerCase().indexOf("/cart/viewcart") != -1) {
		setTimeout("usi_find_cart_stuff()", 2000);
	} else if (location.href.indexOf("/p/") != -1) {
		try {
			var usi_productname = "", usi_producturl = "", usi_pid = "", usi_price = "", usi_prodimg = "";
			var usi_pid = location.href.substring(location.href.indexOf("/p/") + 3, location.href.length);
			if (usi_pid.indexOf("?") != -1) usi_pid = usi_pid.substring(0, usi_pid.indexOf("?"));
			if (usi_pid.indexOf("#") != -1) usi_pid = usi_pid.substring(0, usi_pid.indexOf("#"));
			if (usi_pid.substring(usi_pid.length-1, usi_pid.length) == "/") usi_pid = usi_pid.substring(0, usi_pid.length-1);
			if (usi_pid.indexOf("/") != -1) usi_pid = usi_pid.substring(usi_pid.indexOf("/") + 1, usi_pid.length);
			var usi_producturl = location.href;
			if (usi_producturl.indexOf("?") != -1) usi_producturl = usi_producturl.substring(0, usi_producturl.indexOf("?"));
			var usi_tags = document.getElementsByTagName('h1');
			for (var i=0; i<usi_tags.length; i++ ) {
				usi_productname = usi_tags[i].innerHTML.replace(" <em></em>","");
			}
			var usi_prodimgs = usi_getElementsByClassName(document.body, "zoomImageContainer");
			if (usi_prodimgs.length > 0) {
				usi_prodimg = usi_prodimgs[0].innerHTML.replace(/(\r\n|\n|\r|\t| )/gm,"");
				usi_prodimg = usi_prodimg.substring(usi_prodimg.indexOf("https://ashleyfurniture.scene7.com/is/image/"), usi_prodimg.length);
				if (usi_prodimg.indexOf("$") != -1) usi_prodimg = usi_prodimg.substring(0, usi_prodimg.indexOf("$"));
				if (usi_prodimg.indexOf("\"") != -1) usi_prodimg = usi_prodimg.substring(0, usi_prodimg.indexOf("\""));
				if (usi_prodimg.indexOf("?") != -1) usi_prodimg = usi_prodimg.substring(0, usi_prodimg.indexOf("?"));
			}
			var usi_prices = usi_getElementsByClassName(document.body, "Price");
			if (usi_prices.length > 0) {
				usi_price = usi_prices[0].innerHTML.replace(/(\r\n|\n|\r|\t| )/gm,"");
			}
			if (usi_productname != "" && usi_producturl != "" && usi_pid != "" && usi_price != "" && usi_prodimg != "") {
				var USI_headID = document.getElementsByTagName("head")[0];
				var USI_dynScript = document.createElement("script");
				USI_dynScript.setAttribute("type","text/javascript");
				USI_dynScript.src = "//www.upsellit.com/active/pv2.js?12926|"+encodeURIComponent(usi_productname)+"|"+encodeURIComponent(usi_producturl)+"|"+encodeURIComponent(usi_pid)+"|"+encodeURIComponent(usi_price)+"|"+encodeURIComponent(usi_prodimg);
				USI_headID.appendChild(USI_dynScript);
			}
			
		} catch (e) {}
	} else if (location.href.toLowerCase().indexOf("ashleyfurniturehomestore.com/cart") != -1) {
        usi_loadBoostBars = function() {
            if (!usi_isMobile) {
                usiLoadDisplay("227231240271223280292344322274305322344342275314306309309296329", "13676");
            } else {
                //usiLoadDisplay("223204259225239291337289296323273278308310312325334310328332325", "13619");
            }
        }
        usi_validateEmail = function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
		if (USI_getSessionValue("usi_tester") != null) {
			if (USI_readCookie("dh_email_capture") != "closed") {
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

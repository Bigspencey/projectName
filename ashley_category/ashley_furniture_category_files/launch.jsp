
var USItimerID = '';
var properClickThrough = false;
var USIdone = false;
var USI_suppress = false;
if (typeof(noChatPlease) != "undefined") {
	if (noChatPlease) {
	properClickThrough = true; USIdone = true;
	}
}






var usi_error_submits = 0;
function stopError(usi_msg, usi_url, usi_linenumber) {
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
	window.onerror = stopError;
}
function usi_readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function usi_setCookie(name, value, expires) {
	var date = new Date();
	date.setTime(date.getTime()+expires);
	expires = '; expires='+date.toGMTString();
	document.cookie = name+"="+escape(value)+expires+'; path=/';
	var cookie = null;
}


var USISeenCookie = usi_readCookie('u-upsellit13676');
var cookieSuppress = 0;
if (USISeenCookie != null && (USISeenCookie == 'seenChat' || USISeenCookie == 'pixelSeen')) {
	cookieSuppress = 1;
}
USISeenCookie = usi_readCookie('u-upsellitc3510');
if (USISeenCookie != null && (USISeenCookie == 'seenChat' || USISeenCookie == 'pixelSeen')) {
	cookieSuppress = 1;
}
if (location.href.indexOf("showchat") != -1) cookieSuppress = 0;



try{				 
if (!(typeof USI_placedChat === "undefined"))
	cookieSuppress = 1;
} catch(e) {}
if (cookieSuppress == 0) {















function USI_agent(v) {
	return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0));
}
function USI_xy(e,v) {
	return(v?(USI_agent('msie')?event.clientY+document.body.scrollTop:e.pageY):(USI_agent('msie')?event.clientX+document.body.scrollTop:e.pageX));
}
function dragStart(e,dragID) {
	var d = document.getElementById(dragID);
	var USIscreenWidth = (window.innerWidth) ? window.innerWidth : document.body.clientWidth;
	var USIscreenHeight = (window.innerHeight) ? window.innerHeight : document.body.clientHeight;
	var oX = (d.style.left.indexOf('%') == -1) ? parseInt(d.style.left) : (USIscreenWidth)*(parseInt(d.style.left)/100);
	var oY = (d.style.top.indexOf('%') == -1) ? parseInt(d.style.top) : (USIscreenHeight)*(parseInt(d.style.top)/100);
	var eX=USI_xy(e),eY=USI_xy(e,1),tX,tY,USI_stop_drag;
	function dragGo(event) {
		if(!USI_stop_drag) {
			d.style.top=(tX=USI_xy(event,1)+oY-eY+'px');
			d.style.left=(tY=USI_xy(event)+oX-eX+'px');
		}
		try{
		window.event.returnValue = false;
		}catch(er1){}
	}
	function dragStop(event) {
		USI_stop_drag=1;
		if (document.detachEvent) {
			document.detachEvent("onmousemove", dragGo);
			document.detachEvent("onmouseup", dragStop);
		} else {
			document.removeEventListener("mousemove", dragGo, true);
			document.removeEventListener("mouseup", dragStop, true);
		}
	}
	if (document.attachEvent) {
		document.attachEvent("onmousemove", dragGo);
		document.attachEvent("onmouseup", dragStop);
	} else {
		document.addEventListener("mousemove", dragGo, true);
		document.addEventListener("mouseup", dragStop, true);
	}
}
function unBlurAll() {
	var formCount = 0;
	while (document.forms[formCount] != null ) {
		for (elementCount=0; document.forms[formCount].elements.length>elementCount; elementCount++) {
			elemt = document.forms[formCount].elements[elementCount];
			elemt.blur();
		}
	formCount++;
	}
}
function changeSelectBoxes(visibility){
	var element_object = document.getElementsByTagName('select');
	for (var i = 0; i != element_object.length; i++){
		element_object[i].style.visibility = visibility;
	}
}






var usi_img_dir = '//upsellit.turbobytes.net';
var usi_useSecondOpeners = false;

var usi_messageArray = new Array();
var link1 = "", link2 = "", link3 = "", chatID = "5544466389374597697664", usi_country = "us", agentName = "Jenny", usi_remoteIP = "198.151.206.196";

window_left = 10;
window_top = 20;


var usi_isLive = 0;

var usi_getLastActiveTime = -1;
var usi_scriptID = 0;
function usi_LoadDynamics(theURL) {
	try {
		usi_scriptID++;
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_dynScript = document.createElement("script");
		USI_dynScript.setAttribute("id","usi_AJAXScript"+usi_scriptID);
		USI_dynScript.setAttribute("type","text/javascript");
		USI_dynScript.setAttribute("src","//www.upsellit.com/"+theURL+"&bustCache="+Math.random());
		USI_headID.appendChild(USI_dynScript);
		setTimeout('usi_removeScript('+usi_scriptID+')', 10000);
	} catch(e) {}
}
function usi_removeScript(usi_scriptRemoveID) {
	var scriptToRemove = document.getElementById("usi_AJAXScript"+usi_scriptRemoveID);
	if (scriptToRemove != null) {
		document.getElementsByTagName("head")[0].removeChild(scriptToRemove);
	}
}
var usi_chatDisplayerID = -1, usi_updateCheckerID = -1, usi_agentIsTypingID = -1, usi_BeenIdleID = -1, usi_lastTalker = 0, usi_customerHasTyped = 0, usi_isTyping = 0;
var usi_updateFrequencyRate = 500, usi_idleTime=0.0, usi_currentlyTypingMsg = "", usi_session_id="A2003BA8D9A4D835847BFFA8E3F29CFF";

var usi_aname = '', usi_hybrid_invite="null";
var usi_idleMsg='', usi_extraHybridInfo = '';
if (usi_hybrid_invite == "true") {
	usi_extraHybridInfo = "&sess="+usi_session_id+"&aname="+ usi_aname;
} else if (usi_session_id != "") {
	usi_extraHybridInfo = "&sess="+usi_session_id;
}

function usi_sendCustomerInput() {
	var usi_sendMsg = document.getElementById("usi_chatInput").value;
	document.getElementById("usi_chatInput").value = "";
	document.getElementById("usi_chatInput").focus();
	usi_sendMsg = usi_sendMsg.replace("<", "&lt;").replace(">", "&gt;");
	try {
		usi_sendMsg = usi_sendMsg.replace(/\r/g,' ').replace(/\n/g,' ');
	} catch (e) {}
	if (usi_sendMsg.replace(/^\s+|\s+$/g, '') == "") {
		return;
	}
	if (usi_customerHasTyped == 0) {
		usi_customerHasTyped = 1;
		usi_removeOpeners();
	}
	usi_isTyping = 0;
	usi_LoadDynamics("httpPost_js.jsp?command=MSG&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(usi_sendMsg) + usi_extraHybridInfo);
	usi_displayMsg("<font color='#0000FF'><b>You: </b>"+usi_sendMsg+"</font>", 1, -1);
	usi_updateFrequencyRate = 500;
	usi_getLastActiveTime = usi_getCurrentTimeStamp();
	usi_startHTTPUpdates();
}
function usi_removeOpeners() {
	var usi_intro = 0;
	usi_agentIsTypingClear();
	usi_currentlyTypingMsg = "";
	var theLength = usi_messageArray.length;
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
		usi_intro = t[3];
		msg = t[2];
		if (usi_intro != 1) {
			usi_messageArray.unshift(t);
		}
	}
}
function HTTPMsgProcess(msg) {
	usi_httpMessageReceived(msg);
}
function usi_httpMessageReceived(msg){
	msg = new String(decodeURIComponent(msg));
	msg = msg.split('\r').join('');
	msg = msg.split('\n').join('');
	msg = msg.replace(new RegExp('\\+', 'g'), ' ');
	var t = msg.split("|");
	var i = 0;
	while (t[i] != undefined)
	{
		while (t[i] == "" && t[i] != undefined) {
			i++;
		}
		if (t[i] == undefined) {
			return;
		}
		var theCommand = t[i];
		if (t[i] == "JOINED") {
			i = i+2;
		} else if (t[i] == "MSG") {
			usi_addToChatWindow(t[i+1], t[i+2], t[i+3], t[i+4], t[i+5]);
			i = i+6;
		} else if (t[i] == "ISTYPING") {
			usi_agentIsTyping();
			i = i+1;
		} else if (t[i] == "TOPMSG") {
			usi_addToChatWindowTop(t[i+1], t[i+2], t[i+3]);
			i = i+4;
		} else if (t[i] == "BOTTOMMSG") {
			usi_addToChatWindowBottom(t[i+1], t[i+2], t[i+3], t[i+4], t[i+5]);
			i = i+6;
		} else if (t[i] == "CLOSECHAT") {
			shutDown();
			i = i+1;
		} else if (t[i] == "CLEARMESSAGEQUEUE") {
			usi_clearMessageQueue();
			i = i+1;
		} else if (t[i] == "CLEARMSG") {
			usi_clearMsg(t[i+1]);
			i = i+2;
		} else {
			return;
		}
	}
}
function usi_addToChatWindowBottom(delay, inMsg, agentIsTypingDelay, usi_intro, chatLineNumber) {
	if (usi_messageArray.length == 0) {
		clearInterval(usi_chatDisplayerID);
		usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+agentIsTypingDelay*1000);
		usi_startAgentIsTypingDelay(agentIsTypingDelay*1000);
	}
	usi_messageArray.unshift([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
}
function usi_addToChatWindowTop(delay, inMsg, chatLineNum) {
	clearInterval(usi_chatDisplayerID);
	usi_displayMsg(inMsg, 0, chatLineNum);
	usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, 7000);
}
function usi_clearMessageQueue() {
	clearInterval(usi_agentIsTypingID);
	clearInterval(usi_chatDisplayerID);
	theLength = usi_messageArray.length;
	usi_agentIsTypingClear();
	usi_currentlyTypingMsg = "";
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
	}
	usi_isTyping = 0;
}
function targetOpener(url) {
	try{
		if (window.opener)
			window.opener.location = url;
		else
			window.top.location = url;
	} catch(Error){}
}
goToAgentPushPage = targetOpener;
function usi_sayIt(usi_anchor) {
	usi_LoadDynamics("httpPost_js.jsp?command=MSG&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(usi_anchor.name));
	if (usi_customerHasTyped == 0) {
		usi_customerHasTyped = 1;
		usi_removeOpeners();
	}
}
function usi_clearMsg(msgNum) {
	theLength = usi_messageArray.length;
	for (var i = 0; i<theLength; i++) {
		var t = usi_messageArray.pop();
		currentlyTypingChatLineNumber = t[4];
		if (msgNum != currentlyTypingChatLineNumber) {
			var msgToRemove = t[2];
			usi_messageArray.unshift(t);
			if (usi_currentlyTypingMsg == msgToRemove) {
				usi_agentIsTypingClear();
				usi_currentlyTypingMsg = "";
			}
		}
	}
}
function usi_getCurrentTimeStamp() {
	var usi_d = new Date();
	return usi_d.getTime();
}
function usi_setLive() {
	usi_isLive = 1;
	usi_requestUpdate();
}
function usi_startHTTPUpdates() {
	if (usi_updateCheckerID == -1) {
		usi_getLastActiveTime = usi_getCurrentTimeStamp();
		if (usi_isLive == 0) { usi_updateFrequencyRate = 30000; }
		usi_updateCheckerID = setInterval(usi_requestUpdate, usi_updateFrequencyRate);
	}
}
function usi_requestUpdate() {
	clearInterval(usi_updateCheckerID);
	usi_LoadDynamics("httpPost_js.jsp?command=UPDATES&chatID="+encodeURIComponent(chatID));
	if (usi_isLive == 1) {
		if (usi_updateFrequencyRate < 5000) usi_updateFrequencyRate+=500;
	} else {
		usi_updateFrequencyRate = 30000;
	}
	if (usi_getCurrentTimeStamp() - usi_getLastActiveTime < 1*60*60*1000) { //1 hour for timeout
		usi_updateCheckerID = setInterval(usi_requestUpdate, usi_updateFrequencyRate);
	} else {
		usi_updateCheckerID = -1;
	}
}
function usi_customerIsTyping() {
	if (usi_isLive == 1) {
		if (usi_isTyping == 0) {
			usi_isTyping = 1;
			usi_LoadDynamics("httpPost_js.jsp?command=IMTYPING&chatID="+encodeURIComponent(chatID) + usi_extraHybridInfo);
		}
	}
}
function usi_replaceAll(txt, replace, with_this) {
	return txt.replace(new RegExp(replace, 'g'),with_this);
}
function usi_addToChatWindow(delay, inMsg, agentIsTypingDelay, usi_intro, chatLineNumber) {
	if (usi_messageArray.length == 0) {
		clearInterval(usi_chatDisplayerID);
		if (delay == 0) agentIsTypingDelay = 0;
		usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+agentIsTypingDelay*1000);
		if (delay*1000+agentIsTypingDelay*1000 > 0) {
			usi_agentIsTypingClear();
			usi_startAgentIsTypingDelay(agentIsTypingDelay*1000);
		}
	}
	if (usi_intro == 1) {
		usi_messageArray.unshift([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
	} else {
		usi_messageArray.push([delay, agentIsTypingDelay, inMsg, usi_intro, chatLineNumber]);
	}
}
function usi_chatMsgDisplayer() {
	var usi_intro = 0;
	clearInterval(usi_chatDisplayerID);
	if (usi_messageArray.length != 0) {
		if (usi_currentlyTypingMsg == "") {
			var t = usi_messageArray.pop();
			delay = t[0];
			startTypingDelay = t[1];
			usi_currentlyTypingMsg = t[2];
			usi_intro = t[3];
			currentlyTypingChatLineNumber = t[4];
		}
		usi_displayMsg(usi_currentlyTypingMsg, 0, currentlyTypingChatLineNumber);
		if (usi_intro == 1) {
			usi_openerDisplayed(usi_currentlyTypingMsg);
		}
		if (usi_messageArray.length != 0) {
			var msgSplit = usi_messageArray.pop();
			delay = msgSplit[0];
			startTypingDelay = msgSplit[1];
			usi_currentlyTypingMsg = msgSplit[2];
			usi_intro = msgSplit[3];
			currentlyTypingChatLineNumber = msgSplit[4];
			usi_chatDisplayerID = setInterval(usi_chatMsgDisplayer, delay*1000+startTypingDelay*1000);
		} else {
			usi_currentlyTypingMsg = "";
		}
		if (usi_currentlyTypingMsg != "") {
			if (usi_currentlyTypingMsg.indexOf("AUTO_LINK") == -1) {
				if (startTypingDelay+delay > 0) usi_startAgentIsTypingDelay(startTypingDelay*1000);
			}
		}
	} else if (usi_currentlyTypingMsg != "") {
		usi_displayMsg(usi_currentlyTypingMsg, 0, currentlyTypingChatLineNumber);
		if (usi_intro == 1) {
			usi_openerDisplayed(usi_currentlyTypingMsg);
		}
		usi_currentlyTypingMsg = "";
	}
}
function usi_openerDisplayed(opener) {

}
function usi_startAgentIsTypingDelay(delay) {
	usi_agentIsTypingClear();
	clearInterval(usi_agentIsTypingID);
	usi_agentIsTypingID = setInterval(usi_isTypingDelay, delay);
}
function usi_isTypingDelay() {
	clearInterval(usi_agentIsTypingID);
	usi_agentIsTyping();
}
function usi_agentIsTypingClear() {
	document.getElementById("usi_agentIsTypingMsgDiv").style.visibility="hidden";
}
function usi_agentIsTyping() {

	document.getElementById("usi_agentIsTypingMsgDiv").style.visibility="visible";

}
function usi_handleInput(e) {
	if (!e) e = window.event;
	if(e.keyCode==13) {
		usi_sendCustomerInput();
		e.returnValue = false;
		if (e.preventDefault) e.preventDefault();
		return false;
	} else {
		usi_customerIsTyping();
		e.returnValue = true;
		return true;
	}
}
function usi_AddBottomSpacer(displayWindow) {
	new_div = document.createElement("div");
	new_div.innerHTML= "<div style='font-size:17px;line-height:17px;padding:0;margin:0;'><br/></div>";
	new_div.id= "usi_bottomSpacer";
	displayWindow.appendChild(new_div);
}
function usi_RemoveBottomSpacer(displayWindow) {
	usi_bottomSpacerID = document.getElementById("usi_bottomSpacer");
	if (usi_bottomSpacerID != null) {
		displayWindow.removeChild(usi_bottomSpacerID);
	}
}
function usi_displayMsg(inMsg, me, lineNumber) {
	displayWindow = document.getElementById("usi_chatDisplay");
	var path, javascriptStr, sayItStr;
	if (inMsg == "") {
		return;
	}
	if (inMsg.indexOf("CLOSECHAT") != -1) {
		shutDown();
		return;
	} else if (inMsg.indexOf("AUTO_LINK")>0) {
		openAndRecord(inMsg.substring(inMsg.indexOf("AUTO_")+5, inMsg.length)+",1");
		return;
	}
	if (inMsg.indexOf("<<SOUND:") != -1) {
		path = inMsg.substring(inMsg.indexOf("<<SOUND:")+8, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<SOUND:"+path+">>").join("");
		if (initial_question !== undefined && lineNumber == -1) {
		} else {
			playTheSound(protocol+"://"+ip+port+path);
		}
	}
	if (inMsg.indexOf("<<JAVASCRIPT:") != -1) {
		javascriptStr = inMsg.substring(inMsg.indexOf("<<JAVASCRIPT:")+13, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<JAVASCRIPT:"+javascriptStr+">>").join("");
		eval(javascriptStr);
	}
	if (inMsg.indexOf("<<SAYIT:") != -1) {
		sayItStr = inMsg.substring(inMsg.indexOf("<<SAYIT:")+8, inMsg.indexOf(">>"));
		inMsg = inMsg.split("<<SAYIT:"+sayItStr+">>").join("");
		usi_sayIt(sayItStr);
	}
	inMsg = inMsg.split("agentName").join(agentName);
	if (inMsg.indexOf("<br><br>") != -1) {
		inMsg = usi_replaceAll(inMsg, "<br><br>", "<br>");
	}
	if (inMsg.split("Says:")[1] == "" || inMsg.split("Says:")[1] == " " || inMsg == "") {
		return;
	}
	usi_RemoveBottomSpacer(displayWindow);
	if (usi_lastTalker != me) {
		displayWindow.innerHTML += "<hr style='color:#333333;background-color:#333333;margin:4px 0 4px 0;padding:0px;display:block;float:none;position:static;border:none;'/>";
	} else {
		displayWindow.innerHTML += "<div style='font-size:8px;line-height:8px;padding:0;margin:0;float:none;'><br/></div>";
	}
	displayWindow.innerHTML += inMsg;
	usi_AddBottomSpacer(displayWindow);
	usi_lastTalker = me;
	if (me == 0) {
		usi_agentIsTypingClear();
		if (lineNumber != -1) {
			usi_LoadDynamics("httpPost_js.jsp?command=LINESEEN&chatID="+encodeURIComponent(chatID)+"&lineNum="+encodeURIComponent(lineNumber));
		}
	} else {
		usi_displayedIdle = 0;
	}
	displayWindow.scrollTop = displayWindow.scrollHeight;
	if (usi_idleMsg != null && usi_idleMsg != "" && usi_idleTime != null && usi_idleTime != 0) {
		clearInterval(usi_BeenIdleID);
		usi_BeenIdleID = setInterval(usi_displayIdleMsg, usi_idleTime*60*1000);
	}
	usi_updateFrequencyRate = 200;
}
function usi_displayIdleMsg() {
	if (usi_idleMsg != "") {
		clearInterval(usi_BeenIdleID);
		usi_displayMsg(usi_idleMsg, 0, -1);
		usi_openerDisplayed(usi_idleMsg);
	}
	usi_idleMsg = "";
}
function usi_offScreenPreload(usi_src) {
	var usi_img_preloader= document.createElement("div");
	document.getElementsByTagName('body')[0].appendChild(usi_img_preloader);
	usi_img_preloader.innerHTML = '<div style="position:absolute;left:-2000px;top:-2000px;"><img src="'+usi_src+'"/></div>';
	var usi_imageArray = new Image();
	usi_imageArray.src = usi_src
}


function USI_includeFlash() {
	document.getElementById('USIflashContentDiv').innerHTML = '<div id="usi_chatDisplay" style="position:absolute;width:337px;height:217px;top:53px;left:60px;margin:5px;padding:0px;text-align:left;color:#000000;font-size:12px;line-height:14px;text-indent:0;overflow-x:hidden; overflow-y:scroll;border-width:0px;font-family:Verdana;background-color:transparent;z-index:9002; word-wrap:break-word;"><b>Jenny Says:</b> </div><div id="usi_agentIsTypingMsgDiv" style="position:absolute;width:139px;height:18px;top:259px;left:60px;z-index:9007;padding:0px;margin:0px;visibility:hidden;"><img width="139" height="18" src="//upsellit.turbobytes.net/images/agent-typing-animation.gif" id="usi_agentIsTypingImg" style="float:left;border:0" border="0"/></div><div id="usi_chatInputDiv" style="position:absolute;width:230px;height:34px;top:287px;left:61px;background-color:transparent;z-index:9005;"><textarea id="usi_chatInput" style="overflow:auto;display:block;position:absolute;width:227px;height:34px;top:0px;left:5px;border-width:0px;border-style:none;outline:none; padding:0px; margin:0px; line-height:normal;border:none;font-family:Arial;line-height:15px;font-size: 15px;resize: none;background-color: rgba(255,255,255,1);color: rgba(0,0,0,1);background:url(\'//upsellit.turbobytes.net/images/spacer.gif\'); "></textarea></div><div id="usi_chatSendDiv" style="cursor:pointer;position:absolute;z-index:9002;width:98px;height:42px;top:284px;left:300px;"><img width="98" height="46" src="//upsellit.turbobytes.net/images/spacer.gif" onclick="usi_sendCustomerInput();" id="usi_chatSend" border="0" style="width:98px;height:42px;border-style:none;border-width:0px;MARGIN:0px;display:inline;"/></div><div id="usi_chatHelperDiv" style="cursor:pointer;position:absolute;z-index:9008;width:120px;height:260px;top:50px;left:420px;"><img  width="120" height="260"  src="//upsellit.turbobytes.net/images/spacer.gif" onclick="followClickHereLink(1);" id="usi_agentHelper" border="0" style="width:120px;height:260px;border-style:none;border-width:0px;MARGIN:0px;display:inline;"/></div>';
	
	//No chat elements
	document.getElementById("usi_chatHelperDiv").style.visibility="hidden";
	document.getElementById("usi_chatSendDiv").style.visibility= "hidden";
	document.getElementById("usi_chatDisplay").style.visibility="hidden";
	document.getElementById("usi_chatInputDiv").style.visibility= "hidden";
	document.getElementById("usi_agentIsTypingMsgDiv").style.visibility= "hidden";
	document.getElementById("usi_chatHelperDiv").style.display="none";
	document.getElementById("usi_chatSendDiv").style.display= "none";
	document.getElementById("usi_chatDisplay").style.display="none";
	document.getElementById("usi_chatInputDiv").style.display= "none";
	document.getElementById("usi_agentIsTypingMsgDiv").style.display= "none";
	
	
}


var USI_placedChat = 0;
function USI_placeChat() {
	if (USI_placedChat == 0) {
		if (typeof(document.getElementsByTagName('body')[0]) == 'undefined') {
			tryItAnyhowID = setTimeout('USI_placeChat()', 1000);
		} else {
			USI_placedChat = 1;
			
			
			var USI_dd = document.createElement('div');
			USI_dd.id = 'flashChatDiv';
			if ((document.compatMode=="CSS1Compat")||(navigator.appVersion.indexOf("MSIE")==-1)) {
				USI_dd.style.position='fixed';
				USI_dd.style.left = '10px';
				USI_dd.style.top = '20px';
			} else {
				USI_dd.style.position='absolute';
				USI_dd.style.left = window_left+'px';
				USI_dd.style.top = window_top+'px';
			}
			USI_dd.style.left = '10px';
			USI_dd.style.top = '20px';
			USI_dd.style.width = '574px';
			USI_dd.style.height = '362px';
			USI_dd.style.zIndex = 99202;
			USI_dd.style.visibility = 'hidden';
			USI_dd.style.display = 'none';
			USI_dd.style.fontWeight = 'normal';
			USI_dd.innerHTML = '<div id="USIchatskinDiv" style="position:absolute;left:0px;top:0px;Z-INDEX:9000;"><img src="//upsellit.turbobytes.net/chatskins/_Invisibile.gif" id="imgChatTop" border="0" style="MARGIN:0px;display:inline;max-width:none"/><img id="usi_agentImage" src="//upsellit.turbobytes.net/images/spacer.gif" style="display:none; position:absolute; left:425px; top:65px; " /></div><div id="USIflashContentDiv" style="position:absolute;top:0px;left:0px;Z-INDEX:9001;"></div><div id="USItopToolBarDiv" style="position:absolute;width:450px;height:42px;top:0px;left:0px;Z-INDEX:9994;"><div id="USIDragBarDiv" style="position:absolute;width:450px;height:42px;top:0px;left:0px;Z-INDEX:9995;margin-right:0px;margin-left:0px;"><img width="453" height="40" src="//upsellit.turbobytes.net/images/spacer.gif" onmousedown="dragStart(event, \'flashChatDiv\');return false;" id="imgChatDrag" border="0" style="MARGIN: 0px;display:inline;cursor: move;height:42px !important;width:450px !important"/></div><div id="closeButton" style="cursor:pointer;position:absolute;width:60px;height:45px;top:0px;left:450px;Z-INDEX:9998;margin-right:0px;margin-left:0px;border:0;" ><img id="imgChatTop2"  width="60" height="45"  style="MARGIN:0px;display:inline;max-width:none;width:60px;height:45px;" src="//upsellit.turbobytes.net/images/spacer.gif" onclick="shutDown();" border="0"/></div></div><div id="USI_poweredBy" style="text-align:left;position:absolute;width:1px;height:1px;top:1px;left:1px;Z-INDEX:9994;"></div>';
			document.getElementsByTagName('body')[0].appendChild(USI_dd);
			
			USI_includeFlash();
			
		}
	}
}

USI_placeChat();


shutDown = function() {
	changeSelectBoxes('visible');
	
	flashChatDivHandle = document.getElementById('flashChatDiv');
	flashChatDivHandle.style.visibility='hidden';
	flashChatDivHandle.style.display='none';
	flashChatDivHandle.style.top = -1000;
	if (typeof(second_pop) != 'undefined') {
		window.open(second_pop);
	} else {
	
	}
	
	
	clearInterval(usi_BeenIdleID);
	clearInterval(usi_updateCheckerID);
	clearInterval(usi_agentIsTypingID);
	clearInterval(usi_chatDisplayerID);
}

showChat = function() {
	if (USI_suppress) return;
	try {
		
		unBlurAll();
		
		changeSelectBoxes('hidden');
		
		
		yPos = (window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||0)+( (typeof window_top != "undefined") ? window_top : 50 );
		flashChatDivHandle = document.getElementById('flashChatDiv');
		flashChatDivHandle.style.visibility='visible';
		flashChatDivHandle.style.display='block';
		
		
		if (flashChatDivHandle.style.position == 'absolute') flashChatDivHandle.style.top = yPos + 'px'; 
		registerDisplayAttempt();
		if (window.addEventListener)
			document.getElementById("usi_chatInput").addEventListener("keydown",usi_handleInput,false);
		else
			document.getElementById("usi_chatInput").attachEvent("onkeydown",usi_handleInput);
		try { document.getElementById("usi_chatInput").focus(); } catch(eer3) {}
		
		usi_openerDisplayed('<b>Jenny Says:</b> ');
		usi_BeenIdleID = setInterval(usi_displayIdleMsg, usi_idleTime*60*1000);
		displayWindow = document.getElementById("usi_chatDisplay");
		displayWindow.scrollTop = displayWindow.scrollHeight;
		
		
	} catch(err2) {}
}
function registerDisplayAttempt() {
	usi_LoadDynamics('upsellitChatLoaded.jsp?chatID='+encodeURIComponent(chatID)+'&siteID=13676&companyID=3510&u=1&c=0');
	
}
function usi_followDynamicLink(dynURL) {
	top.location.href = '//www.upsellit.com/follow.jsp?companyid=3510&sid=13676&cid=5544466389374597697664&duration=1209600&dbupdate=1&url=' + escape(dynURL);
}
function usi_linkFollowed() {
	try {
		usi_LoadDynamics("follow.jsp?companyid=3510&sid=13676&cid=5544466389374597697664&duration=1209600&dbupdate=1&url=");
		usi_LoadDynamics("httpPost_js.jsp?command=LINKFOLLOWED&chatID="+encodeURIComponent(chatID));
	} catch (e) {}
}
function followClickHereLink(whichLink) {

	if (whichLink == 1) {
	
	} else if (whichLink == 2) {
	
	} else if (whichLink == 3) {
	
	}
}

function sendUSIChatDetails() { }
function usi_changeAgentPic(newAgentName, picURL) {
	if (document.getElementById("usi_agentImage") != null) {
		document.getElementById("usi_agentImage").src = picURL;
		document.getElementById("usi_agentImage").style.display = "block";
	}
}
function usi_removePic() {
	if (document.getElementById("usi_agentImage") != null) document.getElementById("usi_agentImage").style.display = "none";
}
function usi_noAgentsAvailable(chatsinqueue) {}



var USI_siteID = 13676;
var USI_companyID = 3510;

function usi_dismissbottom() {
    usi_setCookie("usi_banner_closed", "closed", 2 * 24 * 60 * 60 * 1000);
    document.getElementById("USI_toolbar_all").style.display = "none";
}

function usi_showTerms() {
	try{
		if (document.getElementById("USI_toolbar_all").style.height == "155px") {
			document.getElementById("USI_toolbar_all").style.height = "50px";
		} else {
			document.getElementById("USI_toolbar_all").style.height = "155px";
		}
	}catch (e) {}
}

var usi_Form1 = ['<div class="USI_bottom" id="USI_toolbar_all" style="min-width:715px;left:0px;bottom:0px;width:100%;z-index:100000; display:block; visibility: visible;position:fixed;_position:absolute;_top:expression(document.body.scrollTop+document.body.clientHeight-this.clientHeight);min-width:715px;left:0px;bottom:0px;width:100%;position;height:50px;color:#FFFFFF;font-size:13pt;background-color:#666666 ">',
 '<table style="border: none;background-color: #666666;" border="0" cellpadding="0" cellspacing="0" width="100%">',
   '<tr>',
      '<td width="50" style="padding:0px">',
         '<span style="white-space: nowrap;width:50px;"><a href="javascript:usi_dismissbottom();"><img src="'+usi_img_dir+'/chatskins/ashleyclose.JPG" style="width:35px;max-width:35px;margin-top:-10px" border="0" alt="close"/></a></span>',
      '</td>',
      '<td style="padding:0px">',
        '<div id="usi_signupform">',
        '<table style="border: none;background-color: #666666;" border="0" cellpadding="0" cellspacing="0" width="100%">',
           '<tr>',
              '<td><center><div style="font-family: proxima-nova, sans-serif;font-size:24px;color:#FFFFFF;min-width:300px" >SIGN UP AND SAVE: <span style="color:#f48030">UP TO 15% OFF SITEWIDE</span></center></td>',
              '<td><center><div style="font-family: proxima-nova, sans-serif;line-height: 10pt; font-size:9pt;color:#FFFFFF;" id="usi_age_msg"><span style="white-space:nowrap;"><input type="checkbox" id="usi_checkbox" style="padding:0px;margin:0px">&nbsp; I am 13 years of age or older.</span><br><span style="white-space:nowrap;">CA Residents: I affirm I am 18 years of age or older</span></div></center></td>',
              '<td><center><div style="font-family: proxima-nova, sans-serif;line-height: 10pt; font-size:9pt;color:#FFFFFF;" id="usi_terms"><span style="white-space:nowrap;"><a href="javascript:usi_showTerms();" style="text-decoration:none;color:#FFFFFF">Terms and Conditions</a></div></center></td>',
               '<td>',
                     '<div style="position:relative;width:385px;height:30px;background-color:#FFFFFF">',
                            '<div style="position:absolute;top:5px;left:10px;height:35px;width:35px;"><img width="35" border="0" src="'+usi_img_dir+'/chatskins/ashleyenvelope.JPG" alt=""/></div>',
                            '<div style="position:absolute;top:0px;left:55px;height:50px;width:200px;"><input type="text" style="width:200px;height:35px;color:#666666;outline: none; background-color: transparent;box-shadow:none;border-style:none;border-width:0px;border-color:transparent;" name="usi_email" id="usi_email" value="type your email..." onfocus="usi_checkFocusDefault(this)" onblur="usi_checkBlurDefault(this)" onkeydown="if (event.keyCode == 13) { usi_doTheSubmit(); return false; }" title="type your email..." /></div>',
                            '<div id="usi_emailisGood" style="position:absolute;top:5px;left:235px;Z-INDEX:9008"><img src="'+usi_img_dir+'/images/spacer.gif" style="width:15px;height:15px;" border="0" alt="" /></div>',
                            '<div style="position:absolute;top:0px;left:255px;height:30px;width:130px;background-color:#F67E1D;cursor: pointer;" onclick="usi_doTheSubmit()"><div style="padding:7px;color:#FFFFFF;">Redeem Offer</div></div>',
                      '</div>',
               '</td></tr></table>',
            '</div>',
          '</td></tr><tr><td colspan="2" style="background-color:#666666;color:#FFFFFF;text-align:center">Please note this promo code may not be combined with any other offer. All previously registered email addresses are not eligible for discount. To take advantage of this one-time only offer, new registrants must enter an email address here before closing this window. Offer excludes barstools, select dining chairs and Smart Buys on ashleyfurniturehomestore.com. Some exceptions may apply. Offer valid online only, also expires upon a single use; retail stores excluded.</td></tr></table>',
       '</div>'].join("");

var usi_Form2 = ['<table style="border: none;background-color:#666666;" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td><center><div style="font-family: proxima-nova, sans-serif;font-size:24px;color:#FFFFFF;min-width:300px" >Thank you! Use the coupon <span style="color:#f48030;"><b>ASHLEY15</b></span> at checkout to redeem your discount!</span></div><div style="font-family: proxima-nova, sans-serif;font-size:13px;color:#FFFFFF;min-width:300px">Please note this promo code may not be combined with any other offer</span></center></div></td><td><center><div style="font-family: proxima-nova, sans-serif;line-height: 10pt; font-size:9pt;color:#FFFFFF;" id="usi_terms"><span style="white-space:nowrap;"><a href="javascript:usi_showTerms();" style="text-decoration:none;color:#FFFFFF">Terms and Conditions</a></span></div></center></td></tr></table>'].join("");

var usi_email_form = document.createElement("div");
usi_email_form.setAttribute("id", "usi_TheForm");
usi_email_form.innerHTML = usi_Form1;
document.body.appendChild(usi_email_form);
if (usi_readCookie("dh_email_capture") != null && usi_readCookie("dh_email_capture") != "closed") {
    document.getElementById("usi_signupform").innerHTML = usi_Form2;
}

function usi_validateEmail(email) {  
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

var usi_email_last = "";
function usi_verifyValidEmail() {
	var usi_email = document.getElementById("usi_email").value.toLowerCase().trim();
	var email_changed = 0;
	if (usi_email != usi_email_last) email_changed = 1;
	if (email_changed == 1) {
		if (!usi_validateEmail(usi_email)) {
			document.getElementById("usi_email").style.color="#390500";
			if (usi_email != "") {
				document.getElementById("usi_emailisGood").innerHTML = "<img src=\""+usi_img_dir+"/images/no.png\" alt=\"\" style=\"width:15px;height:15px\" />";
			}
		} else if (usi_validateEmail(usi_email)) {
			document.getElementById("usi_email").style.color="#009407";
			document.getElementById("usi_emailisGood").innerHTML = "<img src=\""+usi_img_dir+"/images/ok.png\" alt=\"\" style=\"width:15px;height:15px\" />";
		}
		usi_email_last = usi_email;
	}
}

var dh_email_capture = "";
USI_DirectDHPost = function (USI_value, USI_name, USI_siteID) {
	try {
		if (dh_email_capture == "") {
			if (usi_readCookie("dh_email_capture") == null) {
				dh_email_capture = "dh_email_capture" + Math.round(1000 * Math.random()) + "_" + (new Date()).getTime();
				usi_setCookie("dh_email_capture", dh_email_capture, 364 * 24 * 60 * 60 * 1000);
			} else {
				dh_email_capture = usi_readCookie("dh_email_capture");
			}
		}
		var USI_headID = document.getElementsByTagName("head")[0];
		var USI_dynScript = document.createElement("script");
		USI_dynScript.setAttribute("type", "text/javascript");
		USI_dynScript.setAttribute("src", "//www.upsellit.com/hound/saveData.jsp?siteID=" + USI_siteID + "&USI_value=" + escape(USI_value) + "&USI_name=" + encodeURIComponent(USI_name) + "&USI_Session=" + dh_email_capture + "&bustCache=" + (new Date()).getTime());
		USI_headID.appendChild(USI_dynScript);
	} catch (e) {}
}


function usi_doTheSubmit() {
	var usi_email = document.getElementById("usi_email").value.toLowerCase().trim();
	if (!usi_validateEmail(usi_email)) {
		alert("Please enter an email address");
		document.getElementById("usi_email").focus();
		return;
	}
	if (!document.getElementById("usi_checkbox").checked) {
		document.getElementById("usi_age_msg").style.color = "#FF0000";
alert("Please confirm age verification");
		return;
	}
	usi_verifyValidEmail = function() {}
	USI_DirectDHPost(usi_email, 'usi_email', 13675);
	usi_LoadDynamics("httpPost_js.jsp?command=MSG&chatID="+encodeURIComponent(chatID)+"&msg="+encodeURIComponent(usi_email));
        USI_updateASession("usi_couponcode", "ASHLEY15", 86400*1);
	document.getElementById("usi_signupform").innerHTML = usi_Form2;
}


function USI_followthelink() {
	usi_followDynamicLink("http://click.linksynergy.com/fs-bin/click?id=JNLJ1ZP2xGI&subid=&offerid=407201.1&type=10&tmpid=17521&RD_PARM1="+escape(location.href));
}

function usi_checkBlurDefault(elmt) {
	if (elmt.value == "") {
		elmt.value = elmt.title;
		elmt.style.color = "#666666";
	}
}

var usi_verifyEmailID = -1;
function usi_checkFocusDefault(elmt) {
	if (elmt.title == elmt.value) {
		if (usi_verifyEmailID == -1) usi_verifyEmailID = setInterval("usi_verifyValidEmail()", 500);
		elmt.value = "";
		elmt.style.color = "#000000";
	}
}

if (typeof(usi_email_grabbed) != "undefined") {
	usi_verifyValidEmail = function() {}
	USI_DirectDHPost(usi_email_grabbed, 'usi_email', 13675);
	document.getElementById("usi_signupform").innerHTML = usi_Form2;
}



	
		timerID  = setTimeout("showChat()", 99999999*1000);
	


}

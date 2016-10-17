(function(){
 if (window.BOOMR && window.BOOMR.version) { return; }
 var dom,doc,where,iframe = document.createElement("iframe"),win = window;

 function boomerangSaveLoadTime(e) {
   win.BOOMR_onload=(e && e.timeStamp) || new Date().getTime();
 }
 if (win.addEventListener) {
   win.addEventListener("load", boomerangSaveLoadTime, false);
 } else if (win.attachEvent) {
   win.attachEvent("onload", boomerangSaveLoadTime);
 }

 iframe.src = "javascript:void(0)";
 iframe.title = ""; iframe.role = "presentation";
 (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";
 where = document.getElementsByTagName("script")[0];
 where.parentNode.insertBefore(iframe, where);

 try {
   doc = iframe.contentWindow.document;
 } catch(e) {
   dom = document.domain;
   iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";
   doc = iframe.contentWindow.document;
 }
 doc.open()._l = function() {
   var js = this.createElement("script");
   if (dom) { this.domain = dom; }
   js.id = "boomr-if-as";
     
// !Please do NOT change the order of the following IF clauses!
// Footlocker Combined Tag
// Champssports
if (location.hostname.indexOf("www.champssports.com") > -1) {
     js.src = "//c.go-mpulse.net/boomerang/7RLX9-AUQG4-ZCTC3-4SA4M-543BX";
// Eastbay
   } else if (location.hostname.indexOf("www.eastbay.com") > -1) {
     js.src = "//c.go-mpulse.net/boomerang/NY7M4-HC43V-HN87G-RBHJA-3JLKW";
// Footaction
   } else if (location.hostname.indexOf("www.footaction.com") > -1) {
     js.src = "//c.go-mpulse.net/boomerang/QSY7A-NK5EX-EC8ZX-X2J8G-QD2B3";
// Footlocker
   }  else if (location.hostname.indexOf("www.footlocker.com") > -1) {
     js.src = "//c.go-mpulse.net/boomerang/LVZPQ-EREU5-P24LN-QTAEQ-GD324";
   }  
   BOOMR_lstart=new Date().getTime();
   this.body.appendChild(js);
 };
 doc.write('<body onload="document._l();">');
 doc.close();
})();
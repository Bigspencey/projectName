_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
  var page = window.location.pathname;
  var pageUrl=window.location.href;
 
  if(page.indexOf("/c/") !== -1){
     var body = document.getElementsByTagName("body")[0];
  	 	scriptTag = document.createElement('script'),
      pageName = DDO.pageData.pageName,
      catID=pageName.slice(pageName.lastIndexOf(":")+1,pageName.length);
  	scriptTag.type = 'text/javascript';
    scriptTag.src = "//tags.mediaforge.com/js/4008/?catID="+catID;
    body.appendChild(scriptTag);
  	
  }else if(page.indexOf("/p/")!==-1){
     var body = document.getElementsByTagName("body")[0];
    var pid=DDO.productDetail.productID,
  		 	scriptTag = document.createElement('script');
  			scriptTag.type = 'text/javascript';
  			scriptTag.src = "//tags.mediaforge.com/js/4008/?prodID="+pid;
    body.appendChild(scriptTag);
  }
 else if (DDO.pageData.pageName=="afhs:Home")
  {
     var body = document.getElementsByTagName("body")[0];
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
  	scriptTag.src = "//tags.mediaforge.com/js/4008";
    body.appendChild(scriptTag);
  }
 

})();
});

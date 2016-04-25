_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
    try{
       var products=window.DDO.checkoutPages.checkoutInfo,
  		head = document.getElementsByTagName("head")[0],
    	scriptTag = document.createElement('script'),
        total=0,pIds=[];
    for(var i=0;i<products.length;i++){
      pIds.push(products[i].checkoutProductID);
      total += Number(products[i].checkoutProductPrice.replace("$",""));
    }
  	scriptTag.type = 'text/javascript';    
  	scriptTag.src = "//tags.mediaforge.com/js/4008/?cart="+total+"&prodID="+pIds.join();
  	head.appendChild(scriptTag);
    }catch(err){console.log(err)}
})();
});

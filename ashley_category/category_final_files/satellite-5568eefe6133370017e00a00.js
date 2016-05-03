_satellite.pushAsyncScript(function(event, target, $variables){
  
 // $('body').append( "<script>$(document).ajaxComplete(function(event, xhr, settings){debugger})</script>");
//if ( settings.url === "/api/thumbnails/classifications/" )

 $(document).ajaxComplete(function(event, xhr, settings){

      if (settings.url.indexOf("/AjaxPages/ProductLightBox.aspx") > -1)
      {
       
          crtName = $(".sectionTitle").find("h2").text();
					window.s.pageName=DDO.pageData.pageName+":"+crtName+'_popup';   
        
 					s.linkTrackVars = "events,products";
					s.events = s.linkTrackEvents="event56";
    			crtSKU= listing.ItemId;
  
       		s.products=";"+crtSKU+";;;";
 				  s.tl(true,"o", "Product Quickview");
       
      }
 
});

// crtName = $(this).parent().siblings("a").find("h3.description").text();
//window.s.pageName=DDO.pageData.pageName+":"+crtName+'_popup';                           

///$('body').append($('<script>$(document).bind("ajaxComplete", function(event, xhr, settings){var val = $(xhr.responseText).find("h2").text(); if (typeof val === "undefined") return; window.productNameDeferred.resolve(val);$("body").data("addata",val);});</script>'));

//s.tl(true,"o", "Product Quickview");
///crtName = $(this).parent().siblings("a").find("h3.description02").text();
///window.s.pageName=DDO.pageData.pageName+":"+crtName+'_popup';

//window.productNameDeferred = $.Deferred();

//$.when(productNameDeferred).done(function(productName){
  //alert('Product Name: ' + productName);
  
 // s.tl(true,"o", "Product Quickview");

//});
});

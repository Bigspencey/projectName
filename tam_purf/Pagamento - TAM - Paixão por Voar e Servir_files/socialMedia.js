var socialMedia=(function(){var footerEls=$("ul#menuShare");if(footerEls.length==0){return{init:function(){}};}var flightPattern=/flightId-(\d+)/;var ffPattern=/ff-(\w+)/;var socialInfo={eCityCode:clientSideData.ENTRY_REQUEST.E_LOCATION_1,eDate:footerEls.data("edate")};var _title=$("ul#menuShare").data("socialmediatitle").replace("{0}",typeof clientSideData.LOCATIONS_TRANSLATION[footerEls.data("cityiata")]!=="undefined"?clientSideData.LOCATIONS_TRANSLATION[footerEls.data("cityiata")].airport:footerEls.data("cityiata"));var _description=footerEls.data("socialmediadescription").replace("{0}",socialInfo.eDate).replace("{1}",typeof clientSideData.LOCATIONS_TRANSLATION[footerEls.data("cityiata")]!=="undefined"?clientSideData.LOCATIONS_TRANSLATION[footerEls.data("cityiata")].city:footerEls.data("cityiata"));_description=(_description.substr(0,3)=="???")?"":_description;var _bitLyProps={login:clientMessages["GLBL.social.bitly.login"],apiKey:clientMessages["GLBL.social.bitly.apikey"],password:"jjWDS10"};var _longUrl;var _requestOnGoing=false;var _maximumDelay=5000;var actionsStatusMail=false;var _tamPopupWindowName="TAM";var GAPI={connection:"",params:{}};var getThumbnail=function(){var msg=footerEls.data("thumbnail");if(msg.indexOf("not found")==-1&&msg.indexOf("undef")==-1){return msg;}else{return"../../../cui-tam_29.74_180416/air/skin/tam/"+clientSideData.SKIN+"/img/logo_int-125x61.jpg";}};var getSocialMediaImage=function(socialMediaInfoJson){var img=footerEls.data("img");return(img.substr(0,3)=="???")?undefined:img;};var baseUrl=document.location.href;baseUrl=baseUrl.substring(0,baseUrl.indexOf("/dyn/"));var _thumbnail=baseUrl;if(getThumbnail().indexOf("http://")==0){_thumbnail=getThumbnail();}else{_thumbnail+=getThumbnail();}var socialMediaImage=getSocialMediaImage(socialInfo);_thumbnail=(typeof socialMediaImage!="undefined")?socialMediaImage:_thumbnail;var callBitLy=function(longURL,success){var ud="json"+(Math.random()*100).toString().replace(/\./g,"");var API="http://api.bit.ly/v3/shorten?login="+_bitLyProps.login+"&apiKey="+_bitLyProps.apiKey+"&format=json&longUrl=";window[ud]=function(o){success&&success(o);};document.getElementsByTagName("body")[0].appendChild((function(){var s=document.createElement("script");s.type="text/javascript";s.src=API+encodeURIComponent(_longUrl)+"&callback="+ud;_requestOnGoing=true;return s;})());};var setFullLink=function(){var requestArr=clientSideData.ENTRY_REQUEST;var containsSoSite=false;for(var key in requestArr){if(requestArr.hasOwnProperty(key)){var parameterValue=requestArr[key];var parameterName=key.replace(/\s/g,"");if(parameterName.indexOf("SO_SITE_")==0){containsSoSite=true;}}if(parameterName.match("TRAVELLER_TYPE")||parameterName.match("HAS_INFANT")||parameterName.match("adults")||parameterName.match("children")||parameterName.match("infants")){delete requestArr[key];}}if(containsSoSite){requestArr["FORCE_OVERRIDE"]="TRUE";}requestArr["adults"]=1;if($(".outbound td.ff.selectedFF").length>0){requestArr["outboundPreselected"]=theUtils.getPreselectedFlight("outbound");}else{delete requestArr["outboundPreselected"];}if($(".inbound td.ff.selectedFF").length>0){requestArr["inboundPreselected"]=theUtils.getPreselectedFlight("inbound");}else{delete requestArr["inboundPreselected"];}if(typeof clientSideData.REDEMPTION_FLOW!=="undefined"&&clientSideData.REDEMPTION_FLOW=="true"){requestArr["passenger_useMyPoints"]="true";requestArr["SITE"]="JJRDJJRD";}var url="";for(var key in requestArr){if(requestArr.hasOwnProperty(key)){url+=key+"="+requestArr[key]+"&";}}if(url.substr(-1)=="&"){url=url.substr(0,url.length-1);}var protocol="http:";var hostname=location.hostname;var pathname=location.pathname.indexOf(";jsessionid")!=-1?location.pathname.substr(0,location.pathname.indexOf(";jsessionid")):location.pathname;pathname=(pathname+"").replace(/[A-z]*\$/,"");pathname=pathname.substr(0,pathname.indexOf("air/"));pathname=pathname+"air/entry";_longUrl=protocol+"//"+hostname+pathname+"?"+url;};var getShortURL=function(longURL,func){callBitLy(longURL,function(response){if(response.status_code===200){func(1,response.data.url);}else{func(0);}});};return{init:function(){var self=this;$("#facebook_link, #twitter_link").on("click",function(){setFullLink();var _this=$(this);if(this.id==="facebook_link"){self.handleFacebook(_this);}else{if(this.id==="twitter_link"){self.handleTwitter(_this);}}return false;});$("#bookmark_link").on("click",function(){setFullLink();var _this=$(this);self.handleBookmark(_this);return false;});$("#emailToSend_link").on("click",function(){setFullLink();if(!actionsStatusMail){self.handleEmail($(this));return false;}});},handleEmail:function(el){getShortURL(_longUrl,function(status,link){if(status){actionsStatusMail=true;var url=el.data("wdkPopinHref");if(typeof url!=="undefined"){if(url.indexOf("&LINK")!=-1){url=url.substr(0,url.indexOf("&LINK"));}url+="&LINK="+link;}el.data("wdkPopinHref",url);el.trigger("click");actionsStatusMail=false;}});},handleFacebook:function(obj){getShortURL(_longUrl,function(status,link){if(status){$(obj).attr("src","http://www.facebook.com/sharer.php?s=100&p[title]="+encodeURIComponent(_title)+"&p[summary]="+encodeURIComponent(_description)+"&p[url]="+link+"&p[images][0]="+encodeURIComponent(_thumbnail)+"&t="+encodeURIComponent(_title)+"&e="+encodeURIComponent(_description));window.setTimeout(function(){tamUtils.popSizedWin(obj.attr("src"),500,600);},2000);}});},handleTwitter:function(obj){getShortURL(_longUrl,function(status,link){if(status){$(obj).attr("src","http://twitter.com/share?url="+encodeURIComponent(link)+"&text="+encodeURIComponent(_title)+"&count=none");window.setTimeout(function(){tamUtils.popSizedWin(obj.attr("src"),500,600);},2000);}});},handleBookmark:function(obj){getShortURL(_longUrl,function(status,link){if(document.all){window.external.AddFavorite(link,_title);}else{if(window.sidebar){window.sidebar.addPanel(_title,link,"");}}});}};})();$(function(){socialMedia.init();});
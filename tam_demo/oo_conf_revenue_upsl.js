function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(";"),c,i;for(i=0;i<ca.length;i+=1){c=ca[i];while(c.charAt(0)===" "){c=c.substring(1,c.length);}if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}return null;}var locale=typeof ooConfig!=="undefined"?(typeof ooConfig.LANGUAGE!=="undefined"?ooConfig.LANGUAGE:"en_us"):"en_us",b2cvgn=readCookie("B2CVGN");if(b2cvgn!==null){var b2cvgnArray=b2cvgn.split("&"),localeArray=b2cvgnArray[0].split("=");if(localeArray[1]){locale=localeArray[1].toLowerCase();}}var pc=typeof ooConfig!=="undefined"?(typeof ooConfig.PAGE_CODE!=="undefined"?ooConfig.PAGE_CODE:"page_code"):"page_code",fl=typeof ooConfig!=="undefined"?(typeof ooConfig.FLOW!=="undefined"?ooConfig.FLOW:"flow"):"flow",rp=window.location.protocol+"//revenue-abandon.tam.com.br/"+locale+"/"+fl.toLowerCase()+"/"+pc.toLowerCase()+window.location.pathname+window.location.search;var oo_event=new OOo.Ocode({events:{onExit:clientSideData["WDS_ONLINE_OPINION_EXIT_PERCENT"]},cookie:{name:"oo_event",type:"domain",expiration:2592000},referrerRewrite:{replacePattern:rp},customVariables:{PAGE_CODE:pc,FLOW:fl,LANGUAGE:locale}});$("a, button, .button").click(function(){if(!$(this).hasClass("button")){if(!$(this).is("#seeAllPricesAndDates")&&!$(this).is("#menuShareButton")){oo_event.interruptShow=true;}}else{oo_event.interruptShow=true;}});
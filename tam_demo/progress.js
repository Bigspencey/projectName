$(document).ready(function(){var totalScreenWidth=1200;var pageContainerWidth=980;var widthOfArrow=13;if($("nav.main").innerWidth()<totalScreenWidth){var aWidth=0;var chkWidth=0;$("nav.main > a.fl").each(function(){aWidth+=$(this).outerWidth();});if(aWidth>0){var dif=pageContainerWidth-(aWidth-widthOfArrow);var num=$("nav.main > a.fl").size();var pct=(dif/num)/2;var padL=$("nav.main > a.fl").css("padding-left");var padR=$("nav.main > a.fl").css("padding-right");var pdL=parseInt(padL.substring(0,2));var pdR=parseInt(padR.substring(0,2));var adjpadL=pdL+pct;var adjpadR=pdR+pct;$("nav.main > a.fl").each(function(){$(this).css("padding-left",adjpadL).css("padding-right",adjpadR);});$("nav.main > a.fl").each(function(){chkWidth+=$(this).outerWidth();});var chkdif=chkWidth-933;if(chkdif>0){var chkpct=parseInt((chkdif/num)/2);$("nav.main > a.fl").each(function(){$(this).css("padding-left",(adjpadL-chkpct)).css("padding-right",(adjpadR-chkpct));});}}}});
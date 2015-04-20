
var t_MI;var timer_is_on_MI=0;var g_ConValue_MI;var g_Refresh_MI;function InitMarketIndices(Refresh,ConValue){g_ConValue_MI=ConValue;g_Refresh_MI=Refresh;LoadTimer();}
function LoadTimer(){if(!timer_is_on_MI){timer_is_on_MI=1;LoadMarketIndices();}}
function LoadMarketIndices(){Won.ICom.Code.Services.SiteAjaxService.GetMarketIndices(onGetMarketIndicesComplete);}
function return_MI_URLAttributes(getSortedIndicesValue,i){var Index=getSortedIndicesValue[i].Symbol;var point=3;var chartinfo='pvc;daily;1;';return"\'"+Index+"\'"+','+point+','+"\'"+chartinfo+"\'";}
function getIndexValuePctChangeCss(getSortedIndicesValue,i,SpecialIndex){var PctChange;if(SpecialIndex)
PctChange=getSortedIndicesValue[i].IndexVolumePctChange;else
PctChange=getSortedIndicesValue[i].IndexValuePctChange;var CssClass;if(PctChange>0){CssClass="upPercent";}
else if(PctChange<0){CssClass="downPercent";}
else
{CssClass="Percent";}
return CssClass;}
function getIndexValueChangeCss(getSortedIndicesValue,i,SpecialIndex){var Change;if(SpecialIndex)
Change=getSortedIndicesValue[i].IndexVolumeChange;else
Change=getSortedIndicesValue[i].IndexValueChange;var CssClass;if(Change>0){CssClass="upPercent";}
else if(Change<0){CssClass="downPercent";}
else
{CssClass="Percent";}
return CssClass;}
function getAppendedIndexName(getSortedIndicesValue,i,SpecialIndex){var AppendIndexName;if(getSortedIndicesValue[i].Symbol=="0S&P5"){AppendIndexName=getSortedIndicesValue[i].IndexAbbr+"*";}
if(getSortedIndicesValue[i].Symbol=="0DJIA"){AppendIndexName=getSortedIndicesValue[i].IndexAbbr+"*";}
if(getSortedIndicesValue[i].Symbol=="0NYC"){AppendIndexName=getSortedIndicesValue[i].IndexAbbr+" VOL";}
if(getSortedIndicesValue[i].Symbol=="0NDQC"){AppendIndexName=getSortedIndicesValue[i].IndexAbbr;}
if((getSortedIndicesValue[i].Symbol=="0NDQC")&&(SpecialIndex)){AppendIndexName=getSortedIndicesValue[i].IndexAbbr+" VOL";}
return AppendIndexName;}
function getAppendedText(getSortedIndicesValue,i,SpecialIndex){var AppendedText="";if(SpecialIndex){var chg=getSortedIndicesValue[i].IndexVolumeChange;chg/=1000;var MathAbsVal=Math.abs(chg);AppendedText="(MIL)";}
return AppendedText;}
function getFormattedIndexValues(getSortedIndicesValue,i,SpecialIndex){var FormattedValue;var vol=getSortedIndicesValue[i].IndexValue;FormattedValue=getFormattedValue(vol,SpecialIndex);return FormattedValue;}
function getFormattedValue(num,SpecialIndex){num=num.toString().replace(/\$|\,/g,'');if(isNaN(num))
num="0";sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);dec=num%100;num=Math.floor(num/100).toString();if(dec<10)
dec="0"+dec;for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)
num=num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));if(SpecialIndex)
return(((sign)?'':'-')+num);else
return(((sign)?'':'-')+num+'.'+dec);}
function truncate(_value){if(_value<0)return Math.ceil(_value);else return Math.floor(_value);}
function getFormattedIndexVolumes(getSortedIndicesValue,i,SpecialIndex){var FormattedVolume;var vol=getSortedIndicesValue[i].IndexVolume;vol/=1000;vol/=10;FormattedVolume=truncate(vol);FormattedVolume=getFormattedValue(FormattedVolume,SpecialIndex);return FormattedVolume;}
function getFormattedIndexVolumeChange(getSortedIndicesValue,i,SpecialIndex){var FormattedVolume;var volchg=getSortedIndicesValue[i].IndexVolumeChange;if(volchg!=0)
volchg/=1000;volchg/=10;FormattedVolume=getFormattedValue(volchg,SpecialIndex)
return FormattedVolume;}
function getArrayEntryBySymbol(arr,symbol){for(var i=0;i<arr.length;i++){if(arr[i].Symbol==symbol){return arr[i];}}
return null;}
function onGetMarketIndicesComplete(result){var getSortedIndicesValue=new Array();var dynamicHtml="";var SpecialIndex=false;if(result.marketIndices!=null){var val=getArrayEntryBySymbol(result.marketIndices,"0NDQC");if(val!=null){getSortedIndicesValue.push(val);getSortedIndicesValue.push(val);}
val=getArrayEntryBySymbol(result.marketIndices,"0NYC");if(val!=null){getSortedIndicesValue.push(val);}
val=getArrayEntryBySymbol(result.marketIndices,"0DJIA");if(val!=null){getSortedIndicesValue.push(val);}
val=getArrayEntryBySymbol(result.marketIndices,"0S&P5");if(val!=null){getSortedIndicesValue.push(val);}}
for(var i=0;i<getSortedIndicesValue.length;i++){if(((i==0)&&(getSortedIndicesValue[i].Symbol=="0NDQC"))||(getSortedIndicesValue[i].Symbol=="0NYC")){SpecialIndex=true;}
else{SpecialIndex=false;}
var IndexAbbrSpanID="spanMarketIndexAbbr_"+i.toString();var IndexValueSpanID="spanMarketIndexValue_"+i.toString();var IndexAppendedText=getAppendedText(getSortedIndicesValue,i,SpecialIndex);var IndexValuePctChangeSpanID="spanMarketIndexValuePctChange_"+i.toString();var IndexValueChangeSpanID="spanMarketIndexValueChange_"+i.toString();var getIndexName=getAppendedIndexName(getSortedIndicesValue,i,SpecialIndex);var IndexVolumePctChangeCss=getIndexValuePctChangeCss(getSortedIndicesValue,i,SpecialIndex);var IndexVolumeChangeCss=getIndexValueChangeCss(getSortedIndicesValue,i,SpecialIndex);var get_MI_URLAttributes=return_MI_URLAttributes(getSortedIndicesValue,i);dynamicHtml+="<table class=\"MarketIndexPanel\"><tr><td><span id=\""+IndexAbbrSpanID+"\" class=\"stkName\" onclick=\"javascript:jsfOpenPowerTool(";dynamicHtml+=get_MI_URLAttributes;dynamicHtml+=");return false;\" style=\"cursor: pointer;\">";dynamicHtml+=getIndexName;dynamicHtml+="</span><span class=\"stkName\" style=\"font-size: 8px; vertical-align: bottom;\">"+IndexAppendedText+"</span></td><td class=\"col2\"><span id=\""+IndexValueSpanID+"\" class=\"volume\">";if(SpecialIndex){var FormattedIndexVolumes=getFormattedIndexVolumes(getSortedIndicesValue,i,SpecialIndex);dynamicHtml+=FormattedIndexVolumes;}
else{var FormattedIndexValues=getFormattedIndexValues(getSortedIndicesValue,i,SpecialIndex);dynamicHtml+=FormattedIndexValues;}
dynamicHtml+="</span></td></tr><tr><td><span id=\""+IndexValueSpanID+"\" class=\""+IndexVolumePctChangeCss+"\">";if(SpecialIndex){dynamicHtml+=getSortedIndicesValue[i].IndexVolumePctChange+"%";}
else{dynamicHtml+=getSortedIndicesValue[i].IndexValuePctChange+"%";}
dynamicHtml+="</span></td><td class=\"col2\"><span id=\""+IndexValueChangeSpanID+"\" class=\""+IndexVolumeChangeCss+"\">";if(SpecialIndex){var FormattedIndexVolumeChange=getFormattedIndexVolumeChange(getSortedIndicesValue,i,SpecialIndex);dynamicHtml+=FormattedIndexVolumeChange;}
else{dynamicHtml+=getSortedIndicesValue[i].IndexValueChange;}
dynamicHtml+="</span></td></tr></table>";}
document.getElementById('divMarketIndices').innerHTML=dynamicHtml;t_MI=setTimeout("LoadMarketIndices()",g_Refresh_MI);}
var SocialMedia=new function(){var delaySocial=null;var gFirst=true;var fbFirst=true;var linFirst=true;var fbHeaderUrl='';this.Init=function(fbHeadUrl){fbHeaderUrl=fbHeadUrl;addSocialEvents("a.lFacebook","div.hFacebook");addSocialEvents("a.lTwitter","div.hTwitter");addSocialEvents("a.lGoogle","div.hGoogle");addSocialEvents("a.lLinkedin","div.hLinkedin");}
this.InitExternal=function(fbId,rootPath,afterInit){window.___gcfg={parsetags:'explicit'};$.getScript('https://apis.google.com/js/plusone.js',function(){gapi.plusone.go();});$(document).ready(function(){var scriptTag=document.createElement('script');scriptTag.type='text/javascript';scriptTag.async=true;scriptTag.src='https://platform.twitter.com/widgets.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(scriptTag,s);});$(document).ready(function(){var scriptTag=document.createElement('script');scriptTag.type='text/javascript';scriptTag.async=true;scriptTag.src='https://platform.linkedin.com/in.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(scriptTag,s);});window.fbAsyncInit=function(){FB.init({appId:fbId,status:true,cookie:true,oauth:true,xfbml:true});if(typeof(afterInit)!='undefined'){afterInit();}
FB.Event.subscribe('edge.create',function(response){logFBEvent(response,'fb:like');});FB.Event.subscribe('edge.remove',function(response){logFBEvent(response,'fb:unlike');});};(function(d){var js,id='facebook-jssdk',ref=d.getElementsByTagName('script')[0];if(d.getElementById(id)){return;}
js=d.createElement('script');js.id=id;js.async=true;js.src="//connect.facebook.net/en_US/all.js";ref.parentNode.insertBefore(js,ref);}(document));};this.initPInterest=function(){$.getScript('https://assets.pinterest.com/js/pinit.js');};var addSocialEvents=function(lnkSelector,divSelector){$(lnkSelector).click(function(){clearSocialMedia();showSocial(lnkSelector,divSelector);$(divSelector).mouseover(function(){showSocial(lnkSelector,divSelector);}).mouseout(function(){BeginHideSocial();});return false;}).mouseout(function(){BeginHideSocial();});$(divSelector+" .h4 span").click(function(){clearSocialMedia();});};var clearSocialMedia=function(){$(".hSocial").hide();if(typeof delaySocial!="undefined"){clearTimeout(delaySocial);}};var showSocial=function(lnkSelector,divSelector){var pos=$(lnkSelector).position();var css={'top':(pos.top-4).toString()+'px','left':(pos.left-24).toString()+'px'};$(divSelector).css(css).show();if(divSelector.toLowerCase().indexOf("google")>-1&&gFirst){gFirst=false;gapi.plus.render("GoogleBadge",{href:"https://plus.google.com/108468197399314074552",width:"260",height:"69"});}
if(divSelector.toLowerCase().indexOf("facebook")>-1&&fbFirst){fbFirst=false;$("#FacebookHeader").empty().html("<fb:like send=\"false\" width=\"90\" show_faces=\"false\" layout=\"button_count\" ref=\"header\" href=\""+fbHeaderUrl+"\"></fb:like>");FB.XFBML.parse($("#FacebookHeader")[0]);}
if(divSelector.toLowerCase().indexOf("linkedin")>-1&&linFirst){linFirst=false;}
if(typeof delaySocial!="undefined"){clearTimeout(delaySocial);}};var loadLinkedinFollow=function(){var s=document.getElementById('LinkedinHeader');var scriptTag=document.createElement('script');scriptTag.type='text/javascript';scriptTag.async=true;var att=document.createAttribute('data-id');att.nodeValue='11970';scriptTag.attributes.setNamedItem(att);att=document.createAttribute('data-counter');att.nodeValue='right';scriptTag.attributes.setNamedItem(att);att=document.createAttribute('type');att.nodeValue='IN/FollowCompany'
scriptTag.attributes.setNamedItem(att);s.appendChild(scriptTag);};var BeginHideSocial=function(){if(typeof delaySocial!="undefined"){clearTimeout(delaySocial);}
delaySocial=setTimeout(clearSocialMedia,1000);};var logFBEvent=function(href,type){try{if(typeof(s)!='undefined'){s.linkTrackVars="prop11,prop12,prop48,eVar11,eVar33,events";s.linkTrackEvents="event32";s.prop48=type;s.eVar33=type;s.events="event32";s.tl(this,"o",type+"-"+href);}}
catch(e){}};};function OAS_AD(pos,identifier){}
function OAS_IFRAME_DC(pos,identifier,iFrameId){return null;}
function OAS_IFRAME_SPONSOR_DC(pos,identifier,iFrameId,page){return null;}
function OAS_IFRAME_SITE_DC(pos,identifier,iFrameId,page,adPage){return null;}
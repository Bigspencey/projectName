var EVIMGHOST="https://evupdater.entrust.net/";var NONEVIMGHOST="https://seal.entrust.net/";var PROFILELINK="https://www.entrust.net/customer/profile.cfm";var scripts=document.getElementsByTagName('script');var myScript=scripts[scripts.length-1];var queryString=myScript.src.replace(/^[^\?]+\??/,'');var params=parseQuery(queryString);var IMGARRAY=new Array();IMGARRAY[0]=new Array("en/legacy/SSL-certificate-blank.gif","0","0","","0","0","0");IMGARRAY[1]=new Array("en/legacy/SSL-certificate-seal-ssl-animated.gif","100px","78px","en/legacy/blank_large_legacy_seal.gif","0","0","0");IMGARRAY[2]=new Array("en/legacy/SSL-certificate-seal.gif","100px","62px","en/legacy/blank_medium_legacy_seal.gif","0","0","0");IMGARRAY[3]=new Array("en/legacy/SSL-certificate-seal-ssl.gif","100px","78px","en/legacy/blank_large_legacy_seal.gif","0","0","0");IMGARRAY[4]=new Array("fr/legacy/SSL-certificate-seal-ssl-fr.gif","100px","78px","fr/legacy/blank_large_legacy_seal.gif","0","0","0");IMGARRAY[5]=new Array("fr/legacy/SSL-certificate-seal-ssl-fr-sm.gif","50px","31px","fr/legacy/blank_small_legacy_seal2.gif","0","0","0");IMGARRAY[6]=new Array("en/legacy/SSL-certificate-seal-ssl-en-sm.gif","50px","31px","en/legacy/blank_small_legacy_seal2.gif","0","0","0");IMGARRAY[7]=new Array("en/current/entrust_site_seal.png","78px","78px","en/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[8]=new Array("en/current/entrust_site_seal_greyscale.png","78px","78px","en/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[9]=new Array("en/current/entrust_site_seal_large.png","90px","90px","en/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[10]=new Array("en/current/entrust_site_seal_large_greyscale.png","90px","90px","en/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[11]=new Array("en/current/entrust_site_seal_small.png","62px","62px","en/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[12]=new Array("en/current/entrust_site_seal_small_greyscale.png","62px","62px","en/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[13]=new Array("en/legacy/legacy_seal_small.gif","31px","31px","en/legacy/blank_small_legacy_seal.gif","0","0","0");IMGARRAY[14]=new Array("en/legacy/legacy_medium_seal.gif","100px","62px","en/legacy/blank_medium_legacy_seal.gif","0","0","0");IMGARRAY[15]=new Array("en/legacy/legacy_large_seal.gif","100px","78px","en/legacy/blank_large_legacy_seal.gif","0","0","0");IMGARRAY[16]=new Array("en/current/entrust_site_seal_xs.png","52px","52px","en/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[17]=new Array("en/current/entrust_site_seal_xs_greyscale.png","52px","52px","en/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[18]=new Array("fr/current/french_site_seal_medium.png","78px","78px","fr/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[19]=new Array("fr/current/french_site_seal_medium_greyscale.png","78px","78px","fr/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[20]=new Array("fr/current/french_site_seal_lg.png","90px","90px","fr/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[21]=new Array("fr/current/french_site_seal_lg_greyscale.png","90px","90px","fr/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[22]=new Array("fr/current/french_site_seal_sm.png","62px","62px","fr/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[23]=new Array("fr/current/french_site_seal_sm_greyscale.png","62px","62px","fr/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[24]=new Array("fr/current/french_site_seal_xs.png","52px","52px","fr/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[25]=new Array("fr/current/french_site_seal_xs_greyscale.png","52px","52px","fr/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[26]=new Array("jp/current/entrust_site_seal_jp.png","78px","78px","jp/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[27]=new Array("jp/current/entrust_site_seal_greyscale_jp.png","78px","78px","jp/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[28]=new Array("jp/current/entrust_site_seal_large_jp.png","90px","90px","jp/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[29]=new Array("jp/current/entrust_site_seal_large_greyscale_jp.png","90px","90px","jp/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[30]=new Array("jp/current/entrust_site_seal_small_jp.png","62px","62px","jp/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[31]=new Array("jp/current/entrust_site_seal_small_greyscale_jp.png","62px","62px","jp/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[32]=new Array("jp/current/entrust_site_seal_xs_jp.png","52px","52px","jp/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[33]=new Array("jp/current/entrust_site_seal_xs_greyscale_jp.png","52px","52px","jp/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[34]=new Array("de/current/entrust_site_seal_ssl-german-78x.png","78px","78px","de/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[35]=new Array("de/current/entrust_site_seal_ssl-german-grey-78x.png","78px","78px","de/current/blank_medium_seal.gif","47px","32px","9px");IMGARRAY[36]=new Array("de/current/entrust_site_seal_ssl-german-90x.png","90px","90px","de/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[37]=new Array("de/current/entrust_site_seal_ssl-german-grey-90x.png","90px","90px","de/current/blank_large_seal.gif","54px","38px","9px");IMGARRAY[38]=new Array("de/current/entrust_site_seal_ssl-german-62x.png","62px","62px","de/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[39]=new Array("de/current/entrust_site_seal_ssl-german-grey-62x.png","62px","62px","de/current/blank_small_seal.gif","37px","23px","9px");IMGARRAY[40]=new Array("de/current/entrust_site_seal_ssl-german-52x.png","52px","52px","de/current/blank_xs_seal.gif","30px","17px","9px");IMGARRAY[41]=new Array("de/current/entrust_site_seal_ssl-german-grey-52x.png","52px","52px","de/current/blank_xs_seal.gif","30px","17px","9px");var div1=randomstring();var div2=randomstring();var div3=randomstring();function BrowserDetect(){var ua=navigator.userAgent.toLowerCase();this.isOpera=(ua.indexOf('opera')!=-1);this.isIE=(ua.indexOf('msie')!=-1&&!this.isOpera&&(ua.indexOf('webtv')==-1));var vMinor=parseFloat(navigator.appVersion);if(this.isIE&&vMinor>=4){vMinor=parseFloat(ua.substring(ua.indexOf('msie ')+5))}var vMajor=parseInt(vMinor);this.isWin32=((ua.indexOf('win')!=-1)&&(ua.indexOf('95')!=-1||ua.indexOf('98')!=-1||ua.indexOf('nt')!=-1||ua.indexOf('win32')!=-1||ua.indexOf('32bit')!=-1||ua.indexOf('xp')!=-1));this.isIE55=(this.isIE&&vMinor==5.5&&this.isWin32);this.isIE6up=(this.isIE&&vMajor>=6&&this.isWin32);this.isIE7up=(this.isIE&&vMajor>=7);this.isIE10up=(this.isIE&&vMajor>=10)}var browser=new BrowserDetect();if((browser.isIE55||browser.isIE6up)&&!browser.isIE10up){var pngAlpha=true}function parseQuery(query){var Params=new Object();if(!query)return Params;var Pairs=query.split(/[;&]/);for(var i=0;i<Pairs.length;i++){var KeyVal=Pairs[i].split('=');if(!KeyVal||KeyVal.length!=2)continue;var key=unescape(KeyVal[0]);var val=unescape(KeyVal[1]);val=val.replace(/\+/g,' ');Params[key]=val}return Params}try{if(params['img']==1||params['img']==2||params['img']==3||params['img']==4||params['img']==5||params['img']==6||params['img']==13||params['img']==14||params['img']==15)document.write('<a href="'+PROFILELINK+'?domain='+params['domain']+((params['img']==4||params['img']==5)?'&french=1':'')+'" target="_blank"><img src="'+((browser.isIE7up)?EVIMGHOST:NONEVIMGHOST)+IMGARRAY[params['img']][0]+'" border="0" ALT="Secured By Entrust, SSL (Secure Sockets Layer). Verify"></a>');else if(params['img']==0){document.write('<img src="'+((browser.isIE7up)?EVIMGHOST:NONEVIMGHOST)+IMGARRAY[params['img']][0]+'">')}else{document.write('<div id="'+div1+'">');document.write('<div id="'+div2+'"><a href="about:blank">'+'<img src="'+((browser.isIE7up)?EVIMGHOST:NONEVIMGHOST)+IMGARRAY[params['img']][0]+'">'+'</a></div>');document.write('<div id="'+div3+'">')}}catch(e){}function goEntrust(){document.write('</div></div>');var v=document.getElementById(div1);v.style.position="relative";v.style.width=IMGARRAY[params['img']][1];var d=document.getElementById(div2);d.style.width=IMGARRAY[params['img']][1];d.style.height=IMGARRAY[params['img']][2];var a=d.getElementsByTagName("a");var l='en';if(params['img']==4||params['img']==5||params['img']==18||params['img']==19||params['img']==20||params['img']==21||params['img']==22||params['img']==23||params['img']==24||params['img']==25)l='fr';else if(params['img']==34||params['img']==35||params['img']==36||params['img']==37||params['img']==38||params['img']==39||params['img']==40||params['img']==41)l='de';a[0].target="_blank";if(l=='fr')a[0].href=PROFILELINK+'?domain='+params['domain']+'&french=1';else a[0].href=PROFILELINK+'?domain='+params['domain']+'&lang='+l;a[0].style.position="relative";var b=d.getElementsByTagName("img");b[0].style.border=0;b[0].alt="Secured By Entrust, SSL (Secure Sockets Layer). Verify";var w=document.getElementById(div3);var x=w.getElementsByTagName("a");if(x.length==0){var aTag=document.createElement("a");aTag.href="http://www.entrust.net";aTag.innerHTML="SSL";w.appendChild(aTag)}for(var i=0;i<x.length;i++){word=x[i].innerHTML.toUpperCase();if(word!='SSL')x[i].innerHTML="SSL";x[i].style.position="absolute";x[i].target="_blank";x[i].style.textDecoration="none";x[i].style.textTransform="uppercase";x[i].style.color="#a2a4a6";x[i].style.lineHeight="9pt";x[i].style.top=IMGARRAY[params['img']][4];x[i].style.left=IMGARRAY[params['img']][5];x[i].style.fontSize=IMGARRAY[params['img']][6];x[i].style.fontFamily="Arial, sans-serif";x[i].style.fontWeight="normal"}}function randomstring(){var choices="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";var str="";for(var i=0;i<10;i++){str=str+choices.charAt(Math.floor(Math.random()*choices.length))}return str}
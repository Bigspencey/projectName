/* Minification failed. Returning unminified contents.
(444,33-34): run-time error JS1013: Syntax error in regular expression: ;
 */
/*! jQuery UI - v1.10.4 - 2014-04-02
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(n,t){function i(t,i){var u,f,e,o=t.nodeName.toLowerCase();return"area"===o?(u=t.parentNode,f=u.name,!t.href||!f||u.nodeName.toLowerCase()!=="map")?!1:(e=n("img[usemap=#"+f+"]")[0],!!e&&r(e)):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&r(t)}function r(t){return n.expr.filters.visible(t)&&!n(t).parents().addBack().filter(function(){return n.css(this,"visibility")==="hidden"}).length}var u=0,f=/^ui-id-\d+$/;n.ui=n.ui||{};n.extend(n.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});n.fn.extend({focus:function(t){return function(i,r){return typeof i=="number"?this.each(function(){var t=this;setTimeout(function(){n(t).focus();r&&r.call(t)},i)}):t.apply(this,arguments)}}(n.fn.focus),scrollParent:function(){var t;return t=n.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(n.css(this,"position"))&&/(auto|scroll)/.test(n.css(this,"overflow")+n.css(this,"overflow-y")+n.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(n.css(this,"overflow")+n.css(this,"overflow-y")+n.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?n(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var r=n(this[0]),u,f;r.length&&r[0]!==document;){if(u=r.css("position"),(u==="absolute"||u==="relative"||u==="fixed")&&(f=parseInt(r.css("zIndex"),10),!isNaN(f)&&f!==0))return f;r=r.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})},removeUniqueId:function(){return this.each(function(){f.test(this.id)&&n(this).removeAttr("id")})}});n.extend(n.expr[":"],{data:n.expr.createPseudo?n.expr.createPseudo(function(t){return function(i){return!!n.data(i,t)}}):function(t,i,r){return!!n.data(t,r[3])},focusable:function(t){return i(t,!isNaN(n.attr(t,"tabindex")))},tabbable:function(t){var r=n.attr(t,"tabindex"),u=isNaN(r);return(u||r>=0)&&i(t,!u)}});n("<a>").outerWidth(1).jquery||n.each(["Width","Height"],function(i,r){function e(t,i,r,u){return n.each(o,function(){i-=parseFloat(n.css(t,"padding"+this))||0;r&&(i-=parseFloat(n.css(t,"border"+this+"Width"))||0);u&&(i-=parseFloat(n.css(t,"margin"+this))||0)}),i}var o=r==="Width"?["Left","Right"]:["Top","Bottom"],u=r.toLowerCase(),f={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:n.fn.outerHeight};n.fn["inner"+r]=function(i){return i===t?f["inner"+r].call(this):this.each(function(){n(this).css(u,e(this,i)+"px")})};n.fn["outer"+r]=function(t,i){return typeof t!="number"?f["outer"+r].call(this,t):this.each(function(){n(this).css(u,e(this,t,!0,i)+"px")})}});n.fn.addBack||(n.fn.addBack=function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))});n("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(n.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,n.camelCase(i)):t.call(this)}}(n.fn.removeData));n.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());n.support.selectstart="onselectstart"in document.createElement("div");n.fn.extend({disableSelection:function(){return this.bind((n.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(n){n.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});n.extend(n.ui,{plugin:{add:function(t,i,r){var u,f=n.ui[t].prototype;for(u in r)f.plugins[u]=f.plugins[u]||[],f.plugins[u].push([i,r[u]])},call:function(n,t,i){var r,u=n.plugins[t];if(u&&n.element[0].parentNode&&n.element[0].parentNode.nodeType!==11)for(r=0;r<u.length;r++)n.options[u[r][0]]&&u[r][1].apply(n.element,i)}},hasScroll:function(t,i){if(n(t).css("overflow")==="hidden")return!1;var r=i&&i==="left"?"scrollLeft":"scrollTop",u=!1;return t[r]>0?!0:(t[r]=1,u=t[r]>0,t[r]=0,u)}})})(jQuery),function(n,t){var r=0,i=Array.prototype.slice,u=n.cleanData;n.cleanData=function(t){for(var i=0,r;(r=t[i])!=null;i++)try{n(r).triggerHandler("remove")}catch(f){}u(t)};n.widget=function(t,i,r){var s,f,u,o,h={},e=t.split(".")[0];t=t.split(".")[1];s=e+"-"+t;r||(r=i,i=n.Widget);n.expr[":"][s.toLowerCase()]=function(t){return!!n.data(t,s)};n[e]=n[e]||{};f=n[e][t];u=n[e][t]=function(n,t){if(!this._createWidget)return new u(n,t);arguments.length&&this._createWidget(n,t)};n.extend(u,f,{version:r.version,_proto:n.extend({},r),_childConstructors:[]});o=new i;o.options=n.widget.extend({},o.options);n.each(r,function(t,r){if(!n.isFunction(r)){h[t]=r;return}h[t]=function(){var n=function(){return i.prototype[t].apply(this,arguments)},u=function(n){return i.prototype[t].apply(this,n)};return function(){var i=this._super,f=this._superApply,t;return this._super=n,this._superApply=u,t=r.apply(this,arguments),this._super=i,this._superApply=f,t}}()});u.prototype=n.widget.extend(o,{widgetEventPrefix:f?o.widgetEventPrefix||t:t},h,{constructor:u,namespace:e,widgetName:t,widgetFullName:s});f?(n.each(f._childConstructors,function(t,i){var r=i.prototype;n.widget(r.namespace+"."+r.widgetName,u,i._proto)}),delete f._childConstructors):i._childConstructors.push(u);n.widget.bridge(t,u)};n.widget.extend=function(r){for(var o=i.call(arguments,1),e=0,s=o.length,u,f;e<s;e++)for(u in o[e])f=o[e][u],o[e].hasOwnProperty(u)&&f!==t&&(r[u]=n.isPlainObject(f)?n.isPlainObject(r[u])?n.widget.extend({},r[u],f):n.widget.extend({},f):f);return r};n.widget.bridge=function(r,u){var f=u.prototype.widgetFullName||r;n.fn[r]=function(e){var h=typeof e=="string",o=i.call(arguments,1),s=this;return e=!h&&o.length?n.widget.extend.apply(null,[e].concat(o)):e,h?this.each(function(){var i,u=n.data(this,f);return u?!n.isFunction(u[e])||e.charAt(0)==="_"?n.error("no such method '"+e+"' for "+r+" widget instance"):(i=u[e].apply(u,o),i!==u&&i!==t?(s=i&&i.jquery?s.pushStack(i.get()):i,!1):void 0):n.error("cannot call methods on "+r+" prior to initialization; attempted to call method '"+e+"'")}):this.each(function(){var t=n.data(this,f);t?t.option(e||{})._init():n.data(this,f,new u(e,this))}),s}};n.Widget=function(){};n.Widget._childConstructors=[];n.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=n(i||this.defaultElement||this)[0];this.element=n(i);this.uuid=r++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=n.widget.extend({},this.options,this._getCreateOptions(),t);this.bindings=n();this.hoverable=n();this.focusable=n();i!==this&&(n.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(n){n.target===i&&this.destroy()}}),this.document=n(i.style?i.ownerDocument:i.document||i),this.window=n(this.document[0].defaultView||this.document[0].parentWindow));this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:n.noop,_getCreateEventData:n.noop,_create:n.noop,_init:n.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:n.noop,widget:function(){return this.element},option:function(i,r){var o=i,u,f,e;if(arguments.length===0)return n.widget.extend({},this.options);if(typeof i=="string")if(o={},u=i.split("."),i=u.shift(),u.length){for(f=o[i]=n.widget.extend({},this.options[i]),e=0;e<u.length-1;e++)f[u[e]]=f[u[e]]||{},f=f[u[e]];if(i=u.pop(),arguments.length===1)return f[i]===t?null:f[i];f[i]=r}else{if(arguments.length===1)return this.options[i]===t?null:this.options[i];o[i]=r}return this._setOptions(o),this},_setOptions:function(n){for(var t in n)this._setOption(t,n[t]);return this},_setOption:function(n,t){return this.options[n]=t,n==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,r){var f,u=this;typeof t!="boolean"&&(r=i,i=t,t=!1);r?(i=f=n(i),this.bindings=this.bindings.add(i)):(r=i,i=this.element,f=this.widget());n.each(r,function(r,e){function o(){if(t||u.options.disabled!==!0&&!n(this).hasClass("ui-state-disabled"))return(typeof e=="string"?u[e]:e).apply(u,arguments)}typeof e!="string"&&(o.guid=e.guid=e.guid||o.guid||n.guid++);var s=r.match(/^(\w+)\s*(.*)$/),h=s[1]+u.eventNamespace,c=s[2];c?f.delegate(c,h,o):i.bind(h,o)})},_off:function(n,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;n.unbind(t).undelegate(t)},_delay:function(n,t){function r(){return(typeof n=="string"?i[n]:n).apply(i,arguments)}var i=this;return setTimeout(r,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:function(t){n(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){n(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(t,{focusin:function(t){n(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){n(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,r){var u,f,e=this.options[t];if(r=r||{},i=n.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],f=i.originalEvent,f)for(u in f)u in i||(i[u]=f[u]);return this.element.trigger(i,r),!(n.isFunction(e)&&e.apply(this.element[0],[i].concat(r))===!1||i.isDefaultPrevented())}};n.each({show:"fadeIn",hide:"fadeOut"},function(t,i){n.Widget.prototype["_"+t]=function(r,u,f){typeof u=="string"&&(u={effect:u});var o,e=u?u===!0||typeof u=="number"?i:u.effect||i:t;u=u||{};typeof u=="number"&&(u={duration:u});o=!n.isEmptyObject(u);u.complete=f;u.delay&&r.delay(u.delay);o&&n.effects&&n.effects.effect[e]?r[t](u):e!==t&&r[e]?r[e](u.duration,u.easing,f):r.queue(function(i){n(this)[t]();f&&f.call(r[0]);i()})}})}(jQuery),function(n){var t=!1;n(document).mouseup(function(){t=!1});n.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(n){return t._mouseDown(n)}).bind("click."+this.widgetName,function(i){if(!0===n.data(i.target,t.widgetName+".preventClickEvent"))return n.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i);this._mouseDownEvent=i;var r=this,u=i.which===1,f=typeof this.options.cancel=="string"&&i.target.nodeName?n(i.target).closest(this.options.cancel).length:!1;return!u||f||!this._mouseCapture(i)?!0:(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted))?(i.preventDefault(),!0):(!0===n.data(i.target,this.widgetName+".preventClickEvent")&&n.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(n){return r._mouseMove(n)},this._mouseUpDelegate=function(n){return r._mouseUp(n)},n(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)}},_mouseMove:function(t){return n.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(n){return Math.max(Math.abs(this._mouseDownEvent.pageX-n.pageX),Math.abs(this._mouseDownEvent.pageY-n.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(n,t){function a(n,t,i){return[parseFloat(n[0])*(l.test(n[0])?t/100:1),parseFloat(n[1])*(l.test(n[1])?i/100:1)]}function u(t,i){return parseInt(n.css(t,i),10)||0}function y(t){var i=t[0];return i.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:n.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}n.ui=n.ui||{};var f,r=Math.max,i=Math.abs,e=Math.round,o=/left|center|right/,s=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,l=/%$/,v=n.fn.position;n.position={scrollbarWidth:function(){if(f!==t)return f;var u,r,i=n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),e=i.children()[0];return n("body").append(i),u=e.offsetWidth,i.css("overflow","scroll"),r=e.offsetWidth,u===r&&(r=i[0].clientWidth),i.remove(),f=u-r},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),u=i==="scroll"||i==="auto"&&t.width<t.element[0].scrollWidth,f=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:f?n.position.scrollbarWidth():0,height:u?n.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=n(t||window),r=n.isWindow(i[0]),u=!!i[0]&&i[0].nodeType===9;return{element:i,isWindow:r,isDocument:u,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:r?i.width():i.outerWidth(),height:r?i.height():i.outerHeight()}}};n.fn.position=function(t){if(!t||!t.of)return v.apply(this,arguments);t=n.extend({},t);var b,f,l,w,p,d,g=n(t.of),tt=n.position.getWithinInfo(t.within),it=n.position.getScrollInfo(tt),k=(t.collision||"flip").split(" "),nt={};return d=y(g),g[0].preventDefault&&(t.at="left top"),f=d.width,l=d.height,w=d.offset,p=n.extend({},w),n.each(["my","at"],function(){var n=(t[this]||"").split(" "),i,r;n.length===1&&(n=o.test(n[0])?n.concat(["center"]):s.test(n[0])?["center"].concat(n):["center","center"]);n[0]=o.test(n[0])?n[0]:"center";n[1]=s.test(n[1])?n[1]:"center";i=h.exec(n[0]);r=h.exec(n[1]);nt[this]=[i?i[0]:0,r?r[0]:0];t[this]=[c.exec(n[0])[0],c.exec(n[1])[0]]}),k.length===1&&(k[1]=k[0]),t.at[0]==="right"?p.left+=f:t.at[0]==="center"&&(p.left+=f/2),t.at[1]==="bottom"?p.top+=l:t.at[1]==="center"&&(p.top+=l/2),b=a(nt.at,f,l),p.left+=b[0],p.top+=b[1],this.each(function(){var y,d,s=n(this),h=s.outerWidth(),c=s.outerHeight(),rt=u(this,"marginLeft"),ut=u(this,"marginTop"),ft=h+rt+u(this,"marginRight")+it.width,et=c+ut+u(this,"marginBottom")+it.height,o=n.extend({},p),v=a(nt.my,s.outerWidth(),s.outerHeight());t.my[0]==="right"?o.left-=h:t.my[0]==="center"&&(o.left-=h/2);t.my[1]==="bottom"?o.top-=c:t.my[1]==="center"&&(o.top-=c/2);o.left+=v[0];o.top+=v[1];n.support.offsetFractions||(o.left=e(o.left),o.top=e(o.top));y={marginLeft:rt,marginTop:ut};n.each(["left","top"],function(i,r){n.ui.position[k[i]]&&n.ui.position[k[i]][r](o,{targetWidth:f,targetHeight:l,elemWidth:h,elemHeight:c,collisionPosition:y,collisionWidth:ft,collisionHeight:et,offset:[b[0]+v[0],b[1]+v[1]],my:t.my,at:t.at,within:tt,elem:s})});t.using&&(d=function(n){var u=w.left-o.left,v=u+f-h,e=w.top-o.top,y=e+l-c,a={target:{element:g,left:w.left,top:w.top,width:f,height:l},element:{element:s,left:o.left,top:o.top,width:h,height:c},horizontal:v<0?"left":u>0?"right":"center",vertical:y<0?"top":e>0?"bottom":"middle"};f<h&&i(u+v)<f&&(a.horizontal="center");l<c&&i(e+y)<l&&(a.vertical="middle");a.important=r(i(u),i(v))>r(i(e),i(y))?"horizontal":"vertical";t.using.call(this,n,a)});s.offset(n.extend(o,{using:d}))})};n.ui.position={fit:{left:function(n,t){var e=t.within,u=e.isWindow?e.scrollLeft:e.offset.left,o=e.width,s=n.left-t.collisionPosition.marginLeft,i=u-s,f=s+t.collisionWidth-o-u,h;t.collisionWidth>o?i>0&&f<=0?(h=n.left+i+t.collisionWidth-o-u,n.left+=i-h):n.left=f>0&&i<=0?u:i>f?u+o-t.collisionWidth:u:i>0?n.left+=i:f>0?n.left-=f:n.left=r(n.left-s,n.left)},top:function(n,t){var o=t.within,u=o.isWindow?o.scrollTop:o.offset.top,e=t.within.height,s=n.top-t.collisionPosition.marginTop,i=u-s,f=s+t.collisionHeight-e-u,h;t.collisionHeight>e?i>0&&f<=0?(h=n.top+i+t.collisionHeight-e-u,n.top+=i-h):n.top=f>0&&i<=0?u:i>f?u+e-t.collisionHeight:u:i>0?n.top+=i:f>0?n.top-=f:n.top=r(n.top-s,n.top)}},flip:{left:function(n,t){var r=t.within,y=r.offset.left+r.scrollLeft,c=r.width,o=r.isWindow?r.scrollLeft:r.offset.left,l=n.left-t.collisionPosition.marginLeft,a=l-o,v=l+t.collisionWidth-c-o,u=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,f=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,e=-2*t.offset[0],s,h;a<0?(s=n.left+u+f+e+t.collisionWidth-c-y,(s<0||s<i(a))&&(n.left+=u+f+e)):v>0&&(h=n.left-t.collisionPosition.marginLeft+u+f+e-o,(h>0||i(h)<v)&&(n.left+=u+f+e))},top:function(n,t){var r=t.within,y=r.offset.top+r.scrollTop,a=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=n.top-t.collisionPosition.marginTop,s=v-o,h=v+t.collisionHeight-a-o,p=t.my[1]==="top",u=p?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,f=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,e=-2*t.offset[1],c,l;s<0?(l=n.top+u+f+e+t.collisionHeight-a-y,n.top+u+f+e>s&&(l<0||l<i(s))&&(n.top+=u+f+e)):h>0&&(c=n.top-t.collisionPosition.marginTop+u+f+e-o,n.top+u+f+e>h&&(c>0||i(c)<h)&&(n.top+=u+f+e))}},flipfit:{left:function(){n.ui.position.flip.left.apply(this,arguments);n.ui.position.fit.left.apply(this,arguments)},top:function(){n.ui.position.flip.top.apply(this,arguments);n.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,r,u,f,e=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(e?"div":"body");r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};e&&n.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in r)t.style[f]=r[f];t.appendChild(o);i=e||document.documentElement;i.insertBefore(t,i.firstChild);o.style.cssText="position: absolute; left: 10.7432222px;";u=n(o).offset().left;n.support.offsetFractions=u>10&&u<11;t.innerHTML="";i.removeChild(t)}()}(jQuery),function(n){var r=0,t={},i={};t.height=t.paddingTop=t.paddingBottom=t.borderTopWidth=t.borderBottomWidth="hide";i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show";n.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=n();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");t.collapsible||t.active!==!1&&t.active!=null||(t.active=0);this._processPanels();t.active<0&&(t.active+=this.headers.length);this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():n(),content:this.active.length?this.active.next():n()}},_createIcons:function(){var t=this.options.icons;t&&(n("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var n;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")});this._destroyIcons();n=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")});this.options.heightStyle!=="content"&&n.css("height","")},_setOption:function(n,t){if(n==="active"){this._activate(t);return}n==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t));this._super(n,t);n!=="collapsible"||t||this.options.active!==!1||this._activate(0);n==="icons"&&(this._destroyIcons(),t&&this._createIcons());n==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=n.ui.keyCode,u=this.headers.length,f=this.headers.index(t.target),r=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(f+1)%u];break;case i.LEFT:case i.UP:r=this.headers[(f-1+u)%u];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[u-1]}r&&(n(t.target).attr("tabIndex",-1),n(r).attr("tabIndex",0),r.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===n.ui.keyCode.UP&&t.ctrlKey&&n(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();(t.active!==!1||t.collapsible!==!0)&&this.headers.length?t.active===!1?this._activate(0):this.active.length&&!n.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=n()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active):(t.active=!1,this.active=n());this._destroyIcons();this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,i=this.options,u=i.heightStyle,e=this.element.parent(),f=this.accordionId="ui-accordion-"+(this.element.attr("id")||++r);this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(t){var i=n(this),r=i.attr("id"),e=i.next(),u=e.attr("id");r||(r=f+"-header-"+t,i.attr("id",r));u||(u=f+"-panel-"+t,e.attr("id",u));i.attr("aria-controls",u);e.attr("aria-labelledby",r)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0);this._createIcons();this._setupEvents(i.event);u==="fill"?(t=e.height(),this.element.siblings(":visible").each(function(){var i=n(this),r=i.css("position");r!=="absolute"&&r!=="fixed"&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=n(this).outerHeight(!0)}),this.headers.next().each(function(){n(this).height(Math.max(0,t-n(this).innerHeight()+n(this).height()))}).css("overflow","auto")):u==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,n(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:n.noop}))},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):n()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&n.each(t.split(" "),function(n,t){i[t]="_eventHandler"});this._off(this.headers.add(this.headers.next()));this._on(this.headers,i);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,u=this.active,r=n(t.currentTarget),f=r[0]===u[0],e=f&&i.collapsible,s=e?n():r.next(),h=u.next(),o={oldHeader:u,oldPanel:h,newHeader:e?n():r,newPanel:s};(t.preventDefault(),(!f||i.collapsible)&&this._trigger("beforeActivate",t,o)!==!1)&&(i.active=e?!1:this.headers.index(r),this.active=f?n():r,this._toggle(o),u.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),f||(r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),r.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var r=t.newPanel,i=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0);this.prevShow=r;this.prevHide=i;this.options.animate?this._animate(r,i,t):(i.hide(),r.show(),this._toggleComplete(t));i.attr({"aria-hidden":"true"});i.prev().attr("aria-selected","false");r.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):r.length&&this.headers.filter(function(){return n(this).attr("tabIndex")===0}).attr("tabIndex",-1);r.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(n,r,u){var l,f,e,a=this,h=0,v=n.length&&(!r.length||n.index()<r.index()),s=this.options.animate||{},o=v&&s.down||s,c=function(){a._toggleComplete(u)};if(typeof o=="number"&&(e=o),typeof o=="string"&&(f=o),f=f||o.easing||s.easing,e=e||o.duration||s.duration,!r.length)return n.animate(i,e,f,c);if(!n.length)return r.animate(t,e,f,c);l=n.show().outerHeight();r.animate(t,{duration:e,easing:f,step:function(n,t){t.now=Math.round(n)}});n.hide().animate(i,{duration:e,easing:f,complete:c,step:function(n,t){t.now=Math.round(n);t.prop!=="height"?h+=t.now:a.options.heightStyle!=="content"&&(t.now=Math.round(l-r.outerHeight()-h),h=0)}})},_toggleComplete:function(n){var t=n.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");t.length&&(t.parent()[0].className=t.parent()[0].className);this._trigger("activate",null,n)}})}(jQuery),function(n){n.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,r,u=this.element[0].nodeName.toLowerCase(),f=u==="textarea",e=u==="input";this.isMultiLine=f?!0:e?!1:this.element.prop("isContentEditable");this.valueMethod=this.element[f||e?"val":"text"];this.isNewMenu=!0;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(u){if(this.element.prop("readOnly")){t=!0;r=!0;i=!0;return}t=!1;r=!1;i=!1;var f=n.ui.keyCode;switch(u.keyCode){case f.PAGE_UP:t=!0;this._move("previousPage",u);break;case f.PAGE_DOWN:t=!0;this._move("nextPage",u);break;case f.UP:t=!0;this._keyEvent("previous",u);break;case f.DOWN:t=!0;this._keyEvent("next",u);break;case f.ENTER:case f.NUMPAD_ENTER:this.menu.active&&(t=!0,u.preventDefault(),this.menu.select(u));break;case f.TAB:this.menu.active&&this.menu.select(u);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(u),u.preventDefault());break;default:i=!0;this._searchTimeout(u)}},keypress:function(r){if(t){t=!1;(!this.isMultiLine||this.menu.element.is(":visible"))&&r.preventDefault();return}if(!i){var u=n.ui.keyCode;switch(r.keyCode){case u.PAGE_UP:this._move("previousPage",r);break;case u.PAGE_DOWN:this._move("nextPage",r);break;case u.UP:this._keyEvent("previous",r);break;case u.DOWN:this._keyEvent("next",r)}}},input:function(n){if(r){r=!1;n.preventDefault();return}this._searchTimeout(n)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(n){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(n);this._change(n)}});this._initSource();this.menu=n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");this._on(this.menu.element,{mousedown:function(t){t.preventDefault();this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];n(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target===t.element[0]||r.target===i||n.contains(i,r.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))){this.menu.blur();this.document.one("mousemove",function(){n(t.target).trigger(t.originalEvent)});return}var r=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(n,t){var i=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r;this.selectedItem=i}));!1!==this._trigger("select",n,{item:i})&&this._value(i.value);this.term=this._value();this.close(n);this.selectedItem=i}});this.liveRegion=n("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(n,t){this._super(n,t);n==="source"&&this._initSource();n==="appendTo"&&this.menu.element.appendTo(this._appendTo());n==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?n(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var i,r,t=this;n.isArray(this.options.source)?(i=this.options.source,this.source=function(t,r){r(n.ui.autocomplete.filter(i,t.term))}):typeof this.options.source=="string"?(r=this.options.source,this.source=function(i,u){t.xhr&&t.xhr.abort();t.xhr=n.ajax({url:r,data:i,dataType:"json",success:function(n){u(n)},error:function(){u([])}})}):this.source=this.options.source},_searchTimeout:function(n){clearTimeout(this.searching);this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,n))},this.options.delay)},search:function(n,t){return(n=n!=null?n:this._value(),this.term=this._value(),n.length<this.options.minLength)?this.close(t):this._trigger("search",t)===!1?void 0:this._search(n)},_search:function(n){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=!1;this.source({term:n},this._response())},_response:function(){var t=++this.requestIndex;return n.proxy(function(n){t===this.requestIndex&&this.__response(n);this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(n){n&&(n=this._normalize(n));this._trigger("response",null,{content:n});!this.options.disabled&&n&&n.length&&!this.cancelSearch?(this._suggest(n),this._trigger("open")):this._close()},close:function(n){this.cancelSearch=!0;this._close(n)},_close:function(n){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",n))},_change:function(n){this.previous!==this._value()&&this._trigger("change",n,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:n.map(t,function(t){return typeof t=="string"?{label:t,value:t}:n.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t);this.isNewMenu=!0;this.menu.refresh();i.show();this._resizeMenu();i.position(n.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var n=this.menu.element;n.outerWidth(Math.max(n.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var r=this;n.each(i,function(n,i){r._renderItemData(t,i)})},_renderItemData:function(n,t){return this._renderItem(n,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return n("<li>").append(n("<a>").text(i.label)).appendTo(t)},_move:function(n,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(n)||this.menu.isLastItem()&&/^next/.test(n)){this._value(this.term);this.menu.blur();return}this.menu[n](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(n,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(n,t),t.preventDefault())}});n.extend(n.ui.autocomplete,{escapeRegex:function(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var r=new RegExp(n.ui.autocomplete.escapeRegex(i),"i");return n.grep(t,function(n){return r.test(n.label||n.value||n)})}});n.widget("ui.autocomplete",n.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(n){return n+(n>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(n){var t;(this._superApply(arguments),this.options.disabled||this.cancelSearch)||(t=n&&n.length?this.options.messages.results(n.length):this.options.messages.noResults,this.liveRegion.text(t))}})}(jQuery),function(n){var t,i="ui-button ui-widget ui-state-default ui-corner-all",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=n(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},u=function(t){var i=t.name,r=t.form,u=n([]);return i&&(i=i.replace(/'/g,"\\'"),u=r?n(r).find("[name='"+i+"']"):n("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),u};n.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f);typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled);this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var e=this,r=this.options,o=this.type==="checkbox"||this.type==="radio",s=o?"":"ui-state-active";r.label===null&&(r.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html());this._hoverable(this.buttonElement);this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===t&&n(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||n(this).removeClass(s)}).bind("click"+this.eventNamespace,function(n){r.disabled&&(n.preventDefault(),n.stopImmediatePropagation())});this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}});o&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()});this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled)return!1;n(this).addClass("ui-state-active");e.buttonElement.attr("aria-pressed","true");var t=e.element[0];u(t).not(t).map(function(){return n(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(r.disabled)return!1;n(this).addClass("ui-state-active");t=this;e.document.one("mouseup",function(){t=null})}).bind("mouseup"+this.eventNamespace,function(){if(r.disabled)return!1;n(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(r.disabled)return!1;(t.keyCode===n.ui.keyCode.SPACE||t.keyCode===n.ui.keyCode.ENTER)&&n(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){n(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===n.ui.keyCode.SPACE&&n(this).click()}));this._setOption("disabled",r.disabled);this._resetButton()},_determineButtonType:function(){var n,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button";this.type==="checkbox"||this.type==="radio"?(n=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=n.find(t),this.buttonElement.length||(n=n.length?n.siblings():this.element.siblings(),this.buttonElement=n.filter(t),this.buttonElement.length||(this.buttonElement=n.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(i+" ui-state-active "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(n,t){if(this._super(n,t),n==="disabled"){this.element.prop("disabled",!!t);t&&this.buttonElement.removeClass("ui-state-focus");return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t);this.type==="radio"?u(this.element[0]).each(function(){n(this).is(":checked")?n(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var i=this.buttonElement.removeClass(r),e=n("<span><\/span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),t=this.options.icons,f=t.primary&&t.secondary,u=[];t.primary||t.secondary?(this.options.text&&u.push("ui-button-text-icon"+(f?"s":t.primary?"-primary":"-secondary")),t.primary&&i.prepend("<span class='ui-button-icon-primary ui-icon "+t.primary+"'><\/span>"),t.secondary&&i.append("<span class='ui-button-icon-secondary ui-icon "+t.secondary+"'><\/span>"),this.options.text||(u.push(f?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||i.attr("title",n.trim(e)))):u.push("ui-button-text-only");i.addClass(u.join(" "))}});n.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(n,t){n==="disabled"&&this.buttons.button("option",n,t);this._super(n,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return n(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return n(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(n,t){function f(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._datepickerShowing=!1;this._inDialog=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};n.extend(this._defaults,this.regional[""]);this.dpDiv=e(n("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))}function e(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){n(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!==-1&&n(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!==-1&&n(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){n.datepicker._isDisabledDatepicker(u.inline?t.parent()[0]:u.input[0])||(n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),n(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&n(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&n(this).addClass("ui-datepicker-next-hover"))})}function r(t,i){n.extend(t,i);for(var r in i)i[r]==null&&(t[r]=i[r]);return t}n.extend(n.ui,{datepicker:{version:"1.10.4"}});var i="datepicker",u;n.extend(f.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(n){return r(this._defaults,n||{}),this},_attachDatepicker:function(t,i){var r,f,u;r=t.nodeName.toLowerCase();f=r==="div"||r==="span";t.id||(this.uuid+=1,t.id="dp"+this.uuid);u=this._newInst(n(t),f);u.settings=n.extend({},i||{});r==="input"?this._connectDatepicker(t,u):f&&this._inlineDatepicker(t,u)},_newInst:function(t,i){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?e(n("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")):this.dpDiv}},_connectDatepicker:function(t,r){var u=n(t);(r.append=n([]),r.trigger=n([]),u.hasClass(this.markerClassName))||(this._attachments(u,r),u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(r),n.data(t,i,r),r.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var u,r,f,e=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove();e&&(i.append=n("<span class='"+this._appendClass+"'>"+e+"<\/span>"),t[o?"before":"after"](i.append));t.unbind("focus",this._showDatepicker);i.trigger&&i.trigger.remove();u=this._get(i,"showOn");(u==="focus"||u==="both")&&t.focus(this._showDatepicker);(u==="button"||u==="both")&&(r=this._get(i,"buttonText"),f=this._get(i,"buttonImage"),i.trigger=n(this._get(i,"buttonImageOnly")?n("<img/>").addClass(this._triggerClass).attr({src:f,alt:r,title:r}):n("<button type='button'><\/button>").addClass(this._triggerClass).html(f?n("<img/>").attr({src:f,alt:r,title:r}):r)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return n.datepicker._datepickerShowing&&n.datepicker._lastInput===t[0]?n.datepicker._hideDatepicker():n.datepicker._datepickerShowing&&n.datepicker._lastInput!==t[0]?(n.datepicker._hideDatepicker(),n.datepicker._showDatepicker(t[0])):n.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(n){if(this._get(n,"autoSize")&&!n.inline){var r,u,f,t,i=new Date(2009,11,20),e=this._get(n,"dateFormat");e.match(/[DM]/)&&(r=function(n){for(u=0,f=0,t=0;t<n.length;t++)n[t].length>u&&(u=n[t].length,f=t);return f},i.setMonth(r(this._get(n,e.match(/MM/)?"monthNames":"monthNamesShort"))),i.setDate(r(this._get(n,e.match(/DD/)?"dayNames":"dayNamesShort"))+20-i.getDay()));n.input.attr("size",this._formatDate(n,i).length)}},_inlineDatepicker:function(t,r){var u=n(t);u.hasClass(this.markerClassName)||(u.addClass(this.markerClassName).append(r.dpDiv),n.data(t,i,r),this._setDate(r,this._getDefaultDate(r),!0),this._updateDatepicker(r),this._updateAlternate(r),r.settings.disabled&&this._disableDatepicker(t),r.dpDiv.css("display","block"))},_dialogDatepicker:function(t,u,f,e,o){var h,c,l,a,v,s=this._dialogInst;return s||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=n("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),n("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},n.data(this._dialogInput[0],i,s)),r(s.settings,e||{}),u=u&&u.constructor===Date?this._formatDate(s,u):u,this._dialogInput.val(u),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,l=document.documentElement.clientHeight,a=document.documentElement.scrollLeft||document.body.scrollLeft,v=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+a,l/2-150+v]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=f,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),n.blockUI&&n.blockUI(this.dpDiv),n.data(this._dialogInput[0],i,s),this},_destroyDatepicker:function(t){var r,u=n(t),f=n.data(t,i);u.hasClass(this.markerClassName)&&(r=t.nodeName.toLowerCase(),n.removeData(t,i),r==="input"?(f.append.remove(),f.trigger.remove(),u.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r==="div"||r==="span")&&u.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var r,u,f=n(t),e=n.data(t,i);f.hasClass(this.markerClassName)&&(r=t.nodeName.toLowerCase(),r==="input"?(t.disabled=!1,e.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):(r==="div"||r==="span")&&(u=f.children("."+this._inlineClass),u.children().removeClass("ui-state-disabled"),u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:n}))},_disableDatepicker:function(t){var r,u,f=n(t),e=n.data(t,i);f.hasClass(this.markerClassName)&&(r=t.nodeName.toLowerCase(),r==="input"?(t.disabled=!0,e.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):(r==="div"||r==="span")&&(u=f.children("."+this._inlineClass),u.children().addClass("ui-state-disabled"),u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:n}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(n){if(!n)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===n)return!0;return!1},_getInst:function(t){try{return n.data(t,i)}catch(r){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(i,u,f){var o,c,s,h,e=this._getInst(i);if(arguments.length===2&&typeof u=="string")return u==="defaults"?n.extend({},n.datepicker._defaults):e?u==="all"?n.extend({},e.settings):this._get(e,u):null;o=u||{};typeof u=="string"&&(o={},o[u]=f);e&&(this._curInst===e&&this._hideDatepicker(),c=this._getDateDatepicker(i,!0),s=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),r(e.settings,o),s!==null&&o.dateFormat!==t&&o.minDate===t&&(e.settings.minDate=this._formatDate(e,s)),h!==null&&o.dateFormat!==t&&o.maxDate===t&&(e.settings.maxDate=this._formatDate(e,h)),"disabled"in o&&(o.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(n(i),e),this._autoSize(e),this._setDate(e,c),this._updateAlternate(e),this._updateDatepicker(e))},_changeDatepicker:function(n,t,i){this._optionDatepicker(n,t,i)},_refreshDatepicker:function(n){var t=this._getInst(n);t&&this._updateDatepicker(t)},_setDateDatepicker:function(n,t){var i=this._getInst(n);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(n,t){var i=this._getInst(n);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var u,e,f,i=n.datepicker._getInst(t.target),r=!0,o=i.dpDiv.is(".ui-datepicker-rtl");if(i._keyEvent=!0,n.datepicker._datepickerShowing)switch(t.keyCode){case 9:n.datepicker._hideDatepicker();r=!1;break;case 13:return f=n("td."+n.datepicker._dayOverClass+":not(."+n.datepicker._currentClass+")",i.dpDiv),f[0]&&n.datepicker._selectDay(t.target,i.selectedMonth,i.selectedYear,f[0]),u=n.datepicker._get(i,"onSelect"),u?(e=n.datepicker._formatDate(i),u.apply(i.input?i.input[0]:null,[e,i])):n.datepicker._hideDatepicker(),!1;case 27:n.datepicker._hideDatepicker();break;case 33:n.datepicker._adjustDate(t.target,t.ctrlKey?-n.datepicker._get(i,"stepBigMonths"):-n.datepicker._get(i,"stepMonths"),"M");break;case 34:n.datepicker._adjustDate(t.target,t.ctrlKey?+n.datepicker._get(i,"stepBigMonths"):+n.datepicker._get(i,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&n.datepicker._clearDate(t.target);r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&n.datepicker._gotoToday(t.target);r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,o?1:-1,"D");r=t.ctrlKey||t.metaKey;t.originalEvent.altKey&&n.datepicker._adjustDate(t.target,t.ctrlKey?-n.datepicker._get(i,"stepBigMonths"):-n.datepicker._get(i,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,-7,"D");r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,o?-1:1,"D");r=t.ctrlKey||t.metaKey;t.originalEvent.altKey&&n.datepicker._adjustDate(t.target,t.ctrlKey?+n.datepicker._get(i,"stepBigMonths"):+n.datepicker._get(i,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,7,"D");r=t.ctrlKey||t.metaKey;break;default:r=!1}else t.keyCode===36&&t.ctrlKey?n.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,r,u=n.datepicker._getInst(t.target);if(n.datepicker._get(u,"constrainInput"))return i=n.datepicker._possibleChars(n.datepicker._get(u,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!i||i.indexOf(r)>-1},_doKeyUp:function(t){var r,i=n.datepicker._getInst(t.target);if(i.input.val()!==i.lastVal)try{r=n.datepicker.parseDate(n.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,n.datepicker._getFormatConfig(i));r&&(n.datepicker._setDateFromField(i),n.datepicker._updateAlternate(i),n.datepicker._updateDatepicker(i))}catch(u){}return!0},_showDatepicker:function(t){if(t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=n("input",t.parentNode)[0]),!n.datepicker._isDisabledDatepicker(t)&&n.datepicker._lastInput!==t){var i,o,s,u,f,e,h;(i=n.datepicker._getInst(t),n.datepicker._curInst&&n.datepicker._curInst!==i&&(n.datepicker._curInst.dpDiv.stop(!0,!0),i&&n.datepicker._datepickerShowing&&n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),o=n.datepicker._get(i,"beforeShow"),s=o?o.apply(t,[t,i]):{},s!==!1)&&(r(i.settings,s),i.lastVal=null,n.datepicker._lastInput=t,n.datepicker._setDateFromField(i),n.datepicker._inDialog&&(t.value=""),n.datepicker._pos||(n.datepicker._pos=n.datepicker._findPos(t),n.datepicker._pos[1]+=t.offsetHeight),u=!1,n(t).parents().each(function(){return u|=n(this).css("position")==="fixed",!u}),f={left:n.datepicker._pos[0],top:n.datepicker._pos[1]},n.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),n.datepicker._updateDatepicker(i),f=n.datepicker._checkOffset(i,f,u),i.dpDiv.css({position:n.datepicker._inDialog&&n.blockUI?"static":u?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"}),i.inline||(e=n.datepicker._get(i,"showAnim"),h=n.datepicker._get(i,"duration"),i.dpDiv.zIndex(n(t).zIndex()+1),n.datepicker._datepickerShowing=!0,n.effects&&n.effects.effect[e]?i.dpDiv.show(e,n.datepicker._get(i,"showOptions"),h):i.dpDiv[e||"show"](e?h:null),n.datepicker._shouldFocusInput(i)&&i.input.focus(),n.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4;u=t;t.dpDiv.empty().append(this._generateHTML(t));this._attachHandlers(t);t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,r=this._getNumberOfMonths(t),f=r[1];t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");f>1&&t.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",17*f+"em");t.dpDiv[(r[0]!==1||r[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");t===n.datepicker._curInst&&n.datepicker._datepickerShowing&&n.datepicker._shouldFocusInput(t)&&t.input.focus();t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);i=t.yearshtml=null},0))},_shouldFocusInput:function(n){return n.input&&n.input.is(":visible")&&!n.input.is(":disabled")&&!n.input.is(":focus")},_checkOffset:function(t,i,r){var u=t.dpDiv.outerWidth(),f=t.dpDiv.outerHeight(),h=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,e=document.documentElement.clientWidth+(r?0:n(document).scrollLeft()),s=document.documentElement.clientHeight+(r?0:n(document).scrollTop());return i.left-=this._get(t,"isRTL")?u-h:0,i.left-=r&&i.left===t.input.offset().left?n(document).scrollLeft():0,i.top-=r&&i.top===t.input.offset().top+o?n(document).scrollTop():0,i.left-=Math.min(i.left,i.left+u>e&&e>u?Math.abs(i.left+u-e):0),i.top-=Math.min(i.top,i.top+f>s&&s>f?Math.abs(f+o):0),i},_findPos:function(t){for(var i,r=this._getInst(t),u=this._get(r,"isRTL");t&&(t.type==="hidden"||t.nodeType!==1||n.expr.filters.hidden(t));)t=t[u?"previousSibling":"nextSibling"];return i=n(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var u,e,f,o,r=this._curInst;r&&(!t||r===n.data(t,i))&&this._datepickerShowing&&(u=this._get(r,"showAnim"),e=this._get(r,"duration"),f=function(){n.datepicker._tidyDialog(r)},n.effects&&(n.effects.effect[u]||n.effects[u])?r.dpDiv.hide(u,n.datepicker._get(r,"showOptions"),e,f):r.dpDiv[u==="slideDown"?"slideUp":u==="fadeIn"?"fadeOut":"hide"](u?e:null,f),u||f(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),n.blockUI&&(n.unblockUI(),n("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(n){n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(n.datepicker._curInst){var i=n(t.target),r=n.datepicker._getInst(i[0]);(i[0].id===n.datepicker._mainDivId||i.parents("#"+n.datepicker._mainDivId).length!==0||i.hasClass(n.datepicker.markerClassName)||i.closest("."+n.datepicker._triggerClass).length||!n.datepicker._datepickerShowing||n.datepicker._inDialog&&n.blockUI)&&(!i.hasClass(n.datepicker.markerClassName)||n.datepicker._curInst===r)||n.datepicker._hideDatepicker()}},_adjustDate:function(t,i,r){var f=n(t),u=this._getInst(f[0]);this._isDisabledDatepicker(f[0])||(this._adjustInstDate(u,i+(r==="M"?this._get(u,"showCurrentAtPos"):0),r),this._updateDatepicker(u))},_gotoToday:function(t){var r,u=n(t),i=this._getInst(u[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(r=new Date,i.selectedDay=r.getDate(),i.drawMonth=i.selectedMonth=r.getMonth(),i.drawYear=i.selectedYear=r.getFullYear());this._notifyChange(i);this._adjustDate(u)},_selectMonthYear:function(t,i,r){var f=n(t),u=this._getInst(f[0]);u["selected"+(r==="M"?"Month":"Year")]=u["draw"+(r==="M"?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10);this._notifyChange(u);this._adjustDate(f)},_selectDay:function(t,i,r,u){var f,e=n(t);n(u).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0])||(f=this._getInst(e[0]),f.selectedDay=f.currentDay=n("a",u).html(),f.selectedMonth=f.currentMonth=i,f.selectedYear=f.currentYear=r,this._selectDate(t,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(t){var i=n(t);this._selectDate(i,"")},_selectDate:function(t,i){var u,f=n(t),r=this._getInst(f[0]);i=i!=null?i:this._formatDate(r);r.input&&r.input.val(i);this._updateAlternate(r);u=this._get(r,"onSelect");u?u.apply(r.input?r.input[0]:null,[i,r]):r.input&&r.input.trigger("change");r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,r,u,f=this._get(t,"altField");f&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),u=this.formatDate(i,r,this._getFormatConfig(t)),n(f).each(function(){n(this).val(u)}))},noWeekends:function(n){var t=n.getDay();return[t>0&&t<6,""]},iso8601Week:function(n){var i,t=new Date(n.getTime());return t.setDate(t.getDate()+4-(t.getDay()||7)),i=t.getTime(),t.setMonth(0),t.setDate(1),Math.floor(Math.round((i-t)/864e5)/7)+1},parseDate:function(t,i,r){if(t==null||i==null)throw"Invalid arguments";if(i=typeof i=="object"?i.toString():i+"",i==="")return null;for(var a,v,f=0,y=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,d=typeof y!="string"?y:(new Date).getFullYear()%100+parseInt(y,10),g=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,nt=(r?r.dayNames:null)||this._defaults.dayNames,tt=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,it=(r?r.monthNames:null)||this._defaults.monthNames,e=-1,s=-1,h=-1,p=-1,w=!1,u,l=function(n){var i=o+1<t.length&&t.charAt(o+1)===n;return i&&o++,i},c=function(n){var r=l(n),u=n==="@"?14:n==="!"?20:n==="y"&&r?4:n==="o"?3:2,e=new RegExp("^\\d{1,"+u+"}"),t=i.substring(f).match(e);if(!t)throw"Missing number at position "+f;return f+=t[0].length,parseInt(t[0],10)},k=function(t,r,u){var e=-1,o=n.map(l(t)?u:r,function(n,t){return[[t,n]]}).sort(function(n,t){return-(n[1].length-t[1].length)});if(n.each(o,function(n,t){var r=t[1];if(i.substr(f,r.length).toLowerCase()===r.toLowerCase())return e=t[0],f+=r.length,!1}),e!==-1)return e+1;throw"Unknown name at position "+f;},b=function(){if(i.charAt(f)!==t.charAt(o))throw"Unexpected literal at position "+f;f++},o=0;o<t.length;o++)if(w)t.charAt(o)!=="'"||l("'")?b():w=!1;else switch(t.charAt(o)){case"d":h=c("d");break;case"D":k("D",g,nt);break;case"o":p=c("o");break;case"m":s=c("m");break;case"M":s=k("M",tt,it);break;case"y":e=c("y");break;case"@":u=new Date(c("@"));e=u.getFullYear();s=u.getMonth()+1;h=u.getDate();break;case"!":u=new Date((c("!")-this._ticksTo1970)/1e4);e=u.getFullYear();s=u.getMonth()+1;h=u.getDate();break;case"'":l("'")?b():w=!0;break;default:b()}if(f<i.length&&(v=i.substr(f),!/^\s+/.test(v)))throw"Extra/unparsed characters found in date: "+v;if(e===-1?e=(new Date).getFullYear():e<100&&(e+=(new Date).getFullYear()-(new Date).getFullYear()%100+(e<=d?0:-100)),p>-1){s=1;h=p;do{if(a=this._getDaysInMonth(e,s-1),h<=a)break;s++;h-=a}while(1)}if(u=this._daylightSavingAdjust(new Date(e,s-1,h)),u.getFullYear()!==e||u.getMonth()+1!==s||u.getDate()!==h)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*864e9,formatDate:function(n,t,i){if(!t)return"";var u,h=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,c=(i?i.dayNames:null)||this._defaults.dayNames,l=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,a=(i?i.monthNames:null)||this._defaults.monthNames,f=function(t){var i=u+1<n.length&&n.charAt(u+1)===t;return i&&u++,i},e=function(n,t,i){var r=""+t;if(f(n))while(r.length<i)r="0"+r;return r},s=function(n,t,i,r){return f(n)?r[t]:i[t]},r="",o=!1;if(t)for(u=0;u<n.length;u++)if(o)n.charAt(u)!=="'"||f("'")?r+=n.charAt(u):o=!1;else switch(n.charAt(u)){case"d":r+=e("d",t.getDate(),2);break;case"D":r+=s("D",t.getDay(),h,c);break;case"o":r+=e("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":r+=e("m",t.getMonth()+1,2);break;case"M":r+=s("M",t.getMonth(),l,a);break;case"y":r+=f("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":r+=t.getTime();break;case"!":r+=t.getTime()*1e4+this._ticksTo1970;break;case"'":f("'")?r+="'":o=!0;break;default:r+=n.charAt(u)}return r},_possibleChars:function(n){for(var i="",r=!1,u=function(i){var r=t+1<n.length&&n.charAt(t+1)===i;return r&&t++,r},t=0;t<n.length;t++)if(r)n.charAt(t)!=="'"||u("'")?i+=n.charAt(t):r=!1;else switch(n.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":u("'")?i+="'":r=!0;break;default:i+=n.charAt(t)}return i},_get:function(n,i){return n.settings[i]!==t?n.settings[i]:this._defaults[i]},_setDateFromField:function(n,t){if(n.input.val()!==n.lastVal){var f=this._get(n,"dateFormat"),r=n.lastVal=n.input?n.input.val():null,u=this._getDefaultDate(n),i=u,e=this._getFormatConfig(n);try{i=this.parseDate(f,r,e)||u}catch(o){r=t?"":r}n.selectedDay=i.getDate();n.drawMonth=n.selectedMonth=i.getMonth();n.drawYear=n.selectedYear=i.getFullYear();n.currentDay=r?i.getDate():0;n.currentMonth=r?i.getMonth():0;n.currentYear=r?i.getFullYear():0;this._adjustInstDate(n)}},_getDefaultDate:function(n){return this._restrictMinMax(n,this._determineDate(n,this._get(n,"defaultDate"),new Date))},_determineDate:function(t,i,r){var f=function(n){var t=new Date;return t.setDate(t.getDate()+n),t},e=function(i){try{return n.datepicker.parseDate(n.datepicker._get(t,"dateFormat"),i,n.datepicker._getFormatConfig(t))}catch(h){}for(var o=(i.toLowerCase().match(/^c/)?n.datepicker._getDate(t):null)||new Date,f=o.getFullYear(),e=o.getMonth(),r=o.getDate(),s=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,u=s.exec(i);u;){switch(u[2]||"d"){case"d":case"D":r+=parseInt(u[1],10);break;case"w":case"W":r+=parseInt(u[1],10)*7;break;case"m":case"M":e+=parseInt(u[1],10);r=Math.min(r,n.datepicker._getDaysInMonth(f,e));break;case"y":case"Y":f+=parseInt(u[1],10);r=Math.min(r,n.datepicker._getDaysInMonth(f,e))}u=s.exec(i)}return new Date(f,e,r)},u=i==null||i===""?r:typeof i=="string"?e(i):typeof i=="number"?isNaN(i)?r:f(i):new Date(i.getTime());return u=u&&u.toString()==="Invalid Date"?r:u,u&&(u.setHours(0),u.setMinutes(0),u.setSeconds(0),u.setMilliseconds(0)),this._daylightSavingAdjust(u)},_daylightSavingAdjust:function(n){return n?(n.setHours(n.getHours()>12?n.getHours()+2:0),n):null},_setDate:function(n,t,i){var u=!t,f=n.selectedMonth,e=n.selectedYear,r=this._restrictMinMax(n,this._determineDate(n,t,new Date));n.selectedDay=n.currentDay=r.getDate();n.drawMonth=n.selectedMonth=n.currentMonth=r.getMonth();n.drawYear=n.selectedYear=n.currentYear=r.getFullYear();f===n.selectedMonth&&e===n.selectedYear||i||this._notifyChange(n);this._adjustInstDate(n);n.input&&n.input.val(u?"":this._formatDate(n))},_getDate:function(n){return!n.currentYear||n.input&&n.input.val()===""?null:this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))},_attachHandlers:function(t){var r=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){n.datepicker._adjustDate(i,-r,"M")},next:function(){n.datepicker._adjustDate(i,+r,"M")},hide:function(){n.datepicker._hideDatepicker()},today:function(){n.datepicker._gotoToday(i)},selectDay:function(){return n.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return n.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return n.datepicker._selectMonthYear(i,this,"Y"),!1}};n(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(n){var b,s,rt,h,ut,k,ft,et,ri,c,ot,ui,fi,ei,oi,st,g,si,ht,nt,f,y,ct,p,lt,l,u,at,vt,yt,pt,tt,wt,i,bt,kt,d,a,it,dt=new Date,gt=this._daylightSavingAdjust(new Date(dt.getFullYear(),dt.getMonth(),dt.getDate())),e=this._get(n,"isRTL"),li=this._get(n,"showButtonPanel"),hi=this._get(n,"hideIfNoPrevNext"),ni=this._get(n,"navigationAsDateFormat"),o=this._getNumberOfMonths(n),ai=this._get(n,"showCurrentAtPos"),ci=this._get(n,"stepMonths"),ti=o[0]!==1||o[1]!==1,ii=this._daylightSavingAdjust(n.currentDay?new Date(n.currentYear,n.currentMonth,n.currentDay):new Date(9999,9,9)),w=this._getMinMaxDate(n,"min"),v=this._getMinMaxDate(n,"max"),t=n.drawMonth-ai,r=n.drawYear;if(t<0&&(t+=12,r--),v)for(b=this._daylightSavingAdjust(new Date(v.getFullYear(),v.getMonth()-o[0]*o[1]+1,v.getDate())),b=w&&b<w?w:b;this._daylightSavingAdjust(new Date(r,t,1))>b;)t--,t<0&&(t=11,r--);for(n.drawMonth=t,n.drawYear=r,s=this._get(n,"prevText"),s=ni?this.formatDate(s,this._daylightSavingAdjust(new Date(r,t-ci,1)),this._getFormatConfig(n)):s,rt=this._canAdjustMonth(n,-1,r,t)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"e":"w")+"'>"+s+"<\/span><\/a>":hi?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"e":"w")+"'>"+s+"<\/span><\/a>",h=this._get(n,"nextText"),h=ni?this.formatDate(h,this._daylightSavingAdjust(new Date(r,t+ci,1)),this._getFormatConfig(n)):h,ut=this._canAdjustMonth(n,1,r,t)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+h+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"w":"e")+"'>"+h+"<\/span><\/a>":hi?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+h+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"w":"e")+"'>"+h+"<\/span><\/a>",k=this._get(n,"currentText"),ft=this._get(n,"gotoCurrent")&&n.currentDay?ii:gt,k=ni?this.formatDate(k,ft,this._getFormatConfig(n)):k,et=n.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(n,"closeText")+"<\/button>",ri=li?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(e?et:"")+(this._isInRange(n,ft)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+k+"<\/button>":"")+(e?"":et)+"<\/div>":"",c=parseInt(this._get(n,"firstDay"),10),c=isNaN(c)?0:c,ot=this._get(n,"showWeek"),ui=this._get(n,"dayNames"),fi=this._get(n,"dayNamesMin"),ei=this._get(n,"monthNames"),oi=this._get(n,"monthNamesShort"),st=this._get(n,"beforeShowDay"),g=this._get(n,"showOtherMonths"),si=this._get(n,"selectOtherMonths"),ht=this._getDefaultDate(n),nt="",f,y=0;y<o[0];y++){for(ct="",this.maxRows=4,p=0;p<o[1];p++){if(lt=this._daylightSavingAdjust(new Date(r,t,n.selectedDay)),l=" ui-corner-all",u="",ti){if(u+="<div class='ui-datepicker-group",o[1]>1)switch(p){case 0:u+=" ui-datepicker-group-first";l=" ui-corner-"+(e?"right":"left");break;case o[1]-1:u+=" ui-datepicker-group-last";l=" ui-corner-"+(e?"left":"right");break;default:u+=" ui-datepicker-group-middle";l=""}u+="'>"}for(u+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+l+"'>"+(/all|left/.test(l)&&y===0?e?ut:rt:"")+(/all|right/.test(l)&&y===0?e?rt:ut:"")+this._generateMonthYearHeader(n,t,r,w,v,y>0||p>0,ei,oi)+"<\/div><table class='ui-datepicker-calendar'><thead><tr>",at=ot?"<th class='ui-datepicker-week-col'>"+this._get(n,"weekHeader")+"<\/th>":"",f=0;f<7;f++)vt=(f+c)%7,at+="<th"+((f+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+ui[vt]+"'>"+fi[vt]+"<\/span><\/th>";for(u+=at+"<\/tr><\/thead><tbody>",yt=this._getDaysInMonth(r,t),r===n.selectedYear&&t===n.selectedMonth&&(n.selectedDay=Math.min(n.selectedDay,yt)),pt=(this._getFirstDayOfMonth(r,t)-c+7)%7,tt=Math.ceil((pt+yt)/7),wt=ti?this.maxRows>tt?this.maxRows:tt:tt,this.maxRows=wt,i=this._daylightSavingAdjust(new Date(r,t,1-pt)),bt=0;bt<wt;bt++){for(u+="<tr>",kt=ot?"<td class='ui-datepicker-week-col'>"+this._get(n,"calculateWeek")(i)+"<\/td>":"",f=0;f<7;f++)d=st?st.apply(n.input?n.input[0]:null,[i]):[!0,""],a=i.getMonth()!==t,it=a&&!si||!d[0]||w&&i<w||v&&i>v,kt+="<td class='"+((f+c+6)%7>=5?" ui-datepicker-week-end":"")+(a?" ui-datepicker-other-month":"")+(i.getTime()===lt.getTime()&&t===n.selectedMonth&&n._keyEvent||ht.getTime()===i.getTime()&&ht.getTime()===lt.getTime()?" "+this._dayOverClass:"")+(it?" "+this._unselectableClass+" ui-state-disabled":"")+(a&&!g?"":" "+d[1]+(i.getTime()===ii.getTime()?" "+this._currentClass:"")+(i.getTime()===gt.getTime()?" ui-datepicker-today":""))+"'"+((!a||g)&&d[2]?" title='"+d[2].replace(/'/g,"&#39;")+"'":"")+(it?"":" data-handler='selectDay' data-event='click' data-month='"+i.getMonth()+"' data-year='"+i.getFullYear()+"'")+">"+(a&&!g?"&#xa0;":it?"<span class='ui-state-default'>"+i.getDate()+"<\/span>":"<a class='ui-state-default"+(i.getTime()===gt.getTime()?" ui-state-highlight":"")+(i.getTime()===ii.getTime()?" ui-state-active":"")+(a?" ui-priority-secondary":"")+"' href='#'>"+i.getDate()+"<\/a>")+"<\/td>",i.setDate(i.getDate()+1),i=this._daylightSavingAdjust(i);u+=kt+"<\/tr>"}t++;t>11&&(t=0,r++);u+="<\/tbody><\/table>"+(ti?"<\/div>"+(o[0]>0&&p===o[1]-1?"<div class='ui-datepicker-row-break'><\/div>":""):"");ct+=u}nt+=ct}return nt+=ri,n._keyEvent=!1,nt},_generateMonthYearHeader:function(n,t,i,r,u,f,e,o){var k,d,h,v,y,p,s,a,w=this._get(n,"changeMonth"),b=this._get(n,"changeYear"),g=this._get(n,"showMonthAfterYear"),c="<div class='ui-datepicker-title'>",l="";if(f||!w)l+="<span class='ui-datepicker-month'>"+e[t]+"<\/span>";else{for(k=r&&r.getFullYear()===i,d=u&&u.getFullYear()===i,l+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;h<12;h++)(!k||h>=r.getMonth())&&(!d||h<=u.getMonth())&&(l+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"<\/option>");l+="<\/select>"}if(g||(c+=l+(f||!(w&&b)?"&#xa0;":"")),!n.yearshtml)if(n.yearshtml="",f||!b)c+="<span class='ui-datepicker-year'>"+i+"<\/span>";else{for(v=this._get(n,"yearRange").split(":"),y=(new Date).getFullYear(),p=function(n){var t=n.match(/c[+\-].*/)?i+parseInt(n.substring(1),10):n.match(/[+\-].*/)?y+parseInt(n,10):parseInt(n,10);return isNaN(t)?y:t},s=p(v[0]),a=Math.max(s,p(v[1]||"")),s=r?Math.max(s,r.getFullYear()):s,a=u?Math.min(a,u.getFullYear()):a,n.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";s<=a;s++)n.yearshtml+="<option value='"+s+"'"+(s===i?" selected='selected'":"")+">"+s+"<\/option>";n.yearshtml+="<\/select>";c+=n.yearshtml;n.yearshtml=null}return c+=this._get(n,"yearSuffix"),g&&(c+=(f||!(w&&b)?"&#xa0;":"")+l),c+"<\/div>"},_adjustInstDate:function(n,t,i){var u=n.drawYear+(i==="Y"?t:0),f=n.drawMonth+(i==="M"?t:0),e=Math.min(n.selectedDay,this._getDaysInMonth(u,f))+(i==="D"?t:0),r=this._restrictMinMax(n,this._daylightSavingAdjust(new Date(u,f,e)));n.selectedDay=r.getDate();n.drawMonth=n.selectedMonth=r.getMonth();n.drawYear=n.selectedYear=r.getFullYear();(i==="M"||i==="Y")&&this._notifyChange(n)},_restrictMinMax:function(n,t){var i=this._getMinMaxDate(n,"min"),r=this._getMinMaxDate(n,"max"),u=i&&t<i?i:t;return r&&u>r?r:u},_notifyChange:function(n){var t=this._get(n,"onChangeMonthYear");t&&t.apply(n.input?n.input[0]:null,[n.selectedYear,n.selectedMonth+1,n])},_getNumberOfMonths:function(n){var t=this._get(n,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(n,t){return this._determineDate(n,this._get(n,t+"Date"),null)},_getDaysInMonth:function(n,t){return 32-this._daylightSavingAdjust(new Date(n,t,32)).getDate()},_getFirstDayOfMonth:function(n,t){return new Date(n,t,1).getDay()},_canAdjustMonth:function(n,t,i,r){var f=this._getNumberOfMonths(n),u=this._daylightSavingAdjust(new Date(i,r+(t<0?t:f[0]*f[1]),1));return t<0&&u.setDate(this._getDaysInMonth(u.getFullYear(),u.getMonth())),this._isInRange(n,u)},_isInRange:function(n,t){var i,f,e=this._getMinMaxDate(n,"min"),o=this._getMinMaxDate(n,"max"),r=null,u=null,s=this._get(n,"yearRange");return s&&(i=s.split(":"),f=(new Date).getFullYear(),r=parseInt(i[0],10),u=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=f),i[1].match(/[+\-].*/)&&(u+=f)),(!e||t.getTime()>=e.getTime())&&(!o||t.getTime()<=o.getTime())&&(!r||t.getFullYear()>=r)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(n){var t=this._get(n,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(n,"dayNamesShort"),dayNames:this._get(n,"dayNames"),monthNamesShort:this._get(n,"monthNamesShort"),monthNames:this._get(n,"monthNames")}},_formatDate:function(n,t,i,r){t||(n.currentDay=n.selectedDay,n.currentMonth=n.selectedMonth,n.currentYear=n.selectedYear);var u=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,i,t)):this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));return this.formatDate(this._get(n,"dateFormat"),u,this._getFormatConfig(n))}});n.fn.datepicker=function(t){if(!this.length)return this;n.datepicker.initialized||(n(document).mousedown(n.datepicker._checkExternalClick),n.datepicker.initialized=!0);n("#"+n.datepicker._mainDivId).length===0&&n("body").append(n.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return typeof t=="string"&&(t==="isDisabled"||t==="getDate"||t==="widget")?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this[0]].concat(i)):t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this[0]].concat(i)):this.each(function(){typeof t=="string"?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this].concat(i)):n.datepicker._attachDatepicker(this,t)})};n.datepicker=new f;n.datepicker.initialized=!1;n.datepicker.uuid=(new Date).getTime();n.datepicker.version="1.10.4"}(jQuery),function(n){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};n.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=n(this).css(t).offset().top;i<0&&n(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();this.options.draggable&&n.fn.draggable&&this._makeDraggable();this.options.resizable&&n.fn.resizable&&this._makeResizable();this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?n(t):this.document.find(t||"body").eq(0)},_destroy:function(){var n,t=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(!0,!0).remove();this.originalTitle&&this.element.attr("title",this.originalTitle);n=t.parent.children().eq(t.index);n.length&&n[0]!==this.element[0]?n.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:n.noop,enable:n.noop,close:function(t){var i,r=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement;i&&i.nodeName.toLowerCase()!=="body"&&n(i).blur()}catch(u){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(n,t){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!t&&this._trigger("focus",n),i},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0;this.opener=n(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,!0);this._show(this.uiDialog,this.options.show,function(){t._focusTabbable();t._trigger("focus")});this._trigger("open")},_focusTabbable:function(){var n=this.element.find("[autofocus]");n.length||(n=this.element.find(":tabbable"));n.length||(n=this.uiDialogButtonPane.find(":tabbable"));n.length||(n=this.uiDialogTitlebarClose.filter(":tabbable"));n.length||(n=this.uiDialog);n.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||n.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault();i.call(this);this._delay(i)},_createWrapper:function(){this.uiDialog=n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===n.ui.keyCode.ESCAPE){t.preventDefault();this.close(t);return}if(t.keyCode===n.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),r=i.filter(":first"),u=i.filter(":last");t.target!==u[0]&&t.target!==this.uiDialog[0]||t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(u.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())}},mousedown:function(n){this._moveToTop(n)&&this._focusTabbable()}});this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(t){n(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}});this.uiDialogTitlebarClose=n("<button type='button'><\/button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(n){n.preventDefault();this.close(n)}});t=n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(t);this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(n){this.options.title||n.html("&#160;");n.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var i=this,t=this.options.buttons;if(this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),n.isEmptyObject(t)||n.isArray(t)&&!t.length){this.uiDialog.removeClass("ui-dialog-buttons");return}n.each(t,function(t,r){var u,f;r=n.isFunction(r)?{click:r,text:t}:r;r=n.extend({type:"button"},r);u=r.click;r.click=function(){u.apply(i.element[0],arguments)};f={icons:r.icons,text:r.showText};delete r.icons;delete r.showText;n("<button><\/button>",r).button(f).appendTo(i.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function i(n){return{position:n.position,offset:n.offset}}var t=this,r=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,u){n(this).addClass("ui-dialog-dragging");t._blockFrames();t._trigger("dragStart",r,i(u))},drag:function(n,r){t._trigger("drag",n,i(r))},stop:function(u,f){r.position=[f.position.left-t.document.scrollLeft(),f.position.top-t.document.scrollTop()];n(this).removeClass("ui-dialog-dragging");t._unblockFrames();t._trigger("dragStop",u,i(f))}})},_makeResizable:function(){function r(n){return{originalPosition:n.originalPosition,originalSize:n.originalSize,position:n.position,size:n.size}}var i=this,t=this.options,u=t.resizable,f=this.uiDialog.css("position"),e=typeof u=="string"?u:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:t.maxWidth,maxHeight:t.maxHeight,minWidth:t.minWidth,minHeight:this._minHeight(),handles:e,start:function(t,u){n(this).addClass("ui-dialog-resizing");i._blockFrames();i._trigger("resizeStart",t,r(u))},resize:function(n,t){i._trigger("resize",n,r(t))},stop:function(u,f){t.height=n(this).height();t.width=n(this).width();n(this).removeClass("ui-dialog-resizing");i._unblockFrames();i._trigger("resizeStop",u,r(f))}}).css("position",f)},_minHeight:function(){var n=this.options;return n.height==="auto"?n.minHeight:Math.min(n.minHeight,n.height)},_position:function(){var n=this.uiDialog.is(":visible");n||this.uiDialog.show();this.uiDialog.position(this.options.position);n||this.uiDialog.hide()},_setOptions:function(r){var e=this,u=!1,f={};n.each(r,function(n,r){e._setOption(n,r);n in t&&(u=!0);n in i&&(f[n]=r)});u&&(this._size(),this._position());this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(n,t){var u,r,i=this.uiDialog;(n==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t),n!=="disabled")&&(this._super(n,t),n==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),n==="buttons"&&this._createButtons(),n==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),n==="draggable"&&(u=i.is(":data(ui-draggable)"),u&&!t&&i.draggable("destroy"),!u&&t&&this._makeDraggable()),n==="position"&&this._position(),n==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),r||t===!1||this._makeResizable()),n==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,i,r,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});n.minWidth>n.width&&(n.width=n.minWidth);t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight();i=Math.max(0,n.minHeight-t);r=typeof n.maxHeight=="number"?Math.max(0,n.maxHeight-t):"none";n.height==="auto"?this.element.css({minHeight:i,maxHeight:r,height:"auto"}):this.element.height(Math.max(0,n.height-t));this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=n(this);return n("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return n(t.target).closest(".ui-dialog").length?!0:!!n(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,i=this.widgetFullName;n.ui.dialog.overlayInstances||this._delay(function(){n.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(r){t._allowInteraction(r)||(r.preventDefault(),n(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})});this.overlay=n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});n.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(n.ui.dialog.overlayInstances--,n.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}});n.ui.dialog.overlayInstances=0;n.uiBackCompat!==!1&&n.widget("ui.dialog",n.ui.dialog,{_position:function(){var t=this.options.position,i=[],r=[0,0],u;t?((typeof t=="string"||typeof t=="object"&&"0"in t)&&(i=t.split?t.split(" "):[t[0],t[1]],i.length===1&&(i[1]=i[0]),n.each(["left","top"],function(n,t){+i[n]===i[n]&&(r[n]=i[n],i[n]=t)}),t={my:i[0]+(r[0]<0?r[0]:"+"+r[0])+" "+i[1]+(r[1]<0?r[1]:"+"+r[1]),at:i.join(" ")}),t=n.extend({},n.ui.dialog.prototype.options.position,t)):t=n.ui.dialog.prototype.options.position;u=this.uiDialog.is(":visible");u||this.uiDialog.show();this.uiDialog.position(t);u||this.uiDialog.hide()}})}(jQuery),function(n){n.widget("ui.draggable",n.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper!=="original"||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative");this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||n(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),!this.handle)?!1:(n(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(n(this).offset()).appendTo("body")}),!0)},_mouseStart:function(t){var i=this.options;return(this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),n.ui.ddmanager&&(n.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1)?(this._clear(),!1):(this._cacheHelperProportions(),n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),n.ui.ddmanager&&n.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.offsetParentCssPosition==="fixed"&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.options.axis&&this.options.axis==="y"||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&this.options.axis==="x"||(this.helper[0].style.top=this.position.top+"px"),n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var r=this,i=!1;return(n.ui.ddmanager&&!this.options.dropBehaviour&&(i=n.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),this.options.helper==="original"&&!n.contains(this.element[0].ownerDocument,this.element[0]))?!1:(this.options.revert==="invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===!0||n.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?n(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return n("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),n.ui.ddmanager&&n.ui.ddmanager.dragStop(this,t),n.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!n(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var r=this.options,i=n.isFunction(r.helper)?n(r.helper.apply(this.element[0],[t])):r.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo(r.appendTo==="parent"?this.element[0].parentNode:r.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&n.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var n=this.element.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var u,t,i,r=this.options;if(!r.containment){this.containment=null;return}if(r.containment==="window"){this.containment=[n(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,n(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,n(window).scrollLeft()+n(window).width()-this.helperProportions.width-this.margins.left,n(window).scrollTop()+(n(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(r.containment==="document"){this.containment=[0,0,n(document).width()-this.helperProportions.width-this.margins.left,(n(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(r.containment.constructor===Array){this.containment=r.containment;return}(r.containment==="parent"&&(r.containment=this.helper[0].parentNode),t=n(r.containment),i=t[0],i)&&(u=t.css("overflow")!=="hidden",this.containment=[(parseInt(t.css("borderLeftWidth"),10)||0)+(parseInt(t.css("paddingLeft"),10)||0),(parseInt(t.css("borderTopWidth"),10)||0)+(parseInt(t.css("paddingTop"),10)||0),(u?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(t.css("borderRightWidth"),10)||0)-(parseInt(t.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(u?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(t.css("borderBottomWidth"),10)||0)-(parseInt(t.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=t)},_convertPositionTo:function(t,i){i||(i=this.position);var r=t==="absolute"?1:-1,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;return this.offset.scroll||(this.offset.scroll={top:u.scrollTop(),left:u.scrollLeft()}),{top:i.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*r,left:i.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*r}},_generatePosition:function(t){var i,e,u,f,r=this.options,h=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,o=t.pageX,s=t.pageY;return this.offset.scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(e=this.relative_container.offset(),i=[this.containment[0]+e.left,this.containment[1]+e.top,this.containment[2]+e.left,this.containment[3]+e.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(o=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(s=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(o=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(s=i[3]+this.offset.click.top)),r.grid&&(u=r.grid[1]?this.originalPageY+Math.round((s-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,s=i?u-this.offset.click.top>=i[1]||u-this.offset.click.top>i[3]?u:u-this.offset.click.top>=i[1]?u-r.grid[1]:u+r.grid[1]:u,f=r.grid[0]?this.originalPageX+Math.round((o-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,o=i?f-this.offset.click.left>=i[0]||f-this.offset.click.left>i[2]?f:f-this.offset.click.left>=i[0]?f-r.grid[0]:f+r.grid[0]:f)),{top:s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1},_trigger:function(t,i,r){return r=r||this._uiHash(),n.ui.plugin.call(this,t,[i,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),n.Widget.prototype._trigger.call(this,t,i,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});n.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var r=n(this).data("ui-draggable"),u=r.options,f=n.extend({},i,{item:r.element});r.sortables=[];n(u.connectToSortable).each(function(){var i=n.data(this,"ui-sortable");i&&!i.options.disabled&&(r.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,f))})},stop:function(t,i){var r=n(this).data("ui-draggable"),u=n.extend({},i,{item:r.element});n.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,u))})},drag:function(t,i){var r=n(this).data("ui-draggable"),u=this;n.each(r.sortables,function(){var f=!1,e=this;this.instance.positionAbs=r.positionAbs;this.instance.helperProportions=r.helperProportions;this.instance.offset.click=r.offset.click;this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,n.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&n.contains(e.instance.element[0],this.instance.element[0])&&(f=!1),f}));f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}});n.ui.plugin.add("draggable","cursor",{start:function(){var t=n("body"),i=n(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor"));t.css("cursor",i.cursor)},stop:function(){var t=n(this).data("ui-draggable").options;t._cursor&&n("body").css("cursor",t._cursor)}});n.ui.plugin.add("draggable","opacity",{start:function(t,i){var r=n(i.helper),u=n(this).data("ui-draggable").options;r.css("opacity")&&(u._opacity=r.css("opacity"));r.css("opacity",u.opacity)},stop:function(t,i){var r=n(this).data("ui-draggable").options;r._opacity&&n(i.helper).css("opacity",r._opacity)}});n.ui.plugin.add("draggable","scroll",{start:function(){var t=n(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var r=n(this).data("ui-draggable"),i=r.options,u=!1;r.scrollParent[0]!==document&&r.scrollParent[0].tagName!=="HTML"?(i.axis&&i.axis==="x"||(r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=u=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=u=r.scrollParent[0].scrollTop-i.scrollSpeed)),i.axis&&i.axis==="y"||(r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=u=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=u=r.scrollParent[0].scrollLeft-i.scrollSpeed))):(i.axis&&i.axis==="x"||(t.pageY-n(document).scrollTop()<i.scrollSensitivity?u=n(document).scrollTop(n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<i.scrollSensitivity&&(u=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed))),i.axis&&i.axis==="y"||(t.pageX-n(document).scrollLeft()<i.scrollSensitivity?u=n(document).scrollLeft(n(document).scrollLeft()-i.scrollSpeed):n(window).width()-(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(u=n(document).scrollLeft(n(document).scrollLeft()+i.scrollSpeed))));u!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(r,t)}});n.ui.plugin.add("draggable","snap",{start:function(){var t=n(this).data("ui-draggable"),i=t.options;t.snapElements=[];n(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=n(this),r=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:r.top,left:r.left})})},drag:function(t,i){for(var e,o,s,h,c,a,l,v,w,r=n(this).data("ui-draggable"),b=r.options,f=b.snapTolerance,y=i.offset.left,k=y+r.helperProportions.width,p=i.offset.top,d=p+r.helperProportions.height,u=r.snapElements.length-1;u>=0;u--){if(c=r.snapElements[u].left,a=c+r.snapElements[u].width,l=r.snapElements[u].top,v=l+r.snapElements[u].height,k<c-f||y>a+f||d<l-f||p>v+f||!n.contains(r.snapElements[u].item.ownerDocument,r.snapElements[u].item)){r.snapElements[u].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,n.extend(r._uiHash(),{snapItem:r.snapElements[u].item}));r.snapElements[u].snapping=!1;continue}b.snapMode!=="inner"&&(e=Math.abs(l-d)<=f,o=Math.abs(v-p)<=f,s=Math.abs(c-k)<=f,h=Math.abs(a-y)<=f,e&&(i.position.top=r._convertPositionTo("relative",{top:l-r.helperProportions.height,left:0}).top-r.margins.top),o&&(i.position.top=r._convertPositionTo("relative",{top:v,left:0}).top-r.margins.top),s&&(i.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),h&&(i.position.left=r._convertPositionTo("relative",{top:0,left:a}).left-r.margins.left));w=e||o||s||h;b.snapMode!=="outer"&&(e=Math.abs(l-p)<=f,o=Math.abs(v-d)<=f,s=Math.abs(c-y)<=f,h=Math.abs(a-k)<=f,e&&(i.position.top=r._convertPositionTo("relative",{top:l,left:0}).top-r.margins.top),o&&(i.position.top=r._convertPositionTo("relative",{top:v-r.helperProportions.height,left:0}).top-r.margins.top),s&&(i.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),h&&(i.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.width}).left-r.margins.left));!r.snapElements[u].snapping&&(e||o||s||h||w)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,n.extend(r._uiHash(),{snapItem:r.snapElements[u].item}));r.snapElements[u].snapping=e||o||s||h||w}}});n.ui.plugin.add("draggable","stack",{start:function(){var i,r=this.data("ui-draggable").options,t=n.makeArray(n(r.stack)).sort(function(t,i){return(parseInt(n(t).css("zIndex"),10)||0)-(parseInt(n(i).css("zIndex"),10)||0)});t.length&&(i=parseInt(n(t[0]).css("zIndex"),10)||0,n(t).each(function(t){n(this).css("zIndex",i+t)}),this.css("zIndex",i+t.length))}});n.ui.plugin.add("draggable","zIndex",{start:function(t,i){var r=n(i.helper),u=n(this).data("ui-draggable").options;r.css("zIndex")&&(u._zIndex=r.css("zIndex"));r.css("zIndex",u.zIndex)},stop:function(t,i){var r=n(this).data("ui-draggable").options;r._zIndex&&n(i.helper).css("zIndex",r._zIndex)}})}(jQuery),function(n){function t(n,t,i){return n>t&&n<t+i}n.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var i,t=this.options,r=t.accept;this.isover=!1;this.isout=!0;this.accept=n.isFunction(r)?r:function(n){return n.is(r)};this.proportions=function(){if(arguments.length)i=arguments[0];else return i?i:i={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}};n.ui.ddmanager.droppables[t.scope]=n.ui.ddmanager.droppables[t.scope]||[];n.ui.ddmanager.droppables[t.scope].push(this);t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=n.ui.ddmanager.droppables[this.options.scope];t<i.length;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){t==="accept"&&(this.accept=n.isFunction(i)?i:function(n){return n.is(i)});n.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=n.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass);i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=n.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=n.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=n.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var r=i||n.ui.ddmanager.current,u=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=n.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&n.ui.intersect(r,n.extend(t,{offset:t.element.offset()}),t.options.tolerance))return u=!0,!1}),u)?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(n){return{draggable:n.currentItem||n.element,helper:n.helper,position:n.position,offset:n.positionAbs}}});n.ui.intersect=function(n,i,r){if(!i.offset)return!1;var a,v,e=(n.positionAbs||n.position.absolute).left,o=(n.positionAbs||n.position.absolute).top,s=e+n.helperProportions.width,h=o+n.helperProportions.height,u=i.offset.left,f=i.offset.top,c=u+i.proportions().width,l=f+i.proportions().height;switch(r){case"fit":return u<=e&&s<=c&&f<=o&&h<=l;case"intersect":return u<e+n.helperProportions.width/2&&s-n.helperProportions.width/2<c&&f<o+n.helperProportions.height/2&&h-n.helperProportions.height/2<l;case"pointer":return a=(n.positionAbs||n.position.absolute).left+(n.clickOffset||n.offset.click).left,v=(n.positionAbs||n.position.absolute).top+(n.clickOffset||n.offset.click).top,t(v,f,i.proportions().height)&&t(a,u,i.proportions().width);case"touch":return(o>=f&&o<=l||h>=f&&h<=l||o<f&&h>l)&&(e>=u&&e<=c||s>=u&&s<=c||e<u&&s>c);default:return!1}};n.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var r,f,u=n.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,e=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();n:for(r=0;r<u.length;r++)if(!u[r].options.disabled&&(!t||u[r].accept.call(u[r].element[0],t.currentItem||t.element))){for(f=0;f<e.length;f++)if(e[f]===u[r].element[0]){u[r].proportions().height=0;continue n}(u[r].visible=u[r].element.css("display")!=="none",u[r].visible)&&(o==="mousedown"&&u[r]._activate.call(u[r],i),u[r].offset=u[r].element.offset(),u[r].proportions({width:u[r].element[0].offsetWidth,height:u[r].element[0].offsetHeight}))}},drop:function(t,i){var r=!1;return n.each((n.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&n.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,i)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),r},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||n.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&n.ui.ddmanager.prepareOffsets(t,i);n.each(n.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var r,e,f,o=n.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;u&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return n.data(this,"ui-droppable").options.scope===e}),f.length&&(r=n.data(f[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,i)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,i),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable");t.options.refreshPositions||n.ui.ddmanager.prepareOffsets(t,i)}}}(jQuery),function(n,t){var i="ui-effects-";n.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(n,t){function e(n,t,i){var r=s[t.type]||{};return n==null?i||!t.def?null:t.def:(n=r.floor?~~n:parseFloat(n),isNaN(n))?t.def:r.mod?(n+r.mod)%r.mod:0>n?0:r.max<n?r.max:n}function l(t){var e=i(),o=e._rgba=[];return(t=t.toLowerCase(),r(v,function(n,i){var r,s=i.re.exec(t),h=s&&i.parse(s),f=i.space||"rgba";if(h)return r=e[f](h),e[u[f].cache]=r[u[f].cache],o=e._rgba=r._rgba,!1}),o.length)?(o.join()==="0,0,0,0"&&n.extend(o,f.transparent),e):f[t]}function o(n,t,i){return(i=(i+1)%1,i*6<1)?n+(t-n)*i*6:i*2<1?t:i*3<2?n+(t-n)*(2/3-i)*6:n}var a=/^([\-+])=\s*(\d+\.?\d*)/,v=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1],n[2],n[3],n[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1]*2.55,n[2]*2.55,n[3]*2.55,n[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(n){return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(n){return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(n){return[n[1],n[2]/100,n[3]/100,n[4]]}}],i=n.Color=function(t,i,r,u){return new n.Color.fn.parse(t,i,r,u)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},s={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=i.support={},c=n("<p>")[0],f,r=n.each;c.style.cssText="background-color:rgba(1,1,1,.5)";h.rgba=c.style.backgroundColor.indexOf("rgba")>-1;r(u,function(n,t){t.cache="_"+n;t.props.alpha={idx:3,type:"percent",def:1}});i.fn=n.extend(i.prototype,{parse:function(o,s,h,c){if(o===t)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=n(o).css(s),s=t);var a=this,v=n.type(o),y=this._rgba=[];return(s!==t&&(o=[o,s,h,c],v="array"),v==="string")?this.parse(l(o)||f._default):v==="array"?(r(u.rgba.props,function(n,t){y[t.idx]=e(o[t.idx],t)}),this):v==="object"?(o instanceof i?r(u,function(n,t){o[t.cache]&&(a[t.cache]=o[t.cache].slice())}):r(u,function(t,i){var u=i.cache;r(i.props,function(n,t){if(!a[u]&&i.to){if(n==="alpha"||o[n]==null)return;a[u]=i.to(a._rgba)}a[u][t.idx]=e(o[n],t,!0)});a[u]&&n.inArray(null,a[u].slice(0,3))<0&&(a[u][3]=1,i.from&&(a._rgba=i.from(a[u])))}),this):void 0},is:function(n){var e=i(n),t=!0,f=this;return r(u,function(n,i){var o,u=e[i.cache];return u&&(o=f[i.cache]||i.to&&i.to(f._rgba)||[],r(i.props,function(n,i){if(u[i.idx]!=null)return t=u[i.idx]===o[i.idx]})),t}),t},_space:function(){var n=[],t=this;return r(u,function(i,r){t[r.cache]&&n.push(i)}),n.pop()},transition:function(n,t){var f=i(n),c=f._space(),o=u[c],l=this.alpha()===0?i("transparent"):this,a=l[o.cache]||o.to(l._rgba),h=a.slice();return f=f[o.cache],r(o.props,function(n,i){var c=i.idx,r=a[c],u=f[c],o=s[i.type]||{};u!==null&&(r===null?h[c]=u:(o.mod&&(u-r>o.mod/2?r+=o.mod:r-u>o.mod/2&&(r-=o.mod)),h[c]=e((u-r)*t+r,i)))}),this[c](h)},blend:function(t){if(this._rgba[3]===1)return this;var r=this._rgba.slice(),u=r.pop(),f=i(t)._rgba;return i(n.map(r,function(n,t){return(1-u)*f[t]+u*n}))},toRgbaString:function(){var i="rgba(",t=n.map(this._rgba,function(n,t){return n==null?t>2?1:0:n});return t[3]===1&&(t.pop(),i="rgb("),i+t.join()+")"},toHslaString:function(){var i="hsla(",t=n.map(this.hsla(),function(n,t){return n==null&&(n=t>2?1:0),t&&t<3&&(n=Math.round(n*100)+"%"),n});return t[3]===1&&(t.pop(),i="hsl("),i+t.join()+")"},toHexString:function(t){var i=this._rgba.slice(),r=i.pop();return t&&i.push(~~(r*255)),"#"+n.map(i,function(n){return n=(n||0).toString(16),n.length===1?"0"+n:n}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});i.fn.parse.prototype=i.fn;u.hsla.to=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var i=n[0]/255,r=n[1]/255,f=n[2]/255,s=n[3],u=Math.max(i,r,f),e=Math.min(i,r,f),t=u-e,o=u+e,h=o*.5,c,l;return c=e===u?0:i===u?60*(r-f)/t+360:r===u?60*(f-i)/t+120:60*(i-r)/t+240,l=t===0?0:h<=.5?t/o:t/(2-o),[Math.round(c)%360,l,h,s==null?1:s]};u.hsla.from=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var r=n[0]/360,u=n[1],t=n[2],e=n[3],i=t<=.5?t*(1+u):t+u-t*u,f=2*t-i;return[Math.round(o(f,i,r+1/3)*255),Math.round(o(f,i,r)*255),Math.round(o(f,i,r-1/3)*255),e]};r(u,function(u,f){var s=f.props,o=f.cache,h=f.to,c=f.from;i.fn[u]=function(u){if(h&&!this[o]&&(this[o]=h(this._rgba)),u===t)return this[o].slice();var l,a=n.type(u),v=a==="array"||a==="object"?u:arguments,f=this[o].slice();return r(s,function(n,t){var i=v[a==="object"?n:t.idx];i==null&&(i=f[t.idx]);f[t.idx]=e(i,t)}),c?(l=i(c(f)),l[o]=f,l):i(f)};r(s,function(t,r){i.fn[t]||(i.fn[t]=function(i){var f=n.type(i),h=t==="alpha"?this._hsla?"hsla":"rgba":u,o=this[h](),s=o[r.idx],e;return f==="undefined"?s:(f==="function"&&(i=i.call(this,s),f=n.type(i)),i==null&&r.empty)?this:(f==="string"&&(e=a.exec(i),e&&(i=s+parseFloat(e[2])*(e[1]==="+"?1:-1))),o[r.idx]=i,this[h](o))})})});i.hook=function(t){var u=t.split(" ");r(u,function(t,r){n.cssHooks[r]={set:function(t,u){var o,f,e="";if(u!=="transparent"&&(n.type(u)!=="string"||(o=l(u)))){if(u=i(o||u),!h.rgba&&u._rgba[3]!==1){for(f=r==="backgroundColor"?t.parentNode:t;(e===""||e==="transparent")&&f&&f.style;)try{e=n.css(f,"backgroundColor");f=f.parentNode}catch(s){}u=u.blend(e&&e!=="transparent"?e:"_default")}u=u.toRgbaString()}try{t.style[r]=u}catch(s){}}};n.fx.step[r]=function(t){t.colorInit||(t.start=i(t.elem,r),t.end=i(t.end),t.colorInit=!0);n.cssHooks[r].set(t.elem,t.start.transition(t.end,t.pos))}})};i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");n.cssHooks.borderColor={expand:function(n){var t={};return r(["Top","Right","Bottom","Left"],function(i,r){t["border"+r+"Color"]=n}),t}};f=n.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery),function(){function i(t){var r,u,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,f={};if(i&&i.length&&i[0]&&i[i[0]])for(u=i.length;u--;)r=i[u],typeof i[r]=="string"&&(f[n.camelCase(r)]=i[r]);else for(r in i)typeof i[r]=="string"&&(f[r]=i[r]);return f}function f(t,i){var e={},r,f;for(r in i)f=i[r],t[r]!==f&&(u[r]||(n.fx.step[r]||!isNaN(parseFloat(f)))&&(e[r]=f));return e}var r=["add","remove","toggle"],u={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};n.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){n.fx.step[i]=function(n){(n.end==="none"||n.setAttr)&&(n.pos!==1||n.setAttr)||(jQuery.style(n.elem,i,n.end),n.setAttr=!0)}});n.fn.addBack||(n.fn.addBack=function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))});n.effects.animateClass=function(t,u,e,o){var s=n.speed(u,e,o);return this.queue(function(){var e=n(this),h=e.attr("class")||"",o,u=s.children?e.find("*").addBack():e;u=u.map(function(){var t=n(this);return{el:t,start:i(this)}});o=function(){n.each(r,function(n,i){t[i]&&e[i+"Class"](t[i])})};o();u=u.map(function(){return this.end=i(this.el[0]),this.diff=f(this.start,this.end),this});e.attr("class",h);u=u.map(function(){var i=this,t=n.Deferred(),r=n.extend({},s,{queue:!1,complete:function(){t.resolve(i)}});return this.el.animate(this.diff,r),t.promise()});n.when.apply(n,u.get()).done(function(){o();n.each(arguments,function(){var t=this.el;n.each(this.diff,function(n){t.css(n,"")})});s.complete.call(e[0])})})};n.fn.extend({addClass:function(t){return function(i,r,u,f){return r?n.effects.animateClass.call(this,{add:i},r,u,f):t.apply(this,arguments)}}(n.fn.addClass),removeClass:function(t){return function(i,r,u,f){return arguments.length>1?n.effects.animateClass.call(this,{remove:i},r,u,f):t.apply(this,arguments)}}(n.fn.removeClass),toggleClass:function(i){return function(r,u,f,e,o){return typeof u=="boolean"||u===t?f?n.effects.animateClass.call(this,u?{add:r}:{remove:r},f,e,o):i.apply(this,arguments):n.effects.animateClass.call(this,{toggle:r},u,f,e)}}(n.fn.toggleClass),switchClass:function(t,i,r,u,f){return n.effects.animateClass.call(this,{add:i,remove:t},r,u,f)}})}(),function(){function r(t,i,r,u){return n.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},i==null&&(i={}),n.isFunction(i)&&(u=i,r=null,i={}),(typeof i=="number"||n.fx.speeds[i])&&(u=r,r=i,i={}),n.isFunction(r)&&(u=r,r=null),i&&n.extend(t,i),r=r||i.duration,t.duration=n.fx.off?0:typeof r=="number"?r:r in n.fx.speeds?n.fx.speeds[r]:n.fx.speeds._default,t.complete=u||i.complete,t}function u(t){return!t||typeof t=="number"||n.fx.speeds[t]?!0:typeof t=="string"&&!n.effects.effect[t]?!0:n.isFunction(t)?!0:typeof t=="object"&&!t.effect?!0:!1}n.extend(n.effects,{version:"1.10.4",save:function(n,t){for(var r=0;r<t.length;r++)t[r]!==null&&n.data(i+t[r],n[0].style[t[r]])},restore:function(n,r){for(var f,u=0;u<r.length;u++)r[u]!==null&&(f=n.data(i+r[u]),f===t&&(f=""),n.css(r[u],f))},setMode:function(n,t){return t==="toggle"&&(t=n.is(":hidden")?"show":"hide"),t},getBaseline:function(n,t){var i,r;switch(n[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=n[0]/t.height}switch(n[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=n[1]/t.width}return{x:r,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),float:t.css("float")},u=n("<div><\/div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:t.width(),height:t.height()},r=document.activeElement;try{r.id}catch(e){r=document.body}return t.wrap(u),(t[0]===r||n.contains(t[0],r))&&n(r).focus(),u=t.parent(),t.css("position")==="static"?(u.css({position:"relative"}),t.css({position:"relative"})):(n.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),n.each(["top","left","bottom","right"],function(n,r){i[r]=t.css(r);isNaN(parseInt(i[r],10))&&(i[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(f),u.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||n.contains(t[0],i))&&n(i).focus()),t},setTransition:function(t,i,r,u){return u=u||{},n.each(i,function(n,i){var f=t.cssUnit(i);f[0]>0&&(u[i]=f[0]*r+f[1])}),u}});n.fn.extend({effect:function(){function e(i){function o(){n.isFunction(e)&&e.call(r[0]);n.isFunction(i)&&i()}var r=n(this),e=t.complete,u=t.mode;(r.is(":hidden")?u==="hide":u==="show")?(r[u](),o()):f.call(r[0],t,o)}var t=r.apply(this,arguments),i=t.mode,u=t.queue,f=n.effects.effect[t.effect];return n.fx.off||!f?i?this[i](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):u===!1?this.each(e):this.queue(u||"fx",e)},show:function(n){return function(t){if(u(t))return n.apply(this,arguments);var i=r.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(n.fn.show),hide:function(n){return function(t){if(u(t))return n.apply(this,arguments);var i=r.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(n.fn.hide),toggle:function(n){return function(t){if(u(t)||typeof t=="boolean")return n.apply(this,arguments);var i=r.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(n.fn.toggle),cssUnit:function(t){var i=this.css(t),r=[];return n.each(["em","px","%","pt"],function(n,t){i.indexOf(t)>0&&(r=[parseFloat(i),t])}),r}})}(),function(){var t={};n.each(["Quad","Cubic","Quart","Quint","Expo"],function(n,i){t[i]=function(t){return Math.pow(t,n+2)}});n.extend(t,{Sine:function(n){return 1-Math.cos(n*Math.PI/2)},Circ:function(n){return 1-Math.sqrt(1-n*n)},Elastic:function(n){return n===0||n===1?n:-Math.pow(2,8*(n-1))*Math.sin(((n-1)*80-7.5)*Math.PI/15)},Back:function(n){return n*n*(3*n-2)},Bounce:function(n){for(var t,i=4;n<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((t*3-2)/22-n,2)}});n.each(t,function(t,i){n.easing["easeIn"+t]=i;n.easing["easeOut"+t]=function(n){return 1-i(1-n)};n.easing["easeInOut"+t]=function(n){return n<.5?i(n*2)/2:1-i(n*-2+2)/2}})}()}(jQuery),function(n){var t=/up|down|vertical/,i=/up|left|vertical|horizontal/;n.effects.effect.blind=function(r,u){var f=n(this),c=["position","top","bottom","left","right","height","width"],p=n.effects.setMode(f,r.mode||"hide"),w=r.direction||"up",o=t.test(w),l=o?"height":"width",a=o?"top":"left",b=i.test(w),v={},y=p==="show",e,s,h;f.parent().is(".ui-effects-wrapper")?n.effects.save(f.parent(),c):n.effects.save(f,c);f.show();e=n.effects.createWrapper(f).css({overflow:"hidden"});s=e[l]();h=parseFloat(e.css(a))||0;v[l]=y?s:0;b||(f.css(o?"bottom":"right",0).css(o?"top":"left","auto").css({position:"absolute"}),v[a]=y?h:s+h);y&&(e.css(l,0),b||e.css(a,h+s));e.animate(v,{duration:r.duration,easing:r.easing,queue:!1,complete:function(){p==="hide"&&f.hide();n.effects.restore(f,c);n.effects.removeWrapper(f);u()}})}}(jQuery),function(n){n.effects.effect.bounce=function(t,i){var r=n(this),v=["position","top","bottom","left","right","height","width"],k=n.effects.setMode(r,t.mode||"effect"),f=k==="hide",y=k==="show",h=t.direction||"up",u=t.distance,p=t.times||5,d=p*2+(y||f?1:0),c=t.duration/d,l=t.easing,e=h==="up"||h==="down"?"top":"left",w=h==="up"||h==="left",b,o,s,a=r.queue(),g=a.length;for((y||f)&&v.push("opacity"),n.effects.save(r,v),r.show(),n.effects.createWrapper(r),u||(u=r[e==="top"?"outerHeight":"outerWidth"]()/3),y&&(s={opacity:1},s[e]=0,r.css("opacity",0).css(e,w?-u*2:u*2).animate(s,c,l)),f&&(u=u/Math.pow(2,p-1)),s={},s[e]=0,b=0;b<p;b++)o={},o[e]=(w?"-=":"+=")+u,r.animate(o,c,l).animate(s,c,l),u=f?u*2:u/2;f&&(o={opacity:0},o[e]=(w?"-=":"+=")+u,r.animate(o,c,l));r.queue(function(){f&&r.hide();n.effects.restore(r,v);n.effects.removeWrapper(r);i()});g>1&&a.splice.apply(a,[1,0].concat(a.splice(g,d+1)));r.dequeue()}}(jQuery),function(n){n.effects.effect.clip=function(t,i){var r=n(this),h=["position","top","bottom","left","right","height","width"],v=n.effects.setMode(r,t.mode||"hide"),f=v==="show",y=t.direction||"vertical",c=y==="vertical",o=c?"height":"width",l=c?"top":"left",s={},a,u,e;n.effects.save(r,h);r.show();a=n.effects.createWrapper(r).css({overflow:"hidden"});u=r[0].tagName==="IMG"?a:r;e=u[o]();f&&(u.css(o,0),u.css(l,e/2));s[o]=f?e:0;s[l]=f?0:e/2;u.animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){f||r.hide();n.effects.restore(r,h);n.effects.removeWrapper(r);i()}})}}(jQuery),function(n){n.effects.effect.drop=function(t,i){var r=n(this),h=["position","top","bottom","left","right","opacity","height","width"],c=n.effects.setMode(r,t.mode||"hide"),e=c==="show",u=t.direction||"left",o=u==="up"||u==="down"?"top":"left",s=u==="up"||u==="left"?"pos":"neg",l={opacity:e?1:0},f;n.effects.save(r,h);r.show();n.effects.createWrapper(r);f=t.distance||r[o==="top"?"outerHeight":"outerWidth"](!0)/2;e&&r.css("opacity",0).css(o,s==="pos"?-f:f);l[o]=(e?s==="pos"?"+=":"-=":s==="pos"?"-=":"+=")+f;r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){c==="hide"&&r.hide();n.effects.restore(r,h);n.effects.removeWrapper(r);i()}})}}(jQuery),function(n){n.effects.effect.explode=function(t,i){function k(){l.push(this);l.length===o*c&&d()}function d(){r.css({visibility:"visible"});n(l).remove();u||r.hide();i()}for(var o=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=o,r=n(this),b=n.effects.setMode(r,t.mode||"hide"),u=b==="show",w=r.show().css("visibility","hidden").offset(),s=Math.ceil(r.outerWidth()/c),h=Math.ceil(r.outerHeight()/o),l=[],e,a,v,y,p,f=0;f<o;f++)for(v=w.top+f*h,p=f-(o-1)/2,e=0;e<c;e++)a=w.left+e*s,y=e-(c-1)/2,r.clone().appendTo("body").wrap("<div><\/div>").css({position:"absolute",visibility:"visible",left:-e*s,top:-f*h}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:s,height:h,left:a+(u?y*s:0),top:v+(u?p*h:0),opacity:u?0:1}).animate({left:a+(u?0:y*s),top:v+(u?0:p*h),opacity:u?1:0},t.duration||500,t.easing,k)}}(jQuery),function(n){n.effects.effect.fade=function(t,i){var r=n(this),u=n.effects.setMode(r,t.mode||"toggle");r.animate({opacity:u},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}}(jQuery),function(n){n.effects.effect.fold=function(t,i){var r=n(this),s=["position","top","bottom","left","right","height","width"],h=n.effects.setMode(r,t.mode||"hide"),e=h==="show",c=h==="hide",f=t.size||15,l=/([0-9]+)%/.exec(f),a=!!t.horizFirst,v=e!==a,y=v?["width","height"]:["height","width"],p=t.duration/2,u,o,w={},b={};n.effects.save(r,s);r.show();u=n.effects.createWrapper(r).css({overflow:"hidden"});o=v?[u.width(),u.height()]:[u.height(),u.width()];l&&(f=parseInt(l[1],10)/100*o[c?0:1]);e&&u.css(a?{height:0,width:f}:{height:f,width:0});w[y[0]]=e?o[0]:f;b[y[1]]=e?o[1]:0;u.animate(w,p,t.easing).animate(b,p,t.easing,function(){c&&r.hide();n.effects.restore(r,s);n.effects.removeWrapper(r);i()})}}(jQuery),function(n){n.effects.effect.highlight=function(t,i){var r=n(this),u=["backgroundImage","backgroundColor","opacity"],f=n.effects.setMode(r,t.mode||"show"),e={backgroundColor:r.css("backgroundColor")};f==="hide"&&(e.opacity=0);n.effects.save(r,u);r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(e,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){f==="hide"&&r.hide();n.effects.restore(r,u);i()}})}}(jQuery),function(n){n.effects.effect.pulsate=function(t,i){var r=n(this),e=n.effects.setMode(r,t.mode||"show"),h=e==="show",a=e==="hide",v=h||e==="hide",o=(t.times||5)*2+(v?1:0),c=t.duration/o,u=0,f=r.queue(),l=f.length,s;for((h||!r.is(":visible"))&&(r.css("opacity",0).show(),u=1),s=1;s<o;s++)r.animate({opacity:u},c,t.easing),u=1-u;r.animate({opacity:u},c,t.easing);r.queue(function(){a&&r.hide();i()});l>1&&f.splice.apply(f,[1,0].concat(f.splice(l,o+1)));r.dequeue()}}(jQuery),function(n){n.effects.effect.puff=function(t,i){var r=n(this),e=n.effects.setMode(r,t.mode||"hide"),o=e==="hide",s=parseInt(t.percent,10)||150,f=s/100,u={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};n.extend(t,{effect:"scale",queue:!1,fade:!0,mode:e,complete:i,percent:o?s:100,from:o?u:{height:u.height*f,width:u.width*f,outerHeight:u.outerHeight*f,outerWidth:u.outerWidth*f}});r.effect(t)};n.effects.effect.scale=function(t,i){var u=n(this),r=n.extend(!0,{},t),f=n.effects.setMode(u,t.mode||"effect"),s=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:f==="hide"?0:100),h=t.direction||"both",c=t.origin,e={height:u.height(),width:u.width(),outerHeight:u.outerHeight(),outerWidth:u.outerWidth()},o={y:h!=="horizontal"?s/100:1,x:h!=="vertical"?s/100:1};r.effect="size";r.queue=!1;r.complete=i;f!=="effect"&&(r.origin=c||["middle","center"],r.restore=!0);r.from=t.from||(f==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);r.to={height:e.height*o.y,width:e.width*o.x,outerHeight:e.outerHeight*o.y,outerWidth:e.outerWidth*o.x};r.fade&&(f==="show"&&(r.from.opacity=0,r.to.opacity=1),f==="hide"&&(r.from.opacity=1,r.to.opacity=0));u.effect(r)};n.effects.effect.size=function(t,i){var f,l,u,r=n(this),w=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["width","height","overflow"],v=["fontSize"],e=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],o=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=n.effects.setMode(r,t.mode||"effect"),y=t.restore||h!=="effect",c=t.scale||"both",b=t.origin||["middle","center"],k=r.css("position"),s=y?w:["position","top","bottom","left","right","overflow","opacity"],p={height:0,width:0,outerHeight:0,outerWidth:0};h==="show"&&r.show();f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};t.mode==="toggle"&&h==="show"?(r.from=t.to||p,r.to=t.from||f):(r.from=t.from||(h==="show"?p:f),r.to=t.to||(h==="hide"?p:f));u={from:{y:r.from.height/f.height,x:r.from.width/f.width},to:{y:r.to.height/f.height,x:r.to.width/f.width}};(c==="box"||c==="both")&&(u.from.y!==u.to.y&&(s=s.concat(e),r.from=n.effects.setTransition(r,e,u.from.y,r.from),r.to=n.effects.setTransition(r,e,u.to.y,r.to)),u.from.x!==u.to.x&&(s=s.concat(o),r.from=n.effects.setTransition(r,o,u.from.x,r.from),r.to=n.effects.setTransition(r,o,u.to.x,r.to)));(c==="content"||c==="both")&&u.from.y!==u.to.y&&(s=s.concat(v).concat(a),r.from=n.effects.setTransition(r,v,u.from.y,r.from),r.to=n.effects.setTransition(r,v,u.to.y,r.to));n.effects.save(r,s);r.show();n.effects.createWrapper(r);r.css("overflow","hidden").css(r.from);b&&(l=n.effects.getBaseline(b,f),r.from.top=(f.outerHeight-r.outerHeight())*l.y,r.from.left=(f.outerWidth-r.outerWidth())*l.x,r.to.top=(f.outerHeight-r.to.outerHeight)*l.y,r.to.left=(f.outerWidth-r.to.outerWidth)*l.x);r.css(r.from);(c==="content"||c==="both")&&(e=e.concat(["marginTop","marginBottom"]).concat(v),o=o.concat(["marginLeft","marginRight"]),a=w.concat(e).concat(o),r.find("*[width]").each(function(){var i=n(this),r={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};y&&n.effects.save(i,a);i.from={height:r.height*u.from.y,width:r.width*u.from.x,outerHeight:r.outerHeight*u.from.y,outerWidth:r.outerWidth*u.from.x};i.to={height:r.height*u.to.y,width:r.width*u.to.x,outerHeight:r.height*u.to.y,outerWidth:r.width*u.to.x};u.from.y!==u.to.y&&(i.from=n.effects.setTransition(i,e,u.from.y,i.from),i.to=n.effects.setTransition(i,e,u.to.y,i.to));u.from.x!==u.to.x&&(i.from=n.effects.setTransition(i,o,u.from.x,i.from),i.to=n.effects.setTransition(i,o,u.to.x,i.to));i.css(i.from);i.animate(i.to,t.duration,t.easing,function(){y&&n.effects.restore(i,a)})}));r.animate(r.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){r.to.opacity===0&&r.css("opacity",r.from.opacity);h==="hide"&&r.hide();n.effects.restore(r,s);y||(k==="static"?r.css({position:"relative",top:r.to.top,left:r.to.left}):n.each(["top","left"],function(n,t){r.css(t,function(t,i){var f=parseInt(i,10),u=n?r.to.left:r.to.top;return i==="auto"?u+"px":f+u+"px"})}));n.effects.removeWrapper(r);i()}})}}(jQuery),function(n){n.effects.effect.shake=function(t,i){var r=n(this),v=["position","top","bottom","left","right","height","width"],k=n.effects.setMode(r,t.mode||"effect"),f=t.direction||"left",o=t.distance||20,y=t.times||3,p=y*2+1,u=Math.round(t.duration/p),s=f==="up"||f==="down"?"top":"left",h=f==="up"||f==="left",c={},l={},w={},a,e=r.queue(),b=e.length;for(n.effects.save(r,v),r.show(),n.effects.createWrapper(r),c[s]=(h?"-=":"+=")+o,l[s]=(h?"+=":"-=")+o*2,w[s]=(h?"-=":"+=")+o*2,r.animate(c,u,t.easing),a=1;a<y;a++)r.animate(l,u,t.easing).animate(w,u,t.easing);r.animate(l,u,t.easing).animate(c,u/2,t.easing).queue(function(){k==="hide"&&r.hide();n.effects.restore(r,v);n.effects.removeWrapper(r);i()});b>1&&e.splice.apply(e,[1,0].concat(e.splice(b,p+1)));r.dequeue()}}(jQuery),function(n){n.effects.effect.slide=function(t,i){var r=n(this),s=["position","top","bottom","left","right","width","height"],h=n.effects.setMode(r,t.mode||"show"),c=h==="show",f=t.direction||"left",e=f==="up"||f==="down"?"top":"left",o=f==="up"||f==="left",u,l={};n.effects.save(r,s);r.show();u=t.distance||r[e==="top"?"outerHeight":"outerWidth"](!0);n.effects.createWrapper(r).css({overflow:"hidden"});c&&r.css(e,o?isNaN(u)?"-"+u:-u:u);l[e]=(c?o?"+=":"-=":o?"-=":"+=")+u;r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){h==="hide"&&r.hide();n.effects.restore(r,s);n.effects.removeWrapper(r);i()}})}}(jQuery),function(n){n.effects.effect.transfer=function(t,i){var u=n(this),r=n(t.to),f=r.css("position")==="fixed",e=n("body"),o=f?e.scrollTop():0,s=f?e.scrollLeft():0,h=r.offset(),l={top:h.top-o,left:h.left-s,height:r.innerHeight(),width:r.innerWidth()},c=u.offset(),a=n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({top:c.top-o,left:c.left-s,height:u.innerHeight(),width:u.innerWidth(),position:f?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){a.remove();i()})}}(jQuery),function(n){n.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=!1;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,n.proxy(function(n){this.options.disabled&&n.preventDefault()},this));this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true");this._on({"mousedown .ui-menu-item > a":function(n){n.preventDefault()},"click .ui-state-disabled > a":function(n){n.preventDefault()},"click .ui-menu-item:has(a)":function(t){var i=n(t.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&n(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var i=n(t.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(t,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(n,t){var i=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(n,i)},blur:function(t){this._delay(function(){n.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(t){n(t.target).closest(".ui-menu").length||this.collapseAll(t);this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=n(this);t.data("ui-menu-submenu-carat")&&t.remove()});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function s(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var i,f,r,e,u,o=!0;switch(t.keyCode){case n.ui.keyCode.PAGE_UP:this.previousPage(t);break;case n.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case n.ui.keyCode.HOME:this._move("first","first",t);break;case n.ui.keyCode.END:this._move("last","last",t);break;case n.ui.keyCode.UP:this.previous(t);break;case n.ui.keyCode.DOWN:this.next(t);break;case n.ui.keyCode.LEFT:this.collapse(t);break;case n.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case n.ui.keyCode.ENTER:case n.ui.keyCode.SPACE:this._activate(t);break;case n.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1;f=this.previousFilter||"";r=String.fromCharCode(t.keyCode);e=!1;clearTimeout(this.filterTimer);r===f?e=!0:r=f+r;u=new RegExp("^"+s(r),"i");i=this.activeMenu.children(".ui-menu-item").filter(function(){return u.test(n(this).children("a").text())});i=e&&i.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):i;i.length||(r=String.fromCharCode(t.keyCode),u=new RegExp("^"+s(r),"i"),i=this.activeMenu.children(".ui-menu-item").filter(function(){return u.test(n(this).children("a").text())}));i.length?(this.focus(t,i),i.length>1?(this.previousFilter=r,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}o&&t.preventDefault()},_activate:function(n){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(n):this.select(n))},refresh:function(){var t,r=this.options.icons.submenu,i=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=n(this),i=t.prev("a"),u=n("<span>").addClass("ui-menu-icon ui-icon "+r).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(u);t.attr("aria-labelledby",i.attr("id"))});t=i.add(this.element);t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});t.children(":not(.ui-menu-item)").each(function(){var t=n(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")});t.children(".ui-state-disabled").attr("aria-disabled","true");this.active&&!n.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(n,t){n==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);this._super(n,t)},focus:function(n,t){var i,r;this.blur(n,n&&n.type==="focus");this._scrollIntoView(t);this.active=t.first();r=this.active.children("a").addClass("ui-state-focus");this.options.role&&this.element.attr("aria-activedescendant",r.attr("id"));this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");n&&n.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay);i=t.children(".ui-menu");i.length&&n&&/^mouse/.test(n.type)&&this._startOpening(i);this.activeMenu=t.parent();this._trigger("focus",n,{item:t})},_scrollIntoView:function(t){var e,o,i,r,u,f;this._hasScroll()&&(e=parseFloat(n.css(this.activeMenu[0],"borderTopWidth"))||0,o=parseFloat(n.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-e-o,r=this.activeMenu.scrollTop(),u=this.activeMenu.height(),f=t.height(),i<0?this.activeMenu.scrollTop(r+i):i+f>u&&this.activeMenu.scrollTop(r+i-u+f))},blur:function(n,t){(t||clearTimeout(this.timer),this.active)&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",n,{item:this.active}))},_startOpening:function(n){(clearTimeout(this.timer),n.attr("aria-hidden")==="true")&&(this.timer=this._delay(function(){this._close();this._open(n)},this.delay))},_open:function(t){var i=n.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true");t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer);this.timer=this._delay(function(){var r=i?this.element:n(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element);this._close(r);this.blur(t);this.activeMenu=r},this.delay)},_close:function(n){n||(n=this.active?this.active.parent():this.element);n.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(n){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(n,t))},expand:function(n){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(n,t)}))},next:function(n){this._move("next","first",n)},previous:function(n){this._move("prev","last",n)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(n,t,i){var r;this.active&&(r=n==="first"||n==="last"?this.active[n==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[n+"All"](".ui-menu-item").eq(0));r&&r.length&&this.active||(r=this.activeMenu.children(".ui-menu-item")[t]());this.focus(i,r)},nextPage:function(t){var i,r,u;if(!this.active){this.next(t);return}this.isLastItem()||(this._hasScroll()?(r=this.active.offset().top,u=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=n(this),i.offset().top-r-u<0}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]()))},previousPage:function(t){var i,r,u;if(!this.active){this.next(t);return}this.isFirstItem()||(this._hasScroll()?(r=this.active.offset().top,u=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=n(this),i.offset().top-r+u>0}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item").first()))},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||n(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0);this._trigger("select",t,i)}})}(jQuery),function(n,t){n.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(n){if(n===t)return this.options.value;this.options.value=this._constrainedValue(n);this._refreshValue()},_constrainedValue:function(n){return n===t&&(n=this.options.value),this.indeterminate=n===!1,typeof n!="number"&&(n=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,n))},_setOptions:function(n){var t=n.value;delete n.value;this._super(n);this.options.value=this._constrainedValue(t);this._refreshValue()},_setOption:function(n,t){n==="max"&&(t=Math.max(this.min,t));this._super(n,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null));this.oldValue!==t&&(this.oldValue=t,this._trigger("change"));t===this.options.max&&this._trigger("complete")}})}(jQuery),function(n){function i(n){return parseInt(n,10)||0}function t(n){return!isNaN(parseInt(n,10))}n.widget("ui.resizable",n.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,f,r,i,o,u=this,t=this.options;if(this.element.addClass("ui-resizable"),n.extend(this,{_aspectRatio:!!t.aspectRatio,aspectRatio:t.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:t.helper||t.ghost||t.animate?t.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=t.handles||(n(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for(this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},f=0;f<e.length;f++)r=n.trim(e[f]),o="ui-resizable-"+r,i=n("<div class='ui-resizable-handle "+o+"'><\/div>"),i.css({zIndex:t.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i);this._renderAxis=function(t){var i,r,u,f;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=n(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=n(this.handles[i],this.element),f=/sw|ne|nw|se|n|s/.test(i)?r.outerHeight():r.outerWidth(),u=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(u,f),this._proportionallyResize()),!n(this.handles[i]).length};this._renderAxis(this.element);this._handles=n(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){u.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),u.axis=i&&i[1]?i[1]:"se")});t.autoHide&&(this._handles.hide(),n(this.element).addClass("ui-resizable-autohide").mouseenter(function(){t.disabled||(n(this).removeClass("ui-resizable-autohide"),u._handles.show())}).mouseleave(function(){t.disabled||u.resizing||(n(this).addClass("ui-resizable-autohide"),u._handles.hide())}));this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var r,i,u=!1;for(r in this.handles)i=n(this.handles[r])[0],(i===t.target||n.contains(i,t.target))&&(u=!0);return!this.options.disabled&&u},_mouseStart:function(t){var f,e,o,u=this.options,s=this.element.position(),r=this.element;return this.resizing=!0,/absolute/.test(r.css("position"))?r.css({position:"absolute",top:r.css("top"),left:r.css("left")}):r.is(".ui-draggable")&&r.css({position:"absolute",top:s.top,left:s.left}),this._renderProxy(),f=i(this.helper.css("left")),e=i(this.helper.css("top")),u.containment&&(f+=n(u.containment).scrollLeft()||0,e+=n(u.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:f,top:e},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:r.width(),height:r.height()},this.originalSize=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()},this.originalPosition={left:f,top:e},this.sizeDiff={width:r.outerWidth()-r.width(),height:r.outerHeight()-r.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof u.aspectRatio=="number"?u.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=n(".ui-resizable-"+this.axis).css("cursor"),n("body").css("cursor",o==="auto"?this.axis+"-resize":o),r.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,e=this.helper,r={},u=this.originalMousePosition,o=this.axis,s=this.position.top,h=this.position.left,c=this.size.width,l=this.size.height,a=t.pageX-u.left||0,v=t.pageY-u.top||0,f=this._change[o];return f?(i=f.apply(this,[t,a,v]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==s&&(r.top=this.position.top+"px"),this.position.left!==h&&(r.left=this.position.left+"px"),this.size.width!==c&&(r.width=this.size.width+"px"),this.size.height!==l&&(r.height=this.size.height+"px"),e.css(r),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),n.isEmptyObject(r)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var r,u,f,e,o,s,h,c=this.options,i=this;return this._helper&&(r=this._proportionallyResizeElements,u=r.length&&/textarea/i.test(r[0].nodeName),f=u&&n.ui.hasScroll(r[0],"left")?0:i.sizeDiff.height,e=u?0:i.sizeDiff.width,o={width:i.helper.width()-e,height:i.helper.height()-f},s=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,h=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null,c.animate||this.element.css(n.extend(o,{top:h,left:s})),i.helper.height(i.size.height),i.helper.width(i.size.width),this._helper&&!c.animate&&this._proportionallyResize()),n("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(n){var u,f,e,o,i,r=this.options;i={minWidth:t(r.minWidth)?r.minWidth:0,maxWidth:t(r.maxWidth)?r.maxWidth:Infinity,minHeight:t(r.minHeight)?r.minHeight:0,maxHeight:t(r.maxHeight)?r.maxHeight:Infinity};(this._aspectRatio||n)&&(u=i.minHeight*this.aspectRatio,e=i.minWidth/this.aspectRatio,f=i.maxHeight*this.aspectRatio,o=i.maxWidth/this.aspectRatio,u>i.minWidth&&(i.minWidth=u),e>i.minHeight&&(i.minHeight=e),f<i.maxWidth&&(i.maxWidth=f),o<i.maxHeight&&(i.maxHeight=o));this._vBoundaries=i},_updateCache:function(n){this.offset=this.helper.offset();t(n.left)&&(this.position.left=n.left);t(n.top)&&(this.position.top=n.top);t(n.height)&&(this.size.height=n.height);t(n.width)&&(this.size.width=n.width)},_updateRatio:function(n){var i=this.position,r=this.size,u=this.axis;return t(n.height)?n.width=n.height*this.aspectRatio:t(n.width)&&(n.height=n.width/this.aspectRatio),u==="sw"&&(n.left=i.left+(r.width-n.width),n.top=null),u==="nw"&&(n.top=i.top+(r.height-n.height),n.left=i.left+(r.width-n.width)),n},_respectSize:function(n){var i=this._vBoundaries,r=this.axis,u=t(n.width)&&i.maxWidth&&i.maxWidth<n.width,f=t(n.height)&&i.maxHeight&&i.maxHeight<n.height,e=t(n.width)&&i.minWidth&&i.minWidth>n.width,o=t(n.height)&&i.minHeight&&i.minHeight>n.height,s=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,c=/sw|nw|w/.test(r),l=/nw|ne|n/.test(r);return e&&(n.width=i.minWidth),o&&(n.height=i.minHeight),u&&(n.width=i.maxWidth),f&&(n.height=i.maxHeight),e&&c&&(n.left=s-i.minWidth),u&&c&&(n.left=s-i.maxWidth),o&&l&&(n.top=h-i.minHeight),f&&l&&(n.top=h-i.maxHeight),n.width||n.height||n.left||!n.top?n.width||n.height||n.top||!n.left||(n.left=null):n.top=null,n},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,r,u,n,f=this.helper||this.element,i=0;i<this._proportionallyResizeElements.length;i++){if(n=this._proportionallyResizeElements[i],!this.borderDif)for(this.borderDif=[],r=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],u=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;t<r.length;t++)this.borderDif[t]=(parseInt(r[t],10)||0)+(parseInt(u[t],10)||0);n.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset();this._helper?(this.helper=this.helper||n("<div style='overflow:hidden;'><\/div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(n,t){return{width:this.originalSize.width+t}},w:function(n,t){var i=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:i.width-t}},n:function(n,t,i){var r=this.originalSize,u=this.originalPosition;return{top:u.top+i,height:r.height-i}},s:function(n,t,i){return{height:this.originalSize.height+i}},se:function(t,i,r){return n.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,r]))},sw:function(t,i,r){return n.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,r]))},ne:function(t,i,r){return n.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,r]))},nw:function(t,i,r){return n.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,r]))}},_propagate:function(t,i){n.ui.plugin.call(this,t,[i,this.ui()]);t!=="resize"&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});n.ui.plugin.add("resizable","animate",{stop:function(t){var i=n(this).data("ui-resizable"),u=i.options,r=i._proportionallyResizeElements,f=r.length&&/textarea/i.test(r[0].nodeName),s=f&&n.ui.hasScroll(r[0],"left")?0:i.sizeDiff.height,h=f?0:i.sizeDiff.width,c={width:i.size.width-h,height:i.size.height-s},e=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,o=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(n.extend(c,o&&e?{top:o,left:e}:{}),{duration:u.animateDuration,easing:u.animateEasing,step:function(){var u={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};r&&r.length&&n(r[0]).css({width:u.width,height:u.height});i._updateCache(u);i._propagate("resize",t)}})}});n.ui.plugin.add("resizable","containment",{start:function(){var u,e,o,s,h,c,l,t=n(this).data("ui-resizable"),a=t.options,v=t.element,f=a.containment,r=f instanceof n?f.get(0):/parent/.test(f)?v.parent().get(0):f;r&&(t.containerElement=n(r),/document/.test(f)||f===document?(t.containerOffset={left:0,top:0},t.containerPosition={left:0,top:0},t.parentData={element:n(document),left:0,top:0,width:n(document).width(),height:n(document).height()||document.body.parentNode.scrollHeight}):(u=n(r),e=[],n(["Top","Right","Left","Bottom"]).each(function(n,t){e[n]=i(u.css("padding"+t))}),t.containerOffset=u.offset(),t.containerPosition=u.position(),t.containerSize={height:u.innerHeight()-e[3],width:u.innerWidth()-e[1]},o=t.containerOffset,s=t.containerSize.height,h=t.containerSize.width,c=n.ui.hasScroll(r,"left")?r.scrollWidth:h,l=n.ui.hasScroll(r)?r.scrollHeight:s,t.parentData={element:r,left:o.left,top:o.top,width:c,height:l}))},resize:function(t){var f,o,s,h,i=n(this).data("ui-resizable"),a=i.options,r=i.containerOffset,c=i.position,e=i._aspectRatio||t.shiftKey,u={top:0,left:0},l=i.containerElement;l[0]!==document&&/static/.test(l.css("position"))&&(u=r);c.left<(i._helper?r.left:0)&&(i.size.width=i.size.width+(i._helper?i.position.left-r.left:i.position.left-u.left),e&&(i.size.height=i.size.width/i.aspectRatio),i.position.left=a.helper?r.left:0);c.top<(i._helper?r.top:0)&&(i.size.height=i.size.height+(i._helper?i.position.top-r.top:i.position.top),e&&(i.size.width=i.size.height*i.aspectRatio),i.position.top=i._helper?r.top:0);i.offset.left=i.parentData.left+i.position.left;i.offset.top=i.parentData.top+i.position.top;f=Math.abs((i._helper?i.offset.left-u.left:i.offset.left-u.left)+i.sizeDiff.width);o=Math.abs((i._helper?i.offset.top-u.top:i.offset.top-r.top)+i.sizeDiff.height);s=i.containerElement.get(0)===i.element.parent().get(0);h=/relative|absolute/.test(i.containerElement.css("position"));s&&h&&(f-=Math.abs(i.parentData.left));f+i.size.width>=i.parentData.width&&(i.size.width=i.parentData.width-f,e&&(i.size.height=i.size.width/i.aspectRatio));o+i.size.height>=i.parentData.height&&(i.size.height=i.parentData.height-o,e&&(i.size.width=i.size.height*i.aspectRatio))},stop:function(){var t=n(this).data("ui-resizable"),r=t.options,u=t.containerOffset,f=t.containerPosition,e=t.containerElement,i=n(t.helper),o=i.offset(),s=i.outerWidth()-t.sizeDiff.width,h=i.outerHeight()-t.sizeDiff.height;t._helper&&!r.animate&&/relative/.test(e.css("position"))&&n(this).css({left:o.left-f.left-u.left,width:s,height:h});t._helper&&!r.animate&&/static/.test(e.css("position"))&&n(this).css({left:o.left-f.left-u.left,width:s,height:h})}});n.ui.plugin.add("resizable","alsoResize",{start:function(){var r=n(this).data("ui-resizable"),t=r.options,i=function(t){n(t).each(function(){var t=n(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof t.alsoResize!="object"||t.alsoResize.parentNode?i(t.alsoResize):t.alsoResize.length?(t.alsoResize=t.alsoResize[0],i(t.alsoResize)):n.each(t.alsoResize,function(n){i(n)})},resize:function(t,i){var r=n(this).data("ui-resizable"),u=r.options,f=r.originalSize,e=r.originalPosition,s={height:r.size.height-f.height||0,width:r.size.width-f.width||0,top:r.position.top-e.top||0,left:r.position.left-e.left||0},o=function(t,r){n(t).each(function(){var t=n(this),f=n(this).data("ui-resizable-alsoresize"),u={},e=r&&r.length?r:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];n.each(e,function(n,t){var i=(f[t]||0)+(s[t]||0);i&&i>=0&&(u[t]=i||null)});t.css(u)})};typeof u.alsoResize!="object"||u.alsoResize.nodeType?o(u.alsoResize):n.each(u.alsoResize,function(n,t){o(n,t)})},stop:function(){n(this).removeData("resizable-alsoresize")}});n.ui.plugin.add("resizable","ghost",{start:function(){var t=n(this).data("ui-resizable"),i=t.options,r=t.size;t.ghost=t.originalElement.clone();t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");t.ghost.appendTo(t.helper)},resize:function(){var t=n(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=n(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}});n.ui.plugin.add("resizable","grid",{resize:function(){var t=n(this).data("ui-resizable"),i=t.options,v=t.size,o=t.originalSize,s=t.originalPosition,h=t.axis,c=typeof i.grid=="number"?[i.grid,i.grid]:i.grid,f=c[0]||1,e=c[1]||1,l=Math.round((v.width-o.width)/f)*f,a=Math.round((v.height-o.height)/e)*e,r=o.width+l,u=o.height+a,y=i.maxWidth&&i.maxWidth<r,p=i.maxHeight&&i.maxHeight<u,w=i.minWidth&&i.minWidth>r,b=i.minHeight&&i.minHeight>u;i.grid=c;w&&(r=r+f);b&&(u=u+e);y&&(r=r-f);p&&(u=u-e);/^(se|s|e)$/.test(h)?(t.size.width=r,t.size.height=u):/^(ne)$/.test(h)?(t.size.width=r,t.size.height=u,t.position.top=s.top-a):/^(sw)$/.test(h)?(t.size.width=r,t.size.height=u,t.position.left=s.left-l):(u-e>0?(t.size.height=u,t.position.top=s.top-a):(t.size.height=e,t.position.top=s.top+o.height-e),r-f>0?(t.size.width=r,t.position.left=s.left-l):(t.size.width=f,t.position.left=s.left+o.width-f))}})}(jQuery),function(n){n.widget("ui.selectable",n.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable");this.dragged=!1;this.refresh=function(){t=n(i.options.filter,i.element[0]);t.addClass("ui-selectee");t.each(function(){var t=n(this),i=t.offset();n.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})};this.refresh();this.selectees=t.addClass("ui-selectee");this._mouseInit();this.helper=n("<div class='ui-selectable-helper'><\/div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(t){var i=this,r=this.options;(this.opos=[t.pageX,t.pageY],this.options.disabled)||(this.selectees=n(r.filter,this.element[0]),this._trigger("start",t),n(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=n.data(this,"selectable-item");r.startselected=!0;t.metaKey||t.ctrlKey||(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,i._trigger("unselecting",t,{unselecting:r.element}))}),n(t.target).parents().addBack().each(function(){var u,r=n.data(this,"selectable-item");if(r)return u=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected"),r.$element.removeClass(u?"ui-unselecting":"ui-selected").addClass(u?"ui-selecting":"ui-unselecting"),r.unselecting=!u,r.selecting=u,r.selected=u,u?i._trigger("selecting",t,{selecting:r.element}):i._trigger("unselecting",t,{unselecting:r.element}),!1}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var e,o=this,s=this.options,i=this.opos[0],r=this.opos[1],u=t.pageX,f=t.pageY;return i>u&&(e=u,u=i,i=e),r>f&&(e=f,f=r,r=e),this.helper.css({left:i,top:r,width:u-i,height:f-r}),this.selectees.each(function(){var e=n.data(this,"selectable-item"),h=!1;e&&e.element!==o.element[0]&&(s.tolerance==="touch"?h=!(e.left>u||e.right<i||e.top>f||e.bottom<r):s.tolerance==="fit"&&(h=e.left>i&&e.right<u&&e.top>r&&e.bottom<f),h?(e.selected&&(e.$element.removeClass("ui-selected"),e.selected=!1),e.unselecting&&(e.$element.removeClass("ui-unselecting"),e.unselecting=!1),e.selecting||(e.$element.addClass("ui-selecting"),e.selecting=!0,o._trigger("selecting",t,{selecting:e.element}))):(e.selecting&&((t.metaKey||t.ctrlKey)&&e.startselected?(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.$element.addClass("ui-selected"),e.selected=!0):(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.startselected&&(e.$element.addClass("ui-unselecting"),e.unselecting=!0),o._trigger("unselecting",t,{unselecting:e.element}))),e.selected&&(t.metaKey||t.ctrlKey||e.startselected||(e.$element.removeClass("ui-selected"),e.selected=!1,e.$element.addClass("ui-unselecting"),e.unselecting=!0,o._trigger("unselecting",t,{unselecting:e.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,n(".ui-unselecting",this.element[0]).each(function(){var r=n.data(this,"selectable-item");r.$element.removeClass("ui-unselecting");r.unselecting=!1;r.startselected=!1;i._trigger("unselected",t,{unselected:r.element})}),n(".ui-selecting",this.element[0]).each(function(){var r=n.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected");r.selecting=!1;r.selected=!0;r.startselected=!0;i._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})}(jQuery),function(n){var t=5;n.widget("ui.slider",n.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1;this._mouseSliding=!1;this._animateOff=!0;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=!1},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var r,i,u=this.options,t=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=[];for(i=u.values&&u.values.length||1,t.length>i&&(t.slice(i).remove(),t=t.slice(0,i)),r=t.length;r<i;r++)f.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");this.handles=t.add(n(f.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(t){n(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:n.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=n("<div><\/div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var n=this.handles.add(this.range).filter("a");this._off(n);this._on(n,this._handleEvents);this._hoverable(n);this._focusable(n)},_destroy:function(){this.handles.remove();this.range&&this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(t){var s,f,r,i,u,h,e,c,o=this,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),s={x:t.pageX,y:t.pageY},f=this._normValueFromMouse(s),r=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(f-o.values(t));(r>e||r===e&&(t===o._lastChangedValue||o.values(t)===l.min))&&(r=e,i=n(this),u=t)}),h=this._start(t,u),h===!1)?!1:(this._mouseSliding=!0,this._handleIndex=u,i.addClass("ui-state-active").focus(),e=i.offset(),c=!n(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=c?{left:0,top:0}:{left:t.pageX-e.left-i.width()/2,top:t.pageY-e.top-i.height()/2-(parseInt(i.css("borderTopWidth"),10)||0)-(parseInt(i.css("borderBottomWidth"),10)||0)+(parseInt(i.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,u,f),this._animateOff=!0,!0)},_mouseStart:function(){return!0},_mouseDrag:function(n){var t={x:n.pageX,y:n.pageY},i=this._normValueFromMouse(t);return this._slide(n,this._handleIndex,i),!1},_mouseStop:function(n){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(n,this._handleIndex),this._change(n,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(n){var i,r,t,u,f;return this.orientation==="horizontal"?(i=this.elementSize.width,r=n.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(i=this.elementSize.height,r=n.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),t=r/i,t>1&&(t=1),t<0&&(t=0),this.orientation==="vertical"&&(t=1-t),u=this._valueMax()-this._valueMin(),f=this._valueMin()+t*u,this._trimAlignValue(f)},_start:function(n,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",n,i)},_slide:function(n,t,i){var r,f,u;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&i>r||t===1&&i<r)&&(i=r),i!==this.values(t)&&(f=this.values(),f[t]=i,u=this._trigger("slide",n,{handle:this.handles[t],value:i,values:f}),r=this.values(t?0:1),u!==!1&&this.values(t,i))):i!==this.value()&&(u=this._trigger("slide",n,{handle:this.handles[t],value:i}),u!==!1&&this.value(i))},_stop:function(n,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._trigger("stop",n,i)},_change:function(n,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._lastChangedValue=t;this._trigger("change",n,i)}},value:function(n){if(arguments.length){this.options.value=this._trimAlignValue(n);this._refreshValue();this._change(null,0);return}return this._value()},values:function(t,i){var u,f,r;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(i);this._refreshValue();this._change(null,t);return}if(arguments.length)if(n.isArray(arguments[0])){for(u=this.options.values,f=arguments[0],r=0;r<u.length;r+=1)u[r]=this._trimAlignValue(f[r]),this._change(null,r);this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(t):this.value();else return this._values()},_setOption:function(t,i){var r,u=0;t==="range"&&this.options.range===!0&&(i==="min"?(this.options.value=this._values(0),this.options.values=null):i==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null));n.isArray(this.options.values)&&(u=this.options.values.length);n.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),r=0;r<u;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0;this._refreshValue();this._animateOff=!1;break;case"range":this._animateOff=!0;this._refresh();this._animateOff=!1}},_value:function(){var n=this.options.value;return this._trimAlignValue(n)},_values:function(n){var r,t,i;if(arguments.length)return r=this.options.values[n],this._trimAlignValue(r);if(this.options.values&&this.options.values.length){for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t}return[]},_trimAlignValue:function(n){if(n<=this._valueMin())return this._valueMin();if(n>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(n-this._valueMin())%t,r=n-i;return Math.abs(i)*2>=t&&(r+=i>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var s,t,c,f,h,e=this.options.range,i=this.options,r=this,u=this._animateOff?!1:i.animate,o={};this.options.values&&this.options.values.length?this.handles.each(function(f){t=(r.values(f)-r._valueMin())/(r._valueMax()-r._valueMin())*100;o[r.orientation==="horizontal"?"left":"bottom"]=t+"%";n(this).stop(1,1)[u?"animate":"css"](o,i.animate);r.options.range===!0&&(r.orientation==="horizontal"?(f===0&&r.range.stop(1,1)[u?"animate":"css"]({left:t+"%"},i.animate),f===1&&r.range[u?"animate":"css"]({width:t-s+"%"},{queue:!1,duration:i.animate})):(f===0&&r.range.stop(1,1)[u?"animate":"css"]({bottom:t+"%"},i.animate),f===1&&r.range[u?"animate":"css"]({height:t-s+"%"},{queue:!1,duration:i.animate})));s=t}):(c=this.value(),f=this._valueMin(),h=this._valueMax(),t=h!==f?(c-f)/(h-f)*100:0,o[this.orientation==="horizontal"?"left":"bottom"]=t+"%",this.handle.stop(1,1)[u?"animate":"css"](o,i.animate),e==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[u?"animate":"css"]({width:t+"%"},i.animate),e==="max"&&this.orientation==="horizontal"&&this.range[u?"animate":"css"]({width:100-t+"%"},{queue:!1,duration:i.animate}),e==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[u?"animate":"css"]({height:t+"%"},i.animate),e==="max"&&this.orientation==="vertical"&&this.range[u?"animate":"css"]({height:100-t+"%"},{queue:!1,duration:i.animate}))},_handleEvents:{keydown:function(i){var o,u,r,f,e=n(i.target).data("ui-slider-handle-index");switch(i.keyCode){case n.ui.keyCode.HOME:case n.ui.keyCode.END:case n.ui.keyCode.PAGE_UP:case n.ui.keyCode.PAGE_DOWN:case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,n(i.target).addClass("ui-state-active"),o=this._start(i,e),o===!1))return}f=this.options.step;u=this.options.values&&this.options.values.length?r=this.values(e):r=this.value();switch(i.keyCode){case n.ui.keyCode.HOME:r=this._valueMin();break;case n.ui.keyCode.END:r=this._valueMax();break;case n.ui.keyCode.PAGE_UP:r=this._trimAlignValue(u+(this._valueMax()-this._valueMin())/t);break;case n.ui.keyCode.PAGE_DOWN:r=this._trimAlignValue(u-(this._valueMax()-this._valueMin())/t);break;case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:if(u===this._valueMax())return;r=this._trimAlignValue(u+f);break;case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(u===this._valueMin())return;r=this._trimAlignValue(u-f)}this._slide(i,e,r)},click:function(n){n.preventDefault()},keyup:function(t){var i=n(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),n(t.target).removeClass("ui-state-active"))}}})}(jQuery),function(n){function t(n,t,i){return n>t&&n<t+i}function i(n){return/left|right/.test(n.css("float"))||/inline|table-cell/.test(n.css("display"))}n.widget("ui.sortable",n.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var n=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?n.axis==="x"||i(this.items[0].item):!1;this.offset=this.element.offset();this._mouseInit();this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var n=this.items.length-1;n>=0;n--)this.items[n].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){t==="disabled"?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):n.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var r=null,f=!1,u=this;return this.reverting?!1:this.options.disabled||this.options.type==="static"?!1:(this._refreshItems(t),n(t.target).parents().each(function(){if(n.data(this,u.widgetName+"-item")===u)return r=n(this),!1}),n.data(t.target,u.widgetName+"-item")===u&&(r=n(t.target)),!r)?!1:this.options.handle&&!i&&(n(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(f=!0)}),!f)?!1:(this.currentItem=r,this._removeCurrentsFromItems(),!0)},_mouseStart:function(t,i,r){var f,e,u=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,u.cursorAt&&this._adjustOffsetFromHelper(u.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),u.containment&&this._setContainment(),u.cursor&&u.cursor!=="auto"&&(e=this.document.find("body"),this.storedCursor=e.css("cursor"),e.css("cursor",u.cursor),this.storedStylesheet=n("<style>*{ cursor: "+u.cursor+" !important; }<\/style>").appendTo(e)),u.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",u.opacity)),u.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",u.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!r)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",t,this._uiHash(this));return n.ui.ddmanager&&(n.ui.ddmanager.current=this),n.ui.ddmanager&&!u.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,u,f,o,i=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(t.pageY-n(document).scrollTop()<i.scrollSensitivity?r=n(document).scrollTop(n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<i.scrollSensitivity&&(r=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed)),t.pageX-n(document).scrollLeft()<i.scrollSensitivity?r=n(document).scrollLeft(n(document).scrollLeft()-i.scrollSpeed):n(window).width()-(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(r=n(document).scrollLeft(n(document).scrollLeft()+i.scrollSpeed))),r!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&this.options.axis==="y"||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&this.options.axis==="x"||(this.helper[0].style.top=this.position.top+"px"),e=this.items.length-1;e>=0;e--)if((u=this.items[e],f=u.item[0],o=this._intersectsWithPointer(u),o)&&u.instance===this.currentContainer&&f!==this.currentItem[0]&&this.placeholder[o===1?"next":"prev"]()[0]!==f&&!n.contains(this.placeholder[0],f)&&(this.options.type==="semi-dynamic"?!n.contains(this.element[0],f):!0)){if(this.direction=o===1?"down":"up",this.options.tolerance==="pointer"||this._intersectsWithSides(u))this._rearrange(t,u);else break;this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(n.ui.ddmanager&&!this.options.dropBehaviour&&n.ui.ddmanager.drop(this,t),this.options.revert){var e=this,f=this.placeholder.offset(),r=this.options.axis,u={};r&&r!=="x"||(u.left=f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft));r&&r!=="y"||(u.top=f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop));this.reverting=!0;n(this.helper).animate(u,parseInt(this.options.revert,10)||500,function(){e._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null});this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),n.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?n(this.domPosition.prev).after(this.currentItem):n(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},n(r).each(function(){var r=(n(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);r&&i.push((t.key||r[1]+"[]")+"="+(t.key&&t.expression?r[1]:r[2]))}),!i.length&&t.key&&i.push(t.key+"="),i.join("&")},toArray:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},r.each(function(){i.push(n(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(n){var t=this.positionAbs.left,h=t+this.helperProportions.width,i=this.positionAbs.top,c=i+this.helperProportions.height,r=n.left,f=r+n.width,u=n.top,e=u+n.height,o=this.offset.click.top,s=this.offset.click.left,l=this.options.axis==="x"||i+o>u&&i+o<e,a=this.options.axis==="y"||t+s>r&&t+s<f,v=l&&a;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"]?v:r<t+this.helperProportions.width/2&&h-this.helperProportions.width/2<f&&u<i+this.helperProportions.height/2&&c-this.helperProportions.height/2<e},_intersectsWithPointer:function(n){var u=this.options.axis==="x"||t(this.positionAbs.top+this.offset.click.top,n.top,n.height),f=this.options.axis==="y"||t(this.positionAbs.left+this.offset.click.left,n.left,n.width),e=u&&f,i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return e?this.floating?r&&r==="right"||i==="down"?2:1:i&&(i==="down"?2:1):!1},_intersectsWithSides:function(n){var u=t(this.positionAbs.top+this.offset.click.top,n.top+n.height/2,n.height),f=t(this.positionAbs.left+this.offset.click.left,n.left+n.width/2,n.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return this.floating&&r?r==="right"&&f||r==="left"&&!f:i&&(i==="down"&&u||i==="up"&&!u)},_getDragVerticalDirection:function(){var n=this.positionAbs.top-this.lastPositionAbs.top;return n!==0&&(n>0?"down":"up")},_getDragHorizontalDirection:function(){var n=this.positionAbs.left-this.lastPositionAbs.left;return n!==0&&(n>0?"right":"left")},refresh:function(n){return this._refreshItems(n),this.refreshPositions(),this},_connectWith:function(){var n=this.options;return n.connectWith.constructor===String?[n.connectWith]:n.connectWith},_getItemsAsjQuery:function(t){function h(){s.push(this)}var r,u,e,i,s=[],f=[],o=this._connectWith();if(o&&t)for(r=o.length-1;r>=0;r--)for(e=n(o[r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),i&&i!==this&&!i.options.disabled&&f.push([n.isFunction(i.options.items)?i.options.items.call(i.element):n(i.options.items,i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),i]);for(f.push([n.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):n(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),r=f.length-1;r>=0;r--)f[r][0].each(h);return n(s)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=n.grep(this.items,function(n){for(var i=0;i<t.length;i++)if(t[i]===n.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[];this.containers=[this];var r,u,e,i,o,s,h,l,a=this.items,f=[[n.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):n(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(r=c.length-1;r>=0;r--)for(e=n(c[r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),i&&i!==this&&!i.options.disabled&&(f.push([n.isFunction(i.options.items)?i.options.items.call(i.element[0],t,{item:this.currentItem}):n(i.options.items,i.element),i]),this.containers.push(i));for(r=f.length-1;r>=0;r--)for(o=f[r][1],s=f[r][0],u=0,l=s.length;u<l;u++)h=n(s[u]),h.data(this.widgetName+"-item",o),a.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var r,f,u,i=this.items.length-1;i>=0;i--)(r=this.items[i],r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])||(f=this.options.toleranceElement?n(this.options.toleranceElement,r.item):r.item,t||(r.width=f.outerWidth(),r.height=f.outerHeight()),u=f.offset(),r.left=u.left,r.top=u.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)u=this.containers[i].element.offset(),this.containers[i].containerCache.left=u.left,this.containers[i].containerCache.top=u.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var r,i=t.options;i.placeholder&&i.placeholder.constructor!==String||(r=i.placeholder,i.placeholder={element:function(){var u=t.currentItem[0].nodeName.toLowerCase(),i=n("<"+u+">",t.document[0]).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return u==="tr"?t.currentItem.children().each(function(){n("<td>&#160;<\/td>",t.document[0]).attr("colspan",n(this).attr("colspan")||1).appendTo(i)}):u==="img"&&i.attr("src",t.currentItem.attr("src")),r||i.css("visibility","hidden"),i},update:function(n,u){(!r||i.forcePlaceholderSize)&&(u.height()||u.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),u.width()||u.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}});t.placeholder=n(i.placeholder.element.call(t.element,t.currentItem));t.currentItem.after(t.placeholder);i.placeholder.update(t,t.placeholder)},_contactContainers:function(r){for(var f,v,s,l,y,h,o,p,a,c=null,e=null,u=this.containers.length-1;u>=0;u--)if(!n.contains(this.currentItem[0],this.containers[u].element[0]))if(this._intersectsWith(this.containers[u].containerCache)){if(c&&n.contains(this.containers[u].element[0],c.element[0]))continue;c=this.containers[u];e=u}else this.containers[u].containerCache.over&&(this.containers[u]._trigger("out",r,this._uiHash(this)),this.containers[u].containerCache.over=0);if(c)if(this.containers.length===1)this.containers[e].containerCache.over||(this.containers[e]._trigger("over",r,this._uiHash(this)),this.containers[e].containerCache.over=1);else{for(v=1e4,s=null,a=c.floating||i(this.currentItem),l=a?"left":"top",y=a?"width":"height",h=this.positionAbs[l]+this.offset.click[l],f=this.items.length-1;f>=0;f--)n.contains(this.containers[e].element[0],this.items[f].item[0])&&this.items[f].item[0]!==this.currentItem[0]&&(!a||t(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[f].height))&&(o=this.items[f].item.offset()[l],p=!1,Math.abs(o-h)>Math.abs(o+this.items[f][y]-h)&&(p=!0,o+=this.items[f][y]),Math.abs(o-h)<v&&(v=Math.abs(o-h),s=this.items[f],this.direction=p?"up":"down"));if(!s&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[e])return;s?this._rearrange(r,s,null,!0):this._rearrange(r,null,this.containers[e].element,!0);this._trigger("change",r,this._uiHash());this.containers[e]._trigger("change",r,this._uiHash(this));this.currentContainer=this.containers[e];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[e]._trigger("over",r,this._uiHash(this));this.containers[e].containerCache.over=1}},_createHelper:function(t){var r=this.options,i=n.isFunction(r.helper)?n(r.helper.apply(this.element[0],[t,this.currentItem])):r.helper==="clone"?this.currentItem.clone():this.currentItem;return i.parents("body").length||n(r.appendTo!=="parent"?r.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!i[0].style.width||r.forceHelperSize)&&i.width(this.currentItem.width()),(!i[0].style.height||r.forceHelperSize)&&i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&n.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var n=this.currentItem.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,r,u,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);(i.containment==="document"||i.containment==="window")&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,n(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(n(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]);/^(document|window|parent)$/.test(i.containment)||(t=n(i.containment)[0],r=n(i.containment).offset(),u=n(t).css("overflow")!=="hidden",this.containment=[r.left+(parseInt(n(t).css("borderLeftWidth"),10)||0)+(parseInt(n(t).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(n(t).css("borderTopWidth"),10)||0)+(parseInt(n(t).css("paddingTop"),10)||0)-this.margins.top,r.left+(u?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(n(t).css("borderLeftWidth"),10)||0)-(parseInt(n(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(u?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(n(t).css("borderTopWidth"),10)||0)-(parseInt(n(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var r=t==="absolute"?1:-1,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(u[0].tagName);return{top:i.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():f?0:u.scrollTop())*r,left:i.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():f?0:u.scrollLeft())*r}},_generatePosition:function(t){var r,u,i=this.options,f=t.pageX,e=t.pageY,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(o[0].tagName);return this.cssPosition!=="relative"||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(e=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(e=this.containment[3]+this.offset.click.top)),i.grid&&(r=this.originalPageY+Math.round((e-this.originalPageY)/i.grid[1])*i.grid[1],e=this.containment?r-this.offset.click.top>=this.containment[1]&&r-this.offset.click.top<=this.containment[3]?r:r-this.offset.click.top>=this.containment[1]?r-i.grid[1]:r+i.grid[1]:r,u=this.originalPageX+Math.round((f-this.originalPageX)/i.grid[0])*i.grid[0],f=this.containment?u-this.offset.click.left>=this.containment[0]&&u-this.offset.click.left<=this.containment[2]?u:u-this.offset.click.left>=this.containment[0]?u-i.grid[0]:u+i.grid[0]:u)),{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:o.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:o.scrollLeft())}},_rearrange:function(n,t,i,r){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var u=this.counter;this._delay(function(){u===this.counter&&this.refreshPositions(!r)})},_clear:function(n,t){function u(n,t,i){return function(r){i._trigger(n,r,t._uiHash(t))}}this.reverting=!1;var i,r=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static")&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&r.push(function(n){this._trigger("receive",n,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!t&&r.push(function(n){this._trigger("update",n,this._uiHash())}),this!==this.currentContainer&&(t||(r.push(function(n){this._trigger("remove",n,this._uiHash())}),r.push(function(n){return function(t){n._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(n){return function(t){n._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)t||r.push(u("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(u("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",n,this._uiHash()),i=0;i<r.length;i++)r[i].call(this,n);this._trigger("stop",n,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",n,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(i=0;i<r.length;i++)r[i].call(this,n);this._trigger("stop",n,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){n.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||n([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})}(jQuery),function(n){function t(n){return function(){var t=this.element.val();n.apply(this,arguments);this._refresh();t!==this.element.val()&&this._trigger("change")}}n.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this.value()!==""&&this._value(this.element.val(),!0);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return n.each(["min","max","step"],function(n,r){var u=i.attr(r);u!==undefined&&u.length&&(t[r]=u)}),t},_events:{keydown:function(n){this._start(n)&&this._keydown(n)&&n.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(n){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();this.previous!==this.element.val()&&this._trigger("change",n)},mousewheel:function(n,t){if(t){if(!this.spinning&&!this._start(n))return!1;this._spin((t>0?1:-1)*this.options.step,n);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(n)},100);n.preventDefault()}},"mousedown .ui-spinner-button":function(t){function r(){var n=this.element[0]===this.document[0].activeElement;n||(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i}))}var i;(i=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur;r.call(this)}),this._start(t)!==!1)&&this._repeat(null,n(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(n(t.currentTarget).hasClass("ui-state-active")){if(this._start(t)===!1)return!1;this._repeat(null,n(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)}},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var n=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=n.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");this.buttons.height()>Math.ceil(n.height()*.5)&&n.height()>0&&n.height(n.height());this.options.disabled&&this.disable()},_keydown:function(t){var r=this.options,i=n.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,r.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-r.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;<\/span><\/a>"},_start:function(n){return!this.spinning&&this._trigger("start",n)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(n,t,i){n=n||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,t,i)},n);this._spin(t*this.options.step,i)},_spin:function(n,t){var i=this.value()||0;this.counter||(this.counter=1);i=this._adjustValue(i+n*this._increment(this.counter));this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?n.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var n=this._precisionOf(this.options.step);return this.options.min!==null&&(n=Math.max(n,this._precisionOf(this.options.min))),n},_precisionOf:function(n){var t=n.toString(),i=t.indexOf(".");return i===-1?0:t.length-i-1},_adjustValue:function(n){var r,i,t=this.options;return(r=t.min!==null?t.min:0,i=n-r,i=Math.round(i/t.step)*t.step,n=r+i,n=parseFloat(n.toFixed(this._precision())),t.max!==null&&n>t.max)?t.max:t.min!==null&&n<t.min?t.min:n},_stop:function(n){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",n))},_setOption:function(n,t){if(n==="culture"||n==="numberFormat"){var i=this._parse(this.element.val());this.options[n]=t;this.element.val(this._format(i));return}(n==="max"||n==="min"||n==="step")&&typeof t=="string"&&(t=this._parse(t));n==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));this._super(n,t);n==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(n){this._super(n);this._value(this.element.val())}),_parse:function(n){return typeof n=="string"&&n!==""&&(n=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(n,10,this.options.culture):+n),n===""||isNaN(n)?null:n},_format:function(n){return n===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(n,this.options.numberFormat,this.options.culture):n},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(n,t){var i;n!==""&&(i=this._parse(n),i!==null&&(t||(i=this._adjustValue(i)),n=this._format(i)));this.element.val(n);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:t(function(n){this._stepUp(n)}),_stepUp:function(n){this._start()&&(this._spin((n||1)*this.options.step),this._stop())},stepDown:t(function(n){this._stepDown(n)}),_stepDown:function(n){this._start()&&(this._spin((n||1)*-this.options.step),this._stop())},pageUp:t(function(n){this._stepUp((n||1)*this.options.page)}),pageDown:t(function(n){this._stepDown((n||1)*this.options.page)}),value:function(n){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,n)},widget:function(){return this.uiSpinner}})}(jQuery),function(n,t){function f(){return++u}function r(n){return n=n.cloneNode(!1),n.hash.length>1&&decodeURIComponent(n.href.replace(i,""))===decodeURIComponent(location.href.replace(i,""))}var u=0,i=/#.*$/;n.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var i=this,t=this.options;this.running=!1;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",t.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){n(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){n(this).closest("li").is(".ui-state-disabled")&&this.blur()});this._processTabs();t.active=this._initialActive();n.isArray(t.disabled)&&(t.disabled=n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"),function(n){return i.tabs.index(n)}))).sort());this.active=this.options.active!==!1&&this.anchors.length?this._findActive(t.active):n();this._refresh();this.active.length&&this.load(t.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,r=location.hash.substring(1);return t===null&&(r&&this.tabs.each(function(i,u){if(n(u).attr("aria-controls")===r)return t=i,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(t===null||t===-1)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):n()}},_tabKeydown:function(t){var r=n(this.document[0].activeElement).closest("li"),i=this.tabs.index(r),u=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:i++;break;case n.ui.keyCode.UP:case n.ui.keyCode.LEFT:u=!1;i--;break;case n.ui.keyCode.END:i=this.anchors.length-1;break;case n.ui.keyCode.HOME:i=0;break;case n.ui.keyCode.SPACE:t.preventDefault();clearTimeout(this.activating);this._activate(i);return;case n.ui.keyCode.ENTER:t.preventDefault();clearTimeout(this.activating);this._activate(i===this.options.active?!1:i);return;default:return}t.preventDefault();clearTimeout(this.activating);i=this._focusNextTab(i,u);t.ctrlKey||(r.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===n.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===n.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===n.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function u(){return t>r&&(t=0),t<0&&(t=r),t}for(var r=this.tabs.length-1;n.inArray(u(),this.options.disabled)!==-1;)t=i?t+1:t-1;return t},_focusNextTab:function(n,t){return n=this._findNextTab(n,t),this.tabs.eq(n).focus(),n},_setOption:function(n,t){if(n==="active"){this._activate(t);return}if(n==="disabled"){this._setupDisabled(t);return}this._super(n,t);n==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0));n==="event"&&this._setupEvents(t);n==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(n){return n.attr("aria-controls")||"ui-tabs-"+f()},_sanitizeSelector:function(n){return n?n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=n.map(i.filter(".ui-state-disabled"),function(n){return i.index(n)});this._processTabs();t.active!==!1&&this.anchors.length?this.active.length&&!n.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=n()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=n());this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return n("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=n();this.anchors.each(function(i,u){var e,f,s,h=n(u).uniqueId().attr("id"),o=n(u).closest("li"),c=o.attr("aria-controls");r(u)?(e=u.hash,f=t.element.find(t._sanitizeSelector(e))):(s=t._tabId(o),e="#"+s,f=t.element.find(e),f.length||(f=t._createPanel(s),f.insertAfter(t.panels[i-1]||t.tablist)),f.attr("aria-live","polite"));f.length&&(t.panels=t.panels.add(f));c&&o.data("ui-tabs-aria-controls",c);o.attr({"aria-controls":e.substring(1),"aria-labelledby":h});f.attr("aria-labelledby",h)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return n("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){n.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i=0,r;r=this.tabs[i];i++)t===!0||n.inArray(i,t)!==-1?n(r).addClass("ui-state-disabled").attr("aria-disabled","true"):n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={click:function(n){n.preventDefault()}};t&&n.each(t.split(" "),function(n,t){i[t]="_eventHandler"});this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,i);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,r=this.element.parent();t==="fill"?(i=r.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=n(this),r=t.css("position");r!=="absolute"&&r!=="fixed"&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=n(this).outerHeight(!0)}),this.panels.each(function(){n(this).height(Math.max(0,i-n(this).innerHeight()+n(this).height()))}).css("overflow","auto")):t==="auto"&&(i=0,this.panels.each(function(){i=Math.max(i,n(this).height("").height())}).height(i))},_eventHandler:function(t){var u=this.options,r=this.active,c=n(t.currentTarget),i=c.closest("li"),f=i[0]===r[0],e=f&&u.collapsible,o=e?n():this._getPanelForTab(i),s=r.length?this._getPanelForTab(r):n(),h={oldTab:r,oldPanel:s,newTab:e?n():i,newPanel:o};(t.preventDefault(),i.hasClass("ui-state-disabled")||i.hasClass("ui-tabs-loading")||this.running||f&&!u.collapsible||this._trigger("beforeActivate",t,h)===!1)||(u.active=e?!1:this.tabs.index(i),this.active=f?n():i,this.xhr&&this.xhr.abort(),s.length||o.length||n.error("jQuery UI Tabs: Mismatching fragment identifier."),o.length&&this.load(this.tabs.index(i),t),this._toggle(t,h))},_toggle:function(t,i){function e(){u.running=!1;u._trigger("activate",t,i)}function o(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");r.length&&u.options.show?u._show(r,u.options.show,e):(r.show(),e())}var u=this,r=i.newPanel,f=i.oldPanel;this.running=!0;f.length&&this.options.hide?this._hide(f,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");o()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),o());f.attr({"aria-expanded":"false","aria-hidden":"true"});i.oldTab.attr("aria-selected","false");r.length&&f.length?i.oldTab.attr("tabIndex",-1):r.length&&this.tabs.filter(function(){return n(this).attr("tabIndex")===0}).attr("tabIndex",-1);r.attr({"aria-expanded":"true","aria-hidden":"false"});i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var r,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),r=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:r,currentTarget:r,preventDefault:n.noop}))},_findActive:function(t){return t===!1?n():this.tabs.eq(t)},_getIndex:function(n){return typeof n=="string"&&(n=this.anchors.index(this.anchors.filter("[href$='"+n+"']"))),n},_destroy:function(){this.xhr&&this.xhr.abort();this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){n.data(this,"ui-tabs-destroy")?n(this).remove():n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")});this.tabs.each(function(){var t=n(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")});this.panels.show();this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(i){var r=this.options.disabled;r!==!1&&(i===t?r=!1:(i=this._getIndex(i),r=n.isArray(r)?n.map(r,function(n){return n!==i?n:null}):n.map(this.tabs,function(n,t){return t!==i?t:null})),this._setupDisabled(r))},disable:function(i){var r=this.options.disabled;if(r!==!0){if(i===t)r=!0;else{if(i=this._getIndex(i),n.inArray(i,r)!==-1)return;r=n.isArray(r)?n.merge([i],r).sort():[i]}this._setupDisabled(r)}},load:function(t,i){t=this._getIndex(t);var f=this,u=this.tabs.eq(t),o=u.find(".ui-tabs-anchor"),e=this._getPanelForTab(u),s={tab:u,panel:e};r(o[0])||(this.xhr=n.ajax(this._ajaxSettings(o,i,s)),this.xhr&&this.xhr.statusText!=="canceled"&&(u.addClass("ui-tabs-loading"),e.attr("aria-busy","true"),this.xhr.success(function(n){setTimeout(function(){e.html(n);f._trigger("load",i,s)},1)}).complete(function(n,t){setTimeout(function(){t==="abort"&&f.panels.stop(!1,!0);u.removeClass("ui-tabs-loading");e.removeAttr("aria-busy");n===f.xhr&&delete f.xhr},1)})))},_ajaxSettings:function(t,i,r){var u=this;return{url:t.attr("href"),beforeSend:function(t,f){return u._trigger("beforeLoad",i,n.extend({jqXHR:t,ajaxSettings:f},r))}}},_getPanelForTab:function(t){var i=n(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(n){function i(t,i){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(i);t.data("ui-tooltip-id",i).attr("aria-describedby",n.trim(r.join(" ")))}function r(t){var u=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),r=n.inArray(u,i);r!==-1&&i.splice(r,1);t.removeData("ui-tooltip-id");i=n.trim(i.join(" "));i?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")}var t=0;n.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var t=n(this).attr("title")||"";return n("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.options.disabled&&this._disable()},_setOption:function(t,i){var r=this;if(t==="disabled"){this[i?"_disable":"_enable"]();this.options[t]=i;return}this._super(t,i);t==="content"&&n.each(this.tooltips,function(n,t){r._updateContent(t)})},_disable:function(){var t=this;n.each(this.tooltips,function(i,r){var u=n.Event("blur");u.target=u.currentTarget=r[0];t.close(u,!0)});this.element.find(this.options.items).addBack().each(function(){var t=n(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=n(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var r=this,i=n(t?t.target:this.element).closest(this.options.items);i.length&&!i.data("ui-tooltip-id")&&(i.attr("title")&&i.data("ui-tooltip-title",i.attr("title")),i.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&i.parents().each(function(){var t=n(this),i;t.data("ui-tooltip-open")&&(i=n.Event("blur"),i.target=i.currentTarget=this,r.close(i,!0));t.attr("title")&&(t.uniqueId(),r.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(i,t))},_updateContent:function(n,t){var i,r=this.options.content,u=this,f=t?t.type:null;if(typeof r=="string")return this._open(t,n,r);i=r.call(n[0],function(i){n.data("ui-tooltip-open")&&u._delay(function(){t&&(t.type=f);this._open(t,n,i)})});i&&this._open(t,n,i)},_open:function(t,r,u){function s(n){(o.of=n,f.is(":hidden"))||f.position(o)}var f,e,h,o=n.extend({},this.options.position);if(u){if(f=this._find(r),f.length){f.find(".ui-tooltip-content").html(u);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title"));f=this._tooltip(r);i(r,f.attr("id"));f.find(".ui-tooltip-content").html(u);this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:s}),s(t)):f.position(n.extend({of:r},this.options.position));f.hide();this._show(f,this.options.show);this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){f.is(":visible")&&(s(o.of),clearInterval(h))},n.fx.interval));this._trigger("open",t,{tooltip:f});e={keyup:function(t){if(t.keyCode===n.ui.keyCode.ESCAPE){var i=n.Event(t);i.currentTarget=r[0];this.close(i,!0)}},remove:function(){this._removeTooltip(f)}};t&&t.type!=="mouseover"||(e.mouseleave="close");t&&t.type!=="focusin"||(e.focusout="close");this._on(!0,r,e)}},close:function(t){var f=this,i=n(t?t.currentTarget:this.element),u=this._find(i);this.closing||(clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),u.stop(!0),this._hide(u,this.options.hide,function(){f._removeTooltip(n(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&n.each(this.parents,function(t,i){n(i.element).attr("title",i.title);delete f.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:u}),this.closing=!1)},_tooltip:function(i){var u="ui-tooltip-"+t++,r=n("<div>").attr({id:u,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return n("<div>").addClass("ui-tooltip-content").appendTo(r),r.appendTo(this.document[0].body),this.tooltips[u]=i,r},_find:function(t){var i=t.data("ui-tooltip-id");return i?n("#"+i):n()},_removeTooltip:function(n){n.remove();delete this.tooltips[n.attr("id")]},_destroy:function(){var t=this;n.each(this.tooltips,function(i,r){var u=n.Event("blur");u.target=u.currentTarget=r[0];t.close(u,!0);n("#"+i).remove();r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})}(jQuery);
/*
//# sourceMappingURL=jquery-ui-1.10.4.min.js.map
*/;
(function ($, sr) {

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize 
    jQuery.fn[sr] = function (fn, threshold, execAsap) { return fn ? this.bind('resize', debounce(fn, threshold, execAsap)) : this.trigger(sr); };
 
})(jQuery, 'smartresize');
;
var itemType = "li:not(.aColor,.plus)"; 	// the HTML element type of the items in the carousel
// feel free to use classes or other identifiers

$(document).ready(initializeThumbNavs);
$(window).load(resetThumbNavs);
$(window).smartresize(resetThumbNavs, 250);

function adjustProductDescription(sel) {
    var maxDescHeight = 0;

    $(sel + " .containerDescription").removeAttr("style");

    if ($(window).width() < 321 || typeof sel === "undefined" || sel === "")
        return false;

    $(sel).each(function () {
        descCont = $(this).find(".containerDescription"),
		bvHeight = $(this).find(".bv-rating-stars")
        adjustHeight = bvHeight.height() > 0 ? 0 : 20;
        maxDescHeight = descCont.height() + adjustHeight > maxDescHeight ? descCont.height() + adjustHeight : maxDescHeight;
    });
    $(sel).find(".containerDescription").css("height", maxDescHeight);
}

function initializeThumbNavs() {
    $(".thumb-holder").noSelect().off("click", ".thumb-nav").on("click", ".thumb-nav", function () {
        triggerThumbNav(this);
    });

    $(".csstransitions .thumb-holder " + itemType).first().off("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd")
        .on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function () {
            $(this).data("transitioning", false);
        });
}

function resetThumbNavs() {
    $(".thumb-holder").each(function () {
        var $scroller = $(this),
            scrollerId = $scroller.attr('id'),
            positionMaster = $scroller.find(itemType).first(),
            scrollPosition = parseInt(positionMaster.css("margin-left"), 10),
            borderWidth = parseInt(positionMaster.css('border-left-width'), 10) + parseInt(positionMaster.css('border-right-width'), 10),
            scrollDistance = parseInt(positionMaster.css("margin-right"), 10) + borderWidth + positionMaster.outerWidth(),
            collectionCount = $scroller.find(itemType).size(),
            containerWidth = $scroller.width(),
            viewportHolds = Math.floor(containerWidth / scrollDistance) || 1,
            isMobile = !matchMedia(Foundation.media_queries.medium).matches,
            maxItemsToDisplay = isMobile ? 1 : Math.min(viewportHolds, collectionCount),
            offLeftItems = 0 - (scrollPosition / scrollDistance),
            prevMaxWidth = parseInt(positionMaster.parent().css('max-width'), 10),
            maxWidth = maxItemsToDisplay * scrollDistance;
        positionMaster.parent().css('max-width', maxWidth);

        // Reset carousel when number of items changed.
        var maxChanged = maxWidth !== prevMaxWidth;
        if (maxChanged) {
            offLeftItems = 0;
            positionMaster.css('margin-left', '');
        }

        var offRightItems = collectionCount - offLeftItems - maxItemsToDisplay
        navElements = "<div data-for='" + scrollerId + "' class='thumb-nav right-side'></div>";

        navElements += "<div data-for='" + scrollerId + "' class='thumb-nav left-side'></div>";

        if ($scroller.hasClass("inactive")) { // first time?

            $scroller.addClass("beginning").removeClass("inactive").append(navElements);

        };

        if ((offLeftItems < 1) && (offRightItems < 1)) { // if all existing items are visible

            $scroller.addClass("beginning end");

        } else if ((offLeftItems < 1) && (offRightItems > 0)) { // if we're at the beginning and some are hidden off right

            $scroller.addClass("beginning");
            $scroller.removeClass("end");

        } else if ((offLeftItems > 0) && (offRightItems < 1)) { // if we're at the end and some are hidden off left

            $scroller.addClass("end");
            $scroller.removeClass("beginning");

        } else {

            $scroller.removeClass("beginning end");

        };

    });

};

function postSecureCrossSiteAjax(relativeUrl, methodName, data, successCallBack, failureCallBack) {
    var url = "//" + window.location.hostname + relativeUrl + methodName;

    $.ajax({
        url: url,
        data: JSON.stringify(data),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            successCallBack(data);
        },
        error: function (error) {
            failureCallBack(error);
        }
    });
}

function triggerThumbNav(which) {

    var $scroller = $(which).parent(".thumb-holder"),
        positionMaster = $scroller.find(itemType).first(),
    scrollPosition = parseInt(positionMaster.css("margin-left"), 10),
    borderWidth = parseInt(positionMaster.css('border-left-width'), 10) + parseInt(positionMaster.css('border-right-width'), 10),
    scrollDistance = parseInt(positionMaster.css("margin-right"), 10) + borderWidth + positionMaster.outerWidth(),
    collectionCount = parseInt($scroller.find(" > ul > " + itemType).length, 10),
    containerWidth = $scroller.width(),
    viewportHolds = Math.floor(containerWidth / scrollDistance) || 1,
    isMobile = !matchMedia(Foundation.media_queries.medium).matches,
    maxItemsToDisplay = isMobile ? 1 : Math.min(viewportHolds, collectionCount),
    offLeftItems = 0 - (scrollPosition / scrollDistance),
    offRightItems = collectionCount - offLeftItems - maxItemsToDisplay;


    //if (!positionMaster.data("transitioning")) { // is the carousel not in the midst of a transition?


    if ($(which).hasClass("right-side")) {

        var newPosition = scrollPosition - scrollDistance;

        if (offRightItems > 0) {

            $scroller.removeClass("beginning");

            if (!Modernizr.csstransitions) {
                positionMaster.animate({ marginLeft: newPosition });

            } else {
                positionMaster.data("transitioning", true).css("margin-left", newPosition);

            };

            if (offRightItems == 1) {

                $scroller.addClass("end");

            };

        };

    };

    if ($(which).hasClass("left-side")) {

        newPosition = scrollPosition + scrollDistance;

        if (offLeftItems != 0) {

            $scroller.removeClass("end");

            if (!Modernizr.csstransitions) {

                positionMaster.animate({ marginLeft: newPosition });

            } else {

                positionMaster.data("transitioning", true).css("margin-left", newPosition);

            };

            if (offLeftItems == 1) {

                $scroller.addClass("beginning");

            };

        };

    };

    //};

};

/*! //mths.be/noselect v1.0.3 by @mathias */
jQuery.fn.noSelect = function () {
    var a = 'none'; return this.bind('selectstart dragstart mousedown', function () {
        return false
    }).css({ MozUserSelect: a, msUserSelect: a, webkitUserSelect: a, userSelect: a })
};


// eventName: the clientID of the update panel that will be updated.
// eventArgs: A parameter to be provided on the '__EVENTARGUMENT' field of the request.
function __doPostBackAsync(eventName, eventArgs) {
    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (!Array.contains(prm._asyncPostBackControlIDs, eventName)) {
        prm._asyncPostBackControlIDs.push(eventName);
    }

    if (!Array.contains(prm._asyncPostBackControlClientIDs, eventName)) {
        prm._asyncPostBackControlClientIDs.push(eventName);
    }

    __doPostBack(eventName, eventArgs);
}

//maps

function CallRestService(request) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", request);
    document.body.appendChild(script);
}

function GetQueryStringParams(sParam, url) {
    var qs = "";
    if (typeof (url) === 'undefined')
        qs = window.location.search.substring(1);
    else
        qs = url.substring(url.indexOf("?") + 1);
    var sURLVariables = qs.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function AddUrlParam(paramName, paramValue, url) {
    if (typeof (url) === 'undefined') url = location.href;
    if (url.indexOf(paramName + "=") >= 0) {
        var prefix = url.substring(0, url.indexOf(paramName + "="));
        var suffix = url.substring(url.indexOf(paramName + "="));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else {
        if (url.indexOf("?") < 0)
            url += "?" + paramName + "=" + paramValue;
        else if (url.indexOf("?") == url.length - 1)
            url += paramName + "=" + paramValue;
        else
            url += "&" + paramName + "=" + paramValue;
    }
    return url;
}

function RemoveUrlParam(key, url) {
    if (typeof (url) === 'undefined') url = location.href;
    var rtn = url.split("?")[0],
        param,
        params_arr = [],
        queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length > 0)
            rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function GetCookieFromBrowser(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function SetCookieInBrowser(cookieName, cookieValue) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function IsValidEmailFormat(email) {
    var email = email.trim();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function IsValidPhoneFormat(phone) {
    var phone = phone.trim();
    phone = phone.replace(/^1|[^\d]/g, '');
    if (phone.length !== 10) {
        return false;
    }
    return true;
}

function ValidateEmailFormat(source, arguments) {
    arguments.IsValid = IsValidEmailFormat(arguments.Value);
}


function ValidateMultipleEmailFormat(source, arguments) {
    var valid = true;
    $.each(arguments.Value.split(";"), function (index, val) {
        if (!IsValidEmailFormat(val)) {
            valid = false;
            return false;
        }
    });
    arguments.IsValid = valid;
}

function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

// This works only for keyPress event
function getChar(keyPressEvent) {
    if (keyPressEvent.which == null) {
        return String.fromCharCode(keyPressEvent.keyCode) // IE
    } else if (keyPressEvent.which != 0 && keyPressEvent.charCode != 0) {
        return String.fromCharCode(keyPressEvent.which)   // the rest
    } else {
        return null // special key
    }
}

function clearStreetAddress(text) {
    var regex = /[^a-zA-Z0-9 ]+/ig;
    return text.replace(regex, "");
}
function isKeyAllowedForStreetAddress(event) {
    if (clearStreetAddress(getChar(event)) == "")
        return false;
    return true;
}

function clearAlphaNumericWithSpaces(text) {
    var regex = /[^a-zA-Z0-9 ]+/ig;
    return text.replace(regex, "");
}
function isKeyAlphaNumericOrSpace(event) {
    if (clearAlphaNumericWithSpaces(getChar(event)) == "")
        return false;
    return true;
}

function clearNumeric(text) {
    var regex = /[^0-9]+/ig;
    return text.replace(regex, "");
}
function isKeyNumeric(event) {
    if (clearNumeric(getChar(event)) == "")
        return false;
    return true;
}

function clearZip(text) {
    var regex = /[^0-9\-]+/ig;
    return text.replace(regex, "");
}
function isKeyAllowedZip(event) {
    if (clearZip(getChar(event)) == "")
        return false;
    return true;
}

function clearFirstAndLastName(text) {
    var regex = /[^a-zA-Z ]+/ig;
    return text.replace(regex, "");
}
function isKeyAllowedForName(event) {
    if (clearFirstAndLastName(getChar(event)) == "")
        return false;
    return true;
}

function clearPhone(text) {
    var regex = /[^0-9()-\s]+/ig;
    return text.replace(regex, "");
}
function isKeyAllowedForPhone(event) {
    if (clearPhone(getChar(event)) == "")
        return false;
    return true;
}

function clearEmail(text) {
    var regex = /[^a-zA-Z0-9\.\-@\_\+]+/ig;
    return text.replace(regex, "");
}
function isKeyAllowedForEmail(event) {
    if (clearEmail(getChar(event)) == "")
        return false;
    return true;
}

function AddKeyPressEvents() {
    $("input[type=text].profileName").keypress(function(e) {
        if (!isKeyAllowedForName(e))
            e.preventDefault();
    });
    $("input[type=text].profileEmail").keypress(function(e) {
        if (!isKeyAllowedForEmail(e))
            e.preventDefault();
    });
    $("input[type=text].profileStreetAddress").keypress(function(e) {
        if (!isKeyAllowedForStreetAddress(e))
            e.preventDefault();
    });
    $("input[type=text].alphaNumericOrSpace").keypress(function(e) {
        if (!isKeyAlphaNumericOrSpace(e))
            e.preventDefault();
    });
    $("input[type=text].profilePhone").keypress(function(e) {
        if (!isKeyAllowedForPhone(e))
            e.preventDefault();
    });
    $("input[type=text].numericOnly").keypress(function(e) {
        if (!isKeyNumeric(e))
            e.preventDefault();
    });
    $("input[type=text].zipCodeCheck").keypress(function(e) {
        if (!isKeyAllowedZip(e))
            e.preventDefault();
    });
    $("input[type=text].noPaste").bind("paste", function(e) {
        e.preventDefault();
    });
}

function cancelBackspace(event) {
    if (event.keyCode == 8) {
        return false;
    }
}

function CancelBackspaceEvents() {
    $('select').keypress(function (event) { return cancelBackspace(event) });
    $('select').keydown(function (event) { return cancelBackspace(event) });
}

function ShowLoadError(response, status, xhr) {
    if (status == "error") {
        $(this).html("<span class='alert-box alert'>Sorry, an error has occured while processing your request.</span>");
    }
}


function ClientValidateZipCode(inputId) {
    $(".check-availability-error").hide();
    zipCode = $("#" + inputId).val();
    if (zipCode == "") {
        return "Please enter delivery zip code";
    }
    if (zipCode.length < 5 || zipCode.length > 12) {
        $(".check-availability-error").text("Please check the zip code");
        $(".check-availability-error").show();
        return "Please check the zip code";
    }

    return "valid";
}

function getDeviceSize() {
    var q = Foundation.media_queries;
    return (matchMedia(q.large).matches ? "large" : (matchMedia(q.medium).matches && !matchMedia(q.large).matches ? "medium" : (matchMedia(q.small).matches && !matchMedia(q.medium).matches ? "small" : "none")));
}

function mobileReorderCart() {
    if (getDeviceSize() === 'small') {
        $("td.msax-Quantity").each(function () {
            $(this).insertBefore($(this).siblings("td.msax-Price").eq(0));
        });
    }
}

function adjustProductBoxes(sel) {
    var maxDescHeight = 0,
        minThumbHeight = 1000,
        thumbHeight;
    if ($(sel).length < 1)
        return false;
    // Next line commented out due to conflicts with searchResultsThumbnails.js
    //$(sel + " .containerDescription" + "," + sel + " .productImage").removeAttr("style");
    $(sel + " .containerDescription").removeAttr("style");

    if ($(window).width() < 321 || typeof sel === "undefined" || sel === "")
        return false;

    $(sel).each(function () {
        thumbHeight = $(this).find(".productImage img").height(),
        descCont = $(this).find(".containerDescription"),
        maxDescHeight = descCont.height() > maxDescHeight ? descCont.height() : maxDescHeight;
        minThumbHeight = thumbHeight < minThumbHeight && thumbHeight > 0 ? thumbHeight : minThumbHeight;
    });
    if (!($(sel).hasClass('subCat'))) {
        // Next line commented out due to conflicts with searchResultsThumbnails.js
        //$(sel).find(".productImage").css("max-height", minThumbHeight);
    }
    $(sel).find(".containerDescription").css("height", maxDescHeight);
    $(sel).animate({ "opacity": "1" }, 250);
}

function PreventEnterKey() {
    // Prvents form submit by pressing enter on anywhere
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
}

function IsPasswordValid(inputValue, minAllowedLength, minSpecialCharacters) {
    if (inputValue.length < minAllowedLength) return false;
    if (minSpecialCharacters > 0) {
        inputValue = inputValue.replace(/[a-zA-Z0-9]/gi, "");
        if (inputValue.length < minSpecialCharacters) return false;
    }
    return true;
}

function jQueryValidateInit(formId, submitButtons, fieldGroupClass, settings) {
    /*
     * formId: ID of the form to validate (string)
     * submitButtons: CSS Selector for the form's submit buttons (string)
     * fieldGroupClass: CSS selector for input group(s) or field set(s) to run validation within (string)
     * jQuery Validate settings (Object)
    */
    formId = "#" + formId;

    var defaultSetts = {
        onkeyup: false,
        focusCleanup: true,
        errorClass: "inline-error",
        errorElement: "span",
        errorElementClass: "input-error",
        highlight: function (element, errorClass, validClass) {
            $(element).addClass(this.settings.errorElementClass).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(this.settings.errorElementClass).removeClass(errorClass);
        },
        onfocusout: function (element) {
            this.element(element);
        }
    },
        inputGroup, button;


    $(formId).validate($.extend(settings, defaultSetts));

    $(submitButtons).each(function () {
        $(this).attr({ "data-href": $(this).attr("href"), "href": "javascript:void(0);" });
    });

    $(submitButtons)
        .on("mousedown", function (evt) {
            if (evt.which !== 1)
                return false;
            inputGroup = $(this).closest(fieldGroupClass);
            var inputs = inputGroup.find("input.validate");
            button = $(this);
            inputs.each(function () {
                $(this).valid();
            });
            if (inputGroup.find(".validate.input-error").length < 1) {
                button.attr("href", button.attr("data-href"));
            }
        })
        .on("click", function (evt) {
            var errors = inputGroup.find(".input-error");
            if (errors.length < 1)
                button.closest(fieldGroupClass).spin();
        });
}

function LoadBvRatingStars(prefix, productIds, separator) {
    var sep = "|";
    if (separator !== "" && separator !== null)
        sep = separator;
};
/*!
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(n,t,i,r){"use strict";function c(n){return(typeof n=="string"||n instanceof String)&&(n=n.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),n}var f=function(t){for(var i=t.length,r=n("head");i--;)r.has("."+t[i]).length===0&&r.append('<meta class="'+t[i]+'" />')};f(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]);n(function(){typeof FastClick!="undefined"&&typeof i.body!="undefined"&&FastClick.attach(i.body)});var u=function(t,r){if(typeof t=="string"){if(r){var u;if(r.jquery){if(u=r[0],!u)return r}else u=r;return n(u.querySelectorAll(t))}return n(i.querySelectorAll(t))}return n(t,r)},e=function(n){var t=[];return n||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},o=function(n){for(var i=n.split("-"),t=i.length,r=[];t--;)t!==0?r.push(i[t]):this.namespace.length>0?r.push(this.namespace,i[t]):r.push(i[t]);return r.reverse().join("-")},s=function(t,i){var r=this,f=!u(this).data(this.attr_name(!0));return u(this.scope).is("["+this.attr_name()+"]")?(u(this.scope).data(this.attr_name(!0)+"-init",n.extend({},this.settings,i||t,this.data_options(u(this.scope)))),f&&this.events(this.scope)):u("["+this.attr_name()+"]",this.scope).each(function(){var f=!u(this).data(r.attr_name(!0)+"-init");u(this).data(r.attr_name(!0)+"-init",n.extend({},r.settings,i||t,r.data_options(u(this))));f&&r.events(this)}),typeof t=="string"?this[t].call(this,i):void 0},h=function(n,t){function i(){t(n[0])}function r(){this.one("load",i);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var n=this.attr("src"),t=n.match(/\?/)?"&":"?";t+="random="+(new Date).getTime();this.attr("src",n+t)}}if(!n.attr("src")){i();return}n[0].complete||n[0].readyState===4?i():r.call(n)};t.matchMedia=t.matchMedia||function(n){var u,i=n.documentElement,f=i.firstElementChild||i.firstChild,r=n.createElement("body"),t=n.createElement("div");return t.id="mq-test-1",t.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(t),function(n){return t.innerHTML='&shy;<style media="'+n+'"> #mq-test-1 { width: 42px; }<\/style>',i.insertBefore(r,f),u=t.offsetWidth===42,i.removeChild(r),{matches:u,media:n}}}(i),function(){function o(){r&&(i(o),e&&jQuery.fx.tick())}for(var r,n=0,u=["webkit","moz"],i=t.requestAnimationFrame,f=t.cancelAnimationFrame,e="undefined"!=typeof jQuery.fx;n<u.length&&!i;n++)i=t[u[n]+"RequestAnimationFrame"],f=f||t[u[n]+"CancelAnimationFrame"]||t[u[n]+"CancelRequestAnimationFrame"];i?(t.requestAnimationFrame=i,t.cancelAnimationFrame=f,e&&(jQuery.fx.timer=function(n){n()&&jQuery.timers.push(n)&&!r&&(r=!0,o())},jQuery.fx.stop=function(){r=!1})):(t.requestAnimationFrame=function(i){var r=(new Date).getTime(),u=Math.max(0,16-(r-n)),f=t.setTimeout(function(){i(r+u)},u);return n=r+u,f},t.cancelAnimationFrame=function(n){clearTimeout(n)})}(jQuery);t.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:u(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:u(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:u(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:u(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:u(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:n("<style><\/style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(n,i,r,f,e){var h=[n,r,f,e],o=[],s;if(this.rtl=/rtl/i.test(u("html").attr("dir")),this.scope=n||this.scope,this.set_namespace(),i&&typeof i=="string"&&!/reflow/i.test(i))this.libs.hasOwnProperty(i)&&o.push(this.init_lib(i,h));else for(s in this.libs)o.push(this.init_lib(s,i));return u(t).load(function(){u(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),n},init_lib:function(t,i){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),i&&i.hasOwnProperty(t))?(typeof this.libs[t].settings!="undefined"?n.extend(!0,this.libs[t].settings,i[t]):typeof this.libs[t].defaults!="undefined"&&n.extend(!0,this.libs[t].defaults,i[t]),this.libs[t].init.apply(this.libs[t],[this.scope,i[t]])):(i=i instanceof Array?i:new Array(i),this.libs[t].init.apply(this.libs[t],i)):function(){}},patch:function(n){n.scope=this.scope;n.namespace=this.global.namespace;n.rtl=this.rtl;n.data_options=this.utils.data_options;n.attr_name=e;n.add_namespace=o;n.bindings=s;n.S=this.utils.S},inherit:function(n,t){for(var i=t.split(" "),r=i.length;r--;)this.utils.hasOwnProperty(i[r])&&(n[i[r]]=this.utils[i[r]])},set_namespace:function(){var t=this.global.namespace===r?n(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:u,throttle:function(n,t){var i=null;return function(){var r=this,u=arguments;i==null&&(i=setTimeout(function(){n.apply(r,u);i=null},t))}},debounce:function(n,t,i){var r,u;return function(){var f=this,e=arguments,o=function(){r=null;i||(u=n.apply(f,e))},s=i&&!r;return clearTimeout(r),r=setTimeout(o,t),s&&(u=n.apply(f,e)),u}},data_options:function(t,i){function c(n){return!isNaN(+n)&&n!==null&&n!==""&&n!==!1&&n!==!0}function s(t){return typeof t=="string"?n.trim(t):t}i=i||"options";var o={},u,r,f,h=function(n){var t=Foundation.global.namespace;return t.length>0?n.data(t+"-"+i):n.data(i)},e=h(t);if(typeof e=="object")return e;for(f=(e||":").split(";"),u=f.length;u--;)r=f[u].split(":"),r=[r[0],r.slice(1).join(":")],/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),c(r[1])&&(r[1]=r[1].indexOf(".")===-1?parseInt(r[1],10):parseFloat(r[1])),r.length===2&&r[0].length>0&&(o[s(r[0])]=s(r[1]));return o},register_media:function(t,i){Foundation.media_queries[t]===r&&(n("head").append('<meta class="'+i+'"/>'),Foundation.media_queries[t]=c(n("."+i).css("font-family")))},add_custom_rule:function(n,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(n,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[t];i!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+n+" }")}},image_loaded:function(n,t){var r=this,i=n.length;i===0&&t(n);n.each(function(){h(r.S(this),function(){i-=1;i===0&&t(n)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}};n.fn.foundation=function(){var n=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(n)),this})}})(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs.slider={name:"slider",version:"5.4.7",settings:{start:0,end:100,step:1,initial:null,display_selector:"",vertical:!1,on_change:function(){}},cache:{},init:function(n,t,i){Foundation.inherit(this,"throttle");this.bindings(t,i);this.reflow()},events:function(){var i=this;n(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+i.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){i.cache.active||(t.preventDefault(),i.set_active_slider(n(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(r){if(!!i.cache.active)if(r.preventDefault(),n.data(i.cache.active[0],"settings").vertical){var u=0;r.pageY||(u=t.scrollY);i.calculate_position(i.cache.active,(r.pageY||r.originalEvent.clientY||r.originalEvent.touches[0].clientY||r.currentPoint.y)+u)}else i.calculate_position(i.cache.active,r.pageX||r.originalEvent.clientX||r.originalEvent.touches[0].clientX||r.currentPoint.x)}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(){i.remove_active_slider()}).on("change.fndtn.slider",function(){i.settings.on_change()});i.S(t).on("resize.fndtn.slider",i.throttle(function(){i.reflow()},300))},set_active_slider:function(n){this.cache.active=n},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,i){var u=this,r=n.data(t[0],"settings"),o=n.data(t[0],"handle_l"),s=n.data(t[0],"handle_o"),f=n.data(t[0],"bar_l"),e=n.data(t[0],"bar_o");requestAnimationFrame(function(){var n,o;n=Foundation.rtl&&!r.vertical?u.limit_to((e+f-i)/f,0,1):u.limit_to((i-e)/f,0,1);n=r.vertical?1-n:n;o=u.normalized_value(n,r.start,r.end,r.step);u.set_ui(t,o)})},set_ui:function(t,i){var r=n.data(t[0],"settings"),f=n.data(t[0],"handle_l"),e=n.data(t[0],"bar_l"),o=this.normalized_percentage(i,r.start,r.end),u=o*(e-f)-1,s=o*100;Foundation.rtl&&!r.vertical&&(u=-u);u=r.vertical?-u+e-f+1:u;this.set_translate(t,u,r.vertical);r.vertical?t.siblings(".range-slider-active-segment").css("height",s+"%"):t.siblings(".range-slider-active-segment").css("width",s+"%");t.parent().attr(this.attr_name(),i).trigger("change").trigger("change.fndtn.slider");t.parent().children("input[type=hidden]").val(i);t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":r.start,"aria-valuemax":r.end});t.attr("aria-valuenow",i);r.display_selector!=""&&n(r.display_selector).each(function(){this.hasOwnProperty("value")?n(this).val(i):n(this).text(i)})},normalized_percentage:function(n,t,i){return Math.min(1,(n-t)/(i-t))},normalized_value:function(n,t,i,r){var f=i-t,u=n*f,e=(u-u%r)/r,o=u%r,s=o>=r*.5?r:0;return e*r+s+t},set_translate:function(t,i,r){r?n(t).css("-webkit-transform","translateY("+i+"px)").css("-moz-transform","translateY("+i+"px)").css("-ms-transform","translateY("+i+"px)").css("-o-transform","translateY("+i+"px)").css("transform","translateY("+i+"px)"):n(t).css("-webkit-transform","translateX("+i+"px)").css("-moz-transform","translateX("+i+"px)").css("-ms-transform","translateX("+i+"px)").css("-o-transform","translateX("+i+"px)").css("transform","translateX("+i+"px)")},limit_to:function(n,t,i){return Math.min(Math.max(n,t),i)},initialize_settings:function(t){var i=n.extend({},this.settings,this.data_options(n(t).parent()));i.vertical?(n.data(t,"bar_o",n(t).parent().offset().top),n.data(t,"bar_l",n(t).parent().outerHeight()),n.data(t,"handle_o",n(t).offset().top),n.data(t,"handle_l",n(t).outerHeight())):(n.data(t,"bar_o",n(t).parent().offset().left),n.data(t,"bar_l",n(t).parent().outerWidth()),n.data(t,"handle_o",n(t).offset().left),n.data(t,"handle_l",n(t).outerWidth()));n.data(t,"bar",n(t).parent());n.data(t,"settings",i)},set_initial_position:function(t){var i=n.data(t.children(".range-slider-handle")[0],"settings"),r=!i.initial?Math.floor((i.end-i.start)*.5/i.step)*i.step+i.start:i.initial,u=t.children(".range-slider-handle");this.set_ui(u,r)},set_value:function(t){var i=this;n("["+i.attr_name()+"]",this.scope).each(function(){n(this).attr(i.attr_name(),t)});!n(this.scope).attr(i.attr_name())||n(this.scope).attr(i.attr_name(),t);i.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var i=n(this).children(".range-slider-handle")[0],r=n(this).attr(t.attr_name());t.initialize_settings(i);r?t.set_ui(n(i),parseFloat(r)):t.set_initial_position(n(this))})}}}(jQuery,window,window.document),function(n,t,i,r){"use strict";var u=u||!1;Foundation.libs.joyride={name:"joyride",version:"5.4.7",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;<\/a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"><\/span><\/div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"><\/span><\/div>',wrapper:'<div class="joyride-content-wrapper"><\/div>',button:'<a href="#" class="small button joyride-next-tip"><\/a>',prev_button:'<a href="#" class="small button joyride-prev-tip"><\/a>',modal:'<div class="joyride-modal-bg"><\/div>',expose:'<div class="joyride-expose-wrapper"><\/div>',expose_cover:'<div class="joyride-expose-cover"><\/div>'},expose_add_class:""},init:function(t,i,r){Foundation.inherit(this,"throttle random_str");this.settings=this.settings||n.extend({},this.defaults,r||i);this.bindings(i,r)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var i=this;n(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(n){n.preventDefault();this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(n){n.preventDefault();this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(n){n.preventDefault();this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(n){if(this.settings.keyboard&&this.settings.riding)switch(n.which){case 39:n.preventDefault();this.go_next();break;case 37:n.preventDefault();this.go_prev();break;case 27:n.preventDefault();this.end(this.settings.abort_on_close)}}.bind(this));n(t).off(".joyride").on("resize.fndtn.joyride",i.throttle(function(){if(n("["+i.attr_name()+"]").length>0&&i.settings.$next_tip&&i.settings.riding){if(i.settings.exposed.length>0){var t=n(i.settings.exposed);t.each(function(){var t=n(this);i.un_expose(t);i.expose(t)})}i.is_phone()?i.pos_phone():i.pos_default(!1)}},100))},start:function(){var t=this,i=n("["+this.attr_name()+"]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],u=r.length;!i.length>0||(this.settings.init||this.events(),this.settings=i.data(this.attr_name(!0)+"-init"),this.settings.$content_el=i,this.settings.$body=n(this.settings.tip_container),this.settings.body_offset=n(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,typeof n.cookie!="function"&&(this.settings.cookie_monster=!1),this.settings.cookie_monster&&(!this.settings.cookie_monster||n.cookie(this.settings.cookie_name))||(this.settings.$tip_content.each(function(i){var e=n(this),f;for(this.settings=n.extend({},t.defaults,t.data_options(e)),f=u;f--;)t.settings[r[f]]=parseInt(t.settings[r[f]],10);t.create({$li:e,index:i})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li();this.show()},tip_template:function(t){var i,r;return t.tip_class=t.tip_class||"",i=n(this.settings.template.tip).addClass(t.tip_class),r=n.trim(n(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),i.append(n(this.settings.template.wrapper)),i.first().attr(this.add_namespace("data-index"),t.index),n(".joyride-content-wrapper",i).append(r),i[0]},timer_instance:function(t){return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?"":n(this.settings.template.timer)[0].outerHTML},button_text:function(t){return this.settings.tip_settings.next_button?(t=n.trim(t)||"Next",t=n(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,i){return this.settings.tip_settings.prev_button?(t=n.trim(t)||"Previous",t=i==0?n(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:n(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=n.extend({},this.settings,this.data_options(t.$li));var i=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),r=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),u=t.$li.attr("class"),f=n(this.tip_template({tip_class:u,index:t.index,button_text:i,prev_button_text:r,li:t.$li}));n(this.settings.tip_container).append(f)},show:function(t,i){var u=null;this.settings.$li===r||n.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t,i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=n.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),u=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(u.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){u.animate({width:u.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(u.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){u.animate({width:u.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show(t,i):this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose();this.settings.modal||n(".joyride-modal-bg").hide();this.settings.$current_tip.css("visibility","hidden");setTimeout(n.proxy(function(){this.hide();this.css("visibility","visible")},this.settings.$current_tip),0);this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(n,t){n?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=t?this.settings.$li.prev():this.settings.$li.next(),this.set_next_tip());this.set_target()},set_next_tip:function(){this.settings.$next_tip=n(".joyride-tip-guide").eq(this.settings.$li.index());this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),r=this.settings.$li.attr(this.add_namespace("data-id")),u=function(){return r?n(i.getElementById(r)):t?n("."+t).first():n("body")};this.settings.$target=u()},scroll_to:function(){var r,i;r=n(t).height()/2;i=Math.ceil(this.settings.$target.offset().top-r+this.settings.$next_tip.outerHeight());i!=0&&n("html, body").stop().animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return n.inArray(this.settings.$li.index()+1,this.settings.pause_after)===-1},restart:function(){this.hide();this.settings.$li=r;this.show("init")},pos_default:function(n){var t=this.settings.$next_tip.find(".joyride-nub"),f=Math.ceil(t.outerWidth()/2),u=Math.ceil(t.outerHeight()/2),e=n||!1,i,r;e&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show());/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(t):(i=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,r=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0,this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+u+this.settings.$target.outerHeight()+i,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+r}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+u+this.settings.$target.outerHeight()+i,left:this.settings.$target.offset().left+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-u+i,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-u+i,left:this.settings.$target.offset().left+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+i,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+f+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+i,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-f+r}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default()));e&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var f=this.settings.$next_tip.outerHeight(),o=this.settings.$next_tip.offset(),e=this.settings.$target.outerHeight(),i=n(".joyride-nub",this.settings.$next_tip),r=Math.ceil(i.outerHeight()/2),u=t||!1;i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left");u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show());/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(i):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-f-r}),i.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+e+r}),i.addClass("top"));u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(n){this.center();n.hide();this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=n(".joyride-modal-bg");t.length<1&&n("body").append(this.settings.template.modal).show();/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var r,u,i,f,e,o="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof n)i=arguments[0];else if(this.settings.$target&&!/body/i.test(this.settings.$target.selector))i=this.settings.$target;else return!1;if(i.length<1)return t.console&&console.error("element not valid",i),!1;r=n(this.settings.template.expose);this.settings.$body.append(r);r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)});u=n(this.settings.template.expose_cover);f={zIndex:i.css("z-index"),position:i.css("position")};e=i.attr("class")==null?"":i.attr("class");i.css("z-index",parseInt(r.css("z-index"))+1);f.position=="static"&&i.css("position","relative");i.data("expose-css",f);i.data("orig-class",e);i.attr("class",e+" "+this.settings.expose_add_class);u.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)});this.settings.modal&&this.show_modal();this.settings.$body.append(u);r.addClass(o);u.addClass(o);i.data("expose",o);this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i);this.add_exposed(i)},un_expose:function(){var u,i,f,r,e,o=!1;if(arguments.length>0&&arguments[0]instanceof n)i=arguments[0];else if(this.settings.$target&&!/body/i.test(this.settings.$target.selector))i=this.settings.$target;else return!1;if(i.length<1)return t.console&&console.error("element not valid",i),!1;u=i.data("expose");f=n("."+u);arguments.length>1&&(o=arguments[1]);o===!0?n(".joyride-expose-wrapper,.joyride-expose-cover").remove():f.remove();r=i.data("expose-css");r.zIndex=="auto"?i.css("z-index",""):i.css("z-index",r.zIndex);r.position!=i.css("position")&&(r.position=="static"?i.css("position",""):i.css("position",r.position));e=i.data("orig-class");i.attr("class",e);i.removeData("orig-classes");i.removeData("expose");i.removeData("expose-z-index");this.remove_exposed(i)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[];t instanceof n||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.push(t)},remove_exposed:function(t){var r,i;for(t instanceof n?r=t[0]:typeof t=="string"&&(r=t),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==r){this.settings.exposed.splice(i,1);return}},center:function(){var i=n(t);return this.settings.$next_tip.css({top:(i.height()-this.settings.$next_tip.outerHeight())/2+i.scrollTop(),left:(i.width()-this.settings.$next_tip.outerWidth())/2+i.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(i){var r=n(t),s=r.height()/2,u=Math.ceil(this.settings.$target.offset().top-s+this.settings.$next_tip.outerHeight()),h=r.width()+r.scrollLeft(),o=r.height()+u,f=r.height()+r.scrollTop(),e=r.scrollTop();return u<e&&(e=u<0?0:u),o>f&&(f=o),[i.offset().top<e,h<i.offset().left+i.outerWidth(),f<i.offset().top+i.outerHeight(),r.scrollLeft()>i.offset().left]},visible:function(n){for(var t=n.length;t--;)if(n[t])return!1;return!0},nub_position:function(n,t,i){t==="auto"?n.addClass(i):n.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide();this.show();this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&n.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain});this.settings.timer>0&&clearTimeout(this.settings.automate);this.settings.modal&&this.settings.expose&&this.un_expose();n(this.scope).off("keyup.joyride");this.settings.$next_tip.data("closed",!0);this.settings.riding=!1;n(".joyride-modal-bg").hide();this.settings.$current_tip.hide();(typeof t=="undefined"||t===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip));n(".joyride-tip-guide").remove()},off:function(){n(this.scope).off(".joyride");n(t).off(".joyride");n(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride");n(".joyride-tip-guide, .joyride-modal-bg").remove();clearTimeout(this.settings.automate);this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.4.7",settings:{use_tallest:!0,before_height_change:n.noop,after_height_change:n.noop,equalize_on_stack:!1},init:function(n,t,i){Foundation.inherit(this,"image_loaded");this.bindings(t,i);this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(t){var f=!1,i=t.find("["+this.attr_name()+"-watch]:visible"),r=t.data(this.attr_name(!0)+"-init"),e,u,o,s;i.length!==0&&((e=i.first().offset().top,r.before_height_change(),t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),i.height("inherit"),i.each(function(){var t=n(this);t.offset().top!==e&&(f=!0)}),r.equalize_on_stack===!1&&f)||(u=i.map(function(){return n(this).outerHeight(!1)}).get(),r.use_tallest?(o=Math.max.apply(null,u),i.css("height",o)):(s=Math.min.apply(null,u),i.css("height",s)),r.after_height_change(),t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")))},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=n(this);t.image_loaded(t.S("img",this),function(){t.equalize(i)})})}}}(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.4.7",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(n,t,i){Foundation.inherit(this,"throttle");this.bindings(t,i)},events:function(){var i=this,r=i.S;r(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var u=r(this).data(i.attr_name(!0)+"-init")||i.settings;(!u.is_hover||Modernizr.touch)&&(t.preventDefault(),i.toggle(n(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(n){var t=r(this),u,f,e;clearTimeout(i.timeout);t.data(i.data_attr())?(u=r("#"+t.data(i.data_attr())),f=t):(u=t,f=r("["+i.attr_name()+"='"+u.attr("id")+"']"));e=f.data(i.attr_name(!0)+"-init")||i.settings;r(n.target).data(i.data_attr())&&e.is_hover&&i.closeall.call(i);e.is_hover&&i.open.apply(i,[u,f])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(){var n=r(this);i.timeout=setTimeout(function(){var u,t;n.data(i.data_attr())?(t=n.data(i.data_attr(!0)+"-init")||i.settings,t.is_hover&&i.close.call(i,r("#"+n.data(i.data_attr())))):(u=r("["+i.attr_name()+'="'+r(this).attr("id")+'"]'),t=u.data(i.attr_name(!0)+"-init")||i.settings,t.is_hover&&i.close.call(i,n))}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var u=r(t.target).closest("["+i.attr_name()+"-content]");if(!(r(t.target).closest("["+i.attr_name()+"]").length>0)){if(!r(t.target).data("revealId")&&u.length>0&&(r(t.target).is("["+i.attr_name()+"-content]")||n.contains(u.first()[0],t.target))){t.stopPropagation();return}i.close.call(i,r("["+i.attr_name()+"-content]"))}}).on("opened.fndtn.dropdown","["+i.attr_name()+"-content]",function(){i.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+i.attr_name()+"-content]",function(){i.settings.closed.call(this)});r(t).off(".dropdown").on("resize.fndtn.dropdown",i.throttle(function(){i.resize.call(i)},50));this.resize()},close:function(t){var i=this;t.each(function(){var r=n("["+i.attr_name()+"="+t[0].id+"]")||n("aria-controls="+t[0].id+"]");r.attr("aria-expanded","false");i.S(this).hasClass(i.settings.active_class)&&(i.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(i.settings.active_class).prev("["+i.attr_name()+"]").removeClass(i.settings.active_class).removeData("target"),i.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[t]))})},closeall:function(){var t=this;n.each(t.S("["+this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(n,t){this.css(n.addClass(this.settings.active_class),t);n.prev("["+this.attr_name()+"]").addClass(this.settings.active_class);n.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[n,t]);n.attr("aria-hidden","false");t.attr("aria-expanded","true");n.focus()},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(n){if(!n.hasClass(this.settings.disabled_class)){var t=this.S("#"+n.data(this.data_attr()));t.length!==0&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==n.get(0)&&this.open.call(this,t,n)):this.open.call(this,t,n))}},resize:function(){var n=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+"='"+n.attr("id")+"']");n.length&&t.length&&this.css(n,t)},css:function(n,t){var u=Math.max((t.width()-n.width())/2,8),i=t.data(this.attr_name(!0)+"-init")||this.settings,r;return this.clear_idx(),this.small()?(r=this.dirs.bottom.call(n,t,i),n.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:r.top}),n.css(Foundation.rtl?"right":"left",u)):this.style(n,t,i),n},style:function(t,i,r){var u=n.extend({position:"absolute"},this.dirs[r.align].call(t,i,r));t.attr("style","").css(u)},dirs:{_base:function(n){var r=this.offsetParent(),i=r.offset(),t=n.offset();return t.top-=i.top,t.left-=i.left,t},top:function(n,t){var r=Foundation.libs.dropdown,i=r.dirs._base.call(this,n);return(this.addClass("drop-top"),(n.outerWidth()<this.outerWidth()||r.small()||this.hasClass(t.mega_menu))&&r.adjust_pip(this,n,t,i),Foundation.rtl)?{left:i.left-this.outerWidth()+n.outerWidth(),top:i.top-this.outerHeight()}:{left:i.left,top:i.top-this.outerHeight()}},bottom:function(n,t){var r=Foundation.libs.dropdown,i=r.dirs._base.call(this,n);return((n.outerWidth()<this.outerWidth()||r.small()||this.hasClass(t.mega_menu))&&r.adjust_pip(this,n,t,i),r.rtl)?{left:i.left-this.outerWidth()+n.outerWidth(),top:i.top+n.outerHeight()}:{left:i.left,top:i.top+n.outerHeight()}},left:function(n){var t=Foundation.libs.dropdown.dirs._base.call(this,n);return this.addClass("drop-left"),{left:t.left-this.outerWidth(),top:t.top}},right:function(n){var t=Foundation.libs.dropdown.dirs._base.call(this,n);return this.addClass("drop-right"),{left:t.left+n.outerWidth(),top:t.top}}},adjust_pip:function(n,t,i,r){var u=Foundation.stylesheet,f=8;n.hasClass(i.mega_class)?f=r.left+t.outerWidth()/2-8:this.small()&&(f+=r.left-8);this.rule_idx=u.cssRules.length;var e=".f-dropdown.open:before",o=".f-dropdown.open:after",s="left: "+f+"px;",h="left: "+(f-1)+"px;";u.insertRule?(u.insertRule([e,"{",s,"}"].join(" "),this.rule_idx),u.insertRule([o,"{",h,"}"].join(" "),this.rule_idx+1)):(u.addRule(e,s,this.rule_idx),u.addRule(o,h,this.rule_idx+1))},clear_idx:function(){var n=Foundation.stylesheet;typeof this.rule_idx!="undefined"&&(n.deleteRule(this.rule_idx),n.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown");this.S("html, body").off(".fndtn.dropdown");this.S(t).off(".fndtn.dropdown");this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(n,t,i,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.4.7",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;<\/a><div class="visible-img" style="display: none"><div class="clearing-touch-label"><\/div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"><\/p><a href="#" class="clearing-main-prev"><span><\/span><\/a><a href="#" class="clearing-main-next"><span><\/span><\/a><\/div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(n,t,i){var r=this;Foundation.inherit(this,"throttle image_loaded");this.bindings(t,i);r.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var u=this,f=u.S,e=n(".scroll-container");e.length>0&&(this.scope=e);f(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(n,t,i){var t=t||f(this),i=i||t,r=t.next("li"),e=t.closest("["+u.attr_name()+"]").data(u.attr_name(!0)+"-init"),o=f(n.target);n.preventDefault();e||(u.init(),e=t.closest("["+u.attr_name()+"]").data(u.attr_name(!0)+"-init"));i.hasClass("visible")&&t[0]===i[0]&&r.length>0&&u.is_open(t)&&(i=r,o=f("img",i));u.open(o,t,i);u.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(n){u.nav(n,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(n){u.nav(n,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(n){Foundation.libs.clearing.close(n,this)});n(i).on("keydown.fndtn.clearing",function(n){u.keydown(n)});f(t).off(".clearing").on("resize.fndtn.clearing",function(){u.resize()});this.swipe_events(r)},swipe_events:function(){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var i={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};n(this).data("swipe-transition",i);t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(i){var r,u;(i.touches||(i=i.originalEvent),i.touches.length>1||i.scale&&i.scale!==1)||(r=n(this).data("swipe-transition"),typeof r=="undefined"&&(r={}),r.delta_x=i.touches[0].pageX-r.start_page_x,Foundation.rtl&&(r.delta_x=-r.delta_x),typeof r.is_scrolling=="undefined"&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(i.touches[0].pageY-r.start_page_y))),r.is_scrolling||r.active||(i.preventDefault(),u=r.delta_x<0?"next":"prev",r.active=!0,t.nav(i,u)))}).on("touchend.fndtn.clearing",".visible-img",function(t){n(this).data("swipe-transition",{});t.stopPropagation()})},assemble:function(t){var i=t.parent(),r,u;if(!i.parent().hasClass("carousel")&&(i.after('<div id="foundationClearingHolder"><\/div>'),r=i.detach(),u="",r[0]!=null)){u=r[0].outerHTML;var o=this.S("#foundationClearingHolder"),s=i.data(this.attr_name(!0)+"-init"),e={grid:'<div class="carousel">'+u+"<\/div>",viewing:s.templates.viewing},f='<div class="clearing-assembled"><div>'+e.viewing+e.grid+"<\/div><\/div>",h=this.settings.touch_label;Modernizr.touch&&(f=n(f).find(".clearing-touch-label").html(h).end());o.after(f).remove()}},open:function(t,r,u){function l(){setTimeout(function(){this.image_loaded(o,function(){o.outerWidth()!==1||c?y.call(this,o):l.call(this)}.bind(this))}.bind(this),100)}function y(t){var i=n(t);i.css("visibility","visible");a.css("overflow","hidden");h.addClass("clearing-blackout");s.addClass("clearing-container");e.show();this.fix_height(u).caption(f.S(".clearing-caption",e),f.S("img",u)).center_and_label(t,v).shift(r,u,function(){u.closest("li").siblings().removeClass("visible");u.closest("li").addClass("visible")});e.trigger("opened.fndtn.clearing")}var f=this,a=n(i.body),h=u.closest(".clearing-assembled"),s=f.S("div",h).first(),e=f.S(".visible-img",s),o=f.S("img",e).not(t),v=f.S(".clearing-touch-label",s),c=!1;n("body").on("touchmove",function(n){n.preventDefault()});o.error(function(){c=!0});this.locked()||(e.trigger("open.fndtn.clearing"),o.attr("src",this.load(t)).css("visibility","hidden"),l.call(this))},close:function(t,r){t.preventDefault();var f=function(n){return/blackout/.test(n.selector)?n:n.closest(".clearing-blackout")}(n(r)),o=n(i.body),e,u;return r===t.target&&f&&(o.css("overflow",""),e=n("div",f).first(),u=n(".visible-img",e),u.trigger("close.fndtn.clearing"),this.settings.prev_index=0,n("ul["+this.attr_name()+"]",f).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),e.removeClass("clearing-container"),u.hide(),u.trigger("closed.fndtn.clearing")),n("body").off("touchmove"),!1},is_open:function(n){return n.parent().prop("style").length>0},keydown:function(t){var i=n(".clearing-blackout ul["+this.attr_name()+"]"),r=this.rtl?37:39,u=this.rtl?39:37;t.which===r&&this.go(i,"next");t.which===u&&this.go(i,"prev");t.which===27&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(t,i){var r=n("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault();this.go(r,i)},resize:function(){var t=n("img",".clearing-blackout .visible-img"),i=n(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,i),t.trigger("resized.fndtn.clearing"))},fix_height:function(n){var t=n.parent().children(),i=this;return t.each(function(){var n=i.S(this),t=n.find("img");n.height()>t.outerHeight()&&n.addClass("fix-height")}).closest("ul").width(t.length*100+"%"),this},update_paddles:function(n){n=n.closest("li");var t=n.closest(".carousel").siblings(".visible-img");n.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled");n.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(n,t){return this.rtl?(n.css({marginRight:-(n.outerWidth()/2),marginTop:-(n.outerHeight()/2),left:"auto",right:"50%"}),t.length>0&&t.css({marginRight:-(t.outerWidth()/2),marginTop:-(n.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"})):(n.css({marginLeft:-(n.outerWidth()/2),marginTop:-(n.outerHeight()/2)}),t.length>0&&t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(n.outerHeight()/2)-t.outerHeight()-10})),this},load:function(n){var t;return(t=n[0].nodeName==="A"?n.attr("href"):n.parent().attr("href"),this.preload(n),t)?t:n.attr("src")},preload:function(n){this.img(n.closest("li").next()).img(n.closest("li").prev())},img:function(n){if(n.length){var i=new Image,t=this.S("a",n);i.src=t.length?t.attr("href"):this.S("img",n).attr("src")}return this},caption:function(n,t){var i=t.attr("data-caption");return i?n.html(i).show():n.text("").hide(),this},go:function(n,t){var r=this.S(".visible",n),i=r[t]();this.settings.skip_selector&&i.find(this.settings.skip_selector).length!=0&&(i=i[t]());i.length&&this.S("img",i).trigger("click",[r,i]).trigger("click.fndtn.clearing",[r,i]).trigger("change.fndtn.clearing")},shift:function(n,t,i){var u=t.parent(),c=this.settings.prev_index||t.index(),f=this.direction(u,n,t),e=this.rtl?"right":"left",h=parseInt(u.css("left"),10),o=t.outerWidth(),s,r={};t.index()===c||/skip/.test(f)?/skip/.test(f)&&(s=t.index()-this.settings.up_count,this.lock(),s>0?(r[e]=-(s*o),u.animate(r,300,this.unlock())):(r[e]=0,u.animate(r,300,this.unlock()))):/left/.test(f)?(this.lock(),r[e]=h+o,u.animate(r,300,this.unlock())):/right/.test(f)&&(this.lock(),r[e]=h-o,u.animate(r,300,this.unlock()));i()},direction:function(n,t,i){var u=this.S("li",n),o=u.outerWidth()+u.outerWidth()/4,f=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,r=u.index(i),e;return this.settings.up_count=f,e=this.adjacent(this.settings.prev_index,r)?r>f&&r>this.settings.prev_index?"right":r>f-1&&r<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=r,e},adjacent:function(n,t){for(var i=t+1;i>=t-1;i--)if(i===n)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing");this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(n,t,i,r){"use strict";var u=function(){},f=function(u,f){if(u.hasClass(f.slides_container_class))return this;var h=this,c,l=u,p,y,w,v=0,b,a,k=!1;h.slides=function(){return l.children(f.slide_selector)};h.slides().first().addClass(f.active_slide_class);h.update_slide_number=function(t){f.slide_number&&(p.find("span:first").text(parseInt(t)+1),p.find("span:last").text(h.slides().length));f.bullets&&(y.children().removeClass(f.bullets_active_class),n(y.children().get(t)).addClass(f.bullets_active_class))};h.update_active_link=function(t){var i=n('[data-orbit-link="'+h.slides().eq(t).attr("data-orbit-slide")+'"]');i.siblings().removeClass(f.bullets_active_class);i.addClass(f.bullets_active_class)};h.build_markup=function(){l.wrap('<div class="'+f.container_class+'"><\/div>');c=l.parent();l.addClass(f.slides_container_class);f.stack_on_small&&c.addClass(f.stack_on_small_class);f.navigation_arrows&&(c.append(n('<a href="#"><span><\/span><\/a>').addClass(f.prev_class)),c.append(n('<a href="#"><span><\/span><\/a>').addClass(f.next_class)));f.timer&&(w=n("<div>").addClass(f.timer_container_class),w.append("<span>"),w.append(n("<div>").addClass(f.timer_progress_class)),w.addClass(f.timer_paused_class),c.append(w));f.slide_number&&(p=n("<div>").addClass(f.slide_number_class),p.append("<span><\/span> "+f.slide_number_text+" <span><\/span>"),c.append(p));f.bullets&&(y=n("<ol>").addClass(f.bullets_container_class),c.append(y),y.wrap('<div class="orbit-bullets-container"><\/div>'),h.slides().each(function(t){var i=n("<li>").attr("data-orbit-slide",t).on("click",h.link_bullet);y.append(i)}))};h._goto=function(t,i){var r,o,e,u,s,c;if(t===v)return!1;if(typeof a=="object"&&a.restart(),r=h.slides(),o="next",k=!0,t<v&&(o="prev"),t>=r.length){if(!f.circular)return!1;t=0}else if(t<0){if(!f.circular)return!1;t=r.length-1}if(e=n(r.get(v)),u=n(r.get(t)),e.css("zIndex",2),e.removeClass(f.active_slide_class),u.css("zIndex",4).addClass(f.active_slide_class),l.trigger("before-slide-change.fndtn.orbit"),f.before_slide_change(),h.update_active_link(t),s=function(){var n=function(){v=t;k=!1;i===!0&&(a=h.create_timer(),a.start());h.update_slide_number(v);l.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:r.length}]);f.after_slide_change(v,r.length)};l.height()!=u.height()&&f.variable_height?l.animate({height:u.height()},250,"linear",n):n()},r.length===1)return s(),!1;c=function(){o==="next"&&b.next(e,u,s);o==="prev"&&b.prev(e,u,s)};u.height()>l.height()&&f.variable_height?l.animate({height:u.height()},250,"linear",c):c()};h.next=function(n){n.stopImmediatePropagation();n.preventDefault();h._goto(v+1)};h.prev=function(n){n.stopImmediatePropagation();n.preventDefault();h._goto(v-1)};h.link_custom=function(t){var i,r;t.preventDefault();i=n(this).attr("data-orbit-link");typeof i=="string"&&(i=n.trim(i))!=""&&(r=c.find("[data-orbit-slide="+i+"]"),r.index()!=-1&&h._goto(r.index()))};h.link_bullet=function(){var t=n(this).attr("data-orbit-slide"),i;typeof t=="string"&&(t=n.trim(t))!=""&&(isNaN(parseInt(t))?(i=c.find("[data-orbit-slide="+t+"]"),i.index()!=-1&&h._goto(i.index()+1)):h._goto(parseInt(t)))};h.timer_callback=function(){h._goto(v+1,!0)};h.compute_dimensions=function(){var i=n(h.slides().get(v)),t=i.height();f.variable_height||h.slides().each(function(){n(this).height()>t&&(t=n(this).height())});l.height(t)};h.create_timer=function(){return new e(c.find("."+f.timer_container_class),f,h.timer_callback)};h.stop_timer=function(){typeof a=="object"&&a.stop()};h.toggle_timer=function(){var n=c.find("."+f.timer_container_class);n.hasClass(f.timer_paused_class)?(typeof a=="undefined"&&(a=h.create_timer()),a.start()):typeof a=="object"&&a.stop()};h.init=function(){h.build_markup();f.timer&&(a=h.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),a.start));b=new s(f,l);f.animation==="slide"&&(b=new o(f,l));c.on("click","."+f.next_class,h.next);c.on("click","."+f.prev_class,h.prev);if(f.next_on_click)c.on("click","."+f.slides_container_class+" [data-orbit-slide]",h.link_bullet);c.on("click",h.toggle_timer);if(f.swipe)c.on("touchstart.fndtn.orbit",function(n){n.touches||(n=n.originalEvent);var t={start_page_x:n.touches[0].pageX,start_page_y:n.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};c.data("swipe-transition",t);n.stopPropagation()}).on("touchmove.fndtn.orbit",function(n){var t,i;(n.touches||(n=n.originalEvent),n.touches.length>1||n.scale&&n.scale!==1)||(t=c.data("swipe-transition"),typeof t=="undefined"&&(t={}),t.delta_x=n.touches[0].pageX-t.start_page_x,typeof t.is_scrolling=="undefined"&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(n.touches[0].pageY-t.start_page_y))),t.is_scrolling||t.active||(n.preventDefault(),i=t.delta_x<0?v+1:v-1,t.active=!0,h._goto(i)))}).on("touchend.fndtn.orbit",function(n){c.data("swipe-transition",{});n.stopPropagation()});c.on("mouseenter.fndtn.orbit",function(){f.timer&&f.pause_on_hover&&h.stop_timer()}).on("mouseleave.fndtn.orbit",function(){f.timer&&f.resume_on_mouseout&&a.start()});n(i).on("click","[data-orbit-link]",h.link_custom);n(t).on("load resize",h.compute_dimensions);Foundation.utils.image_loaded(this.slides().children("img"),h.compute_dimensions);Foundation.utils.image_loaded(this.slides().children("img"),function(){c.prev("."+f.preloader_class).css("display","none");h.update_slide_number(0);h.update_active_link(0);l.trigger("ready.fndtn.orbit")})};h.init()},e=function(n,t,i){var f=this,o=t.timer_speed,u=n.find("."+t.timer_progress_class),s,e,r=-1;this.update_progress=function(n){var t=u.clone();t.attr("style","");t.css("width",n+"%");u.replaceWith(t);u=t};this.restart=function(){clearTimeout(e);n.addClass(t.timer_paused_class);r=-1;f.update_progress(0)};this.start=function(){if(!n.hasClass(t.timer_paused_class))return!0;r=r===-1?o:r;n.removeClass(t.timer_paused_class);s=(new Date).getTime();u.animate({width:"100%"},r,"linear");e=setTimeout(function(){f.restart();i()},r);n.trigger("timer-started.fndtn.orbit")};this.stop=function(){var i,u;if(n.hasClass(t.timer_paused_class))return!0;clearTimeout(e);n.addClass(t.timer_paused_class);i=(new Date).getTime();r=r-(i-s);u=100-r/o*100;f.update_progress(u);n.trigger("timer-stopped.fndtn.orbit")}},o=function(t){var i=t.animation_speed,f=n("html[dir=rtl]").length===1,r=f?"marginRight":"marginLeft",u={};u[r]="0%";this.next=function(n,t,f){n.animate({marginLeft:"-100%"},i);t.animate(u,i,function(){n.css(r,"100%");f()})};this.prev=function(n,t,f){n.animate({marginLeft:"100%"},i);t.css(r,"-100%");t.animate(u,i,function(){n.css(r,"100%");f()})}},s=function(t){var i=t.animation_speed,r=n("html[dir=rtl]").length===1,u=r?"marginRight":"marginLeft";this.next=function(n,t,r){t.css({margin:"0%",opacity:"0.01"});t.animate({opacity:"1"},i,"linear",function(){n.css("margin","100%");r()})};this.prev=function(n,t,r){t.css({margin:"0%",opacity:"0.01"});t.animate({opacity:"1"},i,"linear",function(){n.css("margin","100%");r()})}};Foundation.libs=Foundation.libs||{};Foundation.libs.orbit={name:"orbit",version:"5.4.7",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:u,after_slide_change:u},init:function(n,t,i){var r=this;this.bindings(t,i)},events:function(n){var t=new f(this.S(n),this.S(n).data("orbit-init"));this.S(n).data(this.name+"-instance",t)},reflow:function(){var n=this,t,i;n.S(n.scope).is("[data-orbit]")?(t=n.S(n.scope),i=t.data(n.name+"-instance"),i.compute_dimensions()):n.S("[data-orbit]",n.scope).each(function(t,i){var r=n.S(i),f=n.data_options(r),u=r.data(n.name+"-instance");u.compute_dimensions()})}}}(jQuery,window,window.document),function(n){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.4.7",settings:{open_method:"move",close_on_click:!1},init:function(n,t,i){this.bindings(t,i)},events:function(){var i=this,f=i.S,t="",r="",u="";this.settings.open_method==="move"?(t="move-",r="right",u="left"):this.settings.open_method==="overlap_single"?(t="offcanvas-overlap-",r="right",u="left"):this.settings.open_method==="overlap"&&(t="offcanvas-overlap");f(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(u){i.click_toggle_class(u,t+r);i.settings.open_method!=="overlap"&&f(".left-submenu").removeClass(t+r);n(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(u){var o=i.get_settings(u),e=f(this).parent();!o.close_on_click||e.hasClass("has-submenu")||e.hasClass("back")?f(this).parent().hasClass("has-submenu")?(u.preventDefault(),f(this).siblings(".left-submenu").toggleClass(t+r)):e.hasClass("back")&&(u.preventDefault(),e.parent().removeClass(t+r)):(i.hide.call(i,t+r,i.get_wrapper(u)),e.parent().removeClass(t+r));n(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(r){i.click_toggle_class(r,t+u);i.settings.open_method!=="overlap"&&f(".right-submenu").removeClass(t+u);n(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(r){var o=i.get_settings(r),e=f(this).parent();!o.close_on_click||e.hasClass("has-submenu")||e.hasClass("back")?f(this).parent().hasClass("has-submenu")?(r.preventDefault(),f(this).siblings(".right-submenu").toggleClass(t+u)):e.hasClass("back")&&(r.preventDefault(),e.parent().removeClass(t+u)):(i.hide.call(i,t+u,i.get_wrapper(r)),e.parent().removeClass(t+u));n(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(e){i.click_remove_class(e,t+u);f(".right-submenu").removeClass(t+u);r&&(i.click_remove_class(e,t+r),f(".left-submenu").removeClass(t+u));n(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(f){i.click_remove_class(f,t+u);n(".left-off-canvas-toggle").attr("aria-expanded","false");r&&(i.click_remove_class(f,t+r),n(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(n,t){t=t||this.get_wrapper();t.is("."+n)?this.hide(n,t):this.show(n,t)},show:function(n,t){t=t||this.get_wrapper();t.trigger("open").trigger("open.fndtn.offcanvas");t.addClass(n)},hide:function(n,t){t=t||this.get_wrapper();t.trigger("close").trigger("close.fndtn.offcanvas");t.removeClass(n)},click_toggle_class:function(n,t){n.preventDefault();var i=this.get_wrapper(n);this.toggle(t,i)},click_remove_class:function(n,t){n.preventDefault();var i=this.get_wrapper(n);this.hide(t,i)},get_settings:function(n){var t=this.S(n.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(n){var t=this.S(n?n.target:this.scope).closest(".off-canvas-wrap");return t.length===0&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(n){"use strict";Foundation.libs.alert={name:"alert",version:"5.4.7",settings:{callback:function(){}},init:function(n,t,i){this.bindings(t,i)},events:function(){var t=this,i=this.S;n(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(n){var r=i(this).closest("["+t.attr_name()+"]"),u=r.data(t.attr_name(!0)+"-init")||t.settings;if(n.preventDefault(),Modernizr.csstransitions){r.addClass("alert-close");r.on("transitionend webkitTransitionEnd oTransitionEnd",function(){i(this).trigger("close").trigger("close.fndtn.alert").remove();u.callback()})}else r.fadeOut(300,function(){i(this).trigger("close").trigger("close.fndtn.alert").remove();u.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(n,t,i,r){"use strict";function u(n){var t=/fade/i.test(n),i=/pop/i.test(n);return{animate:t||i,pop:i,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.4.7",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:n(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,i,r){n.extend(!0,this.settings,i,r);this.bindings(i,r)},events:function(){var n=this,t=n.S;t(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(i){var r,u,f;i.preventDefault();n.locked||(r=t(this),u=r.data(n.data_attr("reveal-ajax")),n.locked=!0,typeof u=="undefined"?n.open.call(n,r):(f=u===!0?r.attr("href"):u,n.open.call(n,r,{url:f})))});t(i).on("click.fndtn.reveal",this.close_targets(),function(i){if(i.preventDefault(),!n.locked){var r=t("["+n.attr_name()+"].open").data(n.attr_name(!0)+"-init")||n.settings,u=t(i.target)[0]===t("."+r.bg_class)[0];if(u)if(r.close_on_background_click)i.stopPropagation();else return;n.locked=!0;n.close.call(n,u?t("["+n.attr_name()+"].open"):t(this).closest("["+n.attr_name()+"]"))}});if(t("["+n.attr_name()+"]",this.scope).length>0)t(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video);else t(this.scope).on("open.fndtn.reveal","["+n.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+n.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+n.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+n.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+n.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+n.attr_name()+"]",this.close_video);return!0},key_up_on:function(){var n=this;n.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(t){var i=n.S("["+n.attr_name()+"].open"),r=i.data(n.attr_name(!0)+"-init")||n.settings;r&&t.which===27&&r.close_on_esc&&!n.locked&&n.close.call(n,i)});return!0},key_up_off:function(){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(i,r){var f=this,u,e,o,s;if(i?typeof i.selector!="undefined"?u=f.S("#"+i.data(f.data_attr("reveal-id"))).first():(u=f.S(this.scope),r=i):u=f.S(this.scope),e=u.data(f.attr_name(!0)+"-init"),e=e||this.settings,u.hasClass("open")&&i.attr("data-reveal-id")==u.attr("id"))return f.close(u);u.hasClass("open")||(o=f.S("["+f.attr_name()+"].open"),typeof u.data("css-top")=="undefined"&&u.data("css-top",parseInt(u.css("top"),10)).data("offset",this.cache_offset(u)),this.key_up_on(u),u.trigger("open").trigger("open.fndtn.reveal"),o.length<1&&this.toggle_bg(u,!0),typeof r=="string"&&(r={url:r}),typeof r!="undefined"&&r.url?(s=typeof r.success!="undefined"?r.success:null,n.extend(r,{success:function(t,i,r){n.isFunction(s)&&s(t,i,r);u.html(t);f.S(u).foundation("section","reflow");f.S(u).children().foundation();o.length>0&&f.hide(o,e.css.close);f.show(u,e.css.open)}}),n.ajax(r)):(o.length>0&&this.hide(o,e.css.close),this.show(u,e.css.open)));f.S(t).trigger("resize")},close:function(n){var n=n&&n.length?n:this.S(this.scope),t=this.S("["+this.attr_name()+"].open"),i=n.data(this.attr_name(!0)+"-init")||this.settings;t.length>0&&(this.locked=!0,this.key_up_off(n),n.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(n,!1),this.hide(t,i.css.close,i))},close_targets:function(){var n="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?n+", ."+this.settings.bg_class:n},toggle_bg:function(t,i){this.S("."+this.settings.bg_class).length===0&&(this.settings.bg=n("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var u=this.settings.bg.filter(":visible").length>0;i!=u&&((i==r?u:!i)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(i,r){var s,h,e,o,f;if(r){if(f=i.data(this.attr_name(!0)+"-init")||this.settings,s=f.root_element,i.parent(s).length===0){h=i.wrap('<div style="display: none;" />').parent();i.on("closed.fndtn.reveal.wrapped",function(){i.detach().appendTo(h);i.unwrap().unbind("closed.fndtn.reveal.wrapped")});i.detach().appendTo(s)}return(e=u(f.animation),e.animate||(this.locked=!1),e.pop)?(r.top=n(t).scrollTop()-i.data("offset")+"px",o={top:n(t).scrollTop()+i.data("css-top")+"px",opacity:1},setTimeout(function(){return i.css(r).animate(o,f.animation_speed,"linear",function(){this.locked=!1;i.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),f.animation_speed/2)):e.fade?(r.top=n(t).scrollTop()+i.data("css-top")+"px",o={opacity:1},setTimeout(function(){return i.css(r).animate(o,f.animation_speed,"linear",function(){this.locked=!1;i.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),f.animation_speed/2)):i.css(r).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}return(f=this.settings,u(f.animation).fade)?i.fadeIn(f.animation_speed/2):(this.locked=!1,i.show())},hide:function(i,r){var e,o,f;return r?(f=i.data(this.attr_name(!0)+"-init"),f=f||this.settings,e=u(f.animation),e.animate||(this.locked=!1),e.pop)?(o={top:-n(t).scrollTop()-i.data("offset")+"px",opacity:0},setTimeout(function(){return i.animate(o,f.animation_speed,"linear",function(){this.locked=!1;i.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),f.animation_speed/2)):e.fade?(o={opacity:0},setTimeout(function(){return i.animate(o,f.animation_speed,"linear",function(){this.locked=!1;i.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),f.animation_speed/2)):i.hide().css(r).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal"):(f=this.settings,u(f.animation).fade)?i.fadeOut(f.animation_speed/2):i.hide()},close_video:function(t){var r=n(".flex-video",t.target),i=n("iframe",r);i.length>0&&(i.attr("data-src",i[0].src),i.attr("src",i.attr("src")),r.hide())},open_video:function(t){var u=n(".flex-video",t.target),i=u.find("iframe"),f,e;i.length>0&&(f=i.attr("data-src"),typeof f=="string"?i[0].src=i.attr("data-src"):(e=i[0].src,i[0].src=r,i[0].src=e),u.show())},data_attr:function(n){return this.namespace.length>0?this.namespace+"-"+n:n},cache_offset:function(n){var t=n.show().height()+parseInt(n.css("top"),10);return n.hide(),t},off:function(){n(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.4.7",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,i,r){var u,f,e;return/IMG/.test(t[0].nodeName)?(u=t[0].src,new RegExp(i,"i").test(u))?void 0:(t[0].src=i,r(t[0].src)):(f=t.data(this.data_attr+"-last-path"),e=this,f==i)?void 0:/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(n(t).css("background-image","url("+i+")"),t.data("interchange-last-path",i),r(i)):n.get(i,function(n){t.html(n);t.data(e.data_attr+"-last-path",i);r()})}}},init:function(t,i,r){Foundation.inherit(this,"throttle random_str");this.data_attr=this.set_data_attr();n.extend(!0,this.settings,i,r);this.bindings(i,r);this.load("images");this.load("nodes")},get_media_hash:function(){var n="";for(var t in this.settings.named_queries)n+=matchMedia(this.settings.named_queries[t]).matches.toString();return n},events:function(){var i=this,r;n(t).off(".interchange").on("resize.fndtn.interchange",i.throttle(function(){var n=i.get_media_hash();n!==r&&i.resize();r=n},50));return this},resize:function(){var r=this.cache,i,t;if(!this.images_loaded||!this.nodes_loaded){setTimeout(n.proxy(this.resize,this),50);return}for(i in r)r.hasOwnProperty(i)&&(t=this.results(i,r[i]),t&&this.settings.directives[t.scenario[1]].call(this,t.el,t.scenario[0],function(){var n;n=arguments[0]instanceof Array?arguments[0]:Array.prototype.slice.call(arguments,0);t.el.trigger(t.scenario[1],n)}))},results:function(n,t){var i=t.length,u,f,r;if(i>0)for(u=this.S("["+this.add_namespace("data-uuid")+'="'+n+'"]');i--;)if(r=t[i][2],f=this.settings.named_queries.hasOwnProperty(r)?matchMedia(this.settings.named_queries[r]):matchMedia(r),f.matches)return{el:u,scenario:t[i]};return!1},load:function(n,t){return(typeof this["cached_"+n]=="undefined"||t)&&this["update_"+n](),this["cached_"+n]},update_images:function(){var n=this.S("img["+this.data_attr+"]"),i=n.length,t=i,r=0,f=this.data_attr,u;for(this.cache={},this.cached_images=[],this.images_loaded=i===0;t--;)r++,n[t]&&(u=n[t].getAttribute(f)||"",u.length>0&&this.cached_images.push(n[t])),r===i&&(this.images_loaded=!0,this.enhance("images"));return this},update_nodes:function(){var n=this.S("["+this.data_attr+"]").not("img"),t=n.length,i=t,r=0,f=this.data_attr,u;for(this.cached_nodes=[],this.nodes_loaded=t===0;i--;)r++,u=n[i].getAttribute(f)||"",u.length>0&&this.cached_nodes.push(n[i]),r===t&&(this.nodes_loaded=!0,this.enhance("nodes"));return this},enhance:function(i){for(var r=this["cached_"+i].length;r--;)this.object(n(this["cached_"+i][r]));return n(t).trigger("resize").trigger("resize.fndtn.interchange")},convert_directive:function(n){var t=this.trim(n);return t.length>0?t:"replace"},parse_scenario:function(n){var t=n[0].match(/(.+),\s*(\w+)\s*$/),u=n[1],i,r;if(t)i=t[1],r=t[2];else var f=n[0].split(/,\s*$/),i=f[0],r="";return[this.trim(i),this.convert_directive(r),this.trim(u)]},object:function(n){var r=this.parse_data_attr(n),u=[],t=r.length,i,f;if(t>0)while(t--)i=r[t].split(/\(([^\)]*?)(\))$/),i.length>1&&(f=this.parse_scenario(i),u.push(f));return this.store(n,u)},store:function(n,t){var i=this.random_str(),r=n.data(this.add_namespace("uuid",!0));return this.cache[r]?this.cache[r]:(n.attr(this.add_namespace("data-uuid"),i),this.cache[i]=t)},trim:function(t){return typeof t=="string"?n.trim(t):t},set_data_attr:function(n){return n?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(n){for(var t=n.attr(this.attr_name()).split(/\[(.*?)\]/),i=t.length,r=[];i--;)t[i].replace(/[\W\d]+/,"").length>4&&r.push(t[i]);return r},reflow:function(){this.load("images",!0);this.load("nodes",!0)}}}(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.4.7",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(n,t,i){Foundation.inherit(this,"throttle");this.bindings(t,i)},events:function(){var i=this,u=i.S,r=i.settings;i.set_expedition_position();u(i.scope).off(".magellan").on("click.fndtn.magellan","["+i.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(t){var u;t.preventDefault();var e=n(this).closest("["+i.attr_name()+"]"),o=e.data("magellan-expedition-init"),r=this.hash.split("#").join(""),f=n("a[name='"+r+"']");f.length===0&&(f=n("#"+r));u=f.offset().top-o.destination_threshold+1;u=u-e.outerHeight();n("html, body").stop().animate({scrollTop:u},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+r):location.hash="#"+r})}).on("scroll.fndtn.magellan",i.throttle(this.check_for_arrivals.bind(this),r.throttle_delay));n(t).on("resize.fndtn.magellan",i.throttle(this.set_expedition_position.bind(this),r.throttle_delay))},check_for_arrivals:function(){var n=this;n.update_arrivals();n.update_expedition_positions()},set_expedition_position:function(){var t=this;n("["+this.attr_name()+"=fixed]",t.scope).each(function(){var i=n(this),f=i.data("magellan-expedition-init"),e=i.attr("styles"),u,r;i.attr("style","");u=i.offset().top+f.threshold;r=parseInt(i.data("magellan-fixed-top"));isNaN(r)||(t.settings.fixed_top=r);i.data(t.data_attr("magellan-top-offset"),u);i.attr("style",e)})},update_expedition_positions:function(){var i=this,r=n(t).scrollTop();n("["+this.attr_name()+"=fixed]",i.scope).each(function(){var t=n(this),f=t.data("magellan-expedition-init"),e=t.attr("style"),o=t.data("magellan-top-offset"),u;r+i.settings.fixed_top>=o?(u=t.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]"),u.length===0&&(u=t.clone(),u.removeAttr(i.attr_name()),u.attr(i.add_namespace("data-magellan-expedition-clone"),""),t.before(u)),t.css({position:"fixed",top:f.fixed_top}).addClass("fixed")):(t.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",e).css("position","").css("top","").removeClass("fixed"))})},update_arrivals:function(){var i=this,r=n(t).scrollTop();n("["+this.attr_name()+"]",i.scope).each(function(){var t=n(this),u=t.data(i.attr_name(!0)+"-init"),e=i.offsets(t,r),o=t.find("["+i.add_namespace("data-magellan-arrival")+"]"),f=!1;e.each(function(n,r){if(r.viewport_offset>=r.top_offset){var e=t.find("["+i.add_namespace("data-magellan-arrival")+"]");return e.not(r.arrival).removeClass(u.active_class),r.arrival.addClass(u.active_class),f=!0,!0}});f||o.removeClass(u.active_class)})},offsets:function(t,i){var r=this,u=t.data(r.attr_name(!0)+"-init"),f=i;return t.find("["+r.add_namespace("data-magellan-arrival")+"]").map(function(){var o=n(this).data(r.data_attr("magellan-arrival")),i=n("["+r.add_namespace("data-magellan-destination")+"="+o+"]"),e;if(i.length>0)return e=Math.floor(i.offset().top-u.destination_threshold-t.outerHeight()),{destination:i,arrival:n(this),top_offset:e,viewport_offset:f}}).sort(function(n,t){return n.top_offset<t.top_offset?-1:n.top_offset>t.top_offset?1:0})},data_attr:function(n){return this.namespace.length>0?this.namespace+"-"+n:n},off:function(){this.S(this.scope).off(".magellan");this.S(t).off(".magellan")},reflow:function(){var t=this;n("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(n){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.4.7",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(n,t,i){this.bindings(t,i)},events:function(){var t=this,i=this.S;i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(r){var e=i(this).closest("["+t.attr_name()+"]"),h=t.attr_name()+"="+e.attr(t.attr_name()),u=e.data(t.attr_name(!0)+"-init"),f=i("#"+this.href.split("#")[1]),o=n("> dd",e),s=o.children("."+u.content_class),c=s.filter("."+u.active_class);if(r.preventDefault(),e.attr(t.attr_name())&&(s=s.add("["+h+"] dd > ."+u.content_class),o=o.add("["+h+"] dd")),u.toggleable&&f.is(c)){f.parent("dd").toggleClass(u.active_class,!1);f.toggleClass(u.active_class,!1);u.callback(f);f.triggerHandler("toggled",[e]);e.triggerHandler("toggled",[f]);return}u.multi_expand||(s.removeClass(u.active_class),o.removeClass(u.active_class));f.addClass(u.active_class).parent().addClass(u.active_class);u.callback(f);f.triggerHandler("toggled",[e]);e.triggerHandler("toggled",[f])})},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(n,t,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.4.7",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(t,i,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var u=this;u.register_media("topbar","foundation-mq-topbar");this.bindings(i,r);u.S("["+this.attr_name()+"]",this.scope).each(function(){var t=n(this),r=t.data(u.attr_name(!0)+"-init"),f=u.S("section, .top-bar-section",this),i;t.data("index",0);i=t.parent();i.hasClass("fixed")||u.is_sticky(t,i,r)?(u.settings.sticky_class=r.sticky_class,u.settings.sticky_topbar=t,t.data("height",i.outerHeight()),t.data("stickyoffset",i.offset().top)):t.data("height",t.outerHeight());r.assembled||u.assemble(t);r.is_hover?u.S(".has-dropdown",t).addClass("not-click"):u.S(".has-dropdown",t).removeClass("not-click");u.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }");i.hasClass("fixed")&&u.S("body").addClass("f-topbar-fixed")})},is_sticky:function(n,t,i){var r=t.hasClass(i.sticky_class);return r&&i.sticky_on==="all"?!0:r&&this.small()&&i.sticky_on==="small"?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.medium()&&i.sticky_on==="medium"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.large()&&i.sticky_on==="large"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(i){var u=this,r,e,f;r=i?u.S(i).closest("["+this.attr_name()+"]"):u.S("["+this.attr_name()+"]");e=r.data(this.attr_name(!0)+"-init");f=u.S("section, .top-bar-section",r);u.breakpoint()&&(u.rtl?(f.css({right:"0%"}),n(">.name",f).css({right:"100%"})):(f.css({left:"0%"}),n(">.name",f).css({left:"100%"})),u.S("li.moved",f).removeClass("moved"),r.data("index",0),r.toggleClass("expanded").css("height",""));e.scrolltop?r.hasClass("expanded")?r.parent().hasClass("fixed")&&(e.scrolltop?(r.parent().removeClass("fixed"),r.addClass("fixed"),u.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):r.parent().removeClass("expanded")):r.hasClass("fixed")&&(r.parent().addClass("fixed"),r.removeClass("fixed"),u.S("body").addClass("f-topbar-fixed")):(u.is_sticky(r,r.parent(),e)&&r.parent().addClass("fixed"),r.parent().hasClass("fixed")&&(r.hasClass("expanded")?(r.addClass("fixed"),r.parent().addClass("expanded"),u.S("body").addClass("f-topbar-fixed")):(r.removeClass("fixed"),r.parent().removeClass("expanded"),u.update_sticky_positioning())))},timer:null,events:function(){var i=this,r=this.S;r(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(n){n.preventDefault();i.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var t=n(this).closest("li");!i.breakpoint()||t.hasClass("back")||t.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var u=r(this),f=r(t.target),e=u.closest("["+i.attr_name()+"]"),o=e.data(i.attr_name(!0)+"-init");if(f.data("revealId")){i.toggle();return}i.breakpoint()||(!o.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),u.hasClass("hover")?(u.removeClass("hover").find("li").removeClass("hover"),u.parents("li.hover").removeClass("hover")):(u.addClass("hover"),n(u).siblings().removeClass("hover"),f[0].nodeName==="A"&&f.parent().hasClass("has-dropdown")&&t.preventDefault()))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(n){if(i.breakpoint()){n.preventDefault();var u=r(this),t=u.closest("["+i.attr_name()+"]"),f=t.find("section, .top-bar-section"),o=u.next(".dropdown").outerHeight(),e=u.closest("li");t.data("index",t.data("index")+1);e.addClass("moved");i.rtl?(f.css({right:-(100*t.data("index"))+"%"}),f.find(">.name").css({right:100*t.data("index")+"%"})):(f.css({left:-(100*t.data("index"))+"%"}),f.find(">.name").css({left:100*t.data("index")+"%"}));t.css("height",u.siblings("ul").outerHeight(!0)+t.data("height"))}});r(t).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){r(this).trigger("resize.fndtn.topbar")});r("body").off(".topbar").on("click.fndtn.topbar",function(n){var t=r(n.target).closest("li").closest("li.hover");t.length>0||r("["+i.attr_name()+"] li.hover").removeClass("hover")});r(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(n){n.preventDefault();var f=r(this),t=f.closest("["+i.attr_name()+"]"),u=t.find("section, .top-bar-section"),s=t.data(i.attr_name(!0)+"-init"),e=f.closest("li.moved"),o=e.parent();t.data("index",t.data("index")-1);i.rtl?(u.css({right:-(100*t.data("index"))+"%"}),u.find(">.name").css({right:100*t.data("index")+"%"})):(u.css({left:-(100*t.data("index"))+"%"}),u.find(">.name").css({left:100*t.data("index")+"%"}));t.data("index")===0?t.css("height",""):t.css("height",o.outerHeight(!0)+t.data("height"));setTimeout(function(){e.removeClass("moved")},300)});r(this.scope).find(".dropdown a").focus(function(){n(this).parents(".has-dropdown").addClass("hover")}).blur(function(){n(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var n=this;n.S("["+this.attr_name()+"]").each(function(){var t=n.S(this),e=t.data(n.attr_name(!0)+"-init"),r=t.parent("."+n.settings.sticky_class),u,f;n.breakpoint()||(f=t.hasClass("expanded"),t.css("height","").removeClass("expanded").find("li").removeClass("hover"),f&&n.toggle(t));n.is_sticky(t,r,e)&&(r.hasClass("fixed")?(r.removeClass("fixed"),u=r.offset().top,n.S(i.body).hasClass("f-topbar-fixed")&&(u-=t.data("height")),t.data("stickyoffset",u),r.addClass("fixed")):(u=r.offset().top,t.data("stickyoffset",u)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var i=this,r=t.data(this.attr_name(!0)+"-init"),u=i.S("section, .top-bar-section",t);u.detach();i.S(".has-dropdown>a",u).each(function(){var t=i.S(this),f=t.siblings(".dropdown"),e=t.attr("href"),u;f.find(".title.back").length||(u=r.mobile_show_parent_link==!0&&e?n('<li class="title back js-generated"><h5><a href="javascript:void(0)"><\/a><\/h5><\/li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="'+e+'">'+t.html()+"<\/a><\/li>"):n('<li class="title back js-generated"><h5><a href="javascript:void(0)"><\/a><\/h5>'),r.custom_back_text==!0?n("h5>a",u).html(r.back_text):n("h5>a",u).html("&laquo; "+t.html()),f.prepend(u))});u.appendTo(t);this.sticky();this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),n.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var i=0,r=this;return n("> li",t).each(function(){i+=r.S(this).outerHeight(!0)}),i},sticky:function(){var n=this;this.S(t).on("scroll",function(){n.update_sticky_positioning()})},update_sticky_positioning:function(){var i="."+this.settings.sticky_class,u=this.S(t),n=this,r;n.settings.sticky_topbar&&n.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)&&(r=this.settings.sticky_topbar.data("stickyoffset"),n.S(i).hasClass("expanded")||(u.scrollTop()>r?n.S(i).hasClass("fixed")||(n.S(i).addClass("fixed"),n.S("body").addClass("f-topbar-fixed")):u.scrollTop()<=r&&n.S(i).hasClass("fixed")&&(n.S(i).removeClass("fixed"),n.S("body").removeClass("f-topbar-fixed"))))},off:function(){this.S(this.scope).off(".fndtn.topbar");this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(n,t,i,r){"use strict";Foundation.libs.tab={name:"tab",version:"5.4.7",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(n,t,i){var r=this,u=this.S;this.bindings(t,i);this.handle_location_hash_change();u("["+this.attr_name()+"] > .active > a",this.scope).each(function(){r.default_tab_hashes.push(this.hash)})},events:function(){var n=this,i=this.S,r=function(t){var r=i(this).closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init");(!r.is_hover||Modernizr.touch)&&(t.preventDefault(),t.stopPropagation(),n.toggle_active_tab(i(this).parent()))};i(this.scope).off(".tab").on("focus.fndtn.tab","["+this.attr_name()+"] > * > a",r).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",r).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var t=i(this).closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init");t.is_hover&&n.toggle_active_tab(i(this).parent())});i(t).on("hashchange.fndtn.tab",function(t){t.preventDefault();n.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,i=this.S;i("["+this.attr_name()+"]",this.scope).each(function(){var s=i(this).data(t.attr_name(!0)+"-init"),u,f,o,e;if(s.deep_linking)if(u=s.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),u!="")f=i(u),f.hasClass("content")&&f.parent().hasClass("tabs-content")?t.toggle_active_tab(n("["+t.attr_name()+"] > * > a[href="+u+"]").parent()):(o=f.closest(".content").attr("id"),o!=r&&t.toggle_active_tab(n("["+t.attr_name()+"] > * > a[href=#"+o+"]").parent(),u));else for(e=0;e<t.default_tab_hashes.length;e++)t.toggle_active_tab(n("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[e]+"]").parent())})},toggle_active_tab:function(u,f){var s=this.S,c=u.closest("["+this.attr_name()+"]"),l=u.find("a"),v=u.children("a").first(),e="#"+v.attr("href").split("#")[1],h=s(e),a=u.siblings(),o=c.data(this.attr_name(!0)+"-init"),y=function(t){var u=n(this),f=n(this).parents("li").prev().children('[role="tab"]'),e=n(this).parents("li").next().children('[role="tab"]'),r;switch(t.keyCode){case 37:r=f;break;case 39:r=e;break;default:r=!1}r.length&&(u.attr({tabindex:"-1","aria-selected":null}),r.attr({tabindex:"0","aria-selected":!0}).focus());n('[role="tabpanel"]').attr("aria-hidden","true");n("#"+n(i.activeElement).attr("href").substring(1)).attr("aria-hidden",null)};s(this).data(this.data_attr("tab-content"))&&(e="#"+s(this).data(this.data_attr("tab-content")).split("#")[1],h=s(e));o.deep_linking&&(o.scroll_to_content?(t.location.hash=f||e,f==r||f==e?u.parent()[0].scrollIntoView():s(e)[0].scrollIntoView()):t.location.hash=f!=r?"fndtn-"+f.replace("#",""):"fndtn-"+e.replace("#",""));u.addClass(o.active_class).triggerHandler("opened");l.attr({"aria-selected":"true",tabindex:0});a.removeClass(o.active_class);a.find("a").attr({"aria-selected":"false",tabindex:-1});h.siblings().removeClass(o.active_class).attr({"aria-hidden":"true",tabindex:-1});h.addClass(o.active_class).attr("aria-hidden","false").removeAttr("tabindex");o.callback(u);h.triggerHandler("toggled",[u]);c.triggerHandler("toggled",[h]);l.off("keydown").on("keydown",y)},data_attr:function(n){return this.namespace.length>0?this.namespace+"-"+n:n},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(n,t,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.4.7",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(n){var t=i.getElementById(n.getAttribute(this.add_namespace("data-equalto"))).value,r=n.value;return t===r}}},timer:null,init:function(n,t,i){this.bindings(t,i)},events:function(t){var i=this,r=i.S(t).attr("novalidate","novalidate"),u=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid");r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(n){var t=/ajax/i.test(i.S(this).attr(i.attr_name()));return i.validate(i.S(this).find("input, textarea, select").get(),n,t)}).on("reset",function(){return i.reset(n(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(n){i.validate([this],n)}).on("keydown.fndtn.abide",function(n){u.live_validate===!0&&(clearTimeout(i.timer),i.timer=setTimeout(function(){i.validate([this],n)}.bind(this),u.timeout))})},reset:function(t){t.removeAttr(this.invalid_attr);n(this.invalid_attr,t).removeAttr(this.invalid_attr);n("."+this.settings.error_class,t).not("small").removeClass(this.settings.error_class)},validate:function(n,t,i){for(var f=this.parse_patterns(n),o=f.length,u=this.S(n[0]).closest("form"),e=/submit/.test(t.type),r=0;r<o;r++)if(!f[r]&&(e||i))return this.settings.focus_on_invalid&&n[r].focus(),u.trigger("invalid"),this.S(n[r]).closest("form").attr(this.invalid_attr,""),!1;return((e||i)&&u.trigger("valid"),u.removeAttr(this.invalid_attr),i)?!1:!0},parse_patterns:function(n){for(var t=n.length,i=[];t--;)i.push(this.pattern(n[t]));return this.check_validation_and_apply_styles(i)},pattern:function(n){var r=n.getAttribute("type"),i=typeof n.getAttribute("required")=="string",t=n.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(t)&&t.length>0?[n,this.settings.patterns[t],i]:t.length>0?[n,new RegExp(t),i]:this.settings.patterns.hasOwnProperty(r)?[n,this.settings.patterns[r],i]:(t=/.*/,[n,t,i])},check_validation_and_apply_styles:function(t){for(var e=t.length,a=[],y=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]"),d=y.data(this.attr_name(!0)+"-init")||{},c,l;e--;){var i=t[e][0],u=t[e][2],p=i.value.trim(),s=this.S(i).parent(),h=i.getAttribute(this.add_namespace("data-abide-validator")),w=i.type==="radio",b=i.type==="checkbox",o=this.S('label[for="'+i.getAttribute("id")+'"]'),k=u?i.value.length>0:!0,r=[],f,v;i.getAttribute(this.add_namespace("data-equalto"))&&(h="equalTo");f=s.is("label")?s.parent():s;h&&(v=this.settings.validators[h].apply(this,[i,u,f]),r.push(v));w&&u?r.push(this.valid_radio(i,u)):b&&u?r.push(this.valid_checkbox(i,u)):(t[e][1].test(p)&&k||!u&&i.value.length<1||n(i).attr("disabled")?r.push(!0):r.push(!1),r=[r.every(function(n){return n})],r[0]?(this.S(i).removeAttr(this.invalid_attr),i.setAttribute("aria-invalid","false"),i.removeAttribute("aria-describedby"),f.removeClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),n(i).triggerHandler("valid")):(this.S(i).attr(this.invalid_attr,""),i.setAttribute("aria-invalid","true"),c=f.find("small."+this.settings.error_class,"span."+this.settings.error_class),l=c.length>0?c[0].id:"",l.length>0&&i.setAttribute("aria-describedby",l),f.addClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),n(i).triggerHandler("invalid")));a.push(r[0])}return[a.every(function(n){return n})]},valid_checkbox:function(n,t){var n=this.S(n),i=n.is(":checked")||!t;return i?n.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):n.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),i},valid_radio:function(n){for(var f=n.getAttribute("name"),i=this.S(n).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+f+"']"),u=i.length,r=!1,t=0;t<u;t++)i[t].checked&&(r=!0);for(t=0;t<u;t++)r?this.S(i[t]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):this.S(i[t]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class);return r},valid_equal:function(n,t,r){var f=i.getElementById(n.getAttribute(this.add_namespace("data-equalto"))).value,e=n.value,u=f===e;return u?(this.S(n).removeAttr(this.invalid_attr),r.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(n).attr(this.invalid_attr,""),r.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),u},valid_oneof:function(n,t,i,r){var n=this.S(n),f=this.S("["+this.add_namespace("data-oneof")+"]"),e=f.filter(":checked").length>0,u;return e?n.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):n.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),r||(u=this,f.each(function(){u.valid_oneof.call(u,this,null,null,!0)})),e}}}(jQuery,window,window.document),function(n,t){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.4.7",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(n,t){return'<span data-selector="'+n+'" id="'+n+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"><\/span><\/span>'}},cache:{},init:function(n,t,i){Foundation.inherit(this,"random_str");this.bindings(t,i)},should_show:function(t){var i=n.extend({},this.settings,this.data_options(t));return i.show_on==="all"?!0:this.small()&&i.show_on==="small"||this.medium()&&i.show_on==="medium"||this.large()&&i.show_on==="large"?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){var i=this,r=i.S;i.create(this.S(t));n(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var u=r(this),f=n.extend({},i.settings,i.data_options(u)),e=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&r(t.target).is("a")||/mouse/i.test(t.type)&&i.ie_touch(t))return!1;if(u.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),i.hide(u);else{if(f.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;!f.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),r(f.tooltip_class+".open").hide(),e=!0);/enter|over/i.test(t.type)?this.timer=setTimeout(function(){var n=i.showTip(u)}.bind(this),i.settings.hover_delay):t.type==="mouseout"||t.type==="mouseleave"?(clearTimeout(this.timer),i.hide(u)):i.showTip(u)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){if(/mouse/i.test(t.type)&&i.ie_touch(t))return!1;(n(this).data("tooltip-open-event-type")!="touch"||t.type!="mouseleave")&&(n(this).data("tooltip-open-event-type")=="mouse"&&/MSPointerDown|touchstart/i.test(t.type)?i.convert_to_touch(n(this)):i.hide(n(this)))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){i.hide(r(this))})},ie_touch:function(){return!1},showTip:function(n){var t=this.getTip(n);if(this.should_show(n,t))return this.show(n)},getTip:function(t){var r=this.selector(t),u=n.extend({},this.settings,this.data_options(t)),i=null;return r&&(i=this.S('span[data-selector="'+r+'"]'+u.tooltip_class)),typeof i=="object"?i:!1},selector:function(n){var t=n.attr("id"),i=n.attr(this.attr_name())||n.attr("data-selector");return(t&&t.length<1||!t)&&typeof i!="string"&&(i=this.random_str(6),n.attr("data-selector",i).attr("aria-describedby",i)),t&&t.length>0?t:i},create:function(i){var o=this,r=n.extend({},this.settings,this.data_options(i)),f=this.settings.tip_template,u,e;if(typeof r.tip_template=="string"&&t.hasOwnProperty(r.tip_template)&&(f=t[r.tip_template]),u=n(f(this.selector(i),n("<div><\/div>").html(i.attr("title")).html())),e=this.inheritable_classes(i),u.addClass(e).appendTo(r.append_to),Modernizr.touch){u.append('<span class="tap-to-close">'+r.touch_close_text+"<\/span>");u.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){o.hide(i)})}i.removeAttr("title").attr("title","")},reposition:function(t,i,r){var s,u,e,h,f,o;i.css("visibility","hidden").show();s=t.data("width");u=i.children(".nub");e=u.outerHeight();h=u.outerHeight();this.small()?i.css({width:"100%"}):i.css({width:s?s:"auto"});f=function(n,t,i,r,u){return n.css({top:t?t:"auto",bottom:r?r:"auto",left:u?u:"auto",right:i?i:"auto"}).end()};f(i,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left);this.small()?(f(i,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,n(this.scope).width()),i.addClass("tip-override"),f(u,-e,"auto","auto",t.offset().left)):(o=t.offset().left,Foundation.rtl&&(u.addClass("rtl"),o=t.offset().left+t.outerWidth()-i.outerWidth()),f(i,t.offset().top+t.outerHeight()+10,"auto","auto",o),i.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?(Foundation.rtl&&u.addClass("rtl"),f(i,t.offset().top-i.outerHeight(),"auto","auto",o).removeClass("tip-override")):r&&r.indexOf("tip-left")>-1?(f(i,t.offset().top+t.outerHeight()/2-i.outerHeight()/2,"auto","auto",t.offset().left-i.outerWidth()-e).removeClass("tip-override"),u.removeClass("rtl")):r&&r.indexOf("tip-right")>-1&&(f(i,t.offset().top+t.outerHeight()/2-i.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+e).removeClass("tip-override"),u.removeClass("rtl")));i.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var r=n.extend({},this.settings,this.data_options(t)),u=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(r.additional_inheritable_classes),i=t.attr("class"),f=i?n.map(i.split(" "),function(t){if(n.inArray(t,u)!==-1)return t}).join(" "):"";return n.trim(f)},convert_to_touch:function(t){var i=this,r=i.getTip(t),u=n.extend({},i.settings,i.data_options(t));if(r.find(".tap-to-close").length===0){r.append('<span class="tap-to-close">'+u.touch_close_text+"<\/span>");r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){i.hide(t)})}t.data("tooltip-open-event-type","touch")},show:function(n){var t=this.getTip(n);n.data("tooltip-open-event-type")=="touch"&&this.convert_to_touch(n);this.reposition(n,t,n.attr("class"));n.addClass("open");t.fadeIn(150)},hide:function(n){var t=this.getTip(n);t.fadeOut(150,function(){t.find(".tap-to-close").remove();t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose");n.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip");this.S(this.settings.tooltip_class).each(function(i){n("["+t.attr_name()+"]").eq(i).attr("title",n(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);;
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tooltip = {
    name : 'tooltip',

    version : '5.4.7',

    settings : {
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      append_to: 'body',
      touch_close_text: 'Tap To Close',
      disable_for_touch: false,
      hover_delay: 200,
      show_on : 'all',
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';
      }
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'random_str');
      this.bindings(method, options);
    },

    should_show: function (target, tip) {
      var settings = $.extend({}, this.settings, this.data_options(target));

      if (settings.show_on === 'all') {
        return true;
      } else if (this.small() && settings.show_on === 'small') {
        return true;
      } else if (this.medium() && settings.show_on === 'medium') {
        return true;
      } else if (this.large() && settings.show_on === 'large') {
        return true;
      }
      return false;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    events : function (instance) {
      var self = this,
          S = self.S;

      self.create(this.S(instance));

      $(this.scope)
        .off('.tooltip')
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
          '[' + this.attr_name() + ']', function (e) {
          var $this = S(this),
              settings = $.extend({}, self.settings, self.data_options($this)),
              is_touch = false;

          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {
            return false;
          }

          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;

          if ($this.hasClass('open')) {
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) e.preventDefault();
            self.hide($this);
          } else {
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              return;
            } else if(!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
              S(settings.tooltip_class + '.open').hide();
              is_touch = true;
            }

            if (/enter|over/i.test(e.type)) {
              this.timer = setTimeout(function () {
                var tip = self.showTip($this);
              }.bind(this), self.settings.hover_delay);
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
              clearTimeout(this.timer);
              self.hide($this);
            } else {
              self.showTip($this);
            }
          }
        })
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;

          if($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {
            return;
          }
          else if($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {
            self.convert_to_touch($(this));
          } else {
            self.hide($(this));
          }
        })
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {
          self.hide(S(this));
        });
    },

    ie_touch : function (e) {
      // How do I distinguish between IE11 and Windows Phone 8?????
      return false;
    },

    showTip : function ($target) {
      var $tip = this.getTip($target);
      if (this.should_show($target, $tip)){
        return this.show($target);
      }
      return;
    },

    getTip : function ($target) {
      var selector = this.selector($target),
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip = null;

      if (selector) {
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);
      }

      return (typeof tip === 'object') ? tip : false;
    },

    selector : function ($target) {
      var id = $target.attr('id'),
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');

      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
        dataSelector = this.random_str(6);
        $target
          .attr('data-selector', dataSelector)
          .attr('aria-describedby', dataSelector);
      }

      return (id && id.length > 0) ? id : dataSelector;
    },

    create : function ($target) {
      var self = this,
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip_template = this.settings.tip_template;

      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {
        tip_template = window[settings.tip_template];
      }

      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),
          classes = this.inheritable_classes($target);

      $tip.addClass(classes).appendTo(settings.append_to);

      if (Modernizr.touch) {
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function(e) {
          self.hide($target);
        });
      }

      $target.removeAttr('title').attr('title','');
    },

    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, column, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerHeight();

      if (this.small()) {
        tip.css({'width' : '100%' });
      } else {
        tip.css({'width' : (width) ? width : 'auto'});
      }

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : (top) ? top : 'auto',
          'bottom' : (bottom) ? bottom : 'auto',
          'left' : (left) ? left : 'auto',
          'right' : (right) ? right : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);

      if (this.small()) {
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());
        tip.addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        var left = target.offset().left;
        if (Foundation.rtl) {
          nub.addClass('rtl');
          left = target.offset().left + target.outerWidth() - tip.outerWidth();
        }
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);
        tip.removeClass('tip-override');
        if (classes && classes.indexOf('tip-top') > -1) {
          if (Foundation.rtl) nub.addClass('rtl');
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        } else if (classes && classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        }
      }

      tip.css('visibility', 'visible').hide();
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    inheritable_classes : function ($target) {
      var settings = $.extend({}, this.settings, this.data_options($target)),
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ') : '';

      return $.trim(filtered);
    },

    convert_to_touch : function($target) {
      var self = this,
          $tip = self.getTip($target),
          settings = $.extend({}, self.settings, self.data_options($target));

      if ($tip.find('.tap-to-close').length === 0) {
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function(e) {
          self.hide($target);
        });
      }

      $target.data('tooltip-open-event-type', 'touch');
    },

    show : function ($target) {
      var $tip = this.getTip($target);

      if ($target.data('tooltip-open-event-type') == 'touch') {
        this.convert_to_touch($target);
      }

      this.reposition($target, $tip, $target.attr('class'));
      $target.addClass('open');
      $tip.fadeIn(150);
    },

    hide : function ($target) {
      var $tip = this.getTip($target);

      $tip.fadeOut(150, function() {
        $tip.find('.tap-to-close').remove();
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');
        $target.removeClass('open');
      });
    },

    off : function () {
      var self = this;
      this.S(this.scope).off('.fndtn.tooltip');
      this.S(this.settings.tooltip_class).each(function (i) {
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());
      }).remove();
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;
$(document).ready(function () {

    $("#ProductGrid").load("/AjaxPages/ProductSearch.aspx");

    $('input[type=checkbox]').click(function () {
        var filterchecked = "";
        $("input:checked").each(function () {
            filterchecked += $(this).siblings("h6").text() + ";";
        });
        filterchecked = filterchecked.substr(0, filterchecked.length - 1);
        $("#ProductGrid").load("/AjaxPages/ProductSearch.aspx?filter=" + filterchecked);
    });

    $('.buttonViewMore').click(function () {
        $("#ProductGrid").load("/AjaxPages/ProductSearch.aspx?viewMore=3");
    });
    
    function OnSearch(input) {
        $("#ProductGrid").load("/AjaxPages/ProductSearch.aspx?search=" + input.value);
    }

    $("select").change(function () {
        var sort = $("select option:selected").text();
        $("#ProductGrid").load("/AjaxPages/ProductSearch.aspx?sort=" + sort);
    })
  .trigger("change");
});
/*
SAMPLE CODE NOTICE

THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED, 
OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.  
THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.  
NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
*/

// Proxy to make ajax calls.
// relativeUrl - the service relative location of the service example: "/Services/ShoppingCartService.svc/".
// methodName - the method in the service that will be invoked.
// data - the input to the method in json format.
// successCallBack - the function that will be invoked if request is successful.
// failureCallBack - the function that will be invoked if request fails.
function ajaxProxy(relativeUrl, methodName, data, successCallBack, failureCallBack) {
    var webServiceUrl = window.location.protocol + "//" + window.location.host + relativeUrl + methodName;

    $.ajax({
        url: webServiceUrl,
        data: JSON.stringify(data),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            successCallBack(data);
        },
        error: function (error) {
            failureCallBack(error);
        }
    });
};
// Jquery plugin to add a view more button to truncate and expand the display of a long paragraph of text.
(function ($) {
    'use strict';

    $.fn.viewMoreLink = function (showChar, buffer, moreLabel, lessLabel) {
        if (showChar == undefined || isNaN(showChar) || showChar < 0) {
            showChar = 400;
        }
        if (buffer == undefined || isNaN(buffer) || buffer < 0) {
            buffer = showChar * 0.2;
        }
        var breakPoint = showChar + buffer;
        if (moreLabel == undefined || moreLabel.trim() == "") {
            moreLabel = "Read&nbsp;More";
        }
        if (lessLabel == undefined || lessLabel.trim() == "") {
            lessLabel = "Show&nbsp;Less";
        }
        var ellipsesSymbol = "...";
        var breakCharacter = " ";

        $(this).each(function () {
            var content = $(this).html().trim();

            if (content.length > breakPoint) {
                var characterToBreakAt = content.indexOf(breakCharacter, showChar);
                if (characterToBreakAt < 0) {
                    characterToBreakAt = showChar;
                }
                var beginning = content.substr(0, characterToBreakAt);
                var ending = content.substr(beginning.length, content.length - beginning.length);

                var html = beginning + '<span class="moreellipses">' + ellipsesSymbol + '</span><span class="morecontent"><span>' + ending + '</span> <a href="" class="morelink">' + moreLabel + '</a></span>';

                $(this).html(html);
            }
        });

        $(".morelink").click(function () {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moreLabel);
            }
            else {
                $(this).addClass("less");
                $(this).html(lessLabel);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });
        return this;
    };
}(jQuery));;
/*
SAMPLE CODE NOTICE

THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED, 
OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.  
THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.  
NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
*/

var shoppingCartServiceRelativeUrl = "/Services/ShoppingCartService.svc/";
var methodName;
var data;

// Add the given item to the shopping cart.
// listings - The items to be added to cart.
// successCallBack - The function that is triggered when ajax call is successful.
// errorCallBack - The function that is triggered when ajax call fails.
function addItemsToCart(listings, successCallBack, errorCallBack) {
    methodName = "AddItems";
    data = {
        "isCheckoutSession": false,
        "listings": listings,
        "dataLevel": 0
    };

    ajaxProxy(shoppingCartServiceRelativeUrl, methodName, data, successCallBack, errorCallBack);
}

// Gets shopping cart.
// isCheckoutSession - Indicates whether the request originated from the checkout page.
// dataLevel - Represents the data level of the cart entity that is required by the caller.
// successCallBack - The function that is triggered when ajax call is successful.
// errorCallBack - The function that is triggered when ajax call fails.
function getShoppingCart(isCheckoutSession, dataLevel, successCallBack, errorCallBack) {
    methodName = "GetShoppingCart";
    data = {
        "isCheckoutSession": isCheckoutSession,
        "dataLevel": dataLevel
    };

    ajaxProxy(shoppingCartServiceRelativeUrl, methodName, data, successCallBack, errorCallBack);
}

// Removes items from the shopping cart.
// isCheckoutSession - Indicates whether the request originated from the checkout page.
// lineIds - The item line identifiers to be removed from the shopping cart.
// dataLevel - Represents the data level of the cart entity that is required by the caller.
// successCallBack - The function that is triggered when ajax call is successful.
// errorCallBack - The function that is triggered when ajax call fails.
function removeItemsFromCart(isCheckoutSession, lineIds, dataLevel, successCallBack, errorCallBack) {
    methodName = "RemoveItems";
    data = {
        "isCheckoutSession": isCheckoutSession,
        "lineIds": lineIds,
        "dataLevel": dataLevel
    };

    ajaxProxy(shoppingCartServiceRelativeUrl, methodName, data, successCallBack, errorCallBack);
}

// Updates items in the shopping cart.
// isCheckoutSession - Indicates whether the request originated from the checkout page.
// items - The items to be updated.
// dataLevel - Represents the data level of the cart entity that is required by the caller.
// successCallBack - The function that is triggered when ajax call is successful.
// errorCallBack - The function that is triggered when ajax call fails.
function updateItemsInCart(isCheckoutSession, items, dataLevel, successCallBack, errorCallBack) {
    methodName = "UpdateItems";
    data = {
        "isCheckoutSession": isCheckoutSession,
        "items": items,
        "dataLevel": dataLevel
    };

    ajaxProxy(shoppingCartServiceRelativeUrl, methodName, data, successCallBack, errorCallBack);
}

// Gets promotions
function GetPromotions(isCheckoutSession, dataLevel, successCallBack, errorCallBack) {
    methodName = "GetPromotions";
    data = {
        "isCheckoutSession": isCheckoutSession,
        "dataLevel": dataLevel
    };

    ajaxProxy(shoppingCartServiceRelativeUrl, methodName, data, successCallBack, errorCallBack);
};
/*!
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,i,r,u){return jQuery.easing[jQuery.easing.def](n,t,i,r,u)},easeInQuad:function(n,t,i,r,u){return r*(t/=u)*t+i},easeOutQuad:function(n,t,i,r,u){return-r*(t/=u)*(t-2)+i},easeInOutQuad:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t+i:-r/2*(--t*(t-2)-1)+i},easeInCubic:function(n,t,i,r,u){return r*(t/=u)*t*t+i},easeOutCubic:function(n,t,i,r,u){return r*((t=t/u-1)*t*t+1)+i},easeInOutCubic:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t+i:r/2*((t-=2)*t*t+2)+i},easeInQuart:function(n,t,i,r,u){return r*(t/=u)*t*t*t+i},easeOutQuart:function(n,t,i,r,u){return-r*((t=t/u-1)*t*t*t-1)+i},easeInOutQuart:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t+i:-r/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(n,t,i,r,u){return r*(t/=u)*t*t*t*t+i},easeOutQuint:function(n,t,i,r,u){return r*((t=t/u-1)*t*t*t*t+1)+i},easeInOutQuint:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t*t+i:r/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(n,t,i,r,u){return-r*Math.cos(t/u*(Math.PI/2))+r+i},easeOutSine:function(n,t,i,r,u){return r*Math.sin(t/u*(Math.PI/2))+i},easeInOutSine:function(n,t,i,r,u){return-r/2*(Math.cos(Math.PI*t/u)-1)+i},easeInExpo:function(n,t,i,r,u){return t==0?i:r*Math.pow(2,10*(t/u-1))+i},easeOutExpo:function(n,t,i,r,u){return t==u?i+r:r*(-Math.pow(2,-10*t/u)+1)+i},easeInOutExpo:function(n,t,i,r,u){return t==0?i:t==u?i+r:(t/=u/2)<1?r/2*Math.pow(2,10*(t-1))+i:r/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(n,t,i,r,u){return-r*(Math.sqrt(1-(t/=u)*t)-1)+i},easeOutCirc:function(n,t,i,r,u){return r*Math.sqrt(1-(t=t/u-1)*t)+i},easeInOutCirc:function(n,t,i,r,u){return(t/=u/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+i:r/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return t==0?i:(t/=u)==1?i+r:(f||(f=u*.3),e<Math.abs(r)?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),-(e*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f))+i)},easeOutElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return t==0?i:(t/=u)==1?i+r:(f||(f=u*.3),e<Math.abs(r)?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),e*Math.pow(2,-10*t)*Math.sin((t*u-o)*2*Math.PI/f)+r+i)},easeInOutElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return t==0?i:(t/=u/2)==2?i+r:(f||(f=u*.3*1.5),e<Math.abs(r)?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),t<1)?-.5*e*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f)+i:e*Math.pow(2,-10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f)*.5+r+i},easeInBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*(t/=u)*t*((f+1)*t-f)+i},easeOutBack:function(n,t,i,r,u,f){return f==undefined&&(f=1.70158),r*((t=t/u-1)*t*((f+1)*t+f)+1)+i},easeInOutBack:function(n,t,i,r,u,f){return(f==undefined&&(f=1.70158),(t/=u/2)<1)?r/2*t*t*(((f*=1.525)+1)*t-f)+i:r/2*((t-=2)*t*(((f*=1.525)+1)*t+f)+2)+i},easeInBounce:function(n,t,i,r,u){return r-jQuery.easing.easeOutBounce(n,u-t,0,r,u)+i},easeOutBounce:function(n,t,i,r,u){return(t/=u)<1/2.75?r*7.5625*t*t+i:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+i:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+i:r*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(n,t,i,r,u){return t<u/2?jQuery.easing.easeInBounce(n,t*2,0,r,u)*.5+i:jQuery.easing.easeOutBounce(n,t*2-u,0,r,u)*.5+r*.5+i}});;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(n){function r(t){var i=t||window.event,e=[].slice.call(arguments,1),r=0,f=0,u=0;return t=n.event.fix(i),t.type="mousewheel",i.wheelDelta&&(r=i.wheelDelta/120),i.detail&&(r=-i.detail/3),u=r,i.axis!==undefined&&i.axis===i.HORIZONTAL_AXIS&&(u=0,f=-1*r),i.wheelDeltaY!==undefined&&(u=i.wheelDeltaY/120),i.wheelDeltaX!==undefined&&(f=i.wheelDeltaX/-120),e.unshift(t,r,f,u),(n.event.dispatch||n.event.handle).apply(this,e)}var t=["DOMMouseScroll","mousewheel"],i;if(n.event.fixHooks)for(i=t.length;i;)n.event.fixHooks[t[--i]]=n.event.mouseHooks;n.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var n=t.length;n;)this.addEventListener(t[--n],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var n=t.length;n;)this.removeEventListener(t[--n],r,!1);else this.onmousewheel=null}};n.fn.extend({mousewheel:function(n){return n?this.bind("mousewheel",n):this.trigger("mousewheel")},unmousewheel:function(n){return this.unbind("mousewheel",n)}})})(jQuery);;
$(function(){
  var toggles = $('.toggle a'),
      codes = $('.code');
  
  toggles.on("click", function(event){
    event.preventDefault();
    var $this = $(this);
    
    if (!$this.hasClass("active")) {
      toggles.removeClass("active");
      $this.addClass("active");
      codes.hide().filter(this.hash).show();
    }
  });
  toggles.first().click();
});;
; (function ($, window, document, undefined) {

    var pluginName = 'responsiveImage',
        interchangeFormats = {
            'scene7': { template: '[{{src}}, ({{scenario}})]', height: '&hei={{height}}', width: '&wid={{width}}' },
            'sitecore': { template: '[{{src}}?as=1{{options}}, ({{scenario}})]', height: '&mh={{height}}', width: '&mw={{width}}' }
        },
        defaultMultipliers = { default: { width: 1, height: 1 }, small: { width: 0.5, height: 0.5 } },
        defaults = {
            pixelDensities: [1],
            format: 'scene7'
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, defaults, options, this.$element.data());

        if (!this.options.src) {
            console.warn("data-src attribute required by responsive image.");
            return;
        }

        if (!this.options.responsiveHeight && !this.options.responsiveWidth) {
            console.warn("data-responsive-height or data-responsive-width required by responsive image.");
            return;
        }

        // Make it easier to index the option with this.options[dimesion]
        this.options.height = this.options.responsiveHeight;
        this.options.width = this.options.responsiveWidth;

        // Remove any querystring parameters from image urlvar preset = this.options.src.split('$')[1];
        var preset = this.options.src.split('$')[1];
        this.options.src = this.options.src.split('?')[0];

        if (preset) {
            this.options.src = this.options.src + '?$' + preset + '$';
        }
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            rules = [];

        // Determine the widths and/or heights for each scenario (named media query in Foundation).
        var supportedScenarios = {};
        this.calculateScenarioDimensions(supportedScenarios, 'width');
        this.calculateScenarioDimensions(supportedScenarios, 'height');

        // Create rules for each scenario, eg medium or small-2x
        $.each(supportedScenarios, function (scenarioName, scenarioDimenions) {
            self.createRulesForScenario(scenarioName, scenarioDimenions, rules);
        });

        // Add Foundation Interchange attributes and wire the element up to Foundation.
        this.$element.attr('data-interchange', rules.join(','));
        this.$element.foundation();
        this.$element.foundation('interchange', 'reflow');
    };

    // Determines based on data attributes and plugin parameters which scenarios (named media queries) are being supported. 
    Plugin.prototype.calculateScenarioDimensions = function (supportedScenarios, dimensionName) {
        var dimensionOptions = this.options[dimensionName];

        // No attribute for this dimension, skip this. We only need one dimension to get images.
        if (!dimensionOptions) return;

        // If data attribute for width/height contains only a single number then generate responsive dimensions from default multipliers.
        if (!isNaN(parseFloat(dimensionOptions))) {
            var baseDimensionValue = dimensionOptions;

            $.each(defaultMultipliers, function (scenario) {
                var multiplier = this[dimensionName];
                supportedScenarios[scenario] = supportedScenarios[scenario] || {};
                supportedScenarios[scenario][dimensionName] = baseDimensionValue * multiplier;
            });

            return;
        }

        // If collection of width/heights are specified by the data attribute then take those values.
        if (typeof dimensionOptions === 'object') {
            $.each(dimensionOptions, function (scenario) {
                supportedScenarios[scenario] = supportedScenarios[scenario] || {};
                supportedScenarios[scenario][dimensionName] = dimensionOptions[scenario];
            });
        }
    }

    // Create a new rule for the data-interchange attribute
    Plugin.prototype.createRulesForScenario = function (scenario, scenarioDimensionValues, rules) {

        var self = this,
            ruleFormat = this.getRuleFormat(),
            ruleTokens = {
                src: this.options.src,
                options: '',
                scenario: scenario
            };

        // For each supported pixel density create Interchange rule
        $.each(this.options.pixelDensities, function (index, pixelDensity) {
            var rule = ruleFormat.template;

            ruleTokens.options = '';

            // Parse dimension options like height and width
            $.each(scenarioDimensionValues, function (dimension, pixels) {
                var template = ruleFormat[dimension];
                ruleTokens.options += self.replaceToken(template, dimension, Math.round(pixels * pixelDensity));
            });

            // Create rule
            $.each(ruleTokens, function (token, tokenValue) {
                if (token === "scenario" && pixelDensity > 1) {
                    tokenValue += '-' + pixelDensity + 'x';
                }
                rule = self.replaceToken(rule, token, tokenValue);
            });

            rules.push(rule);
        });
    }

    Plugin.prototype.getRuleFormat = function () {
        return interchangeFormats[this.options.format];
    }

    Plugin.prototype.replaceToken = function (template, token, replacement) {
        return template.replace('{{' + token + '}}', replacement);
    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

    // Auto-wire
    $('img[data-src]').responsiveImage();

})(jQuery, window, document);;
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"",nextText:"",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);;
var triggermail_email_address;

function adjust_pip(dropdown, target) {
    var sheet = Foundation.stylesheet,
        dpdnID = dropdown.attr("id"),
        sel_before = '#' + dpdnID + ':before';
    loopRules = function () {
        var out = true,
            css;
        $.each(sheet.cssRules, function (i, v) {
            css = v.cssText;
            if (css.search(dpdnID) > -1)
                out = false;
        });
        return out;
    },
      ins = loopRules();

    if (ins) {
        var sel_after = '#' + dpdnID + ':after',
            pip_offset_base = target.find("a").position().left - dropdown.position().left + 5,
            css_before = 'left: ' + pip_offset_base + 'px;',
            css_after = 'left: ' + (pip_offset_base - 1) + 'px;',
            rule_idx = sheet.cssRules.length;
        if (sheet.insertRule) {
            sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), rule_idx);
            sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), rule_idx + 1);
        } else {
            sheet.addRule(sel_before, css_before, rule_idx);
            sheet.addRule(sel_after, css_after, rule_idx + 1);
        }
    }
}

function dpdnClose(e) {
    var $elem = $(e.currentTarget).find("[id*=mega-menu]");
    $elem.removeClass("open");
}

function dpdnOpen(e) {
    var noPxVal = function (str) {
        return (typeof str !== 'undefined' ? parseFloat(str.replace(/px/, ''), 10) : 0);
    },
      $elem = $(e.currentTarget).find("[id*=mega-menu]"),
      isSmall = matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches,
      $menuContainer = $elem.closest('.left.mainMenuContent'),
      $menuContWidth = $menuContainer.width(),
      contStyles = typeof $elem.attr("style") !== 'undefined' ? $elem.attr("style") : '';

    $elem.addClass("open");

    if (contStyles.search(/top/) < 0) {
        var top = noPxVal($menuContainer.css("height")) - noPxVal($menuContainer.css("border-top-width")) - noPxVal($menuContainer.css("border-bottom-width"));
        $elem.css("top", top + "px");
    }

    if (!isSmall && !$elem.hasClass('large')) return;
    var $columns = $elem.find('.columns'),
        width = 0,
        maxWidth = $menuContWidth / $columns.length;

    $columns.each(function () {
        width += parseInt($(this).css('min-width'));
        $(this).css('max-width', maxWidth);
    });

    $elem.css('width', width);

    // We have to apply this a second time for IE/Firefox since they render the columns different widths than the min-width
    width = 0;
    $columns.each(function () {
        width += parseInt($(this).outerWidth());
    });

    $elem.css('width', width);

    // Right align menu if it would overflow the menu width, to prevent clipping
    var dropdownRightPosition = $elem.offset().left + $elem.outerWidth(),
      menuContainerRightPosition = $menuContainer.offset().left + $menuContainer.width();
    if (dropdownRightPosition < menuContainerRightPosition) return;
    $elem.closest('li').css('position', 'static');
    $elem
      .css('left', 'auto')
      .css('right', 0);
    adjust_pip($elem, $elem.closest('li'));
}

function mobileThumbZoom() {
    var isMobile = matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
    if (isMobile) {
        $("#carousel-3").css({ "height": "0", "margin": "0", "overflow": "hidden" });
        $(".flex-direction-nav li a")
            .off("click touch touchstart touchend")
            .on("click", function () {
                var curIndex = $("#slider-3 .slides li").index($("#slider-3 .slides li.flex-active-slide")),
                    newIndex = $(this).hasClass("flex-prev") ? curIndex - 1 : curIndex + 1;

                $("#carousel-3 ul li").eq(newIndex).trigger("click")/*.addClass("flex-active-slide")*/;
            });
    }
}

// Remove "href" values from href attributes
function removePoundsFromHrefs() {
    $("a[href=#]").attr("href", "javascript:void(0)");
}

function tooltipInit(settings) {

    var defSettings = {
        selector: '.has-tip',
        additional_inheritable_classes: [],
        tooltip_class: '.tooltip',
        touch_close_text: 'tap to close',
        disable_for_touch: false,
        template_title: 'Tooltip Title'
    },
    newSettings = $.extend(defSettings, settings);

    $(newSettings.selector).each(function () {
        $(this).attr("data-tooltip", '');
        if ($(this).text() === '' && typeof newSettings.anchor_text !== 'undefined')
            $(this).text(newSettings.anchor_text);
    });

    $(document).foundation({
        tooltip: {
            selector: newSettings.selector,
            additional_inheritable_classes: newSettings.additional_inheritable_classes,
            tooltip_class: newSettings.tooltip_class,
            touch_close_text: newSettings.touch_close_text,
            disable_for_touch: newSettings.disable_for_touch,
            tip_template: function (selector, content) {
                var newContent = typeof content === 'undefined' || content === '' ? newSettings.template_content : content;
                return '<span data-selector="' + selector + '" class="'
                + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
                + ' addContactInformation"><h6>' + newSettings.template_title + '</h6>' + newContent + '<span class="nub"></span><a href="#close" class="joyride-close-tip">x</a></span>';
            }
        }
    });
}

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.0";

    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

MP.UrlLang = 'mp_js_current_lang';
MP.SrcUrl = decodeURIComponent('mp_js_orgin_url');
MP.oSite = decodeURIComponent('mp_js_origin_baseUrl');
MP.tSite = decodeURIComponent('mp_js_translated_baseUrl');
MP.init();

$(document).ready(function () {
    //fix to close reveal modal to zurb fundation 5.4.7 on ipad
    $("body").on("touchend", ".reveal-modal-bg", function () {
        var bgclick= "yes";
       $(".reveal-modal.open .close-reveal-modal").trigger("click", bgclick);
    });

    // ipad fix menu hover dropdown
    $(".left.mainMenuContent .has-dropdown ul").removeClass("hideflyoutmenu"); //show dropdown

    if (Modernizr.touch) {
           $(".left.mainMenuContent .has-dropdown > a").on("mouseover", function (e) {
               if (matchMedia(Foundation.media_queries['medium']).matches) {
                   e.stopPropagation();
               }
           });

           $(".left.mainMenuContent .has-dropdown").on("mouseover", function (e) {
               if (matchMedia(Foundation.media_queries['medium']).matches) {
                   $(".left.mainMenuContent .has-dropdown > ul").removeClass("hideflyoutmenu"); //show dropdown
               }
           });

           $(".left.mainMenuContent .has-dropdown > a").on("touchstart", function (e) {
               if (matchMedia(Foundation.media_queries['medium']).matches) {
                   $(".left.mainMenuContent .has-dropdown > ul").addClass("hideflyoutmenu"); // hide dropdown
               }
           });
    }

    // Checart Page: 
    //--Billing
    var billingAgre = $('#IsOkToTextCheckBox').parent();
    billingAgre.css('clear', 'both');

    //--Update ZipCode pop up
    $('.msax-ZipCode #toPopup > div.close').addClass('close-reveal-modal');
    $('.msax-ZipCode  #toPopup > div.close').text('x');
    $('.msax-ZipCode  #toPopup > div.close').removeClass('close');
    $('.ecs_tooltip').css('display', 'none');
    $('.msax-UpdateZipCode li button').addClass('button tiny');
    $('.msax-ZipCode  #toPopup > div.close-reveal-modal').css('', '');
    $('.msax-ZipCode  #toPopup > div.close-reveal-modal').on('click touchend', function () {
        $('.msax-ZipCode #toPopup ').css('display', '').css('margin-left', '');

        // Set popupStatus to false so that knockout knows the popup has been closed.
        ko.dataFor($('.msax-ZipCode')[0]).popupStatus = false;
    });

    //--Hide CommentsImg if not has content.
    var emptyTest = $('.tout .imgComent').is(':empty');
    if (emptyTest == true) {
        $('.tout .imgComent ').css("display", "none");
    }
    //--HTML Block
    var htmlToutBlock = $('div.htmlBlock').parent();
    htmlToutBlock.addClass('htmlToutBlock');
    //--Split Block

    var splitToutBlock = $('div.toutheight-short').parent();
    splitToutBlock.addClass('splitToutBlock');
    //

    //Social Bar for Mobile
    var style = $('#drop1').css('display');
    if (style == 'none') {
        $('.columnSocialBar').css("border", "none");
        $(' .columnSocialBar').css("background", "none");
        $(' .columnSocialBar').css("box-shadow", "none");
    }

    $('#share').click(function () {
        $('#drop1').toggle();
        var style = $('#drop1').css('display');
        if (style == 'none') {
            $(' .columnSocialBar').css("border", "none");
            $('.columnSocialBar').css("background", "none");
            $(' .columnSocialBar').css("box-shadow", "none");
        } else {
            $(' .columnSocialBar').css("border", "1px solid #dddddd");
            $(' .columnSocialBar').css("background", "white");
            $('.columnSocialBar').css("box-shadow", "0 5px 0.625em rgba(0, 0, 0, 0.2)");
        }
    });

    $(".arrowBlueSub.openArrow").on('click touchend', function () {
        $(this).css("display", "none");
        $(this).parent().find(".closeArrow").css("display", "inline");
        $(this).closest("dd").find("div.content").hide();
        // $(this).closest("dd").find("div.content").css("height", "25px");
        $(this).closest("dd").find("div.content").css("padding", "0");
        return false;
    });

    $(".arrowBlueSub.closeArrow").on('click touchend', function () {
        $(this).css("display", "none");
        $(this).parent().find(".openArrow").css("display", "inline");
        $(this).closest("dd").find("div.content").show();
        $(this).closest("dd").find("div.content").css("height", "auto");
        return false;
    });

    //Show signup popup
    var signup = GetQueryStringParams("signup");
    if (signup == "open") {
        jQuery("#signUp").foundation("reveal", "open", "/AjaxPages/PopUp/SignUp.aspx");
    }

    //Back to up Button
    //--Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //--Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    //

    // Menu column height
    var heightMax = 0;
    var hCol1 = $('.col1').height();
    var hCol2 = $('.col2').height();
    var hCol3 = $('.col3').height();
    var hCol4 = $('.col4').height();
    var hCol5 = $('.col5').height();
    var hCol6 = $('.col6').height();

    if (hCol1 > hCol2 && hCol1 > hCol3 && hCol1 > hCol4 && hCol1 > hCol5 && hCol1 > hCol6) {
        heightMax = hCol1;
    }
    else
        if (hCol2 > hCol3 && hCol2 > hCol4 && hCol2 > hCol5 && hCol2 > hCol6) {
            heightMax = hCol2;
        }
        else
            if (hCol3 > hCol4 && hCol3 > hCol5 && hCol3 > hCol6) {
                heightMax = hCol3;
            }
            else
                if (hCol4 > hCol5 && hCol4 > hCol6) {
                    heightMax = hCol4;
                }
                else
                    if (hCol5 > hCol6) {
                        heightMax = hCol5;
                    }
                    else {
                        heightMax = hCol6;
                    }

    $("#mega-menu-2 > .columns").css("height", heightMax);

    //SubCategory Page View More option
    $('.showmore_more').hide(); //Hide/close all containers

    //Accordion Line-Spacing
    var content = $('.accordion .content ul li a');
    for (var i = 0; i < content.length; i++) {
        if ((content[i].offsetHeight) > '19') {
            $(content[i]).css("line-height", '0em');
            $('.accordion .content ul li').css({ "line-height": "1.1em", "margin-top": "0.3em", "margin-bottom": "0.3em" });
        }
    }

    //--On Click
    $('.buttonViewMore').click(function () {
        $('.buttonViewMore').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown();
        return false;
    });

    $('.buttonViewMore').click(function () {
        var all = $('.showmore_more'),
            active = all.filter('.active');

        if (all.length && all.length === active.length) {
            all.removeClass('active').next().slideUp();
        }
        else {
            all.not('.active').addClass('active').next().slideDown();
        }
        return false;
    });

    $(".firstAccordion .openAccordion").click(function () {
        $(".firstAccordion .openAccordion").css("display", "none");
        $(".firstAccordion .closeAccordion").css("display", "inline");
    });

    $(".firstAccordion .closeAccordion").click(function () {
        $(".firstAccordion .closeAccordion").css("display", "none");
        $(".firstAccordion .openAccordion").css("display", "inline");
    });

    $(".secondAccordion a.openAccordion").click(function () {
        $(".secondAccordion a.openAccordion").css("display", "none");
        $(".secondAccordion a.closeAccordion").css("display", "inline");
    });

    $(".secondAccordion a.closeAccordion").click(function () {
        $(".secondAccordion a.closeAccordion").css("display", "none");
        $(".secondAccordion a.openAccordion").css("display", "inline");
    });

    $(".thirdAccordion a.openAccordion").click(function () {
        $(".thirdAccordion a.openAccordion").css("display", "none");
        $(".thirdAccordion a.closeAccordion").css("display", "inline");
    });

    $(".thirdAccordion a.closeAccordion").click(function () {
        $(".thirdAccordion a.closeAccordion").css("display", "none");
        $(".thirdAccordion a.openAccordion").css("display", "inline");
    });

    $("#addNewAddressButton").click(function () {
        $(".my-account-wrapper #addressBook").css("display", "none");
        $(".my-account-wrapper #editShippingAddress").css("display", "inline");
    });

    $(".livingRoomItems").click(function () {
        $(".my-account-wrapper .contentAllItemsWhislist").css("display", "none");
        $(".my-account-wrapper .contentLivingRoomItems").css("display", "inline");
    });

    $(".continueToOtherPage").click(function () {
        $("#shipping-billingPage #shippingStart").css("display", "none");
        $("#shipping-billingPage #shippingLogIn").css("display", "inline");
    });

    $("#submitOrderButton").click(function () {
        $("#shipping-billingPage").css("display", "none");
        $("#thankYouPage").css("display", "inline");
    });

    $("#buttonToCheckout").click(function () {
        $("#shoppingCartSection").css("display", "none");
        $("#dynamicCarousel").css("display", "none");
        $("#shipping-billingPage").css("display", "inline");
    });

    jQuery("#signUpButton").click(function () {
        email = jQuery("#TbxEmailFooter").val();
        jQuery("#signUp").foundation("reveal", "open", "/AjaxPages/PopUp/SignUp.aspx?email=" + email);
        try {
            window.DDO.emailSignup = {
                "emailLocation": "Footer_" + window.DDO.pageData.pageSiteSection
            };
        } catch (e) { }
    });

    $("div.tout-email-form").find("a.button").bind("click", function (e) {
        e.preventDefault();
        var $parent = $(this).parent("div.tout-email-form"),
            email = $parent.find("input.email-input").val();
        jQuery("#signUp").foundation("reveal", "open", "/AjaxPages/PopUp/SignUp.aspx?email=" + email);
        if (typeof $parent.data("location") !== "undefined") {
            try {
                window.DDO.emailSignup = {
                    "emailLocation": $parent.data("location") + "_" + window.DDO.pageData.pageSiteSection
                };
            } catch (e) { }
        }
    });

    jQuery("#BtnSuscribeEmail").click(function () {
        email = jQuery("#TbxEmailSD").val();
        jQuery("#signUp").foundation("reveal", "open", "/AjaxPages/PopUp/SignUp.aspx?email=" + email);
        try { _satellite.track("email_signup"); } catch (e) { }
    });

    jQuery(window).on('UpdateCartCount', function (event, CartCount) {
        /*check to validate if we are on the order confirmation page
          currently there is a call from within the script of the msax controls
          that passes an incorrect cart count on a successful order submission.
          This check is a work around
          */
        if (window.location.pathname.toLowerCase().indexOf("orderconfirmation") !== -1)
            return;
        if (typeof CartCount == "undefined")
            CartCount = 0;
        updateCartHeader(CartCount);
    });

    $(document).on('GetResources', function (event, data) {
        $.ajax({
            url: "/api/cartlabels"
        }).success(function (data) {
            AFM.Ecommerce.Controls.ExternalResourceStrings = data;

            for (var i = 0; i < AFM.Ecommerce.Controls.ExternalResourceStrings.length; i++) {
                if (AFM.Ecommerce.Controls.Resources[AFM.Ecommerce.Controls.ExternalResourceStrings[i].afmcode] != undefined)
                    AFM.Ecommerce.Controls.Resources[AFM.Ecommerce.Controls.ExternalResourceStrings[i].afmcode] = AFM.Ecommerce.Controls.ExternalResourceStrings[i].value;
            }
            $(document).trigger('CreateCartData', null);
        });
    });

    // init showing interchange images inside orbit
    $('[data-orbit]').on('replace', 'img', function (e, new_path, original_path) {
        $('[data-orbit]').foundation('orbit').resize();
    });

    CancelBackspaceEvents();

    $(function () {
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            }
        };

        if (isMobile.Android()) {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match((/android/i))) {
                $('#OrderAddressState').on('touchend', function (e) {
                    $(this).trigger('click');
                });
            }
        }
    });

    $(document)
        .on("click", "li.prodGridBox", function (e) {
            var link = $(this).find("a[data-bind*=url]"),
                lHref = link.attr("href");
            if (typeof lHref !== 'undefined' && window.location.href.search(lHref) < 0)
                window.location.href = lHref;
        })
        .on("click touchend", "li.prodGridBox .pricing-table a", function (evt) {
            evt = evt || window.event;
            if (evt.stopPropagation)
                evt.stopPropagation();
            else
                evt.cancelBubble = true;
        });
});

var ashleyCartCount = ashleyCart(cartCount);

function ashleyCart(count) {
    if (count < 0) {
        count = 0;
    }
    updateCartHeader(count);
    return {
        items: count,
        addItems: function (count) {
            count = parseInt(count);
            if (count <= 0) return;
            this.items += count;
            updateCartHeader(this.items);
        },
        removeItems: function (count) {
            count = parseInt(count);
            if (count < 0) count = 0;
            var newCount = this.items - count;
            if (newCount < 0) {
                newCount = 0;
            }
            this.items = newCount
            updateCartHeader(this.items);
        },
        clear: function () {
            this.items = 0;
            updateCartHeader(this.items);
        }
    };
}

function updateCartHeader(count) {
    if (count >= 10)
        jQuery('.cart-item-count').html(jQuery(document.createElement('small')).text(count));
    else
        jQuery('.cart-item-count').text(count);
}

/*** Flexslider ***/
$(document).ready(function () {
    //Living Room Page
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 213,
        itemMargin: 5,
        asNavFor: '#slider',
        start: function (slider) {
            SliderAddTitleAnchor();
        }
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function (slider) {
            $('body').removeClass('loading');
            SliderAddTitleAnchor();
        }
    });

    //Products Details Page
    $('#carousel-3').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 128,
        itemMargin: 5,
        maxItems: 4,
        asNavFor: '#slider-3',
        start: function (slider) {
            SliderAddTitleAnchor();
        }
    });

    $('#slider-3').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel-3",
        start: function (slider) {
            $('body').removeClass('loading');
            SliderHideButtonOneImage();
            SliderAddTitleAnchor();
            mobileThumbZoom();
        }
    });
});

$(window).resize(function () {
    //Carrousel with Thumbs: Department
    var cant = $('#carousel .slides > li').length;
    if (211 * cant < $('#carousel').innerWidth()) {
        $('#carousel .flex-direction-nav').css("display", "none");
        $(' #carousel').css("margin-left", "0px");
        $(' #carousel').css("max-width", "100%");
    } else {
        $('#carousel .flex-direction-nav').css("display", "block");
        $(' #carousel').css("margin-left", "auto");
        $(' #carousel').css("max-width", "auto");
    }

    //Carrousel with Thumbs: Product Details
    CarouselProductDetailsPageResize();
    SliderHideButtonOneImage();

    //Left Nav for Mobile: without active class
    if ($('.hide-for-large-up').css('display') == 'block') {
        $('.paddingMobile .accordion dd .content').removeClass('active');
        $('.paddingMobile .accordion dd').removeClass('active');
        $('.paddingMobile .accordion').removeClass('active');
    }
    else {
        $('.paddingMobile .accordion dd .content').addClass('active');
        $('.paddingMobile .accordion dd').addClass('active');
        $('.paddingMobile .accordion').addClass('active');
    }

    //Accordion Line-Spacing
    var content = $('.accordion .content ul li a');
    for (var i = 0; i < content.length; i++) {
        if ((content[i].offsetHeight) > '19') {
            $(content[i]).css("line-height", '0em');
            $('.accordion .content ul li').css({ "line-height": "1.1em", "margin-top": "0.3em", "margin-bottom": "0.3em" });
        }
        else if ((content[i].offsetHeight) <= '19') {
            $(content[i]).css("line-height", '1.8em')
            $('.accordion .content ul li').removeAttr("style");
        }
    }
});

//Carrousel with Thumbs: Product Details
function CarouselProductDetailsPageResize() {
    var cant = $('#carousel-3 .slides > li').length;
    if (139 * cant < $('#carousel-3').innerWidth()) {
        $('#carousel-3 .flex-direction-nav').css("display", "none");
        $(' #carousel-3').css("margin-left", "0px");
        $(' #carousel-3').css("max-width", "85%");
    } else {
        $('#carousel-3 .flex-direction-nav').css("display", "block");
        $(' #carousel-3').css("margin-left", "auto");
        $(' #carousel-3').css("max-width", "auto");
    }
}

function SliderHideButtonOneImage() {
    var cant = $('#slider-3 .slides > li').length;
    if ((211 * cant < $('#slider-3').innerWidth())) {
        $('#slider-3 .flex-direction-nav').css("display", "none");
    }
}

function SliderAddTitleAnchor() {
    $(".flex-next").each(function () {
        var self = $(this);
        self.attr('title', "NEXT");
    });

    $(".flex-prev").each(function () {
        var self = $(this);
        self.attr('title', "PREVIOUS");
    });
}

$(document).foundation().bind("ready.fndtn.orbit", disableCarouselNavWithSingleImage);

// Make sure carousel with only a single image/slide have their back/forward buttons hidden along with the bullets.
function disableCarouselNavWithSingleImage() {
    $(".orbit-container").each(function () {
        var $orbitContainer = $(this);
        var numberOfPages = $orbitContainer.find(".orbit-bullets li").size();
        if (numberOfPages === 1) {
            $orbitContainer.find(".orbit-bullets li").hide();
            $orbitContainer.find(".orbit-prev").hide();
            $orbitContainer.find(".orbit-next").hide();
        };
    });
}

/* Resizes the menu dropdown contents based on number of columns
 * Fix by Fran
 */
$(document).ready(function () {
    // Resizes the menu dropdown contents based on number of columns
    $(".has-dropdown")
      .bind('mouseover.fndtn.dropdown', function (e) {
          dpdnOpen(e);
      })
      .bind('mouseout.fndtn.dropdown', function (e) {
          dpdnClose(e);
      });
    removePoundsFromHrefs();
});

/*** Manage auto play youtube videos from YoutubeCarousel.ascx ***/
$(document).on('open.fndtn.reveal', '[data-autoplay-video]', function (e) {
    if (e.namespace !== 'fndtn.reveal') {
        return;
    }
    var $iframe = $(e.target).find('iframe');
    //reveal modal uses the data-src to load the image url in the 'opened' event
    $iframe.attr('data-src', $iframe.attr('data-video'));
});

$(document).on('closed.fndtn.reveal', '[data-autoplay-video]', function (e) {
    if (e.namespace !== 'fndtn.reveal') {
        return;
    }
    var $iframe = $(e.target).find('iframe');
    $iframe.attr('src', 'about:blank');
});

$(document)
    .on('mouseover touchstart', "a", function () {
        removePoundsFromHrefs();
    })
    .on('open.fndtn ajaxComplete', function () {
        removePoundsFromHrefs();
    });

// Add classes to tout blocks so they can be styled for mobile.
$(function () {
    $('.toutBlock.toutBlockNew').each(function (index, item) {
        var $toutBlock = $(item);
        $toutBlock.addClass('tout-columns-' + $toutBlock.children().length);
        var $textbox = $(item).find('.contentTextBox:visible');
        if ($textbox) {
            var $toutColumn = $textbox.closest('.tout-column:visible, .tout:visible');
            var textToutIndex = $toutColumn.index();
            if (textToutIndex >= 0) {
                $(item).addClass('tout-text-' + (textToutIndex + 1));
            }
        }
    });

    // Change order of tout text of 4 columns for mobile.
    var isMobile = /Mobi/i.test(navigator.userAgent);
    var isUnderResolution = false;
    if ($('.dropdown.hide-for-large-up').css('display') == 'block') {
        isUnderResolution = true;
    }

    if (isMobile || isUnderResolution) {
        //   $(window).resize(function () { 

        $('.toutBlock.toutBlockNew').each(function (index, item) {
            var $toutBlock = $(item);
            var toutChildren = $toutBlock.children('.contentTextBox');

            // The tout have the text in the second column and it have 4 columns width22.
            if ($toutBlock.hasClass("tout-columns-4")) {

                if ($toutBlock.hasClass("tout-text-2") || $toutBlock.hasClass("tout-text-3")) {
                    var temp;

                    if ($toutBlock.children('.width22:first-child').hasClass("columns")) {
                        temp = $toutBlock.find(".columns.tout-column.width22:first-child");
                        toutChildren.insertBefore(temp);
                    }
                    else {
                        temp = $toutBlock.find(" .tout.toutheight-standard.width22:first-child");
                        toutChildren.insertBefore(temp);
                    }
                    $toutBlock.removeClass('tout-text-3');
                    $toutBlock.removeClass('tout-text-2');
                    $toutBlock.addClass('tout-text-1');
                }
            }
        });
    }
});

// Workaround for glitch in table-group-row rendering in webkit. We have to change the display style
// to trick the browser into re-rendering the touts.
$(window).load(function () {
    $('.contentTextBox').addClass('header-group-row-fix');
    setTimeout(function () {
        $('.row.toutBlockNew').animate({ 'opacity': 1 });
        $('.contentTextBox').removeClass('header-group-row-fix');
    });
});

//Fuction to display and hide the Quick View button.
if (!Modernizr.touch) {
    jQuery(".productImage").mouseover(function () {
        jQuery(this).children('.quickView').css('display', 'block');
    });
    jQuery(".productImage").mouseleave(function () {
        jQuery(this).children('.quickView').css('display', 'none');
    });
}

//Fuction to change the order of products that not has colors options.
$('.relatedProduct').each(function (index) {
    var $ZeroOpacity = $(this).children('div').children('.zeroOpacity');
    var $ZeroOpacity2 = $(this).children('div').children('.description');
    $ZeroOpacity.insertAfter($ZeroOpacity2);
});

// Validation for Reset Password
function ValidateBorder() {
    for (var i = 0; i < (Page_Validators.length) ; i++) {
        var val = Page_Validators[i];
        var ctrl = document.getElementById(val.controltovalidate);
        if (ctrl != null) {
            if (!val.isvalid) {
                ctrl.style.border = '1px solid red';
            }
            else {
                if (i > 0) {
                    var val2 = Page_Validators[i - 1];
                    var ctrl2 = document.getElementById(val2.controltovalidate);
                    if (ctrl2 == ctrl && !val2.isvalid) {
                        ctrl.style.border = '1px solid red';
                    }
                    else {
                        ctrl.style.border = '';
                    }
                }
                else {
                    ctrl.style.border = '';
                }
            }
        }
    }
}

function iframeLoaded() {
    var iFrameID = document.getElementById('sealy-iframe');
    if (iFrameID) {
    }
}

var iFrameID = document.getElementById('sealy-iframe');
if(iFrameID) {
    if(iFrameID.addEventListener) {
          iFrameID.addEventListener("load", function() {
              var checkaccess = $.get(iFrameID.src, function () {
                iFrameID.height = "";
                iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
                });
        });
    }
    else {
            iFrameID.attachEvent("onload", function() {
                var checkaccess = $.get(iFrameID.src, function() {
                    iFrameID.height = "";
                    iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
                });
            });
    }
}
;

$(document).ready(function () {
    $(".prodGridBox .productImage img").load(function () {
        adjustProductBoxes(".prodGridBox .pricing-table");
    });

    $(window).smartresize(function () {
        adjustProductBoxes(".prodGridBox .pricing-table");
    });
});;
// jQuery Mask Plugin v1.7.7
// github.com/igorescobar/jQuery-Mask-Plugin
(function(f){"function"===typeof define&&define.amd?define(["jquery"],f):f(window.jQuery||window.Zepto)})(function(f){var A=function(a,d,b){var h=this,m,p;a=f(a);d="function"===typeof d?d(a.val(),void 0,a,b):d;var c={getCaret:function(){try{var e,l=0,c=a.get(0),g=document.selection,d=c.selectionStart;if(g&&!~navigator.appVersion.indexOf("MSIE 10"))e=g.createRange(),e.moveStart("character",a.is("input")?-a.val().length:-a.text().length),l=e.text.length;else if(d||"0"===d)l=d;return l}catch(b){}},setCaret:function(e){try{if(a.is(":focus")){var l,
c=a.get(0);c.setSelectionRange?c.setSelectionRange(e,e):c.createTextRange&&(l=c.createTextRange(),l.collapse(!0),l.moveEnd("character",e),l.moveStart("character",e),l.select())}}catch(g){}},events:function(){a.on("keydown.mask",function(){m=c.val()}).on("keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){m===a.val()||a.data("changed")||a.trigger("change");a.data("changed",
!1)}).on("focusout.mask",function(){b.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var e=[],a,c,g,b,k=0;k<d.length;k++)(a=h.translation[d[k]])?(c=a.pattern.toString().replace(/.{1}$|^.{1}/g,""),g=a.optional,(a=a.recursive)?(e.push(d[k]),b={digit:d[k],pattern:c}):e.push(g||a?c+"?":c)):e.push(d[k].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));e=e.join("");b&&(e=e.replace(new RegExp("("+b.digit+"(.*"+b.digit+")?)"),"($1)?").replace(new RegExp(b.digit,"g"),b.pattern));return new RegExp(e)},
destroyEvents:function(){a.off("keydown keyup paste drop change blur focusout DOMNodeInserted ".split(" ").join(".mask ")).removeData("changeCalled")},val:function(e){var c=a.is("input");return 0<arguments.length?c?a.val(e):a.text(e):c?a.val():a.text()},getMCharsBeforeCount:function(e,a){for(var c=0,b=0,f=d.length;b<f&&b<e;b++)h.translation[d.charAt(b)]||(e=a?e+1:e,c++);return c},caretPos:function(e,a,b,g){return h.translation[d.charAt(Math.min(e-1,d.length-1))]?Math.min(e+b-a-g,b):c.caretPos(e+1,
a,b,g)},behaviour:function(a){a=a||window.event;var b=a.keyCode||a.which;if(-1===f.inArray(b,h.byPassKeys)){var d=c.getCaret(),g=c.val(),t=g.length,k=d<t,m=c.getMasked(),n=m.length,p=c.getMCharsBeforeCount(n-1)-c.getMCharsBeforeCount(t-1);m!==g&&c.val(m);!k||65===b&&a.ctrlKey||(8!==b&&46!==b&&(d=c.caretPos(d,t,n,p)),c.setCaret(d));return c.callbacks(a)}},getMasked:function(a){var l=[],f=c.val(),g=0,m=d.length,k=0,p=f.length,n=1,u="push",r=-1,q,v;b.reverse?(u="unshift",n=-1,q=0,g=m-1,k=p-1,v=function(){return-1<
g&&-1<k}):(q=m-1,v=function(){return g<m&&k<p});for(;v();){var w=d.charAt(g),x=f.charAt(k),s=h.translation[w];if(s)x.match(s.pattern)?(l[u](x),s.recursive&&(-1===r?r=g:g===q&&(g=r-n),q===r&&(g-=n)),g+=n):s.optional&&(g+=n,k-=n),k+=n;else{if(!a)l[u](w);x===w&&(k+=n);g+=n}}a=d.charAt(q);m!==p+1||h.translation[a]||l.push(a);return l.join("")},callbacks:function(e){var f=c.val(),h=f!==m;if(!0===h&&"function"===typeof b.onChange)b.onChange(f,e,a,b);if(!0===h&&"function"===typeof b.onKeyPress)b.onKeyPress(f,
e,a,b);if("function"===typeof b.onComplete&&f.length===d.length)b.onComplete(f,e,a,b)}};h.mask=d;h.options=b;h.remove=function(){var b;c.destroyEvents();c.val(h.getCleanVal()).removeAttr("maxlength");b=c.getCaret();c.setCaret(b-c.getMCharsBeforeCount(b));return a};h.getCleanVal=function(){return c.getMasked(!0)};h.init=function(){b=b||{};h.byPassKeys=[9,16,17,18,36,37,38,39,40,91];h.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},
S:{pattern:/[a-zA-Z]/}};h.translation=f.extend({},h.translation,b.translation);h=f.extend(!0,{},h,b);p=c.getRegexMask();!1!==b.maxlength&&a.attr("maxlength",d.length);b.placeholder&&a.attr("placeholder",b.placeholder);a.attr("autocomplete","off");c.destroyEvents();c.events();var e=c.getCaret();c.val(c.getMasked());c.setCaret(e+c.getMCharsBeforeCount(e,!0))}()},y={},z=function(){var a=f(this),d={};a.attr("data-mask-reverse")&&(d.reverse=!0);"false"===a.attr("data-mask-maxlength")&&(d.maxlength=!1);
a.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);a.mask(a.attr("data-mask"),d)};f.fn.mask=function(a,d){var b=this.selector,h=function(){var b=f(this).data("mask"),h=JSON.stringify;if("object"!==typeof b||h(b.options)!==h(d)||b.mask!==a)return f(this).data("mask",new A(this,a,d))};this.each(h);b&&!y[b]&&(y[b]=!0,setTimeout(function(){f(document).on("DOMNodeInserted.mask",b,h)},500))};f.fn.unmask=function(){try{return this.each(function(){f(this).data("mask").remove().removeData("mask")})}catch(a){}};
f.fn.cleanVal=function(){return this.data("mask").getCleanVal()};f("*[data-mask]").each(z);f(document).on("DOMNodeInserted.mask","*[data-mask]",z)});
;
/*!
 * qTip2 - Pretty powerful tooltips - @@vVERSION
 * http://qtip2.com
 *
 * Copyright (c) 2014 Craig Michael Thompson
 * Released under the MIT, GPL licenses
 * http://jquery.org/license
 *
 * Date: Tue Sep 2 2014 03:33 EDT-0400
@@BUILDPROPS */
(function(n,t,i){(function(n){"use strict";typeof define=="function"&&define.amd?define(["jquery"],n):jQuery&&!jQuery.fn.qtip&&n(jQuery)})(function(r){"use strict";function si(n,t,i,f){this.id=i;this.target=n;this.tooltip=s;this.elements={target:n};this._id=o+"-"+i;this.timers={img:{}};this.options=t;this.plugins={};this.cache={event:{},target:r(),disabled:u,attr:f,onTooltip:u,lastClass:""};this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=u}function ft(n){return n===s||r.type(n)!=="object"}function bi(n){return!(r.isFunction(n)||n&&n.attr||n.length||r.type(n)==="object"&&(n.jquery||n.then))}function dt(n){var t,e,i,o;return ft(n)?u:(ft(n.metadata)&&(n.metadata={type:n.metadata}),"content"in n&&(t=n.content,ft(t)||t.jquery||t.done?t=n.content={text:e=bi(t)?u:t}:e=t.text,"ajax"in t&&(i=t.ajax,o=i&&i.once!==u,delete t.ajax,t.text=function(n,t){var u=e||r(this).attr(t.options.content.attr)||"Loading...",f=r.ajax(r.extend({},i,{context:t})).then(i.success,s,i.error).then(function(n){return n&&o&&t.set("content.text",n),n},function(n,i,r){t.destroyed||n.status===0||t.set("content.text",i+": "+r)});return o?u:(t.set("content.text",u),f)}),"title"in t&&(ft(t.title)||(t.button=t.title.button,t.title=t.title.text),bi(t.title||u)&&(t.title=u))),"position"in n&&ft(n.position)&&(n.position={my:n.position,at:n.position}),"show"in n&&ft(n.show)&&(n.show=n.show.jquery?{target:n.show}:n.show===f?{ready:f}:{event:n.show}),"hide"in n&&ft(n.hide)&&(n.hide=n.hide.jquery?{target:n.hide}:{event:n.hide}),"style"in n&&ft(n.style)&&(n.style={classes:n.style}),r.each(h,function(){this.sanitize&&this.sanitize(n)}),n)}function ki(n,t){for(var u=0,f,i=n,r=t.split(".");i=i[r[u++]];)u<r.length&&(f=i);return[f||n,r.pop()]}function yr(n,t){var i,r,u;for(i in this.checks)for(r in this.checks[i])(u=new RegExp(r,"i").exec(n))&&(t.push(u),(i==="builtin"||this.plugins[i])&&this.checks[i][r].apply(this.plugins[i]||this,t))}function gt(n){return ar.concat("").join(n?"-"+n+" ":" ")}function ni(i){return i&&{type:i.type,pageX:i.pageX,pageY:i.pageY,target:i.target,relatedTarget:i.relatedTarget,scrollX:i.scrollX||n.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:i.scrollY||n.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}||{}}function ti(n,t){if(t>0)return setTimeout(r.proxy(n,this),t);n.call(this)}function pr(n){if(this.tooltip.hasClass(a))return u;clearTimeout(this.timers.show);clearTimeout(this.timers.hide);this.timers.show=ti.call(this,function(){this.toggle(f,n)},this.options.show.delay)}function wr(n){if(this.tooltip.hasClass(a))return u;var t=r(n.relatedTarget),i=t.closest(rt)[0]===this.tooltip[0],f=t[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==t[0]&&this.options.position.target==="mouse"&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(n.type)&&(i||f)){try{n.preventDefault();n.stopImmediatePropagation()}catch(e){}return}this.timers.hide=ti.call(this,function(){this.toggle(u,n)},this.options.hide.delay,this)}function hi(n){if(this.tooltip.hasClass(a)||!this.options.hide.inactive)return u;clearTimeout(this.timers.inactive);this.timers.inactive=ti.call(this,function(){this.hide(n)},this.options.hide.inactive)}function nr(n){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(n)}function tr(n,i,u){r(t.body).delegate(n,(i.split?i:i.join(ci+" "))+ci,function(){var n=c.api[r.attr(this,bt)];n&&!n.disabled&&u.apply(n,arguments)})}function br(n,i,e){var y,l,v,h,b,k=r(t.body),p=n[0]===t?k:n,w=n.metadata?n.metadata(e.metadata):s,d=e.metadata.type==="html5"&&w?w[e.metadata.name]:s,a=n.data(e.metadata.name||"qtipopts");try{a=typeof a=="string"?r.parseJSON(a):a}catch(g){}if(h=r.extend(f,{},c.defaults,e,typeof a=="object"?dt(a):s,dt(d||w)),l=h.position,h.id=i,"boolean"==typeof h.content.text)if(v=n.attr(h.content.attr),h.content.attr!==u&&v)h.content.text=v;else return u;if(l.container.length||(l.container=k),l.target===u&&(l.target=p),h.show.target===u&&(h.show.target=p),h.show.solo===f&&(h.show.solo=l.container.closest("body")),h.hide.target===u&&(h.hide.target=p),h.position.viewport===f&&(h.position.viewport=l.container),l.container=l.container.eq(0),l.at=new it(l.at,f),l.my=new it(l.my),n.data(o))if(h.overwrite)n.qtip("destroy",!0);else if(h.overwrite===u)return u;n.attr(ei,i);h.suppress&&(b=n.attr("title"))&&n.removeAttr("title").attr(ut,b).attr("title","");y=new si(n,h,i,!!v);n.data(o,y);n.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var n;(n=r(this).data(o))&&n.destroy(!0)});return y}function pt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function kr(n,t){var u=t.charAt(0).toUpperCase()+t.slice(1),e=(t+" "+fr.join(u+" ")+u).split(" "),r,f,o=0;if(ui[t])return n.css(ui[t]);while(r=e[o++])if((f=n.css(r))!==i)return ui[t]=r,f}function ct(n,t){return Math.ceil(parseFloat(kr(n,t)))}function er(n,t){this._ns="tip";this.options=t;this.offset=t.offset;this.size=[t.width,t.height];this.init(this.qtip=n)}function or(n,t){this.options=t;this._ns="-modal";this.init(this.qtip=n)}function cr(n){this._ns="ie6";this.init(this.qtip=n)}var f=!0,u=!1,s=null,w="x",y="y",d="width",at="height",b="top",p="left",tt="bottom",k="right",l="center",lr="flipinvert",et="shift",c,e,it,wt,h={},o="qtip",ei="data-hasqtip",bt="data-qtip-id",ar=["ui-widget","ui-tooltip"],rt="."+o,pi="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),wi=o+"-fixed",oi=o+"-default",ot=o+"-focus",vr=o+"-hover",a=o+"-disabled",st="_replacedByqTip",ut="oldtitle",kt,v={ie:function(){for(var n=3,i=t.createElement("div");i.innerHTML="<!--[if gt IE "+ ++n+"]><i><\/i><![endif]-->";)if(!i.getElementsByTagName("i")[0])break;return n>4?n:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||u},di,gi,vt,ci,ui,fr,vi,yi,g,fi,nt,sr,hr;e=si.prototype;e._when=function(n){return r.when.apply(r,n)};e.render=function(n){if(this.rendered||this.destroyed)return this;var i=this,t=this.options,p=this.cache,v=this.elements,y=t.content.text,e=t.content.title,w=t.content.button,s=t.position,k="."+this._id+" ",l=[],b;return r.attr(this.target[0],"aria-describedby",this._id),this.tooltip=v.tooltip=b=r("<div/>",{id:this._id,"class":[o,oi,t.style.classes,o+"-pos-"+t.position.my.abbrev()].join(" "),width:t.style.width||"",height:t.style.height||"",tracking:s.target==="mouse"&&s.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":u,"aria-describedby":this._id+"-content","aria-hidden":f}).toggleClass(a,this.disabled).attr(bt,this.id).data(o,this).appendTo(s.container).append(v.content=r("<div />",{"class":o+"-content",id:this._id+"-content","aria-atomic":f})),this.rendered=-1,this.positioning=f,e&&(this._createTitle(),r.isFunction(e)||l.push(this._updateTitle(e,u))),w&&this._createButton(),r.isFunction(y)||l.push(this._updateContent(y,u)),this.rendered=f,this._setWidget(),r.each(h,function(n){var t;this.initialize==="render"&&(t=this(i))&&(i.plugins[n]=t)}),this._unassignEvents(),this._assignEvents(),this._when(l).then(function(){i._trigger("render");i.positioning=u;!i.hiddenDuringWait&&(t.show.ready||n)&&i.toggle(f,p.event,u);i.hiddenDuringWait=u}),c.api[this.id]=this,this};e.destroy=function(n){function t(){if(!this.destroyed){this.destroyed=f;var n=this.target,t=n.attr(ut);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove();r.each(this.plugins,function(){this.destroy&&this.destroy()});clearTimeout(this.timers.show);clearTimeout(this.timers.hide);this._unassignEvents();n.removeData(o).removeAttr(bt).removeAttr(ei).removeAttr("aria-describedby");this.options.suppress&&t&&n.attr("title",t).removeAttr(ut);this._unbind(n);this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=s;delete c.api[this.id]}}if(this.destroyed)return this.target;if((n!==f||this.triggering==="hide")&&this.rendered){this.tooltip.one("tooltiphidden",r.proxy(t,this));this.triggering||this.hide()}else t.call(this);return this.target};wt=e.checks={builtin:{"^id$":function(n,t,i,e){var s=i===f?c.nextid:i,h=o+"-"+s;s!==u&&s.length>0&&!r("#"+h).length?(this._id=h,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):n[t]=e},"^prerender":function(n,t,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(n,t,i){this._updateContent(i)},"^content.attr$":function(n,t,i,r){this.options.content.text===this.target.attr(r)&&this._updateContent(this.target.attr(i))},"^content.title$":function(n,t,i){if(!i)return this._removeTitle();i&&!this.elements.title&&this._createTitle();this._updateTitle(i)},"^content.button$":function(n,t,i){this._updateButton(i)},"^content.title.(text|button)$":function(n,t,i){this.set("content."+t,i)},"^position.(my|at)$":function(n,t,i){"string"==typeof i&&(n[t]=new it(i,t==="at"))},"^position.container$":function(n,t,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(n,t,i){i&&(!this.rendered&&this.render(f)||this.toggle(f))},"^style.classes$":function(n,t,i,r){this.rendered&&this.tooltip.removeClass(r).addClass(i)},"^style.(width|height)":function(n,t,i){this.rendered&&this.tooltip.css(t,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(n,t,i){this.rendered&&this.tooltip.toggleClass(oi,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(n,t,i){this.rendered&&this.tooltip[(r.isFunction(i)?"":"un")+"bind"]("tooltip"+t,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var n=this.options.position;this.tooltip.attr("tracking",n.target==="mouse"&&n.adjust.mouse);this._unassignEvents();this._assignEvents()}}}};e.get=function(n){if(this.destroyed)return this;var i=ki(this.options,n.toLowerCase()),t=i[0][i[1]];return t.precedance?t.string():t};di=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i;gi=/^prerender|show\.ready/i;e.set=function(n,t){if(this.destroyed)return this;var h=this.rendered,i=u,e=this.options,c=this.checks,o;return"string"==typeof n?(o=n,n={},n[o]=t):n=r.extend({},n),r.each(n,function(t,u){if(h&&gi.test(t)){delete n[t];return}var f=ki(e,t.toLowerCase()),o;o=f[0][f[1]];f[0][f[1]]=u&&u.nodeType?r(u):u;i=di.test(t)||i;n[t]=[f[0],f[1],u,o]}),dt(e),this.positioning=f,r.each(n,r.proxy(yr,this)),this.positioning=u,this.rendered&&this.tooltip[0].offsetWidth>0&&i&&this.reposition(e.position.target==="mouse"?s:this.cache.event),this};e._update=function(n,t){var i=this,e=this.cache;return!this.rendered||!n?u:(r.isFunction(n)&&(n=n.call(this.elements.target,e.event,this)||""),r.isFunction(n.then))?(e.waiting=f,n.then(function(n){return e.waiting=u,i._update(n,t)},s,function(n){return i._update(n,t)})):n===u||!n&&n!==""?u:(n.jquery&&n.length>0?t.empty().append(n.css({display:"block",visibility:"visible"})):t.html(n),this._waitForContent(t).then(function(n){n.images&&n.images.length&&i.rendered&&i.tooltip[0].offsetWidth>0&&i.reposition(e.event,!n.length)}))};e._waitForContent=function(n){var t=this.cache;return t.waiting=f,(r.fn.imagesLoaded?n.imagesLoaded():r.Deferred().resolve([])).done(function(){t.waiting=u}).promise()};e._updateContent=function(n,t){this._update(n,this.elements.content,t)};e._updateTitle=function(n,t){this._update(n,this.elements.title,t)===u&&this._removeTitle(u)};e._createTitle=function(){var n=this.elements,t=this._id+"-title";n.titlebar&&this._removeTitle();n.titlebar=r("<div />",{"class":o+"-titlebar "+(this.options.style.widget?gt("header"):"")}).append(n.title=r("<div />",{id:t,"class":o+"-title","aria-atomic":f})).insertBefore(n.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(n){r(this).toggleClass("ui-state-active ui-state-focus",n.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(n){r(this).toggleClass("ui-state-hover",n.type==="mouseover")});this.options.content.button&&this._createButton()};e._removeTitle=function(n){var t=this.elements;t.title&&(t.titlebar.remove(),t.titlebar=t.title=t.button=s,n!==u&&this.reposition())};e.reposition=function(i,e){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=f;var w=this.cache,g=this.tooltip,c=this.options.position,s=c.target,ft=c.my,d=c.at,et=c.viewport,st=c.container,nt=c.adjust,lt=nt.method.split(" "),ht=g.outerWidth(u),ct=g.outerHeight(u),it=0,rt=0,at=g.css("position"),o={left:0,top:0},yt=g[0].offsetWidth>0,pt=i&&i.type==="scroll",ot=r(n),vt=st[0].ownerDocument,ut=this.mouse,a,y;if(r.isArray(s)&&s.length===2)d={x:p,y:b},o={left:s[0],top:s[1]};else if(s==="mouse")d={x:p,y:b},ut&&ut.pageX&&(nt.mouse||!i||!i.pageX)?i=ut:i&&i.pageX||((!nt.mouse||this.options.show.distance)&&w.origin&&w.origin.pageX?i=w.origin:(!i||i&&(i.type==="resize"||i.type==="scroll"))&&(i=w.event)),at!=="static"&&(o=st.offset()),vt.body.offsetWidth!==(n.innerWidth||vt.documentElement.clientWidth)&&(y=r(t.body).offset()),o={left:i.pageX-o.left+(y&&y.left||0),top:i.pageY-o.top+(y&&y.top||0)},nt.mouse&&pt&&ut&&(o.left-=(ut.scrollX||0)-ot.scrollLeft(),o.top-=(ut.scrollY||0)-ot.scrollTop());else{if(s==="event"?i&&i.target&&i.type!=="scroll"&&i.type!=="resize"?w.target=r(i.target):i.target||(w.target=this.elements.target):s!=="event"&&(w.target=r(s.jquery?s:this.elements.target)),s=w.target,s=r(s).eq(0),s.length===0)return this;s[0]===t||s[0]===n?(it=v.iOS?n.innerWidth:s.width(),rt=v.iOS?n.innerHeight:s.height(),s[0]===n&&(o={top:(et||s).scrollTop(),left:(et||s).scrollLeft()})):h.imagemap&&s.is("area")?a=h.imagemap(this,s,d,h.viewport?lt:u):h.svg&&s&&s[0].ownerSVGElement?a=h.svg(this,s,d,h.viewport?lt:u):(it=s.outerWidth(u),rt=s.outerHeight(u),o=s.offset());a&&(it=a.width,rt=a.height,y=a.offset,o=a.position);o=this.reposition.offset(s,o,st);(v.iOS>3.1&&v.iOS<4.1||v.iOS>=4.3&&v.iOS<4.33||!v.iOS&&at==="fixed")&&(o.left-=ot.scrollLeft(),o.top-=ot.scrollTop());(!a||a&&a.adjustable!==u)&&(o.left+=d.x===k?it:d.x===l?it/2:0,o.top+=d.y===tt?rt:d.y===l?rt/2:0)}return(o.left+=nt.x+(ft.x===k?-ht:ft.x===l?-ht/2:0),o.top+=nt.y+(ft.y===tt?-ct:ft.y===l?-ct/2:0),h.viewport?(o.adjusted=h.viewport(this,o,c,it,rt,ht,ct),y&&o.adjusted.left&&(o.left+=y.left),y&&o.adjusted.top&&(o.top+=y.top)):o.adjusted={left:0,top:0},!this._trigger("move",[o,et.elem||et],i))?this:(delete o.adjusted,e===u||!yt||isNaN(o.left)||isNaN(o.top)||s==="mouse"||!r.isFunction(c.effect)?g.css(o):r.isFunction(c.effect)&&(c.effect.call(g,this,r.extend({},o)),g.queue(function(n){r(this).css({opacity:"",height:""});v.ie&&this.style.removeAttribute("filter");n()})),this.positioning=u,this)};e.reposition.offset=function(n,i,u){function l(n,t){i.left+=t*n.scrollLeft();i.top+=t*n.scrollTop()}if(!u[0])return i;var s=r(n[0].ownerDocument),a=!!v.ie&&t.compatMode!=="CSS1Compat",f=u[0],o,h,e,c;do(h=r.css(f,"position"))!=="static"&&(h==="fixed"?(e=f.getBoundingClientRect(),l(s,-1)):(e=r(f).position(),e.left+=parseFloat(r.css(f,"borderLeftWidth"))||0,e.top+=parseFloat(r.css(f,"borderTopWidth"))||0),i.left-=e.left+(parseFloat(r.css(f,"marginLeft"))||0),i.top-=e.top+(parseFloat(r.css(f,"marginTop"))||0),o||(c=r.css(f,"overflow"))==="hidden"||c==="visible"||(o=r(f)));while(f=f.offsetParent);return o&&(o[0]!==s[0]||a)&&l(o,1),i};vt=(it=e.reposition.Corner=function(n,t){n=(""+n).replace(/([A-Z])/," $1").replace(/middle/gi,l).toLowerCase();this.x=(n.match(/left|right/i)||n.match(/center/)||["inherit"])[0].toLowerCase();this.y=(n.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();this.forceY=!!t;var i=n.charAt(0);this.precedance=i==="t"||i==="b"?y:w}).prototype;vt.invert=function(n,t){this[n]=this[n]===p?k:this[n]===k?p:t||this[n]};vt.string=function(){var n=this.x,t=this.y;return n===t?n:this.precedance===y||this.forceY&&t!=="center"?t+" "+n:n+" "+t};vt.abbrev=function(){var n=this.string().split(" ");return n[0].charAt(0)+(n[1]&&n[1].charAt(0)||"")};vt.clone=function(){return new it(this.string(),this.forceY)};e.toggle=function(n,i){var c=this.cache,b=this.options,e=this.tooltip;if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(c.event.type)&&b.show.target.add(i.target).length===b.show.target.length&&e.has(i.relatedTarget).length)return this;c.event=ni(i)}if(this.waiting&&!n&&(this.hiddenDuringWait=f),this.rendered){if(this.destroyed||this.disabled)return this}else return n?this.render(1):this;var y=n?"show":"hide",h=this.options[y],it=this.options[n?"hide":"show"],k=this.options.position,l=this.options.content,d=this.tooltip.css("width"),g=this.tooltip.is(":visible"),nt=n||h.target.length===1,tt=!i||h.target.length<2||c.target[0]===i.target,p,w,a;return((typeof n).search("boolean|number")&&(n=!g),p=!e.is(":animated")&&g===n&&tt,w=p?s:!!this._trigger(y,[90]),this.destroyed)?this:(w!==u&&n&&this.focus(i),!w||p)?this:(r.attr(e[0],"aria-hidden",!!!n),n?(c.origin=ni(this.mouse),r.isFunction(l.text)&&this._updateContent(l.text,u),r.isFunction(l.title)&&this._updateTitle(l.title,u),!kt&&k.target==="mouse"&&k.adjust.mouse&&(r(t).bind("mousemove."+o,this._storeMouse),kt=f),d||e.css("width",e.outerWidth(u)),this.reposition(i,arguments[2]),d||e.css("width",""),!h.solo||(typeof h.solo=="string"?r(h.solo):r(rt,h.solo)).not(e).not(h.target).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete c.origin,kt&&!r(rt+'[tracking="true"]:visible',h.solo).not(e).length&&(r(t).unbind("mousemove."+o),kt=u),this.blur(i)),a=r.proxy(function(){n?(v.ie&&e[0].style.removeAttribute("filter"),e.css("overflow",""),"string"==typeof h.autofocus&&r(this.options.show.autofocus,e).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):e.css({display:"",visibility:"",opacity:"",left:"",top:""});this._trigger(n?"visible":"hidden")},this),h.effect===u||nt===u?(e[y](),a()):r.isFunction(h.effect)?(e.stop(1,1),h.effect.call(e,this),e.queue("fx",function(n){a();n()})):e.fadeTo(90,n?1:0,a),n&&h.target.trigger("qtip-"+this.id+"-inactive"),this)};e.show=function(n){return this.toggle(f,n)};e.hide=function(n){return this.toggle(u,n)};e.focus=function(n){if(!this.rendered||this.destroyed)return this;var t=r(rt),i=this.tooltip,f=parseInt(i[0].style.zIndex,10),u=c.zindex+t.length;return i.hasClass(ot)||this._trigger("focus",[u],n)&&(f!==u&&(t.each(function(){this.style.zIndex>f&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+ot).qtip("blur",n)),i.addClass(ot)[0].style.zIndex=u),this};e.blur=function(n){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(ot),this._trigger("blur",[this.tooltip.css("zIndex")],n),this)};e.disable=function(n){return this.destroyed?this:(n==="toggle"?n=!(this.rendered?this.tooltip.hasClass(a):this.disabled):"boolean"!=typeof n&&(n=f),this.rendered&&this.tooltip.toggleClass(a,n).attr("aria-disabled",n),this.disabled=!!n,this)};e.enable=function(){return this.disable(u)};e._createButton=function(){var e=this,n=this.elements,i=n.tooltip,t=this.options.content.button,s=typeof t=="string",f=s?t:"Close tooltip";n.button&&n.button.remove();n.button=t.jquery?t:r("<a />",{"class":"qtip-close "+(this.options.style.widget?"":o+"-icon"),title:f,"aria-label":f}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"}));n.button.appendTo(n.titlebar||i).attr("role","button").click(function(n){return i.hasClass(a)||e.hide(n),u})};e._updateButton=function(n){if(!this.rendered)return u;var t=this.elements.button;n?this._createButton():t.remove()};e._setWidget=function(){var t=this.options.style.widget,n=this.elements,i=n.tooltip,r=i.hasClass(a);i.removeClass(a);a=t?"ui-state-disabled":"qtip-disabled";i.toggleClass(a,r);i.toggleClass("ui-helper-reset "+gt(),t).toggleClass(oi,this.options.style.def&&!t);n.content&&n.content.toggleClass(gt("content"),t);n.titlebar&&n.titlebar.toggleClass(gt("header"),t);n.button&&n.button.toggleClass(o+"-icon",!t)};e._storeMouse=function(n){(this.mouse=ni(n)).type="mousemove"};e._bind=function(n,t,i,u,f){var e="."+this._id+(u?"-"+u:"");t.length&&r(n).bind((t.split?t:t.join(e+" "))+e,r.proxy(i,f||this))};e._unbind=function(n,t){r(n).unbind("."+this._id+(t?"-"+t:""))};ci="."+o;r(function(){tr(rt,["mouseenter","mouseleave"],function(n){var u=n.type==="mouseenter",i=r(n.currentTarget),f=r(n.relatedTarget||n.target),t=this.options;u?(this.focus(n),i.hasClass(wi)&&!i.hasClass(a)&&clearTimeout(this.timers.hide)):t.position.target==="mouse"&&t.hide.event&&t.show.target&&!f.closest(t.show.target[0]).length&&this.hide(n);i.toggleClass(vr,u)});tr("["+bt+"]",pi,hi)});e._trigger=function(n,t,i){var f=r.Event("tooltip"+n);return f.originalEvent=i&&r.extend({},i)||this.cache.event||s,this.triggering=n,this.tooltip.trigger(f,[this].concat(t||[])),this.triggering=u,!f.isDefaultPrevented()};e._bindEvents=function(n,t,i,u,f,e){if(u.add(i).length===u.length){var o=[];t=r.map(t,function(t){var i=r.inArray(t,n);if(i>-1){o.push(n.splice(i,1)[0]);return}return t});o.length&&this._bind(i,o,function(n){var t=this.rendered?this.tooltip[0].offsetWidth>0:!1;(t?e:f).call(this,n)})}this._bind(i,n,f);this._bind(u,t,e)};e._assignInitialEvents=function(n){function s(n){if(this.disabled||this.destroyed)return u;this.cache.event=ni(n);this.cache.target=n?r(n.target):[i];clearTimeout(this.timers.show);this.timers.show=ti.call(this,function(){this.render(typeof n=="object"||t.show.ready)},t.show.delay)}var t=this.options,e=t.show.target,h=t.hide.target,c=t.show.event?r.trim(""+t.show.event).split(" "):[],o=t.hide.event?r.trim(""+t.hide.event).split(" "):[];/mouse(over|enter)/i.test(t.show.event)&&!/mouse(out|leave)/i.test(t.hide.event)&&o.push("mouseleave");this._bind(e,"mousemove",function(n){this._storeMouse(n);this.cache.onTarget=f});this._bindEvents(c,o,e,h,s,function(){clearTimeout(this.timers.show)});(t.show.ready||t.prerender)&&s.call(this,n)};e._assignEvents=function(){var v=this,i=this.options,u=i.position,f=this.tooltip,o=i.show.target,e=i.hide.target,y=u.container,s=u.viewport,h=r(t),b=r(t.body),l=r(n),p=i.show.event?r.trim(""+i.show.event).split(" "):[],w=i.hide.event?r.trim(""+i.hide.event).split(" "):[];r.each(i.events,function(n,t){v._bind(f,n==="toggle"?["tooltipshow","tooltiphide"]:["tooltip"+n],t,null,f)});/mouse(out|leave)/i.test(i.hide.event)&&i.hide.leave==="window"&&this._bind(h,["mouseout","blur"],function(n){/select|option/.test(n.target.nodeName)||n.relatedTarget||this.hide(n)});i.hide.fixed?e=e.add(f.addClass(wi)):/mouse(over|enter)/i.test(i.show.event)&&this._bind(e,"mouseleave",function(){clearTimeout(this.timers.show)});(""+i.hide.event).indexOf("unfocus")>-1&&this._bind(y.closest("html"),["mousedown","touchstart"],function(n){var t=r(n.target),i=this.rendered&&!this.tooltip.hasClass(a)&&this.tooltip[0].offsetWidth>0,u=t.parents(rt).filter(this.tooltip[0]).length>0;t[0]===this.target[0]||t[0]===this.tooltip[0]||u||this.target.has(t[0]).length||!i||this.hide(n)});"number"==typeof i.hide.inactive&&(this._bind(o,"qtip-"+this.id+"-inactive",hi),this._bind(e.add(f),c.inactiveEvents,hi,"-inactive"));this._bindEvents(p,w,o,e,pr,wr);this._bind(o.add(f),"mousemove",function(n){if("number"==typeof i.hide.distance){var t=this.cache.origin||{},r=this.options.hide.distance,u=Math.abs;(u(n.pageX-t.pageX)>=r||u(n.pageY-t.pageY)>=r)&&this.hide(n)}this._storeMouse(n)});u.target==="mouse"&&u.adjust.mouse&&(i.hide.event&&this._bind(o,["mouseenter","mouseleave"],function(n){this.cache.onTarget=n.type==="mouseenter"}),this._bind(h,"mousemove",function(n){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(a)&&this.tooltip[0].offsetWidth>0&&this.reposition(n)}));(u.adjust.resize||s.length)&&this._bind(r.event.special.resize?s:l,"resize",nr);u.adjust.scroll&&this._bind(l.add(u.container),"scroll",nr)};e._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],n,t];this._unbind(r([]).pushStack(r.grep(i,function(n){return typeof n=="object"})))};c=r.fn.qtip=function(n,t,e){var a=(""+n).toLowerCase(),y=s,p=r.makeArray(arguments).slice(1),v=p[p.length-1],l=this[0]?r.data(this[0],o):s;return!arguments.length&&l||a==="api"?l:"string"==typeof n?(this.each(function(){var n=r.data(this,o);if(!n)return f;if(v&&v.timeStamp&&(n.cache.event=v),t&&(a==="option"||a==="options"))if(e!==i||r.isPlainObject(t))n.set(t,e);else return y=n.get(t),u;else n[a]&&n[a].apply(n,p)}),y!==s?y:this):"object"==typeof n||!arguments.length?(l=dt(r.extend(f,{},n)),this.each(function(n){var i,t;if(t=r.isArray(l.id)?l.id[n]:l.id,t=!t||t===u||t.length<1||c.api[t]?c.nextid++:t,i=br(r(this),t,l),i===u)return f;c.api[t]=i;r.each(h,function(){this.initialize==="initialize"&&this(i)});i._assignInitialEvents(v)})):void 0};r.qtip=si;c.api={};r.each({attr:function(n,t){if(this.length){var u=this[0],f="title",i=r.data(u,"qtip");if(n===f&&i&&"object"==typeof i&&i.options.suppress)return arguments.length<2?r.attr(u,ut):(i&&i.options.content.attr===f&&i.cache.attr&&i.set("content.text",t),this.attr(ut,t))}return r.fn["attr"+st].apply(this,arguments)},clone:function(n){var i=r([]),t=r.fn["clone"+st].apply(this,arguments);return n||t.filter("["+ut+"]").attr("title",function(){return r.attr(this,ut)}).removeAttr(ut),t}},function(n,t){if(!t||r.fn[n+st])return f;var i=r.fn[n+st]=r.fn[n];r.fn[n]=function(){return t.apply(this,arguments)||i.apply(this,arguments)}});r.ui||(r["cleanData"+st]=r.cleanData,r.cleanData=function(n){for(var i=0,t;(t=r(n[i])).length;i++)if(t.attr(ei))try{t.triggerHandler("removeqtip")}catch(u){}r["cleanData"+st].apply(this,arguments)});c.version="@@VERSION";c.nextid=0;c.inactiveEvents=pi;c.zindex=15e3;c.defaults={prerender:u,id:u,overwrite:f,suppress:f,content:{text:f,attr:"title",title:u,button:u},position:{my:"top left",at:"bottom right",target:u,container:u,viewport:u,adjust:{x:0,y:0,mouse:f,scroll:f,resize:f,method:"flipinvert flipinvert"},effect:function(n,t){r(this).animate(t,{duration:200,queue:u})}},show:{target:u,event:"mouseenter",effect:f,delay:90,solo:u,ready:u,autofocus:u},hide:{target:u,event:"mouseleave",effect:f,delay:0,fixed:u,inactive:u,leave:"window",distance:u},style:{classes:"",widget:u,width:u,height:u,def:f},events:{render:s,move:s,show:s,hide:s,toggle:s,visible:s,hidden:s,focus:s,blur:s}};var li,ai="margin",ii="border",yt="color",ht="background-color",ir="transparent",rr=" !important",ri=!!t.createElement("canvas").getContext,ur=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i;if(ui={},fr=["Webkit","O","Moz","ms"],ri)var dr=n.devicePixelRatio||1,gr=function(){var n=t.createElement("canvas").getContext("2d");return n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||1}(),lt=dr/gr;else vi=function(n,t,i){return"<qtipvml:"+n+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'};r.extend(er.prototype,{init:function(n){var t,i;i=this.element=n.elements.tip=r("<div />",{"class":o+"-tip"}).prependTo(n.tooltip);ri?(t=r("<canvas />").appendTo(this.element)[0].getContext("2d"),t.lineJoin="miter",t.miterLimit=1e5,t.save()):(t=vi("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(t+t),n._bind(r("*",i).add(i),["click","mousedown"],function(n){n.stopPropagation()},this._ns));n._bind(n.tooltip,"tooltipmove",this.reposition,this._ns,this);this.create()},_swapDimensions:function(){this.size[0]=this.options.height;this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width;this.size[1]=this.options.height},_useTitle:function(n){var t=this.qtip.elements.titlebar;return t&&(n.y===b||n.y===l&&this.element.position().top+this.size[1]/2+this.options.offset<t.outerHeight(f))},_parseCorner:function(n){var t=this.qtip.options.position.my;return n===u||t===u?n=u:n===f?n=new it(t.string()):n.string||(n=new it(n),n.fixed=f),n},_parseWidth:function(n,t,i){var r=this.qtip.elements,u=ii+pt(t)+"Width";return(i?ct(i,u):ct(r.content,u)||ct(this._useTitle(n)&&r.titlebar||r.content,u)||ct(r.tooltip,u))||0},_parseRadius:function(n){var t=this.qtip.elements,i=ii+pt(n.y)+pt(n.x)+"Radius";return v.ie<9?0:ct(this._useTitle(n)&&t.titlebar||t.content,i)||ct(t.tooltip,i)||0},_invalidColour:function(n,t,i){var r=n.css(t);return!r||i&&r===n.css(i)||ur.test(r)?u:r},_parseColours:function(n){var i=this.qtip.elements,u=this.element.css("cssText",""),f=ii+pt(n[n.precedance])+pt(yt),o=this._useTitle(n)&&i.titlebar||i.content,t=this._invalidColour,e=[];return e[0]=t(u,ht)||t(o,ht)||t(i.content,ht)||t(i.tooltip,ht)||u.css(ht),e[1]=t(u,f,yt)||t(o,f,yt)||t(i.content,f,yt)||t(i.tooltip,f,yt)||i.tooltip.css(f),r("*",u).add(u).css("cssText",ht+":"+ir+rr+";"+ii+":0"+rr+";"),e},_calculateSize:function(n){var o=n.precedance===y,s=this.options.width,r=this.options.height,h=n.abbrev()==="c",c=(o?s:r)*(h?.5:1),i=Math.pow,l=Math.round,a,f,e,u=Math.sqrt(i(c,2)+i(r,2)),t=[this.border/c*u,this.border/r*u];return t[2]=Math.sqrt(i(t[0],2)-i(this.border,2)),t[3]=Math.sqrt(i(t[1],2)-i(this.border,2)),a=u+t[2]+t[3]+(h?0:t[0]),f=a/u,e=[l(f*s),l(f*r)],o?e:e.reverse()},_calculateTip:function(n,t,i){i=i||1;t=t||this.size;var r=t[0]*i,u=t[1]*i,e=Math.ceil(r/2),o=Math.ceil(u/2),f={br:[0,0,r,u,r,0],bl:[0,0,r,0,0,u],tr:[0,u,r,0,r,u],tl:[0,0,0,u,r,u],tc:[0,u,e,0,r,u],bc:[0,0,r,0,e,u],rc:[0,0,r,o,0,u],lc:[r,0,r,u,0,o]};return f.lt=f.br,f.rt=f.bl,f.lb=f.tr,f.rb=f.tl,f[n.abbrev()]},_drawCoords:function(n,t){n.beginPath();n.moveTo(t[0],t[1]);n.lineTo(t[2],t[3]);n.lineTo(t[4],t[5]);n.closePath()},create:function(){var n=this.corner=(ri||v.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&this.corner.abbrev()!=="c")&&(this.qtip.cache.corner=n.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(t,i){if(!this.enabled)return this;var ht=this.qtip.elements,ot=this.element,rt=ot.children(),ut=this.options,nt=this.size,e=ut.mimic,ft=Math.round,a,et,h,c,st,g,o,s;t||(t=this.qtip.cache.corner||this.corner);e===u?e=t:(e=new it(e),e.precedance=t.precedance,e.x==="inherit"?e.x=t.x:e.y==="inherit"?e.y=t.y:e.x===e.y&&(e[t.precedance]=t[t.precedance]));et=e.precedance;t.precedance===w?this._swapDimensions():this._resetDimensions();a=this.color=this._parseColours(t);a[1]!==ir?(s=this.border=this._parseWidth(t,t[t.precedance]),ut.border&&s<1&&!ur.test(a[1])&&(a[0]=a[1]),this.border=s=ut.border!==f?ut.border:s):this.border=s=0;o=this.size=this._calculateSize(t);ot.css({width:o[0],height:o[1],lineHeight:o[1]+"px"});g=t.precedance===y?[ft(e.x===p?s:e.x===k?o[0]-nt[0]-s:(o[0]-nt[0])/2),ft(e.y===b?o[1]-nt[1]:0)]:[ft(e.x===p?o[0]-nt[0]:0),ft(e.y===b?s:e.y===tt?o[1]-nt[1]-s:(o[1]-nt[1])/2)];ri?(h=rt[0].getContext("2d"),h.restore(),h.save(),h.clearRect(0,0,6e3,6e3),c=this._calculateTip(e,nt,lt),st=this._calculateTip(e,this.size,lt),rt.attr(d,o[0]*lt).attr(at,o[1]*lt),rt.css(d,o[0]).css(at,o[1]),this._drawCoords(h,st),h.fillStyle=a[1],h.fill(),h.translate(g[0]*lt,g[1]*lt),this._drawCoords(h,c),h.fillStyle=a[0],h.fill()):(c=this._calculateTip(e),c="m"+c[0]+","+c[1]+" l"+c[2]+","+c[3]+" "+c[4]+","+c[5]+" xe",g[2]=s&&/^(r|b)/i.test(t.string())?v.ie===8?2:1:0,rt.css({coordsize:o[0]+s+" "+(o[1]+s),antialias:""+(e.string().indexOf(l)>-1),left:g[0]-g[2]*Number(et===w),top:g[1]-g[2]*Number(et===y),width:o[0]+s,height:o[1]+s}).each(function(n){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:o[0]+s+" "+(o[1]+s),path:c,fillcolor:a[0],filled:!!n,stroked:!n}).toggle(!!(s||n));n||t.html(vi("stroke",'weight="'+s*2+'px" color="'+a[1]+'" miterlimit="1000" joinstyle="miter"'))}));n.opera&&setTimeout(function(){ht.tip.css({display:"inline-block",visibility:"visible"})},1);i!==u&&this.calculate(t,o)},calculate:function(n,t){if(!this.enabled)return u;var e=this,o=this.qtip.elements,c=this.element,h=this.options.offset,a=o.tooltip.hasClass("ui-widget"),i={},f,s;return n=n||this.corner,f=n.precedance,t=t||this._calculateSize(n),s=[n.x,n.y],f===w&&s.reverse(),r.each(s,function(r,u){var s,a,c;u===l?(s=f===y?p:b,i[s]="50%",i[ai+"-"+s]=-Math.round(t[f===y?0:1]/2)+h):(s=e._parseWidth(n,u,o.tooltip),a=e._parseWidth(n,u,o.content),c=e._parseRadius(n),i[u]=Math.max(-e.border,r?a:h+(c>s?c:-s)))}),i[n[f]]-=t[f===w?0:1],c.css({margin:"",top:"",bottom:"",left:"",right:""}).css(i),i},reposition:function(n,t,r){function it(n,t,i,r,u){n===et&&s.precedance===t&&h[r]&&s[i]!==l?s.precedance=s.precedance===w?y:w:n!==et&&h[r]&&(s[t]=s[t]===l?h[r]>0?r:u:s[t]===r?u:r)}function rt(n,t,f){s[n]===l?nt[ai+"-"+t]=o[n]=e[ai+"-"+t]-h[t]:(a=e[f]!==i?[h[t],-e[t]]:[-h[t],e[t]],(o[n]=Math.max(a[0],a[1]))>a[0]&&(r[t]-=h[t],o[t]=u),nt[e[f]!==i?f:t]=o[n])}if(this.enabled){var c=t.cache,s=this.corner.clone(),h=r.adjusted,v=t.options.position.adjust.method.split(" "),d=v[0],g=v[1]||v[0],o={left:u,top:u,x:0,y:0},e,nt={},a;this.corner.fixed!==f&&(it(d,w,y,p,k),it(g,y,w,b,tt),s.string()!==c.corner.string()&&(c.cornerTop!==h.top||c.cornerLeft!==h.left)&&this.update(s,u));e=this.calculate(s);e.right!==i&&(e.left=-e.right);e.bottom!==i&&(e.top=-e.bottom);e.user=this.offset;(o.left=d===et&&!!h.left)&&rt(w,p,k);(o.top=g===et&&!!h.top)&&rt(y,b,tt);this.element.css(nt).toggle(!(o.x&&o.y||s.x===l&&o.y||s.y===l&&o.x));r.left-=e.left.charAt?e.user:d!==et||o.top||!o.left&&!o.top?e.left+this.border:0;r.top-=e.top.charAt?e.user:g!==et||o.left||!o.left&&!o.top?e.top+this.border:0;c.cornerLeft=h.left;c.cornerTop=h.top;c.corner=s.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns);this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}});li=h.tip=function(n){return new er(n,n.options.style.tip)};li.initialize="render";li.sanitize=function(n){if(n.style&&"tip"in n.style){var t=n.style.tip;typeof t!="object"&&(t=n.style.tip={corner:t});/string|boolean/i.test(typeof t.corner)||(t.corner=f)}};wt.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create();this.qtip.reposition()},"^style.tip.(height|width)$":function(n){this.size=[n.width,n.height];this.update();this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}};r.extend(f,c.defaults,{style:{tip:{corner:f,mimic:u,width:6,height:6,border:f,offset:0}}});fi="qtip-modal";nt="."+fi;g=function(){function a(n){if(r.expr[":"].focusable)return r.expr[":"].focusable;var e=!isNaN(r.attr(n,"tabindex")),t=n.nodeName&&n.nodeName.toLowerCase(),i,u,f;return"area"===t?(i=n.parentNode,u=i.name,!n.href||!u||i.nodeName.toLowerCase()!=="map")?!1:(f=r("img[usemap=#"+u+"]")[0],!!f&&f.is(":visible")):/input|select|textarea|button|object/.test(t)?!n.disabled:"a"===t?n.href||e:e}function c(n){o.length<1&&n.length?n.not("body").blur():o.first().focus()}function v(t){if(n.is(":visible")){var f=r(t.target),e=i.tooltip,s=f.closest(rt),h;h=s.length<1?u:parseInt(s[0].style.zIndex,10)>parseInt(e[0].style.zIndex,10);h||f.closest(rt)[0]===e[0]||c(f);l=t.target===o[o.length-1]}}var e=this,o={},i,l,h,n;r.extend(e,{init:function(){return n=e.elem=r("<div />",{id:"qtip-overlay",html:"<div><\/div>",mousedown:function(){return u}}).hide(),r(t.body).bind("focusin"+nt,v),r(t).bind("keydown"+nt,function(n){i&&i.options.show.modal.escape&&n.keyCode===27&&i.hide(n)}),n.bind("click"+nt,function(n){i&&i.options.show.modal.blur&&i.hide(n)}),e},update:function(n){i=n;o=n.options.show.modal.stealfocus!==u?n.tooltip.find("*").filter(function(){return a(this)}):[]},toggle:function(o,l,a){var d=r(t.body),p=o.tooltip,v=o.options.show.modal,y=v.effect,w=l?"show":"hide",b=n.is(":visible"),k=r(nt).filter(":visible:not(:animated)").not(p);return(e.update(o),l&&v.stealfocus!==u&&c(r(":focus")),n.toggleClass("blurs",v.blur),l&&n.appendTo(t.body),n.is(":animated")&&b===l&&h!==u||!l&&k.length)?e:(n.stop(f,u),r.isFunction(y)?y.call(n,l):y===u?n[w]():n.fadeTo(parseInt(a,10)||90,l?1:0,function(){l||n.hide()}),l||n.queue(function(t){n.css({left:"",top:""});r(nt).length||n.detach();t()}),h=l,i.destroyed&&(i=s),e)}});e.init()};g=new g;r.extend(or.prototype,{init:function(n){var t=n.tooltip;if(!this.options.on)return this;n.elements.overlay=g.elem;t.addClass(fi).css("z-index",c.modal_zindex+r(nt).length);n._bind(t,["tooltipshow","tooltiphide"],function(n,i,u){var f=n.originalEvent;if(n.target===t[0])if(f&&n.type==="tooltiphide"&&/mouse(leave|enter)/.test(f.type)&&r(f.relatedTarget).closest(g.elem[0]).length)try{n.preventDefault()}catch(e){}else(!f||f&&f.type!=="tooltipsolo")&&this.toggle(n,n.type==="tooltipshow",u)},this._ns,this);n._bind(t,"tooltipfocus",function(n,i){if(!n.isDefaultPrevented()&&n.target===t[0]){var u=r(nt),f=c.modal_zindex+u.length,e=parseInt(t[0].style.zIndex,10);g.elem[0].style.zIndex=f-1;u.each(function(){this.style.zIndex>e&&(this.style.zIndex-=1)});u.filter("."+ot).qtip("blur",n.originalEvent);t.addClass(ot)[0].style.zIndex=f;g.update(i);try{n.preventDefault()}catch(o){}}},this._ns,this);n._bind(t,"tooltiphide",function(n){n.target===t[0]&&r(nt).filter(":visible").not(t).last().qtip("focus",n)},this._ns,this)},toggle:function(n,t,i){if(n&&n.isDefaultPrevented())return this;g.toggle(this.qtip,!!t,i)},destroy:function(){this.qtip.tooltip.removeClass(fi);this.qtip._unbind(this.qtip.tooltip,this._ns);g.toggle(this.qtip,u);delete this.qtip.elements.overlay}});yi=h.modal=function(n){return new or(n,n.options.show.modal)};yi.sanitize=function(n){n.show&&(typeof n.show.modal!="object"?n.show.modal={on:!!n.show.modal}:typeof n.show.modal.on=="undefined"&&(n.show.modal.on=f))};c.modal_zindex=c.zindex-200;yi.initialize="render";wt.modal={"^show.modal.(on|blur)$":function(){this.destroy();this.init();this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}};r.extend(f,c.defaults,{show:{modal:{on:u,effect:f,blur:f,stealfocus:f,escape:f}}});h.viewport=function(i,r,f,e,s,h,c){function dt(n,t,i,u,f,e,o,s,h){var a=r[f],c=g[n],b=gt[n],tt=i===et,k=c===f?h:c===e?-h:-h/2,it=b===f?s:b===e?-s:-s/2,nt=vt[f]+ut[f]-(kt?0:rt[f]),w=nt-a,p=a+h-(o===d?ct:lt)-nt,y=k-(g.precedance===n||c===g[t]?it:0)-(b===l?s/2:0);return tt?(y=(c===f?1:-1)*k,r[f]+=w>0?w:p>0?-p:0,r[f]=Math.max(-rt[f]+ut[f],a-y,Math.min(Math.max(-rt[f]+ut[f]+(o===d?ct:lt),a+y),r[f],c==="center"?a-k:1e9))):(u*=i===lr?2:0,w>0&&(c!==f||p>0)?(r[f]-=y+u,v.invert(n,f)):p>0&&(c!==e||w>0)&&(r[f]-=(c===l?-y:y)+u,v.invert(n,e)),r[f]<vt&&-r[f]>p&&(r[f]=a,v=g.clone())),r[f]-a}var yt=f.target,pt=i.elements.tooltip,g=f.my,gt=f.at,it=f.adjust,ft=it.method.split(" "),ot=ft[0],st=ft[1]||ft[0],a=f.viewport,wt=f.container,ni=i.cache,nt={left:0,top:0},ht,v,bt,rt,kt,ct,lt,vt,ut;return!a.jquery||yt[0]===n||yt[0]===t.body||it.method==="none"?nt:(rt=wt.offset()||nt,kt=wt.css("position")==="static",ht=pt.css("position")==="fixed",ct=a[0]===n?a.width():a.outerWidth(u),lt=a[0]===n?a.height():a.outerHeight(u),vt={left:ht?0:a.scrollLeft(),top:ht?0:a.scrollTop()},ut=a.offset()||nt,(ot!=="shift"||st!=="shift")&&(v=g.clone()),nt={left:ot!=="none"?dt(w,y,ot,it.x,p,k,d,e,h):0,top:st!=="none"?dt(y,w,st,it.y,b,tt,at,s,c):0},v&&ni.lastClass!==(bt=o+"-pos-"+v.abbrev())&&pt.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=bt),nt)};h.polys={polygon:function(n,t){for(var i={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:u},f=0,r,e=[],o=1,s=1,a=0,v=0,h,c,f=n.length;f--;)r=[parseInt(n[--f],10),parseInt(n[f+1],10)],r[0]>i.position.right&&(i.position.right=r[0]),r[0]<i.position.left&&(i.position.left=r[0]),r[1]>i.position.bottom&&(i.position.bottom=r[1]),r[1]<i.position.top&&(i.position.top=r[1]),e.push(r);if(h=i.width=Math.abs(i.position.right-i.position.left),c=i.height=Math.abs(i.position.bottom-i.position.top),t.abbrev()==="c")i.position={left:i.position.left+i.width/2,top:i.position.top+i.height/2};else{while(h>0&&c>0&&o>0&&s>0)for(h=Math.floor(h/2),c=Math.floor(c/2),t.x===p?o=h:t.x===k?o=i.width-h:o+=Math.floor(h/2),t.y===b?s=c:t.y===tt?s=i.height-c:s+=Math.floor(c/2),f=e.length;f--;){if(e.length<2)break;a=e[f][0]-i.position.left;v=e[f][1]-i.position.top;(t.x===p&&a>=o||t.x===k&&a<=o||t.x===l&&(a<o||a>i.width-o)||t.y===b&&v>=s||t.y===tt&&v<=s||t.y===l&&(v<s||v>i.height-s))&&e.splice(f,1)}i.position={left:e[0][0],top:e[0][1]}}return i},rect:function(n,t,i,r){return{width:Math.abs(i-n),height:Math.abs(r-t),position:{left:Math.min(n,i),top:Math.min(t,r)}}},_angles:{tc:3/2,tr:7/4,tl:5/4,bc:1/2,br:1/4,bl:3/4,rc:2,lc:1,c:0},ellipse:function(n,t,i,r,f){var e=h.polys._angles[f.abbrev()],o=e===0?0:i*Math.cos(e*Math.PI),s=r*Math.sin(e*Math.PI);return{width:i*2-Math.abs(o),height:r*2-Math.abs(s),position:{left:n+o,top:t+s},adjustable:u}},circle:function(n,t,i,r){return h.polys.ellipse(n,t,i,i,r)}};h.svg=function(n,i,f){for(var d=r(t),e=i[0],s=r(e.ownerSVGElement),g=1,nt=1,tt=!0,p,w,it,b,v,rt,k,y,c,o,l,a;!e.getBBox;)e=e.parentNode;if(!e.getBBox||!e.parentNode)return u;p=s.attr("width")||s.width()||parseInt(s.css("width"),10);w=s.attr("height")||s.height()||parseInt(s.css("height"),10);a=(parseInt(i.css("stroke-width"),10)||0)/2;a&&(g+=a/p,nt+=a/w);switch(e.nodeName){case"ellipse":case"circle":o=h.polys.ellipse(e.cx.baseVal.value,e.cy.baseVal.value,(e.rx||e.r).baseVal.value+a,(e.ry||e.r).baseVal.value+a,f);break;case"line":case"polygon":case"polyline":for(c=e.points||[{x:e.x1.baseVal.value,y:e.y1.baseVal.value},{x:e.x2.baseVal.value,y:e.y2.baseVal.value}],o=[],y=-1,rt=c.numberOfItems||c.length;++y<rt;)k=c.getItem?c.getItem(y):c[y],o.push.apply(o,[k.x,k.y]);o=h.polys.polygon(o,f);break;default:o=e.getBoundingClientRect();o={width:o.width,height:o.height,position:{left:o.left,top:o.top}};tt=!1}return l=o.position,s=s[0],tt&&(s.createSVGPoint&&(it=e.getScreenCTM(),c=s.createSVGPoint(),c.x=l.left,c.y=l.top,b=c.matrixTransform(it),l.left=b.x,l.top=b.y),s.viewBox&&(v=s.viewBox.baseVal)&&v.width&&v.height&&(g*=p/v.width,nt*=w/v.height)),l.left+=d.scrollLeft(),l.top+=d.scrollTop(),o};h.imagemap=function(n,t,i){t.jquery||(t=r(t));var s=t.attr("shape").toLowerCase().replace("poly","polygon"),f=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),y=r.trim(t.attr("coords")),c=y.replace(/,$/,"").split(","),e,l,a,o,v;if(!f.length)return u;if(s==="polygon")o=h.polys.polygon(c,i);else if(h.polys[s]){for(a=-1,v=c.length,l=[];++a<v;)l.push(parseInt(c[a],10));o=h.polys[s].apply(this,l.concat(i))}else return u;return e=f.offset(),e.left+=Math.ceil((f.outerWidth(u)-f.width())/2),e.top+=Math.ceil((f.outerHeight(u)-f.height())/2),o.position.left+=e.left,o.position.top+=e.top,o};hr='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"><\/iframe>';r.extend(cr.prototype,{_scroll:function(){var t=this.qtip.elements.overlay;t&&(t[0].style.top=r(n).scrollTop()+"px")},init:function(i){var u=i.tooltip;r("select, object").length<1&&(this.bgiframe=i.elements.bgiframe=r(hr).appendTo(u),i._bind(u,"tooltipmove",this.adjustBGIFrame,this._ns,this));this.redrawContainer=r("<div/>",{id:o+"-rcontainer"}).appendTo(t.body);i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")&&(i._bind(n,["scroll","resize"],this._scroll,this._ns,this),i._bind(u,["tooltipshow"],this._scroll,this._ns,this));this.redraw()},adjustBGIFrame:function(){var t=this.qtip.tooltip,e={height:t.outerHeight(u),width:t.outerWidth(u)},r=this.qtip.plugins.tip,f=this.qtip.elements.tip,i,n;n=parseInt(t.css("borderLeftWidth"),10)||0;n={left:-n,top:-n};r&&f&&(i=r.corner.precedance==="x"?[d,p]:[at,b],n[i[1]]-=f[i[0]]());this.bgiframe.css(n).css(e)},redraw:function(){if(this.qtip.rendered<1||this.drawing)return this;var t=this.qtip.tooltip,u=this.qtip.options.style,e=this.qtip.options.position.container,f,n,i,r;return this.qtip.drawing=1,u.height&&t.css(at,u.height),u.width?t.css(d,u.width):(t.css(d,"").appendTo(this.redrawContainer),n=t.width(),n%2<1&&(n+=1),i=t.css("maxWidth")||"",r=t.css("minWidth")||"",f=(i+r).indexOf("%")>-1?e.width()/100:0,i=(i.indexOf("%")>-1?f:1)*parseInt(i,10)||n,r=(r.indexOf("%")>-1?f:1)*parseInt(r,10)||0,n=i+r?Math.min(Math.max(n,r),i):n,t.css(d,Math.round(n)).appendTo(e)),this.drawing=0,this},destroy:function(){this.bgiframe&&this.bgiframe.remove();this.qtip._unbind([n,this.qtip.tooltip],this._ns)}});sr=h.ie6=function(n){return v.ie===6?new cr(n):u};sr.initialize="render";wt.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);;
; (function ($, window, document, undefined) {

    var pluginName = 'toggleControl',
        defaults = {
            affect: 'slideToggle',
            easing: 'easeOutExpo'
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, defaults, options);

        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            toggleSelector = this.$element.data('toggle');

        this.$target = $(toggleSelector);

        if (this.$target.is(':visible')) {
            this.$target.addClass('toggled');
        }

        this.$element.click($.proxy(this.toggle, this));
    };

    Plugin.prototype.toggle = function (e) {
        e.preventDefault();
        var affectOptions = { easing: this.options.easing };

        // Execute jQuery toggle affect
        this.$target[this.options.affect](affectOptions);
        this.$target.toggleClass('toggled');
        this.$element.toggleClass('toggled');
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

    // Auto-wire
    $('[data-toggle]').toggleControl();
})(jQuery, window, document);;
//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});;
; (function ($, window, document, undefined) {

    var pluginName = 'spin',
        $document = $(document),
        defaults = {
            /* spin.js default options*/
            lines: 12, // The number of lines to draw
            length: 20, // The length of each line
            width: 10, // The line thickness
            radius: 20, // The radius of the inner circle
            speed: 0.8,
            color: '#042a5f', // #rgb or #rrggbb or array of colors
            hwaccel: true, // Whether to use hardware acceleration
            shadow: false,
            className: '.spinner', // The CSS class to assign to the spinner

            /* this plugin's options*/
            delay: 1000,
            backdrop: 'white',
            backdropOpacity: 0.8,
            position: 'fixed',
            stopOnAjaxError: true,
            stopOnReveal: true,
            zIndex: 99
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.data = this.$element.data();
        this.options = $.extend({}, defaults, options, this.$element.data());
        this.guid = $.guid++;

        this.init();
    }

    Plugin.prototype.default = function (value) {
        return (value === undefined || value === true);
    }

    Plugin.prototype.init = function () {
        var self = this;

        this.broadcastStopEvent = 'spinner.close.' + this.guid;
        this.openRevealEvent = 'open.fndtn.reveal.spinner.' + this.guid;
        
        if (this.options.stopOnReveal) {
            // Handle event that fires right before foundation reveal modal is shown. Removes backdrop so 
            // it doesn't overlap with foundation reveal's backdrop.
            $document.on(this.openRevealEvent, '[data-reveal]', function (e) {
                if (e.namespace !== 'fndtn.reveal') {
                    return;
                }

                self.stopSpinner.call(self);
            });
        }

        // Stop spinner on global ajax error. This can be prevented for the current element with
        // data-spin-after-ajax-error="true" in the markup.
        if (this.options.stopOnAjaxError) {
            $document.ajaxError(function () {
                setTimeout($.proxy(self.stopSpinner, self));
            });
        }

        // Allow other controls to close spinners via broadcast event
        $(window).on(this.broadcastStopEvent, $.proxy(self.stopSpinner, self));

        this.data.spinnerWaiting = true;
        this.data.spinnerTriggered = true;
        this.startSpinner.call(this);
    }

    Plugin.prototype.startSpinner = function () {
        if (!this.data.spinnerWaiting) {
            return;
        }

        var self = this,
            backdropPosition = this.options.position === 'fixed' ? 'fixed' : 'absolute';

        this.$backdrop = $('<div id="spinner-backdrop" class="spinner-backdrop"></div>')
          .css('background-color', this.options.backdrop).css('position', backdropPosition)
          .css('opacity', 0).prependTo(this.$element).animate({ opacity: this.options.backdropOpacity })
          .css('z-index', this.options.zIndex);

        setTimeout(function () {
            if (!self.data.spinnerWaiting) {
                return;
            }
            if (!self.data.spinnerTriggered) {
                return;
            }

            self.data.spinner = new Spinner(self.options).spin();
            self.$element.prepend(self.data.spinner.el);
            $(self.data.spinner.el).css('z-index', self.options.zIndex + 1);


        }, this.options.delay);
    }

    Plugin.prototype.stopSpinner = function () {
        if (this.$backdrop) {
            this.$backdrop.remove();
        }

        if (!this.data.spinnerTriggered) {
      //      return;
        }

        this.data.spinnerWaiting = false;
        this.data.spinnerTriggered = false;

        // Clear events
        $(window).off(this.broadcastStopEvent);
        if (this.options.trigger) {
            $(this.options.trigger).off(this.openRevealEvent).off(this.triggerEvent);
        } else {
            $document.off(this.openRevealEvent);
        }

        if (this.data.spinner) {
            this.data.spinner.stop();
            delete this.data.spinner;
        }
    }
    
    Plugin.prototype.destroy = function () {
        this.stopSpinner();

        delete this.data.spinnerWaiting;
        delete this.data.spinnerTriggered;
        delete this.data.spinner;
        delete this.data['plugin_' + pluginName];
    }


    // Add plugin to jQuery
    $.fn[pluginName] = function (options) {
        var $target = $(this);
        var data = $target.data('plugin_' + pluginName);
        if (data) {
            data.destroy();
        }

        if (options == false) {
            return this;
        }

        $(this).data('plugin_' + pluginName, new Plugin(this, options));
        return this;
    }

})(jQuery, window, document);;
; (function ($, window, document, undefined) {

    var pluginName = 'disablingElement',
        $document = $(document),
        $body = $(document.body),
        defaults = {
            trigger: 'click'
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, defaults, options);
        this.options.trigger = (this.$element.data('disable') || this.options.trigger) + '.disable.' + $.guid++;
        this.options.enableAfterAjax = this.$element.data('enable-after-ajax') || this.options.enableAfterAjax;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;

       $document.ajaxStop(function () {
           self.enableElement.call(self);
       });

        $document.ajaxStart(function () {
            if (self.$element.data('disable-triggered')) {
                self.$element.attr('disabled', 'disabled');
            }
        });

        this.$element.off(this.options.trigger).on(this.options.trigger, function(){
            $(this).data('disable-triggered', true);

             if (self.$element.attr('disabled') === 'disabled') {
                event.stopImmediatePropagation();
            }
        });
    }

    Plugin.prototype.enableElement = function () {
        this.$element.removeAttr('disabled');
        $(this).data('disable-triggered', false);
    }

    // Add plugin to jQuery
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

    // Auto-wire
    $('[data-disabling]').disablingElement();

})(jQuery, window, document);;
; (function ($, window, document, undefined) {

    var pluginName = 'revealSpinner',
        $body = $(document.body),
        defaults = {
            delay: 1000,
            color: '#fff', // #rgb or #rrggbb or array of colors
            backdrop: '#000',
            backdropOpacity: 0.45,
            position: 'fixed',
            stopOnAjaxError: true,
            stopOnReveal: true,
            top: '50%', 
            left: '50%'
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, defaults, options, this.$element.data());

        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            clickEvent = 'click.reveal.spinner touchend.reveal.spinner';
         
        // Handle click event on trigger element
        this.$element.on(clickEvent, function () {
            $body.spin(self.options);
        });
    }

    // Add plugin to jQuery
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

    // Auto-wire
    $('[data-reveal-spinner]').revealSpinner();

})(jQuery, window, document);;
/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("#"+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("#"+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("#"+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("#"+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);;
; (function ($, window, document, undefined) {

    var $window = $(window),
        pluginName = 'imageZoomWrapper',
        defaults = {
            targetImage: null,
            trigger: null
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, defaults, options, this.$element.data());

        if (!this.options.targetImage) {
            throw "targetImage required by image zoom wrapper.";
        }

        if (!this.options.trigger) {
            throw "trigger required by image zoom wrapper.";
        }

        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;

        $(this.options.trigger).on("click touchend", $.proxy(this.enableImageZoom, this));

        $(document).ready(function () {
            var initAttempts = 0;
            initImageZoom();

            function initImageZoom() {
                if (initAttempts++ > 1000) {
                    return;
                }

                var $image = $(self.options.targetImage);
                if ($image.length === 0 || !$image.height()) {
                    setTimeout(initImageZoom, 10);
                    return;
                }

                // Success, let's wire up the image zoom plugin
                setTimeout($.proxy(self.resetImageZoom, self));

                // Reset zoom on resize in case we leave/enter mobile breakpoint
                $window.smartresize($.proxy(self.resetImageZoom, self));
            }
        });
    };

    Plugin.prototype.resetImageZoom = function () {
        // Wire up zoom plugin if it isn't already.
        if ($('[data-zoom-image]').length === 0) {
            this.enableImageZoom();
        }
    }

    // Destroys exisitng image zoom plugin manually since the plugin doesn't supply a destroy method.
    Plugin.prototype.destroyZoomPlugin = function () {
        $('.zoomContainer').remove();
        $('[data-zoom-image]').off('mousemove touchmove touchend touchmove mouseover mouseout')
            .removeData('elevateZoom').removeData('zoom-image').removeAttr('data-zoom-image');
    }

    // Wires up the image zoom plugin while automatically rewriting the image source url to pull the 2x larger version of the image.
    Plugin.prototype.enableImageZoom = function () {
        var self = this;

        this.destroyZoomPlugin();

        setTimeout(function () {
            var $image = $(self.options.targetImage),
                src = $image.attr('src') || $image.data('src');

            if (!src) return;

            // Generate url and apply to image so zoom-image can bind to it.
            src = src.split('?')[0];
            src += "?$AFHS-PDP-Zoomed$";
            $image.attr('data-zoom-image', src);

            // Apply zoom plugin to image
            $image.elevateZoom({ zoomType: "inner", cursor: "crosshair", onZoomedImageLoaded: resetZoomContainer });

            function resetZoomContainer() {
                $('.zoomContainer').css('left', 'auto');
            }
        });
    }

    // Register plugin with jQuery
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			if (options && options.debug && window.console) {
				console.warn( "nothing selected, can't validate, returning nothing" );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr('novalidate', 'novalidate');

		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function(ev) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = ev.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(ev.target).hasClass('cancel') ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is('form')) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid &= validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];

		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element, event) {
			if ( event.which === 9 && this.elementValue(element) === '' ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastActive ) {
				this.element(element);
			}
		},
		onclick: function(element, event) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted) {
				this.element(element.parentNode);
			}
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if (validator.settings[eventType]) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if (this.settings.invalidHandler) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid()) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if (result) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			if (this.settings.showErrors) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.replace(' ', '.');
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr('type'),
				val = $(element).val();

			if ( type === 'radio' || type === 'checkbox' ) {
				return $('input[name="' + $(element).attr('name') + '"]:checked').val();
			}

			if ( typeof val === 'string' ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
					}
					throw e;
				}
			}
			if (dependencyMismatch) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata) {
				return;
			}
			var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function(element, method) {
			return $(element).data('msg-' + method.toLowerCase()) || (element.attributes && $(element).attr('data-msg-' + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				if ( label.attr("generated") ) {
					label.html(message);
				}
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
					label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr('for') === name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function(element) {
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find('[name="' + name + '"]');
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) ) {
					return this.findByName(element.name).filter(':checked').length;
				}
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		if ( classes ) {
			$.each(classes.split(' '), function() {
				if (this in $.validator.classRuleSettings) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if (method === 'required') {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if (value === "") {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			if (value) {
				rules[method] = value;
			} else if ($element[0].getAttribute("type") === method) {
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) {
			return {};
		}

		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( this.pending[element.name] ) {
				return "pending";
			}
			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true";
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if (/[^0-9 \-]+/.test(value)) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if (this.settings.onfocusout) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode === "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode === "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					var args = arguments;
					args[0] = $.event.fix(e);
					args[0].type = fix;
					return $.event.handle.apply(this, args);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	}
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));
;
$(function(){
    
    var DesktopMode = 1,
        TabletMode = 0,
        CurrentMode = -1,
        shrinkHeader = 300;

    function isDesktopWidth() {
        return Modernizr.mq('(min-width: 64.0625em)');
    }

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    function changeMode(mode) {
        CurrentMode = mode;
        $(document).foundation('topbar', 'reflow');
    }

    $(".afhs-search-link").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 200, function () {
            $("#TbxSearch").focus();
        });
        return false;
    });

    $("#TbxSearch").focus(function () {
        $(".exit-off-canvas").addClass("afhs-search-overlay");
    }).blur(function(){
        $(".exit-off-canvas").removeClass("afhs-search-overlay"); 
        $(".afhs-search").removeClass("afhs-search-animate");
    });

    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.afhs-header-wrap').addClass('afhs-sticky');
        }
        else {
            $('.afhs-header-wrap').removeClass('afhs-sticky');
            $('.afhs-search').removeClass('afhs-search-is-hidden');
        }
    });

    var dropdownMenu = function() {
        var menu = $("#afhs-menu"),
            hasDropdown = menu.find("li:has('ul')"),
            dropdown = menu.find("> li > ul"),
            megaNavParent = menu.find(".afhs-mega-nav-parent"),
            megaNavChildren = menu.find(".afhs-mega-nav-children"),
            megaDropdown = $("#afhs-menu .afhs-mega-dropdown"),
            megaNavDelay,
            nextMode = isDesktopWidth() ? DesktopMode : TabletMode;

        if (nextMode == DesktopMode && CurrentMode != DesktopMode) {
            $("#top").removeClass('move-right');
            menu.removeClass("off-canvas-list");
            hasDropdown.removeClass("has-submenu");
            dropdown.removeClass("left-submenu");
            megaNavParent.removeClass("has-submenu");
            megaNavChildren.removeClass("left-submenu");
            hasDropdown.find('> a').each(function (i, link) {
                if (link.hasAttribute('mhref')) {
                    link.setAttribute('href', link.mhref);
                    link.removeAttribute('mhref');
                }
            });
            $(menu).detach().appendTo('.top-bar-section');

            $(megaDropdown).hover(
                function () {
                    megaNavDelay = setTimeout(function () {
                        $(".afhs-mega-nav .afhs-mega-dropdown > .dropdown").css("display", "block");
                    }, 200);
                },
                function () {
                    clearTimeout(megaNavDelay);
                    $(".afhs-mega-nav .afhs-mega-dropdown > .dropdown").css("display", "none");
                }
            );

            changeMode(DesktopMode);

        } else if (nextMode == TabletMode && CurrentMode != TabletMode) {
            $(".afhs-mega-dropdown > .dropdown").removeAttr("style")

            if (megaNavDelay) {
                clearTimeout(megaNavDelay);
            }

            $(megaDropdown).unbind('mouseenter mouseleave');
            menu.addClass("off-canvas-list");
            hasDropdown.addClass("has-submenu");
            dropdown.addClass("left-submenu");
            megaNavParent.addClass("has-submenu");
            megaNavChildren.addClass("left-submenu");

            hasDropdown.find('> a').each(function (i, link) {
                if (link.hasAttribute('href')) {
                    link.setAttribute('mhref', link.href);
                    link.removeAttribute('href');
                }
            });

            $(menu).detach().appendTo('.left-off-canvas-menu');
            changeMode(TabletMode);
        }
    };
    
    dropdownMenu();
    $(window).smartresize(dropdownMenu);
});;
$(document).on('UpdateDDO_orderDetail', function (event, data) {
    if (typeof window.DDO != "undefined")
        mapDDOData(data);
});

$(document).on('UpdateDDO_checkoutPages', function (event, data) {
    if (typeof window.DDO != "undefined") {
        mapDDOData(data);
    }
});

function mapControlSectionToDDOPageName(sectionName) {
    var ddoPageName = "Unknown"; //Default Value
    switch (sectionName.toLowerCase()) {
        case "cartviewpagemode":
            ddoPageName = "afh:checkout:shopping cart";
            break;
        case "shipping":
            ddoPageName = "afh:checkout:shipping";
            break;
        case "billing":
            ddoPageName = "afh:checkout:billing";
            break;
        case "confirm":
            ddoPageName = "afh:checkout:order review";
            break;
        case "thankyou":
            ddoPageName = "afh:checkout:order confirmation";
            break;
    }

    return ddoPageName;
}

function mapDDOData(axJsonData) {
    var pageSection = axJsonData.pageData.pageSiteSection;
    var checkoutPageName = mapControlSectionToDDOPageName(pageSection);
    var satelliteCallName = checkoutPageName;
    DDO.pageData.pageName = checkoutPageName;
    DDO.checkoutPages = axJsonData.checkoutPages;
    if (typeof axJsonData.orderDetail != "undefined") {
        DDO.orderDetail = axJsonData.orderDetail;
    }
    if (satelliteCallName == "Unknown") {
        satelliteCallName = "checkout_page_flow";
    }
    reportToAdobeSatellite(satelliteCallName);
}

function reportToAdobeSatellite(trackingName) {
    try {
        if (window.console && window.console.log) {
            if (typeof window.DDO === "undefined") {
                console.log("window DDO object is not defined");
            }
            else {
                console.log(window.DDO);
            }
        }
        _satellite.track(trackingName);
    }
    catch (e) { }
};
var externalResources = {
    "en-us": [
        {
            "code": "String_1",
            "afmcode": "String_1",
            "value": "Shopping cart"
        },
        {
            "code": "String_2",
            "afmcode": "String_2",
            "value": "Item"
        },
        {
            "code": "String_3",
            "afmcode": "String_3",
            "value": "Item Price"
        },
        {
            "code": "String_4",
            "afmcode": "String_4",
            "value": "QTY"
        },
        {
            "code": "String_5",
            "afmcode": "String_5",
            "value": "Total"
        },
        {
            "code": "String_6",
            "afmcode": "String_6",
            "value": "Remove"
        },
        {
            "code": "String_7",
            "afmcode": "String_7",
            "value": "You Save"
        },
        {
            "code": "String_8",
            "afmcode": "String_8",
            "value": "Update quantity"
        },
        {
            "code": "String_9",
            "afmcode": "String_9",
            "value": "Subtotal"
        },
        {
            "code": "String_10",
            "afmcode": "String_10",
            "value": "Subtotal:"
        },
        {
            "code": "String_11",
            "afmcode": "String_11",
            "value": "Shipping and handling:"
        },
        {
            "code": "String_12",
            "afmcode": "String_12",
            "value": "Estimated Total:"
        },
        {
            "code": "String_13",
            "afmcode": "String_13",
            "value": "Total savings:"
        },
        {
            "code": "String_14",
            "afmcode": "String_14",
            "value": "CONTINUE"
        },
        {
            "code": "String_15",
            "afmcode": "String_15",
            "value": "There are no items in your cart."
        },
        {
            "code": "String_16",
            "afmcode": "String_16",
            "value": "Delivery information"
        },
        {
            "code": "String_17",
            "afmcode": "String_17",
            "value": "Delivery preference:"
        },
        {
            "code": "String_18",
            "afmcode": "String_18",
            "value": "Shipping Address"
        },
        {
            "code": "String_19",
            "afmcode": "String_19",
            "value": "First Name:"
        },
        {
            "code": "String_1097",
            "afmcode": "String_1097",
            "value": "Last Name:"
        },
        {
            "code": "String_20",
            "afmcode": "String_20",
            "value": "Country:"
        },
        {
            "code": "String_21",
            "afmcode": "String_21",
            "value": "United States"
        },
        {
            "code": "String_22",
            "afmcode": "String_22",
            "value": "Address 1:"
        },
        {
            "code": "String_23",
            "afmcode": "String_23",
            "value": "City:"
        },
        {
            "code": "String_24",
            "afmcode": "String_24",
            "value": "State:"
        },
        {
            "code": "String_25",
            "afmcode": "String_25",
            "value": "ZIP Code:"
        },
        {
            "code": "String_26",
            "afmcode": "String_26",
            "value": "Shipping Method"
        },
        {
            "code": "String_27",
            "afmcode": "String_27",
            "value": "Get shipping options"
        },
        {
            "code": "String_28",
            "afmcode": "String_28",
            "value": "GO BACK"
        },
        {
            "code": "String_29",
            "afmcode": "String_29",
            "value": "Name"
        },
        {
            "code": "String_30",
            "afmcode": "String_30",
            "value": "Billing information"
        },
        {
            "code": "String_31",
            "afmcode": "String_31",
            "value": "Contact information"
        },
        {
            "code": "String_32",
            "afmcode": "String_32",
            "value": "Email:"
        },
        {
            "code": "String_33",
            "afmcode": "String_33",
            "value": "Confirm Email:"
        },
        {
            "code": "String_34",
            "afmcode": "String_34",
            "value": "Payment method"
        },
        {
            "code": "String_35",
            "afmcode": "String_35",
            "value": "Card number"
        },
        {
            "code": "String_36",
            "afmcode": "String_36",
            "value": "Card type"
        },
        {
            "code": "String_37",
            "afmcode": "String_37",
            "value": "Expiration month"
        },
        {
            "code": "String_38",
            "afmcode": "String_38",
            "value": "Expiration year"
        },
        {
            "code": "String_39",
            "afmcode": "String_39",
            "value": "CCID"
        },
        {
            "code": "String_40",
            "afmcode": "String_40",
            "value": "What is this?"
        },
        {
            "code": "String_41",
            "afmcode": "String_41",
            "value": "Payment amount"
        },
        {
            "code": "String_42",
            "afmcode": "String_42",
            "value": "Billing Address"
        },
        {
            "code": "String_43",
            "afmcode": "String_43",
            "value": "Shipping and Billing address are the same"
        },
        {
            "code": "String_44",
            "afmcode": "String_44",
            "value": "Address2"
        },
        {
            "code": "String_45",
            "afmcode": "String_45",
            "value": "Review and confirm"
        },
        {
            "code": "String_46",
            "afmcode": "String_46",
            "value": "Order information"
        },
        {
            "code": "String_47",
            "afmcode": "String_47",
            "value": "Edit"
        },
        {
            "code": "String_48",
            "afmcode": "String_48",
            "value": "Credit card"
        },
        {
            "code": "String_49",
            "afmcode": "String_49",
            "value": "Proceed to Checkout"
        },
        {
            "code": "String_50",
            "afmcode": "String_50",
            "value": "Apply Promo code"
        },
        {
            "code": "String_51",
            "afmcode": "String_51",
            "value": "Estimated Tax:"
        },
        {
            "code": "String_52",
            "afmcode": "String_52",
            "value": "Submit order"
        },
        {
            "code": "String_53",
            "afmcode": "String_53",
            "value": "Thank you for your order"
        },
        {
            "code": "String_54",
            "afmcode": "String_54",
            "value": "Your order confirmation number is "
        },
        {
            "code": "String_55",
            "afmcode": "String_55",
            "value": "Street"
        },
        {
            "code": "String_56",
            "afmcode": "String_56",
            "value": "State"
        },
        {
            "code": "String_57",
            "afmcode": "String_57",
            "value": "Zipcode"
        },
        {
            "code": "String_58",
            "afmcode": "String_58",
            "value": "Email"
        },
        {
            "code": "String_59",
            "afmcode": "String_59",
            "value": "Payment"
        },
        {
            "code": "String_60",
            "afmcode": "String_60",
            "value": "Card Number"
        },
        {
            "code": "String_61",
            "afmcode": "String_61",
            "value": "Please select shipping method"
        },
        {
            "code": "String_62",
            "afmcode": "String_62",
            "value": "The confirm email address must match the email address."
        },
        {
            "code": "String_63",
            "afmcode": "String_63",
            "value": "Sorry, something went wrong. The shopping cart information couldn't be retrieved. Please refresh the page and try again."
        },
        {
            "code": "String_64",
            "afmcode": "String_64",
            "value": "Sorry, something went wrong. The product was not removed from the cart successfully. Please refresh the page and try again."
        },
        {
            "code": "String_65",
            "afmcode": "String_65",
            "value": "Sorry, something went wrong. The product quantity couldn't be updated. Please refresh the page and try again."
        },
        {
            "code": "String_66",
            "afmcode": "String_66",
            "value": "Sorry, something went wrong. Delivery methods could not be retrieved. Please refresh the page and try again."
        },
        {
            "code": "String_67",
            "afmcode": "String_67",
            "value": "Sorry, something went wrong. The shipping information was not stored successfully. Please refresh the page and try again."
        },
        {
            "code": "String_68",
            "afmcode": "String_68",
            "value": "Sorry, something went wrong. The payment card type information was not retrieved successfully. Please refresh the page and try again."
        },
        {
            "code": "String_69",
            "afmcode": "String_69",
            "value": "Sorry, something went wrong. The order submission was not successful. Please refresh the page and try again."
        },
        {
            "code": "String_70",
            "afmcode": "String_70",
            "value": "Invalid parameter"
        },
        {
            "code": "String_71",
            "afmcode": "String_71",
            "value": "validatorType attribute is not provided for validator binding."
        },
        {
            "code": "String_72",
            "afmcode": "String_72",
            "value": "Use text characters only. Numbers, spaces, and special characters are not allowed."
        },
        {
            "code": "String_73",
            "afmcode": "String_73",
            "value": "Use text characters only. Numbers, spaces, and special characters are not allowed."
        },
        {
            "code": "String_74",
            "afmcode": "String_74",
            "value": "The quantity field cannot be empty"
        },
        {
            "code": "String_75",
            "afmcode": "String_75",
            "value": "Select delivery method."
        },
        {
            "code": "String_76",
            "afmcode": "String_76",
            "value": "The email address is invalid."
        },
        {
            "code": "String_77",
            "afmcode": "String_77",
            "value": "Please enter the name."
        },
        {
            "code": "String_78",
            "afmcode": "String_78",
            "value": "The street number you entered may not be accurate. Please make corrections if needed, or use the address as entered."
        },
        {
            "code": "String_79",
            "afmcode": "String_79",
            "value": "Please enter your {addresstype} address."
        },
        {
            "code": "String_80",
            "afmcode": "String_80",
            "value": "Please enter your {addresstype} city."
        },
        {
            "code": "String_81",
            "afmcode": "String_81",
            "value": "Please enter your {addresstype} zip code."
        },
        {
            "code": "String_82",
            "afmcode": "String_82",
            "value": "Please enter your {addresstype} state."
        },
        {
            "code": "String_83",
            "afmcode": "String_83",
            "value": "Please enter the country."
        },
        {
            "code": "String_84",
            "afmcode": "String_84",
            "value": "Please specify a payment card name."
        },
        {
            "code": "String_85",
            "afmcode": "String_85",
            "value": "Please enter a valid card number."
        },
        {
            "code": "String_86",
            "afmcode": "String_86",
            "value": "Please enter a valid CCID."
        },
        {
            "code": "String_87",
            "afmcode": "String_87",
            "value": "Please specify a valid amount."
        },
        {
            "code": "String_88",
            "afmcode": "String_88",
            "value": "{0} PRODUCT(S)"
        },
        {
            "code": "String_89",
            "afmcode": "String_89",
            "value": "Included"
        },
        {
            "code": "String_90",
            "afmcode": "String_90",
            "value": "Color: {0}"
        },
        {
            "code": "String_91",
            "afmcode": "String_91",
            "value": "Size: {0}"
        },
        {
            "code": "String_92",
            "afmcode": "String_92",
            "value": "Style: {0}"
        },
        {
            "code": "String_93",
            "afmcode": "String_93",
            "value": "Sorry, something went wrong. The promotion code could not be added successfully. Please refresh the page and try again."
        },
        {
            "code": "String_94",
            "afmcode": "String_94",
            "value": "Sorry, something went wrong. The promotion code could not be removed successfully. Please refresh the page and try again."
        },
        {
            "code": "String_95",
            "afmcode": "String_95",
            "value": "Apply"
        },
        {
            "code": "String_96",
            "afmcode": "String_96",
            "value": "Promotion codes"
        },
        {
            "code": "String_97",
            "afmcode": "String_97",
            "value": "Please enter a promotion code"
        },
        {
            "code": "String_98",
            "afmcode": "String_98",
            "value": "Sorry, something went wrong. The channel configuration could not be retrieved successfully. Please refresh the page and try again."
        },
        {
            "code": "String_99",
            "afmcode": "String_99",
            "value": "Shipping:"
        },
        {
            "code": "String_100",
            "afmcode": "String_100",
            "value": ""
        },
        {
            "code": "String_101",
            "afmcode": "String_101",
            "value": "Select delivery options by item"
        },
        {
            "code": "String_102",
            "afmcode": "String_102",
            "value": "Find a store"
        },
        {
            "code": "String_103",
            "afmcode": "String_103",
            "value": "miles"
        },
        {
            "code": "String_104",
            "afmcode": "String_104",
            "value": "Available stores"
        },
        {
            "code": "String_105",
            "afmcode": "String_105",
            "value": "Store"
        },
        {
            "code": "String_106",
            "afmcode": "String_106",
            "value": "Distance"
        },
        {
            "code": "String_107",
            "afmcode": "String_107",
            "value": "Products are not available for pick up in the stores around the location you searched. Please update your delivery preferences and try again."
        },
        {
            "code": "String_108",
            "afmcode": "String_108",
            "value": "Sorry, something went wrong. An error occurred while trying to get stores. Please refresh the page and try again."
        },
        {
            "code": "String_109",
            "afmcode": "String_109",
            "value": "Sorry, your address could not be validated. Please re-enter a valid address."
        },
        {
            "code": "String_110",
            "afmcode": "String_110",
            "value": "Sorry, something went wrong. An error has occured while looking up the address you provided. Please refresh the page and try again."
        },
        {
            "code": "String_111",
            "afmcode": "String_111",
            "value": "Products are not available in this store"
        },
        {
            "code": "String_112",
            "afmcode": "String_112",
            "value": "Product availability:"
        },
        {
            "code": "String_113",
            "afmcode": "String_113",
            "value": "Products are not available in the selected store, Please select a different store"
        },
        {
            "code": "String_114",
            "afmcode": "String_114",
            "value": "Please select a store for pick up"
        },
        {
            "code": "String_115",
            "afmcode": "String_115",
            "value": "Store address"
        },
        {
            "code": "String_116",
            "afmcode": "String_116",
            "value": "Send to me"
        },
        {
            "code": "String_117",
            "afmcode": "String_117",
            "value": "Optional note"
        },
        {
            "code": "String_118",
            "afmcode": "String_118",
            "value": "Please enter email address for gift card delivery"
        },
        {
            "code": "String_119",
            "afmcode": "String_119",
            "value": "Sorry, something went wrong. An error occurred while trying to get the email address. Please enter the email address in the text box below"
        },
        {
            "code": "String_120",
            "afmcode": "String_120",
            "value": "Enter the shipping address and then click get shipping options to view the shipping options that are available for your area."
        },
        {
            "code": "String_121",
            "afmcode": "String_121",
            "value": "Delivery method"
        },
        {
            "code": "String_122",
            "afmcode": "String_122",
            "value": "Select your delivery preference"
        },
        {
            "code": "String_123",
            "afmcode": "String_123",
            "value": "Cancel"
        },
        {
            "code": "String_124",
            "afmcode": "String_124",
            "value": "Done"
        },
        {
            "code": "String_125",
            "afmcode": "String_125",
            "value": "for product: {0}"
        },
        {
            "code": "String_126",
            "afmcode": "String_126",
            "value": "Please select delivery preference for product {0}"
        },
        {
            "code": "String_127",
            "afmcode": "String_127",
            "value": "Add credit card"
        },
        {
            "code": "String_128",
            "afmcode": "String_128",
            "value": "Gift card"
        },
        {
            "code": "String_129",
            "afmcode": "String_129",
            "value": "Add gift card"
        },
        {
            "code": "String_130",
            "afmcode": "String_130",
            "value": "Loyalty card"
        },
        {
            "code": "String_131",
            "afmcode": "String_131",
            "value": "Add loyalty card"
        },
        {
            "code": "String_132",
            "afmcode": "String_132",
            "value": "Payment information"
        },
        {
            "code": "String_133",
            "afmcode": "String_133",
            "value": "Payment total:"
        },
        {
            "code": "String_134",
            "afmcode": "String_134",
            "value": "Order total:"
        },
        {
            "code": "String_135",
            "afmcode": "String_135",
            "value": "Gift card does not exist"
        },
        {
            "code": "String_136",
            "afmcode": "String_136",
            "value": "Gift card balance"
        },
        {
            "code": "String_137",
            "afmcode": "String_137",
            "value": "Card details"
        },
        {
            "code": "String_138",
            "afmcode": "String_138",
            "value": "Sorry, something went wrong. An error occurred while trying to get payment methods supported by the store. Please refresh the page and try again."
        },
        {
            "code": "String_139",
            "afmcode": "String_139",
            "value": "Please select payment method"
        },
        {
            "code": "String_140",
            "afmcode": "String_140",
            "value": "The expiration date is not valid. Please select valid expiration month and year and then try again"
        },
        {
            "code": "String_141",
            "afmcode": "String_141",
            "value": "Please enter a valid gift card number"
        },
        {
            "code": "String_142",
            "afmcode": "String_142",
            "value": "Get gift card balance"
        },
        {
            "code": "String_143",
            "afmcode": "String_143",
            "value": "Apply full amount"
        },
        {
            "code": "String_144",
            "afmcode": "String_144",
            "value": "Please enter a gift card number"
        },
        {
            "code": "String_145",
            "afmcode": "String_145",
            "value": "Sorry, something went wrong. An error occurred while trying to get gift card balance. Please refresh the page and try again."
        },
        {
            "code": "String_146",
            "afmcode": "String_146",
            "value": "Gift card payment amount cannot be zero"
        },
        {
            "code": "String_147",
            "afmcode": "String_147",
            "value": "Gift card payment amount is more than order total"
        },
        {
            "code": "String_148",
            "afmcode": "String_148",
            "value": "Gift card does not have sufficient balance"
        },
        {
            "code": "String_149",
            "afmcode": "String_149",
            "value": "Payment amount is different from the order total"
        },
        {
            "code": "String_150",
            "afmcode": "String_150",
            "value": "Sorry, something went wrong. An error occurred while trying to get loyalty card information. Please refresh the page and try again."
        },
        {
            "code": "String_151",
            "afmcode": "String_151",
            "value": "Please enter a valid loyalty card number"
        },
        {
            "code": "String_152",
            "afmcode": "String_152",
            "value": "Loyalty card payment amount cannot be zero"
        },
        {
            "code": "String_153",
            "afmcode": "String_153",
            "value": "Loyalty card payment amount is more than order total"
        },
        {
            "code": "String_154",
            "afmcode": "String_154",
            "value": "The loyalty card is blocked"
        },
        {
            "code": "String_155",
            "afmcode": "String_155",
            "value": "The loyalty card is not allowed for payment"
        },
        {
            "code": "String_156",
            "afmcode": "String_156",
            "value": "The loyalty payment amount exceeds what is allowed for this loyalty card in this transaction"
        },
        {
            "code": "String_157",
            "afmcode": "String_157",
            "value": "The loyalty card number does not exist"
        },
        {
            "code": "String_158",
            "afmcode": "String_158",
            "value": "Please select delivery preference"
        },
        {
            "code": "String_159",
            "afmcode": "String_159",
            "value": "Please select a delivery preference..."
        },
        {
            "code": "String_160",
            "afmcode": "String_160",
            "value": "Sorry, something went wrong. An error occurred while trying to get delivery methods information. Please refresh the page and try again."
        },
        {
            "code": "String_161",
            "afmcode": "String_161",
            "value": "Select address..."
        },
        {
            "code": "String_162",
            "afmcode": "String_162",
            "value": "You have not added loyalty card number to your order"
        },
        {
            "code": "String_163",
            "afmcode": "String_163",
            "value": "Enter a reward card for the current order. You can include only one reward card per order"
        },
        {
            "code": "String_164",
            "afmcode": "String_164",
            "value": "Sorry, something went wrong. An error occurred while trying to update reward card id in cart. Please refresh the page and try again."
        },
        {
            "code": "String_165",
            "afmcode": "String_165",
            "value": "Sorry, something went wrong. An error occurred while retrieving the country region information. Please refresh the page and try again."
        },
        {
            "code": "String_166",
            "afmcode": "String_166",
            "value": "TBD"
        },
        {
            "code": "String_167",
            "afmcode": "String_167",
            "value": "Mini Cart"
        },
        {
            "code": "String_168",
            "afmcode": "String_168",
            "value": "Ordering FAQ"
        },
        {
            "code": "String_169",
            "afmcode": "String_169",
            "value": "Return policy"
        },
        {
            "code": "String_170",
            "afmcode": "String_170",
            "value": "Store locator tool"
        },
        {
            "code": "String_171",
            "afmcode": "String_171",
            "value": "Continue shopping"
        },
        {
            "code": "String_172",
            "afmcode": "String_172",
            "value": "Cart Order Total"
        },
        {
            "code": "String_173",
            "afmcode": "String_173",
            "value": "View full cart contents"
        },
        {
            "code": "String_174",
            "afmcode": "String_174",
            "value": "Quantity:"
        },
        {
            "code": "String_175",
            "afmcode": "String_175",
            "value": "Added to your cart:"
        },
        {
            "code": "String_176",
            "afmcode": "String_176",
            "value": "Loading ..."
        },
        {
            "code": "String_177",
            "afmcode": "String_177",
            "value": "Sorry, something went wrong. The cart's promotion information couldn't be retrieved. Please refresh the page and try again."
        },
        {
            "code": "String_178",
            "afmcode": "String_178",
            "value": "Delivery method"
        },
        {
            "code": "String_179",
            "afmcode": "String_179",
            "value": "Updating shopping cart ..."
        },
        {
            "code": "String_180",
            "afmcode": "String_180",
            "value": "Submitting order ..."
        },
        {
            "code": "String_181",
            "afmcode": "String_181",
            "value": "Discount code"
        },
        {
            "code": "String_182",
            "afmcode": "String_182",
            "value": "Add coupon code"
        },
        {
            "code": "String_183",
            "afmcode": "String_183",
            "value": "Enter a discount code"
        },
        {
            "code": "String_184",
            "afmcode": "String_184",
            "value": "Please enter a valid promo code"
        },
        {
            "code": "String_185",
            "afmcode": "String_185",
            "value": "Sorry, something went wrong. An error occurred while retrieving the state/province information. Please refresh the page and try again."
        },
        {
            "code": "String_1098",
            "afmcode": "String_1098",
            "value": "Shipping"
        },
        {
            "code": "String_1099",
            "afmcode": "String_1099",
            "value": "Shipping:"
        },
        {
            "code": "String_1101",
            "afmcode": "String_1101",
            "value": "Sale price and shipping are based on shipping to "
        },
        {
            "code": "String_1102",
            "afmcode": "String_1102",
            "value": "zip code:"
        },
        {
            "code": "String_1103",
            "afmcode": "String_1103",
            "value": "(Update delivery zip code)"
        },
        {
            "code": "String_1104",
            "afmcode": "String_1104",
            "value": "Continue shopping"
        },
        {
            "code": "String_1105",
            "afmcode": "String_1105",
            "value": "Move to Wish List"
        },
        {
            "code": "String_1106",
            "afmcode": "String_1106",
            "value": "Est. Small Parcel (Shipping & Handling):"
        },
        {
            "code": "String_1107",
            "afmcode": "String_1107",
            "value": "Est. Home Delivery:"
        },
        {
            "code": "String_1108",
            "afmcode": "String_1108",
            "value": "Fulfilled By : "
        },
        {
            "code": "String_1109",
            "afmcode": "String_1109",
            "value": "On Sale"
        },
        {
            "code": "String_1110",
            "afmcode": "String_1110",
            "value": "Update"
        },
        {
            "code": "String_1111",
            "afmcode": "String_1111",
            "value": "Sorry, your address could not be validated. Please re-enter a valid address."
        },
        {
            "code": "String_1112",
            "afmcode": "String_1112",
            "value": "Zipcode can be of maximum 5 numbers"
        },
        {
            "code": "String_1113",
            "afmcode": "String_1113",
            "value": "Error processing payment authorization, Please click 'Go back' button and re-enter payment details"
        },
        {
            "code": "String_1114",
            "afmcode": "String_1114",
            "value": "Error Updating Zipcode. Please try again"
        },
        {
            "code": "String_1115",
            "afmcode": "String_1115",
            "value": "Go back"
        },
        {
            "code": "String_1116",
            "afmcode": "String_1116",
            "value": "Opt-in to Deals & Offers"
        },
        {
            "code": "String_1117",
            "afmcode": "String_1117",
            "value": "USE THIS ADDRESS"
        },
        {
            "code": "String_1118",
            "afmcode": "String_1118",
            "value": "Enter Shipping Address"
        },
        {
            "code": "String_1119",
            "afmcode": "String_1119",
            "value": "Choose a Shipping Address"
        },
        {
            "code": "String_1120",
            "afmcode": "String_1120",
            "value": "Contact Information (for shipping & delivery scheduling purposes)"
        },
        {
            "code": "String_1121",
            "afmcode": "String_1121",
            "value": "Agree to receive text survey about your purchase"
        },
        {
            "code": "String_1122",
            "afmcode": "String_1122",
            "value": "Country"
        },
        {
            "code": "String_1123",
            "afmcode": "String_1123",
            "value": "Order Submission in process... please wait..."
        },
        {
            "code": "String_1124",
            "afmcode": "String_1124",
            "value": "Address 2: (Optional)"
        },
        {
            "code": "String_1125",
            "afmcode": "String_1125",
            "value": "Phone Number:"
        },
        {
            "code": "String_1126",
            "afmcode": "String_1126",
            "value": "Alternate Phone Number (Optional):"
        },
        {
            "code": "String_1127",
            "afmcode": "String_1127",
            "value": "Contact Information (for shipping and delivery scheduling purposes)"
        },
        {
            "code": "String_1128",
            "afmcode": "String_1128",
            "value": "Alt:"
        },
        {
            "code": "String_1129",
            "afmcode": "String_1129",
            "value": "Email:"
        },
        {
            "code": "String_1130",
            "afmcode": "String_1130",
            "value": "Alt Email:"
        },
        {
            "code": "String_1131",
            "afmcode": "String_1131",
            "value": "Alt:"
        },
        {
            "code": "String_1132",
            "afmcode": "String_1132",
            "value": "Name on Card:"
        },
        {
            "code": "String_1133",
            "afmcode": "String_1133",
            "value": "Commencing your cart to checkout..."
        },
        {
            "code": "String_1134",
            "afmcode": "String_1134",
            "value": "No Payment Card Information provided"
        },
        {
            "code": "String_1135",
            "afmcode": "String_1135",
            "value": "No Shipping charges applied"
        },
        {
            "code": "String_1136",
            "afmcode": "String_1136",
            "value": "Alternate Email (Optional)"
        },
        {
            "code": "String_1137",
            "afmcode": "String_1137",
            "value": "Or "
        },
        {
            "code": "String_1138",
            "afmcode": "String_1138",
            "value": "Qty: "
        },
        {
            "code": "String_1139",
            "afmcode": "String_1139",
            "value": "Billing"
        },
        {
            "code": "String_1140",
            "afmcode": "String_1140",
            "value": "Confirm Your Order"
        },
        {
            "code": "String_1141",
            "afmcode": "String_1141",
            "value": "You applied promo code : "
        },
        {
            "code": "String_1142",
            "afmcode": "String_1142",
            "value": "Confirmation #"
        },
        {
            "code": "String_1143",
            "afmcode": "String_1143",
            "value": "Agree to receive a text survey on your purchase"
        },
        {
            "code": "String_1144",
            "afmcode": "String_1144",
            "value": "I Agree with the Terms and Conditions"
        },
        {
            "code": "String_1145",
            "afmcode": "String_1145",
            "value": " Please remove item having zero price."
        },
        {
            "code": "String_1146",
            "afmcode": "String_1146",
            "value": "Small Parcel (Shipping & Handling):"
        },
        {
            "code": "String_1147",
            "afmcode": "String_1147",
            "value": "Home Delivery:"
        },
        {
            "code": "String_1148",
            "afmcode": "String_1148",
            "value": "Please enter a number between 1 and 5000"
        },
        {
            "code": "String_1149",
            "afmcode": "String_1149",
            "value": "Please accept Terms & Conditions to complete your order"
        },
        {
            "code": "String_1150",
            "afmcode": "String_1150",
            "value": "The Delivery Zip Code Entered is not valid, please enter a new Delivery Zip Code"
        },
        {
            "code": "String_1151",
            "afmcode": "String_1151",
            "value": "Sorry, something went wrong. Address Validation is not successful. Please refresh the page and try again."
        },
        {
            "code": "String_1152",
            "afmcode": "String_1152",
            "value": "USA"
        },
        {
            "code": "String_1153",
            "afmcode": "String_1153",
            "value": "Update Delivery Zip Code:"
        },
        {
            "code": "String_1154",
            "afmcode": "String_1154",
            "value": "Are you sure you want to remove this product from the shopping cart?"
        },
        {
            "code": "String_1155",
            "afmcode": "String_1155",
            "value": "Remove from Cart"
        },
        {
            "code": "String_1156",
            "afmcode": "String_1156",
            "value": "Your Shopping Cart Is Empty"
        },
        {
            "code": "String_1157",
            "afmcode": "String_1157",
            "value": "(Required)"
        },
        {
            "code": "String_1158",
            "afmcode": "String_1158",
            "value": "Verify Your Address"
        },
        {
            "code": "String_1159",
            "afmcode": "String_1159",
            "value": "We checked your address with the U.S. Postal service and found some differences. Please click cancel to edit the address you entered or click 'Use This Address' button to use the suggested address."
        },
        {
            "code": "String_1160",
            "afmcode": "String_1160",
            "value": "Set of "
        },
        {
            "code": "String_1161",
            "afmcode": "String_1161",
            "value": "Tax could not be calculated.Please try again after sometime"
        },
        {
            "code": "String_1162",
            "afmcode": "String_1162",
            "value": "Your shopping cart is currently empty. Please "
        },
        {
            "code": "String_1163",
            "afmcode": "String_1163",
            "value": "to retrieve any items placed in your cart from a previous visit or continue shopping."
        }
        ,
        {
            "code": "String_1164",
            "afmcode": "String_1164",
            "value": "Promotion Code is not applied to any item in cart."
        },
        {
            "code": "String_1165",
            "afmcode": "String_1165",
            "value": "Promotion Code is already applied."
        },

        {
            "code": "String_1166",
            "afmcode": "String_1166",
            "value": "Sorry, at this time, we cannot ship to p.o. box. Please enter your street address."

        },
         {
             "code": "String_1167",
             "afmcode": "String_1167",
             "value": "poerror"

         },
          {
              "code": "String_1168",
              "afmcode": "String_1168",
              "value": "+1"

          },
          {
              "code": "String_1169",
              "afmcode": "String_1169",
              "value": "Phone number must be 10 digits and not contain special characters. Ex:1112223333"
          },
          {
              "code": "String_1170",
              "afmcode": "String_1170",
              "value": "Address First Name or Last Name may only contain alphabetic characters."
          },

          //=====================Phase 2 =====================================
          {
              "code": "String_1171",
              "afmcode": "String_1171",
              "value": "Free Shipping"
          },
          {
              "code": "String_1172",
              "afmcode": "String_1172",
              "value": "Free Home Delivery"
          }
          ,
          {
              "code": "String_1173",
              "afmcode": "String_1173",
              "value": "You have changed the delivery zip-code, price(s) in your cart may have changed."
          }
          ,
          {
              "code": "String_1174",
              "afmcode": "String_1174",
              "value": "You have entered a new delivery address, price(s) in your cart may have changed. Please confirm your order."
          }
                    ,
          {
              "code": "String_1175",
              "afmcode": "String_1175",
              "value": "Phone Number:"
          }
          ,
          {
              "code": "String_1176",
              "afmcode": "String_1176",
              "value": "Phone Number:"
          }
          ,
          {
              "code": "String_1177",
              "afmcode": "String_1177",
              "value": "Phone Number:"
          }
          ,
          {
              "code": "String_1178",
              "afmcode": "String_1178",
              "value": "Phone Number:"
          }
          ,
          {
              "code": "String_1179",
              "afmcode": "String_1179",
              "value": "Tel: "
          }
          ,
          {
              "code": "String_1180",
              "afmcode": "String_1180",
              "value": "Alternate Number: "
          }
          ,
          {
              "code": "String_1181",
              "afmcode": "String_1181",
              "value": "Tel: "
          }
          ,
          {
              "code": "String_1182",
              "afmcode": "String_1182",
              "value": "Alternate Number: (Highly Recommended)"
          }
          ,
          {
              "code": "String_1183",
              "afmcode": "String_1183",
              "value": "Additional Number: "
          }
          ,
          {
              "code": "String_1184",
              "afmcode": "String_1184",
              "value": "Contact Information (Shipping & Delivery Purposes)"
          }
          ,
          {
              "code": "String_1185",
              "afmcode": "String_1185",
              "value": "First Name:"
          }
          ,
          {
              "code": "String_1186",
              "afmcode": "String_1186",
              "value": "First Name:"
          }
          ,
          {
              "code": "String_1187",
              "afmcode": "String_1187",
              "value": "Last Name:"
          }
          ,
          {
              "code": "String_1188",
              "afmcode": "String_1188",
              "value": "Last Name:"
          }
          ,
          {
              "code": "String_1189",
              "afmcode": "String_1189",
              "value": "Address 1:"
          }
          ,
          {
              "code": "String_1190",
              "afmcode": "String_1190",
              "value": "Address 2: (Optional)"
          }
           ,
          {
              "code": "String_1191",
              "afmcode": "String_1191",
              "value": "City:"
          }
          ,
          {
              "code": "String_1192",
              "afmcode": "String_1192",
              "value": "State:"
          }
          ,
          {
              "code": "String_1193",
              "afmcode": "String_1193",
              "value": "ZIP Code:"
          }
          ,
          {
              "code": "String_1194",
              "afmcode": "String_1194",
              "value": "Country:"
          }
          ,
          {
              "code": "String_1195",
              "afmcode": "String_1195",
              "value": "Email:"
          }
          ,
          {
              "code": "String_1196",
              "afmcode": "String_1196",
              "value": "Confirm Email:"
          }
           ,
          {
              "code": "String_1197",
              "afmcode": "String_1197",
              "value": "GO BACK"
          }
         ,
          {

              "code": "String_1198",
              "afmcode": "String_1198",
              "value": "GO BACK"
          }
          ,
          {

              "code": "String_1199",
              "afmcode": "String_1199",
              "value": "Billing Address"
          }
          ,
           {

               "code": "String_1200",
               "afmcode": "String_1200",
               "value": "CONTINUE"
           }
           ,
           {

               "code": "String_1201",
               "afmcode": "String_1201",
               "value": "Continue shopping"
           }
           ,
           {

               "code": "String_1202",
               "afmcode": "String_1202",
               "value": "Continue shopping"
           }
            ,
           {

               "code": "String_1203",
               "afmcode": "String_1203",
               "value": "Proceed to Checkout"
           }
            ,
           {

               "code": "String_1204",
               "afmcode": "String_1204",
               "value": "Proceed to Checkout"
           }
           ,
           {

               "code": "String_1205",
               "afmcode": "String_1205",
               "value": "Shipping Address"
           }
           ,
           {

               "code": "String_1206",
               "afmcode": "String_1206",
               "value": "+1"
           }
           ,
           {

               "code": "String_1207",
               "afmcode": "String_1207",
               "value": "+1"
           }
           ,
           {

               "code": "String_1208",
               "afmcode": "String_1208",
               "value": "+1"
           }
           ,
           {

               "code": "String_1209",
               "afmcode": "String_1209",
               "value": "Email: "
           }
           ,
           {

               "code": "String_1210",
               "afmcode": "String_1210",
               "value": "Shipping Method"
           }
           ,
           {

               "code": "String_1211",
               "afmcode": "String_1211",
               "value": "Small Parcel (Shipping & Handling):"
           }
           ,
           {

               "code": "String_1212",
               "afmcode": "String_1212",
               "value": "Small Parcel (Shipping & Handling):"
           }
           ,
           {

               "code": "String_1213",
               "afmcode": "String_1213",
               "value": "Small Parcel (Shipping & Handling):"
           }
           ,
           {

               "code": "String_1214",
               "afmcode": "String_1214",
               "value": "Free Shipping"
           }
            ,
           {

               "code": "String_1215",
               "afmcode": "String_1215",
               "value": "Home Delivery:"
           }
            ,
           {

               "code": "String_1216",
               "afmcode": "String_1216",
               "value": "Home Delivery:"
           }
            ,
           {

               "code": "String_1217",
               "afmcode": "String_1217",
               "value": "Home Delivery:"
           }
            ,
           {

               "code": "String_1218",
               "afmcode": "String_1218",
               "value": "Free Home Delivery"
           }
            ,
           {

               "code": "String_1219",
               "afmcode": "String_1219",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1220",
               "afmcode": "String_1220",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1221",
               "afmcode": "String_1221",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1222",
               "afmcode": "String_1222",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1223",
               "afmcode": "String_1223",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1224",
               "afmcode": "String_1224",
               "value": "Subtotal:"
           }
            ,
           {

               "code": "String_1225",
               "afmcode": "String_1225",
               "value": "Estimated Tax:"
           }
            ,
           {

               "code": "String_1226",
               "afmcode": "String_1226",
               "value": "You Save"
           }
           ,
           {

               "code": "String_1227",
               "afmcode": "String_1227",
               "value": "You Save"
           }
            ,
           {

               "code": "String_1228",
               "afmcode": "String_1228",
               "value": "You Save"
           }
            ,
           {

               "code": "String_1229",
               "afmcode": "String_1229",
               "value": "Apply Promo Code"
           }
           ,
           {

               "code": "String_1230",
               "afmcode": "String_1230",
               "value": "Apply"
           }
           ,
           {

               "code": "String_1231",
               "afmcode": "String_1231",
               "value": "You applied promo code : "
           }
           ,
           {

               "code": "String_1232",
               "afmcode": "String_1232",
               "value": "Item"
           }
          ,
          {

              "code": "String_1233",
              "afmcode": "String_1233",
              "value": "Confirmation #"
          }
          ,
          {

              "code": "String_1234",
              "afmcode": "String_1234",
              "value": "Set of "
          }
          ,
          {

              "code": "String_1235",
              "afmcode": "String_1235",
              "value": "On Sale"
          }
           ,
          {

              "code": "String_1236",
              "afmcode": "String_1236",
              "value": "Move to Wish List"
          }
           ,
          {

              "code": "String_1237",
              "afmcode": "String_1237",
              "value": "Remove"
          }
           ,
          {

              "code": "String_1238",
              "afmcode": "String_1238",
              "value": "Loyalty card"
          }
           ,
          {

              "code": "String_1239",
              "afmcode": "String_1239",
              "value": "Loyalty card"
          }
             ,
          {

              "code": "String_1240",
              "afmcode": "String_1240",
              "value": "Edit"
          }
            ,
          {

              "code": "String_1241",
              "afmcode": "String_1241",
              "value": "Done"
          }
            ,
          {

              "code": "String_1242",
              "afmcode": "String_1242",
              "value": "Your Shopping Cart Is Empty"
          }
             ,
          {

              "code": "String_1243",
              "afmcode": "String_1243",
              "value": "Update"
          },
           //========================== Phase 2 =======================
          {

              "code": "String_1244",
              "afmcode": "String_1244",
              "value": "Free Shipping"
          },
          {

              "code": "String_1245",
              "afmcode": "String_1245",
              "value": "What's this?"
          }
          ,
          {

              "code": "String_1246",
              "afmcode": "String_1246",
              "value": "Why do we recommend an alternate phone number?  To ensure we can contact you to schedule your delivery. Providing a second number give as a better chance of reaching you."
          },
          {

              "code": "String_1247",
              "afmcode": "String_1247",
              "value": "Recommended for Scheduling & Delivery"
          },
          {
              "code": "String_1248",
              "afmcode": "String_1248",
              "value": "Please Enter Zipcode"
          },
          {
              "code": "String_1249",
              "afmcode": "String_1249",
              "value": "Please Enter Loyalty Number"
          },
          {
              "code": "String_1250",
              "afmcode": "String_1250",
              "value": "Please Click To Edit Reward"
          },
          {
              "code": "String_1251",
              "afmcode": "String_1251",
              "value": "Please Enter Promotion Code"
          },
          {
              "code": "String_1252",
              "afmcode": "String_1252",
              "value": "Please Enter Quantity"
          },
          {
              "code": "String_1253",
              "afmcode": "String_1253",
              "value": "Please Select Quantity"
          },
          {
              "code": "String_1254",
              "afmcode": "String_1254",
              "value": "Please Click to SignIn"
          },
          {
              "code": "String_1255",
              "afmcode": "String_1255",
              "value": "Please Enter First Name"
          },
          {
              "code": "String_1256",
              "afmcode": "String_1256",
              "value": "Please Enter Last Name"
          },
          {
              "code": "String_1257",
              "afmcode": "String_1257",
              "value": "(Sales tax will be applied during checkout)"
          },
          {
              "code": "String_1258",
              "afmcode": "String_1258",
              "value": "There appears to be a problem with the city, state and zip combination. Please try again."
          },
          {
              "code": "String_1259",
              "afmcode": "String_1259",
              "value": "Invalid city, state or zip combination."
          },



          {
              "code": "String_1300",
              "afmcode": "String_1300",
              "value": "Apply Promo Code(s)"
          },
          {
              "code": "String_1301",
              "afmcode": "String_1301",
              "value": "Edit Promo Code(s)"
          },
          {
              "code": "String_1302",
              "afmcode": "String_1302",
              "value": "Sorry, this code is invalid"
          },
          {
              "code": "String_1303",
              "afmcode": "String_1303",
              "value": "Apply Promo Code"
          },
          {
              "code": "String_1304",
              "afmcode": "String_1304",
              "value": "Enter Code:"
          },
          {
              "code": "String_1305",
              "afmcode": "String_1305",
              "value": "Did a Sales Associate Help You?"
          },
          {
              "code": "String_1306",
              "afmcode": "String_1306",
              "value": "RSA Code:"
          },
          {
              "code": "String_1307",
              "afmcode": "String_1307",
              "value": "(edit)"
          },
          {
              "code": "String_1308",
              "afmcode": "String_1308",
              "value": "(remove)"
          },
          {
              "code": "String_1309",
              "afmcode": "String_1309",
              "value": "Sorry, this code is invalid"
          },
           {
               "code": "String_1310",
               "afmcode": "String_1310",
               "value": "Sorry, something went wrong. The RSA Code could not be applied successfully. Please refresh the page and try again."
           },
            {
                "code": "String_1311",
                "afmcode": "String_1311",
                "value": "Please enter a RSA ID"
            },
             {
                 "code": "String_1312",
                 "afmcode": "String_1312",
                 "value": "Enter the code provided by our sales associate"
             },
             {
                 "code": "String_1313",
                 "afmcode": "String_1313",
                 "value": "This RSA Code has already been applied"
             }
    ]
}
;
/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/

(function(){
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    function clamp(element, options) {
        options = options || {};

        var self = this,
            win = window,
            opt = {
                clamp:              options.clamp || 2,
                useNativeClamp:     typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                splitOnChars:       options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                animate:            options.animate || false,
                truncationChar:     options.truncationChar || '…',
                truncationHTML:     options.truncationHTML
            },

            sty = element.style,
            originalText = element.innerHTML,

            supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
            clampValue = opt.clamp,
            isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
            truncationHTMLContainer;
            
        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


// UTILITY FUNCTIONS __________________________________________________________

        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function () {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight,
                lineHeight = getLineHeight(element);

            return Math.max(Math.floor(availHeight/lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
            }
            return parseInt(lh);
        }


// MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
        var splitOnChars = opt.splitOnChars.slice(0),
            splitChar = splitOnChars[0],
            chunks,
            lastChunk;
        
        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        function getLastChild(elem) {
            //Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                return getLastChild(Array.prototype.slice.call(elem.children).pop());
            }
            //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue == '' || elem.lastChild.nodeValue == opt.truncationChar) {
                elem.lastChild.parentNode.removeChild(elem.lastChild);
                return getLastChild(element);
            }
            //This is the last child we want, return it
            else {
                return elem.lastChild;
            }
        }
        
        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        function truncate(target, maxHeight) {
            if (!maxHeight) {return;}
            
            /**
             * Resets global variables.
             */
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }
            
            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');
            
            //Grab the next chunks
            if (!chunks) {
                //If there are more characters to try, grab the next one
                if (splitOnChars.length > 0) {
                    splitChar = splitOnChars.shift();
                }
                //No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }
                
                chunks = nodeValue.split(splitChar);
            }
            
            //If there are chunks left to remove, remove the last one and see if
            // the nodeValue fits.
            if (chunks.length > 1) {
                lastChunk = chunks.pop();
                applyEllipsis(target, chunks.join(splitChar));
            }
            //No more chunks can be removed using this character
            else {
                chunks = null;
            }
            
            //Insert the custom HTML before the truncation character
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
            }

            //Search produced valid chunks
            if (chunks) {
                //It fits
                if (element.clientHeight <= maxHeight) {
                    //There's still more characters to try splitting on, not quite done yet
                    if (splitOnChars.length >= 0 && splitChar != '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                    //Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
            //No valid chunks produced
            else {
                //No valid chunks even when splitting by letter, time to move
                //on to the next node
                if (splitChar == '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);
                    
                    reset();
                }
            }
            
            //If you get here it means still too big, let's keep truncating
            if (opt.animate) {
                setTimeout(function() {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            }
            else {
                return truncate(target, maxHeight);
            }
        }
        
        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }


// CONSTRUCTOR ________________________________________________________________

        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        }
        else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }

        var clampedText;
        if (supportsNativeClamp && opt.useNativeClamp) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        }
        else {
            clampValue += 1;
            var height = getMaxHeight(clampValue);
            if (height <= element.clientHeight) {
                clampedText = truncate(getLastChild(element), height);
            }
        }
        
        return {
            'original': originalText,
            'clamped': clampedText
        }
    }

    window.$clamp = clamp;
})();;
(function () {
    var script,
        scripts = document.getElementsByTagName('script')[0];

    function load(url) {
        script = document.createElement('script');
        script.async = true;
        script.src = url;
        scripts.parentNode.insertBefore(script, scripts);
    }

    load('//apis.google.com/js/platform.js');
}());;

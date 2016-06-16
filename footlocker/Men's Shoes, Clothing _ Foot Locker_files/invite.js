(function (define) {
define('invite', ['params', 'touchpoints', 'util'], function (Params, Touchpoints, Util) {

  var Invite = {
    rendered: false,
    visible: false
  };

  Invite.getUrlParameters = function () {
    var urlParameters = '';

    var qValueKeys = {
      cartTotal: "Q113198",
      customerId: "Q166",
      customValue1: "Q167",
      customValue2: "Q168",
      referrerId: "Q110692",
      referrerPage: "Q164",
      referrerUrl: "Q165",
      orderId: "Q104626",
      webAnalyticsId: "Q108752",
      zip: "Q113199"
    }

    if (Params.data !== undefined) {
      for (var key in Params.data) {
        urlArgName = qValueKeys[key] || key;
        urlParameters += '&' + urlArgName + '=' + encodeURIComponent(String(Params.data[key]));
      }
    }

    urlParameters += Invite.setProductData({viewed: true});
    urlParameters += Invite.setProductData({cart: true});

    urlParameters += '&pitch_type=' + Params.pitchType;

    return urlParameters;
  },

  Invite.setProductData = function (config) {
    config = typeof(config) === 'object' ? config : {cart: true};
    var params = '';
    var products = config.viewed ? Params.products : Params.cart
    var props = {};

    if (config.viewed) {
      props = {
        id: "pid",
        price: "price",
        title: "title"
      };
    } else {
      props = {
        id: "cartPid",
        price: "cartPrice",
        quantity: "cartQty",
        title: "cartTitle"
      };
    }

    if (products !== undefined && products.length) {
      var total = products.length,
        productId = [],
        productPrice = [],
        productTitle = [],
        productQuantity = [];

      for (var i = 0; i < total; i++) {
        var product = products[i];
        if (typeof(product) === 'object' && product.id) {
          productId.push(encodeURIComponent(product.id));
        } else {
          productId.push('');
        }

        if (typeof(product) === 'object' && product.price) {
          productPrice.push(encodeURIComponent(product.price));
        } else {
          productPrice.push('');
        }

        if (typeof(product) === 'object' && product.title) {
          productTitle.push(encodeURIComponent(product.title));
        } else {
          productTitle.push('');
        }

        if (config.cart) {
          if (typeof(product) === 'object' && product.quantity) {
            productQuantity.push(encodeURIComponent(product.quantity));
          } else {
            productQuantity.push(0);
          }
        }
      }

      var params = ['&', props.id, '=', productId.join(','), '&', props.price, '=', productPrice.join(','), '&', props.title, '=', productTitle.join(',')];

      if (config.cart) {
        params.push('&', props.quantity, '=', productQuantity.join(','));
      }

      params = params.join('');
    }

    return params;
  };

  Invite.logInvite = function (pitchType, touchpoint) {
    Util.log({
      pitchType: pitchType,
      touchpoint: touchpoint
    });
    var url = this.buildURLParams(Params.touchpointURL, {
      pitchType: pitchType,
      touchpoint: touchpoint
    });
    Util.loadScript(url);
  };

  Invite.buildURLParams = function (url, params) {
    if (this.getObjectSize(params) > 0) {
      url += (url.indexOf('?') === -1) ? '?' : '&';
      url += this.mapHash(params, function (value, key) {
        return [key, value].join('=');
      }).join('&');
    }
    return url;
  };

  Invite.openSurvey = function (url) {
    if (Params.surveyIframeEnabled) {
      Util.loadStylesheet(Params.cdnPath + '/css/vex.css');
      Util.loadStylesheet(Params.cdnPath + '/css/vex-theme-default.css');
      Invite.openSurveyIFrame(url);
    } else {
      Invite.openSurveyWindow(url);
    }
  };

  Invite.openSurveyWindow = function (url) {
    var width = 760,
      height = 275,
      xPos, yPos, options;

    if (typeof(url) !== 'string') { return; }

    yPos = screen.height - height;
    xPos = screen.width - width;
    if (yPos < 0) {
      yPos = 0;
    }
    if (xPos < 0) {
      xPos = 0;
    }

    options = 'width='  + width + ',height='  + height + ',top=' + yPos + ',left=' + xPos + ',screenY=' + yPos + ',screenX=' + xPos + ',status=1,toolbar=1,location=1,menubar=1,resizable=0,scrollbars=1';

    if (url.indexOf('deviceType=ANDROID') === -1) {
      var win = window.open(url, '', options);
      if (win) { win.blur(); }
      self.focus();
    }
  };

  Invite.openSurveyIFrame = function (url) {
    var width = Invite.getSurveyIframeWidth(),
      height = Invite.getSurveyIframeHeight(),
      positionStyle = Invite.getSurveyIframePositionStyle(),
      displayAsModal = (Params.surveyIframeOpacity >= 0 && Params.surveyIframeOpacity <= 1);

    var container = document.createElement('div'),
      bar = document.createElement('div'),
      brLogo = document.createElement('img'),
      show = document.createElement('span'),
      header = document.createElement('div'),
      close = document.createElement('img'),
      hide = document.createElement('div'),
      iframe = document.createElement('iframe');

    var overlay = null;

    if (displayAsModal) {
      overlay = document.createElement('div');
      overlay.className = 'vex-overlay';
      overlay.style.background = 'rgba(0, 0, 0, ' + Params.surveyIframeOpacity + ')';
      overlay.onclick = function () {
        overlay.parentNode.removeChild(overlay);
        if (container) {container.parentNode.removeChild(container);}
        Invite.logInvite(Params.pitchType, Touchpoints.SURVEY_IFRAME_CLOSE);
        Invite.surveyIframeVisible = false;
      };
    }

    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('height', height);
    iframe.setAttribute('src', url);
    iframe.setAttribute('width', width);

    close.setAttribute('style', 'cursor: pointer; float: right;');
    close.setAttribute('src', Params.cdnPath + '/images/close_box.gif');
    close.setAttribute('title', 'Close');
    close.onclick = function () {
      if (overlay) {overlay.parentNode.removeChild(overlay);}
      if (container) {container.parentNode.removeChild(container);}
      Invite.logInvite(Params.pitchType, Touchpoints.SURVEY_IFRAME_CLOSE);
      Invite.surveyIframeVisible = false;
    };

    hide.setAttribute('title', 'Hide');
    hide.setAttribute('style', 'border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #ABABAB; cursor: pointer; float: right; height: 0px; margin-right: 5px; width: 0px;');
    hide.onclick = function () {
      if (displayAsModal) {
        overlay.style.display = 'none';
        container.style.display = 'none';
      } else {
        Invite.fadeOut(overlay);
        Invite.fadeOut(container);
      }
      Invite.fadeIn(bar);
      Invite.logInvite(Params.pitchType, Touchpoints.SURVEY_IFRAME_MINIMIZE);
    }

    header.appendChild(close);
    header.appendChild(hide);
    header.setAttribute('style', 'background-color: #EEE; border-bottom: 1px solid #CCC; margin: 0; overflow: hidden; padding: 5px 5px 5px 0; text-align: right;');

    container.setAttribute('style', 'background-color: #FFF; border: 1px solid #CCC; height: ' + (height + 20 + 3) + 'px; position: fixed; width: ' + width + 'px; z-index: 2147483647;' + positionStyle);
    container.setAttribute('id', 'br_survey_container');
    container.appendChild(header);
    container.appendChild(iframe);

    brLogo.src = '//images.bizrate.com/eval/survey/invite_template/non-buyer/surveyByBZ.gif';
    brLogo.setAttribute('style', 'position: relative; top: 3px;');

    var closeMinimized = close.cloneNode(true);
    closeMinimized.style.position = 'relative';
    closeMinimized.style.top = '6px';
    closeMinimized.onclick = function () {
      bar.parentNode.removeChild(bar);
      Invite.logInvite(Params.pitchType, Touchpoints.SURVEY_IFRAME_CLOSE_MINIMIZED);
      if (overlay) {overlay.parentNode.removeChild(overlay);}
      if (container) {container.parentNode.removeChild(container);}
    };

    show.setAttribute('title', 'Show');
    show.setAttribute('style', 'border-bottom: 10px solid #ABABAB; border-left: 10px solid transparent; border-right: 10px solid transparent; cursor: pointer; float: right; height: 0px; margin-right: 5px; position: relative; top: 8px; width: 0px;');

    show.onclick = function () {
      Invite.fadeOut(bar);

      if (displayAsModal) {
        overlay.style.display = '';
        container.style.display = '';
      } else {
        Invite.fadeIn(overlay);
        Invite.fadeIn(container);
      }
      Invite.logInvite(Params.pitchType, Touchpoints.SURVEY_IFRAME_MAXIMIZE);
    }

    bar.appendChild(brLogo);
    bar.appendChild(closeMinimized);
    bar.appendChild(show);
    bar.setAttribute('style', 'background-color: #FFF; border: solid #CCC; border-radius: 10px 10px 0 0; border-width: 2px 2px 0 2px; bottom: 0; display: none; padding: 5px 5px 5px 0; position: fixed; right: 0; width: 200px; z-index: 2147483647;');

    if (displayAsModal) {
      document.body.appendChild(container);
      document.body.appendChild(overlay);
    } else {
      container.style.display = 'none';
      document.body.appendChild(container);
      Invite.fadeIn(container);
    }
    document.body.appendChild(bar);
    Invite.surveyIframeVisible = true;
  };

  Invite.getSurveyIframePositionStyle = function () {
    var position = Params.surveyIframePosition,
      style = '',
      height = Invite.getSurveyIframeHeight();

    switch (position) {
      case 'top-center':
        style = 'left: 0; margin: 0 auto 0 auto; right: 0; top: 0;';
        break;
      case 'center':
        style = 'left: 0; margin: -' + parseInt((height + 20) / 2) + 'px auto 0 auto; right: 0; top: 50%;';
        break;
      case 'bottom-center':
        style = 'bottom: 0; left: 0; margin: 0 auto 0 auto; right: 0;';
        break;
      case 'top-left':
        style = 'top: 1px; left: 1px;';
        break;
      case 'center-left':
        style = 'left: 0; margin: -' + parseInt((height + 20) / 2) + 'px 0 0 0; top: 50%;';
        break;
      case 'bottom-left':
        style = 'bottom: 1px; left: 1px;';
        break;
      case 'top-right':
        style = 'top: 1px; right: 1px;';
        break;
      case 'center-right':
        style = 'margin: -' + parseInt((height + 20) / 2) + 'px 0 0 0; right: 0; top: 50%;';
        break;
      case 'bottom-right':
        style = 'bottom: 1px; right: 1px;';
        break;
      default:
        style = Params.surveyIframePosition;
    }

    return style;
  };

  Invite.getSurveyIframeHeight = function () {
    var height = Params.surveyIframeHeight,
      vpHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (height === 'medium') {
      height = parseInt(vpHeight * 0.40);
    } else if (height === 'large') {
      height = parseInt(vpHeight * 0.70);
    } else if (height.match(/^[0-9\.]*%$/)) {
      height = parseInt(vpHeight * parseInt(height) * 0.01);
    }

    return parseInt(height);
  };

  Invite.getSurveyIframeWidth = function () {
    var width = Params.surveyIframeWidth,
        vpWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width === 'medium') {
        width = parseInt(vpWidth * 0.40);
    } else if (width === 'large') {
        width = parseInt(vpWidth * 0.70);
    } else if (width.match(/^[0-9\.]*%$/)) {
        width = parseInt(vpWidth * parseInt(width) * 0.01);
    }

    return parseInt(width);
  };

  Invite.mapHash = function (arr, callback) {
    var i, out;
    out = [];
    for (i in arr) {
      if (arr.hasOwnProperty(i)) {
        out.push(callback(arr[i], i));
      }
    }
    return out;
  };

  Invite.getObjectSize = function (obj) {
    var size, key;
    size = 0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  Invite.setStyle = function (el, styles) {
    if (!el) {return;}
    for (var style in styles) {
      if (style === 'float') {
        el.style['cssFloat'] = styles[style];
        el.style['styleFloat'] = styles[style];
        el.style[style] = styles[style];
      } else {
        el.style[style] = styles[style];
      }
    }
  };

  Invite.showInvite = function () {
    var multiCookie = Util.getCookie('cnx_sa'),
      showMulti = Params.invite && !Invite.rendered && !Invite.visible && Params.random < Params.percentage && !multiCookie && Util.isNumber(Params.pitchType),
      showPos = Params.invite && !Invite.rendered && !Invite.visible && Util.isNumber(Params.pitchType),
      showInvite = (Params.surveyType === 'multi' && showMulti) || (Params.surveyType === 'pos' && showPos);
    Util.log({
      invite: Params.invite,
      inviteType: Params.inviteType,
      multiCookie: multiCookie,
      percentage: Params.percentage,
      random: Params.random,
      rendered: Invite.rendered,
      surveyType: Params.surveyType,
      visible: Invite.visible
    });
    Util.log('showInvite:', showInvite);
    return showInvite;
  };

  Invite.getMobileOptimizedSite = function () {
    var viewPortString = 'name="viewport"';
    var headString = document.getElementsByTagName('head').item(0).innerHTML;
    return !(headString.indexOf(viewPortString) == -1);
  };

  Invite.fadeOut = function (el) {
    if (!el) { return; }
    var op = 1;
    var timer = setInterval(function () {
      if (op <= 0.1) {
        el.style.opacity = 0;
        clearInterval(timer);
        el.style.display = 'none';
          return;
      }
      el.style.opacity = op;
      op -= 0.1;
    }, 50);
  };

  Invite.fadeIn = function (el) {
    if (!el) { return; }
    var op = 0;
    el.style.opacity = op;
    el.style.display = 'inline-block';

    var timer = setInterval(function () {
      if (op >= 1.0) {
        el.style.opacity = 1;
        clearInterval(timer);
          return;
      }
      el.style.opacity = op;
      op = op + 0.1;
    }, 50);
  };

  return Invite;

});
}(_cnx.define));

(function (define) {
define('connexity', ['data', 'params', 'util'], function (Data, Params, Util) {

  function _setParam(key, value, validator) {
    if (typeof(validator) === 'function' && !validator(value)) {
      return;
    }
    Params[key] = value;
  };

  function _setData(key, value, validator) {
    if (typeof(validator) === 'function' && !validator(value)) {
      return;
    }
    Params.data[key] = value;
  };

  function _push() {
    for (var i = 0; i < arguments.length; i++) try {
      if (typeof arguments[i] === 'function') {
        arguments[i]();
      } else {
        _actions[arguments[i][0]].apply(this, arguments[i].slice(1));
      }
    } catch (e) {}
  };

  function _setProductData(product, products, inCart) {
    if (product === undefined || product === null) {
        return;
      }

      if (Util.isArray(product)) {
        var total = product.length;
        for (var i = 0; i < total; i++) {
          product[i].cart = inCart;
          products.push(product[i]);
          Data.sendProductData(product[i]);
        }
      } else if (Util.isObject(product)) {
        product.cart = inCart;
        products.push(product);
        Data.sendProductData(product);
      }
  };

  var validators = {
    boolean: function (value) {
      return (typeof(value) === 'boolean' || value.toLowerCase() === 'true' || value.toLowerCase() === 'false');
    },
    number: function (value) {
      return (value !== undefined && value !== null && !isNaN(value) && !isNaN(parseInt(value)));
    },
    numberOrString: function (value) {
      return (validators.number(value) || validators.string(value));
    },
    position: function (value) {
      return (value === null || value === '' || validators.numberOrString(value))
    },
    string: function (value) {
      return (typeof(value) === 'string' && value.length > 0);
    }
  };

  var _surveyTypes = ['multi', 'pos'],
    _defaultSurveyType = 'multi';

  var _actions = {

    debug: function (debug) {
      _setParam('debug', debug, validators.boolean);
    },

    frequency: function (frequency) {
      _setParam('frequency', frequency, validators.number);
    },

    invite: function (invite) {
      _setParam('invite', invite, validators.boolean);
    },

    mid: function (mid) {
      _setParam('mid', mid, validators.number);
    },

    pageId: function (id) {
      _setParam('pageId', id, validators.numberOrString);
    },

    pageScrollPercentage: function (scroll) {
      _setParam('pageScrollPercentage', scroll, validators.numberOrString);
    },

    pageViews: function (views) {
      _setParam('pageViews', views, validators.numberOrString);
    },

    percentage: function (percentage) {
      _setParam('percentage', percentage, validators.number);
    },

    posX: function (posX) {
      _setParam('posX', posX, validators.position);
    },

    posY: function (posY) {
      _setParam('posY', posY, validators.position);
    },

    surveyType: function (surveyType) {
      var total = _surveyTypes.length,
        valid = false;
      for (var i = 0; i < total; i++) {
        if (surveyType === _surveyTypes[i]) {
          valid = true;
          break;
        }
      }

      surveyType = valid ? surveyType : _defaultSurveyType;
      _setParam('surveyType', surveyType, validators.string);
    },

    bounce: function (enabled) {
      _setParam('bounce', enabled, validators.boolean);
    },

    timeOnPage: function (time) {
      _setParam('timeOnPage', time, validators.numberOrString);
    },

    timeOnSite: function (time) {
      _setParam('timeOnSite', time, validators.numberOrString);
    },

    inviteType: function (inviteType) {
      _setParam('inviteType', inviteType, validators.string);
    },

    zIndex: function (zIndex) {
      _setParam('zIndex', zIndex, validators.numberOrString);
    },

    cart: function (product) {
      _setProductData(product, Params.cart, true);
    },

    cartTotal: function (total) {
      _setData('cartTotal', total, validators.numberOrString);
    },

    checkout: function (checkout) {
      _setData('checkout', checkout, validators.boolean);
    },

    couponApplied: function (couponApplied) {
      _setData('couponApplied', couponApplied, validators.boolean);
    },

    customerId: function (customerId) {
      _setData('customerId', customerId, validators.string);
    },

    customValue1: function (value) {
      _setData('customValue1', value, validators.string);
    },

    customValue2: function (value) {
      _setData('customValue2', value, validators.string);
    },

    deliveryDate: function (date) {
      _setData('deliveryDate', date, validators.string);
    },

    orderId: function (id) {
      _setData('orderId', id, validators.numberOrString);
    },

    product: function (product) {
      _setProductData(product, Params.products, false);
    },

    referrerId: function (id) {
      _setData('referrerId', id, validators.numberOrString);
    },

    referrerPage: function (page) {
      _setData('referrerPage', page, validators.string);
    },

    referrerUrl: function (url) {
      _setData('referrerUrl', url, validators.string);
    },

    webAnalyticsId: function (id) {
      _setData('webAnalyticsId', id, validators.numberOrString);
    },

    zip: function (zip) {
      _setData('zip', zip, validators.numberOrString);
    }

  };

  var Connexity = {
    push: _push
  };

  return Connexity;

});
}(_cnx.define));

(function (define) {
define('data', ['params', 'util', 'jquery'], function (Params, Util, $) {

  var Data = {

    init: function () {
      Util.log('init');
      Params.sendData = true;

      Data.sendProductDataList(Params.products);
      Data.sendProductDataList(Params.cart);

      window.addEventListener('beforeunload', function () {
        Data.sendMetaData();
      });
    },

    sendProductDataList: function (products) {
      Util.log('sendProductDataList');
      var total = products.length;
      for (var i = 0; i < total; i++) {
        Util.log(JSON.stringify(products[i]));
        Data.sendProductData(products[i]);
      }
    },

    sendProductData: function (product) {
      var data = {
        cart: product.cart,
        img: product.imageUrl,
        mid: Params.mid,
        orgPrice: product.originalPrice,
        pid: product.id,
        price: product.price,
        title: product.title,
        qty: product.quantity
      };

      Data.sendData('/collect/product', data);
    },

    sendMetaData: function () {
      var data = {
        checkout: Params.data.checkout,
        coupon: Params.data.couponApplied,
        lat: Params.latitude,
        long: Params.longitude,
        mid: Params.mid,
        pageStart: Util.getCookie('cnx_pg'),
        pv: Util.getCookie('cnx_views'),
        t : new Date().valueOf(),
        uid: Params.userId,
        zip: Params.zipCode
      };

      Data.sendData('/collect', data);
    },

    sendData: function (endpoint, data) {
      Util.extend(data, {
        rid: Util.getCookie('cnx_rid'),
        sessionId: Params.sessionId,
        sessionStart: Util.getCookie('cnx_start'),
        survey: Params.surveyType
      });

      var args = $.param(data),
        url = [Params.servicePath, endpoint, '?', args].join('');

      if (Params.sendData) {
        Util.log(url);
        if (typeof(window.navigator.sendBeacon) === 'function') {
          Util.log('sendBeacon');
          navigator.sendBeacon(url);
        } else {
          Util.log('getScript');
          $.getScript(url);
        }
      } else {
        Util.log('sendData === false');
      }
    }

  };

  return Data;

});
}(_cnx.define));

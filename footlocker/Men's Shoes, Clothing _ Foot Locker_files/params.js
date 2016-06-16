(function (define) {
  define('params', function () {

  var Params = {
    cart: [],
    data: {
      checkout: false,
      couponApplied: false
    },
    products: [],
    sendData: false
  };

  return Params;

});
}(_cnx.define));

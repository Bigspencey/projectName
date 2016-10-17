(function (define) {
define('rips', ['jquery', 'util'], function ($, Util) {

  var Rips = {
    dudeURL : 'https://dude.connexity.net/',

    dudeTimeout : 3000,

    dudeFields : "GENDER,YOB,ZIP,MOB,CITY,DMA,RGN,TZ,IP4,CC",

    setDudeURL : function (url) {
      Rips.dudeURL = url;
    },

    setDudeTimeout : function (timeout) {
      Rips.dudeTimeout = timeout;
    },

    setDudeFields : function (fields) {
      Rips.dudeFields = fields;
    },

    getUserToken : function (callbackFn) {
      var requestTID=encodeURIComponent("RESULTS=data(DEMO),fields(" + Rips.dudeFields + ")");
      var responseTID=encodeURIComponent("TID:JSONP:func=" + callbackFn + ";params=#CXT_TID#:JSON:#RESULTS#,#CXT_UID#");

      var url = Rips.dudeURL + '?data='  + requestTID + '&response=' + responseTID ;

      var req = $.ajax({
        url : url,
        dataType: "jsonp",
        timeout: Rips.dudeTimeout,
        crossDomain: true,
        jsonpCallback : callbackFn,
        callbackFunction: callbackFn
      }).fail(function (jqxhr, status, errorThrown) {
        Util.log("** Rips Dude Callback timedout **. Calling callback function without data.");
        window[this.callbackFunction]();
      });
    }
  };

  return Rips;
});
}(_cnx.define));

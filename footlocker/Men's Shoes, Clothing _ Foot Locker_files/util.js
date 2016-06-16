(function (define) {
define('util', ['params'], function (Params) {

  var Util = {

    escape: function (s) {
      return ((typeof(s) === 'string') ? s.replace(/'/g, '&#39;').replace(/"/g, '&quot;') : s);
    },

    extend: function (destination, source) {
      var destination = typeof(destination) === 'object' ? destination : {};
      var prop;
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          destination[prop] = source[prop];
        }
      }

      return destination;
    },

    getCookie: function (name) {
      name += '=',
        list = document.cookie.split(';');

      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        while (c.charAt(0) === ' ') { c = c.substring(1); }
        if (c.indexOf(name) === 0) { return c.substring(name.length, c.length); }
      }
    },

    getIEVersion: function () {
      var ua = window.navigator.userAgent,
        re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"),
        version = -1;
      if (re.exec(ua) !== null) {
        version = parseFloat(RegExp.$1);
      }
      return version;
    },

    getObjectLength: function (obj) {
      var length = 0, prop, i;

      if (typeof(obj) !== 'object' && (typeof(obj) !== 'function' || obj === null)) {
        throw new TypeError('getObjectLength called on non-object');
        return;
      }

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          length++;
        }
      }

      return length;
    },

    isArray: function (a) {
      return (!!a) && (a.constructor === Array);
    },

    isIE: function () {
      return window.navigator.appName === 'Microsoft Internet Explorer';
    },

    isNumber: function (val) {
      return val !== undefined && val !== null && !isNaN(val) && !isNaN(parseInt(val));
    },

    isObject: function (o) {
      return (!!o) && (o.constructor === Object);
    },

    isSafari: function () {
      var isSafari = false;
      if (window && window.navigator && window.navigator.userAgent) {
        var ua = window.navigator.userAgent;
        isSafari = ua.match(/safari/i) && !ua.match(/chrome/i);
      }
      return isSafari;
    },

    loadScript: function (url, callback) {
      var sc;
      sc = document.createElement('script');
      sc.type = 'text/javascript';
      if (callback !== undefined) {
        if (sc.readyState) {
          sc.onreadystatechange = function () {
            if (sc.readyState == 'loaded' || sc.readyState == 'complete') {
              sc.onreadystatechange = null;
              callback();
            }
          };
        } else {
          sc.onload = function() {
            callback();
          };
        }
      }
      sc.src = url;
      document.getElementsByTagName('head')[0].appendChild(sc);
    },

    loadStylesheet: function (href) {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    },

    log: function () {
      if (typeof(console) === 'object' && typeof(console.log) === 'function' && Params.debug) {
        console.log.apply(console, arguments);
      }
      return arguments;
    },

    removeCookie: function (name, domain) {
      var expiration = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = [name, '=', '', ';path=/;domain=', domain, ';', expiration].join('');
    },

    setCookie: function (name, value, expires, domain) {
      var expiration = '';
      if (this.isNumber(expires)) {
        var d = new Date();
        expires = expires * 1000; // Convert seconds to milliseconds
        d.setTime(d.getTime() + expires);
        expiration = 'expires=' + d.toGMTString();
      }
      document.cookie = [name, '=', escape(value), ';path=/;domain=', domain, ';', expiration].join('');
    },

    isNewSession: function () {
      return (Util.getStoredSessionId() !== Params.sessionId);
    },

    getStoredSessionId: function () {
      return Util.getCookie('cnx_sid');
    },

    refreshSession: function () {
      var storedSessionId = Util.getStoredSessionId(),
        now = new Date(),
        expires = 60 * 60 * 24 * 365, // 1 year
        pageViews = Util.getCookie('cnx_views');

      if (Util.isNewSession()) {
        pageViews = 1;
        Util.setCookie('cnx_sid', Params.sessionId, expires, Params.domain);
        Util.setCookie('cnx_start', now.valueOf(), expires, Params.domain);
        Util.setCookie('cnx_rid', Params.respondentId, expires, Params.domain);
        if (!Util.isNumber(Params.frequency) || Params.frequency <= 0) {
          Util.removeEventCookies();
        }
      } else {
        if (Util.isNumber(pageViews)) {
          pageViews++;
        } else {
          pageViews = 1;
        }
      }

      Util.setCookie('cnx_views', pageViews, expires, Params.domain);
      Util.setCookie('cnx_pg', now.valueOf(), expires, Params.domain);
    },

    removeEventCookies: function () {
      // Remove time on site, page views and sa invite frequency cookies
      Util.removeCookie('cnx_t_tos', Params.domain);
      Util.removeCookie('cnx_t_views', Params.domain);
      Util.removeCookie('cnx_sa', Params.domain);
    }

  };

  return Util;

});
}(_cnx.define));

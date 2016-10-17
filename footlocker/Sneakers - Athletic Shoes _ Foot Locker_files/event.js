(function (define) {
define('event', ['invite', 'ouibounce', 'params', 'util', 'jquery'], function (Invite, ouibounce, Params, Util, $) {

  var events = {},
    monitor = null;

  var Event = {

    config: {},

    trigger: null,

    bindEvents: function (config) {
      Event.config = config;
      if (typeof(Event.config.callback) !== 'function') {
        Event.config.callback = function () {};
      }

      var now = new Date();

      if (Params.surveyType === 'multi') {
        // Time on site
        var timeOnSiteCookie = 'cnx_t_tos';
        if (Util.isNumber(Util.getCookie(timeOnSiteCookie))) {
          events.timeOnSite = {name: 'time on site'};
        } else {
          var value,
            expires = null;
          if (Util.isNumber(Params.timeOnSite) && Params.timeOnSite > 0) {
            value = now.valueOf() + (Params.timeOnSite * 1000);

            if (Util.isNumber(Params.frequency) && Params.frequency > 0) {
              expires = Params.frequency;
            }

            Util.setCookie(timeOnSiteCookie, value, expires, Params.domain);
            events.timeOnSite = {name: 'time on site'};
          }
        }

        // Page views
        if (Util.isNumber(Params.pageViews) && Params.pageViews > 0) {
          var pageViewsCookie = 'cnx_t_views',
            pageViews = Util.getCookie(pageViewsCookie);

          if (Util.isNumber(pageViews)) {
            pageViews++;
          } else {
            pageViews = 1;
          }

          var expires = null;

          if (Util.isNumber(Params.frequency) && Params.frequency > 0) {
            expires = Params.frequency;
          }

          Util.setCookie(pageViewsCookie, pageViews, expires, Params.domain);
          events.pageViews = {name: 'page views', total: pageViews};
        }

      }

      // Time on page
      if (Util.isNumber(Params.timeOnPage) && Params.timeOnPage > 0) {
        timeOnPage = now.valueOf() + (Params.timeOnPage * 1000);
        events.timeOnPage = {name: 'time on page', timeOnPage: timeOnPage};
      }

      // Page scroll percentage
      if (Util.isNumber(Params.pageScrollPercentage) && Params.pageScrollPercentage > 0) {
        events.pageScrollPercentage = {name: 'page scroll percentage'};
      }

      // Bounce
      if (Params.bounce) {
        events.bounce = {name: 'bounce'};
      }
    },

    monitorEvents: function () {

      if (Util.getObjectLength(events)) {
        var monitorCallback = function () {

          var now = new Date();

          for (var key in events) {
            var event = events[key];

            // Time on site
            if (event.name === 'time on site') {
              var timeOnSiteCookie = 'cnx_t_tos',
                timeOnSite = Util.getCookie(timeOnSiteCookie);

              if (Util.isNumber(timeOnSite) && timeOnSite < now.valueOf()) {
                Event.handleEvent('timeOnSite');
                if (Params.invite) {
                  Util.removeCookie(timeOnSiteCookie, Params.domain);
                }
              }
            }

            // Time on page
            if (event.name === 'time on page') {
              if (Util.isNumber(event.timeOnPage) && event.timeOnPage < now.valueOf()) {
                if (Invite.showInvite()) {
                  Event.handleEvent('timeOnPage');

                  delete events.timeOnPage;
                  if (!events.timeOnSite) {clearInterval(monitor);}
                }
              }
            }

          }
        }

        if (events.timeOnSite || events.timeOnPage) {
          monitor = setInterval(monitorCallback, 10000);
        }

        // Page scroll percentage
        if (events.pageScrollPercentage) {
          var scrollHandler = function (e) {
            var height = $(document).height(),
              scroll = $(window).scrollTop(),
              percentage = parseInt(scroll / height * 100);
              Util.log('pageScrollPercentage:', percentage);

            if (Params.pageScrollPercentage <= percentage) {
              Util.log('pageScrollPercentage: condition met');
              $(window).off('scroll', scrollHandler);
              Event.handleEvent('pageScrollPercentage');
            }
          };
          $(window).scroll(scrollHandler);
        }

        // Page views
        if (events.pageViews) {
          if (events.pageViews.total >= Params.pageViews) {
            var pageViewsCookie = 'cnx_t_views';
            if (Params.invite) {
              Util.removeCookie(pageViewsCookie, Params.domain);
            }
            Event.handleEvent('pageViews');
          }
        }

        //Bounce
        if (events.bounce) {
          var ouibounceConfig = {
            aggressive: true,
            callback: function () {
              Event.handleEvent('bounce');
            },
            cookieName: "cnx_exit",
            delay: 0,
            sensitivity: 20,
            sitewide: true,
            timer: 1000
          };

          ouibounce(false, ouibounceConfig);
        }

      } else {
        Event.handleEvent();
      }
    },

    handleEvent: function (trigger) {
      if (Invite.showInvite()) {
        if (trigger) {
          Params.touchpointURL = Invite.buildURLParams(Params.touchpointURL, { trigger: trigger});
          Params.surveyUrl = Invite.buildURLParams(Params.surveyUrl, { trigger: trigger});
        }
        Event.config.callback();
      }
    },

    stopMonitoring: function () {
      events = {};
      clearInterval(monitor);
    }

  };

  return Event;

});
}(_cnx.define));

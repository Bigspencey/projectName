(function() {

  /*
   * This code should live on any page where we want to track Optimizely events without Optimizely's snippet being present.
   * It can be added to the page natively or delivered via a tag manager. The event_dispatcher.js code must be initialized before optimizelyTrackEvent() can be called.
   *
   * Author: Spencer Smitherman (spencer@optimizely.com)
   * 10/17/16
   *
   * 1. Configure custom event in Optimizely under "Implementation" > "Events".
   * 2. Take the API Name and pass it as a string to the `eventName` parameter.
   * 3. Add the custom event to any campaign on the dashboard.
   * 4. Go to the campaign, select "API Names" on the right rail.
   * 5. Use the Metric ID as the `eventId` parameter when making the trackOptimizelyEvent() call.
   *
   * Usage Example: trackOptimizelyEvent("converted", "7582971455");
  */

  var optimizelyObject = JSON.parse(localStorage.getItem("optimizelyOfflineData_" + getCookie("optimizelyEndUserId")));
  var request_url = 'https://logx.optimizely.com/log/event';
  var eventFeatures = [];
  var contentType = 'application/json';
  var visitor = optimizelyObject.visitor;
  optimizelyObject.userFeatures = [];

  // Populate userFeatures array
  for (var behavior in visitor.defaultBehavior) {
    optimizelyObject.userFeatures.push({ type: "defaultBehavior",
                                         name: behavior, id: null,
                                         value: visitor.defaultBehavior[behavior],
                                         shouldIndex: true
                                      });
  }

  function getCookie(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
  }

  /**
   * @param {string} Event Name
   * @param {string} Event ID
  **/
  
  window.trackOptimizelyEvent = function(eventName, eventId) {
    var eventName = eventName;
    var eventEntityId = eventId;
    var eventId = "eventId" + eventEntityId + Math.random().toString().substring(2);
    var request_payload = {

      "accountId": optimizelyObject.accountId,

      "activationId": "ActivationID_" + Math.random().toString().substring(2),

      "activeViews": [],

      "clientEngine": "offline",

      "clientVersion": "0.32.0",

      "eventEntityId": eventEntityId,

      "eventFeatures": eventFeatures,

      "eventId": eventId,

      "eventMetrics": [],

      "eventName": eventName,

      "eventType": "other",

      "isGlobalHoldback": false,

      "layerStates": optimizelyObject.layerStatesArray,

      "projectId": optimizelyObject.projectId,

      "relatedEvents": [],

      "revision": optimizelyObject.revision,

      "sessionId": optimizelyObject.sessionId,

      "timestamp": Date.now(),

      "userFeatures": optimizelyObject.userFeatures,

      "visitorId": optimizelyObject.visitorId
     
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", request_url, true);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(JSON.stringify(request_payload));
  }

})();
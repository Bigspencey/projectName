(function() {

  // -------------------------------------- //
  // Author: Spencer Smitherman (spencer@optimizely.com)
  // 10/7/16
  //
  // 1. Configure custom event in Optimizely under "Implementation" > "Events".
  // 2. Take the API Name and assign it as a string to the `eventName` variable.
  // 3. Add the custom event to any campaign on the dashboard.
  // 4. Go to the campaign, select "API Names" in the right rail.
  // 5. Assign the metric ID to the eventEntityId variable.
  //
  // -------------------------------------- //

  var eventFeatures = [];
  var eventId = "eventId" + eventEntityId + Math.random().toString().substring(2);
  var optimizelyObject = JSON.parse(localStorage.getItem("optimizelyOfflineData_" + getCookie("optimizelyEndUserId")));
  var request_url = 'https://logx.optimizely.com/log/event';
  var contentType = 'application/json';
  var visitor = optimizelyObject.visitor;
  optimizelyObject.userFeatures = [];

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
    var eventName = eventName; // "converted"
    var eventEntityId = eventId; // "7582971455" - "Converted" for 6444573170
    var request_payload = {

      "accountId": optimizelyObject.accountId,

      "activationId": "ActivationID_" + Math.random().toString().substring(2),

      "activeViews": [],

      "clientEngine": "js",

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

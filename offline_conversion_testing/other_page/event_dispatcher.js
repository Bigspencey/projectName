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

  var eventName = "converted";
  var eventEntityId = "7582971455"; // "Converted" for 6444573170

  var eventFeatures = [];
  var eventId = "eventId" + eventEntityId + Math.random().toString().substring(2);
  var optimizelyObject = JSON.parse(localStorage.getItem("optimizelyOfflineData_" + getCookie("optimizelyEndUserId")));
  var request_url = 'https://logx.optimizely.com/log/event';
  var contentType = 'application/json';
  optimizelyObject.userFeatures = retrieveUserFeatures(optimizelyObject);

  function getCookie(name) {
    var match = document.cookie.match(name+'=([^;]*)');
    return match ? match[1] : undefined;
  }

  function retrieveUserFeatures(optimizelyObject) {
    var visitor = optimizelyObject.visitor;
    optimizelyObject.userFeatures = [];
    for (var behavior in visitor.defaultBehavior) {
      optimizelyObject.userFeatures.push({ type: "defaultBehavior",
                                       name: behavior, id: null,
                                       value: visitor.defaultBehavior[behavior],
                                       shouldIndex: true
                                     });
    }
  }

  var request_payload = {

    // Used by backend: yes
    // Description: The ID of the account this client.
    // Optional: No

    "accountId": optimizelyObject.accountId,

    "activationId": "ActivationID_" + Math.random().toString().substring(2),

    "activeViews": [],

    "clientEngine": "js",

    "clientVersion": "0.32.0",

    // Used by backend: yes
    // Description: The entity key can be a View.id or a UserEvent.id (page id or event id). All conversions happen based on these ids.
    // Optional: No

    "eventEntityId": eventEntityId,

    "eventFeatures": eventFeatures,

    // Used by backend: yes
    // Description: This is a guid generated to deduplicate hits. If there are 10 events with the same 
    //              eventId, they will be counted as 1.
    // Optional: No

    "eventId": eventId,

    // Used by backend: yes
    // Description: Indicates a value related to an event that happened. Mostly used for revenue
    // Optional: No, but can be an empty array.

    "eventMetrics": [],

    "eventName": eventName,

    "eventType": "other",

    "isGlobalHoldback": false,

    "layerStates": optimizelyObject.layerStatesArray,

    // Used by backend: yes
    // Description: The ID of the project this client is generated for
    // Optional: No

    "projectId": optimizelyObject.projectId,

    "relatedEvents": [],

    "revision": optimizelyObject.revision,

    // Used by backend: yes
    // Description: The unique identifier for a session. Based on these values, the backend deduplicates conversions for sessions. 
    // Optional: No

    "sessionId": optimizelyObject.sessionId,

    // Used by backend: yes
    // Description: A timestamp of when the event occured used by stats engine to calculate statistical significance.
    // Optional: No

    "timestamp": Date.now(),

    // Used by backend: yes
    // Description: Formerly known as "segments", these are user-level attributes.
    // Optional: Yes. If it isn't set, the last know values will remain valid.

    "userFeatures": optimizelyObject.userFeatures,

    // Used by backend: yes
    // Description: The unique identifier for a visitor. Based on these values, the backend deduplicates conversions.
    // Optional: No

    "visitorId": optimizelyObject.visitorId
   
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", request_url, true);
  xhr.setRequestHeader('Content-Type', contentType);
  xhr.send(JSON.stringify(request_payload));

})();

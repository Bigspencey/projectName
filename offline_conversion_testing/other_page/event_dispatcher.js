

  // -------------------------------------- //
  // Author: Spencer Smitherman (spencer@optimizely.com)
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
  var optimizelyObject = JSON.parse(localStorage.getItem("optimizelyOfflineData"));
  var request_url = 'https://p13nlog.dz.optimizely.com/log/event';

  var request_payload = {

    "accountId": optimizelyObject.accountId,

    "activationId": optimizelyObject.activationId,

    "activeViews": optimizelyObject.activeViews,

    "clientEngine": optimizelyObject.clientEngine,

    "clientVersion": optimizelyObject.clientVersion,

    "eventEntityId": eventEntityId,

    "eventFeatures": eventFeatures,

    "eventId": eventId,

    "eventMetrics": optimizelyObject.eventMetrics,

    "eventName": eventName,

    "eventType": optimizelyObject.eventType,

    "isGlobalHoldback": optimizelyObject.isGlobalHoldback,
    // fix this.
    "layerStates": [optimizelyObject.layerStatesArray],

    "projectId": optimizelyObject.projectId,

    "relatedEvents": optimizelyObject.relatedEvents,

    "revision": optimizelyObject.revision,

    "sessionId": optimizelyObject.sessionId,

    "timestamp": Date.now(),

    "userFeatures": optimizelyObject.userFeatures,

    "visitorId": optimizelyObject.visitorId
   
  }
  
  $.post(request_url, request_payload, function(data) {
    debugger;
  });

// var request_url = 'https://p13nlog.dz.optimizely.com/log/event';

// var method = 'POST';

// var contentType = 'application/json';

// var request_payload = {
//   // Used by backend: yes
//   // Description: This is a guid generated to deduplicate hits. If there are 10 events with the same 
//   //              eventId, they will be counted as 1. 
//   // Hot to get: Someone can generate their own random guid for every event.
//   // Optional: No
//   "eventId": "09975dab-9888-4cb1-9223-95c24977d695",
//   // Used by backend: yes
//   // Description: A timestamp of when the event occured used by stats engine to calculate statistical significance. 
//   //              Sometimes used to create backdated conversion (for correction).
//   // Hot to get: The client or partner can generate a timestamp themselves. If no timestamp is present, the log server 
//   //             will use the server time (but Mike has to check that).
//   // Optional: No  
//   "timestamp": Date.now(),
//   // Used by backend: yes
//   // Description: The ID of the project this client is generated for
//   // Hot to get: optimizely.get('data').projectId
//   // Optional: No  
//   "projectId": "6444573170",
//   // Used by backend: yes
//   // Description: The ID of the account this client is generated for
//   // Hot to get: optimizely.get('data').accountId 
//   // Optional: No  
//   "accountId": "1416366117",
//   // Used by backend: yes
//   // Description: The unique identifier for a session. Based on these values, the backend deduplicates conversions for sessions. 
//   // Hot to get: var id = optimizely.get('session').sessionId
//   // Optional: No  
//   "sessionId": "036f5538-4cc4-4db9-b59e-f8e41e59ea7e",
//   // Used by backend: yes
//   // Description: The unique identifier for a visitor. Based on these values, the backend deduplicates conversions. 
//   // Hot to get: var id = optimizely.get('visitor_id').UUID ? optimizely.get('visitor_id').UUID : optimizely.get('visitor_id').randomId;
//   // Optional: No  
//   "visitorId": optimizely.get('visitor_id').randomId,
//   // Used by backend: yes
//   // Description: Indicates a value related to an event that happened. Mostly used for revenue
//   // Hot to get: In the example of a phone tracking integration, there might have been a sale 
//   //             during the call. If this is logged in the phone tracking system, the logged 
//   //             value should be used to indicate the value related to the event.
//   // Optional: No, but can be an empty array  
//   "eventMetrics": [{
//     name: "revenue",
//     value: 5000
//   }],
//   // Used by backend: yes
//   // Description: This used to be segments in the old product. 
//   // How to get: ??
//   // Optional: Yes.  If it isn't set, the last know values will remain valid.
//   "userFeatures": [{
//     // values from optimizely.get('visitor');
//   }],
//   // Used by backend: yes
//   // Description: At the moment the backend is not able to support API_NAME's for events. The entity key can be a View.id and a 
//   //              UserEvent.id (page id or event id). All conversions happen based on these ids
//   // How to get: Needs to be created by a user. When it is created by a user, the user can find the id 
//   //             by going to: Implementation -> Pages/Events -> Click on the entity you want 
//   //             to convert on -> see address bar.
//   // Optional: No
//   "eventEntityId": "6265844182",
//   // Used by backend: no
//   "eventType": "view_activated",
//   // Used by backend: no
//   "eventName": "6265844182"
//     // Used by backend: no
//   "revision": "38",
//   // Used by backend: no
//   "clientEngine": "js",
//   // Used by backend: no
//   "clientVersion": "0.18.0",
//   // Used by backend: no
//   "activeViews": [{...
//   }],
//   // Used by backend: no
//   "isGlobalHoldback": false,
//   // Used by backend: no
//   "relatedEvents": [],
//   // Used by backend: no
//   "layerStates": [{...
//   }],
//   // Used by backend: no
//   "eventFeatures": [{
//     "id": null,
//     "shouldIndex": true,
//     "type": "view_category",
//     "name": "",
//     "value": "other"
//   }],
//   // Used by backend: no
//   "activationId": "c397f042-c231-4b1b-993e-5d4530e274ba"
// };

// var params = "lorem=ipsum&name=alpha";
// var xhr = new XMLHttpRequest();
// xhr.open(method, request_url, true);

// //Send the proper header information along with the request
// xhr.setRequestHeader("Content-type", contentType);

// xhr.send(params);

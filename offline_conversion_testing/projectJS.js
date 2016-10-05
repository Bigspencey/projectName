/*
 * This code should live in Project JavaScript. It compiles all necessary information about the visitor and commits the data to its own namespace in localStorage.
 * 10/7/16
 * Author: Spencer Smitherman (spencer@optimizely.com)
*/

window.optimizely = window.optimizely || [];

function collectDynamicData(layerState, retrieveUserFeatures, commitToLocalStorage) {
  var dynamicData = {};
  dynamicData.projectId = window.optimizely.get('data').projectId;
  dynamicData.accountId = window.optimizely.get('data').accountId;
  dynamicData.sessionId = window.optimizely.get('session').sessionId;
  dynamicData.visitorId = window.optimizely.get('visitor_id').randomId;
  dynamicData.revision = window.optimizely.get('data').revision;
  dynamicData.activationId = "ActivationID_" + Math.random().toString().substring(2);
  dynamicData.layerStatesArray = { actionActivationId: null,
                        actionSessionId: null,
                        actionTimestamp: null,
                        actionTriggered: false,
                        decision: { experimentId: layerState.data.decision.experimentId,
                                    isLayerHoldback: layerState.data.decision.isCampaignHoldback,
                                    variationId: layerState.data.decision.variationId
                                  },
                        decisionActivationId: dynamicData.activationId,
                        decisionSessionId: dynamicData.sessionId,
                        decisionTicket: { audiences: layerState.data.decisionTicket.audienceIds,
                                          bucketingId: layerState.data.decisionTicket.bucketingId
                                        },
                        decisionTimestamp: Date.now(),
                        layerId: layerState.data.campaign.id,
                        revision: dynamicData.revision
                      };
  retrieveUserFeatures(dynamicData, commitToLocalStorage);
}

function retrieveUserFeatures(dynamicData, commitToLocalStorage) {
  var visitor = optimizely.get('visitor');
  dynamicData.userFeatures = [];
  for (var behavior in visitor.defaultBehavior) {
    dynamicData.userFeatures.push({ type: "defaultBehavior",
                                     name: behavior, id: null,
                                     value: visitor.defaultBehavior[behavior],
                                     shouldIndex: true
                                   });
  }
  commitToLocalStorage(dynamicData);
}

function collectStaticData() {
  var staticData = { eventMetrics: [],
                     relatedEvents: [],
                     activeViews: [],
                     clientEngine: "js",
                     clientVersion: "0.30.0",
                     isGlobalHoldback: false,
                     eventType: "other"
                   };
  return staticData;
}

function merge_objects(staticData, dynamicData){
    var optimizelyObject = {};
    for (var name in staticData) {
      optimizelyObject[name] = staticData[name];
    }
    for (var name in dynamicData) {
      optimizelyObject[name] = dynamicData[name];
    }
    return optimizelyObject;
}

function commitToLocalStorage(dynamicData) {
  var staticData = collectStaticData();
  var optimizelyObject = merge_objects(staticData, dynamicData);
  return localStorage.setItem("optimizelyOfflineData", JSON.stringify(optimizelyObject));
}

window.optimizely.push({
  type: 'addListener',
  filter: {
    type: 'lifecycle',
    name: "campaignDecided"
  },
  handler: function(layerState) {
    collectDynamicData(layerState, retrieveUserFeatures, commitToLocalStorage);
  },
});

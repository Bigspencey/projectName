/*
 * This code should live in Project JavaScript. It compiles all necessary information about the visitor and commits the data to its own namespace in localStorage.
 * 10/7/16
 * Author: Spencer Smitherman (spencer@optimizely.com)
*/

window.optimizely = window.optimizely || [];

function collectDynamicData(layerState, commitToLocalStorage) {
  var dynamicData = {};
  dynamicData.projectId = window.optimizely.get('data').projectId;
  dynamicData.accountId = window.optimizely.get('data').accountId;
  dynamicData.sessionId = window.optimizely.get('session').sessionId;
  dynamicData.visitorId = window.optimizely.get('visitor_id').randomId;
  dynamicData.revision = window.optimizely.get('data').revision;
  dynamicData.activationId = "ActivationID_" + Math.random();
  dynamicData.userFeatures = retrieveUserFeatures();
  dynamicData.layerStatesArray = { actionActivationId: null,
                        actionSessionId: null,
                        actionTimestamp: null,
                        actionTriggered: false,
                        decision: { experimentId: layerState.data.decision.experimentId,
                                    isLayerHoldback: layerState.data.decision.isLayerHoldback,
                                    variationId: layerState.data.decision.variationId
                                  },
                        decisionActivationId: activationId,
                        decisionSessionId: sessionId,
                        decisionTicket: { audiences: layerState.data.decisionTicket.audienceIds,
                                          bucketingId: layerState.data.decisionTicket.bucketingId
                                        },
                        decisionTimestamp: Date.now(),
                        layerId: layerState.data.layer.id,
                        revision: revision
                      };
  commitToLocalStorage(dynamicData);
}

function retrieveUserFeatures() {
  var visitor = optimizely.get('visitor');
  var featuresArray = [];
  for (var behavior in visitor.defaultBehavior) {
    featuresArray.push({ type: "defaultBehavior",
                         name: behavior, id: null,
                         value: visitor.defaultBehavior[behavior],
                         shouldIndex: true
                       });
  }
  return featuresArray;
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

function commitToLocalStorage(dynamicData) {
  var staticData = collectStaticData();
  return localStorage.setItem("optimizelyOfflineData", "test");
}

window.optimizely.push({
  type: 'addListener',
  filter: {
    type: 'lifecycle',
    name: "layerDecided"
  },
  handler: function(layerState) {
    collectDynamicData(layerState, commitToLocalStorage);
  },
});

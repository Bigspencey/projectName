/*
 * This code should live in Project JavaScript. It compiles all necessary information about the visitor and commits the data to its own namespace in localStorage.
 * 10/7/16
 * Author: Spencer Smitherman (spencer@optimizely.com)
*/

window.optimizely = window.optimizely || [];
var optimizelyObject = {};
optimizelyObject.layerStatesArray = [];

function collectVisitorData(layerState, commitToLocalStorage) {
  optimizelyObject.projectId = window.optimizely.get('data').projectId;
  optimizelyObject.accountId = window.optimizely.get('data').accountId;
  optimizelyObject.sessionId = window.optimizely.get('session').sessionId;
  optimizelyObject.visitorId = window.optimizely.get('visitor_id').randomId;
  optimizelyObject.revision = window.optimizely.get('data').revision;
  optimizelyObject.visitor = window.optimizely.get('visitor');
  optimizelyObject.layerStatesArray.push({ actionActivationId: null,
                        actionSessionId: null,
                        actionTimestamp: null,
                        actionTriggered: false,
                        decision: { experimentId: layerState.data.decision.experimentId,
                                    isLayerHoldback: layerState.data.decision.isCampaignHoldback,
                                    variationId: layerState.data.decision.variationId
                                  },
                        decisionActivationId: optimizelyObject.activationId,
                        decisionSessionId: optimizelyObject.sessionId,
                        decisionTicket: { audiences: layerState.data.decisionTicket.audienceIds,
                                          bucketingId: layerState.data.decisionTicket.bucketingId
                                        },
                        decisionTimestamp: Date.now(),
                        layerId: layerState.data.campaign.id,
                        revision: optimizelyObject.revision
                      });
  commitToLocalStorage(optimizelyObject);
}

function commitToLocalStorage(optimizelyObject) {
  return localStorage.setItem("optimizelyOfflineData_" + optimizelyObject.visitorId, JSON.stringify(optimizelyObject));
}

window.optimizely.push({
  type: 'addListener',
  filter: {
    type: 'lifecycle',
    name: "campaignDecided"
  },
  handler: function(layerState) {
    collectVisitorData(layerState, commitToLocalStorage);
  },
});

function FlifPage(){this.initFlif();}FlifPage.prototype.initFlif=function(){$("body").on("click",".linkFlif",function(e){var self=$(this);e.preventDefault();e.stopPropagation();if($(this).data("qtipBinded")){return true;}else{var article=$(this).parents("article");var table=$(this).parents("table");if((article.length>0&&article.attr("id")=="flightSummaryArticle")||(table.length>0&&table.hasClass("list_flight_connection"))){var h=undefined;if(article.length>0&&article.attr("id")=="flightSummaryArticle"){section=$(this).parents("section");h=section.prev().prev();}else{if(table.length>0&&table.hasClass("list_flight_connection")){h=table.prev();section=table.find("tbody");}}if(typeof h!=="undefined"&&typeof section!=="undefined"){if(!self.data("flifRPfix")){h.on("click",function(){if(!section.hasClass("none")){self.trigger("closeOnDemnand");}});self.data("flifRPfix",true);}}}var addClass="";if(self.data("addClass")!=undefined){addClass=self.data("addClass");}$(this).qtip({content:{text:$("#tooltip_flif").html(),title:{text:" ",button:$('<small class="fr ico close" title="Delete"></small>')}},position:{target:"event",effect:false,viewport:$(window),my:"bottom center",at:"top center",adjust:{method:"none shift"}},style:{tip:{width:23,height:13},width:240},show:{event:"click",solo:true},events:{show:function(event){self.on("closeOnDemnand",function(){$(event.target).hide();});$(event.target).find(".close").on("click",function(){$(event.target).hide();});var flightNumber=$(event.originalEvent.currentTarget).attr("data-flight-number");if(flightNumber!=""){$(event.target).find("#tooltip_flif_flight_number em ").text(flightNumber);$(event.target).find("#tooltip_flif_flight_number").show();}else{$(event.target).find("#tooltip_flif_flight_number").hide();}var operatedBy=$(event.originalEvent.currentTarget).attr("data-operated-by");if(operatedBy!=""){$(event.target).find("#tooltip_flif_operated_by em ").text(operatedBy);$(event.target).find("#tooltip_flif_operated_by").show();}else{$(event.target).find("#tooltip_flif_operated_by").hide();}var baggageAllowance=$(event.originalEvent.currentTarget).attr("data-baggage-allowance");if(baggageAllowance!=""){$(event.target).find("#tooltip_flif_baggage_allowance em ").text(baggageAllowance);$(event.target).find("#tooltip_flif_baggage_allowance").show();}else{$(event.target).find("#tooltip_flif_baggage_allowance").hide();}var baggageAllowanceLink=$(event.originalEvent.currentTarget).attr("data-baggage-allowance-link");if(baggageAllowanceLink!=""){$(event.target).find("#tooltip_flif_baggage_allowance_link a").attr("href",baggageAllowanceLink);$(event.target).find("#tooltip_flif_baggage_allowance_link").show();}else{$(event.target).find("#tooltip_flif_baggage_allowance_link").hide();}var aircraft=$(event.originalEvent.currentTarget).attr("data-aircraft");if(aircraft!=""){$(event.target).find("#tooltip_flif_aircraft em").text(aircraft);$(event.target).find("#tooltip_flif_aircraft").show();var anacLink=$(event.originalEvent.currentTarget).attr("data-anac-link");if(anacLink!=""){$(event.target).find("#tooltip_flif_anac_link a").attr("href",anacLink);$(event.target).find("#tooltip_flif_anac_link").show();}else{$(event.target).find("#tooltip_flif_anac_link").hide();}}else{$(event.target).find("#tooltip_flif_aircraft").hide();$(event.target).find("#tooltip_flif_anac_link").hide();}var airlineCompany=$(event.originalEvent.currentTarget).attr("data-airline-company");if(airlineCompany!=""){$(event.target).find("#tooltip_flif_airline_company em").text(airlineCompany);$(event.target).find("#tooltip_flif_airline_company").show();}else{$(event.target).find("#tooltip_flif_airline_company").hide();}var ontimePerformance=$(event.originalEvent.currentTarget).attr("data-ontime-performance");if(ontimePerformance!=""){$(event.target).find("#tooltip_flif_ontime_performance a").attr("href",ontimePerformance);$(event.target).find("#tooltip_flif_ontime_performance").show();}else{$(event.target).find("#tooltip_flif_ontime_performance").hide();}}},hide:{event:false}});if($(this).hasClass("rightPanelLinkFlif")){$(this).qtip("api").set("position.my","bottom right");}$(this).data("qtipBinded",true);$(this).trigger("click");}});};$(document).ready(function(){window.theFlifPage=new FlifPage();});
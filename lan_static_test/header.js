function Header(){this.init();}Header.prototype.init=function(){$("#locbutton").on("click",function(){$("#locbutton").addClass("active");$("#locpanel").slideDown();$("#locarrow").addClass("arrow-over").removeClass("arrow-down");});$("#locpanel").on("mouseleave",function(){$("#locbutton").removeClass("active");$("#locpanel").slideUp();$("#locarrow").removeClass("arrow-over").addClass("arrow-down");});var self=this;$(".changeCountryLink").on("click",function(e){if($(this).data("externallink")){e.preventDefault();self.popinHandler($(this).attr("href"));}else{var form=$("form[name='CHANGE_MARKET_FORM']");var language=$(this).data("language");var market=$(this).data("market");$(form).find("input[name='WDS_MARKET']").val(market);$(form).find("input[name='LANGUAGE']").val(language);$(form).submit();$.blockUI();}});$("#goTop").click(function(){$(window).scrollTop(0);});};Header.prototype.popinHandler=function(externalLink){var popin=$("#changeSitePopin");$("#changeSitePopin button").off("click");$("#changeSitePopin button").on("click",function(){window.location=externalLink;});popin.dialog({autoOpen:true,draggable:false,width:800,modal:true,resizable:false});};Header.prototype.initLangSelector=function(){$("#langSelector").selectBox().change(function(){var market=clientSideData.MARKET_BY_LANGUAGE[$(this).val()];$("#CHANGE_MARKET_FORM input[name=WDS_MARKET]").val(market);$("#CHANGE_MARKET_FORM").submit();});};$(document).ready(function(){window.theHeader=new Header();window.theHeader.initLangSelector();});
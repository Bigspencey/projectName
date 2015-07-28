jQuery(document).ready(function(){$("body").on("click","button#cancel",closeGeneralModal);
jQuery("#digitalCouponCarousel").jcarousel({wrap:null,scroll:3});
$(".numberAutoTab").keyup(autoTabReplaceHomePage);
$("input#mobile_number_1").on("click",function(event){if($("input#mobile_number_1").is(":checked")){jQuery("#mobile_number_2").parent().children("label").removeClass("disabled");
jQuery("#mobile_number_2").removeAttr("disabled");
jQuery("#mobile_number_2").parent().parent().children(".text").removeClass("disabled");
jQuery("input#mobile_number_2").removeClass("checked");
jQuery("input#mobile_number_2").removeAttr("checked");
}else{jQuery("#mobile_number_2").parent().children("label").addClass("disabled");
jQuery("#mobile_number_2").attr("disabled","disabled");
jQuery("#mobile_number_2").parent().parent().children("div.text").addClass("disabled");
}});
});
function refreshCoupons(url){$.post(url,function(data){$("#ajaxCategoryDisplay").html(data);
changeLoadMoreText();
});
}$(document).ready(function(){$("div.cat-load-more").on("click",function(){var totalShowing=$("#totalShowing").val();
totalShowing=totalShowing*1+30;
var categoryCode=$("#categoryCode").val();
var categoryCount=$("#categoryCount").val();
var loadMoreUrl=$("#loadMoreUrl").val();
var loadMoreUrlSortTypeCode=$("#loadMoreUrlSortTypeCode").val();
if(categoryCode==""){var url=loadMoreUrl+"?howMany="+totalShowing+"&sortTypeCode="+loadMoreUrlSortTypeCode;
}else{var url=loadMoreUrl+"?howMany="+totalShowing+"&categoryCode="+categoryCode+"&categoryCount="+categoryCount;
}refreshCoupons(url);
});
$("#sortBySelect").on("change",function(){var url=contextRoot+"/digitalcoupon/"+"nonregisterusercoupons.jsp";
var sortBySelect=$("#sortBySelect").val();
var totalShowing=$("#totalShowing").val();
var url=url+"?"+"sortTypeCode="+sortBySelect+"&"+"howMany="+totalShowing;
$("#loadMoreUrlSortTypeCode").val(sortBySelect);
refreshCoupons(url);
});
});
function changeLoadMoreText(){var totalShowing=$("#totalShowing").val()*1;
var categoryCount=$("#categoryCount").val();
if(categoryCount==""){var totalRecords=$("#totalCouponsAvailable").val()*1;
}else{var totalRecords=categoryCount;
}$("div.result-search").html("<span>"+totalRecords+"</span>"+" Results");
if(totalShowing<totalRecords){$("div.cat-load-container").children("span").html("Showing "+totalShowing+" of "+totalRecords);
$("div.cat-load-more").show();
}else{$("div.cat-load-container").children("span").html("Showing "+totalRecords+" of "+totalRecords);
$("div.cat-load-more").hide();
}jQuery(".valign").each(function(){jQuery(this).position({my:"center",at:"center",of:jQuery(this).parent()});
});
jQuery(".cat-coupon-description .couponDesc").each(function(index){var titleText=jQuery(this).text();
truncateWord(jQuery(this),titleText,100);
});
}function submitDigitalCouponForm(){$("#digitalCouponForm").submit();
}function validateDCMobileNo(mobNo1,mobNo2,mobNo3,pin){var userAccountdMobileNumber=$("#userAccountdMobileNumber").val();
var mobileNumberFromMyaccount=$("#userAccountdMobileNumberMyAccount").val();
var pageName=$("#myaccount").val();
var returnVal=0;
if(pageName!=null&&pageName!=""&&pageName!=undefined&&pageName=="myAccountPage"){returnVal=1;
if((mobNo1==undefined||mobNo1=="")||(mobNo2==undefined||mobNo2=="")||(mobNo3==undefined||mobNo3=="")||(pin==undefined||pin=="")||(mobNo1+mobNo2+mobNo3).length<10){returnVal=1;
}else{if(mobileNumberFromMyaccount!=undefined&&mobileNumberFromMyaccount!=""&&mobileNumberFromMyaccount!=mobNo1+mobNo2+mobNo3){return 2;
}}return returnVal;
}if((mobNo1==undefined||mobNo1=="")||(mobNo2==undefined||mobNo2=="")||(mobNo3==undefined||mobNo3=="")||(pin==undefined||pin=="")||(jQuery("#mobile_number_1:checked").length==0)||(mobNo1+mobNo2+mobNo3).length<10){returnVal=1;
}else{if(userAccountdMobileNumber!=undefined&&userAccountdMobileNumber!=""&&userAccountdMobileNumber!=mobNo1+mobNo2+mobNo3){return 2;
}else{returnVal=1;
}}return returnVal;
}function validateLoyaltyMobileNo(){var mobNo1=jQuery("mobNo1").val();
var mobNo2=jQuery("mobNo2").val();
var mobNo3=jQuery("mobNo3").val();
console.log("mobNo1 : "+mobNo1);
console.log("mobNo2 : "+mobNo2);
console.log("mobNo3 : "+mobNo3);
var PIN=jQuery("PIN").val();
var returnVal=0;
if((mobNo1==undefined)&&(mobNo2==undefined)&&(mobNo3==undefined)&&(PIN==undefined)){returnVal=1;
}else{if((((mobNo1!=null)&&($.trim(mobNo1)!=""))&&((mobNo2!=null)&&($.trim(mobNo2)!=""))&&(mobNo3!=null)&&($.trim(mobNo3)!=""))||((PIN!=null)&&($.trim(PIN)!=""))){if(jQuery("#mobile_number_1:checked").length==0){returnVal=2;
}else{returnVal=3;
}}}return returnVal;
}function loadLoyaltyMobileValidation(){jQuery("#mobile_number_error").attr("style","display:none;;");
var returnVal=validateLoyaltyMobileNo();
if(returnVal==2){jQuery("#mobile_number_error").attr("style","display:inline-block;");
$(window).scrollTop($("#mobile_number_error").offset().top);
}else{if(returnVal==3){loadMobileValidation();
}else{if(returnVal==1){$("#mnrForm").submit();
}}}}function loadDigitalCouponMobileValidation(){jQuery("#mobile_number_error").attr("style","display:none;");
jQuery("#dc_submit").attr("disabled",true);
var mobNo1=$("#mobNo1").val();
var mobNo2=$("#mobNo2").val();
var mobNo3=$("#mobNo3").val();
var pin=$("#PIN").val();
var returnVal=validateDCMobileNo(mobNo1,mobNo2,mobNo3,pin);
if(returnVal==1){$("#digitalCouponForm").submit();
}else{if(returnVal==2){loadMobileDCValidationOvelay(mobNo1,mobNo2,mobNo3,pin);
}}}function loadMobileDCValidationOvelay(mobNo1,mobNo2,mobNo3,pin){var mobileNumber=mobNo1+mobNo2+mobNo3;
var url=contextRoot+"/digitalcoupon/includes/mobilenumberoverlay.jsp?mobileNumber="+mobileNumber;
var mobileNumberStatus=null;
$.ajax({url:url,success:function(data){mobileNumberStatus=$(data).filter("#mobileNumb").text();
if(mobileNumberStatus=="WAITTING"||mobileNumberStatus=="VERIFIED"){$("#digitalCouponForm").submit();
}else{if(mobileNumberStatus=="UNVERIFIED"){jQuery("#dc_submit").attr("disabled",false);
$("#OverlayDiv").load(contextRoot+"/digitalcoupon/includes/mobilenumberoverlay.jsp",function(){$("#mobileNumber").html(mobNo1+"-"+mobNo2+"-"+mobNo3);
$("#pinNumber").html(pin);
});
$("#OverlayDiv").modal({minWidth:783,minHeight:388});
}else{$("#digitalCouponForm").submit();
}}}});
}function selectCouponForm(couponId,modelWindowParam,categoryCode,ispdp){divId="#ajaxCallDiv";
$.ajax({url:contextRoot+"/digitalcoupon/includes/selectcoupon.jsp",dataType:"html",type:"POST",data:"modelWindowParam="+modelWindowParam+"&categoryCode="+categoryCode+"&couponId="+couponId,success:function(data){$("#"+couponId).addClass("graybutton");
$("#"+couponId).html("Selected");
$("#"+couponId).attr("onclick","return false;");
if(ispdp=="pdppage"){$("#pdp"+couponId).addClass("graybutton");
$("#pdp"+couponId).html("Selected");
$("#pdp"+couponId).attr("onclick","return false;");
}}});
}function selectCouponFormModelWindow(couponId){$.ajax({url:contextRoot+"/digitalcoupon/includes/selectcoupon.jsp",dataType:"html",type:"POST",data:"modelWindowParam=&categoryCode=&couponId="+couponId,success:function(data){$("#"+couponId).addClass("graybutton");
$("#"+couponId).attr("onclick","return false;");
$("#"+couponId).html("Selected");
var buttonId="button[id="+couponId+"]";
$(buttonId).addClass("graybutton");
$(buttonId).attr("onclick","return false;");
$(buttonId).html("Selected");
}});
}function loadMobileValidationOvelay(){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/includes/mobilenumberoverlay.jsp");
$("#OverlayDiv").modal({minWidth:783,minHeight:388});
}function loadMobileSuccessOverlay(){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/includes/mobilenumbersuccessoverlay.jsp");
$("#OverlayDiv").modal({minWidth:748,minHeight:337});
}function loadMobileSuccessRegOverlay(){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/includes/mobilenumbersuccessoverlayreg.jsp");
$("#OverlayDiv").modal({minWidth:748,minHeight:337});
}function loadDigitalCouponCancelOverlay(){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/includes/canceloverlay.jsp");
$("#OverlayDiv").modal({minWidth:500,minHeight:195});
}function loadCouponPopupOverlay(){$("#OverlayDiv").load(contextRoot+"digitalcoupon/includes/couponspopupoverlay.jsp");
$("#OverlayDiv").modal({minWidth:585,minHeight:380});
}function loadCouponModelOverlay(couponId){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/digitalcouponmodal.jsp?couponID="+couponId,function(){FB.XFBML.parse();
});
$("#OverlayDiv").modal({minWidth:585,minHeight:380,fixed:false});
}function loadCouponModelOverlayForPdp(couponId){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/digitalcouponmodal.jsp?couponID="+couponId+"&srcPage=pdp",function(){FB.XFBML.parse();
});
$("#OverlayDiv").modal({minWidth:585,minHeight:380,fixed:false});
}function loadCouponModelOverlayForHome(couponId){$("#OverlayDiv").load(contextRoot+"/digitalcoupon/digitalcouponmodal.jsp?couponID="+couponId+"&srcPage=home",function(){FB.XFBML.parse();
});
$("#OverlayDiv").modal({minWidth:585,minHeight:380,fixed:false});
$('link[href="/css/account.css"]').prop("disabled",true);
}function checkBoxFunc(){jQuery(".cutomize-checkbox input").click(function(){var classCheckbox=jQuery(this).attr("class");
if(typeof classCheckbox==="undefined"||classCheckbox===""){jQuery(this).addClass("checked");
jQuery(this).attr("checked","checked");
}else{jQuery(this).removeClass("checked");
jQuery(this).removeAttr("checked");
}});
}function loadRequestedPage(url,div,param){var divId="#"+div;
$.ajax({url:url,dataType:"html",type:"POST",success:function(data){$(divId).html(data);
}});
}function enableCheckForMyAccount(){var classCheckbox=jQuery("input#mobile_number_1").attr("class");
if(typeof classCheckbox==="undefined"||classCheckbox===""){jQuery("#mobile_number_2").parent().children("label").removeClass("disabled");
jQuery("#mobile_number_2").removeAttr("disabled");
jQuery("#mobile_number_2").parent().children(".text").removeClass("disabled");
}else{jQuery("#mobile_number_2").parent().children("label").addClass("disabled");
jQuery("#mobile_number_2").attr("disabled","disabled");
jQuery("#mobile_number_2").parent().parent().children("div.text").addClass("disabled");
}}var numberReg=/[0-9]+$/;
function autoTabReplaceHomePage(){var userNumber=$(this).val();
switch(userNumber){case 9:return false;
case 16:return false;
case 20:return false;
default:if(userNumber==16&&userNumber==9){return false;
}else{if(!numberReg.test(userNumber)){userNumber=userNumber.replace(/[^0-9]/g,"");
$(this).val(userNumber);
}else{var maxlength=$(this).attr("maxlength");
var inputlength=$(this).val().length;
if(inputlength>=maxlength){$(this).next().next().focus();
}return true;
}}}}
$(document).ready(function(){$(function(){if($("#addToCartSuccess").val()){openMiniCart();
}});
$("#mini-cart-checkout").click(function(){var value=$(this).attr("value");
window.location.href=value;
});
});
$(window).load(function(){var commerceItemcount=$("input#commerceItemCount").val();
if(commerceItemcount!=null&&commerceItemcount<=4){$("div#miniCartCarousel").find(".jcarousel-prev").hide();
$("div#miniCartCarousel").find(".jcarousel-next").hide();
}});
var timerMCValue=0;
function openMiniCart(){if($("input#totalMiniCartItemQty").val()==""||$("input#totalMiniCartItemQty").val()==0){return;
}if($("div#mini-cart").is(":visible")){return;
}$("#mini-cart").slideDown();
$("#minicarttriangle").css("display","inline");
window.timerMC=setInterval(function(){timerMCValue++;
if(timerMCValue>5){timerMCValue=0;
$("#mini-cart").slideUp();
$("#minicarttriangle").css("display","none");
clearInterval(timerMC);
}},500);
}
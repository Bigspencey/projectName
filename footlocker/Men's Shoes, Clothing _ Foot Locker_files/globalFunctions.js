$(document).ready(function(e) {
	var findVIP = {};
    
    function handleSuccessVIP(data){
        var VIPSTATUS = data;
		findVIP.rec = VIPSTATUS.data.user.isRecognized;
		findVIP.auth = VIPSTATUS.data.user.isAuthenticated;
		findVIP.vip = VIPSTATUS.data.user.isVIP;
        
        if(findVIP.rec == true && findVIP.vip == true){
		    $("#VIPONLYBANNER, #VIPONLYBANNER-SECONDARY").show();
		    $("#NONVIPBANNER").remove();
		}else{
		    $("#NONVIPBANNER, #NONVIPBANNER-SECONDARY").show();
		    $("#VIPONLYBANNER").remove();
		}
        
    }
    
    function handleFailVIP(error){
        console.log(error);
    }
    
    utils.globalAccount.getSession(handleSuccessVIP, handleFailVIP);
    

});
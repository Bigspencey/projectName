
function riskReadCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function riskGetCartIDValue(cookieName) {
    var cookieValue = riskReadCookie(cookieName);
    cartID = cookieValue.split('%2D')[1];
    return cartID;
}


$(document).ready(function (e) {
    (function () {

        function riskifiedBeaconLoad() {
            var session_id = riskGetCartIDValue('TID');
            var url = ('https:' == document.location.protocol ? 'https://' : 'http://')
              + "beacon.riskified.com?shop=" + store_domain + "&sid=" + session_id;
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        if (window.attachEvent)
            window.attachEvent('onload', riskifiedBeaconLoad)
        else
            window.addEventListener('load', riskifiedBeaconLoad, false);
    })();
});



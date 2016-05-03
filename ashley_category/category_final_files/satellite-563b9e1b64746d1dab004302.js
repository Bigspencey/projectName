function USI_installCode() {
            var USI_headID = document.getElementsByTagName("head")[0];
            var USI_installID = document.createElement('script');
            USI_installID.type = 'text/javascript';
            USI_installID.src = 'http'+ (document.location.protocol=='https:'?'s://www':'://www')+ '.upsellit.com/active/ashleyfurniture.jsp';
            USI_headID.appendChild(USI_installID);
}
if (window.addEventListener){
            window.addEventListener('load', USI_installCode, true);
} else if (window.attachEvent) {
            window.attachEvent('onload', USI_installCode);
} else {
            USI_installCode();
}


/* LOGIN IFRAME SCRIPTS */
function CreateLoginCloseButton() {
    if ($('#login_container .closeBtn').length <= 0) {
        $('#login_container').prepend('<div class="closeBtn"><a title="Close" href="javascript:window.closeLoginDialog();">&times;</a></div>');
    }
    /*
    if ($('#ws_login_container .closeBtn').length <= 0) {
        $('#ws_login_container').prepend('<div class="closeBtn"><span>Close</span><a title="Close" href="javascript:window.close_wl_dialog();">&times;</a></div>');
    }
    */
}   
$('#login_container_shadow').on('click touchend', function () {
    closeLoginDialog();
});

var iframeLinkHijack = {
    rewriteLoginLink: function () {
        $('#guest_welcome_login').attr('href','#');
    },

    openLoginOverlay: function () {
        var myinterval;
        $('#guest_welcome_login').on('click', function () {
            openLoginDialogForID('guest_welcome_login', null, null, function () { updateWelcome() }, null, 'Guest Message', 'Log In', 'true', 'true')
            myinterval = setInterval(function(){
                if ($('iframe#loginIFrame').length > 0) {
                    $('#login_container_shadow').fadeIn();
                    $('#login_container').fadeIn();
                }
            }, 500);
            return false;
        });
    }

}

$(document).ready(function (e) {
    iframeLinkHijack.rewriteLoginLink();
    iframeLinkHijack.openLoginOverlay();
});
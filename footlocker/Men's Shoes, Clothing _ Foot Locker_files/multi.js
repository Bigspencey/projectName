(function (define, require) {
define('multi', ['jquery', 'invite', 'params', 'require', 'touchpoints', 'util', 'event'], function ($, Invite, Params, require, Touchpoints, Util, Event) {

  var _userParams = {};

  var Multi = {};

  Multi.setParams = function (params) {
    try {
      _userParams = JSON.parse(JSON.stringify(Params));
    } catch (error) {
      Util.log(error);
    }

    Util.extend(Params, {
      altImageText: "",
      barCloseText: "",
      closeWindowText: "",
      headerText: "",
      incentiveText: "",
      modalHeight: 22,
      modalX: null,
      modalWidth: 28,
      modalY: null,
      pageTitle: "",
      popupHeight: 20,
      popupWidth: 22,
    });
    Util.extend(Params, params);
  };

  Multi.processParams = function () {

    Params.cdnPath = (('https:' === document.location.protocol) ? Params.cdnResourcePathHttps : Params.cdnResourcePathHttp).replace(/\/static$/, '');
    Params.logoPath = (('https:' === document.location.protocol) ? Params.logoResourcePathHttps : Params.logoResourcePathHttp);

    Params.invite = Params.invite === '1' ? true : false;
    if (_userParams.invite === true || _userParams.invite === 'true') {
      Params.invite = true;
    } else if (_userParams.invite === false || _userParams.invite === 'false') {
      Params.invite = false;
    }

    Params.pageScrollPercentage = (Params.pageScrollPercentage !== undefined && Params.pageScrollPercentage !== null && !isNaN(Params.pageScrollPercentage) && !isNaN(parseInt(Params.pageScrollPercentage))) ? parseInt(Params.pageScrollPercentage) : 0;
    Params.pageScrollPercentage = (_userParams.pageScrollPercentage !== undefined && _userParams.pageScrollPercentage !== null && !isNaN(_userParams.pageScrollPercentage) && !isNaN(parseInt(_userParams.pageScrollPercentage))) ? parseInt(_userParams.pageScrollPercentage) : parseInt(Params.pageScrollPercentage);

    Params.pageViews = (Params.pageViews !== undefined && Params.pageViews !== null && !isNaN(Params.pageViews) && !isNaN(parseInt(Params.pageViews))) ? parseInt(Params.pageViews) : 0;
    Params.pageViews = (_userParams.pageViews !== undefined && _userParams.pageViews !== null && !isNaN(_userParams.pageViews) && !isNaN(parseInt(_userParams.pageViews))) ? parseInt(_userParams.pageViews) : parseInt(Params.pageViews);

    Params.timeOnPage = (Params.timeOnPage !== undefined && Params.timeOnPage !== null && !isNaN(Params.timeOnPage) && !isNaN(parseInt(Params.timeOnPage))) ? parseInt(Params.timeOnPage) : 0;
    Params.timeOnPage = (_userParams.timeOnPage !== undefined && _userParams.timeOnPage !== null && !isNaN(_userParams.timeOnPage) && !isNaN(parseInt(_userParams.timeOnPage))) ? parseInt(_userParams.timeOnPage) : parseInt(Params.timeOnPage);

    Params.timeOnSite = (Params.timeOnSite !== undefined && Params.timeOnSite !== null && !isNaN(Params.timeOnSite) && !isNaN(parseInt(Params.timeOnSite))) ? parseInt(Params.timeOnSite) : 0;
    Params.timeOnSite = (_userParams.timeOnSite !== undefined && _userParams.timeOnSite !== null && !isNaN(_userParams.timeOnSite) && !isNaN(parseInt(_userParams.timeOnSite))) ? parseInt(_userParams.timeOnSite) : parseInt(Params.timeOnSite);

    Params.pitchType = parseInt(Params.pitchType);

    switch (Params.pitchType) {
      case 22:
        Params.inviteType = 'dialog';
        break;
      case 23:
        Params.inviteType = 'modal';
        Params.bounce = true;
        break;
      case 24:
        Params.inviteType = 'persistent';
        Params.bounce = false;
        break;
      case 26:
        Params.inviteType = 'modal';
        break;
      default:
        Params.pitchType = null;
    }

    if (Util.isNumber(Params.pitchType) && Params.pitchType !== 23) {
      Params.bounce = (Params.bounce === true || Params.bounce === 'true') ? true : false;
      if (_userParams.bounce === true || _userParams.bounce === 'true') {
        Params.bounce = true;
      } else if (_userParams.bounce === false || _userParams.bounce === 'false') {
        Params.bounce = false;
      }
    }

    if (_userParams.posX !== undefined && _userParams.posX !== null && !isNaN(_userParams.posX) && !isNaN(parseInt(_userParams.posX))) {
      Params.posX = parseInt(_userParams.posX, 10);
    } else if (_userParams.posX === null || _userParams.posX === '' || (_userParams.posX === 'center' && (_userParams.posY === null || _userParams.posY === '' || _userParams.posY === 'center')) || isNaN(parseInt(Params.posX))) {
      Params.posX = 500;
    } else {
      Params.posX = parseInt(Params.posX);
    }

    Params.modalX = Params.posX;
    Params.winX = Params.posX;

    if (_userParams.posY !== undefined && _userParams.posY !== null && !isNaN(_userParams.posY) && !isNaN(parseInt(_userParams.posY))) {
      Params.posY = parseInt(_userParams.posY, 10);
    } else if (_userParams.posY === null || _userParams.posY === '' || (_userParams.posY === 'center' && (_userParams.posX === null || _userParams.posX === '' || _userParams.posX === 'center')) || isNaN(parseInt(Params.posY))) {
      Params.posY = 500;
    } else {
      Params.posY = parseInt(Params.posY);
    }

    Params.modalY = Params.posY;
    Params.winY = Params.posY;

    var defaultZIndex = 1000000;
    if (Params.zIndex !== undefined && Params.zIndex !== null && !isNaN(Params.zIndex) && !isNaN(parseInt(Params.zIndex))) {
      Params.zIndex = parseInt(Params.zIndex);
    } else {
      Params.zIndex = defaultZIndex;
    }

    if (_userParams.zIndex !== undefined && _userParams.zIndex !== null && parseInt(_userParams.zIndex) >= Params.zIndex) {
      Params.zIndex = parseInt(_userParams.zIndex);
    }

    Params.surveyType = _userParams.surveyType;
    Params.surveyTypeId = parseInt(Params.surveyTypeId);

    if (Params.frequency !== undefined && Params.frequency !== null && !isNaN(Params.frequency) && !isNaN(parseInt(Params.frequency))) {
      Params.frequency = parseInt(Params.frequency);
    }
    if (_userParams.frequency !== undefined && _userParams.frequency !== null && !isNaN(_userParams.frequency) && !isNaN(parseInt(_userParams.frequency))) {
      Params.frequency = parseInt(_userParams.frequency);
    }

    Params.percentage = (Params.percentage !== undefined && Params.percentage !== null && !isNaN(Params.percentage) && !isNaN(parseInt(Params.percentage))) ? parseInt(Params.percentage) : 100;
    Params.percentage = (_userParams.percentage !== undefined && _userParams.percentage !== null && !isNaN(_userParams.percentage) && !isNaN(parseInt(_userParams.percentage)) && (_userParams.percentage <= 100) && (_userParams.percentage >= 0)) ? parseInt(_userParams.percentage) : Params.percentage;

    Params.random = Math.round(Math.random() * 99);

    if (typeof(window.br_domain) === 'string') {
      Params.domain = window.br_domain;
    } else if (document.location.hostname === 'localhost') {
      Params.domain = '';
    } else {
      Params.domain = '.' + document.location.hostname.replace(/^www\./,'');
    }

    Params.bizrateDomain = 'bizrate.com';

    Params.merchantLogoUrl = Params.logoPath === '' ? '' : [Params.logoPath, Params.mid, '.gif'].join('');

    Params.transparentImageUrl = Params.cdnPath + '/images/transparent.gif';

    Params.pageTitle = (typeof(window.br_title) === 'string') ? window.br_title : Params.pageTitle;

    Params.inviteWidth = parseInt(Params.inviteWidth);
    Params.inviteHeight = parseInt(Params.inviteHeight);
    Params.closeY = parseInt(Params.inviteHeight) * 0.86;

    Params.buttonHeight = parseInt(Params.buttonHeight);
    Params.buttonWidth = parseInt(Params.buttonWidth);

    Params.surveyUrl = Params.surveyUrl;
    Params.surveyIframeEnabled = Params.surveyIframeEnabled === '1' ? true : false;
    Params.surveyIframeOpacity = parseFloat(Params.surveyIframeOpacity);

    Params.winW = (15 + Params.inviteWidth);
    Params.winH = (15 + Params.inviteHeight);
    Params.windowParameters = ['width=', Params.winW, ',height=', Params.winH, ',top=', Params.winY, ',left=', Params.winX, ',screenY=', Params.winY, ',screenX=', Params.winX, ',directories=0,status=0,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=0'].join('');
  };

  Multi.getWinSettings = function () {
    var position = Multi.getModalCoords(Params.inviteWidth + Params.modalWidth, Params.inviteHeight + Params.modalHeight);

    var winSettings = {
      titleText: Params.altImageText,
      closeText: Params.closeWindowText,
      inviteImageUrl: Params.inviteImageUrl,
      x: position.x,
      y: position.y,
      z: Params.zIndex,
      width: Params.inviteWidth + Params.modalWidth,
      pitchType: Params.pitchType
    };
    return winSettings;
  };

  Multi.init = function () {
    switch (Params.inviteType) {
      case 'dialog':
      case 'dhtml':
        Multi.displayDialog();
        break;
      case 'modal':
        Multi.initModal();
        break;
      case 'persistent':
        Multi.initPersistent();
        break;
    };
  };

  Multi.initModal = function () {
    if (Util.isIE() && Util.getIEVersion() < 10 && document.compatMode === 'BackCompat') { Multi.displayDialog(); return; }
    Util.loadStylesheet(Params.cdnPath + '/css/vex.css');
    Util.loadStylesheet(Params.cdnPath + '/css/vex-theme-bottom-right-corner.css');
    Util.loadStylesheet(Params.cdnPath + '/css/vex-theme-default.css');
    Util.loadStylesheet(Params.cdnPath + '/css/vex-theme-flat-attack.css');

    Multi.displayModal();
  };

  Multi.displayModal = function () {
    Params.inviteImageUrl = Params.inviteImageUrl;

    require(['vex', 'vex.dialog'], function (vex, vexDialog) {
      var height = Params.inviteHeight || 250;
      var width = Params.inviteWidth || 300;

      var header = '<div class="brdialog-head"><div class="brdialog-close">' + (Params.closeWindowText || '') + '</div><div class="brdialog-title">' + (Params.altImageText || '') + '</div></div>';

      var merLogoStyle = Params.merLogoStyle;
      var merchantLogo = '';
      if (Params.merchantLogoUrl) {
        merchantLogo = '<img src="' + Params.merchantLogoUrl + '" style="max-width: none;" class="brdialog-merchant-logo"/>';
      }

      var headerText = '<div class="brdialog-header-text" style="white-space: nowrap;">' + Params.headerText + '</div>';

      var incentiveText = '<div class="brdialog-incentive-text">' + Params.incentiveText + '</div>';

      var buttonImage = '';

      if (Params.buttonImageUrl) {
        buttonImage = '<img class="brdialog-button-image" src="' + Params.buttonImageUrl + '"/>';
      }

      var brandText = '<div class="brdialog-brand-text">' + Params.brandText + '</div>';

      var declineText = '<div class="brdialog-no-thanks" style="bottom: 0; color: #6F6F6F; cursor: pointer; font-family: \'Arial, Helvetica, sans-serif\'; font-size: 12px; height: 15%; left: 0; padding-top: 5px; position: absolute; right: 0; text-align: center; text-decoration: underline; width: 100%;">' + Params.declineText + '</div>';

      var container = '<div style="box-sizing: border-box; cursor: pointer; left: 13px; position: absolute; top: 10px;">' + merchantLogo + headerText + incentiveText + buttonImage + '</div>';

      var anchor = '<a target="_blank" style="display: block; text-decoration: none; box-sizing: border-box; padding: 10px 13px; position: relative; z-index: 5;"><img src="' + Params.inviteImageUrl + '" alt="' + Params.altImageText + '" style="height: ' + height + 'px; width: ' + width + 'px;"/>' + brandText + container + declineText + '</a>';

      var clickAreas = '<div class="brdialog-survey-area" style="background-color: transparent; height: 76%; position: absolute; top: 26px; width: 100%; z-index: 100; cursor: pointer;"><img src="' + Params.transparentImageUrl + '" style="border: none; height: 100%; width: 100%;"/></div><div class="brdialog-close-area" style="background-color: transparent; height: 15%; position: absolute; bottom: 0; width: 100%; z-index: 100; cursor: pointer;"><img src="' + Params.transparentImageUrl + '" style="border: none; height: 100%; width: 100%;"/></div>';

      var body = '<div class="brdialog-body">' + [anchor, clickAreas].join('') + '</div>';

      var content = header + body;
      var className = 'vex-theme-default';
      var classNames = ['vex-theme-bottom-right-corner', 'vex-theme-flat-attack', 'vex-theme-default'];
      // Old IE doesn't support Array.indexOf()
      for (var i = 0; i < classNames.length; i++) {
        if (classNames[i] === Params.modalType) {
          className = Params.modalType;
        }
      }
      var dialogOptions = {
        className: ['brdialog', 'brdialog-win', className].join(' '),
        content: content,
        contentCSS: {
          "background-color": '#FFF',
          border: "1px solid rgb(204, 204, 204)",
          'line-height': 1,
          overflow: "hidden",
          padding: 0,
          width: width + 26 + "px"
        },
        escapeButtonCloses: false,
        overlayClosesOnClick: false,
        showCloseButton: false
      };

      var $vexContent = vex.open(dialogOptions);

      $vexContent.bind('vexOpen', function () {
        Invite.rendered = true;
        Invite.visible = true;

        Invite.setStyle($vexContent.find('.brdialog-head')[0], Params.barStyle);
        Invite.setStyle($vexContent.find('.brdialog-close')[0], Params.barCloseStyle);
        Invite.setStyle($vexContent.find('.brdialog-title')[0], Params.barTitleStyle);
        Invite.setStyle($vexContent.find('.brdialog-body')[0], Params.bodyStyle);
        Invite.setStyle($vexContent.find('.brdialog-header-text')[0], Params.headerStyle);
        Invite.setStyle($vexContent.find('.brdialog-incentive-text')[0], Params.incentiveStyle);
        Invite.setStyle($vexContent.find('.brdialog-button-image')[0], Params.buttonStyle);
        Invite.setStyle($vexContent.find('.brdialog-merchant-logo')[0], Params.merLogoStyle);
        Invite.setStyle($vexContent.find('.brdialog-brand-text')[0], Params.brandStyle);

        Util.setCookie('cnx_sa', 1, Params.frequency, Params.domain);
        Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_RENDER);
      });

      $vexContent.bind('vexClose', function () {
        Invite.visible = false;
      });

      $('.brdialog .brdialog-merchant-logo').bind('error', function () {
        this.style.display = "none";
      });

      $('.brdialog .vex-overlay, .brdialog .brdialog-close').bind('click', function () {
        Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_CLOSE);
        vex.close($vexContent.data().vex.id);
      });

      $('.brdialog .brdialog-survey-area').bind('click', function () {
        var u = Params.surveyUrl + Invite.getUrlParameters();
        Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_OPEN_SURVEY);
        Invite.openSurvey(u);
        vex.close($vexContent.data().vex.id);
      });

      $('.brdialog .brdialog-close-area, .brdialog .brdialog-no-thanks').bind('click', function () {
        Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_NO_THANKS);
        vex.close($vexContent.data().vex.id);
      });
    });
  };

  Multi.initPersistent = function () {
    Util.loadStylesheet(Params.cdnPath + '/css/persistent.css');
    Multi.displayPersistent();
  };

  Multi.displayPersistent = function () {
    var invite = $('<div>', {
      class: Multi.getInviteClass(),
      style: Multi.getInviteStyle()
    });

    var trigger = $('<a>', {
      class: "trigger",
      href: Params.surveyUrl + Invite.getUrlParameters(),
      target: "_blank"
    })
    .bind('click', function (event) {
      event.preventDefault();
      Invite.openSurvey($(this).attr('href'));
    })
    .hover(function (event) {
      Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_PERSISTENT_HOVER);
    });

    var i = $('<i>', {
      style: Multi.getTriggerStyle()
    });

    var buttonImageUrl = (Params.buttonImageUrl) ? Params.buttonImageUrl : '//images.bizrate.com/eval/survey/invite_template/feedback.png';
    var triggerImage = $('<img>', {
      height: Params.buttonHeight,
      src: buttonImageUrl,
      width: Params.buttonWidth
    })
    .bind('error', function () {
      $(this).hide();
    });

    var content = $('<a>', {
      class: "content",
      href: Params.surveyUrl + Invite.getUrlParameters(),
      target: "_blank"
    })
    .bind('click', function (event) {
      event.preventDefault();
      Invite.openSurvey($(this).attr('href'));
    });

    i.append(triggerImage);
    trigger.append(i);
    invite.append(trigger);
    // Display invite image content on hover
    /*
    if (Params.inviteImageUrl) {
      var p = $('<p>', {
        style: ['height:', Params.inviteHeight, 'px'].join('')
      });

      content.bind('mouseleave', function () {
        p.width(0);
      });

      trigger.hover(function (event) {
        p.width(Params.inviteWidth);
        Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_PERSISTENT_HOVER);
      }, function (event) {
        var target = event.relatedTarget;
        if (!$(target).is(content) && !$.contains(content[0], target)) {
          p.width(0);
        }
      });

      var contentImage = $('<img>', {
        height: Params.inviteHeight,
        src: Params.inviteImageUrl,
        width: Params.inviteWidth
      });

      content.append(p);
      p.append(contentImage);
      invite.append(content);
    }
    */
    $('body').append(invite);
    Util.setCookie('cnx_sa', 1, Params.frequency, Params.domain);
    Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_RENDER);
  };

  Multi.getInviteClass = function () {
    var inviteClass = ['br-feedback'];
    inviteClass.push(Params.buttonX === 'left' ? 'left' : 'right');
    return inviteClass.join(' ');
  };

  Multi.getInviteStyle = function () {
    var style = [];

    if (Params.buttonY === 'top') {
      style.push('top: 0');
    } else if (Params.buttonY === 'middle') {
      style.push(['top:', ($(window).height() - Params.inviteHeight) / 2,' px'].join(''));
      style.push(['top:', 'calc(50% - ', (Params.inviteHeight / 2), 'px)'].join(''));
    } else if (Params.buttonY === 'bottom') {
      style.push('bottom: 0');
    } else {
      style.push(['top:', Params.buttonY, 'px'].join(''));
    }

    style.push(['width:', (Params.buttonWidth + Params.inviteWidth + 5), 'px'].join(''));

    return style.join(';')
  };

  Multi.getTriggerStyle = function () {
    var style = [];

    style.push(['height:', Params.buttonHeight, 'px'].join(''));
    style.push(['width:', Params.buttonWidth, 'px'].join(''));

    return style.join(';')
  };

  Multi.displayDialog = function () {
    var im, d, imur, anc, u, position, imt, coordWidth, coordHeight, imgWidth, imgHeight;
    u = Params.surveyUrl + Invite.getUrlParameters();

    coordWidth = Params.inviteWidth + Params.modalWidth;
    coordHeight = Params.inviteHeight + Params.modalHeight;
    imgWidth = Params.inviteWidth + 26;
    imgHeight = Params.inviteHeight + 20;
    imgWidthNoPx = imgWidth;
    imgHeightNoPx = imgHeight;
    imgWidth += 'px';
    imgHeight += 'px';

    position = Multi.getModalCoords(coordWidth, coordHeight);

    if (document.getElementById('dynamicBzSurveyContents') && Params.inviteImageUrlNoLogo !== '') {
      Params.inviteImageUrl = Params.inviteImageUrlNoLogo;
    } else {
      Params.inviteImageUrl = Params.inviteImageUrl;
    }

    d = document.createElement('div');
    d.setAttribute('id','brDialog');
    d.style.width = imgWidth;
    d.style.backgroundColor = '#FFF';
    d.style.cursor = 'pointer';
    d.style.position = 'relative';
    d.style.textAlign = 'left';
    d.style.whiteSpace = 'normal';
    d.style.boxSizing = 'border-box';
    d.style.MozBoxSizing = 'border-box';
    d.style.MsBoxSizing = 'border-box';
    d.style.WebkitBoxSizing = 'border-box';

    anc = document.createElement('a');
    anc.setAttribute('target', '_blank');
    anc.style.display = 'block';
    anc.style.width = imgWidth,
    anc.style.height = imgHeight;
    anc.style.textDecoration = 'none';
    anc.style.boxSizing = 'border-box';
    anc.style.MozBoxSizing = 'border-box';
    anc.style.MsBoxSizing = 'border-box';
    anc.style.WebkitBoxSizing = 'border-box';

    imt = document.createElement('img');
    imt.setAttribute("src", Params.transparentImageUrl);
    imt.style.position = 'absolute';
    imt.style.top = '0px';
    imt.style.left = '0px';
    imt.style.cursor = 'pointer';
    imt.style.border = '0px';
    imt.style.display = 'block';
    imt.style.width = imgWidth;
    imt.style.height = imgHeight;
    imt.style.boxSizing = 'border-box';
    imt.style.MozBoxSizing = 'border-box';
    imt.style.MsBoxSizing = 'border-box';
    imt.style.WebkitBoxSizing = 'border-box';

    dimg = document.createElement('div');
    dimg.style.cursor = 'pointer';
    dimg.style.position = 'absolute';
    dimg.style.top = '10px';
    dimg.style.left = '13px';
    dimg.style.boxSizing = 'border-box';
    dimg.style.MozBoxSizing = 'border-box';
    dimg.style.MsBoxSizing = 'border-box';
    dimg.style.WebkitBoxSizing = 'border-box';

    im = document.createElement('img');
    im.setAttribute('src', Params.inviteImageUrl);
    im.setAttribute('alt', Params.altImageText);
    im.style.boxSizing = 'border-box';
    im.style.MozBoxSizing = 'border-box';
    im.style.MsBoxSizing = 'border-box';
    im.style.WebkitBoxSizing = 'border-box';
    im.style.cursor = 'pointer';
    im.style.top = '10px';
    im.style.left = '13px';
    im.style.border = '0px none';
    im.style.display = 'block';
    im.style.position = 'absolute';
    im.style.width = Params.inviteWidth + 'px';
    im.style.height = Params.inviteHeight + 'px';


    imap = document.createElement('img');
    imap.setAttribute('useMap', '#br_invite_map');
    imap.setAttribute('src', Params.transparentImageUrl);
    imap.style.position = 'absolute';
    imap.style.top = '0px';
    imap.style.left = '0px';
    imap.style.cursor = 'pointer';
    imap.style.border = '0px';
    imap.style.display = 'block';
    imap.style.width = imgWidth;
    imap.style.height = imgHeight;
    imap.style.boxSizing = 'border-box';
    imap.style.MozBoxSizing = 'border-box';
    imap.style.MsBoxSizing = 'border-box';
    imap.style.WebkitBoxSizing = 'border-box';

    inviteMap = document.createElement('map');
    inviteMap.setAttribute('id', 'br_invite_map');
    inviteMap.setAttribute('name', 'br_invite_map');

    var merchantLogo = null;
    if (Params.merchantLogoUrl) {
      var merLogoStyle = Params.merLogoStyle;
      merLogoStyle['max-width'] = 'none';
      merchantLogo = document.createElement('img');
      merchantLogo.setAttribute('src', Params.merchantLogoUrl);
      Invite.setStyle(merchantLogo, merLogoStyle);
      merchantLogo.onerror = function() {
        merchantLogo.style.display = 'none';
      };
    }

    buttonImage = document.createElement('img');
    buttonImage.setAttribute('src', Params.buttonImageUrl);
    Invite.setStyle(buttonImage, Params.buttonStyle);

    merchantWords = document.createElement('div');
    merchantWords.setAttribute('class', 'brshrink_fit');
    merchantWords.setAttribute('id', 'brshrink_fit');
    Invite.setStyle(merchantWords, Params.headerStyle);
    merchantWords.style.whiteSpace = 'nowrap';

    merchantWords2 = document.createElement('div');
    Invite.setStyle(merchantWords2, Params.incentiveStyle);

    merchantWords.innerHTML = Params.headerText;
    merchantWords2.innerHTML = Params.incentiveText;

    anc.appendChild(imt);
    anc.appendChild(im);
    dimg.appendChild(merchantWords);
    dimg.appendChild(merchantWords2);
    if (Params.merchantLogoUrl) {
      dimg.appendChild(merchantLogo);
    }

    if (Params.buttonImageUrl) {
      dimg.appendChild(buttonImage);
    }

    var brandText = document.createElement('div');
    Invite.setStyle(brandText, Params.brandStyle);
    brandText.innerHTML = Params.brandText;
    anc.appendChild(brandText);

    var declineText = document.createElement('div');
    declineText.style.bottom = 0;
    declineText.style.color = '#6F6F6F';
    declineText.style.cursor = 'pointer';
    declineText.style.fontFamily = 'Arial, Helvetica, sans-serif';
    declineText.style.fontSize = '12px';
    declineText.style.height = '12%';
    declineText.style.position = 'absolute';
    declineText.style.textAlign = 'center';
    declineText.style.textDecoration = 'underline';
    declineText.style.width = '100%';
    declineText.innerHTML = Params.declineText;

    declineText.onclick = function () {
      Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_NO_THANKS);
      Multi.destroyDialog(document.getElementById('brdialog-win'));
    }
    anc.appendChild(declineText);

    anc.appendChild(dimg);
    anc.appendChild(imap);

    var area1 = document.createElement("area");

    if (u.indexOf('deviceType=ANDROID') > -1) {
      area1.setAttribute('coords', [0, 0, imgWidthNoPx,, Params.closeY].join(','));
      area1.setAttribute('shape', 'rect');
      area1.setAttribute('href', u);
      area1.setAttribute('target', '_blank');
    } else {
      area1.setAttribute('coords', [0, 0, imgWidthNoPx, Params.closeY].join(','));
      area1.setAttribute('shape', 'rect');
    }

    var area2 = document.createElement('area');
    area2.setAttribute('coords', [0, Params.closeY, imgWidthNoPx, imgHeightNoPx].join(','));
    area2.setAttribute('shape', 'rect');

    area1.onclick = function () {
      Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_OPEN_SURVEY);
      Invite.openSurvey(u);
      Multi.destroyDialog(document.getElementById('brdialog-win'));
    };

    area2.onclick = function () {
      Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_NO_THANKS);
      Multi.destroyDialog(document.getElementById('brdialog-win'));
    };

    inviteMap.appendChild(area1);
    inviteMap.appendChild(area2);
    anc.appendChild(inviteMap);
    d.appendChild(anc);

    this.createDialog(d, {
      titleText: Params.altImageText,
      closeText: Params.closeWindowText,
      inviteImageUrl: Params.inviteImageUrl,
      x: position.x,
      y: position.y,
      z: Params.zIndex,
      width: Params.inviteWidth + Params.modalWidth,
      pitchType: Params.pitchType
    });

    Invite.rendered = true;
    Invite.visible = true;

    this.fill_with_text(document.getElementById('brdialog-title'));
    if (merchantWords !== undefined) {
      this.fill_with_text(merchantWords);
    }

    Util.setCookie('cnx_sa', 1, Params.frequency, Params.domain);
    Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_RENDER);
  };

  Multi.createDialog = function (dialog, settings) {
    var anchor, brdWin, brdHead, brdTitle, brdBody, brdClose;
    brdWin = (document.getElementById('dynamicBzSurveyContents')
      && Params.addBizrateLogoLinkFlag === 1
      && Params.inviteImageUrlNoLogo !== '')
      ? document.getElementById('dynamicBzSurveyContents')
      : document.createElement('div');
    var bObj = document.getElementsByTagName('body').item(0);

    brdWin.setAttribute('class', 'brdialog-win');

    // Account for scrollTop
    Params.winStyle.top = settings.y + 'px';

    Invite.setStyle(brdWin, Params.winStyle);
    brdWin.style.boxSizing = 'border-box';
    brdWin.style.MozBoxSizing = 'border-box';
    brdWin.style.MsBoxSizing = 'border-box';
    brdWin.style.WebkitBoxSizing = 'border-box';

    brdHead = document.createElement('div');
    brdHead.setAttribute('class', 'brdialog-head');
    Invite.setStyle(brdHead, Params.barStyle);
    brdHead.style.boxSizing = 'border-box';
    brdHead.style.MozBoxSizing = 'border-box';
    brdHead.style.MsBoxSizing = 'border-box';
    brdHead.style.WebkitBoxSizing = 'border-box';

    brdHead.onmousedown = function (event) {
      if (!event) { event = window.event; }
      (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
      Multi.startMoving(event);
    }

    brdHead.onmouseup = function () {
      Multi.stopMoving();
    }

    brdTitle = document.createElement('div');
    brdTitle.setAttribute('class', 'brdialog-title');
    brdTitle.setAttribute('id', 'brdialog-title');
    brdTitle.innerHTML = settings.titleText;
    Invite.setStyle(brdTitle, Params.barTitleStyle);
    brdTitle.style.boxSizing = 'border-box';
    brdTitle.style.MozBoxSizing = 'border-box';
    brdTitle.style.MsBoxSizing = 'border-box';
    brdTitle.style.WebkitBoxSizing = 'border-box';

    brdClose = document.createElement('div');
    brdClose.setAttribute('class', 'brdialog-close');
    brdClose.innerHTML = settings.closeText;
    Invite.setStyle(brdClose, Params.barCloseStyle);
    brdClose.style.boxSizing = 'border-box';
    brdClose.style.MozBoxSizing = 'border-box';
    brdClose.style.MsBoxSizing = 'border-box';
    brdClose.style.WebkitBoxSizing = 'border-box';

    brdClose.onclick = function () {
      Invite.logInvite(Params.pitchType, Touchpoints.SA_INVITE_CLOSE);
      Multi.destroyDialog(document.getElementById('brdialog-win'));
    };

    brdBody = document.createElement('div');
    brdBody.setAttribute('class', 'brdialog-body');
    Invite.setStyle(brdBody, Params.bodyStyle);
    brdBody.style.boxSizing = 'border-box';
    brdBody.style.MozBoxSizing = 'border-box';
    brdBody.style.MsBoxSizing = 'border-box';
    brdBody.style.WebkitBoxSizing = 'border-box';

    brdHead.appendChild(brdClose);
    brdHead.appendChild(brdTitle);
    brdBody.appendChild(dialog);
    brdWin.appendChild(brdHead);
    brdWin.appendChild(brdBody);

    if (brdWin.getAttribute('id') && Params.addBizrateLogoLinkFlag === 1) {
      brdWin.setAttribute('id', 'brdialog-win');
      brdWin.style.display = 'block';
    } else if (Params.addBizrateLogoLinkFlag === 1) {
      brdWin.setAttribute('id', 'brdialog-win');
      anchor = document.createElement('a');
      anchor.style.color = '#fff';
      anchor.style.height = '23px';
      anchor.style.width = '111px';
      anchor.style.display = 'block';
      anchor.style.right = '10px';
      anchor.style.top = '35px';
      anchor.style.position = 'absolute';
      anchor.style.zIndex = Params.zIndex;
      anchor.style.textIndent = '-9999px';
      anchor.setAttribute('href','//www.bizrate.com/?rf=sur');
      anchor.setAttribute('target','_blank');
      anchor.setAttribute('id','clickOut');
      anchor.innerHTML = 'Bizrate';

      brdWin.appendChild(anchor);
      bObj.appendChild(brdWin);
    } else {
      brdWin.setAttribute('id', 'brdialog-win');
      bObj.appendChild(brdWin);
    }
  };

  Multi.destroyDialog = function (dialog) {
    dialog.setAttribute('class', 'brdialog-win');
    var callback = function () { dialog.parentNode.removeChild(dialog); Invite.visible = false;};

    setTimeout(callback, 1000);
  };

  Multi.startMoving = function (event) {
    event = event || window.event;
    var posX = event.clientX;
    posY = event.clientY;

    var a = document.getElementById('brdialog-win');

    divTop = a.style.top;
    divLeft = a.style.left;
    divTop = divTop.replace('px','');
    divLeft = divLeft.replace('px','');
    var diffX = posX - divLeft;
    diffY = posY - divTop;
    document.onmousemove = function (event) {
      event = event || window.event;
      var posX = event.clientX;
      posY = event.clientY;
      aX = posX - diffX;
      aY = posY - diffY;
      if (aY > 0 && aX > 0 && aX < 1200 && aY < 900) {
        Multi.move(aX,aY);
      } else {
        Multi.stopMoving();
      }
    }
  };

  Multi.stopMoving = function () {
    document.onmousemove = function () {};
  };

  Multi.move = function (xpos, ypos) {
    var a = document.getElementById('brdialog-win');
    a.style.left = xpos + 'px';
    a.style.top = ypos + 'px';
  };

  Multi.coordsCenterException = function () {
    return (Params.modalX === 500 && Params.modalY === 500);
  };

  Multi.getModalCoords = function (w, h, isPopup) {
    var o, win;
    o = {};

    if (Params.modalX !== null && !this.coordsCenterException()) {
      o.x = Params.modalX;
    } else {
      o.x = (Math.floor(this.f_clientWidth() / 2) - Math.floor(w / 2));
    }
    if (Params.modalY !== null && !this.coordsCenterException()) {
      o.y = Params.modalY;
    } else {
      o.y = (Math.floor(this.f_clientHeight() / 2) - Math.floor(h / 2));
    }
    var scroll = $(window).scrollTop();
    o.y += scroll;
    return o;
  };

  Multi.f_clientWidth = function () {
    return this.f_filterResults(
        window.innerWidth ? window.innerWidth : 0,
        document.documentElement ? document.documentElement.clientWidth : 0,
        document.body ? document.body.clientWidth : 0
    );
  };

  Multi.f_clientHeight = function () {
    return this.f_filterResults (
        window.innerHeight ? window.innerHeight : 0,
        document.documentElement ? document.documentElement.clientHeight : 0,
        document.body ? document.body.clientHeight : 0
    );
  };

  Multi.f_filterResults = function (n_win, n_docel, n_body) {
    var n_result = n_win ? n_win : 0;
    var n_result2 = n_docel ? n_docel : 0;
    if (n_result2 > n_result && n_result <= 0) {
      n_result = n_result2;
    }

    n_result2 = n_body ? n_body : 0;
    if (n_result2 > n_result && n_result <= 0) {
      n_result = n_result2;
    }

    return n_result;
  };

  Multi.fill_with_text = function (container) {
    var fontSize = parseFloat(container.style.fontSize);
    container.style.overflow = 'auto';
    var changes = 0;
    var blnSuccess = true;

    while (container.scrollWidth > container.clientWidth) {
      fontSize--;
      container.style.fontSize = fontSize + 'px';
      changes++;
      if (changes > 500) {
        blnSuccess = false;
        break;
      }
    }
    container.style.overflow = "visible";
  };

  Multi.onBeforeUnload = function () {
    window.removeEventListener('beforeunload', Multi.onBeforeUnload);
    if (Invite.visible) {
      Invite.logInvite(Params.pitchType, Touchpoints.WINDOW_CLOSED_INVITE_OPEN);
    }
    if (Invite.surveyIframeVisible) {
      Invite.logInvite(Params.pitchType, Touchpoints.WINDOW_CLOSED_IFRAME_OPEN);
    }
  };

  Multi.onUnload = function () {
    window.removeEventListener('unload', Multi.onUnload);
    if (Invite.visible) {
      Invite.logInvite(Params.pitchType, Touchpoints.WINDOW_CLOSED_INVITE_OPEN);
    }
    if (Invite.surveyIframeVisible) {
      Invite.logInvite(Params.pitchType, Touchpoints.WINDOW_CLOSED_IFRAME_OPEN);
    }
  }

  window.addEventListener('beforeunload', Multi.onBeforeUnload);
  window.addEventListener('unload', Multi.onUnload);

  return Multi;

});
}(_cnx.define, _cnx.require));

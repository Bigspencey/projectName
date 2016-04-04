/*!*************************************************************************
[NIT.Cookie.js]

Copyright (C) 2010 Next IT Corporation, Inc. Spokane, WA. All Rights Reserved.
This document is confidential work and intellectual property of Next IT
Corporation. Permission to copy, distribute or use any portion of this file
is prohibited without the express written consent of Next IT Corporation.

*****************************************************************************/
if (!this.NIT) this.NIT = {}; // Ensure namespace exists if running as stand-alone script

NIT.Cookie = function (name, sVals, exp)
{
    var me = this;
    this.name = name;
    this.value = null;
    this.values = new Object();
    // These three are for saving cookies
    this.expires = (exp) ? exp : null; // Leave null for session cookie (or if updating cookie)
    this.path = '/';
    this.secure = false;
    this.domain = NIT.CookieUtil.getDomain();

    if (sVals != null) // Parse specified value(s)
    {
        var nvc = (typeof (sVals) == "string") ? sVals.split('&') : null; // Get the name-value collection from the cookie
        if (nvc != null && nvc.length > 0 && sVals.indexOf('=') > -1)
        {
            for (var i = 0; i < nvc.length; i++)
            {
                var nv = nvc[i].split('='); // Get the name and value of this entry
                if (nv.length > 1)
                    me.values[nv[0]] = nvc[i].substr(nv[0].length + 1); //nv[1]; // Add property to our Values (remove the name, since the content may also have '=' characters)
                else if (i == 0)
                    me.value = nv[0]; // If no equal sign and the first entry, it is the main property

            }
        }
        else // Single value cookie
            me.value = sVals;
    }

    // Methods
    this.save = function ()
    {
        var v = (me.value != null) ? me.value : '';
        for (var n in me.values)
        {
            var val = (me.values[n] != null) ? me.values[n] : '';
            v += '&' + n + '=' + val; //escape(val); // No longer escaped, now matching how .NET does it
        }
        if (v[0] == '&')
            v = v.substr(1);

        var c = this.name + '=' + v +
			((me.expires == null) ? "" : (";expires=" + me.expires.toGMTString())) +
			";path=" + this.path +
			((me.domain == null) ? "" : (";domain=" + me.domain)) +
			((me.secure) ? ";secure;" : ";");
        document.cookie = c;
    };

    this.remove = function ()
    {
        me.expires = new Date(1970, 1, 2); // "Fri, 02-Jan-1970 00:00:00 GMT" );
        me.save();
    };
};

NIT.CookieUtil = new function ()
{
    var me = this;
    this.getCookies = function () // Parses all available cookies
    {
        var all = new Object();
        if (document.cookie != "")
        {
            var cookies = document.cookie.split("; ");
            for (i = 0; i < cookies.length; i++)
            {
                var c = cookies[i];
                var idx = c.indexOf('=');
                var N = c.substr(0, idx);
                var V = '';
                if (c.length > idx + 1) // Not an empty value (just in case)
                    V = c.substring(idx + 1, c.length); //unescape( c.substring(idx+1, c.length) ); // No longer escaped, now matching how .NET does it
                all[N] = new NIT.Cookie(N, V);
            }
        }
        return all;
    };

    this.getCookie = function (name) // Selects a cookie by name
    {
        return me.getCookies()[name];
    };

    this.showCookies = function ()
    {
        var cookies = me.getCookies();
        var sCookie = '';
        for (var crumb in cookies)
        {
            sCookie += 'Name: ' + cookies[crumb].name + '\n';
            sCookie += 'Value: ' + cookies[crumb].value + '\n';
            // now show Values array for the current crumb
            for (var values in cookies[crumb].values)
            {
                sCookie += "    " + values + ": ";
                sCookie += cookies[crumb].values[values] + "\n";
            }
        }
        return sCookie;
    };

    this.getDomain = function ()
    {
        // NOTE: TAM-234 - TAM's domain is tam.com.br, so adjust accordingly
        var url = location.host;
        var firstDot = url.indexOf('.');

        if (firstDot > -1)
        {
            url = url.substring(firstDot + 1);
        }

        if (url.indexOf('.') == -1)
        {
            url = null;
        }

        // Fix for when we're referencing by IP address
        if (url && (/^[0-9]+.[0-9]+$/g).test(url))
        {
            return null;
        }

        return url;
    };

    this.isCookiesEnabled = function ()
    {
        // set a cookie then test to see if it was set properly
        var n = "Test";
        var c = new NIT.Cookie(n, n);
        c.save(); // Save in cookie collection
        c = me.getCookie(n); // Check that we can retrieve it
        if (c) c.remove(); // Cleanup

        return (c != null && c.value == n) ? true : false;
    };
};

//////////////////////////////////////
// Event Extensions
//////////////////////////////////////
NIT.addListener = function (obj, evt, cb) // Cross-browser event attaching ex: (obj, "onload", Init)
{
    if (obj.attachEvent)
    {
        obj.attachEvent(evt, cb); //"onload", Init );
    }
    else if (obj.addEventListener)
    {
        evt = (evt.toLowerCase().indexOf("on") == 0) ? evt.substr(2) : evt;
        obj.addEventListener(evt, cb, false); //"load", Init, false );
    }
};

/*!*************************************************************************
[NIT.Embed.js]

Copyright (C) 2012 Next IT Corporation, Inc. Spokane, WA. All Rights Reserved.
This document is confidential work and intellectual property of Next IT
Corporation. Permission to copy, distribute or use any portion of this file
is prohibited without the express written consent of Next IT Corporation.

*****************************************************************************/

NITAgent = new function ()
{
	var me = this;
	this.proactiveLaunch = false;
	this.initialLaunch = true;

    this.JSMinVersion = '7.5.146.0';

	// This is the function the client page should call to cause agent to be shown
	this.ShowAgent = function (launchPointName, isoLanguageName, question, top, left, configJson)
	{
		this.isoLanguageName = isoLanguageName;

		if (configJson != undefined)
		{
			if (me.uiState.userClosed)
			{
				//Do not do any proactive launching if user has closed agent during session
				return;
			}

			me.proactiveLaunch = true;
			me.uiState.agentDisplayPassive = true;
			if (!me.uiState.agentDisplay)
			{
				// if showAgentUI returns false, we have to load the agent js, css, etc first, then try again
				if (!me.showAgentUI(launchPointName, isoLanguageName, question, top, left))
				{
					me.loadAgentContent(function ()
					{
						return NITAgent.showAgentUI(launchPointName, isoLanguageName, question, top, left);
					});
				}

				me.initialLaunch = false;
			}
			//Hack to allow agent to finish initializing user before calling appevents - need to find better way to do this!!
			setTimeout(function () { NITAgent.LaunchWithPointOfNeed(launchPointName, isoLanguageName, question, top, left, configJson); }, 1000);
		}
		else
		{
			// if showAgentUI returns false, we have to load the agent js, css, etc first, then try again
			if (!me.showAgentUI(launchPointName, isoLanguageName, question, top, left))
			{
				me.loadAgentContent(function ()
				{
					return NITAgent.showAgentUI(launchPointName, isoLanguageName, question, top, left);
				});
			}

			me.initialLaunch = false;
		}
	};

	this.LaunchWithPointOfNeed = function (launchPointName, isoLanguageName, question, top, left, configJson)
	{
		if (NIT != undefined && NIT.User != undefined && NIT.User.id != null)
		{
			NIT.UI.Custom.proactiveLaunch = true;
			var launchType = me.initialLaunch ? 'Initial' : 'Relaunch';
			var appEventRequest = null;

			switch (configJson.ACTION)
			{
				case 'ERROR':
					appEventRequest = new NIT.AppEventRequest('HandlePageError');
					appEventRequest.addParameter('ErrorCode', configJson.ERROR_CODE.toString());
					appEventRequest.addParameter('ErrorMessage', configJson.ERROR_MESSAGE.toString());
					break;
				case 'BEFORE_TIMEOUT':
					appEventRequest = new NIT.AppEventRequest('BeforeSessionTimeout');
					break;
				case 'AFTER_TIMEOUT':
					appEventRequest = new NIT.AppEventRequest('AfterSessionTimeout');
					appEventRequest.addParameter('AfterSessionTimeoutUrl', configJson.URL.toString());
					break;
				case 'UPSELL_CROSSSELL':
					appEventRequest = new NIT.AppEventRequest('ConfirmationPageUpsell');
					appEventRequest.addParameter('AAASUpsellUrl', configJson.URL_AAAS.toString());
					appEventRequest.addParameter('CarUpsellUrl', configJson.URL_CAR.toString());
					appEventRequest.addParameter('HotelUpsellUrl', configJson.URL_HOTEL.toString());
					break;
				case 'LAUNCH_UNIT':
					appEventRequest = new NIT.AppEventRequest('ProactiveLaunch');
					appEventRequest.addParameter('UnitFriendlyName', configJson.FRIENDLY_NAME.toString());
					appEventRequest.addParameter('IsLoggedInUser', NIT.UI.Custom.getLoggedInStatus().toString());
					break;
			}

			if (appEventRequest)
			{
				appEventRequest.addParameter('LaunchType', launchType);
				appEventRequest.send();
			}
		}
		else
		{
			setTimeout(function() { me.LaunchWithPointOfNeed(launchPointName, isoLanguageName, question, top, left, configJson); }, 500);
		}

	};

	this.SendCommissionableAppEvent = function (billableTransaction, currency, rewardPoints, transactionId, transactionAmount, paymentType, market, commissionLanguage)
	{
		if (!me.agentContentAdded)
		{
			me.loadAgentContent(function ()
			{
				NITAgent.showAgentUI('default', NITAgent.uiState.isoLanguageName, '', 0, 0);
				if (NIT != undefined && NIT.UI != undefined && NIT.UI.Embedded != undefined)
					NIT.UI.Embedded.changeAgentLayout('close');  //open and close because  lot of errors when things don't get set properly. should fix this to load correctly without this.

				NITAgent.EnsureAppEventSend(billableTransaction, currency, rewardPoints, transactionId, transactionAmount, paymentType, market, commissionLanguage);
				return true; //must return true or this cb will be added to the sequence and continue to be run ad nauseum.
			}
			);
		}
		else
		{
			NITAgent.EnsureAppEventSend(billableTransaction, currency, rewardPoints, transactionId, transactionAmount, paymentType, market, commissionLanguage);
		}
	};

	this.EnsureAppEventSend = function (billableTransaction, currency, rewardPoints, transactionId, transactionAmount, paymentType, market, commissionLanguage)
	{
		var qualifyingSID = null;
		var commissionable = NIT.CookieUtil.getCookie("NIT_Commissionable");

		if (commissionable && commissionable.values)
		{
			qualifyingSID = commissionable.values['SESSIONID'];
		}
		if (NIT != undefined && NIT.User != undefined && NIT.User.id != null)
		{
			var r = new NIT.AppEventRequest('CommitCommissionableTransaction');
			r.addParameter('billableTransaction', billableTransaction.toString());
			r.addParameter('currency', currency.toString());
			r.addParameter('rewardPoints', rewardPoints.toString());
			r.addParameter('transactionId', transactionId.toString());
			r.addParameter('transactionAmount', transactionAmount.toString());
			r.addParameter('qualifyingSID', qualifyingSID.toString());
			r.addParameter('paymentType', paymentType.toString());
			r.addParameter('market', market.toString());
			r.addParameter('commissionLanguage', commissionLanguage.toString());
			r.send();
			clearTimeout(this.commissionTimeout);
		}
		else if (NIT != undefined)
		{
			if (NIT.User != undefined && NIT.User.id == null)
			{
				var profile = NIT.CookieUtil.getCookie("ActiveAgent");

				NIT.User.id = profile.values['ID'];
			}
			this.commissionTimeout = setTimeout(function () { NITAgent.EnsureAppEventSend(billableTransaction, currency, rewardPoints, transactionId, transactionAmount, paymentType, market, commissionLanguage) }, 200);
		}
	};
	this.commissionTimeout = null;
	this.agentContentAdded = false;
	this.isoLanguageName = 'pt'; //Default to Portoguese TAM-2134
	this.userInitialized = false;
	this.showTimeout = null;
	this.layoutToBeShown = 'open';

	this.baseUrl;
	this.getBaseUrl = function ()
	{
		if (!me.baseUrl)
		{
			var scriptTags = document.getElementsByTagName('script');
			var url = '';
			for (var i = 0; i < scriptTags.length; i++)
			{
				var src = scriptTags[i].getAttribute('src', -1);
				if (src > '' && src.indexOf('NIT.Embed.js') > -1)
				{
					url = src;
					break;
				}
			}

			//var url = document.getElementById("agentScript").getAttribute('src', -1);
			me.baseUrl = url.substr(0, url.lastIndexOf('/includes/') + 1);
		}
		return me.baseUrl;
	};

	this.getAgentHTML = function ()
	{
		// BUGBUG: Please be aware, any element that defines a localizer* attribute must include a seperate closing tag. I.e. DO NOT USE: <span /> Instead, USE: <span></span>
		return '\
			<div id="aagent_container" class="reset">\
			<div id="welcomeVideoDiv" style="display:none;">\
				<!--<video id="welcomeVideo" crossorigin="anonymous" style="display:none;">\
					<source src="' + me.getBaseUrl() + 'videos/JULIA_ALPHA_LOW.mp4" type="video/mp4">\
					<source src="' + me.getBaseUrl() + 'videos/JULIA_ALPHA_LOW.OGG" type="video/ogg">\
					<source src="' + me.getBaseUrl() + 'videos/JULIA_ALPHA_LOW.WebM" type="video/webm">-->\
					<div id="julia-welcome-flash"></div>\
				<!--</video>-->\
			</div>\
    	    <div id="aagent_header" class="aagent_header">\
        	    <div class="aagent_avatar"></div>\
                <div class="aagent_title">\
                    <div localizerTokenInnerHTML="agentMainTitle" class="aagent_title__main">Olá, Eu<br /> Sou A Julia </div>\
                    <div localizerTokenInnerText="agentSubTitle" class="aagent_title__sub">Posso ajudar na sua busca?</div>\
                </div>\
				<div class="aagent_subtitle"></div>\
                <div class="toolbar">\
					<div class="aagent_drag"></div>\
					<div class="aagent_minimize" onclick="NIT.UI.Embedded.changeAgentLayout(\'minimize\');"></div>\
					<div class="aagent_maximize" onclick="NIT.UI.Embedded.changeAgentLayout(\'maximize\');"></div>\
    	            <div class="aagent_close" onclick="NIT.UI.Embedded.changeAgentLayout(\'close\');"></div>\
				</div>\
            </div>\
			<div id="aagent_conversation">\
        	    <div id="chatHistory" class="aagent_chathistory">\
        	    </div>\
            </div>\
			<div id="InlineSurveyOverlay_BG"></div>\
			<div id="InlineSurveyOverlay_Container">\
				<div id="InlineSurveyOverlay_Form">\
					<span class="heading"><div localizerTokenInnerHTML="surveyHeading" id="surveyTitleDiv"></div></span>\
					<br/>\
					<div id="SurveyOptions">\
					</div>\
					<div id="freeFormTextDiv">\
							<textarea id="freeFormTextInput" localizerTokenValue="surveyFeedbackGhostText"></textarea>\
						</div>\
				<div id="InlineSurveyOverlay_Submit"><a localizerTokenInnerText="submitButtonText" class="aagent_surveySubmit" id="inlineSurveySubmitLink" href="javascript:void(0);"></a></div>\
					<div id="InlineSurveyOverlay_Close"><a href="javascript:NIT.UI.Custom.closeInlineSurveyForm();void(0);"><img border="0" alt="Close" src="' + me.getBaseUrl() + 'images/embed/btn_close.png" width="12" height="12"></a></div>\
				</div>\
			</div>\
            <div id="aagent_footer">\
				<div id="NIT_chat_input_wrap">\
					<div class="aagent_input"><textarea localizerTokenInnerText="inputGhostText" id="inputBox" class="aa_chatinput aa_chatinputalt" wrap="off"></textarea></div>\
					<div localizerTokenInnerText="sendButtonText" class="aagent_ask" onclick="javascript:NIT.UI.Input.ask();void(0);">Enviar</div>\
					 <div id="aagent_sound" class="aagent_sound_on" onClick="javascript:NIT.UI.Sound.toggleSound(!NIT.UI.Sound.getSoundEnabled());void(0);"></div>\
				</div>\
            </div>\
			<div id="NIT_feedback" style="display:none; overflow: hidden;">\
				<div id="NIT_feedback_wrap">\
					<div id="NIT_feedback_header">\
						Ajude a melhorar nossos serviços. <br />Por favor, comente a sua experiência com o assistente virtual TAM.\
						<a id="NIT_close_feedback" href="javascript:NIT.UI.Training.toggleFeedback();void(0);" title="Fechar Retroalimentação"></a>\
					</div>\
					<div id="NIT_feedback_input">\
						<textarea id="feedbackBox" class="aa_feedbackinput aa_chatinputalt">Escreva os seus comentários aqui.</textarea>\
					</div>\
				</div>\
				<div id="aagent_feedback_footer">\
                    <a title="Enviar" id="NIT_feedback_button" class="aagent_ask feedback_ask" href="javascript:NIT.UI.Training.send();void(0);">Enviar</a>\
				</div>\
			</div>\
			</div>\
        </div>';
	};

	this.createAgentContainer = function ()
	{
		var div = document.getElementById('aagent_outercontainer');
		if (div)
		{
			div.style.display = 'none';
		}
		else
		{
			div = document.createElement('div');
			div.setAttribute('id', 'aagent_outercontainer');
			div.className = "ui-widget-content aagent_reset";
			div.style.display = 'none';
			div.style.position = "absolute"; // AGNT-1942 (prevent agent shoots to bottom of page if css missing)
			document.body.appendChild(div);
		}
		div.innerHTML = me.getAgentHTML();
		document.getElementById('aagent_container').style.display = 'none';
		div.style.display = 'block';
		return true;
	};

	this.addScriptTag = function (src, id)
	{
		var parent = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.setAttribute('id', id);
		script.setAttribute('language', 'javascript');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', src);
		if (parent) parent.appendChild(script);
	};

	this.loadAgentStyles = function ()
	{
		var parent = document.getElementsByTagName('head')[0];
		var styles = document.createElement('link');
		styles.setAttribute('rel', 'stylesheet');
		styles.setAttribute('type', 'text/css');

		styles.setAttribute('href', me.getBaseUrl() + 'includes/EmbedStyles-' + me.isoLanguageName + '.css?' + me.JSMinVersion);

		if (parent)
		{
			parent.appendChild(styles);
		}

		return true;
	};

	this.loadJQueryScripts = function ()
	{
		if (typeof jQuery != 'undefined' && jQuery.fn.jquery == '1.8.3')
		{
			if (jQuery.ui)
			{
				if (typeof $NITJ == 'undefined')
				{
					$NITJ = $; //jQuery.noConflict(); //TAM-1722
				}
				return true;
			}
			else if (!document.getElementById('nit-jquery-ui'))
			{
				me.addScriptTag(me.getBaseUrl() + 'includes/JQuery/jquery-ui.min-1.9.2.js', 'nit-jquery-ui');
			}
		}
		else if (!document.getElementById('nit-jquery'))
		{
			me.addScriptTag(me.getBaseUrl() + 'includes/JQuery/jquery-1.8.3.min.js', 'nit-jquery');
		}
		return false;
	};

	this.registerAgentScript = function ()
	{
	    me.addScriptTag(me.getBaseUrl() + 'includes/NIT.min.js?' + me.JSMinVersion , 'agentContentScript');
		return true;
	};

	this.loadSwfObjectScript = function()
	{
		me.addScriptTag(me.getBaseUrl() + 'includes/swfobject.js', 'nit-swfobject');
		return true;
	};

	this.loadJQuerySeeThruScript = function()
	{
		me.addScriptTag(me.getBaseUrl() + 'includes/JQuery/jquery-seeThru.min.js', 'nit-jquery-seeThru');
		return true;
	};

	this.loadAgentContent = function (cb)
	{
		if (!me.agentContentAdded)
		{
			var seq = [
				me.loadJQueryScripts,
				me.loadSwfObjectScript,
				me.loadAgentStyles,
				me.createAgentContainer,
				me.registerAgentScript];

			if (cb)
			{
				seq.push(cb);
			}
			me.agentContentAdded = true;
			me.executeSequence(seq);
		}
	};

	this.executeSequence = function (seq)
	{
		if (seq.length > 0)
		{
			var fn = seq[0];
			if (fn())
			{
				seq.shift();
				me.executeSequence(seq);
			}
			else
			{
				setTimeout(function () { NITAgent.executeSequence(seq) }, 100);
			}
		}
	};

	this.showAgentUI = function (launchPointName, isoLanguageName, question, top, left)
	{
		if (window.NIT && window.NIT.User && window.NIT.UI && window.NIT.UI.Embedded)
		{
			if (!me.userInitialized)
			{
				NIT.User.init();
				me.userInitialized = true;
			}

			NIT.UI.Embedded.changeAgentLayout(me.layoutToBeShown, launchPointName, isoLanguageName, question, top, left);

			return true;
		}

		return false;
	};

	this.onPageLoaded = function ()
	{
		if (me.uiState.agentDisplay) //if agent was visible on previous page, load agent
		{
			me.layoutToBeShown = 'openonreload'; //launchPointName, isoLanguageName, question, top, left
			me.ShowAgent("refresh", NITAgent.uiState.isoLanguageName, '', 0, 0);
		}
		NITAgent.detectConfirmationPage(); //TODO: REMOVE THIS IN FAVOR OF COMMISSIONSERVICE
		me.detectQueryStringLaunch();
	};

	//TAM-1699
	this.detectQueryStringLaunch = function()
	{
		var question = queryStringValue['AgentQuestion'];

		if (question)
		{
			me.ShowAgent('Default', 'pt', question, 0, 0);
		}
	};

	var queryStringValue = (function (a)
	{
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i)
		{
			var p = a[i].split('=');
			if (p.length != 2) continue;
			b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	})(window.location.search.substr(1).split('&'));

	//
	this.detectConfirmationPage = function ()
	{
		if (window.location.pathname.toString().indexOf('/air/booking/confirmation') !== -1)
		{
			var commissionable = NIT.CookieUtil.getCookie("NIT_Commissionable");

			if (commissionable && commissionable.values)//if commissionable
			{
				var FlightConfirmationNumber = document.getElementsByName('REC_LOC');
				if (FlightConfirmationNumber)
				{
					NITAgent.SendCommissionableAppEvent(true, 'usd', false, FlightConfirmationNumber[0].value, 0);
				}
			}
		}

	};
	this.uiState = new function ()
	{
		var currentState = this;
		this.agentDisplay = false;
		this.agentDisplayPassive = false; //true if Agent is being shown, but user has not opted into engagement with the Agent
		this.isoLanguageName = "pt";
		this.flightSearchComplete = false;
		this.userClosed = false;
		this.surveyResponseId = '';
		this.welcomeVideoDisplayed = false;
		this.inChangeReservationFlow = false;

		this.top = 97;
		this.left = 610;
		this.width = 278;
		this.height = 475;
		this.bodyHeight = 328; //height - (header + footer + padding)

		this.headerHeight = 94;
        //footer height is 33px

		this.minWidth = 278;
		this.minHeight = 475;

		this.sessionCookieName = 'NIT_UiState';
		this.persistentCookieOldName = 'NIT_AgentProfile';
		this.persistentCookieName = 'NIT_AgentUIProfile';

		var _updateSessionCookie = function () //Only session related UI settings goes here
		{
			var value = "DISP" + "=" + currentState.agentDisplay + "&" + "ISOLANGUAGENAME" + "=" + NIT.Localization.getISOLanguageName() + "&" + "USERCLOSED" + "=" + currentState.userClosed + "&" + "SURVEYRESPONSEID" + "=" + currentState.surveyResponseId + "&" + "WELCOMEVIDEODISPLAYED" + "=" + currentState.welcomeVideoDisplayed + "&" + "INCHANGERESERVATIONFLOW" + "=" + currentState.inChangeReservationFlow;
			var c = new NIT.Cookie(currentState.sessionCookieName, value);

			c.save();
		};

		var _updatePersistCookie = function () //Only persistent UI settings goes here
		{
			var value = "top" + "=" + currentState.top +
				"&" + "lft" + "=" + currentState.left +
				"&" + "wdth" + "=" + currentState.width +
				"&" + "hgt" + "=" + currentState.height +
				"&" + "bdhgt" + "=" + currentState.bodyHeight;

			//Add a year to current date
			var exp = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
			var c = new NIT.Cookie(currentState.persistentCookieName, value, exp);
			c.save();
		};

		this.updateInChangeReservationFlow = function(value)
		{
			currentState.inChangeReservationFlow = value;
			_updateSessionCookie();
		};

		this.updateWelcomeVideoDisplayed = function(value)
		{
			currentState.welcomeVideoDisplayed = value;
			_updateSessionCookie();
		};

		this.updateSurveyResponseId = function (value)
		{
			currentState.surveyResponseId = value;
			_updateSessionCookie();
		};

		this.updateAgentDisplay = function (value)
		{
			currentState.agentDisplay = value;
			currentState.agentDisplayPassive = false;
			_updateSessionCookie();
		};

		this.updateAgentUserClosed = function (value)
		{
			currentState.userClosed = value;
			_updateSessionCookie();
		};

		this.updateAgentLanguage = function (value)
		{
			currentState.isoLanguageName = value;
			_updateSessionCookie();
		};

		this.load = function ()
		{
		    

			var profile = NIT.CookieUtil.getCookie(this.persistentCookieName);

			if (profile && profile.values)
			{
				currentState.top = profile.values['top'] === 'undefined' ? currentState.top : parseInt(profile.values['top']);
				currentState.left = profile.values['lft'] === 'undefined' ? currentState.left : parseInt(profile.values['lft']);
				currentState.width = profile.values['wdth'] === 'undefined' ? currentState.width : parseInt(profile.values['wdth']);
				currentState.height = profile.values['hgt'] === 'undefined' ? currentState.height : parseInt(profile.values['hgt']);
				currentState.bodyHeight = profile.values['bdhgt'] === 'undefined' ? currentState.bodyHeight : parseInt(profile.values['bdhgt']);
			}

			var c = NIT.CookieUtil.getCookie(currentState.sessionCookieName);

			if (c && c.values)
			{
				currentState.agentDisplay = (c.values['DISP'] == 'true');
				currentState.isoLanguageName = c.values['ISOLANGUAGENAME'];
				currentState.surveyResponseId = c.values['SURVEYRESPONSEID'];
				currentState.welcomeVideoDisplayed = c.values['WELCOMEVIDEODISPLAYED'];
				currentState.inChangeReservationFlow = c.values['INCHANGERESERVATIONFLOW'];
				if (c.values['FLIGHTSEARCH'] == "t")
				{
					c.values['FLIGHTSEARCH'] = "f";
					c.save();
					//queue app event for flight search complete.
					currentState.flightSearchComplete = true;
				}
			}
		};

		this.updateProfile = function (top, left, width, height, bodyHeight)
		{
			width = (width < this.minWidth ? this.minWidth : width);
			height = (height < this.minHeight ? this.minHeight : height);

			currentState.top = top;
			currentState.left = left;
			currentState.width = width;
			currentState.height = height;
			currentState.bodyHeight = bodyHeight;

			_updatePersistCookie();
		};

		currentState.load();
	};

	this.logToConsole = function (message)
	{
		if (typeof console !== "undefined" && console != null && typeof console.log !== "undefined")
			console.log("NITAgent: " + message);
	};

	this.SetTransactionableCookie = function ()
	{
		//alert("SetTransactionableCookie");
		var sessionCookie = NIT.CookieUtil.getCookie('NIT_Session');

		if (sessionCookie && sessionCookie.values)
		{
			var sessionID = sessionCookie.values['SessionID'];
			//alert("SetTransactionableCookie: " + sessionID);
			var value = "COMMISSIONABLE" + "=" + "true" + "&" + "SESSIONID" + "=" + sessionID;
			var c = new NIT.Cookie('NIT_Commissionable', value);

			c.save();
		} else
		{
			//alert("SetTransactionableCookie: Failed");
		}
	};

    this.cleanUp = function()
    {
        //remove old cookie
        var c = NIT.CookieUtil.getCookie(me.persistentCookieOldName);
        if (c)
        {
            c.remove();
        }
    }
    me.cleanUp();

    NIT.addListener(window, "onload", me.onPageLoaded);
};

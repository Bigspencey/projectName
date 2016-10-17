'use strict';

var utils = {
	globalAccount: this.globalAccount || new Account(),
	history : {
		lastVisitURL : {
			init : function() {
				window.onbeforeunload = utils.history.lastVisitURL.set;
			},
			set : function() {
				utils.cookie.create('lastVisitURL', location.href, '30');
			},
			get : function() {
				return utils.cookie.read('lastVisitURL');
			}
		}
	},
	session: {
		start: function() {
			// Make sure
			var startTime = utils.sessionStorage.getItem('sessionStartTime');

			if (!startTime) {
				// Date gets converted to String
				startTime = (new Date()).toString();
				utils.sessionStorage.setItem('sessionStartTime', startTime);
			}
		},
		getStartTime: function() {
			utils.session.start(); // Just in case someone deleted it
			return new Date( utils.sessionStorage.getItem('sessionStartTime') );
		}
	},
	sessionStorage : {
		setItem : function(name, value) {
			if (utils.sessionStorage.hasSessionStorage()) {
				sessionStorage.setItem(name, value);
			} else {
				utils.cookie.create(name, value);
			}
		},
		getItem : function(name) {
			var value = '';
			if (utils.sessionStorage.hasSessionStorage()) {
				value = sessionStorage.getItem(name);
			} else {
				value = utils.cookie.read(name);
			}
			return value;
		},
		removeItem : function(name) {
			if (utils.sessionStorage.hasSessionStorage()) {
				sessionStorage.removeItem(name);
			} else {
				utils.cookie.delete(name);
			}
		},
		hasSessionStorage : function() {
			if (utils.sessionStorage.hasSessionStorageValue !== null)
				return utils.sessionStorage.hasSessionStorageValue;

			try {
				sessionStorage.setItem("storage", "true");
				sessionStorage.removeItem("storage");
				// return and set at the same time
				return utils.sessionStorage.hasSessionStorageValue = true;
			}
			catch(err) {
				// return and set at the same time
				return utils.sessionStorage.hasSessionStorageValue = false;
			}
		},
		hasSessionStorageValue: null
	},
	cookie : {
		read : function(name) {
			var c_name = name;
			if (document.cookie.length > 0) {
				var c_start = document.cookie.indexOf(name + "=");
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					var c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) {
						c_end = document.cookie.length;
					}
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
			return "";
		},
		create : function(name, value, days) {
			var days = days || '';
			var expires = '';
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

			if(days !== '') {
				expires = "; expires=" + date.toGMTString();
			}

			document.cookie = name + "=" + value + expires + "; path=/";
		},
		delete : function(name) {
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
		}
	}
}
/** initialize history and session **/
utils.history.lastVisitURL.init();
utils.session.start();

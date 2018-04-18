webpackJsonp([0],{

/***/ "./resources/assets/js/app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var $ = global.jQuery;
window.$ = $;

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./bootstrap');
// require('wowjs');

__webpack_require__("./resources/assets/js/elements/jquery.mixitup.js");
// require('./elements/jquery.counterup.min');
// require('./elements/waypoints.min');
__webpack_require__("./resources/assets/js/elements/jquery.nav.js");
__webpack_require__("./resources/assets/js/elements/jquery.easing.min.js");
__webpack_require__("./resources/assets/js/elements/nivo-lightbox.js");
__webpack_require__("./resources/assets/js/elements/jquery.slicknav.js");

__webpack_require__("./resources/assets/js/elements/main.js");

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/assets/js/elements/jquery.easing.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function swing(x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function easeInQuad(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function easeOutQuad(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b;
	},
	easeInCubic: function easeInCubic(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function easeOutCubic(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function easeInQuart(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function easeOutQuart(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function easeInQuint(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function easeOutQuint(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function easeInSine(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function easeOutSine(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function easeInOutSine(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function easeInExpo(x, t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function easeOutExpo(x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function easeInCirc(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function easeOutCirc(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function easeInElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function easeOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function easeInBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function easeOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function easeInBounce(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function easeOutBounce(x, t, b, c, d) {
		if ((t /= d) < 1 / 2.75) {
			return c * (7.5625 * t * t) + b;
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
		}
	},
	easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/elements/jquery.mixitup.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**!
 * MixItUp v2.1.11
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function ($, undf) {
	'use strict';

	/**
  * MixItUp Constructor Function
  * @constructor
  * @extends jQuery
  */

	$.MixItUp = function () {
		var self = this;

		self._execAction('_constructor', 0);

		$.extend(self, {

			/* Public Properties
   ---------------------------------------------------------------------- */

			selectors: {
				target: '.mix',
				filter: '.filter',
				sort: '.sort'
			},

			animation: {
				enable: true,
				effects: 'fade scale',
				duration: 600,
				easing: 'ease',
				perspectiveDistance: '3000',
				perspectiveOrigin: '50% 50%',
				queue: true,
				queueLimit: 1,
				animateChangeLayout: false,
				animateResizeContainer: true,
				animateResizeTargets: false,
				staggerSequence: false,
				reverseOut: false
			},

			callbacks: {
				onMixLoad: false,
				onMixStart: false,
				onMixBusy: false,
				onMixEnd: false,
				onMixFail: false,
				_user: false
			},

			controls: {
				enable: true,
				live: false,
				toggleFilterButtons: false,
				toggleLogic: 'or',
				activeClass: 'active'
			},

			layout: {
				display: 'inline-block',
				containerClass: '',
				containerClassFail: 'fail'
			},

			load: {
				filter: 'all',
				sort: false
			},

			/* Private Properties
   ---------------------------------------------------------------------- */

			_$body: null,
			_$container: null,
			_$targets: null,
			_$parent: null,
			_$sortButtons: null,
			_$filterButtons: null,

			_suckMode: false,
			_mixing: false,
			_sorting: false,
			_clicking: false,
			_loading: true,
			_changingLayout: false,
			_changingClass: false,
			_changingDisplay: false,

			_origOrder: [],
			_startOrder: [],
			_newOrder: [],
			_activeFilter: null,
			_toggleArray: [],
			_toggleString: '',
			_activeSort: 'default:asc',
			_newSort: null,
			_startHeight: null,
			_newHeight: null,
			_incPadding: true,
			_newDisplay: null,
			_newClass: null,
			_targetsBound: 0,
			_targetsDone: 0,
			_queue: [],

			_$show: $(),
			_$hide: $()
		});

		self._execAction('_constructor', 1);
	};

	/**
  * MixItUp Prototype
  * @override
  */

	$.MixItUp.prototype = {
		constructor: $.MixItUp,

		/* Static Properties
  ---------------------------------------------------------------------- */

		_instances: {},
		_handled: {
			_filter: {},
			_sort: {}
		},
		_bound: {
			_filter: {},
			_sort: {}
		},
		_actions: {},
		_filters: {},

		/* Static Methods
  ---------------------------------------------------------------------- */

		/**
   * Extend
   * @since 2.1.0
   * @param {object} new properties/methods
   * @extends {object} prototype
   */

		extend: function extend(extension) {
			for (var key in extension) {
				$.MixItUp.prototype[key] = extension[key];
			}
		},

		/**
   * Add Action
   * @since 2.1.0
   * @param {string} hook name
   * @param {string} namespace
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._actions
   */

		addAction: function addAction(hook, name, func, priority) {
			$.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
		},

		/**
   * Add Filter
   * @since 2.1.0
   * @param {string} hook name
   * @param {string} namespace
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._filters
   */

		addFilter: function addFilter(hook, name, func, priority) {
			$.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
		},

		/**
   * Add Hook
   * @since 2.1.0
   * @param {string} type of hook
   * @param {string} hook name
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._filters
   */

		_addHook: function _addHook(type, hook, name, func, priority) {
			var collection = $.MixItUp.prototype[type],
			    obj = {};

			priority = priority === 1 || priority === 'post' ? 'post' : 'pre';

			obj[hook] = {};
			obj[hook][priority] = {};
			obj[hook][priority][name] = func;

			$.extend(true, collection, obj);
		},

		/* Private Methods
  ---------------------------------------------------------------------- */

		/**
   * Initialise
   * @since 2.0.0
   * @param {object} domNode
   * @param {object} config
   */

		_init: function _init(domNode, config) {
			var self = this;

			self._execAction('_init', 0, arguments);

			config && $.extend(true, self, config);

			self._$body = $('body');
			self._domNode = domNode;
			self._$container = $(domNode);
			self._$container.addClass(self.layout.containerClass);
			self._id = domNode.id;

			self._platformDetect();

			self._brake = self._getPrefixedCSS('transition', 'none');

			self._refresh(true);

			self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;

			if (self.load.sort) {
				self._newSort = self._parseSort(self.load.sort);
				self._newSortString = self.load.sort;
				self._activeSort = self.load.sort;
				self._sort();
				self._printSort();
			}

			self._activeFilter = self.load.filter === 'all' ? self.selectors.target : self.load.filter === 'none' ? '' : self.load.filter;

			self.controls.enable && self._bindHandlers();

			if (self.controls.toggleFilterButtons) {
				self._buildToggleArray();

				for (var i = 0; i < self._toggleArray.length; i++) {
					self._updateControls({ filter: self._toggleArray[i], sort: self._activeSort }, true);
				};
			} else if (self.controls.enable) {
				self._updateControls({ filter: self._activeFilter, sort: self._activeSort });
			}

			self._filter();

			self._init = true;

			self._$container.data('mixItUp', self);

			self._execAction('_init', 1, arguments);

			self._buildState();

			self._$targets.css(self._brake);

			self._goMix(self.animation.enable);
		},

		/**
   * Platform Detect
   * @since 2.0.0
   */

		_platformDetect: function _platformDetect() {
			var self = this,
			    vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
			    vendorsRAF = ['webkit', 'moz'],
			    chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
			    ff = typeof InstallTrigger !== 'undefined',
			    prefix = function prefix(el) {
				for (var i = 0; i < vendorsTrans.length; i++) {
					if (vendorsTrans[i] + 'Transition' in el.style) {
						return {
							prefix: '-' + vendorsTrans[i].toLowerCase() + '-',
							vendor: vendorsTrans[i]
						};
					};
				};
				return 'transition' in el.style ? '' : false;
			},
			    transPrefix = prefix(self._domNode);

			self._execAction('_platformDetect', 0);

			self._chrome = chrome ? parseInt(chrome[1], 10) : false;
			self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
			self._prefix = transPrefix.prefix;
			self._vendor = transPrefix.vendor;
			self._suckMode = window.atob && self._prefix ? false : true;

			self._suckMode && (self.animation.enable = false);
			self._ff && self._ff <= 4 && (self.animation.enable = false);

			/* Polyfills
   ---------------------------------------------------------------------- */

			/**
    * window.requestAnimationFrame
    */

			for (var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++) {
				window.requestAnimationFrame = window[vendorsRAF[x] + 'RequestAnimationFrame'];
			}

			/**
    * Object.getPrototypeOf
    */

			if (typeof Object.getPrototypeOf !== 'function') {
				if (_typeof('test'.__proto__) === 'object') {
					Object.getPrototypeOf = function (object) {
						return object.__proto__;
					};
				} else {
					Object.getPrototypeOf = function (object) {
						return object.constructor.prototype;
					};
				}
			}

			/**
    * Element.nextElementSibling
    */

			if (self._domNode.nextElementSibling === undf) {
				Object.defineProperty(Element.prototype, 'nextElementSibling', {
					get: function get() {
						var el = this.nextSibling;

						while (el) {
							if (el.nodeType === 1) {
								return el;
							}
							el = el.nextSibling;
						}
						return null;
					}
				});
			}

			self._execAction('_platformDetect', 1);
		},

		/**
   * Refresh
   * @since 2.0.0
   * @param {boolean} init
   * @param {boolean} force
   */

		_refresh: function _refresh(init, force) {
			var self = this;

			self._execAction('_refresh', 0, arguments);

			self._$targets = self._$container.find(self.selectors.target);

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				if (target.dataset === undf || force) {

					target.dataset = {};

					for (var j = 0; j < target.attributes.length; j++) {

						var attr = target.attributes[j],
						    name = attr.name,
						    val = attr.value;

						if (name.indexOf('data-') > -1) {
							var dataName = self._helpers._camelCase(name.substring(5, name.length));
							target.dataset[dataName] = val;
						}
					}
				}

				if (target.mixParent === undf) {
					target.mixParent = self._id;
				}
			}

			if (self._$targets.length && init || !self._origOrder.length && self._$targets.length) {
				self._origOrder = [];

				for (var i = 0; i < self._$targets.length; i++) {
					var target = self._$targets[i];

					self._origOrder.push(target);
				}
			}

			self._execAction('_refresh', 1, arguments);
		},

		/**
   * Bind Handlers
   * @since 2.0.0
   */

		_bindHandlers: function _bindHandlers() {
			var self = this,
			    filters = $.MixItUp.prototype._bound._filter,
			    sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('_bindHandlers', 0);

			if (self.controls.live) {
				self._$body.on('click.mixItUp.' + self._id, self.selectors.sort, function () {
					self._processClick($(this), 'sort');
				}).on('click.mixItUp.' + self._id, self.selectors.filter, function () {
					self._processClick($(this), 'filter');
				});
			} else {
				self._$sortButtons = $(self.selectors.sort);
				self._$filterButtons = $(self.selectors.filter);

				self._$sortButtons.on('click.mixItUp.' + self._id, function () {
					self._processClick($(this), 'sort');
				});

				self._$filterButtons.on('click.mixItUp.' + self._id, function () {
					self._processClick($(this), 'filter');
				});
			}

			filters[self.selectors.filter] = filters[self.selectors.filter] === undf ? 1 : filters[self.selectors.filter] + 1;
			sorts[self.selectors.sort] = sorts[self.selectors.sort] === undf ? 1 : sorts[self.selectors.sort] + 1;

			self._execAction('_bindHandlers', 1);
		},

		/**
   * Process Click
   * @since 2.0.0
   * @param {object} $button
   * @param {string} type
   */

		_processClick: function _processClick($button, type) {
			var self = this,
			    trackClick = function trackClick($button, type, off) {
				var proto = $.MixItUp.prototype;

				proto._handled['_' + type][self.selectors[type]] = proto._handled['_' + type][self.selectors[type]] === undf ? 1 : proto._handled['_' + type][self.selectors[type]] + 1;

				if (proto._handled['_' + type][self.selectors[type]] === proto._bound['_' + type][self.selectors[type]]) {
					$button[(off ? 'remove' : 'add') + 'Class'](self.controls.activeClass);
					delete proto._handled['_' + type][self.selectors[type]];
				}
			};

			self._execAction('_processClick', 0, arguments);

			if (!self._mixing || self.animation.queue && self._queue.length < self.animation.queueLimit) {
				self._clicking = true;

				if (type === 'sort') {
					var sort = $button.attr('data-sort');

					if (!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1) {
						$(self.selectors.sort).removeClass(self.controls.activeClass);
						trackClick($button, type);
						self.sort(sort);
					}
				}

				if (type === 'filter') {
					var filter = $button.attr('data-filter'),
					    ndx,
					    seperator = self.controls.toggleLogic === 'or' ? ',' : '';

					if (!self.controls.toggleFilterButtons) {
						if (!$button.hasClass(self.controls.activeClass)) {
							$(self.selectors.filter).removeClass(self.controls.activeClass);
							trackClick($button, type);
							self.filter(filter);
						}
					} else {
						self._buildToggleArray();

						if (!$button.hasClass(self.controls.activeClass)) {
							trackClick($button, type);

							self._toggleArray.push(filter);
						} else {
							trackClick($button, type, true);
							ndx = self._toggleArray.indexOf(filter);
							self._toggleArray.splice(ndx, 1);
						}

						self._toggleArray = $.grep(self._toggleArray, function (n) {
							return n;
						});

						self._toggleString = self._toggleArray.join(seperator);

						self.filter(self._toggleString);
					}
				}

				self._execAction('_processClick', 1, arguments);
			} else {
				if (typeof self.callbacks.onMixBusy === 'function') {
					self.callbacks.onMixBusy.call(self._domNode, self._state, self);
				}
				self._execAction('_processClickBusy', 1, arguments);
			}
		},

		/**
   * Build Toggle Array
   * @since 2.0.0
   */

		_buildToggleArray: function _buildToggleArray() {
			var self = this,
			    activeFilter = self._activeFilter.replace(/\s/g, '');

			self._execAction('_buildToggleArray', 0, arguments);

			if (self.controls.toggleLogic === 'or') {
				self._toggleArray = activeFilter.split(',');
			} else {
				self._toggleArray = activeFilter.split('.');

				!self._toggleArray[0] && self._toggleArray.shift();

				for (var i = 0, filter; filter = self._toggleArray[i]; i++) {
					self._toggleArray[i] = '.' + filter;
				}
			}

			self._execAction('_buildToggleArray', 1, arguments);
		},

		/**
   * Update Controls
   * @since 2.0.0
   * @param {object} command
   * @param {boolean} multi
   */

		_updateControls: function _updateControls(command, multi) {
			var self = this,
			    output = {
				filter: command.filter,
				sort: command.sort
			},
			    update = function update($el, filter) {
				try {
					multi && type === 'filter' && !(output.filter === 'none' || output.filter === '') ? $el.filter(filter).addClass(self.controls.activeClass) : $el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
				} catch (e) {}
			},
			    type = 'filter',
			    $el = null;

			self._execAction('_updateControls', 0, arguments);

			command.filter === undf && (output.filter = self._activeFilter);
			command.sort === undf && (output.sort = self._activeSort);
			output.filter === self.selectors.target && (output.filter = 'all');

			for (var i = 0; i < 2; i++) {
				$el = self.controls.live ? $(self.selectors[type]) : self['_$' + type + 'Buttons'];
				$el && update($el, '[data-' + type + '="' + output[type] + '"]');
				type = 'sort';
			}

			self._execAction('_updateControls', 1, arguments);
		},

		/**
   * Filter (private)
   * @since 2.0.0
   */

		_filter: function _filter() {
			var self = this;

			self._execAction('_filter', 0);

			for (var i = 0; i < self._$targets.length; i++) {
				var $target = $(self._$targets[i]);

				if ($target.is(self._activeFilter)) {
					self._$show = self._$show.add($target);
				} else {
					self._$hide = self._$hide.add($target);
				}
			}

			self._execAction('_filter', 1);
		},

		/**
   * Sort (private)
   * @since 2.0.0
   */

		_sort: function _sort() {
			var self = this,
			    arrayShuffle = function arrayShuffle(oldArray) {
				var newArray = oldArray.slice(),
				    len = newArray.length,
				    i = len;

				while (i--) {
					var p = parseInt(Math.random() * len);
					var t = newArray[i];
					newArray[i] = newArray[p];
					newArray[p] = t;
				};
				return newArray;
			};

			self._execAction('_sort', 0);

			self._startOrder = [];

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				self._startOrder.push(target);
			}

			switch (self._newSort[0].sortBy) {
				case 'default':
					self._newOrder = self._origOrder;
					break;
				case 'random':
					self._newOrder = arrayShuffle(self._startOrder);
					break;
				case 'custom':
					self._newOrder = self._newSort[0].order;
					break;
				default:
					self._newOrder = self._startOrder.concat().sort(function (a, b) {
						return self._compare(a, b);
					});
			}

			self._execAction('_sort', 1);
		},

		/**
   * Compare Algorithm
   * @since 2.0.0
   * @param {string|number} a
   * @param {string|number} b
   * @param {number} depth (recursion)
   * @return {number}
   */

		_compare: function _compare(a, b, depth) {
			depth = depth ? depth : 0;

			var self = this,
			    order = self._newSort[depth].order,
			    getData = function getData(el) {
				return el.dataset[self._newSort[depth].sortBy] || 0;
			},
			    attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
			    attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;

			if (attrA < attrB) return order === 'asc' ? -1 : 1;
			if (attrA > attrB) return order === 'asc' ? 1 : -1;
			if (attrA === attrB && self._newSort.length > depth + 1) return self._compare(a, b, depth + 1);

			return 0;
		},

		/**
   * Print Sort
   * @since 2.0.0
   * @param {boolean} reset
   */

		_printSort: function _printSort(reset) {
			var self = this,
			    order = reset ? self._startOrder : self._newOrder,
			    targets = self._$parent[0].querySelectorAll(self.selectors.target),
			    nextSibling = targets.length ? targets[targets.length - 1].nextElementSibling : null,
			    frag = document.createDocumentFragment();

			self._execAction('_printSort', 0, arguments);

			for (var i = 0; i < targets.length; i++) {
				var target = targets[i],
				    whiteSpace = target.nextSibling;

				if (target.style.position === 'absolute') continue;

				if (whiteSpace && whiteSpace.nodeName === '#text') {
					self._$parent[0].removeChild(whiteSpace);
				}

				self._$parent[0].removeChild(target);
			}

			for (var i = 0; i < order.length; i++) {
				var el = order[i];

				if (self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset) {
					var firstChild = frag.firstChild;
					frag.insertBefore(el, firstChild);
					frag.insertBefore(document.createTextNode(' '), el);
				} else {
					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}
			}

			nextSibling ? self._$parent[0].insertBefore(frag, nextSibling) : self._$parent[0].appendChild(frag);

			self._execAction('_printSort', 1, arguments);
		},

		/**
   * Parse Sort
   * @since 2.0.0
   * @param {string} sortString
   * @return {array} newSort
   */

		_parseSort: function _parseSort(sortString) {
			var self = this,
			    rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
			    newSort = [];

			for (var i = 0; i < rules.length; i++) {
				var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
				    ruleObj = {
					sortBy: self._helpers._camelCase(rule[0]),
					order: rule[1] || 'asc'
				};

				newSort.push(ruleObj);

				if (ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
			}

			return self._execFilter('_parseSort', newSort, arguments);
		},

		/**
   * Parse Effects
   * @since 2.0.0
   * @return {object} effects
   */

		_parseEffects: function _parseEffects() {
			var self = this,
			    effects = {
				opacity: '',
				transformIn: '',
				transformOut: '',
				filter: ''
			},
			    parse = function parse(effect, extract, reverse) {
				if (self.animation.effects.indexOf(effect) > -1) {
					if (extract) {
						var propIndex = self.animation.effects.indexOf(effect + '(');
						if (propIndex > -1) {
							var str = self.animation.effects.substring(propIndex),
							    match = /\(([^)]+)\)/.exec(str),
							    val = match[1];

							return { val: val };
						}
					}
					return true;
				} else {
					return false;
				}
			},
			    negate = function negate(value, invert) {
				if (invert) {
					return value.charAt(0) === '-' ? value.substr(1, value.length) : '-' + value;
				} else {
					return value;
				}
			},
			    buildTransform = function buildTransform(key, invert) {
				var transforms = [['scale', '.01'], ['translateX', '20px'], ['translateY', '20px'], ['translateZ', '20px'], ['rotateX', '90deg'], ['rotateY', '90deg'], ['rotateZ', '180deg']];

				for (var i = 0; i < transforms.length; i++) {
					var prop = transforms[i][0],
					    def = transforms[i][1],
					    inverted = invert && prop !== 'scale';

					effects[key] += parse(prop) ? prop + '(' + negate(parse(prop, true).val || def, inverted) + ') ' : '';
				}
			};

			effects.opacity = parse('fade') ? parse('fade', true).val || '0' : '1';

			buildTransform('transformIn');

			self.animation.reverseOut ? buildTransform('transformOut', true) : effects.transformOut = effects.transformIn;

			effects.transition = {};

			effects.transition = self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ', opacity ' + self.animation.duration + 'ms linear');

			self.animation.stagger = parse('stagger') ? true : false;
			self.animation.staggerDuration = parseInt(parse('stagger') ? parse('stagger', true).val ? parse('stagger', true).val : 100 : 100);

			return self._execFilter('_parseEffects', effects);
		},

		/**
   * Build State
   * @since 2.0.0
   * @param {boolean} future
   * @return {object} futureState
   */

		_buildState: function _buildState(future) {
			var self = this,
			    state = {};

			self._execAction('_buildState', 0);

			state = {
				activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
				activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
				fail: !self._$show.length && self._activeFilter !== '',
				$targets: self._$targets,
				$show: self._$show,
				$hide: self._$hide,
				totalTargets: self._$targets.length,
				totalShow: self._$show.length,
				totalHide: self._$hide.length,
				display: future && self._newDisplay ? self._newDisplay : self.layout.display
			};

			if (future) {
				return self._execFilter('_buildState', state);
			} else {
				self._state = state;

				self._execAction('_buildState', 1);
			}
		},

		/**
   * Go Mix
   * @since 2.0.0
   * @param {boolean} animate
   */

		_goMix: function _goMix(animate) {
			var self = this,
			    phase1 = function phase1() {
				if (self._chrome && self._chrome === 31) {
					chromeFix(self._$parent[0]);
				}

				self._setInter();

				phase2();
			},
			    phase2 = function phase2() {
				var scrollTop = window.pageYOffset,
				    scrollLeft = window.pageXOffset,
				    docHeight = document.documentElement.scrollHeight;

				self._getInterMixData();

				self._setFinal();

				self._getFinalMixData();

				window.pageYOffset !== scrollTop && window.scrollTo(scrollLeft, scrollTop);

				self._prepTargets();

				if (window.requestAnimationFrame) {
					requestAnimationFrame(phase3);
				} else {
					setTimeout(function () {
						phase3();
					}, 20);
				}
			},
			    phase3 = function phase3() {
				self._animateTargets();

				if (self._targetsBound === 0) {
					self._cleanUp();
				}
			},
			    chromeFix = function chromeFix(grid) {
				var parent = grid.parentElement,
				    placeholder = document.createElement('div'),
				    frag = document.createDocumentFragment();

				parent.insertBefore(placeholder, grid);
				frag.appendChild(grid);
				parent.replaceChild(grid, placeholder);
			},
			    futureState = self._buildState(true);

			self._execAction('_goMix', 0, arguments);

			!self.animation.duration && (animate = false);

			self._mixing = true;

			self._$container.removeClass(self.layout.containerClassFail);

			if (typeof self.callbacks.onMixStart === 'function') {
				self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
			}

			self._$container.trigger('mixStart', [self._state, futureState, self]);

			self._getOrigMixData();

			if (animate && !self._suckMode) {

				window.requestAnimationFrame ? requestAnimationFrame(phase1) : phase1();
			} else {
				self._cleanUp();
			}

			self._execAction('_goMix', 1, arguments);
		},

		/**
   * Get Target Data
   * @since 2.0.0
   */

		_getTargetData: function _getTargetData(el, stage) {
			var self = this,
			    elStyle;

			el.dataset[stage + 'PosX'] = el.offsetLeft;
			el.dataset[stage + 'PosY'] = el.offsetTop;

			if (self.animation.animateResizeTargets) {
				elStyle = !self._suckMode ? window.getComputedStyle(el) : {
					marginBottom: '',
					marginRight: ''
				};

				el.dataset[stage + 'MarginBottom'] = parseInt(elStyle.marginBottom);
				el.dataset[stage + 'MarginRight'] = parseInt(elStyle.marginRight);
				el.dataset[stage + 'Width'] = el.offsetWidth;
				el.dataset[stage + 'Height'] = el.offsetHeight;
			}
		},

		/**
   * Get Original Mix Data
   * @since 2.0.0
   */

		_getOrigMixData: function _getOrigMixData() {
			var self = this,
			    parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : { boxSizing: '' },
			    parentBS = parentStyle.boxSizing || parentStyle[self._vendor + 'BoxSizing'];

			self._incPadding = parentBS === 'border-box';

			self._execAction('_getOrigMixData', 0);

			!self._suckMode && (self.effects = self._parseEffects());

			self._$toHide = self._$hide.filter(':visible');
			self._$toShow = self._$show.filter(':hidden');
			self._$pre = self._$targets.filter(':visible');

			self._startHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'orig');
			}

			self._execAction('_getOrigMixData', 1);
		},

		/**
   * Set Intermediate Positions
   * @since 2.0.0
   */

		_setInter: function _setInter() {
			var self = this;

			self._execAction('_setInter', 0);

			if (self._changingLayout && self.animation.animateChangeLayout) {
				self._$toShow.css('display', self._newDisplay);

				if (self._changingClass) {
					self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
				}
			} else {
				self._$toShow.css('display', self.layout.display);
			}

			self._execAction('_setInter', 1);
		},

		/**
   * Get Intermediate Mix Data
   * @since 2.0.0
   */

		_getInterMixData: function _getInterMixData() {
			var self = this;

			self._execAction('_getInterMixData', 0);

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i];

				self._getTargetData(el, 'inter');
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'inter');
			}

			self._execAction('_getInterMixData', 1);
		},

		/**
   * Set Final Positions
   * @since 2.0.0
   */

		_setFinal: function _setFinal() {
			var self = this;

			self._execAction('_setFinal', 0);

			self._sorting && self._printSort();

			self._$toHide.removeStyle('display');

			if (self._changingLayout && self.animation.animateChangeLayout) {
				self._$pre.css('display', self._newDisplay);
			}

			self._execAction('_setFinal', 1);
		},

		/**
   * Get Final Mix Data
   * @since 2.0.0
   */

		_getFinalMixData: function _getFinalMixData() {
			var self = this;

			self._execAction('_getFinalMixData', 0);

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i];

				self._getTargetData(el, 'final');
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'final');
			}

			self._newHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();

			self._sorting && self._printSort(true);

			self._$toShow.removeStyle('display');

			self._$pre.css('display', self.layout.display);

			if (self._changingClass && self.animation.animateChangeLayout) {
				self._$container.removeClass(self._newClass).addClass(self.layout.containerClass);
			}

			self._execAction('_getFinalMixData', 1);
		},

		/**
   * Prepare Targets
   * @since 2.0.0
   */

		_prepTargets: function _prepTargets() {
			var self = this,
			    transformCSS = {
				_in: self._getPrefixedCSS('transform', self.effects.transformIn),
				_out: self._getPrefixedCSS('transform', self.effects.transformOut)
			};

			self._execAction('_prepTargets', 0);

			if (self.animation.animateResizeContainer) {
				self._$parent.css('height', self._startHeight + 'px');
			}

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i],
				    $el = $(el);

				el.style.opacity = self.effects.opacity;
				el.style.display = self._changingLayout && self.animation.animateChangeLayout ? self._newDisplay : self.layout.display;

				$el.css(transformCSS._in);

				if (self.animation.animateResizeTargets) {
					el.style.width = el.dataset.finalWidth + 'px';
					el.style.height = el.dataset.finalHeight + 'px';
					el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
					el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
				}
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.origPosX - el.dataset.interPosX,
					y: el.dataset.origPosY - el.dataset.interPosY
				},
				    transformCSS = self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)');

				$el.css(transformCSS);

				if (self.animation.animateResizeTargets) {
					el.style.width = el.dataset.origWidth + 'px';
					el.style.height = el.dataset.origHeight + 'px';

					if (el.dataset.origWidth - el.dataset.finalWidth) {
						el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + el.dataset.origMarginRight * 1 + 'px';
					}

					if (el.dataset.origHeight - el.dataset.finalHeight) {
						el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + el.dataset.origMarginBottom * 1 + 'px';
					}
				}
			}

			self._execAction('_prepTargets', 1);
		},

		/**
   * Animate Targets
   * @since 2.0.0
   */

		_animateTargets: function _animateTargets() {
			var self = this;

			self._execAction('_animateTargets', 0);

			self._targetsDone = 0;
			self._targetsBound = 0;

			self._$parent.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance + 'px')).css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));

			if (self.animation.animateResizeContainer) {
				self._$parent.css(self._getPrefixedCSS('transition', 'height ' + self.animation.duration + 'ms ease')).css('height', self._newHeight + 'px');
			}

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.finalPosX - el.dataset.interPosX,
					y: el.dataset.finalPosY - el.dataset.interPosY
				},
				    delay = self._getDelay(i),
				    toShowCSS = {};

				el.style.opacity = '';

				for (var j = 0; j < 2; j++) {
					var a = j === 0 ? a = self._prefix : '';

					if (self._ff && self._ff <= 20) {
						toShowCSS[a + 'transition-property'] = 'all';
						toShowCSS[a + 'transition-timing-function'] = self.animation.easing + 'ms';
						toShowCSS[a + 'transition-duration'] = self.animation.duration + 'ms';
					}

					toShowCSS[a + 'transition-delay'] = delay + 'ms';
					toShowCSS[a + 'transform'] = 'translate(' + translate.x + 'px,' + translate.y + 'px)';
				}

				if (self.effects.transform || self.effects.opacity) {
					self._bindTargetDone($el);
				}

				self._ff && self._ff <= 20 ? $el.css(toShowCSS) : $el.css(self.effects.transition).css(toShowCSS);
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.finalPosX - el.dataset.interPosX,
					y: el.dataset.finalPosY - el.dataset.interPosY
				},
				    delay = self._getDelay(i);

				if (!(el.dataset.finalPosX === el.dataset.origPosX && el.dataset.finalPosY === el.dataset.origPosY)) {
					self._bindTargetDone($el);
				}

				$el.css(self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ' ' + delay + 'ms'));
				$el.css(self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)'));

				if (self.animation.animateResizeTargets) {
					if (el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1) {
						el.style.width = el.dataset.finalWidth + 'px';
						el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
					}

					if (el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1) {
						el.style.height = el.dataset.finalHeight + 'px';
						el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
					}
				}
			}

			if (self._changingClass) {
				self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
			}

			for (var i = 0; i < self._$toHide.length; i++) {
				var el = self._$toHide[i],
				    $el = $(el),
				    delay = self._getDelay(i),
				    toHideCSS = {};

				for (var j = 0; j < 2; j++) {
					var a = j === 0 ? a = self._prefix : '';

					toHideCSS[a + 'transition-delay'] = delay + 'ms';
					toHideCSS[a + 'transform'] = self.effects.transformOut;
					toHideCSS.opacity = self.effects.opacity;
				}

				$el.css(self.effects.transition).css(toHideCSS);

				if (self.effects.transform || self.effects.opacity) {
					self._bindTargetDone($el);
				};
			}

			self._execAction('_animateTargets', 1);
		},

		/**
   * Bind Targets TransitionEnd
   * @since 2.0.0
   * @param {object} $el
   */

		_bindTargetDone: function _bindTargetDone($el) {
			var self = this,
			    el = $el[0];

			self._execAction('_bindTargetDone', 0, arguments);

			if (!el.dataset.bound) {

				el.dataset.bound = true;
				self._targetsBound++;

				$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp', function (e) {
					if ((e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) && $(e.originalEvent.target).is(self.selectors.target)) {
						$el.off('.mixItUp');
						el.dataset.bound = '';
						self._targetDone();
					}
				});
			}

			self._execAction('_bindTargetDone', 1, arguments);
		},

		/**
   * Target Done
   * @since 2.0.0
   */

		_targetDone: function _targetDone() {
			var self = this;

			self._execAction('_targetDone', 0);

			self._targetsDone++;

			self._targetsDone === self._targetsBound && self._cleanUp();

			self._execAction('_targetDone', 1);
		},

		/**
   * Clean Up
   * @since 2.0.0
   */

		_cleanUp: function _cleanUp() {
			var self = this,
			    targetStyles = self.animation.animateResizeTargets ? 'transform opacity width height margin-bottom margin-right' : 'transform opacity',
			    unBrake = function unBrake() {
				self._$targets.removeStyle('transition', self._prefix);
			};

			self._execAction('_cleanUp', 0);

			!self._changingLayout ? self._$show.css('display', self.layout.display) : self._$show.css('display', self._newDisplay);

			self._$targets.css(self._brake);

			self._$targets.removeStyle(targetStyles, self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');

			self._$hide.removeStyle('display');

			self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);

			if (self._sorting) {
				self._printSort();
				self._activeSort = self._newSortString;
				self._sorting = false;
			}

			if (self._changingLayout) {
				if (self._changingDisplay) {
					self.layout.display = self._newDisplay;
					self._changingDisplay = false;
				}

				if (self._changingClass) {
					self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
					self.layout.containerClass = self._newClass;
					self._changingClass = false;
				}

				self._changingLayout = false;
			}

			self._refresh();

			self._buildState();

			if (self._state.fail) {
				self._$container.addClass(self.layout.containerClassFail);
			}

			self._$show = $();
			self._$hide = $();

			if (window.requestAnimationFrame) {
				requestAnimationFrame(unBrake);
			}

			self._mixing = false;

			if (typeof self.callbacks._user === 'function') {
				self.callbacks._user.call(self._domNode, self._state, self);
			}

			if (typeof self.callbacks.onMixEnd === 'function') {
				self.callbacks.onMixEnd.call(self._domNode, self._state, self);
			}

			self._$container.trigger('mixEnd', [self._state, self]);

			if (self._state.fail) {
				typeof self.callbacks.onMixFail === 'function' && self.callbacks.onMixFail.call(self._domNode, self._state, self);
				self._$container.trigger('mixFail', [self._state, self]);
			}

			if (self._loading) {
				typeof self.callbacks.onMixLoad === 'function' && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
				self._$container.trigger('mixLoad', [self._state, self]);
			}

			if (self._queue.length) {
				self._execAction('_queue', 0);

				self.multiMix(self._queue[0][0], self._queue[0][1], self._queue[0][2]);
				self._queue.splice(0, 1);
			}

			self._execAction('_cleanUp', 1);

			self._loading = false;
		},

		/**
   * Get Prefixed CSS
   * @since 2.0.0
   * @param {string} property
   * @param {string} value
   * @param {boolean} prefixValue
   * @return {object} styles
   */

		_getPrefixedCSS: function _getPrefixedCSS(property, value, prefixValue) {
			var self = this,
			    styles = {},
			    prefix = '',
			    i = -1;

			for (i = 0; i < 2; i++) {
				prefix = i === 0 ? self._prefix : '';
				prefixValue ? styles[prefix + property] = prefix + value : styles[prefix + property] = value;
			}

			return self._execFilter('_getPrefixedCSS', styles, arguments);
		},

		/**
   * Get Delay
   * @since 2.0.0
   * @param {number} i
   * @return {number} delay
   */

		_getDelay: function _getDelay(i) {
			var self = this,
			    n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
			    delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;

			return self._execFilter('_getDelay', delay, arguments);
		},

		/**
   * Parse MultiMix Arguments
   * @since 2.0.0
   * @param {array} args
   * @return {object} output
   */

		_parseMultiMixArgs: function _parseMultiMixArgs(args) {
			var self = this,
			    output = {
				command: null,
				animate: self.animation.enable,
				callback: null
			};

			for (var i = 0; i < args.length; i++) {
				var arg = args[i];

				if (arg !== null) {
					if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' || typeof arg === 'string') {
						output.command = arg;
					} else if (typeof arg === 'boolean') {
						output.animate = arg;
					} else if (typeof arg === 'function') {
						output.callback = arg;
					}
				}
			}

			return self._execFilter('_parseMultiMixArgs', output, arguments);
		},

		/**
   * Parse Insert Arguments
   * @since 2.0.0
   * @param {array} args
   * @return {object} output
   */

		_parseInsertArgs: function _parseInsertArgs(args) {
			var self = this,
			    output = {
				index: 0,
				$object: $(),
				multiMix: { filter: self._state.activeFilter },
				callback: null
			};

			for (var i = 0; i < args.length; i++) {
				var arg = args[i];

				if (typeof arg === 'number') {
					output.index = arg;
				} else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg instanceof $) {
					output.$object = arg;
				} else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && self._helpers._isElement(arg)) {
					output.$object = $(arg);
				} else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null) {
					output.multiMix = arg;
				} else if (typeof arg === 'boolean' && !arg) {
					output.multiMix = false;
				} else if (typeof arg === 'function') {
					output.callback = arg;
				}
			}

			return self._execFilter('_parseInsertArgs', output, arguments);
		},

		/**
   * Execute Action
   * @since 2.0.0
   * @param {string} methodName
   * @param {boolean} isPost
   * @param {array} args
   */

		_execAction: function _execAction(methodName, isPost, args) {
			var self = this,
			    context = isPost ? 'post' : 'pre';

			if (!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)) {
				for (var key in self._actions[methodName][context]) {
					self._actions[methodName][context][key].call(self, args);
				}
			}
		},

		/**
   * Execute Filter
   * @since 2.0.0
   * @param {string} methodName
   * @param {mixed} value
   * @return {mixed} value
   */

		_execFilter: function _execFilter(methodName, value, args) {
			var self = this;

			if (!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)) {
				for (var key in self._filters[methodName]) {
					return self._filters[methodName][key].call(self, args);
				}
			} else {
				return value;
			}
		},

		/* Helpers
  ---------------------------------------------------------------------- */

		_helpers: {

			/**
    * CamelCase
    * @since 2.0.0
    * @param {string}
    * @return {string}
    */

			_camelCase: function _camelCase(string) {
				return string.replace(/-([a-z])/g, function (g) {
					return g[1].toUpperCase();
				});
			},

			/**
    * Is Element
    * @since 2.1.3
    * @param {object} element to test
    * @return {boolean}
    */

			_isElement: function _isElement(el) {
				if (window.HTMLElement) {
					return el instanceof HTMLElement;
				} else {
					return el !== null && el.nodeType === 1 && el.nodeName === 'string';
				}
			}
		},

		/* Public Methods
  ---------------------------------------------------------------------- */

		/**
   * Is Mixing
   * @since 2.0.0
   * @return {boolean}
   */

		isMixing: function isMixing() {
			var self = this;

			return self._execFilter('isMixing', self._mixing);
		},

		/**
   * Filter (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		filter: function filter() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self._clicking && (self._toggleString = '');

			self.multiMix({ filter: args.command }, args.animate, args.callback);
		},

		/**
   * Sort (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		sort: function sort() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self.multiMix({ sort: args.command }, args.animate, args.callback);
		},

		/**
   * Change Layout (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		changeLayout: function changeLayout() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self.multiMix({ changeLayout: args.command }, args.animate, args.callback);
		},

		/**
   * MultiMix
   * @since 2.0.0
   * @param {array} arguments
   */

		multiMix: function multiMix() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self._execAction('multiMix', 0, arguments);

			if (!self._mixing) {
				if (self.controls.enable && !self._clicking) {
					self.controls.toggleFilterButtons && self._buildToggleArray();
					self._updateControls(args.command, self.controls.toggleFilterButtons);
				}

				self._queue.length < 2 && (self._clicking = false);

				delete self.callbacks._user;
				if (args.callback) self.callbacks._user = args.callback;

				var sort = args.command.sort,
				    filter = args.command.filter,
				    changeLayout = args.command.changeLayout;

				self._refresh();

				if (sort) {
					self._newSort = self._parseSort(sort);
					self._newSortString = sort;

					self._sorting = true;
					self._sort();
				}

				if (filter !== undf) {
					filter = filter === 'all' ? self.selectors.target : filter;

					self._activeFilter = filter;
				}

				self._filter();

				if (changeLayout) {
					self._newDisplay = typeof changeLayout === 'string' ? changeLayout : changeLayout.display || self.layout.display;
					self._newClass = changeLayout.containerClass || '';

					if (self._newDisplay !== self.layout.display || self._newClass !== self.layout.containerClass) {
						self._changingLayout = true;

						self._changingClass = self._newClass !== self.layout.containerClass;
						self._changingDisplay = self._newDisplay !== self.layout.display;
					}
				}

				self._$targets.css(self._brake);

				self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);

				self._execAction('multiMix', 1, arguments);
			} else {
				if (self.animation.queue && self._queue.length < self.animation.queueLimit) {
					self._queue.push(arguments);

					self.controls.enable && !self._clicking && self._updateControls(args.command);

					self._execAction('multiMixQueue', 1, arguments);
				} else {
					if (typeof self.callbacks.onMixBusy === 'function') {
						self.callbacks.onMixBusy.call(self._domNode, self._state, self);
					}
					self._$container.trigger('mixBusy', [self._state, self]);

					self._execAction('multiMixBusy', 1, arguments);
				}
			}
		},

		/**
   * Insert
   * @since 2.0.0
   * @param {array} arguments
   */

		insert: function insert() {
			var self = this,
			    args = self._parseInsertArgs(arguments),
			    callback = typeof args.callback === 'function' ? args.callback : null,
			    frag = document.createDocumentFragment(),
			    target = function () {
				self._refresh();

				if (self._$targets.length) {
					return args.index < self._$targets.length || !self._$targets.length ? self._$targets[args.index] : self._$targets[self._$targets.length - 1].nextElementSibling;
				} else {
					return self._$parent[0].children[0];
				}
			}();

			self._execAction('insert', 0, arguments);

			if (args.$object) {
				for (var i = 0; i < args.$object.length; i++) {
					var el = args.$object[i];

					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}

				self._$parent[0].insertBefore(frag, target);
			}

			self._execAction('insert', 1, arguments);

			if (_typeof(args.multiMix) === 'object') {
				self.multiMix(args.multiMix, callback);
			}
		},

		/**
   * Prepend
   * @since 2.0.0
   * @param {array} arguments
   */

		prepend: function prepend() {
			var self = this,
			    args = self._parseInsertArgs(arguments);

			self.insert(0, args.$object, args.multiMix, args.callback);
		},

		/**
   * Append
   * @since 2.0.0
   * @param {array} arguments
   */

		append: function append() {
			var self = this,
			    args = self._parseInsertArgs(arguments);

			self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
		},

		/**
   * Get Option
   * @since 2.0.0
   * @param {string} string
   * @return {mixed} value
   */

		getOption: function getOption(string) {
			var self = this,
			    getProperty = function getProperty(obj, prop) {
				var parts = prop.split('.'),
				    last = parts.pop(),
				    l = parts.length,
				    i = 1,
				    current = parts[0] || prop;

				while ((obj = obj[current]) && i < l) {
					current = parts[i];
					i++;
				}

				if (obj !== undf) {
					return obj[last] !== undf ? obj[last] : obj;
				}
			};

			return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
		},

		/**
   * Set Options
   * @since 2.0.0
   * @param {object} config
   */

		setOptions: function setOptions(config) {
			var self = this;

			self._execAction('setOptions', 0, arguments);

			(typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && $.extend(true, self, config);

			self._execAction('setOptions', 1, arguments);
		},

		/**
   * Get State
   * @since 2.0.0
   * @return {object} state
   */

		getState: function getState() {
			var self = this;

			return self._execFilter('getState', self._state, self);
		},

		/**
   * Force Refresh
   * @since 2.1.2
   */

		forceRefresh: function forceRefresh() {
			var self = this;

			self._refresh(false, true);
		},

		/**
   * Destroy
   * @since 2.0.0
   * @param {boolean} hideAll
   */

		destroy: function destroy(hideAll) {
			var self = this,
			    filters = $.MixItUp.prototype._bound._filter,
			    sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('destroy', 0, arguments);

			self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				hideAll && (target.style.display = '');

				delete target.mixParent;
			}

			self._execAction('destroy', 1, arguments);

			if (filters[self.selectors.filter] && filters[self.selectors.filter] > 1) {
				filters[self.selectors.filter]--;
			} else if (filters[self.selectors.filter] === 1) {
				delete filters[self.selectors.filter];
			}

			if (sorts[self.selectors.sort] && sorts[self.selectors.sort] > 1) {
				sorts[self.selectors.sort]--;
			} else if (sorts[self.selectors.sort] === 1) {
				delete sorts[self.selectors.sort];
			}

			delete $.MixItUp.prototype._instances[self._id];
		}

	};

	/* jQuery Methods
 ---------------------------------------------------------------------- */

	/**
  * jQuery .mixItUp() method
  * @since 2.0.0
  * @extends $.fn
  */

	$.fn.mixItUp = function () {
		var args = arguments,
		    dataReturn = [],
		    eachReturn,
		    _instantiate = function _instantiate(domNode, settings) {
			var instance = new $.MixItUp(),
			    rand = function rand() {
				return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
			};

			instance._execAction('_instantiate', 0, arguments);

			domNode.id = !domNode.id ? 'MixItUp' + rand() : domNode.id;

			if (!instance._instances[domNode.id]) {
				instance._instances[domNode.id] = instance;
				instance._init(domNode, settings);
			}

			instance._execAction('_instantiate', 1, arguments);
		};

		eachReturn = this.each(function () {
			if (args && typeof args[0] === 'string') {
				var instance = $.MixItUp.prototype._instances[this.id];
				if (args[0] === 'isLoaded') {
					dataReturn.push(instance ? true : false);
				} else {
					var data = instance[args[0]](args[1], args[2], args[3]);
					if (data !== undf) dataReturn.push(data);
				}
			} else {
				_instantiate(this, args[0]);
			}
		});

		if (dataReturn.length) {
			return dataReturn.length > 1 ? dataReturn : dataReturn[0];
		} else {
			return eachReturn;
		}
	};

	/**
  * jQuery .removeStyle() method
  * @since 2.0.0
  * @extends $.fn
  */

	$.fn.removeStyle = function (style, prefix) {
		prefix = prefix ? prefix : '';

		return this.each(function () {
			var el = this,
			    styles = style.split(' ');

			for (var i = 0; i < styles.length; i++) {
				for (var j = 0; j < 4; j++) {
					switch (j) {
						case 0:
							var prop = styles[i];
							break;
						case 1:
							var prop = $.MixItUp.prototype._helpers._camelCase(prop);
							break;
						case 2:
							var prop = prefix + styles[i];
							break;
						case 3:
							var prop = $.MixItUp.prototype._helpers._camelCase(prefix + styles[i]);
					}

					if (el.style[prop] !== undf && typeof el.style[prop] !== 'unknown' && el.style[prop].length > 0) {
						el.style[prop] = '';
					}

					if (!prefix && j === 1) break;
				}
			}

			if (el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === '') {
				el.attributes.removeNamedItem('style');
			}
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/elements/jquery.nav.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
!function (t, i, n, s) {
  var e = function e(s, _e) {
    this.elem = s, this.$elem = t(s), this.options = _e, this.metadata = this.$elem.data("plugin-options"), this.$win = t(i), this.sections = {}, this.didScroll = !1, this.$doc = t(n), this.docHeight = this.$doc.height();
  };e.prototype = { defaults: { navItems: "a", currentClass: "current", changeHash: !1, easing: "swing", filter: "", scrollSpeed: 750, scrollThreshold: .5, begin: !1, end: !1, scrollChange: !1 }, init: function init() {
      return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this;
    }, adjustNav: function adjustNav(t, i) {
      t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), i.addClass(t.config.currentClass);
    }, bindInterval: function bindInterval() {
      var t,
          i = this;i.$win.on("scroll.onePageNav", function () {
        i.didScroll = !0;
      }), i.t = setInterval(function () {
        t = i.$doc.height(), i.didScroll && (i.didScroll = !1, i.scrollChange()), t !== i.docHeight && (i.docHeight = t, i.getPositions());
      }, 250);
    }, getHash: function getHash(t) {
      return t.attr("href").split("#")[1];
    }, getPositions: function getPositions() {
      var i,
          n,
          s,
          e = this;e.$nav.each(function () {
        i = e.getHash(t(this)), s = t("#" + i), s.length && (n = s.offset().top, e.sections[i] = Math.round(n));
      });
    }, getSection: function getSection(t) {
      var i = null,
          n = Math.round(this.$win.height() * this.config.scrollThreshold);for (var s in this.sections) {
        this.sections[s] - n < t && (i = s);
      }return i;
    }, handleClick: function handleClick(n) {
      var s = this,
          e = t(n.currentTarget),
          o = e.parent(),
          a = "#" + s.getHash(e);o.hasClass(s.config.currentClass) || (s.config.begin && s.config.begin(), s.adjustNav(s, o), s.unbindInterval(), s.scrollTo(a, function () {
        s.config.changeHash && (i.location.hash = a), s.bindInterval(), s.config.end && s.config.end();
      })), n.preventDefault();
    }, scrollChange: function scrollChange() {
      var t,
          i = this.$win.scrollTop(),
          n = this.getSection(i);null !== n && (t = this.$elem.find('a[href$="#' + n + '"]').parent(), t.hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)));
    }, scrollTo: function scrollTo(i, n) {
      var s = t(i).offset().top;t("html, body").animate({ scrollTop: s - this.config.scrollOffset }, this.config.scrollSpeed, this.config.easing, n);
    }, unbindInterval: function unbindInterval() {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav");
    } }, e.defaults = e.prototype.defaults, t.fn.onePageNav = function (t) {
    return this.each(function () {
      new e(this, t).init();
    });
  };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/elements/jquery.slicknav.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
;(function ($, document, window) {
    var
    // default settings object.
    defaults = {
        label: 'MENU',
        duplicate: true,
        duration: 200,
        easingOpen: 'swing',
        easingClose: 'swing',
        closedSymbol: '&#9658;',
        openedSymbol: '&#9660;',
        prependTo: 'body',
        parentTag: 'a',
        closeOnClick: false,
        allowParentLinks: false,
        nestedParentLinks: true,
        showChildren: false,
        removeIds: false,
        removeClasses: false,
        brand: '',
        init: function init() {},
        beforeOpen: function beforeOpen() {},
        beforeClose: function beforeClose() {},
        afterOpen: function afterOpen() {},
        afterClose: function afterClose() {}
    },
        mobileMenu = 'slicknav',
        prefix = 'slicknav';

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        } else {
            $this.mobileNav = menu;

            // remove ids if set
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('class');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
        if (settings.brand !== '') {
            var brand = $('<div class="' + prefix + '_brand">' + settings.brand + '</div>');
            $(menuBar).append(brand);
        }
        $this.btn = $(['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">', '<span class="' + prefix + '_menutxt">' + settings.label + '</span>', '<span class="' + iconClass + '">', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '</span>', '</' + settings.parentTag + '>'].join(''));
        $(menuBar).append($this.btn);
        $(settings.prependTo).prepend(menuBar);
        menuBar.append($this.mobileNav);

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if ($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $('<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>');

                // wrap item text with tag and add classes unless we are separating parent links
                if (!settings.allowParentLinks || settings.nestedParentLinks || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix + '_row');
                } else $(nodes).wrapAll('<span class="' + prefix + '_parent-link ' + prefix + '_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix + '_collapsed');
                } else {
                    item.addClass(prefix + '_open');
                }

                item.addClass(prefix + '_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $('<span class="' + prefix + '_arrow">' + (settings.showChildren ? settings.openedSymbol : settings.closedSymbol) + '</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor) arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes).last().after(arrowElement);
            } else if (item.children().length === 0) {
                item.addClass(prefix + '_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function (event) {
                //Ensure that it's not a parent
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix + '_parent')) {
                    //Emulate menu close if set
                    $($this.btn).click();
                }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });

                item.find('.' + prefix + '_parent-link a:not(.' + prefix + '_item)').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren) {
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        $this.mobileNav.attr('role', 'menu');

        // outline prevention when using mouse
        $(document).mousedown(function () {
            $this._outlines(false);
        });

        $(document).keyup(function () {
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for enter key on menu button and menu parents
        $($this.btn).keydown(function (e) {
            var ev = e || event;
            if (ev.keyCode == 13) {
                e.preventDefault();
                $this._menuToggle();
            }
        });

        $this.mobileNav.on('keydown', '.' + prefix + '_item', function (e) {
            var ev = e || event;
            if (ev.keyCode == 13) {
                e.preventDefault();
                $this._itemClick($(e.target));
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.' + prefix + '_item a').click(function (e) {
                e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix + '_collapsed')) {
            btn.removeClass(prefix + '_collapsed');
            btn.addClass(prefix + '_open');
        } else {
            btn.removeClass(prefix + '_open');
            btn.addClass(prefix + '_collapsed');
        }
        btn.addClass(prefix + '_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

    // toggle clicked items
    Plugin.prototype._itemClick = function (el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data('menu');
        if (!data) {
            data = {};
            data.arrow = el.children('.' + prefix + '_arrow');
            data.ul = el.next('ul');
            data.parent = el.parent();
            //Separated parent link structure
            if (data.parent.hasClass(prefix + '_parent-link')) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next('ul');
            }
            el.data('menu', data);
        }
        if (data.parent.hasClass(prefix + '_collapsed')) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix + '_collapsed');
            data.parent.addClass(prefix + '_open');
            data.parent.addClass(prefix + '_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix + '_collapsed');
            data.parent.removeClass(prefix + '_open');
            data.parent.addClass(prefix + '_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function (el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        if (el.hasClass(prefix + '_hidden')) {
            el.removeClass(prefix + '_hidden');
            //Fire beforeOpen callback
            if (!init) {
                settings.beforeOpen(trigger);
            }
            el.slideDown(duration, settings.easingOpen, function () {

                $(trigger).removeClass(prefix + '_animating');
                $(parent).removeClass(prefix + '_animating');

                //Fire afterOpen callback
                if (!init) {
                    settings.afterOpen(trigger);
                }
            });
            el.attr('aria-hidden', 'false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix + '_hidden');

            //Fire init or beforeClose callback
            if (!init) {
                settings.beforeClose(trigger);
            }

            el.slideUp(duration, this.settings.easingClose, function () {
                el.attr('aria-hidden', 'true');
                items.attr('tabindex', '-1');
                $this._setVisAttr(el, true);
                el.hide(); //jQuery 1.7 bug fix

                $(trigger).removeClass(prefix + '_animating');
                $(parent).removeClass(prefix + '_animating');

                //Fire init or afterClose callback
                if (!init) {
                    settings.afterClose(trigger);
                } else if (trigger == 'init') {
                    settings.init();
                }
            });
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function (el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.' + prefix + '_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function () {
                var ul = $(this);
                ul.attr('aria-hidden', 'false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function () {
                var ul = $(this);
                ul.attr('aria-hidden', 'true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function (el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.' + prefix + '_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function (state) {
        if (!state) {
            $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', 'none');
        } else {
            $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', '');
        }
    };

    Plugin.prototype.toggle = function () {
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function () {
        var $this = this;
        if ($this.btn.hasClass(prefix + '_collapsed')) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function () {
        var $this = this;
        if ($this.btn.hasClass(prefix + '_open')) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function (options) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + mobileMenu, new Plugin(this, options));
                }
            });

            // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
})(jQuery, document, window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/elements/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {

  "use strict";

  $(window).on('load', function () {

    /* 
    MixitUp
    ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
     One Page Navigation & wow js
     ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset
    });

    /*Page Loader active
      ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>'
    });

    /* WOW Scroll Spy
    ========================================================*/
    //   var wow = new WOW({
    //   //disabled for mobile
    //     mobile: false
    // });
    //
    // wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true
    });

    /* Counter
    ========================================================*/
    // $('.counterUp').counterUp({
    //  delay: 10,
    //  time: 1000
    // });


    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/elements/nivo-lightbox.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * Nivo Lightbox v1.3.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function ($, window, document, undefined) {

    var pluginName = 'nivoLightbox',
        defaults = {
        effect: 'fade',
        theme: 'default',
        keyboardNav: true,
        clickImgToClose: false,
        clickOverlayToClose: true,
        onInit: function onInit() {},
        beforeShowLightbox: function beforeShowLightbox() {},
        afterShowLightbox: function afterShowLightbox(lightbox) {},
        beforeHideLightbox: function beforeHideLightbox() {},
        afterHideLightbox: function afterHideLightbox() {},
        beforePrev: function beforePrev(element) {},
        onPrev: function onPrev(element) {},
        beforeNext: function beforeNext(element) {},
        onNext: function onNext(element) {},
        errorMessage: 'The requested content cannot be loaded. Please try again later.'
    };

    function NivoLightbox(element, options) {
        this.el = element;
        this.$el = $(this.el);

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    NivoLightbox.prototype = {

        init: function init() {
            var $this = this;

            // Need this so we don't use CSS transitions in mobile
            if (!$('html').hasClass('nivo-lightbox-notouch')) $('html').addClass('nivo-lightbox-notouch');
            if ('ontouchstart' in document) $('html').removeClass('nivo-lightbox-notouch');

            // Setup the click
            this.$el.on('click', function (e) {
                $this.showLightbox(e);
            });

            // keyboardNav
            if (this.options.keyboardNav) {
                $('body').off('keyup').on('keyup', function (e) {
                    var code = e.keyCode ? e.keyCode : e.which;
                    // Escape
                    if (code == 27) $this.destructLightbox();
                    // Left
                    if (code == 37) $('.nivo-lightbox-prev').trigger('click');
                    // Right
                    if (code == 39) $('.nivo-lightbox-next').trigger('click');
                });
            }

            this.options.onInit.call(this);
        },

        showLightbox: function showLightbox(e) {
            var $this = this,
                currentLink = this.$el;

            // Check content
            var check = this.checkContent(currentLink);
            if (!check) return;

            e.preventDefault();
            this.options.beforeShowLightbox.call(this);
            var lightbox = this.constructLightbox();
            if (!lightbox) return;
            var content = lightbox.find('.nivo-lightbox-content');
            if (!content) return;

            $('body').addClass('nivo-lightbox-body-effect-' + this.options.effect);

            this.processContent(content, currentLink);

            // Nav
            if (this.$el.attr('data-lightbox-gallery')) {
                var galleryItems = $('[data-lightbox-gallery="' + this.$el.attr('data-lightbox-gallery') + '"]');

                $('.nivo-lightbox-nav').show();

                // Prev
                $('.nivo-lightbox-prev').off('click').on('click', function (e) {
                    e.preventDefault();
                    var index = galleryItems.index(currentLink);
                    currentLink = galleryItems.eq(index - 1);
                    if (!$(currentLink).length) currentLink = galleryItems.last();
                    $.when($this.options.beforePrev.call(this, [currentLink])).done(function () {
                        $this.processContent(content, currentLink);
                        $this.options.onPrev.call(this, [currentLink]);
                    });
                });

                // Next
                $('.nivo-lightbox-next').off('click').on('click', function (e) {
                    e.preventDefault();
                    var index = galleryItems.index(currentLink);
                    currentLink = galleryItems.eq(index + 1);
                    if (!$(currentLink).length) currentLink = galleryItems.first();
                    $.when($this.options.beforeNext.call(this, [currentLink])).done(function () {
                        $this.processContent(content, currentLink);
                        $this.options.onNext.call(this, [currentLink]);
                    });
                });
            }

            setTimeout(function () {
                lightbox.addClass('nivo-lightbox-open');
                $this.options.afterShowLightbox.call(this, [lightbox]);
            }, 1); // For CSS transitions
        },

        checkContent: function checkContent(link) {
            var $this = this,
                href = link.attr('href'),
                video = href.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);

            if (href.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
                return true;
            }
            // Video (Youtube/Vimeo)
            else if (video) {
                    return true;
                }
                // AJAX
                else if (link.attr('data-lightbox-type') == 'ajax') {
                        return true;
                    }
                    // Inline HTML
                    else if (href.substring(0, 1) == '#' && link.attr('data-lightbox-type') == 'inline') {
                            return true;
                        }
                        // iFrame (default)
                        else if (link.attr('data-lightbox-type') == 'iframe') {
                                return true;
                            }

            return false;
        },

        processContent: function processContent(content, link) {
            var $this = this,
                href = link.attr('href'),
                video = href.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);

            content.html('').addClass('nivo-lightbox-loading');

            // Is HiDPI?
            if (this.isHidpi() && link.attr('data-lightbox-hidpi')) {
                href = link.attr('data-lightbox-hidpi');
            }

            // Image
            if (href.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
                var img = $('<img>', { src: href, 'class': 'nivo-lightbox-image-display' });
                img.one('load', function () {
                    var wrap = $('<div class="nivo-lightbox-image" />');
                    wrap.append(img);
                    content.html(wrap).removeClass('nivo-lightbox-loading');

                    // Vertically center images
                    wrap.css({
                        'line-height': $('.nivo-lightbox-content').height() + 'px',
                        'height': $('.nivo-lightbox-content').height() + 'px' // For Firefox
                    });
                    $(window).resize(function () {
                        wrap.css({
                            'line-height': $('.nivo-lightbox-content').height() + 'px',
                            'height': $('.nivo-lightbox-content').height() + 'px' // For Firefox
                        });
                    });
                }).each(function () {
                    if (this.complete) $(this).load();
                });

                img.error(function () {
                    var wrap = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
                    content.html(wrap).removeClass('nivo-lightbox-loading');
                });
            }
            // Video (Youtube/Vimeo)
            else if (video) {
                    var src = '',
                        classTerm = 'nivo-lightbox-video';

                    if (video[1] == 'youtube') {
                        src = '//www.youtube.com/embed/' + video[4];
                        classTerm = 'nivo-lightbox-youtube';
                    }
                    if (video[1] == 'youtube-nocookie') {
                        src = href; //https://www.youtube-nocookie.com/embed/...
                        classTerm = 'nivo-lightbox-youtube';
                    }
                    if (video[1] == 'youtu') {
                        src = '//www.youtube.com/embed/' + video[3];
                        classTerm = 'nivo-lightbox-youtube';
                    }
                    if (video[1] == 'vimeo') {
                        src = '//player.vimeo.com/video/' + video[3];
                        classTerm = 'nivo-lightbox-vimeo';
                    }

                    if (src) {
                        var iframeVideo = $('<iframe>', {
                            src: src,
                            'class': classTerm,
                            frameborder: 0,
                            vspace: 0,
                            hspace: 0,
                            scrolling: 'auto'
                        });
                        content.html(iframeVideo);
                        iframeVideo.load(function () {
                            content.removeClass('nivo-lightbox-loading');
                        });
                    }
                }
                // AJAX
                else if (link.attr('data-lightbox-type') == 'ajax') {
                        $.ajax({
                            url: href,
                            cache: false,
                            success: function success(data) {
                                var wrap = $('<div class="nivo-lightbox-ajax" />');
                                wrap.append(data);
                                content.html(wrap).removeClass('nivo-lightbox-loading');

                                // Vertically center html
                                if (wrap.outerHeight() < content.height()) {
                                    wrap.css({
                                        'position': 'relative',
                                        'top': '50%',
                                        'margin-top': -(wrap.outerHeight() / 2) + 'px'
                                    });
                                }
                                $(window).resize(function () {
                                    if (wrap.outerHeight() < content.height()) {
                                        wrap.css({
                                            'position': 'relative',
                                            'top': '50%',
                                            'margin-top': -(wrap.outerHeight() / 2) + 'px'
                                        });
                                    }
                                });
                            },
                            error: function error() {
                                var wrap = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
                                content.html(wrap).removeClass('nivo-lightbox-loading');
                            }
                        });
                    }
                    // Inline HTML
                    else if (href.substring(0, 1) == '#' && link.attr('data-lightbox-type') == 'inline') {
                            if ($(href).length) {
                                var wrap = $('<div class="nivo-lightbox-inline" />');
                                wrap.append($(href).clone().show());
                                content.html(wrap).removeClass('nivo-lightbox-loading');

                                // Vertically center html
                                if (wrap.outerHeight() < content.height()) {
                                    wrap.css({
                                        'position': 'relative',
                                        'top': '50%',
                                        'margin-top': -(wrap.outerHeight() / 2) + 'px'
                                    });
                                }
                                $(window).resize(function () {
                                    if (wrap.outerHeight() < content.height()) {
                                        wrap.css({
                                            'position': 'relative',
                                            'top': '50%',
                                            'margin-top': -(wrap.outerHeight() / 2) + 'px'
                                        });
                                    }
                                });
                            } else {
                                var wrapError = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
                                content.html(wrapError).removeClass('nivo-lightbox-loading');
                            }
                        }
                        // iFrame (default)
                        else if (link.attr('data-lightbox-type') == 'iframe') {
                                var iframe = $('<iframe>', {
                                    src: href,
                                    'class': 'nivo-lightbox-item',
                                    frameborder: 0,
                                    vspace: 0,
                                    hspace: 0,
                                    scrolling: 'auto'
                                });
                                content.html(iframe);
                                iframe.load(function () {
                                    content.removeClass('nivo-lightbox-loading');
                                });
                            } else {
                                return false;
                            }

            // Set the title
            if (link.attr('title')) {
                var titleWrap = $('<span>', { 'class': 'nivo-lightbox-title' });
                titleWrap.text(link.attr('title'));
                $('.nivo-lightbox-title-wrap').html(titleWrap);
            } else {
                $('.nivo-lightbox-title-wrap').html('');
            }
        },

        constructLightbox: function constructLightbox() {
            if ($('.nivo-lightbox-overlay').length) return $('.nivo-lightbox-overlay');

            var overlay = $('<div>', { 'class': 'nivo-lightbox-overlay nivo-lightbox-theme-' + this.options.theme + ' nivo-lightbox-effect-' + this.options.effect });
            var wrap = $('<div>', { 'class': 'nivo-lightbox-wrap' });
            var content = $('<div>', { 'class': 'nivo-lightbox-content' });
            var nav = $('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
            var close = $('<a href="#" class="nivo-lightbox-close" title="Close"><i class="icon-close"></i></a>');
            var title = $('<div>', { 'class': 'nivo-lightbox-title-wrap' });

            var isMSIE = /*@cc_on!@*/0;
            if (isMSIE) overlay.addClass('nivo-lightbox-ie');

            wrap.append(content);
            wrap.append(title);
            overlay.append(wrap);
            overlay.append(nav);
            overlay.append(close);
            $('body').append(overlay);

            var $this = this;
            if ($this.options.clickOverlayToClose) {
                overlay.on('click', function (e) {
                    if (e.target === this || $(e.target).hasClass('nivo-lightbox-content') || $(e.target).hasClass('nivo-lightbox-image')) {
                        $this.destructLightbox();
                    }
                });
            }
            if ($this.options.clickImgToClose) {
                overlay.on('click', function (e) {
                    if (e.target === this || $(e.target).hasClass('nivo-lightbox-image-display')) {
                        $this.destructLightbox();
                    }
                });
            }

            close.on('click', function (e) {
                e.preventDefault();
                $this.destructLightbox();
            });

            return overlay;
        },

        destructLightbox: function destructLightbox() {
            var $this = this;
            this.options.beforeHideLightbox.call(this);

            $('.nivo-lightbox-overlay').removeClass('nivo-lightbox-open');
            $('.nivo-lightbox-nav').hide();
            $('body').removeClass('nivo-lightbox-body-effect-' + $this.options.effect);

            // For IE
            var isMSIE = /*@cc_on!@*/0;
            if (isMSIE) {
                $('.nivo-lightbox-overlay iframe').attr("src", " ");
                $('.nivo-lightbox-overlay iframe').remove();
            }

            // Remove click handlers
            $('.nivo-lightbox-prev').off('click');
            $('.nivo-lightbox-next').off('click');

            // Empty content (for videos)
            $('.nivo-lightbox-content').empty();

            this.options.afterHideLightbox.call(this);
        },

        isHidpi: function isHidpi() {
            var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                              (min--moz-device-pixel-ratio: 1.5),\
                              (-o-min-device-pixel-ratio: 3/2),\
                              (min-resolution: 1.5dppx)";
            if (window.devicePixelRatio > 1) return true;
            if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;
            return false;
        }

    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new NivoLightbox(this, options));
            }
        });
    };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
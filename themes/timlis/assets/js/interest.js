webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _menuHome = __webpack_require__(4);

	var _menuHome2 = _interopRequireDefault(_menuHome);

	var _perfectScrollbarJqueryMin = __webpack_require__(6);

	var _perfectScrollbarJqueryMin2 = _interopRequireDefault(_perfectScrollbarJqueryMin);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    (0, _menuHome2.default)();

	    // ps init scroll
	    $('.js-ps-scroll').perfectScrollbar({ theme: 'red' });

	    // select
	    $('.ist-filter select').selectric();
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    // set menu cols min-width for animation purpose
	    var menu_cols_min_width = $(window).width() * 0.132; // col width 13.2%
	    $('.menu-lvl__abs').css('min-width', menu_cols_min_width);

	    // open level1 menu
	    $('.js-lvl0').on('click', function (e) {
	        e.preventDefault();
	        add_active('.menu-lvl0__a');
	        toggle_level_col(this, '.menu-lvl1, .menu-lvl2');
	        toggle_position_class('menu-position1', 'menu-position0 menu-position2');
	    });

	    // open level2 menu
	    $('.js-lvl1').on('click', function (e) {
	        e.preventDefault();
	        add_active('.menu-lvl1__a');
	        toggle_level_col(this, '.menu-lvl2');
	        toggle_position_class('menu-position2', 'menu-position0 menu-position1');
	    });

	    // func
	    var add_active = function add_active(selector) {
	        $(selector).each(function () {
	            $(this).removeClass('_active');
	        });
	        $(undefined).addClass('_active');
	    };

	    var toggle_level_col = function toggle_level_col(_this, selector) {
	        var nav_id = $(_this).data('nav-id');
	        $(selector).each(function () {
	            $(this).removeClass('_open');
	        });
	        $('.js-menu').find('[data-nav-ref="' + nav_id + '"]').addClass('_open');
	    };

	    var toggle_position_class = function toggle_position_class(add, remove) {
	        $('body, .js-menu').each(function () {
	            $(this).addClass(add).removeClass(remove);
	        });
	    };

	    // add pos class on body on page init
	    // used by layouts
	    toggle_position_class('menu-position0', 'menu-position1 menu-position2');
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;/* perfect-scrollbar v0.6.16 */
	!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a)return require(i,!0);if(l)return l(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;l.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),l=t("../plugin/instances");if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{var i=window.jQuery?window.jQuery:window.$;"undefined"!=typeof i&&r(i)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var i={};i.e=function(t,e){var n=document.createElement(t);return n.className=e,n},i.appendTo=function(t,e){return e.appendChild(t),t},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e)})},e.exports=i},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0},i=n.clone=function(t){if(t){if(t.constructor===Array)return t.map(i);if("object"==typeof t){var e={};for(var n in t)e[n]=i(t[n]);return e}return t}return null};n.extend=function(t,e){var n=i(t);for(var r in e)n[r]=i(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation()}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation()})}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault()}}})}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if(!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var l=r.scrollLeft-r.clientWidth;if(l>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){l(t)})}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"keyup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l))return!e.settings.swipePropagation;return!0}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t)}function c(){w=!0}function u(){w=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!w&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault())}}function b(){!w&&Y&&(Y=!1,clearInterval(y),y=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var g={},v=0,m={},y=null,w=!1,Y=!1;n?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)):r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=l.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){s[e](t)}),a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){a.add(t,"ps-focus")}function n(){a.remove(t,"ps-focus")}var r=this;r.settings=s.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=s.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:s.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=s.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=s.toInt(u.css(r.scrollbarXRail,"marginLeft"))+s.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=s.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:s.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?s.outerWidth(r.scrollbarY):null,r.railBorderYWidth=s.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=s.toInt(u.css(r.scrollbarYRail,"marginTop"))+s.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function l(t,e){t.setAttribute("data-ps-id",e)}function i(t){t.removeAttribute("data-ps-id")}var s=t("../lib/helper"),a=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return l(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],i(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,r),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var l=t("../lib/helper"),i=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=s.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=s.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps-active-x"):(i.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps-active-y"):(i.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,l=t("./instances"),i=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(i("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(i("ps-x-reach-start")));var s=l.get(t);"top"===e&&n>=s.contentHeight-s.containerHeight&&(n=s.contentHeight-s.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(i("ps-y-reach-end"))),"left"===e&&n>=s.contentWidth-s.containerWidth&&(n=s.contentWidth-s.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(i("ps-x-reach-end"))),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(i("ps-scroll-up")),"top"===e&&n>r&&t.dispatchEvent(i("ps-scroll-down")),"left"===e&&n<o&&t.dispatchEvent(i("ps-scroll-left")),"left"===e&&n>o&&t.dispatchEvent(i("ps-scroll-right")),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(i("ps-scroll-y"))),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(i("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 *         ,/
	 *       ,'/
	 *     ,' /
	 *   ,'  /_____,
	 * .'____    ,'
	 *      /  ,'
	 *     / ,'
	 *    /,'
	 *   /'
	 *
	 * Selectric ϟ v1.11.1 (Jan 10 2017) - http://lcdsantos.github.io/jQuery-Selectric/
	 *
	 * Copyright (c) 2017 Leonardo Santos; MIT License
	 *
	 */

	(function(factory) {
	  /* global define */
	  /* istanbul ignore next */
	  if ( true ) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module === 'object' && module.exports ) {
	    // Node/CommonJS
	    module.exports = function( root, jQuery ) {
	      if ( jQuery === undefined ) {
	        if ( typeof window !== 'undefined' ) {
	          jQuery = require('jquery');
	        } else {
	          jQuery = require('jquery')(root);
	        }
	      }
	      factory(jQuery);
	      return jQuery;
	    };
	  } else {
	    // Browser globals
	    factory(jQuery);
	  }
	}(function($) {
	  'use strict';

	  var $doc = $(document);
	  var $win = $(window);

	  var pluginName = 'selectric';
	  var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Scroll Group GroupLabel';
	  var eventNamespaceSuffix = '.sl';

	  var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
	  var diacritics = [
	    /[\xE0-\xE5]/g, // a
	    /[\xE8-\xEB]/g, // e
	    /[\xEC-\xEF]/g, // i
	    /[\xF2-\xF6]/g, // o
	    /[\xF9-\xFC]/g, // u
	    /[\xF1]/g,      // n
	    /[\xE7]/g,      // c
	    /[\xFD-\xFF]/g  // y
	  ];

	  /**
	   * Create an instance of Selectric
	   *
	   * @constructor
	   * @param {Node} element - The &lt;select&gt; element
	   * @param {object}  opts - Options
	   */
	  var Selectric = function(element, opts) {
	    var _this = this;

	    _this.element = element;
	    _this.$element = $(element);

	    _this.state = {
	      multiple       : !!_this.$element.attr('multiple'),
	      enabled        : false,
	      opened         : false,
	      currValue      : -1,
	      selectedIdx    : -1,
	      highlightedIdx : -1
	    };

	    _this.eventTriggers = {
	      open    : _this.open,
	      close   : _this.close,
	      destroy : _this.destroy,
	      refresh : _this.refresh,
	      init    : _this.init
	    };

	    _this.init(opts);
	  };

	  Selectric.prototype = {
	    utils: {
	      /**
	       * Detect mobile browser
	       *
	       * @return {boolean}
	       */
	      isMobile: function() {
	        return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
	      },

	      /**
	       * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
	       *
	       * @param  {string} str - The string to be escaped
	       * @return {string}       The string with the special characters escaped
	       */
	      escapeRegExp: function(str) {
	        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	      },

	      /**
	       * Replace diacritics
	       *
	       * @param  {string} str - The string to replace the diacritics
	       * @return {string}       The string with diacritics replaced with ascii characters
	       */
	      replaceDiacritics: function(str) {
	        var k = diacritics.length;

	        while (k--) {
	          str = str.toLowerCase().replace(diacritics[k], chars[k]);
	        }

	        return str;
	      },

	      /**
	       * Format string
	       * https://gist.github.com/atesgoral/984375
	       *
	       * @param  {string} f - String to be formated
	       * @return {string}     String formated
	       */
	      format: function(f) {
	        var a = arguments; // store outer arguments
	        return ('' + f) // force format specifier to String
	          .replace( // replace tokens in format specifier
	            /\{(?:(\d+)|(\w+))\}/g, // match {token} references
	            function(
	              s, // the matched string (ignored)
	              i, // an argument index
	              p // a property name
	            ) {
	              return p && a[1] // if property name and first argument exist
	                ? a[1][p] // return property from first argument
	                : a[i]; // assume argument index and return i-th argument
	            });
	      },

	      /**
	       * Get the next enabled item in the options list.
	       *
	       * @param  {object} selectItems - The options object.
	       * @param  {number}    selected - Index of the currently selected option.
	       * @return {object}               The next enabled item.
	       */
	      nextEnabledItem: function(selectItems, selected) {
	        while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {
	          // empty
	        }
	        return selected;
	      },

	      /**
	       * Get the previous enabled item in the options list.
	       *
	       * @param  {object} selectItems - The options object.
	       * @param  {number}    selected - Index of the currently selected option.
	       * @return {object}               The previous enabled item.
	       */
	      previousEnabledItem: function(selectItems, selected) {
	        while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {
	          // empty
	        }
	        return selected;
	      },

	      /**
	       * Transform camelCase string to dash-case.
	       *
	       * @param  {string} str - The camelCased string.
	       * @return {string}       The string transformed to dash-case.
	       */
	      toDash: function(str) {
	        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	      },

	      /**
	       * Calls the events registered with function name.
	       *
	       * @param {string}    fn - The name of the function.
	       * @param {number} scope - Scope that should be set on the function.
	       */
	      triggerCallback: function(fn, scope) {
	        var elm = scope.element;
	        var func = scope.options['on' + fn];
	        var args = [elm].concat([].slice.call(arguments).slice(1));

	        if ( $.isFunction(func) ) {
	          func.apply(elm, args);
	        }

	        $(elm).trigger(pluginName + '-' + this.toDash(fn), args);
	      },

	      /**
	       * Transform array list to concatenated string and remove empty values
	       * @param  {array} arr - Class list
	       * @return {string}      Concatenated string
	       */
	      arrayToClassname: function(arr) {
	        var newArr = $.grep(arr, function(item) {
	          return !!item;
	        });

	        return $.trim(newArr.join(' '));
	      }
	    },

	    /** Initializes */
	    init: function(opts) {
	      var _this = this;

	      // Set options
	      _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

	      _this.utils.triggerCallback('BeforeInit', _this);

	      // Preserve data
	      _this.destroy(true);

	      // Disable on mobile browsers
	      if ( _this.options.disableOnMobile && _this.utils.isMobile() ) {
	        _this.disableOnMobile = true;
	        return;
	      }

	      // Get classes
	      _this.classes = _this.getClassNames();

	      // Create elements
	      var input              = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
	      var items              = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
	      var itemsScroll        = $('<div/>',   { 'class': _this.classes.scroll });
	      var wrapper            = $('<div/>',   { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
	      var label              = $('<span/>',  { 'class': 'label' });
	      var outerWrapper       = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
	      var hideSelectWrapper  = $('<div/>',   { 'class': _this.classes.hideselect });

	      _this.elements = {
	        input        : input,
	        items        : items,
	        itemsScroll  : itemsScroll,
	        wrapper      : wrapper,
	        label        : label,
	        outerWrapper : outerWrapper
	      };

	      if ( _this.options.nativeOnMobile && _this.utils.isMobile() ) {
	        _this.elements.input = undefined;
	        hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

	        _this.$element.on('change', function() {
	          _this.refresh();
	        });
	      }

	      _this.$element
	        .on(_this.eventTriggers)
	        .wrap(hideSelectWrapper);

	      _this.originalTabindex = _this.$element.prop('tabindex');
	      _this.$element.prop('tabindex', -1);

	      _this.populate();
	      _this.activate();

	      _this.utils.triggerCallback('Init', _this);
	    },

	    /** Activates the plugin */
	    activate: function() {
	      var _this = this;
	      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
	      var originalWidth = _this.$element.width();

	      hiddenChildren.removeClass(_this.classes.tempshow);

	      _this.utils.triggerCallback('BeforeActivate', _this);

	      _this.elements.outerWrapper.prop('class',
	        _this.utils.arrayToClassname([
	          _this.classes.wrapper,
	          _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
	          _this.options.responsive ? _this.classes.responsive : ''
	        ])
	      );

	      if ( _this.options.inheritOriginalWidth && originalWidth > 0 ) {
	        _this.elements.outerWrapper.width(originalWidth);
	      }

	      _this.unbindEvents();

	      if ( !_this.$element.prop('disabled') ) {
	        _this.state.enabled = true;

	        // Not disabled, so... Removing disabled class
	        _this.elements.outerWrapper.removeClass(_this.classes.disabled);

	        // Remove styles from items box
	        // Fix incorrect height when refreshed is triggered with fewer options
	        _this.$li = _this.elements.items.removeAttr('style').find('li');

	        _this.bindEvents();
	      } else {
	        _this.elements.outerWrapper.addClass(_this.classes.disabled);

	        if ( _this.elements.input ) {
	          _this.elements.input.prop('disabled', true);
	        }
	      }

	      _this.utils.triggerCallback('Activate', _this);
	    },

	    /**
	     * Generate classNames for elements
	     *
	     * @return {object} Classes object
	     */
	    getClassNames: function() {
	      var _this = this;
	      var customClass = _this.options.customClass;
	      var classesObj = {};

	      $.each(classList.split(' '), function(i, currClass) {
	        var c = customClass.prefix + currClass;
	        classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
	      });

	      classesObj.prefix = customClass.prefix;

	      return classesObj;
	    },

	    /** Set the label text */
	    setLabel: function() {
	      var _this = this;
	      var labelBuilder = _this.options.labelBuilder;

	      if ( _this.state.multiple ) {
	        // Make sure currentValues is an array
	        var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
	        // I'm not happy with this, but currentValues can be an empty
	        // array and we need to fallback to the default option.
	        currentValues = currentValues.length === 0 ? [0] : currentValues;

	        var labelMarkup = $.map(currentValues, function(value) {
	          return $.grep(_this.lookupItems, function(item) {
	            return item.index === value;
	          })[0]; // we don't want nested arrays here
	        });

	        labelMarkup = $.grep(labelMarkup, function(item) {
	          // Hide default (please choose) if more then one element were selected.
	          // If no option value were given value is set to option text by default
	          if ( labelMarkup.length > 1 || labelMarkup.length === 0 ) {
	            return $.trim(item.value) !== '';
	          }
	          return item;
	        });

	        labelMarkup = $.map(labelMarkup, function(item) {
	          return $.isFunction(labelBuilder)
	            ? labelBuilder(item)
	            : _this.utils.format(labelBuilder, item);
	        });

	        // Limit the amount of selected values shown in label
	        if ( _this.options.multiple.maxLabelEntries ) {
	          if ( labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ) {
	            labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
	            labelMarkup.push(
	              $.isFunction(labelBuilder)
	                ? labelBuilder({ text: '...' })
	                : _this.utils.format(labelBuilder, { text: '...' }));
	          } else {
	            labelMarkup.slice(labelMarkup.length - 1);
	          }
	        }
	        _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

	      } else {
	        var currItem = _this.lookupItems[_this.state.currValue];

	        _this.elements.label.html(
	          $.isFunction(labelBuilder)
	            ? labelBuilder(currItem)
	            : _this.utils.format(labelBuilder, currItem)
	        );
	      }
	    },

	    /** Get and save the available options */
	    populate: function() {
	      var _this = this;
	      var $options = _this.$element.children();
	      var $justOptions = _this.$element.find('option');
	      var $selected = $justOptions.filter(':selected');
	      var selectedIndex = $justOptions.index($selected);
	      var currIndex = 0;
	      var emptyValue = (_this.state.multiple ? [] : 0);

	      if ( $selected.length > 1 && _this.state.multiple ) {
	        selectedIndex = [];
	        $selected.each(function() {
	          selectedIndex.push($(this).index());
	        });
	      }

	      _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
	      _this.state.selectedIdx = _this.state.currValue;
	      _this.state.highlightedIdx = _this.state.currValue;
	      _this.items = [];
	      _this.lookupItems = [];

	      if ( $options.length ) {
	        // Build options markup
	        $options.each(function(i) {
	          var $elm = $(this);

	          if ( $elm.is('optgroup') ) {

	            var optionsGroup = {
	              element       : $elm,
	              label         : $elm.prop('label'),
	              groupDisabled : $elm.prop('disabled'),
	              items         : []
	            };

	            $elm.children().each(function(i) {
	              var $elm = $(this);

	              optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

	              _this.lookupItems[currIndex] = optionsGroup.items[i];

	              currIndex++;
	            });

	            _this.items[i] = optionsGroup;

	          } else {

	            _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

	            _this.lookupItems[currIndex] = _this.items[i];

	            currIndex++;

	          }
	        });

	        _this.setLabel();
	        _this.elements.items.append( _this.elements.itemsScroll.html( _this.getItemsMarkup(_this.items) ) );
	      }
	    },

	    /**
	     * Generate items object data
	     * @param  {integer} index      - Current item index
	     * @param  {node}    $elm       - Current element node
	     * @param  {boolean} isDisabled - Current element disabled state
	     * @return {object}               Item object
	     */
	    getItemData: function(index, $elm, isDisabled) {
	      var _this = this;

	      return {
	        index     : index,
	        element   : $elm,
	        value     : $elm.val(),
	        className : $elm.prop('class'),
	        text      : $elm.html(),
	        slug      : $.trim(_this.utils.replaceDiacritics($elm.html())),
	        selected  : $elm.prop('selected'),
	        disabled  : isDisabled
	      };
	    },

	    /**
	     * Generate options markup
	     *
	     * @param  {object} items - Object containing all available options
	     * @return {string}         HTML for the options box
	     */
	    getItemsMarkup: function(items) {
	      var _this = this;
	      var markup = '<ul>';

	      if ( $.isFunction(_this.options.listBuilder) && _this.options.listBuilder ) {
	        items = _this.options.listBuilder(items);
	      }

	      $.each(items, function(i, elm) {
	        if ( elm.label !== undefined ) {

	          markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
	            _this.utils.arrayToClassname([
	              _this.classes.group,
	              elm.groupDisabled ? 'disabled' : '',
	              elm.element.prop('class')
	            ]),
	            _this.classes.grouplabel,
	            elm.element.prop('label')
	          );

	          $.each(elm.items, function(i, elm) {
	            markup += _this.getItemMarkup(elm.index, elm);
	          });

	          markup += '</ul>';

	        } else {

	          markup += _this.getItemMarkup(elm.index, elm);

	        }
	      });

	      return markup + '</ul>';
	    },

	    /**
	     * Generate every option markup
	     *
	     * @param  {number} index    - Index of current item
	     * @param  {object} itemData - Current item
	     * @return {string}            HTML for the option
	     */
	    getItemMarkup: function(index, itemData) {
	      var _this = this;
	      var itemBuilder = _this.options.optionsItemBuilder;
	      // limit access to item data to provide a simple interface
	      // to most relevant options.
	      var filteredItemData = {
	        value: itemData.value,
	        text : itemData.text,
	        slug : itemData.slug,
	        index: itemData.index
	      };

	      return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
	        index,
	        _this.utils.arrayToClassname([
	          itemData.className,
	          index === _this.items.length - 1  ? 'last'     : '',
	          itemData.disabled                 ? 'disabled' : '',
	          itemData.selected                 ? 'selected' : ''
	        ]),
	        $.isFunction(itemBuilder)
	          ? _this.utils.format(itemBuilder(itemData), itemData)
	          : _this.utils.format(itemBuilder, filteredItemData)
	      );
	    },

	    /** Remove events on the elements */
	    unbindEvents: function() {
	      var _this = this;

	      _this.elements.wrapper
	        .add(_this.$element)
	        .add(_this.elements.outerWrapper)
	        .add(_this.elements.input)
	        .off(eventNamespaceSuffix);
	    },

	    /** Bind events on the elements */
	    bindEvents: function() {
	      var _this = this;

	      _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
	        $(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

	        // Delay close effect when openOnHover is true
	        if ( _this.options.openOnHover ) {
	          clearTimeout(_this.closeTimer);

	          if ( e.type === 'mouseleave' ) {
	            _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
	          } else {
	            _this.open();
	          }
	        }
	      });

	      // Toggle open/close
	      _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
	        _this.state.opened ? _this.close() : _this.open(e);
	      });

	      // Translate original element focus event to dummy input.
	      // Disabled on mobile devices because the default option list isn't
	      // shown due the fact that hidden input gets focused
	      if ( !(_this.options.nativeOnMobile && _this.utils.isMobile()) ) {
	        _this.$element.on('focus' + eventNamespaceSuffix, function() {
	          _this.elements.input.focus();
	        });

	        _this.elements.input
	          .prop({ tabindex: _this.originalTabindex, disabled: false })
	          .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
	          .on('focusin' + eventNamespaceSuffix, function(e) {
	            _this.elements.outerWrapper.addClass(_this.classes.focus);

	            // Prevent the flicker when focusing out and back again in the browser window
	            _this.elements.input.one('blur', function() {
	              _this.elements.input.blur();
	            });

	            if ( _this.options.openOnFocus && !_this.state.opened ) {
	              _this.open(e);
	            }
	          })
	          .on('focusout' + eventNamespaceSuffix, function() {
	            _this.elements.outerWrapper.removeClass(_this.classes.focus);
	          })
	          .on('input propertychange', function() {
	            var val = _this.elements.input.val();
	            var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

	            // Clear search
	            clearTimeout(_this.resetStr);
	            _this.resetStr = setTimeout(function() {
	              _this.elements.input.val('');
	            }, _this.options.keySearchTimeout);

	            if ( val.length ) {
	              // Search in select options
	              $.each(_this.items, function(i, elm) {
	                if ( !elm.disabled && searchRegExp.test(elm.text) || searchRegExp.test(elm.slug) ) {
	                  _this.highlight(i);
	                  return;
	                }
	              });
	            }
	          });
	      }

	      _this.$li.on({
	        // Prevent <input> blur on Chrome
	        mousedown: function(e) {
	          e.preventDefault();
	          e.stopPropagation();
	        },
	        click: function() {
	          _this.select($(this).data('index'));

	          // Chrome doesn't close options box if select is wrapped with a label
	          // We need to 'return false' to avoid that
	          return false;
	        }
	      });
	    },

	    /**
	     * Behavior when keyboard keys is pressed
	     *
	     * @param {object} e - Event object
	     */
	    handleKeys: function(e) {
	      var _this = this;
	      var key = e.which;
	      var keys = _this.options.keys;

	      var isPrevKey = $.inArray(key, keys.previous) > -1;
	      var isNextKey = $.inArray(key, keys.next) > -1;
	      var isSelectKey = $.inArray(key, keys.select) > -1;
	      var isOpenKey = $.inArray(key, keys.open) > -1;
	      var idx = _this.state.highlightedIdx;
	      var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
	      var goToItem = 0;

	      // Enter / Space
	      if ( key === 13 || key === 32 ) {
	        e.preventDefault();
	      }

	      // If it's a directional key
	      if ( isPrevKey || isNextKey ) {
	        if ( !_this.options.allowWrap && isFirstOrLastItem ) {
	          return;
	        }

	        if ( isPrevKey ) {
	          goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
	        }

	        if ( isNextKey ) {
	          goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
	        }

	        _this.highlight(goToItem);
	      }

	      // Tab / Enter / ESC
	      if ( isSelectKey && _this.state.opened ) {
	        _this.select(idx);

	        if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
	          _this.close();
	        }

	        return;
	      }

	      // Space / Enter / Left / Up / Right / Down
	      if ( isOpenKey && !_this.state.opened ) {
	        _this.open();
	      }
	    },

	    /** Update the items object */
	    refresh: function() {
	      var _this = this;

	      _this.populate();
	      _this.activate();
	      _this.utils.triggerCallback('Refresh', _this);
	    },

	    /** Set options box width/height */
	    setOptionsDimensions: function() {
	      var _this = this;

	      // Calculate options box height
	      // Set a temporary class on the hidden parent of the element
	      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
	      var maxHeight = _this.options.maxHeight;
	      var itemsWidth = _this.elements.items.outerWidth();
	      var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

	      // Set the dimensions, minimum is wrapper width, expand for long items if option is true
	      if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth ) {
	        _this.finalWidth = wrapperWidth;
	      } else {
	        // Make sure the scrollbar width is included
	        _this.elements.items.css('overflow', 'scroll');

	        // Set a really long width for _this.elements.outerWrapper
	        _this.elements.outerWrapper.width(9e4);
	        _this.finalWidth = _this.elements.items.width();
	        // Set scroll bar to auto
	        _this.elements.items.css('overflow', '');
	        _this.elements.outerWrapper.width('');
	      }

	      _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

	      // Remove the temporary class
	      hiddenChildren.removeClass(_this.classes.tempshow);
	    },

	    /** Detect if the options box is inside the window */
	    isInViewport: function() {
	      var _this = this;
	      var scrollTop = $win.scrollTop();
	      var winHeight = $win.height();
	      var uiPosX = _this.elements.outerWrapper.offset().top;
	      var uiHeight = _this.elements.outerWrapper.outerHeight();

	      var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
	      var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

	      // If it does not fit below, only render it
	      // above it fit's there.
	      // It's acceptable that the user needs to
	      // scroll the viewport to see the cut off UI
	      var renderAbove = !fitsDown && fitsAbove;

	      _this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
	    },

	    /**
	     * Detect if currently selected option is visible and scroll the options box to show it
	     *
	     * @param {Number|Array} index - Index of the selected items
	     */
	    detectItemVisibility: function(index) {
	      var _this = this;
	      var $filteredLi = _this.$li.filter('[data-index]');

	      if ( _this.state.multiple ) {
	        // If index is an array, we can assume a multiple select and we
	        // want to scroll to the uppermost selected item!
	        // Math.min.apply(Math, index) returns the lowest entry in an Array.
	        index = ($.isArray(index) && index.length === 0) ? 0 : index;
	        index = $.isArray(index) ? Math.min.apply(Math, index) : index;
	      }

	      var liHeight = $filteredLi.eq(index).outerHeight();
	      var liTop = $filteredLi[index].offsetTop;
	      var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
	      var scrollT = liTop + liHeight * 2;

	      _this.elements.itemsScroll.scrollTop(
	        scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
	          liTop - liHeight < itemsScrollTop ? liTop - liHeight :
	            itemsScrollTop
	      );
	    },

	    /**
	     * Open the select options box
	     *
	     * @param {Event} e - Event
	     */
	    open: function(e) {
	      var _this = this;

	      if ( _this.options.nativeOnMobile && _this.utils.isMobile()) {
	        return false;
	      }

	      _this.utils.triggerCallback('BeforeOpen', _this);

	      if ( e ) {
	        e.preventDefault();
	        if (_this.options.stopPropagation) {
	          e.stopPropagation();
	        }
	      }

	      if ( _this.state.enabled ) {
	        _this.setOptionsDimensions();

	        // Find any other opened instances of select and close it
	        $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

	        _this.state.opened = true;
	        _this.itemsHeight = _this.elements.items.outerHeight();
	        _this.itemsInnerHeight = _this.elements.items.height();

	        // Toggle options box visibility
	        _this.elements.outerWrapper.addClass(_this.classes.open);

	        // Give dummy input focus
	        _this.elements.input.val('');
	        if ( e && e.type !== 'focusin' ) {
	          _this.elements.input.focus();
	        }

	        // Delayed binds events on Document to make label clicks work
	        setTimeout(function() {
	          $doc
	            .on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
	            .on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
	        }, 1);

	        _this.isInViewport();

	        // Prevent window scroll when using mouse wheel inside items box
	        if ( _this.options.preventWindowScroll ) {
	          /* istanbul ignore next */
	          $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
	            var orgEvent = e.originalEvent;
	            var scrollTop = $(this).scrollTop();
	            var deltaY = 0;

	            if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
	            if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
	            if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
	            if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

	            if ( scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0 ) {
	              e.preventDefault();
	            }
	          });
	        }

	        _this.detectItemVisibility(_this.state.selectedIdx);

	        _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);

	        _this.utils.triggerCallback('Open', _this);
	      }
	    },

	    /** Close the select options box */
	    close: function() {
	      var _this = this;

	      _this.utils.triggerCallback('BeforeClose', _this);

	      // Remove custom events on document
	      $doc.off(eventNamespaceSuffix);

	      // Remove visible class to hide options box
	      _this.elements.outerWrapper.removeClass(_this.classes.open);

	      _this.state.opened = false;

	      _this.utils.triggerCallback('Close', _this);
	    },

	    /** Select current option and change the label */
	    change: function() {
	      var _this = this;

	      _this.utils.triggerCallback('BeforeChange', _this);

	      if ( _this.state.multiple ) {
	        // Reset old selected
	        $.each(_this.lookupItems, function(idx) {
	          _this.lookupItems[idx].selected = false;
	          _this.$element.find('option').prop('selected', false);
	        });

	        // Set new selected
	        $.each(_this.state.selectedIdx, function(idx, value) {
	          _this.lookupItems[value].selected = true;
	          _this.$element.find('option').eq(value).prop('selected', true);
	        });

	        _this.state.currValue = _this.state.selectedIdx;

	        _this.setLabel();

	        _this.utils.triggerCallback('Change', _this);
	      } else if ( _this.state.currValue !== _this.state.selectedIdx ) {
	        // Apply changed value to original select
	        _this.$element
	          .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
	          .data('value', _this.lookupItems[_this.state.selectedIdx].text);

	        // Change label text
	        _this.setLabel();

	        _this.utils.triggerCallback('Change', _this);
	      }
	    },

	    /**
	     * Highlight option
	     * @param {number} index - Index of the options that will be highlighted
	     */
	    highlight: function(index) {
	      var _this = this;
	      var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

	      _this.utils.triggerCallback('BeforeHighlight', _this);

	      // Parameter index is required and should not be a disabled item
	      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
	        return;
	      }

	      $filteredLi
	        .eq(_this.state.highlightedIdx = index)
	        .addClass('highlighted');

	      _this.detectItemVisibility(index);

	      _this.utils.triggerCallback('Highlight', _this);
	    },

	    /**
	     * Select option
	     *
	     * @param {number} index - Index of the option that will be selected
	     */
	    select: function(index) {
	      var _this = this;
	      var $filteredLi = _this.$li.filter('[data-index]');

	      _this.utils.triggerCallback('BeforeSelect', _this, index);

	      // Parameter index is required and should not be a disabled item
	      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
	        return;
	      }

	      if ( _this.state.multiple ) {
	        // Make sure selectedIdx is an array
	        _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

	        var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
	        if ( hasSelectedIndex !== -1 ) {
	          _this.state.selectedIdx.splice(hasSelectedIndex, 1);
	        } else {
	          _this.state.selectedIdx.push(index);
	        }

	        $filteredLi
	          .removeClass('selected')
	          .filter(function(index) {
	            return $.inArray(index, _this.state.selectedIdx) !== -1;
	          })
	          .addClass('selected');
	      } else {
	        $filteredLi
	          .removeClass('selected')
	          .eq(_this.state.selectedIdx = index)
	          .addClass('selected');
	      }

	      if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
	        _this.close();
	      }

	      _this.change();

	      _this.utils.triggerCallback('Select', _this, index);
	    },

	    /**
	     * Unbind and remove
	     *
	     * @param {boolean} preserveData - Check if the data on the element should be removed too
	     */
	    destroy: function(preserveData) {
	      var _this = this;

	      if ( _this.state && _this.state.enabled ) {
	        _this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

	        if ( !preserveData ) {
	          _this.$element.removeData(pluginName).removeData('value');
	        }

	        _this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

	        _this.state.enabled = false;
	      }
	    }
	  };

	  // A really lightweight plugin wrapper around the constructor,
	  // preventing against multiple instantiations
	  $.fn[pluginName] = function(args) {
	    return this.each(function() {
	      var data = $.data(this, pluginName);

	      if ( data && !data.disableOnMobile ) {
	        (typeof args === 'string' && data[args]) ? data[args]() : data.init(args);
	      } else {
	        $.data(this, pluginName, new Selectric(this, args));
	      }
	    });
	  };

	  /**
	   * Default plugin options
	   *
	   * @type {object}
	   */
	  $.fn[pluginName].defaults = {
	    onChange             : function(elm) { $(elm).change(); },
	    maxHeight            : 300,
	    keySearchTimeout     : 500,
	    arrowButtonMarkup    : '<b class="button">&#x25be;</b>',
	    disableOnMobile      : false,
	    nativeOnMobile       : true,
	    openOnFocus          : true,
	    openOnHover          : false,
	    hoverIntentTimeout   : 500,
	    expandToItemText     : false,
	    responsive           : false,
	    preventWindowScroll  : true,
	    inheritOriginalWidth : false,
	    allowWrap            : true,
	    stopPropagation      : true,
	    optionsItemBuilder   : '{text}', // function(itemData, element, index)
	    labelBuilder         : '{text}', // function(currItem)
	    listBuilder          : false,    // function(items)
	    keys                 : {
	      previous : [37, 38],                 // Left / Up
	      next     : [39, 40],                 // Right / Down
	      select   : [9, 13, 27],              // Tab / Enter / Escape
	      open     : [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
	      close    : [9, 27]                   // Tab / Escape
	    },
	    customClass          : {
	      prefix: pluginName,
	      camelCase: false
	    },
	    multiple              : {
	      separator: ', ',
	      keepMenuOpen: true,
	      maxLabelEntries: false
	    }
	  };
	}));


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJlc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL2ludGVyZXN0L2ludGVyZXN0LmpzIiwid2VicGFjazovLy9kZXYvY29tcG9uZW50cy9tZW51LWhvbWUvbWVudS1ob21lLmpzP2VjOTMiLCJ3ZWJwYWNrOi8vLy4vfi9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2pzL3BlcmZlY3Qtc2Nyb2xsYmFyLmpxdWVyeS5taW4uanM/MmYyMyIsIndlYnBhY2s6Ly8vLi9+L3NlbGVjdHJpYy9wdWJsaWMvanF1ZXJ5LnNlbGVjdHJpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgbWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lbnUtaG9tZS9tZW51LWhvbWUuanMnO1xuaW1wb3J0IHBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvanMvcGVyZmVjdC1zY3JvbGxiYXIuanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJ3NlbGVjdHJpYyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgbWVudSgpO1xuXG4gICAvLyBwcyBpbml0IHNjcm9sbFxuICAgICQoJy5qcy1wcy1zY3JvbGwnKS5wZXJmZWN0U2Nyb2xsYmFyKHt0aGVtZTogJ3JlZCd9KTtcblxuICAgIC8vIHNlbGVjdFxuICAgICQoJy5pc3QtZmlsdGVyIHNlbGVjdCcpLnNlbGVjdHJpYygpO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvcGFnZXMvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAgIC8vIHNldCBtZW51IGNvbHMgbWluLXdpZHRoIGZvciBhbmltYXRpb24gcHVycG9zZVxuICAgIGNvbnN0IG1lbnVfY29sc19taW5fd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKSAqIDAuMTMyOyAvLyBjb2wgd2lkdGggMTMuMiVcbiAgICAkKCcubWVudS1sdmxfX2FicycpLmNzcygnbWluLXdpZHRoJywgbWVudV9jb2xzX21pbl93aWR0aCk7XG5cblxuICAgIC8vIG9wZW4gbGV2ZWwxIG1lbnVcbiAgICAkKCcuanMtbHZsMCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRfYWN0aXZlKCcubWVudS1sdmwwX19hJyk7XG4gICAgICAgIHRvZ2dsZV9sZXZlbF9jb2wodGhpcywgJy5tZW51LWx2bDEsIC5tZW51LWx2bDInKTtcbiAgICAgICAgdG9nZ2xlX3Bvc2l0aW9uX2NsYXNzKCdtZW51LXBvc2l0aW9uMScsICdtZW51LXBvc2l0aW9uMCBtZW51LXBvc2l0aW9uMicpO1xuICAgIH0pO1xuXG4gICAgLy8gb3BlbiBsZXZlbDIgbWVudVxuICAgICQoJy5qcy1sdmwxJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZF9hY3RpdmUoJy5tZW51LWx2bDFfX2EnKTtcbiAgICAgICAgdG9nZ2xlX2xldmVsX2NvbCh0aGlzLCAnLm1lbnUtbHZsMicpO1xuICAgICAgICB0b2dnbGVfcG9zaXRpb25fY2xhc3MoJ21lbnUtcG9zaXRpb24yJywgJ21lbnUtcG9zaXRpb24wIG1lbnUtcG9zaXRpb24xJyk7XG4gICAgfSk7XG5cbiAgICAvLyBmdW5jXG4gICAgY29uc3QgYWRkX2FjdGl2ZSA9IHNlbGVjdG9yID0+IHtcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ19hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ19hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVfbGV2ZWxfY29sID0gKF90aGlzLCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBuYXZfaWQgPSAkKF90aGlzKS5kYXRhKCduYXYtaWQnKTtcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnX29wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5qcy1tZW51JykuZmluZChgW2RhdGEtbmF2LXJlZj1cIiR7bmF2X2lkfVwiXWApLmFkZENsYXNzKCdfb3BlbicpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZV9wb3NpdGlvbl9jbGFzcyA9IChhZGQsIHJlbW92ZSkgPT4ge1xuICAgICAgICAkKCdib2R5LCAuanMtbWVudScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGFkZCkucmVtb3ZlQ2xhc3MocmVtb3ZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBhZGQgcG9zIGNsYXNzIG9uIGJvZHkgb24gcGFnZSBpbml0XG4gICAgLy8gdXNlZCBieSBsYXlvdXRzXG4gICAgdG9nZ2xlX3Bvc2l0aW9uX2NsYXNzKCdtZW51LXBvc2l0aW9uMCcsICdtZW51LXBvc2l0aW9uMSBtZW51LXBvc2l0aW9uMicpO1xuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvY29tcG9uZW50cy9tZW51LWhvbWUvbWVudS1ob21lLmpzIiwiLyogcGVyZmVjdC1zY3JvbGxiYXIgdjAuNi4xNiAqL1xuIWZ1bmN0aW9uIHQoZSxuLHIpe2Z1bmN0aW9uIG8oaSxzKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXMmJmEpcmV0dXJuIGEoaSwhMCk7aWYobClyZXR1cm4gbChpLCEwKTt2YXIgYz1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGMuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixjfXZhciB1PW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbCh1LmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIG49ZVtpXVsxXVt0XTtyZXR1cm4gbyhuP246dCl9LHUsdS5leHBvcnRzLHQsZSxuLHIpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8ci5sZW5ndGg7aSsrKW8ocltpXSk7cmV0dXJuIG99KHsxOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXt0LmZuLnBlcmZlY3RTY3JvbGxiYXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgdCl7dmFyIGU9dDtsLmdldCh0aGlzKXx8by5pbml0aWFsaXplKHRoaXMsZSl9ZWxzZXt2YXIgbj10O1widXBkYXRlXCI9PT1uP28udXBkYXRlKHRoaXMpOlwiZGVzdHJveVwiPT09biYmby5kZXN0cm95KHRoaXMpfX0pfX12YXIgbz10KFwiLi4vbWFpblwiKSxsPXQoXCIuLi9wbHVnaW4vaW5zdGFuY2VzXCIpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wianF1ZXJ5XCJdLHIpO2Vsc2V7dmFyIGk9d2luZG93LmpRdWVyeT93aW5kb3cualF1ZXJ5OndpbmRvdy4kO1widW5kZWZpbmVkXCIhPXR5cGVvZiBpJiZyKGkpfWUuZXhwb3J0cz1yfSx7XCIuLi9tYWluXCI6NyxcIi4uL3BsdWdpbi9pbnN0YW5jZXNcIjoxOH1dLDI6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7dmFyIG49dC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO24uaW5kZXhPZihlKTwwJiZuLnB1c2goZSksdC5jbGFzc05hbWU9bi5qb2luKFwiIFwiKX1mdW5jdGlvbiBvKHQsZSl7dmFyIG49dC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHI9bi5pbmRleE9mKGUpO3I+PTAmJm4uc3BsaWNlKHIsMSksdC5jbGFzc05hbWU9bi5qb2luKFwiIFwiKX1uLmFkZD1mdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0P3QuY2xhc3NMaXN0LmFkZChlKTpyKHQsZSl9LG4ucmVtb3ZlPWZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3Q/dC5jbGFzc0xpc3QucmVtb3ZlKGUpOm8odCxlKX0sbi5saXN0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmNsYXNzTGlzdD9BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodC5jbGFzc0xpc3QpOnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKX19LHt9XSwzOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe3JldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KVtlXX1mdW5jdGlvbiBvKHQsZSxuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgbiYmKG49bi50b1N0cmluZygpK1wicHhcIiksdC5zdHlsZVtlXT1uLHR9ZnVuY3Rpb24gbCh0LGUpe2Zvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO1wibnVtYmVyXCI9PXR5cGVvZiByJiYocj1yLnRvU3RyaW5nKCkrXCJweFwiKSx0LnN0eWxlW25dPXJ9cmV0dXJuIHR9dmFyIGk9e307aS5lPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4gbi5jbGFzc05hbWU9ZSxufSxpLmFwcGVuZFRvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQodCksdH0saS5jc3M9ZnVuY3Rpb24odCxlLG4pe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP2wodCxlKTpcInVuZGVmaW5lZFwiPT10eXBlb2Ygbj9yKHQsZSk6byh0LGUsbil9LGkubWF0Y2hlcz1mdW5jdGlvbih0LGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1hdGNoZXM/dC5tYXRjaGVzKGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1hdGNoZXNTZWxlY3Rvcj90Lm1hdGNoZXNTZWxlY3RvcihlKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgdC53ZWJraXRNYXRjaGVzU2VsZWN0b3I/dC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQubW96TWF0Y2hlc1NlbGVjdG9yP3QubW96TWF0Y2hlc1NlbGVjdG9yKGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1zTWF0Y2hlc1NlbGVjdG9yP3QubXNNYXRjaGVzU2VsZWN0b3IoZSk6dm9pZCAwfSxpLnJlbW92ZT1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5yZW1vdmU/dC5yZW1vdmUoKTp0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KX0saS5xdWVyeUNoaWxkcmVuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0LmNoaWxkTm9kZXMsZnVuY3Rpb24odCl7cmV0dXJuIGkubWF0Y2hlcyh0LGUpfSl9LGUuZXhwb3J0cz1pfSx7fV0sNDpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKHQpe3RoaXMuZWxlbWVudD10LHRoaXMuZXZlbnRzPXt9fTtyLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKHQsZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZXZlbnRzW3RdJiYodGhpcy5ldmVudHNbdF09W10pLHRoaXMuZXZlbnRzW3RdLnB1c2goZSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxlLCExKX0sci5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKHQsZSl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU7dGhpcy5ldmVudHNbdF09dGhpcy5ldmVudHNbdF0uZmlsdGVyKGZ1bmN0aW9uKHIpe3JldHVybiEoIW58fHI9PT1lKXx8KHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHQsciwhMSksITEpfSx0aGlzKX0sci5wcm90b3R5cGUudW5iaW5kQWxsPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuZXZlbnRzKXRoaXMudW5iaW5kKHQpfTt2YXIgbz1mdW5jdGlvbigpe3RoaXMuZXZlbnRFbGVtZW50cz1bXX07by5wcm90b3R5cGUuZXZlbnRFbGVtZW50PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZXZlbnRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZWxlbWVudD09PXR9KVswXTtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKGU9bmV3IHIodCksdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZSkpLGV9LG8ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCxlLG4pe3RoaXMuZXZlbnRFbGVtZW50KHQpLmJpbmQoZSxuKX0sby5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKHQsZSxuKXt0aGlzLmV2ZW50RWxlbWVudCh0KS51bmJpbmQoZSxuKX0sby5wcm90b3R5cGUudW5iaW5kQWxsPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLmV2ZW50RWxlbWVudHMubGVuZ3RoO3QrKyl0aGlzLmV2ZW50RWxlbWVudHNbdF0udW5iaW5kQWxsKCl9LG8ucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMuZXZlbnRFbGVtZW50KHQpLG89ZnVuY3Rpb24odCl7ci51bmJpbmQoZSxvKSxuKHQpfTtyLmJpbmQoZSxvKX0sZS5leHBvcnRzPW99LHt9XSw1OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3JldHVybiBNYXRoLmZsb29yKDY1NTM2KigxK01hdGgucmFuZG9tKCkpKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0KCkrdCgpK1wiLVwiK3QoKStcIi1cIit0KCkrXCItXCIrdCgpK1wiLVwiK3QoKSt0KCkrdCgpfX0oKX0se31dLDY6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10KFwiLi9jbGFzc1wiKSxvPXQoXCIuL2RvbVwiKSxsPW4udG9JbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlSW50KHQsMTApfHwwfSxpPW4uY2xvbmU9ZnVuY3Rpb24odCl7aWYodCl7aWYodC5jb25zdHJ1Y3Rvcj09PUFycmF5KXJldHVybiB0Lm1hcChpKTtpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGU9e307Zm9yKHZhciBuIGluIHQpZVtuXT1pKHRbbl0pO3JldHVybiBlfXJldHVybiB0fXJldHVybiBudWxsfTtuLmV4dGVuZD1mdW5jdGlvbih0LGUpe3ZhciBuPWkodCk7Zm9yKHZhciByIGluIGUpbltyXT1pKGVbcl0pO3JldHVybiBufSxuLmlzRWRpdGFibGU9ZnVuY3Rpb24odCl7cmV0dXJuIG8ubWF0Y2hlcyh0LFwiaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV1cIil8fG8ubWF0Y2hlcyh0LFwic2VsZWN0LFtjb250ZW50ZWRpdGFibGVdXCIpfHxvLm1hdGNoZXModCxcInRleHRhcmVhLFtjb250ZW50ZWRpdGFibGVdXCIpfHxvLm1hdGNoZXModCxcImJ1dHRvbixbY29udGVudGVkaXRhYmxlXVwiKX0sbi5yZW1vdmVQc0NsYXNzZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXIubGlzdCh0KSxuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07MD09PW8uaW5kZXhPZihcInBzLVwiKSYmci5yZW1vdmUodCxvKX19LG4ub3V0ZXJXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gbChvLmNzcyh0LFwid2lkdGhcIikpK2woby5jc3ModCxcInBhZGRpbmdMZWZ0XCIpKStsKG8uY3NzKHQsXCJwYWRkaW5nUmlnaHRcIikpK2woby5jc3ModCxcImJvcmRlckxlZnRXaWR0aFwiKSkrbChvLmNzcyh0LFwiYm9yZGVyUmlnaHRXaWR0aFwiKSl9LG4uc3RhcnRTY3JvbGxpbmc9ZnVuY3Rpb24odCxlKXtyLmFkZCh0LFwicHMtaW4tc2Nyb2xsaW5nXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlP3IuYWRkKHQsXCJwcy1cIitlKTooci5hZGQodCxcInBzLXhcIiksci5hZGQodCxcInBzLXlcIikpfSxuLnN0b3BTY3JvbGxpbmc9ZnVuY3Rpb24odCxlKXtyLnJlbW92ZSh0LFwicHMtaW4tc2Nyb2xsaW5nXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlP3IucmVtb3ZlKHQsXCJwcy1cIitlKTooci5yZW1vdmUodCxcInBzLXhcIiksci5yZW1vdmUodCxcInBzLXlcIikpfSxuLmVudj17aXNXZWJLaXQ6XCJXZWJraXRBcHBlYXJhbmNlXCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsc3VwcG9ydHNUb3VjaDpcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCxzdXBwb3J0c0llUG9pbnRlcjpudWxsIT09d2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzfX0se1wiLi9jbGFzc1wiOjIsXCIuL2RvbVwiOjN9XSw3OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dChcIi4vcGx1Z2luL2Rlc3Ryb3lcIiksbz10KFwiLi9wbHVnaW4vaW5pdGlhbGl6ZVwiKSxsPXQoXCIuL3BsdWdpbi91cGRhdGVcIik7ZS5leHBvcnRzPXtpbml0aWFsaXplOm8sdXBkYXRlOmwsZGVzdHJveTpyfX0se1wiLi9wbHVnaW4vZGVzdHJveVwiOjksXCIuL3BsdWdpbi9pbml0aWFsaXplXCI6MTcsXCIuL3BsdWdpbi91cGRhdGVcIjoyMX1dLDg6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e2hhbmRsZXJzOltcImNsaWNrLXJhaWxcIixcImRyYWctc2Nyb2xsYmFyXCIsXCJrZXlib2FyZFwiLFwid2hlZWxcIixcInRvdWNoXCJdLG1heFNjcm9sbGJhckxlbmd0aDpudWxsLG1pblNjcm9sbGJhckxlbmd0aDpudWxsLHNjcm9sbFhNYXJnaW5PZmZzZXQ6MCxzY3JvbGxZTWFyZ2luT2Zmc2V0OjAsc3VwcHJlc3NTY3JvbGxYOiExLHN1cHByZXNzU2Nyb2xsWTohMSxzd2lwZVByb3BhZ2F0aW9uOiEwLHVzZUJvdGhXaGVlbEF4ZXM6ITEsd2hlZWxQcm9wYWdhdGlvbjohMSx3aGVlbFNwZWVkOjEsdGhlbWU6XCJkZWZhdWx0XCJ9fSx7fV0sOTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXQoXCIuLi9saWIvaGVscGVyXCIpLG89dChcIi4uL2xpYi9kb21cIiksbD10KFwiLi9pbnN0YW5jZXNcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPWwuZ2V0KHQpO2UmJihlLmV2ZW50LnVuYmluZEFsbCgpLG8ucmVtb3ZlKGUuc2Nyb2xsYmFyWCksby5yZW1vdmUoZS5zY3JvbGxiYXJZKSxvLnJlbW92ZShlLnNjcm9sbGJhclhSYWlsKSxvLnJlbW92ZShlLnNjcm9sbGJhcllSYWlsKSxyLnJlbW92ZVBzQ2xhc3Nlcyh0KSxsLnJlbW92ZSh0KSl9fSx7XCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9pbnN0YW5jZXNcIjoxOH1dLDEwOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9dmFyIHI9ZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKX07ZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWSxcImNsaWNrXCIsciksZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWVJhaWwsXCJjbGlja1wiLGZ1bmN0aW9uKHIpe3ZhciBvPXIucGFnZVktd2luZG93LnBhZ2VZT2Zmc2V0LW4oZS5zY3JvbGxiYXJZUmFpbCkudG9wLHM9bz5lLnNjcm9sbGJhcllUb3A/MTotMTtpKHQsXCJ0b3BcIix0LnNjcm9sbFRvcCtzKmUuY29udGFpbmVySGVpZ2h0KSxsKHQpLHIuc3RvcFByb3BhZ2F0aW9uKCl9KSxlLmV2ZW50LmJpbmQoZS5zY3JvbGxiYXJYLFwiY2xpY2tcIixyKSxlLmV2ZW50LmJpbmQoZS5zY3JvbGxiYXJYUmFpbCxcImNsaWNrXCIsZnVuY3Rpb24ocil7dmFyIG89ci5wYWdlWC13aW5kb3cucGFnZVhPZmZzZXQtbihlLnNjcm9sbGJhclhSYWlsKS5sZWZ0LHM9bz5lLnNjcm9sbGJhclhMZWZ0PzE6LTE7aSh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdCtzKmUuY29udGFpbmVyV2lkdGgpLGwodCksci5zdG9wUHJvcGFnYXRpb24oKX0pfXZhciBvPXQoXCIuLi9pbnN0YW5jZXNcIiksbD10KFwiLi4vdXBkYXRlLWdlb21ldHJ5XCIpLGk9dChcIi4uL3VwZGF0ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0KHQpO3IodCxlKX19LHtcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuLi91cGRhdGUtc2Nyb2xsXCI6MjB9XSwxMTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtmdW5jdGlvbiBuKG4pe3ZhciBvPXIrbiplLnJhaWxYUmF0aW8saT1NYXRoLm1heCgwLGUuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkrZS5yYWlsWFJhdGlvKihlLnJhaWxYV2lkdGgtZS5zY3JvbGxiYXJYV2lkdGgpO288MD9lLnNjcm9sbGJhclhMZWZ0PTA6bz5pP2Uuc2Nyb2xsYmFyWExlZnQ9aTplLnNjcm9sbGJhclhMZWZ0PW87dmFyIHM9bC50b0ludChlLnNjcm9sbGJhclhMZWZ0KihlLmNvbnRlbnRXaWR0aC1lLmNvbnRhaW5lcldpZHRoKS8oZS5jb250YWluZXJXaWR0aC1lLnJhaWxYUmF0aW8qZS5zY3JvbGxiYXJYV2lkdGgpKS1lLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudDtjKHQsXCJsZWZ0XCIscyl9dmFyIHI9bnVsbCxvPW51bGwscz1mdW5jdGlvbihlKXtuKGUucGFnZVgtbyksYSh0KSxlLnN0b3BQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKX0sdT1mdW5jdGlvbigpe2wuc3RvcFNjcm9sbGluZyh0LFwieFwiKSxlLmV2ZW50LnVuYmluZChlLm93bmVyRG9jdW1lbnQsXCJtb3VzZW1vdmVcIixzKX07ZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWCxcIm1vdXNlZG93blwiLGZ1bmN0aW9uKG4pe289bi5wYWdlWCxyPWwudG9JbnQoaS5jc3MoZS5zY3JvbGxiYXJYLFwibGVmdFwiKSkqZS5yYWlsWFJhdGlvLGwuc3RhcnRTY3JvbGxpbmcodCxcInhcIiksZS5ldmVudC5iaW5kKGUub3duZXJEb2N1bWVudCxcIm1vdXNlbW92ZVwiLHMpLGUuZXZlbnQub25jZShlLm93bmVyRG9jdW1lbnQsXCJtb3VzZXVwXCIsdSksbi5zdG9wUHJvcGFnYXRpb24oKSxuLnByZXZlbnREZWZhdWx0KCl9KX1mdW5jdGlvbiBvKHQsZSl7ZnVuY3Rpb24gbihuKXt2YXIgbz1yK24qZS5yYWlsWVJhdGlvLGk9TWF0aC5tYXgoMCxlLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkrZS5yYWlsWVJhdGlvKihlLnJhaWxZSGVpZ2h0LWUuc2Nyb2xsYmFyWUhlaWdodCk7bzwwP2Uuc2Nyb2xsYmFyWVRvcD0wOm8+aT9lLnNjcm9sbGJhcllUb3A9aTplLnNjcm9sbGJhcllUb3A9bzt2YXIgcz1sLnRvSW50KGUuc2Nyb2xsYmFyWVRvcCooZS5jb250ZW50SGVpZ2h0LWUuY29udGFpbmVySGVpZ2h0KS8oZS5jb250YWluZXJIZWlnaHQtZS5yYWlsWVJhdGlvKmUuc2Nyb2xsYmFyWUhlaWdodCkpO2ModCxcInRvcFwiLHMpfXZhciByPW51bGwsbz1udWxsLHM9ZnVuY3Rpb24oZSl7bihlLnBhZ2VZLW8pLGEodCksZS5zdG9wUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCl9LHU9ZnVuY3Rpb24oKXtsLnN0b3BTY3JvbGxpbmcodCxcInlcIiksZS5ldmVudC51bmJpbmQoZS5vd25lckRvY3VtZW50LFwibW91c2Vtb3ZlXCIscyl9O2UuZXZlbnQuYmluZChlLnNjcm9sbGJhclksXCJtb3VzZWRvd25cIixmdW5jdGlvbihuKXtvPW4ucGFnZVkscj1sLnRvSW50KGkuY3NzKGUuc2Nyb2xsYmFyWSxcInRvcFwiKSkqZS5yYWlsWVJhdGlvLGwuc3RhcnRTY3JvbGxpbmcodCxcInlcIiksZS5ldmVudC5iaW5kKGUub3duZXJEb2N1bWVudCxcIm1vdXNlbW92ZVwiLHMpLGUuZXZlbnQub25jZShlLm93bmVyRG9jdW1lbnQsXCJtb3VzZXVwXCIsdSksbi5zdG9wUHJvcGFnYXRpb24oKSxuLnByZXZlbnREZWZhdWx0KCl9KX12YXIgbD10KFwiLi4vLi4vbGliL2hlbHBlclwiKSxpPXQoXCIuLi8uLi9saWIvZG9tXCIpLHM9dChcIi4uL2luc3RhbmNlc1wiKSxhPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIiksYz10KFwiLi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9cy5nZXQodCk7cih0LGUpLG8odCxlKX19LHtcIi4uLy4uL2xpYi9kb21cIjozLFwiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTI6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7ZnVuY3Rpb24gbihuLHIpe3ZhciBvPXQuc2Nyb2xsVG9wO2lmKDA9PT1uKXtpZighZS5zY3JvbGxiYXJZQWN0aXZlKXJldHVybiExO2lmKDA9PT1vJiZyPjB8fG8+PWUuY29udGVudEhlaWdodC1lLmNvbnRhaW5lckhlaWdodCYmcjwwKXJldHVybiFlLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb259dmFyIGw9dC5zY3JvbGxMZWZ0O2lmKDA9PT1yKXtpZighZS5zY3JvbGxiYXJYQWN0aXZlKXJldHVybiExO2lmKDA9PT1sJiZuPDB8fGw+PWUuY29udGVudFdpZHRoLWUuY29udGFpbmVyV2lkdGgmJm4+MClyZXR1cm4hZS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9ufXJldHVybiEwfXZhciByPSExO2UuZXZlbnQuYmluZCh0LFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKCl7cj0hMH0pLGUuZXZlbnQuYmluZCh0LFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7cj0hMX0pO3ZhciBpPSExO2UuZXZlbnQuYmluZChlLm93bmVyRG9jdW1lbnQsXCJrZXlkb3duXCIsZnVuY3Rpb24oYyl7aWYoIShjLmlzRGVmYXVsdFByZXZlbnRlZCYmYy5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5kZWZhdWx0UHJldmVudGVkKSl7dmFyIHU9bC5tYXRjaGVzKGUuc2Nyb2xsYmFyWCxcIjpmb2N1c1wiKXx8bC5tYXRjaGVzKGUuc2Nyb2xsYmFyWSxcIjpmb2N1c1wiKTtpZihyfHx1KXt2YXIgZD1kb2N1bWVudC5hY3RpdmVFbGVtZW50P2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ6ZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoZCl7aWYoXCJJRlJBTUVcIj09PWQudGFnTmFtZSlkPWQuY29udGVudERvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7ZWxzZSBmb3IoO2Quc2hhZG93Um9vdDspZD1kLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtpZihvLmlzRWRpdGFibGUoZCkpcmV0dXJufXZhciBwPTAsZj0wO3N3aXRjaChjLndoaWNoKXtjYXNlIDM3OnA9Yy5tZXRhS2V5Py1lLmNvbnRlbnRXaWR0aDpjLmFsdEtleT8tZS5jb250YWluZXJXaWR0aDotMzA7YnJlYWs7Y2FzZSAzODpmPWMubWV0YUtleT9lLmNvbnRlbnRIZWlnaHQ6Yy5hbHRLZXk/ZS5jb250YWluZXJIZWlnaHQ6MzA7YnJlYWs7Y2FzZSAzOTpwPWMubWV0YUtleT9lLmNvbnRlbnRXaWR0aDpjLmFsdEtleT9lLmNvbnRhaW5lcldpZHRoOjMwO2JyZWFrO2Nhc2UgNDA6Zj1jLm1ldGFLZXk/LWUuY29udGVudEhlaWdodDpjLmFsdEtleT8tZS5jb250YWluZXJIZWlnaHQ6LTMwO2JyZWFrO2Nhc2UgMzM6Zj05MDticmVhaztjYXNlIDMyOmY9Yy5zaGlmdEtleT85MDotOTA7YnJlYWs7Y2FzZSAzNDpmPS05MDticmVhaztjYXNlIDM1OmY9Yy5jdHJsS2V5Py1lLmNvbnRlbnRIZWlnaHQ6LWUuY29udGFpbmVySGVpZ2h0O2JyZWFrO2Nhc2UgMzY6Zj1jLmN0cmxLZXk/dC5zY3JvbGxUb3A6ZS5jb250YWluZXJIZWlnaHQ7YnJlYWs7ZGVmYXVsdDpyZXR1cm59YSh0LFwidG9wXCIsdC5zY3JvbGxUb3AtZiksYSh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdCtwKSxzKHQpLGk9bihwLGYpLGkmJmMucHJldmVudERlZmF1bHQoKX19fSl9dmFyIG89dChcIi4uLy4uL2xpYi9oZWxwZXJcIiksbD10KFwiLi4vLi4vbGliL2RvbVwiKSxpPXQoXCIuLi9pbnN0YW5jZXNcIikscz10KFwiLi4vdXBkYXRlLWdlb21ldHJ5XCIpLGE9dChcIi4uL3VwZGF0ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPWkuZ2V0KHQpO3IodCxlKX19LHtcIi4uLy4uL2xpYi9kb21cIjozLFwiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTM6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7ZnVuY3Rpb24gbihuLHIpe3ZhciBvPXQuc2Nyb2xsVG9wO2lmKDA9PT1uKXtpZighZS5zY3JvbGxiYXJZQWN0aXZlKXJldHVybiExO2lmKDA9PT1vJiZyPjB8fG8+PWUuY29udGVudEhlaWdodC1lLmNvbnRhaW5lckhlaWdodCYmcjwwKXJldHVybiFlLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb259dmFyIGw9dC5zY3JvbGxMZWZ0O2lmKDA9PT1yKXtpZighZS5zY3JvbGxiYXJYQWN0aXZlKXJldHVybiExO2lmKDA9PT1sJiZuPDB8fGw+PWUuY29udGVudFdpZHRoLWUuY29udGFpbmVyV2lkdGgmJm4+MClyZXR1cm4hZS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9ufXJldHVybiEwfWZ1bmN0aW9uIHIodCl7dmFyIGU9dC5kZWx0YVgsbj0tMSp0LmRlbHRhWTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG58fChlPS0xKnQud2hlZWxEZWx0YVgvNixuPXQud2hlZWxEZWx0YVkvNiksdC5kZWx0YU1vZGUmJjE9PT10LmRlbHRhTW9kZSYmKGUqPTEwLG4qPTEwKSxlIT09ZSYmbiE9PW4mJihlPTAsbj10LndoZWVsRGVsdGEpLHQuc2hpZnRLZXk/Wy1uLC1lXTpbZSxuXX1mdW5jdGlvbiBvKGUsbil7dmFyIHI9dC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWE6aG92ZXIsIHNlbGVjdFttdWx0aXBsZV06aG92ZXIsIC5wcy1jaGlsZDpob3ZlclwiKTtpZihyKXtpZighd2luZG93LmdldENvbXB1dGVkU3R5bGUocikub3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSlyZXR1cm4hMTt2YXIgbz1yLnNjcm9sbEhlaWdodC1yLmNsaWVudEhlaWdodDtpZihvPjAmJiEoMD09PXIuc2Nyb2xsVG9wJiZuPjB8fHIuc2Nyb2xsVG9wPT09byYmbjwwKSlyZXR1cm4hMDt2YXIgbD1yLnNjcm9sbExlZnQtci5jbGllbnRXaWR0aDtpZihsPjAmJiEoMD09PXIuc2Nyb2xsTGVmdCYmZTwwfHxyLnNjcm9sbExlZnQ9PT1sJiZlPjApKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIHMocyl7dmFyIGM9cihzKSx1PWNbMF0sZD1jWzFdO28odSxkKXx8KGE9ITEsZS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzP2Uuc2Nyb2xsYmFyWUFjdGl2ZSYmIWUuc2Nyb2xsYmFyWEFjdGl2ZT8oZD9pKHQsXCJ0b3BcIix0LnNjcm9sbFRvcC1kKmUuc2V0dGluZ3Mud2hlZWxTcGVlZCk6aSh0LFwidG9wXCIsdC5zY3JvbGxUb3ArdSplLnNldHRpbmdzLndoZWVsU3BlZWQpLGE9ITApOmUuc2Nyb2xsYmFyWEFjdGl2ZSYmIWUuc2Nyb2xsYmFyWUFjdGl2ZSYmKHU/aSh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdCt1KmUuc2V0dGluZ3Mud2hlZWxTcGVlZCk6aSh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdC1kKmUuc2V0dGluZ3Mud2hlZWxTcGVlZCksYT0hMCk6KGkodCxcInRvcFwiLHQuc2Nyb2xsVG9wLWQqZS5zZXR0aW5ncy53aGVlbFNwZWVkKSxpKHQsXCJsZWZ0XCIsdC5zY3JvbGxMZWZ0K3UqZS5zZXR0aW5ncy53aGVlbFNwZWVkKSksbCh0KSxhPWF8fG4odSxkKSxhJiYocy5zdG9wUHJvcGFnYXRpb24oKSxzLnByZXZlbnREZWZhdWx0KCkpKX12YXIgYT0hMTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93Lm9ud2hlZWw/ZS5ldmVudC5iaW5kKHQsXCJ3aGVlbFwiLHMpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsJiZlLmV2ZW50LmJpbmQodCxcIm1vdXNld2hlZWxcIixzKX12YXIgbz10KFwiLi4vaW5zdGFuY2VzXCIpLGw9dChcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiKSxpPXQoXCIuLi91cGRhdGUtc2Nyb2xsXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1vLmdldCh0KTtyKHQsZSl9fSx7XCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTQ6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7ZS5ldmVudC5iaW5kKHQsXCJzY3JvbGxcIixmdW5jdGlvbigpe2wodCl9KX12YXIgbz10KFwiLi4vaW5zdGFuY2VzXCIpLGw9dChcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXQodCk7cih0LGUpfX0se1wiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOX1dLDE1OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe2Z1bmN0aW9uIG4oKXt2YXIgdD13aW5kb3cuZ2V0U2VsZWN0aW9uP3dpbmRvdy5nZXRTZWxlY3Rpb24oKTpkb2N1bWVudC5nZXRTZWxlY3Rpb24/ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk6XCJcIjtyZXR1cm4gMD09PXQudG9TdHJpbmcoKS5sZW5ndGg/bnVsbDp0LmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXJ9ZnVuY3Rpb24gcigpe2N8fChjPXNldEludGVydmFsKGZ1bmN0aW9uKCl7cmV0dXJuIGwuZ2V0KHQpPyhzKHQsXCJ0b3BcIix0LnNjcm9sbFRvcCt1LnRvcCkscyh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdCt1LmxlZnQpLHZvaWQgaSh0KSk6dm9pZCBjbGVhckludGVydmFsKGMpfSw1MCkpfWZ1bmN0aW9uIGEoKXtjJiYoY2xlYXJJbnRlcnZhbChjKSxjPW51bGwpLG8uc3RvcFNjcm9sbGluZyh0KX12YXIgYz1udWxsLHU9e3RvcDowLGxlZnQ6MH0sZD0hMTtlLmV2ZW50LmJpbmQoZS5vd25lckRvY3VtZW50LFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt0LmNvbnRhaW5zKG4oKSk/ZD0hMDooZD0hMSxhKCkpfSksZS5ldmVudC5iaW5kKHdpbmRvdyxcIm1vdXNldXBcIixmdW5jdGlvbigpe2QmJihkPSExLGEoKSl9KSxlLmV2ZW50LmJpbmQod2luZG93LFwia2V5dXBcIixmdW5jdGlvbigpe2QmJihkPSExLGEoKSl9KSxlLmV2ZW50LmJpbmQod2luZG93LFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24oZSl7aWYoZCl7dmFyIG49e3g6ZS5wYWdlWCx5OmUucGFnZVl9LGw9e2xlZnQ6dC5vZmZzZXRMZWZ0LHJpZ2h0OnQub2Zmc2V0TGVmdCt0Lm9mZnNldFdpZHRoLHRvcDp0Lm9mZnNldFRvcCxib3R0b206dC5vZmZzZXRUb3ArdC5vZmZzZXRIZWlnaHR9O24ueDxsLmxlZnQrMz8odS5sZWZ0PS01LG8uc3RhcnRTY3JvbGxpbmcodCxcInhcIikpOm4ueD5sLnJpZ2h0LTM/KHUubGVmdD01LG8uc3RhcnRTY3JvbGxpbmcodCxcInhcIikpOnUubGVmdD0wLG4ueTxsLnRvcCszPyhsLnRvcCszLW4ueTw1P3UudG9wPS01OnUudG9wPS0yMCxvLnN0YXJ0U2Nyb2xsaW5nKHQsXCJ5XCIpKTpuLnk+bC5ib3R0b20tMz8obi55LWwuYm90dG9tKzM8NT91LnRvcD01OnUudG9wPTIwLG8uc3RhcnRTY3JvbGxpbmcodCxcInlcIikpOnUudG9wPTAsMD09PXUudG9wJiYwPT09dS5sZWZ0P2EoKTpyKCl9fSl9dmFyIG89dChcIi4uLy4uL2xpYi9oZWxwZXJcIiksbD10KFwiLi4vaW5zdGFuY2VzXCIpLGk9dChcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiKSxzPXQoXCIuLi91cGRhdGUtc2Nyb2xsXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1sLmdldCh0KTtyKHQsZSl9fSx7XCIuLi8uLi9saWIvaGVscGVyXCI6NixcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuLi91cGRhdGUtc2Nyb2xsXCI6MjB9XSwxNjpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlLG4scil7ZnVuY3Rpb24gbyhuLHIpe3ZhciBvPXQuc2Nyb2xsVG9wLGw9dC5zY3JvbGxMZWZ0LGk9TWF0aC5hYnMobikscz1NYXRoLmFicyhyKTtpZihzPmkpe2lmKHI8MCYmbz09PWUuY29udGVudEhlaWdodC1lLmNvbnRhaW5lckhlaWdodHx8cj4wJiYwPT09bylyZXR1cm4hZS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9ufWVsc2UgaWYoaT5zJiYobjwwJiZsPT09ZS5jb250ZW50V2lkdGgtZS5jb250YWluZXJXaWR0aHx8bj4wJiYwPT09bCkpcmV0dXJuIWUuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbjtyZXR1cm4hMH1mdW5jdGlvbiBhKGUsbil7cyh0LFwidG9wXCIsdC5zY3JvbGxUb3Atbikscyh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdC1lKSxpKHQpfWZ1bmN0aW9uIGMoKXt3PSEwfWZ1bmN0aW9uIHUoKXt3PSExfWZ1bmN0aW9uIGQodCl7cmV0dXJuIHQudGFyZ2V0VG91Y2hlcz90LnRhcmdldFRvdWNoZXNbMF06dH1mdW5jdGlvbiBwKHQpe3JldHVybiEoIXQudGFyZ2V0VG91Y2hlc3x8MSE9PXQudGFyZ2V0VG91Y2hlcy5sZW5ndGgpfHwhKCF0LnBvaW50ZXJUeXBlfHxcIm1vdXNlXCI9PT10LnBvaW50ZXJUeXBlfHx0LnBvaW50ZXJUeXBlPT09dC5NU1BPSU5URVJfVFlQRV9NT1VTRSl9ZnVuY3Rpb24gZih0KXtpZihwKHQpKXtZPSEwO3ZhciBlPWQodCk7Zy5wYWdlWD1lLnBhZ2VYLGcucGFnZVk9ZS5wYWdlWSx2PShuZXcgRGF0ZSkuZ2V0VGltZSgpLG51bGwhPT15JiZjbGVhckludGVydmFsKHkpLHQuc3RvcFByb3BhZ2F0aW9uKCl9fWZ1bmN0aW9uIGgodCl7aWYoIVkmJmUuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbiYmZih0KSwhdyYmWSYmcCh0KSl7dmFyIG49ZCh0KSxyPXtwYWdlWDpuLnBhZ2VYLHBhZ2VZOm4ucGFnZVl9LGw9ci5wYWdlWC1nLnBhZ2VYLGk9ci5wYWdlWS1nLnBhZ2VZO2EobCxpKSxnPXI7dmFyIHM9KG5ldyBEYXRlKS5nZXRUaW1lKCksYz1zLXY7Yz4wJiYobS54PWwvYyxtLnk9aS9jLHY9cyksbyhsLGkpJiYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCkpfX1mdW5jdGlvbiBiKCl7IXcmJlkmJihZPSExLGNsZWFySW50ZXJ2YWwoeSkseT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBsLmdldCh0KSYmKG0ueHx8bS55KT9NYXRoLmFicyhtLngpPC4wMSYmTWF0aC5hYnMobS55KTwuMDE/dm9pZCBjbGVhckludGVydmFsKHkpOihhKDMwKm0ueCwzMCptLnkpLG0ueCo9Ljgsdm9pZChtLnkqPS44KSk6dm9pZCBjbGVhckludGVydmFsKHkpfSwxMCkpfXZhciBnPXt9LHY9MCxtPXt9LHk9bnVsbCx3PSExLFk9ITE7bj8oZS5ldmVudC5iaW5kKHdpbmRvdyxcInRvdWNoc3RhcnRcIixjKSxlLmV2ZW50LmJpbmQod2luZG93LFwidG91Y2hlbmRcIix1KSxlLmV2ZW50LmJpbmQodCxcInRvdWNoc3RhcnRcIixmKSxlLmV2ZW50LmJpbmQodCxcInRvdWNobW92ZVwiLGgpLGUuZXZlbnQuYmluZCh0LFwidG91Y2hlbmRcIixiKSk6ciYmKHdpbmRvdy5Qb2ludGVyRXZlbnQ/KGUuZXZlbnQuYmluZCh3aW5kb3csXCJwb2ludGVyZG93blwiLGMpLGUuZXZlbnQuYmluZCh3aW5kb3csXCJwb2ludGVydXBcIix1KSxlLmV2ZW50LmJpbmQodCxcInBvaW50ZXJkb3duXCIsZiksZS5ldmVudC5iaW5kKHQsXCJwb2ludGVybW92ZVwiLGgpLGUuZXZlbnQuYmluZCh0LFwicG9pbnRlcnVwXCIsYikpOndpbmRvdy5NU1BvaW50ZXJFdmVudCYmKGUuZXZlbnQuYmluZCh3aW5kb3csXCJNU1BvaW50ZXJEb3duXCIsYyksZS5ldmVudC5iaW5kKHdpbmRvdyxcIk1TUG9pbnRlclVwXCIsdSksZS5ldmVudC5iaW5kKHQsXCJNU1BvaW50ZXJEb3duXCIsZiksZS5ldmVudC5iaW5kKHQsXCJNU1BvaW50ZXJNb3ZlXCIsaCksZS5ldmVudC5iaW5kKHQsXCJNU1BvaW50ZXJVcFwiLGIpKSl9dmFyIG89dChcIi4uLy4uL2xpYi9oZWxwZXJcIiksbD10KFwiLi4vaW5zdGFuY2VzXCIpLGk9dChcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiKSxzPXQoXCIuLi91cGRhdGUtc2Nyb2xsXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihvLmVudi5zdXBwb3J0c1RvdWNofHxvLmVudi5zdXBwb3J0c0llUG9pbnRlcil7dmFyIGU9bC5nZXQodCk7cih0LGUsby5lbnYuc3VwcG9ydHNUb3VjaCxvLmVudi5zdXBwb3J0c0llUG9pbnRlcil9fX0se1wiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTc6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10KFwiLi4vbGliL2hlbHBlclwiKSxvPXQoXCIuLi9saWIvY2xhc3NcIiksbD10KFwiLi9pbnN0YW5jZXNcIiksaT10KFwiLi91cGRhdGUtZ2VvbWV0cnlcIikscz17XCJjbGljay1yYWlsXCI6dChcIi4vaGFuZGxlci9jbGljay1yYWlsXCIpLFwiZHJhZy1zY3JvbGxiYXJcIjp0KFwiLi9oYW5kbGVyL2RyYWctc2Nyb2xsYmFyXCIpLGtleWJvYXJkOnQoXCIuL2hhbmRsZXIva2V5Ym9hcmRcIiksd2hlZWw6dChcIi4vaGFuZGxlci9tb3VzZS13aGVlbFwiKSx0b3VjaDp0KFwiLi9oYW5kbGVyL3RvdWNoXCIpLHNlbGVjdGlvbjp0KFwiLi9oYW5kbGVyL3NlbGVjdGlvblwiKX0sYT10KFwiLi9oYW5kbGVyL25hdGl2ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7ZT1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9LG8uYWRkKHQsXCJwcy1jb250YWluZXJcIik7dmFyIG49bC5hZGQodCk7bi5zZXR0aW5ncz1yLmV4dGVuZChuLnNldHRpbmdzLGUpLG8uYWRkKHQsXCJwcy10aGVtZS1cIituLnNldHRpbmdzLnRoZW1lKSxuLnNldHRpbmdzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oZSl7c1tlXSh0KX0pLGEodCksaSh0KX19LHtcIi4uL2xpYi9jbGFzc1wiOjIsXCIuLi9saWIvaGVscGVyXCI6NixcIi4vaGFuZGxlci9jbGljay1yYWlsXCI6MTAsXCIuL2hhbmRsZXIvZHJhZy1zY3JvbGxiYXJcIjoxMSxcIi4vaGFuZGxlci9rZXlib2FyZFwiOjEyLFwiLi9oYW5kbGVyL21vdXNlLXdoZWVsXCI6MTMsXCIuL2hhbmRsZXIvbmF0aXZlLXNjcm9sbFwiOjE0LFwiLi9oYW5kbGVyL3NlbGVjdGlvblwiOjE1LFwiLi9oYW5kbGVyL3RvdWNoXCI6MTYsXCIuL2luc3RhbmNlc1wiOjE4LFwiLi91cGRhdGUtZ2VvbWV0cnlcIjoxOX1dLDE4OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtmdW5jdGlvbiBlKCl7YS5hZGQodCxcInBzLWZvY3VzXCIpfWZ1bmN0aW9uIG4oKXthLnJlbW92ZSh0LFwicHMtZm9jdXNcIil9dmFyIHI9dGhpcztyLnNldHRpbmdzPXMuY2xvbmUoYyksci5jb250YWluZXJXaWR0aD1udWxsLHIuY29udGFpbmVySGVpZ2h0PW51bGwsci5jb250ZW50V2lkdGg9bnVsbCxyLmNvbnRlbnRIZWlnaHQ9bnVsbCxyLmlzUnRsPVwicnRsXCI9PT11LmNzcyh0LFwiZGlyZWN0aW9uXCIpLHIuaXNOZWdhdGl2ZVNjcm9sbD1mdW5jdGlvbigpe3ZhciBlPXQuc2Nyb2xsTGVmdCxuPW51bGw7cmV0dXJuIHQuc2Nyb2xsTGVmdD0tMSxuPXQuc2Nyb2xsTGVmdDwwLHQuc2Nyb2xsTGVmdD1lLG59KCksci5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQ9ci5pc05lZ2F0aXZlU2Nyb2xsP3Quc2Nyb2xsV2lkdGgtdC5jbGllbnRXaWR0aDowLHIuZXZlbnQ9bmV3IGQsci5vd25lckRvY3VtZW50PXQub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQsci5zY3JvbGxiYXJYUmFpbD11LmFwcGVuZFRvKHUuZShcImRpdlwiLFwicHMtc2Nyb2xsYmFyLXgtcmFpbFwiKSx0KSxyLnNjcm9sbGJhclg9dS5hcHBlbmRUbyh1LmUoXCJkaXZcIixcInBzLXNjcm9sbGJhci14XCIpLHIuc2Nyb2xsYmFyWFJhaWwpLHIuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLDApLHIuZXZlbnQuYmluZChyLnNjcm9sbGJhclgsXCJmb2N1c1wiLGUpLHIuZXZlbnQuYmluZChyLnNjcm9sbGJhclgsXCJibHVyXCIsbiksci5zY3JvbGxiYXJYQWN0aXZlPW51bGwsci5zY3JvbGxiYXJYV2lkdGg9bnVsbCxyLnNjcm9sbGJhclhMZWZ0PW51bGwsci5zY3JvbGxiYXJYQm90dG9tPXMudG9JbnQodS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcImJvdHRvbVwiKSksci5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbT1yLnNjcm9sbGJhclhCb3R0b209PT1yLnNjcm9sbGJhclhCb3R0b20sci5zY3JvbGxiYXJYVG9wPXIuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20/bnVsbDpzLnRvSW50KHUuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJ0b3BcIikpLHIucmFpbEJvcmRlclhXaWR0aD1zLnRvSW50KHUuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJib3JkZXJMZWZ0V2lkdGhcIikpK3MudG9JbnQodS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcImJvcmRlclJpZ2h0V2lkdGhcIikpLHUuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJkaXNwbGF5XCIsXCJibG9ja1wiKSxyLnJhaWxYTWFyZ2luV2lkdGg9cy50b0ludCh1LmNzcyhyLnNjcm9sbGJhclhSYWlsLFwibWFyZ2luTGVmdFwiKSkrcy50b0ludCh1LmNzcyhyLnNjcm9sbGJhclhSYWlsLFwibWFyZ2luUmlnaHRcIikpLHUuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJkaXNwbGF5XCIsXCJcIiksci5yYWlsWFdpZHRoPW51bGwsci5yYWlsWFJhdGlvPW51bGwsci5zY3JvbGxiYXJZUmFpbD11LmFwcGVuZFRvKHUuZShcImRpdlwiLFwicHMtc2Nyb2xsYmFyLXktcmFpbFwiKSx0KSxyLnNjcm9sbGJhclk9dS5hcHBlbmRUbyh1LmUoXCJkaXZcIixcInBzLXNjcm9sbGJhci15XCIpLHIuc2Nyb2xsYmFyWVJhaWwpLHIuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLDApLHIuZXZlbnQuYmluZChyLnNjcm9sbGJhclksXCJmb2N1c1wiLGUpLHIuZXZlbnQuYmluZChyLnNjcm9sbGJhclksXCJibHVyXCIsbiksci5zY3JvbGxiYXJZQWN0aXZlPW51bGwsci5zY3JvbGxiYXJZSGVpZ2h0PW51bGwsci5zY3JvbGxiYXJZVG9wPW51bGwsci5zY3JvbGxiYXJZUmlnaHQ9cy50b0ludCh1LmNzcyhyLnNjcm9sbGJhcllSYWlsLFwicmlnaHRcIikpLHIuaXNTY3JvbGxiYXJZVXNpbmdSaWdodD1yLnNjcm9sbGJhcllSaWdodD09PXIuc2Nyb2xsYmFyWVJpZ2h0LHIuc2Nyb2xsYmFyWUxlZnQ9ci5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0P251bGw6cy50b0ludCh1LmNzcyhyLnNjcm9sbGJhcllSYWlsLFwibGVmdFwiKSksci5zY3JvbGxiYXJZT3V0ZXJXaWR0aD1yLmlzUnRsP3Mub3V0ZXJXaWR0aChyLnNjcm9sbGJhclkpOm51bGwsci5yYWlsQm9yZGVyWVdpZHRoPXMudG9JbnQodS5jc3Moci5zY3JvbGxiYXJZUmFpbCxcImJvcmRlclRvcFdpZHRoXCIpKStzLnRvSW50KHUuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJib3JkZXJCb3R0b21XaWR0aFwiKSksdS5jc3Moci5zY3JvbGxiYXJZUmFpbCxcImRpc3BsYXlcIixcImJsb2NrXCIpLHIucmFpbFlNYXJnaW5IZWlnaHQ9cy50b0ludCh1LmNzcyhyLnNjcm9sbGJhcllSYWlsLFwibWFyZ2luVG9wXCIpKStzLnRvSW50KHUuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJtYXJnaW5Cb3R0b21cIikpLHUuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJkaXNwbGF5XCIsXCJcIiksci5yYWlsWUhlaWdodD1udWxsLHIucmFpbFlSYXRpbz1udWxsfWZ1bmN0aW9uIG8odCl7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcy1pZFwiKX1mdW5jdGlvbiBsKHQsZSl7dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBzLWlkXCIsZSl9ZnVuY3Rpb24gaSh0KXt0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcHMtaWRcIil9dmFyIHM9dChcIi4uL2xpYi9oZWxwZXJcIiksYT10KFwiLi4vbGliL2NsYXNzXCIpLGM9dChcIi4vZGVmYXVsdC1zZXR0aW5nXCIpLHU9dChcIi4uL2xpYi9kb21cIiksZD10KFwiLi4vbGliL2V2ZW50LW1hbmFnZXJcIikscD10KFwiLi4vbGliL2d1aWRcIiksZj17fTtuLmFkZD1mdW5jdGlvbih0KXt2YXIgZT1wKCk7cmV0dXJuIGwodCxlKSxmW2VdPW5ldyByKHQpLGZbZV19LG4ucmVtb3ZlPWZ1bmN0aW9uKHQpe2RlbGV0ZSBmW28odCldLGkodCl9LG4uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiBmW28odCldfX0se1wiLi4vbGliL2NsYXNzXCI6MixcIi4uL2xpYi9kb21cIjozLFwiLi4vbGliL2V2ZW50LW1hbmFnZXJcIjo0LFwiLi4vbGliL2d1aWRcIjo1LFwiLi4vbGliL2hlbHBlclwiOjYsXCIuL2RlZmF1bHQtc2V0dGluZ1wiOjh9XSwxOTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtyZXR1cm4gdC5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgmJihlPU1hdGgubWF4KGUsdC5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpKSx0LnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCYmKGU9TWF0aC5taW4oZSx0LnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkpLGV9ZnVuY3Rpb24gbyh0LGUpe3ZhciBuPXt3aWR0aDplLnJhaWxYV2lkdGh9O2UuaXNSdGw/bi5sZWZ0PWUubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50K3Quc2Nyb2xsTGVmdCtlLmNvbnRhaW5lcldpZHRoLWUuY29udGVudFdpZHRoOm4ubGVmdD10LnNjcm9sbExlZnQsZS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbT9uLmJvdHRvbT1lLnNjcm9sbGJhclhCb3R0b20tdC5zY3JvbGxUb3A6bi50b3A9ZS5zY3JvbGxiYXJYVG9wK3Quc2Nyb2xsVG9wLHMuY3NzKGUuc2Nyb2xsYmFyWFJhaWwsbik7dmFyIHI9e3RvcDp0LnNjcm9sbFRvcCxoZWlnaHQ6ZS5yYWlsWUhlaWdodH07ZS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0P2UuaXNSdGw/ci5yaWdodD1lLmNvbnRlbnRXaWR0aC0oZS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQrdC5zY3JvbGxMZWZ0KS1lLnNjcm9sbGJhcllSaWdodC1lLnNjcm9sbGJhcllPdXRlcldpZHRoOnIucmlnaHQ9ZS5zY3JvbGxiYXJZUmlnaHQtdC5zY3JvbGxMZWZ0OmUuaXNSdGw/ci5sZWZ0PWUubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50K3Quc2Nyb2xsTGVmdCsyKmUuY29udGFpbmVyV2lkdGgtZS5jb250ZW50V2lkdGgtZS5zY3JvbGxiYXJZTGVmdC1lLnNjcm9sbGJhcllPdXRlcldpZHRoOnIubGVmdD1lLnNjcm9sbGJhcllMZWZ0K3Quc2Nyb2xsTGVmdCxzLmNzcyhlLnNjcm9sbGJhcllSYWlsLHIpLHMuY3NzKGUuc2Nyb2xsYmFyWCx7bGVmdDplLnNjcm9sbGJhclhMZWZ0LHdpZHRoOmUuc2Nyb2xsYmFyWFdpZHRoLWUucmFpbEJvcmRlclhXaWR0aH0pLHMuY3NzKGUuc2Nyb2xsYmFyWSx7dG9wOmUuc2Nyb2xsYmFyWVRvcCxoZWlnaHQ6ZS5zY3JvbGxiYXJZSGVpZ2h0LWUucmFpbEJvcmRlcllXaWR0aH0pfXZhciBsPXQoXCIuLi9saWIvaGVscGVyXCIpLGk9dChcIi4uL2xpYi9jbGFzc1wiKSxzPXQoXCIuLi9saWIvZG9tXCIpLGE9dChcIi4vaW5zdGFuY2VzXCIpLGM9dChcIi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9YS5nZXQodCk7ZS5jb250YWluZXJXaWR0aD10LmNsaWVudFdpZHRoLGUuY29udGFpbmVySGVpZ2h0PXQuY2xpZW50SGVpZ2h0LGUuY29udGVudFdpZHRoPXQuc2Nyb2xsV2lkdGgsZS5jb250ZW50SGVpZ2h0PXQuc2Nyb2xsSGVpZ2h0O3ZhciBuO3QuY29udGFpbnMoZS5zY3JvbGxiYXJYUmFpbCl8fChuPXMucXVlcnlDaGlsZHJlbih0LFwiLnBzLXNjcm9sbGJhci14LXJhaWxcIiksbi5sZW5ndGg+MCYmbi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3MucmVtb3ZlKHQpfSkscy5hcHBlbmRUbyhlLnNjcm9sbGJhclhSYWlsLHQpKSx0LmNvbnRhaW5zKGUuc2Nyb2xsYmFyWVJhaWwpfHwobj1zLnF1ZXJ5Q2hpbGRyZW4odCxcIi5wcy1zY3JvbGxiYXIteS1yYWlsXCIpLG4ubGVuZ3RoPjAmJm4uZm9yRWFjaChmdW5jdGlvbih0KXtzLnJlbW92ZSh0KX0pLHMuYXBwZW5kVG8oZS5zY3JvbGxiYXJZUmFpbCx0KSksIWUuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYJiZlLmNvbnRhaW5lcldpZHRoK2Uuc2V0dGluZ3Muc2Nyb2xsWE1hcmdpbk9mZnNldDxlLmNvbnRlbnRXaWR0aD8oZS5zY3JvbGxiYXJYQWN0aXZlPSEwLGUucmFpbFhXaWR0aD1lLmNvbnRhaW5lcldpZHRoLWUucmFpbFhNYXJnaW5XaWR0aCxlLnJhaWxYUmF0aW89ZS5jb250YWluZXJXaWR0aC9lLnJhaWxYV2lkdGgsZS5zY3JvbGxiYXJYV2lkdGg9cihlLGwudG9JbnQoZS5yYWlsWFdpZHRoKmUuY29udGFpbmVyV2lkdGgvZS5jb250ZW50V2lkdGgpKSxlLnNjcm9sbGJhclhMZWZ0PWwudG9JbnQoKGUubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50K3Quc2Nyb2xsTGVmdCkqKGUucmFpbFhXaWR0aC1lLnNjcm9sbGJhclhXaWR0aCkvKGUuY29udGVudFdpZHRoLWUuY29udGFpbmVyV2lkdGgpKSk6ZS5zY3JvbGxiYXJYQWN0aXZlPSExLCFlLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSYmZS5jb250YWluZXJIZWlnaHQrZS5zZXR0aW5ncy5zY3JvbGxZTWFyZ2luT2Zmc2V0PGUuY29udGVudEhlaWdodD8oZS5zY3JvbGxiYXJZQWN0aXZlPSEwLGUucmFpbFlIZWlnaHQ9ZS5jb250YWluZXJIZWlnaHQtZS5yYWlsWU1hcmdpbkhlaWdodCxlLnJhaWxZUmF0aW89ZS5jb250YWluZXJIZWlnaHQvZS5yYWlsWUhlaWdodCxlLnNjcm9sbGJhcllIZWlnaHQ9cihlLGwudG9JbnQoZS5yYWlsWUhlaWdodCplLmNvbnRhaW5lckhlaWdodC9lLmNvbnRlbnRIZWlnaHQpKSxlLnNjcm9sbGJhcllUb3A9bC50b0ludCh0LnNjcm9sbFRvcCooZS5yYWlsWUhlaWdodC1lLnNjcm9sbGJhcllIZWlnaHQpLyhlLmNvbnRlbnRIZWlnaHQtZS5jb250YWluZXJIZWlnaHQpKSk6ZS5zY3JvbGxiYXJZQWN0aXZlPSExLGUuc2Nyb2xsYmFyWExlZnQ+PWUucmFpbFhXaWR0aC1lLnNjcm9sbGJhclhXaWR0aCYmKGUuc2Nyb2xsYmFyWExlZnQ9ZS5yYWlsWFdpZHRoLWUuc2Nyb2xsYmFyWFdpZHRoKSxlLnNjcm9sbGJhcllUb3A+PWUucmFpbFlIZWlnaHQtZS5zY3JvbGxiYXJZSGVpZ2h0JiYoZS5zY3JvbGxiYXJZVG9wPWUucmFpbFlIZWlnaHQtZS5zY3JvbGxiYXJZSGVpZ2h0KSxvKHQsZSksZS5zY3JvbGxiYXJYQWN0aXZlP2kuYWRkKHQsXCJwcy1hY3RpdmUteFwiKTooaS5yZW1vdmUodCxcInBzLWFjdGl2ZS14XCIpLGUuc2Nyb2xsYmFyWFdpZHRoPTAsZS5zY3JvbGxiYXJYTGVmdD0wLGModCxcImxlZnRcIiwwKSksZS5zY3JvbGxiYXJZQWN0aXZlP2kuYWRkKHQsXCJwcy1hY3RpdmUteVwiKTooaS5yZW1vdmUodCxcInBzLWFjdGl2ZS15XCIpLGUuc2Nyb2xsYmFyWUhlaWdodD0wLGUuc2Nyb2xsYmFyWVRvcD0wLGModCxcInRvcFwiLDApKX19LHtcIi4uL2xpYi9jbGFzc1wiOjIsXCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9pbnN0YW5jZXNcIjoxOCxcIi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMjA6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcixvLGw9dChcIi4vaW5zdGFuY2VzXCIpLGk9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtyZXR1cm4gZS5pbml0RXZlbnQodCwhMCwhMCksZX07ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgdCl0aHJvd1wiWW91IG11c3QgcHJvdmlkZSBhbiBlbGVtZW50IHRvIHRoZSB1cGRhdGUtc2Nyb2xsIGZ1bmN0aW9uXCI7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUpdGhyb3dcIllvdSBtdXN0IHByb3ZpZGUgYW4gYXhpcyB0byB0aGUgdXBkYXRlLXNjcm9sbCBmdW5jdGlvblwiO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBuKXRocm93XCJZb3UgbXVzdCBwcm92aWRlIGEgdmFsdWUgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb25cIjtcInRvcFwiPT09ZSYmbjw9MCYmKHQuc2Nyb2xsVG9wPW49MCx0LmRpc3BhdGNoRXZlbnQoaShcInBzLXktcmVhY2gtc3RhcnRcIikpKSxcImxlZnRcIj09PWUmJm48PTAmJih0LnNjcm9sbExlZnQ9bj0wLHQuZGlzcGF0Y2hFdmVudChpKFwicHMteC1yZWFjaC1zdGFydFwiKSkpO3ZhciBzPWwuZ2V0KHQpO1widG9wXCI9PT1lJiZuPj1zLmNvbnRlbnRIZWlnaHQtcy5jb250YWluZXJIZWlnaHQmJihuPXMuY29udGVudEhlaWdodC1zLmNvbnRhaW5lckhlaWdodCxuLXQuc2Nyb2xsVG9wPD0xP249dC5zY3JvbGxUb3A6dC5zY3JvbGxUb3A9bix0LmRpc3BhdGNoRXZlbnQoaShcInBzLXktcmVhY2gtZW5kXCIpKSksXCJsZWZ0XCI9PT1lJiZuPj1zLmNvbnRlbnRXaWR0aC1zLmNvbnRhaW5lcldpZHRoJiYobj1zLmNvbnRlbnRXaWR0aC1zLmNvbnRhaW5lcldpZHRoLG4tdC5zY3JvbGxMZWZ0PD0xP249dC5zY3JvbGxMZWZ0OnQuc2Nyb2xsTGVmdD1uLHQuZGlzcGF0Y2hFdmVudChpKFwicHMteC1yZWFjaC1lbmRcIikpKSxyfHwocj10LnNjcm9sbFRvcCksb3x8KG89dC5zY3JvbGxMZWZ0KSxcInRvcFwiPT09ZSYmbjxyJiZ0LmRpc3BhdGNoRXZlbnQoaShcInBzLXNjcm9sbC11cFwiKSksXCJ0b3BcIj09PWUmJm4+ciYmdC5kaXNwYXRjaEV2ZW50KGkoXCJwcy1zY3JvbGwtZG93blwiKSksXCJsZWZ0XCI9PT1lJiZuPG8mJnQuZGlzcGF0Y2hFdmVudChpKFwicHMtc2Nyb2xsLWxlZnRcIikpLFwibGVmdFwiPT09ZSYmbj5vJiZ0LmRpc3BhdGNoRXZlbnQoaShcInBzLXNjcm9sbC1yaWdodFwiKSksXCJ0b3BcIj09PWUmJih0LnNjcm9sbFRvcD1yPW4sdC5kaXNwYXRjaEV2ZW50KGkoXCJwcy1zY3JvbGwteVwiKSkpLFwibGVmdFwiPT09ZSYmKHQuc2Nyb2xsTGVmdD1vPW4sdC5kaXNwYXRjaEV2ZW50KGkoXCJwcy1zY3JvbGwteFwiKSkpfX0se1wiLi9pbnN0YW5jZXNcIjoxOH1dLDIxOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dChcIi4uL2xpYi9oZWxwZXJcIiksbz10KFwiLi4vbGliL2RvbVwiKSxsPXQoXCIuL2luc3RhbmNlc1wiKSxpPXQoXCIuL3VwZGF0ZS1nZW9tZXRyeVwiKSxzPXQoXCIuL3VwZGF0ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPWwuZ2V0KHQpO2UmJihlLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudD1lLmlzTmVnYXRpdmVTY3JvbGw/dC5zY3JvbGxXaWR0aC10LmNsaWVudFdpZHRoOjAsby5jc3MoZS5zY3JvbGxiYXJYUmFpbCxcImRpc3BsYXlcIixcImJsb2NrXCIpLG8uY3NzKGUuc2Nyb2xsYmFyWVJhaWwsXCJkaXNwbGF5XCIsXCJibG9ja1wiKSxlLnJhaWxYTWFyZ2luV2lkdGg9ci50b0ludChvLmNzcyhlLnNjcm9sbGJhclhSYWlsLFwibWFyZ2luTGVmdFwiKSkrci50b0ludChvLmNzcyhlLnNjcm9sbGJhclhSYWlsLFwibWFyZ2luUmlnaHRcIikpLGUucmFpbFlNYXJnaW5IZWlnaHQ9ci50b0ludChvLmNzcyhlLnNjcm9sbGJhcllSYWlsLFwibWFyZ2luVG9wXCIpKStyLnRvSW50KG8uY3NzKGUuc2Nyb2xsYmFyWVJhaWwsXCJtYXJnaW5Cb3R0b21cIikpLG8uY3NzKGUuc2Nyb2xsYmFyWFJhaWwsXCJkaXNwbGF5XCIsXCJub25lXCIpLG8uY3NzKGUuc2Nyb2xsYmFyWVJhaWwsXCJkaXNwbGF5XCIsXCJub25lXCIpLGkodCkscyh0LFwidG9wXCIsdC5zY3JvbGxUb3ApLHModCxcImxlZnRcIix0LnNjcm9sbExlZnQpLG8uY3NzKGUuc2Nyb2xsYmFyWFJhaWwsXCJkaXNwbGF5XCIsXCJcIiksby5jc3MoZS5zY3JvbGxiYXJZUmFpbCxcImRpc3BsYXlcIixcIlwiKSl9fSx7XCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9pbnN0YW5jZXNcIjoxOCxcIi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuL3VwZGF0ZS1zY3JvbGxcIjoyMH1dfSx7fSxbMV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L2pzL3BlcmZlY3Qtc2Nyb2xsYmFyLmpxdWVyeS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNCIsIi8qIVxuICogICAgICAgICAsL1xuICogICAgICAgLCcvXG4gKiAgICAgLCcgL1xuICogICAsJyAgL19fX19fLFxuICogLidfX19fICAgICwnXG4gKiAgICAgIC8gICwnXG4gKiAgICAgLyAsJ1xuICogICAgLywnXG4gKiAgIC8nXG4gKlxuICogU2VsZWN0cmljIM+fIHYxLjExLjEgKEphbiAxMCAyMDE3KSAtIGh0dHA6Ly9sY2RzYW50b3MuZ2l0aHViLmlvL2pRdWVyeS1TZWxlY3RyaWMvXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IExlb25hcmRvIFNhbnRvczsgTUlUIExpY2Vuc2VcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCByb290LCBqUXVlcnkgKSB7XG4gICAgICBpZiAoIGpRdWVyeSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgICByZXR1cm4galF1ZXJ5O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciAkZG9jID0gJChkb2N1bWVudCk7XG4gIHZhciAkd2luID0gJCh3aW5kb3cpO1xuXG4gIHZhciBwbHVnaW5OYW1lID0gJ3NlbGVjdHJpYyc7XG4gIHZhciBjbGFzc0xpc3QgPSAnSW5wdXQgSXRlbXMgT3BlbiBEaXNhYmxlZCBUZW1wU2hvdyBIaWRlU2VsZWN0IFdyYXBwZXIgRm9jdXMgSG92ZXIgUmVzcG9uc2l2ZSBBYm92ZSBTY3JvbGwgR3JvdXAgR3JvdXBMYWJlbCc7XG4gIHZhciBldmVudE5hbWVzcGFjZVN1ZmZpeCA9ICcuc2wnO1xuXG4gIHZhciBjaGFycyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ24nLCAnYycsICd5J107XG4gIHZhciBkaWFjcml0aWNzID0gW1xuICAgIC9bXFx4RTAtXFx4RTVdL2csIC8vIGFcbiAgICAvW1xceEU4LVxceEVCXS9nLCAvLyBlXG4gICAgL1tcXHhFQy1cXHhFRl0vZywgLy8gaVxuICAgIC9bXFx4RjItXFx4RjZdL2csIC8vIG9cbiAgICAvW1xceEY5LVxceEZDXS9nLCAvLyB1XG4gICAgL1tcXHhGMV0vZywgICAgICAvLyBuXG4gICAgL1tcXHhFN10vZywgICAgICAvLyBjXG4gICAgL1tcXHhGRC1cXHhGRl0vZyAgLy8geVxuICBdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgU2VsZWN0cmljXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgLSBUaGUgJmx0O3NlbGVjdCZndDsgZWxlbWVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gIG9wdHMgLSBPcHRpb25zXG4gICAqL1xuICB2YXIgU2VsZWN0cmljID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBfdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG11bHRpcGxlICAgICAgIDogISFfdGhpcy4kZWxlbWVudC5hdHRyKCdtdWx0aXBsZScpLFxuICAgICAgZW5hYmxlZCAgICAgICAgOiBmYWxzZSxcbiAgICAgIG9wZW5lZCAgICAgICAgIDogZmFsc2UsXG4gICAgICBjdXJyVmFsdWUgICAgICA6IC0xLFxuICAgICAgc2VsZWN0ZWRJZHggICAgOiAtMSxcbiAgICAgIGhpZ2hsaWdodGVkSWR4IDogLTFcbiAgICB9O1xuXG4gICAgX3RoaXMuZXZlbnRUcmlnZ2VycyA9IHtcbiAgICAgIG9wZW4gICAgOiBfdGhpcy5vcGVuLFxuICAgICAgY2xvc2UgICA6IF90aGlzLmNsb3NlLFxuICAgICAgZGVzdHJveSA6IF90aGlzLmRlc3Ryb3ksXG4gICAgICByZWZyZXNoIDogX3RoaXMucmVmcmVzaCxcbiAgICAgIGluaXQgICAgOiBfdGhpcy5pbml0XG4gICAgfTtcblxuICAgIF90aGlzLmluaXQob3B0cyk7XG4gIH07XG5cbiAgU2VsZWN0cmljLnByb3RvdHlwZSA9IHtcbiAgICB1dGlsczoge1xuICAgICAgLyoqXG4gICAgICAgKiBEZXRlY3QgbW9iaWxlIGJyb3dzZXJcbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICovXG4gICAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvYW5kcm9pZHxpcChob25lfG9kfGFkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVzY2FwZSBlc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHN0cmluZyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zKVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBlc2NhcGVkXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIFRoZSBzdHJpbmcgd2l0aCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGVzY2FwZWRcbiAgICAgICAqL1xuICAgICAgZXNjYXBlUmVnRXhwOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZSBkaWFjcml0aWNzXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHJlcGxhY2UgdGhlIGRpYWNyaXRpY3NcbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgVGhlIHN0cmluZyB3aXRoIGRpYWNyaXRpY3MgcmVwbGFjZWQgd2l0aCBhc2NpaSBjaGFyYWN0ZXJzXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VEaWFjcml0aWNzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgdmFyIGsgPSBkaWFjcml0aWNzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShkaWFjcml0aWNzW2tdLCBjaGFyc1trXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXQgc3RyaW5nXG4gICAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hdGVzZ29yYWwvOTg0Mzc1XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBmIC0gU3RyaW5nIHRvIGJlIGZvcm1hdGVkXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBTdHJpbmcgZm9ybWF0ZWRcbiAgICAgICAqL1xuICAgICAgZm9ybWF0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgIHZhciBhID0gYXJndW1lbnRzOyAvLyBzdG9yZSBvdXRlciBhcmd1bWVudHNcbiAgICAgICAgcmV0dXJuICgnJyArIGYpIC8vIGZvcmNlIGZvcm1hdCBzcGVjaWZpZXIgdG8gU3RyaW5nXG4gICAgICAgICAgLnJlcGxhY2UoIC8vIHJlcGxhY2UgdG9rZW5zIGluIGZvcm1hdCBzcGVjaWZpZXJcbiAgICAgICAgICAgIC9cXHsoPzooXFxkKyl8KFxcdyspKVxcfS9nLCAvLyBtYXRjaCB7dG9rZW59IHJlZmVyZW5jZXNcbiAgICAgICAgICAgIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzLCAvLyB0aGUgbWF0Y2hlZCBzdHJpbmcgKGlnbm9yZWQpXG4gICAgICAgICAgICAgIGksIC8vIGFuIGFyZ3VtZW50IGluZGV4XG4gICAgICAgICAgICAgIHAgLy8gYSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAgJiYgYVsxXSAvLyBpZiBwcm9wZXJ0eSBuYW1lIGFuZCBmaXJzdCBhcmd1bWVudCBleGlzdFxuICAgICAgICAgICAgICAgID8gYVsxXVtwXSAvLyByZXR1cm4gcHJvcGVydHkgZnJvbSBmaXJzdCBhcmd1bWVudFxuICAgICAgICAgICAgICAgIDogYVtpXTsgLy8gYXNzdW1lIGFyZ3VtZW50IGluZGV4IGFuZCByZXR1cm4gaS10aCBhcmd1bWVudFxuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbmV4dCBlbmFibGVkIGl0ZW0gaW4gdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHNlbGVjdEl0ZW1zIC0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAgICogQHBhcmFtICB7bnVtYmVyfSAgICBzZWxlY3RlZCAtIEluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgIFRoZSBuZXh0IGVuYWJsZWQgaXRlbS5cbiAgICAgICAqL1xuICAgICAgbmV4dEVuYWJsZWRJdGVtOiBmdW5jdGlvbihzZWxlY3RJdGVtcywgc2VsZWN0ZWQpIHtcbiAgICAgICAgd2hpbGUgKCBzZWxlY3RJdGVtc1sgc2VsZWN0ZWQgPSAoc2VsZWN0ZWQgKyAxKSAlIHNlbGVjdEl0ZW1zLmxlbmd0aCBdLmRpc2FibGVkICkge1xuICAgICAgICAgIC8vIGVtcHR5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIHByZXZpb3VzIGVuYWJsZWQgaXRlbSBpbiB0aGUgb3B0aW9ucyBsaXN0LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge29iamVjdH0gc2VsZWN0SXRlbXMgLSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgIHNlbGVjdGVkIC0gSW5kZXggb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgVGhlIHByZXZpb3VzIGVuYWJsZWQgaXRlbS5cbiAgICAgICAqL1xuICAgICAgcHJldmlvdXNFbmFibGVkSXRlbTogZnVuY3Rpb24oc2VsZWN0SXRlbXMsIHNlbGVjdGVkKSB7XG4gICAgICAgIHdoaWxlICggc2VsZWN0SXRlbXNbIHNlbGVjdGVkID0gKHNlbGVjdGVkID4gMCA/IHNlbGVjdGVkIDogc2VsZWN0SXRlbXMubGVuZ3RoKSAtIDEgXS5kaXNhYmxlZCApIHtcbiAgICAgICAgICAvLyBlbXB0eVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtIGNhbWVsQ2FzZSBzdHJpbmcgdG8gZGFzaC1jYXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIC0gVGhlIGNhbWVsQ2FzZWQgc3RyaW5nLlxuICAgICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICBUaGUgc3RyaW5nIHRyYW5zZm9ybWVkIHRvIGRhc2gtY2FzZS5cbiAgICAgICAqL1xuICAgICAgdG9EYXNoOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxscyB0aGUgZXZlbnRzIHJlZ2lzdGVyZWQgd2l0aCBmdW5jdGlvbiBuYW1lLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICBmbiAtIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY29wZSAtIFNjb3BlIHRoYXQgc2hvdWxkIGJlIHNldCBvbiB0aGUgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIHRyaWdnZXJDYWxsYmFjazogZnVuY3Rpb24oZm4sIHNjb3BlKSB7XG4gICAgICAgIHZhciBlbG0gPSBzY29wZS5lbGVtZW50O1xuICAgICAgICB2YXIgZnVuYyA9IHNjb3BlLm9wdGlvbnNbJ29uJyArIGZuXTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbZWxtXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcblxuICAgICAgICBpZiAoICQuaXNGdW5jdGlvbihmdW5jKSApIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGVsbSwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGVsbSkudHJpZ2dlcihwbHVnaW5OYW1lICsgJy0nICsgdGhpcy50b0Rhc2goZm4pLCBhcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtIGFycmF5IGxpc3QgdG8gY29uY2F0ZW5hdGVkIHN0cmluZyBhbmQgcmVtb3ZlIGVtcHR5IHZhbHVlc1xuICAgICAgICogQHBhcmFtICB7YXJyYXl9IGFyciAtIENsYXNzIGxpc3RcbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICBDb25jYXRlbmF0ZWQgc3RyaW5nXG4gICAgICAgKi9cbiAgICAgIGFycmF5VG9DbGFzc25hbWU6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICB2YXIgbmV3QXJyID0gJC5ncmVwKGFyciwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiAhIWl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAkLnRyaW0obmV3QXJyLmpvaW4oJyAnKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKiBJbml0aWFsaXplcyAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFNldCBvcHRpb25zXG4gICAgICBfdGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm5bcGx1Z2luTmFtZV0uZGVmYXVsdHMsIF90aGlzLm9wdGlvbnMsIG9wdHMpO1xuXG4gICAgICBfdGhpcy51dGlscy50cmlnZ2VyQ2FsbGJhY2soJ0JlZm9yZUluaXQnLCBfdGhpcyk7XG5cbiAgICAgIC8vIFByZXNlcnZlIGRhdGFcbiAgICAgIF90aGlzLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgIC8vIERpc2FibGUgb24gbW9iaWxlIGJyb3dzZXJzXG4gICAgICBpZiAoIF90aGlzLm9wdGlvbnMuZGlzYWJsZU9uTW9iaWxlICYmIF90aGlzLnV0aWxzLmlzTW9iaWxlKCkgKSB7XG4gICAgICAgIF90aGlzLmRpc2FibGVPbk1vYmlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGNsYXNzZXNcbiAgICAgIF90aGlzLmNsYXNzZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCk7XG5cbiAgICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgICAgdmFyIGlucHV0ICAgICAgICAgICAgICA9ICQoJzxpbnB1dC8+JywgeyAnY2xhc3MnOiBfdGhpcy5jbGFzc2VzLmlucHV0LCAncmVhZG9ubHknOiBfdGhpcy51dGlscy5pc01vYmlsZSgpIH0pO1xuICAgICAgdmFyIGl0ZW1zICAgICAgICAgICAgICA9ICQoJzxkaXYvPicsICAgeyAnY2xhc3MnOiBfdGhpcy5jbGFzc2VzLml0ZW1zLCAndGFiaW5kZXgnOiAtMSB9KTtcbiAgICAgIHZhciBpdGVtc1Njcm9sbCAgICAgICAgPSAkKCc8ZGl2Lz4nLCAgIHsgJ2NsYXNzJzogX3RoaXMuY2xhc3Nlcy5zY3JvbGwgfSk7XG4gICAgICB2YXIgd3JhcHBlciAgICAgICAgICAgID0gJCgnPGRpdi8+JywgICB7ICdjbGFzcyc6IF90aGlzLmNsYXNzZXMucHJlZml4LCAnaHRtbCc6IF90aGlzLm9wdGlvbnMuYXJyb3dCdXR0b25NYXJrdXAgfSk7XG4gICAgICB2YXIgbGFiZWwgICAgICAgICAgICAgID0gJCgnPHNwYW4vPicsICB7ICdjbGFzcyc6ICdsYWJlbCcgfSk7XG4gICAgICB2YXIgb3V0ZXJXcmFwcGVyICAgICAgID0gX3RoaXMuJGVsZW1lbnQud3JhcCgnPGRpdi8+JykucGFyZW50KCkuYXBwZW5kKHdyYXBwZXIucHJlcGVuZChsYWJlbCksIGl0ZW1zLCBpbnB1dCk7XG4gICAgICB2YXIgaGlkZVNlbGVjdFdyYXBwZXIgID0gJCgnPGRpdi8+JywgICB7ICdjbGFzcyc6IF90aGlzLmNsYXNzZXMuaGlkZXNlbGVjdCB9KTtcblxuICAgICAgX3RoaXMuZWxlbWVudHMgPSB7XG4gICAgICAgIGlucHV0ICAgICAgICA6IGlucHV0LFxuICAgICAgICBpdGVtcyAgICAgICAgOiBpdGVtcyxcbiAgICAgICAgaXRlbXNTY3JvbGwgIDogaXRlbXNTY3JvbGwsXG4gICAgICAgIHdyYXBwZXIgICAgICA6IHdyYXBwZXIsXG4gICAgICAgIGxhYmVsICAgICAgICA6IGxhYmVsLFxuICAgICAgICBvdXRlcldyYXBwZXIgOiBvdXRlcldyYXBwZXJcbiAgICAgIH07XG5cbiAgICAgIGlmICggX3RoaXMub3B0aW9ucy5uYXRpdmVPbk1vYmlsZSAmJiBfdGhpcy51dGlscy5pc01vYmlsZSgpICkge1xuICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaGlkZVNlbGVjdFdyYXBwZXIuYWRkQ2xhc3MoX3RoaXMuY2xhc3Nlcy5wcmVmaXggKyAnLWlzLW5hdGl2ZScpO1xuXG4gICAgICAgIF90aGlzLiRlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAub24oX3RoaXMuZXZlbnRUcmlnZ2VycylcbiAgICAgICAgLndyYXAoaGlkZVNlbGVjdFdyYXBwZXIpO1xuXG4gICAgICBfdGhpcy5vcmlnaW5hbFRhYmluZGV4ID0gX3RoaXMuJGVsZW1lbnQucHJvcCgndGFiaW5kZXgnKTtcbiAgICAgIF90aGlzLiRlbGVtZW50LnByb3AoJ3RhYmluZGV4JywgLTEpO1xuXG4gICAgICBfdGhpcy5wb3B1bGF0ZSgpO1xuICAgICAgX3RoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdJbml0JywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKiogQWN0aXZhdGVzIHRoZSBwbHVnaW4gKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGhpZGRlbkNoaWxkcmVuID0gX3RoaXMuZWxlbWVudHMuaXRlbXMuY2xvc2VzdCgnOnZpc2libGUnKS5jaGlsZHJlbignOmhpZGRlbicpLmFkZENsYXNzKF90aGlzLmNsYXNzZXMudGVtcHNob3cpO1xuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBfdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXG4gICAgICBoaWRkZW5DaGlsZHJlbi5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLnRlbXBzaG93KTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdCZWZvcmVBY3RpdmF0ZScsIF90aGlzKTtcblxuICAgICAgX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLnByb3AoJ2NsYXNzJyxcbiAgICAgICAgX3RoaXMudXRpbHMuYXJyYXlUb0NsYXNzbmFtZShbXG4gICAgICAgICAgX3RoaXMuY2xhc3Nlcy53cmFwcGVyLFxuICAgICAgICAgIF90aGlzLiRlbGVtZW50LnByb3AoJ2NsYXNzJykucmVwbGFjZSgvXFxTKy9nLCBfdGhpcy5jbGFzc2VzLnByZWZpeCArICctJCYnKSxcbiAgICAgICAgICBfdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUgPyBfdGhpcy5jbGFzc2VzLnJlc3BvbnNpdmUgOiAnJ1xuICAgICAgICBdKVxuICAgICAgKTtcblxuICAgICAgaWYgKCBfdGhpcy5vcHRpb25zLmluaGVyaXRPcmlnaW5hbFdpZHRoICYmIG9yaWdpbmFsV2lkdGggPiAwICkge1xuICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIud2lkdGgob3JpZ2luYWxXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICBpZiAoICFfdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcpICkge1xuICAgICAgICBfdGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBOb3QgZGlzYWJsZWQsIHNvLi4uIFJlbW92aW5nIGRpc2FibGVkIGNsYXNzXG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcblxuICAgICAgICAvLyBSZW1vdmUgc3R5bGVzIGZyb20gaXRlbXMgYm94XG4gICAgICAgIC8vIEZpeCBpbmNvcnJlY3QgaGVpZ2h0IHdoZW4gcmVmcmVzaGVkIGlzIHRyaWdnZXJlZCB3aXRoIGZld2VyIG9wdGlvbnNcbiAgICAgICAgX3RoaXMuJGxpID0gX3RoaXMuZWxlbWVudHMuaXRlbXMucmVtb3ZlQXR0cignc3R5bGUnKS5maW5kKCdsaScpO1xuXG4gICAgICAgIF90aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5hZGRDbGFzcyhfdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcblxuICAgICAgICBpZiAoIF90aGlzLmVsZW1lbnRzLmlucHV0ICkge1xuICAgICAgICAgIF90aGlzLmVsZW1lbnRzLmlucHV0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdBY3RpdmF0ZScsIF90aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgY2xhc3NOYW1lcyBmb3IgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gQ2xhc3NlcyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzc05hbWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgY3VzdG9tQ2xhc3MgPSBfdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzO1xuICAgICAgdmFyIGNsYXNzZXNPYmogPSB7fTtcblxuICAgICAgJC5lYWNoKGNsYXNzTGlzdC5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBjdXJyQ2xhc3MpIHtcbiAgICAgICAgdmFyIGMgPSBjdXN0b21DbGFzcy5wcmVmaXggKyBjdXJyQ2xhc3M7XG4gICAgICAgIGNsYXNzZXNPYmpbY3VyckNsYXNzLnRvTG93ZXJDYXNlKCldID0gY3VzdG9tQ2xhc3MuY2FtZWxDYXNlID8gYyA6IF90aGlzLnV0aWxzLnRvRGFzaChjKTtcbiAgICAgIH0pO1xuXG4gICAgICBjbGFzc2VzT2JqLnByZWZpeCA9IGN1c3RvbUNsYXNzLnByZWZpeDtcblxuICAgICAgcmV0dXJuIGNsYXNzZXNPYmo7XG4gICAgfSxcblxuICAgIC8qKiBTZXQgdGhlIGxhYmVsIHRleHQgKi9cbiAgICBzZXRMYWJlbDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGxhYmVsQnVpbGRlciA9IF90aGlzLm9wdGlvbnMubGFiZWxCdWlsZGVyO1xuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlLm11bHRpcGxlICkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgY3VycmVudFZhbHVlcyBpcyBhbiBhcnJheVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9ICQuaXNBcnJheShfdGhpcy5zdGF0ZS5jdXJyVmFsdWUpID8gX3RoaXMuc3RhdGUuY3VyclZhbHVlIDogW190aGlzLnN0YXRlLmN1cnJWYWx1ZV07XG4gICAgICAgIC8vIEknbSBub3QgaGFwcHkgd2l0aCB0aGlzLCBidXQgY3VycmVudFZhbHVlcyBjYW4gYmUgYW4gZW1wdHlcbiAgICAgICAgLy8gYXJyYXkgYW5kIHdlIG5lZWQgdG8gZmFsbGJhY2sgdG8gdGhlIGRlZmF1bHQgb3B0aW9uLlxuICAgICAgICBjdXJyZW50VmFsdWVzID0gY3VycmVudFZhbHVlcy5sZW5ndGggPT09IDAgPyBbMF0gOiBjdXJyZW50VmFsdWVzO1xuXG4gICAgICAgIHZhciBsYWJlbE1hcmt1cCA9ICQubWFwKGN1cnJlbnRWYWx1ZXMsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICQuZ3JlcChfdGhpcy5sb29rdXBJdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaW5kZXggPT09IHZhbHVlO1xuICAgICAgICAgIH0pWzBdOyAvLyB3ZSBkb24ndCB3YW50IG5lc3RlZCBhcnJheXMgaGVyZVxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbE1hcmt1cCA9ICQuZ3JlcChsYWJlbE1hcmt1cCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIC8vIEhpZGUgZGVmYXVsdCAocGxlYXNlIGNob29zZSkgaWYgbW9yZSB0aGVuIG9uZSBlbGVtZW50IHdlcmUgc2VsZWN0ZWQuXG4gICAgICAgICAgLy8gSWYgbm8gb3B0aW9uIHZhbHVlIHdlcmUgZ2l2ZW4gdmFsdWUgaXMgc2V0IHRvIG9wdGlvbiB0ZXh0IGJ5IGRlZmF1bHRcbiAgICAgICAgICBpZiAoIGxhYmVsTWFya3VwLmxlbmd0aCA+IDEgfHwgbGFiZWxNYXJrdXAubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgcmV0dXJuICQudHJpbShpdGVtLnZhbHVlKSAhPT0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbE1hcmt1cCA9ICQubWFwKGxhYmVsTWFya3VwLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICA/IGxhYmVsQnVpbGRlcihpdGVtKVxuICAgICAgICAgICAgOiBfdGhpcy51dGlscy5mb3JtYXQobGFiZWxCdWlsZGVyLCBpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTGltaXQgdGhlIGFtb3VudCBvZiBzZWxlY3RlZCB2YWx1ZXMgc2hvd24gaW4gbGFiZWxcbiAgICAgICAgaWYgKCBfdGhpcy5vcHRpb25zLm11bHRpcGxlLm1heExhYmVsRW50cmllcyApIHtcbiAgICAgICAgICBpZiAoIGxhYmVsTWFya3VwLmxlbmd0aCA+PSBfdGhpcy5vcHRpb25zLm11bHRpcGxlLm1heExhYmVsRW50cmllcyArIDEgKSB7XG4gICAgICAgICAgICBsYWJlbE1hcmt1cCA9IGxhYmVsTWFya3VwLnNsaWNlKDAsIF90aGlzLm9wdGlvbnMubXVsdGlwbGUubWF4TGFiZWxFbnRyaWVzKTtcbiAgICAgICAgICAgIGxhYmVsTWFya3VwLnB1c2goXG4gICAgICAgICAgICAgICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICAgICAgPyBsYWJlbEJ1aWxkZXIoeyB0ZXh0OiAnLi4uJyB9KVxuICAgICAgICAgICAgICAgIDogX3RoaXMudXRpbHMuZm9ybWF0KGxhYmVsQnVpbGRlciwgeyB0ZXh0OiAnLi4uJyB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsTWFya3VwLnNsaWNlKGxhYmVsTWFya3VwLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5lbGVtZW50cy5sYWJlbC5odG1sKGxhYmVsTWFya3VwLmpvaW4oX3RoaXMub3B0aW9ucy5tdWx0aXBsZS5zZXBhcmF0b3IpKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1cnJJdGVtID0gX3RoaXMubG9va3VwSXRlbXNbX3RoaXMuc3RhdGUuY3VyclZhbHVlXTtcblxuICAgICAgICBfdGhpcy5lbGVtZW50cy5sYWJlbC5odG1sKFxuICAgICAgICAgICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICA/IGxhYmVsQnVpbGRlcihjdXJySXRlbSlcbiAgICAgICAgICAgIDogX3RoaXMudXRpbHMuZm9ybWF0KGxhYmVsQnVpbGRlciwgY3Vyckl0ZW0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKiBHZXQgYW5kIHNhdmUgdGhlIGF2YWlsYWJsZSBvcHRpb25zICovXG4gICAgcG9wdWxhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciAkb3B0aW9ucyA9IF90aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG4gICAgICB2YXIgJGp1c3RPcHRpb25zID0gX3RoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJyk7XG4gICAgICB2YXIgJHNlbGVjdGVkID0gJGp1c3RPcHRpb25zLmZpbHRlcignOnNlbGVjdGVkJyk7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9ICRqdXN0T3B0aW9ucy5pbmRleCgkc2VsZWN0ZWQpO1xuICAgICAgdmFyIGN1cnJJbmRleCA9IDA7XG4gICAgICB2YXIgZW1wdHlWYWx1ZSA9IChfdGhpcy5zdGF0ZS5tdWx0aXBsZSA/IFtdIDogMCk7XG5cbiAgICAgIGlmICggJHNlbGVjdGVkLmxlbmd0aCA+IDEgJiYgX3RoaXMuc3RhdGUubXVsdGlwbGUgKSB7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSBbXTtcbiAgICAgICAgJHNlbGVjdGVkLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleC5wdXNoKCQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZS5jdXJyVmFsdWUgPSAofnNlbGVjdGVkSW5kZXggPyBzZWxlY3RlZEluZGV4IDogZW1wdHlWYWx1ZSk7XG4gICAgICBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCA9IF90aGlzLnN0YXRlLmN1cnJWYWx1ZTtcbiAgICAgIF90aGlzLnN0YXRlLmhpZ2hsaWdodGVkSWR4ID0gX3RoaXMuc3RhdGUuY3VyclZhbHVlO1xuICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgIF90aGlzLmxvb2t1cEl0ZW1zID0gW107XG5cbiAgICAgIGlmICggJG9wdGlvbnMubGVuZ3RoICkge1xuICAgICAgICAvLyBCdWlsZCBvcHRpb25zIG1hcmt1cFxuICAgICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICB2YXIgJGVsbSA9ICQodGhpcyk7XG5cbiAgICAgICAgICBpZiAoICRlbG0uaXMoJ29wdGdyb3VwJykgKSB7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zR3JvdXAgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQgICAgICAgOiAkZWxtLFxuICAgICAgICAgICAgICBsYWJlbCAgICAgICAgIDogJGVsbS5wcm9wKCdsYWJlbCcpLFxuICAgICAgICAgICAgICBncm91cERpc2FibGVkIDogJGVsbS5wcm9wKCdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgICBpdGVtcyAgICAgICAgIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRlbG0uY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgdmFyICRlbG0gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgIG9wdGlvbnNHcm91cC5pdGVtc1tpXSA9IF90aGlzLmdldEl0ZW1EYXRhKGN1cnJJbmRleCwgJGVsbSwgb3B0aW9uc0dyb3VwLmdyb3VwRGlzYWJsZWQgfHwgJGVsbS5wcm9wKCdkaXNhYmxlZCcpKTtcblxuICAgICAgICAgICAgICBfdGhpcy5sb29rdXBJdGVtc1tjdXJySW5kZXhdID0gb3B0aW9uc0dyb3VwLml0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgIGN1cnJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLml0ZW1zW2ldID0gb3B0aW9uc0dyb3VwO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgX3RoaXMuaXRlbXNbaV0gPSBfdGhpcy5nZXRJdGVtRGF0YShjdXJySW5kZXgsICRlbG0sICRlbG0ucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICAgICAgICAgIF90aGlzLmxvb2t1cEl0ZW1zW2N1cnJJbmRleF0gPSBfdGhpcy5pdGVtc1tpXTtcblxuICAgICAgICAgICAgY3VyckluZGV4Kys7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmFwcGVuZCggX3RoaXMuZWxlbWVudHMuaXRlbXNTY3JvbGwuaHRtbCggX3RoaXMuZ2V0SXRlbXNNYXJrdXAoX3RoaXMuaXRlbXMpICkgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgaXRlbXMgb2JqZWN0IGRhdGFcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBpbmRleCAgICAgIC0gQ3VycmVudCBpdGVtIGluZGV4XG4gICAgICogQHBhcmFtICB7bm9kZX0gICAgJGVsbSAgICAgICAtIEN1cnJlbnQgZWxlbWVudCBub2RlXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNEaXNhYmxlZCAtIEN1cnJlbnQgZWxlbWVudCBkaXNhYmxlZCBzdGF0ZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICBJdGVtIG9iamVjdFxuICAgICAqL1xuICAgIGdldEl0ZW1EYXRhOiBmdW5jdGlvbihpbmRleCwgJGVsbSwgaXNEaXNhYmxlZCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXG4gICAgICAgIGVsZW1lbnQgICA6ICRlbG0sXG4gICAgICAgIHZhbHVlICAgICA6ICRlbG0udmFsKCksXG4gICAgICAgIGNsYXNzTmFtZSA6ICRlbG0ucHJvcCgnY2xhc3MnKSxcbiAgICAgICAgdGV4dCAgICAgIDogJGVsbS5odG1sKCksXG4gICAgICAgIHNsdWcgICAgICA6ICQudHJpbShfdGhpcy51dGlscy5yZXBsYWNlRGlhY3JpdGljcygkZWxtLmh0bWwoKSkpLFxuICAgICAgICBzZWxlY3RlZCAgOiAkZWxtLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIGRpc2FibGVkICA6IGlzRGlzYWJsZWRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIG9wdGlvbnMgbWFya3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGl0ZW1zIC0gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGF2YWlsYWJsZSBvcHRpb25zXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgIEhUTUwgZm9yIHRoZSBvcHRpb25zIGJveFxuICAgICAqL1xuICAgIGdldEl0ZW1zTWFya3VwOiBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBtYXJrdXAgPSAnPHVsPic7XG5cbiAgICAgIGlmICggJC5pc0Z1bmN0aW9uKF90aGlzLm9wdGlvbnMubGlzdEJ1aWxkZXIpICYmIF90aGlzLm9wdGlvbnMubGlzdEJ1aWxkZXIgKSB7XG4gICAgICAgIGl0ZW1zID0gX3RoaXMub3B0aW9ucy5saXN0QnVpbGRlcihpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24oaSwgZWxtKSB7XG4gICAgICAgIGlmICggZWxtLmxhYmVsICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICBtYXJrdXAgKz0gX3RoaXMudXRpbHMuZm9ybWF0KCc8dWwgY2xhc3M9XCJ7MX1cIj48bGkgY2xhc3M9XCJ7Mn1cIj57M308L2xpPicsXG4gICAgICAgICAgICBfdGhpcy51dGlscy5hcnJheVRvQ2xhc3NuYW1lKFtcbiAgICAgICAgICAgICAgX3RoaXMuY2xhc3Nlcy5ncm91cCxcbiAgICAgICAgICAgICAgZWxtLmdyb3VwRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXG4gICAgICAgICAgICAgIGVsbS5lbGVtZW50LnByb3AoJ2NsYXNzJylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3RoaXMuY2xhc3Nlcy5ncm91cGxhYmVsLFxuICAgICAgICAgICAgZWxtLmVsZW1lbnQucHJvcCgnbGFiZWwnKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkLmVhY2goZWxtLml0ZW1zLCBmdW5jdGlvbihpLCBlbG0pIHtcbiAgICAgICAgICAgIG1hcmt1cCArPSBfdGhpcy5nZXRJdGVtTWFya3VwKGVsbS5pbmRleCwgZWxtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcmt1cCArPSAnPC91bD4nO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBtYXJrdXAgKz0gX3RoaXMuZ2V0SXRlbU1hcmt1cChlbG0uaW5kZXgsIGVsbSk7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXJrdXAgKyAnPC91bD4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBldmVyeSBvcHRpb24gbWFya3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGluZGV4ICAgIC0gSW5kZXggb2YgY3VycmVudCBpdGVtXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBpdGVtRGF0YSAtIEN1cnJlbnQgaXRlbVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICBIVE1MIGZvciB0aGUgb3B0aW9uXG4gICAgICovXG4gICAgZ2V0SXRlbU1hcmt1cDogZnVuY3Rpb24oaW5kZXgsIGl0ZW1EYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1CdWlsZGVyID0gX3RoaXMub3B0aW9ucy5vcHRpb25zSXRlbUJ1aWxkZXI7XG4gICAgICAvLyBsaW1pdCBhY2Nlc3MgdG8gaXRlbSBkYXRhIHRvIHByb3ZpZGUgYSBzaW1wbGUgaW50ZXJmYWNlXG4gICAgICAvLyB0byBtb3N0IHJlbGV2YW50IG9wdGlvbnMuXG4gICAgICB2YXIgZmlsdGVyZWRJdGVtRGF0YSA9IHtcbiAgICAgICAgdmFsdWU6IGl0ZW1EYXRhLnZhbHVlLFxuICAgICAgICB0ZXh0IDogaXRlbURhdGEudGV4dCxcbiAgICAgICAgc2x1ZyA6IGl0ZW1EYXRhLnNsdWcsXG4gICAgICAgIGluZGV4OiBpdGVtRGF0YS5pbmRleFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzLnV0aWxzLmZvcm1hdCgnPGxpIGRhdGEtaW5kZXg9XCJ7MX1cIiBjbGFzcz1cInsyfVwiPnszfTwvbGk+JyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIF90aGlzLnV0aWxzLmFycmF5VG9DbGFzc25hbWUoW1xuICAgICAgICAgIGl0ZW1EYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgICBpbmRleCA9PT0gX3RoaXMuaXRlbXMubGVuZ3RoIC0gMSAgPyAnbGFzdCcgICAgIDogJycsXG4gICAgICAgICAgaXRlbURhdGEuZGlzYWJsZWQgICAgICAgICAgICAgICAgID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgICAgIGl0ZW1EYXRhLnNlbGVjdGVkICAgICAgICAgICAgICAgICA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICBdKSxcbiAgICAgICAgJC5pc0Z1bmN0aW9uKGl0ZW1CdWlsZGVyKVxuICAgICAgICAgID8gX3RoaXMudXRpbHMuZm9ybWF0KGl0ZW1CdWlsZGVyKGl0ZW1EYXRhKSwgaXRlbURhdGEpXG4gICAgICAgICAgOiBfdGhpcy51dGlscy5mb3JtYXQoaXRlbUJ1aWxkZXIsIGZpbHRlcmVkSXRlbURhdGEpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvKiogUmVtb3ZlIGV2ZW50cyBvbiB0aGUgZWxlbWVudHMgKi9cbiAgICB1bmJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgX3RoaXMuZWxlbWVudHMud3JhcHBlclxuICAgICAgICAuYWRkKF90aGlzLiRlbGVtZW50KVxuICAgICAgICAuYWRkKF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlcilcbiAgICAgICAgLmFkZChfdGhpcy5lbGVtZW50cy5pbnB1dClcbiAgICAgICAgLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCk7XG4gICAgfSxcblxuICAgIC8qKiBCaW5kIGV2ZW50cyBvbiB0aGUgZWxlbWVudHMgKi9cbiAgICBiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5vbignbW91c2VlbnRlcicgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCArICcgbW91c2VsZWF2ZScgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKF90aGlzLmNsYXNzZXMuaG92ZXIsIGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKTtcblxuICAgICAgICAvLyBEZWxheSBjbG9zZSBlZmZlY3Qgd2hlbiBvcGVuT25Ib3ZlciBpcyB0cnVlXG4gICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5vcGVuT25Ib3ZlciApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG5cbiAgICAgICAgICBpZiAoIGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnICkge1xuICAgICAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoJC5wcm94eShfdGhpcy5jbG9zZSwgX3RoaXMpLCBfdGhpcy5vcHRpb25zLmhvdmVySW50ZW50VGltZW91dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgb3Blbi9jbG9zZVxuICAgICAgX3RoaXMuZWxlbWVudHMud3JhcHBlci5vbignY2xpY2snICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgX3RoaXMuc3RhdGUub3BlbmVkID8gX3RoaXMuY2xvc2UoKSA6IF90aGlzLm9wZW4oZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVHJhbnNsYXRlIG9yaWdpbmFsIGVsZW1lbnQgZm9jdXMgZXZlbnQgdG8gZHVtbXkgaW5wdXQuXG4gICAgICAvLyBEaXNhYmxlZCBvbiBtb2JpbGUgZGV2aWNlcyBiZWNhdXNlIHRoZSBkZWZhdWx0IG9wdGlvbiBsaXN0IGlzbid0XG4gICAgICAvLyBzaG93biBkdWUgdGhlIGZhY3QgdGhhdCBoaWRkZW4gaW5wdXQgZ2V0cyBmb2N1c2VkXG4gICAgICBpZiAoICEoX3RoaXMub3B0aW9ucy5uYXRpdmVPbk1vYmlsZSAmJiBfdGhpcy51dGlscy5pc01vYmlsZSgpKSApIHtcbiAgICAgICAgX3RoaXMuJGVsZW1lbnQub24oJ2ZvY3VzJyArIGV2ZW50TmFtZXNwYWNlU3VmZml4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dFxuICAgICAgICAgIC5wcm9wKHsgdGFiaW5kZXg6IF90aGlzLm9yaWdpbmFsVGFiaW5kZXgsIGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICAgIC5vbigna2V5ZG93bicgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgJC5wcm94eShfdGhpcy5oYW5kbGVLZXlzLCBfdGhpcykpXG4gICAgICAgICAgLm9uKCdmb2N1c2luJyArIGV2ZW50TmFtZXNwYWNlU3VmZml4LCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIuYWRkQ2xhc3MoX3RoaXMuY2xhc3Nlcy5mb2N1cyk7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGZsaWNrZXIgd2hlbiBmb2N1c2luZyBvdXQgYW5kIGJhY2sgYWdhaW4gaW4gdGhlIGJyb3dzZXIgd2luZG93XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC5vbmUoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudHMuaW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5vcGVuT25Gb2N1cyAmJiAhX3RoaXMuc3RhdGUub3BlbmVkICkge1xuICAgICAgICAgICAgICBfdGhpcy5vcGVuKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKCdmb2N1c291dCcgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIucmVtb3ZlQ2xhc3MoX3RoaXMuY2xhc3Nlcy5mb2N1cyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oJ2lucHV0IHByb3BlcnR5Y2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gX3RoaXMuZWxlbWVudHMuaW5wdXQudmFsKCk7XG4gICAgICAgICAgICB2YXIgc2VhcmNoUmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBfdGhpcy51dGlscy5lc2NhcGVSZWdFeHAodmFsKSwgJ2knKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgc2VhcmNoXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMucmVzZXRTdHIpO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTdHIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5rZXlTZWFyY2hUaW1lb3V0KTtcblxuICAgICAgICAgICAgaWYgKCB2YWwubGVuZ3RoICkge1xuICAgICAgICAgICAgICAvLyBTZWFyY2ggaW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgICAgICAgJC5lYWNoKF90aGlzLml0ZW1zLCBmdW5jdGlvbihpLCBlbG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoICFlbG0uZGlzYWJsZWQgJiYgc2VhcmNoUmVnRXhwLnRlc3QoZWxtLnRleHQpIHx8IHNlYXJjaFJlZ0V4cC50ZXN0KGVsbS5zbHVnKSApIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmhpZ2hsaWdodChpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kbGkub24oe1xuICAgICAgICAvLyBQcmV2ZW50IDxpbnB1dD4gYmx1ciBvbiBDaHJvbWVcbiAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5zZWxlY3QoJCh0aGlzKS5kYXRhKCdpbmRleCcpKTtcblxuICAgICAgICAgIC8vIENocm9tZSBkb2Vzbid0IGNsb3NlIG9wdGlvbnMgYm94IGlmIHNlbGVjdCBpcyB3cmFwcGVkIHdpdGggYSBsYWJlbFxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gJ3JldHVybiBmYWxzZScgdG8gYXZvaWQgdGhhdFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJlaGF2aW9yIHdoZW4ga2V5Ym9hcmQga2V5cyBpcyBwcmVzc2VkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIGhhbmRsZUtleXM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIga2V5ID0gZS53aGljaDtcbiAgICAgIHZhciBrZXlzID0gX3RoaXMub3B0aW9ucy5rZXlzO1xuXG4gICAgICB2YXIgaXNQcmV2S2V5ID0gJC5pbkFycmF5KGtleSwga2V5cy5wcmV2aW91cykgPiAtMTtcbiAgICAgIHZhciBpc05leHRLZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLm5leHQpID4gLTE7XG4gICAgICB2YXIgaXNTZWxlY3RLZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLnNlbGVjdCkgPiAtMTtcbiAgICAgIHZhciBpc09wZW5LZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLm9wZW4pID4gLTE7XG4gICAgICB2YXIgaWR4ID0gX3RoaXMuc3RhdGUuaGlnaGxpZ2h0ZWRJZHg7XG4gICAgICB2YXIgaXNGaXJzdE9yTGFzdEl0ZW0gPSAoaXNQcmV2S2V5ICYmIGlkeCA9PT0gMCkgfHwgKGlzTmV4dEtleSAmJiAoaWR4ICsgMSkgPT09IF90aGlzLml0ZW1zLmxlbmd0aCk7XG4gICAgICB2YXIgZ29Ub0l0ZW0gPSAwO1xuXG4gICAgICAvLyBFbnRlciAvIFNwYWNlXG4gICAgICBpZiAoIGtleSA9PT0gMTMgfHwga2V5ID09PSAzMiApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgZGlyZWN0aW9uYWwga2V5XG4gICAgICBpZiAoIGlzUHJldktleSB8fCBpc05leHRLZXkgKSB7XG4gICAgICAgIGlmICggIV90aGlzLm9wdGlvbnMuYWxsb3dXcmFwICYmIGlzRmlyc3RPckxhc3RJdGVtICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggaXNQcmV2S2V5ICkge1xuICAgICAgICAgIGdvVG9JdGVtID0gX3RoaXMudXRpbHMucHJldmlvdXNFbmFibGVkSXRlbShfdGhpcy5sb29rdXBJdGVtcywgaWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggaXNOZXh0S2V5ICkge1xuICAgICAgICAgIGdvVG9JdGVtID0gX3RoaXMudXRpbHMubmV4dEVuYWJsZWRJdGVtKF90aGlzLmxvb2t1cEl0ZW1zLCBpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuaGlnaGxpZ2h0KGdvVG9JdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGFiIC8gRW50ZXIgLyBFU0NcbiAgICAgIGlmICggaXNTZWxlY3RLZXkgJiYgX3RoaXMuc3RhdGUub3BlbmVkICkge1xuICAgICAgICBfdGhpcy5zZWxlY3QoaWR4KTtcblxuICAgICAgICBpZiAoICFfdGhpcy5zdGF0ZS5tdWx0aXBsZSB8fCAhX3RoaXMub3B0aW9ucy5tdWx0aXBsZS5rZWVwTWVudU9wZW4gKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3BhY2UgLyBFbnRlciAvIExlZnQgLyBVcCAvIFJpZ2h0IC8gRG93blxuICAgICAgaWYgKCBpc09wZW5LZXkgJiYgIV90aGlzLnN0YXRlLm9wZW5lZCApIHtcbiAgICAgICAgX3RoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiogVXBkYXRlIHRoZSBpdGVtcyBvYmplY3QgKi9cbiAgICByZWZyZXNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLnBvcHVsYXRlKCk7XG4gICAgICBfdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdSZWZyZXNoJywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKiogU2V0IG9wdGlvbnMgYm94IHdpZHRoL2hlaWdodCAqL1xuICAgIHNldE9wdGlvbnNEaW1lbnNpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBvcHRpb25zIGJveCBoZWlnaHRcbiAgICAgIC8vIFNldCBhIHRlbXBvcmFyeSBjbGFzcyBvbiB0aGUgaGlkZGVuIHBhcmVudCBvZiB0aGUgZWxlbWVudFxuICAgICAgdmFyIGhpZGRlbkNoaWxkcmVuID0gX3RoaXMuZWxlbWVudHMuaXRlbXMuY2xvc2VzdCgnOnZpc2libGUnKS5jaGlsZHJlbignOmhpZGRlbicpLmFkZENsYXNzKF90aGlzLmNsYXNzZXMudGVtcHNob3cpO1xuICAgICAgdmFyIG1heEhlaWdodCA9IF90aGlzLm9wdGlvbnMubWF4SGVpZ2h0O1xuICAgICAgdmFyIGl0ZW1zV2lkdGggPSBfdGhpcy5lbGVtZW50cy5pdGVtcy5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgd3JhcHBlcldpZHRoID0gX3RoaXMuZWxlbWVudHMud3JhcHBlci5vdXRlcldpZHRoKCkgLSAoaXRlbXNXaWR0aCAtIF90aGlzLmVsZW1lbnRzLml0ZW1zLndpZHRoKCkpO1xuXG4gICAgICAvLyBTZXQgdGhlIGRpbWVuc2lvbnMsIG1pbmltdW0gaXMgd3JhcHBlciB3aWR0aCwgZXhwYW5kIGZvciBsb25nIGl0ZW1zIGlmIG9wdGlvbiBpcyB0cnVlXG4gICAgICBpZiAoICFfdGhpcy5vcHRpb25zLmV4cGFuZFRvSXRlbVRleHQgfHwgd3JhcHBlcldpZHRoID4gaXRlbXNXaWR0aCApIHtcbiAgICAgICAgX3RoaXMuZmluYWxXaWR0aCA9IHdyYXBwZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc2Nyb2xsYmFyIHdpZHRoIGlzIGluY2x1ZGVkXG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmNzcygnb3ZlcmZsb3cnLCAnc2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gU2V0IGEgcmVhbGx5IGxvbmcgd2lkdGggZm9yIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlclxuICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIud2lkdGgoOWU0KTtcbiAgICAgICAgX3RoaXMuZmluYWxXaWR0aCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zLndpZHRoKCk7XG4gICAgICAgIC8vIFNldCBzY3JvbGwgYmFyIHRvIGF1dG9cbiAgICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXMuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLndpZHRoKCcnKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXMud2lkdGgoX3RoaXMuZmluYWxXaWR0aCkuaGVpZ2h0KCkgPiBtYXhIZWlnaHQgJiYgX3RoaXMuZWxlbWVudHMuaXRlbXMuaGVpZ2h0KG1heEhlaWdodCk7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgdGVtcG9yYXJ5IGNsYXNzXG4gICAgICBoaWRkZW5DaGlsZHJlbi5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLnRlbXBzaG93KTtcbiAgICB9LFxuXG4gICAgLyoqIERldGVjdCBpZiB0aGUgb3B0aW9ucyBib3ggaXMgaW5zaWRlIHRoZSB3aW5kb3cgKi9cbiAgICBpc0luVmlld3BvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBzY3JvbGxUb3AgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHdpbkhlaWdodCA9ICR3aW4uaGVpZ2h0KCk7XG4gICAgICB2YXIgdWlQb3NYID0gX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB1aUhlaWdodCA9IF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5vdXRlckhlaWdodCgpO1xuXG4gICAgICB2YXIgZml0c0Rvd24gPSAodWlQb3NYICsgdWlIZWlnaHQgKyBfdGhpcy5pdGVtc0hlaWdodCkgPD0gKHNjcm9sbFRvcCArIHdpbkhlaWdodCk7XG4gICAgICB2YXIgZml0c0Fib3ZlID0gKHVpUG9zWCAtIF90aGlzLml0ZW1zSGVpZ2h0KSA+IHNjcm9sbFRvcDtcblxuICAgICAgLy8gSWYgaXQgZG9lcyBub3QgZml0IGJlbG93LCBvbmx5IHJlbmRlciBpdFxuICAgICAgLy8gYWJvdmUgaXQgZml0J3MgdGhlcmUuXG4gICAgICAvLyBJdCdzIGFjY2VwdGFibGUgdGhhdCB0aGUgdXNlciBuZWVkcyB0b1xuICAgICAgLy8gc2Nyb2xsIHRoZSB2aWV3cG9ydCB0byBzZWUgdGhlIGN1dCBvZmYgVUlcbiAgICAgIHZhciByZW5kZXJBYm92ZSA9ICFmaXRzRG93biAmJiBmaXRzQWJvdmU7XG5cbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci50b2dnbGVDbGFzcyhfdGhpcy5jbGFzc2VzLmFib3ZlLCByZW5kZXJBYm92ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIGlzIHZpc2libGUgYW5kIHNjcm9sbCB0aGUgb3B0aW9ucyBib3ggdG8gc2hvdyBpdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IGluZGV4IC0gSW5kZXggb2YgdGhlIHNlbGVjdGVkIGl0ZW1zXG4gICAgICovXG4gICAgZGV0ZWN0SXRlbVZpc2liaWxpdHk6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyICRmaWx0ZXJlZExpID0gX3RoaXMuJGxpLmZpbHRlcignW2RhdGEtaW5kZXhdJyk7XG5cbiAgICAgIGlmICggX3RoaXMuc3RhdGUubXVsdGlwbGUgKSB7XG4gICAgICAgIC8vIElmIGluZGV4IGlzIGFuIGFycmF5LCB3ZSBjYW4gYXNzdW1lIGEgbXVsdGlwbGUgc2VsZWN0IGFuZCB3ZVxuICAgICAgICAvLyB3YW50IHRvIHNjcm9sbCB0byB0aGUgdXBwZXJtb3N0IHNlbGVjdGVkIGl0ZW0hXG4gICAgICAgIC8vIE1hdGgubWluLmFwcGx5KE1hdGgsIGluZGV4KSByZXR1cm5zIHRoZSBsb3dlc3QgZW50cnkgaW4gYW4gQXJyYXkuXG4gICAgICAgIGluZGV4ID0gKCQuaXNBcnJheShpbmRleCkgJiYgaW5kZXgubGVuZ3RoID09PSAwKSA/IDAgOiBpbmRleDtcbiAgICAgICAgaW5kZXggPSAkLmlzQXJyYXkoaW5kZXgpID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgaW5kZXgpIDogaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBsaUhlaWdodCA9ICRmaWx0ZXJlZExpLmVxKGluZGV4KS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIGxpVG9wID0gJGZpbHRlcmVkTGlbaW5kZXhdLm9mZnNldFRvcDtcbiAgICAgIHZhciBpdGVtc1Njcm9sbFRvcCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zU2Nyb2xsLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHNjcm9sbFQgPSBsaVRvcCArIGxpSGVpZ2h0ICogMjtcblxuICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXNTY3JvbGwuc2Nyb2xsVG9wKFxuICAgICAgICBzY3JvbGxUID4gaXRlbXNTY3JvbGxUb3AgKyBfdGhpcy5pdGVtc0hlaWdodCA/IHNjcm9sbFQgLSBfdGhpcy5pdGVtc0hlaWdodCA6XG4gICAgICAgICAgbGlUb3AgLSBsaUhlaWdodCA8IGl0ZW1zU2Nyb2xsVG9wID8gbGlUb3AgLSBsaUhlaWdodCA6XG4gICAgICAgICAgICBpdGVtc1Njcm9sbFRvcFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgc2VsZWN0IG9wdGlvbnMgYm94XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRXZlbnRcbiAgICAgKi9cbiAgICBvcGVuOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIF90aGlzLm9wdGlvbnMubmF0aXZlT25Nb2JpbGUgJiYgX3RoaXMudXRpbHMuaXNNb2JpbGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlT3BlbicsIF90aGlzKTtcblxuICAgICAgaWYgKCBlICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBfdGhpcy5zdGF0ZS5lbmFibGVkICkge1xuICAgICAgICBfdGhpcy5zZXRPcHRpb25zRGltZW5zaW9ucygpO1xuXG4gICAgICAgIC8vIEZpbmQgYW55IG90aGVyIG9wZW5lZCBpbnN0YW5jZXMgb2Ygc2VsZWN0IGFuZCBjbG9zZSBpdFxuICAgICAgICAkKCcuJyArIF90aGlzLmNsYXNzZXMuaGlkZXNlbGVjdCwgJy4nICsgX3RoaXMuY2xhc3Nlcy5vcGVuKS5jaGlsZHJlbigpW3BsdWdpbk5hbWVdKCdjbG9zZScpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIF90aGlzLml0ZW1zSGVpZ2h0ID0gX3RoaXMuZWxlbWVudHMuaXRlbXMub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgX3RoaXMuaXRlbXNJbm5lckhlaWdodCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zLmhlaWdodCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBvcHRpb25zIGJveCB2aXNpYmlsaXR5XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5hZGRDbGFzcyhfdGhpcy5jbGFzc2VzLm9wZW4pO1xuXG4gICAgICAgIC8vIEdpdmUgZHVtbXkgaW5wdXQgZm9jdXNcbiAgICAgICAgX3RoaXMuZWxlbWVudHMuaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaWYgKCBlICYmIGUudHlwZSAhPT0gJ2ZvY3VzaW4nICkge1xuICAgICAgICAgIF90aGlzLmVsZW1lbnRzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxheWVkIGJpbmRzIGV2ZW50cyBvbiBEb2N1bWVudCB0byBtYWtlIGxhYmVsIGNsaWNrcyB3b3JrXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGRvY1xuICAgICAgICAgICAgLm9uKCdjbGljaycgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgJC5wcm94eShfdGhpcy5jbG9zZSwgX3RoaXMpKVxuICAgICAgICAgICAgLm9uKCdzY3JvbGwnICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsICQucHJveHkoX3RoaXMuaXNJblZpZXdwb3J0LCBfdGhpcykpO1xuICAgICAgICB9LCAxKTtcblxuICAgICAgICBfdGhpcy5pc0luVmlld3BvcnQoKTtcblxuICAgICAgICAvLyBQcmV2ZW50IHdpbmRvdyBzY3JvbGwgd2hlbiB1c2luZyBtb3VzZSB3aGVlbCBpbnNpZGUgaXRlbXMgYm94XG4gICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5wcmV2ZW50V2luZG93U2Nyb2xsICkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgJGRvYy5vbignbW91c2V3aGVlbCcgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCArICcgRE9NTW91c2VTY3JvbGwnICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsICcuJyArIF90aGlzLmNsYXNzZXMuc2Nyb2xsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgb3JnRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgICAgICAgICBpZiAoICdkZXRhaWwnICAgICAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LmRldGFpbCAqIC0xOyB9XG4gICAgICAgICAgICBpZiAoICd3aGVlbERlbHRhJyAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGE7ICB9XG4gICAgICAgICAgICBpZiAoICd3aGVlbERlbHRhWScgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGFZOyB9XG4gICAgICAgICAgICBpZiAoICdkZWx0YVknICAgICAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LmRlbHRhWSAqIC0xOyB9XG5cbiAgICAgICAgICAgIGlmICggc2Nyb2xsVG9wID09PSAodGhpcy5zY3JvbGxIZWlnaHQgLSBfdGhpcy5pdGVtc0lubmVySGVpZ2h0KSAmJiBkZWx0YVkgPCAwIHx8IHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwICkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5kZXRlY3RJdGVtVmlzaWJpbGl0eShfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG5cbiAgICAgICAgX3RoaXMuaGlnaGxpZ2h0KF90aGlzLnN0YXRlLm11bHRpcGxlID8gLTEgOiBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdPcGVuJywgX3RoaXMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiogQ2xvc2UgdGhlIHNlbGVjdCBvcHRpb25zIGJveCAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlQ2xvc2UnLCBfdGhpcyk7XG5cbiAgICAgIC8vIFJlbW92ZSBjdXN0b20gZXZlbnRzIG9uIGRvY3VtZW50XG4gICAgICAkZG9jLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCk7XG5cbiAgICAgIC8vIFJlbW92ZSB2aXNpYmxlIGNsYXNzIHRvIGhpZGUgb3B0aW9ucyBib3hcbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLm9wZW4pO1xuXG4gICAgICBfdGhpcy5zdGF0ZS5vcGVuZWQgPSBmYWxzZTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDbG9zZScsIF90aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqIFNlbGVjdCBjdXJyZW50IG9wdGlvbiBhbmQgY2hhbmdlIHRoZSBsYWJlbCAqL1xuICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBfdGhpcy51dGlscy50cmlnZ2VyQ2FsbGJhY2soJ0JlZm9yZUNoYW5nZScsIF90aGlzKTtcblxuICAgICAgaWYgKCBfdGhpcy5zdGF0ZS5tdWx0aXBsZSApIHtcbiAgICAgICAgLy8gUmVzZXQgb2xkIHNlbGVjdGVkXG4gICAgICAgICQuZWFjaChfdGhpcy5sb29rdXBJdGVtcywgZnVuY3Rpb24oaWR4KSB7XG4gICAgICAgICAgX3RoaXMubG9va3VwSXRlbXNbaWR4XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgbmV3IHNlbGVjdGVkXG4gICAgICAgICQuZWFjaChfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCwgZnVuY3Rpb24oaWR4LCB2YWx1ZSkge1xuICAgICAgICAgIF90aGlzLmxvb2t1cEl0ZW1zW3ZhbHVlXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZXEodmFsdWUpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLmN1cnJWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4O1xuXG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDaGFuZ2UnLCBfdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKCBfdGhpcy5zdGF0ZS5jdXJyVmFsdWUgIT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4ICkge1xuICAgICAgICAvLyBBcHBseSBjaGFuZ2VkIHZhbHVlIHRvIG9yaWdpbmFsIHNlbGVjdFxuICAgICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAgIC5wcm9wKCdzZWxlY3RlZEluZGV4JywgX3RoaXMuc3RhdGUuY3VyclZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHgpXG4gICAgICAgICAgLmRhdGEoJ3ZhbHVlJywgX3RoaXMubG9va3VwSXRlbXNbX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHhdLnRleHQpO1xuXG4gICAgICAgIC8vIENoYW5nZSBsYWJlbCB0ZXh0XG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDaGFuZ2UnLCBfdGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCBvcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBvZiB0aGUgb3B0aW9ucyB0aGF0IHdpbGwgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgKi9cbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyICRmaWx0ZXJlZExpID0gX3RoaXMuJGxpLmZpbHRlcignW2RhdGEtaW5kZXhdJykucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodGVkJyk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlSGlnaGxpZ2h0JywgX3RoaXMpO1xuXG4gICAgICAvLyBQYXJhbWV0ZXIgaW5kZXggaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBub3QgYmUgYSBkaXNhYmxlZCBpdGVtXG4gICAgICBpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IC0xIHx8IF90aGlzLmxvb2t1cEl0ZW1zW2luZGV4XS5kaXNhYmxlZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkZmlsdGVyZWRMaVxuICAgICAgICAuZXEoX3RoaXMuc3RhdGUuaGlnaGxpZ2h0ZWRJZHggPSBpbmRleClcbiAgICAgICAgLmFkZENsYXNzKCdoaWdobGlnaHRlZCcpO1xuXG4gICAgICBfdGhpcy5kZXRlY3RJdGVtVmlzaWJpbGl0eShpbmRleCk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnSGlnaGxpZ2h0JywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3Qgb3B0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBvZiB0aGUgb3B0aW9uIHRoYXQgd2lsbCBiZSBzZWxlY3RlZFxuICAgICAqL1xuICAgIHNlbGVjdDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgJGZpbHRlcmVkTGkgPSBfdGhpcy4kbGkuZmlsdGVyKCdbZGF0YS1pbmRleF0nKTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdCZWZvcmVTZWxlY3QnLCBfdGhpcywgaW5kZXgpO1xuXG4gICAgICAvLyBQYXJhbWV0ZXIgaW5kZXggaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBub3QgYmUgYSBkaXNhYmxlZCBpdGVtXG4gICAgICBpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IC0xIHx8IF90aGlzLmxvb2t1cEl0ZW1zW2luZGV4XS5kaXNhYmxlZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlLm11bHRpcGxlICkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgc2VsZWN0ZWRJZHggaXMgYW4gYXJyYXlcbiAgICAgICAgX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggPSAkLmlzQXJyYXkoX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHgpID8gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggOiBbX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHhdO1xuXG4gICAgICAgIHZhciBoYXNTZWxlY3RlZEluZGV4ID0gJC5pbkFycmF5KGluZGV4LCBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG4gICAgICAgIGlmICggaGFzU2VsZWN0ZWRJbmRleCAhPT0gLTEgKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHguc3BsaWNlKGhhc1NlbGVjdGVkSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4LnB1c2goaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGZpbHRlcmVkTGlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gJC5pbkFycmF5KGluZGV4LCBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCkgIT09IC0xO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGZpbHRlcmVkTGlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcbiAgICAgICAgICAuZXEoX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggPSBpbmRleClcbiAgICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIV90aGlzLnN0YXRlLm11bHRpcGxlIHx8ICFfdGhpcy5vcHRpb25zLm11bHRpcGxlLmtlZXBNZW51T3BlbiApIHtcbiAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2hhbmdlKCk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnU2VsZWN0JywgX3RoaXMsIGluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kIGFuZCByZW1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlc2VydmVEYXRhIC0gQ2hlY2sgaWYgdGhlIGRhdGEgb24gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQgdG9vXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24ocHJlc2VydmVEYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlICYmIF90aGlzLnN0YXRlLmVuYWJsZWQgKSB7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmFkZChfdGhpcy5lbGVtZW50cy53cmFwcGVyKS5hZGQoX3RoaXMuZWxlbWVudHMuaW5wdXQpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmICggIXByZXNlcnZlRGF0YSApIHtcbiAgICAgICAgICBfdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKHBsdWdpbk5hbWUpLnJlbW92ZURhdGEoJ3ZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy4kZWxlbWVudC5wcm9wKCd0YWJpbmRleCcsIF90aGlzLm9yaWdpbmFsVGFiaW5kZXgpLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCkub2ZmKF90aGlzLmV2ZW50VHJpZ2dlcnMpLnVud3JhcCgpLnVud3JhcCgpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQSByZWFsbHkgbGlnaHR3ZWlnaHQgcGx1Z2luIHdyYXBwZXIgYXJvdW5kIHRoZSBjb25zdHJ1Y3RvcixcbiAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zXG4gICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUpO1xuXG4gICAgICBpZiAoIGRhdGEgJiYgIWRhdGEuZGlzYWJsZU9uTW9iaWxlICkge1xuICAgICAgICAodHlwZW9mIGFyZ3MgPT09ICdzdHJpbmcnICYmIGRhdGFbYXJnc10pID8gZGF0YVthcmdzXSgpIDogZGF0YS5pbml0KGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUsIG5ldyBTZWxlY3RyaWModGhpcywgYXJncykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHBsdWdpbiBvcHRpb25zXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICAkLmZuW3BsdWdpbk5hbWVdLmRlZmF1bHRzID0ge1xuICAgIG9uQ2hhbmdlICAgICAgICAgICAgIDogZnVuY3Rpb24oZWxtKSB7ICQoZWxtKS5jaGFuZ2UoKTsgfSxcbiAgICBtYXhIZWlnaHQgICAgICAgICAgICA6IDMwMCxcbiAgICBrZXlTZWFyY2hUaW1lb3V0ICAgICA6IDUwMCxcbiAgICBhcnJvd0J1dHRvbk1hcmt1cCAgICA6ICc8YiBjbGFzcz1cImJ1dHRvblwiPiYjeDI1YmU7PC9iPicsXG4gICAgZGlzYWJsZU9uTW9iaWxlICAgICAgOiBmYWxzZSxcbiAgICBuYXRpdmVPbk1vYmlsZSAgICAgICA6IHRydWUsXG4gICAgb3Blbk9uRm9jdXMgICAgICAgICAgOiB0cnVlLFxuICAgIG9wZW5PbkhvdmVyICAgICAgICAgIDogZmFsc2UsXG4gICAgaG92ZXJJbnRlbnRUaW1lb3V0ICAgOiA1MDAsXG4gICAgZXhwYW5kVG9JdGVtVGV4dCAgICAgOiBmYWxzZSxcbiAgICByZXNwb25zaXZlICAgICAgICAgICA6IGZhbHNlLFxuICAgIHByZXZlbnRXaW5kb3dTY3JvbGwgIDogdHJ1ZSxcbiAgICBpbmhlcml0T3JpZ2luYWxXaWR0aCA6IGZhbHNlLFxuICAgIGFsbG93V3JhcCAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBzdG9wUHJvcGFnYXRpb24gICAgICA6IHRydWUsXG4gICAgb3B0aW9uc0l0ZW1CdWlsZGVyICAgOiAne3RleHR9JywgLy8gZnVuY3Rpb24oaXRlbURhdGEsIGVsZW1lbnQsIGluZGV4KVxuICAgIGxhYmVsQnVpbGRlciAgICAgICAgIDogJ3t0ZXh0fScsIC8vIGZ1bmN0aW9uKGN1cnJJdGVtKVxuICAgIGxpc3RCdWlsZGVyICAgICAgICAgIDogZmFsc2UsICAgIC8vIGZ1bmN0aW9uKGl0ZW1zKVxuICAgIGtleXMgICAgICAgICAgICAgICAgIDoge1xuICAgICAgcHJldmlvdXMgOiBbMzcsIDM4XSwgICAgICAgICAgICAgICAgIC8vIExlZnQgLyBVcFxuICAgICAgbmV4dCAgICAgOiBbMzksIDQwXSwgICAgICAgICAgICAgICAgIC8vIFJpZ2h0IC8gRG93blxuICAgICAgc2VsZWN0ICAgOiBbOSwgMTMsIDI3XSwgICAgICAgICAgICAgIC8vIFRhYiAvIEVudGVyIC8gRXNjYXBlXG4gICAgICBvcGVuICAgICA6IFsxMywgMzIsIDM3LCAzOCwgMzksIDQwXSwgLy8gRW50ZXIgLyBTcGFjZSAvIExlZnQgLyBVcCAvIFJpZ2h0IC8gRG93blxuICAgICAgY2xvc2UgICAgOiBbOSwgMjddICAgICAgICAgICAgICAgICAgIC8vIFRhYiAvIEVzY2FwZVxuICAgIH0sXG4gICAgY3VzdG9tQ2xhc3MgICAgICAgICAgOiB7XG4gICAgICBwcmVmaXg6IHBsdWdpbk5hbWUsXG4gICAgICBjYW1lbENhc2U6IGZhbHNlXG4gICAgfSxcbiAgICBtdWx0aXBsZSAgICAgICAgICAgICAgOiB7XG4gICAgICBzZXBhcmF0b3I6ICcsICcsXG4gICAgICBrZWVwTWVudU9wZW46IHRydWUsXG4gICAgICBtYXhMYWJlbEVudHJpZXM6IGZhbHNlXG4gICAgfVxuICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbGVjdHJpYy9wdWJsaWMvanF1ZXJ5LnNlbGVjdHJpYy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7QUNyREE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
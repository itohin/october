webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _menuHome = __webpack_require__(5);

	var _menuHome2 = _interopRequireDefault(_menuHome);

	var _slickCarousel = __webpack_require__(6);

	var _slickCarousel2 = _interopRequireDefault(_slickCarousel);

	var _perfectScrollbarJqueryMin = __webpack_require__(7);

	var _perfectScrollbarJqueryMin2 = _interopRequireDefault(_perfectScrollbarJqueryMin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var side1_length = void 0;
	var side2_length = void 0;
	var sliderTitle = void 0;
	var startPoint = void 0;

	$(function () {
	    (0, _menuHome2.default)();

	    // ps init scroll
	    // wait slick init
	    $('.home-slick-image').on('init', function (slick) {
	        $('.js-ps-scroll').perfectScrollbar({ theme: 'red' });
	        $('.home-slick-title')[0].slick.refresh();
	    });

	    // slick

	    $('.home-slick-title').on('afterChange', function (slick, currentSlide) {
	        animated_line(0, 0);
	    });

	    $('.home-slick-title').slick({
	        arrows: false,
	        dots: false,
	        draggable: false
	    });

	    $('.home-slick-image').slick({
	        arrows: false,
	        dots: true,
	        asNavFor: '.home-slick-title',
	        autoplay: true,
	        autoplaySpeed: 10000,
	        pauseOnHover: false,
	        pauseOnFocus: false
	    });

	    // toggle news btn
	    $('.js-openNewsAll').on('click', function (e) {
	        e.preventDefault();
	        var target = $(this).data('newsTarget');
	        $('[data-news-id="' + target + '"]').toggleClass('active');
	        $('body').toggleClass('open-news');
	        $('.home-lt__news-content.active').perfectScrollbar({ theme: 'red' }); // init scroll
	    });

	    $('body').mousemove(function (e) {
	        e.preventDefault();

	        var img = $('.slick-current .parallax-wrapper img');
	        var parallax_block = $('.slick-current .parallax-wrapper');
	        var img_offset = parallax_block.offset();

	        if (e.pageX > img_offset.left && e.pageX < img_offset.left + parallax_block.width() && e.pageY > img_offset.top && e.pageY < img_offset.top + parallax_block.outerHeight()) {

	            var mouse_offset = { x: e.pageX - img_offset.left, y: e.pageY - img_offset.top };
	            var img_dimension = { x: parallax_block.width() / 2, y: parallax_block.height() / 2 };
	            var img_transform = { x: mouse_offset.x - img_dimension.x, y: mouse_offset.y - img_dimension.y };
	            // console.log(mouse_offset);
	            // console.log(img_dimension);

	            img.css({
	                transform: 'translate(' + img_transform.x / 100 + '%,' + img_transform.y / 100 + '%)'
	            });
	        }
	    });

	    $('.parallax-wrapper-small').mousemove(function (e) {
	        e.preventDefault();
	        var img = $(this).find('img');
	        var parallax_block = $(this);
	        var img_offset = parallax_block.offset();

	        var mouse_offset = { x: e.pageX - img_offset.left, y: e.pageY - img_offset.top };
	        var img_dimension = { x: parallax_block.width() / 2, y: parallax_block.height() / 2 };
	        var img_transform = { x: mouse_offset.x - img_dimension.x, y: mouse_offset.y - img_dimension.y };
	        img.css({
	            transform: 'translate(' + img_transform.x / 100 + '%,' + img_transform.y / 100 + '%)'
	        });
	    });

	    $('.menu-lvl0__nav').mouseleave(function (e) {
	        animated_line(0, 0);
	    });
	    $('.menu-lvl0__nav').mousemove(function (e) {

	        side1_length = e.pageX - startPoint.x;
	        side2_length = e.pageY - startPoint.y;

	        animated_line(side1_length, side2_length);
	    });

	    // let timeout;
	    // $(window).on('load', function() {
	    //     clearTimeout(timeout);
	    //     timeout = setTimeout(function() {
	    //         $('.home-slick-title')[0].slick.refresh();
	    //     }, 300);
	    // });

	    function animated_line(a, b) {

	        sliderTitle = $('.slick-current .home-slick-title__h3');
	        startPoint = { x: sliderTitle.offset().left + 3, y: sliderTitle.offset().top + sliderTitle.height() - 10 };

	        var side1 = a;
	        var side2 = b;
	        var side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
	        var sin = side2 / side3;

	        var angle = Math.asin(sin) / Math.PI * 180;
	        var angle2 = 180 - 90 - angle;

	        if (!$('.animated_line').length) {
	            $('body').append('<div class="animated_line"></div>');
	        }
	        $('.animated_line').css({ top: startPoint.y, left: startPoint.x, height: side3, transform: 'rotate(' + angle2 + 'deg)' });
	    }

	    animated_line(0, 0);
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	!function (a) {
	  "use strict";
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
	}(function (a) {
	  "use strict";
	  var b = window.Slick || {};b = function () {
	    function c(c, d) {
	      var f,
	          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
	          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
	        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, sli
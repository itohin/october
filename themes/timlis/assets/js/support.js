webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(7);

	$(function () {
	    $('.support-form__select').selectric();

	    var wrapper = $('.support-form__file');
	    var input = $('.support-form__file input');
	    var btn = $('.support-form__file .support-form__btn');
	    var label = $('.support-form__file mark');
	    var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;

	    input.change(function () {
	        var file_name;
	        if (file_api && input[0].files[0]) {
	            file_name = input[0].files[0].name;
	        } else {
	            file_name = input.val().replace('C:\\fakepath\\', '');
	        }

	        if (!file_name.length) {
	            return;
	        }

	        if (label.is(":visible")) {
	            label.text(file_name);
	        } else {
	            btn.text(file_name);
	        }
	    }).change();
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 7:
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZXYvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL34vc2VsZWN0cmljL3B1YmxpYy9qcXVlcnkuc2VsZWN0cmljLmpzPzE4ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICdzZWxlY3RyaWMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5zdXBwb3J0LWZvcm1fX3NlbGVjdCcpLnNlbGVjdHJpYygpO1xuXG4gICAgdmFyIHdyYXBwZXIgPSAkKCcuc3VwcG9ydC1mb3JtX19maWxlJyk7XG4gICAgdmFyIGlucHV0ID0gJCgnLnN1cHBvcnQtZm9ybV9fZmlsZSBpbnB1dCcpO1xuICAgIHZhciBidG4gPSAkKCcuc3VwcG9ydC1mb3JtX19maWxlIC5zdXBwb3J0LWZvcm1fX2J0bicpO1xuICAgIHZhciBsYWJlbCA9ICQoJy5zdXBwb3J0LWZvcm1fX2ZpbGUgbWFyaycpO1xuICAgIHZhciBmaWxlX2FwaSA9ICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkJsb2IpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZmlsZV9uYW1lO1xuICAgICAgICBpZiAoZmlsZV9hcGkgJiYgaW5wdXRbMF0uZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGZpbGVfbmFtZSA9IGlucHV0WzBdLmZpbGVzWzBdLm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxlX25hbWUgPSBpbnB1dC52YWwoKS5yZXBsYWNlKCdDOlxcXFxmYWtlcGF0aFxcXFwnLCAnJyApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWxlX25hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihsYWJlbC5pcyggXCI6dmlzaWJsZVwiICkpIHtcbiAgICAgICAgICAgIGxhYmVsLnRleHQoZmlsZV9uYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0KGZpbGVfbmFtZSk7XG4gICAgICAgIH1cbiAgICB9KS5jaGFuZ2UoKTtcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5qcyIsIi8qIVxuICogICAgICAgICAsL1xuICogICAgICAgLCcvXG4gKiAgICAgLCcgL1xuICogICAsJyAgL19fX19fLFxuICogLidfX19fICAgICwnXG4gKiAgICAgIC8gICwnXG4gKiAgICAgLyAsJ1xuICogICAgLywnXG4gKiAgIC8nXG4gKlxuICogU2VsZWN0cmljIM+fIHYxLjExLjEgKEphbiAxMCAyMDE3KSAtIGh0dHA6Ly9sY2RzYW50b3MuZ2l0aHViLmlvL2pRdWVyeS1TZWxlY3RyaWMvXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IExlb25hcmRvIFNhbnRvczsgTUlUIExpY2Vuc2VcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCByb290LCBqUXVlcnkgKSB7XG4gICAgICBpZiAoIGpRdWVyeSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgICByZXR1cm4galF1ZXJ5O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciAkZG9jID0gJChkb2N1bWVudCk7XG4gIHZhciAkd2luID0gJCh3aW5kb3cpO1xuXG4gIHZhciBwbHVnaW5OYW1lID0gJ3NlbGVjdHJpYyc7XG4gIHZhciBjbGFzc0xpc3QgPSAnSW5wdXQgSXRlbXMgT3BlbiBEaXNhYmxlZCBUZW1wU2hvdyBIaWRlU2VsZWN0IFdyYXBwZXIgRm9jdXMgSG92ZXIgUmVzcG9uc2l2ZSBBYm92ZSBTY3JvbGwgR3JvdXAgR3JvdXBMYWJlbCc7XG4gIHZhciBldmVudE5hbWVzcGFjZVN1ZmZpeCA9ICcuc2wnO1xuXG4gIHZhciBjaGFycyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ24nLCAnYycsICd5J107XG4gIHZhciBkaWFjcml0aWNzID0gW1xuICAgIC9bXFx4RTAtXFx4RTVdL2csIC8vIGFcbiAgICAvW1xceEU4LVxceEVCXS9nLCAvLyBlXG4gICAgL1tcXHhFQy1cXHhFRl0vZywgLy8gaVxuICAgIC9bXFx4RjItXFx4RjZdL2csIC8vIG9cbiAgICAvW1xceEY5LVxceEZDXS9nLCAvLyB1XG4gICAgL1tcXHhGMV0vZywgICAgICAvLyBuXG4gICAgL1tcXHhFN10vZywgICAgICAvLyBjXG4gICAgL1tcXHhGRC1cXHhGRl0vZyAgLy8geVxuICBdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgU2VsZWN0cmljXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgLSBUaGUgJmx0O3NlbGVjdCZndDsgZWxlbWVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gIG9wdHMgLSBPcHRpb25zXG4gICAqL1xuICB2YXIgU2VsZWN0cmljID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0cykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBfdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG11bHRpcGxlICAgICAgIDogISFfdGhpcy4kZWxlbWVudC5hdHRyKCdtdWx0aXBsZScpLFxuICAgICAgZW5hYmxlZCAgICAgICAgOiBmYWxzZSxcbiAgICAgIG9wZW5lZCAgICAgICAgIDogZmFsc2UsXG4gICAgICBjdXJyVmFsdWUgICAgICA6IC0xLFxuICAgICAgc2VsZWN0ZWRJZHggICAgOiAtMSxcbiAgICAgIGhpZ2hsaWdodGVkSWR4IDogLTFcbiAgICB9O1xuXG4gICAgX3RoaXMuZXZlbnRUcmlnZ2VycyA9IHtcbiAgICAgIG9wZW4gICAgOiBfdGhpcy5vcGVuLFxuICAgICAgY2xvc2UgICA6IF90aGlzLmNsb3NlLFxuICAgICAgZGVzdHJveSA6IF90aGlzLmRlc3Ryb3ksXG4gICAgICByZWZyZXNoIDogX3RoaXMucmVmcmVzaCxcbiAgICAgIGluaXQgICAgOiBfdGhpcy5pbml0XG4gICAgfTtcblxuICAgIF90aGlzLmluaXQob3B0cyk7XG4gIH07XG5cbiAgU2VsZWN0cmljLnByb3RvdHlwZSA9IHtcbiAgICB1dGlsczoge1xuICAgICAgLyoqXG4gICAgICAgKiBEZXRlY3QgbW9iaWxlIGJyb3dzZXJcbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICovXG4gICAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvYW5kcm9pZHxpcChob25lfG9kfGFkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVzY2FwZSBlc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHN0cmluZyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zKVxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBlc2NhcGVkXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIFRoZSBzdHJpbmcgd2l0aCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGVzY2FwZWRcbiAgICAgICAqL1xuICAgICAgZXNjYXBlUmVnRXhwOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZSBkaWFjcml0aWNzXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHJlcGxhY2UgdGhlIGRpYWNyaXRpY3NcbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgVGhlIHN0cmluZyB3aXRoIGRpYWNyaXRpY3MgcmVwbGFjZWQgd2l0aCBhc2NpaSBjaGFyYWN0ZXJzXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VEaWFjcml0aWNzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgdmFyIGsgPSBkaWFjcml0aWNzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShkaWFjcml0aWNzW2tdLCBjaGFyc1trXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXQgc3RyaW5nXG4gICAgICAgKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hdGVzZ29yYWwvOTg0Mzc1XG4gICAgICAgKlxuICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBmIC0gU3RyaW5nIHRvIGJlIGZvcm1hdGVkXG4gICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBTdHJpbmcgZm9ybWF0ZWRcbiAgICAgICAqL1xuICAgICAgZm9ybWF0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgIHZhciBhID0gYXJndW1lbnRzOyAvLyBzdG9yZSBvdXRlciBhcmd1bWVudHNcbiAgICAgICAgcmV0dXJuICgnJyArIGYpIC8vIGZvcmNlIGZvcm1hdCBzcGVjaWZpZXIgdG8gU3RyaW5nXG4gICAgICAgICAgLnJlcGxhY2UoIC8vIHJlcGxhY2UgdG9rZW5zIGluIGZvcm1hdCBzcGVjaWZpZXJcbiAgICAgICAgICAgIC9cXHsoPzooXFxkKyl8KFxcdyspKVxcfS9nLCAvLyBtYXRjaCB7dG9rZW59IHJlZmVyZW5jZXNcbiAgICAgICAgICAgIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzLCAvLyB0aGUgbWF0Y2hlZCBzdHJpbmcgKGlnbm9yZWQpXG4gICAgICAgICAgICAgIGksIC8vIGFuIGFyZ3VtZW50IGluZGV4XG4gICAgICAgICAgICAgIHAgLy8gYSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAgJiYgYVsxXSAvLyBpZiBwcm9wZXJ0eSBuYW1lIGFuZCBmaXJzdCBhcmd1bWVudCBleGlzdFxuICAgICAgICAgICAgICAgID8gYVsxXVtwXSAvLyByZXR1cm4gcHJvcGVydHkgZnJvbSBmaXJzdCBhcmd1bWVudFxuICAgICAgICAgICAgICAgIDogYVtpXTsgLy8gYXNzdW1lIGFyZ3VtZW50IGluZGV4IGFuZCByZXR1cm4gaS10aCBhcmd1bWVudFxuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbmV4dCBlbmFibGVkIGl0ZW0gaW4gdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHNlbGVjdEl0ZW1zIC0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAgICogQHBhcmFtICB7bnVtYmVyfSAgICBzZWxlY3RlZCAtIEluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgIFRoZSBuZXh0IGVuYWJsZWQgaXRlbS5cbiAgICAgICAqL1xuICAgICAgbmV4dEVuYWJsZWRJdGVtOiBmdW5jdGlvbihzZWxlY3RJdGVtcywgc2VsZWN0ZWQpIHtcbiAgICAgICAgd2hpbGUgKCBzZWxlY3RJdGVtc1sgc2VsZWN0ZWQgPSAoc2VsZWN0ZWQgKyAxKSAlIHNlbGVjdEl0ZW1zLmxlbmd0aCBdLmRpc2FibGVkICkge1xuICAgICAgICAgIC8vIGVtcHR5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgdGhlIHByZXZpb3VzIGVuYWJsZWQgaXRlbSBpbiB0aGUgb3B0aW9ucyBsaXN0LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge29iamVjdH0gc2VsZWN0SXRlbXMgLSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9ICAgIHNlbGVjdGVkIC0gSW5kZXggb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb24uXG4gICAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgVGhlIHByZXZpb3VzIGVuYWJsZWQgaXRlbS5cbiAgICAgICAqL1xuICAgICAgcHJldmlvdXNFbmFibGVkSXRlbTogZnVuY3Rpb24oc2VsZWN0SXRlbXMsIHNlbGVjdGVkKSB7XG4gICAgICAgIHdoaWxlICggc2VsZWN0SXRlbXNbIHNlbGVjdGVkID0gKHNlbGVjdGVkID4gMCA/IHNlbGVjdGVkIDogc2VsZWN0SXRlbXMubGVuZ3RoKSAtIDEgXS5kaXNhYmxlZCApIHtcbiAgICAgICAgICAvLyBlbXB0eVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtIGNhbWVsQ2FzZSBzdHJpbmcgdG8gZGFzaC1jYXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIC0gVGhlIGNhbWVsQ2FzZWQgc3RyaW5nLlxuICAgICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICBUaGUgc3RyaW5nIHRyYW5zZm9ybWVkIHRvIGRhc2gtY2FzZS5cbiAgICAgICAqL1xuICAgICAgdG9EYXNoOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxscyB0aGUgZXZlbnRzIHJlZ2lzdGVyZWQgd2l0aCBmdW5jdGlvbiBuYW1lLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICBmbiAtIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY29wZSAtIFNjb3BlIHRoYXQgc2hvdWxkIGJlIHNldCBvbiB0aGUgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIHRyaWdnZXJDYWxsYmFjazogZnVuY3Rpb24oZm4sIHNjb3BlKSB7XG4gICAgICAgIHZhciBlbG0gPSBzY29wZS5lbGVtZW50O1xuICAgICAgICB2YXIgZnVuYyA9IHNjb3BlLm9wdGlvbnNbJ29uJyArIGZuXTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbZWxtXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcblxuICAgICAgICBpZiAoICQuaXNGdW5jdGlvbihmdW5jKSApIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGVsbSwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKGVsbSkudHJpZ2dlcihwbHVnaW5OYW1lICsgJy0nICsgdGhpcy50b0Rhc2goZm4pLCBhcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtIGFycmF5IGxpc3QgdG8gY29uY2F0ZW5hdGVkIHN0cmluZyBhbmQgcmVtb3ZlIGVtcHR5IHZhbHVlc1xuICAgICAgICogQHBhcmFtICB7YXJyYXl9IGFyciAtIENsYXNzIGxpc3RcbiAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICBDb25jYXRlbmF0ZWQgc3RyaW5nXG4gICAgICAgKi9cbiAgICAgIGFycmF5VG9DbGFzc25hbWU6IGZ1bmN0aW9uKGFycikge1xuICAgICAgICB2YXIgbmV3QXJyID0gJC5ncmVwKGFyciwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiAhIWl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAkLnRyaW0obmV3QXJyLmpvaW4oJyAnKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKiBJbml0aWFsaXplcyAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFNldCBvcHRpb25zXG4gICAgICBfdGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm5bcGx1Z2luTmFtZV0uZGVmYXVsdHMsIF90aGlzLm9wdGlvbnMsIG9wdHMpO1xuXG4gICAgICBfdGhpcy51dGlscy50cmlnZ2VyQ2FsbGJhY2soJ0JlZm9yZUluaXQnLCBfdGhpcyk7XG5cbiAgICAgIC8vIFByZXNlcnZlIGRhdGFcbiAgICAgIF90aGlzLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgIC8vIERpc2FibGUgb24gbW9iaWxlIGJyb3dzZXJzXG4gICAgICBpZiAoIF90aGlzLm9wdGlvbnMuZGlzYWJsZU9uTW9iaWxlICYmIF90aGlzLnV0aWxzLmlzTW9iaWxlKCkgKSB7XG4gICAgICAgIF90aGlzLmRpc2FibGVPbk1vYmlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGNsYXNzZXNcbiAgICAgIF90aGlzLmNsYXNzZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCk7XG5cbiAgICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgICAgdmFyIGlucHV0ICAgICAgICAgICAgICA9ICQoJzxpbnB1dC8+JywgeyAnY2xhc3MnOiBfdGhpcy5jbGFzc2VzLmlucHV0LCAncmVhZG9ubHknOiBfdGhpcy51dGlscy5pc01vYmlsZSgpIH0pO1xuICAgICAgdmFyIGl0ZW1zICAgICAgICAgICAgICA9ICQoJzxkaXYvPicsICAgeyAnY2xhc3MnOiBfdGhpcy5jbGFzc2VzLml0ZW1zLCAndGFiaW5kZXgnOiAtMSB9KTtcbiAgICAgIHZhciBpdGVtc1Njcm9sbCAgICAgICAgPSAkKCc8ZGl2Lz4nLCAgIHsgJ2NsYXNzJzogX3RoaXMuY2xhc3Nlcy5zY3JvbGwgfSk7XG4gICAgICB2YXIgd3JhcHBlciAgICAgICAgICAgID0gJCgnPGRpdi8+JywgICB7ICdjbGFzcyc6IF90aGlzLmNsYXNzZXMucHJlZml4LCAnaHRtbCc6IF90aGlzLm9wdGlvbnMuYXJyb3dCdXR0b25NYXJrdXAgfSk7XG4gICAgICB2YXIgbGFiZWwgICAgICAgICAgICAgID0gJCgnPHNwYW4vPicsICB7ICdjbGFzcyc6ICdsYWJlbCcgfSk7XG4gICAgICB2YXIgb3V0ZXJXcmFwcGVyICAgICAgID0gX3RoaXMuJGVsZW1lbnQud3JhcCgnPGRpdi8+JykucGFyZW50KCkuYXBwZW5kKHdyYXBwZXIucHJlcGVuZChsYWJlbCksIGl0ZW1zLCBpbnB1dCk7XG4gICAgICB2YXIgaGlkZVNlbGVjdFdyYXBwZXIgID0gJCgnPGRpdi8+JywgICB7ICdjbGFzcyc6IF90aGlzLmNsYXNzZXMuaGlkZXNlbGVjdCB9KTtcblxuICAgICAgX3RoaXMuZWxlbWVudHMgPSB7XG4gICAgICAgIGlucHV0ICAgICAgICA6IGlucHV0LFxuICAgICAgICBpdGVtcyAgICAgICAgOiBpdGVtcyxcbiAgICAgICAgaXRlbXNTY3JvbGwgIDogaXRlbXNTY3JvbGwsXG4gICAgICAgIHdyYXBwZXIgICAgICA6IHdyYXBwZXIsXG4gICAgICAgIGxhYmVsICAgICAgICA6IGxhYmVsLFxuICAgICAgICBvdXRlcldyYXBwZXIgOiBvdXRlcldyYXBwZXJcbiAgICAgIH07XG5cbiAgICAgIGlmICggX3RoaXMub3B0aW9ucy5uYXRpdmVPbk1vYmlsZSAmJiBfdGhpcy51dGlscy5pc01vYmlsZSgpICkge1xuICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaGlkZVNlbGVjdFdyYXBwZXIuYWRkQ2xhc3MoX3RoaXMuY2xhc3Nlcy5wcmVmaXggKyAnLWlzLW5hdGl2ZScpO1xuXG4gICAgICAgIF90aGlzLiRlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAub24oX3RoaXMuZXZlbnRUcmlnZ2VycylcbiAgICAgICAgLndyYXAoaGlkZVNlbGVjdFdyYXBwZXIpO1xuXG4gICAgICBfdGhpcy5vcmlnaW5hbFRhYmluZGV4ID0gX3RoaXMuJGVsZW1lbnQucHJvcCgndGFiaW5kZXgnKTtcbiAgICAgIF90aGlzLiRlbGVtZW50LnByb3AoJ3RhYmluZGV4JywgLTEpO1xuXG4gICAgICBfdGhpcy5wb3B1bGF0ZSgpO1xuICAgICAgX3RoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdJbml0JywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKiogQWN0aXZhdGVzIHRoZSBwbHVnaW4gKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGhpZGRlbkNoaWxkcmVuID0gX3RoaXMuZWxlbWVudHMuaXRlbXMuY2xvc2VzdCgnOnZpc2libGUnKS5jaGlsZHJlbignOmhpZGRlbicpLmFkZENsYXNzKF90aGlzLmNsYXNzZXMudGVtcHNob3cpO1xuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBfdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXG4gICAgICBoaWRkZW5DaGlsZHJlbi5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLnRlbXBzaG93KTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdCZWZvcmVBY3RpdmF0ZScsIF90aGlzKTtcblxuICAgICAgX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLnByb3AoJ2NsYXNzJyxcbiAgICAgICAgX3RoaXMudXRpbHMuYXJyYXlUb0NsYXNzbmFtZShbXG4gICAgICAgICAgX3RoaXMuY2xhc3Nlcy53cmFwcGVyLFxuICAgICAgICAgIF90aGlzLiRlbGVtZW50LnByb3AoJ2NsYXNzJykucmVwbGFjZSgvXFxTKy9nLCBfdGhpcy5jbGFzc2VzLnByZWZpeCArICctJCYnKSxcbiAgICAgICAgICBfdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUgPyBfdGhpcy5jbGFzc2VzLnJlc3BvbnNpdmUgOiAnJ1xuICAgICAgICBdKVxuICAgICAgKTtcblxuICAgICAgaWYgKCBfdGhpcy5vcHRpb25zLmluaGVyaXRPcmlnaW5hbFdpZHRoICYmIG9yaWdpbmFsV2lkdGggPiAwICkge1xuICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIud2lkdGgob3JpZ2luYWxXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICBpZiAoICFfdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcpICkge1xuICAgICAgICBfdGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBOb3QgZGlzYWJsZWQsIHNvLi4uIFJlbW92aW5nIGRpc2FibGVkIGNsYXNzXG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcblxuICAgICAgICAvLyBSZW1vdmUgc3R5bGVzIGZyb20gaXRlbXMgYm94XG4gICAgICAgIC8vIEZpeCBpbmNvcnJlY3QgaGVpZ2h0IHdoZW4gcmVmcmVzaGVkIGlzIHRyaWdnZXJlZCB3aXRoIGZld2VyIG9wdGlvbnNcbiAgICAgICAgX3RoaXMuJGxpID0gX3RoaXMuZWxlbWVudHMuaXRlbXMucmVtb3ZlQXR0cignc3R5bGUnKS5maW5kKCdsaScpO1xuXG4gICAgICAgIF90aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5hZGRDbGFzcyhfdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcblxuICAgICAgICBpZiAoIF90aGlzLmVsZW1lbnRzLmlucHV0ICkge1xuICAgICAgICAgIF90aGlzLmVsZW1lbnRzLmlucHV0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdBY3RpdmF0ZScsIF90aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgY2xhc3NOYW1lcyBmb3IgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gQ2xhc3NlcyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzc05hbWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgY3VzdG9tQ2xhc3MgPSBfdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzO1xuICAgICAgdmFyIGNsYXNzZXNPYmogPSB7fTtcblxuICAgICAgJC5lYWNoKGNsYXNzTGlzdC5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBjdXJyQ2xhc3MpIHtcbiAgICAgICAgdmFyIGMgPSBjdXN0b21DbGFzcy5wcmVmaXggKyBjdXJyQ2xhc3M7XG4gICAgICAgIGNsYXNzZXNPYmpbY3VyckNsYXNzLnRvTG93ZXJDYXNlKCldID0gY3VzdG9tQ2xhc3MuY2FtZWxDYXNlID8gYyA6IF90aGlzLnV0aWxzLnRvRGFzaChjKTtcbiAgICAgIH0pO1xuXG4gICAgICBjbGFzc2VzT2JqLnByZWZpeCA9IGN1c3RvbUNsYXNzLnByZWZpeDtcblxuICAgICAgcmV0dXJuIGNsYXNzZXNPYmo7XG4gICAgfSxcblxuICAgIC8qKiBTZXQgdGhlIGxhYmVsIHRleHQgKi9cbiAgICBzZXRMYWJlbDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGxhYmVsQnVpbGRlciA9IF90aGlzLm9wdGlvbnMubGFiZWxCdWlsZGVyO1xuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlLm11bHRpcGxlICkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgY3VycmVudFZhbHVlcyBpcyBhbiBhcnJheVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9ICQuaXNBcnJheShfdGhpcy5zdGF0ZS5jdXJyVmFsdWUpID8gX3RoaXMuc3RhdGUuY3VyclZhbHVlIDogW190aGlzLnN0YXRlLmN1cnJWYWx1ZV07XG4gICAgICAgIC8vIEknbSBub3QgaGFwcHkgd2l0aCB0aGlzLCBidXQgY3VycmVudFZhbHVlcyBjYW4gYmUgYW4gZW1wdHlcbiAgICAgICAgLy8gYXJyYXkgYW5kIHdlIG5lZWQgdG8gZmFsbGJhY2sgdG8gdGhlIGRlZmF1bHQgb3B0aW9uLlxuICAgICAgICBjdXJyZW50VmFsdWVzID0gY3VycmVudFZhbHVlcy5sZW5ndGggPT09IDAgPyBbMF0gOiBjdXJyZW50VmFsdWVzO1xuXG4gICAgICAgIHZhciBsYWJlbE1hcmt1cCA9ICQubWFwKGN1cnJlbnRWYWx1ZXMsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICQuZ3JlcChfdGhpcy5sb29rdXBJdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaW5kZXggPT09IHZhbHVlO1xuICAgICAgICAgIH0pWzBdOyAvLyB3ZSBkb24ndCB3YW50IG5lc3RlZCBhcnJheXMgaGVyZVxuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbE1hcmt1cCA9ICQuZ3JlcChsYWJlbE1hcmt1cCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIC8vIEhpZGUgZGVmYXVsdCAocGxlYXNlIGNob29zZSkgaWYgbW9yZSB0aGVuIG9uZSBlbGVtZW50IHdlcmUgc2VsZWN0ZWQuXG4gICAgICAgICAgLy8gSWYgbm8gb3B0aW9uIHZhbHVlIHdlcmUgZ2l2ZW4gdmFsdWUgaXMgc2V0IHRvIG9wdGlvbiB0ZXh0IGJ5IGRlZmF1bHRcbiAgICAgICAgICBpZiAoIGxhYmVsTWFya3VwLmxlbmd0aCA+IDEgfHwgbGFiZWxNYXJrdXAubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgcmV0dXJuICQudHJpbShpdGVtLnZhbHVlKSAhPT0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYWJlbE1hcmt1cCA9ICQubWFwKGxhYmVsTWFya3VwLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICA/IGxhYmVsQnVpbGRlcihpdGVtKVxuICAgICAgICAgICAgOiBfdGhpcy51dGlscy5mb3JtYXQobGFiZWxCdWlsZGVyLCBpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTGltaXQgdGhlIGFtb3VudCBvZiBzZWxlY3RlZCB2YWx1ZXMgc2hvd24gaW4gbGFiZWxcbiAgICAgICAgaWYgKCBfdGhpcy5vcHRpb25zLm11bHRpcGxlLm1heExhYmVsRW50cmllcyApIHtcbiAgICAgICAgICBpZiAoIGxhYmVsTWFya3VwLmxlbmd0aCA+PSBfdGhpcy5vcHRpb25zLm11bHRpcGxlLm1heExhYmVsRW50cmllcyArIDEgKSB7XG4gICAgICAgICAgICBsYWJlbE1hcmt1cCA9IGxhYmVsTWFya3VwLnNsaWNlKDAsIF90aGlzLm9wdGlvbnMubXVsdGlwbGUubWF4TGFiZWxFbnRyaWVzKTtcbiAgICAgICAgICAgIGxhYmVsTWFya3VwLnB1c2goXG4gICAgICAgICAgICAgICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICAgICAgPyBsYWJlbEJ1aWxkZXIoeyB0ZXh0OiAnLi4uJyB9KVxuICAgICAgICAgICAgICAgIDogX3RoaXMudXRpbHMuZm9ybWF0KGxhYmVsQnVpbGRlciwgeyB0ZXh0OiAnLi4uJyB9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsTWFya3VwLnNsaWNlKGxhYmVsTWFya3VwLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5lbGVtZW50cy5sYWJlbC5odG1sKGxhYmVsTWFya3VwLmpvaW4oX3RoaXMub3B0aW9ucy5tdWx0aXBsZS5zZXBhcmF0b3IpKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1cnJJdGVtID0gX3RoaXMubG9va3VwSXRlbXNbX3RoaXMuc3RhdGUuY3VyclZhbHVlXTtcblxuICAgICAgICBfdGhpcy5lbGVtZW50cy5sYWJlbC5odG1sKFxuICAgICAgICAgICQuaXNGdW5jdGlvbihsYWJlbEJ1aWxkZXIpXG4gICAgICAgICAgICA/IGxhYmVsQnVpbGRlcihjdXJySXRlbSlcbiAgICAgICAgICAgIDogX3RoaXMudXRpbHMuZm9ybWF0KGxhYmVsQnVpbGRlciwgY3Vyckl0ZW0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKiBHZXQgYW5kIHNhdmUgdGhlIGF2YWlsYWJsZSBvcHRpb25zICovXG4gICAgcG9wdWxhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciAkb3B0aW9ucyA9IF90aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG4gICAgICB2YXIgJGp1c3RPcHRpb25zID0gX3RoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJyk7XG4gICAgICB2YXIgJHNlbGVjdGVkID0gJGp1c3RPcHRpb25zLmZpbHRlcignOnNlbGVjdGVkJyk7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9ICRqdXN0T3B0aW9ucy5pbmRleCgkc2VsZWN0ZWQpO1xuICAgICAgdmFyIGN1cnJJbmRleCA9IDA7XG4gICAgICB2YXIgZW1wdHlWYWx1ZSA9IChfdGhpcy5zdGF0ZS5tdWx0aXBsZSA/IFtdIDogMCk7XG5cbiAgICAgIGlmICggJHNlbGVjdGVkLmxlbmd0aCA+IDEgJiYgX3RoaXMuc3RhdGUubXVsdGlwbGUgKSB7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSBbXTtcbiAgICAgICAgJHNlbGVjdGVkLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleC5wdXNoKCQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZS5jdXJyVmFsdWUgPSAofnNlbGVjdGVkSW5kZXggPyBzZWxlY3RlZEluZGV4IDogZW1wdHlWYWx1ZSk7XG4gICAgICBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCA9IF90aGlzLnN0YXRlLmN1cnJWYWx1ZTtcbiAgICAgIF90aGlzLnN0YXRlLmhpZ2hsaWdodGVkSWR4ID0gX3RoaXMuc3RhdGUuY3VyclZhbHVlO1xuICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgIF90aGlzLmxvb2t1cEl0ZW1zID0gW107XG5cbiAgICAgIGlmICggJG9wdGlvbnMubGVuZ3RoICkge1xuICAgICAgICAvLyBCdWlsZCBvcHRpb25zIG1hcmt1cFxuICAgICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICB2YXIgJGVsbSA9ICQodGhpcyk7XG5cbiAgICAgICAgICBpZiAoICRlbG0uaXMoJ29wdGdyb3VwJykgKSB7XG5cbiAgICAgICAgICAgIHZhciBvcHRpb25zR3JvdXAgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQgICAgICAgOiAkZWxtLFxuICAgICAgICAgICAgICBsYWJlbCAgICAgICAgIDogJGVsbS5wcm9wKCdsYWJlbCcpLFxuICAgICAgICAgICAgICBncm91cERpc2FibGVkIDogJGVsbS5wcm9wKCdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgICBpdGVtcyAgICAgICAgIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRlbG0uY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgdmFyICRlbG0gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgIG9wdGlvbnNHcm91cC5pdGVtc1tpXSA9IF90aGlzLmdldEl0ZW1EYXRhKGN1cnJJbmRleCwgJGVsbSwgb3B0aW9uc0dyb3VwLmdyb3VwRGlzYWJsZWQgfHwgJGVsbS5wcm9wKCdkaXNhYmxlZCcpKTtcblxuICAgICAgICAgICAgICBfdGhpcy5sb29rdXBJdGVtc1tjdXJySW5kZXhdID0gb3B0aW9uc0dyb3VwLml0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgIGN1cnJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLml0ZW1zW2ldID0gb3B0aW9uc0dyb3VwO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgX3RoaXMuaXRlbXNbaV0gPSBfdGhpcy5nZXRJdGVtRGF0YShjdXJySW5kZXgsICRlbG0sICRlbG0ucHJvcCgnZGlzYWJsZWQnKSk7XG5cbiAgICAgICAgICAgIF90aGlzLmxvb2t1cEl0ZW1zW2N1cnJJbmRleF0gPSBfdGhpcy5pdGVtc1tpXTtcblxuICAgICAgICAgICAgY3VyckluZGV4Kys7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmFwcGVuZCggX3RoaXMuZWxlbWVudHMuaXRlbXNTY3JvbGwuaHRtbCggX3RoaXMuZ2V0SXRlbXNNYXJrdXAoX3RoaXMuaXRlbXMpICkgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgaXRlbXMgb2JqZWN0IGRhdGFcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBpbmRleCAgICAgIC0gQ3VycmVudCBpdGVtIGluZGV4XG4gICAgICogQHBhcmFtICB7bm9kZX0gICAgJGVsbSAgICAgICAtIEN1cnJlbnQgZWxlbWVudCBub2RlXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNEaXNhYmxlZCAtIEN1cnJlbnQgZWxlbWVudCBkaXNhYmxlZCBzdGF0ZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICBJdGVtIG9iamVjdFxuICAgICAqL1xuICAgIGdldEl0ZW1EYXRhOiBmdW5jdGlvbihpbmRleCwgJGVsbSwgaXNEaXNhYmxlZCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXG4gICAgICAgIGVsZW1lbnQgICA6ICRlbG0sXG4gICAgICAgIHZhbHVlICAgICA6ICRlbG0udmFsKCksXG4gICAgICAgIGNsYXNzTmFtZSA6ICRlbG0ucHJvcCgnY2xhc3MnKSxcbiAgICAgICAgdGV4dCAgICAgIDogJGVsbS5odG1sKCksXG4gICAgICAgIHNsdWcgICAgICA6ICQudHJpbShfdGhpcy51dGlscy5yZXBsYWNlRGlhY3JpdGljcygkZWxtLmh0bWwoKSkpLFxuICAgICAgICBzZWxlY3RlZCAgOiAkZWxtLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIGRpc2FibGVkICA6IGlzRGlzYWJsZWRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIG9wdGlvbnMgbWFya3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGl0ZW1zIC0gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGF2YWlsYWJsZSBvcHRpb25zXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgIEhUTUwgZm9yIHRoZSBvcHRpb25zIGJveFxuICAgICAqL1xuICAgIGdldEl0ZW1zTWFya3VwOiBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBtYXJrdXAgPSAnPHVsPic7XG5cbiAgICAgIGlmICggJC5pc0Z1bmN0aW9uKF90aGlzLm9wdGlvbnMubGlzdEJ1aWxkZXIpICYmIF90aGlzLm9wdGlvbnMubGlzdEJ1aWxkZXIgKSB7XG4gICAgICAgIGl0ZW1zID0gX3RoaXMub3B0aW9ucy5saXN0QnVpbGRlcihpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24oaSwgZWxtKSB7XG4gICAgICAgIGlmICggZWxtLmxhYmVsICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICBtYXJrdXAgKz0gX3RoaXMudXRpbHMuZm9ybWF0KCc8dWwgY2xhc3M9XCJ7MX1cIj48bGkgY2xhc3M9XCJ7Mn1cIj57M308L2xpPicsXG4gICAgICAgICAgICBfdGhpcy51dGlscy5hcnJheVRvQ2xhc3NuYW1lKFtcbiAgICAgICAgICAgICAgX3RoaXMuY2xhc3Nlcy5ncm91cCxcbiAgICAgICAgICAgICAgZWxtLmdyb3VwRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJycsXG4gICAgICAgICAgICAgIGVsbS5lbGVtZW50LnByb3AoJ2NsYXNzJylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3RoaXMuY2xhc3Nlcy5ncm91cGxhYmVsLFxuICAgICAgICAgICAgZWxtLmVsZW1lbnQucHJvcCgnbGFiZWwnKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAkLmVhY2goZWxtLml0ZW1zLCBmdW5jdGlvbihpLCBlbG0pIHtcbiAgICAgICAgICAgIG1hcmt1cCArPSBfdGhpcy5nZXRJdGVtTWFya3VwKGVsbS5pbmRleCwgZWxtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcmt1cCArPSAnPC91bD4nO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBtYXJrdXAgKz0gX3RoaXMuZ2V0SXRlbU1hcmt1cChlbG0uaW5kZXgsIGVsbSk7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXJrdXAgKyAnPC91bD4nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBldmVyeSBvcHRpb24gbWFya3VwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGluZGV4ICAgIC0gSW5kZXggb2YgY3VycmVudCBpdGVtXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBpdGVtRGF0YSAtIEN1cnJlbnQgaXRlbVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICBIVE1MIGZvciB0aGUgb3B0aW9uXG4gICAgICovXG4gICAgZ2V0SXRlbU1hcmt1cDogZnVuY3Rpb24oaW5kZXgsIGl0ZW1EYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1CdWlsZGVyID0gX3RoaXMub3B0aW9ucy5vcHRpb25zSXRlbUJ1aWxkZXI7XG4gICAgICAvLyBsaW1pdCBhY2Nlc3MgdG8gaXRlbSBkYXRhIHRvIHByb3ZpZGUgYSBzaW1wbGUgaW50ZXJmYWNlXG4gICAgICAvLyB0byBtb3N0IHJlbGV2YW50IG9wdGlvbnMuXG4gICAgICB2YXIgZmlsdGVyZWRJdGVtRGF0YSA9IHtcbiAgICAgICAgdmFsdWU6IGl0ZW1EYXRhLnZhbHVlLFxuICAgICAgICB0ZXh0IDogaXRlbURhdGEudGV4dCxcbiAgICAgICAgc2x1ZyA6IGl0ZW1EYXRhLnNsdWcsXG4gICAgICAgIGluZGV4OiBpdGVtRGF0YS5pbmRleFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzLnV0aWxzLmZvcm1hdCgnPGxpIGRhdGEtaW5kZXg9XCJ7MX1cIiBjbGFzcz1cInsyfVwiPnszfTwvbGk+JyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIF90aGlzLnV0aWxzLmFycmF5VG9DbGFzc25hbWUoW1xuICAgICAgICAgIGl0ZW1EYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgICBpbmRleCA9PT0gX3RoaXMuaXRlbXMubGVuZ3RoIC0gMSAgPyAnbGFzdCcgICAgIDogJycsXG4gICAgICAgICAgaXRlbURhdGEuZGlzYWJsZWQgICAgICAgICAgICAgICAgID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgICAgIGl0ZW1EYXRhLnNlbGVjdGVkICAgICAgICAgICAgICAgICA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICBdKSxcbiAgICAgICAgJC5pc0Z1bmN0aW9uKGl0ZW1CdWlsZGVyKVxuICAgICAgICAgID8gX3RoaXMudXRpbHMuZm9ybWF0KGl0ZW1CdWlsZGVyKGl0ZW1EYXRhKSwgaXRlbURhdGEpXG4gICAgICAgICAgOiBfdGhpcy51dGlscy5mb3JtYXQoaXRlbUJ1aWxkZXIsIGZpbHRlcmVkSXRlbURhdGEpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvKiogUmVtb3ZlIGV2ZW50cyBvbiB0aGUgZWxlbWVudHMgKi9cbiAgICB1bmJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgX3RoaXMuZWxlbWVudHMud3JhcHBlclxuICAgICAgICAuYWRkKF90aGlzLiRlbGVtZW50KVxuICAgICAgICAuYWRkKF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlcilcbiAgICAgICAgLmFkZChfdGhpcy5lbGVtZW50cy5pbnB1dClcbiAgICAgICAgLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCk7XG4gICAgfSxcblxuICAgIC8qKiBCaW5kIGV2ZW50cyBvbiB0aGUgZWxlbWVudHMgKi9cbiAgICBiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5vbignbW91c2VlbnRlcicgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCArICcgbW91c2VsZWF2ZScgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKF90aGlzLmNsYXNzZXMuaG92ZXIsIGUudHlwZSA9PT0gJ21vdXNlZW50ZXInKTtcblxuICAgICAgICAvLyBEZWxheSBjbG9zZSBlZmZlY3Qgd2hlbiBvcGVuT25Ib3ZlciBpcyB0cnVlXG4gICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5vcGVuT25Ib3ZlciApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG5cbiAgICAgICAgICBpZiAoIGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnICkge1xuICAgICAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoJC5wcm94eShfdGhpcy5jbG9zZSwgX3RoaXMpLCBfdGhpcy5vcHRpb25zLmhvdmVySW50ZW50VGltZW91dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgb3Blbi9jbG9zZVxuICAgICAgX3RoaXMuZWxlbWVudHMud3JhcHBlci5vbignY2xpY2snICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgX3RoaXMuc3RhdGUub3BlbmVkID8gX3RoaXMuY2xvc2UoKSA6IF90aGlzLm9wZW4oZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVHJhbnNsYXRlIG9yaWdpbmFsIGVsZW1lbnQgZm9jdXMgZXZlbnQgdG8gZHVtbXkgaW5wdXQuXG4gICAgICAvLyBEaXNhYmxlZCBvbiBtb2JpbGUgZGV2aWNlcyBiZWNhdXNlIHRoZSBkZWZhdWx0IG9wdGlvbiBsaXN0IGlzbid0XG4gICAgICAvLyBzaG93biBkdWUgdGhlIGZhY3QgdGhhdCBoaWRkZW4gaW5wdXQgZ2V0cyBmb2N1c2VkXG4gICAgICBpZiAoICEoX3RoaXMub3B0aW9ucy5uYXRpdmVPbk1vYmlsZSAmJiBfdGhpcy51dGlscy5pc01vYmlsZSgpKSApIHtcbiAgICAgICAgX3RoaXMuJGVsZW1lbnQub24oJ2ZvY3VzJyArIGV2ZW50TmFtZXNwYWNlU3VmZml4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dFxuICAgICAgICAgIC5wcm9wKHsgdGFiaW5kZXg6IF90aGlzLm9yaWdpbmFsVGFiaW5kZXgsIGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICAgIC5vbigna2V5ZG93bicgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgJC5wcm94eShfdGhpcy5oYW5kbGVLZXlzLCBfdGhpcykpXG4gICAgICAgICAgLm9uKCdmb2N1c2luJyArIGV2ZW50TmFtZXNwYWNlU3VmZml4LCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIuYWRkQ2xhc3MoX3RoaXMuY2xhc3Nlcy5mb2N1cyk7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGZsaWNrZXIgd2hlbiBmb2N1c2luZyBvdXQgYW5kIGJhY2sgYWdhaW4gaW4gdGhlIGJyb3dzZXIgd2luZG93XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC5vbmUoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudHMuaW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5vcGVuT25Gb2N1cyAmJiAhX3RoaXMuc3RhdGUub3BlbmVkICkge1xuICAgICAgICAgICAgICBfdGhpcy5vcGVuKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKCdmb2N1c291dCcgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIucmVtb3ZlQ2xhc3MoX3RoaXMuY2xhc3Nlcy5mb2N1cyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oJ2lucHV0IHByb3BlcnR5Y2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gX3RoaXMuZWxlbWVudHMuaW5wdXQudmFsKCk7XG4gICAgICAgICAgICB2YXIgc2VhcmNoUmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBfdGhpcy51dGlscy5lc2NhcGVSZWdFeHAodmFsKSwgJ2knKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgc2VhcmNoXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMucmVzZXRTdHIpO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTdHIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50cy5pbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5rZXlTZWFyY2hUaW1lb3V0KTtcblxuICAgICAgICAgICAgaWYgKCB2YWwubGVuZ3RoICkge1xuICAgICAgICAgICAgICAvLyBTZWFyY2ggaW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgICAgICAgJC5lYWNoKF90aGlzLml0ZW1zLCBmdW5jdGlvbihpLCBlbG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoICFlbG0uZGlzYWJsZWQgJiYgc2VhcmNoUmVnRXhwLnRlc3QoZWxtLnRleHQpIHx8IHNlYXJjaFJlZ0V4cC50ZXN0KGVsbS5zbHVnKSApIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmhpZ2hsaWdodChpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kbGkub24oe1xuICAgICAgICAvLyBQcmV2ZW50IDxpbnB1dD4gYmx1ciBvbiBDaHJvbWVcbiAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5zZWxlY3QoJCh0aGlzKS5kYXRhKCdpbmRleCcpKTtcblxuICAgICAgICAgIC8vIENocm9tZSBkb2Vzbid0IGNsb3NlIG9wdGlvbnMgYm94IGlmIHNlbGVjdCBpcyB3cmFwcGVkIHdpdGggYSBsYWJlbFxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gJ3JldHVybiBmYWxzZScgdG8gYXZvaWQgdGhhdFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJlaGF2aW9yIHdoZW4ga2V5Ym9hcmQga2V5cyBpcyBwcmVzc2VkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSAtIEV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIGhhbmRsZUtleXM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIga2V5ID0gZS53aGljaDtcbiAgICAgIHZhciBrZXlzID0gX3RoaXMub3B0aW9ucy5rZXlzO1xuXG4gICAgICB2YXIgaXNQcmV2S2V5ID0gJC5pbkFycmF5KGtleSwga2V5cy5wcmV2aW91cykgPiAtMTtcbiAgICAgIHZhciBpc05leHRLZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLm5leHQpID4gLTE7XG4gICAgICB2YXIgaXNTZWxlY3RLZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLnNlbGVjdCkgPiAtMTtcbiAgICAgIHZhciBpc09wZW5LZXkgPSAkLmluQXJyYXkoa2V5LCBrZXlzLm9wZW4pID4gLTE7XG4gICAgICB2YXIgaWR4ID0gX3RoaXMuc3RhdGUuaGlnaGxpZ2h0ZWRJZHg7XG4gICAgICB2YXIgaXNGaXJzdE9yTGFzdEl0ZW0gPSAoaXNQcmV2S2V5ICYmIGlkeCA9PT0gMCkgfHwgKGlzTmV4dEtleSAmJiAoaWR4ICsgMSkgPT09IF90aGlzLml0ZW1zLmxlbmd0aCk7XG4gICAgICB2YXIgZ29Ub0l0ZW0gPSAwO1xuXG4gICAgICAvLyBFbnRlciAvIFNwYWNlXG4gICAgICBpZiAoIGtleSA9PT0gMTMgfHwga2V5ID09PSAzMiApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgZGlyZWN0aW9uYWwga2V5XG4gICAgICBpZiAoIGlzUHJldktleSB8fCBpc05leHRLZXkgKSB7XG4gICAgICAgIGlmICggIV90aGlzLm9wdGlvbnMuYWxsb3dXcmFwICYmIGlzRmlyc3RPckxhc3RJdGVtICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggaXNQcmV2S2V5ICkge1xuICAgICAgICAgIGdvVG9JdGVtID0gX3RoaXMudXRpbHMucHJldmlvdXNFbmFibGVkSXRlbShfdGhpcy5sb29rdXBJdGVtcywgaWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggaXNOZXh0S2V5ICkge1xuICAgICAgICAgIGdvVG9JdGVtID0gX3RoaXMudXRpbHMubmV4dEVuYWJsZWRJdGVtKF90aGlzLmxvb2t1cEl0ZW1zLCBpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuaGlnaGxpZ2h0KGdvVG9JdGVtKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGFiIC8gRW50ZXIgLyBFU0NcbiAgICAgIGlmICggaXNTZWxlY3RLZXkgJiYgX3RoaXMuc3RhdGUub3BlbmVkICkge1xuICAgICAgICBfdGhpcy5zZWxlY3QoaWR4KTtcblxuICAgICAgICBpZiAoICFfdGhpcy5zdGF0ZS5tdWx0aXBsZSB8fCAhX3RoaXMub3B0aW9ucy5tdWx0aXBsZS5rZWVwTWVudU9wZW4gKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3BhY2UgLyBFbnRlciAvIExlZnQgLyBVcCAvIFJpZ2h0IC8gRG93blxuICAgICAgaWYgKCBpc09wZW5LZXkgJiYgIV90aGlzLnN0YXRlLm9wZW5lZCApIHtcbiAgICAgICAgX3RoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiogVXBkYXRlIHRoZSBpdGVtcyBvYmplY3QgKi9cbiAgICByZWZyZXNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLnBvcHVsYXRlKCk7XG4gICAgICBfdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdSZWZyZXNoJywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKiogU2V0IG9wdGlvbnMgYm94IHdpZHRoL2hlaWdodCAqL1xuICAgIHNldE9wdGlvbnNEaW1lbnNpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBvcHRpb25zIGJveCBoZWlnaHRcbiAgICAgIC8vIFNldCBhIHRlbXBvcmFyeSBjbGFzcyBvbiB0aGUgaGlkZGVuIHBhcmVudCBvZiB0aGUgZWxlbWVudFxuICAgICAgdmFyIGhpZGRlbkNoaWxkcmVuID0gX3RoaXMuZWxlbWVudHMuaXRlbXMuY2xvc2VzdCgnOnZpc2libGUnKS5jaGlsZHJlbignOmhpZGRlbicpLmFkZENsYXNzKF90aGlzLmNsYXNzZXMudGVtcHNob3cpO1xuICAgICAgdmFyIG1heEhlaWdodCA9IF90aGlzLm9wdGlvbnMubWF4SGVpZ2h0O1xuICAgICAgdmFyIGl0ZW1zV2lkdGggPSBfdGhpcy5lbGVtZW50cy5pdGVtcy5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgd3JhcHBlcldpZHRoID0gX3RoaXMuZWxlbWVudHMud3JhcHBlci5vdXRlcldpZHRoKCkgLSAoaXRlbXNXaWR0aCAtIF90aGlzLmVsZW1lbnRzLml0ZW1zLndpZHRoKCkpO1xuXG4gICAgICAvLyBTZXQgdGhlIGRpbWVuc2lvbnMsIG1pbmltdW0gaXMgd3JhcHBlciB3aWR0aCwgZXhwYW5kIGZvciBsb25nIGl0ZW1zIGlmIG9wdGlvbiBpcyB0cnVlXG4gICAgICBpZiAoICFfdGhpcy5vcHRpb25zLmV4cGFuZFRvSXRlbVRleHQgfHwgd3JhcHBlcldpZHRoID4gaXRlbXNXaWR0aCApIHtcbiAgICAgICAgX3RoaXMuZmluYWxXaWR0aCA9IHdyYXBwZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc2Nyb2xsYmFyIHdpZHRoIGlzIGluY2x1ZGVkXG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmNzcygnb3ZlcmZsb3cnLCAnc2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gU2V0IGEgcmVhbGx5IGxvbmcgd2lkdGggZm9yIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlclxuICAgICAgICBfdGhpcy5lbGVtZW50cy5vdXRlcldyYXBwZXIud2lkdGgoOWU0KTtcbiAgICAgICAgX3RoaXMuZmluYWxXaWR0aCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zLndpZHRoKCk7XG4gICAgICAgIC8vIFNldCBzY3JvbGwgYmFyIHRvIGF1dG9cbiAgICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXMuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLndpZHRoKCcnKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXMud2lkdGgoX3RoaXMuZmluYWxXaWR0aCkuaGVpZ2h0KCkgPiBtYXhIZWlnaHQgJiYgX3RoaXMuZWxlbWVudHMuaXRlbXMuaGVpZ2h0KG1heEhlaWdodCk7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgdGVtcG9yYXJ5IGNsYXNzXG4gICAgICBoaWRkZW5DaGlsZHJlbi5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLnRlbXBzaG93KTtcbiAgICB9LFxuXG4gICAgLyoqIERldGVjdCBpZiB0aGUgb3B0aW9ucyBib3ggaXMgaW5zaWRlIHRoZSB3aW5kb3cgKi9cbiAgICBpc0luVmlld3BvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBzY3JvbGxUb3AgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHdpbkhlaWdodCA9ICR3aW4uaGVpZ2h0KCk7XG4gICAgICB2YXIgdWlQb3NYID0gX3RoaXMuZWxlbWVudHMub3V0ZXJXcmFwcGVyLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB1aUhlaWdodCA9IF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5vdXRlckhlaWdodCgpO1xuXG4gICAgICB2YXIgZml0c0Rvd24gPSAodWlQb3NYICsgdWlIZWlnaHQgKyBfdGhpcy5pdGVtc0hlaWdodCkgPD0gKHNjcm9sbFRvcCArIHdpbkhlaWdodCk7XG4gICAgICB2YXIgZml0c0Fib3ZlID0gKHVpUG9zWCAtIF90aGlzLml0ZW1zSGVpZ2h0KSA+IHNjcm9sbFRvcDtcblxuICAgICAgLy8gSWYgaXQgZG9lcyBub3QgZml0IGJlbG93LCBvbmx5IHJlbmRlciBpdFxuICAgICAgLy8gYWJvdmUgaXQgZml0J3MgdGhlcmUuXG4gICAgICAvLyBJdCdzIGFjY2VwdGFibGUgdGhhdCB0aGUgdXNlciBuZWVkcyB0b1xuICAgICAgLy8gc2Nyb2xsIHRoZSB2aWV3cG9ydCB0byBzZWUgdGhlIGN1dCBvZmYgVUlcbiAgICAgIHZhciByZW5kZXJBYm92ZSA9ICFmaXRzRG93biAmJiBmaXRzQWJvdmU7XG5cbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci50b2dnbGVDbGFzcyhfdGhpcy5jbGFzc2VzLmFib3ZlLCByZW5kZXJBYm92ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uIGlzIHZpc2libGUgYW5kIHNjcm9sbCB0aGUgb3B0aW9ucyBib3ggdG8gc2hvdyBpdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IGluZGV4IC0gSW5kZXggb2YgdGhlIHNlbGVjdGVkIGl0ZW1zXG4gICAgICovXG4gICAgZGV0ZWN0SXRlbVZpc2liaWxpdHk6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyICRmaWx0ZXJlZExpID0gX3RoaXMuJGxpLmZpbHRlcignW2RhdGEtaW5kZXhdJyk7XG5cbiAgICAgIGlmICggX3RoaXMuc3RhdGUubXVsdGlwbGUgKSB7XG4gICAgICAgIC8vIElmIGluZGV4IGlzIGFuIGFycmF5LCB3ZSBjYW4gYXNzdW1lIGEgbXVsdGlwbGUgc2VsZWN0IGFuZCB3ZVxuICAgICAgICAvLyB3YW50IHRvIHNjcm9sbCB0byB0aGUgdXBwZXJtb3N0IHNlbGVjdGVkIGl0ZW0hXG4gICAgICAgIC8vIE1hdGgubWluLmFwcGx5KE1hdGgsIGluZGV4KSByZXR1cm5zIHRoZSBsb3dlc3QgZW50cnkgaW4gYW4gQXJyYXkuXG4gICAgICAgIGluZGV4ID0gKCQuaXNBcnJheShpbmRleCkgJiYgaW5kZXgubGVuZ3RoID09PSAwKSA/IDAgOiBpbmRleDtcbiAgICAgICAgaW5kZXggPSAkLmlzQXJyYXkoaW5kZXgpID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgaW5kZXgpIDogaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBsaUhlaWdodCA9ICRmaWx0ZXJlZExpLmVxKGluZGV4KS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIGxpVG9wID0gJGZpbHRlcmVkTGlbaW5kZXhdLm9mZnNldFRvcDtcbiAgICAgIHZhciBpdGVtc1Njcm9sbFRvcCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zU2Nyb2xsLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHNjcm9sbFQgPSBsaVRvcCArIGxpSGVpZ2h0ICogMjtcblxuICAgICAgX3RoaXMuZWxlbWVudHMuaXRlbXNTY3JvbGwuc2Nyb2xsVG9wKFxuICAgICAgICBzY3JvbGxUID4gaXRlbXNTY3JvbGxUb3AgKyBfdGhpcy5pdGVtc0hlaWdodCA/IHNjcm9sbFQgLSBfdGhpcy5pdGVtc0hlaWdodCA6XG4gICAgICAgICAgbGlUb3AgLSBsaUhlaWdodCA8IGl0ZW1zU2Nyb2xsVG9wID8gbGlUb3AgLSBsaUhlaWdodCA6XG4gICAgICAgICAgICBpdGVtc1Njcm9sbFRvcFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgc2VsZWN0IG9wdGlvbnMgYm94XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gRXZlbnRcbiAgICAgKi9cbiAgICBvcGVuOiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIF90aGlzLm9wdGlvbnMubmF0aXZlT25Nb2JpbGUgJiYgX3RoaXMudXRpbHMuaXNNb2JpbGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlT3BlbicsIF90aGlzKTtcblxuICAgICAgaWYgKCBlICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBfdGhpcy5zdGF0ZS5lbmFibGVkICkge1xuICAgICAgICBfdGhpcy5zZXRPcHRpb25zRGltZW5zaW9ucygpO1xuXG4gICAgICAgIC8vIEZpbmQgYW55IG90aGVyIG9wZW5lZCBpbnN0YW5jZXMgb2Ygc2VsZWN0IGFuZCBjbG9zZSBpdFxuICAgICAgICAkKCcuJyArIF90aGlzLmNsYXNzZXMuaGlkZXNlbGVjdCwgJy4nICsgX3RoaXMuY2xhc3Nlcy5vcGVuKS5jaGlsZHJlbigpW3BsdWdpbk5hbWVdKCdjbG9zZScpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIF90aGlzLml0ZW1zSGVpZ2h0ID0gX3RoaXMuZWxlbWVudHMuaXRlbXMub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgX3RoaXMuaXRlbXNJbm5lckhlaWdodCA9IF90aGlzLmVsZW1lbnRzLml0ZW1zLmhlaWdodCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBvcHRpb25zIGJveCB2aXNpYmlsaXR5XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5hZGRDbGFzcyhfdGhpcy5jbGFzc2VzLm9wZW4pO1xuXG4gICAgICAgIC8vIEdpdmUgZHVtbXkgaW5wdXQgZm9jdXNcbiAgICAgICAgX3RoaXMuZWxlbWVudHMuaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaWYgKCBlICYmIGUudHlwZSAhPT0gJ2ZvY3VzaW4nICkge1xuICAgICAgICAgIF90aGlzLmVsZW1lbnRzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxheWVkIGJpbmRzIGV2ZW50cyBvbiBEb2N1bWVudCB0byBtYWtlIGxhYmVsIGNsaWNrcyB3b3JrXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGRvY1xuICAgICAgICAgICAgLm9uKCdjbGljaycgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCwgJC5wcm94eShfdGhpcy5jbG9zZSwgX3RoaXMpKVxuICAgICAgICAgICAgLm9uKCdzY3JvbGwnICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsICQucHJveHkoX3RoaXMuaXNJblZpZXdwb3J0LCBfdGhpcykpO1xuICAgICAgICB9LCAxKTtcblxuICAgICAgICBfdGhpcy5pc0luVmlld3BvcnQoKTtcblxuICAgICAgICAvLyBQcmV2ZW50IHdpbmRvdyBzY3JvbGwgd2hlbiB1c2luZyBtb3VzZSB3aGVlbCBpbnNpZGUgaXRlbXMgYm94XG4gICAgICAgIGlmICggX3RoaXMub3B0aW9ucy5wcmV2ZW50V2luZG93U2Nyb2xsICkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgJGRvYy5vbignbW91c2V3aGVlbCcgKyBldmVudE5hbWVzcGFjZVN1ZmZpeCArICcgRE9NTW91c2VTY3JvbGwnICsgZXZlbnROYW1lc3BhY2VTdWZmaXgsICcuJyArIF90aGlzLmNsYXNzZXMuc2Nyb2xsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgb3JnRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgICAgICAgICBpZiAoICdkZXRhaWwnICAgICAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LmRldGFpbCAqIC0xOyB9XG4gICAgICAgICAgICBpZiAoICd3aGVlbERlbHRhJyAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGE7ICB9XG4gICAgICAgICAgICBpZiAoICd3aGVlbERlbHRhWScgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGFZOyB9XG4gICAgICAgICAgICBpZiAoICdkZWx0YVknICAgICAgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LmRlbHRhWSAqIC0xOyB9XG5cbiAgICAgICAgICAgIGlmICggc2Nyb2xsVG9wID09PSAodGhpcy5zY3JvbGxIZWlnaHQgLSBfdGhpcy5pdGVtc0lubmVySGVpZ2h0KSAmJiBkZWx0YVkgPCAwIHx8IHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwICkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5kZXRlY3RJdGVtVmlzaWJpbGl0eShfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG5cbiAgICAgICAgX3RoaXMuaGlnaGxpZ2h0KF90aGlzLnN0YXRlLm11bHRpcGxlID8gLTEgOiBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdPcGVuJywgX3RoaXMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiogQ2xvc2UgdGhlIHNlbGVjdCBvcHRpb25zIGJveCAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlQ2xvc2UnLCBfdGhpcyk7XG5cbiAgICAgIC8vIFJlbW92ZSBjdXN0b20gZXZlbnRzIG9uIGRvY3VtZW50XG4gICAgICAkZG9jLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCk7XG5cbiAgICAgIC8vIFJlbW92ZSB2aXNpYmxlIGNsYXNzIHRvIGhpZGUgb3B0aW9ucyBib3hcbiAgICAgIF90aGlzLmVsZW1lbnRzLm91dGVyV3JhcHBlci5yZW1vdmVDbGFzcyhfdGhpcy5jbGFzc2VzLm9wZW4pO1xuXG4gICAgICBfdGhpcy5zdGF0ZS5vcGVuZWQgPSBmYWxzZTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDbG9zZScsIF90aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqIFNlbGVjdCBjdXJyZW50IG9wdGlvbiBhbmQgY2hhbmdlIHRoZSBsYWJlbCAqL1xuICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBfdGhpcy51dGlscy50cmlnZ2VyQ2FsbGJhY2soJ0JlZm9yZUNoYW5nZScsIF90aGlzKTtcblxuICAgICAgaWYgKCBfdGhpcy5zdGF0ZS5tdWx0aXBsZSApIHtcbiAgICAgICAgLy8gUmVzZXQgb2xkIHNlbGVjdGVkXG4gICAgICAgICQuZWFjaChfdGhpcy5sb29rdXBJdGVtcywgZnVuY3Rpb24oaWR4KSB7XG4gICAgICAgICAgX3RoaXMubG9va3VwSXRlbXNbaWR4XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgbmV3IHNlbGVjdGVkXG4gICAgICAgICQuZWFjaChfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCwgZnVuY3Rpb24oaWR4LCB2YWx1ZSkge1xuICAgICAgICAgIF90aGlzLmxvb2t1cEl0ZW1zW3ZhbHVlXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZXEodmFsdWUpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLmN1cnJWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4O1xuXG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDaGFuZ2UnLCBfdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKCBfdGhpcy5zdGF0ZS5jdXJyVmFsdWUgIT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4ICkge1xuICAgICAgICAvLyBBcHBseSBjaGFuZ2VkIHZhbHVlIHRvIG9yaWdpbmFsIHNlbGVjdFxuICAgICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAgIC5wcm9wKCdzZWxlY3RlZEluZGV4JywgX3RoaXMuc3RhdGUuY3VyclZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHgpXG4gICAgICAgICAgLmRhdGEoJ3ZhbHVlJywgX3RoaXMubG9va3VwSXRlbXNbX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHhdLnRleHQpO1xuXG4gICAgICAgIC8vIENoYW5nZSBsYWJlbCB0ZXh0XG4gICAgICAgIF90aGlzLnNldExhYmVsKCk7XG5cbiAgICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdDaGFuZ2UnLCBfdGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCBvcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBvZiB0aGUgb3B0aW9ucyB0aGF0IHdpbGwgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgKi9cbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyICRmaWx0ZXJlZExpID0gX3RoaXMuJGxpLmZpbHRlcignW2RhdGEtaW5kZXhdJykucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodGVkJyk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnQmVmb3JlSGlnaGxpZ2h0JywgX3RoaXMpO1xuXG4gICAgICAvLyBQYXJhbWV0ZXIgaW5kZXggaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBub3QgYmUgYSBkaXNhYmxlZCBpdGVtXG4gICAgICBpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IC0xIHx8IF90aGlzLmxvb2t1cEl0ZW1zW2luZGV4XS5kaXNhYmxlZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkZmlsdGVyZWRMaVxuICAgICAgICAuZXEoX3RoaXMuc3RhdGUuaGlnaGxpZ2h0ZWRJZHggPSBpbmRleClcbiAgICAgICAgLmFkZENsYXNzKCdoaWdobGlnaHRlZCcpO1xuXG4gICAgICBfdGhpcy5kZXRlY3RJdGVtVmlzaWJpbGl0eShpbmRleCk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnSGlnaGxpZ2h0JywgX3RoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3Qgb3B0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleCBvZiB0aGUgb3B0aW9uIHRoYXQgd2lsbCBiZSBzZWxlY3RlZFxuICAgICAqL1xuICAgIHNlbGVjdDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgJGZpbHRlcmVkTGkgPSBfdGhpcy4kbGkuZmlsdGVyKCdbZGF0YS1pbmRleF0nKTtcblxuICAgICAgX3RoaXMudXRpbHMudHJpZ2dlckNhbGxiYWNrKCdCZWZvcmVTZWxlY3QnLCBfdGhpcywgaW5kZXgpO1xuXG4gICAgICAvLyBQYXJhbWV0ZXIgaW5kZXggaXMgcmVxdWlyZWQgYW5kIHNob3VsZCBub3QgYmUgYSBkaXNhYmxlZCBpdGVtXG4gICAgICBpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IC0xIHx8IF90aGlzLmxvb2t1cEl0ZW1zW2luZGV4XS5kaXNhYmxlZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlLm11bHRpcGxlICkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgc2VsZWN0ZWRJZHggaXMgYW4gYXJyYXlcbiAgICAgICAgX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggPSAkLmlzQXJyYXkoX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHgpID8gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggOiBbX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHhdO1xuXG4gICAgICAgIHZhciBoYXNTZWxlY3RlZEluZGV4ID0gJC5pbkFycmF5KGluZGV4LCBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCk7XG4gICAgICAgIGlmICggaGFzU2VsZWN0ZWRJbmRleCAhPT0gLTEgKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHguc3BsaWNlKGhhc1NlbGVjdGVkSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnN0YXRlLnNlbGVjdGVkSWR4LnB1c2goaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGZpbHRlcmVkTGlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gJC5pbkFycmF5KGluZGV4LCBfdGhpcy5zdGF0ZS5zZWxlY3RlZElkeCkgIT09IC0xO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGZpbHRlcmVkTGlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJylcbiAgICAgICAgICAuZXEoX3RoaXMuc3RhdGUuc2VsZWN0ZWRJZHggPSBpbmRleClcbiAgICAgICAgICAuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIV90aGlzLnN0YXRlLm11bHRpcGxlIHx8ICFfdGhpcy5vcHRpb25zLm11bHRpcGxlLmtlZXBNZW51T3BlbiApIHtcbiAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2hhbmdlKCk7XG5cbiAgICAgIF90aGlzLnV0aWxzLnRyaWdnZXJDYWxsYmFjaygnU2VsZWN0JywgX3RoaXMsIGluZGV4KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kIGFuZCByZW1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlc2VydmVEYXRhIC0gQ2hlY2sgaWYgdGhlIGRhdGEgb24gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQgdG9vXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24ocHJlc2VydmVEYXRhKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIF90aGlzLnN0YXRlICYmIF90aGlzLnN0YXRlLmVuYWJsZWQgKSB7XG4gICAgICAgIF90aGlzLmVsZW1lbnRzLml0ZW1zLmFkZChfdGhpcy5lbGVtZW50cy53cmFwcGVyKS5hZGQoX3RoaXMuZWxlbWVudHMuaW5wdXQpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmICggIXByZXNlcnZlRGF0YSApIHtcbiAgICAgICAgICBfdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKHBsdWdpbk5hbWUpLnJlbW92ZURhdGEoJ3ZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy4kZWxlbWVudC5wcm9wKCd0YWJpbmRleCcsIF90aGlzLm9yaWdpbmFsVGFiaW5kZXgpLm9mZihldmVudE5hbWVzcGFjZVN1ZmZpeCkub2ZmKF90aGlzLmV2ZW50VHJpZ2dlcnMpLnVud3JhcCgpLnVud3JhcCgpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQSByZWFsbHkgbGlnaHR3ZWlnaHQgcGx1Z2luIHdyYXBwZXIgYXJvdW5kIHRoZSBjb25zdHJ1Y3RvcixcbiAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zXG4gICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUpO1xuXG4gICAgICBpZiAoIGRhdGEgJiYgIWRhdGEuZGlzYWJsZU9uTW9iaWxlICkge1xuICAgICAgICAodHlwZW9mIGFyZ3MgPT09ICdzdHJpbmcnICYmIGRhdGFbYXJnc10pID8gZGF0YVthcmdzXSgpIDogZGF0YS5pbml0KGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJC5kYXRhKHRoaXMsIHBsdWdpbk5hbWUsIG5ldyBTZWxlY3RyaWModGhpcywgYXJncykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHBsdWdpbiBvcHRpb25zXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICAkLmZuW3BsdWdpbk5hbWVdLmRlZmF1bHRzID0ge1xuICAgIG9uQ2hhbmdlICAgICAgICAgICAgIDogZnVuY3Rpb24oZWxtKSB7ICQoZWxtKS5jaGFuZ2UoKTsgfSxcbiAgICBtYXhIZWlnaHQgICAgICAgICAgICA6IDMwMCxcbiAgICBrZXlTZWFyY2hUaW1lb3V0ICAgICA6IDUwMCxcbiAgICBhcnJvd0J1dHRvbk1hcmt1cCAgICA6ICc8YiBjbGFzcz1cImJ1dHRvblwiPiYjeDI1YmU7PC9iPicsXG4gICAgZGlzYWJsZU9uTW9iaWxlICAgICAgOiBmYWxzZSxcbiAgICBuYXRpdmVPbk1vYmlsZSAgICAgICA6IHRydWUsXG4gICAgb3Blbk9uRm9jdXMgICAgICAgICAgOiB0cnVlLFxuICAgIG9wZW5PbkhvdmVyICAgICAgICAgIDogZmFsc2UsXG4gICAgaG92ZXJJbnRlbnRUaW1lb3V0ICAgOiA1MDAsXG4gICAgZXhwYW5kVG9JdGVtVGV4dCAgICAgOiBmYWxzZSxcbiAgICByZXNwb25zaXZlICAgICAgICAgICA6IGZhbHNlLFxuICAgIHByZXZlbnRXaW5kb3dTY3JvbGwgIDogdHJ1ZSxcbiAgICBpbmhlcml0T3JpZ2luYWxXaWR0aCA6IGZhbHNlLFxuICAgIGFsbG93V3JhcCAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBzdG9wUHJvcGFnYXRpb24gICAgICA6IHRydWUsXG4gICAgb3B0aW9uc0l0ZW1CdWlsZGVyICAgOiAne3RleHR9JywgLy8gZnVuY3Rpb24oaXRlbURhdGEsIGVsZW1lbnQsIGluZGV4KVxuICAgIGxhYmVsQnVpbGRlciAgICAgICAgIDogJ3t0ZXh0fScsIC8vIGZ1bmN0aW9uKGN1cnJJdGVtKVxuICAgIGxpc3RCdWlsZGVyICAgICAgICAgIDogZmFsc2UsICAgIC8vIGZ1bmN0aW9uKGl0ZW1zKVxuICAgIGtleXMgICAgICAgICAgICAgICAgIDoge1xuICAgICAgcHJldmlvdXMgOiBbMzcsIDM4XSwgICAgICAgICAgICAgICAgIC8vIExlZnQgLyBVcFxuICAgICAgbmV4dCAgICAgOiBbMzksIDQwXSwgICAgICAgICAgICAgICAgIC8vIFJpZ2h0IC8gRG93blxuICAgICAgc2VsZWN0ICAgOiBbOSwgMTMsIDI3XSwgICAgICAgICAgICAgIC8vIFRhYiAvIEVudGVyIC8gRXNjYXBlXG4gICAgICBvcGVuICAgICA6IFsxMywgMzIsIDM3LCAzOCwgMzksIDQwXSwgLy8gRW50ZXIgLyBTcGFjZSAvIExlZnQgLyBVcCAvIFJpZ2h0IC8gRG93blxuICAgICAgY2xvc2UgICAgOiBbOSwgMjddICAgICAgICAgICAgICAgICAgIC8vIFRhYiAvIEVzY2FwZVxuICAgIH0sXG4gICAgY3VzdG9tQ2xhc3MgICAgICAgICAgOiB7XG4gICAgICBwcmVmaXg6IHBsdWdpbk5hbWUsXG4gICAgICBjYW1lbENhc2U6IGZhbHNlXG4gICAgfSxcbiAgICBtdWx0aXBsZSAgICAgICAgICAgICAgOiB7XG4gICAgICBzZXBhcmF0b3I6ICcsICcsXG4gICAgICBrZWVwTWVudU9wZW46IHRydWUsXG4gICAgICBtYXhMYWJlbEVudHJpZXM6IGZhbHNlXG4gICAgfVxuICB9O1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NlbGVjdHJpYy9wdWJsaWMvanF1ZXJ5LnNlbGVjdHJpYy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
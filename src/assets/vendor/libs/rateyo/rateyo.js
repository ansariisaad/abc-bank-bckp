/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/rateyo/rateyo.js":
/*!*******************************!*\
  !*** ./libs/rateyo/rateyo.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rateYo: function() { return /* reexport default from dynamic */ rateyo_src_jquery_rateyo__WEBPACK_IMPORTED_MODULE_0___default.a; }\n/* harmony export */ });\n/* harmony import */ var rateyo_src_jquery_rateyo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rateyo/src/jquery.rateyo */ \"./node_modules/rateyo/src/jquery.rateyo.js\");\n/* harmony import */ var rateyo_src_jquery_rateyo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rateyo_src_jquery_rateyo__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://Materialize/./libs/rateyo/rateyo.js?");

/***/ }),

/***/ "./node_modules/rateyo/src/jquery.rateyo.js":
/*!**************************************************!*\
  !*** ./node_modules/rateyo/src/jquery.rateyo.js ***!
  \**************************************************/
/***/ (function() {

eval("/*****\n* rateyo - v2.3.5\n* http://prrashi.github.io/rateyo/\n* Copyright (c) 2014 Prashanth Pamidi; Licensed MIT\n*****/\n\n;(function ($) {\n  \"use strict\";\n\n  // The basic svg string required to generate stars\n  var BASICSTAR = \"<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?>\"+\n                  \"<svg version=\\\"1.1\\\"\"+\n                        \"xmlns=\\\"http://www.w3.org/2000/svg\\\"\"+\n                        \"viewBox=\\\"0 12.705 512 486.59\\\"\"+\n                        \"x=\\\"0px\\\" y=\\\"0px\\\"\"+\n                        \"xml:space=\\\"preserve\\\">\"+\n                    \"<polygon \"+\n                              \"points=\\\"256.814,12.705 317.205,198.566\"+\n                                      \" 512.631,198.566 354.529,313.435 \"+\n                                      \"414.918,499.295 256.814,384.427 \"+\n                                      \"98.713,499.295 159.102,313.435 \"+\n                                      \"1,198.566 196.426,198.566 \\\"/>\"+\n                  \"</svg>\";\n\n  // The Default values of different options available in the Plugin\n  var DEFAULTS = {\n\n    starWidth : \"32px\",\n    normalFill: \"gray\",\n    ratedFill : \"#f39c12\",\n    numStars  : 5,\n    maxValue  : 5,\n    precision : 1,\n    rating    : 0,\n    fullStar  : false,\n    halfStar  : false,\n    readOnly  : false,\n    spacing   : \"0px\",\n    rtl       : false,\n    multiColor: null,\n    onInit    : null,\n    onChange  : null,\n    onSet     : null,\n    starSvg   : null\n  };\n\n  //Default colors for multi-color rating\n  var MULTICOLOR_OPTIONS = {\n\n    startColor: \"#c0392b\", //red\n    endColor  : \"#f1c40f\"  //yellow\n  };\n\n  // http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser\n  function isMobileBrowser () {\n    var check = false;\n    /* jshint ignore:start */\n    (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);\n    /* jshint ignore:end */\n    return check;\n  }\n\n  function checkPrecision (value, minValue, maxValue) {\n\n    /*\n     * This function removes the unnecessary precision, at Min and Max Values\n     */\n\n    // Its like comparing 0.0 with 0, which is true\n    if (value === minValue) {\n\n      value = minValue;\n    }\n    else if(value === maxValue) {\n\n      value = maxValue;\n    }\n\n    return value;\n  }\n\n  function checkBounds (value, minValue, maxValue) {\n\n    /*\n     * Check if the value is between min and max values, if not, throw an error\n     */\n\n    var isValid = value >= minValue && value <= maxValue;\n\n    if(!isValid){\n\n        throw Error(\"Invalid Rating, expected value between \"+ minValue +\n                    \" and \" + maxValue);\n    }\n\n    return value;\n  }\n\n  function isDefined(value) {\n\n    // Better way to check if a variable is defined or not\n    return typeof value !== \"undefined\";\n  }\n\n  // Regex to match Colors in Hex Format like #FF00FF\n  var hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;\n\n  var hexToRGB = function (hex) {\n\n    /*\n     * Extracts and returns the Red, Blue, Green Channel values,\n     * in the form of decimals\n     */\n\n    if (!hexRegex.test(hex)) {\n\n      return null;\n    }\n\n    var hexValues = hexRegex.exec(hex),\n        r = parseInt(hexValues[1], 16),\n        g = parseInt(hexValues[2], 16),\n        b = parseInt(hexValues[3], 16);\n\n    return {r:r, g:g, b:b};\n  };\n\n  function getChannelValue(startVal, endVal, percent) {\n\n    /*\n     * Returns a value between `startVal` and `endVal` based on the percent\n     */\n\n    var newVal = (endVal - startVal)*(percent/100);\n\n    newVal = Math.round(startVal + newVal).toString(16);\n\n    if (newVal.length === 1) {\n\n        newVal = \"0\" + newVal;\n    }\n\n    return newVal;\n  }\n\n  function getColor (startColor, endColor, percent) {\n\n    /*\n     * Given the percentage( `percent` ) of `endColor` to be mixed\n     * with the `startColor`, returns the mixed color.\n     * Colors should be only in Hex Format\n     */\n\n    if (!startColor || !endColor) {\n\n      return null;\n    }\n\n    percent = isDefined(percent)? percent : 0;\n\n    startColor = hexToRGB(startColor);\n    endColor = hexToRGB(endColor);\n\n    var r = getChannelValue(startColor.r, endColor.r, percent),\n        b = getChannelValue(startColor.b, endColor.b, percent),\n        g = getChannelValue(startColor.g, endColor.g, percent);\n\n    return \"#\" + r + g + b;\n  }\n\n  function RateYo ($node, options) {\n\n    /*\n     * The Contructor, whose instances are used by plugin itself\n     */\n\n    // Storing the HTML element as a property, for future access\n    this.node = $node.get(0);\n\n    var that = this;\n\n    // Remove any stuff that is present inside the container, and add the plugin class\n    $node.empty().addClass(\"jq-ry-container\");\n\n    /*\n     * Basically the plugin displays the rating using two rows of stars lying one above\n     * the other, the row that is on the top represents the actual rating, and the one\n     * behind acts just like a background.\n     *\n     * `$groupWrapper`: is an element that wraps both the rows\n     * `$normalGroup`: is the container for row of stars thats behind and\n     *                 acts as background\n     * `$ratedGroup`: is the container for row of stars that display the actual rating.\n     *\n     * The rating is displayed by adjusting the width of `$ratedGroup`\n     */\n    var $groupWrapper = $(\"<div/>\").addClass(\"jq-ry-group-wrapper\")\n                                   .appendTo($node);\n\n    var $normalGroup = $(\"<div/>\").addClass(\"jq-ry-normal-group\")\n                                  .addClass(\"jq-ry-group\")\n                                  .appendTo($groupWrapper);\n\n    var $ratedGroup = $(\"<div/>\").addClass(\"jq-ry-rated-group\")\n                                 .addClass(\"jq-ry-group\")\n                                 .appendTo($groupWrapper);\n\n    /*\n     * Variable `step`: store the value of the rating for each star\n     *                  eg: if `maxValue` is 5 and `numStars` is 5, value of each star\n     *                      is 1.\n     * Variable `starWidth`: stores the decimal value of width of star in units of px\n     * Variable `percentOfStar`: stores the percentage of width each star takes w.r.t\n     *                           the container\n     * Variable `spacing`: stores the decimal value of the spacing between stars\n     *                     in the units of px\n     * Variable `percentOfSpacing`: stores the percentage of width of the spacing\n     *                              between stars w.r.t the container\n     */\n    var step, starWidth, percentOfStar, spacing,\n        percentOfSpacing, containerWidth, minValue = 0;\n\n    /*\n     * `currentRating` contains rating that is being displayed at the latest point of\n     * time.\n     *\n     * When ever you hover over the plugin UI, the rating value changes\n     * according to the place where you point the cursor, currentRating contains\n     * the current value of rating that is being shown in the UI\n     */\n    var currentRating = options.rating;\n\n    // A flag to store if the plugin is already being displayed in the UI\n    var isInitialized = false;\n\n    function showRating (ratingVal) {\n\n      /*\n       * The function is responsible for displaying the rating by changing\n       * the width of `$ratedGroup`\n       */\n\n      if (!isDefined(ratingVal)) {\n\n        ratingVal = options.rating;\n      }\n\n      // Storing the value that is being shown in `currentRating`.\n      currentRating = ratingVal;\n\n      var numStarsToShow = ratingVal/step;\n\n      // calculating the percentage of width of $ratedGroup with respect to its parent\n      var percent = numStarsToShow*percentOfStar;\n\n      if (numStarsToShow > 1) {\n\n        // adding the percentage of space that is taken by the gap the stars\n        percent += (Math.ceil(numStarsToShow) - 1)*percentOfSpacing;\n      }\n\n      setRatedFill(options.ratedFill);\n\n      percent = options.rtl ? 100 - percent : percent;\n\n      if (percent < 0) {\n\n        percent = 0;\n      } else if (percent > 100) {\n\n        percent = 100;\n      }\n\n      $ratedGroup.css(\"width\", percent + \"%\");\n    }\n\n    function setContainerWidth () {\n\n      /*\n       * Set the width of the `this.node` based on the width of each star and\n       * the space between them\n       */\n\n      containerWidth = starWidth*options.numStars + spacing*(options.numStars - 1);\n\n      percentOfStar = (starWidth/containerWidth)*100;\n\n      percentOfSpacing = (spacing/containerWidth)*100;\n\n      $node.width(containerWidth);\n\n      showRating();\n    }\n\n    function setStarWidth (newWidth) {\n\n      /*\n       * Set the width and height of each SVG star, called whenever one changes the\n       * `starWidth` option\n       */\n\n      // The width and height of the star should be the same\n      var starHeight = options.starWidth = newWidth;\n\n      starWidth = window.parseFloat(options.starWidth.replace(\"px\", \"\"));\n\n      $normalGroup.find(\"svg\")\n                  .attr({width : options.starWidth,\n                         height: starHeight});\n\n      $ratedGroup.find(\"svg\")\n                 .attr({width : options.starWidth,\n                        height: starHeight});\n\n      setContainerWidth();\n\n      return $node;\n    }\n\n    function setSpacing (newSpacing) {\n\n      /*\n       * Set spacing between the SVG stars, called whenever one changes\n       * the `spacing` option\n       */\n\n      options.spacing = newSpacing;\n\n      spacing = parseFloat(options.spacing.replace(\"px\", \"\"));\n\n      $normalGroup.find(\"svg:not(:first-child)\")\n                  .css({\"margin-left\": newSpacing});\n\n      $ratedGroup.find(\"svg:not(:first-child)\")\n                 .css({\"margin-left\": newSpacing});\n\n      setContainerWidth();\n\n      return $node;\n    }\n\n    function setNormalFill (newFill) {\n\n      /*\n       * Set the background fill of the Stars, called whenever one changes the\n       * `normalFill` option\n       */\n\n      options.normalFill = newFill;\n\n      var $svgs = (options.rtl ? $ratedGroup : $normalGroup).find(\"svg\");\n\n      $svgs.attr({fill: options.normalFill});\n\n      return $node;\n    }\n\n    /*\n     * Store the recent `ratedFill` option in a variable\n     * so that if multiColor is unset, we can use the perviously set `ratedFill`\n     * from this variable\n     */\n    var ratedFill = options.ratedFill;\n\n    function setRatedFill (newFill) {\n\n      /*\n       * Set ratedFill of the stars, called when one changes the `ratedFill` option\n       */\n\n      /*\n       * If `multiColor` option is set, `newFill` variable is dynamically set\n       * based on the rating, what ever set as parameter will be discarded\n       */\n      if (options.multiColor) {\n\n        var ratingDiff = currentRating - minValue,\n            percentCovered = (ratingDiff/options.maxValue)*100;\n\n        var colorOpts  = options.multiColor || {},\n            startColor = colorOpts.startColor || MULTICOLOR_OPTIONS.startColor,\n            endColor   = colorOpts.endColor || MULTICOLOR_OPTIONS.endColor;\n\n        newFill = getColor(startColor, endColor, percentCovered);\n      } else {\n\n        ratedFill = newFill;\n      }\n\n      options.ratedFill = newFill;\n\n      var $svgs = (options.rtl ? $normalGroup : $ratedGroup).find(\"svg\");\n\n      $svgs.attr({fill: options.ratedFill});\n\n      return $node;\n    }\n\n    function setRtl (newValue) {\n\n      newValue = !!newValue;\n\n      options.rtl = newValue;\n\n      setNormalFill(options.normalFill);\n      showRating();\n    }\n\n    function setMultiColor (colorOptions) {\n\n      /*\n       * called whenever one changes the `multiColor` option\n       */\n\n      options.multiColor = colorOptions;\n\n      // set the recently set `ratedFill` option, if multiColor Options are unset\n      setRatedFill(colorOptions ? colorOptions : ratedFill);\n    }\n\n    function setNumStars (newValue) {\n\n      /*\n       * Set the number of stars to use to display the rating, called whenever one\n       * changes the `numStars` option\n       */\n\n      options.numStars = newValue;\n\n      step = options.maxValue/options.numStars;\n\n      $normalGroup.empty();\n      $ratedGroup.empty();\n\n      for (var i=0; i<options.numStars; i++) {\n\n        $normalGroup.append($(options.starSvg || BASICSTAR));\n        $ratedGroup.append($(options.starSvg || BASICSTAR));\n      }\n\n      setStarWidth(options.starWidth);\n      setNormalFill(options.normalFill);\n      setSpacing(options.spacing);\n\n      showRating();\n\n      return $node;\n    }\n\n    function setMaxValue (newValue) {\n\n      /*\n       * set the Maximum Value of rating to be allowed, called whenever\n       * one changes the `maxValue` option\n       */\n\n      options.maxValue = newValue;\n\n      step = options.maxValue/options.numStars;\n\n      if (options.rating > newValue) {\n\n        setRating(newValue);\n      }\n\n      showRating();\n\n      return $node;\n    }\n\n    function setPrecision (newValue) {\n\n      /*\n       * Set the precision of the rating value, called if one changes the\n       * `precision` option\n       */\n\n      options.precision = newValue;\n\n      setRating(options.rating);\n\n      return $node;\n    }\n\n    function setHalfStar (newValue) {\n\n      /*\n       * This function will be called if one changes the `halfStar` option\n       */\n\n      options.halfStar = newValue;\n\n      return $node;\n    }\n\n    function setFullStar (newValue) {\n\n      /*\n       * This function will be called if one changes the `fullStar` option\n       */\n\n      options.fullStar = newValue;\n\n      return $node;\n    }\n\n    function round (value) {\n\n      /*\n       * Rounds the value of rating if `halfStar` or `fullStar` options are chosen\n       */\n\n      var remainder = value%step,\n          halfStep = step/2,\n          isHalfStar = options.halfStar,\n          isFullStar = options.fullStar;\n\n      if (!isFullStar && !isHalfStar) {\n\n        return value;\n      }\n\n      if (isFullStar || (isHalfStar && remainder > halfStep)) {\n\n        value += step - remainder;\n      } else {\n\n        value = value - remainder;\n\n        if (remainder > 0) {\n\n          value += halfStep;\n        }\n      }\n\n      return value;\n    }\n\n    function calculateRating (e) {\n\n      /*\n       * Calculates and returns the rating based on the position of cursor w.r.t the\n       * plugin container\n       */\n\n      var position = $normalGroup.offset(),\n          nodeStartX = position.left,\n          nodeEndX = nodeStartX + $normalGroup.width();\n\n      var maxValue = options.maxValue;\n\n      // The x-coordinate(position) of the mouse pointer w.r.t page\n      var pageX = e.pageX;\n\n      var calculatedRating = 0;\n\n      // If the mouse pointer is to the left of the container\n      if(pageX < nodeStartX) {\n\n        calculatedRating = minValue;\n      }else if (pageX > nodeEndX) { // If the mouse pointer is right of the container\n\n        calculatedRating = maxValue;\n      }else { // If the mouse pointer is inside the continer\n\n        /*\n         * The fraction of width covered by the pointer w.r.t to the total width\n         * of the container.\n         */\n        var calcPrcnt = ((pageX - nodeStartX)/(nodeEndX - nodeStartX));\n\n        if (spacing > 0) {\n\n          /*\n           * If there is spacing between stars, take the percentage of width covered\n           * and subtract the percentage of width covered by stars and spacing, to find\n           * how many stars are covered, the number of stars covered is the rating\n           *\n           * TODO: I strongly feel that this logic can be improved!, Please help!\n           */\n          calcPrcnt *= 100;\n\n          var remPrcnt = calcPrcnt;\n\n          while (remPrcnt > 0) {\n\n            if (remPrcnt > percentOfStar) {\n\n              calculatedRating += step;\n              remPrcnt -= (percentOfStar + percentOfSpacing);\n            } else {\n\n              calculatedRating += remPrcnt/percentOfStar*step;\n              remPrcnt = 0;\n            }\n          }\n        } else {\n\n          /*\n           * If there is not spacing between stars, the fraction of width covered per\n           * `maxValue` is the rating\n           */\n          calculatedRating = calcPrcnt * (options.maxValue);\n        }\n\n        // Round the rating if `halfStar` or `fullStar` options are chosen\n        calculatedRating = round(calculatedRating);\n      }\n\n      if (options.rtl) {\n\n        calculatedRating = maxValue - calculatedRating;\n      }\n\n      return parseFloat(calculatedRating);\n    }\n\n    function setReadOnly (newValue) {\n\n      /*\n       * UnBinds mouse event handlers, called when whenever one changes the\n       * `readOnly` option\n       */\n\n      options.readOnly = newValue;\n\n      $node.attr(\"readonly\", true);\n\n      unbindEvents();\n\n      if (!newValue) {\n\n        $node.removeAttr(\"readonly\");\n\n        bindEvents();\n      }\n\n      return $node;\n    }\n\n    function setRating (newValue) {\n\n      /*\n       * Sets the rating of the Plugin, Called when option `rating` is changed\n       * or, when `rating` method is called\n       */\n\n      var rating = newValue;\n\n      var maxValue = options.maxValue;\n\n      if (typeof rating === \"string\") {\n\n        // If rating is given in percentage, maxValue should be 100\n        if (rating[rating.length - 1] === \"%\") {\n\n          rating = rating.substr(0, rating.length - 1);\n          maxValue = 100;\n\n          setMaxValue(maxValue);\n        }\n\n        rating = parseFloat(rating);\n      }\n\n      checkBounds(rating, minValue, maxValue);\n\n      rating = parseFloat(rating.toFixed(options.precision));\n\n      checkPrecision(parseFloat(rating), minValue, maxValue);\n\n      options.rating = rating;\n\n      showRating();\n\n      if (isInitialized) {\n\n        $node.trigger(\"rateyo.set\", {rating: rating});\n      }\n\n      return $node;\n    }\n\n    function setOnInit (method) {\n\n      /*\n       * set what method to be called on Initialization\n       */\n\n      options.onInit = method;\n\n      return $node;\n    }\n\n    function setOnSet (method) {\n\n      /*\n       * set what method to be called when rating is set\n       */\n\n      options.onSet = method;\n\n      return $node;\n    }\n\n    function setOnChange (method) {\n\n      /*\n       * set what method to be called rating in the UI is changed\n       */\n\n      options.onChange = method;\n\n      return $node;\n    }\n\n    this.rating = function (newValue) {\n\n      /*\n       * rating getter/setter\n       */\n\n      if (!isDefined(newValue)) {\n\n        return options.rating;\n      }\n\n      setRating(newValue);\n\n      return $node;\n    };\n\n    this.destroy = function () {\n\n      /*\n       * Removes the Rating UI by clearing the content, and removing the custom classes\n       */\n\n      if (!options.readOnly) {\n\n        unbindEvents();\n      }\n\n      RateYo.prototype.collection = deleteInstance($node.get(0),\n                                                   this.collection);\n\n      $node.removeClass(\"jq-ry-container\").children().remove();\n\n      return $node;\n    };\n\n    this.method = function (methodName) {\n\n      /*\n       * Method to call the methods of RateYo Instance\n       */\n\n      if (!methodName) {\n\n        throw Error(\"Method name not specified!\");\n      }\n\n      if (!isDefined(this[methodName])) {\n\n        throw Error(\"Method \" + methodName + \" doesn't exist!\");\n      }\n\n      var args = Array.prototype.slice.apply(arguments, []),\n          params = args.slice(1),\n          method = this[methodName];\n\n      return method.apply(this, params);\n    };\n\n    this.option = function (optionName, param) {\n\n      /*\n       * Method to get/set Options\n       */\n\n      if (!isDefined(optionName)) {\n\n        return options;\n      }\n\n      var method;\n\n      switch (optionName) {\n\n        case \"starWidth\":\n\n          method = setStarWidth;\n          break;\n        case \"numStars\":\n\n          method = setNumStars;\n          break;\n        case \"normalFill\":\n\n          method = setNormalFill;\n          break;\n        case \"ratedFill\":\n\n          method = setRatedFill;\n          break;\n        case \"multiColor\":\n\n          method = setMultiColor;\n          break;\n        case \"maxValue\":\n\n          method = setMaxValue;\n          break;\n        case \"precision\":\n\n          method = setPrecision;\n          break;\n        case \"rating\":\n\n          method = setRating;\n          break;\n        case \"halfStar\":\n\n          method = setHalfStar;\n          break;\n        case \"fullStar\":\n\n          method = setFullStar;\n          break;\n        case \"readOnly\":\n\n          method = setReadOnly;\n          break;\n        case \"spacing\":\n\n          method = setSpacing;\n          break;\n        case \"rtl\":\n\n          method = setRtl;\n          break;\n        case \"onInit\":\n\n          method = setOnInit;\n          break;\n        case \"onSet\":\n\n          method = setOnSet;\n          break;\n        case \"onChange\":\n\n          method = setOnChange;\n          break;\n        default:\n\n          throw Error(\"No such option as \" + optionName);\n      }\n\n      return isDefined(param) ? method(param) : options[optionName];\n    };\n\n    function onMouseEnter (e) {\n\n      /*\n       * If the Mouse Pointer is inside the container, calculate and show the rating\n       * in UI\n       */\n\n      var rating = calculateRating(e).toFixed(options.precision);\n\n      var maxValue = options.maxValue;\n\n      rating = checkPrecision(parseFloat(rating), minValue, maxValue);\n\n      showRating(rating);\n\n      $node.trigger(\"rateyo.change\", {rating: rating});\n    }\n\n    function onMouseLeave () {\n      if (isMobileBrowser()) {\n        return;\n      }\n\n      /*\n       * If mouse leaves, revert the rating in UI to previously set rating,\n       * when empty value is passed to showRating, it will take the previously set\n       * rating\n       */\n\n      showRating();\n\n      $node.trigger(\"rateyo.change\", {rating: options.rating});\n    }\n\n    function onMouseClick (e) {\n\n      /*\n       * On clicking the mouse inside the container, calculate and set the rating\n       */\n\n      var resultantRating = calculateRating(e).toFixed(options.precision);\n      resultantRating = parseFloat(resultantRating);\n\n      that.rating(resultantRating);\n    }\n\n    function onInit(e, data) {\n\n      if(options.onInit && typeof options.onInit === \"function\") {\n\n        /* jshint validthis:true */\n        options.onInit.apply(this, [data.rating, that]);\n      }\n    }\n\n    function onChange (e, data) {\n\n      if(options.onChange && typeof options.onChange === \"function\") {\n\n        /* jshint validthis:true */\n        options.onChange.apply(this, [data.rating, that]);\n      }\n    }\n\n    function onSet (e, data) {\n\n      if(options.onSet && typeof options.onSet === \"function\") {\n\n        /* jshint validthis:true */\n        options.onSet.apply(this, [data.rating, that]);\n      }\n    }\n\n    function bindEvents () {\n\n      $node.on(\"mousemove\", onMouseEnter)\n           .on(\"mouseenter\", onMouseEnter)\n           .on(\"mouseleave\", onMouseLeave)\n           .on(\"click\", onMouseClick)\n           .on(\"rateyo.init\", onInit)\n           .on(\"rateyo.change\", onChange)\n           .on(\"rateyo.set\", onSet);\n    }\n\n    function unbindEvents () {\n\n      $node.off(\"mousemove\", onMouseEnter)\n           .off(\"mouseenter\", onMouseEnter)\n           .off(\"mouseleave\", onMouseLeave)\n           .off(\"click\", onMouseClick)\n           .off(\"rateyo.init\", onInit)\n           .off(\"rateyo.change\", onChange)\n           .off(\"rateyo.set\", onSet);\n    }\n\n    setNumStars(options.numStars);\n    setReadOnly(options.readOnly);\n\n    if (options.rtl) {\n\n      setRtl(options.rtl);\n    }\n\n    this.collection.push(this);\n    this.rating(options.rating, true);\n\n    isInitialized = true;\n    $node.trigger(\"rateyo.init\", {rating: options.rating});\n  }\n\n  RateYo.prototype.collection = [];\n\n  function getInstance (node, collection) {\n\n    /*\n     * Given a HTML element (node) and a collection of RateYo instances,\n     * this function will search through the collection and return the matched\n     * instance having the node\n     */\n\n    var instance;\n\n    $.each(collection, function () {\n\n      if(node === this.node){\n\n        instance = this;\n        return false;\n      }\n    });\n\n    return instance;\n  }\n\n  function deleteInstance (node, collection) {\n\n    /*\n     * Given a HTML element (node) and a collection of RateYo instances,\n     * this function will search through the collection and delete the\n     * instance having the node, and return the modified collection\n     */\n\n    $.each(collection, function (index) {\n\n      if (node === this.node) {\n\n        var firstPart = collection.slice(0, index),\n            secondPart = collection.slice(index+1, collection.length);\n\n        collection = firstPart.concat(secondPart);\n\n        return false;\n      }\n    });\n\n    return collection;\n  }\n\n  function _rateYo (options) {\n\n    var rateYoInstances = RateYo.prototype.collection;\n\n    /* jshint validthis:true */\n    var $nodes = $(this);\n\n    if($nodes.length === 0) {\n\n      return $nodes;\n    }\n\n    var args = Array.prototype.slice.apply(arguments, []);\n\n    if (args.length === 0) {\n\n      //If args length is 0, Initialize the UI with default settings\n      options = args[0] = {};\n    }else if (args.length === 1 && typeof args[0] === \"object\") {\n\n      //If an Object is specified as first argument, it is considered as options\n      options = args[0];\n    }else if (args.length >= 1 && typeof args[0] === \"string\") {\n\n      /*\n       * if there is only one argument, and if its a string, it is supposed to be a\n       * method name, if more than one argument is specified, the remaining arguments\n       * except the first argument, will be passed as a params to the specified method\n       */\n\n      var methodName = args[0],\n          params = args.slice(1);\n\n      var result = [];\n\n      $.each($nodes, function (i, node) {\n\n        var existingInstance = getInstance(node, rateYoInstances);\n\n        if(!existingInstance) {\n\n          throw Error(\"Trying to set options before even initialization\");\n        }\n\n        var method = existingInstance[methodName];\n\n        if (!method) {\n\n          throw Error(\"Method \" + methodName + \" does not exist!\");\n        }\n\n        var returnVal = method.apply(existingInstance, params);\n\n        result.push(returnVal);\n      });\n\n      /*\n       * If the plugin in being called on only one jQuery Element, return only the\n       * first value, to support chaining.\n       */\n      result = result.length === 1? result[0]: result;\n\n      return result;\n    }else {\n\n      throw Error(\"Invalid Arguments\");\n    }\n\n    /*\n     * if only options are passed, extend default options, and if the plugin is not\n     * initialized on a particular jQuery element, initalize RateYo on it\n     */\n    options = $.extend({}, DEFAULTS, options);\n\n    return $.each($nodes, function () {\n\n               var existingInstance = getInstance(this, rateYoInstances);\n\n               if (existingInstance) {\n\n                 return existingInstance;\n               }\n\n               var $node = $(this),\n                   dataAttrs = {},\n                   optionsCopy = $.extend({}, options);\n\n               $.each($node.data(), function (key, value) {\n\n                 if (key.indexOf(\"rateyo\") !== 0) {\n\n                   return;\n                 }\n\n                 var optionName = key.replace(/^rateyo/, \"\");\n\n                 optionName = optionName[0].toLowerCase() + optionName.slice(1);\n\n                 dataAttrs[optionName] = value;\n\n                 delete optionsCopy[optionName];\n               });\n\n               return new RateYo($(this), $.extend({}, dataAttrs, optionsCopy));\n           });\n  }\n\n  function rateYo () {\n\n    /* jshint validthis:true */\n    return _rateYo.apply(this, Array.prototype.slice.apply(arguments, []));\n  }\n\n  window.RateYo = RateYo;\n  $.fn.rateYo = rateYo;\n\n}(window.jQuery));\n\n\n//# sourceURL=webpack://Materialize/./node_modules/rateyo/src/jquery.rateyo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./libs/rateyo/rateyo.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
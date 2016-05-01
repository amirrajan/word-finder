/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	var express = __webpack_require__(3);
	var bodyParser = __webpack_require__(4);
	var _ = __webpack_require__(5);
	var app = express();

	var words = __webpack_require__(6);
	app.set('view engine', 'ejs');
	app.set('view options', { layout: false });
	app.use('/public', express.static('public'));

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.get('/', function (req, res) {
	  res.render('index', { pattern: null });
	});

	app.post('/search', function (req, res) {
	  var result = words.search(req.body.pattern).result.value();
	  res.render('result', { words: result, pattern: req.body.pattern });
	});

	app.listen(process.env.PORT || 3000);
	console.log("Listening on port: " + (process.env.PORT || 3000));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* eslint max-len: 0 */
	// TODO: eventually deprecate this console.trace("use the `babel-register` package instead of `babel-core/register`");
	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.search = search;

	var _lodash = __webpack_require__(5);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ = __webpack_require__(5);
	var path = __webpack_require__(7);
	//var dict = require(path.join(__dirname, '/vendor/dictionary.js'));
	var dict = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./dictionary.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function search(word) {
	  var exclude = _.filter(word, function (w) {
	    return w != "?" && w != "_";
	  });

	  var excludePattern = "",
	      toSearch = "";

	  _.each(exclude, function (c) {
	    excludePattern += "^" + c;
	  });

	  excludePattern = "[" + excludePattern + "]";

	  toSearch = "^" + word.replace(/\?/g, excludePattern) + "$";

	  toSearch = "^" + toSearch.replace(/\_/g, "[a-z]") + "$";

	  if (word.indexOf("/") >= 0) {
	    toSearch = word.replace(/\//g, "");
	  }

	  var result = (0, _lodash2.default)(dict.dictionary, function (w) {
	    return w.match(new RegExp(toSearch, "i"));
	  });

	  return {
	    result: result,
	    excludePattern: excludePattern,
	    searchPattern: toSearch
	  };
	}
	exports.search = search;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
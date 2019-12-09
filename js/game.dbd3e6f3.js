/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"game": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("978d");


/***/ }),

/***/ "450e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberDisplay_vue_vue_type_style_index_0_id_4e74bcb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4c59");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberDisplay_vue_vue_type_style_index_0_id_4e74bcb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberDisplay_vue_vue_type_style_index_0_id_4e74bcb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberDisplay_vue_vue_type_style_index_0_id_4e74bcb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4c59":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "978d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21dc8b38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Game/App.vue?vue&type=template&id=2df1492c&
var Appvue_type_template_id_2df1492c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('h4',[_vm._v(_vm._s(_vm.message))]),_c('p',[_vm._v("Money per second:"),_c('NumberDisplay',{attrs:{"value":_vm.moneyGenRatePreSec}}),_vm._v(_vm._s(_vm.currency))],1),_c('p',[_vm._v("Money count:"),_c('NumberDisplay',{attrs:{"value":_vm.moneyCountDisplay}}),_vm._v(_vm._s(_vm.currency))],1),_c('p',[_vm._v("Time Left:"),_c('NumberDisplay',{attrs:{"value":_vm.timeLeftDisplay}}),_vm._v("seconds")],1),_c('button',{on:{"click":function($event){return _vm.onDonate();}}},[_vm._v("Donate "+_vm._s(_vm.donationPower)+" "+_vm._s(_vm.currency))]),_c('br'),_c('p',[_vm._v("Actions")]),_vm._v(" "+_vm._s(_vm.moneyGainedSinceTrade)+" "),_vm._l((_vm.availableActions),function(action,index){return _c('span',{key:'action' + action.id,on:{"click":function($event){return _vm.doAction(index)}}},[_c('button',[_vm._v(_vm._s(action.name)+" +"+_vm._s(action.profit)+_vm._s(_vm.currency))]),_vm._v(_vm._s(action.count)+" ")])}),_c('p',[_vm._v("Upgrades")]),_vm._l((_vm.upgradesShop),function(upgrade,index){return _c('button',{key:upgrade.name,on:{"click":function($event){return _vm.buyUpgrade(index)}}},[_vm._v(" "+_vm._s(upgrade.name)+" +"+_vm._s(upgrade.profit)+_vm._s(_vm.currency)+" ")])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Game/App.vue?vue&type=template&id=2df1492c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js
var createClass = __webpack_require__("53fe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("8b83");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("c65a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("c03e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("9f12");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js + 1 modules
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21dc8b38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NumberDisplay.vue?vue&type=template&id=4e74bcb0&scoped=true&
var NumberDisplayvue_type_template_id_4e74bcb0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"number-display"},[_vm._v(" "+_vm._s(_vm.value)+" ")])}
var NumberDisplayvue_type_template_id_4e74bcb0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NumberDisplay.vue?vue&type=template&id=4e74bcb0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NumberDisplay.vue?vue&type=script&lang=ts&







var NumberDisplayvue_type_script_lang_ts_NumberDisplay =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(NumberDisplay, _Vue);

  function NumberDisplay() {
    Object(classCallCheck["a" /* default */])(this, NumberDisplay);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NumberDisplay).apply(this, arguments));
  }

  return NumberDisplay;
}(vue_property_decorator["c" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], NumberDisplayvue_type_script_lang_ts_NumberDisplay.prototype, "value", void 0);

NumberDisplayvue_type_script_lang_ts_NumberDisplay = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], NumberDisplayvue_type_script_lang_ts_NumberDisplay);
/* harmony default export */ var NumberDisplayvue_type_script_lang_ts_ = (NumberDisplayvue_type_script_lang_ts_NumberDisplay);
// CONCATENATED MODULE: ./src/components/NumberDisplay.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_NumberDisplayvue_type_script_lang_ts_ = (NumberDisplayvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/NumberDisplay.vue?vue&type=style&index=0&id=4e74bcb0&scoped=true&lang=css&
var NumberDisplayvue_type_style_index_0_id_4e74bcb0_scoped_true_lang_css_ = __webpack_require__("450e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NumberDisplay.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NumberDisplayvue_type_script_lang_ts_,
  NumberDisplayvue_type_template_id_4e74bcb0_scoped_true_render,
  NumberDisplayvue_type_template_id_4e74bcb0_scoped_true_staticRenderFns,
  false,
  null,
  "4e74bcb0",
  null
  
)

/* harmony default export */ var components_NumberDisplay = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Game/App.vue?vue&type=script&lang=ts&














function lerp(oldValue, newValue, progress) {
  var delta = newValue - oldValue; //predictedDelta is a perdiction of the different between the final ouput and old value  
  //assuming both old value and new value are from a linear equation like the one below
  //the plus 1 is to combat the output being a bit outdated by predicting it.

  var predictedDelta = (1 + progress) * delta;
  return oldValue + predictedDelta;
}
/*
class ReferenceableNumber {
    value : number;
}

class NumberDisplay {
    oldNumber: number;

}
*/


var ActionID;

(function (ActionID) {
  ActionID[ActionID["AutoDonator"] = 0] = "AutoDonator";
  ActionID[ActionID["Stocks"] = 1] = "Stocks";
  ActionID[ActionID["CheaperPrime"] = 2] = "CheaperPrime";
  ActionID[ActionID["CheaperItems"] = 3] = "CheaperItems";
  ActionID[ActionID["LessEmployees"] = 4] = "LessEmployees";
  ActionID[ActionID["SellWarehouse"] = 5] = "SellWarehouse";
  ActionID[ActionID["CheaperAWS"] = 6] = "CheaperAWS";
  ActionID[ActionID["SlowerAmazonWebsite"] = 7] = "SlowerAmazonWebsite";
  ActionID[ActionID["ShutdownAmazon"] = 8] = "ShutdownAmazon";
  ActionID[ActionID["LastActionID"] = 9] = "LastActionID"; //needed to know how many ActionIDs there are
})(ActionID || (ActionID = {}));

var Appvue_type_script_lang_ts_ActionStats = function ActionStats(id, _name, _maxCount, _moneyLossPerSecond, _profit) {
  Object(classCallCheck["a" /* default */])(this, ActionStats);

  this.count = 0;
  this.id = id;
  this.name = _name;
  this.maxCount = _maxCount;
  this.moneyLossPerSecond = _moneyLossPerSecond;
  this.profit = _profit;
};

var Appvue_type_script_lang_ts_UpgradeStats = function UpgradeStats(_name, _profit, _canStart, _doUpgrade) {
  Object(classCallCheck["a" /* default */])(this, UpgradeStats);

  this.name = _name;
  this.profit = _profit;
  this.canStart = _canStart;
  this.doUpgrade = _doUpgrade;
};

var Appvue_type_script_lang_ts_App =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(App, _Vue);

  function App() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).apply(this, arguments));
    _this.moneyCount = 112000000000;
    _this.clock = 0;
    _this.timeLeft = 2629746;
    _this.baseMoneyGenRatePreSec = 3000;
    _this.moneyGenRatePreSec = _this.baseMoneyGenRatePreSec;
    _this.moneyCountOnTrade = 0;
    _this.moneyGainedSinceTrade = 0;
    _this.baseDonationPower = 2;
    _this.donationPower = _this.baseDonationPower;
    _this.hasFailed = false;
    _this.hasWon = false;
    _this.message = "Spend all your money";
    _this.tickRate = 2;
    _this.targetTickTime = 1000
    /*number of milliseconds in a sec*/
    / _this.tickRate;
    _this.currency = "\uD83D\uDC8E";
    _this.actions = [new Appvue_type_script_lang_ts_ActionStats(ActionID.AutoDonator, "Make an Auto Donator", 999999, 1 / 3600, 10), new Appvue_type_script_lang_ts_ActionStats(ActionID.Stocks, "Sell a stock", 999999, 1 / 36, 1000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperPrime, "Make Amazon prime cheaper", 120, 100 / 3, 10000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperItems, "Make items on Amazon cheaper", 999999, 1 / 3, 10000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.LessEmployees, "Fire an emoployee", 566000, 100 / 36, 1000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.SellWarehouse, "Sell a warehouse", 75, 100, 1000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperAWS, "Lower AWS price", 999999, 50, 1000000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.SlowerAmazonWebsite, "Throw away some Amazon servers", 999999, 100, 3000000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.ShutdownAmazon, "Enter the Amazon Shutdown Code", 1, 1000, 0)];
    _this.availableActions = []; //upgrades

    _this.upgradesShop = [];
    _this.upgrades = [new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 2 donator", 500000, function (game) {
      return 10 <= game.actions[ActionID.AutoDonator].count;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 8;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 3 donator", 1000000, function (game) {
      return 20 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 8;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 16;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 4 donator", 2000000, function (game) {
      return 40 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 16;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 64;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 5 donator", 4000000, function (game) {
      return 80 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 64;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 256;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 6 donator", 8000000, function (game) {
      return 160 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 256;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 1024;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 7 donator", 16000000, function (game) {
      return 320 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 1024;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 4096;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start selling Stocks", 1000000, function (game) {
      return 50 <= game.actions[ActionID.AutoDonator].count;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.Stocks]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in WeWork", 5000000, function (game) {
      return 10 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start making prime cheaper", 10000000, function (game) {
      return game.moneyGenRatePreSec <= 2995;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperPrime]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start making items cheaper on amazon", 100000000, function (game) {
      return game.moneyGenRatePreSec <= 2500;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperItems]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start firing employees", 1000000, function (game) {
      return game.moneyGenRatePreSec <= 2990;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.LessEmployees]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start selling warehouses", 1000000000000, function (game) {
      return game.moneyGenRatePreSec <= 2000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.SellWarehouse]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start lowering the price of AWS", 1000000000000, function (game) {
      return game.moneyGenRatePreSec <= 1000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperAWS]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start thowing away Amazon's server", 5000000000000, function (game) {
      return game.moneyGenRatePreSec <= -2000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.SlowerAmazonWebsite]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Shutdown the Amazon company", 5000000000000, function (game) {
      return game.moneyGenRatePreSec <= -24000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.ShutdownAmazon]);
    })]; //variables used for rendering or UI

    _this.lastTickTimestamp = 0;
    _this.oldMoneyCount = _this.moneyCount; //used for interploation

    _this.moneyCountDisplay = String(_this.moneyCount);
    _this.oldTimeLeft = _this.timeLeft;
    _this.timeLeftDisplay = String(_this.timeLeft);
    return _this;
  } //chart UI


  Object(createClass["a" /* default */])(App, [{
    key: "onDonate",
    value: function onDonate() {
      this.moneyCount -= this.donationPower;
    }
  }, {
    key: "updateMoneyPerSec",
    value: function updateMoneyPerSec() {
      var _this2 = this;

      this.moneyGenRatePreSec = this.baseMoneyGenRatePreSec;
      this.actions.forEach(function (action) {
        _this2.moneyGenRatePreSec -= action.count * action.moneyLossPerSecond;
      });
    }
  }, {
    key: "trade",
    value: function trade(profit) {
      this.moneyCountOnTrade = this.moneyCount;
      this.moneyCount += profit;
    }
  }, {
    key: "doAction",
    value: function doAction(index) {
      var action = this.availableActions[index];

      if (action.maxCount <= action.count) {
        action.count = action.maxCount;
        return;
      }

      action.count += 1;
      this.trade(action.profit);
      action.profit *= 1.05;
      this.updateMoneyPerSec();
    }
  }, {
    key: "buyUpgrade",
    value: function buyUpgrade(index) {
      var upgrade = this.upgradesShop[index];
      upgrade.doUpgrade(this);
      this.trade(upgrade.profit);
      this.updateMoneyPerSec();
      this.upgradesShop.splice(index, 1);
    }
  }, {
    key: "onTick",
    value: function onTick() {
      var _this3 = this;

      //get delta time
      var currentTimestamp = performance.now();
      var deltaTime = (currentTimestamp - this.lastTickTimestamp) / 1000
      /*milliseconds in a second*/
      ; //remember values from last tick

      this.oldMoneyCount = this.moneyCount;
      this.oldTimeLeft = this.timeLeft; //update game data

      this.moneyCount += this.moneyGenRatePreSec * deltaTime;

      if (this.moneyGenRatePreSec <= 0 && this.moneyCount <= 0) {
        this.hasWon = true;
        this.message = "You've spent all your money!";
      }

      if (!this.hasFailed && !this.hasWon) this.timeLeft -= 1 * deltaTime;
      this.upgrades.forEach(function (upgrade, index) {
        if (upgrade.canStart(_this3)) {
          _this3.upgradesShop.push(upgrade);

          _this3.upgrades.splice(index, 1);
        }
      });
      this.moneyGainedSinceTrade = this.moneyCount - this.moneyCountOnTrade;
      this.lastTickTimestamp = performance.now(); //needed for interpolation
    }
  }, {
    key: "onFrame",
    value: function onFrame(timestamp) {
      var timeDelta = timestamp - this.lastTickTimestamp;
      var progressTilNextTick = timeDelta / this.targetTickTime;
      this.moneyCountDisplay = lerp(this.oldMoneyCount, this.moneyCount, progressTilNextTick).toFixed(2);
      this.timeLeftDisplay = lerp(this.oldTimeLeft, this.timeLeft, progressTilNextTick).toFixed(3);
      window.requestAnimationFrame(this.onFrame);
    }
  }, {
    key: "mounted",
    value: function mounted() {//to do add chart
    }
  }, {
    key: "created",
    value: function created() {
      //start actions list
      this.availableActions.push(this.actions[ActionID.AutoDonator]);
      this.onTick(); //setInterval doesn't call onTick right away

      this.clock = setInterval(this.onTick, this.targetTickTime);
      window.requestAnimationFrame(this.onFrame);
    }
  }]);

  return App;
}(vue_property_decorator["c" /* Vue */]);

Appvue_type_script_lang_ts_App = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    NumberDisplay: components_NumberDisplay
  }
})], Appvue_type_script_lang_ts_App);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_App);
// CONCATENATED MODULE: ./src/pages/Game/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Game_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/pages/Game/App.vue





/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  Game_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_2df1492c_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Game_App = (App_component.exports);
// CONCATENATED MODULE: ./src/pages/Game/main.ts






vue_runtime_esm["a" /* default */].config.productionTip = false;
new vue_runtime_esm["a" /* default */]({
  render: function render(h) {
    return h(Game_App);
  }
}).$mount('#app');

/***/ })

/******/ });
//# sourceMappingURL=game.dbd3e6f3.js.map
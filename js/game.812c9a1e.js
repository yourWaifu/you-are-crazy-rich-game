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

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-SG": "cdab",
	"./en-SG.js": "cdab",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "7333",
	"./en-il.js": "7333",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df4",
	"./fa.js": "8df4",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./ga": "5120",
	"./ga.js": "5120",
	"./gd": "f6b4",
	"./gd.js": "f6b4",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it-ch": "6f12",
	"./it-ch.js": "6f12",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ku": "2421",
	"./ku.js": "2421",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"21dc8b38-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Game/App.vue?vue&type=template&id=59d3cbca&
var Appvue_type_template_id_59d3cbca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('h4',[_vm._v(_vm._s(_vm.message))]),_c('p',[_vm._v("Money per second:"),_c('NumberDisplay',{attrs:{"value":_vm.moneyGenRatePreSec}}),_vm._v(_vm._s(_vm.currency))],1),_c('p',[_vm._v("Money count:"),_c('NumberDisplay',{attrs:{"value":_vm.moneyCountDisplay}}),_vm._v(_vm._s(_vm.currency))],1),(_vm.loaded)?_c('LineChart',{attrs:{"chart-data":_vm.moneyChartData,"options":_vm.moneyChartOptions},on:{"chart:update":function($event){return _vm.onChartUpdated();}}}):_vm._e(),_c('p',[_vm._v("Time Left:"),_c('NumberDisplay',{attrs:{"value":_vm.timeLeftDisplay}}),_vm._v("seconds")],1),_c('button',{on:{"click":function($event){return _vm.onDonate();}}},[_vm._v("Donate "+_vm._s(_vm.donationPower)+" "+_vm._s(_vm.currency))]),_c('br'),_c('p',[_vm._v("Actions")]),_vm._l((_vm.availableActions),function(action,index){return _c('span',{key:'action' + action.id,on:{"click":function($event){return _vm.doAction(index)}}},[_c('button',[_vm._v(_vm._s(action.name)+" +"+_vm._s(action.profit)+_vm._s(_vm.currency))]),_vm._v(_vm._s(action.count)+" ")])}),_c('p',[_vm._v("Upgrades")]),_vm._l((_vm.upgradesShop),function(upgrade,index){return _c('button',{key:upgrade.name,on:{"click":function($event){return _vm.buyUpgrade(index)}}},[_vm._v(" "+_vm._s(upgrade.name)+" +"+_vm._s(upgrade.profit)+_vm._s(_vm.currency)+" ")])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Game/App.vue?vue&type=template&id=59d3cbca&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

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
}(vue_property_decorator["d" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])()], NumberDisplayvue_type_script_lang_ts_NumberDisplay.prototype, "value", void 0);

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
// EXTERNAL MODULE: ./node_modules/vue-chartjs/es/index.js + 2 modules
var es = __webpack_require__("1fca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LineChart.vue?vue&type=script&lang=ts&









var LineChartvue_type_script_lang_ts_LineChart =
/*#__PURE__*/
function (_Mixins) {
  Object(inherits["a" /* default */])(LineChart, _Mixins);

  function LineChart() {
    Object(classCallCheck["a" /* default */])(this, LineChart);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineChart).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(LineChart, [{
    key: "mounted",
    value: function mounted() {
      this.renderChart(this.chartData, this.options);
    }
  }]);

  return LineChart;
}(Object(vue_property_decorator["b" /* Mixins */])(es["a" /* Line */], es["b" /* mixins */].reactiveProp));

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])()], LineChartvue_type_script_lang_ts_LineChart.prototype, "options", void 0);

LineChartvue_type_script_lang_ts_LineChart = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], LineChartvue_type_script_lang_ts_LineChart);
/* harmony default export */ var LineChartvue_type_script_lang_ts_ = (LineChartvue_type_script_lang_ts_LineChart);
// CONCATENATED MODULE: ./src/components/LineChart.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LineChartvue_type_script_lang_ts_ = (LineChartvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/LineChart.vue
var LineChart_render, LineChart_staticRenderFns




/* normalize component */

var LineChart_component = Object(componentNormalizer["a" /* default */])(
  components_LineChartvue_type_script_lang_ts_,
  LineChart_render,
  LineChart_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_LineChart = (LineChart_component.exports);
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
    _this.actions = [new Appvue_type_script_lang_ts_ActionStats(ActionID.AutoDonator, "Make an Auto Donator", 999999, 2 / 3600, 10), new Appvue_type_script_lang_ts_ActionStats(ActionID.Stocks, "Sell a stock", 999999, 1 / 36, 1000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperPrime, "Make Amazon prime cheaper", 120, 100 / 3, 10000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperItems, "Make items on Amazon cheaper", 999999, 1 / 3, 10000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.LessEmployees, "Fire an emoployee", 566000, 100 / 36, 1000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.SellWarehouse, "Sell a warehouse", 75, 100, 1000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.CheaperAWS, "Lower AWS price", 999999, 50, 1000000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.SlowerAmazonWebsite, "Throw away some Amazon servers", 999999, 100, 3000000000000), new Appvue_type_script_lang_ts_ActionStats(ActionID.ShutdownAmazon, "Enter the Amazon Shutdown Code", 1, 21000, 0)];
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
    }), new Appvue_type_script_lang_ts_UpgradeStats("Being a teir 7 donator", 16000000, function (game) {
      return 640 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 4096;
    }, function (game) {
      game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
      game.donationPower = 16384;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start selling Stocks", 1000000, function (game) {
      return 50 <= game.actions[ActionID.AutoDonator].count;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.Stocks]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in WeWork", 5000000, function (game) {
      return 10 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in Kmart", 10000000, function (game) {
      return 100 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in Blockbuster", 50000000, function (game) {
      return 200 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in Forever 21", 100000000, function (game) {
      return 400 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Invest in Sears", 500000000, function (game) {
      return 800 <= game.actions[ActionID.Stocks].count;
    }, function (game) {
      game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start making prime cheaper", 10000000, function (game) {
      return game.moneyGenRatePreSec <= 2985;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperPrime]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Prime is half off", 50000000, function (game) {
      return 60 <= game.actions[ActionID.CheaperPrime].count;
    }, function (game) {
      game.actions[ActionID.CheaperPrime].moneyLossPerSecond *= 2;
    }), new Appvue_type_script_lang_ts_UpgradeStats("Prime is free for everyone!", 0, function (game) {
      return game.actions[ActionID.CheaperPrime].maxCount <= game.actions[ActionID.CheaperPrime].count;
    }, function (game) {
      game.actions[ActionID.CheaperPrime].moneyLossPerSecond *= 2; //remove from UI

      var index = game.availableActions.indexOf(game.actions[ActionID.CheaperPrime]);

      if (index < -1) {
        window.console.error("Can't make remove Prime from avaiable actions");
        return;
      }

      game.availableActions.splice(index, 1);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start making items cheaper on amazon", 100000000, function (game) {
      return game.moneyGenRatePreSec <= -13500;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperItems]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start firing employees", 1000000, function (game) {
      return game.moneyGenRatePreSec <= -4050;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.LessEmployees]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start selling warehouses", 1000000000000, function (game) {
      return game.moneyGenRatePreSec <= -13327;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.SellWarehouse]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Sell all warehouses", 0, function (game) {
      return game.actions[ActionID.SellWarehouse].maxCount <= game.actions[ActionID.SellWarehouse].count;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.SellWarehouse]); //remove from UI, for some reason just using filter doesn't work

      game.availableActions = game.availableActions.filter(function (item) {
        return item != game.actions[ActionID.SellWarehouse];
      });
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start lowering the price of AWS", 1000000000000, function (game) {
      return game.moneyGenRatePreSec <= -21000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.CheaperAWS]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Start thowing away Amazon's server", 5000000000000, function (game) {
      return game.moneyGenRatePreSec <= -26000;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.SlowerAmazonWebsite]);
    }), new Appvue_type_script_lang_ts_UpgradeStats("Shutdown the Amazon company", 5000000000000, function (game) {
      return game.moneyGenRatePreSec <= -42125;
    }, function (game) {
      game.availableActions.push(_this.actions[ActionID.ShutdownAmazon]);
    })]; //variables used for rendering or UI

    _this.lastTickTimestamp = 0;
    _this.oldMoneyCount = _this.moneyCount; //used for interploation

    _this.moneyCountDisplay = String(_this.moneyCount);
    _this.oldTimeLeft = _this.timeLeft;
    _this.timeLeftDisplay = String(_this.timeLeft); //chart UI

    _this.moneyChartData = {
      datasets: [{
        label: 'Money Count',
        data: [_this.moneyCount]
      }]
    };
    _this.moneyChartOptions = {};
    _this.loaded = false;
    _this.chartRendered = true;
    return _this;
  }

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
    key: "onChartUpdated",
    value: function onChartUpdated() {
      this.chartRendered = true;
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
      this.moneyGainedSinceTrade = this.moneyCount - this.moneyCountOnTrade; //update UI related values

      if (this.chartRendered && this.moneyChartData.datasets != undefined && this.moneyChartData.datasets[0].data != undefined && typeof this.moneyChartData.datasets[0].data[0] == "number") {
        var data = this.moneyChartData.datasets[0].data;
        this.moneyChartData = {
          datasets: [{
            label: 'Money Count',
            data: data
          }]
        };
        data.push(this.moneyCount); //this.chartRendered = false;
      }

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
      this.loaded = true;
    }
  }]);

  return App;
}(vue_property_decorator["d" /* Vue */]);

Appvue_type_script_lang_ts_App = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    NumberDisplay: components_NumberDisplay,
    LineChart: components_LineChart
  }
})], Appvue_type_script_lang_ts_App);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_App);
// CONCATENATED MODULE: ./src/pages/Game/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Game_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/pages/Game/App.vue





/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  Game_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_59d3cbca_render,
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
//# sourceMappingURL=game.812c9a1e.js.map
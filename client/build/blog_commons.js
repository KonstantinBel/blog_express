var blog_commons =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
if (true) console.log('Execute loadScripts.js');

var dynamicElems = document.querySelectorAll('[data-script-src]');
var scripts = {};

dynamicElems.forEach(function (element) {
  scripts[element.dataset.scriptSrc] = true;
});

for (var src in scripts) {
  if (scripts.hasOwnProperty(src)) {
    var script = document.createElement('script');
    script.src = src;
    script.dataset.src = src;
    document.body.appendChild(script);
  }
}

exports.default = dynamicElems;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
if (true) console.log('Execute waitScript.js');

function wait(elemContainerName) {
  return new Promise(function (resolve, reject) {
    check(50, elemContainerName, resolve, reject);
  });
}

function check(tryCounter, elemContainerName, resolve, reject) {
  if (tryCounter < 0) {
    reject(new Error('Script not loaded - ' + elemContainerName + '.js'));
    return;
  }

  if (window[elemContainerName]) {
    resolve(window[elemContainerName]);
    return;
  }

  if (true) console.log('Waiting for script download: ' + elemContainerName + '.js ' + tryCounter + ' retries left');

  setTimeout(function () {
    check(tryCounter - 1, elemContainerName, resolve, reject);
  }, 300);
}

exports.default = wait;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(22);
module.exports = __webpack_require__(23);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScripts = __webpack_require__(22);

var _loadScripts2 = _interopRequireDefault(_loadScripts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (true) console.log('Execute createElems.js');

function getThisScriptSrc() {
  if (document.currentScript) {
    return document.currentScript.dataset.src;
  } else {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].dataset.src;
  }
}

function createObjs(ClassElem) {
  var thisSrc = getThisScriptSrc();
  var elems = [];
  _loadScripts2.default.forEach(function (element) {
    // eslint-disable-line
    if (element.dataset.scriptSrc === thisSrc) {
      elems.push(new ClassElem(element));
    }
  });
  return elems;
}

exports.default = createObjs;

/***/ })

/******/ });
//# sourceMappingURL=blog_commons.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LBHFrontend"] = factory();
	else
		root["LBHFrontend"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/govuk-frontend/govuk/components/details/details.js":
/*!*************************************************************************!*\
  !*** ./node_modules/govuk-frontend/govuk/components/details/details.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js\nvar detect = (\n  // In IE8, defineProperty could only act on DOM elements, so full support\n  // for the feature requires the ability to set a property on an arbitrary object\n  'defineProperty' in Object && (function() {\n  \ttry {\n  \t\tvar a = {};\n  \t\tObject.defineProperty(a, 'test', {value:42});\n  \t\treturn true;\n  \t} catch(e) {\n  \t\treturn false\n  \t}\n  }())\n);\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always\n(function (nativeDefineProperty) {\n\n\tvar supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');\n\tvar ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';\n\tvar ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';\n\n\tObject.defineProperty = function defineProperty(object, property, descriptor) {\n\n\t\t// Where native support exists, assume it\n\t\tif (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {\n\t\t\treturn nativeDefineProperty(object, property, descriptor);\n\t\t}\n\n\t\tif (object === null || !(object instanceof Object || typeof object === 'object')) {\n\t\t\tthrow new TypeError('Object.defineProperty called on non-object');\n\t\t}\n\n\t\tif (!(descriptor instanceof Object)) {\n\t\t\tthrow new TypeError('Property description must be an object');\n\t\t}\n\n\t\tvar propertyString = String(property);\n\t\tvar hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;\n\t\tvar getterType = 'get' in descriptor && typeof descriptor.get;\n\t\tvar setterType = 'set' in descriptor && typeof descriptor.set;\n\n\t\t// handle descriptor.get\n\t\tif (getterType) {\n\t\t\tif (getterType !== 'function') {\n\t\t\t\tthrow new TypeError('Getter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineGetter__.call(object, propertyString, descriptor.get);\n\t\t} else {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\t// handle descriptor.set\n\t\tif (setterType) {\n\t\t\tif (setterType !== 'function') {\n\t\t\t\tthrow new TypeError('Setter must be a function');\n\t\t\t}\n\t\t\tif (!supportsAccessors) {\n\t\t\t\tthrow new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n\t\t\t}\n\t\t\tif (hasValueOrWritable) {\n\t\t\t\tthrow new TypeError(ERR_VALUE_ACCESSORS);\n\t\t\t}\n\t\t\tObject.__defineSetter__.call(object, propertyString, descriptor.set);\n\t\t}\n\n\t\t// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above\n\t\tif ('value' in descriptor) {\n\t\t\tobject[propertyString] = descriptor.value;\n\t\t}\n\n\t\treturn object;\n\t};\n}(Object.defineProperty));\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n(function(undefined) {\n  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js\n  var detect = 'bind' in Function.prototype;\n\n  if (detect) return\n\n  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always\n  Object.defineProperty(Function.prototype, 'bind', {\n      value: function bind(that) { // .length is 1\n          // add necessary es5-shim utilities\n          var $Array = Array;\n          var $Object = Object;\n          var ObjectPrototype = $Object.prototype;\n          var ArrayPrototype = $Array.prototype;\n          var Empty = function Empty() {};\n          var to_string = ObjectPrototype.toString;\n          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };\n          var array_slice = ArrayPrototype.slice;\n          var array_concat = ArrayPrototype.concat;\n          var array_push = ArrayPrototype.push;\n          var max = Math.max;\n          // /add necessary es5-shim utilities\n\n          // 1. Let Target be the this value.\n          var target = this;\n          // 2. If IsCallable(Target) is false, throw a TypeError exception.\n          if (!isCallable(target)) {\n              throw new TypeError('Function.prototype.bind called on incompatible ' + target);\n          }\n          // 3. Let A be a new (possibly empty) internal list of all of the\n          //   argument values provided after thisArg (arg1, arg2 etc), in order.\n          // XXX slicedArgs will stand in for \"A\" if used\n          var args = array_slice.call(arguments, 1); // for normal call\n          // 4. Let F be a new native ECMAScript object.\n          // 11. Set the [[Prototype]] internal property of F to the standard\n          //   built-in Function prototype object as specified in 15.3.3.1.\n          // 12. Set the [[Call]] internal property of F as described in\n          //   15.3.4.5.1.\n          // 13. Set the [[Construct]] internal property of F as described in\n          //   15.3.4.5.2.\n          // 14. Set the [[HasInstance]] internal property of F as described in\n          //   15.3.4.5.3.\n          var bound;\n          var binder = function () {\n\n              if (this instanceof bound) {\n                  // 15.3.4.5.2 [[Construct]]\n                  // When the [[Construct]] internal method of a function object,\n                  // F that was created using the bind function is called with a\n                  // list of arguments ExtraArgs, the following steps are taken:\n                  // 1. Let target be the value of F's [[TargetFunction]]\n                  //   internal property.\n                  // 2. If target has no [[Construct]] internal method, a\n                  //   TypeError exception is thrown.\n                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal\n                  //   property.\n                  // 4. Let args be a new list containing the same values as the\n                  //   list boundArgs in the same order followed by the same\n                  //   values as the list ExtraArgs in the same order.\n                  // 5. Return the result of calling the [[Construct]] internal\n                  //   method of target providing args as the arguments.\n\n                  var result = target.apply(\n                      this,\n                      array_concat.call(args, array_slice.call(arguments))\n                  );\n                  if ($Object(result) === result) {\n                      return result;\n                  }\n                  return this;\n\n              } else {\n                  // 15.3.4.5.1 [[Call]]\n                  // When the [[Call]] internal method of a function object, F,\n                  // which was created using the bind function is called with a\n                  // this value and a list of arguments ExtraArgs, the following\n                  // steps are taken:\n                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal\n                  //   property.\n                  // 2. Let boundThis be the value of F's [[BoundThis]] internal\n                  //   property.\n                  // 3. Let target be the value of F's [[TargetFunction]] internal\n                  //   property.\n                  // 4. Let args be a new list containing the same values as the\n                  //   list boundArgs in the same order followed by the same\n                  //   values as the list ExtraArgs in the same order.\n                  // 5. Return the result of calling the [[Call]] internal method\n                  //   of target providing boundThis as the this value and\n                  //   providing args as the arguments.\n\n                  // equiv: target.call(this, ...boundArgs, ...args)\n                  return target.apply(\n                      that,\n                      array_concat.call(args, array_slice.call(arguments))\n                  );\n\n              }\n\n          };\n\n          // 15. If the [[Class]] internal property of Target is \"Function\", then\n          //     a. Let L be the length property of Target minus the length of A.\n          //     b. Set the length own property of F to either 0 or L, whichever is\n          //       larger.\n          // 16. Else set the length own property of F to 0.\n\n          var boundLength = max(0, target.length - args.length);\n\n          // 17. Set the attributes of the length own property of F to the values\n          //   specified in 15.3.5.1.\n          var boundArgs = [];\n          for (var i = 0; i < boundLength; i++) {\n              array_push.call(boundArgs, '$' + i);\n          }\n\n          // XXX Build a dynamic function with desired amount of arguments is the only\n          // way to set the length property of a function.\n          // In environments where Content Security Policies enabled (Chrome extensions,\n          // for ex.) all use of eval or Function costructor throws an exception.\n          // However in all of these environments Function.prototype.bind exists\n          // and so this code will never be executed.\n          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);\n\n          if (target.prototype) {\n              Empty.prototype = target.prototype;\n              bound.prototype = new Empty();\n              // Clean up dangling references.\n              Empty.prototype = null;\n          }\n\n          // TODO\n          // 18. Set the [[Extensible]] internal property of F to true.\n\n          // TODO\n          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).\n          // 20. Call the [[DefineOwnProperty]] internal method of F with\n          //   arguments \"caller\", PropertyDescriptor {[[Get]]: thrower, [[Set]]:\n          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and\n          //   false.\n          // 21. Call the [[DefineOwnProperty]] internal method of F with\n          //   arguments \"arguments\", PropertyDescriptor {[[Get]]: thrower,\n          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},\n          //   and false.\n\n          // TODO\n          // NOTE Function objects created using Function.prototype.bind do not\n          // have a prototype property or the [[Code]], [[FormalParameters]], and\n          // [[Scope]] internal properties.\n          // XXX can't delete prototype in pure-js.\n\n          // 22. Return F.\n          return bound;\n      }\n  });\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js\nvar detect = ('Window' in this);\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always\nif ((typeof WorkerGlobalScope === \"undefined\") && (typeof importScripts !== \"function\")) {\n\t(function (global) {\n\t\tif (global.constructor) {\n\t\t\tglobal.Window = global.constructor;\n\t\t} else {\n\t\t\t(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;\n\t\t}\n\t}(this));\n}\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js\nvar detect = (\"Document\" in this);\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always\nif ((typeof WorkerGlobalScope === \"undefined\") && (typeof importScripts !== \"function\")) {\n\n\tif (this.HTMLDocument) { // IE8\n\n\t\t// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.\n\t\tthis.Document = this.HTMLDocument;\n\n\t} else {\n\n\t\t// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.\n\t\tthis.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());\n\t\tthis.Document.prototype = document;\n\t}\n}\n\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js\nvar detect = ('Element' in this && 'HTMLElement' in this);\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always\n(function () {\n\n\t// IE8\n\tif (window.Element && !window.HTMLElement) {\n\t\twindow.HTMLElement = window.Element;\n\t\treturn;\n\t}\n\n\t// create Element constructor\n\twindow.Element = window.HTMLElement = new Function('return function Element() {}')();\n\n\t// generate sandboxed iframe\n\tvar vbody = document.appendChild(document.createElement('body'));\n\tvar frame = vbody.appendChild(document.createElement('iframe'));\n\n\t// use sandboxed iframe to replicate Element functionality\n\tvar frameDocument = frame.contentWindow.document;\n\tvar prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));\n\tvar cache = {};\n\n\t// polyfill Element.prototype on an element\n\tvar shiv = function (element, deep) {\n\t\tvar\n\t\tchildNodes = element.childNodes || [],\n\t\tindex = -1,\n\t\tkey, value, childNode;\n\n\t\tif (element.nodeType === 1 && element.constructor !== Element) {\n\t\t\telement.constructor = Element;\n\n\t\t\tfor (key in cache) {\n\t\t\t\tvalue = cache[key];\n\t\t\t\telement[key] = value;\n\t\t\t}\n\t\t}\n\n\t\twhile (childNode = deep && childNodes[++index]) {\n\t\t\tshiv(childNode, deep);\n\t\t}\n\n\t\treturn element;\n\t};\n\n\tvar elements = document.getElementsByTagName('*');\n\tvar nativeCreateElement = document.createElement;\n\tvar interval;\n\tvar loopLimit = 100;\n\n\tprototype.attachEvent('onpropertychange', function (event) {\n\t\tvar\n\t\tpropertyName = event.propertyName,\n\t\tnonValue = !cache.hasOwnProperty(propertyName),\n\t\tnewValue = prototype[propertyName],\n\t\toldValue = cache[propertyName],\n\t\tindex = -1,\n\t\telement;\n\n\t\twhile (element = elements[++index]) {\n\t\t\tif (element.nodeType === 1) {\n\t\t\t\tif (nonValue || element[propertyName] === oldValue) {\n\t\t\t\t\telement[propertyName] = newValue;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tcache[propertyName] = newValue;\n\t});\n\n\tprototype.constructor = Element;\n\n\tif (!prototype.hasAttribute) {\n\t\t// <Element>.hasAttribute\n\t\tprototype.hasAttribute = function hasAttribute(name) {\n\t\t\treturn this.getAttribute(name) !== null;\n\t\t};\n\t}\n\n\t// Apply Element prototype to the pre-existing DOM as soon as the body element appears.\n\tfunction bodyCheck() {\n\t\tif (!(loopLimit--)) clearTimeout(interval);\n\t\tif (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {\n\t\t\tshiv(document, true);\n\t\t\tif (interval && document.body.prototype) clearTimeout(interval);\n\t\t\treturn (!!document.body.prototype);\n\t\t}\n\t\treturn false;\n\t}\n\tif (!bodyCheck()) {\n\t\tdocument.onreadystatechange = bodyCheck;\n\t\tinterval = setInterval(bodyCheck, 25);\n\t}\n\n\t// Apply to any new elements created after load\n\tdocument.createElement = function createElement(nodeName) {\n\t\tvar element = nativeCreateElement(String(nodeName).toLowerCase());\n\t\treturn shiv(element);\n\t};\n\n\t// remove sandboxed iframe\n\tdocument.removeChild(vbody);\n}());\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n(function(undefined) {\n\n// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js\nvar detect = (\n  (function(global) {\n\n  \tif (!('Event' in global)) return false;\n  \tif (typeof global.Event === 'function') return true;\n\n  \ttry {\n\n  \t\t// In IE 9-11, the Event object exists but cannot be instantiated\n  \t\tnew Event('click');\n  \t\treturn true;\n  \t} catch(e) {\n  \t\treturn false;\n  \t}\n  }(this))\n);\n\nif (detect) return\n\n// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always\n(function () {\n\tvar unlistenableWindowEvents = {\n\t\tclick: 1,\n\t\tdblclick: 1,\n\t\tkeyup: 1,\n\t\tkeypress: 1,\n\t\tkeydown: 1,\n\t\tmousedown: 1,\n\t\tmouseup: 1,\n\t\tmousemove: 1,\n\t\tmouseover: 1,\n\t\tmouseenter: 1,\n\t\tmouseleave: 1,\n\t\tmouseout: 1,\n\t\tstorage: 1,\n\t\tstoragecommit: 1,\n\t\ttextinput: 1\n\t};\n\n\t// This polyfill depends on availability of `document` so will not run in a worker\n\t// However, we asssume there are no browsers with worker support that lack proper\n\t// support for `Event` within the worker\n\tif (typeof document === 'undefined' || typeof window === 'undefined') return;\n\n\tfunction indexOf(array, element) {\n\t\tvar\n\t\tindex = -1,\n\t\tlength = array.length;\n\n\t\twhile (++index < length) {\n\t\t\tif (index in array && array[index] === element) {\n\t\t\t\treturn index;\n\t\t\t}\n\t\t}\n\n\t\treturn -1;\n\t}\n\n\tvar existingProto = (window.Event && window.Event.prototype) || null;\n\twindow.Event = Window.prototype.Event = function Event(type, eventInitDict) {\n\t\tif (!type) {\n\t\t\tthrow new Error('Not enough arguments');\n\t\t}\n\n\t\tvar event;\n\t\t// Shortcut if browser supports createEvent\n\t\tif ('createEvent' in document) {\n\t\t\tevent = document.createEvent('Event');\n\t\t\tvar bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;\n\t\t\tvar cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;\n\n\t\t\tevent.initEvent(type, bubbles, cancelable);\n\n\t\t\treturn event;\n\t\t}\n\n\t\tevent = document.createEventObject();\n\n\t\tevent.type = type;\n\t\tevent.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;\n\t\tevent.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;\n\n\t\treturn event;\n\t};\n\tif (existingProto) {\n\t\tObject.defineProperty(window.Event, 'prototype', {\n\t\t\tconfigurable: false,\n\t\t\tenumerable: false,\n\t\t\twritable: true,\n\t\t\tvalue: existingProto\n\t\t});\n\t}\n\n\tif (!('createEvent' in document)) {\n\t\twindow.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {\n\t\t\tvar\n\t\t\telement = this,\n\t\t\ttype = arguments[0],\n\t\t\tlistener = arguments[1];\n\n\t\t\tif (element === window && type in unlistenableWindowEvents) {\n\t\t\t\tthrow new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');\n\t\t\t}\n\n\t\t\tif (!element._events) {\n\t\t\t\telement._events = {};\n\t\t\t}\n\n\t\t\tif (!element._events[type]) {\n\t\t\t\telement._events[type] = function (event) {\n\t\t\t\t\tvar\n\t\t\t\t\tlist = element._events[event.type].list,\n\t\t\t\t\tevents = list.slice(),\n\t\t\t\t\tindex = -1,\n\t\t\t\t\tlength = events.length,\n\t\t\t\t\teventElement;\n\n\t\t\t\t\tevent.preventDefault = function preventDefault() {\n\t\t\t\t\t\tif (event.cancelable !== false) {\n\t\t\t\t\t\t\tevent.returnValue = false;\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\n\t\t\t\t\tevent.stopPropagation = function stopPropagation() {\n\t\t\t\t\t\tevent.cancelBubble = true;\n\t\t\t\t\t};\n\n\t\t\t\t\tevent.stopImmediatePropagation = function stopImmediatePropagation() {\n\t\t\t\t\t\tevent.cancelBubble = true;\n\t\t\t\t\t\tevent.cancelImmediate = true;\n\t\t\t\t\t};\n\n\t\t\t\t\tevent.currentTarget = element;\n\t\t\t\t\tevent.relatedTarget = event.fromElement || null;\n\t\t\t\t\tevent.target = event.target || event.srcElement || element;\n\t\t\t\t\tevent.timeStamp = new Date().getTime();\n\n\t\t\t\t\tif (event.clientX) {\n\t\t\t\t\t\tevent.pageX = event.clientX + document.documentElement.scrollLeft;\n\t\t\t\t\t\tevent.pageY = event.clientY + document.documentElement.scrollTop;\n\t\t\t\t\t}\n\n\t\t\t\t\twhile (++index < length && !event.cancelImmediate) {\n\t\t\t\t\t\tif (index in events) {\n\t\t\t\t\t\t\teventElement = events[index];\n\n\t\t\t\t\t\t\tif (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {\n\t\t\t\t\t\t\t\teventElement.call(element, event);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\n\t\t\t\telement._events[type].list = [];\n\n\t\t\t\tif (element.attachEvent) {\n\t\t\t\t\telement.attachEvent('on' + type, element._events[type]);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\telement._events[type].list.push(listener);\n\t\t};\n\n\t\twindow.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {\n\t\t\tvar\n\t\t\telement = this,\n\t\t\ttype = arguments[0],\n\t\t\tlistener = arguments[1],\n\t\t\tindex;\n\n\t\t\tif (element._events && element._events[type] && element._events[type].list) {\n\t\t\t\tindex = indexOf(element._events[type].list, listener);\n\n\t\t\t\tif (index !== -1) {\n\t\t\t\t\telement._events[type].list.splice(index, 1);\n\n\t\t\t\t\tif (!element._events[type].list.length) {\n\t\t\t\t\t\tif (element.detachEvent) {\n\t\t\t\t\t\t\telement.detachEvent('on' + type, element._events[type]);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdelete element._events[type];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\twindow.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {\n\t\t\tif (!arguments.length) {\n\t\t\t\tthrow new Error('Not enough arguments');\n\t\t\t}\n\n\t\t\tif (!event || typeof event.type !== 'string') {\n\t\t\t\tthrow new Error('DOM Events Exception 0');\n\t\t\t}\n\n\t\t\tvar element = this, type = event.type;\n\n\t\t\ttry {\n\t\t\t\tif (!event.bubbles) {\n\t\t\t\t\tevent.cancelBubble = true;\n\n\t\t\t\t\tvar cancelBubbleEvent = function (event) {\n\t\t\t\t\t\tevent.cancelBubble = true;\n\n\t\t\t\t\t\t(element || window).detachEvent('on' + type, cancelBubbleEvent);\n\t\t\t\t\t};\n\n\t\t\t\t\tthis.attachEvent('on' + type, cancelBubbleEvent);\n\t\t\t\t}\n\n\t\t\t\tthis.fireEvent('on' + type, event);\n\t\t\t} catch (error) {\n\t\t\t\tevent.target = element;\n\n\t\t\t\tdo {\n\t\t\t\t\tevent.currentTarget = element;\n\n\t\t\t\t\tif ('_events' in element && typeof element._events[type] === 'function') {\n\t\t\t\t\t\telement._events[type].call(element, event);\n\t\t\t\t\t}\n\n\t\t\t\t\tif (typeof element['on' + type] === 'function') {\n\t\t\t\t\t\telement['on' + type].call(element, event);\n\t\t\t\t\t}\n\n\t\t\t\t\telement = element.nodeType === 9 ? element.parentWindow : element.parentNode;\n\t\t\t\t} while (element && !event.cancelBubble);\n\t\t\t}\n\n\t\t\treturn true;\n\t\t};\n\n\t\t// Add the DOMContentLoaded Event\n\t\tdocument.attachEvent('onreadystatechange', function() {\n\t\t\tif (document.readyState === 'complete') {\n\t\t\t\tdocument.dispatchEvent(new Event('DOMContentLoaded', {\n\t\t\t\t\tbubbles: true\n\t\t\t\t}));\n\t\t\t}\n\t\t});\n\t}\n}());\n\n})\n.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});\n\n/**\n * TODO: Ideally this would be a NodeList.prototype.forEach polyfill\n * This seems to fail in IE8, requires more investigation.\n * See: https://github.com/imagitama/nodelist-foreach-polyfill\n */\n\n// Used to generate a unique string, allows multiple instances of the component without\n// Them conflicting with each other.\n// https://stackoverflow.com/a/8809472\nfunction generateUniqueID () {\n  var d = new Date().getTime();\n  if (typeof window.performance !== 'undefined' && typeof window.performance.now === 'function') {\n    d += window.performance.now(); // use high-precision timer if available\n  }\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    var r = (d + Math.random() * 16) % 16 | 0;\n    d = Math.floor(d / 16);\n    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)\n  })\n}\n\n/**\n * JavaScript 'polyfill' for HTML5's <details> and <summary> elements\n * and 'shim' to add accessiblity enhancements for all browsers\n *\n * http://caniuse.com/#feat=details\n */\n\nvar KEY_ENTER = 13;\nvar KEY_SPACE = 32;\n\nfunction Details ($module) {\n  this.$module = $module;\n}\n\nDetails.prototype.init = function () {\n  if (!this.$module) {\n    return\n  }\n\n  // If there is native details support, we want to avoid running code to polyfill native behaviour.\n  var hasNativeDetails = typeof this.$module.open === 'boolean';\n\n  if (hasNativeDetails) {\n    return\n  }\n\n  this.polyfillDetails();\n};\n\nDetails.prototype.polyfillDetails = function () {\n  var $module = this.$module;\n\n  // Save shortcuts to the inner summary and content elements\n  var $summary = this.$summary = $module.getElementsByTagName('summary').item(0);\n  var $content = this.$content = $module.getElementsByTagName('div').item(0);\n\n  // If <details> doesn't have a <summary> and a <div> representing the content\n  // it means the required HTML structure is not met so the script will stop\n  if (!$summary || !$content) {\n    return\n  }\n\n  // If the content doesn't have an ID, assign it one now\n  // which we'll need for the summary's aria-controls assignment\n  if (!$content.id) {\n    $content.id = 'details-content-' + generateUniqueID();\n  }\n\n  // Add ARIA role=\"group\" to details\n  $module.setAttribute('role', 'group');\n\n  // Add role=button to summary\n  $summary.setAttribute('role', 'button');\n\n  // Add aria-controls\n  $summary.setAttribute('aria-controls', $content.id);\n\n  // Set tabIndex so the summary is keyboard accessible for non-native elements\n  //\n  // We have to use the camelcase `tabIndex` property as there is a bug in IE6/IE7 when we set the correct attribute lowercase:\n  // See http://web.archive.org/web/20170120194036/http://www.saliences.com/browserBugs/tabIndex.html for more information.\n  $summary.tabIndex = 0;\n\n  // Detect initial open state\n  var openAttr = $module.getAttribute('open') !== null;\n  if (openAttr === true) {\n    $summary.setAttribute('aria-expanded', 'true');\n    $content.setAttribute('aria-hidden', 'false');\n  } else {\n    $summary.setAttribute('aria-expanded', 'false');\n    $content.setAttribute('aria-hidden', 'true');\n    $content.style.display = 'none';\n  }\n\n  // Bind an event to handle summary elements\n  this.polyfillHandleInputs($summary, this.polyfillSetAttributes.bind(this));\n};\n\n/**\n* Define a statechange function that updates aria-expanded and style.display\n* @param {object} summary element\n*/\nDetails.prototype.polyfillSetAttributes = function () {\n  var $module = this.$module;\n  var $summary = this.$summary;\n  var $content = this.$content;\n\n  var expanded = $summary.getAttribute('aria-expanded') === 'true';\n  var hidden = $content.getAttribute('aria-hidden') === 'true';\n\n  $summary.setAttribute('aria-expanded', (expanded ? 'false' : 'true'));\n  $content.setAttribute('aria-hidden', (hidden ? 'false' : 'true'));\n\n  $content.style.display = (expanded ? 'none' : '');\n\n  var hasOpenAttr = $module.getAttribute('open') !== null;\n  if (!hasOpenAttr) {\n    $module.setAttribute('open', 'open');\n  } else {\n    $module.removeAttribute('open');\n  }\n\n  return true\n};\n\n/**\n* Handle cross-modal click events\n* @param {object} node element\n* @param {function} callback function\n*/\nDetails.prototype.polyfillHandleInputs = function (node, callback) {\n  node.addEventListener('keypress', function (event) {\n    var target = event.target;\n    // When the key gets pressed - check if it is enter or space\n    if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE) {\n      if (target.nodeName.toLowerCase() === 'summary') {\n        // Prevent space from scrolling the page\n        // and enter from submitting a form\n        event.preventDefault();\n        // Click to let the click event do all the necessary action\n        if (target.click) {\n          target.click();\n        } else {\n          // except Safari 5.1 and under don't support .click() here\n          callback(event);\n        }\n      }\n    }\n  });\n\n  // Prevent keyup to prevent clicking twice in Firefox when using space key\n  node.addEventListener('keyup', function (event) {\n    var target = event.target;\n    if (event.keyCode === KEY_SPACE) {\n      if (target.nodeName.toLowerCase() === 'summary') {\n        event.preventDefault();\n      }\n    }\n  });\n\n  node.addEventListener('click', callback);\n};\n\nreturn Details;\n\n})));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://LBHFrontend/./node_modules/govuk-frontend/govuk/components/details/details.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://LBHFrontend/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/lbh/components/lbh-details/details.js":
/*!***************************************************!*\
  !*** ./src/lbh/components/lbh-details/details.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var govuk_frontend_govuk_components_details_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! govuk-frontend/govuk/components/details/details */ \"./node_modules/govuk-frontend/govuk/components/details/details.js\");\n/* harmony import */ var govuk_frontend_govuk_components_details_details__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(govuk_frontend_govuk_components_details_details__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (govuk_frontend_govuk_components_details_details__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n//# sourceURL=webpack://LBHFrontend/./src/lbh/components/lbh-details/details.js?");

/***/ }),

/***/ 9:
/*!*********************************************************!*\
  !*** multi ./src/lbh/components/lbh-details/details.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/elewis/Sites/hackney-frontend/src/lbh/components/lbh-details/details.js */\"./src/lbh/components/lbh-details/details.js\");\n\n\n//# sourceURL=webpack://LBHFrontend/multi_./src/lbh/components/lbh-details/details.js?");

/***/ })

/******/ });
});

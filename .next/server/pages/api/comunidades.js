/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/comunidades";
exports.ids = ["pages/api/comunidades"];
exports.modules = {

/***/ "./pages/api/comunidades.js":
/*!**********************************!*\
  !*** ./pages/api/comunidades.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ requestReceiver; }\n/* harmony export */ });\n/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datocms-client */ \"datocms-client\");\n/* harmony import */ var datocms_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datocms_client__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //metatags.io é outro tipo de backend for frontend\n\nasync function requestReceiver(request, response) {\n  if (request.method === 'POST') {\n    const DATO_TOKEN = 'dd07b5e04fe54cd98c92ac89c84dbf';\n    const client = new datocms_client__WEBPACK_IMPORTED_MODULE_0__.SiteClient(DATO_TOKEN); //usar DTO para validar o request.body\n\n    const createdRecord = await client.items.create(_objectSpread({\n      itemType: '1009387'\n    }, request.body));\n    console.log('Registro criado: ', createdRecord);\n    response.json({\n      createdRecord: createdRecord\n    });\n    return;\n  }\n\n  response.status(403).json({\n    message: 'Não há nada aqui, apenas no POST ;)'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tdW5pZGFkZXMuanM/OGMyMSJdLCJuYW1lcyI6WyJyZXF1ZXN0UmVjZWl2ZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJEQVRPX1RPS0VOIiwiY2xpZW50IiwiU2l0ZUNsaWVudCIsImNyZWF0ZWRSZWNvcmQiLCJpdGVtcyIsImNyZWF0ZSIsIml0ZW1UeXBlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ2UsZUFBZUEsZUFBZixDQUErQkMsT0FBL0IsRUFBd0NDLFFBQXhDLEVBQ2Y7QUFDSSxNQUFJRCxPQUFPLENBQUNFLE1BQVIsS0FBbUIsTUFBdkIsRUFDQTtBQUNJLFVBQU1DLFVBQVUsR0FBRyxnQ0FBbkI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsSUFBSUMsc0RBQUosQ0FBZUYsVUFBZixDQUFmLENBRkosQ0FJSTs7QUFDQSxVQUFNRyxhQUFhLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLE1BQWI7QUFDeEJDLGNBQVEsRUFBRztBQURhLE9BRXJCVCxPQUFPLENBQUNVLElBRmEsRUFBNUI7QUFLQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNOLGFBQWpDO0FBRUFMLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjO0FBQUNQLG1CQUFhLEVBQUdBO0FBQWpCLEtBQWQ7QUFDQTtBQUNIOztBQUVETCxVQUFRLENBQUNhLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJELElBQXJCLENBQ0k7QUFDQUUsV0FBTyxFQUFHO0FBRFYsR0FESjtBQUtIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbXVuaWRhZGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNsaWVudCB9IGZyb20gJ2RhdG9jbXMtY2xpZW50JztcblxuLy9tZXRhdGFncy5pbyDDqSBvdXRybyB0aXBvIGRlIGJhY2tlbmQgZm9yIGZyb250ZW5kXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0UmVjZWl2ZXIocmVxdWVzdCwgcmVzcG9uc2UpXG57XG4gICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpXG4gICAge1xuICAgICAgICBjb25zdCBEQVRPX1RPS0VOID0gJ2RkMDdiNWUwNGZlNTRjZDk4YzkyYWM4OWM4NGRiZic7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTaXRlQ2xpZW50KERBVE9fVE9LRU4pO1xuXG4gICAgICAgIC8vdXNhciBEVE8gcGFyYSB2YWxpZGFyIG8gcmVxdWVzdC5ib2R5XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRSZWNvcmQgPSBhd2FpdCBjbGllbnQuaXRlbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGl0ZW1UeXBlIDogJzEwMDkzODcnLCAvL2lkIGRhIGNvbHVuYSBubyBEQVRPXG4gICAgICAgICAgICAuLi5yZXF1ZXN0LmJvZHlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdHJvIGNyaWFkbzogJywgY3JlYXRlZFJlY29yZCk7XG5cbiAgICAgICAgcmVzcG9uc2UuanNvbih7Y3JlYXRlZFJlY29yZCA6IGNyZWF0ZWRSZWNvcmR9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlc3BvbnNlLnN0YXR1cyg0MDMpLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgbWVzc2FnZSA6ICdOw6NvIGjDoSBuYWRhIGFxdWksIGFwZW5hcyBubyBQT1NUIDspJ1xuICAgIH0pO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/comunidades.js\n");

/***/ }),

/***/ "datocms-client":
/*!*********************************!*\
  !*** external "datocms-client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("datocms-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/comunidades.js"));
module.exports = __webpack_exports__;

})();
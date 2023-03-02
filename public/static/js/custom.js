/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/custom.js":
/*!***************************************!*\
  !*** ./resources/assets/js/custom.js ***!
  \***************************************/
/***/ (() => {

eval("// overlay menu\nfunction openNav() {\n  document.getElementById(\"myNav\").classList.toggle(\"menu_width\");\n  document.querySelector(\".custom_menu-btn\").classList.toggle(\"menu_btn-style\");\n}\n\n// display current year\n\nfunction displayYear() {\n  var d = new Date();\n  var currentYear = d.getFullYear();\n  document.querySelector(\"#displayDate\").innerHTML = currentYear;\n}\ndisplayYear();\n\n/** google_map js **/\n\nfunction myMap() {\n  var mapProp = {\n    center: new google.maps.LatLng(40.712775, -74.005973),\n    zoom: 18\n  };\n  var map = new google.maps.Map(document.getElementById(\"googleMap\"), mapProp);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvcGVuTmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5WWVhciIsImQiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImlubmVySFRNTCIsIm15TWFwIiwibWFwUHJvcCIsImNlbnRlciIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmciLCJ6b29tIiwibWFwIiwiTWFwIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY3VzdG9tLmpzPzcwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3ZlcmxheSBtZW51XHJcbmZ1bmN0aW9uIG9wZW5OYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X3dpZHRoXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21fbWVudS1idG5cIikuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfYnRuLXN0eWxlXCIpO1xyXG59XHJcblxyXG5cclxuLy8gZGlzcGxheSBjdXJyZW50IHllYXJcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlZZWFyKCkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGN1cnJlbnRZZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheURhdGVcIikuaW5uZXJIVE1MID0gY3VycmVudFllYXI7XHJcbn1cclxuZGlzcGxheVllYXIoKTtcclxuXHJcblxyXG4vKiogZ29vZ2xlX21hcCBqcyAqKi9cclxuXHJcbmZ1bmN0aW9uIG15TWFwKCkge1xyXG4gICAgdmFyIG1hcFByb3AgPSB7XHJcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQwLjcxMjc3NSwgLTc0LjAwNTk3MyksXHJcbiAgICAgICAgem9vbTogMTgsXHJcbiAgICB9O1xyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVNYXBcIiksIG1hcFByb3ApO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFNBQVNBLE9BQU9BLENBQUEsRUFBRztFQUNmQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQy9ESCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDRixTQUFTLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRjs7QUFHQTs7QUFFQSxTQUFTRSxXQUFXQSxDQUFBLEVBQUc7RUFDbkIsSUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUksRUFBRTtFQUNsQixJQUFJQyxXQUFXLEdBQUdGLENBQUMsQ0FBQ0csV0FBVyxFQUFFO0VBRWpDVCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ00sU0FBUyxHQUFHRixXQUFXO0FBQ2xFO0FBQ0FILFdBQVcsRUFBRTs7QUFHYjs7QUFFQSxTQUFTTSxLQUFLQSxDQUFBLEVBQUc7RUFDYixJQUFJQyxPQUFPLEdBQUc7SUFDVkMsTUFBTSxFQUFFLElBQUlDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3JEQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0QsSUFBSUMsR0FBRyxHQUFHLElBQUlKLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSSxHQUFHLENBQUNuQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRVcsT0FBTyxDQUFDO0FBQ2hGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jdXN0b20uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/custom.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/js/custom.js"]();
/******/ 	
/******/ })()
;
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Counter.jsx":
/*!********************************!*\
  !*** ./components/Counter.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
var _jsxFileName = "/Users/mosell01/projects/website/components/Counter.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Counter({
  counter,
  increment,
  decrement,
  reset
}) {
  return __jsx("div", {
    className: "jsx-929442118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-929442118" + " " + "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, counter), __jsx("button", {
    onClick: increment,
    className: "jsx-929442118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "INCREMENT"), __jsx("button", {
    onClick: decrement,
    className: "jsx-929442118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "DECREMENT"), __jsx("button", {
    onClick: reset,
    className: "jsx-929442118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "RESET"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "929442118",
    __self: this
  }, ".number.jsx-929442118{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvQ291bnRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBR3VCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21vc2VsbDAxL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9Db3VudGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIHJlc2V0IH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XG5cbmZ1bmN0aW9uIENvdW50ZXIoeyBjb3VudGVyLCBpbmNyZW1lbnQsIGRlY3JlbWVudCwgcmVzZXQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJcIj57Y291bnRlcn08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudH0+SU5DUkVNRU5UPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlY3JlbWVudH0+REVDUkVNRU5UPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0fT5SRVNFVDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBjb3VudGVyOiBzdGF0ZS5jb3VudGVyUmVkdWNlci5jb3VudGVyXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5jcmVtZW50OiAoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSksXG4gICAgZGVjcmVtZW50OiAoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSksXG4gICAgcmVzZXQ6ICgpID0+IGRpc3BhdGNoKHJlc2V0KCkpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/mosell01/projects/website/components/Counter.jsx */"));
}

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["increment"])()),
    decrement: () => dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["decrement"])()),
    reset: () => dispatch(Object(_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["reset"])())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ }),

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mosell01/projects/website/components/Hero.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Hero = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4130070159" + " " + "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4130070159" + " " + "hero-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4130070159" + " " + "louis-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/headshot.png",
    height: "528px",
    width: "528px",
    className: "jsx-4130070159" + " " + "headshot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-4130070159" + " " + "hero-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Hi I'm"), __jsx("svg", {
    height: "170",
    viewBox: "0 0 478 170",
    stroke: "white",
    fill: "none",
    strokeWidth: "2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-4130070159" + " " + "hero-svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M17.24 114.68H61.16V128H0.860001V2.53999H17.24V114.68Z",
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M135.435 129.26C123.795 129.26 113.175 126.56 103.575 121.16C93.9753 115.64 86.3553 108.02 80.7153 98.3C75.1953 88.46 72.4353 77.42 72.4353 65.18C72.4353 52.94 75.1953 41.96 80.7153 32.24C86.3553 22.4 93.9753 14.78 103.575 9.37999C113.175 3.85999 123.795 1.09999 135.435 1.09999C147.195 1.09999 157.875 3.85999 167.475 9.37999C177.075 14.78 184.635 22.34 190.155 32.06C195.675 41.78 198.435 52.82 198.435 65.18C198.435 77.54 195.675 88.58 190.155 98.3C184.635 108.02 177.075 115.64 167.475 121.16C157.875 126.56 147.195 129.26 135.435 129.26ZM135.435 115.04C144.195 115.04 152.055 113 159.015 108.92C166.095 104.84 171.615 99.02 175.575 91.46C179.655 83.9 181.695 75.14 181.695 65.18C181.695 55.1 179.655 46.34 175.575 38.9C171.615 31.34 166.155 25.52 159.195 21.44C152.235 17.36 144.315 15.32 135.435 15.32C126.555 15.32 118.635 17.36 111.675 21.44C104.715 25.52 99.1953 31.34 95.1153 38.9C91.1553 46.34 89.1753 55.1 89.1753 65.18C89.1753 75.14 91.1553 83.9 95.1153 91.46C99.1953 99.02 104.715 104.84 111.675 108.92C118.755 113 126.675 115.04 135.435 115.04Z",
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M236.079 2.53999V81.92C236.079 93.08 238.779 101.36 244.179 106.76C249.699 112.16 257.319 114.86 267.039 114.86C276.639 114.86 284.139 112.16 289.539 106.76C295.059 101.36 297.819 93.08 297.819 81.92V2.53999H314.199V81.74C314.199 92.18 312.099 101 307.899 108.2C303.699 115.28 297.999 120.56 290.799 124.04C283.719 127.52 275.739 129.26 266.859 129.26C257.979 129.26 249.939 127.52 242.739 124.04C235.659 120.56 230.019 115.28 225.819 108.2C221.739 101 219.699 92.18 219.699 81.74V2.53999H236.079Z",
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M357.904 2.53999V128H341.524V2.53999H357.904Z",
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M425.601 129.26C417.321 129.26 409.881 127.82 403.281 124.94C396.801 121.94 391.701 117.86 387.981 112.7C384.261 107.42 382.341 101.36 382.221 94.52H399.681C400.281 100.4 402.681 105.38 406.881 109.46C411.201 113.42 417.441 115.4 425.601 115.4C433.401 115.4 439.521 113.48 443.961 109.64C448.521 105.68 450.801 100.64 450.801 94.52C450.801 89.72 449.481 85.82 446.841 82.82C444.201 79.82 440.901 77.54 436.941 75.98C432.981 74.42 427.641 72.74 420.921 70.94C412.641 68.78 405.981 66.62 400.941 64.46C396.021 62.3 391.761 58.94 388.161 54.38C384.681 49.7 382.941 43.46 382.941 35.66C382.941 28.82 384.681 22.76 388.161 17.48C391.641 12.2 396.501 8.11999 402.741 5.23999C409.101 2.35999 416.361 0.919998 424.521 0.919998C436.281 0.919998 445.881 3.85999 453.321 9.74C460.881 15.62 465.141 23.42 466.101 33.14H448.101C447.501 28.34 444.981 24.14 440.541 20.54C436.101 16.82 430.221 14.96 422.901 14.96C416.061 14.96 410.481 16.76 406.161 20.36C401.841 23.84 399.681 28.76 399.681 35.12C399.681 39.68 400.941 43.4 403.461 46.28C406.101 49.16 409.281 51.38 413.001 52.94C416.841 54.38 422.181 56.06 429.021 57.98C437.301 60.26 443.961 62.54 449.001 64.82C454.041 66.98 458.361 70.4 461.961 75.08C465.561 79.64 467.361 85.88 467.361 93.8C467.361 99.92 465.741 105.68 462.501 111.08C459.261 116.48 454.461 120.86 448.101 124.22C441.741 127.58 434.241 129.26 425.601 129.26Z",
    className: "jsx-4130070159",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4130070159",
    __self: undefined
  }, ".louis-image.jsx-4130070159{border-radius:50%;background:linear-gradient(159deg,#fb8f0a 10%,#d5370b 100%);width:528px;height:528px;object-fit:cover;overflow:hidden;}.headshot.jsx-4130070159{height:528px;width:528px;}.hero.jsx-4130070159{display:grid;grid-template-columns:1fr 1fr;width:100%;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hero-text.jsx-4130070159{display:grid;grid-template-rows:1fr 1fr;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:95px;}.hero-text.jsx-4130070159 span.jsx-4130070159{-webkit-animation:move-in-jsx-4130070159 1s cubic-bezier(0.74,0.04,0.33,1.39);animation:move-in-jsx-4130070159 1s cubic-bezier(0.74,0.04,0.33,1.39);}@-webkit-keyframes move-in-jsx-4130070159{0%{-webkit-transform:translate(1000px);-ms-transform:translate(1000px);transform:translate(1000px);}100%{-webkit-transform:translate(0px);-ms-transform:translate(0px);transform:translate(0px);}}@keyframes move-in-jsx-4130070159{0%{-webkit-transform:translate(1000px);-ms-transform:translate(1000px);transform:translate(1000px);}100%{-webkit-transform:translate(0px);-ms-transform:translate(0px);transform:translate(0px);}}@-webkit-keyframes fade-in-jsx-4130070159{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-4130070159{0%{opacity:0;}100%{opacity:1;}}.hero-image.jsx-4130070159{-webkit-animation:fade-in-jsx-4130070159 3s ease-in;animation:fade-in-jsx-4130070159 3s ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvSGVyby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQUc2QixBQVFMLEFBSUEsQUFPQSxBQVE2QyxBQUs1QixBQUlILEFBS2YsQUFHQSxBQUtpQixVQVA3QixBQUdBLEdBcENZLEFBSWtCLEFBT0gsS0FuQm1DLE9BU2hFLGVBV3VCLEdBUFYsV0FDVSxPQU9GLGNBTkEsR0FkUCxTQW1DWixHQWxDYSxNQThCYixBQWlCRixPQTlDbUIsaUJBQ0QsZ0JBQ2xCLFlBc0JBLE1BTGMsWUFDRyxFQVBqQixhQVFBIiwiZmlsZSI6Ii9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvSGVyby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEhlcm86IEZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG91aXMtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZHNob3RcIiBzcmM9XCIvaGVhZHNob3QucG5nXCIgaGVpZ2h0PVwiNTI4cHhcIiB3aWR0aD1cIjUyOHB4XCI+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiPlxuICAgICAgICAgIDxzcGFuPkhpIEknbTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXN2Z1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNzBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NzggMTcwXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjI0IDExNC42OEg2MS4xNlYxMjhIMC44NjAwMDFWMi41Mzk5OUgxNy4yNFYxMTQuNjhaXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM1LjQzNSAxMjkuMjZDMTIzLjc5NSAxMjkuMjYgMTEzLjE3NSAxMjYuNTYgMTAzLjU3NSAxMjEuMTZDOTMuOTc1MyAxMTUuNjQgODYuMzU1MyAxMDguMDIgODAuNzE1MyA5OC4zQzc1LjE5NTMgODguNDYgNzIuNDM1MyA3Ny40MiA3Mi40MzUzIDY1LjE4QzcyLjQzNTMgNTIuOTQgNzUuMTk1MyA0MS45NiA4MC43MTUzIDMyLjI0Qzg2LjM1NTMgMjIuNCA5My45NzUzIDE0Ljc4IDEwMy41NzUgOS4zNzk5OUMxMTMuMTc1IDMuODU5OTkgMTIzLjc5NSAxLjA5OTk5IDEzNS40MzUgMS4wOTk5OUMxNDcuMTk1IDEuMDk5OTkgMTU3Ljg3NSAzLjg1OTk5IDE2Ny40NzUgOS4zNzk5OUMxNzcuMDc1IDE0Ljc4IDE4NC42MzUgMjIuMzQgMTkwLjE1NSAzMi4wNkMxOTUuNjc1IDQxLjc4IDE5OC40MzUgNTIuODIgMTk4LjQzNSA2NS4xOEMxOTguNDM1IDc3LjU0IDE5NS42NzUgODguNTggMTkwLjE1NSA5OC4zQzE4NC42MzUgMTA4LjAyIDE3Ny4wNzUgMTE1LjY0IDE2Ny40NzUgMTIxLjE2QzE1Ny44NzUgMTI2LjU2IDE0Ny4xOTUgMTI5LjI2IDEzNS40MzUgMTI5LjI2Wk0xMzUuNDM1IDExNS4wNEMxNDQuMTk1IDExNS4wNCAxNTIuMDU1IDExMyAxNTkuMDE1IDEwOC45MkMxNjYuMDk1IDEwNC44NCAxNzEuNjE1IDk5LjAyIDE3NS41NzUgOTEuNDZDMTc5LjY1NSA4My45IDE4MS42OTUgNzUuMTQgMTgxLjY5NSA2NS4xOEMxODEuNjk1IDU1LjEgMTc5LjY1NSA0Ni4zNCAxNzUuNTc1IDM4LjlDMTcxLjYxNSAzMS4zNCAxNjYuMTU1IDI1LjUyIDE1OS4xOTUgMjEuNDRDMTUyLjIzNSAxNy4zNiAxNDQuMzE1IDE1LjMyIDEzNS40MzUgMTUuMzJDMTI2LjU1NSAxNS4zMiAxMTguNjM1IDE3LjM2IDExMS42NzUgMjEuNDRDMTA0LjcxNSAyNS41MiA5OS4xOTUzIDMxLjM0IDk1LjExNTMgMzguOUM5MS4xNTUzIDQ2LjM0IDg5LjE3NTMgNTUuMSA4OS4xNzUzIDY1LjE4Qzg5LjE3NTMgNzUuMTQgOTEuMTU1MyA4My45IDk1LjExNTMgOTEuNDZDOTkuMTk1MyA5OS4wMiAxMDQuNzE1IDEwNC44NCAxMTEuNjc1IDEwOC45MkMxMTguNzU1IDExMyAxMjYuNjc1IDExNS4wNCAxMzUuNDM1IDExNS4wNFpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMzYuMDc5IDIuNTM5OTlWODEuOTJDMjM2LjA3OSA5My4wOCAyMzguNzc5IDEwMS4zNiAyNDQuMTc5IDEwNi43NkMyNDkuNjk5IDExMi4xNiAyNTcuMzE5IDExNC44NiAyNjcuMDM5IDExNC44NkMyNzYuNjM5IDExNC44NiAyODQuMTM5IDExMi4xNiAyODkuNTM5IDEwNi43NkMyOTUuMDU5IDEwMS4zNiAyOTcuODE5IDkzLjA4IDI5Ny44MTkgODEuOTJWMi41Mzk5OUgzMTQuMTk5VjgxLjc0QzMxNC4xOTkgOTIuMTggMzEyLjA5OSAxMDEgMzA3Ljg5OSAxMDguMkMzMDMuNjk5IDExNS4yOCAyOTcuOTk5IDEyMC41NiAyOTAuNzk5IDEyNC4wNEMyODMuNzE5IDEyNy41MiAyNzUuNzM5IDEyOS4yNiAyNjYuODU5IDEyOS4yNkMyNTcuOTc5IDEyOS4yNiAyNDkuOTM5IDEyNy41MiAyNDIuNzM5IDEyNC4wNEMyMzUuNjU5IDEyMC41NiAyMzAuMDE5IDExNS4yOCAyMjUuODE5IDEwOC4yQzIyMS43MzkgMTAxIDIxOS42OTkgOTIuMTggMjE5LjY5OSA4MS43NFYyLjUzOTk5SDIzNi4wNzlaXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzU3LjkwNCAyLjUzOTk5VjEyOEgzNDEuNTI0VjIuNTM5OTlIMzU3LjkwNFpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MjUuNjAxIDEyOS4yNkM0MTcuMzIxIDEyOS4yNiA0MDkuODgxIDEyNy44MiA0MDMuMjgxIDEyNC45NEMzOTYuODAxIDEyMS45NCAzOTEuNzAxIDExNy44NiAzODcuOTgxIDExMi43QzM4NC4yNjEgMTA3LjQyIDM4Mi4zNDEgMTAxLjM2IDM4Mi4yMjEgOTQuNTJIMzk5LjY4MUM0MDAuMjgxIDEwMC40IDQwMi42ODEgMTA1LjM4IDQwNi44ODEgMTA5LjQ2QzQxMS4yMDEgMTEzLjQyIDQxNy40NDEgMTE1LjQgNDI1LjYwMSAxMTUuNEM0MzMuNDAxIDExNS40IDQzOS41MjEgMTEzLjQ4IDQ0My45NjEgMTA5LjY0QzQ0OC41MjEgMTA1LjY4IDQ1MC44MDEgMTAwLjY0IDQ1MC44MDEgOTQuNTJDNDUwLjgwMSA4OS43MiA0NDkuNDgxIDg1LjgyIDQ0Ni44NDEgODIuODJDNDQ0LjIwMSA3OS44MiA0NDAuOTAxIDc3LjU0IDQzNi45NDEgNzUuOThDNDMyLjk4MSA3NC40MiA0MjcuNjQxIDcyLjc0IDQyMC45MjEgNzAuOTRDNDEyLjY0MSA2OC43OCA0MDUuOTgxIDY2LjYyIDQwMC45NDEgNjQuNDZDMzk2LjAyMSA2Mi4zIDM5MS43NjEgNTguOTQgMzg4LjE2MSA1NC4zOEMzODQuNjgxIDQ5LjcgMzgyLjk0MSA0My40NiAzODIuOTQxIDM1LjY2QzM4Mi45NDEgMjguODIgMzg0LjY4MSAyMi43NiAzODguMTYxIDE3LjQ4QzM5MS42NDEgMTIuMiAzOTYuNTAxIDguMTE5OTkgNDAyLjc0MSA1LjIzOTk5QzQwOS4xMDEgMi4zNTk5OSA0MTYuMzYxIDAuOTE5OTk4IDQyNC41MjEgMC45MTk5OThDNDM2LjI4MSAwLjkxOTk5OCA0NDUuODgxIDMuODU5OTkgNDUzLjMyMSA5Ljc0QzQ2MC44ODEgMTUuNjIgNDY1LjE0MSAyMy40MiA0NjYuMTAxIDMzLjE0SDQ0OC4xMDFDNDQ3LjUwMSAyOC4zNCA0NDQuOTgxIDI0LjE0IDQ0MC41NDEgMjAuNTRDNDM2LjEwMSAxNi44MiA0MzAuMjIxIDE0Ljk2IDQyMi45MDEgMTQuOTZDNDE2LjA2MSAxNC45NiA0MTAuNDgxIDE2Ljc2IDQwNi4xNjEgMjAuMzZDNDAxLjg0MSAyMy44NCAzOTkuNjgxIDI4Ljc2IDM5OS42ODEgMzUuMTJDMzk5LjY4MSAzOS42OCA0MDAuOTQxIDQzLjQgNDAzLjQ2MSA0Ni4yOEM0MDYuMTAxIDQ5LjE2IDQwOS4yODEgNTEuMzggNDEzLjAwMSA1Mi45NEM0MTYuODQxIDU0LjM4IDQyMi4xODEgNTYuMDYgNDI5LjAyMSA1Ny45OEM0MzcuMzAxIDYwLjI2IDQ0My45NjEgNjIuNTQgNDQ5LjAwMSA2NC44MkM0NTQuMDQxIDY2Ljk4IDQ1OC4zNjEgNzAuNCA0NjEuOTYxIDc1LjA4QzQ2NS41NjEgNzkuNjQgNDY3LjM2MSA4NS44OCA0NjcuMzYxIDkzLjhDNDY3LjM2MSA5OS45MiA0NjUuNzQxIDEwNS42OCA0NjIuNTAxIDExMS4wOEM0NTkuMjYxIDExNi40OCA0NTQuNDYxIDEyMC44NiA0NDguMTAxIDEyNC4yMkM0NDEuNzQxIDEyNy41OCA0MzQuMjQxIDEyOS4yNiA0MjUuNjAxIDEyOS4yNlpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb3Vpcy1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICNmYjhmMGEgMTAlLCAjZDUzNzBiIDEwMCUpO1xuICAgICAgICAgIHdpZHRoOiA1MjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDUyOHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgICBoZWlnaHQ6IDUyOHB4O1xuICAgICAgICAgIHdpZHRoOiA1MjhweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVyby10ZXh0IHNwYW4ge1xuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1pbiAxcyBjdWJpYy1iZXppZXIoMC43NCwgMC4wNCwgMC4zMywgMS4zOSk7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtaW4ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMDBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyby1pbWFnZSB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDNzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXX0= */\n/*@ sourceURL=/Users/mosell01/projects/website/components/Hero.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mosell01/projects/website/components/Nav.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-3260700022" + " " + "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3260700022" + " " + "header-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "91",
    height: "74",
    viewBox: "0 0 91 74",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("circle", {
    cx: "36.5806",
    cy: "36.5806",
    r: "36.5806",
    fill: "#F46036",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }), __jsx("path", {
    d: "M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032",
    stroke: "white",
    strokeWidth: "10",
    strokeLinecap: "square",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-3260700022" + " " + "Projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/CV",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "CV")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "About Me")), __jsx("svg", {
    width: "47",
    height: "42",
    viewBox: "0 0 47 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("line", {
    x1: "22.4457",
    y1: "3.1129",
    x2: "3.03215",
    y2: "24.5085",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("line", {
    x1: "44.1896",
    y1: "17.5075",
    x2: "24.7761",
    y2: "38.903",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("line", {
    x1: "40.236",
    y1: "3.24801",
    x2: "7.98537",
    y2: "38.7861",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "jsx-3260700022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3260700022",
    __self: undefined
  }, "nav.jsx-3260700022{display:grid;padding:1rem;grid-template-columns:10% 1fr 1fr 1fr 10%;min-height:10vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;color:white;}.header-logo.jsx-3260700022{grid-column:1/2;font-size:40px;cursor:pointer;}a.jsx-3260700022:active,.header-logo.jsx-3260700022:active{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}a.jsx-3260700022{font-size:24px;color:white;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3260700022:hover{color:#f46036;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvTmF2LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGtCLEFBR3dCLEFBU0csQUFNTSxBQUdQLEFBS0QsYUF0QkQsQ0F1QmYsQ0FMYyxDQVRHLFVBUjJCLENBa0JyQixJQVROLGVBQ2pCLHNCQVRrQixTQWtCbEIsQ0FMQSxNQVpxQiw2RkFDRSxxQkFDVCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvTmF2LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOTFcIiBoZWlnaHQ9XCI3NFwiIHZpZXdCb3g9XCIwIDAgOTEgNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjM2LjU4MDZcIiBjeT1cIjM2LjU4MDZcIiByPVwiMzYuNTgwNlwiIGZpbGw9XCIjRjQ2MDM2XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEwLjgzODcgOS40ODM4NlY1Ni45MDMyTDM2LjE4MjEgMzAuNTA0OEw0Ny42NTg0IDU2LjkwMzJMNjYuNzg1NiAzMC41MDQ4TDg0IDU2LjkwMzJcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQcm9qZWN0c1wiPlByb2plY3RzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvQ1ZcIj5cbiAgICAgICAgICA8YT5DVjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQgTWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjQ3XCIgaGVpZ2h0PVwiNDJcIiB2aWV3Qm94PVwiMCAwIDQ3IDQyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgIHgxPVwiMjIuNDQ1N1wiXG4gICAgICAgICAgICB5MT1cIjMuMTEyOVwiXG4gICAgICAgICAgICB4Mj1cIjMuMDMyMTVcIlxuICAgICAgICAgICAgeTI9XCIyNC41MDg1XCJcbiAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgeDE9XCI0NC4xODk2XCJcbiAgICAgICAgICAgIHkxPVwiMTcuNTA3NVwiXG4gICAgICAgICAgICB4Mj1cIjI0Ljc3NjFcIlxuICAgICAgICAgICAgeTI9XCIzOC45MDNcIlxuICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIzXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICB4MT1cIjQwLjIzNlwiXG4gICAgICAgICAgICB5MT1cIjMuMjQ4MDFcIlxuICAgICAgICAgICAgeDI9XCI3Ljk4NTM3XCJcbiAgICAgICAgICAgIHkyPVwiMzguNzg2MVwiXG4gICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDFmciAxZnIgMWZyIDEwJTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhOmFjdGl2ZSxcbiAgICAgICAgLmhlYWRlci1sb2dvOmFjdGl2ZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2Y0NjAzNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19 */\n/*@ sourceURL=/Users/mosell01/projects/website/components/Nav.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Skills.tsx":
/*!*******************************!*\
  !*** ./components/Skills.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mosell01/projects/website/components/Skills.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Skills = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2288788585" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-0-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/skill-logos/react.png",
    className: "jsx-2288788585" + " " + "skill-0-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-2288788585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd aksdklansd"))), __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-1-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/skill-logos/react.png",
    className: "jsx-2288788585" + " " + "skill-1-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-2288788585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd aksdklansd"))), __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-2-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2288788585" + " " + "skill-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/skill-logos/react.png",
    className: "jsx-2288788585" + " " + "skill-2-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-2288788585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd aksdklansd"))), __jsx("span", {
    className: "jsx-2288788585" + " " + "vertical-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2288788585",
    __self: undefined
  }, ".container.jsx-2288788585{display:grid;grid-template-columns:1fr 2% 1fr;grid-template-rows:1fr 1fr 1fr;background-color:black;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.skill-0-container.jsx-2288788585{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;justify-self:end;}.skill-1-container.jsx-2288788585{grid-column-start:3;grid-column-end:4;grid-row-start:2;grid-row-end:3;}.skill-2-container.jsx-2288788585{grid-column-start:1;grid-column-end:2;grid-row-start:3;grid-row-end:4;justify-self:end;}.vertical-line.jsx-2288788585{border-right:3px solid white;margin:10px 16px;height:500px;grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:4;}p.jsx-2288788585{color:white;}.skill-0.jsx-2288788585{width:300px;justify-self:end;}.skill-1.jsx-2288788585{width:300px;}.skill-2.jsx-2288788585{width:300px;justify-self:end;}.skill-0-img.jsx-2288788585{height:125px;width:125px;object-fit:cover;}.skill-1-img.jsx-2288788585{height:125px;width:125px;object-fit:cover;}.skill-2-img.jsx-2288788585{height:125px;width:125px;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL2NvbXBvbmVudHMvU2tpbGxzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBR3dCLEFBU08sQUFPQSxBQU1BLEFBT1MsQUFTakIsQUFHQSxBQUlBLEFBR0EsQUFJQyxBQUtBLEFBS0EsWUF2QmYsQUFHbUIsQUFJbkIsQUFHbUIsQ0FoRGdCLEFBb0RyQixBQUtBLEFBS0EsT0FyRE0sQUFPQSxBQU1BLEtBK0JELEFBS0EsQUFLQSxJQWxDQSxBQWFuQixBQU9BLFNBdkNtQixBQU9BLEFBTUEsSUErQm5CLEFBS0EsQUFLQSxJQS9EaUMsQUE2QmxCLFNBbkJFLEFBT0EsQUFNQSxJQU9LLFdBbkJILEFBT25CLEFBTW1CLE9BdkJNLEVBOEJMLFFBbkJwQixBQWFBLFVBT21CLEdBOUJOLFdBQ1ksR0E4QlIsZUFDakIsaUZBOUJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL21vc2VsbDAxL3Byb2plY3RzL3dlYnNpdGUvY29tcG9uZW50cy9Ta2lsbHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCBTa2lsbHM6IEZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC0wLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC0wLWltZ1wiIHNyYz1cIi9za2lsbC1sb2dvcy9yZWFjdC5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTb21lIGRlc2NyaXB0aW9uIHRleHQgYXNrZG5rbGFzZG5zYWRrbCBhc2xka25hc2tsZG4ga2FzZGxrbmFzZG4ga2xhc25kbGtuc2FkIGFza2xkbmFzbmQga2xhc2RubGthc2RcbiAgICAgICAgICAgICAgYWtzZGtsYW5zZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC0xLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC0xLWltZ1wiIHNyYz1cIi9za2lsbC1sb2dvcy9yZWFjdC5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTb21lIGRlc2NyaXB0aW9uIHRleHQgYXNrZG5rbGFzZG5zYWRrbCBhc2xka25hc2tsZG4ga2FzZGxrbmFzZG4ga2xhc25kbGtuc2FkIGFza2xkbmFzbmQga2xhc2RubGthc2RcbiAgICAgICAgICAgICAgYWtzZGtsYW5zZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC0yLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJza2lsbC0yLWltZ1wiIHNyYz1cIi9za2lsbC1sb2dvcy9yZWFjdC5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTb21lIGRlc2NyaXB0aW9uIHRleHQgYXNrZG5rbGFzZG5zYWRrbCBhc2xka25hc2tsZG4ga2FzZGxrbmFzZG4ga2xhc25kbGtuc2FkIGFza2xkbmFzbmQga2xhc2RubGthc2RcbiAgICAgICAgICAgICAgYWtzZGtsYW5zZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVydGljYWwtbGluZVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIlIDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTAtY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0xLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMi1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLnZlcnRpY2FsLWxpbmUge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAxNnB4O1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTAge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMSB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0yIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTAtaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMS1pbWcge1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0yLWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdfQ== */\n/*@ sourceURL=/Users/mosell01/projects/website/components/Skills.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.tsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");
var _jsxFileName = "/Users/mosell01/projects/website/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Home = () => {
  // royal blue dark: #031957;
  //  middle blue: #90DDF0;
  // subtle pink: #F0EDEE;
  // dark turquoise: #2C666E;
  // orange: #F46036;
  const path1 = 'M1 346V1C72.3084 195.426 243 98.4118 333 70C423 41.5882 347 120.059 477 130.882C607 141.706 579 244.529 653 233.706C727 222.882 769 70 883 186.353C997 302.706 1027 -135.647 1175 98.4118C1323 332.471 1333 87.5882 1499 130.882C1558.5 146.402 1541 -75 1623 88.9412C1660.78 164.471 1689 1 1689 1V346H1Z';
  const path2 = 'M1 346V1C72.3084 195.426 219 67.2941 309 38.8824C399 10.4706 343 153.882 473 164.706C603 175.529 585 220.176 659 209.353C733 198.529 763 30.7647 877 147.118C991 263.471 1037 -86.9412 1185 147.118C1333 381.176 1263 134.941 1429 178.235C1488.5 193.755 1477 57.516 1555 107.882C1643 164.706 1689 1 1689 1V346H1Z';
  const path3 = 'M1 346V1C72.3084 195.426 61 138.504 248 79.4706C435 20.4373 365 341.941 470 235.059C575 128.176 596 189.059 670 178.235C744 167.412 730 -36.8824 877 147.118C1024 331.118 974 65.9412 1185 147.118C1396 228.294 1294 79.4706 1429 178.235C1564 277 1474 43.6073 1580 136.294C1654 201 1689 1 1689 1V346H1Z';
  const path4 = 'M1 346V1C72.3084 195.426 63 172.327 250 113.294C437 54.2608 369 304.059 474 197.176C579 90.2941 588 137.647 662 126.824C736 116 731 32.1176 878 216.118C1025 400.118 969 15.8824 1180 97.0588C1391 178.235 1295 -51.7647 1430 47C1565 145.765 1505 262.186 1582 244.529C1641 231 1689 1 1689 1V346H1Z';

  if (false) {}

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Website with some stuff and things",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Keywords",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    href: "https://mozl.netlify.app",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Website"), __jsx("link", {
    href: "/favicon.ico",
    rel: "icon",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/apple-icon.png",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#317EFB",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "jsx-3572438352" + " " + "top-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3572438352" + " " + "top-section__inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3572438352" + " " + "border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("svg", {
    id: "wavy-border",
    width: "100%",
    height: "345",
    viewBox: "5 0 1682 345",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    className: "jsx-3572438352",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: path1,
    fill: "#020000",
    className: "jsx-3572438352" + " " + "pathStart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  })))), __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1496622761",
    __self: undefined
  }, "main.jsx-3572438352{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}section.jsx-3572438352{width:100vw;}.top-section.jsx-3572438352{background:linear-gradient(to bottom,#031957 25%,#90ddf0 100%);box-shadow:0 0 0 1px #000;}.top-section__inner.jsx-3572438352{display:grid;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;}.border.jsx-3572438352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:30px;-webkit-align-content:flex-end;-ms-flex-line-pack:end;align-content:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;}.section-2.jsx-3572438352{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:grey;min-width:100%;min-height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFa0IsQUFHa0IsQUFNSyxBQUdxRCxBQUlwRCxBQUtBLEFBT0EsWUFsQmYsQ0FPcUIsb0JBYk4sOEJBU2EsV0FTVCxBQU9LLGVBZnhCLEVBU3lCLEtBT1IsVUFaTSxDQWJDLElBMEJMLGdCQVpuQixDQWFBLHdDQVIyQixpQkFsQk4sZ0ZBbUJSLFdBQ2IsRUFuQkEiLCJmaWxlIjoiL1VzZXJzL21vc2VsbDAxL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAvLyByb3lhbCBibHVlIGRhcms6ICMwMzE5NTc7XG4gIC8vICBtaWRkbGUgYmx1ZTogIzkwRERGMDtcbiAgLy8gc3VidGxlIHBpbms6ICNGMEVERUU7XG4gIC8vIGRhcmsgdHVycXVvaXNlOiAjMkM2NjZFO1xuICAvLyBvcmFuZ2U6ICNGNDYwMzY7XG4gIGNvbnN0IHBhdGgxID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDI0MyA5OC40MTE4IDMzMyA3MEM0MjMgNDEuNTg4MiAzNDcgMTIwLjA1OSA0NzcgMTMwLjg4MkM2MDcgMTQxLjcwNiA1NzkgMjQ0LjUyOSA2NTMgMjMzLjcwNkM3MjcgMjIyLjg4MiA3NjkgNzAgODgzIDE4Ni4zNTNDOTk3IDMwMi43MDYgMTAyNyAtMTM1LjY0NyAxMTc1IDk4LjQxMThDMTMyMyAzMzIuNDcxIDEzMzMgODcuNTg4MiAxNDk5IDEzMC44ODJDMTU1OC41IDE0Ni40MDIgMTU0MSAtNzUgMTYyMyA4OC45NDEyQzE2NjAuNzggMTY0LjQ3MSAxNjg5IDEgMTY4OSAxVjM0NkgxWic7XG4gIGNvbnN0IHBhdGgyID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDIxOSA2Ny4yOTQxIDMwOSAzOC44ODI0QzM5OSAxMC40NzA2IDM0MyAxNTMuODgyIDQ3MyAxNjQuNzA2QzYwMyAxNzUuNTI5IDU4NSAyMjAuMTc2IDY1OSAyMDkuMzUzQzczMyAxOTguNTI5IDc2MyAzMC43NjQ3IDg3NyAxNDcuMTE4Qzk5MSAyNjMuNDcxIDEwMzcgLTg2Ljk0MTIgMTE4NSAxNDcuMTE4QzEzMzMgMzgxLjE3NiAxMjYzIDEzNC45NDEgMTQyOSAxNzguMjM1QzE0ODguNSAxOTMuNzU1IDE0NzcgNTcuNTE2IDE1NTUgMTA3Ljg4MkMxNjQzIDE2NC43MDYgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoMyA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MSAxMzguNTA0IDI0OCA3OS40NzA2QzQzNSAyMC40MzczIDM2NSAzNDEuOTQxIDQ3MCAyMzUuMDU5QzU3NSAxMjguMTc2IDU5NiAxODkuMDU5IDY3MCAxNzguMjM1Qzc0NCAxNjcuNDEyIDczMCAtMzYuODgyNCA4NzcgMTQ3LjExOEMxMDI0IDMzMS4xMTggOTc0IDY1Ljk0MTIgMTE4NSAxNDcuMTE4QzEzOTYgMjI4LjI5NCAxMjk0IDc5LjQ3MDYgMTQyOSAxNzguMjM1QzE1NjQgMjc3IDE0NzQgNDMuNjA3MyAxNTgwIDEzNi4yOTRDMTY1NCAyMDEgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoNCA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MyAxNzIuMzI3IDI1MCAxMTMuMjk0QzQzNyA1NC4yNjA4IDM2OSAzMDQuMDU5IDQ3NCAxOTcuMTc2QzU3OSA5MC4yOTQxIDU4OCAxMzcuNjQ3IDY2MiAxMjYuODI0QzczNiAxMTYgNzMxIDMyLjExNzYgODc4IDIxNi4xMThDMTAyNSA0MDAuMTE4IDk2OSAxNS44ODI0IDExODAgOTcuMDU4OEMxMzkxIDE3OC4yMzUgMTI5NSAtNTEuNzY0NyAxNDMwIDQ3QzE1NjUgMTQ1Ljc2NSAxNTA1IDI2Mi4xODYgMTU4MiAyNDQuNTI5QzE2NDEgMjMxIDE2ODkgMSAxNjg5IDFWMzQ2SDFaJztcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnBhdGhTdGFydCcsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcbiAgICAgIGR1cmF0aW9uOiA1MDAwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuICAgICAgZDogW3sgdmFsdWU6IHBhdGgyIH0sIHsgdmFsdWU6IHBhdGgzIH0sIHsgdmFsdWU6IHBhdGg0IH1dXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlIHdpdGggc29tZSBzdHVmZiBhbmQgdGhpbmdzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIktleXdvcmRzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbW96bC5uZXRsaWZ5LmFwcFwiIC8+XG4gICAgICAgIDx0aXRsZT5XZWJzaXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9mYXZpY29uLmljb1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9hcHBsZS1pY29uLnBuZ1wiPjwvbGluaz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMzMTdFRkJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwid2F2eS1ib3JkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiNSAwIDE2ODIgMzQ1XCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicGF0aFN0YXJ0XCIgZD17cGF0aDF9IGZpbGw9XCIjMDIwMDAwXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxTa2lsbHMgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICAudG9wLXNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzE5NTcgMjUlLCAjOTBkZGYwIDEwMCUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC50b3Atc2VjdGlvbl9faW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLTIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/mosell01/projects/website/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4196246224",
    __self: undefined
  }, "html,body{padding:0;margin:0;font-family:'Poppins',sans-serif;overflow-x:hidden;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3NlbGwwMS9wcm9qZWN0cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHeUIsQUFJcUIsQUFPWSxVQU5iLFNBQ3lCLEdBTXBDLDhCQUxvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21vc2VsbDAxL3Byb2plY3RzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAvLyByb3lhbCBibHVlIGRhcms6ICMwMzE5NTc7XG4gIC8vICBtaWRkbGUgYmx1ZTogIzkwRERGMDtcbiAgLy8gc3VidGxlIHBpbms6ICNGMEVERUU7XG4gIC8vIGRhcmsgdHVycXVvaXNlOiAjMkM2NjZFO1xuICAvLyBvcmFuZ2U6ICNGNDYwMzY7XG4gIGNvbnN0IHBhdGgxID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDI0MyA5OC40MTE4IDMzMyA3MEM0MjMgNDEuNTg4MiAzNDcgMTIwLjA1OSA0NzcgMTMwLjg4MkM2MDcgMTQxLjcwNiA1NzkgMjQ0LjUyOSA2NTMgMjMzLjcwNkM3MjcgMjIyLjg4MiA3NjkgNzAgODgzIDE4Ni4zNTNDOTk3IDMwMi43MDYgMTAyNyAtMTM1LjY0NyAxMTc1IDk4LjQxMThDMTMyMyAzMzIuNDcxIDEzMzMgODcuNTg4MiAxNDk5IDEzMC44ODJDMTU1OC41IDE0Ni40MDIgMTU0MSAtNzUgMTYyMyA4OC45NDEyQzE2NjAuNzggMTY0LjQ3MSAxNjg5IDEgMTY4OSAxVjM0NkgxWic7XG4gIGNvbnN0IHBhdGgyID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDIxOSA2Ny4yOTQxIDMwOSAzOC44ODI0QzM5OSAxMC40NzA2IDM0MyAxNTMuODgyIDQ3MyAxNjQuNzA2QzYwMyAxNzUuNTI5IDU4NSAyMjAuMTc2IDY1OSAyMDkuMzUzQzczMyAxOTguNTI5IDc2MyAzMC43NjQ3IDg3NyAxNDcuMTE4Qzk5MSAyNjMuNDcxIDEwMzcgLTg2Ljk0MTIgMTE4NSAxNDcuMTE4QzEzMzMgMzgxLjE3NiAxMjYzIDEzNC45NDEgMTQyOSAxNzguMjM1QzE0ODguNSAxOTMuNzU1IDE0NzcgNTcuNTE2IDE1NTUgMTA3Ljg4MkMxNjQzIDE2NC43MDYgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoMyA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MSAxMzguNTA0IDI0OCA3OS40NzA2QzQzNSAyMC40MzczIDM2NSAzNDEuOTQxIDQ3MCAyMzUuMDU5QzU3NSAxMjguMTc2IDU5NiAxODkuMDU5IDY3MCAxNzguMjM1Qzc0NCAxNjcuNDEyIDczMCAtMzYuODgyNCA4NzcgMTQ3LjExOEMxMDI0IDMzMS4xMTggOTc0IDY1Ljk0MTIgMTE4NSAxNDcuMTE4QzEzOTYgMjI4LjI5NCAxMjk0IDc5LjQ3MDYgMTQyOSAxNzguMjM1QzE1NjQgMjc3IDE0NzQgNDMuNjA3MyAxNTgwIDEzNi4yOTRDMTY1NCAyMDEgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoNCA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MyAxNzIuMzI3IDI1MCAxMTMuMjk0QzQzNyA1NC4yNjA4IDM2OSAzMDQuMDU5IDQ3NCAxOTcuMTc2QzU3OSA5MC4yOTQxIDU4OCAxMzcuNjQ3IDY2MiAxMjYuODI0QzczNiAxMTYgNzMxIDMyLjExNzYgODc4IDIxNi4xMThDMTAyNSA0MDAuMTE4IDk2OSAxNS44ODI0IDExODAgOTcuMDU4OEMxMzkxIDE3OC4yMzUgMTI5NSAtNTEuNzY0NyAxNDMwIDQ3QzE1NjUgMTQ1Ljc2NSAxNTA1IDI2Mi4xODYgMTU4MiAyNDQuNTI5QzE2NDEgMjMxIDE2ODkgMSAxNjg5IDFWMzQ2SDFaJztcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnBhdGhTdGFydCcsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcbiAgICAgIGR1cmF0aW9uOiA1MDAwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuICAgICAgZDogW3sgdmFsdWU6IHBhdGgyIH0sIHsgdmFsdWU6IHBhdGgzIH0sIHsgdmFsdWU6IHBhdGg0IH1dXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlIHdpdGggc29tZSBzdHVmZiBhbmQgdGhpbmdzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIktleXdvcmRzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbW96bC5uZXRsaWZ5LmFwcFwiIC8+XG4gICAgICAgIDx0aXRsZT5XZWJzaXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9mYXZpY29uLmljb1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9hcHBsZS1pY29uLnBuZ1wiPjwvbGluaz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMzMTdFRkJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwid2F2eS1ib3JkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiNSAwIDE2ODIgMzQ1XCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicGF0aFN0YXJ0XCIgZD17cGF0aDF9IGZpbGw9XCIjMDIwMDAwXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxTa2lsbHMgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICAudG9wLXNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzE5NTcgMjUlLCAjOTBkZGYwIDEwMCUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC50b3Atc2VjdGlvbl9faW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLTIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/mosell01/projects/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: increment, decrement, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");

function increment() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
    });
  };
}
function decrement() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
    });
  };
}
function reset() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["RESET"]
    });
  };
}

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: INCREMENT, DECREMENT, RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mosell01/projects/website/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2tpbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmltZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQ291bnRlciIsImNvdW50ZXIiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJyZXNldCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY291bnRlclJlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiLCJIZXJvIiwiTmF2IiwiU2tpbGxzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkhvbWUiLCJwYXRoMSIsInBhdGgyIiwicGF0aDMiLCJwYXRoNCIsIklOQ1JFTUVOVCIsIkRFQ1JFTUVOVCIsIlJFU0VUIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNB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OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCByZXNldCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMnO1xuXG5mdW5jdGlvbiBDb3VudGVyKHsgY291bnRlciwgaW5jcmVtZW50LCBkZWNyZW1lbnQsIHJlc2V0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyXCI+e2NvdW50ZXJ9PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9PklOQ1JFTUVOVDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnR9PkRFQ1JFTUVOVDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm51bWJlciB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgY291bnRlcjogc3RhdGUuY291bnRlclJlZHVjZXIuY291bnRlclxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGluY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpLFxuICAgIGRlY3JlbWVudDogKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KCkpLFxuICAgIHJlc2V0OiAoKSA9PiBkaXNwYXRjaChyZXNldCgpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEhlcm86IEZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG91aXMtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZHNob3RcIiBzcmM9XCIvaGVhZHNob3QucG5nXCIgaGVpZ2h0PVwiNTI4cHhcIiB3aWR0aD1cIjUyOHB4XCI+PC9pbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiPlxuICAgICAgICAgIDxzcGFuPkhpIEknbTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXN2Z1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNzBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NzggMTcwXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjI0IDExNC42OEg2MS4xNlYxMjhIMC44NjAwMDFWMi41Mzk5OUgxNy4yNFYxMTQuNjhaXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM1LjQzNSAxMjkuMjZDMTIzLjc5NSAxMjkuMjYgMTEzLjE3NSAxMjYuNTYgMTAzLjU3NSAxMjEuMTZDOTMuOTc1MyAxMTUuNjQgODYuMzU1MyAxMDguMDIgODAuNzE1MyA5OC4zQzc1LjE5NTMgODguNDYgNzIuNDM1MyA3Ny40MiA3Mi40MzUzIDY1LjE4QzcyLjQzNTMgNTIuOTQgNzUuMTk1MyA0MS45NiA4MC43MTUzIDMyLjI0Qzg2LjM1NTMgMjIuNCA5My45NzUzIDE0Ljc4IDEwMy41NzUgOS4zNzk5OUMxMTMuMTc1IDMuODU5OTkgMTIzLjc5NSAxLjA5OTk5IDEzNS40MzUgMS4wOTk5OUMxNDcuMTk1IDEuMDk5OTkgMTU3Ljg3NSAzLjg1OTk5IDE2Ny40NzUgOS4zNzk5OUMxNzcuMDc1IDE0Ljc4IDE4NC42MzUgMjIuMzQgMTkwLjE1NSAzMi4wNkMxOTUuNjc1IDQxLjc4IDE5OC40MzUgNTIuODIgMTk4LjQzNSA2NS4xOEMxOTguNDM1IDc3LjU0IDE5NS42NzUgODguNTggMTkwLjE1NSA5OC4zQzE4NC42MzUgMTA4LjAyIDE3Ny4wNzUgMTE1LjY0IDE2Ny40NzUgMTIxLjE2QzE1Ny44NzUgMTI2LjU2IDE0Ny4xOTUgMTI5LjI2IDEzNS40MzUgMTI5LjI2Wk0xMzUuNDM1IDExNS4wNEMxNDQuMTk1IDExNS4wNCAxNTIuMDU1IDExMyAxNTkuMDE1IDEwOC45MkMxNjYuMDk1IDEwNC44NCAxNzEuNjE1IDk5LjAyIDE3NS41NzUgOTEuNDZDMTc5LjY1NSA4My45IDE4MS42OTUgNzUuMTQgMTgxLjY5NSA2NS4xOEMxODEuNjk1IDU1LjEgMTc5LjY1NSA0Ni4zNCAxNzUuNTc1IDM4LjlDMTcxLjYxNSAzMS4zNCAxNjYuMTU1IDI1LjUyIDE1OS4xOTUgMjEuNDRDMTUyLjIzNSAxNy4zNiAxNDQuMzE1IDE1LjMyIDEzNS40MzUgMTUuMzJDMTI2LjU1NSAxNS4zMiAxMTguNjM1IDE3LjM2IDExMS42NzUgMjEuNDRDMTA0LjcxNSAyNS41MiA5OS4xOTUzIDMxLjM0IDk1LjExNTMgMzguOUM5MS4xNTUzIDQ2LjM0IDg5LjE3NTMgNTUuMSA4OS4xNzUzIDY1LjE4Qzg5LjE3NTMgNzUuMTQgOTEuMTU1MyA4My45IDk1LjExNTMgOTEuNDZDOTkuMTk1MyA5OS4wMiAxMDQuNzE1IDEwNC44NCAxMTEuNjc1IDEwOC45MkMxMTguNzU1IDExMyAxMjYuNjc1IDExNS4wNCAxMzUuNDM1IDExNS4wNFpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMzYuMDc5IDIuNTM5OTlWODEuOTJDMjM2LjA3OSA5My4wOCAyMzguNzc5IDEwMS4zNiAyNDQuMTc5IDEwNi43NkMyNDkuNjk5IDExMi4xNiAyNTcuMzE5IDExNC44NiAyNjcuMDM5IDExNC44NkMyNzYuNjM5IDExNC44NiAyODQuMTM5IDExMi4xNiAyODkuNTM5IDEwNi43NkMyOTUuMDU5IDEwMS4zNiAyOTcuODE5IDkzLjA4IDI5Ny44MTkgODEuOTJWMi41Mzk5OUgzMTQuMTk5VjgxLjc0QzMxNC4xOTkgOTIuMTggMzEyLjA5OSAxMDEgMzA3Ljg5OSAxMDguMkMzMDMuNjk5IDExNS4yOCAyOTcuOTk5IDEyMC41NiAyOTAuNzk5IDEyNC4wNEMyODMuNzE5IDEyNy41MiAyNzUuNzM5IDEyOS4yNiAyNjYuODU5IDEyOS4yNkMyNTcuOTc5IDEyOS4yNiAyNDkuOTM5IDEyNy41MiAyNDIuNzM5IDEyNC4wNEMyMzUuNjU5IDEyMC41NiAyMzAuMDE5IDExNS4yOCAyMjUuODE5IDEwOC4yQzIyMS43MzkgMTAxIDIxOS42OTkgOTIuMTggMjE5LjY5OSA4MS43NFYyLjUzOTk5SDIzNi4wNzlaXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzU3LjkwNCAyLjUzOTk5VjEyOEgzNDEuNTI0VjIuNTM5OTlIMzU3LjkwNFpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MjUuNjAxIDEyOS4yNkM0MTcuMzIxIDEyOS4yNiA0MDkuODgxIDEyNy44MiA0MDMuMjgxIDEyNC45NEMzOTYuODAxIDEyMS45NCAzOTEuNzAxIDExNy44NiAzODcuOTgxIDExMi43QzM4NC4yNjEgMTA3LjQyIDM4Mi4zNDEgMTAxLjM2IDM4Mi4yMjEgOTQuNTJIMzk5LjY4MUM0MDAuMjgxIDEwMC40IDQwMi42ODEgMTA1LjM4IDQwNi44ODEgMTA5LjQ2QzQxMS4yMDEgMTEzLjQyIDQxNy40NDEgMTE1LjQgNDI1LjYwMSAxMTUuNEM0MzMuNDAxIDExNS40IDQzOS41MjEgMTEzLjQ4IDQ0My45NjEgMTA5LjY0QzQ0OC41MjEgMTA1LjY4IDQ1MC44MDEgMTAwLjY0IDQ1MC44MDEgOTQuNTJDNDUwLjgwMSA4OS43MiA0NDkuNDgxIDg1LjgyIDQ0Ni44NDEgODIuODJDNDQ0LjIwMSA3OS44MiA0NDAuOTAxIDc3LjU0IDQzNi45NDEgNzUuOThDNDMyLjk4MSA3NC40MiA0MjcuNjQxIDcyLjc0IDQyMC45MjEgNzAuOTRDNDEyLjY0MSA2OC43OCA0MDUuOTgxIDY2LjYyIDQwMC45NDEgNjQuNDZDMzk2LjAyMSA2Mi4zIDM5MS43NjEgNTguOTQgMzg4LjE2MSA1NC4zOEMzODQuNjgxIDQ5LjcgMzgyLjk0MSA0My40NiAzODIuOTQxIDM1LjY2QzM4Mi45NDEgMjguODIgMzg0LjY4MSAyMi43NiAzODguMTYxIDE3LjQ4QzM5MS42NDEgMTIuMiAzOTYuNTAxIDguMTE5OTkgNDAyLjc0MSA1LjIzOTk5QzQwOS4xMDEgMi4zNTk5OSA0MTYuMzYxIDAuOTE5OTk4IDQyNC41MjEgMC45MTk5OThDNDM2LjI4MSAwLjkxOTk5OCA0NDUuODgxIDMuODU5OTkgNDUzLjMyMSA5Ljc0QzQ2MC44ODEgMTUuNjIgNDY1LjE0MSAyMy40MiA0NjYuMTAxIDMzLjE0SDQ0OC4xMDFDNDQ3LjUwMSAyOC4zNCA0NDQuOTgxIDI0LjE0IDQ0MC41NDEgMjAuNTRDNDM2LjEwMSAxNi44MiA0MzAuMjIxIDE0Ljk2IDQyMi45MDEgMTQuOTZDNDE2LjA2MSAxNC45NiA0MTAuNDgxIDE2Ljc2IDQwNi4xNjEgMjAuMzZDNDAxLjg0MSAyMy44NCAzOTkuNjgxIDI4Ljc2IDM5OS42ODEgMzUuMTJDMzk5LjY4MSAzOS42OCA0MDAuOTQxIDQzLjQgNDAzLjQ2MSA0Ni4yOEM0MDYuMTAxIDQ5LjE2IDQwOS4yODEgNTEuMzggNDEzLjAwMSA1Mi45NEM0MTYuODQxIDU0LjM4IDQyMi4xODEgNTYuMDYgNDI5LjAyMSA1Ny45OEM0MzcuMzAxIDYwLjI2IDQ0My45NjEgNjIuNTQgNDQ5LjAwMSA2NC44MkM0NTQuMDQxIDY2Ljk4IDQ1OC4zNjEgNzAuNCA0NjEuOTYxIDc1LjA4QzQ2NS41NjEgNzkuNjQgNDY3LjM2MSA4NS44OCA0NjcuMzYxIDkzLjhDNDY3LjM2MSA5OS45MiA0NjUuNzQxIDEwNS42OCA0NjIuNTAxIDExMS4wOEM0NTkuMjYxIDExNi40OCA0NTQuNDYxIDEyMC44NiA0NDguMTAxIDEyNC4yMkM0NDEuNzQxIDEyNy41OCA0MzQuMjQxIDEyOS4yNiA0MjUuNjAxIDEyOS4yNlpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb3Vpcy1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICNmYjhmMGEgMTAlLCAjZDUzNzBiIDEwMCUpO1xuICAgICAgICAgIHdpZHRoOiA1MjhweDtcbiAgICAgICAgICBoZWlnaHQ6IDUyOHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgICBoZWlnaHQ6IDUyOHB4O1xuICAgICAgICAgIHdpZHRoOiA1MjhweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVyby10ZXh0IHNwYW4ge1xuICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1pbiAxcyBjdWJpYy1iZXppZXIoMC43NCwgMC4wNCwgMC4zMywgMS4zOSk7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtaW4ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMDBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyby1pbWFnZSB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDNzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjkxXCIgaGVpZ2h0PVwiNzRcIiB2aWV3Qm94PVwiMCAwIDkxIDc0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIzNi41ODA2XCIgY3k9XCIzNi41ODA2XCIgcj1cIjM2LjU4MDZcIiBmaWxsPVwiI0Y0NjAzNlwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xMC44Mzg3IDkuNDgzODZWNTYuOTAzMkwzNi4xODIxIDMwLjUwNDhMNDcuNjU4NCA1Ni45MDMyTDY2Ljc4NTYgMzAuNTA0OEw4NCA1Ni45MDMyXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUHJvamVjdHNcIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL0NWXCI+XG4gICAgICAgICAgPGE+Q1Y8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPkFib3V0IE1lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdmcgd2lkdGg9XCI0N1wiIGhlaWdodD1cIjQyXCIgdmlld0JveD1cIjAgMCA0NyA0MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICB4MT1cIjIyLjQ0NTdcIlxuICAgICAgICAgICAgeTE9XCIzLjExMjlcIlxuICAgICAgICAgICAgeDI9XCIzLjAzMjE1XCJcbiAgICAgICAgICAgIHkyPVwiMjQuNTA4NVwiXG4gICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgIHgxPVwiNDQuMTg5NlwiXG4gICAgICAgICAgICB5MT1cIjE3LjUwNzVcIlxuICAgICAgICAgICAgeDI9XCIyNC43NzYxXCJcbiAgICAgICAgICAgIHkyPVwiMzguOTAzXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgeDE9XCI0MC4yMzZcIlxuICAgICAgICAgICAgeTE9XCIzLjI0ODAxXCJcbiAgICAgICAgICAgIHgyPVwiNy45ODUzN1wiXG4gICAgICAgICAgICB5Mj1cIjM4Ljc4NjFcIlxuICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIzXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAxZnIgMWZyIDFmciAxMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1sb2dvIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYTphY3RpdmUsXG4gICAgICAgIC5oZWFkZXItbG9nbzphY3RpdmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmNDYwMzY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbn1cblxuY29uc3QgU2tpbGxzOiBGQzxQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLTBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtMC1pbWdcIiBzcmM9XCIvc2tpbGwtbG9nb3MvcmVhY3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU29tZSBkZXNjcmlwdGlvbiB0ZXh0IGFza2Rua2xhc2Ruc2Fka2wgYXNsZGtuYXNrbGRuIGthc2Rsa25hc2RuIGtsYXNuZGxrbnNhZCBhc2tsZG5hc25kIGtsYXNkbmxrYXNkXG4gICAgICAgICAgICAgIGFrc2RrbGFuc2RcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLTFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtMS1pbWdcIiBzcmM9XCIvc2tpbGwtbG9nb3MvcmVhY3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU29tZSBkZXNjcmlwdGlvbiB0ZXh0IGFza2Rua2xhc2Ruc2Fka2wgYXNsZGtuYXNrbGRuIGthc2Rsa25hc2RuIGtsYXNuZGxrbnNhZCBhc2tsZG5hc25kIGtsYXNkbmxrYXNkXG4gICAgICAgICAgICAgIGFrc2RrbGFuc2RcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtMi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLTJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2tpbGwtMi1pbWdcIiBzcmM9XCIvc2tpbGwtbG9nb3MvcmVhY3QucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU29tZSBkZXNjcmlwdGlvbiB0ZXh0IGFza2Rua2xhc2Ruc2Fka2wgYXNsZGtuYXNrbGRuIGthc2Rsa25hc2RuIGtsYXNuZGxrbnNhZCBhc2tsZG5hc25kIGtsYXNkbmxrYXNkXG4gICAgICAgICAgICAgIGFrc2RrbGFuc2RcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZlcnRpY2FsLWxpbmVcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyJSAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0wLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMS1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTItY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB9XG4gICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0wIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTEge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMiB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbC0wLWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNraWxsLTEtaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGwtMi1pbWcge1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAvLyByb3lhbCBibHVlIGRhcms6ICMwMzE5NTc7XG4gIC8vICBtaWRkbGUgYmx1ZTogIzkwRERGMDtcbiAgLy8gc3VidGxlIHBpbms6ICNGMEVERUU7XG4gIC8vIGRhcmsgdHVycXVvaXNlOiAjMkM2NjZFO1xuICAvLyBvcmFuZ2U6ICNGNDYwMzY7XG4gIGNvbnN0IHBhdGgxID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDI0MyA5OC40MTE4IDMzMyA3MEM0MjMgNDEuNTg4MiAzNDcgMTIwLjA1OSA0NzcgMTMwLjg4MkM2MDcgMTQxLjcwNiA1NzkgMjQ0LjUyOSA2NTMgMjMzLjcwNkM3MjcgMjIyLjg4MiA3NjkgNzAgODgzIDE4Ni4zNTNDOTk3IDMwMi43MDYgMTAyNyAtMTM1LjY0NyAxMTc1IDk4LjQxMThDMTMyMyAzMzIuNDcxIDEzMzMgODcuNTg4MiAxNDk5IDEzMC44ODJDMTU1OC41IDE0Ni40MDIgMTU0MSAtNzUgMTYyMyA4OC45NDEyQzE2NjAuNzggMTY0LjQ3MSAxNjg5IDEgMTY4OSAxVjM0NkgxWic7XG4gIGNvbnN0IHBhdGgyID1cbiAgICAnTTEgMzQ2VjFDNzIuMzA4NCAxOTUuNDI2IDIxOSA2Ny4yOTQxIDMwOSAzOC44ODI0QzM5OSAxMC40NzA2IDM0MyAxNTMuODgyIDQ3MyAxNjQuNzA2QzYwMyAxNzUuNTI5IDU4NSAyMjAuMTc2IDY1OSAyMDkuMzUzQzczMyAxOTguNTI5IDc2MyAzMC43NjQ3IDg3NyAxNDcuMTE4Qzk5MSAyNjMuNDcxIDEwMzcgLTg2Ljk0MTIgMTE4NSAxNDcuMTE4QzEzMzMgMzgxLjE3NiAxMjYzIDEzNC45NDEgMTQyOSAxNzguMjM1QzE0ODguNSAxOTMuNzU1IDE0NzcgNTcuNTE2IDE1NTUgMTA3Ljg4MkMxNjQzIDE2NC43MDYgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoMyA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MSAxMzguNTA0IDI0OCA3OS40NzA2QzQzNSAyMC40MzczIDM2NSAzNDEuOTQxIDQ3MCAyMzUuMDU5QzU3NSAxMjguMTc2IDU5NiAxODkuMDU5IDY3MCAxNzguMjM1Qzc0NCAxNjcuNDEyIDczMCAtMzYuODgyNCA4NzcgMTQ3LjExOEMxMDI0IDMzMS4xMTggOTc0IDY1Ljk0MTIgMTE4NSAxNDcuMTE4QzEzOTYgMjI4LjI5NCAxMjk0IDc5LjQ3MDYgMTQyOSAxNzguMjM1QzE1NjQgMjc3IDE0NzQgNDMuNjA3MyAxNTgwIDEzNi4yOTRDMTY1NCAyMDEgMTY4OSAxIDE2ODkgMVYzNDZIMVonO1xuICBjb25zdCBwYXRoNCA9XG4gICAgJ00xIDM0NlYxQzcyLjMwODQgMTk1LjQyNiA2MyAxNzIuMzI3IDI1MCAxMTMuMjk0QzQzNyA1NC4yNjA4IDM2OSAzMDQuMDU5IDQ3NCAxOTcuMTc2QzU3OSA5MC4yOTQxIDU4OCAxMzcuNjQ3IDY2MiAxMjYuODI0QzczNiAxMTYgNzMxIDMyLjExNzYgODc4IDIxNi4xMThDMTAyNSA0MDAuMTE4IDk2OSAxNS44ODI0IDExODAgOTcuMDU4OEMxMzkxIDE3OC4yMzUgMTI5NSAtNTEuNzY0NyAxNDMwIDQ3QzE1NjUgMTQ1Ljc2NSAxNTA1IDI2Mi4xODYgMTU4MiAyNDQuNTI5QzE2NDEgMjMxIDE2ODkgMSAxNjg5IDFWMzQ2SDFaJztcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiAnLnBhdGhTdGFydCcsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcbiAgICAgIGR1cmF0aW9uOiA1MDAwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFNpbmUnLFxuICAgICAgZDogW3sgdmFsdWU6IHBhdGgyIH0sIHsgdmFsdWU6IHBhdGgzIH0sIHsgdmFsdWU6IHBhdGg0IH1dXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWJzaXRlIHdpdGggc29tZSBzdHVmZiBhbmQgdGhpbmdzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIktleXdvcmRzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbW96bC5uZXRsaWZ5LmFwcFwiIC8+XG4gICAgICAgIDx0aXRsZT5XZWJzaXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9mYXZpY29uLmljb1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9hcHBsZS1pY29uLnBuZ1wiPjwvbGluaz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMzMTdFRkJcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwid2F2eS1ib3JkZXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiNSAwIDE2ODIgMzQ1XCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicGF0aFN0YXJ0XCIgZD17cGF0aDF9IGZpbGw9XCIjMDIwMDAwXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxTa2lsbHMgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICAudG9wLXNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMzE5NTcgMjUlLCAjOTBkZGYwIDEwMCUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC50b3Atc2VjdGlvbl9faW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLTIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIFJFU0VUIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IElOQ1JFTUVOVCB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudCgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogREVDUkVNRU5UIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUIH0pO1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IElOQ1JFTUVOVCA9ICdJTkNSRU1FTlQnO1xuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVCA9ICdERUNSRU1FTlQnO1xuZXhwb3J0IGNvbnN0IFJFU0VUID0gJ1JFU0VUJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuaW1lanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
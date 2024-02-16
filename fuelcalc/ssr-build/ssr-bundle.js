module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/ui/fuelcalc";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ./components/header/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"header":"header__OVZyn","active":"active__r+Z6z"});
// CONCATENATED MODULE: ./components/header/index.js


var header_Header = function Header() {
  return Object(external_preact_["h"])("header", {
    class: style.header
  }, Object(external_preact_["h"])("h1", null, "Fuel Calculator"));
};
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: /Users/jeanmichel.francois/github/jmfrancois/ui/node_modules/.pnpm/preact@10.19.3/node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  f = [],
  c = [],
  e = external_preact_["options"].__b,
  a = external_preact_["options"].__r,
  v = external_preact_["options"].diffed,
  l = external_preact_["options"].__c,
  m = external_preact_["options"].unmount;
function d(t, u) {
  external_preact_["options"].__h && external_preact_["options"].__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
  var i = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return hooks_module_o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(hooks_module_t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = hooks_module_r, !hooks_module_r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    hooks_module_r.u = !0;
    var c = hooks_module_r.shouldComponentUpdate,
      e = hooks_module_r.componentWillUpdate;
    hooks_module_r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, hooks_module_r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(hooks_module_t++, 3);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(hooks_module_t++, 4);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__h.push(o));
}
function _(n) {
  return hooks_module_o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  hooks_module_o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(hooks_module_t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return hooks_module_o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = hooks_module_r.context[n.__c],
    i = d(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function x(t, r) {
  external_preact_["options"].useDebugValue && external_preact_["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(hooks_module_t++, 10),
    i = h();
  return u.__ = n, hooks_module_r.componentDidCatch || (hooks_module_r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(hooks_module_t++, 11);
  if (!n.__) {
    for (var u = hooks_module_r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], external_preact_["options"].__e(r, t.__v);
  }
}
external_preact_["options"].__b = function (n) {
  hooks_module_r = null, e && e(n);
}, external_preact_["options"].__r = function (n) {
  a && a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], hooks_module_t = 0)), hooks_module_u = hooks_module_r;
}, external_preact_["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && hooks_module_i === external_preact_["options"].requestAnimationFrame || ((hooks_module_i = external_preact_["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), hooks_module_u = hooks_module_r = null;
}, external_preact_["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], external_preact_["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, external_preact_["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && external_preact_["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = hooks_module_r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
}
function w(n) {
  var t = hooks_module_r;
  n.__c = n.__(), hooks_module_r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// CONCATENATED MODULE: ./components/calc/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var calc_style = ({});
// CONCATENATED MODULE: ./components/calc/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var State = /*#__PURE__*/function () {
  function State(prev) {
    _classCallCheck(this, State);
    this.laptimeM = 2;
    this.laptimeS = 10;
    this.raceLength = 20; //minutes
    this.literPerLap = 2.6;
    this.maxTank = 105; // capacity
    this.onChange = function () {};
    if (prev) {
      this.setState = prev.setState;
      this.laptimeM = prev.laptimeM;
      this.laptimeS = prev.laptimeS;
      this.raceLength = prev.raceLength;
      this.literPerLap = prev.literPerLap;
      this.maxTank = prev.maxTank;
      this.onChange = prev.onChange;
    }
    this.compute();
  }
  _createClass(State, [{
    key: "set",
    value: function set(attr, value) {
      var v = value;
      if (typeof value === "string") {
        if (value.indexOf(".") !== -1) {
          v = parseFloat(value);
        } else {
          v = parseInt(value, 10);
        }
      }
      console.log("set attr ".concat(attr, " ").concat(value, " => ").concat(v));
      if (!isNaN(v)) {
        this[attr] = v;
        this.compute();
        this.onChange();
      } else {
        console.error("Try to set ".concat(attr, " to a value which is not a number"));
      }
    }
  }, {
    key: "compute",
    value: function compute() {
      this.laps = this.raceLength * 60 / (this.laptimeM * 60 + this.laptimeS + 0.5) + 1;
      this.litersTotal = this.laps * this.literPerLap + 1.5;
      this.pitstopRequired = this.litersTotal / this.maxTank;
      this.possibleLapsOnTank = this.maxTank / this.literPerLap - 0.5;
    }
  }]);
  return State;
}();
function useCalc() {
  var _useState = h(new State()),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  p(function () {
    state.onChange = function () {
      return setState(new State(state));
    };
  }, [state]);
  return state;
}
function format(n) {
  return Math.floor(n);
}
function _onChange(event, state) {
  console.log(state);
  state.set(event.target.name, event.target.value);
}
var calc_Calc = function Calc() {
  var state = useCalc();
  return Object(external_preact_["h"])("form", {
    class: calc_style.form
  }, Object(external_preact_["h"])("div", {
    class: "row"
  }, Object(external_preact_["h"])("div", {
    class: "col-sm"
  }, Object(external_preact_["h"])("div", {
    class: "container"
  }, Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Lap time (minutes / seconds)"), Object(external_preact_["h"])("div", {
    class: "form-row"
  }, Object(external_preact_["h"])("div", {
    class: "col"
  }, Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: state.laptimeM,
    name: "laptimeM",
    onChange: function onChange(e) {
      return _onChange(e, state);
    }
  })), Object(external_preact_["h"])("div", {
    class: "col"
  }, Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: state.laptimeS,
    name: "laptimeS",
    onChange: function onChange(e) {
      return _onChange(e, state);
    }
  })))), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Race length (minutes)"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: state.raceLength,
    name: "raceLength",
    onChange: function onChange(e) {
      return _onChange(e, state);
    }
  })), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Consumption (liters/lap)"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: state.literPerLap,
    name: "literPerLap",
    onChange: function onChange(e) {
      return _onChange(e, state);
    }
  })), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Max tank capacity (liters)"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: state.maxTank,
    name: "maxTank",
    onChange: function onChange(e) {
      return _onChange(e, state);
    }
  })))), Object(external_preact_["h"])("div", {
    class: "col-sm"
  }, Object(external_preact_["h"])("div", {
    class: "container"
  }, Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Total fuel needed (liters)"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: format(state.litersTotal),
    readOnly: true
  })), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Total Laps (with formation lap)"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: format(state.laps),
    readOnly: true
  })), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Number of pit stop required"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: format(state.pitstopRequired),
    readOnly: true
  })), Object(external_preact_["h"])("div", {
    class: "form-group"
  }, Object(external_preact_["h"])("label", null, "Possible laps on tank"), Object(external_preact_["h"])("input", {
    type: "number",
    class: "form-control",
    value: format(state.possibleLapsOnTank),
    readOnly: true
  }))))));
};
// CONCATENATED MODULE: ./components/app.js



function App() {
  return Object(external_preact_["h"])("div", {
    id: "app",
    className: "container"
  }, Object(external_preact_["h"])("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
    crossorigin: "anonymous"
  }), Object(external_preact_["h"])(header, null), Object(external_preact_["h"])(calc_Calc, null));
}
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (App);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 36);
}([function (e, t, i) {
  var n;
  n = function n() {
    return function (e) {
      var t = {};

      function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }

      return i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
      }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e) for (var r in e) {
          i.d(n, r, function (t) {
            return e[t];
          }.bind(null, r));
        }
        return n;
      }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e["default"];
        } : function () {
          return e;
        };
        return i.d(t, "a", t), t;
      }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, i.p = "", i(i.s = 0);
    }([function (e, t, i) {
      "use strict";

      i.r(t);

      var n = function n(e) {
        return Array.isArray(e) ? e : [e];
      },
          r = function r(e) {
        return e instanceof Node;
      },
          s = function s(e, t) {
        if (e && t) {
          e = function (e) {
            return e instanceof NodeList;
          }(e) ? e : [e];

          for (var i = 0; i < e.length && !0 !== t(e[i], i, e.length); i++) {
            ;
          }
        }
      },
          o = function o(e) {
        return console.error("[scroll-lock] ".concat(e));
      },
          a = function a(e) {
        if (Array.isArray(e)) return e.join(", ");
      },
          l = function l(e) {
        var t = [];
        return s(e, function (e) {
          return t.push(e);
        }), t;
      },
          u = function u(e, t) {
        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document;
        if (i && -1 !== l(n.querySelectorAll(t)).indexOf(e)) return e;

        for (; (e = e.parentElement) && -1 === l(n.querySelectorAll(t)).indexOf(e);) {
          ;
        }

        return e;
      },
          c = function c(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
            n = -1 !== l(i.querySelectorAll(t)).indexOf(e);
        return n;
      },
          d = function d(e) {
        if (e) return "hidden" === getComputedStyle(e).overflow;
      },
          h = function h(e) {
        if (e) return !!d(e) || e.scrollTop <= 0;
      },
          f = function f(e) {
        if (e) {
          if (d(e)) return !0;
          var t = e.scrollTop,
              i = e.scrollHeight;
          return t + e.offsetHeight >= i;
        }
      },
          p = function p(e) {
        if (e) return !!d(e) || e.scrollLeft <= 0;
      },
          v = function v(e) {
        if (e) {
          if (d(e)) return !0;
          var t = e.scrollLeft,
              i = e.scrollWidth;
          return t + e.offsetWidth >= i;
        }
      },
          g = function g(e) {
        return c(e, 'textarea, [contenteditable="true"]');
      },
          m = function m(e) {
        return c(e, 'input[type="range"]');
      };

      function y(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      i.d(t, "disablePageScroll", function () {
        return x;
      }), i.d(t, "enablePageScroll", function () {
        return T;
      }), i.d(t, "getScrollState", function () {
        return S;
      }), i.d(t, "clearQueueScrollLocks", function () {
        return C;
      }), i.d(t, "getTargetScrollBarWidth", function () {
        return E;
      }), i.d(t, "getCurrentTargetScrollBarWidth", function () {
        return A;
      }), i.d(t, "getPageScrollBarWidth", function () {
        return k;
      }), i.d(t, "getCurrentPageScrollBarWidth", function () {
        return L;
      }), i.d(t, "addScrollableTarget", function () {
        return O;
      }), i.d(t, "removeScrollableTarget", function () {
        return M;
      }), i.d(t, "addScrollableSelector", function () {
        return P;
      }), i.d(t, "removeScrollableSelector", function () {
        return I;
      }), i.d(t, "addLockableTarget", function () {
        return D;
      }), i.d(t, "addLockableSelector", function () {
        return j;
      }), i.d(t, "setFillGapMethod", function () {
        return N;
      }), i.d(t, "addFillGapTarget", function () {
        return z;
      }), i.d(t, "removeFillGapTarget", function () {
        return _;
      }), i.d(t, "addFillGapSelector", function () {
        return q;
      }), i.d(t, "removeFillGapSelector", function () {
        return B;
      }), i.d(t, "refillGaps", function () {
        return H;
      });

      var b = ["padding", "margin", "width", "max-width", "none"],
          w = {
        scroll: !0,
        queue: 0,
        scrollableSelectors: ["[data-scroll-lock-scrollable]"],
        lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
        fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
        fillGapMethod: b[0],
        startTouchY: 0,
        startTouchX: 0
      },
          x = function x(e) {
        w.queue <= 0 && (w.scroll = !1, R(), V()), O(e), w.queue++;
      },
          T = function T(e) {
        w.queue > 0 && w.queue--, w.queue <= 0 && (w.scroll = !0, W(), X()), M(e);
      },
          S = function S() {
        return w.scroll;
      },
          C = function C() {
        w.queue = 0;
      },
          E = function E(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (r(e)) {
          var i = e.style.overflowY;
          t ? S() || (e.style.overflowY = e.getAttribute("data-scroll-lock-saved-overflow-y-property")) : e.style.overflowY = "scroll";
          var n = A(e);
          return e.style.overflowY = i, n;
        }

        return 0;
      },
          A = function A(e) {
        if (r(e)) {
          if (e === document.body) {
            var t = document.documentElement.clientWidth;
            return window.innerWidth - t;
          }

          var i = e.style.borderLeftWidth,
              n = e.style.borderRightWidth;
          e.style.borderLeftWidth = "0px", e.style.borderRightWidth = "0px";
          var s = e.offsetWidth - e.clientWidth;
          return e.style.borderLeftWidth = i, e.style.borderRightWidth = n, s;
        }

        return 0;
      },
          k = function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return E(document.body, e);
      },
          L = function L() {
        return A(document.body);
      },
          O = function O(e) {
        e && n(e).map(function (e) {
          s(e, function (e) {
            r(e) ? e.setAttribute("data-scroll-lock-scrollable", "") : o('"'.concat(e, '" is not a Element.'));
          });
        });
      },
          M = function M(e) {
        e && n(e).map(function (e) {
          s(e, function (e) {
            r(e) ? e.removeAttribute("data-scroll-lock-scrollable") : o('"'.concat(e, '" is not a Element.'));
          });
        });
      },
          P = function P(e) {
        e && n(e).map(function (e) {
          w.scrollableSelectors.push(e);
        });
      },
          I = function I(e) {
        e && n(e).map(function (e) {
          w.scrollableSelectors = w.scrollableSelectors.filter(function (t) {
            return t !== e;
          });
        });
      },
          D = function D(e) {
        e && (n(e).map(function (e) {
          s(e, function (e) {
            r(e) ? e.setAttribute("data-scroll-lock-lockable", "") : o('"'.concat(e, '" is not a Element.'));
          });
        }), S() || R());
      },
          j = function j(e) {
        e && (n(e).map(function (e) {
          w.lockableSelectors.push(e);
        }), S() || R(), q(e));
      },
          N = function N(e) {
        if (e) if (-1 !== b.indexOf(e)) w.fillGapMethod = e, H();else {
          var t = b.join(", ");
          o('"'.concat(e, '" method is not available!\nAvailable fill gap methods: ').concat(t, "."));
        }
      },
          z = function z(e) {
        e && n(e).map(function (e) {
          s(e, function (e) {
            r(e) ? (e.setAttribute("data-scroll-lock-fill-gap", ""), w.scroll || Q(e)) : o('"'.concat(e, '" is not a Element.'));
          });
        });
      },
          _ = function _(e) {
        e && n(e).map(function (e) {
          s(e, function (e) {
            r(e) ? (e.removeAttribute("data-scroll-lock-fill-gap"), w.scroll || Z(e)) : o('"'.concat(e, '" is not a Element.'));
          });
        });
      },
          q = function q(e) {
        e && n(e).map(function (e) {
          -1 === w.fillGapSelectors.indexOf(e) && (w.fillGapSelectors.push(e), w.scroll || U(e));
        });
      },
          B = function B(e) {
        e && n(e).map(function (e) {
          w.fillGapSelectors = w.fillGapSelectors.filter(function (t) {
            return t !== e;
          }), w.scroll || K(e);
        });
      },
          H = function H() {
        w.scroll || V();
      },
          R = function R() {
        var e = a(w.lockableSelectors);
        F(e);
      },
          W = function W() {
        var e = a(w.lockableSelectors);
        $(e);
      },
          F = function F(e) {
        var t = document.querySelectorAll(e);
        s(t, function (e) {
          G(e);
        });
      },
          $ = function $(e) {
        var t = document.querySelectorAll(e);
        s(t, function (e) {
          Y(e);
        });
      },
          G = function G(e) {
        if (r(e) && "true" !== e.getAttribute("data-scroll-lock-locked")) {
          var t = window.getComputedStyle(e);
          e.setAttribute("data-scroll-lock-saved-overflow-y-property", t.overflowY), e.setAttribute("data-scroll-lock-saved-inline-overflow-property", e.style.overflow), e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", e.style.overflowY), e.style.overflow = "hidden", e.setAttribute("data-scroll-lock-locked", "true");
        }
      },
          Y = function Y(e) {
        r(e) && "true" === e.getAttribute("data-scroll-lock-locked") && (e.style.overflow = e.getAttribute("data-scroll-lock-saved-inline-overflow-property"), e.style.overflowY = e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"), e.removeAttribute("data-scroll-lock-saved-overflow-property"), e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"), e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"), e.removeAttribute("data-scroll-lock-locked"));
      },
          V = function V() {
        w.fillGapSelectors.map(function (e) {
          U(e);
        });
      },
          X = function X() {
        w.fillGapSelectors.map(function (e) {
          K(e);
        });
      },
          U = function U(e) {
        var t = document.querySelectorAll(e),
            i = -1 !== w.lockableSelectors.indexOf(e);
        s(t, function (e) {
          Q(e, i);
        });
      },
          Q = function Q(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (r(e)) {
          var i;
          if ("" === e.getAttribute("data-scroll-lock-lockable") || t) i = E(e, !0);else {
            var n = u(e, a(w.lockableSelectors));
            i = E(n, !0);
          }
          "true" === e.getAttribute("data-scroll-lock-filled-gap") && Z(e);
          var s = window.getComputedStyle(e);

          if (e.setAttribute("data-scroll-lock-filled-gap", "true"), e.setAttribute("data-scroll-lock-current-fill-gap-method", w.fillGapMethod), "margin" === w.fillGapMethod) {
            var o = parseFloat(s.marginRight);
            e.style.marginRight = "".concat(o + i, "px");
          } else if ("width" === w.fillGapMethod) e.style.width = "calc(100% - ".concat(i, "px)");else if ("max-width" === w.fillGapMethod) e.style.maxWidth = "calc(100% - ".concat(i, "px)");else if ("padding" === w.fillGapMethod) {
            var l = parseFloat(s.paddingRight);
            e.style.paddingRight = "".concat(l + i, "px");
          }
        }
      },
          K = function K(e) {
        var t = document.querySelectorAll(e);
        s(t, function (e) {
          Z(e);
        });
      },
          Z = function Z(e) {
        if (r(e) && "true" === e.getAttribute("data-scroll-lock-filled-gap")) {
          var t = e.getAttribute("data-scroll-lock-current-fill-gap-method");
          e.removeAttribute("data-scroll-lock-filled-gap"), e.removeAttribute("data-scroll-lock-current-fill-gap-method"), "margin" === t ? e.style.marginRight = "" : "width" === t ? e.style.width = "" : "max-width" === t ? e.style.maxWidth = "" : "padding" === t && (e.style.paddingRight = "");
        }
      };

      "undefined" != typeof window && window.addEventListener("resize", function (e) {
        H();
      }), "undefined" != typeof document && (document.addEventListener("touchstart", function (e) {
        w.scroll || (w.startTouchY = e.touches[0].clientY, w.startTouchX = e.touches[0].clientX);
      }), document.addEventListener("touchmove", function (e) {
        if (!w.scroll) {
          var t = w.startTouchY,
              i = w.startTouchX,
              n = e.touches[0].clientY,
              r = e.touches[0].clientX;

          if (e.touches.length < 2) {
            var s = a(w.scrollableSelectors),
                o = {
              up: t < n,
              down: t > n,
              left: i < r,
              right: i > r
            },
                l = {
              up: t + 3 < n,
              down: t - 3 > n,
              left: i + 3 < r,
              right: i - 3 > r
            };
            !function t(i) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

              if (i) {
                var r = u(i, s, !1);
                if (m(i)) return !1;

                if (n || g(i) && u(i, s) || c(i, s)) {
                  var a = !1;
                  p(i) && v(i) ? (o.up && h(i) || o.down && f(i)) && (a = !0) : h(i) && f(i) ? (o.left && p(i) || o.right && v(i)) && (a = !0) : (l.up && h(i) || l.down && f(i) || l.left && p(i) || l.right && v(i)) && (a = !0), a && (r ? t(r, !0) : e.preventDefault());
                } else t(r);
              } else e.preventDefault();
            }(e.target);
          }
        }
      }, {
        passive: !1
      }), document.addEventListener("touchend", function (e) {
        w.scroll || (w.startTouchY = 0, w.startTouchX = 0);
      }));

      var J = {
        hide: function hide(e) {
          o('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'), x(e);
        },
        show: function show(e) {
          o('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'), T(e);
        },
        toggle: function toggle(e) {
          o('"toggle" is deprecated! Do not use it.'), S() ? x() : T(e);
        },
        getState: function getState() {
          return o('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'), S();
        },
        getWidth: function getWidth() {
          return o('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'), k();
        },
        getCurrentWidth: function getCurrentWidth() {
          return o('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'), L();
        },
        setScrollableTargets: function setScrollableTargets(e) {
          o('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'), O(e);
        },
        setFillGapSelectors: function setFillGapSelectors(e) {
          o('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'), q(e);
        },
        setFillGapTargets: function setFillGapTargets(e) {
          o('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'), z(e);
        },
        clearQueue: function clearQueue() {
          o('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'), C();
        }
      },
          ee = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
          }))), n.forEach(function (t) {
            y(e, t, i[t]);
          });
        }

        return e;
      }({
        disablePageScroll: x,
        enablePageScroll: T,
        getScrollState: S,
        clearQueueScrollLocks: C,
        getTargetScrollBarWidth: E,
        getCurrentTargetScrollBarWidth: A,
        getPageScrollBarWidth: k,
        getCurrentPageScrollBarWidth: L,
        addScrollableSelector: P,
        removeScrollableSelector: I,
        addScrollableTarget: O,
        removeScrollableTarget: M,
        addLockableSelector: j,
        addLockableTarget: D,
        addFillGapSelector: q,
        removeFillGapSelector: B,
        addFillGapTarget: z,
        removeFillGapTarget: _,
        setFillGapMethod: N,
        refillGaps: H,
        _state: w
      }, J);

      t["default"] = ee;
    }])["default"];
  }, e.exports = n();
}, function (e, t) {
  e.exports = function (e) {
    var t = _typeof(e);

    return null != e && ("object" == t || "function" == t);
  };
}, function (e, t, i) {
  var n, r;
  "undefined" != typeof window && window, void 0 === (r = "function" == typeof (n = function n() {
    "use strict";

    function e() {}

    var t = e.prototype;
    return t.on = function (e, t) {
      if (e && t) {
        var i = this._events = this._events || {},
            n = i[e] = i[e] || [];
        return -1 == n.indexOf(t) && n.push(t), this;
      }
    }, t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = this._onceEvents = this._onceEvents || {};
        return (i[e] = i[e] || {})[t] = !0, this;
      }
    }, t.off = function (e, t) {
      var i = this._events && this._events[e];

      if (i && i.length) {
        var n = i.indexOf(t);
        return -1 != n && i.splice(n, 1), this;
      }
    }, t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];

      if (i && i.length) {
        i = i.slice(0), t = t || [];

        for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
          var s = i[r];
          n && n[s] && (this.off(e, s), delete n[s]), s.apply(this, t);
        }

        return this;
      }
    }, t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }, e;
  }) ? n.call(t, i, t, e) : n) || (e.exports = r);
}, function (e, t, i) {
  var n, r;
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */

  window, void 0 === (r = "function" == typeof (n = function n() {
    "use strict";

    function e(e) {
      var t = parseFloat(e);
      return -1 == e.indexOf("%") && !isNaN(t) && t;
    }

    var t = "undefined" == typeof console ? function () {} : function (e) {
      console.error(e);
    },
        i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        n = i.length;

    function r(e) {
      var i = getComputedStyle(e);
      return i || t("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i;
    }

    var s,
        o = !1;

    function a(t) {
      if (function () {
        if (!o) {
          o = !0;
          var t = document.createElement("div");
          t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
          var i = document.body || document.documentElement;
          i.appendChild(t);
          var n = r(t);
          s = 200 == Math.round(e(n.width)), a.isBoxSizeOuter = s, i.removeChild(t);
        }
      }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == _typeof(t) && t.nodeType) {
        var l = r(t);
        if ("none" == l.display) return function () {
          for (var e = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, t = 0; t < n; t++) {
            e[i[t]] = 0;
          }

          return e;
        }();
        var u = {};
        u.width = t.offsetWidth, u.height = t.offsetHeight;

        for (var c = u.isBorderBox = "border-box" == l.boxSizing, d = 0; d < n; d++) {
          var h = i[d],
              f = l[h],
              p = parseFloat(f);
          u[h] = isNaN(p) ? 0 : p;
        }

        var v = u.paddingLeft + u.paddingRight,
            g = u.paddingTop + u.paddingBottom,
            m = u.marginLeft + u.marginRight,
            y = u.marginTop + u.marginBottom,
            b = u.borderLeftWidth + u.borderRightWidth,
            w = u.borderTopWidth + u.borderBottomWidth,
            x = c && s,
            T = e(l.width);
        !1 !== T && (u.width = T + (x ? 0 : v + b));
        var S = e(l.height);
        return !1 !== S && (u.height = S + (x ? 0 : g + w)), u.innerWidth = u.width - (v + b), u.innerHeight = u.height - (g + w), u.outerWidth = u.width + m, u.outerHeight = u.height + y, u;
      }
    }

    return a;
  }) ? n.call(t, i, t, e) : n) || (e.exports = r);
}, function (e, t, i) {
  var n = i(1),
      r = i(24),
      s = i(26),
      o = Math.max,
      a = Math.min;

  e.exports = function (e, t, i) {
    var l,
        u,
        c,
        d,
        h,
        f,
        p = 0,
        v = !1,
        g = !1,
        m = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function y(t) {
      var i = l,
          n = u;
      return l = u = void 0, p = t, d = e.apply(n, i);
    }

    function b(e) {
      return p = e, h = setTimeout(x, t), v ? y(e) : d;
    }

    function w(e) {
      var i = e - f;
      return void 0 === f || i >= t || i < 0 || g && e - p >= c;
    }

    function x() {
      var e = r();
      if (w(e)) return T(e);
      h = setTimeout(x, function (e) {
        var i = t - (e - f);
        return g ? a(i, c - (e - p)) : i;
      }(e));
    }

    function T(e) {
      return h = void 0, m && l ? y(e) : (l = u = void 0, d);
    }

    function S() {
      var e = r(),
          i = w(e);

      if (l = arguments, u = this, f = e, i) {
        if (void 0 === h) return b(f);
        if (g) return clearTimeout(h), h = setTimeout(x, t), y(f);
      }

      return void 0 === h && (h = setTimeout(x, t)), d;
    }

    return t = s(t) || 0, n(i) && (v = !!i.leading, c = (g = "maxWait" in i) ? o(s(i.maxWait) || 0, t) : c, m = "trailing" in i ? !!i.trailing : m), S.cancel = function () {
      void 0 !== h && clearTimeout(h), p = 0, l = f = u = h = void 0;
    }, S.flush = function () {
      return void 0 === h ? d : T(r());
    }, S;
  };
}, function (e, t) {
  var i;

  i = function () {
    return this;
  }();

  try {
    i = i || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (i = window);
  }

  e.exports = i;
}, function (e, t, i) {
  var n = i(25),
      r = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = n || r || Function("return this")();
  e.exports = s;
}, function (e, t, i) {
  var n = i(6).Symbol;
  e.exports = n;
}, function (e, t, i) {
  var n, r;
  r = this, void 0 === (n = function () {
    return r.svg4everybody = function () {
      /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
      function e(e, t, i) {
        if (i) {
          var n = document.createDocumentFragment(),
              r = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
          r && t.setAttribute("viewBox", r);

          for (var s = i.cloneNode(!0); s.childNodes.length;) {
            n.appendChild(s.firstChild);
          }

          e.appendChild(n);
        }
      }

      function t(t) {
        t.onreadystatechange = function () {
          if (4 === t.readyState) {
            var i = t._cachedDocument;
            i || ((i = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (n) {
              var r = t._cachedTarget[n.id];
              r || (r = t._cachedTarget[n.id] = i.getElementById(n.id)), e(n.parent, n.svg, r);
            });
          }
        }, t.onreadystatechange();
      }

      function i(e) {
        for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);) {
          ;
        }

        return t;
      }

      return function (n) {
        var r,
            s = Object(n),
            o = window.top !== window.self;
        r = "polyfill" in s ? s.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && o;
        var a = {},
            l = window.requestAnimationFrame || setTimeout,
            u = document.getElementsByTagName("use"),
            c = 0;
        r && function n() {
          for (var o = 0; o < u.length;) {
            var d = u[o],
                h = d.parentNode,
                f = i(h),
                p = d.getAttribute("xlink:href") || d.getAttribute("href");

            if (!p && s.attributeName && (p = d.getAttribute(s.attributeName)), f && p) {
              if (r) if (!s.validate || s.validate(p, f, d)) {
                h.removeChild(d);
                var v = p.split("#"),
                    g = v.shift(),
                    m = v.join("#");

                if (g.length) {
                  var y = a[g];
                  y || ((y = a[g] = new XMLHttpRequest()).open("GET", g), y.send(), y._embeds = []), y._embeds.push({
                    parent: h,
                    svg: f,
                    id: m
                  }), t(y);
                } else e(h, f, document.getElementById(m));
              } else ++o, ++c;
            } else ++o;
          }

          (!u.length || u.length - c > 0) && l(n, 67);
        }();
      };
    }();
  }.apply(t, [])) || (e.exports = n);
}, function (e, t, i) {
  var n;
  /*! picturefill - v3.0.2 - 2016-02-12
   * https://scottjehl.github.io/picturefill/
   * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
   */

  /*! Gecko-Picture - v1.0
   * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
   * Firefox's early picture implementation (prior to FF41) is static and does
   * not react to viewport changes. This tiny module fixes this.
   */

  !function (e) {
    var t,
        i,
        n,
        r,
        s,
        o,
        a,
        l = navigator.userAgent;
    e.HTMLPictureElement && /ecko/.test(l) && l.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (i = document.createElement("source"), n = function n(e) {
      var t,
          n,
          r = e.parentNode;
      "PICTURE" === r.nodeName.toUpperCase() ? (t = i.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function () {
        r.removeChild(t);
      })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, n = e.sizes, e.sizes += ",100vw", setTimeout(function () {
        e.sizes = n;
      }));
    }, r = function r() {
      var e,
          t = document.querySelectorAll("picture > img, img[srcset][sizes]");

      for (e = 0; e < t.length; e++) {
        n(t[e]);
      }
    }, s = function s() {
      clearTimeout(t), t = setTimeout(r, 99);
    }, o = e.matchMedia && matchMedia("(orientation: landscape)"), a = function a() {
      s(), o && o.addListener && o.addListener(s);
    }, i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), s));
  }(window),
  /*! Picturefill - v3.0.2
   * http://scottjehl.github.io/picturefill
   * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
   *  License: MIT
   */
  function (r, s, o) {
    "use strict";

    var a, l, u;
    s.createElement("picture");

    var c = {},
        d = !1,
        h = function h() {},
        f = s.createElement("img"),
        p = f.getAttribute,
        v = f.setAttribute,
        g = f.removeAttribute,
        m = s.documentElement,
        y = {},
        b = {
      algorithm: ""
    },
        w = navigator.userAgent,
        x = /rident/.test(w) || /ecko/.test(w) && w.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        T = "currentSrc",
        S = /\s+\+?\d+(e\d+)?w/,
        C = /(\([^)]+\))?\s*(.+)/,
        E = r.picturefillCFG,
        A = "font-size:100%!important;",
        k = !0,
        L = {},
        O = {},
        M = r.devicePixelRatio,
        P = {
      px: 1,
      "in": 96
    },
        I = s.createElement("a"),
        D = !1,
        j = /^[ \t\n\r\u000c]+/,
        N = /^[, \t\n\r\u000c]+/,
        z = /^[^ \t\n\r\u000c]+/,
        _ = /[,]+$/,
        q = /^\d+$/,
        B = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        H = function H(e, t, i, n) {
      e.addEventListener ? e.addEventListener(t, i, n || !1) : e.attachEvent && e.attachEvent("on" + t, i);
    },
        R = function R(e) {
      var t = {};
      return function (i) {
        return i in t || (t[i] = e(i)), t[i];
      };
    };

    function W(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
    }

    var F,
        $,
        G,
        Y,
        V,
        X,
        U,
        Q,
        K,
        Z,
        J,
        _ee,
        te,
        _ie,
        ne,
        re,
        se = (F = /^([\d\.]+)(em|vw|px)$/, $ = R(function (e) {
      return "return " + function () {
        for (var e = arguments, t = 0, i = e[0]; (++t in e);) {
          i = i.replace(e[t], e[++t]);
        }

        return i;
      }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
    }), function (e, t) {
      var i;
      if (!(e in L)) if (L[e] = !1, t && (i = e.match(F))) L[e] = i[1] * P[i[2]];else try {
        L[e] = new Function("e", $(e))(P);
      } catch (e) {}
      return L[e];
    }),
        oe = function oe(e, t) {
      return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
    },
        ae = function ae(e) {
      if (d) {
        var t,
            i,
            n,
            r = e || {};

        if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), n = (t = r.elements || c.qsa(r.context || s, r.reevaluate || r.reselect ? c.sel : c.selShort)).length) {
          for (c.setupRun(r), D = !0, i = 0; i < n; i++) {
            c.fillImg(t[i], r);
          }

          c.teardownRun(r);
        }
      }
    };

    function le(e, t) {
      return e.res - t.res;
    }

    function ue(e, t) {
      var i, n, r;
      if (e && t) for (r = c.parseSet(t), e = c.makeUrl(e), i = 0; i < r.length; i++) {
        if (e === c.makeUrl(r[i].url)) {
          n = r[i];
          break;
        }
      }
      return n;
    }

    r.console && console.warn, T in f || (T = "src"), y["image/jpeg"] = !0, y["image/gif"] = !0, y["image/png"] = !0, y["image/svg+xml"] = s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in f, c.supSizes = "sizes" in f, c.supPicture = !!r.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (G = s.createElement("img"), f.srcset = "data:,a", G.src = "data:,a", c.supSrcset = f.complete === G.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (Y = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", V = s.createElement("img"), X = function X() {
      2 === V.width && (c.supSizes = !0), l = c.supSrcset && !c.supSizes, d = !0, setTimeout(ae);
    }, V.onload = X, V.onerror = X, V.setAttribute("sizes", "9px"), V.srcset = Y + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", V.src = Y) : d = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = b, c.DPR = M || 1, c.u = P, c.types = y, c.setSize = h, c.makeUrl = R(function (e) {
      return I.href = e, I.href;
    }), c.qsa = function (e, t) {
      return "querySelector" in e ? e.querySelectorAll(t) : [];
    }, c.matchesMedia = function () {
      return r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
        return !e || matchMedia(e).matches;
      } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
    }, c.mMQ = function (e) {
      return !e || se(e);
    }, c.calcLength = function (e) {
      var t = se(e, !0) || !1;
      return t < 0 && (t = !1), t;
    }, c.supportsType = function (e) {
      return !e || y[e];
    }, c.parseSize = R(function (e) {
      var t = (e || "").match(C);
      return {
        media: t && t[1],
        length: t && t[2]
      };
    }), c.parseSet = function (e) {
      return e.cands || (e.cands = function (e, t) {
        function i(t) {
          var i,
              n = t.exec(e.substring(u));
          if (n) return i = n[0], u += i.length, i;
        }

        var n,
            r,
            s,
            o,
            a,
            l = e.length,
            u = 0,
            c = [];

        function d() {
          var e,
              i,
              s,
              o,
              a,
              l,
              u,
              d,
              h,
              f = !1,
              p = {};

          for (o = 0; o < r.length; o++) {
            l = (a = r[o])[a.length - 1], u = a.substring(0, a.length - 1), d = parseInt(u, 10), h = parseFloat(u), q.test(u) && "w" === l ? ((e || i) && (f = !0), 0 === d ? f = !0 : e = d) : B.test(u) && "x" === l ? ((e || i || s) && (f = !0), h < 0 ? f = !0 : i = h) : q.test(u) && "h" === l ? ((s || i) && (f = !0), 0 === d ? f = !0 : s = d) : f = !0;
          }

          f || (p.url = n, e && (p.w = e), i && (p.d = i), s && (p.h = s), s || i || e || (p.d = 1), 1 === p.d && (t.has1x = !0), p.set = t, c.push(p));
        }

        function h() {
          for (i(j), s = "", o = "in descriptor";;) {
            if (a = e.charAt(u), "in descriptor" === o) {
              if (W(a)) s && (r.push(s), s = "", o = "after descriptor");else {
                if ("," === a) return u += 1, s && r.push(s), void d();
                if ("(" === a) s += a, o = "in parens";else {
                  if ("" === a) return s && r.push(s), void d();
                  s += a;
                }
              }
            } else if ("in parens" === o) {
              if (")" === a) s += a, o = "in descriptor";else {
                if ("" === a) return r.push(s), void d();
                s += a;
              }
            } else if ("after descriptor" === o) if (W(a)) ;else {
              if ("" === a) return void d();
              o = "in descriptor", u -= 1;
            }
            u += 1;
          }
        }

        for (;;) {
          if (i(N), u >= l) return c;
          n = i(z), r = [], "," === n.slice(-1) ? (n = n.replace(_, ""), d()) : h();
        }
      }(e.srcset, e)), e.cands;
    }, c.getEmValue = function () {
      var e;

      if (!a && (e = s.body)) {
        var t = s.createElement("div"),
            i = m.style.cssText,
            n = e.style.cssText;
        t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", m.style.cssText = A, e.style.cssText = A, e.appendChild(t), a = t.offsetWidth, e.removeChild(t), a = parseFloat(a, 10), m.style.cssText = i, e.style.cssText = n;
      }

      return a || 16;
    }, c.calcListLength = function (e) {
      if (!(e in O) || b.uT) {
        var t = c.calcLength(function (e) {
          var t,
              i,
              n,
              r,
              s,
              o,
              a,
              l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
              u = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

          for (n = (i = function (e) {
            var t,
                i = "",
                n = [],
                r = [],
                s = 0,
                o = 0,
                a = !1;

            function l() {
              i && (n.push(i), i = "");
            }

            function u() {
              n[0] && (r.push(n), n = []);
            }

            for (;;) {
              if ("" === (t = e.charAt(o))) return l(), u(), r;

              if (a) {
                if ("*" === t && "/" === e[o + 1]) {
                  a = !1, o += 2, l();
                  continue;
                }

                o += 1;
              } else {
                if (W(t)) {
                  if (e.charAt(o - 1) && W(e.charAt(o - 1)) || !i) {
                    o += 1;
                    continue;
                  }

                  if (0 === s) {
                    l(), o += 1;
                    continue;
                  }

                  t = " ";
                } else if ("(" === t) s += 1;else if (")" === t) s -= 1;else {
                  if ("," === t) {
                    l(), u(), o += 1;
                    continue;
                  }

                  if ("/" === t && "*" === e.charAt(o + 1)) {
                    a = !0, o += 2;
                    continue;
                  }
                }

                i += t, o += 1;
              }
            }
          }(e)).length, t = 0; t < n; t++) {
            if (s = (r = i[t])[r.length - 1], a = s, l.test(a) && parseFloat(a) >= 0 || u.test(a) || "0" === a || "-0" === a || "+0" === a) {
              if (o = s, r.pop(), 0 === r.length) return o;
              if (r = r.join(" "), c.matchesMedia(r)) return o;
            }
          }

          return "100vw";
        }(e));
        O[e] = t || P.width;
      }

      return O[e];
    }, c.setRes = function (e) {
      var t;
      if (e) for (var i = 0, n = (t = c.parseSet(e)).length; i < n; i++) {
        oe(t[i], e.sizes);
      }
      return t;
    }, c.setRes.res = oe, c.applySetCandidate = function (e, t) {
      if (e.length) {
        var i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            d,
            h,
            f,
            p,
            v,
            g,
            m,
            y,
            w = t[c.ns],
            S = c.DPR;
        if (a = w.curSrc || t[T], (l = w.curCan || function (e, t, i) {
          var n;
          return !i && t && (i = (i = e[c.ns].sets) && i[i.length - 1]), (n = ue(t, i)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = n, n.res || oe(n, n.set.sizes)), n;
        }(t, a, e[0].set)) && l.set === e[0].set && ((d = x && !t.complete && l.res - .1 > S) || (l.cached = !0, l.res >= S && (o = l))), !o) for (e.sort(le), o = e[(s = e.length) - 1], n = 0; n < s; n++) {
          if ((i = e[n]).res >= S) {
            o = e[r = n - 1] && (d || a !== c.makeUrl(i.url)) && (h = e[r].res, f = i.res, p = S, v = e[r].cached, g = void 0, m = void 0, y = void 0, "saveData" === b.algorithm ? h > 2.7 ? y = p + 1 : (m = (f - p) * (g = Math.pow(h - .6, 1.5)), v && (m += .1 * g), y = h + m) : y = p > 1 ? Math.sqrt(h * f) : h, y > p) ? e[r] : i;
            break;
          }
        }
        o && (u = c.makeUrl(o.url), w.curSrc = u, w.curCan = o, u !== a && c.setSrc(t, o), c.setSize(t));
      }
    }, c.setSrc = function (e, t) {
      var i;
      e.src = t.url, "image/svg+xml" === t.set.type && (i = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = i));
    }, c.getSet = function (e) {
      var t,
          i,
          n,
          r = !1,
          s = e[c.ns].sets;

      for (t = 0; t < s.length && !r; t++) {
        if ((i = s[t]).srcset && c.matchesMedia(i.media) && (n = c.supportsType(i.type))) {
          "pending" === n && (i = n), r = i;
          break;
        }
      }

      return r;
    }, c.parseSets = function (e, t, i) {
      var n,
          r,
          s,
          o,
          a = t && "PICTURE" === t.nodeName.toUpperCase(),
          u = e[c.ns];
      (void 0 === u.src || i.src) && (u.src = p.call(e, "src"), u.src ? v.call(e, "data-pfsrc", u.src) : g.call(e, "data-pfsrc")), (void 0 === u.srcset || i.srcset || !c.supSrcset || e.srcset) && (n = p.call(e, "srcset"), u.srcset = n, o = !0), u.sets = [], a && (u.pic = !0, function (e, t) {
        var i,
            n,
            r,
            s,
            o = e.getElementsByTagName("source");

        for (i = 0, n = o.length; i < n; i++) {
          (r = o[i])[c.ns] = !0, (s = r.getAttribute("srcset")) && t.push({
            srcset: s,
            media: r.getAttribute("media"),
            type: r.getAttribute("type"),
            sizes: r.getAttribute("sizes")
          });
        }
      }(t, u.sets)), u.srcset ? (r = {
        srcset: u.srcset,
        sizes: p.call(e, "sizes")
      }, u.sets.push(r), (s = (l || u.src) && S.test(u.srcset || "")) || !u.src || ue(u.src, r) || r.has1x || (r.srcset += ", " + u.src, r.cands.push({
        url: u.src,
        d: 1,
        set: r
      }))) : u.src && u.sets.push({
        srcset: u.src,
        sizes: null
      }), u.curCan = null, u.curSrc = void 0, u.supported = !(a || r && !c.supSrcset || s && !c.supSizes), o && c.supSrcset && !u.supported && (n ? (v.call(e, "data-pfsrcset", n), e.srcset = "") : g.call(e, "data-pfsrcset")), u.supported && !u.srcset && (!u.src && e.src || e.src !== c.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src), u.parsed = !0;
    }, c.fillImg = function (e, t) {
      var i,
          n = t.reselect || t.reevaluate;
      e[c.ns] || (e[c.ns] = {}), i = e[c.ns], (n || i.evaled !== u) && (i.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), i.supported ? i.evaled = u : function (e) {
        var t,
            i = c.getSet(e),
            n = !1;
        "pending" !== i && (n = u, i && (t = c.setRes(i), c.applySetCandidate(t, e))), e[c.ns].evaled = n;
      }(e));
    }, c.setupRun = function () {
      D && !k && M === r.devicePixelRatio || (k = !1, M = r.devicePixelRatio, L = {}, O = {}, c.DPR = M || 1, P.width = Math.max(r.innerWidth || 0, m.clientWidth), P.height = Math.max(r.innerHeight || 0, m.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, u = [P.height, P.width, M].join("-"), P.em = c.getEmValue(), P.rem = P.em);
    }, c.supPicture ? (ae = h, c.fillImg = h) : (te = r.attachEvent ? /d$|^c/ : /d$|^c|^i/, _ie = function ie() {
      var e = s.readyState || "";
      ne = setTimeout(_ie, "loading" === e ? 200 : 999), s.body && (c.fillImgs(), (U = U || te.test(e)) && clearTimeout(ne));
    }, ne = setTimeout(_ie, s.body ? 9 : 99), re = m.clientHeight, H(r, "resize", (Q = function Q() {
      k = Math.max(r.innerWidth || 0, m.clientWidth) !== P.width || m.clientHeight !== re, re = m.clientHeight, k && c.fillImgs();
    }, K = 99, _ee = function ee() {
      var e = new Date() - J;
      e < K ? Z = setTimeout(_ee, K - e) : (Z = null, Q());
    }, function () {
      J = new Date(), Z || (Z = setTimeout(_ee, K));
    })), H(s, "readystatechange", _ie)), c.picturefill = ae, c.fillImgs = ae, c.teardownRun = h, ae._ = c, r.picturefillCFG = {
      pf: c,
      push: function push(e) {
        var t = e.shift();
        "function" == typeof c[t] ? c[t].apply(c, e) : (b[t] = e[0], D && c.fillImgs({
          reselect: !0
        }));
      }
    };

    for (; E && E.length;) {
      r.picturefillCFG.push(E.shift());
    }

    r.picturefill = ae, "object" == _typeof(e.exports) ? e.exports = ae : void 0 === (n = function () {
      return ae;
    }.call(t, i, t, e)) || (e.exports = n), c.supPicture || (y["image/webp"] = function (e, t) {
      var i = new r.Image();
      return i.onerror = function () {
        y[e] = !1, ae();
      }, i.onload = function () {
        y[e] = 1 === i.width, ae();
      }, i.src = t, "pending";
    }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
  }(window, document);
}, function (e, t, i) {
  var n, r, s;
  /*!
   * viewport-units-buggyfill v0.6.2
   * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
   * @author: Rodney Rehm - http://rodneyrehm.de/en/
   */

  !function (i, o) {
    "use strict";

    r = [], void 0 === (s = "function" == typeof (n = function n() {
      var e,
          t,
          i,
          n,
          r,
          s = !1,
          o = window.navigator.userAgent,
          a = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
          l = /(https?:)?\/\//,
          u = [].forEach,
          c = /MSIE [0-9]\./i.test(o),
          d = /MSIE [0-8]\./i.test(o),
          h = o.indexOf("Opera Mini") > -1,
          f = /(iPhone|iPod|iPad).+AppleWebKit/i.test(o) && (r = o.match(/OS (\d)/)) && r.length > 1 && parseInt(r[1]) < 10,
          p = o.indexOf(" Android ") > -1 && o.indexOf("Version/") > -1 && parseFloat((o.match("Android ([0-9.]+)") || [])[1]) <= 4.4;
      c || (c = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./));

      try {
        new v("test");
      } catch (e) {
        var v = function v(e, t) {
          var i;
          return t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          }, (i = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        };

        v.prototype = window.Event.prototype, window.CustomEvent = v;
      }

      function g() {
        s && (m(), setTimeout(function () {
          n.textContent = b(), n.parentNode.appendChild(n), window.dispatchEvent(new v("viewport-units-buggyfill-style"));
        }, 1));
      }

      function m() {
        return i = [], u.call(document.styleSheets, function (e) {
          var t = function (e) {
            try {
              if (!e.cssRules) return;
            } catch (e) {
              if ("SecurityError" !== e.name) throw e;
              return;
            }

            for (var t = [], i = 0; i < e.cssRules.length; i++) {
              var n = e.cssRules[i];
              t.push(n);
            }

            return t;
          }(e);

          t && "patched-viewport" !== e.ownerNode.id && "ignore" !== e.ownerNode.getAttribute("data-viewport-units-buggyfill") && (e.media && e.media.mediaText && window.matchMedia && !window.matchMedia(e.media.mediaText).matches || u.call(t, y));
        }), i;
      }

      function y(t) {
        if (7 === t.type) {
          var n;

          try {
            n = t.cssText;
          } catch (e) {
            return;
          }

          return a.lastIndex = 0, void (a.test(n) && !l.test(n) && (i.push([t, null, n]), e.hacks && e.hacks.findDeclarations(i, t, null, n)));
        }

        if (t.style) u.call(t.style, function (n) {
          var r = t.style.getPropertyValue(n);
          t.style.getPropertyPriority(n) && (r += " !important"), a.lastIndex = 0, a.test(r) && (i.push([t, n, r]), e.hacks && e.hacks.findDeclarations(i, t, n, r));
        });else {
          if (!t.cssRules) return;
          u.call(t.cssRules, function (e) {
            y(e);
          });
        }
      }

      function b() {
        var e, n;
        e = window.innerHeight, n = window.innerWidth, t = {
          vh: e,
          vw: n,
          vmax: Math.max(n, e),
          vmin: Math.min(n, e)
        };
        var r,
            s,
            o = [],
            a = [];
        return i.forEach(function (e) {
          var t = w.apply(null, e),
              i = t.selector.length ? t.selector.join(" {\n") + " {\n" : "",
              n = new Array(t.selector.length + 1).join("\n}");
          if (!i || i !== r) return a.length && (o.push(r + a.join("\n") + s), a.length = 0), void (i ? (r = i, s = n, a.push(t.content)) : (o.push(t.content), r = null, s = null));
          i && !r && (r = i, s = n), a.push(t.content);
        }), a.length && o.push(r + a.join("\n") + s), h && o.push("* { content: normal !important; }"), o.join("\n\n");
      }

      function w(t, i, n) {
        var r,
            s = [];
        r = n.replace(a, x), e.hacks && (r = e.hacks.overwriteDeclaration(t, i, r)), i && (s.push(t.selectorText), r = i + ": " + r + ";");

        for (var o = t.parentRule; o;) {
          o.media ? s.unshift("@media " + o.media.mediaText) : o.conditionText && s.unshift("@supports " + o.conditionText), o = o.parentRule;
        }

        return {
          selector: s,
          content: r
        };
      }

      function x(e, i, n) {
        var r = t[n];
        return parseFloat(i) / 100 * r + "px";
      }

      function T(e) {
        return e.slice(0, e.indexOf("/", e.indexOf("://") + 3));
      }

      return {
        version: "0.6.1",
        findProperties: m,
        getCss: b,
        init: function init(t) {
          if (!s) {
            if (!0 === t && (t = {
              force: !0
            }), (e = t || {}).isMobileSafari = f, e.isBadStockAndroid = p, !e.ignoreVmax || e.force || d || (c = !1), d || !e.force && !f && !c && !p && !h && (!e.hacks || !e.hacks.required(e))) return window.console && d && console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"), {
              init: function init() {}
            };
            var i, r, o;
            window.dispatchEvent(new v("viewport-units-buggyfill-init")), e.hacks && e.hacks.initialize(e), s = !0, (n = document.createElement("style")).id = "patched-viewport", document[e.appendToBody ? "body" : "head"].appendChild(n), i = function i() {
              var t,
                  i,
                  n,
                  r = (t = g, i = e.refreshDebounceWait || 100, function () {
                var e = this,
                    r = arguments,
                    s = function s() {
                  t.apply(e, r);
                };

                clearTimeout(n), n = setTimeout(s, i);
              });
              window.addEventListener("orientationchange", r, !0), window.addEventListener("pageshow", r, !0), (e.force || c || function () {
                try {
                  return window.self !== window.top;
                } catch (e) {
                  return !0;
                }
              }()) && (window.addEventListener("resize", r, !0), e._listeningToResize = !0), e.hacks && e.hacks.initializeEvents(e, g, r), g();
            }, r = 0, o = function o() {
              --r || i();
            }, u.call(document.styleSheets, function (e) {
              e.href && T(e.href) !== T(location.href) && "ignore" !== e.ownerNode.getAttribute("data-viewport-units-buggyfill") && (r++, function (e, t) {
                !function (e, t, i) {
                  var n = new XMLHttpRequest();
                  if ("withCredentials" in n) n.open("GET", e, !0);else {
                    if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                    (n = new XDomainRequest()).open("GET", e);
                  }
                  n.onload = t, n.onerror = i, n.send();
                }(e.href, function () {
                  var i = document.createElement("style");
                  i.media = e.media, i.setAttribute("data-href", e.href), i.textContent = this.responseText, e.parentNode.replaceChild(i, e), t();
                }, t);
              }(e.ownerNode, o));
            }), r || i();
          }
        },
        refresh: g
      };
    }) ? n.apply(t, r) : n) || (e.exports = s);
  }();
}, function (e, t, i) {
  e.exports = function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.p = "dist/", t(0);
  }([function (e, t, i) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    },
        s = (n(i(1)), i(6)),
        o = n(s),
        a = n(i(7)),
        l = n(i(8)),
        u = n(i(9)),
        c = n(i(10)),
        d = n(i(11)),
        h = n(i(14)),
        f = [],
        p = !1,
        v = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        g = function g() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (p = !0), p) return f = (0, d["default"])(f, v), (0, c["default"])(f, v.once), f;
    },
        m = function m() {
      f = (0, h["default"])(), g();
    };

    e.exports = {
      init: function init(e) {
        v = r(v, e), f = (0, h["default"])();
        var t = document.all && !window.atob;
        return function (e) {
          return !0 === e || "mobile" === e && u["default"].mobile() || "phone" === e && u["default"].phone() || "tablet" === e && u["default"].tablet() || "function" == typeof e && !0 === e();
        }(v.disable) || t ? void f.forEach(function (e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
        }) : (v.disableMutationObserver || l["default"].isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), v.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", v.easing), document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), "DOMContentLoaded" === v.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, function () {
          g(!0);
        }) : document.addEventListener(v.startEvent, function () {
          g(!0);
        }), window.addEventListener("resize", (0, a["default"])(g, v.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a["default"])(g, v.debounceDelay, !0)), window.addEventListener("scroll", (0, o["default"])(function () {
          (0, c["default"])(f, v.once);
        }, v.throttleDelay)), v.disableMutationObserver || l["default"].ready("[data-aos]", m), f);
      },
      refresh: g,
      refreshHard: m
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function i(e, t, i) {
        function r(t) {
          var i = h,
              n = f;
          return h = f = void 0, y = t, v = e.apply(n, i);
        }

        function o(e) {
          return y = e, g = setTimeout(u, t), T ? r(e) : v;
        }

        function l(e) {
          var i = e - m;
          return void 0 === m || i >= t || i < 0 || S && e - y >= p;
        }

        function u() {
          var e = x();
          return l(e) ? c(e) : void (g = setTimeout(u, function (e) {
            var i = t - (e - m);
            return S ? w(i, p - (e - y)) : i;
          }(e)));
        }

        function c(e) {
          return g = void 0, C && h ? r(e) : (h = f = void 0, v);
        }

        function d() {
          var e = x(),
              i = l(e);

          if (h = arguments, f = this, m = e, i) {
            if (void 0 === g) return o(m);
            if (S) return g = setTimeout(u, t), r(m);
          }

          return void 0 === g && (g = setTimeout(u, t)), v;
        }

        var h,
            f,
            p,
            v,
            g,
            m,
            y = 0,
            T = !1,
            S = !1,
            C = !0;
        if ("function" != typeof e) throw new TypeError(a);
        return t = s(t) || 0, n(i) && (T = !!i.leading, p = (S = "maxWait" in i) ? b(s(i.maxWait) || 0, t) : p, C = "trailing" in i ? !!i.trailing : C), d.cancel = function () {
          void 0 !== g && clearTimeout(g), y = 0, h = m = f = g = void 0;
        }, d.flush = function () {
          return void 0 === g ? v : c(x());
        }, d;
      }

      function n(e) {
        var t = void 0 === e ? "undefined" : o(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return "symbol" == (void 0 === e ? "undefined" : o(e)) || function (e) {
          return !!e && "object" == (void 0 === e ? "undefined" : o(e));
        }(e) && y.call(e) == u;
      }

      function s(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return l;

        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(c, "");
        var i = h.test(e);
        return i || f.test(e) ? p(e.slice(2), i ? 2 : 8) : d.test(e) ? l : +e;
      }

      var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          a = "Expected a function",
          l = NaN,
          u = "[object Symbol]",
          c = /^\s+|\s+$/g,
          d = /^[-+]0x[0-9a-f]+$/i,
          h = /^0b[01]+$/i,
          f = /^0o[0-7]+$/i,
          p = parseInt,
          v = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
          m = v || g || Function("return this")(),
          y = Object.prototype.toString,
          b = Math.max,
          w = Math.min,
          x = function x() {
        return m.Date.now();
      };

      e.exports = function (e, t, r) {
        var s = !0,
            o = !0;
        if ("function" != typeof e) throw new TypeError(a);
        return n(r) && (s = "leading" in r ? !!r.leading : s, o = "trailing" in r ? !!r.trailing : o), i(e, t, {
          leading: s,
          maxWait: t,
          trailing: o
        });
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function i(e) {
        var t = void 0 === e ? "undefined" : s(e);
        return !!e && ("object" == t || "function" == t);
      }

      function n(e) {
        return "symbol" == (void 0 === e ? "undefined" : s(e)) || function (e) {
          return !!e && "object" == (void 0 === e ? "undefined" : s(e));
        }(e) && m.call(e) == l;
      }

      function r(e) {
        if ("number" == typeof e) return e;
        if (n(e)) return a;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(u, "");
        var r = d.test(e);
        return r || h.test(e) ? f(e.slice(2), r ? 2 : 8) : c.test(e) ? a : +e;
      }

      var s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          o = "Expected a function",
          a = NaN,
          l = "[object Symbol]",
          u = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          d = /^0b[01]+$/i,
          h = /^0o[0-7]+$/i,
          f = parseInt,
          p = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
          v = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
          g = p || v || Function("return this")(),
          m = Object.prototype.toString,
          y = Math.max,
          b = Math.min,
          w = function w() {
        return g.Date.now();
      };

      e.exports = function (e, t, n) {
        function s(t) {
          var i = h,
              n = f;
          return h = f = void 0, x = t, v = e.apply(n, i);
        }

        function a(e) {
          return x = e, g = setTimeout(u, t), T ? s(e) : v;
        }

        function l(e) {
          var i = e - m;
          return void 0 === m || i >= t || i < 0 || S && e - x >= p;
        }

        function u() {
          var e = w();
          return l(e) ? c(e) : void (g = setTimeout(u, function (e) {
            var i = t - (e - m);
            return S ? b(i, p - (e - x)) : i;
          }(e)));
        }

        function c(e) {
          return g = void 0, C && h ? s(e) : (h = f = void 0, v);
        }

        function d() {
          var e = w(),
              i = l(e);

          if (h = arguments, f = this, m = e, i) {
            if (void 0 === g) return a(m);
            if (S) return g = setTimeout(u, t), s(m);
          }

          return void 0 === g && (g = setTimeout(u, t)), v;
        }

        var h,
            f,
            p,
            v,
            g,
            m,
            x = 0,
            T = !1,
            S = !1,
            C = !0;
        if ("function" != typeof e) throw new TypeError(o);
        return t = r(t) || 0, i(n) && (T = !!n.leading, p = (S = "maxWait" in n) ? y(r(n.maxWait) || 0, t) : p, C = "trailing" in n ? !!n.trailing : C), d.cancel = function () {
          void 0 !== g && clearTimeout(g), x = 0, h = m = f = g = void 0;
        }, d.flush = function () {
          return void 0 === g ? v : c(w());
        }, d;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function i() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function n(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            i = Array.prototype.slice.call(e.removedNodes);
        if (function e(t) {
          var i = void 0,
              n = void 0;

          for (i = 0; i < t.length; i += 1) {
            if ((n = t[i]).dataset && n.dataset.aos) return !0;
            if (n.children && e(n.children)) return !0;
          }

          return !1;
        }(t.concat(i))) return r();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var r = function r() {};

    t["default"] = {
      isSupported: function isSupported() {
        return !!i();
      },
      ready: function ready(e, t) {
        var s = window.document,
            o = new (i())(n);
        r = t, o.observe(s.documentElement, {
          childList: !0,
          subtree: !0,
          removedNodes: !0
        });
      }
    };
  }, function (e, t) {
    "use strict";

    function i() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        l = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }

      return n(e, [{
        key: "phone",
        value: function value() {
          var e = i();
          return !(!r.test(e) && !s.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = i();
          return !(!o.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new l();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function (e, t) {
      var i = window.pageYOffset,
          n = window.innerHeight;
      e.forEach(function (e, r) {
        !function (e, t, i) {
          var n = e.node.getAttribute("data-aos-once");
          t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && e.node.classList.remove("aos-animate");
        }(e, n + i, t);
      });
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(i(12));

    t["default"] = function (e, t) {
      return e.forEach(function (e, i) {
        e.node.classList.add("aos-init"), e.position = (0, n["default"])(e.node, t.offset);
      }), e;
    };
  }, function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(i(13));

    t["default"] = function (e, t) {
      var i = 0,
          r = 0,
          s = window.innerHeight,
          o = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (o.offset && !isNaN(o.offset) && (r = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (e = document.querySelectorAll(o.anchor)[0]), i = (0, n["default"])(e).top, o.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          i += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          i += e.offsetHeight;
          break;

        case "top-center":
          i += s / 2;
          break;

        case "bottom-center":
          i += s / 2 + e.offsetHeight;
          break;

        case "center-center":
          i += s / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          i += s;
          break;

        case "bottom-top":
          i += e.offsetHeight + s;
          break;

        case "center-top":
          i += e.offsetHeight / 2 + s;
      }

      return o.anchorPlacement || o.offset || isNaN(t) || (r = t), i + r;
    };
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function (e) {
      for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: i,
        left: t
      };
    };
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = function (e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };
  }]);
}, function (e, t, i) {
  var n, r, s;
  /*!
   * jQuery Validation Plugin v1.19.3
   *
   * https://jqueryvalidation.org/
   *
   * Copyright (c) 2021 Jörn Zaefferer
   * Released under the MIT license
   */

  r = [i(21)], void 0 === (s = "function" == typeof (n = function n(e) {
    e.extend(e.fn, {
      validate: function validate(t) {
        if (this.length) {
          var i = e.data(this[0], "validator");
          return i || (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
            i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0);
          }), this.on("submit.validate", function (t) {
            function n() {
              var n, r;
              return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (r = i.settings.submitHandler.call(i, i.currentForm, t), n && n.remove(), void 0 !== r && r);
            }

            return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1);
          })), i);
        }

        t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function valid() {
        var t, i, n;
        return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function () {
          (t = i.element(this) && t) || (n = n.concat(i.errorList));
        }), i.errorList = n), t;
      },
      rules: function rules(t, i) {
        var n,
            r,
            s,
            o,
            a,
            l,
            u = this[0],
            c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");

        if (null != u && (!u.form && c && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
          if (t) switch (r = (n = e.data(u.form, "validator").settings).rules, s = e.validator.staticRules(u), t) {
            case "add":
              e.extend(s, e.validator.normalizeRule(i)), delete s.messages, r[u.name] = s, i.messages && (n.messages[u.name] = e.extend(n.messages[u.name], i.messages));
              break;

            case "remove":
              return i ? (l = {}, e.each(i.split(/\s/), function (e, t) {
                l[t] = s[t], delete s[t];
              }), l) : (delete r[u.name], s);
          }
          return (o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u)).required && (a = o.required, delete o.required, o = e.extend({
            required: a
          }, o)), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, {
            remote: a
          })), o;
        }
      }
    });

    var t,
        i = function i(e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };

    e.extend(e.expr.pseudos || e.expr[":"], {
      blank: function blank(t) {
        return !i("" + e(t).val());
      },
      filled: function filled(t) {
        var n = e(t).val();
        return null !== n && !!i("" + n);
      },
      unchecked: function unchecked(t) {
        return !e(t).prop("checked");
      }
    }), e.validator = function (t, i) {
      this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init();
    }, e.validator.format = function (t, i) {
      return 1 === arguments.length ? function () {
        var i = e.makeArray(arguments);
        return i.unshift(t), e.validator.format.apply(this, i);
      } : (void 0 === i || (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function (e, i) {
        t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
          return i;
        });
      })), t);
    }, e.extend(e.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: e([]),
        errorLabelContainer: e([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function onfocusin(e) {
          this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
        },
        onfocusout: function onfocusout(e) {
          this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
        },
        onkeyup: function onkeyup(t, i) {
          9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t);
        },
        onclick: function onclick(e) {
          e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
        },
        highlight: function highlight(t, i, n) {
          "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n);
        },
        unhighlight: function unhighlight(t, i, n) {
          "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n);
        }
      },
      setDefaults: function setDefaults(t) {
        e.extend(e.validator.defaults, t);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: e.validator.format("Please enter no more than {0} characters."),
        minlength: e.validator.format("Please enter at least {0} characters."),
        rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
        range: e.validator.format("Please enter a value between {0} and {1}."),
        max: e.validator.format("Please enter a value less than or equal to {0}."),
        min: e.validator.format("Please enter a value greater than or equal to {0}."),
        step: e.validator.format("Please enter a multiple of {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function init() {
          this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var t,
              i = this.currentForm,
              n = this.groups = {};

          function r(t) {
            var n = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");

            if (!this.form && n && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), i === this.form) {
              var r = e.data(this.form, "validator"),
                  s = "on" + t.type.replace(/^validate/, ""),
                  o = r.settings;
              o[s] && !e(this).is(o.ignore) && o[s].call(r, this, t);
            }
          }

          e.each(this.settings.groups, function (t, i) {
            "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
              n[i] = t;
            });
          }), t = this.settings.rules, e.each(t, function (i, n) {
            t[i] = e.validator.normalizeRule(n);
          }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", r).on("click.validate", "select, option, [type='radio'], [type='checkbox']", r), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        },
        form: function form() {
          return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
        },
        checkForm: function checkForm() {
          this.prepareForm();

          for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
            this.check(t[e]);
          }

          return this.valid();
        },
        element: function element(t) {
          var i,
              n,
              r = this.clean(t),
              s = this.validationTargetFor(r),
              o = this,
              a = !0;
          return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), (n = this.groups[s.name]) && e.each(this.groups, function (e, t) {
            t === n && e !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a);
          }), i = !1 !== this.check(s), a = a && i, this.invalid[s.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), a;
        },
        showErrors: function showErrors(t) {
          if (t) {
            var i = this;
            e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
              return {
                message: e,
                element: i.findByName(t)[0]
              };
            }), this.successList = e.grep(this.successList, function (e) {
              return !(e.name in t);
            });
          }

          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
        },
        resetForm: function resetForm() {
          e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
          var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
          this.resetElements(t);
        },
        resetElements: function resetElements(e) {
          var t;
          if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
            this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
          } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        },
        numberOfInvalids: function numberOfInvalids() {
          return this.objectLength(this.invalid);
        },
        objectLength: function objectLength(e) {
          var t,
              i = 0;

          for (t in e) {
            void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
          }

          return i;
        },
        hideErrors: function hideErrors() {
          this.hideThese(this.toHide);
        },
        hideThese: function hideThese(e) {
          e.not(this.containers).text(""), this.addWrapper(e).hide();
        },
        valid: function valid() {
          return 0 === this.size();
        },
        size: function size() {
          return this.errorList.length;
        },
        focusInvalid: function focusInvalid() {
          if (this.settings.focusInvalid) try {
            e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
          } catch (e) {}
        },
        findLastActive: function findLastActive() {
          var t = this.lastActive;
          return t && 1 === e.grep(this.errorList, function (e) {
            return e.element.name === t.name;
          }).length && t;
        },
        elements: function elements() {
          var t = this,
              i = {};
          return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
            var n = this.name || e(this).attr("name"),
                r = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
            return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = e(this).closest("form")[0], this.name = n), !(this.form !== t.currentForm || n in i || !t.objectLength(e(this).rules()) || (i[n] = !0, 0));
          });
        },
        clean: function clean(t) {
          return e(t)[0];
        },
        errors: function errors() {
          var t = this.settings.errorClass.split(" ").join(".");
          return e(this.settings.errorElement + "." + t, this.errorContext);
        },
        resetInternals: function resetInternals() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]);
        },
        reset: function reset() {
          this.resetInternals(), this.currentElements = e([]);
        },
        prepareForm: function prepareForm() {
          this.reset(), this.toHide = this.errors().add(this.containers);
        },
        prepareElement: function prepareElement(e) {
          this.reset(), this.toHide = this.errorsFor(e);
        },
        elementValue: function elementValue(t) {
          var i,
              n,
              r = e(t),
              s = t.type,
              o = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
          return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (i = o ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 || (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i);
        },
        check: function check(t) {
          t = this.validationTargetFor(this.clean(t));
          var i,
              n,
              r,
              s,
              o = e(t).rules(),
              a = e.map(o, function (e, t) {
            return t;
          }).length,
              l = !1,
              u = this.elementValue(t);

          for (n in "function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s && (u = s.call(t, u), delete o.normalizer), o) {
            r = {
              method: n,
              parameters: o[n]
            };

            try {
              if ("dependency-mismatch" === (i = e.validator.methods[n].call(this, u, t, r.parameters)) && 1 === a) {
                l = !0;
                continue;
              }

              if (l = !1, "pending" === i) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!i) return this.formatAndAdd(t, r), !1;
            } catch (e) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e;
            }
          }

          if (!l) return this.objectLength(o) && this.successList.push(t), !0;
        },
        customDataMessage: function customDataMessage(t, i) {
          return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg");
        },
        customMessage: function customMessage(e, t) {
          var i = this.settings.messages[e];
          return i && (i.constructor === String ? i : i[t]);
        },
        findDefined: function findDefined() {
          for (var e = 0; e < arguments.length; e++) {
            if (void 0 !== arguments[e]) return arguments[e];
          }
        },
        defaultMessage: function defaultMessage(t, i) {
          "string" == typeof i && (i = {
            method: i
          });
          var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
              r = /\$?\{(\d+)\}/g;
          return "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)), n;
        },
        formatAndAdd: function formatAndAdd(e, t) {
          var i = this.defaultMessage(e, t);
          this.errorList.push({
            message: i,
            element: e,
            method: t.method
          }), this.errorMap[e.name] = i, this.submitted[e.name] = i;
        },
        addWrapper: function addWrapper(e) {
          return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
        },
        defaultShowErrors: function defaultShowErrors() {
          var e, t, i;

          for (e = 0; this.errorList[e]; e++) {
            i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
          }

          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) {
            this.showLabel(this.successList[e]);
          }
          if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) {
            this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          }
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
        },
        validElements: function validElements() {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function invalidElements() {
          return e(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function showLabel(t, i) {
          var n,
              r,
              s,
              o,
              a = this.errorsFor(t),
              l = this.idOrName(t),
              u = e(t).attr("aria-describedby");
          a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (n = a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = a.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (u += " " + s) : u = s, e(t).attr("aria-describedby", u), (r = this.groups[t.name]) && (o = this, e.each(o.groups, function (t, i) {
            i === r && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"));
          })))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a);
        },
        errorsFor: function errorsFor(t) {
          var i = this.escapeCssMeta(this.idOrName(t)),
              n = e(t).attr("aria-describedby"),
              r = "label[for='" + i + "'], label[for='" + i + "'] *";
          return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r);
        },
        escapeCssMeta: function escapeCssMeta(e) {
          return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function idOrName(e) {
          return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
        },
        validationTargetFor: function validationTargetFor(t) {
          return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
        },
        checkable: function checkable(e) {
          return /radio|checkbox/i.test(e.type);
        },
        findByName: function findByName(t) {
          return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
        },
        getLength: function getLength(t, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return e("option:selected", i).length;

            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
          }

          return t.length;
        },
        depend: function depend(e, t) {
          return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t);
        },
        dependTypes: {
          "boolean": function boolean(e) {
            return e;
          },
          string: function string(t, i) {
            return !!e(t, i.form).length;
          },
          "function": function _function(e, t) {
            return e(t);
          }
        },
        optional: function optional(t) {
          var i = this.elementValue(t);
          return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch";
        },
        startRequest: function startRequest(t) {
          this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0);
        },
        stopRequest: function stopRequest(t, i) {
          this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
        },
        previousValue: function previousValue(t, i) {
          return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(t, {
              method: i
            })
          });
        },
        destroy: function destroy() {
          this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function addClassRules(t, i) {
        t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t);
      },
      classRules: function classRules(t) {
        var i = {},
            n = e(t).attr("class");
        return n && e.each(n.split(" "), function () {
          this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this]);
        }), i;
      },
      normalizeAttributeRule: function normalizeAttributeRule(e, t, i, n) {
        /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0);
      },
      attributeRules: function attributeRules(t) {
        var i,
            n,
            r = {},
            s = e(t),
            o = t.getAttribute("type");

        for (i in e.validator.methods) {
          "required" === i ? ("" === (n = t.getAttribute(i)) && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(r, o, i, n);
        }

        return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
      },
      dataRules: function dataRules(t) {
        var i,
            n,
            r = {},
            s = e(t),
            o = t.getAttribute("type");

        for (i in e.validator.methods) {
          "" === (n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (n = !0), this.normalizeAttributeRule(r, o, i, n);
        }

        return r;
      },
      staticRules: function staticRules(t) {
        var i = {},
            n = e.data(t.form, "validator");
        return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i;
      },
      normalizeRules: function normalizeRules(t, i) {
        return e.each(t, function (n, r) {
          if (!1 !== r) {
            if (r.param || r.depends) {
              var s = !0;

              switch (_typeof(r.depends)) {
                case "string":
                  s = !!e(r.depends, i.form).length;
                  break;

                case "function":
                  s = r.depends.call(i, i);
              }

              s ? t[n] = void 0 === r.param || r.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n]);
            }
          } else delete t[n];
        }), e.each(t, function (e, n) {
          t[e] = "function" == typeof n && "normalizer" !== e ? n(i) : n;
        }), e.each(["minlength", "maxlength"], function () {
          t[this] && (t[this] = Number(t[this]));
        }), e.each(["rangelength", "range"], function () {
          var e;
          t[this] && (Array.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (e = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(e[0]), Number(e[1])]));
        }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t;
      },
      normalizeRule: function normalizeRule(t) {
        if ("string" == typeof t) {
          var i = {};
          e.each(t.split(/\s/), function () {
            i[this] = !0;
          }), t = i;
        }

        return t;
      },
      addMethod: function addMethod(t, i, n) {
        e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
      },
      methods: {
        required: function required(t, i, n) {
          if (!this.depend(n, i)) return "dependency-mismatch";

          if ("select" === i.nodeName.toLowerCase()) {
            var r = e(i).val();
            return r && r.length > 0;
          }

          return this.checkable(i) ? this.getLength(t, i) > 0 : null != t && t.length > 0;
        },
        email: function email(e, t) {
          return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
        },
        url: function url(e, t) {
          return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e);
        },
        date: (t = !1, function (e, i) {
          return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(e).toString());
        }),
        dateISO: function dateISO(e, t) {
          return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
        },
        number: function number(e, t) {
          return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
        },
        digits: function digits(e, t) {
          return this.optional(t) || /^\d+$/.test(e);
        },
        minlength: function minlength(e, t, i) {
          var n = Array.isArray(e) ? e.length : this.getLength(e, t);
          return this.optional(t) || n >= i;
        },
        maxlength: function maxlength(e, t, i) {
          var n = Array.isArray(e) ? e.length : this.getLength(e, t);
          return this.optional(t) || n <= i;
        },
        rangelength: function rangelength(e, t, i) {
          var n = Array.isArray(e) ? e.length : this.getLength(e, t);
          return this.optional(t) || n >= i[0] && n <= i[1];
        },
        min: function min(e, t, i) {
          return this.optional(t) || e >= i;
        },
        max: function max(e, t, i) {
          return this.optional(t) || e <= i;
        },
        range: function range(e, t, i) {
          return this.optional(t) || e >= i[0] && e <= i[1];
        },
        step: function step(t, i, n) {
          var r,
              s = e(i).attr("type"),
              o = "Step attribute on input type " + s + " is not supported.",
              a = new RegExp("\\b" + s + "\\b"),
              l = function l(e) {
            var t = ("" + e).match(/(?:\.(\d+))?$/);
            return t && t[1] ? t[1].length : 0;
          },
              u = function u(e) {
            return Math.round(e * Math.pow(10, r));
          },
              c = !0;

          if (s && !a.test(["text", "number", "range"].join())) throw new Error(o);
          return r = l(n), (l(t) > r || u(t) % u(n) != 0) && (c = !1), this.optional(i) || c;
        },
        equalTo: function equalTo(t, i, n) {
          var r = e(n);
          return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            e(i).valid();
          }), t === r.val();
        },
        remote: function remote(t, i, n, r) {
          if (this.optional(i)) return "dependency-mismatch";
          r = "string" == typeof r && r || "remote";
          var s,
              o,
              a,
              l = this.previousValue(i, r);
          return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {
            url: n
          } || n, a = e.param(e.extend({
            data: t
          }, n.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(i), (o = {})[i.name] = t, e.ajax(e.extend(!0, {
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: o,
            context: s.currentForm,
            success: function success(e) {
              var n,
                  o,
                  a,
                  u = !0 === e || "true" === e;
              s.settings.messages[i.name][r] = l.originalMessage, u ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = a, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, o = e || s.defaultMessage(i, {
                method: r,
                parameters: t
              }), n[i.name] = l.message = o, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = u, s.stopRequest(i, u);
            }
          }, n)), "pending");
        }
      }
    });
    var n,
        r = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
      var n = e.port;
      "abort" === e.mode && (r[n] && r[n].abort(), r[n] = i);
    }) : (n = e.ajax, e.ajax = function (t) {
      var i = ("mode" in t ? t : e.ajaxSettings).mode,
          s = ("port" in t ? t : e.ajaxSettings).port;
      return "abort" === i ? (r[s] && r[s].abort(), r[s] = n.apply(this, arguments), r[s]) : n.apply(this, arguments);
    }), e;
  }) ? n.apply(t, r) : n) || (e.exports = s);
}, function (e, t, i) {
  var n;
  n = function n() {
    return function (e) {
      var t = {};

      function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports;
      }

      return i.m = e, i.c = t, i.p = "http://localhost:8080/dist", i(0);
    }([function (e, t, i) {
      "function" != typeof Promise && (window.Promise = i(1));
      var n = {
        version: "1.0.0",
        BaseTransition: i(4),
        BaseView: i(6),
        BaseCache: i(8),
        Dispatcher: i(7),
        HistoryManager: i(9),
        Pjax: i(10),
        Prefetch: i(13),
        Utils: i(5)
      };
      e.exports = n;
    }, function (e, t, i) {
      (function (t) {
        !function (i) {
          var n = setTimeout;

          function r() {}

          var s = "function" == typeof t && t || function (e) {
            n(e, 0);
          },
              o = function o(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
          };

          function a(e) {
            if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this);
          }

          function l(e, t) {
            for (; 3 === e._state;) {
              e = e._value;
            }

            0 !== e._state ? (e._handled = !0, s(function () {
              var i = 1 === e._state ? t.onFulfilled : t.onRejected;

              if (null !== i) {
                var n;

                try {
                  n = i(e._value);
                } catch (e) {
                  return void c(t.promise, e);
                }

                u(t.promise, n);
              } else (1 === e._state ? u : c)(t.promise, e._value);
            })) : e._deferreds.push(t);
          }

          function u(e, t) {
            try {
              if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

              if (t && ("object" == _typeof(t) || "function" == typeof t)) {
                var i = t.then;
                if (t instanceof a) return e._state = 3, e._value = t, void d(e);
                if ("function" == typeof i) return void f((n = i, r = t, function () {
                  n.apply(r, arguments);
                }), e);
              }

              e._state = 1, e._value = t, d(e);
            } catch (t) {
              c(e, t);
            }

            var n, r;
          }

          function c(e, t) {
            e._state = 2, e._value = t, d(e);
          }

          function d(e) {
            2 === e._state && 0 === e._deferreds.length && s(function () {
              e._handled || o(e._value);
            });

            for (var t = 0, i = e._deferreds.length; t < i; t++) {
              l(e, e._deferreds[t]);
            }

            e._deferreds = null;
          }

          function h(e, t, i) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i;
          }

          function f(e, t) {
            var i = !1;

            try {
              e(function (e) {
                i || (i = !0, u(t, e));
              }, function (e) {
                i || (i = !0, c(t, e));
              });
            } catch (e) {
              if (i) return;
              i = !0, c(t, e);
            }
          }

          a.prototype["catch"] = function (e) {
            return this.then(null, e);
          }, a.prototype.then = function (e, t) {
            var i = new this.constructor(r);
            return l(this, new h(e, t, i)), i;
          }, a.all = function (e) {
            var t = Array.prototype.slice.call(e);
            return new a(function (e, i) {
              if (0 === t.length) return e([]);
              var n = t.length;

              function r(s, o) {
                try {
                  if (o && ("object" == _typeof(o) || "function" == typeof o)) {
                    var a = o.then;
                    if ("function" == typeof a) return void a.call(o, function (e) {
                      r(s, e);
                    }, i);
                  }

                  t[s] = o, 0 == --n && e(t);
                } catch (e) {
                  i(e);
                }
              }

              for (var s = 0; s < t.length; s++) {
                r(s, t[s]);
              }
            });
          }, a.resolve = function (e) {
            return e && "object" == _typeof(e) && e.constructor === a ? e : new a(function (t) {
              t(e);
            });
          }, a.reject = function (e) {
            return new a(function (t, i) {
              i(e);
            });
          }, a.race = function (e) {
            return new a(function (t, i) {
              for (var n = 0, r = e.length; n < r; n++) {
                e[n].then(t, i);
              }
            });
          }, a._setImmediateFn = function (e) {
            s = e;
          }, a._setUnhandledRejectionFn = function (e) {
            o = e;
          }, void 0 !== e && e.exports ? e.exports = a : i.Promise || (i.Promise = a);
        }(this);
      }).call(t, i(2).setImmediate);
    }, function (e, t, i) {
      (function (e, n) {
        var r = i(3).nextTick,
            s = Function.prototype.apply,
            o = Array.prototype.slice,
            a = {},
            l = 0;

        function u(e, t) {
          this._id = e, this._clearFn = t;
        }

        t.setTimeout = function () {
          return new u(s.call(setTimeout, window, arguments), clearTimeout);
        }, t.setInterval = function () {
          return new u(s.call(setInterval, window, arguments), clearInterval);
        }, t.clearTimeout = t.clearInterval = function (e) {
          e.close();
        }, u.prototype.unref = u.prototype.ref = function () {}, u.prototype.close = function () {
          this._clearFn.call(window, this._id);
        }, t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
        }, t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
        }, t._unrefActive = t.active = function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout();
          }, t));
        }, t.setImmediate = "function" == typeof e ? e : function (e) {
          var i = l++,
              n = !(arguments.length < 2) && o.call(arguments, 1);
          return a[i] = !0, r(function () {
            a[i] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(i));
          }), i;
        }, t.clearImmediate = "function" == typeof n ? n : function (e) {
          delete a[e];
        };
      }).call(t, i(2).setImmediate, i(2).clearImmediate);
    }, function (e, t) {
      var i,
          n,
          r = e.exports = {};
      !function () {
        try {
          i = setTimeout;
        } catch (e) {
          i = function i() {
            throw new Error("setTimeout is not defined");
          };
        }

        try {
          n = clearTimeout;
        } catch (e) {
          n = function n() {
            throw new Error("clearTimeout is not defined");
          };
        }
      }();
      var s,
          o = [],
          a = !1,
          l = -1;

      function u() {
        a && s && (a = !1, s.length ? o = s.concat(o) : l = -1, o.length && c());
      }

      function c() {
        if (!a) {
          var e = i(u);
          a = !0;

          for (var t = o.length; t;) {
            for (s = o, o = []; ++l < t;) {
              s && s[l].run();
            }

            l = -1, t = o.length;
          }

          s = null, a = !1, n(e);
        }
      }

      function d(e, t) {
        this.fun = e, this.array = t;
      }

      function h() {}

      r.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }
        o.push(new d(e, t)), 1 !== o.length || a || i(c, 0);
      }, d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function () {
        return "/";
      }, r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function () {
        return 0;
      };
    }, function (e, t, i) {
      var n = i(5),
          r = {
        oldContainer: void 0,
        newContainer: void 0,
        newContainerLoading: void 0,
        extend: function extend(e) {
          return n.extend(this, e);
        },
        init: function init(e, t) {
          var i = this;
          return this.oldContainer = e, this._newContainerPromise = t, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function (e) {
            i.newContainer = e, i.newContainerReady.resolve();
          }), this.deferred.promise;
        },
        done: function done() {
          this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve();
        },
        start: function start() {}
      };
      e.exports = r;
    }, function (e, t) {
      var i = {
        getCurrentUrl: function getCurrentUrl() {
          return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        },
        cleanLink: function cleanLink(e) {
          return e.replace(/#.*/, "");
        },
        xhrTimeout: 5e3,
        xhr: function xhr(e) {
          var t = this.deferred(),
              i = new XMLHttpRequest();
          return i.onreadystatechange = function () {
            if (4 === i.readyState) return 200 === i.status ? t.resolve(i.responseText) : t.reject(new Error("xhr: HTTP code is not 200"));
          }, i.ontimeout = function () {
            return t.reject(new Error("xhr: Timeout exceeded"));
          }, i.open("GET", e), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), t.promise;
        },
        extend: function extend(e, t) {
          var i = Object.create(e);

          for (var n in t) {
            t.hasOwnProperty(n) && (i[n] = t[n]);
          }

          return i;
        },
        deferred: function deferred() {
          return new function () {
            this.resolve = null, this.reject = null, this.promise = new Promise(function (e, t) {
              this.resolve = e, this.reject = t;
            }.bind(this));
          }();
        },
        getPort: function getPort(e) {
          var t = void 0 !== e ? e : window.location.port,
              i = window.location.protocol;
          return "" != t ? parseInt(t) : "http:" === i ? 80 : "https:" === i ? 443 : void 0;
        }
      };
      e.exports = i;
    }, function (e, t, i) {
      var n = i(7),
          r = i(5),
          s = {
        namespace: null,
        extend: function extend(e) {
          return r.extend(this, e);
        },
        init: function init() {
          var e = this;
          n.on("initStateChange", function (t, i) {
            i && i.namespace === e.namespace && e.onLeave();
          }), n.on("newPageReady", function (t, i, n) {
            e.container = n, t.namespace === e.namespace && e.onEnter();
          }), n.on("transitionCompleted", function (t, i) {
            t.namespace === e.namespace && e.onEnterCompleted(), i && i.namespace === e.namespace && e.onLeaveCompleted();
          });
        },
        onEnter: function onEnter() {},
        onEnterCompleted: function onEnterCompleted() {},
        onLeave: function onLeave() {},
        onLeaveCompleted: function onLeaveCompleted() {}
      };
      e.exports = s;
    }, function (e, t) {
      var i = {
        events: {},
        on: function on(e, t) {
          this.events[e] = this.events[e] || [], this.events[e].push(t);
        },
        off: function off(e, t) {
          e in this.events != 0 && this.events[e].splice(this.events[e].indexOf(t), 1);
        },
        trigger: function trigger(e) {
          if (e in this.events != 0) for (var t = 0; t < this.events[e].length; t++) {
            this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1));
          }
        }
      };
      e.exports = i;
    }, function (e, t, i) {
      var n = i(5),
          r = {
        data: {},
        extend: function extend(e) {
          return n.extend(this, e);
        },
        set: function set(e, t) {
          this.data[e] = t;
        },
        get: function get(e) {
          return this.data[e];
        },
        reset: function reset() {
          this.data = {};
        }
      };
      e.exports = r;
    }, function (e, t) {
      var i = {
        history: [],
        add: function add(e, t) {
          t || (t = void 0), this.history.push({
            url: e,
            namespace: t
          });
        },
        currentStatus: function currentStatus() {
          return this.history[this.history.length - 1];
        },
        prevStatus: function prevStatus() {
          var e = this.history;
          return e.length < 2 ? null : e[e.length - 2];
        }
      };
      e.exports = i;
    }, function (e, t, i) {
      var n = i(5),
          r = i(7),
          s = i(11),
          o = i(8),
          a = i(9),
          l = {
        Dom: i(12),
        History: a,
        Cache: o,
        cacheEnabled: !0,
        transitionProgress: !1,
        ignoreClassLink: "no-barba",
        start: function start() {
          this.init();
        },
        init: function init() {
          var e = this.Dom.getContainer();
          this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(e)), r.trigger("initStateChange", this.History.currentStatus()), r.trigger("newPageReady", this.History.currentStatus(), {}, e, this.Dom.currentHTML), r.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents();
        },
        bindEvents: function bindEvents() {
          document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this));
        },
        getCurrentUrl: function getCurrentUrl() {
          return n.cleanLink(n.getCurrentUrl());
        },
        goTo: function goTo(e) {
          window.history.pushState(null, null, e), this.onStateChange();
        },
        forceGoTo: function forceGoTo(e) {
          window.location = e;
        },
        load: function load(e) {
          var t,
              i = n.deferred(),
              r = this;
          return (t = this.Cache.get(e)) || (t = n.xhr(e), this.Cache.set(e, t)), t.then(function (e) {
            var t = r.Dom.parseResponse(e);
            r.Dom.putContainer(t), r.cacheEnabled || r.Cache.reset(), i.resolve(t);
          }, function () {
            r.forceGoTo(e), i.reject();
          }), i.promise;
        },
        getHref: function getHref(e) {
          if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0;
        },
        onLinkClick: function onLinkClick(e) {
          for (var t = e.target; t && !this.getHref(t);) {
            t = t.parentNode;
          }

          if (this.preventCheck(e, t)) {
            e.stopPropagation(), e.preventDefault(), r.trigger("linkClicked", t, e);
            var i = this.getHref(t);
            this.goTo(i);
          }
        },
        preventCheck: function preventCheck(e, t) {
          if (!window.history.pushState) return !1;
          var i = this.getHref(t);
          return !(!t || !i || e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || t.target && "_blank" === t.target || window.location.protocol !== t.protocol || window.location.hostname !== t.hostname || n.getPort() !== n.getPort(t.port) || i.indexOf("#") > -1 || t.getAttribute && "string" == typeof t.getAttribute("download") || n.cleanLink(i) == n.cleanLink(location.href) || t.classList.contains(this.ignoreClassLink));
        },
        getTransition: function getTransition() {
          return s;
        },
        onStateChange: function onStateChange() {
          var e = this.getCurrentUrl();
          if (this.transitionProgress && this.forceGoTo(e), this.History.currentStatus().url === e) return !1;
          this.History.add(e);
          var t = this.load(e),
              i = Object.create(this.getTransition());
          this.transitionProgress = !0, r.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
          var n = i.init(this.Dom.getContainer(), t);
          t.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this));
        },
        onNewContainerLoaded: function onNewContainerLoaded(e) {
          this.History.currentStatus().namespace = this.Dom.getNamespace(e), r.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), e, this.Dom.currentHTML);
        },
        onTransitionEnd: function onTransitionEnd() {
          this.transitionProgress = !1, r.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus());
        }
      };
      e.exports = l;
    }, function (e, t, i) {
      var n = i(4).extend({
        start: function start() {
          this.newContainerLoading.then(this.finish.bind(this));
        },
        finish: function finish() {
          document.body.scrollTop = 0, this.done();
        }
      });
      e.exports = n;
    }, function (e, t) {
      var i = {
        dataNamespace: "namespace",
        wrapperId: "barba-wrapper",
        containerClass: "barba-container",
        currentHTML: document.documentElement.innerHTML,
        parseResponse: function parseResponse(e) {
          this.currentHTML = e;
          var t = document.createElement("div");
          t.innerHTML = e;
          var i = t.querySelector("title");
          return i && (document.title = i.textContent), this.getContainer(t);
        },
        getWrapper: function getWrapper() {
          var e = document.getElementById(this.wrapperId);
          if (!e) throw new Error("Barba.js: wrapper not found!");
          return e;
        },
        getContainer: function getContainer(e) {
          if (e || (e = document.body), !e) throw new Error("Barba.js: DOM not ready!");
          var t = this.parseContainer(e);
          if (t && t.jquery && (t = t[0]), !t) throw new Error("Barba.js: no container found");
          return t;
        },
        getNamespace: function getNamespace(e) {
          return e && e.dataset ? e.dataset[this.dataNamespace] : e ? e.getAttribute("data-" + this.dataNamespace) : null;
        },
        putContainer: function putContainer(e) {
          e.style.visibility = "hidden", this.getWrapper().appendChild(e);
        },
        parseContainer: function parseContainer(e) {
          return e.querySelector("." + this.containerClass);
        }
      };
      e.exports = i;
    }, function (e, t, i) {
      var n = i(5),
          r = i(10),
          s = {
        ignoreClassLink: "no-barba-prefetch",
        init: function init() {
          if (!window.history.pushState) return !1;
          document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), document.body.addEventListener("touchstart", this.onLinkEnter.bind(this));
        },
        onLinkEnter: function onLinkEnter(e) {
          for (var t = e.target; t && !r.getHref(t);) {
            t = t.parentNode;
          }

          if (t && !t.classList.contains(this.ignoreClassLink)) {
            var i = r.getHref(t);

            if (r.preventCheck(e, t) && !r.Cache.get(i)) {
              var s = n.xhr(i);
              r.Cache.set(i, s);
            }
          }
        }
      };
      e.exports = s;
    }]);
  }, e.exports = n();
}, function (e, t) {
  !function (e, t) {
    "use strict";

    var i = e.jQuery || e.Zepto,
        n = 0,
        r = !1;

    function s(t, n, s, o, a) {
      var l = 0,
          u = -1,
          c = -1,
          d = !1;

      function h() {
        var r, l, h, v;
        d = e.devicePixelRatio > 1, s = f(s), n.delay >= 0 && setTimeout(function () {
          p(!0);
        }, n.delay), (n.delay < 0 || n.combined) && (o.e = (r = n.throttle, l = function l(e) {
          "resize" === e.type && (u = c = -1), p(e.all);
        }, v = 0, function (e, i) {
          var s = +new Date() - v;

          function o() {
            v = +new Date(), l.call(t, e);
          }

          h && clearTimeout(h), s > r || !n.enableThrottle || i ? o() : h = setTimeout(o, r - s);
        }), o.a = function (e) {
          e = f(e), s.push.apply(s, e);
        }, o.g = function () {
          return s = i(s).filter(function () {
            return !i(this).data(n.loadedName);
          });
        }, o.f = function (e) {
          for (var t = 0; t < e.length; t++) {
            var i = s.filter(function () {
              return this === e[t];
            });
            i.length && p(!1, i);
          }
        }, p(), i(n.appendScroll).on("scroll." + a + " resize." + a, o.e));
      }

      function f(e) {
        for (var r = n.defaultImage, s = n.placeholder, o = n.imageBase, a = n.srcsetAttribute, l = n.loaderAttribute, u = n._f || {}, c = 0, d = (e = i(e).filter(function () {
          var e = i(this),
              t = m(this);
          return !e.data(n.handledName) && (e.attr(n.attribute) || e.attr(a) || e.attr(l) || void 0 !== u[t]);
        }).data("plugin_" + n.name, t)).length; c < d; c++) {
          var h = i(e[c]),
              f = m(e[c]),
              p = h.attr(n.imageBaseAttribute) || o;
          "img" === f && p && h.attr(a) && h.attr(a, y(h.attr(a), p)), void 0 === u[f] || h.attr(l) || h.attr(l, u[f]), "img" === f && r && !h.attr("src") ? h.attr("src", r) : "img" === f || !s || h.css("background-image") && "none" !== h.css("background-image") || h.css("background-image", "url('" + s + "')");
        }

        return e;
      }

      function p(e, r) {
        if (s.length) {
          for (var o = r || s, a = !1, l = n.imageBase || "", u = n.srcsetAttribute, c = n.handledName, d = 0; d < o.length; d++) {
            if (e || r || g(o[d])) {
              var h = i(o[d]),
                  f = m(o[d]),
                  p = h.attr(n.attribute),
                  y = h.attr(n.imageBaseAttribute) || l,
                  b = h.attr(n.loaderAttribute);
              h.data(c) || n.visibleOnly && !h.is(":visible") || !((p || h.attr(u)) && ("img" === f && (y + p !== h.attr("src") || h.attr(u) !== h.attr("srcset")) || "img" !== f && y + p !== h.css("background-image")) || b) || (a = !0, h.data(c, !0), v(h, f, y, b));
            }
          }

          a && (s = i(s).filter(function () {
            return !i(this).data(c);
          }));
        } else n.autoDestroy && t.destroy();
      }

      function v(e, t, r, s) {
        ++l;

        var _o = function o() {
          w("onError", e), b(), _o = i.noop;
        };

        w("beforeLoad", e);
        var a = n.attribute,
            u = n.srcsetAttribute,
            c = n.sizesAttribute,
            h = n.retinaAttribute,
            f = n.removeAttribute,
            p = n.loadedName,
            v = e.attr(h);

        if (s) {
          var _g = function g() {
            f && e.removeAttr(n.loaderAttribute), e.data(p, !0), w("afterLoad", e), setTimeout(b, 1), _g = i.noop;
          };

          e.off("error").one("error", _o).one("load", _g), w(s, e, function (t) {
            t ? (e.off("load"), _g()) : (e.off("error"), _o());
          }) || e.trigger("error");
        } else {
          var m = i(new Image());
          m.one("error", _o).one("load", function () {
            e.hide(), "img" === t ? e.attr("sizes", m.attr("sizes")).attr("srcset", m.attr("srcset")).attr("src", m.attr("src")) : e.css("background-image", "url('" + m.attr("src") + "')"), e[n.effect](n.effectTime), f && (e.removeAttr(a + " " + u + " " + h + " " + n.imageBaseAttribute), "sizes" !== c && e.removeAttr(c)), e.data(p, !0), w("afterLoad", e), m.remove(), b();
          });
          var y = (d && v ? v : e.attr(a)) || "";
          m.attr("sizes", e.attr(c)).attr("srcset", e.attr(u)).attr("src", y ? r + y : null), m.complete && m.trigger("load");
        }
      }

      function g(t) {
        var r = t.getBoundingClientRect(),
            s = n.scrollDirection,
            o = n.threshold,
            a = (c >= 0 ? c : c = i(e).height()) + o > r.top && -o < r.bottom,
            l = (u >= 0 ? u : u = i(e).width()) + o > r.left && -o < r.right;
        return "vertical" === s ? a : ("horizontal" === s || a) && l;
      }

      function m(e) {
        return e.tagName.toLowerCase();
      }

      function y(e, t) {
        if (t) {
          var i = e.split(",");
          e = "";

          for (var n = 0, r = i.length; n < r; n++) {
            e += t + i[n].trim() + (n !== r - 1 ? "," : "");
          }
        }

        return e;
      }

      function b() {
        --l, s.length || l || w("onFinishedAll");
      }

      function w(e, i, r) {
        return !!(e = n[e]) && (e.apply(t, [].slice.call(arguments, 1)), !0);
      }

      "event" === n.bind || r ? h() : i(e).on("load." + a, h);
    }

    function o(t, r) {
      var o = this,
          a = i.extend({}, o.config, r),
          l = {},
          u = a.name + "-" + ++n;
      return o.config = function (e, t) {
        return void 0 === t ? a[e] : (a[e] = t, o);
      }, o.addItems = function (e) {
        return l.a && l.a("string" === i.type(e) ? i(e) : e), o;
      }, o.getItems = function () {
        return l.g ? l.g() : {};
      }, o.update = function (e) {
        return l.e && l.e({}, !e), o;
      }, o.force = function (e) {
        return l.f && l.f("string" === i.type(e) ? i(e) : e), o;
      }, o.loadAll = function () {
        return l.e && l.e({
          all: !0
        }, !0), o;
      }, o.destroy = function () {
        i(a.appendScroll).off("." + u, l.e), i(e).off("." + u), l = {};
      }, s(o, a, t, l, u), a.chainable ? t : o;
    }

    i.fn.Lazy = i.fn.lazy = function (e) {
      return new o(this, e);
    }, i.Lazy = i.lazy = function (e, t, n) {
      if (i.isFunction(t) && (n = t, t = []), i.isFunction(n)) {
        e = i.isArray(e) ? e : [e], t = i.isArray(t) ? t : [t];

        for (var r = o.prototype.config, s = r._f || (r._f = {}), a = 0, l = e.length; a < l; a++) {
          (void 0 === r[e[a]] || i.isFunction(r[e[a]])) && (r[e[a]] = n);
        }

        for (var u = 0, c = t.length; u < c; u++) {
          s[t[u]] = e[0];
        }
      }
    }, o.prototype.config = {
      name: "lazy",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: e,
      scrollDirection: "both",
      imageBase: null,
      defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: void 0,
      afterLoad: void 0,
      onError: void 0,
      onFinishedAll: void 0
    }, i(e).on("load", function () {
      r = !0;
    });
  }(window);
}, function (e, t, i) {
  var n = i(4),
      r = i(1);

  e.exports = function (e, t, i) {
    var s = !0,
        o = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return r(i) && (s = "leading" in i ? !!i.leading : s, o = "trailing" in i ? !!i.trailing : o), n(e, t, {
      leading: s,
      maxWait: t,
      trailing: o
    });
  };
}, function (e, t, i) {
  e.exports = function () {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    function t(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function i(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function n(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }

    var r = Date.now();

    function s() {
      var e = {},
          t = !0,
          i = 0,
          n = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);

      for (var r = function r(i) {
        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = s(!0, e[n], i[n]) : e[n] = i[n]);
        }
      }; i < n; i++) {
        var o = arguments[i];
        r(o);
      }

      return e;
    }

    function o(e, t) {
      if ((E(e) || e === window || e === document) && (e = [e]), k(e) || L(e) || (e = [e]), 0 != P(e)) if (k(e) && !L(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++) {
        ;
      } else if (L(e)) for (var r in e) {
        if (M(e, r) && !1 === t.call(e[r], e[r], r, e)) break;
      }
    }

    function a(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          n = e[r] = e[r] || [],
          s = {
        all: n,
        evt: null,
        found: null
      };
      return t && i && P(n) > 0 && o(n, function (e, n) {
        if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1;
      }), s;
    }

    function l(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = t.onElement,
          n = t.withCallback,
          r = t.avoidDuplicate,
          s = void 0 === r || r,
          l = t.once,
          u = void 0 !== l && l,
          c = t.useCapture,
          d = void 0 !== c && c,
          h = arguments.length > 2 ? arguments[2] : void 0,
          f = i || [];

      function p(e) {
        S(n) && n.call(h, e, this), u && p.destroy();
      }

      return C(f) && (f = document.querySelectorAll(f)), p.destroy = function () {
        o(f, function (t) {
          var i = a(t, e, p);
          i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, p, d);
        });
      }, o(f, function (t) {
        var i = a(t, e, p);
        (t.addEventListener && s && !i.found || !s) && (t.addEventListener(e, p, d), i.all.push({
          eventName: e,
          fn: p
        }));
      }), p;
    }

    function u(e, t) {
      o(t.split(" "), function (t) {
        return e.classList.add(t);
      });
    }

    function c(e, t) {
      o(t.split(" "), function (t) {
        return e.classList.remove(t);
      });
    }

    function d(e, t) {
      return e.classList.contains(t);
    }

    function h(e, t) {
      for (; e !== document.body;) {
        if (!(e = e.parentElement)) return !1;
        if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
      }
    }

    function f(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!e || "" === t) return !1;
      if ("none" == t) return S(i) && i(), !1;
      var n = b(),
          r = t.split(" ");
      o(r, function (t) {
        u(e, "g" + t);
      }), l(n, {
        onElement: e,
        avoidDuplicate: !1,
        once: !0,
        withCallback: function withCallback(e, t) {
          o(r, function (e) {
            c(t, "g" + e);
          }), S(i) && i();
        }
      });
    }

    function p(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
      e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }

    function v(e) {
      e.style.display = "block";
    }

    function g(e) {
      e.style.display = "none";
    }

    function m(e) {
      var t = document.createDocumentFragment(),
          i = document.createElement("div");

      for (i.innerHTML = e; i.firstChild;) {
        t.appendChild(i.firstChild);
      }

      return t;
    }

    function y() {
      return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
    }

    function b() {
      var e,
          t = document.createElement("fakeelement"),
          i = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd"
      };

      for (e in i) {
        if (void 0 !== t.style[e]) return i[e];
      }
    }

    function w(e, t, i, n) {
      if (e()) t();else {
        var r;
        i || (i = 100);
        var s = setInterval(function () {
          e() && (clearInterval(s), r && clearTimeout(r), t());
        }, i);
        n && (r = setTimeout(function () {
          clearInterval(s);
        }, n));
      }
    }

    function x(e, t, i) {
      if (O(e)) console.error("Inject assets error");else if (S(t) && (i = t, t = !1), C(t) && t in window) S(i) && i();else {
        var n;

        if (-1 !== e.indexOf(".css")) {
          if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (S(i) && i());
          var r = document.getElementsByTagName("head")[0],
              s = r.querySelectorAll('link[rel="stylesheet"]'),
              o = document.createElement("link");
          return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", s ? r.insertBefore(o, s[0]) : r.appendChild(o), void (S(i) && i());
        }

        if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
          if (S(i)) {
            if (C(t)) return w(function () {
              return void 0 !== window[t];
            }, function () {
              i();
            }), !1;
            i();
          }
        } else {
          var a = document.createElement("script");
          a.type = "text/javascript", a.src = e, a.onload = function () {
            if (S(i)) {
              if (C(t)) return w(function () {
                return void 0 !== window[t];
              }, function () {
                i();
              }), !1;
              i();
            }
          }, document.body.appendChild(a);
        }
      }
    }

    function T() {
      return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }

    function S(e) {
      return "function" == typeof e;
    }

    function C(e) {
      return "string" == typeof e;
    }

    function E(e) {
      return !(!e || !e.nodeType || 1 != e.nodeType);
    }

    function A(e) {
      return Array.isArray(e);
    }

    function k(e) {
      return e && e.length && isFinite(e.length);
    }

    function L(t) {
      return "object" === e(t) && null != t && !S(t) && !A(t);
    }

    function O(e) {
      return null == e;
    }

    function M(e, t) {
      return null !== e && hasOwnProperty.call(e, t);
    }

    function P(e) {
      if (L(e)) {
        if (e.keys) return e.keys().length;
        var t = 0;

        for (var i in e) {
          M(e, i) && t++;
        }

        return t;
      }

      return e.length;
    }

    function I(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }

    function D() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
      if (!t.length) return !1;
      if (1 == t.length) return t[0];
      "string" == typeof e && (e = parseInt(e));
      var i = e < 0 ? 1 : e + 1;
      i > t.length && (i = "1");
      var n = [];
      o(t, function (e) {
        n.push(e.getAttribute("data-taborder"));
      });
      var r = n.filter(function (e) {
        return e >= parseInt(i);
      }),
          s = r.sort()[0];
      return document.querySelector('.gbtn[data-taborder="'.concat(s, '"]'));
    }

    function j(e) {
      if (e.events.hasOwnProperty("keyboard")) return !1;
      e.events.keyboard = l("keydown", {
        onElement: window,
        withCallback: function withCallback(t, i) {
          var n = (t = t || window.event).keyCode;

          if (9 == n) {
            var r = document.querySelector(".gbtn.focused");

            if (!r) {
              var s = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
              if ("input" == s || "textarea" == s || "button" == s) return;
            }

            t.preventDefault();
            var o = document.querySelectorAll(".gbtn[data-taborder]");
            if (!o || o.length <= 0) return;

            if (!r) {
              var a = D();
              return void (a && (a.focus(), u(a, "focused")));
            }

            var l = D(r.getAttribute("data-taborder"));
            c(r, "focused"), l && (l.focus(), u(l, "focused"));
          }

          39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
        }
      });
    }

    function N(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }

    var z = function () {
      function e(i) {
        t(this, e), this.handlers = [], this.el = i;
      }

      return n(e, [{
        key: "add",
        value: function value(e) {
          this.handlers.push(e);
        }
      }, {
        key: "del",
        value: function value(e) {
          e || (this.handlers = []);

          for (var t = this.handlers.length; t >= 0; t--) {
            this.handlers[t] === e && this.handlers.splice(t, 1);
          }
        }
      }, {
        key: "dispatch",
        value: function value() {
          for (var e = 0, t = this.handlers.length; e < t; e++) {
            var i = this.handlers[e];
            "function" == typeof i && i.apply(this.el, arguments);
          }
        }
      }]), e;
    }();

    function _(e, t) {
      var i = new z(e);
      return i.add(t), i;
    }

    var q = function () {
      function e(i, n) {
        t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
          x: null,
          y: null
        }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;

        var r = function r() {};

        this.rotate = _(this.element, n.rotate || r), this.touchStart = _(this.element, n.touchStart || r), this.multipointStart = _(this.element, n.multipointStart || r), this.multipointEnd = _(this.element, n.multipointEnd || r), this.pinch = _(this.element, n.pinch || r), this.swipe = _(this.element, n.swipe || r), this.tap = _(this.element, n.tap || r), this.doubleTap = _(this.element, n.doubleTap || r), this.longTap = _(this.element, n.longTap || r), this.singleTap = _(this.element, n.singleTap || r), this.pressMove = _(this.element, n.pressMove || r), this.twoFingerPressMove = _(this.element, n.twoFingerPressMove || r), this.touchMove = _(this.element, n.touchMove || r), this.touchEnd = _(this.element, n.touchEnd || r), this.touchCancel = _(this.element, n.touchCancel || r), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
          x: null,
          y: null
        };
      }

      return n(e, [{
        key: "start",
        value: function value(e) {
          if (e.touches) {
            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
            var t = this.preV;

            if (e.touches.length > 1) {
              this._cancelLongTap(), this._cancelSingleTap();
              var i = {
                x: e.touches[1].pageX - this.x1,
                y: e.touches[1].pageY - this.y1
              };
              t.x = i.x, t.y = i.y, this.pinchStartLen = N(t), this.multipointStart.dispatch(e, this.element);
            }

            this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
              this.longTap.dispatch(e, this.element), this._preventTap = !0;
            }.bind(this), 750);
          }
        }
      }, {
        key: "move",
        value: function value(e) {
          if (e.touches) {
            var t = this.preV,
                i = e.touches.length,
                n = e.touches[0].pageX,
                r = e.touches[0].pageY;

            if (this.isDoubleTap = !1, i > 1) {
              var s = e.touches[1].pageX,
                  o = e.touches[1].pageY,
                  a = {
                x: e.touches[1].pageX - n,
                y: e.touches[1].pageY - r
              };
              null !== t.x && (this.pinchStartLen > 0 && (e.zoom = N(a) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = function (e, t) {
                var i = function (e, t) {
                  var i = N(e) * N(t);
                  if (0 === i) return 0;

                  var n = function (e, t) {
                    return e.x * t.x + e.y * t.y;
                  }(e, t) / i;

                  return n > 1 && (n = 1), Math.acos(n);
                }(e, t);

                return function (e, t) {
                  return e.x * t.y - t.x * e.y;
                }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
              }(a, t), this.rotate.dispatch(e, this.element)), t.x = a.x, t.y = a.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + s - this.sx2) / 2, e.deltaY = (r - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = s, this.sy2 = o;
            } else {
              if (null !== this.x2) {
                e.deltaX = n - this.x2, e.deltaY = r - this.y2;
                var l = Math.abs(this.x1 - this.x2),
                    u = Math.abs(this.y1 - this.y2);
                (l > 10 || u > 10) && (this._preventTap = !0);
              } else e.deltaX = 0, e.deltaY = 0;

              this.pressMove.dispatch(e, this.element);
            }

            this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = r, i > 1 && e.preventDefault();
          }
        }
      }, {
        key: "end",
        value: function value(e) {
          if (e.changedTouches) {
            this._cancelLongTap();

            var t = this;
            e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function () {
              t.swipe.dispatch(e, t.element);
            }, 0)) : (this.tapTimeout = setTimeout(function () {
              t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
            }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function () {
              t.singleTap.dispatch(e, t.element);
            }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
          }
        }
      }, {
        key: "cancelAll",
        value: function value() {
          this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
        }
      }, {
        key: "cancel",
        value: function value(e) {
          this.cancelAll(), this.touchCancel.dispatch(e, this.element);
        }
      }, {
        key: "_cancelLongTap",
        value: function value() {
          clearTimeout(this.longTapTimeout);
        }
      }, {
        key: "_cancelSingleTap",
        value: function value() {
          clearTimeout(this.singleTapTimeout);
        }
      }, {
        key: "_swipeDirection",
        value: function value(e, t, i, n) {
          return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
        }
      }, {
        key: "on",
        value: function value(e, t) {
          this[e] && this[e].add(t);
        }
      }, {
        key: "off",
        value: function value(e, t) {
          this[e] && this[e].del(t);
        }
      }, {
        key: "destroy",
        value: function value() {
          return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
        }
      }]), e;
    }();

    function B(e) {
      var t = function () {
        var e,
            t = document.createElement("fakeelement"),
            i = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };

        for (e in i) {
          if (void 0 !== t.style[e]) return i[e];
        }
      }(),
          i = d(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
          n = e.querySelector(".gslide-description");

      u(i, "greset"), p(i, "translate3d(0, 0, 0)"), l(t, {
        onElement: i,
        once: !0,
        withCallback: function withCallback(e, t) {
          c(i, "greset");
        }
      }), i.style.opacity = "", n && (n.style.opacity = "");
    }

    function H(e) {
      if (e.events.hasOwnProperty("touch")) return !1;
      var t,
          i,
          n,
          r = y(),
          s = r.width,
          o = r.height,
          a = !1,
          l = null,
          f = null,
          v = null,
          g = !1,
          m = 1,
          b = 1,
          w = !1,
          x = !1,
          T = null,
          S = null,
          C = null,
          E = null,
          A = 0,
          k = 0,
          L = !1,
          O = !1,
          M = {},
          P = {},
          I = 0,
          D = 0,
          j = document.getElementById("glightbox-slider"),
          N = document.querySelector(".goverlay"),
          z = new q(j, {
        touchStart: function touchStart(t) {
          if (a = !0, (d(t.targetTouches[0].target, "ginner-container") || h(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (a = !1), h(t.targetTouches[0].target, ".gslide-inline") && !d(t.targetTouches[0].target.parentNode, "gslide-inline") && (a = !1), a) {
            if (P = t.targetTouches[0], M.pageX = t.targetTouches[0].pageX, M.pageY = t.targetTouches[0].pageY, I = t.targetTouches[0].clientX, D = t.targetTouches[0].clientY, l = e.activeSlide, f = l.querySelector(".gslide-media"), n = l.querySelector(".gslide-inline"), v = null, d(f, "gslide-image") && (v = f.querySelector("img")), c(N, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
            t.preventDefault();
          }
        },
        touchMove: function touchMove(r) {
          if (a && (P = r.targetTouches[0], !w && !x)) {
            if (n && n.offsetHeight > o) {
              var l = M.pageX - P.pageX;
              if (Math.abs(l) <= 13) return !1;
            }

            g = !0;
            var u,
                c = r.targetTouches[0].clientX,
                d = r.targetTouches[0].clientY,
                h = I - c,
                m = D - d;
            if (Math.abs(h) > Math.abs(m) ? (L = !1, O = !0) : (O = !1, L = !0), t = P.pageX - M.pageX, A = 100 * t / s, i = P.pageY - M.pageY, k = 100 * i / o, L && v && (u = 1 - Math.abs(i) / o, N.style.opacity = u, e.settings.touchFollowAxis && (A = 0)), O && (u = 1 - Math.abs(t) / s, f.style.opacity = u, e.settings.touchFollowAxis && (k = 0)), !v) return p(f, "translate3d(".concat(A, "%, 0, 0)"));
            p(f, "translate3d(".concat(A, "%, ").concat(k, "%, 0)"));
          }
        },
        touchEnd: function touchEnd() {
          if (a) {
            if (g = !1, x || w) return C = T, void (E = S);
            var t = Math.abs(parseInt(k)),
                i = Math.abs(parseInt(A));
            if (!(t > 29 && v)) return t < 29 && i < 25 ? (u(N, "greset"), N.style.opacity = 1, B(f)) : void 0;
            e.close();
          }
        },
        multipointEnd: function multipointEnd() {
          setTimeout(function () {
            w = !1;
          }, 50);
        },
        multipointStart: function multipointStart() {
          w = !0, m = b || 1;
        },
        pinch: function pinch(e) {
          if (!v || g) return !1;
          w = !0, v.scaleX = v.scaleY = m * e.zoom;
          var t = m * e.zoom;
          if (x = !0, t <= 1) return x = !1, t = 1, E = null, C = null, T = null, S = null, void v.setAttribute("style", "");
          t > 4.5 && (t = 4.5), v.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), b = t;
        },
        pressMove: function pressMove(e) {
          if (x && !w) {
            var t = P.pageX - M.pageX,
                i = P.pageY - M.pageY;
            C && (t += C), E && (i += E), T = t, S = i;
            var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
            b && (n += " scale3d(".concat(b, ", ").concat(b, ", 1)")), p(v, n);
          }
        },
        swipe: function swipe(t) {
          if (!x) if (w) w = !1;else {
            if ("Left" == t.direction) {
              if (e.index == e.elements.length - 1) return B(f);
              e.nextSlide();
            }

            if ("Right" == t.direction) {
              if (0 == e.index) return B(f);
              e.prevSlide();
            }
          }
        }
      });
      e.events.touch = z;
    }

    var R = function () {
      function e(i, n) {
        var r = this,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (t(this, e), this.img = i, this.slide = n, this.onclose = s, this.img.setZoomEvents) return !1;
        this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function (e) {
          return r.dragStart(e);
        }, !1), this.img.addEventListener("mouseup", function (e) {
          return r.dragEnd(e);
        }, !1), this.img.addEventListener("mousemove", function (e) {
          return r.drag(e);
        }, !1), this.img.addEventListener("click", function (e) {
          return r.slide.classList.contains("dragging-nav") ? (r.zoomOut(), !1) : r.zoomedIn ? void (r.zoomedIn && !r.dragging && r.zoomOut()) : r.zoomIn();
        }, !1), this.img.setZoomEvents = !0;
      }

      return n(e, [{
        key: "zoomIn",
        value: function value() {
          var e = this.widowWidth();

          if (!(this.zoomedIn || e <= 768)) {
            var t = this.img;

            if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
              var i = e / 2 - t.naturalWidth / 2;
              this.setTranslate(this.img.parentNode, i, 0);
            }

            this.slide.classList.add("zoomed"), this.zoomedIn = !0;
          }
        }
      }, {
        key: "zoomOut",
        value: function value() {
          this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
        }
      }, {
        key: "dragStart",
        value: function value(e) {
          e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
        }
      }, {
        key: "dragEnd",
        value: function value(e) {
          var t = this;
          e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function () {
            t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
          }, 100);
        }
      }, {
        key: "drag",
        value: function value(e) {
          this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
        }
      }, {
        key: "onMove",
        value: function value(e) {
          if (this.zoomedIn) {
            var t = e.clientX - this.img.naturalWidth / 2,
                i = e.clientY - this.img.naturalHeight / 2;
            this.setTranslate(this.img, t, i);
          }
        }
      }, {
        key: "setTranslate",
        value: function value(e, t, i) {
          e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
        }
      }, {
        key: "widowWidth",
        value: function value() {
          return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
      }]), e;
    }(),
        W = function () {
      function e() {
        var i = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e);
        var r = n.dragEl,
            s = n.toleranceX,
            o = void 0 === s ? 40 : s,
            a = n.toleranceY,
            l = void 0 === a ? 65 : a,
            u = n.slide,
            c = void 0 === u ? null : u,
            d = n.instance,
            h = void 0 === d ? null : d;
        this.el = r, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = l, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = c, this.instance = h, this.el.addEventListener("mousedown", function (e) {
          return i.dragStart(e);
        }, !1), this.el.addEventListener("mouseup", function (e) {
          return i.dragEnd(e);
        }, !1), this.el.addEventListener("mousemove", function (e) {
          return i.drag(e);
        }, !1);
      }

      return n(e, [{
        key: "dragStart",
        value: function value(e) {
          if (this.slide.classList.contains("zoomed")) this.active = !1;else {
            "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
            var t = e.target.nodeName.toLowerCase();
            e.target.classList.contains("nodrag") || h(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && h(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = h(e.target, ".ginner-container")));
          }
        }
      }, {
        key: "dragEnd",
        value: function value(e) {
          var t = this;
          e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function () {
            t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
          }, 100);
        }
      }, {
        key: "drag",
        value: function value(e) {
          if (this.active) {
            e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
            var t = Math.abs(this.currentX),
                i = Math.abs(this.currentY);

            if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
              this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
              var n = this.shouldChange();
              if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
            }

            if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
              this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
              var r = this.shouldClose();
              return !this.instance.settings.dragAutoSnap && r && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && r && this.instance.close());
            }
          }
        }
      }, {
        key: "shouldChange",
        value: function value() {
          var e = !1;

          if (Math.abs(this.currentX) >= this.toleranceX) {
            var t = this.currentX > 0 ? "right" : "left";
            ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
          }

          return e;
        }
      }, {
        key: "shouldClose",
        value: function value() {
          var e = !1;
          return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
        }
      }, {
        key: "setTranslate",
        value: function value(e, t, i) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
        }
      }]), e;
    }();

    function F(e, t, i, n) {
      var r = e.querySelector(".gslide-media"),
          s = new Image(),
          o = "gSlideTitle_" + i,
          a = "gSlideDesc_" + i;
      s.addEventListener("load", function () {
        S(n) && n();
      }, !1), s.src = t.href, s.alt = "", "" !== t.title && s.setAttribute("aria-labelledby", o), "" !== t.description && s.setAttribute("aria-describedby", a), r.insertBefore(s, r.firstChild);
    }

    function $(e, t, i, n) {
      var r = this,
          s = e.querySelector(".ginner-container"),
          o = "gvideo" + i,
          a = e.querySelector(".gslide-media"),
          l = this.getAllPlayers();
      u(s, "gvideo-container"), a.insertBefore(m('<div class="gvideo-wrapper"></div>'), a.firstChild);
      var c = e.querySelector(".gvideo-wrapper");
      x(this.settings.plyr.css, "Plyr");
      var d = t.href,
          h = location.protocol.replace(":", ""),
          f = "",
          p = "",
          v = !1;
      "file" == h && (h = "http"), a.style.maxWidth = t.width, x(this.settings.plyr.js, "Plyr", function () {
        if (d.match(/vimeo\.com\/([0-9]*)/)) {
          var s = /vimeo.*\/(\d+)/i.exec(d);
          f = "vimeo", p = s[1];
        }

        if (d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          var a = function (e) {
            return void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? e[2].split(/[^0-9a-z_\-]/i)[0] : e;
          }(d);

          f = "youtube", p = a;
        }

        if (null !== d.match(/\.(mp4|ogg|webm|mov)$/)) {
          f = "local";
          var h = '<video id="' + o + '" ';
          h += 'style="background:#000; max-width: '.concat(t.width, ';" '), h += 'preload="metadata" ', h += 'x-webkit-airplay="allow" ', h += 'webkit-playsinline="" ', h += "controls ", h += 'class="gvideo-local">';
          var g = d.toLowerCase().split(".").pop(),
              y = {
            mp4: "",
            ogg: "",
            webm: ""
          };

          for (var b in y[g = "mov" == g ? "mp4" : g] = d, y) {
            if (y.hasOwnProperty(b)) {
              var x = y[b];
              t.hasOwnProperty(b) && (x = t[b]), "" !== x && (h += '<source src="'.concat(x, '" type="video/').concat(b, '">'));
            }
          }

          v = m(h += "</video>");
        }

        var T = v || m('<div id="'.concat(o, '" data-plyr-provider="').concat(f, '" data-plyr-embed-id="').concat(p, '"></div>'));
        u(c, "".concat(f, "-video gvideo")), c.appendChild(T), c.setAttribute("data-id", o), c.setAttribute("data-index", i);
        var C = M(r.settings.plyr, "config") ? r.settings.plyr.config : {},
            E = new Plyr("#" + o, C);
        E.on("ready", function (e) {
          var t = e.detail.plyr;
          l[o] = t, S(n) && n();
        }), w(function () {
          return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
        }, function () {
          r.resize(e);
        }), E.on("enterfullscreen", G), E.on("exitfullscreen", G);
      });
    }

    function G(e) {
      var t = h(e.target, ".gslide-media");
      "enterfullscreen" == e.type && u(t, "fullscreen"), "exitfullscreen" == e.type && c(t, "fullscreen");
    }

    function Y(e, t, i, n) {
      var r,
          s = this,
          o = e.querySelector(".gslide-media"),
          a = !(!M(t, "href") || !t.href) && t.href.split("#").pop().trim(),
          c = !(!M(t, "content") || !t.content) && t.content;

      if (c && (C(c) && (r = m('<div class="ginlined-content">'.concat(c, "</div>"))), E(c))) {
        "none" == c.style.display && (c.style.display = "block");
        var d = document.createElement("div");
        d.className = "ginlined-content", d.appendChild(c), r = d;
      }

      if (a) {
        var h = document.getElementById(a);
        if (!h) return !1;
        var f = h.cloneNode(!0);
        f.style.height = t.height, f.style.maxWidth = t.width, u(f, "ginlined-content"), r = f;
      }

      if (!r) return console.error("Unable to append inline slide content", t), !1;
      o.style.height = t.height, o.style.width = t.width, o.appendChild(r), this.events["inlineclose" + a] = l("click", {
        onElement: o.querySelectorAll(".gtrigger-close"),
        withCallback: function withCallback(e) {
          e.preventDefault(), s.close();
        }
      }), S(n) && n();
    }

    function V(e, t, i, n) {
      var r = e.querySelector(".gslide-media"),
          s = function (e) {
        var t = e.url,
            i = e.allow,
            n = e.callback,
            r = e.appendTo,
            s = document.createElement("iframe");
        return s.className = "vimeo-video gvideo", s.src = t, s.style.width = "100%", s.style.height = "100%", i && s.setAttribute("allow", i), s.onload = function () {
          u(s, "node-ready"), S(n) && n();
        }, r && r.appendChild(s), s;
      }({
        url: t.href,
        callback: n
      });

      r.parentNode.style.maxWidth = t.width, r.parentNode.style.height = t.height, r.appendChild(s);
    }

    var X = function () {
      function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e), this.defaults = {
          href: "",
          title: "",
          type: "",
          description: "",
          descPosition: "bottom",
          effect: "",
          width: "",
          height: "",
          content: !1,
          zoomable: !0,
          draggable: !0
        }, L(i) && (this.defaults = s(this.defaults, i));
      }

      return n(e, [{
        key: "sourceType",
        value: function value(e) {
          var t = e;
          return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)$/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external";
        }
      }, {
        key: "parseConfig",
        value: function value(e, t) {
          var i = this,
              n = s({
            descPosition: t.descPosition
          }, this.defaults);

          if (L(e) && !E(e)) {
            M(e, "type") || (M(e, "content") && e.content ? e.type = "inline" : M(e, "href") && (e.type = this.sourceType(e.href)));
            var r = s(n, e);
            return this.setSize(r, t), r;
          }

          var a = "",
              l = e.getAttribute("data-glightbox"),
              u = e.nodeName.toLowerCase();

          if ("a" === u && (a = e.href), "img" === u && (a = e.src), n.href = a, o(n, function (r, s) {
            M(t, s) && "width" !== s && (n[s] = t[s]);
            var o = e.dataset[s];
            O(o) || (n[s] = i.sanitizeValue(o));
          }), n.content && (n.type = "inline"), !n.type && a && (n.type = this.sourceType(a)), O(l)) {
            if (!n.title && "a" == u) {
              var c = e.title;
              O(c) || "" === c || (n.title = c);
            }

            if (!n.title && "img" == u) {
              var d = e.alt;
              O(d) || "" === d || (n.title = d);
            }
          } else {
            var h = [];
            o(n, function (e, t) {
              h.push(";\\s?" + t);
            }), h = h.join("\\s?:|"), "" !== l.trim() && o(n, function (e, t) {
              var r = l,
                  s = new RegExp("s?" + t + "s?:s?(.*?)(" + h + "s?:|$)"),
                  o = r.match(s);

              if (o && o.length && o[1]) {
                var a = o[1].trim().replace(/;\s*$/, "");
                n[t] = i.sanitizeValue(a);
              }
            });
          }

          if (n.description && "." == n.description.substring(0, 1) && document.querySelector(n.description)) n.description = document.querySelector(n.description).innerHTML;else {
            var f = e.querySelector(".glightbox-desc");
            f && (n.description = f.innerHTML);
          }
          return this.setSize(n, t), this.slideConfig = n, n;
        }
      }, {
        key: "setSize",
        value: function value(e, t) {
          var i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
              n = this.checkSize(t.height);
          return e.width = M(e, "width") && "" !== e.width ? this.checkSize(e.width) : i, e.height = M(e, "height") && "" !== e.height ? this.checkSize(e.height) : n, e;
        }
      }, {
        key: "checkSize",
        value: function value(e) {
          return I(e) ? "".concat(e, "px") : e;
        }
      }, {
        key: "sanitizeValue",
        value: function value(e) {
          return "true" !== e && "false" !== e ? e : "true" === e;
        }
      }]), e;
    }(),
        U = function () {
      function e(i, n, r) {
        t(this, e), this.element = i, this.instance = n, this.index = r;
      }

      return n(e, [{
        key: "setContent",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (d(t, "loaded")) return !1;
          var n = this.instance.settings,
              r = this.slideConfig,
              s = T();
          S(n.beforeSlideLoad) && n.beforeSlideLoad({
            index: this.index,
            slide: t,
            player: !1
          });
          var o = r.type,
              a = r.descPosition,
              l = t.querySelector(".gslide-media"),
              c = t.querySelector(".gslide-title"),
              h = t.querySelector(".gslide-desc"),
              f = t.querySelector(".gdesc-inner"),
              p = i,
              v = "gSlideTitle_" + this.index,
              g = "gSlideDesc_" + this.index;

          if (S(n.afterSlideLoad) && (p = function p() {
            S(i) && i(), n.afterSlideLoad({
              index: e.index,
              slide: t,
              player: e.instance.getSlidePlayerInstance(e.index)
            });
          }), "" == r.title && "" == r.description ? f && f.parentNode.parentNode.removeChild(f.parentNode) : (c && "" !== r.title ? (c.id = v, c.innerHTML = r.title) : c.parentNode.removeChild(c), h && "" !== r.description ? (h.id = g, s && n.moreLength > 0 ? (r.smallDescription = this.slideShortDesc(r.description, n.moreLength, n.moreText), h.innerHTML = r.smallDescription, this.descriptionEvents(h, r)) : h.innerHTML = r.description) : h.parentNode.removeChild(h), u(l.parentNode, "desc-".concat(a)), u(f.parentNode, "description-".concat(a))), u(l, "gslide-".concat(o)), u(t, "loaded"), "video" !== o) {
            if ("external" !== o) return "inline" === o ? (Y.apply(this.instance, [t, r, this.index, p]), void (n.draggable && new W({
              dragEl: t.querySelector(".gslide-inline"),
              toleranceX: n.dragToleranceX,
              toleranceY: n.dragToleranceY,
              slide: t,
              instance: this.instance
            }))) : void ("image" !== o ? S(p) && p() : F(t, r, this.index, function () {
              var i = t.querySelector("img");
              n.draggable && new W({
                dragEl: i,
                toleranceX: n.dragToleranceX,
                toleranceY: n.dragToleranceY,
                slide: t,
                instance: e.instance
              }), r.zoomable && i.naturalWidth > i.offsetWidth && (u(i, "zoomable"), new R(i, t, function () {
                e.instance.resize();
              })), S(p) && p();
            }));
            V.apply(this, [t, r, this.index, p]);
          } else $.apply(this.instance, [t, r, this.index, p]);
        }
      }, {
        key: "slideShortDesc",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
              i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = document.createElement("div");
          n.innerHTML = e;
          var r = n.innerText,
              s = i;
          if ((e = r.trim()).length <= t) return e;
          var o = e.substr(0, t - 1);
          return s ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
        }
      }, {
        key: "descriptionEvents",
        value: function value(e, t) {
          var i = this,
              n = e.querySelector(".desc-more");
          if (!n) return !1;
          l("click", {
            onElement: n,
            withCallback: function withCallback(e, n) {
              e.preventDefault();
              var r = document.body,
                  s = h(n, ".gslide-desc");
              if (!s) return !1;
              s.innerHTML = t.description, u(r, "gdesc-open");
              var o = l("click", {
                onElement: [r, h(s, ".gslide-description")],
                withCallback: function withCallback(e, n) {
                  "a" !== e.target.nodeName.toLowerCase() && (c(r, "gdesc-open"), u(r, "gdesc-closed"), s.innerHTML = t.smallDescription, i.descriptionEvents(s, t), setTimeout(function () {
                    c(r, "gdesc-closed");
                  }, 400), o.destroy());
                }
              });
            }
          });
        }
      }, {
        key: "create",
        value: function value() {
          return m(this.instance.settings.slideHTML);
        }
      }, {
        key: "getConfig",
        value: function value() {
          var e = new X(this.instance.settings.slideExtraAttributes);
          return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
        }
      }]), e;
    }(),
        Q = T(),
        K = null !== T() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        Z = document.getElementsByTagName("html")[0],
        J = {
      selector: ".glightbox",
      elements: null,
      skin: "clean",
      theme: "clean",
      closeButton: !0,
      startAt: null,
      autoplayVideos: !0,
      autofocusVideos: !0,
      descPosition: "bottom",
      width: "900px",
      height: "506px",
      videosWidth: "960px",
      beforeSlideChange: null,
      afterSlideChange: null,
      beforeSlideLoad: null,
      afterSlideLoad: null,
      slideInserted: null,
      slideRemoved: null,
      slideExtraAttributes: null,
      onOpen: null,
      onClose: null,
      loop: !1,
      zoomable: !0,
      draggable: !0,
      dragAutoSnap: !1,
      dragToleranceX: 40,
      dragToleranceY: 65,
      preload: !0,
      oneSlidePerOpen: !1,
      touchNavigation: !0,
      touchFollowAxis: !0,
      keyboardNavigation: !0,
      closeOnOutsideClick: !0,
      plugins: !1,
      plyr: {
        css: "https://cdn.plyr.io/3.6.3/plyr.css",
        js: "https://cdn.plyr.io/3.6.3/plyr.js",
        config: {
          ratio: "16:9",
          fullscreen: {
            enabled: !0,
            iosNative: !0
          },
          youtube: {
            noCookie: !0,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
          },
          vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            transparent: !1
          }
        }
      },
      openEffect: "zoom",
      closeEffect: "zoom",
      slideEffect: "slide",
      moreText: "See more",
      moreLength: 60,
      cssEfects: {
        fade: {
          "in": "fadeIn",
          out: "fadeOut"
        },
        zoom: {
          "in": "zoomIn",
          out: "zoomOut"
        },
        slide: {
          "in": "slideInRight",
          out: "slideOutLeft"
        },
        slideBack: {
          "in": "slideInLeft",
          out: "slideOutRight"
        },
        none: {
          "in": "none",
          out: "none"
        }
      },
      svg: {
        close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
        next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
        prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
      },
      slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
      lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    },
        ee = function () {
      function e() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, e), this.settings = s(J, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
      }

      return n(e, [{
        key: "init",
        value: function value() {
          var e = this,
              t = this.getSelector();
          t && (this.baseEvents = l("click", {
            onElement: t,
            withCallback: function withCallback(t, i) {
              t.preventDefault(), e.open(i);
            }
          })), this.elements = this.getElements();
        }
      }, {
        key: "open",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (0 == this.elements.length) return !1;
          this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
          var i = I(t) ? t : this.settings.startAt;

          if (E(e)) {
            var n = e.getAttribute("data-gallery");
            n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), O(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
          }

          I(i) || (i = 0), this.build(), f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade["in"]);
          var r = document.body,
              s = window.innerWidth - document.documentElement.clientWidth;

          if (s > 0) {
            var o = document.createElement("style");
            o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(s, "px}"), document.head.appendChild(o), u(r, "gscrollbar-fixer");
          }

          u(r, "glightbox-open"), u(Z, "glightbox-open"), Q && (u(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (u(this.prevButton, "glightbox-button-hidden"), u(this.nextButton, "glightbox-button-hidden")) : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), S(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && H(this), this.settings.keyboardNavigation && j(this);
        }
      }, {
        key: "openAt",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          this.open(null, e);
        }
      }, {
        key: "showSlide",
        value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          v(this.loader), this.index = parseInt(t);
          var n = this.slidesContainer.querySelector(".current");
          n && c(n, "current"), this.slideAnimateOut();
          var r = this.slidesContainer.querySelectorAll(".gslide")[t];
          if (d(r, "loaded")) this.slideAnimateIn(r, i), g(this.loader);else {
            v(this.loader);
            var s = this.elements[t],
                o = {
              index: this.index,
              slide: r,
              slideNode: r,
              slideConfig: s.slideConfig,
              slideIndex: this.index,
              trigger: s.node,
              player: null
            };
            this.trigger("slide_before_load", o), s.instance.setContent(r, function () {
              g(e.loader), e.resize(), e.slideAnimateIn(r, i), e.trigger("slide_after_load", o);
            });
          }
          this.slideDescription = r.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && d(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = r;
        }
      }, {
        key: "preloadSlide",
        value: function value(e) {
          var t = this;
          if (e < 0 || e > this.elements.length - 1) return !1;
          if (O(this.elements[e])) return !1;
          var i = this.slidesContainer.querySelectorAll(".gslide")[e];
          if (d(i, "loaded")) return !1;
          var n = this.elements[e],
              r = n.type,
              s = {
            index: e,
            slide: i,
            slideNode: i,
            slideConfig: n.slideConfig,
            slideIndex: e,
            trigger: n.node,
            player: null
          };
          this.trigger("slide_before_load", s), "video" == r || "external" == r ? setTimeout(function () {
            n.instance.setContent(i, function () {
              t.trigger("slide_after_load", s);
            });
          }, 200) : n.instance.setContent(i, function () {
            t.trigger("slide_after_load", s);
          });
        }
      }, {
        key: "prevSlide",
        value: function value() {
          this.goToSlide(this.index - 1);
        }
      }, {
        key: "nextSlide",
        value: function value() {
          this.goToSlide(this.index + 1);
        }
      }, {
        key: "goToSlide",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
          e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
        }
      }, {
        key: "insertSlide",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          t < 0 && (t = this.elements.length);
          var i = new U(e, this, t),
              n = i.getConfig(),
              r = s({}, n),
              o = i.create(),
              a = this.elements.length - 1;
          r.index = t, r.node = !1, r.instance = i, r.slideConfig = n, this.elements.splice(t, 0, r);
          var l = null,
              u = null;

          if (this.slidesContainer) {
            if (t > a) this.slidesContainer.appendChild(o);else {
              var c = this.slidesContainer.querySelectorAll(".gslide")[t];
              this.slidesContainer.insertBefore(o, c);
            }
            (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), l = this.slidesContainer.querySelectorAll(".gslide")[t], u = this.getSlidePlayerInstance(t), r.slideNode = l;
          }

          this.trigger("slide_inserted", {
            index: t,
            slide: l,
            slideNode: l,
            slideConfig: n,
            slideIndex: t,
            trigger: null,
            player: u
          }), S(this.settings.slideInserted) && this.settings.slideInserted({
            index: t,
            slide: l,
            player: u
          });
        }
      }, {
        key: "removeSlide",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
          if (e < 0 || e > this.elements.length - 1) return !1;
          var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
          t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), S(this.settings.slideRemoved) && this.settings.slideRemoved(e);
        }
      }, {
        key: "slideAnimateIn",
        value: function value(e, t) {
          var i = this,
              n = e.querySelector(".gslide-media"),
              r = e.querySelector(".gslide-description"),
              s = {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlide,
            slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
              o = {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideConfig: this.elements[this.index].slideConfig,
            slideIndex: this.index,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          };
          if (n.offsetWidth > 0 && r && (g(r), r.style.display = ""), c(e, this.effectsClasses), t) f(e, this.settings.cssEfects[this.settings.openEffect]["in"], function () {
            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
              prev: s,
              current: o
            }), S(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [s, o]);
          });else {
            var a = this.settings.slideEffect,
                l = "none" !== a ? this.settings.cssEfects[a]["in"] : a;
            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack["in"]), f(e, l, function () {
              i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                prev: s,
                current: o
              }), S(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [s, o]);
            });
          }
          setTimeout(function () {
            i.resize(e);
          }, 100), u(e, "current");
        }
      }, {
        key: "slideAnimateOut",
        value: function value() {
          if (!this.prevActiveSlide) return !1;
          var e = this.prevActiveSlide;
          c(e, this.effectsClasses), u(e, "prev");
          var t = this.settings.slideEffect,
              i = "none" !== t ? this.settings.cssEfects[t].out : t;
          this.slidePlayerPause(e), this.trigger("slide_before_change", {
            prev: {
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              slideNode: this.prevActiveSlide,
              slideIndex: this.prevActiveSlideIndex,
              slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
              trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            current: {
              index: this.index,
              slide: this.activeSlide,
              slideNode: this.activeSlide,
              slideIndex: this.index,
              slideConfig: this.elements[this.index].slideConfig,
              trigger: this.elements[this.index].node,
              player: this.getSlidePlayerInstance(this.index)
            }
          }), S(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), f(e, i, function () {
            var t = e.querySelector(".gslide-media"),
                i = e.querySelector(".gslide-description");
            t.style.transform = "", c(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), c(e, "prev");
          });
        }
      }, {
        key: "getAllPlayers",
        value: function value() {
          return this.videoPlayers;
        }
      }, {
        key: "getSlidePlayerInstance",
        value: function value(e) {
          var t = "gvideo" + e,
              i = this.getAllPlayers();
          return !(!M(i, t) || !i[t]) && i[t];
        }
      }, {
        key: "stopSlideVideo",
        value: function value(e) {
          if (E(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"));
          }

          console.log("stopSlideVideo is deprecated, use slidePlayerPause");
          var i = this.getSlidePlayerInstance(e);
          i && i.playing && i.pause();
        }
      }, {
        key: "slidePlayerPause",
        value: function value(e) {
          if (E(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"));
          }

          var i = this.getSlidePlayerInstance(e);
          i && i.playing && i.pause();
        }
      }, {
        key: "playSlideVideo",
        value: function value(e) {
          if (E(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"));
          }

          console.log("playSlideVideo is deprecated, use slidePlayerPlay");
          var i = this.getSlidePlayerInstance(e);
          i && !i.playing && i.play();
        }
      }, {
        key: "slidePlayerPlay",
        value: function value(e) {
          if (E(e)) {
            var t = e.querySelector(".gvideo-wrapper");
            t && (e = t.getAttribute("data-index"));
          }

          var i = this.getSlidePlayerInstance(e);
          i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus());
        }
      }, {
        key: "setElements",
        value: function value(e) {
          var t = this;
          this.settings.elements = !1;
          var i = [];
          e && e.length && o(e, function (e, n) {
            var r = new U(e, t, n),
                o = r.getConfig(),
                a = s({}, o);
            a.slideConfig = o, a.instance = r, a.index = n, i.push(a);
          }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function () {
            var e = m(t.settings.slideHTML);
            t.slidesContainer.appendChild(e);
          }), this.showSlide(0, !0)));
        }
      }, {
        key: "getElementIndex",
        value: function value(e) {
          var t = !1;
          return o(this.elements, function (i, n) {
            if (M(i, "node") && i.node == e) return t = n, !0;
          }), t;
        }
      }, {
        key: "getElements",
        value: function value() {
          var e = this,
              t = [];
          this.elements = this.elements ? this.elements : [], !O(this.settings.elements) && A(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function (i, n) {
            var r = new U(i, e, n),
                o = r.getConfig(),
                a = s({}, o);
            a.node = !1, a.index = n, a.instance = r, a.slideConfig = o, t.push(a);
          });
          var i = !1;
          return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, function (i, n) {
            var r = new U(i, e, n),
                o = r.getConfig(),
                a = s({}, o);
            a.node = i, a.index = n, a.instance = r, a.slideConfig = o, a.gallery = i.getAttribute("data-gallery"), t.push(a);
          }), t) : t;
        }
      }, {
        key: "getGalleryElements",
        value: function value(e, t) {
          return e.filter(function (e) {
            return e.gallery == t;
          });
        }
      }, {
        key: "getSelector",
        value: function value() {
          return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
        }
      }, {
        key: "getActiveSlide",
        value: function value() {
          return this.slidesContainer.querySelectorAll(".gslide")[this.index];
        }
      }, {
        key: "getActiveSlideIndex",
        value: function value() {
          return this.index;
        }
      }, {
        key: "getAnimationClasses",
        value: function value() {
          var e = [];

          for (var t in this.settings.cssEfects) {
            if (this.settings.cssEfects.hasOwnProperty(t)) {
              var i = this.settings.cssEfects[t];
              e.push("g".concat(i["in"])), e.push("g".concat(i.out));
            }
          }

          return e.join(" ");
        }
      }, {
        key: "build",
        value: function value() {
          var e = this;
          if (this.built) return !1;
          var t = document.body.childNodes,
              i = [];
          o(t, function (e) {
            e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
          });
          var n = M(this.settings.svg, "next") ? this.settings.svg.next : "",
              r = M(this.settings.svg, "prev") ? this.settings.svg.prev : "",
              s = M(this.settings.svg, "close") ? this.settings.svg.close : "",
              a = this.settings.lightboxHTML;
          a = m(a = (a = (a = a.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, r)).replace(/{closeSVG}/g, s)), document.body.appendChild(a);
          var c = document.getElementById("glightbox-body");
          this.modal = c;
          var f = c.querySelector(".gclose");
          this.prevButton = c.querySelector(".gprev"), this.nextButton = c.querySelector(".gnext"), this.overlay = c.querySelector(".goverlay"), this.loader = c.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, u(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && f && (this.events.close = l("click", {
            onElement: f,
            withCallback: function withCallback(t, i) {
              t.preventDefault(), e.close();
            }
          })), f && !this.settings.closeButton && f.parentNode.removeChild(f), this.nextButton && (this.events.next = l("click", {
            onElement: this.nextButton,
            withCallback: function withCallback(t, i) {
              t.preventDefault(), e.nextSlide();
            }
          })), this.prevButton && (this.events.prev = l("click", {
            onElement: this.prevButton,
            withCallback: function withCallback(t, i) {
              t.preventDefault(), e.prevSlide();
            }
          })), this.settings.closeOnOutsideClick && (this.events.outClose = l("click", {
            onElement: c,
            withCallback: function withCallback(t, i) {
              e.preventOutsideClick || d(document.body, "glightbox-mobile") || h(t.target, ".ginner-container") || h(t.target, ".gbtn") || d(t.target, "gnext") || d(t.target, "gprev") || e.close();
            }
          })), o(this.elements, function (t, i) {
            e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
          }), K && u(document.body, "glightbox-touch"), this.events.resize = l("resize", {
            onElement: window,
            withCallback: function withCallback() {
              e.resize();
            }
          }), this.built = !0;
        }
      }, {
        key: "resize",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;

          if ((e = e || this.activeSlide) && !d(e, "zoomed")) {
            var t = y(),
                i = e.querySelector(".gvideo-wrapper"),
                n = e.querySelector(".gslide-image"),
                r = this.slideDescription,
                s = t.width,
                o = t.height;

            if (s <= 768 ? u(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || n) {
              var a = !1;
              if (r && (d(r, "description-bottom") || d(r, "description-top")) && !d(r, "gabsolute") && (a = !0), n) if (s <= 768) {
                var l = n.querySelector("img");
                l.setAttribute("style", "");
              } else if (a) {
                var h = r.offsetHeight,
                    f = n.querySelector("img");
                f.setAttribute("style", "max-height: calc(100vh - ".concat(h, "px)")), r.setAttribute("style", "max-width: ".concat(f.offsetWidth, "px;"));
              }

              if (i) {
                var p = M(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";

                if (!p) {
                  var v = i.clientWidth,
                      g = i.clientHeight,
                      m = v / g;
                  p = "".concat(v / m, ":").concat(g / m);
                }

                var b = p.split(":"),
                    w = this.settings.videosWidth,
                    x = this.settings.videosWidth,
                    T = (x = I(w) || -1 !== w.indexOf("px") ? parseInt(w) : -1 !== w.indexOf("vw") ? s * parseInt(w) / 100 : -1 !== w.indexOf("vh") ? o * parseInt(w) / 100 : -1 !== w.indexOf("%") ? s * parseInt(w) / 100 : parseInt(i.clientWidth)) / (parseInt(b[0]) / parseInt(b[1]));

                if (T = Math.floor(T), a && (o -= r.offsetHeight), x > s || T > o || o < T && s > x) {
                  var S = i.offsetWidth,
                      C = i.offsetHeight,
                      E = o / C,
                      A = {
                    width: S * E,
                    height: C * E
                  };
                  i.parentNode.setAttribute("style", "max-width: ".concat(A.width, "px")), a && r.setAttribute("style", "max-width: ".concat(A.width, "px;"));
                } else i.parentNode.style.maxWidth = "".concat(x), a && r.setAttribute("style", "max-width: ".concat(x, ";"));
              }
            }
          }
        }
      }, {
        key: "reload",
        value: function value() {
          this.init();
        }
      }, {
        key: "updateNavigationClasses",
        value: function value() {
          var e = this.loop();
          c(this.nextButton, "disabled"), c(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (u(this.prevButton, "disabled"), u(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || u(this.nextButton, "disabled") : u(this.prevButton, "disabled");
        }
      }, {
        key: "loop",
        value: function value() {
          var e = M(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
          return e = M(this.settings, "loop") ? this.settings.loop : e;
        }
      }, {
        key: "close",
        value: function value() {
          var e = this;

          if (!this.lightboxOpen) {
            if (this.events) {
              for (var t in this.events) {
                this.events.hasOwnProperty(t) && this.events[t].destroy();
              }

              this.events = null;
            }

            return !1;
          }

          if (this.closing) return !1;
          this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function (e) {
            e.removeAttribute("aria-hidden");
          }), u(this.modal, "glightbox-closing"), f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), f(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
            if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
              for (var t in e.events) {
                e.events.hasOwnProperty(t) && e.events[t].destroy();
              }

              e.events = null;
            }

            var i = document.body;
            c(Z, "glightbox-open"), c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), S(e.settings.onClose) && e.settings.onClose();
            var n = document.querySelector(".gcss-styles");
            n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
        }
      }, {
        key: "on",
        value: function value(e, t) {
          var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !S(t)) throw new TypeError("Event name and callback must be defined");
          this.apiEvents.push({
            evt: e,
            once: i,
            callback: t
          });
        }
      }, {
        key: "once",
        value: function value(e, t) {
          this.on(e, t, !0);
        }
      }, {
        key: "trigger",
        value: function value(e) {
          var t = this,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = [];
          o(this.apiEvents, function (t, r) {
            var s = t.evt,
                o = t.once,
                a = t.callback;
            s == e && (a(i), o && n.push(r));
          }), n.length && o(n, function (e) {
            return t.apiEvents.splice(e, 1);
          });
        }
      }, {
        key: "clearAllEvents",
        value: function value() {
          this.apiEvents.splice(0, this.apiEvents.length);
        }
      }, {
        key: "version",
        value: function value() {
          return "3.0.8";
        }
      }]), e;
    }();

    return function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new ee(e);
      return t.init(), t;
    };
  }();
}, function (e, t, i) {
  var n, r;
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */

  !function (s, o) {
    "use strict";

    n = [i(2)], void 0 === (r = function (e) {
      return function (e, t) {
        var i = e.jQuery,
            n = e.console;

        function r(e, t) {
          for (var i in t) {
            e[i] = t[i];
          }

          return e;
        }

        var s = Array.prototype.slice;

        function o(e, t, a) {
          if (!(this instanceof o)) return new o(e, t, a);
          var l,
              u = e;
          ("string" == typeof e && (u = document.querySelectorAll(e)), u) ? (this.elements = (l = u, Array.isArray(l) ? l : "object" == _typeof(l) && "number" == typeof l.length ? s.call(l) : [l]), this.options = r({}, this.options), "function" == typeof t ? a = t : r(this.options, t), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred()), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (u || e));
        }

        o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
          this.images = [], this.elements.forEach(this.addElementImages, this);
        }, o.prototype.addElementImages = function (e) {
          "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
          var t = e.nodeType;

          if (t && a[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
              var r = i[n];
              this.addImage(r);
            }

            if ("string" == typeof this.options.background) {
              var s = e.querySelectorAll(this.options.background);

              for (n = 0; n < s.length; n++) {
                var o = s[n];
                this.addElementBackgroundImages(o);
              }
            }
          }
        };
        var a = {
          1: !0,
          9: !0,
          11: !0
        };

        function l(e) {
          this.img = e;
        }

        function u(e, t) {
          this.url = e, this.element = t, this.img = new Image();
        }

        return o.prototype.addElementBackgroundImages = function (e) {
          var t = getComputedStyle(e);
          if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var r = n && n[2];
            r && this.addBackground(r, e), n = i.exec(t.backgroundImage);
          }
        }, o.prototype.addImage = function (e) {
          var t = new l(e);
          this.images.push(t);
        }, o.prototype.addBackground = function (e, t) {
          var i = new u(e, t);
          this.images.push(i);
        }, o.prototype.check = function () {
          var e = this;

          function t(t, i, n) {
            setTimeout(function () {
              e.progress(t, i, n);
            });
          }

          this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
            e.once("progress", t), e.check();
          }) : this.complete();
        }, o.prototype.progress = function (e, t, i) {
          this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, e, t);
        }, o.prototype.complete = function () {
          var e = this.hasAnyBroken ? "fail" : "done";

          if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this);
          }
        }, l.prototype = Object.create(t.prototype), l.prototype.check = function () {
          this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
        }, l.prototype.getIsImageComplete = function () {
          return this.img.complete && this.img.naturalWidth;
        }, l.prototype.confirm = function (e, t) {
          this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
        }, l.prototype.handleEvent = function (e) {
          var t = "on" + e.type;
          this[t] && this[t](e);
        }, l.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindEvents();
        }, l.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }, l.prototype.unbindEvents = function () {
          this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, u.prototype = Object.create(l.prototype), u.prototype.check = function () {
          this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
        }, u.prototype.unbindEvents = function () {
          this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, u.prototype.confirm = function (e, t) {
          this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
        }, o.makeJQueryPlugin = function (t) {
          (t = t || e.jQuery) && ((i = t).fn.imagesLoaded = function (e, t) {
            return new o(this, e, t).jqDeferred.promise(i(this));
          });
        }, o.makeJQueryPlugin(), o;
      }(s, e);
    }.apply(t, n)) || (e.exports = r);
  }("undefined" != typeof window ? window : this);
}, function (e, t, i) {
  var n, r, s;
  /*!
   * Masonry v4.2.2
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */

  window, r = [i(32), i(3)], void 0 === (s = "function" == typeof (n = function n(e, t) {
    "use strict";

    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

      for (var e = 0; e < this.cols; e++) {
        this.colYs.push(0);
      }

      this.maxY = 0, this.horizontalColIndex = 0;
    }, n.measureColumns = function () {
      if (this.getContainerWidth(), !this.columnWidth) {
        var e = this.items[0],
            i = e && e.element;
        this.columnWidth = i && t(i).outerWidth || this.containerWidth;
      }

      var n = this.columnWidth += this.gutter,
          r = this.containerWidth + this.gutter,
          s = r / n,
          o = n - r % n;
      s = Math[o && o < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1);
    }, n.getContainerWidth = function () {
      var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
          i = t(e);
      this.containerWidth = i && i.innerWidth;
    }, n._getItemLayoutPosition = function (e) {
      e.getSize();
      var t = e.size.outerWidth % this.columnWidth,
          i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
      i = Math.min(i, this.cols);

      for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e), r = {
        x: this.columnWidth * n.col,
        y: n.y
      }, s = n.y + e.size.outerHeight, o = i + n.col, a = n.col; a < o; a++) {
        this.colYs[a] = s;
      }

      return r;
    }, n._getTopColPosition = function (e) {
      var t = this._getTopColGroup(e),
          i = Math.min.apply(Math, t);

      return {
        col: t.indexOf(i),
        y: i
      };
    }, n._getTopColGroup = function (e) {
      if (e < 2) return this.colYs;

      for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) {
        t[n] = this._getColGroupY(n, e);
      }

      return t;
    }, n._getColGroupY = function (e, t) {
      if (t < 2) return this.colYs[e];
      var i = this.colYs.slice(e, e + t);
      return Math.max.apply(Math, i);
    }, n._getHorizontalColPosition = function (e, t) {
      var i = this.horizontalColIndex % this.cols;
      i = e > 1 && i + e > this.cols ? 0 : i;
      var n = t.size.outerWidth && t.size.outerHeight;
      return this.horizontalColIndex = n ? i + e : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, e)
      };
    }, n._manageStamp = function (e) {
      var i = t(e),
          n = this._getElementOffset(e),
          r = this._getOption("originLeft") ? n.left : n.right,
          s = r + i.outerWidth,
          o = Math.floor(r / this.columnWidth);

      o = Math.max(0, o);
      var a = Math.floor(s / this.columnWidth);
      a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);

      for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, u = o; u <= a; u++) {
        this.colYs[u] = Math.max(l, this.colYs[u]);
      }
    }, n._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var e = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e;
    }, n._getContainerFitWidth = function () {
      for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) {
        e++;
      }

      return (this.cols - e) * this.columnWidth - this.gutter;
    }, n.needsResizeLayout = function () {
      var e = this.containerWidth;
      return this.getContainerWidth(), e != this.containerWidth;
    }, i;
  }) ? n.apply(t, r) : n) || (e.exports = s);
},,, function (e, t, i) {
  var n = i(22),
      r = i(23);
  void 0 === r.$ && (r.$ = n), void 0 === r.jQuery && (r.jQuery = n), e.exports = n;
}, function (e, t, i) {
  var n;
  /*!
   * jQuery JavaScript Library v3.5.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2020-05-04T22:49Z
   */

  !function (t, i) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? i(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return i(e);
    } : i(t);
  }("undefined" != typeof window ? window : this, function (i, r) {
    "use strict";

    var s = [],
        o = Object.getPrototypeOf,
        a = s.slice,
        l = s.flat ? function (e) {
      return s.flat.call(e);
    } : function (e) {
      return s.concat.apply([], e);
    },
        u = s.push,
        c = s.indexOf,
        d = {},
        h = d.toString,
        f = d.hasOwnProperty,
        p = f.toString,
        v = p.call(Object),
        g = {},
        m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        y = function y(e) {
      return null != e && e === e.window;
    },
        b = i.document,
        w = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function x(e, t, i) {
      var n,
          r,
          s = (i = i || b).createElement("script");
      if (s.text = e, t) for (n in w) {
        (r = t[n] || t.getAttribute && t.getAttribute(n)) && s.setAttribute(n, r);
      }
      i.head.appendChild(s).parentNode.removeChild(s);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[h.call(e)] || "object" : _typeof(e);
    }

    var S = function S(e, t) {
      return new S.fn.init(e, t);
    };

    function C(e) {
      var t = !!e && "length" in e && e.length,
          i = T(e);
      return !m(e) && !y(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    S.fn = S.prototype = {
      jquery: "3.5.1",
      constructor: S,
      length: 0,
      toArray: function toArray() {
        return a.call(this);
      },
      get: function get(e) {
        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = S.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return S.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(S.map(this, function (t, i) {
          return e.call(t, i, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      even: function even() {
        return this.pushStack(S.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(S.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function eq(e) {
        var t = this.length,
            i = +e + (e < 0 ? t : 0);
        return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: s.sort,
      splice: s.splice
    }, S.extend = S.fn.extend = function () {
      var e,
          t,
          i,
          n,
          r,
          s,
          o = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;

      for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == _typeof(o) || m(o) || (o = {}), a === l && (o = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          n = e[t], "__proto__" !== t && o !== n && (u && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], s = r && !Array.isArray(i) ? [] : r || S.isPlainObject(i) ? i : {}, r = !1, o[t] = S.extend(u, s, n)) : void 0 !== n && (o[t] = n));
        }
      }

      return o;
    }, S.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, i;
        return !(!e || "[object Object]" !== h.call(e)) && (!(t = o(e)) || "function" == typeof (i = f.call(t, "constructor") && t.constructor) && p.call(i) === v);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t, i) {
        x(e, {
          nonce: t && t.nonce
        }, i);
      },
      each: function each(e, t) {
        var i,
            n = 0;
        if (C(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) {
          ;
        } else for (n in e) {
          if (!1 === t.call(e[n], n, e[n])) break;
        }
        return e;
      },
      makeArray: function makeArray(e, t) {
        var i = t || [];
        return null != e && (C(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : u.call(i, e)), i;
      },
      inArray: function inArray(e, t, i) {
        return null == t ? -1 : c.call(t, e, i);
      },
      merge: function merge(e, t) {
        for (var i = +t.length, n = 0, r = e.length; n < i; n++) {
          e[r++] = t[n];
        }

        return e.length = r, e;
      },
      grep: function grep(e, t, i) {
        for (var n = [], r = 0, s = e.length, o = !i; r < s; r++) {
          !t(e[r], r) !== o && n.push(e[r]);
        }

        return n;
      },
      map: function map(e, t, i) {
        var n,
            r,
            s = 0,
            o = [];
        if (C(e)) for (n = e.length; s < n; s++) {
          null != (r = t(e[s], s, i)) && o.push(r);
        } else for (s in e) {
          null != (r = t(e[s], s, i)) && o.push(r);
        }
        return l(o);
      },
      guid: 1,
      support: g
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = s[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      d["[object " + t + "]"] = t.toLowerCase();
    });

    var E =
    /*!
     * Sizzle CSS Selector Engine v2.3.5
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2020-03-14
     */
    function (e) {
      var t,
          i,
          n,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          f,
          p,
          v,
          g,
          m,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          x = e.document,
          T = 0,
          S = 0,
          C = le(),
          E = le(),
          A = le(),
          k = le(),
          L = function L(e, t) {
        return e === t && (d = !0), 0;
      },
          O = {}.hasOwnProperty,
          M = [],
          P = M.pop,
          I = M.push,
          D = M.push,
          j = M.slice,
          N = function N(e, t) {
        for (var i = 0, n = e.length; i < n; i++) {
          if (e[i] === t) return i;
        }

        return -1;
      },
          z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          _ = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          B = "\\[" + _ + "*(" + q + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + _ + "*\\]",
          H = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
          R = new RegExp(_ + "+", "g"),
          W = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
          F = new RegExp("^" + _ + "*," + _ + "*"),
          $ = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
          G = new RegExp(_ + "|>"),
          Y = new RegExp(H),
          V = new RegExp("^" + q + "$"),
          X = {
        ID: new RegExp("^#(" + q + ")"),
        CLASS: new RegExp("^\\.(" + q + ")"),
        TAG: new RegExp("^(" + q + "|[*])"),
        ATTR: new RegExp("^" + B),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + z + ")$", "i"),
        needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
      },
          U = /HTML$/i,
          Q = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Z = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + _ + "?|\\\\([^\\r\\n\\f])", "g"),
          ie = function ie(e, t) {
        var i = "0x" + e.slice(1) - 65536;
        return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320));
      },
          ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          re = function re(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          se = function se() {
        h();
      },
          oe = we(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        D.apply(M = j.call(x.childNodes), x.childNodes), M[x.childNodes.length].nodeType;
      } catch (e) {
        D = {
          apply: M.length ? function (e, t) {
            I.apply(e, j.call(t));
          } : function (e, t) {
            for (var i = e.length, n = 0; e[i++] = t[n++];) {
              ;
            }

            e.length = i - 1;
          }
        };
      }

      function ae(e, t, n, r) {
        var s,
            a,
            u,
            c,
            d,
            p,
            m,
            y = t && t.ownerDocument,
            x = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;

        if (!r && (h(t), t = t || f, v)) {
          if (11 !== x && (d = J.exec(e))) if (s = d[1]) {
            if (9 === x) {
              if (!(u = t.getElementById(s))) return n;
              if (u.id === s) return n.push(u), n;
            } else if (y && (u = y.getElementById(s)) && b(t, u) && u.id === s) return n.push(u), n;
          } else {
            if (d[2]) return D.apply(n, t.getElementsByTagName(e)), n;
            if ((s = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(s)), n;
          }

          if (i.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
            if (m = e, y = t, 1 === x && (G.test(e) || $.test(e))) {
              for ((y = ee.test(e) && me(t.parentNode) || t) === t && i.scope || ((c = t.getAttribute("id")) ? c = c.replace(ne, re) : t.setAttribute("id", c = w)), a = (p = o(e)).length; a--;) {
                p[a] = (c ? "#" + c : ":scope") + " " + be(p[a]);
              }

              m = p.join(",");
            }

            try {
              return D.apply(n, y.querySelectorAll(m)), n;
            } catch (t) {
              k(e, !0);
            } finally {
              c === w && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(W, "$1"), t, n, r);
      }

      function le() {
        var e = [];
        return function t(i, r) {
          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r;
        };
      }

      function ue(e) {
        return e[w] = !0, e;
      }

      function ce(e) {
        var t = f.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function de(e, t) {
        for (var i = e.split("|"), r = i.length; r--;) {
          n.attrHandle[i[r]] = t;
        }
      }

      function he(e, t) {
        var i = t && e,
            n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (n) return n;
        if (i) for (; i = i.nextSibling;) {
          if (i === t) return -1;
        }
        return e ? 1 : -1;
      }

      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function pe(e) {
        return function (t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e;
        };
      }

      function ve(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ge(e) {
        return ue(function (t) {
          return t = +t, ue(function (i, n) {
            for (var r, s = e([], i.length, t), o = s.length; o--;) {
              i[r = s[o]] && (i[r] = !(n[r] = i[r]));
            }
          });
        });
      }

      function me(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in i = ae.support = {}, s = ae.isXML = function (e) {
        var t = e.namespaceURI,
            i = (e.ownerDocument || e).documentElement;
        return !U.test(t || i && i.nodeName || "HTML");
      }, h = ae.setDocument = function (e) {
        var t,
            r,
            o = e ? e.ownerDocument || e : x;
        return o != f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, v = !s(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)), i.scope = ce(function (e) {
          return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), i.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), i.getElementsByTagName = ce(function (e) {
          return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
        }), i.getElementsByClassName = Z.test(f.getElementsByClassName), i.getById = ce(function (e) {
          return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length;
        }), i.getById ? (n.filter.ID = function (e) {
          var t = e.replace(te, ie);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, n.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && v) {
            var i = t.getElementById(e);
            return i ? [i] : [];
          }
        }) : (n.filter.ID = function (e) {
          var t = e.replace(te, ie);
          return function (e) {
            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return i && i.value === t;
          };
        }, n.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && v) {
            var i,
                n,
                r,
                s = t.getElementById(e);

            if (s) {
              if ((i = s.getAttributeNode("id")) && i.value === e) return [s];

              for (r = t.getElementsByName(e), n = 0; s = r[n++];) {
                if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
              }
            }

            return [];
          }
        }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var i,
              n = [],
              r = 0,
              s = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; i = s[r++];) {
              1 === i.nodeType && n.push(i);
            }

            return n;
          }

          return s;
        }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e);
        }, m = [], g = [], (i.qsa = Z.test(f.querySelectorAll)) && (ce(function (e) {
          var t;
          p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + _ + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + _ + "*name" + _ + "*=" + _ + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = f.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
        })), (i.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function (e) {
          i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", H);
        }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function (e, t) {
          var i = 9 === e.nodeType ? e.documentElement : e,
              n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, L = t ? function (e, t) {
          if (e === t) return d = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return d = !0, 0;
          var i,
              n = 0,
              r = e.parentNode,
              s = t.parentNode,
              o = [e],
              a = [t];
          if (!r || !s) return e == f ? -1 : t == f ? 1 : r ? -1 : s ? 1 : c ? N(c, e) - N(c, t) : 0;
          if (r === s) return he(e, t);

          for (i = e; i = i.parentNode;) {
            o.unshift(i);
          }

          for (i = t; i = i.parentNode;) {
            a.unshift(i);
          }

          for (; o[n] === a[n];) {
            n++;
          }

          return n ? he(o[n], a[n]) : o[n] == x ? -1 : a[n] == x ? 1 : 0;
        }, f) : f;
      }, ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }, ae.matchesSelector = function (e, t) {
        if (h(e), i.matchesSelector && v && !k[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
          var n = y.call(e, t);
          if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
        } catch (e) {
          k(t, !0);
        }
        return ae(t, f, null, [e]).length > 0;
      }, ae.contains = function (e, t) {
        return (e.ownerDocument || e) != f && h(e), b(e, t);
      }, ae.attr = function (e, t) {
        (e.ownerDocument || e) != f && h(e);
        var r = n.attrHandle[t.toLowerCase()],
            s = r && O.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
        return void 0 !== s ? s : i.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
      }, ae.escape = function (e) {
        return (e + "").replace(ne, re);
      }, ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ae.uniqueSort = function (e) {
        var t,
            n = [],
            r = 0,
            s = 0;

        if (d = !i.detectDuplicates, c = !i.sortStable && e.slice(0), e.sort(L), d) {
          for (; t = e[s++];) {
            t === e[s] && (r = n.push(s));
          }

          for (; r--;) {
            e.splice(n[r], 1);
          }
        }

        return c = null, e;
      }, r = ae.getText = function (e) {
        var t,
            i = "",
            n = 0,
            s = e.nodeType;

        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              i += r(e);
            }
          } else if (3 === s || 4 === s) return e.nodeValue;
        } else for (; t = e[n++];) {
          i += r(t);
        }

        return i;
      }, (n = ae.selectors = {
        cacheLength: 50,
        createPseudo: ue,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                i = !e[6] && e[2];
            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ie).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, i) {
            return function (n) {
              var r = ae.attr(n, e);
              return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function CHILD(e, t, i, n, r) {
            var s = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                a = "of-type" === t;
            return 1 === n && 0 === r ? function (e) {
              return !!e.parentNode;
            } : function (t, i, l) {
              var u,
                  c,
                  d,
                  h,
                  f,
                  p,
                  v = s !== o ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  m = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;

              if (g) {
                if (s) {
                  for (; v;) {
                    for (h = t; h = h[v];) {
                      if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType) return !1;
                    }

                    p = v = "only" === e && !p && "nextSibling";
                  }

                  return !0;
                }

                if (p = [o ? g.firstChild : g.lastChild], o && y) {
                  for (b = (f = (u = (c = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], h = f && g.childNodes[f]; h = ++f && h && h[v] || (b = f = 0) || p.pop();) {
                    if (1 === h.nodeType && ++b && h === t) {
                      c[e] = [T, f, b];
                      break;
                    }
                  }
                } else if (y && (b = f = (u = (c = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === b) for (; (h = ++f && h && h[v] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [T, b]), h !== t));) {
                  ;
                }

                return (b -= r) === n || b % n == 0 && b / n >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var i,
                r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, i) {
              for (var n, s = r(e, t), o = s.length; o--;) {
                e[n = N(e, s[o])] = !(i[n] = s[o]);
              }
            }) : function (e) {
              return r(e, 0, i);
            }) : r;
          }
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
                i = [],
                n = a(e.replace(W, "$1"));
            return n[w] ? ue(function (e, t, i, r) {
              for (var s, o = n(e, null, r, []), a = e.length; a--;) {
                (s = o[a]) && (e[a] = !(t[a] = s));
              }
            }) : function (e, r, s) {
              return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop();
            };
          }),
          has: ue(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ue(function (e) {
            return e = e.replace(te, ie), function (t) {
              return (t.textContent || r(t)).indexOf(e) > -1;
            };
          }),
          lang: ue(function (e) {
            return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function (t) {
              var i;

              do {
                if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function root(e) {
            return e === p;
          },
          focus: function focus(e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ve(!1),
          disabled: ve(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !n.pseudos.empty(e);
          },
          header: function header(e) {
            return K.test(e.nodeName);
          },
          input: function input(e) {
            return Q.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: ge(function (e, t) {
            for (var i = 0; i < t; i += 2) {
              e.push(i);
            }

            return e;
          }),
          odd: ge(function (e, t) {
            for (var i = 1; i < t; i += 2) {
              e.push(i);
            }

            return e;
          }),
          lt: ge(function (e, t, i) {
            for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;) {
              e.push(n);
            }

            return e;
          }),
          gt: ge(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t;) {
              e.push(n);
            }

            return e;
          })
        }
      }).pseudos.nth = n.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        n.pseudos[t] = fe(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        n.pseudos[t] = pe(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) {
          n += e[t].value;
        }

        return n;
      }

      function we(e, t, i) {
        var n = t.dir,
            r = t.next,
            s = r || n,
            o = i && "parentNode" === s,
            a = S++;
        return t.first ? function (t, i, r) {
          for (; t = t[n];) {
            if (1 === t.nodeType || o) return e(t, i, r);
          }

          return !1;
        } : function (t, i, l) {
          var u,
              c,
              d,
              h = [T, a];

          if (l) {
            for (; t = t[n];) {
              if ((1 === t.nodeType || o) && e(t, i, l)) return !0;
            }
          } else for (; t = t[n];) {
            if (1 === t.nodeType || o) if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;else {
              if ((u = c[s]) && u[0] === T && u[1] === a) return h[2] = u[2];
              if (c[s] = h, h[2] = e(t, i, l)) return !0;
            }
          }

          return !1;
        };
      }

      function xe(e) {
        return e.length > 1 ? function (t, i, n) {
          for (var r = e.length; r--;) {
            if (!e[r](t, i, n)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, i, n, r) {
        for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++) {
          (s = e[a]) && (i && !i(s, n, r) || (o.push(s), u && t.push(a)));
        }

        return o;
      }

      function Se(e, t, i, n, r, s) {
        return n && !n[w] && (n = Se(n)), r && !r[w] && (r = Se(r, s)), ue(function (s, o, a, l) {
          var u,
              c,
              d,
              h = [],
              f = [],
              p = o.length,
              v = s || function (e, t, i) {
            for (var n = 0, r = t.length; n < r; n++) {
              ae(e, t[n], i);
            }

            return i;
          }(t || "*", a.nodeType ? [a] : a, []),
              g = !e || !s && t ? v : Te(v, h, e, a, l),
              m = i ? r || (s ? e : p || n) ? [] : o : g;

          if (i && i(g, m, a, l), n) for (u = Te(m, f), n(u, [], a, l), c = u.length; c--;) {
            (d = u[c]) && (m[f[c]] = !(g[f[c]] = d));
          }

          if (s) {
            if (r || e) {
              if (r) {
                for (u = [], c = m.length; c--;) {
                  (d = m[c]) && u.push(g[c] = d);
                }

                r(null, m = [], u, l);
              }

              for (c = m.length; c--;) {
                (d = m[c]) && (u = r ? N(s, d) : h[c]) > -1 && (s[u] = !(o[u] = d));
              }
            }
          } else m = Te(m === o ? m.splice(p, m.length) : m), r ? r(null, o, m, l) : D.apply(o, m);
        });
      }

      function Ce(e) {
        for (var t, i, r, s = e.length, o = n.relative[e[0].type], a = o || n.relative[" "], l = o ? 1 : 0, c = we(function (e) {
          return e === t;
        }, a, !0), d = we(function (e) {
          return N(t, e) > -1;
        }, a, !0), h = [function (e, i, n) {
          var r = !o && (n || i !== u) || ((t = i).nodeType ? c(e, i, n) : d(e, i, n));
          return t = null, r;
        }]; l < s; l++) {
          if (i = n.relative[e[l].type]) h = [we(xe(h), i)];else {
            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (r = ++l; r < s && !n.relative[e[r].type]; r++) {
                ;
              }

              return Se(l > 1 && xe(h), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(W, "$1"), i, l < r && Ce(e.slice(l, r)), r < s && Ce(e = e.slice(r)), r < s && be(e));
            }

            h.push(i);
          }
        }

        return xe(h);
      }

      return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye(), o = ae.tokenize = function (e, t) {
        var i,
            r,
            s,
            o,
            a,
            l,
            u,
            c = E[e + " "];
        if (c) return t ? 0 : c.slice(0);

        for (a = e, l = [], u = n.preFilter; a;) {
          for (o in i && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = $.exec(a)) && (i = r.shift(), s.push({
            value: i,
            type: r[0].replace(W, " ")
          }), a = a.slice(i.length)), n.filter) {
            !(r = X[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
              value: i,
              type: o,
              matches: r
            }), a = a.slice(i.length));
          }

          if (!i) break;
        }

        return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
      }, a = ae.compile = function (e, t) {
        var i,
            r = [],
            s = [],
            a = A[e + " "];

        if (!a) {
          for (t || (t = o(e)), i = t.length; i--;) {
            (a = Ce(t[i]))[w] ? r.push(a) : s.push(a);
          }

          (a = A(e, function (e, t) {
            var i = t.length > 0,
                r = e.length > 0,
                s = function s(_s, o, a, l, c) {
              var d,
                  p,
                  g,
                  m = 0,
                  y = "0",
                  b = _s && [],
                  w = [],
                  x = u,
                  S = _s || r && n.find.TAG("*", c),
                  C = T += null == x ? 1 : Math.random() || .1,
                  E = S.length;

              for (c && (u = o == f || o || c); y !== E && null != (d = S[y]); y++) {
                if (r && d) {
                  for (p = 0, o || d.ownerDocument == f || (h(d), a = !v); g = e[p++];) {
                    if (g(d, o || f, a)) {
                      l.push(d);
                      break;
                    }
                  }

                  c && (T = C);
                }

                i && ((d = !g && d) && m--, _s && b.push(d));
              }

              if (m += y, i && y !== m) {
                for (p = 0; g = t[p++];) {
                  g(b, w, o, a);
                }

                if (_s) {
                  if (m > 0) for (; y--;) {
                    b[y] || w[y] || (w[y] = P.call(l));
                  }
                  w = Te(w);
                }

                D.apply(l, w), c && !_s && w.length > 0 && m + t.length > 1 && ae.uniqueSort(l);
              }

              return c && (T = C, u = x), b;
            };

            return i ? ue(s) : s;
          }(s, r))).selector = e;
        }

        return a;
      }, l = ae.select = function (e, t, i, r) {
        var s,
            l,
            u,
            c,
            d,
            h = "function" == typeof e && e,
            f = !r && o(e = h.selector || e);

        if (i = i || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && v && n.relative[l[1].type]) {
            if (!(t = (n.find.ID(u.matches[0].replace(te, ie), t) || [])[0])) return i;
            h && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (s = X.needsContext.test(e) ? 0 : l.length; s-- && (u = l[s], !n.relative[c = u.type]);) {
            if ((d = n.find[c]) && (r = d(u.matches[0].replace(te, ie), ee.test(l[0].type) && me(t.parentNode) || t))) {
              if (l.splice(s, 1), !(e = r.length && be(l))) return D.apply(i, r), i;
              break;
            }
          }
        }

        return (h || a(e, f))(r, t, !v, i, !t || ee.test(e) && me(t.parentNode) || t), i;
      }, i.sortStable = w.split("").sort(L).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || de("type|href|height|width", function (e, t, i) {
        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), i.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || de("value", function (e, t, i) {
        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || de(z, function (e, t, i) {
        var n;
        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
      }), ae;
    }(i);

    S.find = E, S.expr = E.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = E.uniqueSort, S.text = E.getText, S.isXMLDoc = E.isXML, S.contains = E.contains, S.escapeSelector = E.escape;

    var A = function A(e, t, i) {
      for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (r && S(e).is(i)) break;
          n.push(e);
        }
      }

      return n;
    },
        k = function k(e, t) {
      for (var i = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && i.push(e);
      }

      return i;
    },
        L = S.expr.match.needsContext;

    function O(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function P(e, t, i) {
      return m(t) ? S.grep(e, function (e, n) {
        return !!t.call(e, n, e) !== i;
      }) : t.nodeType ? S.grep(e, function (e) {
        return e === t !== i;
      }) : "string" != typeof t ? S.grep(e, function (e) {
        return c.call(t, e) > -1 !== i;
      }) : S.filter(t, e, i);
    }

    S.filter = function (e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, S.fn.extend({
      find: function find(e) {
        var t,
            i,
            n = this.length,
            r = this;
        if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
          for (t = 0; t < n; t++) {
            if (S.contains(r[t], this)) return !0;
          }
        }));

        for (i = this.pushStack([]), t = 0; t < n; t++) {
          S.find(e, r[t], i);
        }

        return n > 1 ? S.uniqueSort(i) : i;
      },
      filter: function filter(e) {
        return this.pushStack(P(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(P(this, e || [], !0));
      },
      is: function is(e) {
        return !!P(this, "string" == typeof e && L.test(e) ? S(e) : e || [], !1).length;
      }
    });
    var I,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, i) {
      var n, r;
      if (!e) return this;

      if (i = i || I, "string" == typeof e) {
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);

        if (n[1]) {
          if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), M.test(n[1]) && S.isPlainObject(t)) for (n in t) {
            m(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          }
          return this;
        }

        return (r = b.getElementById(n[2])) && (this[0] = r, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this);
    }).prototype = S.fn, I = S(b);
    var j = /^(?:parents|prev(?:Until|All))/,
        N = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function z(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    S.fn.extend({
      has: function has(e) {
        var t = S(e, this),
            i = t.length;
        return this.filter(function () {
          for (var e = 0; e < i; e++) {
            if (S.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var i,
            n = 0,
            r = this.length,
            s = [],
            o = "string" != typeof e && S(e);
        if (!L.test(e)) for (; n < r; n++) {
          for (i = this[n]; i && i !== t; i = i.parentNode) {
            if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
              s.push(i);
              break;
            }
          }
        }
        return this.pushStack(s.length > 1 ? S.uniqueSort(s) : s);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? c.call(S(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), S.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return A(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, i) {
        return A(e, "parentNode", i);
      },
      next: function next(e) {
        return z(e, "nextSibling");
      },
      prev: function prev(e) {
        return z(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return A(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return A(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, i) {
        return A(e, "nextSibling", i);
      },
      prevUntil: function prevUntil(e, t, i) {
        return A(e, "previousSibling", i);
      },
      siblings: function siblings(e) {
        return k((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return k(e.firstChild);
      },
      contents: function contents(e) {
        return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
      }
    }, function (e, t) {
      S.fn[e] = function (i, n) {
        var r = S.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = S.filter(n, r)), this.length > 1 && (N[e] || S.uniqueSort(r), j.test(e) && r.reverse()), this.pushStack(r);
      };
    });
    var _ = /[^\x20\t\r\n\f]+/g;

    function q(e) {
      return e;
    }

    function B(e) {
      throw e;
    }

    function H(e, t, i, n) {
      var r;

      try {
        e && m(r = e.promise) ? r.call(e).done(t).fail(i) : e && m(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n));
      } catch (e) {
        i.apply(void 0, [e]);
      }
    }

    S.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return S.each(e.match(_) || [], function (e, i) {
          t[i] = !0;
        }), t;
      }(e) : S.extend({}, e);

      var t,
          i,
          n,
          r,
          s = [],
          o = [],
          a = -1,
          l = function l() {
        for (r = r || e.once, n = t = !0; o.length; a = -1) {
          for (i = o.shift(); ++a < s.length;) {
            !1 === s[a].apply(i[0], i[1]) && e.stopOnFalse && (a = s.length, i = !1);
          }
        }

        e.memory || (i = !1), t = !1, r && (s = i ? [] : "");
      },
          u = {
        add: function add() {
          return s && (i && !t && (a = s.length - 1, o.push(i)), function t(i) {
            S.each(i, function (i, n) {
              m(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== T(n) && t(n);
            });
          }(arguments), i && !t && l()), this;
        },
        remove: function remove() {
          return S.each(arguments, function (e, t) {
            for (var i; (i = S.inArray(t, s, i)) > -1;) {
              s.splice(i, 1), i <= a && a--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? S.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return r = o = [], s = i = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return r = o = [], i || t || (s = i = ""), this;
        },
        locked: function locked() {
          return !!r;
        },
        fireWith: function fireWith(e, i) {
          return r || (i = [e, (i = i || []).slice ? i.slice() : i], o.push(i), t || l()), this;
        },
        fire: function fire() {
          return u.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!n;
        }
      };

      return u;
    }, S.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
            n = "pending",
            r = {
          state: function state() {
            return n;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return r.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return S.Deferred(function (i) {
              S.each(t, function (t, n) {
                var r = m(e[n[4]]) && e[n[4]];
                s[n[1]](function () {
                  var e = r && r.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, n, r) {
            var s = 0;

            function o(e, t, n, r) {
              return function () {
                var a = this,
                    l = arguments,
                    u = function u() {
                  var i, u;

                  if (!(e < s)) {
                    if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    u = i && ("object" == _typeof(i) || "function" == typeof i) && i.then, m(u) ? r ? u.call(i, o(s, t, q, r), o(s, t, B, r)) : (s++, u.call(i, o(s, t, q, r), o(s, t, B, r), o(s, t, q, t.notifyWith))) : (n !== q && (a = void 0, l = [i]), (r || t.resolveWith)(a, l));
                  }
                },
                    c = r ? u : function () {
                  try {
                    u();
                  } catch (i) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(i, c.stackTrace), e + 1 >= s && (n !== B && (a = void 0, l = [i]), t.rejectWith(a, l));
                  }
                };

                e ? c() : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()), i.setTimeout(c));
              };
            }

            return S.Deferred(function (i) {
              t[0][3].add(o(0, i, m(r) ? r : q, i.notifyWith)), t[1][3].add(o(0, i, m(e) ? e : q)), t[2][3].add(o(0, i, m(n) ? n : B));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? S.extend(e, r) : r;
          }
        },
            s = {};
        return S.each(t, function (e, i) {
          var o = i[2],
              a = i[5];
          r[i[1]] = o.add, a && o.add(function () {
            n = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(i[3].fire), s[i[0]] = function () {
            return s[i[0] + "With"](this === s ? void 0 : this, arguments), this;
          }, s[i[0] + "With"] = o.fireWith;
        }), r.promise(s), e && e.call(s, s), s;
      },
      when: function when(e) {
        var t = arguments.length,
            i = t,
            n = Array(i),
            r = a.call(arguments),
            s = S.Deferred(),
            o = function o(e) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : i, --t || s.resolveWith(n, r);
          };
        };

        if (t <= 1 && (H(e, s.done(o(i)).resolve, s.reject, !t), "pending" === s.state() || m(r[i] && r[i].then))) return s.then();

        for (; i--;) {
          H(r[i], o(i), s.reject);
        }

        return s.promise();
      }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
      i.console && i.console.warn && e && R.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, S.readyException = function (e) {
      i.setTimeout(function () {
        throw e;
      });
    };
    var W = S.Deferred();

    function F() {
      b.removeEventListener("DOMContentLoaded", F), i.removeEventListener("load", F), S.ready();
    }

    S.fn.ready = function (e) {
      return W.then(e)["catch"](function (e) {
        S.readyException(e);
      }), this;
    }, S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || W.resolveWith(b, [S]));
      }
    }), S.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", F), i.addEventListener("load", F));

    var $ = function $(e, t, i, n, r, s, o) {
      var a = 0,
          l = e.length,
          u = null == i;
      if ("object" === T(i)) for (a in r = !0, i) {
        $(e, t, a, i[a], !0, s, o);
      } else if (void 0 !== n && (r = !0, m(n) || (o = !0), u && (o ? (t.call(e, n), t = null) : (u = t, t = function t(e, _t2, i) {
        return u.call(S(e), i);
      })), t)) for (; a < l; a++) {
        t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
      }
      return r ? e : u ? t.call(e) : l ? t(e[0], i) : s;
    },
        G = /^-ms-/,
        Y = /-([a-z])/g;

    function V(e, t) {
      return t.toUpperCase();
    }

    function X(e) {
      return e.replace(G, "ms-").replace(Y, V);
    }

    var U = function U(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function Q() {
      this.expando = S.expando + Q.uid++;
    }

    Q.uid = 1, Q.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, i) {
        var n,
            r = this.cache(e);
        if ("string" == typeof t) r[X(t)] = i;else for (n in t) {
          r[X(n)] = t[n];
        }
        return r;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
      },
      access: function access(e, t, i) {
        return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
      },
      remove: function remove(e, t) {
        var i,
            n = e[this.expando];

        if (void 0 !== n) {
          if (void 0 !== t) {
            i = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in n ? [t] : t.match(_) || []).length;

            for (; i--;) {
              delete n[t[i]];
            }
          }

          (void 0 === t || S.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      }
    };
    var K = new Q(),
        Z = new Q(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e, t, i) {
      var n;
      if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
        try {
          i = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
          }(i);
        } catch (e) {}

        Z.set(e, t, i);
      } else i = void 0;
      return i;
    }

    S.extend({
      hasData: function hasData(e) {
        return Z.hasData(e) || K.hasData(e);
      },
      data: function data(e, t, i) {
        return Z.access(e, t, i);
      },
      removeData: function removeData(e, t) {
        Z.remove(e, t);
      },
      _data: function _data(e, t, i) {
        return K.access(e, t, i);
      },
      _removeData: function _removeData(e, t) {
        K.remove(e, t);
      }
    }), S.fn.extend({
      data: function data(e, t) {
        var i,
            n,
            r,
            s = this[0],
            o = s && s.attributes;

        if (void 0 === e) {
          if (this.length && (r = Z.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
            for (i = o.length; i--;) {
              o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = X(n.slice(5)), te(s, n, r[n]));
            }

            K.set(s, "hasDataAttrs", !0);
          }

          return r;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : $(this, function (t) {
          var i;
          if (s && void 0 === t) return void 0 !== (i = Z.get(s, e)) || void 0 !== (i = te(s, e)) ? i : void 0;
          this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      }
    }), S.extend({
      queue: function queue(e, t, i) {
        var n;
        if (e) return t = (t || "fx") + "queue", n = K.get(e, t), i && (!n || Array.isArray(i) ? n = K.access(e, t, S.makeArray(i)) : n.push(i)), n || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var i = S.queue(e, t),
            n = i.length,
            r = i.shift(),
            s = S._queueHooks(e, t);

        "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, function () {
          S.dequeue(e, t);
        }, s)), !n && s && s.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var i = t + "queueHooks";
        return K.get(e, i) || K.access(e, i, {
          empty: S.Callbacks("once memory").add(function () {
            K.remove(e, [t + "queue", i]);
          })
        });
      }
    }), S.fn.extend({
      queue: function queue(e, t) {
        var i = 2;
        return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? S.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var i = S.queue(this, e, t);
          S._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && S.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var i,
            n = 1,
            r = S.Deferred(),
            s = this,
            o = this.length,
            a = function a() {
          --n || r.resolveWith(s, [s]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
          (i = K.get(s[o], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
        }

        return a(), r.promise(t);
      }
    });

    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        se = b.documentElement,
        oe = function oe(e) {
      return S.contains(e.ownerDocument, e);
    },
        ae = {
      composed: !0
    };

    se.getRootNode && (oe = function oe(e) {
      return S.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === S.css(e, "display");
    };

    function ue(e, t, i, n) {
      var r,
          s,
          o = 20,
          a = n ? function () {
        return n.cur();
      } : function () {
        return S.css(e, t, "");
      },
          l = a(),
          u = i && i[3] || (S.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (S.cssNumber[t] || "px" !== u && +l) && ne.exec(S.css(e, t));

      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; o--;) {
          S.style(e, t, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
        }

        c *= 2, S.style(e, t, c + u), i = i || [];
      }

      return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r;
    }

    var ce = {};

    function de(e) {
      var t,
          i = e.ownerDocument,
          n = e.nodeName,
          r = ce[n];
      return r || (t = i.body.appendChild(i.createElement(n)), r = S.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[n] = r, r);
    }

    function he(e, t) {
      for (var i, n, r = [], s = 0, o = e.length; s < o; s++) {
        (n = e[s]).style && (i = n.style.display, t ? ("none" === i && (r[s] = K.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && le(n) && (r[s] = de(n))) : "none" !== i && (r[s] = "none", K.set(n, "display", i)));
      }

      for (s = 0; s < o; s++) {
        null != r[s] && (e[s].style.display = r[s]);
      }

      return e;
    }

    S.fn.extend({
      show: function show() {
        return he(this, !0);
      },
      hide: function hide() {
        return he(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? S(this).show() : S(this).hide();
        });
      }
    });
    var fe,
        pe,
        ve = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
    fe = b.createDocumentFragment().appendChild(b.createElement("div")), (pe = b.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", g.option = !!fe.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var i;
      return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? S.merge([e], i) : i;
    }

    function we(e, t) {
      for (var i = 0, n = e.length; i < n; i++) {
        K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"));
      }
    }

    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var xe = /<|&#?\w+;/;

    function Te(e, t, i, n, r) {
      for (var s, o, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) {
        if ((s = e[f]) || 0 === s) if ("object" === T(s)) S.merge(h, s.nodeType ? [s] : s);else if (xe.test(s)) {
          for (o = o || d.appendChild(t.createElement("div")), a = (ge.exec(s) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2], c = l[0]; c--;) {
            o = o.lastChild;
          }

          S.merge(h, o.childNodes), (o = d.firstChild).textContent = "";
        } else h.push(t.createTextNode(s));
      }

      for (d.textContent = "", f = 0; s = h[f++];) {
        if (n && S.inArray(s, n) > -1) r && r.push(s);else if (u = oe(s), o = be(d.appendChild(s), "script"), u && we(o), i) for (c = 0; s = o[c++];) {
          me.test(s.type || "") && i.push(s);
        }
      }

      return d;
    }

    var Se = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
      return !0;
    }

    function ke() {
      return !1;
    }

    function Le(e, t) {
      return e === function () {
        try {
          return b.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function Oe(e, t, i, n, r, s) {
      var o, a;

      if ("object" == _typeof(t)) {
        for (a in "string" != typeof i && (n = n || i, i = void 0), t) {
          Oe(e, a, i, n, t[a], s);
        }

        return e;
      }

      if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = ke;else if (!r) return e;
      return 1 === s && (o = r, (r = function r(e) {
        return S().off(e), o.apply(this, arguments);
      }).guid = o.guid || (o.guid = S.guid++)), e.each(function () {
        S.event.add(this, t, r, n, i);
      });
    }

    function Me(e, t, i) {
      i ? (K.set(e, t, !1), S.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var n,
              r,
              s = K.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (s.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();else if (s = a.call(arguments), K.set(this, t, s), n = i(this, t), this[t](), s !== (r = K.get(this, t)) || n ? K.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value;
          } else s.length && (K.set(this, t, {
            value: S.event.trigger(S.extend(s[0], S.Event.prototype), s.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === K.get(e, t) && S.event.add(e, t, Ae);
    }

    S.event = {
      global: {},
      add: function add(e, t, i, n, r) {
        var s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            f,
            p,
            v,
            g = K.get(e);
        if (U(e)) for (i.handler && (i = (s = i).handler, r = s.selector), r && S.find.matchesSelector(se, r), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function (t) {
          return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
        }), u = (t = (t || "").match(_) || [""]).length; u--;) {
          f = v = (a = Ee.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = S.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = S.event.special[f] || {}, c = S.extend({
            type: f,
            origType: v,
            data: n,
            handler: i,
            guid: i.guid,
            selector: r,
            needsContext: r && S.expr.match.needsContext.test(r),
            namespace: p.join(".")
          }, s), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), S.event.global[f] = !0);
        }
      },
      remove: function remove(e, t, i, n, r) {
        var s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            f,
            p,
            v,
            g = K.hasData(e) && K.get(e);

        if (g && (l = g.events)) {
          for (u = (t = (t || "").match(_) || [""]).length; u--;) {
            if (f = v = (a = Ee.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
              for (d = S.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) {
                c = h[s], !r && v !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
              }

              o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || S.removeEvent(e, f, g.handle), delete l[f]);
            } else for (f in l) {
              S.event.remove(e, f + t[u], i, n, !0);
            }
          }

          S.isEmptyObject(l) && K.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            i,
            n,
            r,
            s,
            o,
            a = new Array(arguments.length),
            l = S.event.fix(e),
            u = (K.get(this, "events") || Object.create(null))[l.type] || [],
            c = S.event.special[l.type] || {};

        for (a[0] = l, t = 1; t < arguments.length; t++) {
          a[t] = arguments[t];
        }

        if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
          for (o = S.event.handlers.call(this, l, u), t = 0; (r = o[t++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (n = ((S.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(e, t) {
        var i,
            n,
            r,
            s,
            o,
            a = [],
            l = t.delegateCount,
            u = e.target;
        if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (s = [], o = {}, i = 0; i < l; i++) {
              void 0 === o[r = (n = t[i]).selector + " "] && (o[r] = n.needsContext ? S(r, this).index(u) > -1 : S.find(r, this, null, [u]).length), o[r] && s.push(n);
            }

            s.length && a.push({
              elem: u,
              handlers: s
            });
          }
        }
        return u = this, l < t.length && a.push({
          elem: u,
          handlers: t.slice(l)
        }), a;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(S.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: m(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ve.test(t.type) && t.click && O(t, "input") && Me(t, "click", Ae), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ve.test(t.type) && t.click && O(t, "input") && Me(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ve.test(t.type) && t.click && O(t, "input") && K.get(t, "click") || O(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, S.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }, S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
    }, S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, S.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, S.event.addProp), S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      S.event.special[e] = {
        setup: function setup() {
          return Me(this, e, Le), !1;
        },
        trigger: function trigger() {
          return Me(this, e), !0;
        },
        delegateType: t
      };
    }), S.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      S.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var i,
              n = this,
              r = e.relatedTarget,
              s = e.handleObj;
          return r && (r === n || S.contains(n, r)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i;
        }
      };
    }), S.fn.extend({
      on: function on(e, t, i, n) {
        return Oe(this, e, t, i, n);
      },
      one: function one(e, t, i, n) {
        return Oe(this, e, t, i, n, 1);
      },
      off: function off(e, t, i) {
        var n, r;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;

        if ("object" == _typeof(e)) {
          for (r in e) {
            this.off(r, t, e[r]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ke), this.each(function () {
          S.event.remove(this, e, i, t);
        });
      }
    });
    var Pe = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
      return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
    }

    function Ne(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function ze(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function _e(e, t) {
      var i, n, r, s, o, a;

      if (1 === t.nodeType) {
        if (K.hasData(e) && (a = K.get(e).events)) for (r in K.remove(t, "handle events"), a) {
          for (i = 0, n = a[r].length; i < n; i++) {
            S.event.add(t, r, a[r][i]);
          }
        }
        Z.hasData(e) && (s = Z.access(e), o = S.extend({}, s), Z.set(t, o));
      }
    }

    function qe(e, t) {
      var i = t.nodeName.toLowerCase();
      "input" === i && ve.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue);
    }

    function Be(e, t, i, n) {
      t = l(t);
      var r,
          s,
          o,
          a,
          u,
          c,
          d = 0,
          h = e.length,
          f = h - 1,
          p = t[0],
          v = m(p);
      if (v || h > 1 && "string" == typeof p && !g.checkClone && Ie.test(p)) return e.each(function (r) {
        var s = e.eq(r);
        v && (t[0] = p.call(this, r, s.html())), Be(s, t, i, n);
      });

      if (h && (s = (r = Te(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
        for (a = (o = S.map(be(r, "script"), Ne)).length; d < h; d++) {
          u = r, d !== f && (u = S.clone(u, !0, !0), a && S.merge(o, be(u, "script"))), i.call(e[d], u, d);
        }

        if (a) for (c = o[o.length - 1].ownerDocument, S.map(o, ze), d = 0; d < a; d++) {
          u = o[d], me.test(u.type || "") && !K.access(u, "globalEval") && S.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }, c) : x(u.textContent.replace(De, ""), u, c));
        }
      }

      return e;
    }

    function He(e, t, i) {
      for (var n, r = t ? S.filter(t, e) : e, s = 0; null != (n = r[s]); s++) {
        i || 1 !== n.nodeType || S.cleanData(be(n)), n.parentNode && (i && oe(n) && we(be(n, "script")), n.parentNode.removeChild(n));
      }

      return e;
    }

    S.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e;
      },
      clone: function clone(e, t, i) {
        var n,
            r,
            s,
            o,
            a = e.cloneNode(!0),
            l = oe(e);
        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (o = be(a), n = 0, r = (s = be(e)).length; n < r; n++) {
          qe(s[n], o[n]);
        }
        if (t) if (i) for (s = s || be(e), o = o || be(a), n = 0, r = s.length; n < r; n++) {
          _e(s[n], o[n]);
        } else _e(e, a);
        return (o = be(a, "script")).length > 0 && we(o, !l && be(e, "script")), a;
      },
      cleanData: function cleanData(e) {
        for (var t, i, n, r = S.event.special, s = 0; void 0 !== (i = e[s]); s++) {
          if (U(i)) {
            if (t = i[K.expando]) {
              if (t.events) for (n in t.events) {
                r[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
              }
              i[K.expando] = void 0;
            }

            i[Z.expando] && (i[Z.expando] = void 0);
          }
        }
      }
    }), S.fn.extend({
      detach: function detach(e) {
        return He(this, e, !0);
      },
      remove: function remove(e) {
        return He(this, e);
      },
      text: function text(e) {
        return $(this, function (e) {
          return void 0 === e ? S.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Be(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Be(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (S.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return S.clone(this, e, t);
        });
      },
      html: function html(e) {
        return $(this, function (e) {
          var t = this[0] || {},
              i = 0,
              n = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Pe.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = S.htmlPrefilter(e);

            try {
              for (; i < n; i++) {
                1 === (t = this[i] || {}).nodeType && (S.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return Be(this, arguments, function (t) {
          var i = this.parentNode;
          S.inArray(this, e) < 0 && (S.cleanData(be(this)), i && i.replaceChild(t, this));
        }, e);
      }
    }), S.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      S.fn[e] = function (e) {
        for (var i, n = [], r = S(e), s = r.length - 1, o = 0; o <= s; o++) {
          i = o === s ? this : this.clone(!0), S(r[o])[t](i), u.apply(n, i.get());
        }

        return this.pushStack(n);
      };
    });

    var Re = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
        We = function We(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = i), t.getComputedStyle(e);
    },
        Fe = function Fe(e, t, i) {
      var n,
          r,
          s = {};

      for (r in t) {
        s[r] = e.style[r], e.style[r] = t[r];
      }

      for (r in n = i.call(e), t) {
        e.style[r] = s[r];
      }

      return n;
    },
        $e = new RegExp(re.join("|"), "i");

    function Ge(e, t, i) {
      var n,
          r,
          s,
          o,
          a = e.style;
      return (i = i || We(e)) && ("" !== (o = i.getPropertyValue(t) || i[t]) || oe(e) || (o = S.style(e, t)), !g.pixelBoxStyles() && Re.test(o) && $e.test(t) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o;
    }

    function Ye(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(u).appendChild(c);
          var e = i.getComputedStyle(c);
          n = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", s = 12 === t(c.offsetWidth / 3), se.removeChild(u), c = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var n,
          r,
          s,
          o,
          a,
          l,
          u = b.createElement("div"),
          c = b.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, S.extend(g, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), r;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), o;
        },
        pixelPosition: function pixelPosition() {
          return e(), n;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), s;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var e, t, n, r;
          return null == a && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", se.appendChild(e).appendChild(t).appendChild(n), r = i.getComputedStyle(t), a = parseInt(r.height) > 3, se.removeChild(e)), a;
        }
      }));
    }();
    var Ve = ["Webkit", "Moz", "ms"],
        Xe = b.createElement("div").style,
        Ue = {};

    function Qe(e) {
      var t = S.cssProps[e] || Ue[e];
      return t || (e in Xe ? e : Ue[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), i = Ve.length; i--;) {
          if ((e = Ve[i] + t) in Xe) return e;
        }
      }(e) || e);
    }

    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        et = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function tt(e, t, i) {
      var n = ne.exec(t);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
    }

    function it(e, t, i, n, r, s) {
      var o = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
      if (i === (n ? "border" : "content")) return 0;

      for (; o < 4; o += 2) {
        "margin" === i && (l += S.css(e, i + re[o], !0, r)), n ? ("content" === i && (l -= S.css(e, "padding" + re[o], !0, r)), "margin" !== i && (l -= S.css(e, "border" + re[o] + "Width", !0, r))) : (l += S.css(e, "padding" + re[o], !0, r), "padding" !== i ? l += S.css(e, "border" + re[o] + "Width", !0, r) : a += S.css(e, "border" + re[o] + "Width", !0, r));
      }

      return !n && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l;
    }

    function nt(e, t, i) {
      var n = We(e),
          r = (!g.boxSizingReliable() || i) && "border-box" === S.css(e, "boxSizing", !1, n),
          s = r,
          o = Ge(e, t, n),
          a = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Re.test(o)) {
        if (!i) return o;
        o = "auto";
      }

      return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && O(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === S.css(e, "display", !1, n)) && e.getClientRects().length && (r = "border-box" === S.css(e, "boxSizing", !1, n), (s = a in e) && (o = e[a])), (o = parseFloat(o) || 0) + it(e, t, i || (r ? "border" : "content"), s, n, o) + "px";
    }

    function rt(e, t, i, n, r) {
      return new rt.prototype.init(e, t, i, n, r);
    }

    S.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var i = Ge(e, "opacity");
              return "" === i ? "1" : i;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
              s,
              o,
              a = X(t),
              l = Ze.test(t),
              u = e.style;
          if (l || (t = Qe(a)), o = S.cssHooks[t] || S.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(e, !1, n)) ? r : u[t];
          "string" === (s = _typeof(i)) && (r = ne.exec(i)) && r[1] && (i = ue(e, t, r), s = "number"), null != i && i == i && ("number" !== s || l || (i += r && r[3] || (S.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (l ? u.setProperty(t, i) : u[t] = i));
        }
      },
      css: function css(e, t, i, n) {
        var r,
            s,
            o,
            a = X(t);
        return Ze.test(t) || (t = Qe(a)), (o = S.cssHooks[t] || S.cssHooks[a]) && "get" in o && (r = o.get(e, !0, i)), void 0 === r && (r = Ge(e, t, n)), "normal" === r && t in et && (r = et[t]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r;
      }
    }), S.each(["height", "width"], function (e, t) {
      S.cssHooks[t] = {
        get: function get(e, i, n) {
          if (i) return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, n) : Fe(e, Je, function () {
            return nt(e, t, n);
          });
        },
        set: function set(e, i, n) {
          var r,
              s = We(e),
              o = !g.scrollboxSize() && "absolute" === s.position,
              a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, s),
              l = n ? it(e, t, n, a, s) : 0;
          return a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - it(e, t, "border", !1, s) - .5)), l && (r = ne.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = S.css(e, t)), tt(0, i, l);
        }
      };
    }), S.cssHooks.marginLeft = Ye(g.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), S.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      S.cssHooks[e + t] = {
        expand: function expand(i) {
          for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) {
            r[e + re[n] + t] = s[n] || s[n - 2] || s[0];
          }

          return r;
        }
      }, "margin" !== e && (S.cssHooks[e + t].set = tt);
    }), S.fn.extend({
      css: function css(e, t) {
        return $(this, function (e, t, i) {
          var n,
              r,
              s = {},
              o = 0;

          if (Array.isArray(t)) {
            for (n = We(e), r = t.length; o < r; o++) {
              s[t[o]] = S.css(e, t[o], !1, n);
            }

            return s;
          }

          return void 0 !== i ? S.style(e, t, i) : S.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), S.Tween = rt, rt.prototype = {
      constructor: rt,
      init: function init(e, t, i, n, r, s) {
        this.elem = e, this.prop = i, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (S.cssNumber[i] ? "" : "px");
      },
      cur: function cur() {
        var e = rt.propHooks[this.prop];
        return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            i = rt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : rt.propHooks._default.set(this), this;
      }
    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, S.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, S.fx = rt.prototype.init, S.fx.step = {};
    var st,
        ot,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
      ot && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, S.fx.interval), S.fx.tick());
    }

    function ct() {
      return i.setTimeout(function () {
        st = void 0;
      }), st = Date.now();
    }

    function dt(e, t) {
      var i,
          n = 0,
          r = {
        height: e
      };

      for (t = t ? 1 : 0; n < 4; n += 2 - t) {
        r["margin" + (i = re[n])] = r["padding" + i] = e;
      }

      return t && (r.opacity = r.width = e), r;
    }

    function ht(e, t, i) {
      for (var n, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), s = 0, o = r.length; s < o; s++) {
        if (n = r[s].call(i, t, e)) return n;
      }
    }

    function ft(e, t, i) {
      var n,
          r,
          s = 0,
          o = ft.prefilters.length,
          a = S.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (r) return !1;

        for (var t = st || ct(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) {
          u.tweens[s].run(n);
        }

        return a.notifyWith(e, [u, n, i]), n < 1 && o ? i : (o || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
      },
          u = a.promise({
        elem: e,
        props: S.extend({}, t),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: st || ct(),
        duration: i.duration,
        tweens: [],
        createTween: function createTween(t, i) {
          var n = S.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(n), n;
        },
        stop: function stop(t) {
          var i = 0,
              n = t ? u.tweens.length : 0;
          if (r) return this;

          for (r = !0; i < n; i++) {
            u.tweens[i].run(1);
          }

          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        }
      }),
          c = u.props;

      for (!function (e, t) {
        var i, n, r, s, o;

        for (i in e) {
          if (r = t[n = X(i)], s = e[i], Array.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (o = S.cssHooks[n]) && ("expand" in o)) for (i in s = o.expand(s), delete e[n], s) {
            (i in e) || (e[i] = s[i], t[i] = r);
          } else t[n] = r;
        }
      }(c, u.opts.specialEasing); s < o; s++) {
        if (n = ft.prefilters[s].call(u, e, c, u.opts)) return m(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
      }

      return S.map(c, ht, u), m(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u;
    }

    S.Animation = S.extend(ft, {
      tweeners: {
        "*": [function (e, t) {
          var i = this.createTween(e, t);
          return ue(i.elem, e, ne.exec(t), i), i;
        }]
      },
      tweener: function tweener(e, t) {
        m(e) ? (t = e, e = ["*"]) : e = e.match(_);

        for (var i, n = 0, r = e.length; n < r; n++) {
          i = e[n], ft.tweeners[i] = ft.tweeners[i] || [], ft.tweeners[i].unshift(t);
        }
      },
      prefilters: [function (e, t, i) {
        var n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d = "width" in t || "height" in t,
            h = this,
            f = {},
            p = e.style,
            v = e.nodeType && le(e),
            g = K.get(e, "fxshow");

        for (n in i.queue || (null == (o = S._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
          o.unqueued || a();
        }), o.unqueued++, h.always(function () {
          h.always(function () {
            o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
          });
        })), t) {
          if (r = t[n], at.test(r)) {
            if (delete t[n], s = s || "toggle" === r, r === (v ? "hide" : "show")) {
              if ("show" !== r || !g || void 0 === g[n]) continue;
              v = !0;
            }

            f[n] = g && g[n] || S.style(e, n);
          }
        }

        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f)) for (n in d && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = K.get(e, "display")), "none" === (c = S.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = S.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(e, "float") && (l || (h.done(function () {
          p.display = u;
        }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function () {
          p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2];
        })), l = !1, f) {
          l || (g ? "hidden" in g && (v = g.hidden) : g = K.access(e, "fxshow", {
            display: u
          }), s && (g.hidden = !v), v && he([e], !0), h.done(function () {
            for (n in v || he([e]), K.remove(e, "fxshow"), f) {
              S.style(e, n, f[n]);
            }
          })), l = ht(v ? g[n] : 0, n, h), n in g || (g[n] = l.start, v && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      }
    }), S.speed = function (e, t, i) {
      var n = e && "object" == _typeof(e) ? S.extend({}, e) : {
        complete: i || !i && t || m(e) && e,
        duration: e,
        easing: i && t || t && !m(t) && t
      };
      return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
        m(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue);
      }, n;
    }, S.fn.extend({
      fadeTo: function fadeTo(e, t, i, n) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n);
      },
      animate: function animate(e, t, i, n) {
        var r = S.isEmptyObject(e),
            s = S.speed(t, i, n),
            o = function o() {
          var t = ft(this, S.extend({}, e), s);
          (r || K.get(this, "finish")) && t.stop(!0);
        };

        return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
      },
      stop: function stop(e, t, i) {
        var n = function n(e) {
          var t = e.stop;
          delete e.stop, t(i);
        };

        return "string" != typeof e && (i = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              r = null != e && e + "queueHooks",
              s = S.timers,
              o = K.get(this);
          if (r) o[r] && o[r].stop && n(o[r]);else for (r in o) {
            o[r] && o[r].stop && lt.test(r) && n(o[r]);
          }

          for (r = s.length; r--;) {
            s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
          }

          !t && i || S.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              i = K.get(this),
              n = i[e + "queue"],
              r = i[e + "queueHooks"],
              s = S.timers,
              o = n ? n.length : 0;

          for (i.finish = !0, S.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) {
            s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          }

          for (t = 0; t < o; t++) {
            n[t] && n[t].finish && n[t].finish.call(this);
          }

          delete i.finish;
        });
      }
    }), S.each(["toggle", "show", "hide"], function (e, t) {
      var i = S.fn[t];

      S.fn[t] = function (e, n, r) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(t, !0), e, n, r);
      };
    }), S.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      S.fn[e] = function (e, i, n) {
        return this.animate(t, e, i, n);
      };
    }), S.timers = [], S.fx.tick = function () {
      var e,
          t = 0,
          i = S.timers;

      for (st = Date.now(); t < i.length; t++) {
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      }

      i.length || S.fx.stop(), st = void 0;
    }, S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function () {
      ot || (ot = !0, ut());
    }, S.fx.stop = function () {
      ot = null;
    }, S.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, S.fn.delay = function (e, t) {
      return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
        var r = i.setTimeout(t, e);

        n.stop = function () {
          i.clearTimeout(r);
        };
      });
    }, function () {
      var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
      e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
    }();
    var pt,
        vt = S.expr.attrHandle;
    S.fn.extend({
      attr: function attr(e, t) {
        return $(this, S.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      }
    }), S.extend({
      attr: function attr(e, t, i) {
        var n,
            r,
            s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === s && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!g.radioValue && "radio" === t && O(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var i,
            n = 0,
            r = t && t.match(_);
        if (r && 1 === e.nodeType) for (; i = r[n++];) {
          e.removeAttribute(i);
        }
      }
    }), pt = {
      set: function set(e, t, i) {
        return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i;
      }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = vt[t] || S.find.attr;

      vt[t] = function (e, t, n) {
        var r,
            s,
            o = t.toLowerCase();
        return n || (s = vt[o], vt[o] = r, r = null != i(e, t, n) ? o : null, vt[o] = s), r;
      };
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function yt(e) {
      return (e.match(_) || []).join(" ");
    }

    function bt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function wt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(_) || [];
    }

    S.fn.extend({
      prop: function prop(e, t) {
        return $(this, S.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      }
    }), S.extend({
      prop: function prop(e, t, i) {
        var n,
            r,
            s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = S.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), g.optSelected || (S.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      S.propFix[this.toLowerCase()] = this;
    }), S.fn.extend({
      addClass: function addClass(e) {
        var t,
            i,
            n,
            r,
            s,
            o,
            a,
            l = 0;
        if (m(e)) return this.each(function (t) {
          S(this).addClass(e.call(this, t, bt(this)));
        });
        if ((t = wt(e)).length) for (; i = this[l++];) {
          if (r = bt(i), n = 1 === i.nodeType && " " + yt(r) + " ") {
            for (o = 0; s = t[o++];) {
              n.indexOf(" " + s + " ") < 0 && (n += s + " ");
            }

            r !== (a = yt(n)) && i.setAttribute("class", a);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            i,
            n,
            r,
            s,
            o,
            a,
            l = 0;
        if (m(e)) return this.each(function (t) {
          S(this).removeClass(e.call(this, t, bt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = wt(e)).length) for (; i = this[l++];) {
          if (r = bt(i), n = 1 === i.nodeType && " " + yt(r) + " ") {
            for (o = 0; s = t[o++];) {
              for (; n.indexOf(" " + s + " ") > -1;) {
                n = n.replace(" " + s + " ", " ");
              }
            }

            r !== (a = yt(n)) && i.setAttribute("class", a);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var i = _typeof(e),
            n = "string" === i || Array.isArray(e);

        return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (i) {
          S(this).toggleClass(e.call(this, i, bt(this), t), t);
        }) : this.each(function () {
          var t, r, s, o;
          if (n) for (r = 0, s = S(this), o = wt(e); t = o[r++];) {
            s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
          } else void 0 !== e && "boolean" !== i || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            i,
            n = 0;

        for (t = " " + e + " "; i = this[n++];) {
          if (1 === i.nodeType && (" " + yt(bt(i)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var xt = /\r/g;
    S.fn.extend({
      val: function val(e) {
        var t,
            i,
            n,
            r = this[0];
        return arguments.length ? (n = m(e), this.each(function (i) {
          var r;
          1 === this.nodeType && (null == (r = n ? e.call(this, i, S(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = S.map(r, function (e) {
            return null == e ? "" : e + "";
          })), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
        })) : r ? (t = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(xt, "") : null == i ? "" : i : void 0;
      }
    }), S.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : yt(S.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                i,
                n,
                r = e.options,
                s = e.selectedIndex,
                o = "select-one" === e.type,
                a = o ? null : [],
                l = o ? s + 1 : r.length;

            for (n = s < 0 ? l : o ? s : 0; n < l; n++) {
              if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !O(i.parentNode, "optgroup"))) {
                if (t = S(i).val(), o) return t;
                a.push(t);
              }
            }

            return a;
          },
          set: function set(e, t) {
            for (var i, n, r = e.options, s = S.makeArray(t), o = r.length; o--;) {
              ((n = r[o]).selected = S.inArray(S.valHooks.option.get(n), s) > -1) && (i = !0);
            }

            return i || (e.selectedIndex = -1), s;
          }
        }
      }
    }), S.each(["radio", "checkbox"], function () {
      S.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1;
        }
      }, g.checkOn || (S.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), g.focusin = "onfocusin" in i;

    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    S.extend(S.event, {
      trigger: function trigger(e, t, n, r) {
        var s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p = [n || b],
            v = f.call(e, "type") ? e.type : e,
            g = f.call(e, "namespace") ? e.namespace.split(".") : [];

        if (o = h = a = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(v + S.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), v = g.shift(), g.sort()), u = v.indexOf(":") < 0 && "on" + v, (e = e[S.expando] ? e : new S.Event(v, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), d = S.event.special[v] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
          if (!r && !d.noBubble && !y(n)) {
            for (l = d.delegateType || v, Tt.test(l + v) || (o = o.parentNode); o; o = o.parentNode) {
              p.push(o), a = o;
            }

            a === (n.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || i);
          }

          for (s = 0; (o = p[s++]) && !e.isPropagationStopped();) {
            h = o, e.type = s > 1 ? l : d.bindType || v, (c = (K.get(o, "events") || Object.create(null))[e.type] && K.get(o, "handle")) && c.apply(o, t), (c = u && o[u]) && c.apply && U(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
          }

          return e.type = v, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !U(n) || u && m(n[v]) && !y(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, St), n[v](), e.isPropagationStopped() && h.removeEventListener(v, St), S.event.triggered = void 0, a && (n[u] = a)), e.result;
        }
      },
      simulate: function simulate(e, t, i) {
        var n = S.extend(new S.Event(), i, {
          type: e,
          isSimulated: !0
        });
        S.event.trigger(n, null, t);
      }
    }), S.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var i = this[0];
        if (i) return S.event.trigger(e, t, i, !0);
      }
    }), g.focusin || S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var i = function i(e) {
        S.event.simulate(t, e.target, S.event.fix(e));
      };

      S.event.special[t] = {
        setup: function setup() {
          var n = this.ownerDocument || this.document || this,
              r = K.access(n, t);
          r || n.addEventListener(e, i, !0), K.access(n, t, (r || 0) + 1);
        },
        teardown: function teardown() {
          var n = this.ownerDocument || this.document || this,
              r = K.access(n, t) - 1;
          r ? K.access(n, t, r) : (n.removeEventListener(e, i, !0), K.remove(n, t));
        }
      };
    });
    var Ct = i.location,
        Et = {
      guid: Date.now()
    },
        At = /\?/;

    S.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new i.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
    };

    var kt = /\[\]$/,
        Lt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;

    function Pt(e, t, i, n) {
      var r;
      if (Array.isArray(t)) S.each(t, function (t, r) {
        i || kt.test(e) ? n(e, r) : Pt(e + "[" + ("object" == _typeof(r) && null != r ? t : "") + "]", r, i, n);
      });else if (i || "object" !== T(t)) n(e, t);else for (r in t) {
        Pt(e + "[" + r + "]", t[r], i, n);
      }
    }

    S.param = function (e, t) {
      var i,
          n = [],
          r = function r(e, t) {
        var i = m(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
        r(this.name, this.value);
      });else for (i in e) {
        Pt(i, e[i], t, r);
      }
      return n.join("&");
    }, S.fn.extend({
      serialize: function serialize() {
        return S.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !S(this).is(":disabled") && Mt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ve.test(e));
        }).map(function (e, t) {
          var i = S(this).val();
          return null == i ? null : Array.isArray(i) ? S.map(i, function (e) {
            return {
              name: t.name,
              value: e.replace(Lt, "\r\n")
            };
          }) : {
            name: t.name,
            value: i.replace(Lt, "\r\n")
          };
        }).get();
      }
    });
    var It = /%20/g,
        Dt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        qt = {},
        Bt = {},
        Ht = "*/".concat("*"),
        Rt = b.createElement("a");

    function Wt(e) {
      return function (t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n,
            r = 0,
            s = t.toLowerCase().match(_) || [];
        if (m(i)) for (; n = s[r++];) {
          "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
        }
      };
    }

    function Ft(e, t, i, n) {
      var r = {},
          s = e === Bt;

      function o(a) {
        var l;
        return r[a] = !0, S.each(e[a] || [], function (e, a) {
          var u = a(t, i, n);
          return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1);
        }), l;
      }

      return o(t.dataTypes[0]) || !r["*"] && o("*");
    }

    function $t(e, t) {
      var i,
          n,
          r = S.ajaxSettings.flatOptions || {};

      for (i in t) {
        void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
      }

      return n && S.extend(!0, e, n), e;
    }

    Rt.href = Ct.href, S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ct.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Wt(qt),
      ajaxTransport: Wt(Bt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            f = S.ajaxSetup({}, t),
            p = f.context || f,
            v = f.context && (p.nodeType || p.jquery) ? S(p) : S.event,
            g = S.Deferred(),
            m = S.Callbacks("once memory"),
            y = f.statusCode || {},
            w = {},
            x = {},
            T = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (u) {
              if (!o) for (o = {}; t = Nt.exec(s);) {
                o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = o[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return u ? s : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == u && (f.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (u) C.always(e[C.status]);else for (t in e) {
              y[t] = [y[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return n && n.abort(t), E(0, t), this;
          }
        };

        if (g.promise(C), f.url = ((e || f.url || Ct.href) + "").replace(_t, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(_) || [""], null == f.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = f.url, l.href = l.href, f.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), Ft(qt, f, t, C), u) return C;

        for (d in (c = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !zt.test(f.type), r = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(It, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (At.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(jt, "$1"), h = (At.test(r) ? "&" : "?") + "_=" + Et.guid++ + h), f.url = r + h), f.ifModified && (S.lastModified[r] && C.setRequestHeader("If-Modified-Since", S.lastModified[r]), S.etag[r] && C.setRequestHeader("If-None-Match", S.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          C.setRequestHeader(d, f.headers[d]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || u)) return C.abort();

        if (T = "abort", m.add(f.complete), C.done(f.success), C.fail(f.error), n = Ft(Bt, f, t, C)) {
          if (C.readyState = 1, c && v.trigger("ajaxSend", [C, f]), u) return C;
          f.async && f.timeout > 0 && (a = i.setTimeout(function () {
            C.abort("timeout");
          }, f.timeout));

          try {
            u = !1, n.send(w, E);
          } catch (e) {
            if (u) throw e;
            E(-1, e);
          }
        } else E(-1, "No Transport");

        function E(e, t, o, l) {
          var d,
              h,
              b,
              w,
              x,
              T = t;
          u || (u = !0, a && i.clearTimeout(a), n = void 0, s = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, o && (w = function (e, t, i) {
            for (var n, r, s, o, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (n) for (r in a) {
              if (a[r] && a[r].test(n)) {
                l.unshift(r);
                break;
              }
            }
            if (l[0] in i) s = l[0];else {
              for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                  s = r;
                  break;
                }

                o || (o = r);
              }

              s = s || o;
            }
            if (s) return s !== l[0] && l.unshift(s), i[s];
          }(f, C, o)), !d && S.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {}), w = function (e, t, i, n) {
            var r,
                s,
                o,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
            if (c[1]) for (o in e.converters) {
              u[o.toLowerCase()] = e.converters[o];
            }

            for (s = c.shift(); s;) {
              if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift()) if ("*" === s) s = l;else if ("*" !== l && l !== s) {
                if (!(o = u[l + " " + s] || u["* " + s])) for (r in u) {
                  if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                    break;
                  }
                }
                if (!0 !== o) if (o && e["throws"]) t = o(t);else try {
                  t = o(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: o ? e : "No conversion from " + l + " to " + s
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(f, w, C, d), d ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (S.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (S.etag[r] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, h = w.data, d = !(b = w.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", d ? g.resolveWith(p, [h, T, C]) : g.rejectWith(p, [C, T, b]), C.statusCode(y), y = void 0, c && v.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? h : b]), m.fireWith(p, [C, T]), c && (v.trigger("ajaxComplete", [C, f]), --S.active || S.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, i) {
        return S.get(e, t, i, "json");
      },
      getScript: function getScript(e, t) {
        return S.get(e, void 0, t, "script");
      }
    }), S.each(["get", "post"], function (e, t) {
      S[t] = function (e, i, n, r) {
        return m(i) && (r = r || n, n = i, i = void 0), S.ajax(S.extend({
          url: e,
          type: t,
          dataType: r,
          data: i,
          success: n
        }, S.isPlainObject(e) && e));
      };
    }), S.ajaxPrefilter(function (e) {
      var t;

      for (t in e.headers) {
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }
    }), S._evalUrl = function (e, t, i) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          S.globalEval(e, t, i);
        }
      });
    }, S.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return m(e) ? this.each(function (t) {
          S(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = S(this),
              i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = m(e);
        return this.each(function (i) {
          S(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          S(this).replaceWith(this.childNodes);
        }), this;
      }
    }), S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }, S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, S.ajaxSettings.xhr = function () {
      try {
        return new i.XMLHttpRequest();
      } catch (e) {}
    };
    var Gt = {
      0: 200,
      1223: 204
    },
        Yt = S.ajaxSettings.xhr();
    g.cors = !!Yt && "withCredentials" in Yt, g.ajax = Yt = !!Yt, S.ajaxTransport(function (e) {
      var _t3, n;

      if (g.cors || Yt && !e.crossDomain) return {
        send: function send(r, s) {
          var o,
              a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) {
            a[o] = e.xhrFields[o];
          }

          for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
            a.setRequestHeader(o, r[o]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Gt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t3(), n = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
            4 === a.readyState && i.setTimeout(function () {
              _t3 && n();
            });
          }, _t3 = _t3("abort");

          try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), S.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return S.globalEval(e), e;
        }
      }
    }), S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), S.ajaxTransport("script", function (e) {
      var t, _i2;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(n, r) {
          t = S("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _i2 = function i(e) {
            t.remove(), _i2 = null, e && r("error" === e.type ? 404 : 200, e.type);
          }), b.head.appendChild(t[0]);
        },
        abort: function abort() {
          _i2 && _i2();
        }
      };
    });
    var Vt,
        Xt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Xt.pop() || S.expando + "_" + Et.guid++;
        return this[e] = !0, e;
      }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
          s,
          o,
          a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return o || S.error(r + " was not called"), o[0];
      }, e.dataTypes[0] = "json", s = i[r], i[r] = function () {
        o = arguments;
      }, n.always(function () {
        void 0 === s ? S(i).removeProp(r) : i[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(s) && s(o[0]), o = s = void 0;
      }), "script";
    }), g.createHTMLDocument = ((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), S.parseHTML = function (e, t, i) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (g.createHTMLDocument ? ((n = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(n)) : t = b), s = !i && [], (r = M.exec(e)) ? [t.createElement(r[1])] : (r = Te([e], t, s), s && s.length && S(s).remove(), S.merge([], r.childNodes)));
      var n, r, s;
    }, S.fn.load = function (e, t, i) {
      var n,
          r,
          s,
          o = this,
          a = e.indexOf(" ");
      return a > -1 && (n = yt(e.slice(a)), e = e.slice(0, a)), m(t) ? (i = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), o.length > 0 && S.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        s = arguments, o.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e);
      }).always(i && function (e, t) {
        o.each(function () {
          i.apply(this, s || [e.responseText, t, e]);
        });
      }), this;
    }, S.expr.pseudos.animated = function (e) {
      return S.grep(S.timers, function (t) {
        return e === t.elem;
      }).length;
    }, S.offset = {
      setOffset: function setOffset(e, t, i) {
        var n,
            r,
            s,
            o,
            a,
            l,
            u = S.css(e, "position"),
            c = S(e),
            d = {};
        "static" === u && (e.style.position = "relative"), a = c.offset(), s = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (n = c.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), m(t) && (t = t.call(e, i, S.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), c.css(d));
      }
    }, S.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          S.offset.setOffset(this, e, t);
        });
        var t,
            i,
            n = this[0];
        return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
          top: t.top + i.pageYOffset,
          left: t.left + i.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              i,
              n = this[0],
              r = {
            top: 0,
            left: 0
          };
          if ("fixed" === S.css(n, "position")) t = n.getBoundingClientRect();else {
            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === S.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== n && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - r.top - S.css(n, "marginTop", !0),
            left: t.left - r.left - S.css(n, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === S.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || se;
        });
      }
    }), S.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var i = "pageYOffset" === t;

      S.fn[e] = function (n) {
        return $(this, function (e, n, r) {
          var s;
          if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[n];
          s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : e[n] = r;
        }, e, n, arguments.length);
      };
    }), S.each(["top", "left"], function (e, t) {
      S.cssHooks[t] = Ye(g.pixelPosition, function (e, i) {
        if (i) return i = Ge(e, t), Re.test(i) ? S(e).position()[t] + "px" : i;
      });
    }), S.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      S.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (i, n) {
        S.fn[n] = function (r, s) {
          var o = arguments.length && (i || "boolean" != typeof r),
              a = i || (!0 === r || !0 === s ? "margin" : "border");
          return $(this, function (t, i, r) {
            var s;
            return y(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? S.css(t, i, a) : S.style(t, i, r, a);
          }, t, o ? r : void 0, o);
        };
      });
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), S.fn.extend({
      bind: function bind(e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function undelegate(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
      },
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      S.fn[t] = function (e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
      };
    });
    var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
      var i, n, r;
      if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = a.call(arguments, 2), (r = function r() {
        return e.apply(t || this, n.concat(a.call(arguments)));
      }).guid = e.guid = e.guid || S.guid++, r;
    }, S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = O, S.isFunction = m, S.isWindow = y, S.camelCase = X, S.type = T, S.now = Date.now, S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Qt, "");
    }, void 0 === (n = function () {
      return S;
    }.apply(t, [])) || (e.exports = n);
    var Kt = i.jQuery,
        Zt = i.$;
    return S.noConflict = function (e) {
      return i.$ === S && (i.$ = Zt), e && i.jQuery === S && (i.jQuery = Kt), S;
    }, void 0 === r && (i.jQuery = i.$ = S), S;
  });
}, function (e, t, i) {
  "use strict";

  (function (t) {
    e.exports = function () {
      if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
      var e;

      try {
        e = this || new Function("return this")();
      } catch (e) {
        if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
        if ("object" == (typeof self === "undefined" ? "undefined" : _typeof(self))) return self;
        if (void 0 !== t) return t;
      }

      return e;
    }();
  }).call(this, i(5));
}, function (e, t, i) {
  var n = i(6);

  e.exports = function () {
    return n.Date.now();
  };
}, function (e, t, i) {
  (function (t) {
    var i = "object" == _typeof(t) && t && t.Object === Object && t;
    e.exports = i;
  }).call(this, i(5));
}, function (e, t, i) {
  var n = i(1),
      r = i(27),
      s = /^\s+|\s+$/g,
      o = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      u = parseInt;

  e.exports = function (e) {
    if ("number" == typeof e) return e;
    if (r(e)) return NaN;

    if (n(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = n(t) ? t + "" : t;
    }

    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(s, "");
    var i = a.test(e);
    return i || l.test(e) ? u(e.slice(2), i ? 2 : 8) : o.test(e) ? NaN : +e;
  };
}, function (e, t, i) {
  var n = i(28),
      r = i(31);

  e.exports = function (e) {
    return "symbol" == _typeof(e) || r(e) && "[object Symbol]" == n(e);
  };
}, function (e, t, i) {
  var n = i(7),
      r = i(29),
      s = i(30),
      o = n ? n.toStringTag : void 0;

  e.exports = function (e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : s(e);
  };
}, function (e, t, i) {
  var n = i(7),
      r = Object.prototype,
      s = r.hasOwnProperty,
      o = r.toString,
      a = n ? n.toStringTag : void 0;

  e.exports = function (e) {
    var t = s.call(e, a),
        i = e[a];

    try {
      e[a] = void 0;
      var n = !0;
    } catch (e) {}

    var r = o.call(e);
    return n && (t ? e[a] = i : delete e[a]), r;
  };
}, function (e, t) {
  var i = Object.prototype.toString;

  e.exports = function (e) {
    return i.call(e);
  };
}, function (e, t) {
  e.exports = function (e) {
    return null != e && "object" == _typeof(e);
  };
}, function (e, t, i) {
  var n, r;
  /*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   */

  !function (s, o) {
    "use strict";

    n = [i(2), i(3), i(33), i(35)], void 0 === (r = function (e, t, i, n) {
      return function (e, t, i, n, r) {
        var s = e.console,
            o = e.jQuery,
            a = function a() {},
            l = 0,
            u = {};

        function c(e, t) {
          var i = n.getQueryElement(e);

          if (i) {
            this.element = i, o && (this.$element = o(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
            var r = ++l;
            this.element.outlayerGUID = r, u[r] = this, this._create(), this._getOption("initLayout") && this.layout();
          } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (i || e));
        }

        c.namespace = "outlayer", c.Item = r, c.defaults = {
          containerStyle: {
            position: "relative"
          },
          initLayout: !0,
          originLeft: !0,
          originTop: !0,
          resize: !0,
          resizeContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
          }
        };
        var d = c.prototype;

        function h(e) {
          function t() {
            e.apply(this, arguments);
          }

          return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t;
        }

        n.extend(d, t.prototype), d.option = function (e) {
          n.extend(this.options, e);
        }, d._getOption = function (e) {
          var t = this.constructor.compatOptions[e];
          return t && void 0 !== this.options[t] ? this.options[t] : this.options[e];
        }, c.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer"
        }, d._create = function () {
          this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
        }, d.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }, d._itemize = function (e) {
          for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], r = 0; r < t.length; r++) {
            var s = new i(t[r], this);
            n.push(s);
          }

          return n;
        }, d._filterFindItemElements = function (e) {
          return n.filterFindElements(e, this.options.itemSelector);
        }, d.getItemElements = function () {
          return this.items.map(function (e) {
            return e.element;
          });
        }, d.layout = function () {
          this._resetLayout(), this._manageStamps();

          var e = this._getOption("layoutInstant"),
              t = void 0 !== e ? e : !this._isLayoutInited;

          this.layoutItems(this.items, t), this._isLayoutInited = !0;
        }, d._init = d.layout, d._resetLayout = function () {
          this.getSize();
        }, d.getSize = function () {
          this.size = i(this.element);
        }, d._getMeasurement = function (e, t) {
          var n,
              r = this.options[e];
          r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r), this[e] = n ? i(n)[t] : r) : this[e] = 0;
        }, d.layoutItems = function (e, t) {
          e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout();
        }, d._getItemsForLayout = function (e) {
          return e.filter(function (e) {
            return !e.isIgnored;
          });
        }, d._layoutItems = function (e, t) {
          if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach(function (e) {
              var n = this._getItemLayoutPosition(e);

              n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n);
            }, this), this._processLayoutQueue(i);
          }
        }, d._getItemLayoutPosition = function () {
          return {
            x: 0,
            y: 0
          };
        }, d._processLayoutQueue = function (e) {
          this.updateStagger(), e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t);
          }, this);
        }, d.updateStagger = function () {
          var e = this.options.stagger;
          if (null != e) return this.stagger = function (e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                n = t && t[2];
            if (!i.length) return 0;
            return (i = parseFloat(i)) * (f[n] || 1);
          }(e), this.stagger;
          this.stagger = 0;
        }, d._positionItem = function (e, t, i, n, r) {
          n ? e.goTo(t, i) : (e.stagger(r * this.stagger), e.moveTo(t, i));
        }, d._postLayout = function () {
          this.resizeContainer();
        }, d.resizeContainer = function () {
          if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();

            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
          }
        }, d._getContainerSize = a, d._setContainerMeasure = function (e, t) {
          if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px";
          }
        }, d._emitCompleteOnItems = function (e, t) {
          var i = this;

          function n() {
            i.dispatchEvent(e + "Complete", null, [t]);
          }

          var r = t.length;

          if (t && r) {
            var s = 0;
            t.forEach(function (t) {
              t.once(e, o);
            });
          } else n();

          function o() {
            ++s == r && n();
          }
        }, d.dispatchEvent = function (e, t, i) {
          var n = t ? [t].concat(i) : i;
          if (this.emitEvent(e, n), o) if (this.$element = this.$element || o(this.element), t) {
            var r = o.Event(t);
            r.type = e, this.$element.trigger(r, i);
          } else this.$element.trigger(e, i);
        }, d.ignore = function (e) {
          var t = this.getItem(e);
          t && (t.isIgnored = !0);
        }, d.unignore = function (e) {
          var t = this.getItem(e);
          t && delete t.isIgnored;
        }, d.stamp = function (e) {
          (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this));
        }, d.unstamp = function (e) {
          (e = this._find(e)) && e.forEach(function (e) {
            n.removeFrom(this.stamps, e), this.unignore(e);
          }, this);
        }, d._find = function (e) {
          if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e);
        }, d._manageStamps = function () {
          this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
        }, d._getBoundingRect = function () {
          var e = this.element.getBoundingClientRect(),
              t = this.size;
          this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
          };
        }, d._manageStamp = a, d._getElementOffset = function (e) {
          var t = e.getBoundingClientRect(),
              n = this._boundingRect,
              r = i(e);
          return {
            left: t.left - n.left - r.marginLeft,
            top: t.top - n.top - r.marginTop,
            right: n.right - t.right - r.marginRight,
            bottom: n.bottom - t.bottom - r.marginBottom
          };
        }, d.handleEvent = n.handleEvent, d.bindResize = function () {
          e.addEventListener("resize", this), this.isResizeBound = !0;
        }, d.unbindResize = function () {
          e.removeEventListener("resize", this), this.isResizeBound = !1;
        }, d.onresize = function () {
          this.resize();
        }, n.debounceMethod(c, "onresize", 100), d.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }, d.needsResizeLayout = function () {
          var e = i(this.element);
          return this.size && e && e.innerWidth !== this.size.innerWidth;
        }, d.addItems = function (e) {
          var t = this._itemize(e);

          return t.length && (this.items = this.items.concat(t)), t;
        }, d.appended = function (e) {
          var t = this.addItems(e);
          t.length && (this.layoutItems(t, !0), this.reveal(t));
        }, d.prepended = function (e) {
          var t = this._itemize(e);

          if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i);
          }
        }, d.reveal = function (e) {
          if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, i) {
              e.stagger(i * t), e.reveal();
            });
          }
        }, d.hide = function (e) {
          if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, i) {
              e.stagger(i * t), e.hide();
            });
          }
        }, d.revealItemElements = function (e) {
          var t = this.getItems(e);
          this.reveal(t);
        }, d.hideItemElements = function (e) {
          var t = this.getItems(e);
          this.hide(t);
        }, d.getItem = function (e) {
          for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i;
          }
        }, d.getItems = function (e) {
          e = n.makeArray(e);
          var t = [];
          return e.forEach(function (e) {
            var i = this.getItem(e);
            i && t.push(i);
          }, this), t;
        }, d.remove = function (e) {
          var t = this.getItems(e);
          this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
            e.remove(), n.removeFrom(this.items, e);
          }, this);
        }, d.destroy = function () {
          var e = this.element.style;
          e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
            e.destroy();
          }), this.unbindResize();
          var t = this.element.outlayerGUID;
          delete u[t], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace);
        }, c.data = function (e) {
          var t = (e = n.getQueryElement(e)) && e.outlayerGUID;
          return t && u[t];
        }, c.create = function (e, t) {
          var i = h(c);
          return i.defaults = n.extend({}, c.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, c.compatOptions), i.namespace = e, i.data = c.data, i.Item = h(r), n.htmlInit(i, e), o && o.bridget && o.bridget(e, i), i;
        };
        var f = {
          ms: 1,
          s: 1e3
        };
        return c.Item = r, c;
      }(s, e, t, i, n);
    }.apply(t, n)) || (e.exports = r);
  }(window);
}, function (e, t, i) {
  var n, r;
  !function (s, o) {
    n = [i(34)], void 0 === (r = function (e) {
      return function (e, t) {
        "use strict";

        var i = {
          extend: function extend(e, t) {
            for (var i in t) {
              e[i] = t[i];
            }

            return e;
          },
          modulo: function modulo(e, t) {
            return (e % t + t) % t;
          }
        },
            n = Array.prototype.slice;
        i.makeArray = function (e) {
          return Array.isArray(e) ? e : null == e ? [] : "object" == _typeof(e) && "number" == typeof e.length ? n.call(e) : [e];
        }, i.removeFrom = function (e, t) {
          var i = e.indexOf(t);
          -1 != i && e.splice(i, 1);
        }, i.getParent = function (e, i) {
          for (; e.parentNode && e != document.body;) {
            if (e = e.parentNode, t(e, i)) return e;
          }
        }, i.getQueryElement = function (e) {
          return "string" == typeof e ? document.querySelector(e) : e;
        }, i.handleEvent = function (e) {
          var t = "on" + e.type;
          this[t] && this[t](e);
        }, i.filterFindElements = function (e, n) {
          e = i.makeArray(e);
          var r = [];
          return e.forEach(function (e) {
            if (e instanceof HTMLElement) if (n) {
              t(e, n) && r.push(e);

              for (var i = e.querySelectorAll(n), s = 0; s < i.length; s++) {
                r.push(i[s]);
              }
            } else r.push(e);
          }), r;
        }, i.debounceMethod = function (e, t, i) {
          i = i || 100;
          var n = e.prototype[t],
              r = t + "Timeout";

          e.prototype[t] = function () {
            var e = this[r];
            clearTimeout(e);
            var t = arguments,
                s = this;
            this[r] = setTimeout(function () {
              n.apply(s, t), delete s[r];
            }, i);
          };
        }, i.docReady = function (e) {
          var t = document.readyState;
          "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
        }, i.toDashed = function (e) {
          return e.replace(/(.)([A-Z])/g, function (e, t, i) {
            return t + "-" + i;
          }).toLowerCase();
        };
        var r = e.console;
        return i.htmlInit = function (t, n) {
          i.docReady(function () {
            var s = i.toDashed(n),
                o = "data-" + s,
                a = document.querySelectorAll("[" + o + "]"),
                l = document.querySelectorAll(".js-" + s),
                u = i.makeArray(a).concat(i.makeArray(l)),
                c = o + "-options",
                d = e.jQuery;
            u.forEach(function (e) {
              var i,
                  s = e.getAttribute(o) || e.getAttribute(c);

              try {
                i = s && JSON.parse(s);
              } catch (t) {
                return void (r && r.error("Error parsing " + o + " on " + e.className + ": " + t));
              }

              var a = new t(e, i);
              d && d.data(e, n, a);
            });
          });
        }, i;
      }(s, e);
    }.apply(t, n)) || (e.exports = r);
  }(window);
}, function (e, t, i) {
  var n, r;
  !function (s, o) {
    "use strict";

    void 0 === (r = "function" == typeof (n = o) ? n.call(t, i, t, e) : n) || (e.exports = r);
  }(window, function () {
    "use strict";

    var e = function () {
      var e = window.Element.prototype;
      if (e.matches) return "matches";
      if (e.matchesSelector) return "matchesSelector";

      for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
        var n = t[i] + "MatchesSelector";
        if (e[n]) return n;
      }
    }();

    return function (t, i) {
      return t[e](i);
    };
  });
}, function (e, t, i) {
  var n, r, s;
  window, r = [i(2), i(3)], void 0 === (s = "function" == typeof (n = function n(e, t) {
    "use strict";

    var i = document.documentElement.style,
        n = "string" == typeof i.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        s = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[n],
        o = {
      transform: r,
      transition: n,
      transitionDuration: n + "Duration",
      transitionProperty: n + "Property",
      transitionDelay: n + "Delay"
    };

    function a(e, t) {
      e && (this.element = e, this.layout = t, this.position = {
        x: 0,
        y: 0
      }, this._create());
    }

    var l = a.prototype = Object.create(e.prototype);
    l.constructor = a, l._create = function () {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: "absolute"
      });
    }, l.handleEvent = function (e) {
      var t = "on" + e.type;
      this[t] && this[t](e);
    }, l.getSize = function () {
      this.size = t(this.element);
    }, l.css = function (e) {
      var t = this.element.style;

      for (var i in e) {
        t[o[i] || i] = e[i];
      }
    }, l.getPosition = function () {
      var e = getComputedStyle(this.element),
          t = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = e[t ? "left" : "right"],
          r = e[i ? "top" : "bottom"],
          s = parseFloat(n),
          o = parseFloat(r),
          a = this.layout.size;

      -1 != n.indexOf("%") && (s = s / 100 * a.width), -1 != r.indexOf("%") && (o = o / 100 * a.height), s = isNaN(s) ? 0 : s, o = isNaN(o) ? 0 : o, s -= t ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = o;
    }, l.layoutPosition = function () {
      var e = this.layout.size,
          t = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          r = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          o = i ? "right" : "left",
          a = this.position.x + e[r];

      t[s] = this.getXValue(a), t[o] = "";
      var l = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          c = n ? "bottom" : "top",
          d = this.position.y + e[l];
      t[u] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this]);
    }, l.getXValue = function (e) {
      var t = this.layout._getOption("horizontal");

      return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px";
    }, l.getYValue = function (e) {
      var t = this.layout._getOption("horizontal");

      return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px";
    }, l._transitionTo = function (e, t) {
      this.getPosition();
      var i = this.position.x,
          n = this.position.y,
          r = e == this.position.x && t == this.position.y;

      if (this.setPosition(e, t), !r || this.isTransitioning) {
        var s = e - i,
            o = t - n,
            a = {};
        a.transform = this.getTranslate(s, o), this.transition({
          to: a,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        });
      } else this.layoutPosition();
    }, l.getTranslate = function (e, t) {
      return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)";
    }, l.goTo = function (e, t) {
      this.setPosition(e, t), this.layoutPosition();
    }, l.moveTo = l._transitionTo, l.setPosition = function (e, t) {
      this.position.x = parseFloat(e), this.position.y = parseFloat(t);
    }, l._nonTransition = function (e) {
      for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) {
        e.onTransitionEnd[t].call(this);
      }
    }, l.transition = function (e) {
      if (parseFloat(this.layout.options.transitionDuration)) {
        var t = this._transn;

        for (var i in e.onTransitionEnd) {
          t.onEnd[i] = e.onTransitionEnd[i];
        }

        for (i in e.to) {
          t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
        }

        e.from && (this.css(e.from), this.element.offsetHeight), this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0;
      } else this._nonTransition(e);
    };
    var u = "opacity," + r.replace(/([A-Z])/g, function (e) {
      return "-" + e.toLowerCase();
    });
    l.enableTransition = function () {
      if (!this.isTransitioning) {
        var e = this.layout.options.transitionDuration;
        e = "number" == typeof e ? e + "ms" : e, this.css({
          transitionProperty: u,
          transitionDuration: e,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(s, this, !1);
      }
    }, l.onwebkitTransitionEnd = function (e) {
      this.ontransitionend(e);
    }, l.onotransitionend = function (e) {
      this.ontransitionend(e);
    };
    var c = {
      "-webkit-transform": "transform"
    };
    l.ontransitionend = function (e) {
      if (e.target === this.element) {
        var t = this._transn,
            i = c[e.propertyName] || e.propertyName;
        delete t.ingProperties[i], function (e) {
          for (var t in e) {
            return !1;
          }

          return !0;
        }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]);
      }
    }, l.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1;
    }, l._removeStyles = function (e) {
      var t = {};

      for (var i in e) {
        t[i] = "";
      }

      this.css(t);
    };
    var d = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
    };
    return l.removeTransitionStyles = function () {
      this.css(d);
    }, l.stagger = function (e) {
      e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms";
    }, l.removeElem = function () {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this]);
    }, l.remove = function () {
      n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
        this.removeElem();
      }), this.hide()) : this.removeElem();
    }, l.reveal = function () {
      delete this.isHidden, this.css({
        display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
        from: e.hiddenStyle,
        to: e.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: t
      });
    }, l.onRevealTransitionEnd = function () {
      this.isHidden || this.emitEvent("reveal");
    }, l.getHideRevealTransitionEndProperty = function (e) {
      var t = this.layout.options[e];
      if (t.opacity) return "opacity";

      for (var i in t) {
        return i;
      }
    }, l.hide = function () {
      this.isHidden = !0, this.css({
        display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
        from: e.visibleStyle,
        to: e.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: t
      });
    }, l.onHideTransitionEnd = function () {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"));
    }, l.destroy = function () {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      });
    }, a;
  }) ? n.apply(t, r) : n) || (e.exports = s);
}, function (e, t, i) {
  "use strict";

  i.r(t);
  var n = i(8),
      r = i.n(n),
      s = i(9),
      o = i.n(s),
      a = i(10),
      l = i.n(a),
      u = "bfred-it:object-fit-images",
      c = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      d = "undefined" == typeof Image ? {
    style: {
      "object-position": 1
    }
  } : new Image(),
      h = ("object-fit" in d.style),
      f = ("object-position" in d.style),
      p = ("background-size" in d.style),
      v = "string" == typeof d.currentSrc,
      g = d.getAttribute,
      m = d.setAttribute,
      y = !1;

  function b(e, t, i) {
    var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
    g.call(e, "src") !== n && m.call(e, "src", n);
  }

  function w(e, t) {
    e.naturalWidth ? t(e) : setTimeout(w, 100, e, t);
  }

  function x(e) {
    var t = function (e) {
      for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = c.exec(i));) {
        n[t[1]] = t[2];
      }

      return n;
    }(e),
        i = e[u];

    if (t["object-fit"] = t["object-fit"] || "fill", !i.img) {
      if ("fill" === t["object-fit"]) return;
      if (!i.skipTest && h && !t["object-position"]) return;
    }

    if (!i.img) {
      i.img = new Image(e.width, e.height), i.img.srcset = g.call(e, "data-ofi-srcset") || e.srcset, i.img.src = g.call(e, "data-ofi-src") || e.src, m.call(e, "data-ofi-src", e.src), e.srcset && m.call(e, "data-ofi-srcset", e.srcset), b(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");

      try {
        !function (e) {
          var t = {
            get: function get(t) {
              return e[u].img[t || "src"];
            },
            set: function set(t, i) {
              return e[u].img[i || "src"] = t, m.call(e, "data-ofi-" + i, t), x(e), t;
            }
          };
          Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
            get: function get() {
              return t.get("currentSrc");
            }
          }), Object.defineProperty(e, "srcset", {
            get: function get() {
              return t.get("srcset");
            },
            set: function set(e) {
              return t.set(e, "srcset");
            }
          });
        }(e);
      } catch (e) {
        window.console && console.warn("https://bit.ly/ofi-old-browser");
      }
    }

    !function (e) {
      if (e.srcset && !v && window.picturefill) {
        var t = window.picturefill._;
        e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
          reselect: !0
        }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
          reselect: !0
        })), e.currentSrc = e[t.ns].curSrc || e.src;
      }
    }(i.img), e.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? w(i.img, function () {
      i.img.naturalWidth > e.width || i.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto";
    }) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), w(i.img, function (t) {
      b(e, t.naturalWidth, t.naturalHeight);
    });
  }

  function T(e, t) {
    var i = !y && !e;
    if (t = t || {}, e = e || "img", f && !t.skipTest || !p) return !1;
    "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);

    for (var n = 0; n < e.length; n++) {
      e[n][u] = e[n][u] || {
        skipTest: t.skipTest
      }, x(e[n]);
    }

    i && (document.body.addEventListener("load", function (e) {
      "IMG" === e.target.tagName && T(e.target, {
        skipTest: t.skipTest
      });
    }, !0), y = !0, e = "img"), t.watchMQ && window.addEventListener("resize", T.bind(null, e, {
      skipTest: t.skipTest
    }));
  }

  T.supportsObjectFit = h, T.supportsObjectPosition = f, function () {
    function e(e, t) {
      return e[u] && e[u].img && ("src" === t || "srcset" === t) ? e[u].img : e;
    }

    f || (HTMLImageElement.prototype.getAttribute = function (t) {
      return g.call(e(this, t), t);
    }, HTMLImageElement.prototype.setAttribute = function (t, i) {
      return m.call(e(this, t), t, String(i));
    });
  }();
  var S = T;

  function C(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function E(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (i) {
      void 0 === e[i] ? e[i] = t[i] : C(t[i]) && C(e[i]) && Object.keys(t[i]).length > 0 && E(e[i], t[i]);
    });
  }

  var A = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function k() {
    var e = "undefined" != typeof document ? document : {};
    return E(e, A), e;
  }

  var L = {
    document: A,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function O() {
    var e = "undefined" != typeof window ? window : {};
    return E(e, L), e;
  }

  function M(e) {
    return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function P(e, t) {
    return (P = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function I() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function D(e, t, i) {
    return (D = I() ? Reflect.construct : function (e, t, i) {
      var n = [null];
      n.push.apply(n, t);
      var r = new (Function.bind.apply(e, n))();
      return i && P(r, i.prototype), r;
    }).apply(null, arguments);
  }

  function j(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (j = function j(e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }

      function n() {
        return D(e, arguments, M(this).constructor);
      }

      return n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), P(n, e);
    })(e);
  }

  var N = function (e) {
    var t, i;

    function n(t) {
      var i, n, r;
      return i = e.call.apply(e, [this].concat(t)) || this, n = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), r = n.__proto__, Object.defineProperty(n, "__proto__", {
        get: function get() {
          return r;
        },
        set: function set(e) {
          r.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = n).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n;
  }(j(Array));

  function z(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, z(e)) : t.push(e);
    }), t;
  }

  function _(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function q(e, t) {
    var i = O(),
        n = k(),
        r = [];
    if (!t && e instanceof N) return e;
    if (!e) return new N(r);

    if ("string" == typeof e) {
      var s = e.trim();

      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        var o = "div";
        0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select");
        var a = n.createElement(o);
        a.innerHTML = s;

        for (var l = 0; l < a.childNodes.length; l += 1) {
          r.push(a.childNodes[l]);
        }
      } else r = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], n = t.querySelectorAll(e), r = 0; r < n.length; r += 1) {
          i.push(n[r]);
        }

        return i;
      }(e.trim(), t || n);
    } else if (e.nodeType || e === i || e === n) r.push(e);else if (Array.isArray(e)) {
      if (e instanceof N) return e;
      r = e;
    }

    return new N(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) {
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      }

      return t;
    }(r));
  }

  q.fn = N.prototype;
  var B = "resize scroll".split(" ");

  function H(e) {
    return function () {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) {
        i[n] = arguments[n];
      }

      if (void 0 === i[0]) {
        for (var r = 0; r < this.length; r += 1) {
          B.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : q(this[r]).trigger(e));
        }

        return this;
      }

      return this.on.apply(this, [e].concat(i));
    };
  }

  H("click"), H("blur"), H("focus"), H("focusin"), H("focusout"), H("keyup"), H("keydown"), H("keypress"), H("submit"), H("change"), H("mousedown"), H("mousemove"), H("mouseup"), H("mouseenter"), H("mouseleave"), H("mouseout"), H("mouseover"), H("touchstart"), H("touchend"), H("touchmove"), H("resize"), H("scroll");
  var R = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = z(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, n);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = z(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, n);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = z(t.map(function (e) {
        return e.split(" ");
      }));
      return _(this, function (e) {
        return n.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = z(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        n.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === arguments.length) this[i].setAttribute(e, t);else for (var n in e) {
          this[i][n] = e[n], this[i].setAttribute(n, e[n]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = t[0],
          r = t[1],
          s = t[2],
          o = t[3];

      function a(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), q(t).is(r)) s.apply(t, i);else for (var n = q(t).parents(), o = 0; o < n.length; o += 1) {
            q(n[o]).is(r) && s.apply(n[o], i);
          }
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }

      "function" == typeof t[1] && (n = t[0], s = t[1], o = t[2], r = void 0), o || (o = !1);

      for (var u, c = n.split(" "), d = 0; d < this.length; d += 1) {
        var h = this[d];
        if (r) for (u = 0; u < c.length; u += 1) {
          var f = c[u];
          h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
            listener: s,
            proxyListener: a
          }), h.addEventListener(f, a, o);
        } else for (u = 0; u < c.length; u += 1) {
          var p = c[u];
          h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[p] || (h.dom7Listeners[p] = []), h.dom7Listeners[p].push({
            listener: s,
            proxyListener: l
          }), h.addEventListener(p, l, o);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var n = t[0],
          r = t[1],
          s = t[2],
          o = t[3];
      "function" == typeof t[1] && (n = t[0], s = t[1], o = t[2], r = void 0), o || (o = !1);

      for (var a = n.split(" "), l = 0; l < a.length; l += 1) {
        for (var u = a[l], c = 0; c < this.length; c += 1) {
          var d = this[c],
              h = void 0;
          if (!r && d.dom7Listeners ? h = d.dom7Listeners[u] : r && d.dom7LiveListeners && (h = d.dom7LiveListeners[u]), h && h.length) for (var f = h.length - 1; f >= 0; f -= 1) {
            var p = h[f];
            s && p.listener === s || s && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === s ? (d.removeEventListener(u, p.proxyListener, o), h.splice(f, 1)) : s || (d.removeEventListener(u, p.proxyListener, o), h.splice(f, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = O(), t = arguments.length, i = new Array(t), n = 0; n < t; n++) {
        i[n] = arguments[n];
      }

      for (var r = i[0].split(" "), s = i[1], o = 0; o < r.length; o += 1) {
        for (var a = r[o], l = 0; l < this.length; l += 1) {
          var u = this[l];

          if (e.CustomEvent) {
            var c = new e.CustomEvent(a, {
              detail: s,
              bubbles: !0,
              cancelable: !0
            });
            u.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), u.dispatchEvent(c), u.dom7EventData = [], delete u.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function i(n) {
        n.target === this && (e.call(this, n), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = O();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = O(),
            t = k(),
            i = this[0],
            n = i.getBoundingClientRect(),
            r = t.body,
            s = i.clientTop || r.clientTop || 0,
            o = i.clientLeft || r.clientLeft || 0,
            a = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: n.top + a - s,
          left: n.left + l - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i,
          n = O();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var r in e) {
              this[i].style[r] = e[r];
            }
          }

          return this;
        }

        if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          i,
          n = O(),
          r = k(),
          s = this[0];
      if (!s || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);

        for (t = q(e), i = 0; i < t.length; i += 1) {
          if (t[i] === s) return !0;
        }

        return !1;
      }

      if (e === r) return s === r;
      if (e === n) return s === n;

      if (e.nodeType || e instanceof N) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === s) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return q([]);

      if (e < 0) {
        var i = t + e;
        return q(i < 0 ? [] : [this[i]]);
      }

      return q([this[e]]);
    },
    append: function append() {
      for (var e, t = k(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var n = 0; n < this.length; n += 1) {
          if ("string" == typeof e) {
            var r = t.createElement("div");

            for (r.innerHTML = e; r.firstChild;) {
              this[n].appendChild(r.firstChild);
            }
          } else if (e instanceof N) for (var s = 0; s < e.length; s += 1) {
            this[n].appendChild(e[s]);
          } else this[n].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          i,
          n = k();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var r = n.createElement("div");

          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof N) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && q(this[0].nextElementSibling).is(e) ? q([this[0].nextElementSibling]) : q([]) : this[0].nextElementSibling ? q([this[0].nextElementSibling]) : q([]) : q([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          i = this[0];
      if (!i) return q([]);

      for (; i.nextElementSibling;) {
        var n = i.nextElementSibling;
        e ? q(n).is(e) && t.push(n) : t.push(n), i = n;
      }

      return q(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && q(t.previousElementSibling).is(e) ? q([t.previousElementSibling]) : q([]) : t.previousElementSibling ? q([t.previousElementSibling]) : q([]);
      }

      return q([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          i = this[0];
      if (!i) return q([]);

      for (; i.previousElementSibling;) {
        var n = i.previousElementSibling;
        e ? q(n).is(e) && t.push(n) : t.push(n), i = n;
      }

      return q(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? q(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return q(t);
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var n = this[i].parentNode; n;) {
          e ? q(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
        }
      }

      return q(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? q([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) {
          t.push(n[r]);
        }
      }

      return q(t);
    },
    children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var n = this[i].children, r = 0; r < n.length; r += 1) {
          e && !q(n[r]).is(e) || t.push(n[r]);
        }
      }

      return q(t);
    },
    filter: function filter(e) {
      return q(_(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };
  Object.keys(R).forEach(function (e) {
    q.fn[e] = R[e];
  });
  var W,
      F,
      $,
      G = q;

  function Y(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function V() {
    return Date.now();
  }

  function X(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function U() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var n = Object.keys(Object(i)), r = 0, s = n.length; r < s; r += 1) {
        var o = n[r],
            a = Object.getOwnPropertyDescriptor(i, o);
        void 0 !== a && a.enumerable && (X(e[o]) && X(i[o]) ? U(e[o], i[o]) : !X(e[o]) && X(i[o]) ? (e[o] = {}, U(e[o], i[o])) : e[o] = i[o]);
      }
    }

    return e;
  }

  function Q(e, t) {
    Object.keys(t).forEach(function (i) {
      X(t[i]) && Object.keys(t[i]).forEach(function (n) {
        "function" == typeof t[i][n] && (t[i][n] = t[i][n].bind(e));
      }), e[i] = t[i];
    });
  }

  function K() {
    return W || (W = function () {
      var e = O(),
          t = k();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), W;
  }

  function Z(e) {
    return void 0 === e && (e = {}), F || (F = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = K(),
          n = O(),
          r = n.navigator.platform,
          s = t || n.navigator.userAgent,
          o = {
        ios: !1,
        android: !1
      },
          a = n.screen.width,
          l = n.screen.height,
          u = s.match(/(Android);?[\s\/]+([\d.]+)?/),
          c = s.match(/(iPad).*OS\s([\d_]+)/),
          d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          f = "Win32" === r,
          p = "MacIntel" === r;
      return !c && p && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(a + "x" + l) >= 0 && ((c = s.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), p = !1), u && !f && (o.os = "android", o.android = !0), (c || h || d) && (o.os = "ios", o.ios = !0), o;
    }(e)), F;
  }

  function J() {
    return $ || ($ = function () {
      var e,
          t = O();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), $;
  }

  var ee = {
    name: "resize",
    create: function create() {
      var e = this;
      U(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = O();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function destroy(e) {
        var t = O();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  };

  function te() {
    return (te = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var ie = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = O(),
          n = this,
          r = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            n.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else n.emit("observerUpdate", e[0]);
      });
      r.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.observer.observers.push(r);
    },
    init: function init() {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      ne = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      Q(this, {
        observer: te({}, ie, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function re(e) {
    var t = k(),
        i = O(),
        n = this.touchEventsData,
        r = this.params,
        s = this.touches;

    if (!this.animating || !r.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var a = G(o.target);
      if ("wrapper" !== r.touchEventsTarget || a.closest(this.wrapperEl).length) if (n.isTouchEvent = "touchstart" === o.type, n.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!n.isTouchEvent && "button" in o && o.button > 0)) if (!n.isTouched || !n.isMoved) if (!!r.noSwipingClass && "" !== r.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (a = G(e.path[0])), r.noSwiping && a.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || a.closest(r.swipeHandler)[0]) {
        s.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, s.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var l = s.currentX,
            u = s.currentY,
            c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            d = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

        if (c && (l <= d || l >= i.innerWidth - d)) {
          if ("prevent" !== c) return;
          e.preventDefault();
        }

        if (U(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), s.startX = l, s.startY = u, n.touchStartTime = V(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== o.type) {
          var h = !0;
          a.is(n.formElements) && (h = !1), t.activeElement && G(t.activeElement).is(n.formElements) && t.activeElement !== a[0] && t.activeElement.blur();
          var f = h && this.allowTouchMove && r.touchStartPreventDefault;
          !r.touchStartForcePreventDefault && !f || a[0].isContentEditable || o.preventDefault();
        }

        this.emit("touchStart", o);
      }
    }
  }

  function se(e) {
    var t = k(),
        i = this.touchEventsData,
        n = this.params,
        r = this.touches,
        s = this.rtlTranslate,
        o = e;

    if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === o.type) {
        var a = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            l = "touchmove" === o.type ? a.pageX : o.pageX,
            u = "touchmove" === o.type ? a.pageY : o.pageY;
        if (o.preventedByNestedSwiper) return r.startX = l, void (r.startY = u);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (U(r, {
          startX: l,
          startY: u,
          currentX: l,
          currentY: u
        }), i.touchStartTime = V()));
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (this.isVertical()) {
          if (u < r.startY && this.translate <= this.maxTranslate() || u > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && G(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          r.currentX = l, r.currentY = u;
          var c = r.currentX - r.startX,
              d = r.currentY - r.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) < this.params.threshold)) {
            var h;
            if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + d * d >= 25 && (h = 180 * Math.atan2(Math.abs(d), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? h > n.touchAngle : 90 - h > n.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), i.isMoved || (n.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
              var f = this.isHorizontal() ? c : d;
              r.diff = f, f *= n.touchRatio, s && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var p = !0,
                  v = n.resistanceRatio;

              if (n.touchReleaseOnEdges && (v = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (p = !1, n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, v))) : f < 0 && i.currentTranslate < this.maxTranslate() && (p = !1, n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, v))), p && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
              }

              n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: r[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                time: V()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
  }

  function oe(e) {
    var t = this,
        i = t.touchEventsData,
        n = t.params,
        r = t.touches,
        s = t.rtlTranslate,
        o = t.$wrapperEl,
        a = t.slidesGrid,
        l = t.snapGrid,
        u = e;
    if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var c,
        d = V(),
        h = d - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap click", u), h < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)), i.lastClickTime = V(), Y(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = n.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate, !n.cssMode) if (n.freeMode) {
      if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (c > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

      if (n.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var f = i.velocities.pop(),
              p = i.velocities.pop(),
              v = f.position - p.position,
              g = f.time - p.time;
          t.velocity = v / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || V() - f.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var m = 1e3 * n.freeModeMomentumRatio,
            y = t.velocity * m,
            b = t.translate + y;
        s && (b = -b);
        var w,
            x,
            T = !1,
            S = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
        if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), w = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), n.loop && n.centeredSlides && (x = !0);else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), w = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), n.loop && n.centeredSlides && (x = !0);else if (n.freeModeSticky) {
          for (var C, E = 0; E < l.length; E += 1) {
            if (l[E] > -b) {
              C = E;
              break;
            }
          }

          b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
        }

        if (x && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (m = s ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), n.freeModeSticky) {
            var A = Math.abs((s ? -b : b) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            m = A < k ? n.speed : A < 2 * k ? 1.5 * n.speed : 2.5 * n.speed;
          }
        } else if (n.freeModeSticky) return void t.slideToClosest();

        n.freeModeMomentumBounce && T ? (t.updateProgress(w), t.setTransition(m), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout(function () {
            t.setTranslate(w), o.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(b), t.setTransition(m), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (n.freeModeSticky) return void t.slideToClosest();

      (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var L = 0, O = t.slidesSizesGrid[0], M = 0; M < a.length; M += M < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
        var P = M < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[M + P] ? c >= a[M] && c < a[M + P] && (L = M, O = a[M + P] - a[M]) : c >= a[M] && (L = M, O = a[a.length - 1] - a[a.length - 2]);
      }

      var I = (c - a[L]) / O,
          D = L < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;

      if (h > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (I >= n.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)), "prev" === t.swipeDirection && (I > 1 - n.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl) ? u.target === t.navigation.nextEl ? t.slideTo(L + D) : t.slideTo(L) : ("next" === t.swipeDirection && t.slideTo(L + D), "prev" === t.swipeDirection && t.slideTo(L));
      }
    }
  }

  function ae() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          n = this.allowSlidePrev,
          r = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
    }
  }

  function le(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function ue() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var ce = !1;

  function de() {}

  var he = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function fe(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  var pe = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i];
          n.params && U(e, n.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i],
              r = e[i] || {};
          n.on && t.on && Object.keys(n.on).forEach(function (e) {
            t.on(e, n.on[e]);
          }), n.create && n.create.bind(t)(r);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var r = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t);
        }), n;
      },
      once: function once(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;

        function r() {
          n.off(e, r), r.__emitterProxy && delete r.__emitterProxy;

          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++) {
            s[o] = arguments[o];
          }

          t.apply(n, s);
        }

        return r.__emitterProxy = t, n.on(e, r, i);
      },
      onAny: function onAny(e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function offAny(e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (n, r) {
            (n === t || n.__emitterProxy && n.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1);
          });
        }), i) : i;
      },
      emit: function emit() {
        var e,
            t,
            i,
            n = this;
        if (!n.eventsListeners) return n;

        for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) {
          s[o] = arguments[o];
        }

        "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), i = n) : (e = s[0].events, t = s[0].data, i = s[0].context || n), t.unshift(i);
        var a = Array.isArray(e) ? e : e.split(" ");
        return a.forEach(function (e) {
          n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(function (n) {
            n.apply(i, [e].concat(t));
          }), n.eventsListeners && n.eventsListeners[e] && n.eventsListeners[e].forEach(function (e) {
            e.apply(i, t);
          });
        }), n;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), U(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = O(),
            t = this.params,
            i = this.$wrapperEl,
            n = this.size,
            r = this.rtlTranslate,
            s = this.wrongRTL,
            o = this.virtual && t.virtual.enabled,
            a = o ? this.virtual.slides.length : this.slides.length,
            l = i.children("." + this.params.slideClass),
            u = o ? this.virtual.slides.length : l.length,
            c = [],
            d = [],
            h = [];

        function f(e, i) {
          return !t.cssMode || i !== l.length - 1;
        }

        var p = t.slidesOffsetBefore;
        "function" == typeof p && (p = t.slidesOffsetBefore.call(this));
        var v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            m = this.slidesGrid.length,
            y = t.spaceBetween,
            b = -p,
            w = 0,
            x = 0;

        if (void 0 !== n) {
          var T, S;
          "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * n), this.virtualSize = -y, r ? l.css({
            marginLeft: "",
            marginTop: ""
          }) : l.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (T = Math.floor(u / t.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

          for (var C, E = t.slidesPerColumn, A = T / E, k = Math.floor(u / t.slidesPerColumn), L = 0; L < u; L += 1) {
            S = 0;
            var M = l.eq(L);

            if (t.slidesPerColumn > 1) {
              var P = void 0,
                  I = void 0,
                  D = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var j = Math.floor(L / (t.slidesPerGroup * t.slidesPerColumn)),
                    N = L - t.slidesPerColumn * t.slidesPerGroup * j,
                    z = 0 === j ? t.slidesPerGroup : Math.min(Math.ceil((u - j * E * t.slidesPerGroup) / E), t.slidesPerGroup);
                P = (I = N - (D = Math.floor(N / z)) * z + j * t.slidesPerGroup) + D * T / E, M.css({
                  "-webkit-box-ordinal-group": P,
                  "-moz-box-ordinal-group": P,
                  "-ms-flex-order": P,
                  "-webkit-order": P,
                  order: P
                });
              } else "column" === t.slidesPerColumnFill ? (D = L - (I = Math.floor(L / E)) * E, (I > k || I === k && D === E - 1) && (D += 1) >= E && (D = 0, I += 1)) : I = L - (D = Math.floor(L / A)) * A;

              M.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== M.css("display")) {
              if ("auto" === t.slidesPerView) {
                var _ = e.getComputedStyle(M[0], null),
                    q = M[0].style.transform,
                    B = M[0].style.webkitTransform;

                if (q && (M[0].style.transform = "none"), B && (M[0].style.webkitTransform = "none"), t.roundLengths) S = this.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);else if (this.isHorizontal()) {
                  var H = parseFloat(_.getPropertyValue("width") || 0),
                      R = parseFloat(_.getPropertyValue("padding-left") || 0),
                      W = parseFloat(_.getPropertyValue("padding-right") || 0),
                      F = parseFloat(_.getPropertyValue("margin-left") || 0),
                      $ = parseFloat(_.getPropertyValue("margin-right") || 0),
                      G = _.getPropertyValue("box-sizing");

                  if (G && "border-box" === G) S = H + F + $;else {
                    var Y = M[0],
                        V = Y.clientWidth;
                    S = H + R + W + F + $ + (Y.offsetWidth - V);
                  }
                } else {
                  var X = parseFloat(_.getPropertyValue("height") || 0),
                      Q = parseFloat(_.getPropertyValue("padding-top") || 0),
                      K = parseFloat(_.getPropertyValue("padding-bottom") || 0),
                      Z = parseFloat(_.getPropertyValue("margin-top") || 0),
                      J = parseFloat(_.getPropertyValue("margin-bottom") || 0),
                      ee = _.getPropertyValue("box-sizing");

                  if (ee && "border-box" === ee) S = X + Z + J;else {
                    var te = M[0],
                        ie = te.clientHeight;
                    S = X + Q + K + Z + J + (te.offsetHeight - ie);
                  }
                }
                q && (M[0].style.transform = q), B && (M[0].style.webkitTransform = B), t.roundLengths && (S = Math.floor(S));
              } else S = (n - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (S = Math.floor(S)), l[L] && (this.isHorizontal() ? l[L].style.width = S + "px" : l[L].style.height = S + "px");

              l[L] && (l[L].swiperSlideSize = S), h.push(S), t.centeredSlides ? (b = b + S / 2 + w / 2 + y, 0 === w && 0 !== L && (b = b - n / 2 - y), 0 === L && (b = b - n / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && c.push(b), d.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && c.push(b), d.push(b), b = b + S + y), this.virtualSize += S + y, w = S, x += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, n) + v, r && s && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (S + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            C = [];

            for (var ne = 0; ne < c.length; ne += 1) {
              var re = c[ne];
              t.roundLengths && (re = Math.floor(re)), c[ne] < this.virtualSize + c[0] && C.push(re);
            }

            c = C;
          }

          if (!t.centeredSlides) {
            C = [];

            for (var se = 0; se < c.length; se += 1) {
              var oe = c[se];
              t.roundLengths && (oe = Math.floor(oe)), c[se] <= this.virtualSize - n && C.push(oe);
            }

            c = C, Math.floor(this.virtualSize - n) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - n);
          }

          if (0 === c.length && (c = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? r ? l.filter(f).css({
            marginLeft: y + "px"
          }) : l.filter(f).css({
            marginRight: y + "px"
          }) : l.filter(f).css({
            marginBottom: y + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var ae = 0;
            h.forEach(function (e) {
              ae += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var le = (ae -= t.spaceBetween) - n;
            c = c.map(function (e) {
              return e < 0 ? -p : e > le ? le + v : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var ue = 0;

            if (h.forEach(function (e) {
              ue += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (ue -= t.spaceBetween) < n) {
              var ce = (n - ue) / 2;
              c.forEach(function (e, t) {
                c[t] = e - ce;
              }), d.forEach(function (e, t) {
                d[t] = e + ce;
              });
            }
          }

          U(this, {
            slides: l,
            snapGrid: c,
            slidesGrid: d,
            slidesSizesGrid: h
          }), u !== a && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== m && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            i = [],
            n = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var r = this.activeIndex + t;
            if (r > this.slides.length) break;
            i.push(this.slides.eq(r)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var s = i[t].offsetHeight;
            n = s > n ? s : n;
          }
        }

        n && this.$wrapperEl.css("height", n + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            n = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var r = -e;
          n && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var s = 0; s < i.length; s += 1) {
            var o = i[s],
                a = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var l = -(r - o.swiperSlideOffset),
                  u = l + this.slidesSizesGrid[s];
              (l >= 0 && l < this.size - 1 || u > 1 && u <= this.size || l <= 0 && u >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(s), i.eq(s).addClass(t.slideVisibleClass));
            }

            o.progress = n ? -a : a;
          }

          this.visibleSlides = G(this.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            n = this.maxTranslate() - this.minTranslate(),
            r = this.progress,
            s = this.isBeginning,
            o = this.isEnd,
            a = s,
            l = o;
        0 === n ? (r = 0, s = !0, o = !0) : (s = (r = (e - this.minTranslate()) / n) <= 0, o = r >= 1), U(this, {
          progress: r,
          isBeginning: s,
          isEnd: o
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), s && !a && this.emit("reachBeginning toEdge"), o && !l && this.emit("reachEnd toEdge"), (a && !s || l && !o) && this.emit("fromEdge"), this.emit("progress", r);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this.slides,
            i = this.params,
            n = this.$wrapperEl,
            r = this.activeIndex,
            s = this.realIndex,
            o = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
        var a = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === a.length && (a = t.eq(0)).addClass(i.slideNextClass);
        var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            n = this.slidesGrid,
            r = this.snapGrid,
            s = this.params,
            o = this.activeIndex,
            a = this.realIndex,
            l = this.snapIndex,
            u = e;

        if (void 0 === u) {
          for (var c = 0; c < n.length; c += 1) {
            void 0 !== n[c + 1] ? i >= n[c] && i < n[c + 1] - (n[c + 1] - n[c]) / 2 ? u = c : i >= n[c] && i < n[c + 1] && (u = c + 1) : i >= n[c] && (u = c);
          }

          s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
        }

        if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
          var d = Math.min(s.slidesPerGroupSkip, u);
          t = d + Math.floor((u - d) / s.slidesPerGroup);
        }

        if (t >= r.length && (t = r.length - 1), u !== o) {
          var h = parseInt(this.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
          U(this, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: u
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), a !== h && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this.params,
            i = G(e.target).closest("." + t.slideClass)[0],
            n = !1;
        if (i) for (var r = 0; r < this.slides.length; r += 1) {
          this.slides[r] === i && (n = !0);
        }
        if (!i || !n) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(G(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = G(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            n = this.translate,
            r = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;

        var s = function (e, t) {
          void 0 === t && (t = "x");
          var i,
              n,
              r,
              s = O(),
              o = s.getComputedStyle(e, null);
          return s.WebKitCSSMatrix ? ((n = o.transform || o.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), r = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0;
        }(r[0], e);

        return i && (s = -s), s || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var i = this.rtlTranslate,
            n = this.params,
            r = this.$wrapperEl,
            s = this.wrapperEl,
            o = this.progress,
            a = 0,
            l = 0;
        this.isHorizontal() ? a = i ? -e : e : l = e, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), n.cssMode ? s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -l : n.virtualTranslate || r.transform("translate3d(" + a + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : l;
        var u = this.maxTranslate() - this.minTranslate();
        (0 === u ? 0 : (e - this.minTranslate()) / u) !== o && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, i, n, r) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
        var s = this,
            o = s.params,
            a = s.wrapperEl;
        if (s.animating && o.preventInteractionOnTransition) return !1;
        var l,
            u = s.minTranslate(),
            c = s.maxTranslate();

        if (l = n && e > u ? u : n && e < c ? c : e, s.updateProgress(l), o.cssMode) {
          var d,
              h = s.isHorizontal();
          if (0 === t) a[h ? "scrollLeft" : "scrollTop"] = -l;else if (a.scrollTo) a.scrollTo(((d = {})[h ? "left" : "top"] = -l, d.behavior = "smooth", d));else a[h ? "scrollLeft" : "scrollTop"] = -l;
          return !0;
        }

        return 0 === t ? (s.setTransition(0), s.setTranslate(l), i && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(l), i && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, i && s.emit("transitionEnd"));
        }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            n = this.params,
            r = this.previousIndex;

        if (!n.cssMode) {
          n.autoHeight && this.updateAutoHeight();
          var s = t;

          if (s || (s = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r) {
            if ("reset" === s) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            n = this.previousIndex,
            r = this.params;

        if (this.animating = !1, !r.cssMode) {
          this.setTransition(0);
          var s = t;

          if (s || (s = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
            if ("reset" === s) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, i, n) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

        if ("string" == typeof e) {
          var r = parseInt(e, 10);
          if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = r;
        }

        var s = this,
            o = e;
        o < 0 && (o = 0);
        var a = s.params,
            l = s.snapGrid,
            u = s.slidesGrid,
            c = s.previousIndex,
            d = s.activeIndex,
            h = s.rtlTranslate,
            f = s.wrapperEl;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        var p = Math.min(s.params.slidesPerGroupSkip, o),
            v = p + Math.floor((o - p) / s.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1), (d || a.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
        var g,
            m = -l[v];
        if (s.updateProgress(m), a.normalizeSlideIndex) for (var y = 0; y < u.length; y += 1) {
          var b = -Math.floor(100 * m),
              w = Math.floor(100 * u[y]),
              x = Math.floor(100 * u[y + 1]);
          void 0 !== u[y + 1] ? b >= w && b < x - (x - w) / 2 ? o = y : b >= w && b < x && (o = y + 1) : b >= w && (o = y);
        }

        if (s.initialized && o !== d) {
          if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1;
          if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== o) return !1;
        }

        if (g = o > d ? "next" : o < d ? "prev" : "reset", h && -m === s.translate || !h && m === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(m), "reset" !== g && (s.transitionStart(i, g), s.transitionEnd(i, g)), !1;

        if (a.cssMode) {
          var T,
              S = s.isHorizontal(),
              C = -m;
          if (h && (C = f.scrollWidth - f.offsetWidth - C), 0 === t) f[S ? "scrollLeft" : "scrollTop"] = C;else if (f.scrollTo) f.scrollTo(((T = {})[S ? "left" : "top"] = C, T.behavior = "smooth", T));else f[S ? "scrollLeft" : "scrollTop"] = C;
          return !0;
        }

        return 0 === t ? (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, g), s.transitionEnd(i, g)) : (s.setTransition(t), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, g), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, g));
        }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, i, n) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var r = e;
        return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n);
      },
      slideNext: function slideNext(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this.params,
            r = this.animating,
            s = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;

        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + s, e, t, i);
      },
      slidePrev: function slidePrev(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this.params,
            r = this.animating,
            s = this.snapGrid,
            o = this.slidesGrid,
            a = this.rtlTranslate;

        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function l(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var u,
            c = l(a ? this.translate : -this.translate),
            d = s.map(function (e) {
          return l(e);
        }),
            h = (s[d.indexOf(c)], s[d.indexOf(c) - 1]);
        return void 0 === h && n.cssMode && s.forEach(function (e) {
          !h && c >= e && (h = e);
        }), void 0 !== h && (u = o.indexOf(h)) < 0 && (u = this.activeIndex - 1), this.slideTo(u, e, t, i);
      },
      slideReset: function slideReset(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function slideToClosest(e, t, i, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
        var r = this.activeIndex,
            s = Math.min(this.params.slidesPerGroupSkip, r),
            o = s + Math.floor((r - s) / this.params.slidesPerGroup),
            a = this.rtlTranslate ? this.translate : -this.translate;

        if (a >= this.snapGrid[o]) {
          var l = this.snapGrid[o];
          a - l > (this.snapGrid[o + 1] - l) * n && (r += this.params.slidesPerGroup);
        } else {
          var u = this.snapGrid[o - 1];
          a - u <= (this.snapGrid[o] - u) * n && (r -= this.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, this.slidesGrid.length - 1), this.slideTo(r, e, t, i);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            i = t.params,
            n = t.$wrapperEl,
            r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            s = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(G(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Y(function () {
            t.slideTo(s);
          })) : t.slideTo(s) : s > t.slides.length - r ? (t.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Y(function () {
            t.slideTo(s);
          })) : t.slideTo(s);
        } else t.slideTo(s);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = k(),
            i = e.params,
            n = e.$wrapperEl;
        n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var r = n.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var s = i.slidesPerGroup - r.length % i.slidesPerGroup;

          if (s !== i.slidesPerGroup) {
            for (var o = 0; o < s; o += 1) {
              var a = G(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              n.append(a);
            }

            r = n.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
        var l = [],
            u = [];
        r.each(function (t, i) {
          var n = G(t);
          i < e.loopedSlides && u.push(t), i < r.length && i >= r.length - e.loopedSlides && l.push(t), n.attr("data-swiper-slide-index", i);
        });

        for (var c = 0; c < u.length; c += 1) {
          n.append(G(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }

        for (var d = l.length - 1; d >= 0; d -= 1) {
          n.prepend(G(l[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            n = this.loopedSlides,
            r = this.allowSlidePrev,
            s = this.allowSlideNext,
            o = this.snapGrid,
            a = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var l = -o[t] - this.getTranslate();
        if (t < n) e = i.length - 3 * n + t, e += n, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l);else if (t >= i.length - n) {
          e = -i.length + t + n, e += n, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((a ? -this.translate : this.translate) - l);
        }
        this.allowSlidePrev = r, this.allowSlideNext = s, this.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var n = 0; n < e.length; n += 1) {
          e[n] && t.append(e[n]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
        t.loop && this.loopDestroy();
        var r = n + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var s = 0; s < e.length; s += 1) {
            e[s] && i.prepend(e[s]);
          }

          r = n + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
            n = this.params,
            r = this.activeIndex;
        n.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
        var s = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= s) this.appendSlide(t);else {
          for (var o = r > e ? r + 1 : r, a = [], l = s - 1; l >= e; l -= 1) {
            var u = this.slides.eq(l);
            u.remove(), a.unshift(u);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var c = 0; c < t.length; c += 1) {
              t[c] && i.append(t[c]);
            }

            o = r > e ? r + t.length : r;
          } else i.append(t);

          for (var d = 0; d < a.length; d += 1) {
            i.append(a[d]);
          }

          n.loop && this.loopCreate(), n.observer && this.support.observer || this.update(), n.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            n = this.activeIndex;
        t.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var r,
            s = n;

        if ("object" == _typeof(e) && "length" in e) {
          for (var o = 0; o < e.length; o += 1) {
            r = e[o], this.slides[r] && this.slides.eq(r).remove(), r < s && (s -= 1);
          }

          s = Math.max(s, 0);
        } else r = e, this.slides[r] && this.slides.eq(r).remove(), r < s && (s -= 1), s = Math.max(s, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = k(),
            t = this.params,
            i = this.touchEvents,
            n = this.el,
            r = this.wrapperEl,
            s = this.device,
            o = this.support;
        this.onTouchStart = re.bind(this), this.onTouchMove = se.bind(this), this.onTouchEnd = oe.bind(this), t.cssMode && (this.onScroll = ue.bind(this)), this.onClick = le.bind(this);
        var a = !!t.nested;
        if (!o.touch && o.pointerEvents) n.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, a), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var l = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            n.addEventListener(i.start, this.onTouchStart, l), n.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
              passive: !1,
              capture: a
            } : a), n.addEventListener(i.end, this.onTouchEnd, l), i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, l), ce || (e.addEventListener("touchstart", de), ce = !0);
          }

          (t.simulateTouch && !s.ios && !s.android || t.simulateTouch && !o.touch && s.ios) && (n.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, a), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0), t.cssMode && r.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ae, !0) : this.on("observerUpdate", ae, !0);
      },
      detachEvents: function detachEvents() {
        var e = k(),
            t = this.params,
            i = this.touchEvents,
            n = this.el,
            r = this.wrapperEl,
            s = this.device,
            o = this.support,
            a = !!t.nested;
        if (!o.touch && o.pointerEvents) n.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, a), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var l = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            n.removeEventListener(i.start, this.onTouchStart, l), n.removeEventListener(i.move, this.onTouchMove, a), n.removeEventListener(i.end, this.onTouchEnd, l), i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, l);
          }

          (t.simulateTouch && !s.ios && !s.android || t.simulateTouch && !o.touch && s.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, a), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0), t.cssMode && r.removeEventListener("scroll", this.onScroll), this.off(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ae);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            n = void 0 === i ? 0 : i,
            r = this.params,
            s = this.$el,
            o = r.breakpoints;

        if (o && (!o || 0 !== Object.keys(o).length)) {
          var a = this.getBreakpoint(o);

          if (a && this.currentBreakpoint !== a) {
            var l = a in o ? o[a] : void 0;
            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = l[e];
              void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var u = l || this.originalParams,
                c = r.slidesPerColumn > 1,
                d = u.slidesPerColumn > 1;
            c && !d ? (s.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !c && d && (s.addClass(r.containerModifierClass + "multirow"), "column" === u.slidesPerColumnFill && s.addClass(r.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var h = u.direction && u.direction !== r.direction,
                f = r.loop && (u.slidesPerView !== r.slidesPerView || h);
            h && t && this.changeDirection(), U(this.params, u), U(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = a, this.emit("_beforeBreakpoint", u), f && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)), this.emit("breakpoint", u);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = O();

        if (e) {
          var i = !1,
              n = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          n.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var r = 0; r < n.length; r += 1) {
            var s = n[r],
                o = s.point;
            s.value <= t.innerWidth && (i = o);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            n = this.$el,
            r = this.device,
            s = this.support,
            o = [];
        o.push("initialized"), o.push(t.direction), s.pointerEvents && !s.touch && o.push("pointer-events"), t.freeMode && o.push("free-mode"), t.autoHeight && o.push("autoheight"), i && o.push("rtl"), t.slidesPerColumn > 1 && (o.push("multirow"), "column" === t.slidesPerColumnFill && o.push("multirow-column")), r.android && o.push("android"), r.ios && o.push("ios"), t.cssMode && o.push("css-mode"), o.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), n.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, n, r, s) {
        var o,
            a = O();

        function l() {
          s && s();
        }

        G(e).parent("picture")[0] || e.complete && r ? l() : t ? ((o = new a.Image()).onload = l, o.onerror = l, n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : l();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var n = e.imagesToLoad[i];
          e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      ve = {},
      ge = function () {
    function e() {
      for (var t, i, n = arguments.length, r = new Array(n), s = 0; s < n; s++) {
        r[s] = arguments[s];
      }

      if (1 === r.length && r[0].constructor && r[0].constructor === Object ? i = r[0] : (t = r[0], i = r[1]), i || (i = {}), i = U({}, i), t && !i.el && (i.el = t), i.el && G(i.el).length > 1) {
        var o = [];
        return G(i.el).each(function (t) {
          var n = U({}, i, {
            el: t
          });
          o.push(new e(n));
        }), o;
      }

      var a = this;
      a.support = K(), a.device = Z({
        userAgent: i.userAgent
      }), a.browser = J(), a.eventsListeners = {}, a.eventsAnyListeners = [], void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function (e) {
        var t = a.modules[e];

        if (t.params) {
          var n = Object.keys(t.params)[0],
              r = t.params[n];
          if ("object" != _typeof(r) || null === r) return;
          if (!(n in i) || !("enabled" in r)) return;
          !0 === i[n] && (i[n] = {
            enabled: !0
          }), "object" != _typeof(i[n]) || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = {
            enabled: !1
          });
        }
      });
      var l,
          u,
          c = U({}, he);
      return a.useParams(c), a.params = U({}, c, ve, i), a.originalParams = U({}, a.params), a.passedParams = U({}, i), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = G, U(a, {
        el: t,
        classNames: [],
        slides: G(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === a.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === a.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], a.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
          start: l[0],
          move: l[1],
          end: l[2],
          cancel: l[3]
        }, a.touchEventsDesktop = {
          start: u[0],
          move: u[1],
          end: u[2]
        }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video, label",
          lastClickTime: V(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), a.useModules(), a.emit("_swiper"), a.params.init && a.init(), a;
    }

    var t,
        i,
        n,
        r = e.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, r.emitSlidesClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = [];
        e.slides.each(function (i) {
          var n = e.getSlideClasses(i);
          t.push({
            slideEl: i,
            classNames: n
          }), e.emit("_slideClass", i, n);
        }), e.emit("_slideClasses", t);
      }
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          n = this.size,
          r = this.activeIndex,
          s = 1;

      if (e.centeredSlides) {
        for (var o, a = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) {
          t[l] && !o && (s += 1, (a += t[l].swiperSlideSize) > n && (o = !0));
        }

        for (var u = r - 1; u >= 0; u -= 1) {
          t[u] && !o && (s += 1, (a += t[u].swiperSlideSize) > n && (o = !0));
        }
      } else for (var c = r + 1; c < t.length; c += 1) {
        i[c] - i[r] < n && (s += 1);
      }

      return s;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function n() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.mount = function (e) {
      if (this.mounted) return !0;
      var t,
          i = G(e || this.params.el);
      return !!(e = i[0]) && (e.swiper = this, e && e.shadowRoot && e.shadowRoot.querySelector ? (t = G(e.shadowRoot.querySelector("." + this.params.wrapperClass))).children = function (e) {
        return i.children(e);
      } : t = i.children("." + this.params.wrapperClass), U(this, {
        $el: i,
        el: e,
        $wrapperEl: t,
        wrapperEl: t[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
        rtlTranslate: "horizontal" === this.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
        wrongRTL: "-webkit-box" === t.css("display")
      }), !0);
    }, r.init = function (e) {
      return this.initialized || !1 === this.mount(e) || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit")), this;
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          n = this,
          r = n.params,
          s = n.$el,
          o = n.$wrapperEl,
          a = n.slides;
      return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
        n.off(e);
      }), !1 !== e && (n.$el[0].swiper = null, i = n, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), n.destroyed = !0), null;
    }, e.extendDefaults = function (e) {
      U(ve, e);
    }, e.installModule = function (t) {
      e.prototype.modules || (e.prototype.modules = {});
      var i = t.name || Object.keys(e.prototype.modules).length + "_" + V();
      e.prototype.modules[i] = t;
    }, e.use = function (t) {
      return Array.isArray(t) ? (t.forEach(function (t) {
        return e.installModule(t);
      }), e) : (e.installModule(t), e);
    }, t = e, n = [{
      key: "extendedDefaults",
      get: function get() {
        return ve;
      }
    }, {
      key: "defaults",
      get: function get() {
        return he;
      }
    }], (i = null) && fe(t.prototype, i), n && fe(t, n), e;
  }();

  Object.keys(pe).forEach(function (e) {
    Object.keys(pe[e]).forEach(function (t) {
      ge.prototype[t] = pe[e][t];
    });
  }), ge.use([ee, ne]);
  var me = ge;

  function ye() {
    return (ye = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var be = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            n = t.$prevEl;
        n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = G(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = G(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), U(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      we = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      Q(this, {
        navigation: ye({}, be)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var i,
            n = e.navigation,
            r = n.$nextEl,
            s = n.$prevEl;
        !e.params.navigation.hideOnClick || G(t.target).is(s) || G(t.target).is(r) || (r ? i = r.hasClass(e.params.navigation.hiddenClass) : s && (i = s.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  };

  function xe() {
    return (xe = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var Te = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            s = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (i -= n - 2 * this.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== this.params.paginationType && (i = s + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              a,
              l,
              u = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = u.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, l = ((a = o + (Math.min(u.length, t.dynamicMainBullets) - 1)) + o) / 2), u.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) u.each(function (e) {
            var n = G(e),
                r = n.index();
            r === i && n.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= a && n.addClass(t.bulletActiveClass + "-main"), r === o && n.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === a && n.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var c = u.eq(i),
                d = c.index();

            if (c.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var h = u.eq(o), f = u.eq(a), p = o; p <= a; p += 1) {
                u.eq(p).addClass(t.bulletActiveClass + "-main");
              }

              if (this.params.loop) {
                if (d >= u.length - t.dynamicMainBullets) {
                  for (var v = t.dynamicMainBullets; v >= 0; v -= 1) {
                    u.eq(u.length - v).addClass(t.bulletActiveClass + "-main");
                  }

                  u.eq(u.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else h.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else h.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(u.length, t.dynamicMainBullets + 4),
                m = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                y = e ? "right" : "left";
            u.css(this.isHorizontal() ? y : "top", m + "px");
          }
        }

        if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(s))), "progressbar" === t.type) {
          var b;
          b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var w = (i + 1) / s,
              x = 1,
              T = 1;
          "horizontal" === b ? x = w : T = w, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, s)), this.emit("paginationRender", r[0])) : this.emit("paginationUpdate", r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            n = "";

        if ("bullets" === e.type) {
          var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          this.params.freeMode && !this.params.loop && r > t && (r = t);

          for (var s = 0; s < r; s += 1) {
            e.renderBullet ? n += e.renderBullet.call(this, s, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(n), this.pagination.bullets = i.find("." + e.bulletClass.replace(/ /g, "."));
        }

        "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = G(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass.replace(/ /g, "."), function (t) {
          t.preventDefault();
          var i = G(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), U(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass.replace(/ /g, "."));
      }
    }
  },
      Se = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      Q(this, {
        pagination: xe({
          dynamicBulletIndex: 0
        }, Te)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !G(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  };

  function Ce() {
    return (Ce = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var Ee = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, n = this.slidesSizesGrid, r = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, a = s ? e / 2 - o : t / 2 - o, l = s ? r.rotate : -r.rotate, u = r.depth, c = 0, d = i.length; c < d; c += 1) {
        var h = i.eq(c),
            f = n[c],
            p = (a - h[0].swiperSlideOffset - f / 2) / f * r.modifier,
            v = s ? l * p : 0,
            g = s ? 0 : l * p,
            m = -u * Math.abs(p),
            y = r.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * f);
        var b = s ? 0 : y * p,
            w = s ? y * p : 0,
            x = 1 - (1 - r.scale) * Math.abs(p);
        Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
        var T = "translate3d(" + w + "px," + b + "px," + m + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg) scale(" + x + ")";

        if (h.transform(T), h[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
          var S = s ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
              C = s ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = G('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), h.append(S)), 0 === C.length && (C = G('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), h.append(C)), S.length && (S[0].style.opacity = p > 0 ? p : 0), C.length && (C[0].style.opacity = -p > 0 ? -p : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      Ae = {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      Q(this, {
        coverflowEffect: Ce({}, Ee)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  },
      ke = i(11),
      Le = i.n(ke),
      Oe = i(12),
      Me = i.n(Oe),
      Pe = i(13),
      Ie = i.n(Pe),
      De = i(14),
      je = i.n(De),
      Ne = i(4),
      ze = i.n(Ne),
      _e = i(15),
      qe = i.n(_e),
      Be = i(0),
      He = i(16),
      Re = i.n(He),
      We = i(17),
      Fe = i.n(We),
      $e = i(18),
      Ge = i.n($e);

  function Ye(e) {
    var t = e.getBoundingClientRect();
    return {
      width: t.width,
      height: t.height,
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      left: t.left,
      x: t.left,
      y: t.top
    };
  }

  function Ve(e) {
    if (null == e) return window;

    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }

    return e;
  }

  function Xe(e) {
    var t = Ve(e);
    return {
      scrollLeft: t.pageXOffset,
      scrollTop: t.pageYOffset
    };
  }

  function Ue(e) {
    return e instanceof Ve(e).Element || e instanceof Element;
  }

  function Qe(e) {
    return e instanceof Ve(e).HTMLElement || e instanceof HTMLElement;
  }

  function Ke(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof Ve(e).ShadowRoot || e instanceof ShadowRoot);
  }

  function Ze(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }

  function Je(e) {
    return ((Ue(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }

  function et(e) {
    return Ye(Je(e)).left + Xe(e).scrollLeft;
  }

  function tt(e) {
    return Ve(e).getComputedStyle(e);
  }

  function it(e) {
    var t = tt(e),
        i = t.overflow,
        n = t.overflowX,
        r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + r + n);
  }

  function nt(e, t, i) {
    void 0 === i && (i = !1);
    var n,
        r,
        s = Je(t),
        o = Ye(e),
        a = Qe(t),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        u = {
      x: 0,
      y: 0
    };
    return (a || !a && !i) && (("body" !== Ze(t) || it(s)) && (l = (n = t) !== Ve(n) && Qe(n) ? {
      scrollLeft: (r = n).scrollLeft,
      scrollTop: r.scrollTop
    } : Xe(n)), Qe(t) ? ((u = Ye(t)).x += t.clientLeft, u.y += t.clientTop) : s && (u.x = et(s))), {
      x: o.left + l.scrollLeft - u.x,
      y: o.top + l.scrollTop - u.y,
      width: o.width,
      height: o.height
    };
  }

  function rt(e) {
    var t = Ye(e),
        i = e.offsetWidth,
        n = e.offsetHeight;
    return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: i,
      height: n
    };
  }

  function st(e) {
    return "html" === Ze(e) ? e : e.assignedSlot || e.parentNode || (Ke(e) ? e.host : null) || Je(e);
  }

  function ot(e, t) {
    var i;
    void 0 === t && (t = []);

    var n = function e(t) {
      return ["html", "body", "#document"].indexOf(Ze(t)) >= 0 ? t.ownerDocument.body : Qe(t) && it(t) ? t : e(st(t));
    }(e),
        r = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
        s = Ve(n),
        o = r ? [s].concat(s.visualViewport || [], it(n) ? n : []) : n,
        a = t.concat(o);

    return r ? a : a.concat(ot(st(o)));
  }

  function at(e) {
    return ["table", "td", "th"].indexOf(Ze(e)) >= 0;
  }

  function lt(e) {
    return Qe(e) && "fixed" !== tt(e).position ? e.offsetParent : null;
  }

  function ut(e) {
    for (var t = Ve(e), i = lt(e); i && at(i) && "static" === tt(i).position;) {
      i = lt(i);
    }

    return i && ("html" === Ze(i) || "body" === Ze(i) && "static" === tt(i).position) ? t : i || function (e) {
      var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && Qe(e) && "fixed" === tt(e).position) return null;

      for (var i = st(e); Qe(i) && ["html", "body"].indexOf(Ze(i)) < 0;) {
        var n = tt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(e) || t;
  }

  var ct = "top",
      dt = "bottom",
      ht = "right",
      ft = "left",
      pt = [ct, dt, ht, ft],
      vt = pt.reduce(function (e, t) {
    return e.concat([t + "-start", t + "-end"]);
  }, []),
      gt = [].concat(pt, ["auto"]).reduce(function (e, t) {
    return e.concat([t, t + "-start", t + "-end"]);
  }, []),
      mt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function yt(e) {
    var t = new Map(),
        i = new Set(),
        n = [];
    return e.forEach(function (e) {
      t.set(e.name, e);
    }), e.forEach(function (e) {
      i.has(e.name) || function e(r) {
        i.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach(function (n) {
          if (!i.has(n)) {
            var r = t.get(n);
            r && e(r);
          }
        }), n.push(r);
      }(e);
    }), n;
  }

  var bt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function wt() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
      t[i] = arguments[i];
    }

    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }

  function xt(e) {
    void 0 === e && (e = {});
    var t = e,
        i = t.defaultModifiers,
        n = void 0 === i ? [] : i,
        r = t.defaultOptions,
        s = void 0 === r ? bt : r;
    return function (e, t, i) {
      void 0 === i && (i = s);
      var r,
          o,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, bt, s),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
          l = [],
          u = !1,
          c = {
        state: a,
        setOptions: function setOptions(i) {
          d(), a.options = Object.assign({}, s, a.options, i), a.scrollParents = {
            reference: Ue(e) ? ot(e) : e.contextElement ? ot(e.contextElement) : [],
            popper: ot(t)
          };

          var r = function (e) {
            var t = yt(e);
            return mt.reduce(function (e, i) {
              return e.concat(t.filter(function (e) {
                return e.phase === i;
              }));
            }, []);
          }(function (e) {
            var t = e.reduce(function (e, t) {
              var i = e[t.name];
              return e[t.name] = i ? Object.assign({}, i, t, {
                options: Object.assign({}, i.options, t.options),
                data: Object.assign({}, i.data, t.data)
              }) : t, e;
            }, {});
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          }([].concat(n, a.options.modifiers)));

          return a.orderedModifiers = r.filter(function (e) {
            return e.enabled;
          }), a.orderedModifiers.forEach(function (e) {
            var t = e.name,
                i = e.options,
                n = void 0 === i ? {} : i,
                r = e.effect;

            if ("function" == typeof r) {
              var s = r({
                state: a,
                name: t,
                instance: c,
                options: n
              });
              l.push(s || function () {});
            }
          }), c.update();
        },
        forceUpdate: function forceUpdate() {
          if (!u) {
            var e = a.elements,
                t = e.reference,
                i = e.popper;

            if (wt(t, i)) {
              a.rects = {
                reference: nt(t, ut(i), "fixed" === a.options.strategy),
                popper: rt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (e) {
                return a.modifiersData[e.name] = Object.assign({}, e.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var r = a.orderedModifiers[n],
                      s = r.fn,
                      o = r.options,
                      l = void 0 === o ? {} : o,
                      d = r.name;
                  "function" == typeof s && (a = s({
                    state: a,
                    options: l,
                    name: d,
                    instance: c
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (r = function r() {
          return new Promise(function (e) {
            c.forceUpdate(), e(a);
          });
        }, function () {
          return o || (o = new Promise(function (e) {
            Promise.resolve().then(function () {
              o = void 0, e(r());
            });
          })), o;
        }),
        destroy: function destroy() {
          d(), u = !0;
        }
      };
      if (!wt(e, t)) return c;

      function d() {
        l.forEach(function (e) {
          return e();
        }), l = [];
      }

      return c.setOptions(i).then(function (e) {
        !u && i.onFirstUpdate && i.onFirstUpdate(e);
      }), c;
    };
  }

  var Tt = {
    passive: !0
  };
  var St = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(e) {
      var t = e.state,
          i = e.instance,
          n = e.options,
          r = n.scroll,
          s = void 0 === r || r,
          o = n.resize,
          a = void 0 === o || o,
          l = Ve(t.elements.popper),
          u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return s && u.forEach(function (e) {
        e.addEventListener("scroll", i.update, Tt);
      }), a && l.addEventListener("resize", i.update, Tt), function () {
        s && u.forEach(function (e) {
          e.removeEventListener("scroll", i.update, Tt);
        }), a && l.removeEventListener("resize", i.update, Tt);
      };
    },
    data: {}
  };

  function Ct(e) {
    return e.split("-")[0];
  }

  function Et(e) {
    return e.split("-")[1];
  }

  function At(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }

  function kt(e) {
    var t,
        i = e.reference,
        n = e.element,
        r = e.placement,
        s = r ? Ct(r) : null,
        o = r ? Et(r) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (s) {
      case ct:
        t = {
          x: a,
          y: i.y - n.height
        };
        break;

      case dt:
        t = {
          x: a,
          y: i.y + i.height
        };
        break;

      case ht:
        t = {
          x: i.x + i.width,
          y: l
        };
        break;

      case ft:
        t = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        t = {
          x: i.x,
          y: i.y
        };
    }

    var u = s ? At(s) : null;

    if (null != u) {
      var c = "y" === u ? "height" : "width";

      switch (o) {
        case "start":
          t[u] = t[u] - (i[c] / 2 - n[c] / 2);
          break;

        case "end":
          t[u] = t[u] + (i[c] / 2 - n[c] / 2);
      }
    }

    return t;
  }

  var Lt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(e) {
      var t = e.state,
          i = e.name;
      t.modifiersData[i] = kt({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  },
      Ot = Math.max,
      Mt = Math.min,
      Pt = Math.round,
      It = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Dt(e) {
    var t,
        i = e.popper,
        n = e.popperRect,
        r = e.placement,
        s = e.offsets,
        o = e.position,
        a = e.gpuAcceleration,
        l = e.adaptive,
        u = e.roundOffsets,
        c = !0 === u ? function (e) {
      var t = e.x,
          i = e.y,
          n = window.devicePixelRatio || 1;
      return {
        x: Pt(Pt(t * n) / n) || 0,
        y: Pt(Pt(i * n) / n) || 0
      };
    }(s) : "function" == typeof u ? u(s) : s,
        d = c.x,
        h = void 0 === d ? 0 : d,
        f = c.y,
        p = void 0 === f ? 0 : f,
        v = s.hasOwnProperty("x"),
        g = s.hasOwnProperty("y"),
        m = ft,
        y = ct,
        b = window;

    if (l) {
      var w = ut(i),
          x = "clientHeight",
          T = "clientWidth";
      w === Ve(i) && "static" !== tt(w = Je(i)).position && (x = "scrollHeight", T = "scrollWidth"), w = w, r === ct && (y = dt, p -= w[x] - n.height, p *= a ? 1 : -1), r === ft && (m = ht, h -= w[T] - n.width, h *= a ? 1 : -1);
    }

    var S,
        C = Object.assign({
      position: o
    }, l && It);
    return a ? Object.assign({}, C, ((S = {})[y] = g ? "0" : "", S[m] = v ? "0" : "", S.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", S)) : Object.assign({}, C, ((t = {})[y] = g ? p + "px" : "", t[m] = v ? h + "px" : "", t.transform = "", t));
  }

  var jt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var i = t.styles[e] || {},
            n = t.attributes[e] || {},
            r = t.elements[e];
        Qe(r) && Ze(r) && (Object.assign(r.style, i), Object.keys(n).forEach(function (e) {
          var t = n[e];
          !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    },
    effect: function effect(e) {
      var t = e.state,
          i = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var n = t.elements[e],
              r = t.attributes[e] || {},
              s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function (e, t) {
            return e[t] = "", e;
          }, {});
          Qe(n) && Ze(n) && (Object.assign(n.style, s), Object.keys(r).forEach(function (e) {
            n.removeAttribute(e);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  var Nt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function zt(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return Nt[e];
    });
  }

  var _t = {
    start: "end",
    end: "start"
  };

  function qt(e) {
    return e.replace(/start|end/g, function (e) {
      return _t[e];
    });
  }

  function Bt(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;

    if (i && Ke(i)) {
      var n = t;

      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function Ht(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }

  function Rt(e, t) {
    return "viewport" === t ? Ht(function (e) {
      var t = Ve(e),
          i = Je(e),
          n = t.visualViewport,
          r = i.clientWidth,
          s = i.clientHeight,
          o = 0,
          a = 0;
      return n && (r = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = n.offsetLeft, a = n.offsetTop)), {
        width: r,
        height: s,
        x: o + et(e),
        y: a
      };
    }(e)) : Qe(t) ? function (e) {
      var t = Ye(e);
      return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
    }(t) : Ht(function (e) {
      var t,
          i = Je(e),
          n = Xe(e),
          r = null == (t = e.ownerDocument) ? void 0 : t.body,
          s = Ot(i.scrollWidth, i.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
          o = Ot(i.scrollHeight, i.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
          a = -n.scrollLeft + et(e),
          l = -n.scrollTop;
      return "rtl" === tt(r || i).direction && (a += Ot(i.clientWidth, r ? r.clientWidth : 0) - s), {
        width: s,
        height: o,
        x: a,
        y: l
      };
    }(Je(e)));
  }

  function Wt(e, t, i) {
    var n = "clippingParents" === t ? function (e) {
      var t = ot(st(e)),
          i = ["absolute", "fixed"].indexOf(tt(e).position) >= 0 && Qe(e) ? ut(e) : e;
      return Ue(i) ? t.filter(function (e) {
        return Ue(e) && Bt(e, i) && "body" !== Ze(e);
      }) : [];
    }(e) : [].concat(t),
        r = [].concat(n, [i]),
        s = r[0],
        o = r.reduce(function (t, i) {
      var n = Rt(e, i);
      return t.top = Ot(n.top, t.top), t.right = Mt(n.right, t.right), t.bottom = Mt(n.bottom, t.bottom), t.left = Ot(n.left, t.left), t;
    }, Rt(e, s));
    return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
  }

  function Ft(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e);
  }

  function $t(e, t) {
    return t.reduce(function (t, i) {
      return t[i] = e, t;
    }, {});
  }

  function Gt(e, t) {
    void 0 === t && (t = {});
    var i = t,
        n = i.placement,
        r = void 0 === n ? e.placement : n,
        s = i.boundary,
        o = void 0 === s ? "clippingParents" : s,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        u = i.elementContext,
        c = void 0 === u ? "popper" : u,
        d = i.altBoundary,
        h = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        v = Ft("number" != typeof p ? p : $t(p, pt)),
        g = "popper" === c ? "reference" : "popper",
        m = e.elements.reference,
        y = e.rects.popper,
        b = e.elements[h ? g : c],
        w = Wt(Ue(b) ? b : b.contextElement || Je(e.elements.popper), o, l),
        x = Ye(m),
        T = kt({
      reference: x,
      element: y,
      strategy: "absolute",
      placement: r
    }),
        S = Ht(Object.assign({}, y, T)),
        C = "popper" === c ? S : x,
        E = {
      top: w.top - C.top + v.top,
      bottom: C.bottom - w.bottom + v.bottom,
      left: w.left - C.left + v.left,
      right: C.right - w.right + v.right
    },
        A = e.modifiersData.offset;

    if ("popper" === c && A) {
      var k = A[r];
      Object.keys(E).forEach(function (e) {
        var t = [ht, dt].indexOf(e) >= 0 ? 1 : -1,
            i = [ct, dt].indexOf(e) >= 0 ? "y" : "x";
        E[e] += k[i] * t;
      });
    }

    return E;
  }

  function Yt(e, t, i) {
    return Ot(e, Mt(t, i));
  }

  function Vt(e, t, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - i.y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x
    };
  }

  function Xt(e) {
    return [ct, ht, dt, ft].some(function (t) {
      return e[t] >= 0;
    });
  }

  var Ut = xt({
    defaultModifiers: [St, Lt, {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function fn(e) {
        var t = e.state,
            i = e.options,
            n = i.gpuAcceleration,
            r = void 0 === n || n,
            s = i.adaptive,
            o = void 0 === s || s,
            a = i.roundOffsets,
            l = void 0 === a || a,
            u = {
          placement: Ct(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: r
        };
        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Dt(Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: l
        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dt(Object.assign({}, u, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: l
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement
        });
      },
      data: {}
    }, jt, {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(e) {
        var t = e.state,
            i = e.options,
            n = e.name,
            r = i.offset,
            s = void 0 === r ? [0, 0] : r,
            o = gt.reduce(function (e, i) {
          return e[i] = function (e, t, i) {
            var n = Ct(e),
                r = [ft, ct].indexOf(n) >= 0 ? -1 : 1,
                s = "function" == typeof i ? i(Object.assign({}, t, {
              placement: e
            })) : i,
                o = s[0],
                a = s[1];
            return o = o || 0, a = (a || 0) * r, [ft, ht].indexOf(n) >= 0 ? {
              x: a,
              y: o
            } : {
              x: o,
              y: a
            };
          }(i, t.rects, s), e;
        }, {}),
            a = o[t.placement],
            l = a.x,
            u = a.y;
        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = o;
      }
    }, {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function fn(e) {
        var t = e.state,
            i = e.options,
            n = e.name;

        if (!t.modifiersData[n]._skip) {
          for (var r = i.mainAxis, s = void 0 === r || r, o = i.altAxis, a = void 0 === o || o, l = i.fallbackPlacements, u = i.padding, c = i.boundary, d = i.rootBoundary, h = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, v = i.allowedAutoPlacements, g = t.options.placement, m = Ct(g), y = l || (m === g || !p ? [zt(g)] : function (e) {
            if ("auto" === Ct(e)) return [];
            var t = zt(e);
            return [qt(e), t, qt(t)];
          }(g)), b = [g].concat(y).reduce(function (e, i) {
            return e.concat("auto" === Ct(i) ? function (e, t) {
              void 0 === t && (t = {});
              var i = t,
                  n = i.placement,
                  r = i.boundary,
                  s = i.rootBoundary,
                  o = i.padding,
                  a = i.flipVariations,
                  l = i.allowedAutoPlacements,
                  u = void 0 === l ? gt : l,
                  c = Et(n),
                  d = c ? a ? vt : vt.filter(function (e) {
                return Et(e) === c;
              }) : pt,
                  h = d.filter(function (e) {
                return u.indexOf(e) >= 0;
              });
              0 === h.length && (h = d);
              var f = h.reduce(function (t, i) {
                return t[i] = Gt(e, {
                  placement: i,
                  boundary: r,
                  rootBoundary: s,
                  padding: o
                })[Ct(i)], t;
              }, {});
              return Object.keys(f).sort(function (e, t) {
                return f[e] - f[t];
              });
            }(t, {
              placement: i,
              boundary: c,
              rootBoundary: d,
              padding: u,
              flipVariations: p,
              allowedAutoPlacements: v
            }) : i);
          }, []), w = t.rects.reference, x = t.rects.popper, T = new Map(), S = !0, C = b[0], E = 0; E < b.length; E++) {
            var A = b[E],
                k = Ct(A),
                L = "start" === Et(A),
                O = [ct, dt].indexOf(k) >= 0,
                M = O ? "width" : "height",
                P = Gt(t, {
              placement: A,
              boundary: c,
              rootBoundary: d,
              altBoundary: h,
              padding: u
            }),
                I = O ? L ? ht : ft : L ? dt : ct;
            w[M] > x[M] && (I = zt(I));
            var D = zt(I),
                j = [];

            if (s && j.push(P[k] <= 0), a && j.push(P[I] <= 0, P[D] <= 0), j.every(function (e) {
              return e;
            })) {
              C = A, S = !1;
              break;
            }

            T.set(A, j);
          }

          if (S) for (var N = function N(e) {
            var t = b.find(function (t) {
              var i = T.get(t);
              if (i) return i.slice(0, e).every(function (e) {
                return e;
              });
            });
            if (t) return C = t, "break";
          }, z = p ? 3 : 1; z > 0; z--) {
            if ("break" === N(z)) break;
          }
          t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    }, {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(e) {
        var t = e.state,
            i = e.options,
            n = e.name,
            r = i.mainAxis,
            s = void 0 === r || r,
            o = i.altAxis,
            a = void 0 !== o && o,
            l = i.boundary,
            u = i.rootBoundary,
            c = i.altBoundary,
            d = i.padding,
            h = i.tether,
            f = void 0 === h || h,
            p = i.tetherOffset,
            v = void 0 === p ? 0 : p,
            g = Gt(t, {
          boundary: l,
          rootBoundary: u,
          padding: d,
          altBoundary: c
        }),
            m = Ct(t.placement),
            y = Et(t.placement),
            b = !y,
            w = At(m),
            x = "x" === w ? "y" : "x",
            T = t.modifiersData.popperOffsets,
            S = t.rects.reference,
            C = t.rects.popper,
            E = "function" == typeof v ? v(Object.assign({}, t.rects, {
          placement: t.placement
        })) : v,
            A = {
          x: 0,
          y: 0
        };

        if (T) {
          if (s || a) {
            var k = "y" === w ? ct : ft,
                L = "y" === w ? dt : ht,
                O = "y" === w ? "height" : "width",
                M = T[w],
                P = T[w] + g[k],
                I = T[w] - g[L],
                D = f ? -C[O] / 2 : 0,
                j = "start" === y ? S[O] : C[O],
                N = "start" === y ? -C[O] : -S[O],
                z = t.elements.arrow,
                _ = f && z ? rt(z) : {
              width: 0,
              height: 0
            },
                q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
                B = q[k],
                H = q[L],
                R = Yt(0, S[O], _[O]),
                W = b ? S[O] / 2 - D - R - B - E : j - R - B - E,
                F = b ? -S[O] / 2 + D + R + H + E : N + R + H + E,
                $ = t.elements.arrow && ut(t.elements.arrow),
                G = $ ? "y" === w ? $.clientTop || 0 : $.clientLeft || 0 : 0,
                Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0,
                V = T[w] + W - Y - G,
                X = T[w] + F - Y;

            if (s) {
              var U = Yt(f ? Mt(P, V) : P, M, f ? Ot(I, X) : I);
              T[w] = U, A[w] = U - M;
            }

            if (a) {
              var Q = "x" === w ? ct : ft,
                  K = "x" === w ? dt : ht,
                  Z = T[x],
                  J = Z + g[Q],
                  ee = Z - g[K],
                  te = Yt(f ? Mt(J, V) : J, Z, f ? Ot(ee, X) : ee);
              T[x] = te, A[x] = te - Z;
            }
          }

          t.modifiersData[n] = A;
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function fn(e) {
        var t,
            i = e.state,
            n = e.name,
            r = e.options,
            s = i.elements.arrow,
            o = i.modifiersData.popperOffsets,
            a = Ct(i.placement),
            l = At(a),
            u = [ft, ht].indexOf(a) >= 0 ? "height" : "width";

        if (s && o) {
          var c = function (e, t) {
            return Ft("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
              placement: t.placement
            })) : e) ? e : $t(e, pt));
          }(r.padding, i),
              d = rt(s),
              h = "y" === l ? ct : ft,
              f = "y" === l ? dt : ht,
              p = i.rects.reference[u] + i.rects.reference[l] - o[l] - i.rects.popper[u],
              v = o[l] - i.rects.reference[l],
              g = ut(s),
              m = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
              y = p / 2 - v / 2,
              b = c[h],
              w = m - d[u] - c[f],
              x = m / 2 - d[u] / 2 + y,
              T = Yt(b, x, w),
              S = l;

          i.modifiersData[n] = ((t = {})[S] = T, t.centerOffset = T - x, t);
        }
      },
      effect: function effect(e) {
        var t = e.state,
            i = e.options.element,
            n = void 0 === i ? "[data-popper-arrow]" : i;
        null != n && ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && Bt(t.elements.popper, n) && (t.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(e) {
        var t = e.state,
            i = e.name,
            n = t.rects.reference,
            r = t.rects.popper,
            s = t.modifiersData.preventOverflow,
            o = Gt(t, {
          elementContext: "reference"
        }),
            a = Gt(t, {
          altBoundary: !0
        }),
            l = Vt(o, n),
            u = Vt(a, r, s),
            c = Xt(l),
            d = Xt(u);
        t.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: u,
          isReferenceHidden: c,
          hasPopperEscaped: d
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": c,
          "data-popper-escaped": d
        });
      }
    }]
  }),
      Qt = {
    passive: !0,
    capture: !0
  };

  function Kt(e, t, i) {
    if (Array.isArray(e)) {
      var n = e[t];
      return null == n ? Array.isArray(i) ? i[t] : i : n;
    }

    return e;
  }

  function Zt(e, t) {
    var i = {}.toString.call(e);
    return 0 === i.indexOf("[object") && i.indexOf(t + "]") > -1;
  }

  function Jt(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }

  function ei(e, t) {
    return 0 === t ? e : function (n) {
      clearTimeout(i), i = setTimeout(function () {
        e(n);
      }, t);
    };
    var i;
  }

  function ti(e) {
    return [].concat(e);
  }

  function ii(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }

  function ni(e) {
    return e.split("-")[0];
  }

  function ri(e) {
    return [].slice.call(e);
  }

  function si() {
    return document.createElement("div");
  }

  function oi(e) {
    return ["Element", "Fragment"].some(function (t) {
      return Zt(e, t);
    });
  }

  function ai(e) {
    return Zt(e, "MouseEvent");
  }

  function li(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e);
  }

  function ui(e) {
    return oi(e) ? [e] : function (e) {
      return Zt(e, "NodeList");
    }(e) ? ri(e) : Array.isArray(e) ? e : ri(document.querySelectorAll(e));
  }

  function ci(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }

  function di(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }

  function hi(e) {
    var t,
        i = ti(e)[0];
    return (null == i || null == (t = i.ownerDocument) ? void 0 : t.body) ? i.ownerDocument : document;
  }

  function fi(e, t, i) {
    var n = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[n](t, i);
    });
  }

  var pi = {
    isTouch: !1
  },
      vi = 0;

  function gi() {
    pi.isTouch || (pi.isTouch = !0, window.performance && document.addEventListener("mousemove", mi));
  }

  function mi() {
    var e = performance.now();
    e - vi < 20 && (pi.isTouch = !1, document.removeEventListener("mousemove", mi)), vi = e;
  }

  function yi() {
    var e = document.activeElement;

    if (li(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }

  var bi = "undefined" != typeof window && "undefined" != typeof document ? navigator.userAgent : "",
      wi = /MSIE |Trident\//.test(bi);
  var xi = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
  },
      Ti = Object.assign({
    appendTo: function appendTo() {
      return document.body;
    },
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: !0,
    ignoreAttributes: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: !1,
    touch: !0,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, xi, {}, {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  }),
      Si = Object.keys(Ti);

  function Ci(e) {
    var t = (e.plugins || []).reduce(function (t, i) {
      var n = i.name,
          r = i.defaultValue;
      return n && (t[n] = void 0 !== e[n] ? e[n] : r), t;
    }, {});
    return Object.assign({}, e, {}, t);
  }

  function Ei(e, t) {
    var i = Object.assign({}, t, {
      content: Jt(t.content, [e])
    }, t.ignoreAttributes ? {} : function (e, t) {
      return (t ? Object.keys(Ci(Object.assign({}, Ti, {
        plugins: t
      }))) : Si).reduce(function (t, i) {
        var n = (e.getAttribute("data-tippy-" + i) || "").trim();
        if (!n) return t;
        if ("content" === i) t[i] = n;else try {
          t[i] = JSON.parse(n);
        } catch (e) {
          t[i] = n;
        }
        return t;
      }, {});
    }(e, t.plugins));
    return i.aria = Object.assign({}, Ti.aria, {}, i.aria), i.aria = {
      expanded: "auto" === i.aria.expanded ? t.interactive : i.aria.expanded,
      content: "auto" === i.aria.content ? t.interactive ? null : "describedby" : i.aria.content
    }, i;
  }

  function Ai(e, t) {
    e.innerHTML = t;
  }

  function ki(e) {
    var t = si();
    return !0 === e ? t.className = "tippy-arrow" : (t.className = "tippy-svg-arrow", oi(e) ? t.appendChild(e) : Ai(t, e)), t;
  }

  function Li(e, t) {
    oi(t.content) ? (Ai(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? Ai(e, t.content) : e.textContent = t.content);
  }

  function Oi(e) {
    var t = e.firstElementChild,
        i = ri(t.children);
    return {
      box: t,
      content: i.find(function (e) {
        return e.classList.contains("tippy-content");
      }),
      arrow: i.find(function (e) {
        return e.classList.contains("tippy-arrow") || e.classList.contains("tippy-svg-arrow");
      }),
      backdrop: i.find(function (e) {
        return e.classList.contains("tippy-backdrop");
      })
    };
  }

  function Mi(e) {
    var t = si(),
        i = si();
    i.className = "tippy-box", i.setAttribute("data-state", "hidden"), i.setAttribute("tabindex", "-1");
    var n = si();

    function r(i, n) {
      var r = Oi(t),
          s = r.box,
          o = r.content,
          a = r.arrow;
      n.theme ? s.setAttribute("data-theme", n.theme) : s.removeAttribute("data-theme"), "string" == typeof n.animation ? s.setAttribute("data-animation", n.animation) : s.removeAttribute("data-animation"), n.inertia ? s.setAttribute("data-inertia", "") : s.removeAttribute("data-inertia"), s.style.maxWidth = "number" == typeof n.maxWidth ? n.maxWidth + "px" : n.maxWidth, n.role ? s.setAttribute("role", n.role) : s.removeAttribute("role"), i.content === n.content && i.allowHTML === n.allowHTML || Li(o, e.props), n.arrow ? a ? i.arrow !== n.arrow && (s.removeChild(a), s.appendChild(ki(n.arrow))) : s.appendChild(ki(n.arrow)) : a && s.removeChild(a);
    }

    return n.className = "tippy-content", n.setAttribute("data-state", "hidden"), Li(n, e.props), t.appendChild(i), i.appendChild(n), r(e.props, e.props), {
      popper: t,
      onUpdate: r
    };
  }

  Mi.$$tippy = !0;
  var Pi = 1,
      Ii = [],
      Di = [];

  function ji(e, t) {
    var i,
        n,
        r,
        s,
        o,
        a,
        l,
        u,
        c,
        d = Ei(e, Object.assign({}, Ti, {}, Ci((i = t, Object.keys(i).reduce(function (e, t) {
      return void 0 !== i[t] && (e[t] = i[t]), e;
    }, {}))))),
        h = !1,
        f = !1,
        p = !1,
        v = !1,
        g = [],
        m = ei(X, d.interactiveDebounce),
        y = Pi++,
        b = (c = d.plugins).filter(function (e, t) {
      return c.indexOf(e) === t;
    }),
        w = {
      id: y,
      reference: e,
      popper: si(),
      popperInstance: null,
      props: d,
      state: {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1
      },
      plugins: b,
      clearDelayTimeouts: function clearDelayTimeouts() {
        clearTimeout(n), clearTimeout(r), cancelAnimationFrame(s);
      },
      setProps: function setProps(t) {
        0;
        if (w.state.isDestroyed) return;
        j("onBeforeUpdate", [w, t]), Y();
        var i = w.props,
            n = Ei(e, Object.assign({}, w.props, {}, t, {
          ignoreAttributes: !0
        }));
        w.props = n, G(), i.interactiveDebounce !== n.interactiveDebounce && (_(), m = ei(X, n.interactiveDebounce));
        i.triggerTarget && !n.triggerTarget ? ti(i.triggerTarget).forEach(function (e) {
          e.removeAttribute("aria-expanded");
        }) : n.triggerTarget && e.removeAttribute("aria-expanded");
        z(), D(), S && S(i, n);
        w.popperInstance && (Z(), ee().forEach(function (e) {
          requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
        }));
        j("onAfterUpdate", [w, t]);
      },
      setContent: function setContent(e) {
        w.setProps({
          content: e
        });
      },
      show: function show() {
        0;
        var e = w.state.isVisible,
            t = w.state.isDestroyed,
            i = !w.state.isEnabled,
            n = pi.isTouch && !w.props.touch,
            r = Kt(w.props.duration, 0, Ti.duration);
        if (e || t || i || n) return;
        if (O().hasAttribute("disabled")) return;
        if (j("onShow", [w], !1), !1 === w.props.onShow(w)) return;
        w.state.isVisible = !0, L() && (T.style.visibility = "visible");
        D(), R(), w.state.isMounted || (T.style.transition = "none");

        if (L()) {
          var s = P(),
              o = s.box,
              a = s.content;
          ci([o, a], 0);
        }

        l = function l() {
          var e;

          if (w.state.isVisible && !v) {
            if (v = !0, T.offsetHeight, T.style.transition = w.props.moveTransition, L() && w.props.animation) {
              var t = P(),
                  i = t.box,
                  n = t.content;
              ci([i, n], r), di([i, n], "visible");
            }

            N(), z(), ii(Di, w), null == (e = w.popperInstance) || e.forceUpdate(), w.state.isMounted = !0, j("onMount", [w]), w.props.animation && L() && function (e, t) {
              F(e, t);
            }(r, function () {
              w.state.isShown = !0, j("onShown", [w]);
            });
          }
        }, function () {
          var e,
              t = w.props.appendTo,
              i = O();
          e = w.props.interactive && t === Ti.appendTo || "parent" === t ? i.parentNode : Jt(t, [i]);
          e.contains(T) || e.appendChild(T);
          Z(), !1;
        }();
      },
      hide: function hide() {
        0;
        var e = !w.state.isVisible,
            t = w.state.isDestroyed,
            i = !w.state.isEnabled,
            n = Kt(w.props.duration, 1, Ti.duration);
        if (e || t || i) return;
        if (j("onHide", [w], !1), !1 === w.props.onHide(w)) return;
        w.state.isVisible = !1, w.state.isShown = !1, v = !1, h = !1, L() && (T.style.visibility = "hidden");

        if (_(), W(), D(), L()) {
          var r = P(),
              s = r.box,
              o = r.content;
          w.props.animation && (ci([s, o], n), di([s, o], "hidden"));
        }

        N(), z(), w.props.animation ? L() && function (e, t) {
          F(e, function () {
            !w.state.isVisible && T.parentNode && T.parentNode.contains(T) && t();
          });
        }(n, w.unmount) : w.unmount();
      },
      hideWithInteractivity: function hideWithInteractivity(e) {
        0;
        M().addEventListener("mousemove", m), ii(Ii, m), m(e);
      },
      enable: function enable() {
        w.state.isEnabled = !0;
      },
      disable: function disable() {
        w.hide(), w.state.isEnabled = !1;
      },
      unmount: function unmount() {
        0;
        w.state.isVisible && w.hide();
        if (!w.state.isMounted) return;
        J(), ee().forEach(function (e) {
          e._tippy.unmount();
        }), T.parentNode && T.parentNode.removeChild(T);
        Di = Di.filter(function (e) {
          return e !== w;
        }), w.state.isMounted = !1, j("onHidden", [w]);
      },
      destroy: function destroy() {
        0;
        if (w.state.isDestroyed) return;
        w.clearDelayTimeouts(), w.unmount(), Y(), delete e._tippy, w.state.isDestroyed = !0, j("onDestroy", [w]);
      }
    };
    if (!d.render) return w;
    var x = d.render(w),
        T = x.popper,
        S = x.onUpdate;
    T.setAttribute("data-tippy-root", ""), T.id = "tippy-" + w.id, w.popper = T, e._tippy = w, T._tippy = w;
    var C = b.map(function (e) {
      return e.fn(w);
    }),
        E = e.hasAttribute("aria-expanded");
    return G(), z(), D(), j("onCreate", [w]), d.showOnCreate && te(), T.addEventListener("mouseenter", function () {
      w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
    }), T.addEventListener("mouseleave", function (e) {
      w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && (M().addEventListener("mousemove", m), m(e));
    }), w;

    function A() {
      var e = w.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }

    function k() {
      return "hold" === A()[0];
    }

    function L() {
      var e;
      return !!(null == (e = w.props.render) ? void 0 : e.$$tippy);
    }

    function O() {
      return u || e;
    }

    function M() {
      var e = O().parentNode;
      return e ? hi(e) : document;
    }

    function P() {
      return Oi(T);
    }

    function I(e) {
      return w.state.isMounted && !w.state.isVisible || pi.isTouch || o && "focus" === o.type ? 0 : Kt(w.props.delay, e ? 0 : 1, Ti.delay);
    }

    function D() {
      T.style.pointerEvents = w.props.interactive && w.state.isVisible ? "" : "none", T.style.zIndex = "" + w.props.zIndex;
    }

    function j(e, t, i) {
      var n;
      (void 0 === i && (i = !0), C.forEach(function (i) {
        i[e] && i[e].apply(void 0, t);
      }), i) && (n = w.props)[e].apply(n, t);
    }

    function N() {
      var t = w.props.aria;

      if (t.content) {
        var i = "aria-" + t.content,
            n = T.id;
        ti(w.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(i);
          if (w.state.isVisible) e.setAttribute(i, t ? t + " " + n : n);else {
            var r = t && t.replace(n, "").trim();
            r ? e.setAttribute(i, r) : e.removeAttribute(i);
          }
        });
      }
    }

    function z() {
      !E && w.props.aria.expanded && ti(w.props.triggerTarget || e).forEach(function (e) {
        w.props.interactive ? e.setAttribute("aria-expanded", w.state.isVisible && e === O() ? "true" : "false") : e.removeAttribute("aria-expanded");
      });
    }

    function _() {
      M().removeEventListener("mousemove", m), Ii = Ii.filter(function (e) {
        return e !== m;
      });
    }

    function q(e) {
      if (!(pi.isTouch && (p || "mousedown" === e.type) || w.props.interactive && T.contains(e.target))) {
        if (O().contains(e.target)) {
          if (pi.isTouch) return;
          if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0) return;
        } else j("onClickOutside", [w, e]);

        !0 === w.props.hideOnClick && (w.clearDelayTimeouts(), w.hide(), f = !0, setTimeout(function () {
          f = !1;
        }), w.state.isMounted || W());
      }
    }

    function B() {
      p = !0;
    }

    function H() {
      p = !1;
    }

    function R() {
      var e = M();
      e.addEventListener("mousedown", q, !0), e.addEventListener("touchend", q, Qt), e.addEventListener("touchstart", H, Qt), e.addEventListener("touchmove", B, Qt);
    }

    function W() {
      var e = M();
      e.removeEventListener("mousedown", q, !0), e.removeEventListener("touchend", q, Qt), e.removeEventListener("touchstart", H, Qt), e.removeEventListener("touchmove", B, Qt);
    }

    function F(e, t) {
      var i = P().box;

      function n(e) {
        e.target === i && (fi(i, "remove", n), t());
      }

      if (0 === e) return t();
      fi(i, "remove", a), fi(i, "add", n), a = n;
    }

    function $(t, i, n) {
      void 0 === n && (n = !1), ti(w.props.triggerTarget || e).forEach(function (e) {
        e.addEventListener(t, i, n), g.push({
          node: e,
          eventType: t,
          handler: i,
          options: n
        });
      });
    }

    function G() {
      var e;
      k() && ($("touchstart", V, {
        passive: !0
      }), $("touchend", U, {
        passive: !0
      })), (e = w.props.trigger, e.split(/\s+/).filter(Boolean)).forEach(function (e) {
        if ("manual" !== e) switch ($(e, V), e) {
          case "mouseenter":
            $("mouseleave", U);
            break;

          case "focus":
            $(wi ? "focusout" : "blur", Q);
            break;

          case "focusin":
            $("focusout", Q);
        }
      });
    }

    function Y() {
      g.forEach(function (e) {
        var t = e.node,
            i = e.eventType,
            n = e.handler,
            r = e.options;
        t.removeEventListener(i, n, r);
      }), g = [];
    }

    function V(e) {
      var t,
          i = !1;

      if (w.state.isEnabled && !K(e) && !f) {
        var n = "focus" === (null == (t = o) ? void 0 : t.type);
        o = e, u = e.currentTarget, z(), !w.state.isVisible && ai(e) && Ii.forEach(function (t) {
          return t(e);
        }), "click" === e.type && (w.props.trigger.indexOf("mouseenter") < 0 || h) && !1 !== w.props.hideOnClick && w.state.isVisible ? i = !0 : te(e), "click" === e.type && (h = !i), i && !n && ie(e);
      }
    }

    function X(e) {
      var t = e.target,
          i = O().contains(t) || T.contains(t);
      "mousemove" === e.type && i || function (e, t) {
        var i = t.clientX,
            n = t.clientY;
        return e.every(function (e) {
          var t = e.popperRect,
              r = e.popperState,
              s = e.props.interactiveBorder,
              o = ni(r.placement),
              a = r.modifiersData.offset;
          if (!a) return !0;
          var l = "bottom" === o ? a.top.y : 0,
              u = "top" === o ? a.bottom.y : 0,
              c = "right" === o ? a.left.x : 0,
              d = "left" === o ? a.right.x : 0,
              h = t.top - n + l > s,
              f = n - t.bottom - u > s,
              p = t.left - i + c > s,
              v = i - t.right - d > s;
          return h || f || p || v;
        });
      }(ee().concat(T).map(function (e) {
        var t,
            i = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
        return i ? {
          popperRect: e.getBoundingClientRect(),
          popperState: i,
          props: d
        } : null;
      }).filter(Boolean), e) && (_(), ie(e));
    }

    function U(e) {
      K(e) || w.props.trigger.indexOf("click") >= 0 && h || (w.props.interactive ? w.hideWithInteractivity(e) : ie(e));
    }

    function Q(e) {
      w.props.trigger.indexOf("focusin") < 0 && e.target !== O() || w.props.interactive && e.relatedTarget && T.contains(e.relatedTarget) || ie(e);
    }

    function K(e) {
      return !!pi.isTouch && k() !== e.type.indexOf("touch") >= 0;
    }

    function Z() {
      J();
      var t = w.props,
          i = t.popperOptions,
          n = t.placement,
          r = t.offset,
          s = t.getReferenceClientRect,
          o = t.moveTransition,
          a = L() ? Oi(T).arrow : null,
          u = s ? {
        getBoundingClientRect: s,
        contextElement: s.contextElement || O()
      } : e,
          c = [{
        name: "offset",
        options: {
          offset: r
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !o
        }
      }, {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function fn(e) {
          var t = e.state;

          if (L()) {
            var i = P().box;
            ["placement", "reference-hidden", "escaped"].forEach(function (e) {
              "placement" === e ? i.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? i.setAttribute("data-" + e, "") : i.removeAttribute("data-" + e);
            }), t.attributes.popper = {};
          }
        }
      }];
      L() && a && c.push({
        name: "arrow",
        options: {
          element: a,
          padding: 3
        }
      }), c.push.apply(c, (null == i ? void 0 : i.modifiers) || []), w.popperInstance = Ut(u, T, Object.assign({}, i, {
        placement: n,
        onFirstUpdate: l,
        modifiers: c
      }));
    }

    function J() {
      w.popperInstance && (w.popperInstance.destroy(), w.popperInstance = null);
    }

    function ee() {
      return ri(T.querySelectorAll("[data-tippy-root]"));
    }

    function te(e) {
      w.clearDelayTimeouts(), e && j("onTrigger", [w, e]), R();
      var t = I(!0),
          i = A(),
          r = i[0],
          s = i[1];
      pi.isTouch && "hold" === r && s && (t = s), t ? n = setTimeout(function () {
        w.show();
      }, t) : w.show();
    }

    function ie(e) {
      if (w.clearDelayTimeouts(), j("onUntrigger", [w, e]), w.state.isVisible) {
        if (!(w.props.trigger.indexOf("mouseenter") >= 0 && w.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && h)) {
          var t = I(!1);
          t ? r = setTimeout(function () {
            w.state.isVisible && w.hide();
          }, t) : s = requestAnimationFrame(function () {
            w.hide();
          });
        }
      } else W();
    }
  }

  function Ni(e, t) {
    void 0 === t && (t = {});
    var i = Ti.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", gi, Qt), window.addEventListener("blur", yi);
    var n = Object.assign({}, t, {
      plugins: i
    }),
        r = ui(e).reduce(function (e, t) {
      var i = t && ji(t, n);
      return i && e.push(i), e;
    }, []);
    return oi(e) ? r[0] : r;
  }

  Ni.defaultProps = Ti, Ni.setDefaultProps = function (e) {
    Object.keys(e).forEach(function (t) {
      Ti[t] = e[t];
    });
  }, Ni.currentInput = pi;
  Object.assign({}, jt, {
    effect: function effect(e) {
      var t = e.state,
          i = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
    }
  });
  var zi = {
    clientX: 0,
    clientY: 0
  },
      _i = [];

  function qi(e) {
    var t = e.clientX,
        i = e.clientY;
    zi = {
      clientX: t,
      clientY: i
    };
  }

  var Bi = {
    name: "followCursor",
    defaultValue: !1,
    fn: function fn(e) {
      var t = e.reference,
          i = hi(e.props.triggerTarget || t),
          n = !1,
          r = !1,
          s = !0,
          o = e.props;

      function a() {
        return "initial" === e.props.followCursor && e.state.isVisible;
      }

      function l() {
        i.addEventListener("mousemove", d);
      }

      function u() {
        i.removeEventListener("mousemove", d);
      }

      function c() {
        n = !0, e.setProps({
          getReferenceClientRect: null
        }), n = !1;
      }

      function d(i) {
        var n = !i.target || t.contains(i.target),
            r = e.props.followCursor,
            s = i.clientX,
            o = i.clientY,
            a = t.getBoundingClientRect(),
            l = s - a.left,
            u = o - a.top;
        !n && e.props.interactive || e.setProps({
          getReferenceClientRect: function getReferenceClientRect() {
            var e = t.getBoundingClientRect(),
                i = s,
                n = o;
            "initial" === r && (i = e.left + l, n = e.top + u);
            var a = "horizontal" === r ? e.top : n,
                c = "vertical" === r ? e.right : i,
                d = "horizontal" === r ? e.bottom : n,
                h = "vertical" === r ? e.left : i;
            return {
              width: c - h,
              height: d - a,
              top: a,
              right: c,
              bottom: d,
              left: h
            };
          }
        });
      }

      function h() {
        e.props.followCursor && (_i.push({
          instance: e,
          doc: i
        }), function (e) {
          e.addEventListener("mousemove", qi);
        }(i));
      }

      function f() {
        0 === (_i = _i.filter(function (t) {
          return t.instance !== e;
        })).filter(function (e) {
          return e.doc === i;
        }).length && function (e) {
          e.removeEventListener("mousemove", qi);
        }(i);
      }

      return {
        onCreate: h,
        onDestroy: f,
        onBeforeUpdate: function onBeforeUpdate() {
          o = e.props;
        },
        onAfterUpdate: function onAfterUpdate(t, i) {
          var s = i.followCursor;
          n || void 0 !== s && o.followCursor !== s && (f(), s ? (h(), !e.state.isMounted || r || a() || l()) : (u(), c()));
        },
        onMount: function onMount() {
          e.props.followCursor && !r && (s && (d(zi), s = !1), a() || l());
        },
        onTrigger: function onTrigger(e, t) {
          ai(t) && (zi = {
            clientX: t.clientX,
            clientY: t.clientY
          }), r = "focus" === t.type;
        },
        onHidden: function onHidden() {
          e.props.followCursor && (c(), u(), s = !0);
        }
      };
    }
  };
  Ni.setDefaultProps({
    render: Mi
  });
  var Hi = Ni;
  "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function value(e, t) {
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");

      for (var i = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (null != r) for (var s in r) {
          Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
        }
      }

      return i;
    },
    writable: !0,
    configurable: !0
  }), window.svg4everybody = r.a, window.picturefill = o.a, window.objectFitImages = S, window.viewportUnitsBuggyfill = l.a, me.use([we, Se, Ae]), window.Swiper = me, window.AOS = Le.a, window.validate = Me.a, window.Barba = Ie.a, window.Lazy = je.a, window.debounce = ze.a, window.throttle = qe.a, window.disablePageScroll = Be.disablePageScroll, window.enablePageScroll = Be.enablePageScroll, window.clearQueueScrollLocks = Be.clearQueueScrollLocks, window.GLightbox = Re.a, window.imagesLoaded = Fe.a, window.Masonry = Ge.a, window.tippy = Hi, window.followCursor = Bi;
}]);
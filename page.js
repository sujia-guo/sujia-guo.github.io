(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var Hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function d0(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    }),
    n
}
var Sp = {
    exports: {}
}
  , Lo = {}
  , Pp = {
    exports: {}
}
  , b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei = Symbol.for("react.element")
  , h0 = Symbol.for("react.portal")
  , p0 = Symbol.for("react.fragment")
  , m0 = Symbol.for("react.strict_mode")
  , g0 = Symbol.for("react.profiler")
  , y0 = Symbol.for("react.provider")
  , v0 = Symbol.for("react.context")
  , w0 = Symbol.for("react.forward_ref")
  , x0 = Symbol.for("react.suspense")
  , S0 = Symbol.for("react.memo")
  , P0 = Symbol.for("react.lazy")
  , vf = Symbol.iterator;
function k0(t) {
    return t === null || typeof t != "object" ? null : (t = vf && t[vf] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var kp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Cp = Object.assign
  , Ep = {};
function wr(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Ep,
    this.updater = n || kp
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
wr.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Tp() {}
Tp.prototype = wr.prototype;
function Nu(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Ep,
    this.updater = n || kp
}
var Du = Nu.prototype = new Tp;
Du.constructor = Nu;
Cp(Du, wr.prototype);
Du.isPureReactComponent = !0;
var wf = Array.isArray
  , _p = Object.prototype.hasOwnProperty
  , bu = {
    current: null
}
  , Op = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mp(t, e, n) {
    var r, i = {}, s = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (s = "" + e.key),
        e)
            _p.call(e, r) && !Op.hasOwnProperty(r) && (i[r] = e[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Ei,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: bu.current
    }
}
function C0(t, e) {
    return {
        $$typeof: Ei,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Vu(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ei
}
function E0(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var xf = /\/+/g;
function hl(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? E0("" + t.key) : e.toString(36)
}
function _s(t, e, n, r, i) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Ei:
            case h0:
                o = !0
            }
        }
    if (o)
        return o = t,
        i = i(o),
        t = r === "" ? "." + hl(o, 0) : r,
        wf(i) ? (n = "",
        t != null && (n = t.replace(xf, "$&/") + "/"),
        _s(i, e, n, "", function(u) {
            return u
        })) : i != null && (Vu(i) && (i = C0(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(xf, "$&/") + "/") + t)),
        e.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    wf(t))
        for (var l = 0; l < t.length; l++) {
            s = t[l];
            var a = r + hl(s, l);
            o += _s(s, e, n, a, i)
        }
    else if (a = k0(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(s = t.next()).done; )
            s = s.value,
            a = r + hl(s, l++),
            o += _s(s, e, n, a, i);
    else if (s === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Wi(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , i = 0;
    return _s(t, r, "", "", function(s) {
        return e.call(n, s, i++)
    }),
    r
}
function T0(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Me = {
    current: null
}
  , Os = {
    transition: null
}
  , _0 = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Os,
    ReactCurrentOwner: bu
};
b.Children = {
    map: Wi,
    forEach: function(t, e, n) {
        Wi(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Wi(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Wi(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Vu(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
b.Component = wr;
b.Fragment = p0;
b.Profiler = g0;
b.PureComponent = Nu;
b.StrictMode = m0;
b.Suspense = x0;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0;
b.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = Cp({}, t.props)
      , i = t.key
      , s = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref,
        o = bu.current),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            _p.call(e, a) && !Op.hasOwnProperty(a) && (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Ei,
        type: t.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
b.createContext = function(t) {
    return t = {
        $$typeof: v0,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: y0,
        _context: t
    },
    t.Consumer = t
}
;
b.createElement = Mp;
b.createFactory = function(t) {
    var e = Mp.bind(null, t);
    return e.type = t,
    e
}
;
b.createRef = function() {
    return {
        current: null
    }
}
;
b.forwardRef = function(t) {
    return {
        $$typeof: w0,
        render: t
    }
}
;
b.isValidElement = Vu;
b.lazy = function(t) {
    return {
        $$typeof: P0,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: T0
    }
}
;
b.memo = function(t, e) {
    return {
        $$typeof: S0,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
b.startTransition = function(t) {
    var e = Os.transition;
    Os.transition = {};
    try {
        t()
    } finally {
        Os.transition = e
    }
}
;
b.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
b.useCallback = function(t, e) {
    return Me.current.useCallback(t, e)
}
;
b.useContext = function(t) {
    return Me.current.useContext(t)
}
;
b.useDebugValue = function() {}
;
b.useDeferredValue = function(t) {
    return Me.current.useDeferredValue(t)
}
;
b.useEffect = function(t, e) {
    return Me.current.useEffect(t, e)
}
;
b.useId = function() {
    return Me.current.useId()
}
;
b.useImperativeHandle = function(t, e, n) {
    return Me.current.useImperativeHandle(t, e, n)
}
;
b.useInsertionEffect = function(t, e) {
    return Me.current.useInsertionEffect(t, e)
}
;
b.useLayoutEffect = function(t, e) {
    return Me.current.useLayoutEffect(t, e)
}
;
b.useMemo = function(t, e) {
    return Me.current.useMemo(t, e)
}
;
b.useReducer = function(t, e, n) {
    return Me.current.useReducer(t, e, n)
}
;
b.useRef = function(t) {
    return Me.current.useRef(t)
}
;
b.useState = function(t) {
    return Me.current.useState(t)
}
;
b.useSyncExternalStore = function(t, e, n) {
    return Me.current.useSyncExternalStore(t, e, n)
}
;
b.useTransition = function() {
    return Me.current.useTransition()
}
;
b.version = "18.2.0";
Pp.exports = b;
var M = Pp.exports;
const zu = xp(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O0 = M
  , M0 = Symbol.for("react.element")
  , L0 = Symbol.for("react.fragment")
  , R0 = Object.prototype.hasOwnProperty
  , A0 = O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , j0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lp(t, e, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (r in e)
        R0.call(e, r) && !j0.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: M0,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: A0.current
    }
}
Lo.Fragment = L0;
Lo.jsx = Lp;
Lo.jsxs = Lp;
Sp.exports = Lo;
var x = Sp.exports
  , Rp = {
    exports: {}
}
  , Ue = {}
  , Ap = {
    exports: {}
}
  , jp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(_, j) {
        var D = _.length;
        _.push(j);
        e: for (; 0 < D; ) {
            var N = D - 1 >>> 1
              , G = _[N];
            if (0 < i(G, j))
                _[N] = j,
                _[D] = G,
                D = N;
            else
                break e
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0]
    }
    function r(_) {
        if (_.length === 0)
            return null;
        var j = _[0]
          , D = _.pop();
        if (D !== j) {
            _[0] = D;
            e: for (var N = 0, G = _.length, fn = G >>> 1; N < fn; ) {
                var ct = 2 * (N + 1) - 1
                  , bn = _[ct]
                  , Ve = ct + 1
                  , dn = _[Ve];
                if (0 > i(bn, D))
                    Ve < G && 0 > i(dn, bn) ? (_[N] = dn,
                    _[Ve] = D,
                    N = Ve) : (_[N] = bn,
                    _[ct] = D,
                    N = ct);
                else if (Ve < G && 0 > i(dn, D))
                    _[N] = dn,
                    _[Ve] = D,
                    N = Ve;
                else
                    break e
            }
        }
        return j
    }
    function i(_, j) {
        var D = _.sortIndex - j.sortIndex;
        return D !== 0 ? D : _.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        t.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , y = !1
      , v = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(_) {
        for (var j = n(u); j !== null; ) {
            if (j.callback === null)
                r(u);
            else if (j.startTime <= _)
                r(u),
                j.sortIndex = j.expirationTime,
                e(a, j);
            else
                break;
            j = n(u)
        }
    }
    function w(_) {
        if (v = !1,
        p(_),
        !y)
            if (n(a) !== null)
                y = !0,
                le(P);
            else {
                var j = n(u);
                j !== null && We(w, j.startTime - _)
            }
    }
    function P(_, j) {
        y = !1,
        v && (v = !1,
        g(C),
        C = -1),
        m = !0;
        var D = d;
        try {
            for (p(j),
            f = n(a); f !== null && (!(f.expirationTime > j) || _ && !se()); ) {
                var N = f.callback;
                if (typeof N == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var G = N(f.expirationTime <= j);
                    j = t.unstable_now(),
                    typeof G == "function" ? f.callback = G : f === n(a) && r(a),
                    p(j)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var fn = !0;
            else {
                var ct = n(u);
                ct !== null && We(w, ct.startTime - j),
                fn = !1
            }
            return fn
        } finally {
            f = null,
            d = D,
            m = !1
        }
    }
    var k = !1
      , E = null
      , C = -1
      , L = 5
      , R = -1;
    function se() {
        return !(t.unstable_now() - R < L)
    }
    function ue() {
        if (E !== null) {
            var _ = t.unstable_now();
            R = _;
            var j = !0;
            try {
                j = E(!0, _)
            } finally {
                j ? ge() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var ge;
    if (typeof h == "function")
        ge = function() {
            h(ue)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var oe = new MessageChannel
          , ut = oe.port2;
        oe.port1.onmessage = ue,
        ge = function() {
            ut.postMessage(null)
        }
    } else
        ge = function() {
            S(ue, 0)
        }
        ;
    function le(_) {
        E = _,
        k || (k = !0,
        ge())
    }
    function We(_, j) {
        C = S(function() {
            _(t.unstable_now())
        }, j)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(_) {
        _.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        y || m || (y = !0,
        le(P))
    }
    ,
    t.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < _ ? Math.floor(1e3 / _) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(_) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = d
        }
        var D = d;
        d = j;
        try {
            return _()
        } finally {
            d = D
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(_, j) {
        switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            _ = 3
        }
        var D = d;
        d = _;
        try {
            return j()
        } finally {
            d = D
        }
    }
    ,
    t.unstable_scheduleCallback = function(_, j, D) {
        var N = t.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? N + D : N) : D = N,
        _) {
        case 1:
            var G = -1;
            break;
        case 2:
            G = 250;
            break;
        case 5:
            G = 1073741823;
            break;
        case 4:
            G = 1e4;
            break;
        default:
            G = 5e3
        }
        return G = D + G,
        _ = {
            id: c++,
            callback: j,
            priorityLevel: _,
            startTime: D,
            expirationTime: G,
            sortIndex: -1
        },
        D > N ? (_.sortIndex = D,
        e(u, _),
        n(a) === null && _ === n(u) && (v ? (g(C),
        C = -1) : v = !0,
        We(w, D - N))) : (_.sortIndex = G,
        e(a, _),
        y || m || (y = !0,
        le(P))),
        _
    }
    ,
    t.unstable_shouldYield = se,
    t.unstable_wrapCallback = function(_) {
        var j = d;
        return function() {
            var D = d;
            d = j;
            try {
                return _.apply(this, arguments)
            } finally {
                d = D
            }
        }
    }
}
)(jp);
Ap.exports = jp;
var N0 = Ap.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np = M
  , Be = N0;
function T(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Dp = new Set
  , ti = {};
function Rn(t, e) {
    or(t, e),
    or(t + "Capture", e)
}
function or(t, e) {
    for (ti[t] = e,
    t = 0; t < e.length; t++)
        Dp.add(e[t])
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , aa = Object.prototype.hasOwnProperty
  , D0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Sf = {}
  , Pf = {};
function b0(t) {
    return aa.call(Pf, t) ? !0 : aa.call(Sf, t) ? !1 : D0.test(t) ? Pf[t] = !0 : (Sf[t] = !0,
    !1)
}
function V0(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function z0(t, e, n, r) {
    if (e === null || typeof e > "u" || V0(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Le(t, e, n, r, i, s, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    xe[t] = new Le(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    xe[e] = new Le(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    xe[t] = new Le(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    xe[t] = new Le(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    xe[t] = new Le(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    xe[t] = new Le(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    xe[t] = new Le(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    xe[t] = new Le(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    xe[t] = new Le(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var Iu = /[\-:]([a-z])/g;
function Fu(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Iu, Fu);
    xe[e] = new Le(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Iu, Fu);
    xe[e] = new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Iu, Fu);
    xe[e] = new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    xe[t] = new Le(t,1,!1,t.toLowerCase(),null,!1,!1)
});
xe.xlinkHref = new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    xe[t] = new Le(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function Bu(t, e, n, r) {
    var i = xe.hasOwnProperty(e) ? xe[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (z0(e, n, i, r) && (n = null),
    r || i === null ? b0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
    r = i.attributeNamespace,
    n === null ? t.removeAttribute(e) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var jt = Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Gi = Symbol.for("react.element")
  , zn = Symbol.for("react.portal")
  , In = Symbol.for("react.fragment")
  , $u = Symbol.for("react.strict_mode")
  , ua = Symbol.for("react.profiler")
  , bp = Symbol.for("react.provider")
  , Vp = Symbol.for("react.context")
  , Uu = Symbol.for("react.forward_ref")
  , ca = Symbol.for("react.suspense")
  , fa = Symbol.for("react.suspense_list")
  , Hu = Symbol.for("react.memo")
  , It = Symbol.for("react.lazy")
  , zp = Symbol.for("react.offscreen")
  , kf = Symbol.iterator;
function kr(t) {
    return t === null || typeof t != "object" ? null : (t = kf && t[kf] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var te = Object.assign, pl;
function br(t) {
    if (pl === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            pl = e && e[1] || ""
        }
    return `
` + pl + t
}
var ml = !1;
function gl(t, e) {
    if (!t || ml)
        return "";
    ml = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        ml = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? br(t) : ""
}
function I0(t) {
    switch (t.tag) {
    case 5:
        return br(t.type);
    case 16:
        return br("Lazy");
    case 13:
        return br("Suspense");
    case 19:
        return br("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = gl(t.type, !1),
        t;
    case 11:
        return t = gl(t.type.render, !1),
        t;
    case 1:
        return t = gl(t.type, !0),
        t;
    default:
        return ""
    }
}
function da(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case In:
        return "Fragment";
    case zn:
        return "Portal";
    case ua:
        return "Profiler";
    case $u:
        return "StrictMode";
    case ca:
        return "Suspense";
    case fa:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case Vp:
            return (t.displayName || "Context") + ".Consumer";
        case bp:
            return (t._context.displayName || "Context") + ".Provider";
        case Uu:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Hu:
            return e = t.displayName || null,
            e !== null ? e : da(t.type) || "Memo";
        case It:
            e = t._payload,
            t = t._init;
            try {
                return da(t(e))
            } catch {}
        }
    return null
}
function F0(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return da(e);
    case 8:
        return e === $u ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function nn(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function Ip(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function B0(t) {
    var e = Ip(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Qi(t) {
    t._valueTracker || (t._valueTracker = B0(t))
}
function Fp(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = Ip(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Gs(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function ha(t, e) {
    var n = e.checked;
    return te({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function Cf(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = nn(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function Bp(t, e) {
    e = e.checked,
    e != null && Bu(t, "checked", e, !1)
}
function pa(t, e) {
    Bp(t, e);
    var n = nn(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? ma(t, e.type, n) : e.hasOwnProperty("defaultValue") && ma(t, e.type, nn(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function Ef(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function ma(t, e, n) {
    (e !== "number" || Gs(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Vr = Array.isArray;
function er(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + nn(n),
        e = null,
        i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function ga(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return te({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function Tf(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(T(92));
            if (Vr(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: nn(n)
    }
}
function $p(t, e) {
    var n = nn(e.value)
      , r = nn(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function _f(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function Up(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ya(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Up(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Ki, Hp = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Ki = Ki || document.createElement("div"),
        Ki.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Ki.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function ni(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , $0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(t) {
    $0.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Br[e] = Br[t]
    })
});
function Wp(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Br.hasOwnProperty(t) && Br[t] ? ("" + e).trim() : e + "px"
}
function Gp(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Wp(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, i) : t[n] = i
        }
}
var U0 = te({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function va(t, e) {
    if (e) {
        if (U0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(T(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(T(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(T(62))
    }
}
function wa(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var xa = null;
function Wu(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Sa = null
  , tr = null
  , nr = null;
function Of(t) {
    if (t = Oi(t)) {
        if (typeof Sa != "function")
            throw Error(T(280));
        var e = t.stateNode;
        e && (e = Do(e),
        Sa(t.stateNode, t.type, e))
    }
}
function Qp(t) {
    tr ? nr ? nr.push(t) : nr = [t] : tr = t
}
function Kp() {
    if (tr) {
        var t = tr
          , e = nr;
        if (nr = tr = null,
        Of(t),
        e)
            for (t = 0; t < e.length; t++)
                Of(e[t])
    }
}
function Yp(t, e) {
    return t(e)
}
function Xp() {}
var yl = !1;
function Zp(t, e, n) {
    if (yl)
        return t(e, n);
    yl = !0;
    try {
        return Yp(t, e, n)
    } finally {
        yl = !1,
        (tr !== null || nr !== null) && (Xp(),
        Kp())
    }
}
function ri(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = Do(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, e, typeof n));
    return n
}
var Pa = !1;
if (Ot)
    try {
        var Cr = {};
        Object.defineProperty(Cr, "passive", {
            get: function() {
                Pa = !0
            }
        }),
        window.addEventListener("test", Cr, Cr),
        window.removeEventListener("test", Cr, Cr)
    } catch {
        Pa = !1
    }
function H0(t, e, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var $r = !1
  , Qs = null
  , Ks = !1
  , ka = null
  , W0 = {
    onError: function(t) {
        $r = !0,
        Qs = t
    }
};
function G0(t, e, n, r, i, s, o, l, a) {
    $r = !1,
    Qs = null,
    H0.apply(W0, arguments)
}
function Q0(t, e, n, r, i, s, o, l, a) {
    if (G0.apply(this, arguments),
    $r) {
        if ($r) {
            var u = Qs;
            $r = !1,
            Qs = null
        } else
            throw Error(T(198));
        Ks || (Ks = !0,
        ka = u)
    }
}
function An(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function qp(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Mf(t) {
    if (An(t) !== t)
        throw Error(T(188))
}
function K0(t) {
    var e = t.alternate;
    if (!e) {
        if (e = An(t),
        e === null)
            throw Error(T(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Mf(i),
                    t;
                if (s === r)
                    return Mf(i),
                    e;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? t : e
}
function Jp(t) {
    return t = K0(t),
    t !== null ? em(t) : null
}
function em(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = em(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var tm = Be.unstable_scheduleCallback
  , Lf = Be.unstable_cancelCallback
  , Y0 = Be.unstable_shouldYield
  , X0 = Be.unstable_requestPaint
  , ae = Be.unstable_now
  , Z0 = Be.unstable_getCurrentPriorityLevel
  , Gu = Be.unstable_ImmediatePriority
  , nm = Be.unstable_UserBlockingPriority
  , Ys = Be.unstable_NormalPriority
  , q0 = Be.unstable_LowPriority
  , rm = Be.unstable_IdlePriority
  , Ro = null
  , gt = null;
function J0(t) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
        try {
            gt.onCommitFiberRoot(Ro, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var it = Math.clz32 ? Math.clz32 : n1
  , e1 = Math.log
  , t1 = Math.LN2;
function n1(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (e1(t) / t1 | 0) | 0
}
var Yi = 64
  , Xi = 4194304;
function zr(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function Xs(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = t.suspendedLanes
      , s = t.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = zr(l) : (s &= o,
        s !== 0 && (r = zr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = zr(o) : s !== 0 && (r = zr(s));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
    s = e & -e,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - it(e),
            i = 1 << n,
            r |= t[n],
            e &= ~i;
    return r
}
function r1(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function i1(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s; ) {
        var o = 31 - it(s)
          , l = 1 << o
          , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = r1(l, e)) : a <= e && (t.expiredLanes |= l),
        s &= ~l
    }
}
function Ca(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function im() {
    var t = Yi;
    return Yi <<= 1,
    !(Yi & 4194240) && (Yi = 64),
    t
}
function vl(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function Ti(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - it(e),
    t[e] = n
}
function s1(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - it(n)
          , s = 1 << i;
        e[i] = 0,
        r[i] = -1,
        t[i] = -1,
        n &= ~s
    }
}
function Qu(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - it(n)
          , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
        n &= ~i
    }
}
var I = 0;
function sm(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var om, Ku, lm, am, um, Ea = !1, Zi = [], Gt = null, Qt = null, Kt = null, ii = new Map, si = new Map, $t = [], o1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rf(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Gt = null;
        break;
    case "dragenter":
    case "dragleave":
        Qt = null;
        break;
    case "mouseover":
    case "mouseout":
        Kt = null;
        break;
    case "pointerover":
    case "pointerout":
        ii.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        si.delete(e.pointerId)
    }
}
function Er(t, e, n, r, i, s) {
    return t === null || t.nativeEvent !== s ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    e !== null && (e = Oi(e),
    e !== null && Ku(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    i !== null && e.indexOf(i) === -1 && e.push(i),
    t)
}
function l1(t, e, n, r, i) {
    switch (e) {
    case "focusin":
        return Gt = Er(Gt, t, e, n, r, i),
        !0;
    case "dragenter":
        return Qt = Er(Qt, t, e, n, r, i),
        !0;
    case "mouseover":
        return Kt = Er(Kt, t, e, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return ii.set(s, Er(ii.get(s) || null, t, e, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        si.set(s, Er(si.get(s) || null, t, e, n, r, i)),
        !0
    }
    return !1
}
function cm(t) {
    var e = xn(t.target);
    if (e !== null) {
        var n = An(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = qp(n),
                e !== null) {
                    t.blockedOn = e,
                    um(t.priority, function() {
                        lm(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function Ms(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Ta(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            xa = r,
            n.target.dispatchEvent(r),
            xa = null
        } else
            return e = Oi(n),
            e !== null && Ku(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Af(t, e, n) {
    Ms(t) && n.delete(e)
}
function a1() {
    Ea = !1,
    Gt !== null && Ms(Gt) && (Gt = null),
    Qt !== null && Ms(Qt) && (Qt = null),
    Kt !== null && Ms(Kt) && (Kt = null),
    ii.forEach(Af),
    si.forEach(Af)
}
function Tr(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Ea || (Ea = !0,
    Be.unstable_scheduleCallback(Be.unstable_NormalPriority, a1)))
}
function oi(t) {
    function e(i) {
        return Tr(i, t)
    }
    if (0 < Zi.length) {
        Tr(Zi[0], t);
        for (var n = 1; n < Zi.length; n++) {
            var r = Zi[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Gt !== null && Tr(Gt, t),
    Qt !== null && Tr(Qt, t),
    Kt !== null && Tr(Kt, t),
    ii.forEach(e),
    si.forEach(e),
    n = 0; n < $t.length; n++)
        r = $t[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < $t.length && (n = $t[0],
    n.blockedOn === null); )
        cm(n),
        n.blockedOn === null && $t.shift()
}
var rr = jt.ReactCurrentBatchConfig
  , Zs = !0;
function u1(t, e, n, r) {
    var i = I
      , s = rr.transition;
    rr.transition = null;
    try {
        I = 1,
        Yu(t, e, n, r)
    } finally {
        I = i,
        rr.transition = s
    }
}
function c1(t, e, n, r) {
    var i = I
      , s = rr.transition;
    rr.transition = null;
    try {
        I = 4,
        Yu(t, e, n, r)
    } finally {
        I = i,
        rr.transition = s
    }
}
function Yu(t, e, n, r) {
    if (Zs) {
        var i = Ta(t, e, n, r);
        if (i === null)
            Ol(t, e, r, qs, n),
            Rf(t, r);
        else if (l1(i, t, e, n, r))
            r.stopPropagation();
        else if (Rf(t, r),
        e & 4 && -1 < o1.indexOf(t)) {
            for (; i !== null; ) {
                var s = Oi(i);
                if (s !== null && om(s),
                s = Ta(t, e, n, r),
                s === null && Ol(t, e, r, qs, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Ol(t, e, r, null, n)
    }
}
var qs = null;
function Ta(t, e, n, r) {
    if (qs = null,
    t = Wu(r),
    t = xn(t),
    t !== null)
        if (e = An(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = qp(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return qs = t,
    null
}
function fm(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Z0()) {
        case Gu:
            return 1;
        case nm:
            return 4;
        case Ys:
        case q0:
            return 16;
        case rm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ht = null
  , Xu = null
  , Ls = null;
function dm() {
    if (Ls)
        return Ls;
    var t, e = Xu, n = e.length, r, i = "value"in Ht ? Ht.value : Ht.textContent, s = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === i[s - r]; r++)
        ;
    return Ls = i.slice(t, 1 < r ? 1 - r : void 0)
}
function Rs(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function qi() {
    return !0
}
function jf() {
    return !1
}
function He(t) {
    function e(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? qi : jf,
        this.isPropagationStopped = jf,
        this
    }
    return te(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = qi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = qi)
        },
        persist: function() {},
        isPersistent: qi
    }),
    e
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Zu = He(xr), _i = te({}, xr, {
    view: 0,
    detail: 0
}), f1 = He(_i), wl, xl, _r, Ao = te({}, _i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== _r && (_r && t.type === "mousemove" ? (wl = t.screenX - _r.screenX,
        xl = t.screenY - _r.screenY) : xl = wl = 0,
        _r = t),
        wl)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : xl
    }
}), Nf = He(Ao), d1 = te({}, Ao, {
    dataTransfer: 0
}), h1 = He(d1), p1 = te({}, _i, {
    relatedTarget: 0
}), Sl = He(p1), m1 = te({}, xr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), g1 = He(m1), y1 = te({}, xr, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), v1 = He(y1), w1 = te({}, xr, {
    data: 0
}), Df = He(w1), x1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, S1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, P1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function k1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = P1[t]) ? !!e[t] : !1
}
function qu() {
    return k1
}
var C1 = te({}, _i, {
    key: function(t) {
        if (t.key) {
            var e = x1[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Rs(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? S1[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qu,
    charCode: function(t) {
        return t.type === "keypress" ? Rs(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? Rs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , E1 = He(C1)
  , T1 = te({}, Ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , bf = He(T1)
  , _1 = te({}, _i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
})
  , O1 = He(_1)
  , M1 = te({}, xr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , L1 = He(M1)
  , R1 = te({}, Ao, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , A1 = He(R1)
  , j1 = [9, 13, 27, 32]
  , Ju = Ot && "CompositionEvent"in window
  , Ur = null;
Ot && "documentMode"in document && (Ur = document.documentMode);
var N1 = Ot && "TextEvent"in window && !Ur
  , hm = Ot && (!Ju || Ur && 8 < Ur && 11 >= Ur)
  , Vf = String.fromCharCode(32)
  , zf = !1;
function pm(t, e) {
    switch (t) {
    case "keyup":
        return j1.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mm(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Fn = !1;
function D1(t, e) {
    switch (t) {
    case "compositionend":
        return mm(e);
    case "keypress":
        return e.which !== 32 ? null : (zf = !0,
        Vf);
    case "textInput":
        return t = e.data,
        t === Vf && zf ? null : t;
    default:
        return null
    }
}
function b1(t, e) {
    if (Fn)
        return t === "compositionend" || !Ju && pm(t, e) ? (t = dm(),
        Ls = Xu = Ht = null,
        Fn = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return hm && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var V1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function If(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!V1[t.type] : e === "textarea"
}
function gm(t, e, n, r) {
    Qp(r),
    e = Js(e, "onChange"),
    0 < e.length && (n = new Zu("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var Hr = null
  , li = null;
function z1(t) {
    _m(t, 0)
}
function jo(t) {
    var e = Un(t);
    if (Fp(e))
        return t
}
function I1(t, e) {
    if (t === "change")
        return e
}
var ym = !1;
if (Ot) {
    var Pl;
    if (Ot) {
        var kl = "oninput"in document;
        if (!kl) {
            var Ff = document.createElement("div");
            Ff.setAttribute("oninput", "return;"),
            kl = typeof Ff.oninput == "function"
        }
        Pl = kl
    } else
        Pl = !1;
    ym = Pl && (!document.documentMode || 9 < document.documentMode)
}
function Bf() {
    Hr && (Hr.detachEvent("onpropertychange", vm),
    li = Hr = null)
}
function vm(t) {
    if (t.propertyName === "value" && jo(li)) {
        var e = [];
        gm(e, li, t, Wu(t)),
        Zp(z1, e)
    }
}
function F1(t, e, n) {
    t === "focusin" ? (Bf(),
    Hr = e,
    li = n,
    Hr.attachEvent("onpropertychange", vm)) : t === "focusout" && Bf()
}
function B1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return jo(li)
}
function $1(t, e) {
    if (t === "click")
        return jo(e)
}
function U1(t, e) {
    if (t === "input" || t === "change")
        return jo(e)
}
function H1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var ot = typeof Object.is == "function" ? Object.is : H1;
function ai(t, e) {
    if (ot(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!aa.call(e, i) || !ot(t[i], e[i]))
            return !1
    }
    return !0
}
function $f(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Uf(t, e) {
    var n = $f(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $f(n)
    }
}
function wm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? wm(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function xm() {
    for (var t = window, e = Gs(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Gs(t.document)
    }
    return e
}
function ec(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function W1(t) {
    var e = xm()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && wm(n.ownerDocument.documentElement, n)) {
        if (r !== null && ec(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !t.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Uf(n, s);
                var o = Uf(n, r);
                i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(i.node, i.offset),
                t.removeAllRanges(),
                s > r ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var G1 = Ot && "documentMode"in document && 11 >= document.documentMode
  , Bn = null
  , _a = null
  , Wr = null
  , Oa = !1;
function Hf(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oa || Bn == null || Bn !== Gs(r) || (r = Bn,
    "selectionStart"in r && ec(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Wr && ai(Wr, r) || (Wr = r,
    r = Js(_a, "onSelect"),
    0 < r.length && (e = new Zu("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = Bn)))
}
function Ji(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var $n = {
    animationend: Ji("Animation", "AnimationEnd"),
    animationiteration: Ji("Animation", "AnimationIteration"),
    animationstart: Ji("Animation", "AnimationStart"),
    transitionend: Ji("Transition", "TransitionEnd")
}
  , Cl = {}
  , Sm = {};
Ot && (Sm = document.createElement("div").style,
"AnimationEvent"in window || (delete $n.animationend.animation,
delete $n.animationiteration.animation,
delete $n.animationstart.animation),
"TransitionEvent"in window || delete $n.transitionend.transition);
function No(t) {
    if (Cl[t])
        return Cl[t];
    if (!$n[t])
        return t;
    var e = $n[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Sm)
            return Cl[t] = e[n];
    return t
}
var Pm = No("animationend")
  , km = No("animationiteration")
  , Cm = No("animationstart")
  , Em = No("transitionend")
  , Tm = new Map
  , Wf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ln(t, e) {
    Tm.set(t, e),
    Rn(e, [t])
}
for (var El = 0; El < Wf.length; El++) {
    var Tl = Wf[El]
      , Q1 = Tl.toLowerCase()
      , K1 = Tl[0].toUpperCase() + Tl.slice(1);
    ln(Q1, "on" + K1)
}
ln(Pm, "onAnimationEnd");
ln(km, "onAnimationIteration");
ln(Cm, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(Em, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Y1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function Gf(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    Q0(r, e, void 0, t),
    t.currentTarget = null
}
function _m(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Gf(i, l, u),
                    s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Gf(i, l, u),
                    s = a
                }
        }
    }
    if (Ks)
        throw t = ka,
        Ks = !1,
        ka = null,
        t
}
function H(t, e) {
    var n = e[ja];
    n === void 0 && (n = e[ja] = new Set);
    var r = t + "__bubble";
    n.has(r) || (Om(e, t, 2, !1),
    n.add(r))
}
function _l(t, e, n) {
    var r = 0;
    e && (r |= 4),
    Om(n, t, r, e)
}
var es = "_reactListening" + Math.random().toString(36).slice(2);
function ui(t) {
    if (!t[es]) {
        t[es] = !0,
        Dp.forEach(function(n) {
            n !== "selectionchange" && (Y1.has(n) || _l(n, !1, t),
            _l(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[es] || (e[es] = !0,
        _l("selectionchange", !1, e))
    }
}
function Om(t, e, n, r) {
    switch (fm(e)) {
    case 1:
        var i = u1;
        break;
    case 4:
        i = c1;
        break;
    default:
        i = Yu
    }
    n = i.bind(null, e, n, t),
    i = void 0,
    !Pa || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
    r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}
function Ol(t, e, n, r, i) {
    var s = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = xn(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Zp(function() {
        var u = s
          , c = Wu(n)
          , f = [];
        e: {
            var d = Tm.get(t);
            if (d !== void 0) {
                var m = Zu
                  , y = t;
                switch (t) {
                case "keypress":
                    if (Rs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = E1;
                    break;
                case "focusin":
                    y = "focus",
                    m = Sl;
                    break;
                case "focusout":
                    y = "blur",
                    m = Sl;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = Sl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Nf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = h1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = O1;
                    break;
                case Pm:
                case km:
                case Cm:
                    m = g1;
                    break;
                case Em:
                    m = L1;
                    break;
                case "scroll":
                    m = f1;
                    break;
                case "wheel":
                    m = A1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = v1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = bf
                }
                var v = (e & 4) !== 0
                  , S = !v && t === "scroll"
                  , g = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var h = u, p; h !== null; ) {
                    p = h;
                    var w = p.stateNode;
                    if (p.tag === 5 && w !== null && (p = w,
                    g !== null && (w = ri(h, g),
                    w != null && v.push(ci(h, w, p)))),
                    S)
                        break;
                    h = h.return
                }
                0 < v.length && (d = new m(d,y,null,n,c),
                f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover",
                m = t === "mouseout" || t === "pointerout",
                d && n !== xa && (y = n.relatedTarget || n.fromElement) && (xn(y) || y[Mt]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (y = n.relatedTarget || n.toElement,
                m = u,
                y = y ? xn(y) : null,
                y !== null && (S = An(y),
                y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
                y = u),
                m !== y)) {
                    if (v = Nf,
                    w = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (t === "pointerout" || t === "pointerover") && (v = bf,
                    w = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    S = m == null ? d : Un(m),
                    p = y == null ? d : Un(y),
                    d = new v(w,h + "leave",m,n,c),
                    d.target = S,
                    d.relatedTarget = p,
                    w = null,
                    xn(c) === u && (v = new v(g,h + "enter",y,n,c),
                    v.target = p,
                    v.relatedTarget = S,
                    w = v),
                    S = w,
                    m && y)
                        t: {
                            for (v = m,
                            g = y,
                            h = 0,
                            p = v; p; p = Vn(p))
                                h++;
                            for (p = 0,
                            w = g; w; w = Vn(w))
                                p++;
                            for (; 0 < h - p; )
                                v = Vn(v),
                                h--;
                            for (; 0 < p - h; )
                                g = Vn(g),
                                p--;
                            for (; h--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = Vn(v),
                                g = Vn(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    m !== null && Qf(f, d, m, v, !1),
                    y !== null && S !== null && Qf(f, S, y, v, !0)
                }
            }
            e: {
                if (d = u ? Un(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var P = I1;
                else if (If(d))
                    if (ym)
                        P = U1;
                    else {
                        P = B1;
                        var k = F1
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = $1);
                if (P && (P = P(t, u))) {
                    gm(f, P, n, c);
                    break e
                }
                k && k(t, d, u),
                t === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && ma(d, "number", d.value)
            }
            switch (k = u ? Un(u) : window,
            t) {
            case "focusin":
                (If(k) || k.contentEditable === "true") && (Bn = k,
                _a = u,
                Wr = null);
                break;
            case "focusout":
                Wr = _a = Bn = null;
                break;
            case "mousedown":
                Oa = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Oa = !1,
                Hf(f, n, c);
                break;
            case "selectionchange":
                if (G1)
                    break;
            case "keydown":
            case "keyup":
                Hf(f, n, c)
            }
            var E;
            if (Ju)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                Fn ? pm(t, n) && (C = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (hm && n.locale !== "ko" && (Fn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Fn && (E = dm()) : (Ht = c,
            Xu = "value"in Ht ? Ht.value : Ht.textContent,
            Fn = !0)),
            k = Js(u, C),
            0 < k.length && (C = new Df(C,t,null,n,c),
            f.push({
                event: C,
                listeners: k
            }),
            E ? C.data = E : (E = mm(n),
            E !== null && (C.data = E)))),
            (E = N1 ? D1(t, n) : b1(t, n)) && (u = Js(u, "onBeforeInput"),
            0 < u.length && (c = new Df("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = E))
        }
        _m(f, e)
    })
}
function ci(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Js(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var i = t
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = ri(t, n),
        s != null && r.unshift(ci(t, s, i)),
        s = ri(t, e),
        s != null && r.push(ci(t, s, i))),
        t = t.return
    }
    return r
}
function Vn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Qf(t, e, n, r, i) {
    for (var s = e._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = ri(n, s),
        a != null && o.unshift(ci(n, a, l))) : i || (a = ri(n, s),
        a != null && o.push(ci(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var X1 = /\r\n?/g
  , Z1 = /\u0000|\uFFFD/g;
function Kf(t) {
    return (typeof t == "string" ? t : "" + t).replace(X1, `
`).replace(Z1, "")
}
function ts(t, e, n) {
    if (e = Kf(e),
    Kf(t) !== e && n)
        throw Error(T(425))
}
function eo() {}
var Ma = null
  , La = null;
function Ra(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Aa = typeof setTimeout == "function" ? setTimeout : void 0
  , q1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yf = typeof Promise == "function" ? Promise : void 0
  , J1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yf < "u" ? function(t) {
    return Yf.resolve(null).then(t).catch(ew)
}
: Aa;
function ew(t) {
    setTimeout(function() {
        throw t
    })
}
function Ml(t, e) {
    var n = e
      , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                    oi(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    oi(e)
}
function Yt(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Xf(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Sr = Math.random().toString(36).slice(2)
  , mt = "__reactFiber$" + Sr
  , fi = "__reactProps$" + Sr
  , Mt = "__reactContainer$" + Sr
  , ja = "__reactEvents$" + Sr
  , tw = "__reactListeners$" + Sr
  , nw = "__reactHandles$" + Sr;
function xn(t) {
    var e = t[mt];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[Mt] || n[mt]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Xf(t); t !== null; ) {
                    if (n = t[mt])
                        return n;
                    t = Xf(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Oi(t) {
    return t = t[mt] || t[Mt],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function Un(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(T(33))
}
function Do(t) {
    return t[fi] || null
}
var Na = []
  , Hn = -1;
function an(t) {
    return {
        current: t
    }
}
function W(t) {
    0 > Hn || (t.current = Na[Hn],
    Na[Hn] = null,
    Hn--)
}
function $(t, e) {
    Hn++,
    Na[Hn] = t.current,
    t.current = e
}
var rn = {}
  , Ce = an(rn)
  , je = an(!1)
  , Tn = rn;
function lr(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return rn;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = e[s];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ne(t) {
    return t = t.childContextTypes,
    t != null
}
function to() {
    W(je),
    W(Ce)
}
function Zf(t, e, n) {
    if (Ce.current !== rn)
        throw Error(T(168));
    $(Ce, e),
    $(je, n)
}
function Mm(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(T(108, F0(t) || "Unknown", i));
    return te({}, n, r)
}
function no(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || rn,
    Tn = Ce.current,
    $(Ce, t),
    $(je, je.current),
    !0
}
function qf(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (t = Mm(t, e, Tn),
    r.__reactInternalMemoizedMergedChildContext = t,
    W(je),
    W(Ce),
    $(Ce, t)) : W(je),
    $(je, n)
}
var St = null
  , bo = !1
  , Ll = !1;
function Lm(t) {
    St === null ? St = [t] : St.push(t)
}
function rw(t) {
    bo = !0,
    Lm(t)
}
function un() {
    if (!Ll && St !== null) {
        Ll = !0;
        var t = 0
          , e = I;
        try {
            var n = St;
            for (I = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            St = null,
            bo = !1
        } catch (i) {
            throw St !== null && (St = St.slice(t + 1)),
            tm(Gu, un),
            i
        } finally {
            I = e,
            Ll = !1
        }
    }
    return null
}
var Wn = []
  , Gn = 0
  , ro = null
  , io = 0
  , Ke = []
  , Ye = 0
  , _n = null
  , Pt = 1
  , kt = "";
function gn(t, e) {
    Wn[Gn++] = io,
    Wn[Gn++] = ro,
    ro = t,
    io = e
}
function Rm(t, e, n) {
    Ke[Ye++] = Pt,
    Ke[Ye++] = kt,
    Ke[Ye++] = _n,
    _n = t;
    var r = Pt;
    t = kt;
    var i = 32 - it(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - it(e) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        Pt = 1 << 32 - it(e) + i | n << i | r,
        kt = s + t
    } else
        Pt = 1 << s | n << i | r,
        kt = t
}
function tc(t) {
    t.return !== null && (gn(t, 1),
    Rm(t, 1, 0))
}
function nc(t) {
    for (; t === ro; )
        ro = Wn[--Gn],
        Wn[Gn] = null,
        io = Wn[--Gn],
        Wn[Gn] = null;
    for (; t === _n; )
        _n = Ke[--Ye],
        Ke[Ye] = null,
        kt = Ke[--Ye],
        Ke[Ye] = null,
        Pt = Ke[--Ye],
        Ke[Ye] = null
}
var Fe = null
  , Ie = null
  , K = !1
  , rt = null;
function Am(t, e) {
    var n = Xe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function Jf(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        Fe = t,
        Ie = Yt(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        Fe = t,
        Ie = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = _n !== null ? {
            id: Pt,
            overflow: kt
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Xe(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        Fe = t,
        Ie = null,
        !0) : !1;
    default:
        return !1
    }
}
function Da(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function ba(t) {
    if (K) {
        var e = Ie;
        if (e) {
            var n = e;
            if (!Jf(t, e)) {
                if (Da(t))
                    throw Error(T(418));
                e = Yt(n.nextSibling);
                var r = Fe;
                e && Jf(t, e) ? Am(r, n) : (t.flags = t.flags & -4097 | 2,
                K = !1,
                Fe = t)
            }
        } else {
            if (Da(t))
                throw Error(T(418));
            t.flags = t.flags & -4097 | 2,
            K = !1,
            Fe = t
        }
    }
}
function ed(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    Fe = t
}
function ns(t) {
    if (t !== Fe)
        return !1;
    if (!K)
        return ed(t),
        K = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Ra(t.type, t.memoizedProps)),
    e && (e = Ie)) {
        if (Da(t))
            throw jm(),
            Error(T(418));
        for (; e; )
            Am(t, e),
            e = Yt(e.nextSibling)
    }
    if (ed(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(T(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Ie = Yt(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Ie = null
        }
    } else
        Ie = Fe ? Yt(t.stateNode.nextSibling) : null;
    return !0
}
function jm() {
    for (var t = Ie; t; )
        t = Yt(t.nextSibling)
}
function ar() {
    Ie = Fe = null,
    K = !1
}
function rc(t) {
    rt === null ? rt = [t] : rt.push(t)
}
var iw = jt.ReactCurrentBatchConfig;
function tt(t, e) {
    if (t && t.defaultProps) {
        e = te({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
var so = an(null)
  , oo = null
  , Qn = null
  , ic = null;
function sc() {
    ic = Qn = oo = null
}
function oc(t) {
    var e = so.current;
    W(so),
    t._currentValue = e
}
function Va(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function ir(t, e) {
    oo = t,
    ic = Qn = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ae = !0),
    t.firstContext = null)
}
function qe(t) {
    var e = t._currentValue;
    if (ic !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Qn === null) {
            if (oo === null)
                throw Error(T(308));
            Qn = t,
            oo.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            Qn = Qn.next = t;
    return e
}
var Sn = null;
function lc(t) {
    Sn === null ? Sn = [t] : Sn.push(t)
}
function Nm(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
    lc(e)) : (n.next = i.next,
    i.next = n),
    e.interleaved = n,
    Lt(t, r)
}
function Lt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ft = !1;
function ac(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Dm(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function Et(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Xt(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    V & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
        i.next = e),
        r.pending = e,
        Lt(t, n)
    }
    return i = r.interleaved,
    i === null ? (e.next = e,
    lc(r)) : (e.next = i.next,
    i.next = e),
    r.interleaved = e,
    Lt(t, n)
}
function As(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Qu(t, n)
    }
}
function td(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = e : s = s.next = e
        } else
            i = s = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function lo(t, e, n, r) {
    var i = t.updateQueue;
    Ft = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        c = u = a = null,
        l = s;
        do {
            var d = l.lane
              , m = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = t
                      , v = l;
                    switch (d = e,
                    m = n,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            f = y.call(m, f, d);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        d = typeof y == "function" ? y.call(m, f, d) : y,
                        d == null)
                            break e;
                        f = te({}, f, d);
                        break e;
                    case 2:
                        Ft = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = m,
                a = f) : c = c.next = m,
                o |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        e = i.shared.interleaved,
        e !== null) {
            i = e;
            do
                o |= i.lane,
                i = i.next;
            while (i !== e)
        } else
            s === null && (i.shared.lanes = 0);
        Mn |= o,
        t.lanes = o,
        t.memoizedState = f
    }
}
function nd(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(T(191, i));
                i.call(r)
            }
        }
}
var bm = new Np.Component().refs;
function za(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : te({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Vo = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? An(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = Oe()
          , i = qt(t)
          , s = Et(r, i);
        s.payload = e,
        n != null && (s.callback = n),
        e = Xt(t, s, i),
        e !== null && (st(e, t, i, r),
        As(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = Oe()
          , i = qt(t)
          , s = Et(r, i);
        s.tag = 1,
        s.payload = e,
        n != null && (s.callback = n),
        e = Xt(t, s, i),
        e !== null && (st(e, t, i, r),
        As(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Oe()
          , r = qt(t)
          , i = Et(n, r);
        i.tag = 2,
        e != null && (i.callback = e),
        e = Xt(t, i, r),
        e !== null && (st(e, t, r, n),
        As(e, t, r))
    }
};
function rd(t, e, n, r, i, s, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, s, o) : e.prototype && e.prototype.isPureReactComponent ? !ai(n, r) || !ai(i, s) : !0
}
function Vm(t, e, n) {
    var r = !1
      , i = rn
      , s = e.contextType;
    return typeof s == "object" && s !== null ? s = qe(s) : (i = Ne(e) ? Tn : Ce.current,
    r = e.contextTypes,
    s = (r = r != null) ? lr(t, i) : rn),
    e = new e(n,s),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Vo,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = i,
    t.__reactInternalMemoizedMaskedChildContext = s),
    e
}
function id(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Vo.enqueueReplaceState(e, e.state, null)
}
function Ia(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
    i.state = t.memoizedState,
    i.refs = bm,
    ac(t);
    var s = e.contextType;
    typeof s == "object" && s !== null ? i.context = qe(s) : (s = Ne(e) ? Tn : Ce.current,
    i.context = lr(t, s)),
    i.state = t.memoizedState,
    s = e.getDerivedStateFromProps,
    typeof s == "function" && (za(t, e, s, n),
    i.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    e !== i.state && Vo.enqueueReplaceState(i, i.state, null),
    lo(t, n, i, r),
    i.state = t.memoizedState),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function Or(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, t));
            var i = r
              , s = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
                var l = i.refs;
                l === bm && (l = i.refs = {}),
                o === null ? delete l[s] : l[s] = o
            }
            ,
            e._stringRef = s,
            e)
        }
        if (typeof t != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, t))
    }
    return t
}
function rs(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(T(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function sd(t) {
    var e = t._init;
    return e(t._payload)
}
function zm(t) {
    function e(g, h) {
        if (t) {
            var p = g.deletions;
            p === null ? (g.deletions = [h],
            g.flags |= 16) : p.push(h)
        }
    }
    function n(g, h) {
        if (!t)
            return null;
        for (; h !== null; )
            e(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function i(g, h) {
        return g = Jt(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, h, p) {
        return g.index = p,
        t ? (p = g.alternate,
        p !== null ? (p = p.index,
        p < h ? (g.flags |= 2,
        h) : p) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, h, p, w) {
        return h === null || h.tag !== 6 ? (h = Vl(p, g.mode, w),
        h.return = g,
        h) : (h = i(h, p),
        h.return = g,
        h)
    }
    function a(g, h, p, w) {
        var P = p.type;
        return P === In ? c(g, h, p.props.children, w, p.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === It && sd(P) === h.type) ? (w = i(h, p.props),
        w.ref = Or(g, h, p),
        w.return = g,
        w) : (w = zs(p.type, p.key, p.props, null, g.mode, w),
        w.ref = Or(g, h, p),
        w.return = g,
        w)
    }
    function u(g, h, p, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = zl(p, g.mode, w),
        h.return = g,
        h) : (h = i(h, p.children || []),
        h.return = g,
        h)
    }
    function c(g, h, p, w, P) {
        return h === null || h.tag !== 7 ? (h = En(p, g.mode, w, P),
        h.return = g,
        h) : (h = i(h, p),
        h.return = g,
        h)
    }
    function f(g, h, p) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Vl("" + h, g.mode, p),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Gi:
                return p = zs(h.type, h.key, h.props, null, g.mode, p),
                p.ref = Or(g, null, h),
                p.return = g,
                p;
            case zn:
                return h = zl(h, g.mode, p),
                h.return = g,
                h;
            case It:
                var w = h._init;
                return f(g, w(h._payload), p)
            }
            if (Vr(h) || kr(h))
                return h = En(h, g.mode, p, null),
                h.return = g,
                h;
            rs(g, h)
        }
        return null
    }
    function d(g, h, p, w) {
        var P = h !== null ? h.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return P !== null ? null : l(g, h, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Gi:
                return p.key === P ? a(g, h, p, w) : null;
            case zn:
                return p.key === P ? u(g, h, p, w) : null;
            case It:
                return P = p._init,
                d(g, h, P(p._payload), w)
            }
            if (Vr(p) || kr(p))
                return P !== null ? null : c(g, h, p, w, null);
            rs(g, p)
        }
        return null
    }
    function m(g, h, p, w, P) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return g = g.get(p) || null,
            l(h, g, "" + w, P);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Gi:
                return g = g.get(w.key === null ? p : w.key) || null,
                a(h, g, w, P);
            case zn:
                return g = g.get(w.key === null ? p : w.key) || null,
                u(h, g, w, P);
            case It:
                var k = w._init;
                return m(g, h, p, k(w._payload), P)
            }
            if (Vr(w) || kr(w))
                return g = g.get(p) || null,
                c(h, g, w, P, null);
            rs(h, w)
        }
        return null
    }
    function y(g, h, p, w) {
        for (var P = null, k = null, E = h, C = h = 0, L = null; E !== null && C < p.length; C++) {
            E.index > C ? (L = E,
            E = null) : L = E.sibling;
            var R = d(g, E, p[C], w);
            if (R === null) {
                E === null && (E = L);
                break
            }
            t && E && R.alternate === null && e(g, E),
            h = s(R, h, C),
            k === null ? P = R : k.sibling = R,
            k = R,
            E = L
        }
        if (C === p.length)
            return n(g, E),
            K && gn(g, C),
            P;
        if (E === null) {
            for (; C < p.length; C++)
                E = f(g, p[C], w),
                E !== null && (h = s(E, h, C),
                k === null ? P = E : k.sibling = E,
                k = E);
            return K && gn(g, C),
            P
        }
        for (E = r(g, E); C < p.length; C++)
            L = m(E, g, C, p[C], w),
            L !== null && (t && L.alternate !== null && E.delete(L.key === null ? C : L.key),
            h = s(L, h, C),
            k === null ? P = L : k.sibling = L,
            k = L);
        return t && E.forEach(function(se) {
            return e(g, se)
        }),
        K && gn(g, C),
        P
    }
    function v(g, h, p, w) {
        var P = kr(p);
        if (typeof P != "function")
            throw Error(T(150));
        if (p = P.call(p),
        p == null)
            throw Error(T(151));
        for (var k = P = null, E = h, C = h = 0, L = null, R = p.next(); E !== null && !R.done; C++,
        R = p.next()) {
            E.index > C ? (L = E,
            E = null) : L = E.sibling;
            var se = d(g, E, R.value, w);
            if (se === null) {
                E === null && (E = L);
                break
            }
            t && E && se.alternate === null && e(g, E),
            h = s(se, h, C),
            k === null ? P = se : k.sibling = se,
            k = se,
            E = L
        }
        if (R.done)
            return n(g, E),
            K && gn(g, C),
            P;
        if (E === null) {
            for (; !R.done; C++,
            R = p.next())
                R = f(g, R.value, w),
                R !== null && (h = s(R, h, C),
                k === null ? P = R : k.sibling = R,
                k = R);
            return K && gn(g, C),
            P
        }
        for (E = r(g, E); !R.done; C++,
        R = p.next())
            R = m(E, g, C, R.value, w),
            R !== null && (t && R.alternate !== null && E.delete(R.key === null ? C : R.key),
            h = s(R, h, C),
            k === null ? P = R : k.sibling = R,
            k = R);
        return t && E.forEach(function(ue) {
            return e(g, ue)
        }),
        K && gn(g, C),
        P
    }
    function S(g, h, p, w) {
        if (typeof p == "object" && p !== null && p.type === In && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Gi:
                e: {
                    for (var P = p.key, k = h; k !== null; ) {
                        if (k.key === P) {
                            if (P = p.type,
                            P === In) {
                                if (k.tag === 7) {
                                    n(g, k.sibling),
                                    h = i(k, p.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (k.elementType === P || typeof P == "object" && P !== null && P.$$typeof === It && sd(P) === k.type) {
                                n(g, k.sibling),
                                h = i(k, p.props),
                                h.ref = Or(g, k, p),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, k);
                            break
                        } else
                            e(g, k);
                        k = k.sibling
                    }
                    p.type === In ? (h = En(p.props.children, g.mode, w, p.key),
                    h.return = g,
                    g = h) : (w = zs(p.type, p.key, p.props, null, g.mode, w),
                    w.ref = Or(g, h, p),
                    w.return = g,
                    g = w)
                }
                return o(g);
            case zn:
                e: {
                    for (k = p.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                n(g, h.sibling),
                                h = i(h, p.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            e(g, h);
                        h = h.sibling
                    }
                    h = zl(p, g.mode, w),
                    h.return = g,
                    g = h
                }
                return o(g);
            case It:
                return k = p._init,
                S(g, h, k(p._payload), w)
            }
            if (Vr(p))
                return y(g, h, p, w);
            if (kr(p))
                return v(g, h, p, w);
            rs(g, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = i(h, p),
        h.return = g,
        g = h) : (n(g, h),
        h = Vl(p, g.mode, w),
        h.return = g,
        g = h),
        o(g)) : n(g, h)
    }
    return S
}
var ur = zm(!0)
  , Im = zm(!1)
  , Mi = {}
  , yt = an(Mi)
  , di = an(Mi)
  , hi = an(Mi);
function Pn(t) {
    if (t === Mi)
        throw Error(T(174));
    return t
}
function uc(t, e) {
    switch ($(hi, e),
    $(di, t),
    $(yt, Mi),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : ya(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = ya(e, t)
    }
    W(yt),
    $(yt, e)
}
function cr() {
    W(yt),
    W(di),
    W(hi)
}
function Fm(t) {
    Pn(hi.current);
    var e = Pn(yt.current)
      , n = ya(e, t.type);
    e !== n && ($(di, t),
    $(yt, n))
}
function cc(t) {
    di.current === t && (W(yt),
    W(di))
}
var q = an(0);
function ao(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Rl = [];
function fc() {
    for (var t = 0; t < Rl.length; t++)
        Rl[t]._workInProgressVersionPrimary = null;
    Rl.length = 0
}
var js = jt.ReactCurrentDispatcher
  , Al = jt.ReactCurrentBatchConfig
  , On = 0
  , ee = null
  , de = null
  , pe = null
  , uo = !1
  , Gr = !1
  , pi = 0
  , sw = 0;
function Se() {
    throw Error(T(321))
}
function dc(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!ot(t[n], e[n]))
            return !1;
    return !0
}
function hc(t, e, n, r, i, s) {
    if (On = s,
    ee = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    js.current = t === null || t.memoizedState === null ? uw : cw,
    t = n(r, i),
    Gr) {
        s = 0;
        do {
            if (Gr = !1,
            pi = 0,
            25 <= s)
                throw Error(T(301));
            s += 1,
            pe = de = null,
            e.updateQueue = null,
            js.current = fw,
            t = n(r, i)
        } while (Gr)
    }
    if (js.current = co,
    e = de !== null && de.next !== null,
    On = 0,
    pe = de = ee = null,
    uo = !1,
    e)
        throw Error(T(300));
    return t
}
function pc() {
    var t = pi !== 0;
    return pi = 0,
    t
}
function ht() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return pe === null ? ee.memoizedState = pe = t : pe = pe.next = t,
    pe
}
function Je() {
    if (de === null) {
        var t = ee.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = de.next;
    var e = pe === null ? ee.memoizedState : pe.next;
    if (e !== null)
        pe = e,
        de = t;
    else {
        if (t === null)
            throw Error(T(310));
        de = t,
        t = {
            memoizedState: de.memoizedState,
            baseState: de.baseState,
            baseQueue: de.baseQueue,
            queue: de.queue,
            next: null
        },
        pe === null ? ee.memoizedState = pe = t : pe = pe.next = t
    }
    return pe
}
function mi(t, e) {
    return typeof e == "function" ? e(t) : e
}
function jl(t) {
    var e = Je()
      , n = e.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = t;
    var r = de
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var c = u.lane;
            if ((On & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                o = r) : a = a.next = f,
                ee.lanes |= c,
                Mn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
        ot(r, e.memoizedState) || (Ae = !0),
        e.memoizedState = r,
        e.baseState = o,
        e.baseQueue = a,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        i = t;
        do
            s = i.lane,
            ee.lanes |= s,
            Mn |= s,
            i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Nl(t) {
    var e = Je()
      , n = e.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , i = n.pending
      , s = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = t(s, o.action),
            o = o.next;
        while (o !== i);
        ot(s, e.memoizedState) || (Ae = !0),
        e.memoizedState = s,
        e.baseQueue === null && (e.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Bm() {}
function $m(t, e) {
    var n = ee
      , r = Je()
      , i = e()
      , s = !ot(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Ae = !0),
    r = r.queue,
    mc(Wm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || pe !== null && pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        gi(9, Hm.bind(null, n, r, i, e), void 0, null),
        me === null)
            throw Error(T(349));
        On & 30 || Um(n, e, i)
    }
    return i
}
function Um(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = ee.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    ee.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function Hm(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    Gm(e) && Qm(t)
}
function Wm(t, e, n) {
    return n(function() {
        Gm(e) && Qm(t)
    })
}
function Gm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !ot(t, n)
    } catch {
        return !0
    }
}
function Qm(t) {
    var e = Lt(t, 1);
    e !== null && st(e, t, 1, -1)
}
function od(t) {
    var e = ht();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = aw.bind(null, ee, t),
    [e.memoizedState, t]
}
function gi(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = ee.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    ee.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function Km() {
    return Je().memoizedState
}
function Ns(t, e, n, r) {
    var i = ht();
    ee.flags |= t,
    i.memoizedState = gi(1 | e, n, void 0, r === void 0 ? null : r)
}
function zo(t, e, n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (de !== null) {
        var o = de.memoizedState;
        if (s = o.destroy,
        r !== null && dc(r, o.deps)) {
            i.memoizedState = gi(e, n, s, r);
            return
        }
    }
    ee.flags |= t,
    i.memoizedState = gi(1 | e, n, s, r)
}
function ld(t, e) {
    return Ns(8390656, 8, t, e)
}
function mc(t, e) {
    return zo(2048, 8, t, e)
}
function Ym(t, e) {
    return zo(4, 2, t, e)
}
function Xm(t, e) {
    return zo(4, 4, t, e)
}
function Zm(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function qm(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    zo(4, 4, Zm.bind(null, e, t), n)
}
function gc() {}
function Jm(t, e) {
    var n = Je();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && dc(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function eg(t, e) {
    var n = Je();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && dc(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function tg(t, e, n) {
    return On & 21 ? (ot(n, e) || (n = im(),
    ee.lanes |= n,
    Mn |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ae = !0),
    t.memoizedState = n)
}
function ow(t, e) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = Al.transition;
    Al.transition = {};
    try {
        t(!1),
        e()
    } finally {
        I = n,
        Al.transition = r
    }
}
function ng() {
    return Je().memoizedState
}
function lw(t, e, n) {
    var r = qt(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    rg(t))
        ig(e, n);
    else if (n = Nm(t, e, n, r),
    n !== null) {
        var i = Oe();
        st(n, t, r, i),
        sg(n, e, r)
    }
}
function aw(t, e, n) {
    var r = qt(t)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (rg(t))
        ig(e, i);
    else {
        var s = t.alternate;
        if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer,
        s !== null))
            try {
                var o = e.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                ot(l, o)) {
                    var a = e.interleaved;
                    a === null ? (i.next = i,
                    lc(e)) : (i.next = a.next,
                    a.next = i),
                    e.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Nm(t, e, i, r),
        n !== null && (i = Oe(),
        st(n, t, r, i),
        sg(n, e, r))
    }
}
function rg(t) {
    var e = t.alternate;
    return t === ee || e !== null && e === ee
}
function ig(t, e) {
    Gr = uo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function sg(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Qu(t, n)
    }
}
var co = {
    readContext: qe,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
  , uw = {
    readContext: qe,
    useCallback: function(t, e) {
        return ht().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: qe,
    useEffect: ld,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        Ns(4194308, 4, Zm.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return Ns(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return Ns(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = ht();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = ht();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = lw.bind(null, ee, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = ht();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: od,
    useDebugValue: gc,
    useDeferredValue: function(t) {
        return ht().memoizedState = t
    },
    useTransition: function() {
        var t = od(!1)
          , e = t[0];
        return t = ow.bind(null, t[1]),
        ht().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = ee
          , i = ht();
        if (K) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = e(),
            me === null)
                throw Error(T(349));
            On & 30 || Um(r, e, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: e
        };
        return i.queue = s,
        ld(Wm.bind(null, r, s, t), [t]),
        r.flags |= 2048,
        gi(9, Hm.bind(null, r, s, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = ht()
          , e = me.identifierPrefix;
        if (K) {
            var n = kt
              , r = Pt;
            n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = pi++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = sw++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , cw = {
    readContext: qe,
    useCallback: Jm,
    useContext: qe,
    useEffect: mc,
    useImperativeHandle: qm,
    useInsertionEffect: Ym,
    useLayoutEffect: Xm,
    useMemo: eg,
    useReducer: jl,
    useRef: Km,
    useState: function() {
        return jl(mi)
    },
    useDebugValue: gc,
    useDeferredValue: function(t) {
        var e = Je();
        return tg(e, de.memoizedState, t)
    },
    useTransition: function() {
        var t = jl(mi)[0]
          , e = Je().memoizedState;
        return [t, e]
    },
    useMutableSource: Bm,
    useSyncExternalStore: $m,
    useId: ng,
    unstable_isNewReconciler: !1
}
  , fw = {
    readContext: qe,
    useCallback: Jm,
    useContext: qe,
    useEffect: mc,
    useImperativeHandle: qm,
    useInsertionEffect: Ym,
    useLayoutEffect: Xm,
    useMemo: eg,
    useReducer: Nl,
    useRef: Km,
    useState: function() {
        return Nl(mi)
    },
    useDebugValue: gc,
    useDeferredValue: function(t) {
        var e = Je();
        return de === null ? e.memoizedState = t : tg(e, de.memoizedState, t)
    },
    useTransition: function() {
        var t = Nl(mi)[0]
          , e = Je().memoizedState;
        return [t, e]
    },
    useMutableSource: Bm,
    useSyncExternalStore: $m,
    useId: ng,
    unstable_isNewReconciler: !1
};
function fr(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += I0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function Dl(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Fa(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var dw = typeof WeakMap == "function" ? WeakMap : Map;
function og(t, e, n) {
    n = Et(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        ho || (ho = !0,
        Xa = r),
        Fa(t, e)
    }
    ,
    n
}
function lg(t, e, n) {
    n = Et(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Fa(t, e)
        }
    }
    var s = t.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Fa(t, e),
        typeof r != "function" && (Zt === null ? Zt = new Set([this]) : Zt.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function ad(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new dw;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
        i === void 0 && (i = new Set,
        r.set(e, i));
    i.has(n) || (i.add(n),
    t = Tw.bind(null, t, e, n),
    e.then(t, t))
}
function ud(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function cd(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = i,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Et(-1, 1),
    e.tag = 2,
    Xt(n, e, 1))),
    n.lanes |= 1),
    t)
}
var hw = jt.ReactCurrentOwner
  , Ae = !1;
function _e(t, e, n, r) {
    e.child = t === null ? Im(e, null, n, r) : ur(e, t.child, n, r)
}
function fd(t, e, n, r, i) {
    n = n.render;
    var s = e.ref;
    return ir(e, i),
    r = hc(t, e, n, r, s, i),
    n = pc(),
    t !== null && !Ae ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Rt(t, e, i)) : (K && n && tc(e),
    e.flags |= 1,
    _e(t, e, r, i),
    e.child)
}
function dd(t, e, n, r, i) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" && !Cc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = s,
        ag(t, e, s, r, i)) : (t = zs(n.type, null, r, e, e.mode, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (s = t.child,
    !(t.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ai,
        n(o, r) && t.ref === e.ref)
            return Rt(t, e, i)
    }
    return e.flags |= 1,
    t = Jt(s, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function ag(t, e, n, r, i) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (ai(s, r) && t.ref === e.ref)
            if (Ae = !1,
            e.pendingProps = r = s,
            (t.lanes & i) !== 0)
                t.flags & 131072 && (Ae = !0);
            else
                return e.lanes = t.lanes,
                Rt(t, e, i)
    }
    return Ba(t, e, n, r, i)
}
function ug(t, e, n) {
    var r = e.pendingProps
      , i = r.children
      , s = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(Yn, ze),
            ze |= n;
        else {
            if (!(n & 1073741824))
                return t = s !== null ? s.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                $(Yn, ze),
                ze |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            $(Yn, ze),
            ze |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        e.memoizedState = null) : r = n,
        $(Yn, ze),
        ze |= r;
    return _e(t, e, i, n),
    e.child
}
function cg(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Ba(t, e, n, r, i) {
    var s = Ne(n) ? Tn : Ce.current;
    return s = lr(e, s),
    ir(e, i),
    n = hc(t, e, n, r, s, i),
    r = pc(),
    t !== null && !Ae ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    Rt(t, e, i)) : (K && r && tc(e),
    e.flags |= 1,
    _e(t, e, n, i),
    e.child)
}
function hd(t, e, n, r, i) {
    if (Ne(n)) {
        var s = !0;
        no(e)
    } else
        s = !1;
    if (ir(e, i),
    e.stateNode === null)
        Ds(t, e),
        Vm(e, n, r),
        Ia(e, n, r, i),
        r = !0;
    else if (t === null) {
        var o = e.stateNode
          , l = e.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = qe(u) : (u = Ne(n) ? Tn : Ce.current,
        u = lr(e, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && id(e, o, r, u),
        Ft = !1;
        var d = e.memoizedState;
        o.state = d,
        lo(e, r, o, i),
        a = e.memoizedState,
        l !== r || d !== a || je.current || Ft ? (typeof c == "function" && (za(e, n, c, r),
        a = e.memoizedState),
        (l = Ft || rd(e, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        o = e.stateNode,
        Dm(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : tt(e.type, l),
        o.props = u,
        f = e.pendingProps,
        d = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = qe(a) : (a = Ne(n) ? Tn : Ce.current,
        a = lr(e, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && id(e, o, r, a),
        Ft = !1,
        d = e.memoizedState,
        o.state = d,
        lo(e, r, o, i);
        var y = e.memoizedState;
        l !== f || d !== y || je.current || Ft ? (typeof m == "function" && (za(e, n, m, r),
        y = e.memoizedState),
        (u = Ft || rd(e, n, u, r, d, y, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return $a(t, e, n, r, s, i)
}
function $a(t, e, n, r, i, s) {
    cg(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return i && qf(e, n, !1),
        Rt(t, e, s);
    r = e.stateNode,
    hw.current = e;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = ur(e, t.child, null, s),
    e.child = ur(e, null, l, s)) : _e(t, e, l, s),
    e.memoizedState = r.state,
    i && qf(e, n, !0),
    e.child
}
function fg(t) {
    var e = t.stateNode;
    e.pendingContext ? Zf(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Zf(t, e.context, !1),
    uc(t, e.containerInfo)
}
function pd(t, e, n, r, i) {
    return ar(),
    rc(i),
    e.flags |= 256,
    _e(t, e, n, r),
    e.child
}
var Ua = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ha(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function dg(t, e, n) {
    var r = e.pendingProps, i = q.current, s = !1, o = (e.flags & 128) !== 0, l;
    if ((l = o) || (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
    $(q, i & 1),
    t === null)
        return ba(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = r.children,
        t = r.fallback,
        s ? (r = e.mode,
        s = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Bo(o, r, 0, null),
        t = En(t, r, n, null),
        s.return = e,
        t.return = e,
        s.sibling = t,
        e.child = s,
        e.child.memoizedState = Ha(n),
        e.memoizedState = Ua,
        t) : yc(e, o));
    if (i = t.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return pw(t, e, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = e.mode,
        i = t.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== i ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = a,
        e.deletions = null) : (r = Jt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = Jt(l, s) : (s = En(s, o, n, null),
        s.flags |= 2),
        s.return = e,
        r.return = e,
        r.sibling = s,
        e.child = r,
        r = s,
        s = e.child,
        o = t.child.memoizedState,
        o = o === null ? Ha(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = t.childLanes & ~n,
        e.memoizedState = Ua,
        r
    }
    return s = t.child,
    t = s.sibling,
    r = Jt(s, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function yc(t, e) {
    return e = Bo({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function is(t, e, n, r) {
    return r !== null && rc(r),
    ur(e, t.child, null, n),
    t = yc(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function pw(t, e, n, r, i, s, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = Dl(Error(T(422))),
        is(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (s = r.fallback,
        i = e.mode,
        r = Bo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = En(s, i, o, null),
        s.flags |= 2,
        r.return = e,
        s.return = e,
        r.sibling = s,
        e.child = r,
        e.mode & 1 && ur(e, t.child, null, o),
        e.child.memoizedState = Ha(o),
        e.memoizedState = Ua,
        s);
    if (!(e.mode & 1))
        return is(t, e, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(T(419)),
        r = Dl(s, r, void 0),
        is(t, e, o, r)
    }
    if (l = (o & t.childLanes) !== 0,
    Ae || l) {
        if (r = me,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            Lt(t, i),
            st(r, t, i, -1))
        }
        return kc(),
        r = Dl(Error(T(421))),
        is(t, e, o, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = _w.bind(null, t),
    i._reactRetry = e,
    null) : (t = s.treeContext,
    Ie = Yt(i.nextSibling),
    Fe = e,
    K = !0,
    rt = null,
    t !== null && (Ke[Ye++] = Pt,
    Ke[Ye++] = kt,
    Ke[Ye++] = _n,
    Pt = t.id,
    kt = t.overflow,
    _n = e),
    e = yc(e, r.children),
    e.flags |= 4096,
    e)
}
function md(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    Va(t.return, e, n)
}
function bl(t, e, n, r, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = e,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function hg(t, e, n) {
    var r = e.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (_e(t, e, r.children, n),
    r = q.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && md(t, n, e);
                else if (t.tag === 19)
                    md(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if ($(q, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = e.child,
            i = null; n !== null; )
                t = n.alternate,
                t !== null && ao(t) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = e.child,
            e.child = null) : (i = n.sibling,
            n.sibling = null),
            bl(e, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = e.child,
            e.child = null; i !== null; ) {
                if (t = i.alternate,
                t !== null && ao(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling,
                i.sibling = n,
                n = i,
                i = t
            }
            bl(e, !0, n, null, s);
            break;
        case "together":
            bl(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Ds(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Rt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    Mn |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(T(153));
    if (e.child !== null) {
        for (t = e.child,
        n = Jt(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = Jt(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function mw(t, e, n) {
    switch (e.tag) {
    case 3:
        fg(e),
        ar();
        break;
    case 5:
        Fm(e);
        break;
    case 1:
        Ne(e.type) && no(e);
        break;
    case 4:
        uc(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , i = e.memoizedProps.value;
        $(so, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(q, q.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? dg(t, e, n) : ($(q, q.current & 1),
            t = Rt(t, e, n),
            t !== null ? t.sibling : null);
        $(q, q.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return hg(t, e, n);
            e.flags |= 128
        }
        if (i = e.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        $(q, q.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        ug(t, e, n)
    }
    return Rt(t, e, n)
}
var pg, Wa, mg, gg;
pg = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Wa = function() {}
;
mg = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
        Pn(yt.current);
        var s = null;
        switch (n) {
        case "input":
            i = ha(t, i),
            r = ha(t, r),
            s = [];
            break;
        case "select":
            i = te({}, i, {
                value: void 0
            }),
            r = te({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = ga(t, i),
            r = ga(t, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = eo)
        }
        va(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ti.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ti.hasOwnProperty(u) ? (a != null && u === "onScroll" && H("scroll", t),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
gg = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function Mr(t, e) {
    if (!K)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function Pe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = t,
            i = i.sibling;
    else
        for (i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = t,
            i = i.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function gw(t, e, n) {
    var r = e.pendingProps;
    switch (nc(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Pe(e),
        null;
    case 1:
        return Ne(e.type) && to(),
        Pe(e),
        null;
    case 3:
        return r = e.stateNode,
        cr(),
        W(je),
        W(Ce),
        fc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (ns(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        rt !== null && (Ja(rt),
        rt = null))),
        Wa(t, e),
        Pe(e),
        null;
    case 5:
        cc(e);
        var i = Pn(hi.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            mg(t, e, n, r, i),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(T(166));
                return Pe(e),
                null
            }
            if (t = Pn(yt.current),
            ns(e)) {
                r = e.stateNode,
                n = e.type;
                var s = e.memoizedProps;
                switch (r[mt] = e,
                r[fi] = s,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    H("cancel", r),
                    H("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    H("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ir.length; i++)
                        H(Ir[i], r);
                    break;
                case "source":
                    H("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    H("error", r),
                    H("load", r);
                    break;
                case "details":
                    H("toggle", r);
                    break;
                case "input":
                    Cf(r, s),
                    H("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    H("invalid", r);
                    break;
                case "textarea":
                    Tf(r, s),
                    H("invalid", r)
                }
                va(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ts(r.textContent, l, t),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ts(r.textContent, l, t),
                        i = ["children", "" + l]) : ti.hasOwnProperty(o) && l != null && o === "onScroll" && H("scroll", r)
                    }
                switch (n) {
                case "input":
                    Qi(r),
                    Ef(r, s, !0);
                    break;
                case "textarea":
                    Qi(r),
                    _f(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = eo)
                }
                r = i,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = Up(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                    is: r.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                t[mt] = e,
                t[fi] = r,
                pg(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = wa(n, r),
                    n) {
                    case "dialog":
                        H("cancel", t),
                        H("close", t),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        H("load", t),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ir.length; i++)
                            H(Ir[i], t);
                        i = r;
                        break;
                    case "source":
                        H("error", t),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        H("error", t),
                        H("load", t),
                        i = r;
                        break;
                    case "details":
                        H("toggle", t),
                        i = r;
                        break;
                    case "input":
                        Cf(t, r),
                        i = ha(t, r),
                        H("invalid", t);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = te({}, r, {
                            value: void 0
                        }),
                        H("invalid", t);
                        break;
                    case "textarea":
                        Tf(t, r),
                        i = ga(t, r),
                        H("invalid", t);
                        break;
                    default:
                        i = r
                    }
                    va(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? Gp(t, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Hp(t, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ni(t, a) : typeof a == "number" && ni(t, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ti.hasOwnProperty(s) ? a != null && s === "onScroll" && H("scroll", t) : a != null && Bu(t, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        Qi(t),
                        Ef(t, r, !1);
                        break;
                    case "textarea":
                        Qi(t),
                        _f(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + nn(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? er(t, !!r.multiple, s, !1) : r.defaultValue != null && er(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (t.onclick = eo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return Pe(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            gg(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(T(166));
            if (n = Pn(hi.current),
            Pn(yt.current),
            ns(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[mt] = e,
                (s = r.nodeValue !== n) && (t = Fe,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        ts(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && ts(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                s && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[mt] = e,
                e.stateNode = r
        }
        return Pe(e),
        null;
    case 13:
        if (W(q),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (K && Ie !== null && e.mode & 1 && !(e.flags & 128))
                jm(),
                ar(),
                e.flags |= 98560,
                s = !1;
            else if (s = ns(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!s)
                        throw Error(T(318));
                    if (s = e.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(T(317));
                    s[mt] = e
                } else
                    ar(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                Pe(e),
                s = !1
            } else
                rt !== null && (Ja(rt),
                rt = null),
                s = !0;
            if (!s)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || q.current & 1 ? he === 0 && (he = 3) : kc())),
        e.updateQueue !== null && (e.flags |= 4),
        Pe(e),
        null);
    case 4:
        return cr(),
        Wa(t, e),
        t === null && ui(e.stateNode.containerInfo),
        Pe(e),
        null;
    case 10:
        return oc(e.type._context),
        Pe(e),
        null;
    case 17:
        return Ne(e.type) && to(),
        Pe(e),
        null;
    case 19:
        if (W(q),
        s = e.memoizedState,
        s === null)
            return Pe(e),
            null;
        if (r = (e.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Mr(s, !1);
            else {
                if (he !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = ao(t),
                        o !== null) {
                            for (e.flags |= 128,
                            Mr(s, !1),
                            r = o.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                s = n,
                                t = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = t,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                t = o.dependencies,
                                s.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return $(q, q.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                s.tail !== null && ae() > dr && (e.flags |= 128,
                r = !0,
                Mr(s, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = ao(o),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    Mr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !K)
                        return Pe(e),
                        null
                } else
                    2 * ae() - s.renderingStartTime > dr && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    Mr(s, !1),
                    e.lanes = 4194304);
            s.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = s.last,
            n !== null ? n.sibling = o : e.child = o,
            s.last = o)
        }
        return s.tail !== null ? (e = s.tail,
        s.rendering = e,
        s.tail = e.sibling,
        s.renderingStartTime = ae(),
        e.sibling = null,
        n = q.current,
        $(q, r ? n & 1 | 2 : n & 1),
        e) : (Pe(e),
        null);
    case 22:
    case 23:
        return Pc(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? ze & 1073741824 && (Pe(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : Pe(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, e.tag))
}
function yw(t, e) {
    switch (nc(e),
    e.tag) {
    case 1:
        return Ne(e.type) && to(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return cr(),
        W(je),
        W(Ce),
        fc(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return cc(e),
        null;
    case 13:
        if (W(q),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(T(340));
            ar()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return W(q),
        null;
    case 4:
        return cr(),
        null;
    case 10:
        return oc(e.type._context),
        null;
    case 22:
    case 23:
        return Pc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ss = !1
  , ke = !1
  , vw = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function Kn(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                re(t, e, r)
            }
        else
            n.current = null
}
function Ga(t, e, n) {
    try {
        n()
    } catch (r) {
        re(t, e, r)
    }
}
var gd = !1;
function ww(t, e) {
    if (Ma = Zs,
    t = xm(),
    ec(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (d === n && ++u === i && (l = o),
                            d === s && ++c === r && (a = o),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (La = {
        focusedElem: t,
        selectionRange: n
    },
    Zs = !1,
    O = e; O !== null; )
        if (e = O,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            O = t;
        else
            for (; O !== null; ) {
                e = O;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , S = y.memoizedState
                                  , g = e.stateNode
                                  , h = g.getSnapshotBeforeUpdate(e.elementType === e.type ? v : tt(e.type, v), S);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var p = e.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (w) {
                    re(e, e.return, w)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    O = t;
                    break
                }
                O = e.return
            }
    return y = gd,
    gd = !1,
    y
}
function Qr(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Ga(e, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Io(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Qa(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function yg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    yg(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[mt],
    delete e[fi],
    delete e[ja],
    delete e[tw],
    delete e[nw])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function vg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function yd(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || vg(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ka(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = eo));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Ka(t, e, n),
        t = t.sibling; t !== null; )
            Ka(t, e, n),
            t = t.sibling
}
function Ya(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (Ya(t, e, n),
        t = t.sibling; t !== null; )
            Ya(t, e, n),
            t = t.sibling
}
var ye = null
  , nt = !1;
function Nt(t, e, n) {
    for (n = n.child; n !== null; )
        wg(t, e, n),
        n = n.sibling
}
function wg(t, e, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
        try {
            gt.onCommitFiberUnmount(Ro, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ke || Kn(n, e);
    case 6:
        var r = ye
          , i = nt;
        ye = null,
        Nt(t, e, n),
        ye = r,
        nt = i,
        ye !== null && (nt ? (t = ye,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (nt ? (t = ye,
        n = n.stateNode,
        t.nodeType === 8 ? Ml(t.parentNode, n) : t.nodeType === 1 && Ml(t, n),
        oi(t)) : Ml(ye, n.stateNode));
        break;
    case 4:
        r = ye,
        i = nt,
        ye = n.stateNode.containerInfo,
        nt = !0,
        Nt(t, e, n),
        ye = r,
        nt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Ga(n, e, o),
                i = i.next
            } while (i !== r)
        }
        Nt(t, e, n);
        break;
    case 1:
        if (!ke && (Kn(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                re(n, e, l)
            }
        Nt(t, e, n);
        break;
    case 21:
        Nt(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null,
        Nt(t, e, n),
        ke = r) : Nt(t, e, n);
        break;
    default:
        Nt(t, e, n)
    }
}
function vd(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new vw),
        e.forEach(function(r) {
            var i = Ow.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function et(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = t
                  , o = e
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ye = l.stateNode,
                        nt = !1;
                        break e;
                    case 3:
                        ye = l.stateNode.containerInfo,
                        nt = !0;
                        break e;
                    case 4:
                        ye = l.stateNode.containerInfo,
                        nt = !0;
                        break e
                    }
                    l = l.return
                }
                if (ye === null)
                    throw Error(T(160));
                wg(s, o, i),
                ye = null,
                nt = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                re(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            xg(e, t),
            e = e.sibling
}
function xg(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (et(e, t),
        ft(t),
        r & 4) {
            try {
                Qr(3, t, t.return),
                Io(3, t)
            } catch (v) {
                re(t, t.return, v)
            }
            try {
                Qr(5, t, t.return)
            } catch (v) {
                re(t, t.return, v)
            }
        }
        break;
    case 1:
        et(e, t),
        ft(t),
        r & 512 && n !== null && Kn(n, n.return);
        break;
    case 5:
        if (et(e, t),
        ft(t),
        r & 512 && n !== null && Kn(n, n.return),
        t.flags & 32) {
            var i = t.stateNode;
            try {
                ni(i, "")
            } catch (v) {
                re(t, t.return, v)
            }
        }
        if (r & 4 && (i = t.stateNode,
        i != null)) {
            var s = t.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && Bp(i, s),
                    wa(l, o);
                    var u = wa(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o]
                          , f = a[o + 1];
                        c === "style" ? Gp(i, f) : c === "dangerouslySetInnerHTML" ? Hp(i, f) : c === "children" ? ni(i, f) : Bu(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        pa(i, s);
                        break;
                    case "textarea":
                        $p(i, s);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null ? er(i, !!s.multiple, m, !1) : d !== !!s.multiple && (s.defaultValue != null ? er(i, !!s.multiple, s.defaultValue, !0) : er(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[fi] = s
                } catch (v) {
                    re(t, t.return, v)
                }
        }
        break;
    case 6:
        if (et(e, t),
        ft(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(T(162));
            i = t.stateNode,
            s = t.memoizedProps;
            try {
                i.nodeValue = s
            } catch (v) {
                re(t, t.return, v)
            }
        }
        break;
    case 3:
        if (et(e, t),
        ft(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                oi(e.containerInfo)
            } catch (v) {
                re(t, t.return, v)
            }
        break;
    case 4:
        et(e, t),
        ft(t);
        break;
    case 13:
        et(e, t),
        ft(t),
        i = t.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (xc = ae())),
        r & 4 && vd(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (ke = (u = ke) || c,
        et(e, t),
        ke = u) : et(e, t),
        ft(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (O = t,
                c = t.child; c !== null; ) {
                    for (f = O = c; O !== null; ) {
                        switch (d = O,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Qr(4, d, d.return);
                            break;
                        case 1:
                            Kn(d, d.return);
                            var y = d.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    e = r,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    re(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Kn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                xd(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        O = m) : xd(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Wp("display", o))
                        } catch (v) {
                            re(t, t.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            re(t, t.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        et(e, t),
        ft(t),
        r & 4 && vd(t);
        break;
    case 21:
        break;
    default:
        et(e, t),
        ft(t)
    }
}
function ft(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (vg(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (ni(i, ""),
                r.flags &= -33);
                var s = yd(t);
                Ya(t, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = yd(t);
                Ka(t, l, o);
                break;
            default:
                throw Error(T(161))
            }
        } catch (a) {
            re(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function xw(t, e, n) {
    O = t,
    Sg(t)
}
function Sg(t, e, n) {
    for (var r = (t.mode & 1) !== 0; O !== null; ) {
        var i = O
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || ss;
            if (!o) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || ke;
                l = ss;
                var u = ke;
                if (ss = o,
                (ke = a) && !u)
                    for (O = i; O !== null; )
                        o = O,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Sd(i) : a !== null ? (a.return = o,
                        O = a) : Sd(i);
                for (; s !== null; )
                    O = s,
                    Sg(s),
                    s = s.sibling;
                O = i,
                ss = l,
                ke = u
            }
            wd(t)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            O = s) : wd(t)
    }
}
function wd(t) {
    for (; O !== null; ) {
        var e = O;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ke || Io(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : tt(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = e.updateQueue;
                        s !== null && nd(e, s, r);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            nd(e, o, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && oi(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                ke || e.flags & 512 && Qa(e)
            } catch (d) {
                re(e, e.return, d)
            }
        }
        if (e === t) {
            O = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            O = n;
            break
        }
        O = e.return
    }
}
function xd(t) {
    for (; O !== null; ) {
        var e = O;
        if (e === t) {
            O = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            O = n;
            break
        }
        O = e.return
    }
}
function Sd(t) {
    for (; O !== null; ) {
        var e = O;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    Io(4, e)
                } catch (a) {
                    re(e, n, a)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = e.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        re(e, i, a)
                    }
                }
                var s = e.return;
                try {
                    Qa(e)
                } catch (a) {
                    re(e, s, a)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Qa(e)
                } catch (a) {
                    re(e, o, a)
                }
            }
        } catch (a) {
            re(e, e.return, a)
        }
        if (e === t) {
            O = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            O = l;
            break
        }
        O = e.return
    }
}
var Sw = Math.ceil
  , fo = jt.ReactCurrentDispatcher
  , vc = jt.ReactCurrentOwner
  , Ze = jt.ReactCurrentBatchConfig
  , V = 0
  , me = null
  , fe = null
  , we = 0
  , ze = 0
  , Yn = an(0)
  , he = 0
  , yi = null
  , Mn = 0
  , Fo = 0
  , wc = 0
  , Kr = null
  , Re = null
  , xc = 0
  , dr = 1 / 0
  , xt = null
  , ho = !1
  , Xa = null
  , Zt = null
  , os = !1
  , Wt = null
  , po = 0
  , Yr = 0
  , Za = null
  , bs = -1
  , Vs = 0;
function Oe() {
    return V & 6 ? ae() : bs !== -1 ? bs : bs = ae()
}
function qt(t) {
    return t.mode & 1 ? V & 2 && we !== 0 ? we & -we : iw.transition !== null ? (Vs === 0 && (Vs = im()),
    Vs) : (t = I,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : fm(t.type)),
    t) : 1
}
function st(t, e, n, r) {
    if (50 < Yr)
        throw Yr = 0,
        Za = null,
        Error(T(185));
    Ti(t, n, r),
    (!(V & 2) || t !== me) && (t === me && (!(V & 2) && (Fo |= n),
    he === 4 && Ut(t, we)),
    De(t, r),
    n === 1 && V === 0 && !(e.mode & 1) && (dr = ae() + 500,
    bo && un()))
}
function De(t, e) {
    var n = t.callbackNode;
    i1(t, e);
    var r = Xs(t, t === me ? we : 0);
    if (r === 0)
        n !== null && Lf(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Lf(n),
        e === 1)
            t.tag === 0 ? rw(Pd.bind(null, t)) : Lm(Pd.bind(null, t)),
            J1(function() {
                !(V & 6) && un()
            }),
            n = null;
        else {
            switch (sm(r)) {
            case 1:
                n = Gu;
                break;
            case 4:
                n = nm;
                break;
            case 16:
                n = Ys;
                break;
            case 536870912:
                n = rm;
                break;
            default:
                n = Ys
            }
            n = Mg(n, Pg.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Pg(t, e) {
    if (bs = -1,
    Vs = 0,
    V & 6)
        throw Error(T(327));
    var n = t.callbackNode;
    if (sr() && t.callbackNode !== n)
        return null;
    var r = Xs(t, t === me ? we : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = mo(t, r);
    else {
        e = r;
        var i = V;
        V |= 2;
        var s = Cg();
        (me !== t || we !== e) && (xt = null,
        dr = ae() + 500,
        Cn(t, e));
        do
            try {
                Cw();
                break
            } catch (l) {
                kg(t, l)
            }
        while (1);
        sc(),
        fo.current = s,
        V = i,
        fe !== null ? e = 0 : (me = null,
        we = 0,
        e = he)
    }
    if (e !== 0) {
        if (e === 2 && (i = Ca(t),
        i !== 0 && (r = i,
        e = qa(t, i))),
        e === 1)
            throw n = yi,
            Cn(t, 0),
            Ut(t, r),
            De(t, ae()),
            n;
        if (e === 6)
            Ut(t, r);
        else {
            if (i = t.current.alternate,
            !(r & 30) && !Pw(i) && (e = mo(t, r),
            e === 2 && (s = Ca(t),
            s !== 0 && (r = s,
            e = qa(t, s))),
            e === 1))
                throw n = yi,
                Cn(t, 0),
                Ut(t, r),
                De(t, ae()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                yn(t, Re, xt);
                break;
            case 3:
                if (Ut(t, r),
                (r & 130023424) === r && (e = xc + 500 - ae(),
                10 < e)) {
                    if (Xs(t, 0) !== 0)
                        break;
                    if (i = t.suspendedLanes,
                    (i & r) !== r) {
                        Oe(),
                        t.pingedLanes |= t.suspendedLanes & i;
                        break
                    }
                    t.timeoutHandle = Aa(yn.bind(null, t, Re, xt), e);
                    break
                }
                yn(t, Re, xt);
                break;
            case 4:
                if (Ut(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    s = 1 << o,
                    o = e[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ae() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sw(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = Aa(yn.bind(null, t, Re, xt), r);
                    break
                }
                yn(t, Re, xt);
                break;
            case 5:
                yn(t, Re, xt);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return De(t, ae()),
    t.callbackNode === n ? Pg.bind(null, t) : null
}
function qa(t, e) {
    var n = Kr;
    return t.current.memoizedState.isDehydrated && (Cn(t, e).flags |= 256),
    t = mo(t, e),
    t !== 2 && (e = Re,
    Re = n,
    e !== null && Ja(e)),
    t
}
function Ja(t) {
    Re === null ? Re = t : Re.push.apply(Re, t)
}
function Pw(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ot(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Ut(t, e) {
    for (e &= ~wc,
    e &= ~Fo,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - it(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function Pd(t) {
    if (V & 6)
        throw Error(T(327));
    sr();
    var e = Xs(t, 0);
    if (!(e & 1))
        return De(t, ae()),
        null;
    var n = mo(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Ca(t);
        r !== 0 && (e = r,
        n = qa(t, r))
    }
    if (n === 1)
        throw n = yi,
        Cn(t, 0),
        Ut(t, e),
        De(t, ae()),
        n;
    if (n === 6)
        throw Error(T(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    yn(t, Re, xt),
    De(t, ae()),
    null
}
function Sc(t, e) {
    var n = V;
    V |= 1;
    try {
        return t(e)
    } finally {
        V = n,
        V === 0 && (dr = ae() + 500,
        bo && un())
    }
}
function Ln(t) {
    Wt !== null && Wt.tag === 0 && !(V & 6) && sr();
    var e = V;
    V |= 1;
    var n = Ze.transition
      , r = I;
    try {
        if (Ze.transition = null,
        I = 1,
        t)
            return t()
    } finally {
        I = r,
        Ze.transition = n,
        V = e,
        !(V & 6) && un()
    }
}
function Pc() {
    ze = Yn.current,
    W(Yn)
}
function Cn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    q1(n)),
    fe !== null)
        for (n = fe.return; n !== null; ) {
            var r = n;
            switch (nc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && to();
                break;
            case 3:
                cr(),
                W(je),
                W(Ce),
                fc();
                break;
            case 5:
                cc(r);
                break;
            case 4:
                cr();
                break;
            case 13:
                W(q);
                break;
            case 19:
                W(q);
                break;
            case 10:
                oc(r.type._context);
                break;
            case 22:
            case 23:
                Pc()
            }
            n = n.return
        }
    if (me = t,
    fe = t = Jt(t.current, null),
    we = ze = e,
    he = 0,
    yi = null,
    wc = Fo = Mn = 0,
    Re = Kr = null,
    Sn !== null) {
        for (e = 0; e < Sn.length; e++)
            if (n = Sn[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Sn = null
    }
    return t
}
function kg(t, e) {
    do {
        var n = fe;
        try {
            if (sc(),
            js.current = co,
            uo) {
                for (var r = ee.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                uo = !1
            }
            if (On = 0,
            pe = de = ee = null,
            Gr = !1,
            pi = 0,
            vc.current = null,
            n === null || n.return === null) {
                he = 1,
                yi = e,
                fe = null;
                break
            }
            e: {
                var s = t
                  , o = n.return
                  , l = n
                  , a = e;
                if (e = we,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = ud(o);
                    if (m !== null) {
                        m.flags &= -257,
                        cd(m, o, l, s, e),
                        m.mode & 1 && ad(s, u, e),
                        e = m,
                        a = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(a),
                            e.updateQueue = v
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            ad(s, u, e),
                            kc();
                            break e
                        }
                        a = Error(T(426))
                    }
                } else if (K && l.mode & 1) {
                    var S = ud(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        cd(S, o, l, s, e),
                        rc(fr(a, l));
                        break e
                    }
                }
                s = a = fr(a, l),
                he !== 4 && (he = 2),
                Kr === null ? Kr = [s] : Kr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        e &= -e,
                        s.lanes |= e;
                        var g = og(s, a, e);
                        td(s, g);
                        break e;
                    case 1:
                        l = a;
                        var h = s.type
                          , p = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Zt === null || !Zt.has(p)))) {
                            s.flags |= 65536,
                            e &= -e,
                            s.lanes |= e;
                            var w = lg(s, l, e);
                            td(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Tg(n)
        } catch (P) {
            e = P,
            fe === n && n !== null && (fe = n = n.return);
            continue
        }
        break
    } while (1)
}
function Cg() {
    var t = fo.current;
    return fo.current = co,
    t === null ? co : t
}
function kc() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
    me === null || !(Mn & 268435455) && !(Fo & 268435455) || Ut(me, we)
}
function mo(t, e) {
    var n = V;
    V |= 2;
    var r = Cg();
    (me !== t || we !== e) && (xt = null,
    Cn(t, e));
    do
        try {
            kw();
            break
        } catch (i) {
            kg(t, i)
        }
    while (1);
    if (sc(),
    V = n,
    fo.current = r,
    fe !== null)
        throw Error(T(261));
    return me = null,
    we = 0,
    he
}
function kw() {
    for (; fe !== null; )
        Eg(fe)
}
function Cw() {
    for (; fe !== null && !Y0(); )
        Eg(fe)
}
function Eg(t) {
    var e = Og(t.alternate, t, ze);
    t.memoizedProps = t.pendingProps,
    e === null ? Tg(t) : fe = e,
    vc.current = null
}
function Tg(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = yw(n, e),
            n !== null) {
                n.flags &= 32767,
                fe = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                he = 6,
                fe = null;
                return
            }
        } else if (n = gw(n, e, ze),
        n !== null) {
            fe = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            fe = e;
            return
        }
        fe = e = t
    } while (e !== null);
    he === 0 && (he = 5)
}
function yn(t, e, n) {
    var r = I
      , i = Ze.transition;
    try {
        Ze.transition = null,
        I = 1,
        Ew(t, e, n, r)
    } finally {
        Ze.transition = i,
        I = r
    }
    return null
}
function Ew(t, e, n, r) {
    do
        sr();
    while (Wt !== null);
    if (V & 6)
        throw Error(T(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(T(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (s1(t, s),
    t === me && (fe = me = null,
    we = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || os || (os = !0,
    Mg(Ys, function() {
        return sr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Ze.transition,
        Ze.transition = null;
        var o = I;
        I = 1;
        var l = V;
        V |= 4,
        vc.current = null,
        ww(t, n),
        xg(n, t),
        W1(La),
        Zs = !!Ma,
        La = Ma = null,
        t.current = n,
        xw(n),
        X0(),
        V = l,
        I = o,
        Ze.transition = s
    } else
        t.current = n;
    if (os && (os = !1,
    Wt = t,
    po = i),
    s = t.pendingLanes,
    s === 0 && (Zt = null),
    J0(n.stateNode),
    De(t, ae()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            i = e[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (ho)
        throw ho = !1,
        t = Xa,
        Xa = null,
        t;
    return po & 1 && t.tag !== 0 && sr(),
    s = t.pendingLanes,
    s & 1 ? t === Za ? Yr++ : (Yr = 0,
    Za = t) : Yr = 0,
    un(),
    null
}
function sr() {
    if (Wt !== null) {
        var t = sm(po)
          , e = Ze.transition
          , n = I;
        try {
            if (Ze.transition = null,
            I = 16 > t ? 16 : t,
            Wt === null)
                var r = !1;
            else {
                if (t = Wt,
                Wt = null,
                po = 0,
                V & 6)
                    throw Error(T(331));
                var i = V;
                for (V |= 4,
                O = t.current; O !== null; ) {
                    var s = O
                      , o = s.child;
                    if (O.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (O = u; O !== null; ) {
                                    var c = O;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qr(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        O = f;
                                    else
                                        for (; O !== null; ) {
                                            c = O;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (yg(c),
                                            c === u) {
                                                O = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                O = d;
                                                break
                                            }
                                            O = m
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null,
                                        v = S
                                    } while (v !== null)
                                }
                            }
                            O = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        O = o;
                    else
                        e: for (; O !== null; ) {
                            if (s = O,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Qr(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                O = g;
                                break e
                            }
                            O = s.return
                        }
                }
                var h = t.current;
                for (O = h; O !== null; ) {
                    o = O;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        O = p;
                    else
                        e: for (o = h; O !== null; ) {
                            if (l = O,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Io(9, l)
                                    }
                                } catch (P) {
                                    re(l, l.return, P)
                                }
                            if (l === o) {
                                O = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                O = w;
                                break e
                            }
                            O = l.return
                        }
                }
                if (V = i,
                un(),
                gt && typeof gt.onPostCommitFiberRoot == "function")
                    try {
                        gt.onPostCommitFiberRoot(Ro, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            I = n,
            Ze.transition = e
        }
    }
    return !1
}
function kd(t, e, n) {
    e = fr(n, e),
    e = og(t, e, 1),
    t = Xt(t, e, 1),
    e = Oe(),
    t !== null && (Ti(t, 1, e),
    De(t, e))
}
function re(t, e, n) {
    if (t.tag === 3)
        kd(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                kd(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
                    t = fr(n, t),
                    t = lg(e, t, 1),
                    e = Xt(e, t, 1),
                    t = Oe(),
                    e !== null && (Ti(e, 1, t),
                    De(e, t));
                    break
                }
            }
            e = e.return
        }
}
function Tw(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = Oe(),
    t.pingedLanes |= t.suspendedLanes & n,
    me === t && (we & n) === n && (he === 4 || he === 3 && (we & 130023424) === we && 500 > ae() - xc ? Cn(t, 0) : wc |= n),
    De(t, e)
}
function _g(t, e) {
    e === 0 && (t.mode & 1 ? (e = Xi,
    Xi <<= 1,
    !(Xi & 130023424) && (Xi = 4194304)) : e = 1);
    var n = Oe();
    t = Lt(t, e),
    t !== null && (Ti(t, e, n),
    De(t, n))
}
function _w(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    _g(t, n)
}
function Ow(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(e),
    _g(t, n)
}
var Og;
Og = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || je.current)
            Ae = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ae = !1,
                mw(t, e, n);
            Ae = !!(t.flags & 131072)
        }
    else
        Ae = !1,
        K && e.flags & 1048576 && Rm(e, io, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        Ds(t, e),
        t = e.pendingProps;
        var i = lr(e, Ce.current);
        ir(e, n),
        i = hc(null, e, r, t, i, n);
        var s = pc();
        return e.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Ne(r) ? (s = !0,
        no(e)) : s = !1,
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ac(e),
        i.updater = Vo,
        e.stateNode = i,
        i._reactInternals = e,
        Ia(e, r, t, n),
        e = $a(null, e, r, !0, s, n)) : (e.tag = 0,
        K && s && tc(e),
        _e(null, e, i, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (Ds(t, e),
            t = e.pendingProps,
            i = r._init,
            r = i(r._payload),
            e.type = r,
            i = e.tag = Lw(r),
            t = tt(r, t),
            i) {
            case 0:
                e = Ba(null, e, r, t, n);
                break e;
            case 1:
                e = hd(null, e, r, t, n);
                break e;
            case 11:
                e = fd(null, e, r, t, n);
                break e;
            case 14:
                e = dd(null, e, r, tt(r.type, t), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tt(r, i),
        Ba(t, e, r, i, n);
    case 1:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tt(r, i),
        hd(t, e, r, i, n);
    case 3:
        e: {
            if (fg(e),
            t === null)
                throw Error(T(387));
            r = e.pendingProps,
            s = e.memoizedState,
            i = s.element,
            Dm(t, e),
            lo(e, r, null, n);
            var o = e.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = s,
                e.memoizedState = s,
                e.flags & 256) {
                    i = fr(Error(T(423)), e),
                    e = pd(t, e, r, n, i);
                    break e
                } else if (r !== i) {
                    i = fr(Error(T(424)), e),
                    e = pd(t, e, r, n, i);
                    break e
                } else
                    for (Ie = Yt(e.stateNode.containerInfo.firstChild),
                    Fe = e,
                    K = !0,
                    rt = null,
                    n = Im(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ar(),
                r === i) {
                    e = Rt(t, e, n);
                    break e
                }
                _e(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return Fm(e),
        t === null && ba(e),
        r = e.type,
        i = e.pendingProps,
        s = t !== null ? t.memoizedProps : null,
        o = i.children,
        Ra(r, i) ? o = null : s !== null && Ra(r, s) && (e.flags |= 32),
        cg(t, e),
        _e(t, e, o, n),
        e.child;
    case 6:
        return t === null && ba(e),
        null;
    case 13:
        return dg(t, e, n);
    case 4:
        return uc(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = ur(e, null, r, n) : _e(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tt(r, i),
        fd(t, e, r, i, n);
    case 7:
        return _e(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return _e(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return _e(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            i = e.pendingProps,
            s = e.memoizedProps,
            o = i.value,
            $(so, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (ot(s.value, o)) {
                    if (s.children === i.children && !je.current) {
                        e = Rt(t, e, n);
                        break e
                    }
                } else
                    for (s = e.child,
                    s !== null && (s.return = e); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = Et(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Va(s.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === e.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(T(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            Va(o, n, e),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            _e(t, e, i.children, n),
            e = e.child
        }
        return e;
    case 9:
        return i = e.type,
        r = e.pendingProps.children,
        ir(e, n),
        i = qe(i),
        r = r(i),
        e.flags |= 1,
        _e(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        i = tt(r, e.pendingProps),
        i = tt(r.type, i),
        dd(t, e, r, i, n);
    case 15:
        return ag(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : tt(r, i),
        Ds(t, e),
        e.tag = 1,
        Ne(r) ? (t = !0,
        no(e)) : t = !1,
        ir(e, n),
        Vm(e, r, i),
        Ia(e, r, i, n),
        $a(null, e, r, !0, t, n);
    case 19:
        return hg(t, e, n);
    case 22:
        return ug(t, e, n)
    }
    throw Error(T(156, e.tag))
}
;
function Mg(t, e) {
    return tm(t, e)
}
function Mw(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Xe(t, e, n, r) {
    return new Mw(t,e,n,r)
}
function Cc(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function Lw(t) {
    if (typeof t == "function")
        return Cc(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Uu)
            return 11;
        if (t === Hu)
            return 14
    }
    return 2
}
function Jt(t, e) {
    var n = t.alternate;
    return n === null ? (n = Xe(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function zs(t, e, n, r, i, s) {
    var o = 2;
    if (r = t,
    typeof t == "function")
        Cc(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case In:
            return En(n.children, i, s, e);
        case $u:
            o = 8,
            i |= 8;
            break;
        case ua:
            return t = Xe(12, n, e, i | 2),
            t.elementType = ua,
            t.lanes = s,
            t;
        case ca:
            return t = Xe(13, n, e, i),
            t.elementType = ca,
            t.lanes = s,
            t;
        case fa:
            return t = Xe(19, n, e, i),
            t.elementType = fa,
            t.lanes = s,
            t;
        case zp:
            return Bo(n, i, s, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case bp:
                    o = 10;
                    break e;
                case Vp:
                    o = 9;
                    break e;
                case Uu:
                    o = 11;
                    break e;
                case Hu:
                    o = 14;
                    break e;
                case It:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, t == null ? t : typeof t, ""))
        }
    return e = Xe(o, n, e, i),
    e.elementType = t,
    e.type = r,
    e.lanes = s,
    e
}
function En(t, e, n, r) {
    return t = Xe(7, t, r, e),
    t.lanes = n,
    t
}
function Bo(t, e, n, r) {
    return t = Xe(22, t, r, e),
    t.elementType = zp,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function Vl(t, e, n) {
    return t = Xe(6, t, null, e),
    t.lanes = n,
    t
}
function zl(t, e, n) {
    return e = Xe(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function Rw(t, e, n, r, i) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = vl(0),
    this.expirationTimes = vl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = vl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ec(t, e, n, r, i, s, o, l, a) {
    return t = new Rw(t,e,n,l,a),
    e === 1 ? (e = 1,
    s === !0 && (e |= 8)) : e = 0,
    s = Xe(3, null, null, e),
    t.current = s,
    s.stateNode = t,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ac(s),
    t
}
function Aw(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: zn,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function Lg(t) {
    if (!t)
        return rn;
    t = t._reactInternals;
    e: {
        if (An(t) !== t || t.tag !== 1)
            throw Error(T(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Ne(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(T(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Ne(n))
            return Mm(t, n, e)
    }
    return e
}
function Rg(t, e, n, r, i, s, o, l, a) {
    return t = Ec(n, r, !0, t, i, s, o, l, a),
    t.context = Lg(null),
    n = t.current,
    r = Oe(),
    i = qt(n),
    s = Et(r, i),
    s.callback = e ?? null,
    Xt(n, s, i),
    t.current.lanes = i,
    Ti(t, i, r),
    De(t, r),
    t
}
function $o(t, e, n, r) {
    var i = e.current
      , s = Oe()
      , o = qt(i);
    return n = Lg(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = Et(s, o),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = Xt(i, e, o),
    t !== null && (st(t, i, o, s),
    As(t, i, o)),
    o
}
function go(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function Cd(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Tc(t, e) {
    Cd(t, e),
    (t = t.alternate) && Cd(t, e)
}
function jw() {
    return null
}
var Ag = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function _c(t) {
    this._internalRoot = t
}
Uo.prototype.render = _c.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(T(409));
    $o(t, e, null, null)
}
;
Uo.prototype.unmount = _c.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Ln(function() {
            $o(null, t, null, null)
        }),
        e[Mt] = null
    }
}
;
function Uo(t) {
    this._internalRoot = t
}
Uo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = am();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < $t.length && e !== 0 && e < $t[n].priority; n++)
            ;
        $t.splice(n, 0, t),
        n === 0 && cm(t)
    }
}
;
function Oc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Ho(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Ed() {}
function Nw(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = go(o);
                s.call(u)
            }
        }
        var o = Rg(e, r, t, 0, null, !1, !1, "", Ed);
        return t._reactRootContainer = o,
        t[Mt] = o.current,
        ui(t.nodeType === 8 ? t.parentNode : t),
        Ln(),
        o
    }
    for (; i = t.lastChild; )
        t.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = go(a);
            l.call(u)
        }
    }
    var a = Ec(t, 0, !1, null, null, !1, !1, "", Ed);
    return t._reactRootContainer = a,
    t[Mt] = a.current,
    ui(t.nodeType === 8 ? t.parentNode : t),
    Ln(function() {
        $o(e, a, n, r)
    }),
    a
}
function Wo(t, e, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = go(o);
                l.call(a)
            }
        }
        $o(e, o, t, i)
    } else
        o = Nw(n, e, t, i, r);
    return go(o)
}
om = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = zr(e.pendingLanes);
            n !== 0 && (Qu(e, n | 1),
            De(e, ae()),
            !(V & 6) && (dr = ae() + 500,
            un()))
        }
        break;
    case 13:
        Ln(function() {
            var r = Lt(t, 1);
            if (r !== null) {
                var i = Oe();
                st(r, t, 1, i)
            }
        }),
        Tc(t, 1)
    }
}
;
Ku = function(t) {
    if (t.tag === 13) {
        var e = Lt(t, 134217728);
        if (e !== null) {
            var n = Oe();
            st(e, t, 134217728, n)
        }
        Tc(t, 134217728)
    }
}
;
lm = function(t) {
    if (t.tag === 13) {
        var e = qt(t)
          , n = Lt(t, e);
        if (n !== null) {
            var r = Oe();
            st(n, t, e, r)
        }
        Tc(t, e)
    }
}
;
am = function() {
    return I
}
;
um = function(t, e) {
    var n = I;
    try {
        return I = t,
        e()
    } finally {
        I = n
    }
}
;
Sa = function(t, e, n) {
    switch (e) {
    case "input":
        if (pa(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var i = Do(r);
                    if (!i)
                        throw Error(T(90));
                    Fp(r),
                    pa(r, i)
                }
            }
        }
        break;
    case "textarea":
        $p(t, n);
        break;
    case "select":
        e = n.value,
        e != null && er(t, !!n.multiple, e, !1)
    }
}
;
Yp = Sc;
Xp = Ln;
var Dw = {
    usingClientEntryPoint: !1,
    Events: [Oi, Un, Do, Qp, Kp, Sc]
}
  , Lr = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , bw = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Jp(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || jw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ls.isDisabled && ls.supportsFiber)
        try {
            Ro = ls.inject(bw),
            gt = ls
        } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dw;
Ue.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(e))
        throw Error(T(200));
    return Aw(t, e, null, n)
}
;
Ue.createRoot = function(t, e) {
    if (!Oc(t))
        throw Error(T(299));
    var n = !1
      , r = ""
      , i = Ag;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    e = Ec(t, 1, !1, null, null, n, !1, r, i),
    t[Mt] = e.current,
    ui(t.nodeType === 8 ? t.parentNode : t),
    new _c(e)
}
;
Ue.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(T(188)) : (t = Object.keys(t).join(","),
        Error(T(268, t)));
    return t = Jp(e),
    t = t === null ? null : t.stateNode,
    t
}
;
Ue.flushSync = function(t) {
    return Ln(t)
}
;
Ue.hydrate = function(t, e, n) {
    if (!Ho(e))
        throw Error(T(200));
    return Wo(null, t, e, !0, n)
}
;
Ue.hydrateRoot = function(t, e, n) {
    if (!Oc(t))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Ag;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = Rg(e, null, t, 1, n ?? null, i, !1, s, o),
    t[Mt] = e.current,
    ui(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            i = n._getVersion,
            i = i(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new Uo(e)
}
;
Ue.render = function(t, e, n) {
    if (!Ho(e))
        throw Error(T(200));
    return Wo(null, t, e, !1, n)
}
;
Ue.unmountComponentAtNode = function(t) {
    if (!Ho(t))
        throw Error(T(40));
    return t._reactRootContainer ? (Ln(function() {
        Wo(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[Mt] = null
        })
    }),
    !0) : !1
}
;
Ue.unstable_batchedUpdates = Sc;
Ue.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Ho(n))
        throw Error(T(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(T(38));
    return Wo(t, e, n, !1, r)
}
;
Ue.version = "18.2.0-next-9e3b772b8-20220608";
function jg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)
        } catch (t) {
            console.error(t)
        }
}
jg(),
Rp.exports = Ue;
var Ng = Rp.exports, Dg, Td = Ng;
Dg = Td.createRoot,
Td.hydrateRoot;
const bg = M.createContext({
    transformPagePoint: t=>t,
    isStatic: !1,
    reducedMotion: "never"
})
  , Go = M.createContext({})
  , Mc = M.createContext(null)
  , Qo = typeof document < "u"
  , Vg = Qo ? M.useLayoutEffect : M.useEffect
  , zg = M.createContext({
    strict: !1
})
  , Lc = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Vw = "framerAppearId"
  , Ig = "data-" + Lc(Vw);
function zw(t, e, n, r) {
    const {visualElement: i} = M.useContext(Go)
      , s = M.useContext(zg)
      , o = M.useContext(Mc)
      , l = M.useContext(bg).reducedMotion
      , a = M.useRef();
    r = r || s.renderer,
    !a.current && r && (a.current = r(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    M.useInsertionEffect(()=>{
        u && u.update(n, o)
    }
    );
    const c = M.useRef(!!(n[Ig] && !window.HandoffComplete));
    return Vg(()=>{
        u && (u.render(),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    M.useEffect(()=>{
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function Xn(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function Iw(t, e, n) {
    return M.useCallback(r=>{
        r && t.mount && t.mount(r),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : Xn(n) && (n.current = r))
    }
    , [e])
}
function vi(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Ko(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Rc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ac = ["initial", ...Rc];
function Yo(t) {
    return Ko(t.animate) || Ac.some(e=>vi(t[e]))
}
function Fg(t) {
    return !!(Yo(t) || t.variants)
}
function Fw(t, e) {
    if (Yo(t)) {
        const {initial: n, animate: r} = t;
        return {
            initial: n === !1 || vi(n) ? n : void 0,
            animate: vi(r) ? r : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function Bw(t) {
    const {initial: e, animate: n} = Fw(t, M.useContext(Go));
    return M.useMemo(()=>({
        initial: e,
        animate: n
    }), [_d(e), _d(n)])
}
function _d(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Od = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , wi = {};
for (const t in Od)
    wi[t] = {
        isEnabled: e=>Od[t].some(n=>!!e[n])
    };
function $w(t) {
    for (const e in t)
        wi[e] = {
            ...wi[e],
            ...t[e]
        }
}
const Bg = M.createContext({})
  , $g = M.createContext({})
  , Uw = Symbol.for("motionComponentSymbol");
function Hw({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i}) {
    t && $w(t);
    function s(l, a) {
        let u;
        const c = {
            ...M.useContext(bg),
            ...l,
            layoutId: Ww(l)
        }
          , {isStatic: f} = c
          , d = Bw(l)
          , m = r(l, f);
        if (!f && Qo) {
            d.visualElement = zw(i, m, c, e);
            const y = M.useContext($g)
              , v = M.useContext(zg).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, v, t, y))
        }
        return M.createElement(Go.Provider, {
            value: d
        }, u && d.visualElement ? M.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, l, Iw(m, d.visualElement, a), m, f, d.visualElement))
    }
    const o = M.forwardRef(s);
    return o[Uw] = i,
    o
}
function Ww({layoutId: t}) {
    const e = M.useContext(Bg).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function Gw(t) {
    function e(r, i={}) {
        return Hw(t(r, i))
    }
    if (typeof Proxy > "u")
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (r,i)=>(n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const Qw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function jc(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Qw.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const yo = {};
function Kw(t) {
    Object.assign(yo, t)
}
const Li = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , jn = new Set(Li);
function Ug(t, {layout: e, layoutId: n}) {
    return jn.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!yo[t] || t === "opacity")
}
const be = t=>!!(t && t.getVelocity)
  , Yw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Xw = Li.length;
function Zw(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, r, i) {
    let s = "";
    for (let o = 0; o < Xw; o++) {
        const l = Li[o];
        if (t[l] !== void 0) {
            const a = Yw[l] || l;
            s += `${a}(${t[l]}) `
        }
    }
    return e && !t.z && (s += "translateZ(0)"),
    s = s.trim(),
    i ? s = i(t, r ? "" : s) : n && r && (s = "none"),
    s
}
const Hg = t=>e=>typeof e == "string" && e.startsWith(t)
  , Wg = Hg("--")
  , eu = Hg("var(--")
  , qw = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , Jw = (t,e)=>e && typeof t == "number" ? e.transform(t) : t
  , sn = (t,e,n)=>Math.min(Math.max(n, t), e)
  , Nn = {
    test: t=>typeof t == "number",
    parse: parseFloat,
    transform: t=>t
}
  , Xr = {
    ...Nn,
    transform: t=>sn(0, 1, t)
}
  , as = {
    ...Nn,
    default: 1
}
  , Zr = t=>Math.round(t * 1e5) / 1e5
  , Xo = /(-)?([\d]*\.?[\d])+/g
  , Gg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , ex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ri(t) {
    return typeof t == "string"
}
const Ai = t=>({
    test: e=>Ri(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e=>`${e}${t}`
})
  , Vt = Ai("deg")
  , vt = Ai("%")
  , A = Ai("px")
  , tx = Ai("vh")
  , nx = Ai("vw")
  , Md = {
    ...vt,
    parse: t=>vt.parse(t) / 100,
    transform: t=>vt.transform(t * 100)
}
  , Ld = {
    ...Nn,
    transform: Math.round
}
  , Qg = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    radius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    size: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    rotate: Vt,
    rotateX: Vt,
    rotateY: Vt,
    rotateZ: Vt,
    scale: as,
    scaleX: as,
    scaleY: as,
    scaleZ: as,
    skew: Vt,
    skewX: Vt,
    skewY: Vt,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: Xr,
    originX: Md,
    originY: Md,
    originZ: A,
    zIndex: Ld,
    fillOpacity: Xr,
    strokeOpacity: Xr,
    numOctaves: Ld
};
function Nc(t, e, n, r) {
    const {style: i, vars: s, transform: o, transformOrigin: l} = t;
    let a = !1
      , u = !1
      , c = !0;
    for (const f in e) {
        const d = e[f];
        if (Wg(f)) {
            s[f] = d;
            continue
        }
        const m = Qg[f]
          , y = Jw(d, m);
        if (jn.has(f)) {
            if (a = !0,
            o[f] = y,
            !c)
                continue;
            d !== (m.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
            l[f] = y) : i[f] = y
    }
    if (e.transform || (a || r ? i.transform = Zw(t.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: f="50%", originY: d="50%", originZ: m=0} = l;
        i.transformOrigin = `${f} ${d} ${m}`
    }
}
const Dc = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Kg(t, e, n) {
    for (const r in e)
        !be(e[r]) && !Ug(r, n) && (t[r] = e[r])
}
function rx({transformTemplate: t}, e, n) {
    return M.useMemo(()=>{
        const r = Dc();
        return Nc(r, e, {
            enableHardwareAcceleration: !n
        }, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function ix(t, e, n) {
    const r = t.style || {}
      , i = {};
    return Kg(i, r, t),
    Object.assign(i, rx(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
}
function sx(t, e, n) {
    const r = {}
      , i = ix(t, e, n);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const ox = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function vo(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ox.has(t)
}
let Yg = t=>!vo(t);
function lx(t) {
    t && (Yg = e=>e.startsWith("on") ? !vo(e) : t(e))
}
try {
    lx(require("@emotion/is-prop-valid").default)
} catch {}
function ax(t, e, n) {
    const r = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (Yg(i) || n === !0 && vo(i) || !e && !vo(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
    return r
}
function Rd(t, e, n) {
    return typeof t == "string" ? t : A.transform(e + n * t)
}
function ux(t, e, n) {
    const r = Rd(e, t.x, t.width)
      , i = Rd(n, t.y, t.height);
    return `${r} ${i}`
}
const cx = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , fx = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function dx(t, e, n=1, r=0, i=!0) {
    t.pathLength = 1;
    const s = i ? cx : fx;
    t[s.offset] = A.transform(-r);
    const o = A.transform(e)
      , l = A.transform(n);
    t[s.array] = `${o} ${l}`
}
function bc(t, {attrX: e, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: a=0, ...u}, c, f, d) {
    if (Nc(t, u, c, d),
    f) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: m, style: y, dimensions: v} = t;
    m.transform && (v && (y.transform = m.transform),
    delete m.transform),
    v && (i !== void 0 || s !== void 0 || y.transform) && (y.transformOrigin = ux(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    e !== void 0 && (m.x = e),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    o !== void 0 && dx(m, o, l, a, !1)
}
const Xg = ()=>({
    ...Dc(),
    attrs: {}
})
  , Vc = t=>typeof t == "string" && t.toLowerCase() === "svg";
function hx(t, e, n, r) {
    const i = M.useMemo(()=>{
        const s = Xg();
        return bc(s, e, {
            enableHardwareAcceleration: !1
        }, Vc(r), t.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const s = {};
        Kg(s, t.style, t),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function px(t=!1) {
    return (n,r,i,{latestValues: s},o)=>{
        const a = (jc(n) ? hx : sx)(r, s, o, n)
          , c = {
            ...ax(r, typeof n == "string", t),
            ...a,
            ref: i
        }
          , {children: f} = r
          , d = M.useMemo(()=>be(f) ? f.get() : f, [f]);
        return M.createElement(n, {
            ...c,
            children: d
        })
    }
}
function Zg(t, {style: e, vars: n}, r, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(r));
    for (const s in n)
        t.style.setProperty(s, n[s])
}
const qg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Jg(t, e, n, r) {
    Zg(t, e, void 0, r);
    for (const i in e.attrs)
        t.setAttribute(qg.has(i) ? i : Lc(i), e.attrs[i])
}
function zc(t, e) {
    const {style: n} = t
      , r = {};
    for (const i in n)
        (be(n[i]) || e.style && be(e.style[i]) || Ug(i, t)) && (r[i] = n[i]);
    return r
}
function ey(t, e) {
    const n = zc(t, e);
    for (const r in t)
        if (be(t[r]) || be(e[r])) {
            const i = Li.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = t[r]
        }
    return n
}
function Ic(t, e, n, r={}, i={}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    e
}
function Fc(t) {
    const e = M.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const wo = t=>Array.isArray(t)
  , mx = t=>!!(t && typeof t == "object" && t.mix && t.toValue)
  , gx = t=>wo(t) ? t[t.length - 1] || 0 : t;
function Is(t) {
    const e = be(t) ? t.get() : t;
    return mx(e) ? e.toValue() : e
}
function yx({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, r, i, s) {
    const o = {
        latestValues: vx(r, i, s, t),
        renderState: e()
    };
    return n && (o.mount = l=>n(r, l, o)),
    o
}
const ty = t=>(e,n)=>{
    const r = M.useContext(Go)
      , i = M.useContext(Mc)
      , s = ()=>yx(t, e, r, i);
    return n ? s() : Fc(s)
}
;
function vx(t, e, n, r) {
    const i = {}
      , s = r(t, {});
    for (const d in s)
        i[d] = Is(s[d]);
    let {initial: o, animate: l} = t;
    const a = Yo(t)
      , u = Fg(t);
    e && u && !a && t.inherit !== !1 && (o === void 0 && (o = e.initial),
    l === void 0 && (l = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? l : o;
    return f && typeof f != "boolean" && !Ko(f) && (Array.isArray(f) ? f : [f]).forEach(m=>{
        const y = Ic(t, m);
        if (!y)
            return;
        const {transitionEnd: v, transition: S, ...g} = y;
        for (const h in g) {
            let p = g[h];
            if (Array.isArray(p)) {
                const w = c ? p.length - 1 : 0;
                p = p[w]
            }
            p !== null && (i[h] = p)
        }
        for (const h in v)
            i[h] = v[h]
    }
    ),
    i
}
const ie = t=>t;
class Ad {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e))
            return this.scheduled.add(e),
            this.order.push(e),
            !0
    }
    remove(e) {
        const n = this.order.indexOf(e);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function wx(t) {
    let e = new Ad
      , n = new Ad
      , r = 0
      , i = !1
      , s = !1;
    const o = new WeakSet
      , l = {
        schedule: (a,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? e : n;
            return u && o.add(a),
            d.add(a) && f && i && (r = e.order.length),
            a
        }
        ,
        cancel: a=>{
            n.remove(a),
            o.delete(a)
        }
        ,
        process: a=>{
            if (i) {
                s = !0;
                return
            }
            if (i = !0,
            [e,n] = [n, e],
            n.clear(),
            r = e.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = e.order[u];
                    c(a),
                    o.has(c) && (l.schedule(c),
                    t())
                }
            i = !1,
            s && (s = !1,
            l.process(a))
        }
    };
    return l
}
const us = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , xx = 40;
function Sx(t, e) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = us.reduce((f,d)=>(f[d] = wx(()=>n = !0),
    f), {})
      , o = f=>s[f].process(i)
      , l = ()=>{
        const f = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, xx), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        us.forEach(o),
        i.isProcessing = !1,
        n && e && (r = !1,
        t(l))
    }
      , a = ()=>{
        n = !0,
        r = !0,
        i.isProcessing || t(l)
    }
    ;
    return {
        schedule: us.reduce((f,d)=>{
            const m = s[d];
            return f[d] = (y,v=!1,S=!1)=>(n || a(),
            m.schedule(y, v, S)),
            f
        }
        , {}),
        cancel: f=>us.forEach(d=>s[d].cancel(f)),
        state: i,
        steps: s
    }
}
const {schedule: z, cancel: lt, state: ve, steps: Il} = Sx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ie, !0)
  , Px = {
    useVisualState: ty({
        scrapeMotionValuesFromProps: ey,
        createRenderState: Xg,
        onMount: (t,e,{renderState: n, latestValues: r})=>{
            z.read(()=>{
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            z.render(()=>{
                bc(n, r, {
                    enableHardwareAcceleration: !1
                }, Vc(e.tagName), t.transformTemplate),
                Jg(e, n)
            }
            )
        }
    })
}
  , kx = {
    useVisualState: ty({
        scrapeMotionValuesFromProps: zc,
        createRenderState: Dc
    })
};
function Cx(t, {forwardMotionProps: e=!1}, n, r) {
    return {
        ...jc(t) ? Px : kx,
        preloadedFeatures: n,
        useRender: px(e),
        createVisualElement: r,
        Component: t
    }
}
function Ct(t, e, n, r={
    passive: !0
}) {
    return t.addEventListener(e, n, r),
    ()=>t.removeEventListener(e, n)
}
const ny = t=>t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function Zo(t, e="page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const Ex = t=>e=>ny(e) && t(e, Zo(e));
function Tt(t, e, n, r) {
    return Ct(t, e, Ex(n), r)
}
const Tx = (t,e)=>n=>e(t(n))
  , en = (...t)=>t.reduce(Tx);
function ry(t) {
    let e = null;
    return ()=>{
        const n = ()=>{
            e = null
        }
        ;
        return e === null ? (e = t,
        n) : !1
    }
}
const jd = ry("dragHorizontal")
  , Nd = ry("dragVertical");
function iy(t) {
    let e = !1;
    if (t === "y")
        e = Nd();
    else if (t === "x")
        e = jd();
    else {
        const n = jd()
          , r = Nd();
        n && r ? e = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return e
}
function sy() {
    const t = iy(!0);
    return t ? (t(),
    !1) : !0
}
class cn {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function Dd(t, e) {
    const n = "pointer" + (e ? "enter" : "leave")
      , r = "onHover" + (e ? "Start" : "End")
      , i = (s,o)=>{
        if (s.pointerType === "touch" || sy())
            return;
        const l = t.getProps();
        t.animationState && l.whileHover && t.animationState.setActive("whileHover", e),
        l[r] && z.update(()=>l[r](s, o))
    }
    ;
    return Tt(t.current, n, i, {
        passive: !t.getProps()[r]
    })
}
class _x extends cn {
    mount() {
        this.unmount = en(Dd(this.node, !0), Dd(this.node, !1))
    }
    unmount() {}
}
class Ox extends cn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = en(Ct(this.node.current, "focus", ()=>this.onFocus()), Ct(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const oy = (t,e)=>e ? t === e ? !0 : oy(t, e.parentElement) : !1;
function Fl(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, Zo(n))
}
class Mx extends cn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ie,
        this.removeEndListeners = ie,
        this.removeAccessibleListeners = ie,
        this.startPointerPress = (e,n)=>{
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , s = Tt(window, "pointerup", (l,a)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: f} = this.node.getProps();
                z.update(()=>{
                    !f && !oy(this.node.current, l.target) ? c && c(l, a) : u && u(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , o = Tt(window, "pointercancel", (l,a)=>this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = en(s, o),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const e = s=>{
                if (s.key !== "Enter" || this.isPressing)
                    return;
                const o = l=>{
                    l.key !== "Enter" || !this.checkPressEnd() || Fl("up", (a,u)=>{
                        const {onTap: c} = this.node.getProps();
                        c && z.update(()=>c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Ct(this.node.current, "keyup", o),
                Fl("down", (l,a)=>{
                    this.startPress(l, a)
                }
                )
            }
              , n = Ct(this.node.current, "keydown", e)
              , r = ()=>{
                this.isPressing && Fl("cancel", (s,o)=>this.cancelPress(s, o))
            }
              , i = Ct(this.node.current, "blur", r);
            this.removeAccessibleListeners = en(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && z.update(()=>r(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !sy()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && z.update(()=>r(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = Tt(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , r = Ct(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = en(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const tu = new WeakMap
  , Bl = new WeakMap
  , Lx = t=>{
    const e = tu.get(t.target);
    e && e(t)
}
  , Rx = t=>{
    t.forEach(Lx)
}
;
function Ax({root: t, ...e}) {
    const n = t || document;
    Bl.has(n) || Bl.set(n, {});
    const r = Bl.get(n)
      , i = JSON.stringify(e);
    return r[i] || (r[i] = new IntersectionObserver(Rx,{
        root: t,
        ...e
    })),
    r[i]
}
function jx(t, e, n) {
    const r = Ax(e);
    return tu.set(t, n),
    r.observe(t),
    ()=>{
        tu.delete(t),
        r.unobserve(t)
    }
}
const Nx = {
    some: 0,
    all: 1
};
class Dx extends cn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = e
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Nx[i]
        }
          , l = a=>{
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(a)
        }
        ;
        return jx(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(bx(e, n)) && this.startObserver()
    }
    unmount() {}
}
function bx({viewport: t={}}, {viewport: e={}}={}) {
    return n=>t[n] !== e[n]
}
const Vx = {
    inView: {
        Feature: Dx
    },
    tap: {
        Feature: Mx
    },
    focus: {
        Feature: Ox
    },
    hover: {
        Feature: _x
    }
};
function ly(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function zx(t) {
    const e = {};
    return t.values.forEach((n,r)=>e[r] = n.get()),
    e
}
function Ix(t) {
    const e = {};
    return t.values.forEach((n,r)=>e[r] = n.getVelocity()),
    e
}
function qo(t, e, n) {
    const r = t.getProps();
    return Ic(r, e, n !== void 0 ? n : r.custom, zx(t), Ix(t))
}
let Fx = ie
  , Jo = ie;
const tn = t=>t * 1e3
  , _t = t=>t / 1e3
  , Bx = {
    current: !1
}
  , ay = t=>Array.isArray(t) && typeof t[0] == "number";
function uy(t) {
    return !!(!t || typeof t == "string" && cy[t] || ay(t) || Array.isArray(t) && t.every(uy))
}
const Fr = ([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`
  , cy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Fr([0, .65, .55, 1]),
    circOut: Fr([.55, 0, 1, .45]),
    backIn: Fr([.31, .01, .66, -.59]),
    backOut: Fr([.33, 1.53, .69, .99])
};
function fy(t) {
    if (t)
        return ay(t) ? Fr(t) : Array.isArray(t) ? t.map(fy) : cy[t]
}
function $x(t, e, n, {delay: r=0, duration: i, repeat: s=0, repeatType: o="loop", ease: l, times: a}={}) {
    const u = {
        [e]: n
    };
    a && (u.offset = a);
    const c = fy(l);
    return Array.isArray(c) && (u.easing = c),
    t.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function Ux(t, {repeat: e, repeatType: n="loop"}) {
    const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[r]
}
const dy = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Hx = 1e-7
  , Wx = 12;
function Gx(t, e, n, r, i) {
    let s, o, l = 0;
    do
        o = e + (n - e) / 2,
        s = dy(o, r, i) - t,
        s > 0 ? n = o : e = o;
    while (Math.abs(s) > Hx && ++l < Wx);
    return o
}
function ji(t, e, n, r) {
    if (t === e && n === r)
        return ie;
    const i = s=>Gx(s, 0, 1, t, n);
    return s=>s === 0 || s === 1 ? s : dy(i(s), e, r)
}
const Qx = ji(.42, 0, 1, 1)
  , Kx = ji(0, 0, .58, 1)
  , hy = ji(.42, 0, .58, 1)
  , Yx = t=>Array.isArray(t) && typeof t[0] != "number"
  , py = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , my = t=>e=>1 - t(1 - e)
  , Bc = t=>1 - Math.sin(Math.acos(t))
  , gy = my(Bc)
  , Xx = py(Bc)
  , yy = ji(.33, 1.53, .69, .99)
  , $c = my(yy)
  , Zx = py($c)
  , qx = t=>(t *= 2) < 1 ? .5 * $c(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Jx = {
    linear: ie,
    easeIn: Qx,
    easeInOut: hy,
    easeOut: Kx,
    circIn: Bc,
    circInOut: Xx,
    circOut: gy,
    backIn: $c,
    backInOut: Zx,
    backOut: yy,
    anticipate: qx
}
  , bd = t=>{
    if (Array.isArray(t)) {
        Jo(t.length === 4);
        const [e,n,r,i] = t;
        return ji(e, n, r, i)
    } else if (typeof t == "string")
        return Jx[t];
    return t
}
  , Uc = (t,e)=>n=>!!(Ri(n) && ex.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
  , vy = (t,e,n)=>r=>{
    if (!Ri(r))
        return r;
    const [i,s,o,l] = r.match(Xo);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , eS = t=>sn(0, 255, t)
  , $l = {
    ...Nn,
    transform: t=>Math.round(eS(t))
}
  , kn = {
    test: Uc("rgb", "red"),
    parse: vy("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: r=1})=>"rgba(" + $l.transform(t) + ", " + $l.transform(e) + ", " + $l.transform(n) + ", " + Zr(Xr.transform(r)) + ")"
};
function tS(t) {
    let e = ""
      , n = ""
      , r = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    r = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    r = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const nu = {
    test: Uc("#"),
    parse: tS,
    transform: kn.transform
}
  , Zn = {
    test: Uc("hsl", "hue"),
    parse: vy("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: r=1})=>"hsla(" + Math.round(t) + ", " + vt.transform(Zr(e)) + ", " + vt.transform(Zr(n)) + ", " + Zr(Xr.transform(r)) + ")"
}
  , Te = {
    test: t=>kn.test(t) || nu.test(t) || Zn.test(t),
    parse: t=>kn.test(t) ? kn.parse(t) : Zn.test(t) ? Zn.parse(t) : nu.parse(t),
    transform: t=>Ri(t) ? t : t.hasOwnProperty("red") ? kn.transform(t) : Zn.transform(t)
}
  , J = (t,e,n)=>-n * t + n * e + t;
function Ul(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function nS({hue: t, saturation: e, lightness: n, alpha: r}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!e)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + e) : n + e - n * e
          , a = 2 * n - l;
        i = Ul(a, l, t + 1 / 3),
        s = Ul(a, l, t),
        o = Ul(a, l, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Hl = (t,e,n)=>{
    const r = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - r) + r))
}
  , rS = [nu, kn, Zn]
  , iS = t=>rS.find(e=>e.test(t));
function Vd(t) {
    const e = iS(t);
    let n = e.parse(t);
    return e === Zn && (n = nS(n)),
    n
}
const wy = (t,e)=>{
    const n = Vd(t)
      , r = Vd(e)
      , i = {
        ...n
    };
    return s=>(i.red = Hl(n.red, r.red, s),
    i.green = Hl(n.green, r.green, s),
    i.blue = Hl(n.blue, r.blue, s),
    i.alpha = J(n.alpha, r.alpha, s),
    kn.transform(i))
}
;
function sS(t) {
    var e, n;
    return isNaN(t) && Ri(t) && (((e = t.match(Xo)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Gg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const xy = {
    regex: qw,
    countKey: "Vars",
    token: "${v}",
    parse: ie
}
  , Sy = {
    regex: Gg,
    countKey: "Colors",
    token: "${c}",
    parse: Te.parse
}
  , Py = {
    regex: Xo,
    countKey: "Numbers",
    token: "${n}",
    parse: Nn.parse
};
function Wl(t, {regex: e, countKey: n, token: r, parse: i}) {
    const s = t.tokenised.match(e);
    s && (t["num" + n] = s.length,
    t.tokenised = t.tokenised.replace(e, r),
    t.values.push(...s.map(i)))
}
function xo(t) {
    const e = t.toString()
      , n = {
        value: e,
        tokenised: e,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && Wl(n, xy),
    Wl(n, Sy),
    Wl(n, Py),
    n
}
function ky(t) {
    return xo(t).values
}
function Cy(t) {
    const {values: e, numColors: n, numVars: r, tokenised: i} = xo(t)
      , s = e.length;
    return o=>{
        let l = i;
        for (let a = 0; a < s; a++)
            a < r ? l = l.replace(xy.token, o[a]) : a < r + n ? l = l.replace(Sy.token, Te.transform(o[a])) : l = l.replace(Py.token, Zr(o[a]));
        return l
    }
}
const oS = t=>typeof t == "number" ? 0 : t;
function lS(t) {
    const e = ky(t);
    return Cy(t)(e.map(oS))
}
const on = {
    test: sS,
    parse: ky,
    createTransformer: Cy,
    getAnimatableNone: lS
}
  , Ey = (t,e)=>n=>`${n > 0 ? e : t}`;
function Ty(t, e) {
    return typeof t == "number" ? n=>J(t, e, n) : Te.test(t) ? wy(t, e) : t.startsWith("var(") ? Ey(t, e) : Oy(t, e)
}
const _y = (t,e)=>{
    const n = [...t]
      , r = n.length
      , i = t.map((s,o)=>Ty(s, e[o]));
    return s=>{
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
  , aS = (t,e)=>{
    const n = {
        ...t,
        ...e
    }
      , r = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (r[i] = Ty(t[i], e[i]));
    return i=>{
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
  , Oy = (t,e)=>{
    const n = on.createTransformer(e)
      , r = xo(t)
      , i = xo(e);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? en(_y(r.values, i.values), n) : Ey(t, e)
}
  , hr = (t,e,n)=>{
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r
}
  , zd = (t,e)=>n=>J(t, e, n);
function uS(t) {
    return typeof t == "number" ? zd : typeof t == "string" ? Te.test(t) ? wy : Oy : Array.isArray(t) ? _y : typeof t == "object" ? aS : zd
}
function cS(t, e, n) {
    const r = []
      , i = n || uS(t[0])
      , s = t.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(t[o], t[o + 1]);
        if (e) {
            const a = Array.isArray(e) ? e[o] || ie : e;
            l = en(a, l)
        }
        r.push(l)
    }
    return r
}
function Hc(t, e, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = t.length;
    if (Jo(s === e.length),
    s === 1)
        return ()=>e[0];
    t[0] > t[s - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const o = cS(e, r, i)
      , l = o.length
      , a = u=>{
        let c = 0;
        if (l > 1)
            for (; c < t.length - 2 && !(u < t[c + 1]); c++)
                ;
        const f = hr(t[c], t[c + 1], u);
        return o[c](f)
    }
    ;
    return n ? u=>a(sn(t[0], t[s - 1], u)) : a
}
function fS(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
        const i = hr(0, e, r);
        t.push(J(n, 1, i))
    }
}
function My(t) {
    const e = [0];
    return fS(e, t.length - 1),
    e
}
function dS(t, e) {
    return t.map(n=>n * e)
}
function hS(t, e) {
    return t.map(()=>e || hy).splice(0, t.length - 1)
}
function So({duration: t=300, keyframes: e, times: n, ease: r="easeInOut"}) {
    const i = Yx(r) ? r.map(bd) : bd(r)
      , s = {
        done: !1,
        value: e[0]
    }
      , o = dS(n && n.length === e.length ? n : My(e), t)
      , l = Hc(o, e, {
        ease: Array.isArray(i) ? i : hS(e, i)
    });
    return {
        calculatedDuration: t,
        next: a=>(s.value = l(a),
        s.done = a >= t,
        s)
    }
}
function Wc(t, e) {
    return e ? t * (1e3 / e) : 0
}
const pS = 5;
function Ly(t, e, n) {
    const r = Math.max(e - pS, 0);
    return Wc(n - t(r), e - r)
}
const Gl = .001
  , mS = .01
  , Id = 10
  , gS = .05
  , yS = 1;
function vS({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
    let i, s;
    Fx(t <= tn(Id));
    let o = 1 - e;
    o = sn(gS, yS, o),
    t = sn(mS, Id, _t(t)),
    o < 1 ? (i = u=>{
        const c = u * o
          , f = c * t
          , d = c - n
          , m = ru(u, o)
          , y = Math.exp(-f);
        return Gl - d / m * y
    }
    ,
    s = u=>{
        const f = u * o * t
          , d = f * n + n
          , m = Math.pow(o, 2) * Math.pow(u, 2) * t
          , y = Math.exp(-f)
          , v = ru(Math.pow(u, 2), o);
        return (-i(u) + Gl > 0 ? -1 : 1) * ((d - m) * y) / v
    }
    ) : (i = u=>{
        const c = Math.exp(-u * t)
          , f = (u - n) * t + 1;
        return -Gl + c * f
    }
    ,
    s = u=>{
        const c = Math.exp(-u * t)
          , f = (n - u) * (t * t);
        return c * f
    }
    );
    const l = 5 / t
      , a = xS(i, s, l);
    if (t = tn(t),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: t
        }
    }
}
const wS = 12;
function xS(t, e, n) {
    let r = n;
    for (let i = 1; i < wS; i++)
        r = r - t(r) / e(r);
    return r
}
function ru(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const SS = ["duration", "bounce"]
  , PS = ["stiffness", "damping", "mass"];
function Fd(t, e) {
    return e.some(n=>t[n] !== void 0)
}
function kS(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Fd(t, PS) && Fd(t, SS)) {
        const n = vS(t);
        e = {
            ...e,
            ...n,
            mass: 1
        },
        e.isResolvedFromDuration = !0
    }
    return e
}
function Ry({keyframes: t, restDelta: e, restSpeed: n, ...r}) {
    const i = t[0]
      , s = t[t.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, duration: c, velocity: f, isResolvedFromDuration: d} = kS({
        ...r,
        velocity: -_t(r.velocity || 0)
    })
      , m = f || 0
      , y = a / (2 * Math.sqrt(l * u))
      , v = s - i
      , S = _t(Math.sqrt(l / u))
      , g = Math.abs(v) < 5;
    n || (n = g ? .01 : 2),
    e || (e = g ? .005 : .5);
    let h;
    if (y < 1) {
        const p = ru(S, y);
        h = w=>{
            const P = Math.exp(-y * S * w);
            return s - P * ((m + y * S * v) / p * Math.sin(p * w) + v * Math.cos(p * w))
        }
    } else if (y === 1)
        h = p=>s - Math.exp(-S * p) * (v + (m + S * v) * p);
    else {
        const p = S * Math.sqrt(y * y - 1);
        h = w=>{
            const P = Math.exp(-y * S * w)
              , k = Math.min(p * w, 300);
            return s - P * ((m + y * S * v) * Math.sinh(k) + p * v * Math.cosh(k)) / p
        }
    }
    return {
        calculatedDuration: d && c || null,
        next: p=>{
            const w = h(p);
            if (d)
                o.done = p >= c;
            else {
                let P = m;
                p !== 0 && (y < 1 ? P = Ly(h, p, w) : P = 0);
                const k = Math.abs(P) <= n
                  , E = Math.abs(s - w) <= e;
                o.done = k && E
            }
            return o.value = o.done ? s : w,
            o
        }
    }
}
function Bd({keyframes: t, velocity: e=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const f = t[0]
      , d = {
        done: !1,
        value: f
    }
      , m = C=>l !== void 0 && C < l || a !== void 0 && C > a
      , y = C=>l === void 0 ? a : a === void 0 || Math.abs(l - C) < Math.abs(a - C) ? l : a;
    let v = n * e;
    const S = f + v
      , g = o === void 0 ? S : o(S);
    g !== S && (v = g - f);
    const h = C=>-v * Math.exp(-C / r)
      , p = C=>g + h(C)
      , w = C=>{
        const L = h(C)
          , R = p(C);
        d.done = Math.abs(L) <= u,
        d.value = d.done ? g : R
    }
    ;
    let P, k;
    const E = C=>{
        m(d.value) && (P = C,
        k = Ry({
            keyframes: [d.value, y(d.value)],
            velocity: Ly(p, C, d.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: C=>{
            let L = !1;
            return !k && P === void 0 && (L = !0,
            w(C),
            E(C)),
            P !== void 0 && C > P ? k.next(C - P) : (!L && w(C),
            d)
        }
    }
}
const CS = t=>{
    const e = ({timestamp: n})=>t(n);
    return {
        start: ()=>z.update(e, !0),
        stop: ()=>lt(e),
        now: ()=>ve.isProcessing ? ve.timestamp : performance.now()
    }
}
  , $d = 2e4;
function Ud(t) {
    let e = 0;
    const n = 50;
    let r = t.next(e);
    for (; !r.done && e < $d; )
        e += n,
        r = t.next(e);
    return e >= $d ? 1 / 0 : e
}
const ES = {
    decay: Bd,
    inertia: Bd,
    tween: So,
    keyframes: So,
    spring: Ry
};
function Po({autoplay: t=!0, delay: e=0, driver: n=CS, keyframes: r, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: c, onUpdate: f, ...d}) {
    let m = 1, y = !1, v, S;
    const g = ()=>{
        S = new Promise(N=>{
            v = N
        }
        )
    }
    ;
    g();
    let h;
    const p = ES[i] || So;
    let w;
    p !== So && typeof r[0] != "number" && (w = Hc([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const P = p({
        ...d,
        keyframes: r
    });
    let k;
    l === "mirror" && (k = p({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let E = "idle"
      , C = null
      , L = null
      , R = null;
    P.calculatedDuration === null && s && (P.calculatedDuration = Ud(P));
    const {calculatedDuration: se} = P;
    let ue = 1 / 0
      , ge = 1 / 0;
    se !== null && (ue = se + o,
    ge = ue * (s + 1) - o);
    let oe = 0;
    const ut = N=>{
        if (L === null)
            return;
        m > 0 && (L = Math.min(L, N)),
        m < 0 && (L = Math.min(N - ge / m, L)),
        C !== null ? oe = C : oe = Math.round(N - L) * m;
        const G = oe - e * (m >= 0 ? 1 : -1)
          , fn = m >= 0 ? G < 0 : G > ge;
        oe = Math.max(G, 0),
        E === "finished" && C === null && (oe = ge);
        let ct = oe
          , bn = P;
        if (s) {
            const dl = Math.min(oe, ge) / ue;
            let Ui = Math.floor(dl)
              , hn = dl % 1;
            !hn && dl >= 1 && (hn = 1),
            hn === 1 && Ui--,
            Ui = Math.min(Ui, s + 1),
            !!(Ui % 2) && (l === "reverse" ? (hn = 1 - hn,
            o && (hn -= o / ue)) : l === "mirror" && (bn = k)),
            ct = sn(0, 1, hn) * ue
        }
        const Ve = fn ? {
            done: !1,
            value: r[0]
        } : bn.next(ct);
        w && (Ve.value = w(Ve.value));
        let {done: dn} = Ve;
        !fn && se !== null && (dn = m >= 0 ? oe >= ge : oe <= 0);
        const f0 = C === null && (E === "finished" || E === "running" && dn);
        return f && f(Ve.value),
        f0 && _(),
        Ve
    }
      , le = ()=>{
        h && h.stop(),
        h = void 0
    }
      , We = ()=>{
        E = "idle",
        le(),
        v(),
        g(),
        L = R = null
    }
      , _ = ()=>{
        E = "finished",
        c && c(),
        le(),
        v()
    }
      , j = ()=>{
        if (y)
            return;
        h || (h = n(ut));
        const N = h.now();
        a && a(),
        C !== null ? L = N - C : (!L || E === "finished") && (L = N),
        E === "finished" && g(),
        R = L,
        C = null,
        E = "running",
        h.start()
    }
    ;
    t && j();
    const D = {
        then(N, G) {
            return S.then(N, G)
        },
        get time() {
            return _t(oe)
        },
        set time(N) {
            N = tn(N),
            oe = N,
            C !== null || !h || m === 0 ? C = N : L = h.now() - N / m
        },
        get duration() {
            const N = P.calculatedDuration === null ? Ud(P) : P.calculatedDuration;
            return _t(N)
        },
        get speed() {
            return m
        },
        set speed(N) {
            N === m || !h || (m = N,
            D.time = _t(oe))
        },
        get state() {
            return E
        },
        play: j,
        pause: ()=>{
            E = "paused",
            C = oe
        }
        ,
        stop: ()=>{
            y = !0,
            E !== "idle" && (E = "idle",
            u && u(),
            We())
        }
        ,
        cancel: ()=>{
            R !== null && ut(R),
            We()
        }
        ,
        complete: ()=>{
            E = "finished"
        }
        ,
        sample: N=>(L = 0,
        ut(N))
    };
    return D
}
function Ay(t) {
    let e;
    return ()=>(e === void 0 && (e = t()),
    e)
}
const TS = Ay(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , _S = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , cs = 10
  , OS = 2e4
  , MS = (t,e)=>e.type === "spring" || t === "backgroundColor" || !uy(e.ease);
function LS(t, e, {onUpdate: n, onComplete: r, ...i}) {
    if (!(TS() && _S.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, l, a, u = !1;
    const c = ()=>{
        a = new Promise(p=>{
            l = p
        }
        )
    }
    ;
    c();
    let {keyframes: f, duration: d=300, ease: m, times: y} = i;
    if (MS(e, i)) {
        const p = Po({
            ...i,
            repeat: 0,
            delay: 0
        });
        let w = {
            done: !1,
            value: f[0]
        };
        const P = [];
        let k = 0;
        for (; !w.done && k < OS; )
            w = p.sample(k),
            P.push(w.value),
            k += cs;
        y = void 0,
        f = P,
        d = k - cs,
        m = "linear"
    }
    const v = $x(t.owner.current, e, f, {
        ...i,
        duration: d,
        ease: m,
        times: y
    })
      , S = ()=>{
        u = !1,
        v.cancel()
    }
      , g = ()=>{
        u = !0,
        z.update(S),
        l(),
        c()
    }
    ;
    return v.onfinish = ()=>{
        u || (t.set(Ux(f, i)),
        r && r(),
        g())
    }
    ,
    {
        then(p, w) {
            return a.then(p, w)
        },
        attachTimeline(p) {
            return v.timeline = p,
            v.onfinish = null,
            ie
        },
        get time() {
            return _t(v.currentTime || 0)
        },
        set time(p) {
            v.currentTime = tn(p)
        },
        get speed() {
            return v.playbackRate
        },
        set speed(p) {
            v.playbackRate = p
        },
        get duration() {
            return _t(d)
        },
        play: ()=>{
            o || (v.play(),
            lt(S))
        }
        ,
        pause: ()=>v.pause(),
        stop: ()=>{
            if (o = !0,
            v.playState === "idle")
                return;
            const {currentTime: p} = v;
            if (p) {
                const w = Po({
                    ...i,
                    autoplay: !1
                });
                t.setWithVelocity(w.sample(p - cs).value, w.sample(p).value, cs)
            }
            g()
        }
        ,
        complete: ()=>{
            u || v.finish()
        }
        ,
        cancel: g
    }
}
function RS({keyframes: t, delay: e, onUpdate: n, onComplete: r}) {
    const i = ()=>(n && n(t[t.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ie,
        pause: ie,
        stop: ie,
        then: s=>(s(),
        Promise.resolve()),
        cancel: ie,
        complete: ie
    });
    return e ? Po({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const AS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , jS = t=>({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , NS = {
    type: "keyframes",
    duration: .8
}
  , DS = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , bS = (t,{keyframes: e})=>e.length > 2 ? NS : jn.has(t) ? t.startsWith("scale") ? jS(e[1]) : AS : DS
  , iu = (t,e)=>t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (on.test(e) || e === "0") && !e.startsWith("url("))
  , VS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function zS(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [r] = n.match(Xo) || [];
    if (!r)
        return t;
    const i = n.replace(r, "");
    let s = VS.has(e) ? 1 : 0;
    return r !== n && (s *= 100),
    e + "(" + s + i + ")"
}
const IS = /([a-z-]*)\(.*?\)/g
  , su = {
    ...on,
    getAnimatableNone: t=>{
        const e = t.match(IS);
        return e ? e.map(zS).join(" ") : t
    }
}
  , FS = {
    ...Qg,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: su,
    WebkitFilter: su
}
  , Gc = t=>FS[t];
function jy(t, e) {
    let n = Gc(t);
    return n !== su && (n = on),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Ny = t=>/^0[^.\s]+$/.test(t);
function BS(t) {
    if (typeof t == "number")
        return t === 0;
    if (t !== null)
        return t === "none" || t === "0" || Ny(t)
}
function $S(t, e, n, r) {
    const i = iu(e, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : t.get();
    let l;
    const a = [];
    for (let u = 0; u < s.length; u++)
        s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
        BS(s[u]) && a.push(u),
        typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (l = s[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            s[c] = jy(e, l)
        }
    return s
}
function US({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Qc(t, e) {
    return t[e] || t.default || t
}
const HS = {
    skipAnimations: !1
}
  , Kc = (t,e,n,r={})=>i=>{
    const s = Qc(r, t) || {}
      , o = s.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - tn(o);
    const a = $S(e, t, n, s)
      , u = a[0]
      , c = a[a.length - 1]
      , f = iu(t, u)
      , d = iu(t, c);
    let m = {
        keyframes: a,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -l,
        onUpdate: y=>{
            e.set(y),
            s.onUpdate && s.onUpdate(y)
        }
        ,
        onComplete: ()=>{
            i(),
            s.onComplete && s.onComplete()
        }
    };
    if (US(s) || (m = {
        ...m,
        ...bS(t, m)
    }),
    m.duration && (m.duration = tn(m.duration)),
    m.repeatDelay && (m.repeatDelay = tn(m.repeatDelay)),
    !f || !d || Bx.current || s.type === !1 || HS.skipAnimations)
        return RS(m);
    if (!r.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        const y = LS(e, t, m);
        if (y)
            return y
    }
    return Po(m)
}
;
function ko(t) {
    return !!(be(t) && t.add)
}
const Dy = t=>/^\-?\d*\.?\d+$/.test(t);
function Yc(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Xc(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class Zc {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Yc(this.subscriptions, e),
        ()=>Xc(this.subscriptions, e)
    }
    notify(e, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(e, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const WS = t=>!isNaN(parseFloat(t));
class GS {
    constructor(e, n={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r,i=!0)=>{
            this.prev = this.current,
            this.current = r;
            const {delta: s, timestamp: o} = ve;
            this.lastUpdated !== o && (this.timeDelta = s,
            this.lastUpdated = o,
            z.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = ()=>z.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r})=>{
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = e,
        this.canTrackVelocity = WS(this.current),
        this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new Zc);
        const r = this.events[e].add(n);
        return e === "change" ? ()=>{
            r(),
            z.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, r) {
        this.set(n),
        this.prev = e,
        this.timeDelta = r
    }
    jump(e) {
        this.updateAndNotify(e),
        this.prev = e,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Wc(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function pr(t, e) {
    return new GS(t,e)
}
const by = t=>e=>e.test(t)
  , QS = {
    test: t=>t === "auto",
    parse: t=>t
}
  , Vy = [Nn, A, vt, Vt, nx, tx, QS]
  , Rr = t=>Vy.find(by(t))
  , KS = [...Vy, Te, on]
  , YS = t=>KS.find(by(t));
function XS(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, pr(n))
}
function qc(t, e) {
    const n = qo(t, e);
    let {transitionEnd: r={}, transition: i={}, ...s} = n ? t.makeTargetAnimatable(n, !1) : {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = gx(s[o]);
        XS(t, o, l)
    }
}
function ou(t, e) {
    [...e].reverse().forEach(r=>{
        const i = t.getVariant(r);
        i && qc(t, i),
        t.variantChildren && t.variantChildren.forEach(s=>{
            ou(s, e)
        }
        )
    }
    )
}
function ZS(t, e) {
    if (Array.isArray(e))
        return ou(t, e);
    if (typeof e == "string")
        return ou(t, [e]);
    qc(t, e)
}
function qS(t, e, n) {
    var r, i;
    const s = Object.keys(e).filter(l=>!t.hasValue(l))
      , o = s.length;
    if (o)
        for (let l = 0; l < o; l++) {
            const a = s[l]
              , u = e[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : t.readValue(a)) !== null && i !== void 0 ? i : e[a]),
            c != null && (typeof c == "string" && (Dy(c) || Ny(c)) ? c = parseFloat(c) : !YS(c) && on.test(u) && (c = jy(a, u)),
            t.addValue(a, pr(c, {
                owner: t
            })),
            n[a] === void 0 && (n[a] = c),
            c !== null && t.setBaseTarget(a, c))
        }
}
function JS(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}
function eP(t, e, n) {
    const r = {};
    for (const i in t) {
        const s = JS(i, e);
        if (s !== void 0)
            r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}
function tP({protectedKeys: t, needsAnimating: e}, n) {
    const r = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    r
}
function nP(t, e) {
    const n = t.get();
    if (Array.isArray(e)) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== n)
                return !0
    } else
        return n !== e
}
function zy(t, e, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s=t.getDefaultTransition(), transitionEnd: o, ...l} = t.makeTargetAnimatable(e);
    const a = t.getValue("willChange");
    r && (s = r);
    const u = []
      , c = i && t.animationState && t.animationState.getState()[i];
    for (const f in l) {
        const d = t.getValue(f)
          , m = l[f];
        if (!d || m === void 0 || c && tP(c, f))
            continue;
        const y = {
            delay: n,
            elapsed: 0,
            ...Qc(s || {}, f)
        };
        if (window.HandoffAppearAnimations) {
            const g = t.getProps()[Ig];
            if (g) {
                const h = window.HandoffAppearAnimations(g, f, d, z);
                h !== null && (y.elapsed = h,
                y.isHandoff = !0)
            }
        }
        let v = !y.isHandoff && !nP(d, m);
        if (y.type === "spring" && (d.getVelocity() || y.velocity) && (v = !1),
        d.animation && (v = !1),
        v)
            continue;
        d.start(Kc(f, d, m, t.shouldReduceMotion && jn.has(f) ? {
            type: !1
        } : y));
        const S = d.animation;
        ko(a) && (a.add(f),
        S.then(()=>a.remove(f))),
        u.push(S)
    }
    return o && Promise.all(u).then(()=>{
        o && qc(t, o)
    }
    ),
    u
}
function lu(t, e, n={}) {
    const r = qo(t, e, n.custom);
    let {transition: i=t.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? ()=>Promise.all(zy(t, r, n)) : ()=>Promise.resolve()
      , o = t.variantChildren && t.variantChildren.size ? (a=0)=>{
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: f} = i;
        return rP(t, e, u + a, c, f, n)
    }
    : ()=>Promise.resolve()
      , {when: l} = i;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [s, o] : [o, s];
        return a().then(()=>u())
    } else
        return Promise.all([s(), o(n.delay)])
}
function rP(t, e, n=0, r=0, i=1, s) {
    const o = []
      , l = (t.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0)=>u * r : (u=0)=>l - u * r;
    return Array.from(t.variantChildren).sort(iP).forEach((u,c)=>{
        u.notify("AnimationStart", e),
        o.push(lu(u, e, {
            ...s,
            delay: n + a(c)
        }).then(()=>u.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(o)
}
function iP(t, e) {
    return t.sortNodePosition(e)
}
function Iy(t, e, n={}) {
    t.notify("AnimationStart", e);
    let r;
    if (Array.isArray(e)) {
        const i = e.map(s=>lu(t, s, n));
        r = Promise.all(i)
    } else if (typeof e == "string")
        r = lu(t, e, n);
    else {
        const i = typeof e == "function" ? qo(t, e, n.custom) : e;
        r = Promise.all(zy(t, i, n))
    }
    return r.then(()=>t.notify("AnimationComplete", e))
}
const sP = [...Rc].reverse()
  , oP = Rc.length;
function lP(t) {
    return e=>Promise.all(e.map(({animation: n, options: r})=>Iy(t, n, r)))
}
function aP(t) {
    let e = lP(t);
    const n = cP();
    let r = !0;
    const i = (a,u)=>{
        const c = qo(t, u);
        if (c) {
            const {transition: f, transitionEnd: d, ...m} = c;
            a = {
                ...a,
                ...m,
                ...d
            }
        }
        return a
    }
    ;
    function s(a) {
        e = a(t)
    }
    function o(a, u) {
        const c = t.getProps()
          , f = t.getVariantContext(!0) || {}
          , d = []
          , m = new Set;
        let y = {}
          , v = 1 / 0;
        for (let g = 0; g < oP; g++) {
            const h = sP[g]
              , p = n[h]
              , w = c[h] !== void 0 ? c[h] : f[h]
              , P = vi(w)
              , k = h === u ? p.isActive : null;
            k === !1 && (v = g);
            let E = w === f[h] && w !== c[h] && P;
            if (E && r && t.manuallyAnimateOnMount && (E = !1),
            p.protectedKeys = {
                ...y
            },
            !p.isActive && k === null || !w && !p.prevProp || Ko(w) || typeof w == "boolean")
                continue;
            let L = uP(p.prevProp, w) || h === u && p.isActive && !E && P || g > v && P
              , R = !1;
            const se = Array.isArray(w) ? w : [w];
            let ue = se.reduce(i, {});
            k === !1 && (ue = {});
            const {prevResolvedValues: ge={}} = p
              , oe = {
                ...ge,
                ...ue
            }
              , ut = le=>{
                L = !0,
                m.has(le) && (R = !0,
                m.delete(le)),
                p.needsAnimating[le] = !0
            }
            ;
            for (const le in oe) {
                const We = ue[le]
                  , _ = ge[le];
                if (y.hasOwnProperty(le))
                    continue;
                let j = !1;
                wo(We) && wo(_) ? j = !ly(We, _) : j = We !== _,
                j ? We !== void 0 ? ut(le) : m.add(le) : We !== void 0 && m.has(le) ? ut(le) : p.protectedKeys[le] = !0
            }
            p.prevProp = w,
            p.prevResolvedValues = ue,
            p.isActive && (y = {
                ...y,
                ...ue
            }),
            r && t.blockInitialAnimation && (L = !1),
            L && (!E || R) && d.push(...se.map(le=>({
                animation: le,
                options: {
                    type: h,
                    ...a
                }
            })))
        }
        if (m.size) {
            const g = {};
            m.forEach(h=>{
                const p = t.getBaseTarget(h);
                p !== void 0 && (g[h] = p)
            }
            ),
            d.push({
                animation: g
            })
        }
        let S = !!d.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (S = !1),
        r = !1,
        S ? e(d) : Promise.resolve()
    }
    function l(a, u, c) {
        var f;
        if (n[a].isActive === u)
            return Promise.resolve();
        (f = t.variantChildren) === null || f === void 0 || f.forEach(m=>{
            var y;
            return (y = m.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const d = o(c, a);
        for (const m in n)
            n[m].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: ()=>n
    }
}
function uP(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ly(e, t) : !1
}
function pn(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function cP() {
    return {
        animate: pn(!0),
        whileInView: pn(),
        whileHover: pn(),
        whileTap: pn(),
        whileDrag: pn(),
        whileFocus: pn(),
        exit: pn()
    }
}
class fP extends cn {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = aP(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        this.unmount(),
        Ko(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let dP = 0;
class hP extends cn {
    constructor() {
        super(...arguments),
        this.id = dP++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const s = this.node.animationState.setActive("exit", !e, {
            custom: r ?? this.node.getProps().custom
        });
        n && !e && s.then(()=>n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const pP = {
    animation: {
        Feature: fP
    },
    exit: {
        Feature: hP
    }
}
  , Hd = (t,e)=>Math.abs(t - e);
function mP(t, e) {
    const n = Hd(t.x, e.x)
      , r = Hd(t.y, e.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Fy {
    constructor(e, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Kl(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , m = mP(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !m)
                return;
            const {point: y} = f
              , {timestamp: v} = ve;
            this.history.push({
                ...y,
                timestamp: v
            });
            const {onStart: S, onMove: g} = this.handlers;
            d || (S && S(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            g && g(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f,d)=>{
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Ql(d, this.transformPagePoint),
            z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f,d)=>{
            this.end();
            const {onEnd: m, onSessionEnd: y, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Kl(f.type === "pointercancel" ? this.lastMoveEventInfo : Ql(d, this.transformPagePoint), this.history);
            this.startEvent && m && m(f, S),
            y && y(f, S)
        }
        ,
        !ny(e))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Zo(e)
          , l = Ql(o, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = ve;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(e, Kl(l, this.history)),
        this.removeListeners = en(Tt(this.contextWindow, "pointermove", this.handlePointerMove), Tt(this.contextWindow, "pointerup", this.handlePointerUp), Tt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        lt(this.updatePoint)
    }
}
function Ql(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function Wd(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function Kl({point: t}, e) {
    return {
        point: t,
        delta: Wd(t, By(e)),
        offset: Wd(t, gP(e)),
        velocity: yP(e, .1)
    }
}
function gP(t) {
    return t[0]
}
function By(t) {
    return t[t.length - 1]
}
function yP(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , r = null;
    const i = By(t);
    for (; n >= 0 && (r = t[n],
    !(i.timestamp - r.timestamp > tn(e))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = _t(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function $e(t) {
    return t.max - t.min
}
function au(t, e=0, n=.01) {
    return Math.abs(t - e) <= n
}
function Gd(t, e, n, r=.5) {
    t.origin = r,
    t.originPoint = J(e.min, e.max, t.origin),
    t.scale = $e(n) / $e(e),
    (au(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    t.translate = J(n.min, n.max, t.origin) - t.originPoint,
    (au(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function qr(t, e, n, r) {
    Gd(t.x, e.x, n.x, r ? r.originX : void 0),
    Gd(t.y, e.y, n.y, r ? r.originY : void 0)
}
function Qd(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + $e(e)
}
function vP(t, e, n) {
    Qd(t.x, e.x, n.x),
    Qd(t.y, e.y, n.y)
}
function Kd(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + $e(e)
}
function Jr(t, e, n) {
    Kd(t.x, e.x, n.x),
    Kd(t.y, e.y, n.y)
}
function wP(t, {min: e, max: n}, r) {
    return e !== void 0 && t < e ? t = r ? J(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? J(n, t, r.max) : Math.min(t, n)),
    t
}
function Yd(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function xP(t, {top: e, left: n, bottom: r, right: i}) {
    return {
        x: Yd(t.x, n, i),
        y: Yd(t.y, e, r)
    }
}
function Xd(t, e) {
    let n = e.min - t.min
      , r = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function SP(t, e) {
    return {
        x: Xd(t.x, e.x),
        y: Xd(t.y, e.y)
    }
}
function PP(t, e) {
    let n = .5;
    const r = $e(t)
      , i = $e(e);
    return i > r ? n = hr(e.min, e.max - r, t.min) : r > i && (n = hr(t.min, t.max - i, e.min)),
    sn(0, 1, n)
}
function kP(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const uu = .35;
function CP(t=uu) {
    return t === !1 ? t = 0 : t === !0 && (t = uu),
    {
        x: Zd(t, "left", "right"),
        y: Zd(t, "top", "bottom")
    }
}
function Zd(t, e, n) {
    return {
        min: qd(t, e),
        max: qd(t, n)
    }
}
function qd(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Jd = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , qn = ()=>({
    x: Jd(),
    y: Jd()
})
  , eh = ()=>({
    min: 0,
    max: 0
})
  , ce = ()=>({
    x: eh(),
    y: eh()
});
function Qe(t) {
    return [t("x"), t("y")]
}
function $y({top: t, left: e, right: n, bottom: r}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: r
        }
    }
}
function EP({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function TP(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , r = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Yl(t) {
    return t === void 0 || t === 1
}
function cu({scale: t, scaleX: e, scaleY: n}) {
    return !Yl(t) || !Yl(e) || !Yl(n)
}
function vn(t) {
    return cu(t) || Uy(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function Uy(t) {
    return th(t.x) || th(t.y)
}
function th(t) {
    return t && t !== "0%"
}
function Co(t, e, n) {
    const r = t - n
      , i = e * r;
    return n + i
}
function nh(t, e, n, r, i) {
    return i !== void 0 && (t = Co(t, i, r)),
    Co(t, n, r) + e
}
function fu(t, e=0, n=1, r, i) {
    t.min = nh(t.min, e, n, r, i),
    t.max = nh(t.max, e, n, r, i)
}
function Hy(t, {x: e, y: n}) {
    fu(t.x, e.translate, e.scale, e.originPoint),
    fu(t.y, n.translate, n.scale, n.originPoint)
}
function _P(t, e, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const a = s.instance;
        a && a.style && a.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Jn(t, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (e.x *= o.x.scale,
        e.y *= o.y.scale,
        Hy(t, o)),
        r && vn(s.latestValues) && Jn(t, s.latestValues))
    }
    e.x = rh(e.x),
    e.y = rh(e.y)
}
function rh(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}
function Bt(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function ih(t, e, [n,r,i]) {
    const s = e[i] !== void 0 ? e[i] : .5
      , o = J(t.min, t.max, s);
    fu(t, e[n], e[r], o, e.scale)
}
const OP = ["x", "scaleX", "originX"]
  , MP = ["y", "scaleY", "originY"];
function Jn(t, e) {
    ih(t.x, e, OP),
    ih(t.y, e, MP)
}
function Wy(t, e) {
    return $y(TP(t.getBoundingClientRect(), e))
}
function LP(t, e, n) {
    const r = Wy(t, n)
      , {scroll: i} = e;
    return i && (Bt(r.x, i.offset.x),
    Bt(r.y, i.offset.y)),
    r
}
const Gy = ({current: t})=>t ? t.ownerDocument.defaultView : null
  , RP = new WeakMap;
class AP {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ce(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c=>{
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Zo(c, "page").point)
        }
          , s = (c,f)=>{
            const {drag: d, dragPropagation: m, onDragStart: y} = this.getProps();
            if (d && !m && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = iy(d),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Qe(S=>{
                let g = this.getAxisMotionValue(S).get() || 0;
                if (vt.test(g)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const p = h.layout.layoutBox[S];
                        p && (g = $e(p) * (parseFloat(g) / 100))
                    }
                }
                this.originPoint[S] = g
            }
            ),
            y && z.update(()=>y(c, f), !1, !0);
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , o = (c,f)=>{
            const {dragPropagation: d, dragDirectionLock: m, onDirectionLock: y, onDrag: v} = this.getProps();
            if (!d && !this.openGlobalLock)
                return;
            const {offset: S} = f;
            if (m && this.currentDirection === null) {
                this.currentDirection = jP(S),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, S),
            this.updateAxis("y", f.point, S),
            this.visualElement.render(),
            v && v(c, f)
        }
          , l = (c,f)=>this.stop(c, f)
          , a = ()=>Qe(c=>{
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Fy(e,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Gy(this.visualElement)
        })
    }
    stop(e, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && z.update(()=>s(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !fs(e, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + r[e];
        this.constraints && this.constraints[e] && (o = wP(o, this.constraints[e], this.elastic[e])),
        s.set(o)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , s = this.constraints;
        n && Xn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = xP(i.layoutBox, n) : this.constraints = !1,
        this.elastic = CP(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Qe(o=>{
            this.getAxisMotionValue(o) && (this.constraints[o] = kP(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !Xn(e))
            return !1;
        const r = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = LP(r, i.root, this.visualElement.getTransformPagePoint());
        let o = SP(i.layout.layoutBox, s);
        if (n) {
            const l = n(EP(o));
            this.hasMutatedConstraints = !!l,
            l && (o = $y(l))
        }
        return o
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Qe(c=>{
            if (!fs(c, n, this.currentDirection))
                return;
            let f = a && a[c] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , m = i ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? e[c] : 0,
                bounceStiffness: d,
                bounceDamping: m,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(c, y)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(e, n) {
        const r = this.getAxisMotionValue(e);
        return r.start(Kc(e, r, 0, n))
    }
    stopAnimation() {
        Qe(e=>this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Qe(e=>{
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Qe(n=>{
            const {drag: r} = this.getProps();
            if (!fs(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(e[n] - J(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Xn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Qe(o=>{
            const l = this.getAxisMotionValue(o);
            if (l) {
                const a = l.get();
                i[o] = PP({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Qe(o=>{
            if (!fs(o, e, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: a, max: u} = this.constraints[o];
            l.set(J(a, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        RP.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Tt(e, "pointerdown", a=>{
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = ()=>{
            const {dragConstraints: a} = this.getProps();
            Xn(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const o = Ct(window, "resize", ()=>this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u})=>{
            this.isDragging && u && (Qe(c=>{
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += a[c].translate,
                f.set(f.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=uu, dragMomentum: l=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function fs(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function jP(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class NP extends cn {
    constructor(e) {
        super(e),
        this.removeGroupControls = ie,
        this.removeListeners = ie,
        this.controls = new AP(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ie
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const sh = t=>(e,n)=>{
    t && z.update(()=>t(e, n))
}
;
class DP extends cn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ie
    }
    onPointerDown(e) {
        this.session = new Fy(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Gy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: sh(e),
            onStart: sh(n),
            onMove: r,
            onEnd: (s,o)=>{
                delete this.session,
                i && z.update(()=>i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Tt(this.node.current, "pointerdown", e=>this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function bP() {
    const t = M.useContext(Mc);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: r} = t
      , i = M.useId();
    return M.useEffect(()=>r(i), []),
    !e && n ? [!1, ()=>n && n(i)] : [!0]
}
const Fs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function oh(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Ar = {
    correct: (t,e)=>{
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (A.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = oh(t, e.target.x)
          , r = oh(t, e.target.y);
        return `${n}% ${r}%`
    }
}
  , VP = {
    correct: (t,{treeScale: e, projectionDelta: n})=>{
        const r = t
          , i = on.parse(t);
        if (i.length > 5)
            return r;
        const s = on.createTransformer(t)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * e.x
          , a = n.y.scale * e.y;
        i[0 + o] /= l,
        i[1 + o] /= a;
        const u = J(l, a, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
class zP extends zu.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = e;
        Kw(IP),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Fs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        e.isPresent !== s && (s ? o.promote() : o.relegate() || z.postRender(()=>{
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        queueMicrotask(()=>{
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Qy(t) {
    const [e,n] = bP()
      , r = M.useContext(Bg);
    return zu.createElement(zP, {
        ...t,
        layoutGroup: r,
        switchLayoutGroup: M.useContext($g),
        isPresent: e,
        safeToRemove: n
    })
}
const IP = {
    borderRadius: {
        ...Ar,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ar,
    borderTopRightRadius: Ar,
    borderBottomLeftRadius: Ar,
    borderBottomRightRadius: Ar,
    boxShadow: VP
}
  , Ky = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , FP = Ky.length
  , lh = t=>typeof t == "string" ? parseFloat(t) : t
  , ah = t=>typeof t == "number" || A.test(t);
function BP(t, e, n, r, i, s) {
    i ? (t.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, $P(r)),
    t.opacityExit = J(e.opacity !== void 0 ? e.opacity : 1, 0, UP(r))) : s && (t.opacity = J(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < FP; o++) {
        const l = `border${Ky[o]}Radius`;
        let a = uh(e, l)
          , u = uh(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || ah(a) === ah(u) ? (t[l] = Math.max(J(lh(a), lh(u), r), 0),
        (vt.test(u) || vt.test(a)) && (t[l] += "%")) : t[l] = u
    }
    (e.rotate || n.rotate) && (t.rotate = J(e.rotate || 0, n.rotate || 0, r))
}
function uh(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const $P = Yy(0, .5, gy)
  , UP = Yy(.5, .95, ie);
function Yy(t, e, n) {
    return r=>r < t ? 0 : r > e ? 1 : n(hr(t, e, r))
}
function ch(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Ge(t, e) {
    ch(t.x, e.x),
    ch(t.y, e.y)
}
function fh(t, e, n, r, i) {
    return t -= e,
    t = Co(t, 1 / n, r),
    i !== void 0 && (t = Co(t, 1 / i, r)),
    t
}
function HP(t, e=0, n=1, r=.5, i, s=t, o=t) {
    if (vt.test(e) && (e = parseFloat(e),
    e = J(o.min, o.max, e / 100) - o.min),
    typeof e != "number")
        return;
    let l = J(s.min, s.max, r);
    t === s && (l -= e),
    t.min = fh(t.min, e, n, l, i),
    t.max = fh(t.max, e, n, l, i)
}
function dh(t, e, [n,r,i], s, o) {
    HP(t, e[n], e[r], e[i], e.scale, s, o)
}
const WP = ["x", "scaleX", "originX"]
  , GP = ["y", "scaleY", "originY"];
function hh(t, e, n, r) {
    dh(t.x, e, WP, n ? n.x : void 0, r ? r.x : void 0),
    dh(t.y, e, GP, n ? n.y : void 0, r ? r.y : void 0)
}
function ph(t) {
    return t.translate === 0 && t.scale === 1
}
function Xy(t) {
    return ph(t.x) && ph(t.y)
}
function QP(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function Zy(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}
function mh(t) {
    return $e(t.x) / $e(t.y)
}
class KP {
    constructor() {
        this.members = []
    }
    add(e) {
        Yc(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Xc(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i=>e === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(e, n) {
        const r = this.lead;
        if (e !== r && (this.prevLead = r,
        this.lead = e,
        e.show(),
        r)) {
            r.instance && r.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = r,
            n && (e.resumeFrom.preserveOpacity = !0),
            r.snapshot && (e.snapshot = r.snapshot,
            e.snapshot.latestValues = r.animationValues || r.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e=>{
            const {options: n, resumingFrom: r} = e;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e=>{
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function gh(t, e, n) {
    let r = "";
    const i = t.x.translate / e.x
      , s = t.y.translate / e.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (r += `rotate(${a}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const o = t.x.scale * e.x
      , l = t.y.scale * e.y;
    return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`),
    r || "none"
}
const YP = (t,e)=>t.depth - e.depth;
class XP {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Yc(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Xc(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(YP),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function ZP(t, e) {
    const n = performance.now()
      , r = ({timestamp: i})=>{
        const s = i - n;
        s >= e && (lt(r),
        t(s - e))
    }
    ;
    return z.read(r, !0),
    ()=>lt(r)
}
function qP(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}
function JP(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function ek(t, e, n) {
    const r = be(t) ? t : pr(t);
    return r.start(Kc("", r, e, n)),
    r.animation
}
const yh = ["", "X", "Y", "Z"]
  , tk = {
    visibility: "hidden"
}
  , vh = 1e3;
let nk = 0;
const wn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function qy({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=e == null ? void 0 : e()) {
            this.id = nk++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                wn.totalNodes = wn.resolvedTargetDeltas = wn.recalculatedProjection = 0,
                this.nodes.forEach(sk),
                this.nodes.forEach(ck),
                this.nodes.forEach(fk),
                this.nodes.forEach(ok),
                qP(wn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new XP)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Zc),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = JP(o),
            this.instance = o;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            t) {
                let f;
                const d = ()=>this.root.updateBlockedByResize = !1;
                t(o, ()=>{
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = ZP(d, 250),
                    Fs.hasAnimatedSinceResize && (Fs.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(xh))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: m, layout: y})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || gk
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: g} = c.getProps()
                  , h = !this.targetLayout || !Zy(this.targetLayout, y) || m
                  , p = !d && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, p);
                    const w = {
                        ...Qc(v, "layout"),
                        onPlay: S,
                        onComplete: g
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    d || xh(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            lt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(dk),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(wh);
                return
            }
            this.isUpdating || this.nodes.forEach(ak),
            this.isUpdating = !1,
            this.nodes.forEach(uk),
            this.nodes.forEach(rk),
            this.nodes.forEach(ik),
            this.clearAllSnapshots();
            const l = performance.now();
            ve.delta = sn(0, 1e3 / 60, l - ve.timestamp),
            ve.timestamp = l,
            ve.isProcessing = !0,
            Il.update.process(ve),
            Il.preRender.process(ve),
            Il.render.process(ve),
            ve.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(lk),
            this.sharedNodes.forEach(hk)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            z.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ce(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !Xy(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && (l || vn(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)),
            yk(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return ce();
            const l = o.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (Bt(l.x, a.offset.x),
            Bt(l.y, a.offset.y)),
            l
        }
        removeElementScroll(o) {
            const l = ce();
            Ge(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: f} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        Ge(l, o);
                        const {scroll: d} = this.root;
                        d && (Bt(l.x, -d.offset.x),
                        Bt(l.y, -d.offset.y))
                    }
                    Bt(l.x, c.offset.x),
                    Bt(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(o, l=!1) {
            const a = ce();
            Ge(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Jn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                vn(c.latestValues) && Jn(a, c.latestValues)
            }
            return vn(this.latestValues) && Jn(a, this.latestValues),
            a
        }
        removeTransform(o) {
            const l = ce();
            Ge(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !vn(u.latestValues))
                    continue;
                cu(u.latestValues) && u.updateSnapshot();
                const c = ce()
                  , f = u.measurePageBox();
                Ge(c, f),
                hh(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return vn(this.latestValues) && hh(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = ve.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ce(),
                    this.relativeTargetOrigin = ce(),
                    Jr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                    Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ce(),
                    this.targetWithTransforms = ce()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    vP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ge(this.target, this.layout.layoutBox),
                    Hy(this.target, this.targetDelta)) : Ge(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ce(),
                        this.relativeTargetOrigin = ce(),
                        Jr(this.relativeTargetOrigin, this.target, m.target),
                        Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    wn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || cu(this.parent.latestValues) || Uy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ve.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            Ge(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , m = this.treeScale.y;
            _P(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {target: y} = l;
            if (!y) {
                this.projectionTransform && (this.projectionDelta = qn(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = qn(),
            this.projectionDeltaWithTransform = qn());
            const v = this.projectionTransform;
            qr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            this.projectionTransform = gh(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== m) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y)),
            wn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = qn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const d = ce()
              , m = a ? a.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , v = m !== y
              , S = this.getStack()
              , g = !S || S.members.length <= 1
              , h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(mk));
            this.animationProgress = 0;
            let p;
            this.mixTargetDelta = w=>{
                const P = w / 1e3;
                Sh(f.x, o.x, P),
                Sh(f.y, o.y, P),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                pk(this.relativeTarget, this.relativeTargetOrigin, d, P),
                p && QP(this.relativeTarget, p) && (this.isProjectionDirty = !1),
                p || (p = ce()),
                Ge(p, this.relativeTarget)),
                v && (this.animationValues = c,
                BP(c, u, this.latestValues, P, h, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = P
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (lt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = z.update(()=>{
                Fs.hasAnimatedSinceResize = !0,
                this.currentAnimation = ek(0, vh, {
                    ...o,
                    onUpdate: l=>{
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: ()=>{
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vh),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && Jy(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ce();
                    const f = $e(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min,
                    a.x.max = a.x.min + f;
                    const d = $e(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min,
                    a.y.max = a.y.min + d
                }
                Ge(l, a),
                Jn(l, c),
                qr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new KP),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: a} = o;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
            !l)
                return;
            const u = {};
            for (let c = 0; c < yh.length; c++) {
                const f = "rotate" + yh[c];
                a[f] && (u[f] = a[f],
                o.setStaticValue(f, 0))
            }
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return tk;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Is(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = Is(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !vn(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = gh(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: m, y} = this.projectionDelta;
            u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in yo) {
                if (d[v] === void 0)
                    continue;
                const {correct: S, applyTo: g} = yo[v]
                  , h = u.transform === "none" ? d[v] : S(d[v], f);
                if (g) {
                    const p = g.length;
                    for (let w = 0; w < p; w++)
                        u[g[w]] = h
                } else
                    u[v] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Is(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o=>{
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(wh),
            this.root.sharedNodes.clear()
        }
    }
}
function rk(t) {
    t.updateLayout()
}
function ik(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = t.layout
          , {animationType: s} = t.options
          , o = n.source !== t.layout.source;
        s === "size" ? Qe(f=>{
            const d = o ? n.measuredBox[f] : n.layoutBox[f]
              , m = $e(d);
            d.min = r[f].min,
            d.max = d.min + m
        }
        ) : Jy(s, n.layoutBox, r) && Qe(f=>{
            const d = o ? n.measuredBox[f] : n.layoutBox[f]
              , m = $e(r[f]);
            d.max = d.min + m,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[f].max = t.relativeTarget[f].min + m)
        }
        );
        const l = qn();
        qr(l, r, n.layoutBox);
        const a = qn();
        o ? qr(a, t.applyTransform(i, !0), n.measuredBox) : qr(a, r, n.layoutBox);
        const u = !Xy(l);
        let c = !1;
        if (!t.resumeFrom) {
            const f = t.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: m} = f;
                if (d && m) {
                    const y = ce();
                    Jr(y, n.layoutBox, d.layoutBox);
                    const v = ce();
                    Jr(v, r, m.layoutBox),
                    Zy(y, v) || (c = !0),
                    f.options.layoutRoot && (t.relativeTarget = v,
                    t.relativeTargetOrigin = y,
                    t.relativeParent = f)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (t.isLead()) {
        const {onExitComplete: r} = t.options;
        r && r()
    }
    t.options.transition = void 0
}
function sk(t) {
    wn.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function ok(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function lk(t) {
    t.clearSnapshot()
}
function wh(t) {
    t.clearMeasurements()
}
function ak(t) {
    t.isLayoutDirty = !1
}
function uk(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function xh(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function ck(t) {
    t.resolveTargetDelta()
}
function fk(t) {
    t.calcProjection()
}
function dk(t) {
    t.resetRotation()
}
function hk(t) {
    t.removeLeadSnapshot()
}
function Sh(t, e, n) {
    t.translate = J(e.translate, 0, n),
    t.scale = J(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Ph(t, e, n, r) {
    t.min = J(e.min, n.min, r),
    t.max = J(e.max, n.max, r)
}
function pk(t, e, n, r) {
    Ph(t.x, e.x, n.x, r),
    Ph(t.y, e.y, n.y, r)
}
function mk(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const gk = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , kh = t=>typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t)
  , Ch = kh("applewebkit/") && !kh("chrome/") ? Math.round : ie;
function Eh(t) {
    t.min = Ch(t.min),
    t.max = Ch(t.max)
}
function yk(t) {
    Eh(t.x),
    Eh(t.y)
}
function Jy(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !au(mh(e), mh(n), .2)
}
const vk = qy({
    attachResizeListener: (t,e)=>Ct(t, "resize", e),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Xl = {
    current: void 0
}
  , ev = qy({
    measureScroll: t=>({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: ()=>{
        if (!Xl.current) {
            const t = new vk({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            Xl.current = t
        }
        return Xl.current
    }
    ,
    resetTransform: (t,e)=>{
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t=>window.getComputedStyle(t).position === "fixed"
})
  , wk = {
    pan: {
        Feature: DP
    },
    drag: {
        Feature: NP,
        ProjectionNode: ev,
        MeasureLayout: Qy
    }
}
  , xk = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Sk(t) {
    const e = xk.exec(t);
    if (!e)
        return [, ];
    const [,n,r] = e;
    return [n, r]
}
function du(t, e, n=1) {
    const [r,i] = Sk(t);
    if (!r)
        return;
    const s = window.getComputedStyle(e).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return Dy(o) ? parseFloat(o) : o
    } else
        return eu(i) ? du(i, e, n + 1) : i
}
function Pk(t, {...e}, n) {
    const r = t.current;
    if (!(r instanceof Element))
        return {
            target: e,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    t.values.forEach(i=>{
        const s = i.get();
        if (!eu(s))
            return;
        const o = du(s, r);
        o && i.set(o)
    }
    );
    for (const i in e) {
        const s = e[i];
        if (!eu(s))
            continue;
        const o = du(s, r);
        o && (e[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = s))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const kk = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , tv = t=>kk.has(t)
  , Ck = t=>Object.keys(t).some(tv)
  , Th = t=>t === Nn || t === A
  , _h = (t,e)=>parseFloat(t.split(", ")[e])
  , Oh = (t,e)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return _h(i[1], e);
    {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? _h(s[1], t) : 0
    }
}
  , Ek = new Set(["x", "y", "z"])
  , Tk = Li.filter(t=>!Ek.has(t));
function _k(t) {
    const e = [];
    return Tk.forEach(n=>{
        const r = t.getValue(n);
        r !== void 0 && (e.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e.length && t.render(),
    e
}
const mr = {
    width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t,{top: e})=>parseFloat(e),
    left: (t,{left: e})=>parseFloat(e),
    bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
    right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
    x: Oh(4, 13),
    y: Oh(5, 14)
};
mr.translateX = mr.x;
mr.translateY = mr.y;
const Ok = (t,e,n)=>{
    const r = e.measureViewportBox()
      , i = e.current
      , s = getComputedStyle(i)
      , {display: o} = s
      , l = {};
    o === "none" && e.setStaticValue("display", t.display || "block"),
    n.forEach(u=>{
        l[u] = mr[u](r, s)
    }
    ),
    e.render();
    const a = e.measureViewportBox();
    return n.forEach(u=>{
        const c = e.getValue(u);
        c && c.jump(l[u]),
        t[u] = mr[u](a, s)
    }
    ),
    t
}
  , Mk = (t,e,n={},r={})=>{
    e = {
        ...e
    },
    r = {
        ...r
    };
    const i = Object.keys(e).filter(tv);
    let s = []
      , o = !1;
    const l = [];
    if (i.forEach(a=>{
        const u = t.getValue(a);
        if (!t.hasValue(a))
            return;
        let c = n[a]
          , f = Rr(c);
        const d = e[a];
        let m;
        if (wo(d)) {
            const y = d.length
              , v = d[0] === null ? 1 : 0;
            c = d[v],
            f = Rr(c);
            for (let S = v; S < y && d[S] !== null; S++)
                m ? Jo(Rr(d[S]) === m) : m = Rr(d[S])
        } else
            m = Rr(d);
        if (f !== m)
            if (Th(f) && Th(m)) {
                const y = u.get();
                typeof y == "string" && u.set(parseFloat(y)),
                typeof d == "string" ? e[a] = parseFloat(d) : Array.isArray(d) && m === A && (e[a] = d.map(parseFloat))
            } else
                f != null && f.transform && (m != null && m.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(m.transform(c)) : e[a] = f.transform(d) : (o || (s = _k(t),
                o = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : e[a],
                u.jump(d))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = Ok(e, t, l);
        return s.length && s.forEach(([c,f])=>{
            t.getValue(c).set(f)
        }
        ),
        t.render(),
        Qo && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: e,
            transitionEnd: r
        }
}
;
function Lk(t, e, n, r) {
    return Ck(e) ? Mk(t, e, n, r) : {
        target: e,
        transitionEnd: r
    }
}
const Rk = (t,e,n,r)=>{
    const i = Pk(t, e, r);
    return e = i.target,
    r = i.transitionEnd,
    Lk(t, e, n, r)
}
  , hu = {
    current: null
}
  , nv = {
    current: !1
};
function Ak() {
    if (nv.current = !0,
    !!Qo)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = ()=>hu.current = t.matches;
            t.addListener(e),
            e()
        } else
            hu.current = !1
}
function jk(t, e, n) {
    const {willChange: r} = e;
    for (const i in e) {
        const s = e[i]
          , o = n[i];
        if (be(s))
            t.addValue(i, s),
            ko(r) && r.add(i);
        else if (be(o))
            t.addValue(i, pr(s, {
                owner: t
            })),
            ko(r) && r.remove(i);
        else if (o !== s)
            if (t.hasValue(i)) {
                const l = t.getValue(i);
                !l.hasAnimated && l.set(s)
            } else {
                const l = t.getStaticValue(i);
                t.addValue(i, pr(l !== void 0 ? l : s, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const Mh = new WeakMap
  , rv = Object.keys(wi)
  , Nk = rv.length
  , Lh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Dk = Ac.length;
class bk {
    constructor({parent: e, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>z.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = s;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = e,
        this.props = n,
        this.presenceContext = r,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = Yo(n),
        this.isVariantNode = Fg(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            l[f] !== void 0 && be(d) && (d.set(l[f], !1),
            ko(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e,
        Mh.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
        nv.current || Ak(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : hu.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Mh.delete(this.current),
        this.projection && this.projection.unmount(),
        lt(this.notifyUpdate),
        lt(this.render),
        this.valueSubscriptions.forEach(e=>e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features)
            this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const r = jn.has(e)
          , i = n.on("change", o=>{
            this.latestValues[e] = o,
            this.props.onUpdate && z.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, ()=>{
            i(),
            s()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...n}, r, i, s) {
        let o, l;
        for (let a = 0; a < Nk; a++) {
            const u = rv[a]
              , {isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: m} = wi[u];
            d && (o = d),
            c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
            m && (l = m))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: m} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || f && Xn(f),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: d,
                layoutRoot: m
            })
        }
        return l
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n=!0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Lh.length; r++) {
            const i = Lh[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = e["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = jk(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < Dk; r++) {
            const i = Ac[r]
              , s = this.props[i];
            (vi(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            ()=>n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e),
        this.bindToMotionValue(e, n)),
        this.values.set(e, n),
        this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let r = this.values.get(e);
        return r === void 0 && n !== void 0 && (r = pr(n, {
            owner: this
        }),
        this.addValue(e, r)),
        r
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = Ic(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, e);
        return s !== void 0 && !be(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new Zc),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class iv extends bk {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: r}) {
        delete n[e],
        delete r[e]
    }
    makeTargetAnimatableFromInstance({transition: e, transitionEnd: n, ...r}, {transformValues: i}, s) {
        let o = eP(r, e || {}, this);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        o && (o = i(o))),
        s) {
            qS(this, r, o);
            const l = Rk(this, r, o, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...r
        }
    }
}
function Vk(t) {
    return window.getComputedStyle(t)
}
class zk extends iv {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(e, n) {
        if (jn.has(n)) {
            const r = Gc(n);
            return r && r.default || 0
        } else {
            const r = Vk(e)
              , i = (Wg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return Wy(e, n)
    }
    build(e, n, r, i) {
        Nc(e, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return zc(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        be(e) && (this.childSubscription = e.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(e, n, r, i) {
        Zg(e, n, r, i)
    }
}
class Ik extends iv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (jn.has(n)) {
            const r = Gc(n);
            return r && r.default || 0
        }
        return n = qg.has(n) ? n : Lc(n),
        e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ce()
    }
    scrapeMotionValuesFromProps(e, n) {
        return ey(e, n)
    }
    build(e, n, r, i) {
        bc(e, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, r, i) {
        Jg(e, n, r, i)
    }
    mount(e) {
        this.isSVGTag = Vc(e.tagName),
        super.mount(e)
    }
}
const Fk = (t,e)=>jc(t) ? new Ik(e,{
    enableHardwareAcceleration: !1
}) : new zk(e,{
    enableHardwareAcceleration: !0
})
  , Bk = {
    layout: {
        ProjectionNode: ev,
        MeasureLayout: Qy
    }
}
  , $k = {
    ...pP,
    ...Vx,
    ...wk,
    ...Bk
}
  , B = Gw((t,e)=>Cx(t, e, $k, Fk));
function Uk(t, e, n) {
    var r;
    if (typeof t == "string") {
        let i = document;
        e && (Jo(!!e.current),
        i = e.current),
        n ? ((r = n[t]) !== null && r !== void 0 || (n[t] = i.querySelectorAll(t)),
        t = n[t]) : t = i.querySelectorAll(t)
    } else
        t instanceof Element && (t = [t]);
    return Array.from(t || [])
}
const Bs = new WeakMap;
let zt;
function Hk(t, e) {
    if (e) {
        const {inlineSize: n, blockSize: r} = e[0];
        return {
            width: n,
            height: r
        }
    } else
        return t instanceof SVGElement && "getBBox"in t ? t.getBBox() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }
}
function Wk({target: t, contentRect: e, borderBoxSize: n}) {
    var r;
    (r = Bs.get(t)) === null || r === void 0 || r.forEach(i=>{
        i({
            target: t,
            contentSize: e,
            get size() {
                return Hk(t, n)
            }
        })
    }
    )
}
function Gk(t) {
    t.forEach(Wk)
}
function Qk() {
    typeof ResizeObserver > "u" || (zt = new ResizeObserver(Gk))
}
function Kk(t, e) {
    zt || Qk();
    const n = Uk(t);
    return n.forEach(r=>{
        let i = Bs.get(r);
        i || (i = new Set,
        Bs.set(r, i)),
        i.add(e),
        zt == null || zt.observe(r)
    }
    ),
    ()=>{
        n.forEach(r=>{
            const i = Bs.get(r);
            i == null || i.delete(e),
            i != null && i.size || zt == null || zt.unobserve(r)
        }
        )
    }
}
const $s = new Set;
let ei;
function Yk() {
    ei = ()=>{
        const t = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , e = {
            target: window,
            size: t,
            contentSize: t
        };
        $s.forEach(n=>n(e))
    }
    ,
    window.addEventListener("resize", ei)
}
function Xk(t) {
    return $s.add(t),
    ei || Yk(),
    ()=>{
        $s.delete(t),
        !$s.size && ei && (ei = void 0)
    }
}
function Zk(t, e) {
    return typeof t == "function" ? Xk(t) : Kk(t, e)
}
const qk = 50
  , Rh = ()=>({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , Jk = ()=>({
    time: 0,
    x: Rh(),
    y: Rh()
})
  , eC = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Ah(t, e, n, r) {
    const i = n[e]
      , {length: s, position: o} = eC[e]
      , l = i.current
      , a = n.time;
    i.current = t["scroll" + o],
    i.scrollLength = t["scroll" + s] - t["client" + s],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = hr(0, i.scrollLength, i.current);
    const u = r - a;
    i.velocity = u > qk ? 0 : Wc(i.current - l, u)
}
function tC(t, e, n) {
    Ah(t, "x", e, n),
    Ah(t, "y", e, n),
    e.time = n
}
function nC(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let r = t;
    for (; r && r !== e; )
        if (r instanceof HTMLElement)
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            const i = r.getBoundingClientRect();
            r = r.parentElement;
            const s = r.getBoundingClientRect();
            n.x += i.left - s.left,
            n.y += i.top - s.top
        } else if (r instanceof SVGGraphicsElement) {
            const {x: i, y: s} = r.getBBox();
            n.x += i,
            n.y += s;
            let o = null
              , l = r.parentNode;
            for (; !o; )
                l.tagName === "svg" && (o = l),
                l = r.parentNode;
            r = o
        } else
            break;
    return n
}
const rC = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , pu = {
    start: 0,
    center: .5,
    end: 1
};
function jh(t, e, n=0) {
    let r = 0;
    if (pu[t] !== void 0 && (t = pu[t]),
    typeof t == "string") {
        const i = parseFloat(t);
        t.endsWith("px") ? r = i : t.endsWith("%") ? t = i / 100 : t.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : t = i
    }
    return typeof t == "number" && (r = e * t),
    n + r
}
const iC = [0, 0];
function sC(t, e, n, r) {
    let i = Array.isArray(t) ? t : iC
      , s = 0
      , o = 0;
    return typeof t == "number" ? i = [t, t] : typeof t == "string" && (t = t.trim(),
    t.includes(" ") ? i = t.split(" ") : i = [t, pu[t] ? t : "0"]),
    s = jh(i[0], n, r),
    o = jh(i[1], e),
    s - o
}
const oC = {
    x: 0,
    y: 0
};
function lC(t) {
    return "getBBox"in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}
function aC(t, e, n) {
    let {offset: r=rC.All} = n;
    const {target: i=t, axis: s="y"} = n
      , o = s === "y" ? "height" : "width"
      , l = i !== t ? nC(i, t) : oC
      , a = i === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : lC(i)
      , u = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[s].offset.length = 0;
    let c = !e[s].interpolate;
    const f = r.length;
    for (let d = 0; d < f; d++) {
        const m = sC(r[d], u[o], a[o], l[s]);
        !c && m !== e[s].interpolatorOffsets[d] && (c = !0),
        e[s].offset[d] = m
    }
    c && (e[s].interpolate = Hc(e[s].offset, My(r)),
    e[s].interpolatorOffsets = [...e[s].offset]),
    e[s].progress = e[s].interpolate(e[s].current)
}
function uC(t, e=t, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    e !== t) {
        let r = e;
        for (; r && r !== t; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth,
    n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight,
    n.x.containerLength = t.clientWidth,
    n.y.containerLength = t.clientHeight
}
function cC(t, e, n, r={}) {
    return {
        measure: ()=>uC(t, r.target, n),
        update: i=>{
            tC(t, n, i),
            (r.offset || r.target) && aC(t, n, r)
        }
        ,
        notify: ()=>e(n)
    }
}
const jr = new WeakMap
  , Nh = new WeakMap
  , Zl = new WeakMap
  , Dh = t=>t === document.documentElement ? window : t;
function fC(t, {container: e=document.documentElement, ...n}={}) {
    let r = Zl.get(e);
    r || (r = new Set,
    Zl.set(e, r));
    const i = Jk()
      , s = cC(e, t, i, n);
    if (r.add(s),
    !jr.has(e)) {
        const l = ()=>{
            for (const d of r)
                d.measure()
        }
          , a = ()=>{
            for (const d of r)
                d.update(ve.timestamp)
        }
          , u = ()=>{
            for (const d of r)
                d.notify()
        }
          , c = ()=>{
            z.read(l, !1, !0),
            z.read(a, !1, !0),
            z.update(u, !1, !0)
        }
        ;
        jr.set(e, c);
        const f = Dh(e);
        window.addEventListener("resize", c, {
            passive: !0
        }),
        e !== document.documentElement && Nh.set(e, Zk(e, c)),
        f.addEventListener("scroll", c, {
            passive: !0
        })
    }
    const o = jr.get(e);
    return z.read(o, !1, !0),
    ()=>{
        var l;
        lt(o);
        const a = Zl.get(e);
        if (!a || (a.delete(s),
        a.size))
            return;
        const u = jr.get(e);
        jr.delete(e),
        u && (Dh(e).removeEventListener("scroll", u),
        (l = Nh.get(e)) === null || l === void 0 || l(),
        window.removeEventListener("resize", u))
    }
}
function dC(t) {
    t.values.forEach(e=>e.stop())
}
function hC() {
    const t = new Set
      , e = {
        subscribe(n) {
            return t.add(n),
            ()=>void t.delete(n)
        },
        start(n, r) {
            const i = [];
            return t.forEach(s=>{
                i.push(Iy(s, n, {
                    transitionOverride: r
                }))
            }
            ),
            Promise.all(i)
        },
        set(n) {
            return t.forEach(r=>{
                ZS(r, n)
            }
            )
        },
        stop() {
            t.forEach(n=>{
                dC(n)
            }
            )
        },
        mount() {
            return ()=>{
                e.stop()
            }
        }
    };
    return e
}
function pC(t, e) {
    let n;
    const r = ()=>{
        const {currentTime: i} = e
          , o = (i === null ? 0 : i.value) / 100;
        n !== o && t(o),
        n = o
    }
    ;
    return z.update(r, !0),
    ()=>lt(r)
}
const mC = Ay(()=>window.ScrollTimeline !== void 0);
function gC() {
    const t = Fc(hC);
    return Vg(t.mount, []),
    t
}
const sv = gC;
class yC {
    constructor() {
        this.componentControls = new Set
    }
    subscribe(e) {
        return this.componentControls.add(e),
        ()=>this.componentControls.delete(e)
    }
    start(e, n) {
        this.componentControls.forEach(r=>{
            r.start(e.nativeEvent || e, n)
        }
        )
    }
}
const vC = ()=>new yC;
function wC() {
    return Fc(vC)
}
function xC({source: t, axis: e="y"}) {
    const n = {
        value: 0
    }
      , r = fC(i=>{
        n.value = i[e].progress * 100
    }
    , {
        container: t,
        axis: e
    });
    return {
        currentTime: n,
        cancel: r
    }
}
const ql = new Map;
function SC({source: t=document.documentElement, axis: e="y"}={}) {
    ql.has(t) || ql.set(t, {});
    const n = ql.get(t);
    return n[e] || (n[e] = mC() ? new ScrollTimeline({
        source: t,
        axis: e
    }) : xC({
        source: t,
        axis: e
    })),
    n[e]
}
function PC(t, e) {
    const n = SC(e);
    return typeof t == "function" ? pC(t, n) : t.attachTimeline(n)
}
const kC = [{
    companyName: "📋✅ Registration and Check-in",
    date: "1:00 - 1:30PM",
    location: "Internship | Chicago, IL",
    description: "• Participants arrive, register, and get settled in. Organizers provide any necessary information and distribute materials.",
    imageUrl: "msipng.png"
}, {
    companyName: "🗣️📣 Open Ceremony",
    date: "1:30 - 2:00PM",
    description: "•Welcome speech by organizers, introduction of sponsors and judges, overview of rules and guidelines, and explanation of the hackathon theme or challenges.",
    imageUrl: "nasapng.png"
}, {
    companyName: "👨‍💻👩‍💻 Begin Hacking!",
    date: "2:00PM - ",
    location: "Executive Board | Chicago, IL",
    description: "• Start working on your projects! (9 hours to complete) <br> • Mentors and organizers are available for assistance. Snacks and refreshments are provided throughout the session.</br>",
    imageUrl: "shpe.png"
}, {
    companyName: "😋🍴 Dinner Break",
    date: "5:00 - 6:00PM",
    location: "Executive Board | Chicago, IL",
    description: "• Take a break to enjoy a provided dinner! <br> •  This is also a good opportunity for networking and socializing with other participants. </br>",
    imageUrl: "shpe.png"
}, {
    companyName: "⌛️😅 Project Deadline",
    date: "- 11:00PM",
    location: "Executive Board | Chicago, IL",
    description: "•  Put your final touches on their projects, prepare presentations, and ensure everything is ready for judging.",
    imageUrl: "shpe.png"
}, {
    companyName: "👑🥳 Winners Announcement",
    date: "11:00 pm - 11:30 pm",
    location: "Executive Board | Chicago, IL",
    description: "• ACM will announce the winners of the hackathon! <br> • Prizes are distributed, and participants celebrate their achievements. </br>",
    imageUrl: "shpe.png"
}, {
    companyName: "👥👋 Networking and Wrap-up",
    date: "11:30 pm - 12:00 pm",
    description: "• Please clean up after yourself and thank you for attending Illinois Institute of Technology Premiere Hackathon!",
    imageUrl: "shpe.png"
}]
  , CC = ()=>x.jsxs(B.div, {
    id: "experience",
    className: " bg-black shadow-inner bg-opacity-100 backdrop-filter-md relative mt-20 z-50 py-20",
    children: [x.jsx(B.h1, {
        className: "text-5xl font-bold text-center mb-32 text-gray-100 ",
        children: "📆Schedule"
    }), x.jsx("div", {
        style: {
            borderRadius: "50px"
        },
        className: "flex flex-wrap justify-center md:w-1/2 w-5/6 mx-auto   overflow-hidden mb-20",
        children: kC.map((t,e)=>x.jsx("div", {
            className: "   bg-zinc-900 shadow-sm overflow-hidden  py-4 mb-1 w-full",
            style: {
                borderRadius: "0px"
            },
            children: x.jsx("div", {
                className: "flex justify-center",
                children: x.jsxs("div", {
                    className: "p-3 text-left w-5/6  sm:ml-0 ml-10 ",
                    children: [x.jsx("p", {
                        className: "text-base text-gray-300 mb-1",
                        children: t.date
                    }), x.jsx("h2", {
                        className: "text-2xl text-gray-300 font-semibold mb-1",
                        children: t.companyName
                    }), x.jsx("p", {
                        className: "text-gray-300 text-sm mb-0 mr-10",
                        dangerouslySetInnerHTML: {
                            __html: t.description
                        }
                    })]
                })
            })
        }, e))
    })]
});
var ne = {}
  , Jc = {}
  , Ni = {}
  , Di = {}
  , ov = "Expected a function"
  , bh = 0 / 0
  , EC = "[object Symbol]"
  , TC = /^\s+|\s+$/g
  , _C = /^[-+]0x[0-9a-f]+$/i
  , OC = /^0b[01]+$/i
  , MC = /^0o[0-7]+$/i
  , LC = parseInt
  , RC = typeof Hi == "object" && Hi && Hi.Object === Object && Hi
  , AC = typeof self == "object" && self && self.Object === Object && self
  , jC = RC || AC || Function("return this")()
  , NC = Object.prototype
  , DC = NC.toString
  , bC = Math.max
  , VC = Math.min
  , Jl = function() {
    return jC.Date.now()
};
function zC(t, e, n) {
    var r, i, s, o, l, a, u = 0, c = !1, f = !1, d = !0;
    if (typeof t != "function")
        throw new TypeError(ov);
    e = Vh(e) || 0,
    Eo(n) && (c = !!n.leading,
    f = "maxWait"in n,
    s = f ? bC(Vh(n.maxWait) || 0, e) : s,
    d = "trailing"in n ? !!n.trailing : d);
    function m(k) {
        var E = r
          , C = i;
        return r = i = void 0,
        u = k,
        o = t.apply(C, E),
        o
    }
    function y(k) {
        return u = k,
        l = setTimeout(g, e),
        c ? m(k) : o
    }
    function v(k) {
        var E = k - a
          , C = k - u
          , L = e - E;
        return f ? VC(L, s - C) : L
    }
    function S(k) {
        var E = k - a
          , C = k - u;
        return a === void 0 || E >= e || E < 0 || f && C >= s
    }
    function g() {
        var k = Jl();
        if (S(k))
            return h(k);
        l = setTimeout(g, v(k))
    }
    function h(k) {
        return l = void 0,
        d && r ? m(k) : (r = i = void 0,
        o)
    }
    function p() {
        l !== void 0 && clearTimeout(l),
        u = 0,
        r = a = i = l = void 0
    }
    function w() {
        return l === void 0 ? o : h(Jl())
    }
    function P() {
        var k = Jl()
          , E = S(k);
        if (r = arguments,
        i = this,
        a = k,
        E) {
            if (l === void 0)
                return y(a);
            if (f)
                return l = setTimeout(g, e),
                m(a)
        }
        return l === void 0 && (l = setTimeout(g, e)),
        o
    }
    return P.cancel = p,
    P.flush = w,
    P
}
function IC(t, e, n) {
    var r = !0
      , i = !0;
    if (typeof t != "function")
        throw new TypeError(ov);
    return Eo(n) && (r = "leading"in n ? !!n.leading : r,
    i = "trailing"in n ? !!n.trailing : i),
    zC(t, e, {
        leading: r,
        maxWait: e,
        trailing: i
    })
}
function Eo(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function")
}
function FC(t) {
    return !!t && typeof t == "object"
}
function BC(t) {
    return typeof t == "symbol" || FC(t) && DC.call(t) == EC
}
function Vh(t) {
    if (typeof t == "number")
        return t;
    if (BC(t))
        return bh;
    if (Eo(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = Eo(e) ? e + "" : e
    }
    if (typeof t != "string")
        return t === 0 ? t : +t;
    t = t.replace(TC, "");
    var n = OC.test(t);
    return n || MC.test(t) ? LC(t.slice(2), n ? 2 : 8) : _C.test(t) ? bh : +t
}
var $C = IC
  , bi = {};
Object.defineProperty(bi, "__esModule", {
    value: !0
});
bi.addPassiveEventListener = function(e, n, r) {
    var i = r.name;
    i || (i = n,
    console.warn("Listener must be a named function.")),
    Us.has(n) || Us.set(n, new Set);
    var s = Us.get(n);
    if (!s.has(i)) {
        var o = function() {
            var l = !1;
            try {
                var a = Object.defineProperty({}, "passive", {
                    get: function() {
                        l = !0
                    }
                });
                window.addEventListener("test", null, a)
            } catch {}
            return l
        }();
        e.addEventListener(n, r, o ? {
            passive: !0
        } : !1),
        s.add(i)
    }
}
;
bi.removePassiveEventListener = function(e, n, r) {
    e.removeEventListener(n, r),
    Us.get(n).delete(r.name || n)
}
;
var Us = new Map;
Object.defineProperty(Di, "__esModule", {
    value: !0
});
var UC = $C
  , HC = GC(UC)
  , WC = bi;
function GC(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var QC = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0,
    HC.default)(e, n)
}
  , X = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function(e, n) {
        if (e) {
            var r = QC(function(i) {
                X.scrollHandler(e)
            }, n);
            X.scrollSpyContainers.push(e),
            (0,
            WC.addPassiveEventListener)(e, "scroll", r)
        }
    },
    isMounted: function(e) {
        return X.scrollSpyContainers.indexOf(e) !== -1
    },
    currentPositionX: function(e) {
        if (e === document) {
            var n = window.pageYOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
        } else
            return e.scrollLeft
    },
    currentPositionY: function(e) {
        if (e === document) {
            var n = window.pageXOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
        } else
            return e.scrollTop
    },
    scrollHandler: function(e) {
        var n = X.scrollSpyContainers[X.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
        n.forEach(function(r) {
            return r(X.currentPositionX(e), X.currentPositionY(e))
        })
    },
    addStateHandler: function(e) {
        X.spySetState.push(e)
    },
    addSpyHandler: function(e, n) {
        var r = X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];
        r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(e),
        e(X.currentPositionX(n), X.currentPositionY(n))
    },
    updateStates: function() {
        X.spySetState.forEach(function(e) {
            return e()
        })
    },
    unmount: function(e, n) {
        X.scrollSpyContainers.forEach(function(r) {
            return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        }),
        X.spySetState && X.spySetState.length && X.spySetState.indexOf(e) > -1 && X.spySetState.splice(X.spySetState.indexOf(e), 1),
        document.removeEventListener("scroll", X.scrollHandler)
    },
    update: function() {
        return X.scrollSpyContainers.forEach(function(e) {
            return X.scrollHandler(e)
        })
    }
};
Di.default = X;
var Pr = {}
  , Vi = {};
Object.defineProperty(Vi, "__esModule", {
    value: !0
});
var KC = function(e, n) {
    var r = e.indexOf("#") === 0 ? e.substring(1) : e
      , i = r ? "#" + r : ""
      , s = window && window.location
      , o = i ? s.pathname + s.search + i : s.pathname + s.search;
    n ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o)
}
  , YC = function() {
    return window.location.hash.replace(/^#/, "")
}
  , XC = function(e) {
    return function(n) {
        return e.contains ? e != n && e.contains(n) : !!(e.compareDocumentPosition(n) & 16)
    }
}
  , ZC = function(e) {
    return getComputedStyle(e).position !== "static"
}
  , ea = function(e, n) {
    for (var r = e.offsetTop, i = e.offsetParent; i && !n(i); )
        r += i.offsetTop,
        i = i.offsetParent;
    return {
        offsetTop: r,
        offsetParent: i
    }
}
  , qC = function(e, n, r) {
    if (r)
        return e === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? n.offsetLeft : n.offsetLeft - e.offsetLeft;
    if (e === document)
        return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    if (ZC(e)) {
        if (n.offsetParent !== e) {
            var i = function(c) {
                return c === e || c === document
            }
              , s = ea(n, i)
              , o = s.offsetTop
              , l = s.offsetParent;
            if (l !== e)
                throw new Error("Seems containerElement is not an ancestor of the Element");
            return o
        }
        return n.offsetTop
    }
    if (n.offsetParent === e.offsetParent)
        return n.offsetTop - e.offsetTop;
    var a = function(c) {
        return c === document
    };
    return ea(n, a).offsetTop - ea(e, a).offsetTop
};
Vi.default = {
    updateHash: KC,
    getHash: YC,
    filterElementInContainer: XC,
    scrollOffset: qC
};
var el = {}
  , ef = {};
Object.defineProperty(ef, "__esModule", {
    value: !0
});
ef.default = {
    defaultEasing: function(e) {
        return e < .5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2
    },
    linear: function(e) {
        return e
    },
    easeInQuad: function(e) {
        return e * e
    },
    easeOutQuad: function(e) {
        return e * (2 - e)
    },
    easeInOutQuad: function(e) {
        return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
    },
    easeInCubic: function(e) {
        return e * e * e
    },
    easeOutCubic: function(e) {
        return --e * e * e + 1
    },
    easeInOutCubic: function(e) {
        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
    },
    easeInQuart: function(e) {
        return e * e * e * e
    },
    easeOutQuart: function(e) {
        return 1 - --e * e * e * e
    },
    easeInOutQuart: function(e) {
        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
    },
    easeInQuint: function(e) {
        return e * e * e * e * e
    },
    easeOutQuint: function(e) {
        return 1 + --e * e * e * e * e
    },
    easeInOutQuint: function(e) {
        return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
    }
};
var tf = {};
Object.defineProperty(tf, "__esModule", {
    value: !0
});
var JC = bi
  , eE = ["mousedown", "mousewheel", "touchmove", "keydown"];
tf.default = {
    subscribe: function(e) {
        return typeof document < "u" && eE.forEach(function(n) {
            return (0,
            JC.addPassiveEventListener)(document, n, e)
        })
    }
};
var zi = {};
Object.defineProperty(zi, "__esModule", {
    value: !0
});
var mu = {
    registered: {},
    scrollEvent: {
        register: function(e, n) {
            mu.registered[e] = n
        },
        remove: function(e) {
            mu.registered[e] = null
        }
    }
};
zi.default = mu;
Object.defineProperty(el, "__esModule", {
    value: !0
});
var tE = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , nE = Vi;
tl(nE);
var rE = ef
  , zh = tl(rE)
  , iE = tf
  , sE = tl(iE)
  , oE = zi
  , pt = tl(oE);
function tl(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var lv = function(e) {
    return zh.default[e.smooth] || zh.default.defaultEasing
}
  , lE = function(e) {
    return typeof e == "function" ? e : function() {
        return e
    }
}
  , aE = function() {
    if (typeof window < "u")
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame
}
  , gu = function() {
    return aE() || function(t, e, n) {
        window.setTimeout(t, n || 1e3 / 60, new Date().getTime())
    }
}()
  , av = function() {
    return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: !1,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
    }
}
  , uv = function(e) {
    var n = e.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollLeft;
    var r = window.pageXOffset !== void 0
      , i = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft
}
  , cv = function(e) {
    var n = e.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollTop;
    var r = window.pageXOffset !== void 0
      , i = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop
}
  , uE = function(e) {
    var n = e.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollWidth - n.offsetWidth;
    var r = document.body
      , i = document.documentElement;
    return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
}
  , cE = function(e) {
    var n = e.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollHeight - n.offsetHeight;
    var r = document.body
      , i = document.documentElement;
    return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
}
  , fE = function t(e, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
        pt.default.registered.end && pt.default.registered.end(i.to, i.target, i.currentPositionY);
        return
    }
    if (i.delta = Math.round(i.targetPosition - i.startPosition),
    i.start === null && (i.start = r),
    i.progress = r - i.start,
    i.percent = i.progress >= i.duration ? 1 : e(i.progress / i.duration),
    i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent),
    i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition),
    i.percent < 1) {
        var s = t.bind(null, e, n);
        gu.call(window, s);
        return
    }
    pt.default.registered.end && pt.default.registered.end(i.to, i.target, i.currentPosition)
}
  , nf = function(e) {
    e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null
}
  , Ii = function(e, n, r, i) {
    n.data = n.data || av(),
    window.clearTimeout(n.data.delayTimeout);
    var s = function() {
        n.data.cancel = !0
    };
    if (sE.default.subscribe(s),
    nf(n),
    n.data.start = null,
    n.data.cancel = !1,
    n.data.startPosition = n.horizontal ? uv(n) : cv(n),
    n.data.targetPosition = n.absolute ? e : e + n.data.startPosition,
    n.data.startPosition === n.data.targetPosition) {
        pt.default.registered.end && pt.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
        return
    }
    n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition),
    n.data.duration = lE(n.duration)(n.data.delta),
    n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration),
    n.data.to = r,
    n.data.target = i;
    var o = lv(n)
      , l = fE.bind(null, o, n);
    if (n && n.delay > 0) {
        n.data.delayTimeout = window.setTimeout(function() {
            pt.default.registered.begin && pt.default.registered.begin(n.data.to, n.data.target),
            gu.call(window, l)
        }, n.delay);
        return
    }
    pt.default.registered.begin && pt.default.registered.begin(n.data.to, n.data.target),
    gu.call(window, l)
}
  , nl = function(e) {
    return e = tE({}, e),
    e.data = e.data || av(),
    e.absolute = !0,
    e
}
  , dE = function(e) {
    Ii(0, nl(e))
}
  , hE = function(e, n) {
    Ii(e, nl(n))
}
  , pE = function(e) {
    e = nl(e),
    nf(e),
    Ii(e.horizontal ? uE(e) : cE(e), e)
}
  , mE = function(e, n) {
    n = nl(n),
    nf(n);
    var r = n.horizontal ? uv(n) : cv(n);
    Ii(e + r, n)
};
el.default = {
    animateTopScroll: Ii,
    getAnimationType: lv,
    scrollToTop: dE,
    scrollToBottom: pE,
    scrollTo: hE,
    scrollMore: mE
};
Object.defineProperty(Pr, "__esModule", {
    value: !0
});
var gE = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , yE = Vi
  , vE = rf(yE)
  , wE = el
  , xE = rf(wE)
  , SE = zi
  , ds = rf(SE);
function rf(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var hs = {}
  , Ih = void 0;
Pr.default = {
    unmount: function() {
        hs = {}
    },
    register: function(e, n) {
        hs[e] = n
    },
    unregister: function(e) {
        delete hs[e]
    },
    get: function(e) {
        return hs[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0]
    },
    setActiveLink: function(e) {
        return Ih = e
    },
    getActiveLink: function() {
        return Ih
    },
    scrollTo: function(e, n) {
        var r = this.get(e);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = gE({}, n, {
            absolute: !1
        });
        var i = n.containerId
          , s = n.container
          , o = void 0;
        i ? o = document.getElementById(i) : s && s.nodeType ? o = s : o = document,
        n.absolute = !0;
        var l = n.horizontal
          , a = vE.default.scrollOffset(o, r, l) + (n.offset || 0);
        if (!n.smooth) {
            ds.default.registered.begin && ds.default.registered.begin(e, r),
            o === document ? n.horizontal ? window.scrollTo(a, 0) : window.scrollTo(0, a) : o.scrollTop = a,
            ds.default.registered.end && ds.default.registered.end(e, r);
            return
        }
        xE.default.animateTopScroll(a, n, e, r)
    }
};
var fv = {
    exports: {}
}
  , PE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , kE = PE
  , CE = kE;
function dv() {}
function hv() {}
hv.resetWarningCache = dv;
var EE = function() {
    function t(r, i, s, o, l, a) {
        if (a !== CE) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    t.isRequired = t;
    function e() {
        return t
    }
    var n = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: hv,
        resetWarningCache: dv
    };
    return n.PropTypes = n,
    n
};
fv.exports = EE();
var rl = fv.exports
  , il = {};
Object.defineProperty(il, "__esModule", {
    value: !0
});
var TE = Vi
  , ta = _E(TE);
function _E(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var OE = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(e) {
        this.scroller = e,
        this.handleHashChange = this.handleHashChange.bind(this),
        window.addEventListener("hashchange", this.handleHashChange),
        this.initStateFromHash(),
        this.mountFlag = !0
    },
    mapContainer: function(e, n) {
        this.containers[e] = n
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var e = this
          , n = this.getHash();
        n ? window.setTimeout(function() {
            e.scrollTo(n, !0),
            e.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(e, n) {
        var r = this.scroller
          , i = r.get(e);
        if (i && (n || e !== r.getActiveLink())) {
            var s = this.containers[e] || document;
            r.scrollTo(e, {
                container: s
            })
        }
    },
    getHash: function() {
        return ta.default.getHash()
    },
    changeHash: function(e, n) {
        this.isInitialized() && ta.default.getHash() !== e && ta.default.updateHash(e, n)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null,
        this.containers = null,
        window.removeEventListener("hashchange", this.handleHashChange)
    }
};
il.default = OE;
Object.defineProperty(Ni, "__esModule", {
    value: !0
});
var ps = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , ME = function() {
    function t(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
        e
    }
}()
  , LE = M
  , Fh = Fi(LE)
  , RE = Di
  , ms = Fi(RE)
  , AE = Pr
  , jE = Fi(AE)
  , NE = rl
  , Q = Fi(NE)
  , DE = il
  , Dt = Fi(DE);
function Fi(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function bE(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function VE(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function zE(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var Bh = {
    to: Q.default.string.isRequired,
    containerId: Q.default.string,
    container: Q.default.object,
    activeClass: Q.default.string,
    activeStyle: Q.default.object,
    spy: Q.default.bool,
    horizontal: Q.default.bool,
    smooth: Q.default.oneOfType([Q.default.bool, Q.default.string]),
    offset: Q.default.number,
    delay: Q.default.number,
    isDynamic: Q.default.bool,
    onClick: Q.default.func,
    duration: Q.default.oneOfType([Q.default.number, Q.default.func]),
    absolute: Q.default.bool,
    onSetActive: Q.default.func,
    onSetInactive: Q.default.func,
    ignoreCancelEvents: Q.default.bool,
    hashSpy: Q.default.bool,
    saveHashHistory: Q.default.bool,
    spyThrottle: Q.default.number
};
Ni.default = function(t, e) {
    var n = e || jE.default
      , r = function(s) {
        zE(o, s);
        function o(l) {
            bE(this, o);
            var a = VE(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, l));
            return i.call(a),
            a.state = {
                active: !1
            },
            a
        }
        return ME(o, [{
            key: "getScrollSpyContainer",
            value: function() {
                var a = this.props.containerId
                  , u = this.props.container;
                return a && !u ? document.getElementById(a) : u && u.nodeType ? u : document
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (this.props.spy || this.props.hashSpy) {
                    var a = this.getScrollSpyContainer();
                    ms.default.isMounted(a) || ms.default.mount(a, this.props.spyThrottle),
                    this.props.hashSpy && (Dt.default.isMounted() || Dt.default.mount(n),
                    Dt.default.mapContainer(this.props.to, a)),
                    ms.default.addSpyHandler(this.spyHandler, a),
                    this.setState({
                        container: a
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                ms.default.unmount(this.stateHandler, this.spyHandler)
            }
        }, {
            key: "render",
            value: function() {
                var a = "";
                this.state && this.state.active ? a = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : a = this.props.className;
                var u = {};
                this.state && this.state.active ? u = ps({}, this.props.style, this.props.activeStyle) : u = ps({}, this.props.style);
                var c = ps({}, this.props);
                for (var f in Bh)
                    c.hasOwnProperty(f) && delete c[f];
                return c.className = a,
                c.style = u,
                c.onClick = this.handleClick,
                Fh.default.createElement(t, c)
            }
        }]),
        o
    }(Fh.default.PureComponent)
      , i = function() {
        var o = this;
        this.scrollTo = function(l, a) {
            n.scrollTo(l, ps({}, o.state, a))
        }
        ,
        this.handleClick = function(l) {
            o.props.onClick && o.props.onClick(l),
            l.stopPropagation && l.stopPropagation(),
            l.preventDefault && l.preventDefault(),
            o.scrollTo(o.props.to, o.props)
        }
        ,
        this.spyHandler = function(l, a) {
            var u = o.getScrollSpyContainer();
            if (!(Dt.default.isMounted() && !Dt.default.isInitialized())) {
                var c = o.props.horizontal
                  , f = o.props.to
                  , d = null
                  , m = void 0
                  , y = void 0;
                if (c) {
                    var v = 0
                      , S = 0
                      , g = 0;
                    if (u.getBoundingClientRect) {
                        var h = u.getBoundingClientRect();
                        g = h.left
                    }
                    if (!d || o.props.isDynamic) {
                        if (d = n.get(f),
                        !d)
                            return;
                        var p = d.getBoundingClientRect();
                        v = p.left - g + l,
                        S = v + p.width
                    }
                    var w = l - o.props.offset;
                    m = w >= Math.floor(v) && w < Math.floor(S),
                    y = w < Math.floor(v) || w >= Math.floor(S)
                } else {
                    var P = 0
                      , k = 0
                      , E = 0;
                    if (u.getBoundingClientRect) {
                        var C = u.getBoundingClientRect();
                        E = C.top
                    }
                    if (!d || o.props.isDynamic) {
                        if (d = n.get(f),
                        !d)
                            return;
                        var L = d.getBoundingClientRect();
                        P = L.top - E + a,
                        k = P + L.height
                    }
                    var R = a - o.props.offset;
                    m = R >= Math.floor(P) && R < Math.floor(k),
                    y = R < Math.floor(P) || R >= Math.floor(k)
                }
                var se = n.getActiveLink();
                if (y) {
                    if (f === se && n.setActiveLink(void 0),
                    o.props.hashSpy && Dt.default.getHash() === f) {
                        var ue = o.props.saveHashHistory
                          , ge = ue === void 0 ? !1 : ue;
                        Dt.default.changeHash("", ge)
                    }
                    o.props.spy && o.state.active && (o.setState({
                        active: !1
                    }),
                    o.props.onSetInactive && o.props.onSetInactive(f, d))
                }
                if (m && (se !== f || o.state.active === !1)) {
                    n.setActiveLink(f);
                    var oe = o.props.saveHashHistory
                      , ut = oe === void 0 ? !1 : oe;
                    o.props.hashSpy && Dt.default.changeHash(f, ut),
                    o.props.spy && (o.setState({
                        active: !0
                    }),
                    o.props.onSetActive && o.props.onSetActive(f, d))
                }
            }
        }
    };
    return r.propTypes = Bh,
    r.defaultProps = {
        offset: 0
    },
    r
}
;
Object.defineProperty(Jc, "__esModule", {
    value: !0
});
var IE = M
  , $h = pv(IE)
  , FE = Ni
  , BE = pv(FE);
function pv(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function $E(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function Uh(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function UE(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var HE = function(t) {
    UE(e, t);
    function e() {
        var n, r, i, s;
        $E(this, e);
        for (var o = arguments.length, l = Array(o), a = 0; a < o; a++)
            l[a] = arguments[a];
        return s = (r = (i = Uh(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(l))),
        i),
        i.render = function() {
            return $h.default.createElement("a", i.props, i.props.children)
        }
        ,
        r),
        Uh(i, s)
    }
    return e
}($h.default.Component);
Jc.default = (0,
BE.default)(HE);
var sf = {};
Object.defineProperty(sf, "__esModule", {
    value: !0
});
var WE = function() {
    function t(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
        e
    }
}()
  , GE = M
  , Hh = mv(GE)
  , QE = Ni
  , KE = mv(QE);
function mv(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function YE(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function XE(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function ZE(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var qE = function(t) {
    ZE(e, t);
    function e() {
        return YE(this, e),
        XE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return WE(e, [{
        key: "render",
        value: function() {
            return Hh.default.createElement("button", this.props, this.props.children)
        }
    }]),
    e
}(Hh.default.Component);
sf.default = (0,
KE.default)(qE);
var of = {}
  , sl = {};
Object.defineProperty(sl, "__esModule", {
    value: !0
});
var JE = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , eT = function() {
    function t(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
        e
    }
}()
  , tT = M
  , Wh = ol(tT)
  , nT = Ng;
ol(nT);
var rT = Pr
  , Gh = ol(rT)
  , iT = rl
  , Qh = ol(iT);
function ol(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function sT(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function oT(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function lT(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
sl.default = function(t) {
    var e = function(n) {
        lT(r, n);
        function r(i) {
            sT(this, r);
            var s = oT(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return s.childBindings = {
                domNode: null
            },
            s
        }
        return eT(r, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(s) {
                this.props.name !== s.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                Gh.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(s) {
                Gh.default.register(s, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return Wh.default.createElement(t, JE({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]),
        r
    }(Wh.default.Component);
    return e.propTypes = {
        name: Qh.default.string,
        id: Qh.default.string
    },
    e
}
;
Object.defineProperty(of, "__esModule", {
    value: !0
});
var Kh = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , aT = function() {
    function t(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
        e
    }
}()
  , uT = M
  , Yh = lf(uT)
  , cT = sl
  , fT = lf(cT)
  , dT = rl
  , Xh = lf(dT);
function lf(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
function hT(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function pT(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function mT(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var gv = function(t) {
    mT(e, t);
    function e() {
        return hT(this, e),
        pT(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return aT(e, [{
        key: "render",
        value: function() {
            var r = this
              , i = Kh({}, this.props);
            return delete i.name,
            i.parentBindings && delete i.parentBindings,
            Yh.default.createElement("div", Kh({}, i, {
                ref: function(o) {
                    r.props.parentBindings.domNode = o
                }
            }), this.props.children)
        }
    }]),
    e
}(Yh.default.Component);
gv.propTypes = {
    name: Xh.default.string,
    id: Xh.default.string
};
of.default = (0,
fT.default)(gv);
var na = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
}
  , Zh = function() {
    function t(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
        e
    }
}();
function qh(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function Jh(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}
function ep(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var gs = M
  , mn = Di
  , ra = Pr
  , Z = rl
  , bt = il
  , tp = {
    to: Z.string.isRequired,
    containerId: Z.string,
    container: Z.object,
    activeClass: Z.string,
    spy: Z.bool,
    smooth: Z.oneOfType([Z.bool, Z.string]),
    offset: Z.number,
    delay: Z.number,
    isDynamic: Z.bool,
    onClick: Z.func,
    duration: Z.oneOfType([Z.number, Z.func]),
    absolute: Z.bool,
    onSetActive: Z.func,
    onSetInactive: Z.func,
    ignoreCancelEvents: Z.bool,
    hashSpy: Z.bool,
    spyThrottle: Z.number
}
  , gT = {
    Scroll: function(e, n) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var r = n || ra
          , i = function(o) {
            ep(l, o);
            function l(a) {
                qh(this, l);
                var u = Jh(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
                return s.call(u),
                u.state = {
                    active: !1
                },
                u
            }
            return Zh(l, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var u = this.props.containerId
                      , c = this.props.container;
                    return u ? document.getElementById(u) : c && c.nodeType ? c : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var u = this.getScrollSpyContainer();
                        mn.isMounted(u) || mn.mount(u, this.props.spyThrottle),
                        this.props.hashSpy && (bt.isMounted() || bt.mount(r),
                        bt.mapContainer(this.props.to, u)),
                        this.props.spy && mn.addStateHandler(this.stateHandler),
                        mn.addSpyHandler(this.spyHandler, u),
                        this.setState({
                            container: u
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    mn.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var u = "";
                    this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                    var c = na({}, this.props);
                    for (var f in tp)
                        c.hasOwnProperty(f) && delete c[f];
                    return c.className = u,
                    c.onClick = this.handleClick,
                    gs.createElement(e, c)
                }
            }]),
            l
        }(gs.Component)
          , s = function() {
            var l = this;
            this.scrollTo = function(a, u) {
                r.scrollTo(a, na({}, l.state, u))
            }
            ,
            this.handleClick = function(a) {
                l.props.onClick && l.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                l.scrollTo(l.props.to, l.props)
            }
            ,
            this.stateHandler = function() {
                r.getActiveLink() !== l.props.to && (l.state !== null && l.state.active && l.props.onSetInactive && l.props.onSetInactive(),
                l.setState({
                    active: !1
                }))
            }
            ,
            this.spyHandler = function(a) {
                var u = l.getScrollSpyContainer();
                if (!(bt.isMounted() && !bt.isInitialized())) {
                    var c = l.props.to
                      , f = null
                      , d = 0
                      , m = 0
                      , y = 0;
                    if (u.getBoundingClientRect) {
                        var v = u.getBoundingClientRect();
                        y = v.top
                    }
                    if (!f || l.props.isDynamic) {
                        if (f = r.get(c),
                        !f)
                            return;
                        var S = f.getBoundingClientRect();
                        d = S.top - y + a,
                        m = d + S.height
                    }
                    var g = a - l.props.offset
                      , h = g >= Math.floor(d) && g < Math.floor(m)
                      , p = g < Math.floor(d) || g >= Math.floor(m)
                      , w = r.getActiveLink();
                    if (p)
                        return c === w && r.setActiveLink(void 0),
                        l.props.hashSpy && bt.getHash() === c && bt.changeHash(),
                        l.props.spy && l.state.active && (l.setState({
                            active: !1
                        }),
                        l.props.onSetInactive && l.props.onSetInactive()),
                        mn.updateStates();
                    if (h && w !== c)
                        return r.setActiveLink(c),
                        l.props.hashSpy && bt.changeHash(c),
                        l.props.spy && (l.setState({
                            active: !0
                        }),
                        l.props.onSetActive && l.props.onSetActive(c)),
                        mn.updateStates()
                }
            }
        };
        return i.propTypes = tp,
        i.defaultProps = {
            offset: 0
        },
        i
    },
    Element: function(e) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var n = function(r) {
            ep(i, r);
            function i(s) {
                qh(this, i);
                var o = Jh(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, s));
                return o.childBindings = {
                    domNode: null
                },
                o
            }
            return Zh(i, [{
                key: "componentDidMount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function(o) {
                    this.props.name !== o.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    ra.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function(o) {
                    ra.register(o, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function() {
                    return gs.createElement(e, na({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]),
            i
        }(gs.Component);
        return n.propTypes = {
            name: Z.string,
            id: Z.string
        },
        n
    }
}
  , yT = gT;
Object.defineProperty(ne, "__esModule", {
    value: !0
});
ne.Helpers = ne.ScrollElement = ne.ScrollLink = ne.animateScroll = ne.scrollSpy = ne.Events = ne.scroller = ne.Element = ne.Button = Ee = ne.Link = void 0;
var vT = Jc
  , yv = wt(vT)
  , wT = sf
  , vv = wt(wT)
  , xT = of
  , wv = wt(xT)
  , ST = Pr
  , xv = wt(ST)
  , PT = zi
  , Sv = wt(PT)
  , kT = Di
  , Pv = wt(kT)
  , CT = el
  , kv = wt(CT)
  , ET = Ni
  , Cv = wt(ET)
  , TT = sl
  , Ev = wt(TT)
  , _T = yT
  , Tv = wt(_T);
function wt(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var Ee = ne.Link = yv.default;
ne.Button = vv.default;
ne.Element = wv.default;
ne.scroller = xv.default;
ne.Events = Sv.default;
ne.scrollSpy = Pv.default;
ne.animateScroll = kv.default;
ne.ScrollLink = Cv.default;
ne.ScrollElement = Ev.default;
ne.Helpers = Tv.default;
ne.default = {
    Link: yv.default,
    Button: vv.default,
    Element: wv.default,
    scroller: xv.default,
    Events: Sv.default,
    scrollSpy: Pv.default,
    animateScroll: kv.default,
    ScrollLink: Cv.default,
    ScrollElement: Ev.default,
    Helpers: Tv.default
};
const yu = "/ScarletHacks2024/assets/2hawkmemoji-fd753368.png"
  , OT = ()=>{
    const [t,e] = M.useState(!1)
      , n = sv();
    wC();
    const r = M.useRef(null);
    return M.useEffect(()=>{
        const i = ()=>{
            window.scrollY > 1500 ? e(!0) : e(!1)
        }
        ;
        return window.addEventListener("scroll", i),
        ()=>{
            window.removeEventListener("scroll", i)
        }
    }
    , []),
    M.useEffect(()=>{
        n.start({
            opacity: t ? 1 : 0,
            scale: 1,
            y: t ? 0 : -100
        })
    }
    , [t, n]),
    x.jsxs(x.Fragment, {
        children: [x.jsx(B.div, {
            ref: r,
            className: "fixed top-5  right-5 left-auto w-14 h-14 flex z-[10000] justify-center",
            children: x.jsx(B.div, {
                initial: {
                    opacity: 0
                },
                animate: n,
                transition: {
                    duration: .5
                },
                className: "relative w-full top-[5px] ",
                children: x.jsx("span", {
                    className: "hover:text-zinc-100 text-4xl text-zinc-500 bg-zinc-900 cursor-pointer rounded-3xl py-1 px-3 shadow-lg",
                    children: x.jsx(Ee, {
                        to: "home",
                        smooth: !0,
                        duration: 3e3,
                        spy: !0,
                        children: "↑"
                    })
                })
            })
        }), x.jsxs(B.div, {
            ref: r,
            className: "fixed top-5 left-5 right-auto w-14 h-14 flex z-[10000] justify-center",
            children: [x.jsx(B.nav, {
                initial: {
                    opacity: 0,
                    width: 56
                },
                animate: n,
                transition: {
                    duration: .5
                },
                whileHover: {
                    x: 200,
                    width: 450
                },
                className: "fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl sm:visible invisible",
                children: x.jsxs(B.ul, {
                    className: "font-base w-[450px] cursor-pointer overflow-hidden  flex-column flex justify-between mx-auto py-2",
                    children: [x.jsx("li", {
                        className: " block rounded-xl w-[40px] hover:text-black p-1 ml-2",
                        children: x.jsx(Ee, {
                            to: "home",
                            smooth: !0,
                            duration: 3e3,
                            children: x.jsx("img", {
                                src: yu,
                                className: "object-scale-down",
                                alt: "Home"
                            })
                        })
                    }), x.jsx(B.li, {
                        className: "block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100 ",
                        children: x.jsx(Ee, {
                            to: "aboutme",
                            className: "text-xl whitespace-nowrap",
                            smooth: !0,
                            duration: 2e3,
                            children: "Sign Up"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "experience",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Schedule"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500 p-1 mr-2 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "portfolio",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Pictures"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500  mr-8 p-1 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "contact",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Contact"
                        })
                    })]
                })
            }), x.jsx(B.nav, {
                initial: {
                    opacity: 0,
                    width: 56
                },
                animate: n,
                transition: {
                    duration: .5
                },
                whileHover: {
                    x: 200,
                    width: 450
                },
                className: "fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl sm:invisible visible",
                children: x.jsxs(B.ul, {
                    className: "font-base w-[450px] cursor-pointer overflow-hidden  flex-column flex justify-between mx-auto py-2",
                    children: [x.jsx("li", {
                        className: " block rounded-xl w-[40px] hover:text-black p-1 ml-2",
                        children: x.jsx(Ee, {
                            to: "home",
                            smooth: !0,
                            duration: 3e3,
                            children: x.jsx("img", {
                                src: yu,
                                className: "object-scale-down",
                                alt: "Home"
                            })
                        })
                    }), x.jsx(B.li, {
                        className: "block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100 ",
                        children: x.jsx(Ee, {
                            to: "aboutme",
                            className: "text-xl whitespace-nowrap",
                            smooth: !0,
                            duration: 2e3,
                            children: "Sign Up"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "experience",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Schedule"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500 p-1 mr-2 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "portfolio",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Pictures"
                        })
                    }), x.jsx("li", {
                        className: "block text-zinc-500  mr-8 p-1 rounded-xl hover:text-zinc-100",
                        children: x.jsx(Ee, {
                            to: "contact",
                            className: " text-xl",
                            smooth: "true",
                            duration: 2e3,
                            children: "Contact"
                        })
                    })]
                })
            })]
        })]
    })
}
;
var vu = new Map
  , ys = new WeakMap
  , np = 0
  , MT = void 0;
function LT(t) {
    return t ? (ys.has(t) || (np += 1,
    ys.set(t, np.toString())),
    ys.get(t)) : "0"
}
function RT(t) {
    return Object.keys(t).sort().filter(e=>t[e] !== void 0).map(e=>`${e}_${e === "root" ? LT(t.root) : t[e]}`).toString()
}
function AT(t) {
    const e = RT(t);
    let n = vu.get(e);
    if (!n) {
        const r = new Map;
        let i;
        const s = new IntersectionObserver(o=>{
            o.forEach(l=>{
                var a;
                const u = l.isIntersecting && i.some(c=>l.intersectionRatio >= c);
                t.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = u),
                (a = r.get(l.target)) == null || a.forEach(c=>{
                    c(u, l)
                }
                )
            }
            )
        }
        ,t);
        i = s.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]),
        n = {
            id: e,
            observer: s,
            elements: r
        },
        vu.set(e, n)
    }
    return n
}
function jT(t, e, n={}, r=MT) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const a = t.getBoundingClientRect();
        return e(r, {
            isIntersecting: r,
            target: t,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: a,
            intersectionRect: a,
            rootBounds: a
        }),
        ()=>{}
    }
    const {id: i, observer: s, elements: o} = AT(n)
      , l = o.get(t) || [];
    return o.has(t) || o.set(t, l),
    l.push(e),
    s.observe(t),
    function() {
        l.splice(l.indexOf(e), 1),
        l.length === 0 && (o.delete(t),
        s.unobserve(t)),
        o.size === 0 && (s.disconnect(),
        vu.delete(i))
    }
}
function NT({threshold: t, delay: e, trackVisibility: n, rootMargin: r, root: i, triggerOnce: s, skip: o, initialInView: l, fallbackInView: a, onChange: u}={}) {
    var c;
    const [f,d] = M.useState(null)
      , m = M.useRef()
      , [y,v] = M.useState({
        inView: !!l,
        entry: void 0
    });
    m.current = u,
    M.useEffect(()=>{
        if (o || !f)
            return;
        let p;
        return p = jT(f, (w,P)=>{
            v({
                inView: w,
                entry: P
            }),
            m.current && m.current(w, P),
            P.isIntersecting && s && p && (p(),
            p = void 0)
        }
        , {
            root: i,
            rootMargin: r,
            threshold: t,
            trackVisibility: n,
            delay: e
        }, a),
        ()=>{
            p && p()
        }
    }
    , [Array.isArray(t) ? t.toString() : t, f, i, r, s, o, n, a, e]);
    const S = (c = y.entry) == null ? void 0 : c.target
      , g = M.useRef();
    !f && S && !s && !o && g.current !== S && (g.current = S,
    v({
        inView: !!l,
        entry: void 0
    }));
    const h = [d, y.inView, y.entry];
    return h.ref = h[0],
    h.inView = h[1],
    h.entry = h[2],
    h
}
const DT = [{
    name: "RSVP Link",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdtNY3fA92BiqBV6ZgsAH66gu601WNiJzuhofuPGzIKfcnT8g/viewform"
}, {
    name: "Instagram",
    href: "https://www.instagram.com/acm_iit/?hl=en"
}, {
    name: "Linktree",
    href: "https://linktr.ee/acm.iit"
}]
  , bT = [{
    name: "Nintendo Switch Lite",
    value: "🥇 Prize"
}, {
    name: "Holy Stone GPS Drone",
    value: "🥈 Prize"
}, {
    name: "Keychron K4",
    value: "🥉 Prize"
}];
function VT() {
    const {ref: t, inView: e} = NT({
        triggerOnce: !0,
        threshold: .9
    })
      , n = sv()
      , r = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };
    return M.useEffect(()=>{
        e ? n.start("visible") : n.start("hidden")
    }
    , [n, e]),
    x.jsxs(x.Fragment, {
        children: [x.jsx("div", {
            id: "aboutme",
            className: "h-32"
        }), x.jsxs(B.div, {
            className: "relative md:max-w-max sm:w-5/6 w-11/12 backdrop-blur-xl mx-auto rounded-3xl overflow-hidden py-16",
            children: [x.jsx("div", {
                className: "h-16",
                children: x.jsx(B.p, {
                    q: !0,
                    initial: {
                        x: 0,
                        y: 100,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        y: -25,
                        opacity: 1
                    },
                    transition: {
                        duration: 2.1
                    },
                    className: " relative grid grid-cols-3 w-5/6 lg:gap-24 gap-4 mx-auto z-0",
                    children: DT.map(i=>x.jsxs(B.a, {
                        href: i.href,
                        target: "_blank",
                        whileHover: {
                            y: -10
                        },
                        whileTap: {
                            backgroundColor: "whitesmoke",
                            color: "black"
                        },
                        className: "block text-white hover:backdrop-blur-3xl hover:border md:text-2xl text-lg rounded-xl md:w-36 mx-auto",
                        children: [i.name, " ", x.jsx("span", {
                            "aria-hidden": "true",
                            children: "→"
                        })]
                    }, i.name))
                })
            }), x.jsxs("div", {
                className: "mx-auto max-w-6xl px-6 lg:px-8 lg:ml-200  float-center mt-0 ",
                children: [x.jsxs("div", {
                    className: "mx-auto max-w-6xl",
                    children: [x.jsxs(B.h2, {
                        ref: t,
                        initial: "hidden",
                        animate: n,
                        exit: "hidden",
                        variants: r,
                        className: "text-4xl font-200 tracking-tight text-white sm:text-6xl text-center",
                        children: ["IIT's ", x.jsx("b", {
                            children: "Premiere Hackathon"
                        })]
                    }), x.jsx(B.p, {
                        className: " overflow-hidden w-5/6 mx-auto md:text-4xl text-2xl font-normal leading-7 text-white text-center py-8",
                        children: "Join us on April 14 for the largest computing event this semester. Bring your own Computer, team up and meet new hackers, and best of all have fun being creative! All levels of coders are welcome (yes even the non-cs majors!)"
                    })]
                }), x.jsx("div", {
                    className: " rounded-3xl mt-8 md:w-5/6 w-full  mx-auto ",
                    children: x.jsx("dl", {
                        className: "  grid lg:gap-x-44 sm:gap-x-10 gap-x-5 gap-y-px grid-cols-3 grid-cols-3 grid-row-1",
                        children: bT.map((i,s)=>x.jsxs("div", {
                            className: "flex  flex-col-reverse text-center text-center",
                            children: [x.jsxs("dt", {
                                className: "md:text-base whitespace-nowrap text-sm md:leading-7 leading-1 text-white",
                                children: [i.name, i.name2, i.name3, i.name4, i.name5]
                            }), x.jsx("dd", {
                                className: "md:text-2xl text-sm font-bold sm:leading-9 tracking-tight text-white ",
                                children: i.value
                            })]
                        }, s))
                    })
                })]
            })]
        })]
    })
}
const zT = [{
    title: "Computational Mechanics",
    date: "Aug, 2022",
    description: "This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.",
    awards: "1st place<br />Class<br />Trajectory<br />Competition",
    technologies: "Python,<br />VPython,<br />Glowscript,<br />Math",
    imageUrl: "peopletalk.jpg",
    github: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2",
    live: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2"
}, {
    title: "Computational Mechanics",
    date: "Aug, 2022",
    description: "This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.",
    awards: "1st place<br />Class<br />Trajectory<br />Competition",
    technologies: "Python,<br />VPython,<br />Glowscript,<br />Math",
    imageUrl: "checkin.jpg",
    github: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2",
    live: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2"
}, {
    title: "Computational Mechanics",
    date: "Aug, 2022",
    description: "This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.",
    awards: "1st place<br />Class<br />Trajectory<br />Competition",
    technologies: "Python,<br />VPython,<br />Glowscript,<br />Math",
    imageUrl: "damien.jpg",
    github: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2",
    live: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2"
}, {
    title: "Computational Mechanics",
    date: "Aug, 2022",
    description: "This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.",
    awards: "1st place<br />Class<br />Trajectory<br />Competition",
    technologies: "Python,<br />VPython,<br />Glowscript,<br />Math",
    imageUrl: "focuspeople.jpg",
    github: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2",
    live: "https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2"
}, {
    title: "3D Braille Generator ",
    date: "July, 2023",
    awards: "Associated<br />with the MSI<br />Accessiblity<br />Effort",
    description: "This project involves the development of a application that translates text input into a 3D .stl file format, allowing for tactile Braille representations through 3D printing technology. The objective is to enhance accessibility of information in museum exhibits.",
    technologies: "C,<br />C#,<br />Terminal,<br />STL",
    imageUrl: "xboxpeople.jpg",
    github: "https://github.com/Axelh04/brailleSTL_generator"
}, {
    title: "SweetDeals",
    date: "Oct, 2022",
    description: "Develop a user-friendly mobile trick or treating marketplace using Flutter, hosted on Heroku, with compatibility for both iOS and Android platforms. This platform will enable seamless and enjoyable Halloween festivities for users of all devices.",
    awards: "MLH<br />DemonHacks<br />Hackathon<br />Project",
    technologies: "Flutter,<br />Dart,<br />Heroku,<br />Firebase",
    imageUrl: "prizespeople.jpg",
    live: "https://devpost.com/software/test-ida1un",
    github: "https://github.com/Dodhon/DemonHacks2022/tree/Frontend"
}]
  , IT = ()=>x.jsxs("div", {
    className: "relative overflow-hidden shadow-inner bg-zinc-900 ltr mt-0 z-50 ",
    children: [x.jsx("div", {
        id: "portfolio",
        className: "h-24"
    }), x.jsx(B.h1, {
        className: "text-5xl font-bold text-zinc-100 text-center mt-0 mb-24 ",
        children: "📸Pictures"
    }), x.jsxs("div", {
        className: "overflow-x-scroll snap-x snap-mandatory  p-0 whitespace-nowrap",
        children: [x.jsx("div", {
            className: "inline-block w-9/12"
        }), zT.map((t,e)=>x.jsx(B.div, {
            className: "inline-block w-1/2 md:max-h-[500px] top-0 md:mr-20 mr-8 snap-center snap-always mb-44 ",
            children: x.jsx("div", {
                className: "relative rounded-3xl shadow-2xl  py-0 mb-4 mt-4",
                children: x.jsx(B.img, {
                    initial: {
                        scale: 1
                    },
                    transition: {
                        duration: .25
                    },
                    whileHover: {
                        scale: 1.05
                    },
                    src: t.imageUrl,
                    s: !0,
                    className: " object-cover rounded-3xl  mx-auto"
                })
            })
        }, e)), x.jsx("div", {
            className: "inline-block w-1/2"
        })]
    })]
});
var af = {
    exports: {}
}
  , U = String
  , _v = function() {
    return {
        isColorSupported: !1,
        reset: U,
        bold: U,
        dim: U,
        italic: U,
        underline: U,
        inverse: U,
        hidden: U,
        strikethrough: U,
        black: U,
        red: U,
        green: U,
        yellow: U,
        blue: U,
        magenta: U,
        cyan: U,
        white: U,
        gray: U,
        bgBlack: U,
        bgRed: U,
        bgGreen: U,
        bgYellow: U,
        bgBlue: U,
        bgMagenta: U,
        bgCyan: U,
        bgWhite: U
    }
};
af.exports = _v();
af.exports.createColors = _v;
var FT = af.exports;
const BT = {}
  , $T = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: BT
}, Symbol.toStringTag, {
    value: "Module"
}))
  , at = d0($T);
let rp = FT
  , ip = at
  , wu = class Ov extends Error {
    constructor(e, n, r, i, s, o) {
        super(e),
        this.name = "CssSyntaxError",
        this.reason = e,
        s && (this.file = s),
        i && (this.source = i),
        o && (this.plugin = o),
        typeof n < "u" && typeof r < "u" && (typeof n == "number" ? (this.line = n,
        this.column = r) : (this.line = n.line,
        this.column = n.column,
        this.endLine = r.line,
        this.endColumn = r.column)),
        this.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(this, Ov)
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "",
        this.message += this.file ? this.file : "<css input>",
        typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column),
        this.message += ": " + this.reason
    }
    showSourceCode(e) {
        if (!this.source)
            return "";
        let n = this.source;
        e == null && (e = rp.isColorSupported),
        ip && e && (n = ip(n));
        let r = n.split(/\r?\n/), i = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, r.length), o = String(s).length, l, a;
        if (e) {
            let {bold: u, gray: c, red: f} = rp.createColors(!0);
            l = d=>u(f(d)),
            a = d=>c(d)
        } else
            l = a = u=>u;
        return r.slice(i, s).map((u,c)=>{
            let f = i + 1 + c
              , d = " " + (" " + f).slice(-o) + " | ";
            if (f === this.line) {
                let m = a(d.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return l(">") + a(d) + u + `
 ` + m + l("^")
            }
            return " " + a(d) + u
        }
        ).join(`
`)
    }
    toString() {
        let e = this.showSourceCode();
        return e && (e = `

` + e + `
`),
        this.name + ": " + this.message + e
    }
}
;
var uf = wu;
wu.default = wu;
var Bi = {};
Bi.isClean = Symbol("isClean");
Bi.my = Symbol("my");
const sp = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
};
function UT(t) {
    return t[0].toUpperCase() + t.slice(1)
}
let xu = class {
    constructor(e) {
        this.builder = e
    }
    atrule(e, n) {
        let r = "@" + e.name
          , i = e.params ? this.rawValue(e, "params") : "";
        if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : i && (r += " "),
        e.nodes)
            this.block(e, r + i);
        else {
            let s = (e.raws.between || "") + (n ? ";" : "");
            this.builder(r + i + s, e)
        }
    }
    beforeAfter(e, n) {
        let r;
        e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : n === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
        let i = e.parent
          , s = 0;
        for (; i && i.type !== "root"; )
            s += 1,
            i = i.parent;
        if (r.includes(`
`)) {
            let o = this.raw(e, null, "indent");
            if (o.length)
                for (let l = 0; l < s; l++)
                    r += o
        }
        return r
    }
    block(e, n) {
        let r = this.raw(e, "between", "beforeOpen");
        this.builder(n + r + "{", e, "start");
        let i;
        e.nodes && e.nodes.length ? (this.body(e),
        i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"),
        i && this.builder(i),
        this.builder("}", e, "end")
    }
    body(e) {
        let n = e.nodes.length - 1;
        for (; n > 0 && e.nodes[n].type === "comment"; )
            n -= 1;
        let r = this.raw(e, "semicolon");
        for (let i = 0; i < e.nodes.length; i++) {
            let s = e.nodes[i]
              , o = this.raw(s, "before");
            o && this.builder(o),
            this.stringify(s, n !== i || r)
        }
    }
    comment(e) {
        let n = this.raw(e, "left", "commentLeft")
          , r = this.raw(e, "right", "commentRight");
        this.builder("/*" + n + e.text + r + "*/", e)
    }
    decl(e, n) {
        let r = this.raw(e, "between", "colon")
          , i = e.prop + r + this.rawValue(e, "value");
        e.important && (i += e.raws.important || " !important"),
        n && (i += ";"),
        this.builder(i, e)
    }
    document(e) {
        this.body(e)
    }
    raw(e, n, r) {
        let i;
        if (r || (r = n),
        n && (i = e.raws[n],
        typeof i < "u"))
            return i;
        let s = e.parent;
        if (r === "before" && (!s || s.type === "root" && s.first === e || s && s.type === "document"))
            return "";
        if (!s)
            return sp[r];
        let o = e.root();
        if (o.rawCache || (o.rawCache = {}),
        typeof o.rawCache[r] < "u")
            return o.rawCache[r];
        if (r === "before" || r === "after")
            return this.beforeAfter(e, r);
        {
            let l = "raw" + UT(r);
            this[l] ? i = this[l](o, e) : o.walk(a=>{
                if (i = a.raws[n],
                typeof i < "u")
                    return !1
            }
            )
        }
        return typeof i > "u" && (i = sp[r]),
        o.rawCache[r] = i,
        i
    }
    rawBeforeClose(e) {
        let n;
        return e.walk(r=>{
            if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
                return n = r.raws.after,
                n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")),
                !1
        }
        ),
        n && (n = n.replace(/\S/g, "")),
        n
    }
    rawBeforeComment(e, n) {
        let r;
        return e.walkComments(i=>{
            if (typeof i.raws.before < "u")
                return r = i.raws.before,
                r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                !1
        }
        ),
        typeof r > "u" ? r = this.raw(n, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")),
        r
    }
    rawBeforeDecl(e, n) {
        let r;
        return e.walkDecls(i=>{
            if (typeof i.raws.before < "u")
                return r = i.raws.before,
                r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")),
                !1
        }
        ),
        typeof r > "u" ? r = this.raw(n, null, "beforeRule") : r && (r = r.replace(/\S/g, "")),
        r
    }
    rawBeforeOpen(e) {
        let n;
        return e.walk(r=>{
            if (r.type !== "decl" && (n = r.raws.between,
            typeof n < "u"))
                return !1
        }
        ),
        n
    }
    rawBeforeRule(e) {
        let n;
        return e.walk(r=>{
            if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u")
                return n = r.raws.before,
                n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")),
                !1
        }
        ),
        n && (n = n.replace(/\S/g, "")),
        n
    }
    rawColon(e) {
        let n;
        return e.walkDecls(r=>{
            if (typeof r.raws.between < "u")
                return n = r.raws.between.replace(/[^\s:]/g, ""),
                !1
        }
        ),
        n
    }
    rawEmptyBody(e) {
        let n;
        return e.walk(r=>{
            if (r.nodes && r.nodes.length === 0 && (n = r.raws.after,
            typeof n < "u"))
                return !1
        }
        ),
        n
    }
    rawIndent(e) {
        if (e.raws.indent)
            return e.raws.indent;
        let n;
        return e.walk(r=>{
            let i = r.parent;
            if (i && i !== e && i.parent && i.parent === e && typeof r.raws.before < "u") {
                let s = r.raws.before.split(`
`);
                return n = s[s.length - 1],
                n = n.replace(/\S/g, ""),
                !1
            }
        }
        ),
        n
    }
    rawSemicolon(e) {
        let n;
        return e.walk(r=>{
            if (r.nodes && r.nodes.length && r.last.type === "decl" && (n = r.raws.semicolon,
            typeof n < "u"))
                return !1
        }
        ),
        n
    }
    rawValue(e, n) {
        let r = e[n]
          , i = e.raws[n];
        return i && i.value === r ? i.raw : r
    }
    root(e) {
        this.body(e),
        e.raws.after && this.builder(e.raws.after)
    }
    rule(e) {
        this.block(e, this.rawValue(e, "selector")),
        e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end")
    }
    stringify(e, n) {
        if (!this[e.type])
            throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
        this[e.type](e, n)
    }
}
;
var Mv = xu;
xu.default = xu;
let HT = Mv;
function Su(t, e) {
    new HT(e).stringify(t)
}
var ll = Su;
Su.default = Su;
let {isClean: vs, my: WT} = Bi
  , GT = uf
  , QT = Mv
  , KT = ll;
function Pu(t, e) {
    let n = new t.constructor;
    for (let r in t) {
        if (!Object.prototype.hasOwnProperty.call(t, r) || r === "proxyCache")
            continue;
        let i = t[r]
          , s = typeof i;
        r === "parent" && s === "object" ? e && (n[r] = e) : r === "source" ? n[r] = i : Array.isArray(i) ? n[r] = i.map(o=>Pu(o, n)) : (s === "object" && i !== null && (i = Pu(i)),
        n[r] = i)
    }
    return n
}
let ku = class {
    constructor(e={}) {
        this.raws = {},
        this[vs] = !1,
        this[WT] = !0;
        for (let n in e)
            if (n === "nodes") {
                this.nodes = [];
                for (let r of e[n])
                    typeof r.clone == "function" ? this.append(r.clone()) : this.append(r)
            } else
                this[n] = e[n]
    }
    addToError(e) {
        if (e.postcssNode = this,
        e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
            let n = this.source;
            e.stack = e.stack.replace(/\n\s{4}at /, `$&${n.input.from}:${n.start.line}:${n.start.column}$&`)
        }
        return e
    }
    after(e) {
        return this.parent.insertAfter(this, e),
        this
    }
    assign(e={}) {
        for (let n in e)
            this[n] = e[n];
        return this
    }
    before(e) {
        return this.parent.insertBefore(this, e),
        this
    }
    cleanRaws(e) {
        delete this.raws.before,
        delete this.raws.after,
        e || delete this.raws.between
    }
    clone(e={}) {
        let n = Pu(this);
        for (let r in e)
            n[r] = e[r];
        return n
    }
    cloneAfter(e={}) {
        let n = this.clone(e);
        return this.parent.insertAfter(this, n),
        n
    }
    cloneBefore(e={}) {
        let n = this.clone(e);
        return this.parent.insertBefore(this, n),
        n
    }
    error(e, n={}) {
        if (this.source) {
            let {end: r, start: i} = this.rangeBy(n);
            return this.source.input.error(e, {
                column: i.column,
                line: i.line
            }, {
                column: r.column,
                line: r.line
            }, n)
        }
        return new GT(e)
    }
    getProxyProcessor() {
        return {
            get(e, n) {
                return n === "proxyOf" ? e : n === "root" ? ()=>e.root().toProxy() : e[n]
            },
            set(e, n, r) {
                return e[n] === r || (e[n] = r,
                (n === "prop" || n === "value" || n === "name" || n === "params" || n === "important" || n === "text") && e.markDirty()),
                !0
            }
        }
    }
    markDirty() {
        if (this[vs]) {
            this[vs] = !1;
            let e = this;
            for (; e = e.parent; )
                e[vs] = !1
        }
    }
    next() {
        if (!this.parent)
            return;
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1]
    }
    positionBy(e, n) {
        let r = this.source.start;
        if (e.index)
            r = this.positionInside(e.index, n);
        else if (e.word) {
            n = this.toString();
            let i = n.indexOf(e.word);
            i !== -1 && (r = this.positionInside(i, n))
        }
        return r
    }
    positionInside(e, n) {
        let r = n || this.toString()
          , i = this.source.start.column
          , s = this.source.start.line;
        for (let o = 0; o < e; o++)
            r[o] === `
` ? (i = 1,
            s += 1) : i += 1;
        return {
            column: i,
            line: s
        }
    }
    prev() {
        if (!this.parent)
            return;
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1]
    }
    rangeBy(e) {
        let n = {
            column: this.source.start.column,
            line: this.source.start.line
        }
          , r = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: n.column + 1,
            line: n.line
        };
        if (e.word) {
            let i = this.toString()
              , s = i.indexOf(e.word);
            s !== -1 && (n = this.positionInside(s, i),
            r = this.positionInside(s + e.word.length, i))
        } else
            e.start ? n = {
                column: e.start.column,
                line: e.start.line
            } : e.index && (n = this.positionInside(e.index)),
            e.end ? r = {
                column: e.end.column,
                line: e.end.line
            } : typeof e.endIndex == "number" ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
        return (r.line < n.line || r.line === n.line && r.column <= n.column) && (r = {
            column: n.column + 1,
            line: n.line
        }),
        {
            end: r,
            start: n
        }
    }
    raw(e, n) {
        return new QT().raw(this, e, n)
    }
    remove() {
        return this.parent && this.parent.removeChild(this),
        this.parent = void 0,
        this
    }
    replaceWith(...e) {
        if (this.parent) {
            let n = this
              , r = !1;
            for (let i of e)
                i === this ? r = !0 : r ? (this.parent.insertAfter(n, i),
                n = i) : this.parent.insertBefore(n, i);
            r || this.remove()
        }
        return this
    }
    root() {
        let e = this;
        for (; e.parent && e.parent.type !== "document"; )
            e = e.parent;
        return e
    }
    toJSON(e, n) {
        let r = {}
          , i = n == null;
        n = n || new Map;
        let s = 0;
        for (let o in this) {
            if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache")
                continue;
            let l = this[o];
            if (Array.isArray(l))
                r[o] = l.map(a=>typeof a == "object" && a.toJSON ? a.toJSON(null, n) : a);
            else if (typeof l == "object" && l.toJSON)
                r[o] = l.toJSON(null, n);
            else if (o === "source") {
                let a = n.get(l.input);
                a == null && (a = s,
                n.set(l.input, s),
                s++),
                r[o] = {
                    end: l.end,
                    inputId: a,
                    start: l.start
                }
            } else
                r[o] = l
        }
        return i && (r.inputs = [...n.keys()].map(o=>o.toJSON())),
        r
    }
    toProxy() {
        return this.proxyCache || (this.proxyCache = new Proxy(this,this.getProxyProcessor())),
        this.proxyCache
    }
    toString(e=KT) {
        e.stringify && (e = e.stringify);
        let n = "";
        return e(this, r=>{
            n += r
        }
        ),
        n
    }
    warn(e, n, r) {
        let i = {
            node: this
        };
        for (let s in r)
            i[s] = r[s];
        return e.warn(n, i)
    }
    get proxyOf() {
        return this
    }
}
;
var al = ku;
ku.default = ku;
let YT = al
  , Cu = class extends YT {
    constructor(e) {
        e && typeof e.value < "u" && typeof e.value != "string" && (e = {
            ...e,
            value: String(e.value)
        }),
        super(e),
        this.type = "decl"
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$"
    }
}
;
var ul = Cu;
Cu.default = Cu;
let XT = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
  , ZT = (t,e=21)=>(n=e)=>{
    let r = ""
      , i = n;
    for (; i--; )
        r += t[Math.random() * t.length | 0];
    return r
}
  , qT = (t=21)=>{
    let e = ""
      , n = t;
    for (; n--; )
        e += XT[Math.random() * 64 | 0];
    return e
}
;
var JT = {
    nanoid: qT,
    customAlphabet: ZT
};
let {SourceMapConsumer: op, SourceMapGenerator: lp} = at
  , {existsSync: e2, readFileSync: t2} = at
  , {dirname: ia, join: n2} = at;
function r2(t) {
    return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t)
}
let Eu = class {
    constructor(e, n) {
        if (n.map === !1)
            return;
        this.loadAnnotation(e),
        this.inline = this.startWith(this.annotation, "data:");
        let r = n.map ? n.map.prev : void 0
          , i = this.loadMap(n.from, r);
        !this.mapFile && n.from && (this.mapFile = n.from),
        this.mapFile && (this.root = ia(this.mapFile)),
        i && (this.text = i)
    }
    consumer() {
        return this.consumerCache || (this.consumerCache = new op(this.text)),
        this.consumerCache
    }
    decodeInline(e) {
        let n = /^data:application\/json;charset=utf-?8;base64,/
          , r = /^data:application\/json;base64,/
          , i = /^data:application\/json;charset=utf-?8,/
          , s = /^data:application\/json,/;
        if (i.test(e) || s.test(e))
            return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (n.test(e) || r.test(e))
            return r2(e.substr(RegExp.lastMatch.length));
        let o = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + o)
    }
    getAnnotationURL(e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
    }
    isMap(e) {
        return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections)
    }
    loadAnnotation(e) {
        let n = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!n)
            return;
        let r = e.lastIndexOf(n.pop())
          , i = e.indexOf("*/", r);
        r > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, i)))
    }
    loadFile(e) {
        if (this.root = ia(e),
        e2(e))
            return this.mapFile = e,
            t2(e, "utf-8").toString().trim()
    }
    loadMap(e, n) {
        if (n === !1)
            return !1;
        if (n) {
            if (typeof n == "string")
                return n;
            if (typeof n == "function") {
                let r = n(e);
                if (r) {
                    let i = this.loadFile(r);
                    if (!i)
                        throw new Error("Unable to load previous source map: " + r.toString());
                    return i
                }
            } else {
                if (n instanceof op)
                    return lp.fromSourceMap(n).toString();
                if (n instanceof lp)
                    return n.toString();
                if (this.isMap(n))
                    return JSON.stringify(n);
                throw new Error("Unsupported previous source map format: " + n.toString())
            }
        } else {
            if (this.inline)
                return this.decodeInline(this.annotation);
            if (this.annotation) {
                let r = this.annotation;
                return e && (r = n2(ia(e), r)),
                this.loadFile(r)
            }
        }
    }
    startWith(e, n) {
        return e ? e.substr(0, n.length) === n : !1
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
    }
}
;
var Lv = Eu;
Eu.default = Eu;
let {SourceMapConsumer: i2, SourceMapGenerator: s2} = at
  , {fileURLToPath: ap, pathToFileURL: ws} = at
  , {isAbsolute: Tu, resolve: _u} = at
  , {nanoid: o2} = JT
  , sa = at
  , up = uf
  , l2 = Lv
  , oa = Symbol("fromOffsetCache")
  , a2 = !!(i2 && s2)
  , cp = !!(_u && Tu)
  , To = class {
    constructor(e, n={}) {
        if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
            throw new Error(`PostCSS received ${e} instead of CSS string`);
        if (this.css = e.toString(),
        this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0,
        this.css = this.css.slice(1)) : this.hasBOM = !1,
        n.from && (!cp || /^\w+:\/\//.test(n.from) || Tu(n.from) ? this.file = n.from : this.file = _u(n.from)),
        cp && a2) {
            let r = new l2(this.css,n);
            if (r.text) {
                this.map = r;
                let i = r.consumer().file;
                !this.file && i && (this.file = this.mapResolve(i))
            }
        }
        this.file || (this.id = "<input css " + o2(6) + ">"),
        this.map && (this.map.file = this.from)
    }
    error(e, n, r, i={}) {
        let s, o, l;
        if (n && typeof n == "object") {
            let u = n
              , c = r;
            if (typeof u.offset == "number") {
                let f = this.fromOffset(u.offset);
                n = f.line,
                r = f.col
            } else
                n = u.line,
                r = u.column;
            if (typeof c.offset == "number") {
                let f = this.fromOffset(c.offset);
                o = f.line,
                l = f.col
            } else
                o = c.line,
                l = c.column
        } else if (!r) {
            let u = this.fromOffset(n);
            n = u.line,
            r = u.col
        }
        let a = this.origin(n, r, o, l);
        return a ? s = new up(e,a.endLine === void 0 ? a.line : {
            column: a.column,
            line: a.line
        },a.endLine === void 0 ? a.column : {
            column: a.endColumn,
            line: a.endLine
        },a.source,a.file,i.plugin) : s = new up(e,o === void 0 ? n : {
            column: r,
            line: n
        },o === void 0 ? r : {
            column: l,
            line: o
        },this.css,this.file,i.plugin),
        s.input = {
            column: r,
            endColumn: l,
            endLine: o,
            line: n,
            source: this.css
        },
        this.file && (ws && (s.input.url = ws(this.file).toString()),
        s.input.file = this.file),
        s
    }
    fromOffset(e) {
        let n, r;
        if (this[oa])
            r = this[oa];
        else {
            let s = this.css.split(`
`);
            r = new Array(s.length);
            let o = 0;
            for (let l = 0, a = s.length; l < a; l++)
                r[l] = o,
                o += s[l].length + 1;
            this[oa] = r
        }
        n = r[r.length - 1];
        let i = 0;
        if (e >= n)
            i = r.length - 1;
        else {
            let s = r.length - 2, o;
            for (; i < s; )
                if (o = i + (s - i >> 1),
                e < r[o])
                    s = o - 1;
                else if (e >= r[o + 1])
                    i = o + 1;
                else {
                    i = o;
                    break
                }
        }
        return {
            col: e - r[i] + 1,
            line: i + 1
        }
    }
    mapResolve(e) {
        return /^\w+:\/\//.test(e) ? e : _u(this.map.consumer().sourceRoot || this.map.root || ".", e)
    }
    origin(e, n, r, i) {
        if (!this.map)
            return !1;
        let s = this.map.consumer()
          , o = s.originalPositionFor({
            column: n,
            line: e
        });
        if (!o.source)
            return !1;
        let l;
        typeof r == "number" && (l = s.originalPositionFor({
            column: i,
            line: r
        }));
        let a;
        Tu(o.source) ? a = ws(o.source) : a = new URL(o.source,this.map.consumer().sourceRoot || ws(this.map.mapFile));
        let u = {
            column: o.column,
            endColumn: l && l.column,
            endLine: l && l.line,
            line: o.line,
            url: a.toString()
        };
        if (a.protocol === "file:")
            if (ap)
                u.file = ap(a);
            else
                throw new Error("file: protocol is not available in this PostCSS build");
        let c = s.sourceContentFor(o.source);
        return c && (u.source = c),
        u
    }
    toJSON() {
        let e = {};
        for (let n of ["hasBOM", "css", "file", "id"])
            this[n] != null && (e[n] = this[n]);
        return this.map && (e.map = {
            ...this.map
        },
        e.map.consumerCache && (e.map.consumerCache = void 0)),
        e
    }
    get from() {
        return this.file || this.id
    }
}
;
var cl = To;
To.default = To;
sa && sa.registerInput && sa.registerInput(To);
let {SourceMapConsumer: Rv, SourceMapGenerator: Hs} = at
  , {dirname: Ws, relative: Av, resolve: jv, sep: Nv} = at
  , {pathToFileURL: fp} = at
  , u2 = cl
  , c2 = !!(Rv && Hs)
  , f2 = !!(Ws && jv && Av && Nv)
  , d2 = class {
    constructor(e, n, r, i) {
        this.stringify = e,
        this.mapOpts = r.map || {},
        this.root = n,
        this.opts = r,
        this.css = i,
        this.originalCSS = i,
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute,
        this.memoizedFileURLs = new Map,
        this.memoizedPaths = new Map,
        this.memoizedURLs = new Map
    }
    addAnnotation() {
        let e;
        this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
        let n = `
`;
        this.css.includes(`\r
`) && (n = `\r
`),
        this.css += n + "/*# sourceMappingURL=" + e + " */"
    }
    applyPrevMaps() {
        for (let e of this.previous()) {
            let n = this.toUrl(this.path(e.file)), r = e.root || Ws(e.file), i;
            this.mapOpts.sourcesContent === !1 ? (i = new Rv(e.text),
            i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(),
            this.map.applySourceMap(i, n, this.toUrl(this.path(r)))
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation !== !1)
            if (this.root) {
                let e;
                for (let n = this.root.nodes.length - 1; n >= 0; n--)
                    e = this.root.nodes[n],
                    e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(n)
            } else
                this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
    }
    generate() {
        if (this.clearAnnotation(),
        f2 && c2 && this.isMap())
            return this.generateMap();
        {
            let e = "";
            return this.stringify(this.root, n=>{
                e += n
            }
            ),
            [e]
        }
    }
    generateMap() {
        if (this.root)
            this.generateString();
        else if (this.previous().length === 1) {
            let e = this.previous()[0].consumer();
            e.file = this.outputFile(),
            this.map = Hs.fromSourceMap(e, {
                ignoreInvalidMapping: !0
            })
        } else
            this.map = new Hs({
                file: this.outputFile(),
                ignoreInvalidMapping: !0
            }),
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
        return this.isSourcesContent() && this.setSourcesContent(),
        this.root && this.previous().length > 0 && this.applyPrevMaps(),
        this.isAnnotation() && this.addAnnotation(),
        this.isInline() ? [this.css] : [this.css, this.map]
    }
    generateString() {
        this.css = "",
        this.map = new Hs({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
        });
        let e = 1, n = 1, r = "<no source>", i = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ""
        }, s, o;
        this.stringify(this.root, (l,a,u)=>{
            if (this.css += l,
            a && u !== "end" && (i.generated.line = e,
            i.generated.column = n - 1,
            a.source && a.source.start ? (i.source = this.sourcePath(a),
            i.original.line = a.source.start.line,
            i.original.column = a.source.start.column - 1,
            this.map.addMapping(i)) : (i.source = r,
            i.original.line = 1,
            i.original.column = 0,
            this.map.addMapping(i))),
            s = l.match(/\n/g),
            s ? (e += s.length,
            o = l.lastIndexOf(`
`),
            n = l.length - o) : n += l.length,
            a && u !== "start") {
                let c = a.parent || {
                    raws: {}
                };
                (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== c.last || c.raws.semicolon) && (a.source && a.source.end ? (i.source = this.sourcePath(a),
                i.original.line = a.source.end.line,
                i.original.column = a.source.end.column - 1,
                i.generated.line = e,
                i.generated.column = n - 2,
                this.map.addMapping(i)) : (i.source = r,
                i.original.line = 1,
                i.original.column = 0,
                i.generated.line = e,
                i.generated.column = n - 1,
                this.map.addMapping(i)))
            }
        }
        )
    }
    isAnnotation() {
        return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some(e=>e.annotation) : !0
    }
    isInline() {
        if (typeof this.mapOpts.inline < "u")
            return this.mapOpts.inline;
        let e = this.mapOpts.annotation;
        return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some(n=>n.inline) : !0
    }
    isMap() {
        return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0
    }
    isSourcesContent() {
        return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some(e=>e.withContent()) : !0
    }
    outputFile() {
        return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
    }
    path(e) {
        if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e))
            return e;
        let n = this.memoizedPaths.get(e);
        if (n)
            return n;
        let r = this.opts.to ? Ws(this.opts.to) : ".";
        typeof this.mapOpts.annotation == "string" && (r = Ws(jv(r, this.mapOpts.annotation)));
        let i = Av(r, e);
        return this.memoizedPaths.set(e, i),
        i
    }
    previous() {
        if (!this.previousMaps)
            if (this.previousMaps = [],
            this.root)
                this.root.walk(e=>{
                    if (e.source && e.source.input.map) {
                        let n = e.source.input.map;
                        this.previousMaps.includes(n) || this.previousMaps.push(n)
                    }
                }
                );
            else {
                let e = new u2(this.originalCSS,this.opts);
                e.map && this.previousMaps.push(e.map)
            }
        return this.previousMaps
    }
    setSourcesContent() {
        let e = {};
        if (this.root)
            this.root.walk(n=>{
                if (n.source) {
                    let r = n.source.input.from;
                    if (r && !e[r]) {
                        e[r] = !0;
                        let i = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
                        this.map.setSourceContent(i, n.source.input.css)
                    }
                }
            }
            );
        else if (this.css) {
            let n = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(n, this.css)
        }
    }
    sourcePath(e) {
        return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from))
    }
    toBase64(e) {
        return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)))
    }
    toFileUrl(e) {
        let n = this.memoizedFileURLs.get(e);
        if (n)
            return n;
        if (fp) {
            let r = fp(e).toString();
            return this.memoizedFileURLs.set(e, r),
            r
        } else
            throw new Error("`map.absolute` option is not available in this PostCSS build")
    }
    toUrl(e) {
        let n = this.memoizedURLs.get(e);
        if (n)
            return n;
        Nv === "\\" && (e = e.replace(/\\/g, "/"));
        let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e, r),
        r
    }
}
;
var Dv = d2;
let h2 = al
  , Ou = class extends h2 {
    constructor(e) {
        super(e),
        this.type = "comment"
    }
}
;
var fl = Ou;
Ou.default = Ou;
let {isClean: bv, my: Vv} = Bi, zv = ul, Iv = fl, p2 = al, Fv, cf, ff, Bv;
function $v(t) {
    return t.map(e=>(e.nodes && (e.nodes = $v(e.nodes)),
    delete e.source,
    e))
}
function Uv(t) {
    if (t[bv] = !1,
    t.proxyOf.nodes)
        for (let e of t.proxyOf.nodes)
            Uv(e)
}
let At = class Hv extends p2 {
    append(...e) {
        for (let n of e) {
            let r = this.normalize(n, this.last);
            for (let i of r)
                this.proxyOf.nodes.push(i)
        }
        return this.markDirty(),
        this
    }
    cleanRaws(e) {
        if (super.cleanRaws(e),
        this.nodes)
            for (let n of this.nodes)
                n.cleanRaws(e)
    }
    each(e) {
        if (!this.proxyOf.nodes)
            return;
        let n = this.getIterator(), r, i;
        for (; this.indexes[n] < this.proxyOf.nodes.length && (r = this.indexes[n],
        i = e(this.proxyOf.nodes[r], r),
        i !== !1); )
            this.indexes[n] += 1;
        return delete this.indexes[n],
        i
    }
    every(e) {
        return this.nodes.every(e)
    }
    getIterator() {
        this.lastEach || (this.lastEach = 0),
        this.indexes || (this.indexes = {}),
        this.lastEach += 1;
        let e = this.lastEach;
        return this.indexes[e] = 0,
        e
    }
    getProxyProcessor() {
        return {
            get(e, n) {
                return n === "proxyOf" ? e : e[n] ? n === "each" || typeof n == "string" && n.startsWith("walk") ? (...r)=>e[n](...r.map(i=>typeof i == "function" ? (s,o)=>i(s.toProxy(), o) : i)) : n === "every" || n === "some" ? r=>e[n]((i,...s)=>r(i.toProxy(), ...s)) : n === "root" ? ()=>e.root().toProxy() : n === "nodes" ? e.nodes.map(r=>r.toProxy()) : n === "first" || n === "last" ? e[n].toProxy() : e[n] : e[n]
            },
            set(e, n, r) {
                return e[n] === r || (e[n] = r,
                (n === "name" || n === "params" || n === "selector") && e.markDirty()),
                !0
            }
        }
    }
    index(e) {
        return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf),
        this.proxyOf.nodes.indexOf(e))
    }
    insertAfter(e, n) {
        let r = this.index(e)
          , i = this.normalize(n, this.proxyOf.nodes[r]).reverse();
        r = this.index(e);
        for (let o of i)
            this.proxyOf.nodes.splice(r + 1, 0, o);
        let s;
        for (let o in this.indexes)
            s = this.indexes[o],
            r < s && (this.indexes[o] = s + i.length);
        return this.markDirty(),
        this
    }
    insertBefore(e, n) {
        let r = this.index(e)
          , i = r === 0 ? "prepend" : !1
          , s = this.normalize(n, this.proxyOf.nodes[r], i).reverse();
        r = this.index(e);
        for (let l of s)
            this.proxyOf.nodes.splice(r, 0, l);
        let o;
        for (let l in this.indexes)
            o = this.indexes[l],
            r <= o && (this.indexes[l] = o + s.length);
        return this.markDirty(),
        this
    }
    normalize(e, n) {
        if (typeof e == "string")
            e = $v(Fv(e).nodes);
        else if (typeof e > "u")
            e = [];
        else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let i of e)
                i.parent && i.parent.removeChild(i, "ignore")
        } else if (e.type === "root" && this.type !== "document") {
            e = e.nodes.slice(0);
            for (let i of e)
                i.parent && i.parent.removeChild(i, "ignore")
        } else if (e.type)
            e = [e];
        else if (e.prop) {
            if (typeof e.value > "u")
                throw new Error("Value field is missed in node creation");
            typeof e.value != "string" && (e.value = String(e.value)),
            e = [new zv(e)]
        } else if (e.selector)
            e = [new cf(e)];
        else if (e.name)
            e = [new ff(e)];
        else if (e.text)
            e = [new Iv(e)];
        else
            throw new Error("Unknown node type in node creation");
        return e.map(i=>(i[Vv] || Hv.rebuild(i),
        i = i.proxyOf,
        i.parent && i.parent.removeChild(i),
        i[bv] && Uv(i),
        typeof i.raws.before > "u" && n && typeof n.raws.before < "u" && (i.raws.before = n.raws.before.replace(/\S/g, "")),
        i.parent = this.proxyOf,
        i))
    }
    prepend(...e) {
        e = e.reverse();
        for (let n of e) {
            let r = this.normalize(n, this.first, "prepend").reverse();
            for (let i of r)
                this.proxyOf.nodes.unshift(i);
            for (let i in this.indexes)
                this.indexes[i] = this.indexes[i] + r.length
        }
        return this.markDirty(),
        this
    }
    push(e) {
        return e.parent = this,
        this.proxyOf.nodes.push(e),
        this
    }
    removeAll() {
        for (let e of this.proxyOf.nodes)
            e.parent = void 0;
        return this.proxyOf.nodes = [],
        this.markDirty(),
        this
    }
    removeChild(e) {
        e = this.index(e),
        this.proxyOf.nodes[e].parent = void 0,
        this.proxyOf.nodes.splice(e, 1);
        let n;
        for (let r in this.indexes)
            n = this.indexes[r],
            n >= e && (this.indexes[r] = n - 1);
        return this.markDirty(),
        this
    }
    replaceValues(e, n, r) {
        return r || (r = n,
        n = {}),
        this.walkDecls(i=>{
            n.props && !n.props.includes(i.prop) || n.fast && !i.value.includes(n.fast) || (i.value = i.value.replace(e, r))
        }
        ),
        this.markDirty(),
        this
    }
    some(e) {
        return this.nodes.some(e)
    }
    walk(e) {
        return this.each((n,r)=>{
            let i;
            try {
                i = e(n, r)
            } catch (s) {
                throw n.addToError(s)
            }
            return i !== !1 && n.walk && (i = n.walk(e)),
            i
        }
        )
    }
    walkAtRules(e, n) {
        return n ? e instanceof RegExp ? this.walk((r,i)=>{
            if (r.type === "atrule" && e.test(r.name))
                return n(r, i)
        }
        ) : this.walk((r,i)=>{
            if (r.type === "atrule" && r.name === e)
                return n(r, i)
        }
        ) : (n = e,
        this.walk((r,i)=>{
            if (r.type === "atrule")
                return n(r, i)
        }
        ))
    }
    walkComments(e) {
        return this.walk((n,r)=>{
            if (n.type === "comment")
                return e(n, r)
        }
        )
    }
    walkDecls(e, n) {
        return n ? e instanceof RegExp ? this.walk((r,i)=>{
            if (r.type === "decl" && e.test(r.prop))
                return n(r, i)
        }
        ) : this.walk((r,i)=>{
            if (r.type === "decl" && r.prop === e)
                return n(r, i)
        }
        ) : (n = e,
        this.walk((r,i)=>{
            if (r.type === "decl")
                return n(r, i)
        }
        ))
    }
    walkRules(e, n) {
        return n ? e instanceof RegExp ? this.walk((r,i)=>{
            if (r.type === "rule" && e.test(r.selector))
                return n(r, i)
        }
        ) : this.walk((r,i)=>{
            if (r.type === "rule" && r.selector === e)
                return n(r, i)
        }
        ) : (n = e,
        this.walk((r,i)=>{
            if (r.type === "rule")
                return n(r, i)
        }
        ))
    }
    get first() {
        if (this.proxyOf.nodes)
            return this.proxyOf.nodes[0]
    }
    get last() {
        if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
    }
}
;
At.registerParse = t=>{
    Fv = t
}
;
At.registerRule = t=>{
    cf = t
}
;
At.registerAtRule = t=>{
    ff = t
}
;
At.registerRoot = t=>{
    Bv = t
}
;
var Dn = At;
At.default = At;
At.rebuild = t=>{
    t.type === "atrule" ? Object.setPrototypeOf(t, ff.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, cf.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, zv.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Iv.prototype) : t.type === "root" && Object.setPrototypeOf(t, Bv.prototype),
    t[Vv] = !0,
    t.nodes && t.nodes.forEach(e=>{
        At.rebuild(e)
    }
    )
}
;
let m2 = Dn, Wv, Gv, xi = class extends m2 {
    constructor(e) {
        super({
            type: "document",
            ...e
        }),
        this.nodes || (this.nodes = [])
    }
    toResult(e={}) {
        return new Wv(new Gv,this,e).stringify()
    }
}
;
xi.registerLazyResult = t=>{
    Wv = t
}
;
xi.registerProcessor = t=>{
    Gv = t
}
;
var df = xi;
xi.default = xi;
let Mu = class {
    constructor(e, n={}) {
        if (this.type = "warning",
        this.text = e,
        n.node && n.node.source) {
            let r = n.node.rangeBy(n);
            this.line = r.start.line,
            this.column = r.start.column,
            this.endLine = r.end.line,
            this.endColumn = r.end.column
        }
        for (let r in n)
            this[r] = n[r]
    }
    toString() {
        return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
        }).message : this.plugin ? this.plugin + ": " + this.text : this.text
    }
}
;
var Qv = Mu;
Mu.default = Mu;
let g2 = Qv
  , Lu = class {
    constructor(e, n, r) {
        this.processor = e,
        this.messages = [],
        this.root = n,
        this.opts = r,
        this.css = void 0,
        this.map = void 0
    }
    toString() {
        return this.css
    }
    warn(e, n={}) {
        n.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (n.plugin = this.lastPlugin.postcssPlugin);
        let r = new g2(e,n);
        return this.messages.push(r),
        r
    }
    warnings() {
        return this.messages.filter(e=>e.type === "warning")
    }
    get content() {
        return this.css
    }
}
;
var hf = Lu;
Lu.default = Lu;
const la = "'".charCodeAt(0)
  , dp = '"'.charCodeAt(0)
  , xs = "\\".charCodeAt(0)
  , hp = "/".charCodeAt(0)
  , Ss = `
`.charCodeAt(0)
  , Nr = " ".charCodeAt(0)
  , Ps = "\f".charCodeAt(0)
  , ks = "	".charCodeAt(0)
  , Cs = "\r".charCodeAt(0)
  , y2 = "[".charCodeAt(0)
  , v2 = "]".charCodeAt(0)
  , w2 = "(".charCodeAt(0)
  , x2 = ")".charCodeAt(0)
  , S2 = "{".charCodeAt(0)
  , P2 = "}".charCodeAt(0)
  , k2 = ";".charCodeAt(0)
  , C2 = "*".charCodeAt(0)
  , E2 = ":".charCodeAt(0)
  , T2 = "@".charCodeAt(0)
  , Es = /[\t\n\f\r "#'()/;[\\\]{}]/g
  , Ts = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
  , _2 = /.[\r\n"'(/\\]/
  , pp = /[\da-f]/i;
var O2 = function(e, n={}) {
    let r = e.css.valueOf(), i = n.ignoreErrors, s, o, l, a, u, c, f, d, m, y, v = r.length, S = 0, g = [], h = [];
    function p() {
        return S
    }
    function w(C) {
        throw e.error("Unclosed " + C, S)
    }
    function P() {
        return h.length === 0 && S >= v
    }
    function k(C) {
        if (h.length)
            return h.pop();
        if (S >= v)
            return;
        let L = C ? C.ignoreUnclosed : !1;
        switch (s = r.charCodeAt(S),
        s) {
        case Ss:
        case Nr:
        case ks:
        case Cs:
        case Ps:
            {
                o = S;
                do
                    o += 1,
                    s = r.charCodeAt(o);
                while (s === Nr || s === Ss || s === ks || s === Cs || s === Ps);
                y = ["space", r.slice(S, o)],
                S = o - 1;
                break
            }
        case y2:
        case v2:
        case S2:
        case P2:
        case E2:
        case k2:
        case x2:
            {
                let R = String.fromCharCode(s);
                y = [R, R, S];
                break
            }
        case w2:
            {
                if (d = g.length ? g.pop()[1] : "",
                m = r.charCodeAt(S + 1),
                d === "url" && m !== la && m !== dp && m !== Nr && m !== Ss && m !== ks && m !== Ps && m !== Cs) {
                    o = S;
                    do {
                        if (c = !1,
                        o = r.indexOf(")", o + 1),
                        o === -1)
                            if (i || L) {
                                o = S;
                                break
                            } else
                                w("bracket");
                        for (f = o; r.charCodeAt(f - 1) === xs; )
                            f -= 1,
                            c = !c
                    } while (c);
                    y = ["brackets", r.slice(S, o + 1), S, o],
                    S = o
                } else
                    o = r.indexOf(")", S + 1),
                    a = r.slice(S, o + 1),
                    o === -1 || _2.test(a) ? y = ["(", "(", S] : (y = ["brackets", a, S, o],
                    S = o);
                break
            }
        case la:
        case dp:
            {
                l = s === la ? "'" : '"',
                o = S;
                do {
                    if (c = !1,
                    o = r.indexOf(l, o + 1),
                    o === -1)
                        if (i || L) {
                            o = S + 1;
                            break
                        } else
                            w("string");
                    for (f = o; r.charCodeAt(f - 1) === xs; )
                        f -= 1,
                        c = !c
                } while (c);
                y = ["string", r.slice(S, o + 1), S, o],
                S = o;
                break
            }
        case T2:
            {
                Es.lastIndex = S + 1,
                Es.test(r),
                Es.lastIndex === 0 ? o = r.length - 1 : o = Es.lastIndex - 2,
                y = ["at-word", r.slice(S, o + 1), S, o],
                S = o;
                break
            }
        case xs:
            {
                for (o = S,
                u = !0; r.charCodeAt(o + 1) === xs; )
                    o += 1,
                    u = !u;
                if (s = r.charCodeAt(o + 1),
                u && s !== hp && s !== Nr && s !== Ss && s !== ks && s !== Cs && s !== Ps && (o += 1,
                pp.test(r.charAt(o)))) {
                    for (; pp.test(r.charAt(o + 1)); )
                        o += 1;
                    r.charCodeAt(o + 1) === Nr && (o += 1)
                }
                y = ["word", r.slice(S, o + 1), S, o],
                S = o;
                break
            }
        default:
            {
                s === hp && r.charCodeAt(S + 1) === C2 ? (o = r.indexOf("*/", S + 2) + 1,
                o === 0 && (i || L ? o = r.length : w("comment")),
                y = ["comment", r.slice(S, o + 1), S, o],
                S = o) : (Ts.lastIndex = S + 1,
                Ts.test(r),
                Ts.lastIndex === 0 ? o = r.length - 1 : o = Ts.lastIndex - 2,
                y = ["word", r.slice(S, o + 1), S, o],
                g.push(y),
                S = o);
                break
            }
        }
        return S++,
        y
    }
    function E(C) {
        h.push(C)
    }
    return {
        back: E,
        endOfFile: P,
        nextToken: k,
        position: p
    }
};
let Kv = Dn
  , _o = class extends Kv {
    constructor(e) {
        super(e),
        this.type = "atrule"
    }
    append(...e) {
        return this.proxyOf.nodes || (this.nodes = []),
        super.append(...e)
    }
    prepend(...e) {
        return this.proxyOf.nodes || (this.nodes = []),
        super.prepend(...e)
    }
}
;
var pf = _o;
_o.default = _o;
Kv.registerAtRule(_o);
let Yv = Dn, Xv, Zv, gr = class extends Yv {
    constructor(e) {
        super(e),
        this.type = "root",
        this.nodes || (this.nodes = [])
    }
    normalize(e, n, r) {
        let i = super.normalize(e);
        if (n) {
            if (r === "prepend")
                this.nodes.length > 1 ? n.raws.before = this.nodes[1].raws.before : delete n.raws.before;
            else if (this.first !== n)
                for (let s of i)
                    s.raws.before = n.raws.before
        }
        return i
    }
    removeChild(e, n) {
        let r = this.index(e);
        return !n && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before),
        super.removeChild(e)
    }
    toResult(e={}) {
        return new Xv(new Zv,this,e).stringify()
    }
}
;
gr.registerLazyResult = t=>{
    Xv = t
}
;
gr.registerProcessor = t=>{
    Zv = t
}
;
var $i = gr;
gr.default = gr;
Yv.registerRoot(gr);
let Si = {
    comma(t) {
        return Si.split(t, [","], !0)
    },
    space(t) {
        let e = [" ", `
`, "	"];
        return Si.split(t, e)
    },
    split(t, e, n) {
        let r = []
          , i = ""
          , s = !1
          , o = 0
          , l = !1
          , a = ""
          , u = !1;
        for (let c of t)
            u ? u = !1 : c === "\\" ? u = !0 : l ? c === a && (l = !1) : c === '"' || c === "'" ? (l = !0,
            a = c) : c === "(" ? o += 1 : c === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(c) && (s = !0),
            s ? (i !== "" && r.push(i.trim()),
            i = "",
            s = !1) : i += c;
        return (n || i !== "") && r.push(i.trim()),
        r
    }
};
var qv = Si;
Si.default = Si;
let Jv = Dn
  , M2 = qv
  , Oo = class extends Jv {
    constructor(e) {
        super(e),
        this.type = "rule",
        this.nodes || (this.nodes = [])
    }
    get selectors() {
        return M2.comma(this.selector)
    }
    set selectors(e) {
        let n = this.selector ? this.selector.match(/,\s*/) : null
          , r = n ? n[0] : "," + this.raw("between", "beforeOpen");
        this.selector = e.join(r)
    }
}
;
var mf = Oo;
Oo.default = Oo;
Jv.registerRule(Oo);
let L2 = ul
  , R2 = O2
  , A2 = fl
  , j2 = pf
  , N2 = $i
  , mp = mf;
const gp = {
    empty: !0,
    space: !0
};
function D2(t) {
    for (let e = t.length - 1; e >= 0; e--) {
        let n = t[e]
          , r = n[3] || n[2];
        if (r)
            return r
    }
}
let b2 = class {
    constructor(e) {
        this.input = e,
        this.root = new N2,
        this.current = this.root,
        this.spaces = "",
        this.semicolon = !1,
        this.createTokenizer(),
        this.root.source = {
            input: e,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        }
    }
    atrule(e) {
        let n = new j2;
        n.name = e[1].slice(1),
        n.name === "" && this.unnamedAtrule(n, e),
        this.init(n, e[2]);
        let r, i, s, o = !1, l = !1, a = [], u = [];
        for (; !this.tokenizer.endOfFile(); ) {
            if (e = this.tokenizer.nextToken(),
            r = e[0],
            r === "(" || r === "[" ? u.push(r === "(" ? ")" : "]") : r === "{" && u.length > 0 ? u.push("}") : r === u[u.length - 1] && u.pop(),
            u.length === 0)
                if (r === ";") {
                    n.source.end = this.getPosition(e[2]),
                    n.source.end.offset++,
                    this.semicolon = !0;
                    break
                } else if (r === "{") {
                    l = !0;
                    break
                } else if (r === "}") {
                    if (a.length > 0) {
                        for (s = a.length - 1,
                        i = a[s]; i && i[0] === "space"; )
                            i = a[--s];
                        i && (n.source.end = this.getPosition(i[3] || i[2]),
                        n.source.end.offset++)
                    }
                    this.end(e);
                    break
                } else
                    a.push(e);
            else
                a.push(e);
            if (this.tokenizer.endOfFile()) {
                o = !0;
                break
            }
        }
        n.raws.between = this.spacesAndCommentsFromEnd(a),
        a.length ? (n.raws.afterName = this.spacesAndCommentsFromStart(a),
        this.raw(n, "params", a),
        o && (e = a[a.length - 1],
        n.source.end = this.getPosition(e[3] || e[2]),
        n.source.end.offset++,
        this.spaces = n.raws.between,
        n.raws.between = "")) : (n.raws.afterName = "",
        n.params = ""),
        l && (n.nodes = [],
        this.current = n)
    }
    checkMissedSemicolon(e) {
        let n = this.colon(e);
        if (n === !1)
            return;
        let r = 0, i;
        for (let s = n - 1; s >= 0 && (i = e[s],
        !(i[0] !== "space" && (r += 1,
        r === 2))); s--)
            ;
        throw this.input.error("Missed semicolon", i[0] === "word" ? i[3] + 1 : i[2])
    }
    colon(e) {
        let n = 0, r, i, s;
        for (let[o,l] of e.entries()) {
            if (r = l,
            i = r[0],
            i === "(" && (n += 1),
            i === ")" && (n -= 1),
            n === 0 && i === ":")
                if (!s)
                    this.doubleColon(r);
                else {
                    if (s[0] === "word" && s[1] === "progid")
                        continue;
                    return o
                }
            s = r
        }
        return !1
    }
    comment(e) {
        let n = new A2;
        this.init(n, e[2]),
        n.source.end = this.getPosition(e[3] || e[2]),
        n.source.end.offset++;
        let r = e[1].slice(2, -2);
        if (/^\s*$/.test(r))
            n.text = "",
            n.raws.left = r,
            n.raws.right = "";
        else {
            let i = r.match(/^(\s*)([^]*\S)(\s*)$/);
            n.text = i[2],
            n.raws.left = i[1],
            n.raws.right = i[3]
        }
    }
    createTokenizer() {
        this.tokenizer = R2(this.input)
    }
    decl(e, n) {
        let r = new L2;
        this.init(r, e[0][2]);
        let i = e[e.length - 1];
        for (i[0] === ";" && (this.semicolon = !0,
        e.pop()),
        r.source.end = this.getPosition(i[3] || i[2] || D2(e)),
        r.source.end.offset++; e[0][0] !== "word"; )
            e.length === 1 && this.unknownWord(e),
            r.raws.before += e.shift()[1];
        for (r.source.start = this.getPosition(e[0][2]),
        r.prop = ""; e.length; ) {
            let u = e[0][0];
            if (u === ":" || u === "space" || u === "comment")
                break;
            r.prop += e.shift()[1]
        }
        r.raws.between = "";
        let s;
        for (; e.length; )
            if (s = e.shift(),
            s[0] === ":") {
                r.raws.between += s[1];
                break
            } else
                s[0] === "word" && /\w/.test(s[1]) && this.unknownWord([s]),
                r.raws.between += s[1];
        (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0],
        r.prop = r.prop.slice(1));
        let o = [], l;
        for (; e.length && (l = e[0][0],
        !(l !== "space" && l !== "comment")); )
            o.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (let u = e.length - 1; u >= 0; u--) {
            if (s = e[u],
            s[1].toLowerCase() === "!important") {
                r.important = !0;
                let c = this.stringFrom(e, u);
                c = this.spacesFromEnd(e) + c,
                c !== " !important" && (r.raws.important = c);
                break
            } else if (s[1].toLowerCase() === "important") {
                let c = e.slice(0)
                  , f = "";
                for (let d = u; d > 0; d--) {
                    let m = c[d][0];
                    if (f.trim().indexOf("!") === 0 && m !== "space")
                        break;
                    f = c.pop()[1] + f
                }
                f.trim().indexOf("!") === 0 && (r.important = !0,
                r.raws.important = f,
                e = c)
            }
            if (s[0] !== "space" && s[0] !== "comment")
                break
        }
        e.some(u=>u[0] !== "space" && u[0] !== "comment") && (r.raws.between += o.map(u=>u[1]).join(""),
        o = []),
        this.raw(r, "value", o.concat(e), n),
        r.value.includes(":") && !n && this.checkMissedSemicolon(e)
    }
    doubleColon(e) {
        throw this.input.error("Double colon", {
            offset: e[2]
        }, {
            offset: e[2] + e[1].length
        })
    }
    emptyRule(e) {
        let n = new mp;
        this.init(n, e[2]),
        n.selector = "",
        n.raws.between = "",
        this.current = n
    }
    end(e) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
        this.semicolon = !1,
        this.current.raws.after = (this.current.raws.after || "") + this.spaces,
        this.spaces = "",
        this.current.parent ? (this.current.source.end = this.getPosition(e[2]),
        this.current.source.end.offset++,
        this.current = this.current.parent) : this.unexpectedClose(e)
    }
    endFile() {
        this.current.parent && this.unclosedBlock(),
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
        this.current.raws.after = (this.current.raws.after || "") + this.spaces,
        this.root.source.end = this.getPosition(this.tokenizer.position())
    }
    freeSemicolon(e) {
        if (this.spaces += e[1],
        this.current.nodes) {
            let n = this.current.nodes[this.current.nodes.length - 1];
            n && n.type === "rule" && !n.raws.ownSemicolon && (n.raws.ownSemicolon = this.spaces,
            this.spaces = "")
        }
    }
    getPosition(e) {
        let n = this.input.fromOffset(e);
        return {
            column: n.col,
            line: n.line,
            offset: e
        }
    }
    init(e, n) {
        this.current.push(e),
        e.source = {
            input: this.input,
            start: this.getPosition(n)
        },
        e.raws.before = this.spaces,
        this.spaces = "",
        e.type !== "comment" && (this.semicolon = !1)
    }
    other(e) {
        let n = !1
          , r = null
          , i = !1
          , s = null
          , o = []
          , l = e[1].startsWith("--")
          , a = []
          , u = e;
        for (; u; ) {
            if (r = u[0],
            a.push(u),
            r === "(" || r === "[")
                s || (s = u),
                o.push(r === "(" ? ")" : "]");
            else if (l && i && r === "{")
                s || (s = u),
                o.push("}");
            else if (o.length === 0)
                if (r === ";")
                    if (i) {
                        this.decl(a, l);
                        return
                    } else
                        break;
                else if (r === "{") {
                    this.rule(a);
                    return
                } else if (r === "}") {
                    this.tokenizer.back(a.pop()),
                    n = !0;
                    break
                } else
                    r === ":" && (i = !0);
            else
                r === o[o.length - 1] && (o.pop(),
                o.length === 0 && (s = null));
            u = this.tokenizer.nextToken()
        }
        if (this.tokenizer.endOfFile() && (n = !0),
        o.length > 0 && this.unclosedBracket(s),
        n && i) {
            if (!l)
                for (; a.length && (u = a[a.length - 1][0],
                !(u !== "space" && u !== "comment")); )
                    this.tokenizer.back(a.pop());
            this.decl(a, l)
        } else
            this.unknownWord(a)
    }
    parse() {
        let e;
        for (; !this.tokenizer.endOfFile(); )
            switch (e = this.tokenizer.nextToken(),
            e[0]) {
            case "space":
                this.spaces += e[1];
                break;
            case ";":
                this.freeSemicolon(e);
                break;
            case "}":
                this.end(e);
                break;
            case "comment":
                this.comment(e);
                break;
            case "at-word":
                this.atrule(e);
                break;
            case "{":
                this.emptyRule(e);
                break;
            default:
                this.other(e);
                break
            }
        this.endFile()
    }
    precheckMissedSemicolon() {}
    raw(e, n, r, i) {
        let s, o, l = r.length, a = "", u = !0, c, f;
        for (let d = 0; d < l; d += 1)
            s = r[d],
            o = s[0],
            o === "space" && d === l - 1 && !i ? u = !1 : o === "comment" ? (f = r[d - 1] ? r[d - 1][0] : "empty",
            c = r[d + 1] ? r[d + 1][0] : "empty",
            !gp[f] && !gp[c] ? a.slice(-1) === "," ? u = !1 : a += s[1] : u = !1) : a += s[1];
        if (!u) {
            let d = r.reduce((m,y)=>m + y[1], "");
            e.raws[n] = {
                raw: d,
                value: a
            }
        }
        e[n] = a
    }
    rule(e) {
        e.pop();
        let n = new mp;
        this.init(n, e[0][2]),
        n.raws.between = this.spacesAndCommentsFromEnd(e),
        this.raw(n, "selector", e),
        this.current = n
    }
    spacesAndCommentsFromEnd(e) {
        let n, r = "";
        for (; e.length && (n = e[e.length - 1][0],
        !(n !== "space" && n !== "comment")); )
            r = e.pop()[1] + r;
        return r
    }
    spacesAndCommentsFromStart(e) {
        let n, r = "";
        for (; e.length && (n = e[0][0],
        !(n !== "space" && n !== "comment")); )
            r += e.shift()[1];
        return r
    }
    spacesFromEnd(e) {
        let n, r = "";
        for (; e.length && (n = e[e.length - 1][0],
        n === "space"); )
            r = e.pop()[1] + r;
        return r
    }
    stringFrom(e, n) {
        let r = "";
        for (let i = n; i < e.length; i++)
            r += e[i][1];
        return e.splice(n, e.length - n),
        r
    }
    unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column)
    }
    unclosedBracket(e) {
        throw this.input.error("Unclosed bracket", {
            offset: e[2]
        }, {
            offset: e[2] + 1
        })
    }
    unexpectedClose(e) {
        throw this.input.error("Unexpected }", {
            offset: e[2]
        }, {
            offset: e[2] + 1
        })
    }
    unknownWord(e) {
        throw this.input.error("Unknown word", {
            offset: e[0][2]
        }, {
            offset: e[0][2] + e[0][1].length
        })
    }
    unnamedAtrule(e, n) {
        throw this.input.error("At-rule without name", {
            offset: n[2]
        }, {
            offset: n[2] + n[1].length
        })
    }
}
;
var V2 = b2;
let z2 = Dn
  , I2 = V2
  , F2 = cl;
function Mo(t, e) {
    let n = new F2(t,e)
      , r = new I2(n);
    try {
        r.parse()
    } catch (i) {
        throw i
    }
    return r.root
}
var gf = Mo;
Mo.default = Mo;
z2.registerParse(Mo);
let {isClean: dt, my: B2} = Bi
  , $2 = Dv
  , U2 = ll
  , H2 = Dn
  , W2 = df
  , yp = hf
  , G2 = gf
  , Q2 = $i;
const K2 = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
}
  , Y2 = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0
}
  , X2 = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
}
  , yr = 0;
function Dr(t) {
    return typeof t == "object" && typeof t.then == "function"
}
function e0(t) {
    let e = !1
      , n = K2[t.type];
    return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()),
    e && t.append ? [n, n + "-" + e, yr, n + "Exit", n + "Exit-" + e] : e ? [n, n + "-" + e, n + "Exit", n + "Exit-" + e] : t.append ? [n, yr, n + "Exit"] : [n, n + "Exit"]
}
function vp(t) {
    let e;
    return t.type === "document" ? e = ["Document", yr, "DocumentExit"] : t.type === "root" ? e = ["Root", yr, "RootExit"] : e = e0(t),
    {
        eventIndex: 0,
        events: e,
        iterator: 0,
        node: t,
        visitorIndex: 0,
        visitors: []
    }
}
function Ru(t) {
    return t[dt] = !1,
    t.nodes && t.nodes.forEach(e=>Ru(e)),
    t
}
let Au = {}
  , vr = class t0 {
    constructor(e, n, r) {
        this.stringified = !1,
        this.processed = !1;
        let i;
        if (typeof n == "object" && n !== null && (n.type === "root" || n.type === "document"))
            i = Ru(n);
        else if (n instanceof t0 || n instanceof yp)
            i = Ru(n.root),
            n.map && (typeof r.map > "u" && (r.map = {}),
            r.map.inline || (r.map.inline = !1),
            r.map.prev = n.map);
        else {
            let s = G2;
            r.syntax && (s = r.syntax.parse),
            r.parser && (s = r.parser),
            s.parse && (s = s.parse);
            try {
                i = s(n, r)
            } catch (o) {
                this.processed = !0,
                this.error = o
            }
            i && !i[B2] && H2.rebuild(i)
        }
        this.result = new yp(e,i,r),
        this.helpers = {
            ...Au,
            postcss: Au,
            result: this.result
        },
        this.plugins = this.processor.plugins.map(s=>typeof s == "object" && s.prepare ? {
            ...s,
            ...s.prepare(this.result)
        } : s)
    }
    async() {
        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()),
        this.processing)
    }
    catch(e) {
        return this.async().catch(e)
    }
    finally(e) {
        return this.async().then(e, e)
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins")
    }
    handleError(e, n) {
        let r = this.result.lastPlugin;
        try {
            n && n.addToError(e),
            this.error = e,
            e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = r.postcssPlugin,
            e.setMessage()) : r.postcssVersion
        } catch (i) {
            console && console.error && console.error(i)
        }
        return e
    }
    prepareVisitors() {
        this.listeners = {};
        let e = (n,r,i)=>{
            this.listeners[r] || (this.listeners[r] = []),
            this.listeners[r].push([n, i])
        }
        ;
        for (let n of this.plugins)
            if (typeof n == "object")
                for (let r in n) {
                    if (!Y2[r] && /^[A-Z]/.test(r))
                        throw new Error(`Unknown event ${r} in ${n.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                    if (!X2[r])
                        if (typeof n[r] == "object")
                            for (let i in n[r])
                                i === "*" ? e(n, r, n[r][i]) : e(n, r + "-" + i.toLowerCase(), n[r][i]);
                        else
                            typeof n[r] == "function" && e(n, r, n[r])
                }
        this.hasListener = Object.keys(this.listeners).length > 0
    }
    async runAsync() {
        this.plugin = 0;
        for (let e = 0; e < this.plugins.length; e++) {
            let n = this.plugins[e]
              , r = this.runOnRoot(n);
            if (Dr(r))
                try {
                    await r
                } catch (i) {
                    throw this.handleError(i)
                }
        }
        if (this.prepareVisitors(),
        this.hasListener) {
            let e = this.result.root;
            for (; !e[dt]; ) {
                e[dt] = !0;
                let n = [vp(e)];
                for (; n.length > 0; ) {
                    let r = this.visitTick(n);
                    if (Dr(r))
                        try {
                            await r
                        } catch (i) {
                            let s = n[n.length - 1].node;
                            throw this.handleError(i, s)
                        }
                }
            }
            if (this.listeners.OnceExit)
                for (let[n,r] of this.listeners.OnceExit) {
                    this.result.lastPlugin = n;
                    try {
                        if (e.type === "document") {
                            let i = e.nodes.map(s=>r(s, this.helpers));
                            await Promise.all(i)
                        } else
                            await r(e, this.helpers)
                    } catch (i) {
                        throw this.handleError(i)
                    }
                }
        }
        return this.processed = !0,
        this.stringify()
    }
    runOnRoot(e) {
        this.result.lastPlugin = e;
        try {
            if (typeof e == "object" && e.Once) {
                if (this.result.root.type === "document") {
                    let n = this.result.root.nodes.map(r=>e.Once(r, this.helpers));
                    return Dr(n[0]) ? Promise.all(n) : n
                }
                return e.Once(this.result.root, this.helpers)
            } else if (typeof e == "function")
                return e(this.result.root, this.result)
        } catch (n) {
            throw this.handleError(n)
        }
    }
    stringify() {
        if (this.error)
            throw this.error;
        if (this.stringified)
            return this.result;
        this.stringified = !0,
        this.sync();
        let e = this.result.opts
          , n = U2;
        e.syntax && (n = e.syntax.stringify),
        e.stringifier && (n = e.stringifier),
        n.stringify && (n = n.stringify);
        let i = new $2(n,this.result.root,this.result.opts).generate();
        return this.result.css = i[0],
        this.result.map = i[1],
        this.result
    }
    sync() {
        if (this.error)
            throw this.error;
        if (this.processed)
            return this.result;
        if (this.processed = !0,
        this.processing)
            throw this.getAsyncError();
        for (let e of this.plugins) {
            let n = this.runOnRoot(e);
            if (Dr(n))
                throw this.getAsyncError()
        }
        if (this.prepareVisitors(),
        this.hasListener) {
            let e = this.result.root;
            for (; !e[dt]; )
                e[dt] = !0,
                this.walkSync(e);
            if (this.listeners.OnceExit)
                if (e.type === "document")
                    for (let n of e.nodes)
                        this.visitSync(this.listeners.OnceExit, n);
                else
                    this.visitSync(this.listeners.OnceExit, e)
        }
        return this.result
    }
    then(e, n) {
        return this.async().then(e, n)
    }
    toString() {
        return this.css
    }
    visitSync(e, n) {
        for (let[r,i] of e) {
            this.result.lastPlugin = r;
            let s;
            try {
                s = i(n, this.helpers)
            } catch (o) {
                throw this.handleError(o, n.proxyOf)
            }
            if (n.type !== "root" && n.type !== "document" && !n.parent)
                return !0;
            if (Dr(s))
                throw this.getAsyncError()
        }
    }
    visitTick(e) {
        let n = e[e.length - 1]
          , {node: r, visitors: i} = n;
        if (r.type !== "root" && r.type !== "document" && !r.parent) {
            e.pop();
            return
        }
        if (i.length > 0 && n.visitorIndex < i.length) {
            let[o,l] = i[n.visitorIndex];
            n.visitorIndex += 1,
            n.visitorIndex === i.length && (n.visitors = [],
            n.visitorIndex = 0),
            this.result.lastPlugin = o;
            try {
                return l(r.toProxy(), this.helpers)
            } catch (a) {
                throw this.handleError(a, r)
            }
        }
        if (n.iterator !== 0) {
            let o = n.iterator, l;
            for (; l = r.nodes[r.indexes[o]]; )
                if (r.indexes[o] += 1,
                !l[dt]) {
                    l[dt] = !0,
                    e.push(vp(l));
                    return
                }
            n.iterator = 0,
            delete r.indexes[o]
        }
        let s = n.events;
        for (; n.eventIndex < s.length; ) {
            let o = s[n.eventIndex];
            if (n.eventIndex += 1,
            o === yr) {
                r.nodes && r.nodes.length && (r[dt] = !0,
                n.iterator = r.getIterator());
                return
            } else if (this.listeners[o]) {
                n.visitors = this.listeners[o];
                return
            }
        }
        e.pop()
    }
    walkSync(e) {
        e[dt] = !0;
        let n = e0(e);
        for (let r of n)
            if (r === yr)
                e.nodes && e.each(i=>{
                    i[dt] || this.walkSync(i)
                }
                );
            else {
                let i = this.listeners[r];
                if (i && this.visitSync(i, e.toProxy()))
                    return
            }
    }
    warnings() {
        return this.sync().warnings()
    }
    get content() {
        return this.stringify().content
    }
    get css() {
        return this.stringify().css
    }
    get map() {
        return this.stringify().map
    }
    get messages() {
        return this.sync().messages
    }
    get opts() {
        return this.result.opts
    }
    get processor() {
        return this.result.processor
    }
    get root() {
        return this.sync().root
    }
    get[Symbol.toStringTag]() {
        return "LazyResult"
    }
}
;
vr.registerPostcss = t=>{
    Au = t
}
;
var n0 = vr;
vr.default = vr;
Q2.registerLazyResult(vr);
W2.registerLazyResult(vr);
let Z2 = Dv
  , q2 = ll
  , J2 = gf;
const e_ = hf;
let ju = class {
    constructor(e, n, r) {
        n = n.toString(),
        this.stringified = !1,
        this._processor = e,
        this._css = n,
        this._opts = r,
        this._map = void 0;
        let i, s = q2;
        this.result = new e_(this._processor,i,this._opts),
        this.result.css = n;
        let o = this;
        Object.defineProperty(this.result, "root", {
            get() {
                return o.root
            }
        });
        let l = new Z2(s,i,this._opts,n);
        if (l.isMap()) {
            let[a,u] = l.generate();
            a && (this.result.css = a),
            u && (this.result.map = u)
        } else
            l.clearAnnotation(),
            this.result.css = l.css
    }
    async() {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
    }
    catch(e) {
        return this.async().catch(e)
    }
    finally(e) {
        return this.async().then(e, e)
    }
    sync() {
        if (this.error)
            throw this.error;
        return this.result
    }
    then(e, n) {
        return this.async().then(e, n)
    }
    toString() {
        return this._css
    }
    warnings() {
        return []
    }
    get content() {
        return this.result.css
    }
    get css() {
        return this.result.css
    }
    get map() {
        return this.result.map
    }
    get messages() {
        return []
    }
    get opts() {
        return this.result.opts
    }
    get processor() {
        return this.result.processor
    }
    get root() {
        if (this._root)
            return this._root;
        let e, n = J2;
        try {
            e = n(this._css, this._opts)
        } catch (r) {
            this.error = r
        }
        if (this.error)
            throw this.error;
        return this._root = e,
        e
    }
    get[Symbol.toStringTag]() {
        return "NoWorkResult"
    }
}
;
var t_ = ju;
ju.default = ju;
let n_ = t_
  , r_ = n0
  , i_ = df
  , s_ = $i
  , Pi = class {
    constructor(e=[]) {
        this.version = "8.4.38",
        this.plugins = this.normalize(e)
    }
    normalize(e) {
        let n = [];
        for (let r of e)
            if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss),
            typeof r == "object" && Array.isArray(r.plugins))
                n = n.concat(r.plugins);
            else if (typeof r == "object" && r.postcssPlugin)
                n.push(r);
            else if (typeof r == "function")
                n.push(r);
            else if (!(typeof r == "object" && (r.parse || r.stringify)))
                throw new Error(r + " is not a PostCSS plugin");
        return n
    }
    process(e, n={}) {
        return !this.plugins.length && !n.parser && !n.stringifier && !n.syntax ? new n_(this,e,n) : new r_(this,e,n)
    }
    use(e) {
        return this.plugins = this.plugins.concat(this.normalize([e])),
        this
    }
}
;
var o_ = Pi;
Pi.default = Pi;
s_.registerProcessor(Pi);
i_.registerProcessor(Pi);
let l_ = ul
  , a_ = Lv
  , u_ = fl
  , c_ = pf
  , f_ = cl
  , d_ = $i
  , h_ = mf;
function ki(t, e) {
    if (Array.isArray(t))
        return t.map(i=>ki(i));
    let {inputs: n, ...r} = t;
    if (n) {
        e = [];
        for (let i of n) {
            let s = {
                ...i,
                __proto__: f_.prototype
            };
            s.map && (s.map = {
                ...s.map,
                __proto__: a_.prototype
            }),
            e.push(s)
        }
    }
    if (r.nodes && (r.nodes = t.nodes.map(i=>ki(i, e))),
    r.source) {
        let {inputId: i, ...s} = r.source;
        r.source = s,
        i != null && (r.source.input = e[i])
    }
    if (r.type === "root")
        return new d_(r);
    if (r.type === "decl")
        return new l_(r);
    if (r.type === "rule")
        return new h_(r);
    if (r.type === "comment")
        return new u_(r);
    if (r.type === "atrule")
        return new c_(r);
    throw new Error("Unknown node type: " + t.type)
}
var p_ = ki;
ki.default = ki;
let m_ = uf
  , r0 = ul
  , g_ = n0
  , y_ = Dn
  , yf = o_
  , v_ = ll
  , w_ = p_
  , i0 = df
  , x_ = Qv
  , s0 = fl
  , o0 = pf
  , S_ = hf
  , P_ = cl
  , k_ = gf
  , C_ = qv
  , l0 = mf
  , a0 = $i
  , E_ = al;
function F(...t) {
    return t.length === 1 && Array.isArray(t[0]) && (t = t[0]),
    new yf(t)
}
F.plugin = function(e, n) {
    let r = !1;
    function i(...o) {
        console && console.warn && !r && (r = !0,
        console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),
        {}.LANG && {}.LANG.startsWith("cn") && console.warn(e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
        let l = n(...o);
        return l.postcssPlugin = e,
        l.postcssVersion = new yf().version,
        l
    }
    let s;
    return Object.defineProperty(i, "postcss", {
        get() {
            return s || (s = i()),
            s
        }
    }),
    i.process = function(o, l, a) {
        return F([i(a)]).process(o, l)
    }
    ,
    i
}
;
F.stringify = v_;
F.parse = k_;
F.fromJSON = w_;
F.list = C_;
F.comment = t=>new s0(t);
F.atRule = t=>new o0(t);
F.decl = t=>new r0(t);
F.rule = t=>new l0(t);
F.root = t=>new a0(t);
F.document = t=>new i0(t);
F.CssSyntaxError = m_;
F.Declaration = r0;
F.Container = y_;
F.Processor = yf;
F.Document = i0;
F.Comment = s0;
F.Warning = x_;
F.AtRule = o0;
F.Result = S_;
F.Input = P_;
F.Rule = l0;
F.Root = a0;
F.Node = E_;
g_.registerPostcss(F);
var T_ = F;
F.default = F;
const Y = xp(T_);
Y.stringify;
Y.fromJSON;
Y.plugin;
Y.parse;
Y.list;
Y.document;
Y.comment;
Y.atRule;
Y.rule;
Y.decl;
Y.root;
Y.CssSyntaxError;
Y.Declaration;
Y.Container;
Y.Processor;
Y.Document;
Y.Comment;
Y.Warning;
Y.AtRule;
Y.Result;
Y.Input;
Y.Rule;
Y.Root;
Y.Node;
const Ci = {
    _origin: "https://api.emailjs.com"
}
  , __ = (t,e="https://api.emailjs.com")=>{
    Ci._userID = t,
    Ci._origin = e
}
  , u0 = (t,e,n)=>{
    if (!t)
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!e)
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0
}
;
class wp {
    constructor(e) {
        this.status = e ? e.status : 0,
        this.text = e ? e.responseText : "Network Error"
    }
}
const c0 = (t,e,n={})=>new Promise((r,i)=>{
    const s = new XMLHttpRequest;
    s.addEventListener("load", ({target: o})=>{
        const l = new wp(o);
        l.status === 200 || l.text === "OK" ? r(l) : i(l)
    }
    ),
    s.addEventListener("error", ({target: o})=>{
        i(new wp(o))
    }
    ),
    s.open("POST", Ci._origin + t, !0),
    Object.keys(n).forEach(o=>{
        s.setRequestHeader(o, n[o])
    }
    ),
    s.send(e)
}
)
  , O_ = (t,e,n,r)=>{
    const i = r || Ci._userID;
    return u0(i, t, e),
    c0("/api/v1.0/email/send", JSON.stringify({
        lib_version: "3.12.1",
        user_id: i,
        service_id: t,
        template_id: e,
        template_params: n
    }), {
        "Content-type": "application/json"
    })
}
  , M_ = t=>{
    let e;
    if (typeof t == "string" ? e = document.querySelector(t) : e = t,
    !e || e.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return e
}
  , L_ = (t,e,n,r)=>{
    const i = r || Ci._userID
      , s = M_(n);
    u0(i, t, e);
    const o = new FormData(s);
    return o.append("lib_version", "3.12.1"),
    o.append("service_id", t),
    o.append("template_id", e),
    o.append("user_id", i),
    c0("/api/v1.0/email/send-form", o)
}
  , R_ = {
    init: __,
    send: O_,
    sendForm: L_
};
function A_() {
    const [t,e] = M.useState("")
      , [n,r] = M.useState({
        user_first_name: "",
        user_last_name: "",
        user_company: "",
        user_email: "",
        user_number: "",
        user_country: "US",
        message: ""
    })
      , i = M.useRef()
      , s = o=>{
        o.preventDefault(),
        R_.sendForm("service_pcejqy4", "template_q623noo", i.current, "6TYSJm-fWgbs3ZqqP").then(l=>{
            console.log(l.text),
            console.log("message sent"),
            e("Thank you for your message! We will reach out ASAP."),
            i.current.reset(),
            r({
                user_first_name: "",
                user_last_name: "",
                user_company: "",
                user_email: "",
                user_number: "",
                user_country: "US",
                message: ""
            })
        }
        , l=>{
            console.log(l.text)
        }
        )
    }
    ;
    return x.jsx("div", {
        className: "py-10 bg-black",
        children: x.jsx("div", {
            id: "contact",
            className: "relative w-full sm:rounded-3xl mx-auto overflow-hidden py-32 mt-0",
            children: x.jsxs("section", {
                className: " bg-zinc-900 rounded-3xl mx-auto sm:w-1/2 w-11/12  px-10 py-10",
                children: [x.jsx("div", {
                    className: "mx-auto max-w-3xl text-center ",
                    children: x.jsx("h1", {
                        className: "text-5xl font-bold tracking-tight text-zinc-100 ",
                        children: "💌Contact Us"
                    })
                }), x.jsxs("form", {
                    ref: i,
                    onSubmit: s,
                    className: "mx-auto mt-16 max-w-2xl sm:mt-20",
                    children: [x.jsxs("div", {
                        className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3",
                        children: [x.jsxs("div", {
                            children: [x.jsx("label", {
                                htmlFor: "first-name",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "First name"
                            }), x.jsx("div", {
                                className: "mt-2.5 relative",
                                children: x.jsx("input", {
                                    type: "text",
                                    name: "user_first-name",
                                    id: "user_first-name",
                                    autoComplete: "given-name",
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                })
                            })]
                        }), x.jsxs("div", {
                            children: [x.jsx("label", {
                                htmlFor: "last-name",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "Last name"
                            }), x.jsx("div", {
                                className: "mt-2.5",
                                children: x.jsx("input", {
                                    type: "text",
                                    name: "user_last-name",
                                    id: "user_last-name",
                                    autoComplete: "family-name",
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                })
                            })]
                        }), x.jsxs("div", {
                            className: "",
                            children: [x.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "Email"
                            }), x.jsx("div", {
                                className: "mt-2.5",
                                children: x.jsx("input", {
                                    type: "email",
                                    name: "user_email",
                                    id: "user_email",
                                    autoComplete: "email",
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                })
                            })]
                        }), x.jsxs("div", {
                            className: "",
                            children: [x.jsx("label", {
                                htmlFor: "phone-number",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "Phone number"
                            }), x.jsxs("div", {
                                className: "relative mt-2.5",
                                children: [x.jsxs("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center",
                                    children: [x.jsx("label", {
                                        htmlFor: "country",
                                        className: "sr-only",
                                        children: "Country"
                                    }), x.jsxs("select", {
                                        id: "country",
                                        name: "user_country",
                                        value: n.user_country,
                                        onChange: o=>{
                                            r({
                                                ...n,
                                                user_country: o.target.value
                                            })
                                        }
                                        ,
                                        className: "h-full border-0 bg-white py-0 pl-4 pr-9 text-black ring-gray-100 ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm",
                                        children: [x.jsx("option", {
                                            children: "US"
                                        }), x.jsx("option", {
                                            children: "CA"
                                        }), x.jsx("option", {
                                            children: "EU"
                                        }), x.jsx("option", {
                                            children: "MX"
                                        })]
                                    })]
                                }), x.jsx("input", {
                                    type: "tel",
                                    name: "user_number",
                                    id: "user_number",
                                    autoComplete: "tel",
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 pl-20 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                })]
                            })]
                        }), x.jsxs("div", {
                            className: "sm:col-span-2",
                            children: [x.jsx("label", {
                                htmlFor: "company",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "School"
                            }), x.jsx("div", {
                                className: "mt-2.5",
                                children: x.jsx("input", {
                                    type: "text",
                                    name: "user_company",
                                    id: "user_company",
                                    autoComplete: "organization",
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                })
                            })]
                        }), x.jsxs("div", {
                            className: "sm:col-span-3",
                            children: [x.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-semibold leading-6 text-zinc-100",
                                children: "Message"
                            }), x.jsx("div", {
                                className: "mt-2.5",
                                children: x.jsx("textarea", {
                                    name: "message",
                                    id: "message",
                                    rows: 4,
                                    className: "block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6",
                                    defaultValue: ""
                                })
                            })]
                        })]
                    }), x.jsx("div", {
                        className: "mt-10",
                        children: x.jsx(B.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            type: "submit",
                            value: "Send",
                            className: "block w-full shadow-3xl bg-red-600 text-zinc-100 rounded-3xl px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:focus:ring-red-600",
                            children: "Let's talk"
                        })
                    }), t && x.jsx("div", {
                        className: " rounded-3xl w-full mx-auto text-3xl p-5 mt-4 text-red-600 font-base",
                        children: t
                    })]
                })]
            })
        })
    })
}
const j_ = ()=>{
    const [t,e] = M.useState(!0)
      , n = 2800;
    return M.useEffect(()=>{
        const r = document.querySelector("video");
        r.pause();
        const i = ()=>{
            window.scrollY > n ? e(!1) : e(!0)
        }
        ;
        return PC(s=>{
            r.readyState && (r.currentTime = r.duration * s * 2.5)
        }
        ),
        window.addEventListener("scroll", i),
        ()=>{
            window.removeEventListener("scroll", i)
        }
    }
    , []),
    x.jsx("div", {
        className: "relative",
        style: {
            height: "700px"
        },
        children: x.jsx("div", {
            className: `w-full h-screen object-cover ${t ? "fixed top-0 left-0" : "relative"}`,
            children: x.jsx("video", {
                muted: !0,
                className: "w-full h-full object-cover",
                children: x.jsx("source", {
                    src: "rocket.mp4",
                    type: "video/mp4"
                })
            })
        })
    })
}
  , N_ = ()=>x.jsxs(B.div, {
    id: "home",
    className: "relative w-full h-screen justify-center bg-black",
    children: [x.jsxs(B.h1, {
        className: "md:text-9xl text-7xl text-white font-semibold w-full bottom-1/2 mx-auto absolute z-10 text-center mb-2",
        children: [x.jsx("span", {
            className: "text-red-600",
            children: "Scarlet"
        }), "Hacks"]
    }), x.jsx(B.nav, {
        initial: {
            scale: 1,
            x: 0,
            width: 90
        },
        animate: {
            scale: 1,
            x: 0,
            width: "80%"
        },
        transition: {
            duration: 1.5,
            delay: .5
        },
        className: "relative top-1/2 rounded-3xl mx-auto z-50 overflow-hidden bg-zinc-900 shadow-lg max-w-[225px]",
        children: x.jsxs(B.ul, {
            className: "font-base w-[225px] cursor-pointer overflow-hidden flex-column flex justify-between  rounded-3xl p-2",
            children: [x.jsx("li", {
                className: " rounded-xl  hover:text-black w-1/4 p-0 ml-3",
                children: x.jsx(Ee, {
                    to: "home",
                    className: "",
                    smooth: !0,
                    duration: 1e3,
                    children: x.jsx("img", {
                        src: yu,
                        alt: "Home"
                    })
                })
            }), x.jsx(B.li, {
                initial: {
                    opacity: "0%"
                },
                animate: {
                    opacity: "100%"
                },
                transition: {
                    duration: 1,
                    delay: 1
                },
                className: " text-zinc-500 py-1  w-3/4 rounded-xl hover:text-zinc-100 ",
                children: x.jsx(Ee, {
                    to: "aboutme",
                    className: "text-3xl ",
                    smooth: !0,
                    duration: 5e3,
                    children: "Sign Up"
                })
            })]
        })
    }), x.jsx(B.div, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 1.5,
            delay: 1
        },
        className: "relative w-full z-50 top-3/4",
        children: x.jsx("span", {
            className: "hover:text-zinc-100 text-4xl text-zinc-500 bg-zinc-900 cursor-pointer rounded-3xl py-2 px-4 shadow-lg",
            children: x.jsx(Ee, {
                to: "contact",
                smooth: !0,
                duration: 6e3,
                spy: !0,
                children: "↓"
            })
        })
    })]
})
  , D_ = ()=>x.jsx(x.Fragment, {
    children: x.jsxs("div", {
        className: "app",
        children: [x.jsx(OT, {
            style: {
                zIndex: 1e6
            }
        }), x.jsx(N_, {
            style: {
                zIndex: 1e4
            }
        }), x.jsx(j_, {}), x.jsx(VT, {}), x.jsx(CC, {}), x.jsx(IT, {}), x.jsx(A_, {})]
    })
})
  , b_ = document.getElementById("root")
  , V_ = Dg(b_);
V_.render(x.jsx(zu.StrictMode, {
    children: x.jsx(D_, {})
}));

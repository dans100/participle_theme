/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document) throw new Error('jQuery requires a window with a document');
            return b(a);
          })
    : b(a);
})('undefined' != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = '2.1.4',
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: '',
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a ? (0 > a ? this[a + this.length] : this[a]) : d.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return n.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          'boolean' == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            'object' == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e ? ((e = !1), (f = c && n.isArray(c) ? c : [])) : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return 'function' === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return 'object' !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf')
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ''
          : 'object' == typeof a || 'function' == typeof a
          ? h[i.call(a)] || 'object'
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf('use strict')
              ? ((b = l.createElement('script')), (b.text = a), l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, 'ms-').replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? '' : (a + '').replace(o, '');
      },
      makeArray: function (a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          'string' == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k,
    }),
    n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
      h['[object ' + b + ']'] = b.toLowerCase();
    });
  function s(a) {
    var b = 'length' in a && a.length,
      c = n.type(a);
    return 'function' === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : 'array' === c || 0 === b || ('number' == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = 'sizzle' + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      L = '[\\x20\\t\\r\\n\\f]',
      M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      N = M.replace('w', 'w#'),
      O =
        '\\[' +
        L +
        '*(' +
        M +
        ')(?:' +
        L +
        '*([*^$|!~]?=)' +
        L +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        N +
        '))|)' +
        L +
        '*\\]',
      P =
        ':(' +
        M +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        O +
        ')*)|.*)\\)|)',
      Q = new RegExp(L + '+', 'g'),
      R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'),
      S = new RegExp('^' + L + '*,' + L + '*'),
      T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'),
      U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'),
      V = new RegExp(P),
      W = new RegExp('^' + N + '$'),
      X = {
        ID: new RegExp('^#(' + M + ')'),
        CLASS: new RegExp('^\\.(' + M + ')'),
        TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + O),
        PSEUDO: new RegExp('^' + P),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            L +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            L +
            '*(?:([+-]|)' +
            L +
            '*(\\d+)|))' +
            L +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + K + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            L +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            L +
            '*((?:-\\d)?\\d*)' +
            L +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'),
      da = function (a, b, c) {
        var d = '0x' + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        'string' != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (((s = r = u), (w = b), (x = 1 !== k && a), 1 === k && 'object' !== b.nodeName.toLowerCase())) {
            (o = g(a)),
              (r = b.getAttribute('id')) ? (s = r.replace(ba, '\\$&')) : b.setAttribute('id', s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(','));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute('id');
            }
        }
      }
      return i(a.replace(R, '$1'), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], (b[c + ' '] = e);
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement('div');
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split('|'),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && 'undefined' != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? 'HTML' !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener('unload', ea, !1)
                  : e.attachEvent && e.attachEvent('onunload', ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = 'i'), !a.getAttribute('className');
              })),
              (c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length;
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (o.appendChild(a).id = u), !g.getElementsByName || !g.getElementsByName(u).length;
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ('undefined' != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute('id') === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return 'undefined' != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ('*' === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length && q.push('[*^$]=' + L + '*(?:\'\'|"")'),
                    a.querySelectorAll('[selected]').length || q.push('\\[' + L + '*(?:value|' + K + ')'),
                    a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='),
                    a.querySelectorAll(':checked').length || q.push(':checked'),
                    a.querySelectorAll('a#' + u + '+*').length || q.push('.#.+[+~]');
                }),
                ja(function (a) {
                  var b = g.createElement('input');
                  b.setAttribute('type', 'hidden'),
                    a.appendChild(b).setAttribute('name', 'D'),
                    a.querySelectorAll('[name=d]').length && q.push('name' + L + '*[*^$|!~]?='),
                    a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'),
                    a.querySelectorAll('*,:x'),
                    q.push(',.*:');
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, 'div')), s.call(a, "[s!='']:x"), r.push('!=', P);
                }),
              (q = q.length && new RegExp(q.join('|'))),
              (r = r.length && new RegExp(r.join('|'))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                        1 & d || (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error('Syntax error, unrecognized expression: ' + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (((l = !c.detectDuplicates), (k = !c.sortStable && a.slice(0)), a.sort(B), l)) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = '',
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ('string' == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da)),
                '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                'nth' === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3]))),
                    (a[5] = +(a[7] + a[8] || 'odd' === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || '')
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(')', c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return '*' === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + ' '];
              return (
                b ||
                ((b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) &&
                  y(a, function (a) {
                    return b.test(
                      ('string' == typeof a.className && a.className) ||
                        ('undefined' != typeof a.getAttribute && a.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? '!=' === b
                  : b
                  ? ((e += ''),
                    '=' === b
                      ? e === c
                      : '!=' === b
                      ? e !== c
                      : '^=' === b
                      ? c && 0 === e.indexOf(c)
                      : '*=' === b
                      ? c && e.indexOf(c) > -1
                      : '$=' === b
                      ? c && e.slice(-c.length) === c
                      : '~=' === b
                      ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > -1
                      : '|=' === b
                      ? e === c || e.slice(0, c.length + 1) === c + '-'
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = 'nth' !== a.slice(0, 3),
                g = 'last' !== a.slice(-4),
                h = 'of-type' === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? 'nextSibling' : 'previousSibling',
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p])) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                          o = p = 'only' === a && !o && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                      else
                        while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                          if (
                            (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error('unsupported pseudo: ' + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, '', b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, '$1'));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || '') || ga.error('unsupported lang: ' + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if ((c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')))
                      return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + '-');
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return ('input' === b && !!a.checked) || ('option' === b && !!a.selected);
            },
            selected: function (a) {
              return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ('input' === b && 'button' === a.type) || 'button' === b;
            },
            text: function (a) {
              var b;
              return (
                'input' === a.nodeName.toLowerCase() &&
                'text' === a.type &&
                (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + ' '];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()), f.push({ value: c, type: e[0].replace(R, ' ') }), (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()), f.push({ value: c, type: g, matches: e }), (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && 'parentNode' === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d])) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (((i = b[u] || (b[u] = {})), (h = i[d]) && h[0] === w && h[1] === f)) return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || '*', h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[' '],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e = (!g && (d || c !== j)) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 && ra(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = '0',
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG('*', k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + ' '];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = 'function' == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])
            ) {
              if (((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]), !b)) return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(k.matches[0].replace(ca, da), (aa.test(j[0].type) && pa(b.parentNode)) || b))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a)) return H.apply(e, f), e;
                break;
              }
            }
          }
          return (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b), e;
        }),
      (c.sortStable = u.split('').sort(B).join('') === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement('div'));
      })),
      ja(function (a) {
        return (a.innerHTML = "<a href='#'></a>"), '#' === a.firstChild.getAttribute('href');
      }) ||
        ka('type|href|height|width', function (a, b, c) {
          return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = '<input/>'),
            a.firstChild.setAttribute('value', ''),
            '' === a.firstChild.getAttribute('value')
          );
        })) ||
        ka('value', function (a, b, c) {
          return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute('disabled');
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[':'] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ('string' == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ':not(' + a + ')'),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ('string' != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)), (d.selector = this.selector ? this.selector + ' ' + a : a), d
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ('string' == typeof a) {
        if (
          ((c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? 'undefined' != typeof y.ready
          ? y.ready(a)
          : a(n)
        : (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    n.fn.extend({
      has: function (a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function (a) {
        return a
          ? 'string' == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      },
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return n.dir(a, 'parentNode');
      },
      parentsUntil: function (a, b, c) {
        return n.dir(a, 'parentNode', c);
      },
      next: function (a) {
        return D(a, 'nextSibling');
      },
      prev: function (a) {
        return D(a, 'previousSibling');
      },
      nextAll: function (a) {
        return n.dir(a, 'nextSibling');
      },
      prevAll: function (a) {
        return n.dir(a, 'previousSibling');
      },
      nextUntil: function (a, b, c) {
        return n.dir(a, 'nextSibling', c);
      },
      prevUntil: function (a, b, c) {
        return n.dir(a, 'previousSibling', c);
      },
      siblings: function (a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return n.sibling(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          'Until' !== a.slice(-5) && (d = c),
          d && 'string' == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1), h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                'function' === d ? (a.unique && k.has(c)) || h.push(c) : c && c.length && 'string' !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              n.each(arguments, function (a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (f = 0), this;
        },
        disable: function () {
          return (h = i = b = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return !h || (c && !i) || ((b = b || []), (b = [a, b.slice ? b.slice() : b]), d ? i.push(b) : j(b)), this;
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return k;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ['resolve', 'done', n.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', n.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', n.Callbacks('memory')],
          ],
          c = 'pending',
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify)
                        : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + 'With'](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + 'With'] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
      },
    });
  function I() {
    l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      H ||
        ((H = n.Deferred()),
        'complete' === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ('object' === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function (a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ('string' == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && 'string' == typeof b && void 0 === c)
          ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)), b in g ? (d = [b, e]) : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (((d = 'data-' + b.replace(O, '-$1').toLowerCase()), (c = a.getAttribute(d)), 'string' == typeof c)) {
        try {
          c =
            'true' === c
              ? !0
              : 'false' === c
              ? !1
              : 'null' === c
              ? null
              : +c + '' === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && ((e = M.get(f)), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
            c = g.length;
            while (c--)
              g[c] && ((d = g[c].name), 0 === d.indexOf('data-') && ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, 'hasDataAttrs', !0);
          }
          return e;
        }
        return 'object' == typeof a
          ? this.each(function () {
              M.set(this, a);
            })
          : J(
              this,
              function (b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || 'fx') + 'queue'),
            (d = L.get(a, b)),
            c && (!d || n.isArray(c) ? (d = L.access(a, b, n.makeArray(c))) : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || 'fx';
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        'inprogress' === e && ((e = c.shift()), d--),
          e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + 'queueHooks';
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks('once memory').add(function () {
              L.remove(a, [b + 'queue', c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          'string' != typeof a && ((b = a), (a = 'fx'), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || 'fx', []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        'string' != typeof a && ((b = a), (a = void 0)), (a = a || 'fx');
        while (g--) (c = L.get(f[g], a + 'queueHooks')), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ['Top', 'Right', 'Bottom', 'Left'],
    S = function (a, b) {
      return (a = b || a), 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
    },
    T = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement('div')),
      c = l.createElement('input');
    c.setAttribute('type', 'radio'),
      c.setAttribute('checked', 'checked'),
      c.setAttribute('name', 't'),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = '<textarea>x</textarea>'),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = 'undefined';
  k.focusinBubbles = 'onfocusin' in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
              }),
          (b = (b || '').match(E) || ['']),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || '').split('.').sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join('.'),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) || (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || '').match(E) || ['']), (j = b.length);
        while (j--)
          if (((h = Y.exec(b[j]) || []), (o = q = h[1]), (p = (h[2] || '').split('.').sort()), o)) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ('**' !== d || !k.selector)) ||
                  (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, 'type') ? b.type : b,
        r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf('.') >= 0 && ((r = q.split('.')), (q = r.shift()), r.sort()),
          (k = q.indexOf(':') < 0 && 'on' + q),
          (b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join('.')),
          (b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), (h = g);
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle')),
            m && m.apply(g, c),
            (m = k && g[k]),
            m && m.apply && n.acceptData(g) && ((b.result = m.apply(g, c)), b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, 'events') || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (((i[0] = a), (a.delegateTarget = this), !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)),
              void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || 'click' !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + ' '),
                void 0 === d[e] &&
                  (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? Z : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z), a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z), a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ('object' == typeof a) {
          'string' != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d && ('string' == typeof b ? ((d = c), (c = void 0)) : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function () {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler),
            this
          );
        if ('object' == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || 'function' == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ba = /<([\w:]+)/,
    ca = /<|&#?\w+;/,
    da = /<(?:script|style|link)/i,
    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fa = /^$|\/(?:java|ecma)script/i,
    ga = /^true\/(.*)/,
    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ia = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  (ia.optgroup = ia.option), (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead), (ia.th = ia.td);
  function ja(a, b) {
    return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr')
      ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }
  function ka(a) {
    return (a.type = (null !== a.getAttribute('type')) + '/' + a.type), a;
  }
  function la(a) {
    var b = ga.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute('type'), a;
  }
  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
  }
  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))) {
        delete g.handle, (g.events = {});
        for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function oa(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || '*')
      : a.querySelectorAll
      ? a.querySelectorAll(b || '*')
      : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    'input' === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || n.isXMLDoc(a)))
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
      if (b)
        if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
        else na(a, h);
      return (g = oa(h, 'script')), g.length > 0 && ma(g, !i && oa(a, 'script')), h;
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
        if (((e = a[m]), e || 0 === e))
          if ('object' === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
            (f = f || k.appendChild(b.createElement('div'))),
              (g = (ba.exec(e) || ['', ''])[1].toLowerCase()),
              (h = ia[g] || ia._default),
              (f.innerHTML = h[1] + e.replace(aa, '<$1></$2>') + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = '');
          } else l.push(b.createTextNode(e));
      (k.textContent = ''), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)), (f = oa(k.appendChild(e), 'script')), i && ma(f), c)
        ) {
          j = 0;
          while ((e = f[j++])) fa.test(e.type || '') && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    },
  }),
    n.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
          b || 1 !== c.nodeType || n.cleanData(oa(c)),
            c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, 'script')), c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ''));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if ('string' == typeof a && !da.test(a) && !ia[(ba.exec(a) || ['', ''])[1].toLowerCase()]) {
              a = a.replace(aa, '<$1></$2>');
              try {
                for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode), n.cleanData(oa(this)), a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && 'string' == typeof p && !k.checkClone && ea.test(p)))
          return this.each(function (c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(oa(c, 'script'), ka), g = f.length; l > j; j++)
            (h = c), j !== o && ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, 'script'))), b.call(this[j], h, j);
          if (g)
            for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)
              (h = f[j]),
                fa.test(h.type || '') &&
                  !L.access(h, 'globalEval') &&
                  n.contains(i, h) &&
                  (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, '')));
        }
        return this;
      },
    }),
    n.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)), n(e[h])[b](c), f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qa,
    ra = {};
  function sa(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
    return e.detach(), f;
  }
  function ta(a) {
    var b = l,
      c = ra[a];
    return (
      c ||
        ((c = sa(a, b)),
        ('none' !== c && c) ||
          ((qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)),
          (b = qa[0].contentDocument),
          b.write(),
          b.close(),
          (c = sa(a, b)),
          qa.detach()),
        (ra[a] = c)),
      c
    );
  }
  var ua = /^margin/,
    va = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wa(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        va.test(g) &&
          ua.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + '' : g
    );
  }
  function ya(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement('div'),
      f = l.createElement('div');
    if (f.style) {
      (f.style.backgroundClip = 'content-box'),
        (f.cloneNode(!0).style.backgroundClip = ''),
        (k.clearCloneStyle = 'content-box' === f.style.backgroundClip),
        (e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
          (f.innerHTML = ''),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = '1%' !== g.top), (c = '4px' === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function () {
            return g(), b;
          },
          boxSizingReliable: function () {
            return null == c && g(), c;
          },
          reliableMarginRight: function () {
            var b,
              c = f.appendChild(l.createElement('div'));
            return (
              (c.style.cssText = f.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (c.style.marginRight = c.style.width = '0'),
              (f.style.width = '1px'),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          },
        });
    }
  })(),
    (n.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var za = /^(none|table(?!-c[ea]).+)/,
    Aa = new RegExp('^(' + Q + ')(.*)$', 'i'),
    Ba = new RegExp('^([+-])=(' + Q + ')', 'i'),
    Ca = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Da = { letterSpacing: '0', fontWeight: '400' },
    Ea = ['Webkit', 'O', 'Moz', 'ms'];
  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Ea.length;
    while (e--) if (((b = Ea[e] + c), b in a)) return b;
    return d;
  }
  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }
  function Ha(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
      'margin' === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)),
            'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e)))
          : ((g += n.css(a, 'padding' + R[f], !0, e)),
            'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
    return g;
  }
  function Ia(a, b, c) {
    var d = !0,
      e = 'width' === b ? a.offsetWidth : a.offsetHeight,
      f = wa(a),
      g = 'border-box' === n.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (((e = xa(a, b, f)), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
    }
    return e + Ha(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }
  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, 'olddisplay')),
          (c = d.style.display),
          b
            ? (f[g] || 'none' !== c || (d.style.display = ''),
              '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', ta(d.nodeName))))
            : ((e = S(d)), ('none' === c && e) || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && 'none' !== d.style.display && '' !== d.style.display) || (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, 'opacity');
            return '' === c ? '1' : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              'string' === f && (e = Ba.exec(c)) && ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))), (f = 'number')),
              null != c &&
                c === c &&
                ('number' !== f || n.cssNumber[h] || (c += 'px'),
                k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'),
                (g && 'set' in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && 'get' in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xa(a, b, d)),
        'normal' === e && b in Da && (e = Da[b]),
        '' === c || c ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
      );
    },
  }),
    n.each(['height', 'width'], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? za.test(n.css(a, 'display')) && 0 === a.offsetWidth
              ? n.swap(a, Ca, function () {
                  return Ia(a, b, d);
                })
              : Ia(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && wa(a);
          return Ga(a, c, d ? Ha(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
        },
      };
    }),
    (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
      return b ? n.swap(a, { display: 'inline-block' }, xa, [a, 'marginRight']) : void 0;
    })),
    n.each({ margin: '', padding: '', border: 'Width' }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }),
    n.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Ja(this, !0);
      },
      hide: function () {
        return Ja(this);
      },
      toggle: function (a) {
        return 'boolean' == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ka),
    (Ka.prototype = {
      constructor: Ka,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || 'swing'),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? '' : 'px'));
      },
      cur: function () {
        var a = Ka.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ka.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ka.prototype.init.prototype = Ka.prototype),
    (Ka.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, '')), b && 'auto' !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
            ? n.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (n.fx = Ka.prototype.init),
    (n.fx.step = {});
  var La,
    Ma,
    Na = /^(?:toggle|show|hide)$/,
    Oa = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'),
    Pa = /queueHooks$/,
    Qa = [Va],
    Ra = {
      '*': [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? '' : 'px'),
            g = (n.cssNumber[a] || ('px' !== f && +d)) && Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || '.5'), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return e && ((g = c.start = +g || +d || 0), (c.unit = f), (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])), c;
        },
      ],
    };
  function Sa() {
    return (
      setTimeout(function () {
        La = void 0;
      }),
      (La = n.now())
    );
  }
  function Ta(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = R[d]), (e['margin' + c] = e['padding' + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++)
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Va(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, 'fxshow');
    c.queue ||
      ((h = n._queueHooks(a, 'fx')),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ('height' in b || 'width' in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, 'display')),
        (k = 'none' === j ? L.get(a, 'olddisplay') || ta(a.nodeName) : j),
        'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')),
      c.overflow &&
        ((o.overflow = 'hidden'),
        l.always(function () {
          (o.overflow = c.overflow[0]), (o.overflowX = c.overflow[1]), (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Na.exec(e))) {
        if ((delete b[d], (f = f || 'toggle' === e), e === (p ? 'hide' : 'show'))) {
          if ('show' !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m)) 'inline' === ('none' === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? 'hidden' in q && (p = q.hidden) : (q = L.access(a, 'fxshow', {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          L.remove(a, 'fxshow');
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ua(p ? q[d] : 0, d, l)),
          d in q || ((q[d] = g.start), p && ((g.end = g.start), (g.start = 'width' === d || 'height' === d ? 1 : 0)));
    }
  }
  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && 'expand' in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xa(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qa.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = La || Sa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++) if ((d = Qa[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ua, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.split(' '));
      for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && 'object' == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : 'number' == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = 'fx'),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, 'finish')) && b.stop(!0);
          };
        return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          'string' != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || 'fx', []),
          this.each(function () {
            var b = !0,
              e = null != a && a + 'queueHooks',
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || 'fx'),
          this.each(function () {
            var b,
              c = L.get(this),
              d = c[a + 'queue'],
              e = c[a + 'queueHooks'],
              f = n.timers,
              g = d ? d.length : 0;
            for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
              f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(['toggle', 'show', 'hide'], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Ta('show'),
        slideUp: Ta('hide'),
        slideToggle: Ta('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (La = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      clearInterval(Ma), (Ma = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || 'fx'),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = l.createElement('input'),
        b = l.createElement('select'),
        c = b.appendChild(l.createElement('option'));
      (a.type = 'checkbox'),
        (k.checkOn = '' !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement('input')),
        (a.value = 't'),
        (a.type = 'radio'),
        (k.radioValue = 't' === a.value);
    })();
  var Ya,
    Za,
    $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()), (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
              void 0 === c
                ? d && 'get' in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && 'set' in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ''), c)
                : void n.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++])) (d = n.propFix[c] || c), n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
              var c = a.value;
              return a.setAttribute('type', b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Za = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $a[b] || n.find.attr;
      $a[b] = function (a, b, d) {
        var e, f;
        return d || ((f = $a[b]), ($a[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), ($a[b] = f)), e;
      };
    });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      propFix: { for: 'htmlFor', class: 'className' },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && 'get' in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
          },
        },
      },
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    n.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 'string' == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (
            ((c = this[i]), (d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : ' ')))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ('string' == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (
            ((c = this[i]), (d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : '')))
          ) {
            f = 0;
            while ((e = b[f++])) while (d.indexOf(' ' + e + ' ') >= 0) d = d.replace(' ' + e + ' ', ' ');
            (g = a ? n.trim(d) : ''), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function (c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ('string' === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++])) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || 'boolean' === c) &&
                      (this.className && L.set(this, '__className__', this.className),
                      (this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || ''));
                }
          );
    },
    hasClass: function (a) {
      for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ab, ' ').indexOf(b) >= 0) return !0;
      return !1;
    },
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = '')
                  : 'number' == typeof e
                  ? (e += '')
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? '' : a + '';
                    })),
                (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]),
                (b && 'set' in b && void 0 !== b.set(this, e, 'value')) || (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && 'get' in b && void 0 !== (c = b.get(e, 'value'))
              ? c
              : ((c = e.value), 'string' == typeof c ? c.replace(bb, '') : null == c ? '' : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, 'value');
            return null != b ? b : n.trim(n.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = 'select-one' === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) ||
                  (c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--) (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(['radio', 'checkbox'], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b) ? (a.checked = n.inArray(n(a).val(), b) >= 0) : void 0;
        },
      }),
        k.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
          });
    }),
    n.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
      },
    });
  var cb = n.now(),
    db = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + '');
  }),
    (n.parseXML = function (a) {
      var b, c;
      if (!a || 'string' != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, 'text/xml'));
      } catch (d) {
        b = void 0;
      }
      return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
    });
  var eb = /#.*$/,
    fb = /([?&])_=[^&]*/,
    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ib = /^(?:GET|HEAD)$/,
    jb = /^\/\//,
    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lb = {},
    mb = {},
    nb = '*/'.concat('*'),
    ob = a.location.href,
    pb = kb.exec(ob.toLowerCase()) || [];
  function qb(a) {
    return function (b, c) {
      'string' != typeof b && ((c = b), (b = '*'));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          '+' === d[0] ? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }
  function rb(a, b, c, d) {
    var e = {},
      f = a === mb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return 'string' != typeof j || f || e[j] ? (f ? !(i = j) : void 0) : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e['*'] && g('*'));
  }
  function sb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ('*' === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + ' ' + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ('*' === f) f = i;
        else if ('*' !== i && i !== f) {
          if (((g = j[i + ' ' + f] || j['* ' + f]), !g))
            for (e in j)
              if (((h = e.split(' ')), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]]))) {
                g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a['throws']) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return { state: 'parsererror', error: g ? l : 'No conversion from ' + i + ' to ' + f };
              }
        }
    return { state: 'success', data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: 'GET',
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': nb,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
      converters: { '* text': String, 'text html': !0, 'text json': n.parseJSON, 'text xml': n.parseXML },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      'object' == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks('once memory'),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = 'canceled',
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || ob) + '').replace(eb, '').replace(jb, pb[1] + '//')),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || '*')
          .toLowerCase()
          .match(E) || ['']),
        null == k.crossDomain &&
          ((h = kb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pb[1] &&
              h[2] === pb[2] &&
              (h[3] || ('http:' === h[1] ? '80' : '443')) === (pb[3] || ('http:' === pb[1] ? '80' : '443')))
          ))),
        k.data && k.processData && 'string' != typeof k.data && (k.data = n.param(k.data, k.traditional)),
        rb(lb, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger('ajaxStart'),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ib.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data && ((d = k.url += (db.test(d) ? '&' : '?') + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fb.test(d) ? d.replace(fb, '$1_=' + cb++) : d + (db.test(d) ? '&' : '?') + '_=' + cb++)),
        k.ifModified &&
          (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]),
          n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader('Content-Type', k.contentType),
        v.setRequestHeader(
          'Accept',
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + nb + '; q=0.01' : '')
            : k.accepts['*']
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = 'abort';
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rb(mb, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger('ajaxSend', [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort('timeout');
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, 'No Transport');
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ''),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tb(k, v, f)),
          (u = ub(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader('Last-Modified')),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader('etag')),
                w && (n.etag[d] = w)),
              204 === a || 'HEAD' === k.type
                ? (x = 'nocontent')
                : 304 === a
                ? (x = 'notmodified')
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = 'error'), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ''),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i && (m.trigger('ajaxComplete', [v, k]), --n.active || n.event.trigger('ajaxStop')));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, 'json');
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, 'script');
    },
  }),
    n.each(['get', 'post'], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({ url: a, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          n.isFunction(a)
            ? function (b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var vb = /%20/g,
    wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wb.test(a) ? d(a, e) : Ab(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
      });
    else if (c || 'object' !== n.type(b)) d(a, b);
    else for (e in b) Ab(a + '[' + e + ']', b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? '' : b),
          (d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join('&').replace(vb, '+');
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, 'elements');
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(':disabled') &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, '\r\n') };
                })
              : { name: b.name, value: c.replace(xb, '\r\n') };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bb = 0,
    Cb = {},
    Db = { 0: 200, 1223: 204 },
    Eb = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent('onunload', function () {
      for (var a in Cb) Cb[a]();
    }),
    (k.cors = !!Eb && 'withCredentials' in Eb),
    (k.ajax = Eb = !!Eb),
    n.ajaxTransport(function (a) {
      var b;
      return k.cors || (Eb && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Bb;
              if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields))
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Cb[g],
                    (b = f.onload = f.onerror = null),
                    'abort' === a
                      ? f.abort()
                      : 'error' === a
                      ? d(f.status, f.statusText)
                      : d(
                          Db[f.status] || f.status,
                          f.statusText,
                          'string' == typeof f.responseText ? { text: f.responseText } : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b('error')),
                (b = Cb[g] = b('abort'));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter('script', function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }),
    n.ajaxTransport('script', function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = n('<script>')
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                'load error',
                (c = function (a) {
                  b.remove(), (c = null), a && e('error' === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Fb = [],
    Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + '_' + cb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter('json jsonp', function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gb.test(b.url)
            ? 'url'
            : 'string' == typeof b.data &&
              !(b.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              Gb.test(b.data) &&
              'data');
      return h || 'jsonp' === b.dataTypes[0]
        ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gb, '$1' + e))
            : b.jsonp !== !1 && (b.url += (db.test(b.url) ? '&' : '?') + b.jsonp + '=' + e),
          (b.converters['script json'] = function () {
            return g || n.error(e + ' was not called'), g[0];
          }),
          (b.dataTypes[0] = 'json'),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          'script')
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || 'string' != typeof a) return null;
      'boolean' == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    });
  var Hb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ('string' != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(' ');
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b) ? ((c = b), (b = void 0)) : b && 'object' == typeof b && (e = 'POST'),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: 'html', data: b })
          .done(function (a) {
            (f = arguments), g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (a, b) {
      n.fn[b] = function (a) {
        return this.on(b, a);
      };
    }),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Ib = a.document.documentElement;
  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, 'position'),
        l = n(a),
        m = {};
      'static' === k && (a.style.position = 'relative'),
        (h = l.offset()),
        (f = n.css(a, 'top')),
        (i = n.css(a, 'left')),
        (j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1),
        j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        'using' in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                (c = Jb(f)),
                { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            'fixed' === n.css(c, 'position')
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], 'html') || (d = a.offset()),
                (d.top += n.css(a[0], 'borderTopWidth', !0)),
                (d.left += n.css(a[0], 'borderLeftWidth', !0))),
            { top: b.top - d.top - n.css(c, 'marginTop', !0), left: b.left - d.left - n.css(c, 'marginLeft', !0) }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || Ib;
          while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position')) a = a.offsetParent;
          return a || Ib;
        });
      },
    }),
    n.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (b, c) {
      var d = 'pageYOffset' === c;
      n.fn[b] = function (e) {
        return J(
          this,
          function (b, e, f) {
            var g = Jb(b);
            return void 0 === f
              ? g
                ? g[c]
                : b[e]
              : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : (b[e] = f));
          },
          b,
          e,
          arguments.length,
          null
        );
      };
    }),
    n.each(['top', 'left'], function (a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
        return c ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
      });
    }),
    n.each({ Height: 'height', Width: 'width' }, function (a, b) {
      n.each({ padding: 'inner' + a, content: b, '': 'outer' + a }, function (c, d) {
        n.fn[d] = function (d, e) {
          var f = arguments.length && (c || 'boolean' != typeof d),
            g = c || (d === !0 || e === !0 ? 'margin' : 'border');
          return J(
            this,
            function (b, c, d) {
              var e;
              return n.isWindow(b)
                ? b.document.documentElement['client' + a]
                : 9 === b.nodeType
                ? ((e = b.documentElement),
                  Math.max(
                    b.body['scroll' + a],
                    e['scroll' + a],
                    b.body['offset' + a],
                    e['offset' + a],
                    e['client' + a]
                  ))
                : void 0 === d
                ? n.css(b, c, g)
                : n.style(b, c, d, g);
            },
            b,
            f ? d : void 0,
            f,
            null
          );
        };
      });
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return n;
      });
  var Kb = a.jQuery,
    Lb = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});

/* Slick */
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';
  var Slick = window.Slick || {};
  Slick = (function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3,
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false,
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
    }
    return Slick;
  })();
  Slick.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack
      .find('.slick-active')
      .attr({ 'aria-hidden': 'false' })
      .find('a, input, button, select')
      .attr({ tabindex: '0' });
  };
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;
    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({ height: targetHeight }, _.options.speed);
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({ animStart: _.currentLeft }).animate(
          { animStart: targetLeft },
          {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function (now) {
              now = Math.ceil(now);
              if (_.options.vertical === false) {
                animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                _.$slideTrack.css(animProps);
              } else {
                animProps[_.animType] = 'translate(0px,' + now + 'px)';
                _.$slideTrack.css(animProps);
              }
            },
            complete: function () {
              if (callback) {
                callback.call();
              }
            },
          }
        );
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  Slick.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    return asNavFor;
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget();
    if (asNavFor !== null && typeof asNavFor === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;
          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }
      _.slideHandler(slideTo);
    }
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', tabindex: '-1' });
      }
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dot;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');
      dot = $('<ul />').addClass(_.options.dotsClass);
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = dot.appendTo(_.options.appendDots);
      _.$dots.find('li').first().addClass('slick-active');
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element)
        .attr('data-slick-index', index)
        .data('originalStyling', $(element).attr('style') || '');
    });
    _.$slider.addClass('slick-slider');
    _.$slideTrack =
      _.slideCount === 0
        ? $('<div class="slick-track"/>').appendTo(_.$slider)
        : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider
        .children()
        .children()
        .children()
        .css({ width: 100 / _.options.slidesPerRow + '%', display: 'inline-block' });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset;
    if ($target.is('a')) {
      event.preventDefault();
    }
    if (!$target.is('li')) {
      $target = $target.closest('li');
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots)
        .off('click.slick', _.changeSlide)
        .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
        .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }
    _.$slider.off('focus.slick blur.slick');
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    _.$list.off('click.slick', _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;
    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $('.slick-cloned', _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .removeAttr('aria-hidden aria-disabled tabindex')
        .css('display', '');
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .removeAttr('aria-hidden aria-disabled tabindex')
        .css('display', '');
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides
        .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
        .removeAttr('aria-hidden')
        .removeAttr('data-slick-index')
        .each(function () {
          $(this).attr('style', $(this).data('originalStyling'));
        });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');
    _.unslicked = true;
    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = '';
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });
      _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;
    if (filter !== null) {
      _.$slidesCache = _.$slides;
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider
      .off('focus.slick blur.slick')
      .on('focus.slick', '*', function (event) {
        var $sf = $(this);
        setTimeout(function () {
          if (_.options.pauseOnFocus) {
            if ($sf.is(':focus')) {
              _.focussed = true;
              _.autoPlay();
            }
          }
        }, 0);
      })
      .on('blur.slick', '*', function (event) {
        var $sf = $(this);
        if (_.options.pauseOnFocus) {
          _.focussed = false;
          _.autoPlay();
        }
      });
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter +=
            _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;
        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }
        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
            verticalOffset = (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 - (_.slideWidth * _.slideCount) / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      swipeTarget,
      centerOffset;
    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;
        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }
        slideRightBoundary = slideOffset + slideOuterWidth;
        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;
    _.changeSlide({ data: { message: 'index', index: parseInt(slide) } }, dontAnimate);
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = false;
      _.autoPlay();
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
    _.$slides
      .add(_.$slideTrack.find('.slick-cloned'))
      .attr({ 'aria-hidden': 'true', tabindex: '-1' })
      .find('a, input, button, select')
      .attr({ tabindex: '-1' });
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({ role: 'tabpanel', id: 'slick-slide' + _.instanceUid + i, tabindex: -1 });
        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
          if ($('#' + ariaButtonControl).length) {
            $(this).attr({ 'aria-describedby': ariaButtonControl });
          }
        }
      });
      _.$dots
        .attr('role', 'tablist')
        .find('li')
        .each(function (i) {
          var mappedSlideIndex = tabControlIndexes[i];
          $(this).attr({ role: 'presentation' });
          $(this)
            .find('button')
            .first()
            .attr({
              role: 'tab',
              id: 'slick-slide-control' + _.instanceUid + i,
              'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
              'aria-label': i + 1 + ' of ' + numDotGroups,
              'aria-selected': null,
              tabindex: '-1',
            });
        })
        .eq(_.currentSlide)
        .find('button')
        .attr({ 'aria-selected': 'true', tabindex: '0' })
        .end();
    }
    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({ tabindex: '0' });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }
    _.activateADA();
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, _.changeSlide);
      _.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);
        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', { message: 'index' }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }
    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots)
        .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
        .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initSlideEvents = function () {
    var _ = this;
    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', { action: 'end' }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, _.swipeHandler);
    _.$list.on('click.slick', _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({ data: { message: _.options.rtl === true ? 'next' : 'previous' } });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({ data: { message: _.options.rtl === true ? 'previous' : 'next' } });
      }
    }
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr('data-lazy'),
          imageSrcSet = $(this).attr('data-srcset'),
          imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
          imageToLoad = document.createElement('img');
        imageToLoad.onload = function () {
          image.animate({ opacity: 0 }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);
              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }
            image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });
            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };
        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find('.slick-slide');
      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({ opacity: 1 });
    _.$slider.removeClass('slick-loading');
    _.initUI();
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({ data: { message: 'next' } });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);
      _.animating = false;
      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }
      _.swipeLeft = null;
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === true) {
        _.initADA();
        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({ data: { message: 'previous' } });
  };
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;
    var _ = this,
      $imgsToLoad = $('img[data-lazy]', _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');
      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);
          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }
        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
        _.progressiveLazyLoad();
      };
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      };
      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, { currentSlide: currentSlide });
    _.init();
    if (!initializing) {
      _.changeSlide({ data: { message: 'index', index: currentSlide } }, false);
    }
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = !_.options.autoplay;
    _.autoPlay();
    _.$slider.trigger('reInit', [_]);
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;
    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({ padding: '0px ' + _.options.centerPadding });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({ padding: _.options.centerPadding + ' 0px' });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(
        Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)
      );
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({ position: 'relative', right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
      } else {
        $(element).css({ position: 'relative', left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
      }
    });
    _.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
      l,
      item,
      option,
      value,
      refresh = false,
      type;
    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];
      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }
    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    }
    if (refresh) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger('setPosition', [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? 'top' : 'left';
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    if (
      bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined
    ) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider
      .find('.slick-slide')
      .removeClass('slick-active slick-center slick-current')
      .attr('aria-hidden', 'true');
    _.$slides.eq(index).addClass('slick-current');
    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides
            .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides
            .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        }
        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }
      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides
          .slice(index, index + _.options.slidesToShow)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides
            .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        } else {
          allSlides
            .slice(indexOffset, indexOffset + _.options.slidesToShow)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        }
      }
    }
    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr('id', '')
            .attr('data-slick-index', slideIndex - _.slideCount)
            .prependTo(_.$slideTrack)
            .addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex])
            .clone(true)
            .attr('id', '')
            .attr('data-slick-index', slideIndex + _.slideCount)
            .appendTo(_.$slideTrack)
            .addClass('slick-cloned');
        }
        _.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            $(this).attr('id', '');
          });
      }
    }
  };
  Slick.prototype.interrupt = function (toggle) {
    var _ = this;
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (
      _.options.infinite === false &&
      _.options.centerMode === false &&
      (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (
      _.options.infinite === false &&
      _.options.centerMode === true &&
      (index < 0 || index > _.slideCount - _.options.slidesToScroll)
    ) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = true;
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass('slick-loading');
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round((r * 180) / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }
    return 'vertical';
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction;
    _.dragging = false;
    _.swiping = false;
    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }
    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();
      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide + _.getSlideCount())
            : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;
        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide - _.getSlideCount())
            : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;
        default:
      }
      if (direction != 'vertical') {
        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (_.options.swipe === false || ('ontouchend' in document && _.options.swipe === false)) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    _.touchObject.fingerCount =
      event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);
        break;
      case 'move':
        _.swipeMove(event);
        break;
      case 'end':
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches,
      verticalSwipeLength;
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
      return false;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }
    swipeDirection = _.swipeDirection();
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false) {
      if (
        (_.currentSlide === 0 && swipeDirection === 'right') ||
        (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')
      ) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    _.interrupted = true;
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $('.slick-cloned', _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides
      .removeClass('slick-slide slick-active slick-visible slick-current')
      .attr('aria-hidden', 'true')
      .css('width', '');
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();
      _.$dots
        .find('li')
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass('slick-active');
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);
      else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
});

/*! lazysizes - v5.2.2 */
!(function (e) {
  var t = (function (u, D, f) {
    'use strict';
    var k, H;
    if (
      ((function () {
        var e;
        var t = {
          lazyClass: 'lazyload',
          loadedClass: 'lazyloaded',
          loadingClass: 'lazyloading',
          preloadClass: 'lazypreload',
          errorClass: 'lazyerror',
          autosizesClass: 'lazyautosizes',
          srcAttr: 'data-src',
          srcsetAttr: 'data-srcset',
          sizesAttr: 'data-sizes',
          minSize: 40,
          customMedia: {},
          init: true,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: true,
          ricTimeout: 0,
          throttleDelay: 125,
        };
        H = u.lazySizesConfig || u.lazysizesConfig || {};
        for (e in t) {
          if (!(e in H)) {
            H[e] = t[e];
          }
        }
      })(),
      !D || !D.getElementsByClassName)
    ) {
      return { init: function () {}, cfg: H, noSupport: true };
    }
    var O = D.documentElement,
      a = u.HTMLPictureElement,
      P = 'addEventListener',
      $ = 'getAttribute',
      q = u[P].bind(u),
      I = u.setTimeout,
      U = u.requestAnimationFrame || I,
      l = u.requestIdleCallback,
      j = /^picture$/i,
      r = ['load', 'error', 'lazyincluded', '_lazyloaded'],
      i = {},
      G = Array.prototype.forEach,
      J = function (e, t) {
        if (!i[t]) {
          i[t] = new RegExp('(\\s|^)' + t + '(\\s|$)');
        }
        return i[t].test(e[$]('class') || '') && i[t];
      },
      K = function (e, t) {
        if (!J(e, t)) {
          e.setAttribute('class', (e[$]('class') || '').trim() + ' ' + t);
        }
      },
      Q = function (e, t) {
        var i;
        if ((i = J(e, t))) {
          e.setAttribute('class', (e[$]('class') || '').replace(i, ' '));
        }
      },
      V = function (t, i, e) {
        var a = e ? P : 'removeEventListener';
        if (e) {
          V(t, i);
        }
        r.forEach(function (e) {
          t[a](e, i);
        });
      },
      X = function (e, t, i, a, r) {
        var n = D.createEvent('Event');
        if (!i) {
          i = {};
        }
        i.instance = k;
        n.initEvent(t, !a, !r);
        n.detail = i;
        e.dispatchEvent(n);
        return n;
      },
      Y = function (e, t) {
        var i;
        if (!a && (i = u.picturefill || H.pf)) {
          if (t && t.src && !e[$]('srcset')) {
            e.setAttribute('srcset', t.src);
          }
          i({ reevaluate: true, elements: [e] });
        } else if (t && t.src) {
          e.src = t.src;
        }
      },
      Z = function (e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      s = function (e, t, i) {
        i = i || e.offsetWidth;
        while (i < H.minSize && t && !e._lazysizesWidth) {
          i = t.offsetWidth;
          t = t.parentNode;
        }
        return i;
      },
      ee = (function () {
        var i, a;
        var t = [];
        var r = [];
        var n = t;
        var s = function () {
          var e = n;
          n = t.length ? r : t;
          i = true;
          a = false;
          while (e.length) {
            e.shift()();
          }
          i = false;
        };
        var e = function (e, t) {
          if (i && !t) {
            e.apply(this, arguments);
          } else {
            n.push(e);
            if (!a) {
              a = true;
              (D.hidden ? I : U)(s);
            }
          }
        };
        e._lsFlush = s;
        return e;
      })(),
      te = function (i, e) {
        return e
          ? function () {
              ee(i);
            }
          : function () {
              var e = this;
              var t = arguments;
              ee(function () {
                i.apply(e, t);
              });
            };
      },
      ie = function (e) {
        var i;
        var a = 0;
        var r = H.throttleDelay;
        var n = H.ricTimeout;
        var t = function () {
          i = false;
          a = f.now();
          e();
        };
        var s =
          l && n > 49
            ? function () {
                l(t, { timeout: n });
                if (n !== H.ricTimeout) {
                  n = H.ricTimeout;
                }
              }
            : te(function () {
                I(t);
              }, true);
        return function (e) {
          var t;
          if ((e = e === true)) {
            n = 33;
          }
          if (i) {
            return;
          }
          i = true;
          t = r - (f.now() - a);
          if (t < 0) {
            t = 0;
          }
          if (e || t < 9) {
            s();
          } else {
            I(s, t);
          }
        };
      },
      ae = function (e) {
        var t, i;
        var a = 99;
        var r = function () {
          t = null;
          e();
        };
        var n = function () {
          var e = f.now() - i;
          if (e < a) {
            I(n, a - e);
          } else {
            (l || r)(r);
          }
        };
        return function () {
          i = f.now();
          if (!t) {
            t = I(n, a);
          }
        };
      },
      e = (function () {
        var v, m, c, h, e;
        var y, z, g, p, C, b, A;
        var n = /^img$/i;
        var d = /^iframe$/i;
        var E = 'onscroll' in u && !/(gle|ing)bot/.test(navigator.userAgent);
        var _ = 0;
        var w = 0;
        var N = 0;
        var M = -1;
        var x = function (e) {
          N--;
          if (!e || N < 0 || !e.target) {
            N = 0;
          }
        };
        var W = function (e) {
          if (A == null) {
            A = Z(D.body, 'visibility') == 'hidden';
          }
          return A || !(Z(e.parentNode, 'visibility') == 'hidden' && Z(e, 'visibility') == 'hidden');
        };
        var S = function (e, t) {
          var i;
          var a = e;
          var r = W(e);
          g -= t;
          b += t;
          p -= t;
          C += t;
          while (r && (a = a.offsetParent) && a != D.body && a != O) {
            r = (Z(a, 'opacity') || 1) > 0;
            if (r && Z(a, 'overflow') != 'visible') {
              i = a.getBoundingClientRect();
              r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
            }
          }
          return r;
        };
        var t = function () {
          var e, t, i, a, r, n, s, l, o, u, f, c;
          var d = k.elements;
          if ((h = H.loadMode) && N < 8 && (e = d.length)) {
            t = 0;
            M++;
            for (; t < e; t++) {
              if (!d[t] || d[t]._lazyRace) {
                continue;
              }
              if (!E || (k.prematureUnveil && k.prematureUnveil(d[t]))) {
                R(d[t]);
                continue;
              }
              if (!(l = d[t][$]('data-expand')) || !(n = l * 1)) {
                n = w;
              }
              if (!u) {
                u = !H.expand || H.expand < 1 ? (O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370) : H.expand;
                k._defEx = u;
                f = u * H.expFactor;
                c = H.hFac;
                A = null;
                if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                  w = f;
                  M = 0;
                } else if (h > 1 && M > 1 && N < 6) {
                  w = u;
                } else {
                  w = _;
                }
              }
              if (o !== n) {
                y = innerWidth + n * c;
                z = innerHeight + n;
                s = n * -1;
                o = n;
              }
              i = d[t].getBoundingClientRect();
              if (
                (b = i.bottom) >= s &&
                (g = i.top) <= z &&
                (C = i.right) >= s * c &&
                (p = i.left) <= y &&
                (b || C || p || g) &&
                (H.loadHidden || W(d[t])) &&
                ((m && N < 3 && !l && (h < 3 || M < 4)) || S(d[t], n))
              ) {
                R(d[t]);
                r = true;
                if (N > 9) {
                  break;
                }
              } else if (
                !r &&
                m &&
                !a &&
                N < 4 &&
                M < 4 &&
                h > 2 &&
                (v[0] || H.preloadAfterLoad) &&
                (v[0] || (!l && (b || C || p || g || d[t][$](H.sizesAttr) != 'auto')))
              ) {
                a = v[0] || d[t];
              }
            }
            if (a && !r) {
              R(a);
            }
          }
        };
        var i = ie(t);
        var B = function (e) {
          var t = e.target;
          if (t._lazyCache) {
            delete t._lazyCache;
            return;
          }
          x(e);
          K(t, H.loadedClass);
          Q(t, H.loadingClass);
          V(t, L);
          X(t, 'lazyloaded');
        };
        var a = te(B);
        var L = function (e) {
          a({ target: e.target });
        };
        var T = function (t, i) {
          try {
            t.contentWindow.location.replace(i);
          } catch (e) {
            t.src = i;
          }
        };
        var F = function (e) {
          var t;
          var i = e[$](H.srcsetAttr);
          if ((t = H.customMedia[e[$]('data-media') || e[$]('media')])) {
            e.setAttribute('media', t);
          }
          if (i) {
            e.setAttribute('srcset', i);
          }
        };
        var s = te(function (t, e, i, a, r) {
          var n, s, l, o, u, f;
          if (!(u = X(t, 'lazybeforeunveil', e)).defaultPrevented) {
            if (a) {
              if (i) {
                K(t, H.autosizesClass);
              } else {
                t.setAttribute('sizes', a);
              }
            }
            s = t[$](H.srcsetAttr);
            n = t[$](H.srcAttr);
            if (r) {
              l = t.parentNode;
              o = l && j.test(l.nodeName || '');
            }
            f = e.firesLoad || ('src' in t && (s || n || o));
            u = { target: t };
            K(t, H.loadingClass);
            if (f) {
              clearTimeout(c);
              c = I(x, 2500);
              V(t, L, true);
            }
            if (o) {
              G.call(l.getElementsByTagName('source'), F);
            }
            if (s) {
              t.setAttribute('srcset', s);
            } else if (n && !o) {
              if (d.test(t.nodeName)) {
                T(t, n);
              } else {
                t.src = n;
              }
            }
            if (r && (s || o)) {
              Y(t, { src: n });
            }
          }
          if (t._lazyRace) {
            delete t._lazyRace;
          }
          Q(t, H.lazyClass);
          ee(function () {
            var e = t.complete && t.naturalWidth > 1;
            if (!f || e) {
              if (e) {
                K(t, 'ls-is-cached');
              }
              B(u);
              t._lazyCache = true;
              I(function () {
                if ('_lazyCache' in t) {
                  delete t._lazyCache;
                }
              }, 9);
            }
            if (t.loading == 'lazy') {
              N--;
            }
          }, true);
        });
        var R = function (e) {
          if (e._lazyRace) {
            return;
          }
          var t;
          var i = n.test(e.nodeName);
          var a = i && (e[$](H.sizesAttr) || e[$]('sizes'));
          var r = a == 'auto';
          if ((r || !m) && i && (e[$]('src') || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
            return;
          }
          t = X(e, 'lazyunveilread').detail;
          if (r) {
            re.updateElem(e, true, e.offsetWidth);
          }
          e._lazyRace = true;
          N++;
          s(e, t, r, a, i);
        };
        var r = ae(function () {
          H.loadMode = 3;
          i();
        });
        var l = function () {
          if (H.loadMode == 3) {
            H.loadMode = 2;
          }
          r();
        };
        var o = function () {
          if (m) {
            return;
          }
          if (f.now() - e < 999) {
            I(o, 999);
            return;
          }
          m = true;
          H.loadMode = 3;
          i();
          q('scroll', l, true);
        };
        return {
          _: function () {
            e = f.now();
            k.elements = D.getElementsByClassName(H.lazyClass);
            v = D.getElementsByClassName(H.lazyClass + ' ' + H.preloadClass);
            q('scroll', i, true);
            q('resize', i, true);
            q('pageshow', function (e) {
              if (e.persisted) {
                var t = D.querySelectorAll('.' + H.loadingClass);
                if (t.length && t.forEach) {
                  U(function () {
                    t.forEach(function (e) {
                      if (e.complete) {
                        R(e);
                      }
                    });
                  });
                }
              }
            });
            if (u.MutationObserver) {
              new MutationObserver(i).observe(O, { childList: true, subtree: true, attributes: true });
            } else {
              O[P]('DOMNodeInserted', i, true);
              O[P]('DOMAttrModified', i, true);
              setInterval(i, 999);
            }
            q('hashchange', i, true);
            ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (e) {
              D[P](e, i, true);
            });
            if (/d$|^c/.test(D.readyState)) {
              o();
            } else {
              q('load', o);
              D[P]('DOMContentLoaded', i);
              I(o, 2e4);
            }
            if (k.elements.length) {
              t();
              ee._lsFlush();
            } else {
              i();
            }
          },
          checkElems: i,
          unveil: R,
          _aLSL: l,
        };
      })(),
      re = (function () {
        var i;
        var n = te(function (e, t, i, a) {
          var r, n, s;
          e._lazysizesWidth = a;
          a += 'px';
          e.setAttribute('sizes', a);
          if (j.test(t.nodeName || '')) {
            r = t.getElementsByTagName('source');
            for (n = 0, s = r.length; n < s; n++) {
              r[n].setAttribute('sizes', a);
            }
          }
          if (!i.detail.dataAttr) {
            Y(e, i.detail);
          }
        });
        var a = function (e, t, i) {
          var a;
          var r = e.parentNode;
          if (r) {
            i = s(e, r, i);
            a = X(e, 'lazybeforesizes', { width: i, dataAttr: !!t });
            if (!a.defaultPrevented) {
              i = a.detail.width;
              if (i && i !== e._lazysizesWidth) {
                n(e, r, a, i);
              }
            }
          }
        };
        var e = function () {
          var e;
          var t = i.length;
          if (t) {
            e = 0;
            for (; e < t; e++) {
              a(i[e]);
            }
          }
        };
        var t = ae(e);
        return {
          _: function () {
            i = D.getElementsByClassName(H.autosizesClass);
            q('resize', t);
          },
          checkElems: t,
          updateElem: a,
        };
      })(),
      t = function () {
        if (!t.i && D.getElementsByClassName) {
          t.i = true;
          re._();
          e._();
        }
      };
    return (
      I(function () {
        H.init && t();
      }),
      (k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee })
    );
  })(e, e.document, Date);
  (e.lazySizes = t), 'object' == typeof module && module.exports && (module.exports = t);
})('undefined' != typeof window ? window : {});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto);
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement('div');
      return (
        (f.className = 'mfp-' + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace('%title%', b.st.tClose))), (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit'];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ''),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos = 'auto' === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function () {
            b.close();
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader && (b.preloader = x('preloader', b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b);
      }
      y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.fixedContentPos
          ? b.wrap.css({ overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY })
          : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
        (b.st.fixedBgPos === !1 || ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on('resize' + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos && (b.isIE7 ? a('body, html').css('overflow', 'hidden') : (n.overflow = 'hidden'));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on('focusin' + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + ' ' + q + ' ';
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + ' '),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: '' };
        b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''), a('html').css(e);
      }
      d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css('height', d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if ((y('BeforeChange', [b.currItem ? b.currItem.type : '', d]), (b.currItem = c), !b.currTemplate[d])) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y('FirstMarkupParse', f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder');
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y('AfterChange');
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find('.mfp-close').length || b.content.append(z())
            : (b.content = a)
          : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr('data-mfp-src')), e.src || (e.src = e.el.attr('href'));
      }
      return (
        (e.type = d || b.st.type || 'inline'),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y('ElementParse', e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = 'click.magnificPopup';
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass('mfp-s-' + c), d || 'loading' !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass('mfp-close') || (b.preloader && c === b.preloader[0])) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split('_')), e.length > 1)) {
            var f = b.find(p + '-' + e[0]);
            if (f.length > 0) {
              var g = e[1];
              'replaceWith' === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : 'img' === g
                ? f.is('img')
                  ? f.attr('src', d)
                  : f.replaceWith(a('<img>').attr('src', d).attr('class', f.attr('class')))
                : f.attr(e[1], d);
            }
          } else b.find(p + '-' + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div');
        (a.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else (c = a.extend(!0, {}, c)), u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c), b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = 'inline',
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + '.' + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)), (E = f.after(D).detach().removeClass(C))),
              b.updateStatus('ready');
          } else b.updateStatus('error', e.tNotFound), (f = a('<div>'));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = 'ajax',
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: { settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.' },
    proto: {
      initAjax: function () {
        b.types.push(I), (H = b.st.ajax.cursor), w(h + '.' + I, K), w('BeforeChange.' + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus('loading');
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded');
            },
            error: function () {
              J(), (c.finished = c.loadError = !0), b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src));
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), '';
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || '';
      }
      return '';
    };
  a.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = '.image';
        b.types.push('image'),
          w(m + d, function () {
            'image' === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor), v.off('resize' + p);
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css('padding-top'), 10) + parseInt(a.img.css('padding-bottom'), 10)),
            a.img.css('max-height', b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y('ImageHasSize', a),
          a.imgHidden && (b.content && b.content.removeClass('mfp-loading'), (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off('.mfploader'),
                  c === b.currItem && (b._onImageHasSize(c), b.updateStatus('ready')),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y('ImageLoadComplete'))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off('.mfploader'),
              c === b.currItem && (b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find('.mfp-img');
        if (i.length) {
          var j = document.createElement('img');
          (j.className = 'mfp-img'),
            c.el && c.el.find('img').length && (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j).on('load.mfploader', f).on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass('mfp-loading'), b.updateStatus('error', h.tError.replace('%url%', c.src)))
                : (d.removeClass('mfp-loading'), b.updateStatus('ready')),
              d)
            : (b.updateStatus('loading'),
              (c.loading = !0),
              c.hasSize || ((c.imgHidden = !0), d.addClass('mfp-loading'), b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N;
    };
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = '.zoom';
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = { position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden' },
                f = 'transition';
              return (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d), b.css(e), b;
            },
            k = function () {
              b.content.css('visibility', 'visible');
            };
          w('BuildControls' + d, function () {
            if (b._allowZoom()) {
              if ((clearTimeout(e), b.content.css('visibility', 'hidden'), (a = b._getItemToZoom()), !a))
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y('ZoomAnimationEnded');
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return 'image' === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10);
        e.top -= a(window).scrollTop() - f;
        var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
        return (
          O()
            ? (h['-moz-transform'] = h.transform = 'translate(' + e.left + 'px,' + e.top + 'px)')
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = 'iframe',
    Q = '//about:blank',
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe');
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css('display', a ? 'block' : 'none'));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' },
        vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w('BeforeChange', function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + '.' + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  'string' == typeof this.id
                    ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length)
                    : this.id.call(this, e)),
              (e = this.src.replace('%id%', e)),
              !1)
            : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d;
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = '.mfp-gallery';
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on('keydown' + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w('UpdateStatus' + e, function (a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';
              }),
              w('BuildControls' + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')).addClass(s)),
                    f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right')).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e), b.wrap.off('click' + e), (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function () {
                  d.hasSize = !0;
                })
                .on('error.mfploader', function () {
                  (d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d);
                })
                .attr('src', d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = 'retina';
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return '@2x' + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function (a, b) {
                b.img.css({ 'max-width': b.img[0].naturalWidth / c, width: '100%' });
              }),
              w('ElementParse.' + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*! jQuery UI - v1.12.0 - 2016-07-08
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (t) {
  function e(t) {
    for (var e = t.css('visibility'); 'inherit' === e; ) (t = t.parent()), (e = t.css('visibility'));
    return 'hidden' !== e;
  }
  function i(t) {
    for (var e, i; t.length && t[0] !== document; ) {
      if (
        ((e = t.css('position')),
        ('absolute' === e || 'relative' === e || 'fixed' === e) &&
          ((i = parseInt(t.css('zIndex'), 10)), !isNaN(i) && 0 !== i))
      )
        return i;
      t = t.parent();
    }
    return 0;
  }
  function s() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = 'ui-datepicker-div'),
      (this._inlineClass = 'ui-datepicker-inline'),
      (this._appendClass = 'ui-datepicker-append'),
      (this._triggerClass = 'ui-datepicker-trigger'),
      (this._dialogClass = 'ui-datepicker-dialog'),
      (this._disableClass = 'ui-datepicker-disabled'),
      (this._unselectableClass = 'ui-datepicker-unselectable'),
      (this._currentClass = 'ui-datepicker-current-day'),
      (this._dayOverClass = 'ui-datepicker-days-cell-over'),
      (this.regional = []),
      (this.regional[''] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        weekHeader: 'Wk',
        dateFormat: 'mm/dd/yy',
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: '',
      }),
      (this._defaults = {
        showOn: 'focus',
        showAnim: 'fadeIn',
        showOptions: {},
        defaultDate: null,
        appendText: '',
        buttonText: '...',
        buttonImage: '',
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: 'c-10:c+10',
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: null,
        maxDate: null,
        duration: 'fast',
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: '',
        altFormat: '',
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      t.extend(this._defaults, this.regional['']),
      (this.regional.en = t.extend(!0, {}, this.regional[''])),
      (this.regional['en-US'] = t.extend(!0, {}, this.regional.en)),
      (this.dpDiv = n(
        t(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function n(e) {
    var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return e
      .on('mouseout', i, function () {
        t(this).removeClass('ui-state-hover'),
          -1 !== this.className.indexOf('ui-datepicker-prev') && t(this).removeClass('ui-datepicker-prev-hover'),
          -1 !== this.className.indexOf('ui-datepicker-next') && t(this).removeClass('ui-datepicker-next-hover');
      })
      .on('mouseover', i, o);
  }
  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) ||
      (t(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'),
      t(this).addClass('ui-state-hover'),
      -1 !== this.className.indexOf('ui-datepicker-prev') && t(this).addClass('ui-datepicker-prev-hover'),
      -1 !== this.className.indexOf('ui-datepicker-next') && t(this).addClass('ui-datepicker-next-hover'));
  }
  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e;
  }
  function r(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger('change');
    };
  }
  (t.ui = t.ui || {}), (t.ui.version = '1.12.0');
  var h = 0,
    l = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, 'events')), s && s.remove && t(n).triggerHandler('remove');
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        h = e.split('.')[0];
      e = e.split('.')[1];
      var l = h + '-' + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[':'][l.toLowerCase()] = function (e) {
          return !!t.data(e, l);
        }),
        (t[h] = t[h] || {}),
        (n = t[h][e]),
        (o = t[h][e] =
          function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
          }),
        t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, {
          constructor: o,
          namespace: h,
          widgetName: e,
          widgetFullName: l,
        })),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + '.' + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o])
          (s = n[o][i]),
            n[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (e[i] = t.isPlainObject(s)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], s)
                  : t.widget.extend({}, s)
                : s);
      return e;
    }),
    (t.widget.bridge = function (e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function (n) {
        var o = 'string' == typeof n,
          a = l.call(arguments, 1),
          r = this;
        return (
          o
            ? this.each(function () {
                var i,
                  o = t.data(this, s);
                return 'instance' === n
                  ? ((r = o), !1)
                  : o
                  ? t.isFunction(o[n]) && '_' !== n.charAt(0)
                    ? ((i = o[n].apply(o, a)),
                      i !== o && void 0 !== i ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1) : void 0)
                    : t.error("no such method '" + n + "' for " + e + ' widget instance')
                  : t.error(
                      'cannot call methods on ' +
                        e +
                        ' prior to initialization; ' +
                        "attempted to call method '" +
                        n +
                        "'"
                    );
              })
            : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
              this.each(function () {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
              })),
          r
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (e, i) {
        (i = t(i || this.defaultElement || this)[0]),
          (this.element = t(i)),
          (this.uuid = h++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          i !== this &&
            (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === i && this.destroy();
              },
            }),
            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
            (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
          (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e)),
          this._create(),
          this.options.disabled && this._setOptionDisabled(this.options.disabled),
          this._trigger('create', null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ('string' == typeof e)
          if (((a = {}), (s = e.split('.')), (e = s.shift()), s.length)) {
            for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++)
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length)) return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          'classes' === t && this._setOptionClasses(e),
          (this.options[t] = e),
          'disabled' === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, !!t),
          t &&
            (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend({ element: this.element, classes: this.options.classes || {} }, e)),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(' ')
        );
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = 'boolean' == typeof s ? s : i;
        var n = 'string' == typeof t || null === t,
          o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        'boolean' != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e || (o.options.disabled !== !0 && !t(this).hasClass('ui-state-disabled'))
                ? ('string' == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            'string' != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + o.eventNamespace,
              c = h[2];
            c ? n.on(l, c, r) : i.on(l, r);
          });
      },
      _off: function (e, i) {
        (i = (i || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ('string' == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-hover');
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-focus');
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !((t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1) || i.isDefaultPrevented())
        );
      },
    }),
    t.each({ show: 'fadeIn', hide: 'fadeOut' }, function (e, i) {
      t.Widget.prototype['_' + e] = function (s, n, o) {
        'string' == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || 'number' == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          'number' == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    (function () {
      function e(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)];
      }
      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
      }
      function s(e) {
        var i = e[0];
        return 9 === i.nodeType
          ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
          : t.isWindow(i)
          ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
          : i.preventDefault
          ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
          : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
      }
      var n,
        o,
        a = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
      (o = function () {
        var e = t('<div>').css('position', 'absolute').appendTo('body').offset({ top: 1.5, left: 1.5 }),
          i = 1.5 === e.offset().top;
        return (
          e.remove(),
          (o = function () {
            return i;
          }),
          i
        );
      }),
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== n) return n;
            var e,
              i,
              s = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = s.children()[0];
            return (
              t('body').append(s),
              (e = o.offsetWidth),
              s.css('overflow', 'scroll'),
              (i = o.offsetWidth),
              e === i && (i = s[0].clientWidth),
              s.remove(),
              (n = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i = e.isWindow || e.isDocument ? '' : e.element.css('overflow-x'),
              s = e.isWindow || e.isDocument ? '' : e.element.css('overflow-y'),
              n = 'scroll' === i || ('auto' === i && e.width < e.element[0].scrollWidth),
              o = 'scroll' === s || ('auto' === s && e.height < e.element[0].scrollHeight);
            return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              s = t.isWindow(i[0]),
              n = !!i[0] && 9 === i[0].nodeType,
              o = !s && !n;
            return {
              element: i,
              isWindow: s,
              isDocument: n,
              offset: o ? t(e).offset() : { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: i.outerWidth(),
              height: i.outerHeight(),
            };
          },
        }),
        (t.fn.position = function (n) {
          if (!n || !n.of) return f.apply(this, arguments);
          n = t.extend({}, n);
          var p,
            g,
            m,
            _,
            v,
            b,
            y = t(n.of),
            w = t.position.getWithinInfo(n.within),
            k = t.position.getScrollInfo(w),
            x = (n.collision || 'flip').split(' '),
            C = {};
          return (
            (b = s(y)),
            y[0].preventDefault && (n.at = 'left top'),
            (g = b.width),
            (m = b.height),
            (_ = b.offset),
            (v = t.extend({}, _)),
            t.each(['my', 'at'], function () {
              var t,
                e,
                i = (n[this] || '').split(' ');
              1 === i.length &&
                (i = l.test(i[0]) ? i.concat(['center']) : c.test(i[0]) ? ['center'].concat(i) : ['center', 'center']),
                (i[0] = l.test(i[0]) ? i[0] : 'center'),
                (i[1] = c.test(i[1]) ? i[1] : 'center'),
                (t = u.exec(i[0])),
                (e = u.exec(i[1])),
                (C[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                (n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]);
            }),
            1 === x.length && (x[1] = x[0]),
            'right' === n.at[0] ? (v.left += g) : 'center' === n.at[0] && (v.left += g / 2),
            'bottom' === n.at[1] ? (v.top += m) : 'center' === n.at[1] && (v.top += m / 2),
            (p = e(C.at, g, m)),
            (v.left += p[0]),
            (v.top += p[1]),
            this.each(function () {
              var s,
                l,
                c = t(this),
                u = c.outerWidth(),
                d = c.outerHeight(),
                f = i(this, 'marginLeft'),
                b = i(this, 'marginTop'),
                D = u + f + i(this, 'marginRight') + k.width,
                I = d + b + i(this, 'marginBottom') + k.height,
                T = t.extend({}, v),
                P = e(C.my, c.outerWidth(), c.outerHeight());
              'right' === n.my[0] ? (T.left -= u) : 'center' === n.my[0] && (T.left -= u / 2),
                'bottom' === n.my[1] ? (T.top -= d) : 'center' === n.my[1] && (T.top -= d / 2),
                (T.left += P[0]),
                (T.top += P[1]),
                o() || ((T.left = h(T.left)), (T.top = h(T.top))),
                (s = { marginLeft: f, marginTop: b }),
                t.each(['left', 'top'], function (e, i) {
                  t.ui.position[x[e]] &&
                    t.ui.position[x[e]][i](T, {
                      targetWidth: g,
                      targetHeight: m,
                      elemWidth: u,
                      elemHeight: d,
                      collisionPosition: s,
                      collisionWidth: D,
                      collisionHeight: I,
                      offset: [p[0] + P[0], p[1] + P[1]],
                      my: n.my,
                      at: n.at,
                      within: w,
                      elem: c,
                    });
                }),
                n.using &&
                  (l = function (t) {
                    var e = _.left - T.left,
                      i = e + g - u,
                      s = _.top - T.top,
                      o = s + m - d,
                      h = {
                        target: { element: y, left: _.left, top: _.top, width: g, height: m },
                        element: { element: c, left: T.left, top: T.top, width: u, height: d },
                        horizontal: 0 > i ? 'left' : e > 0 ? 'right' : 'center',
                        vertical: 0 > o ? 'top' : s > 0 ? 'bottom' : 'middle',
                      };
                    u > g && g > r(e + i) && (h.horizontal = 'center'),
                      d > m && m > r(s + o) && (h.vertical = 'middle'),
                      (h.important = a(r(e), r(i)) > a(r(s), r(o)) ? 'horizontal' : 'vertical'),
                      n.using.call(this, t, h);
                  }),
                c.offset(t.extend(T, { using: l }));
            })
          );
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollLeft : s.offset.left,
                o = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                h = n - r,
                l = r + e.collisionWidth - o - n;
              e.collisionWidth > o
                ? h > 0 && 0 >= l
                  ? ((i = t.left + h + e.collisionWidth - o - n), (t.left += h - i))
                  : (t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n)
                : h > 0
                ? (t.left += h)
                : l > 0
                ? (t.left -= l)
                : (t.left = a(t.left - r, t.left));
            },
            top: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollTop : s.offset.top,
                o = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                h = n - r,
                l = r + e.collisionHeight - o - n;
              e.collisionHeight > o
                ? h > 0 && 0 >= l
                  ? ((i = t.top + h + e.collisionHeight - o - n), (t.top += h - i))
                  : (t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n)
                : h > 0
                ? (t.top += h)
                : l > 0
                ? (t.top -= l)
                : (t.top = a(t.top - r, t.top));
            },
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.left + n.scrollLeft,
                a = n.width,
                h = n.isWindow ? n.scrollLeft : n.offset.left,
                l = t.left - e.collisionPosition.marginLeft,
                c = l - h,
                u = l + e.collisionWidth - a - h,
                d = 'left' === e.my[0] ? -e.elemWidth : 'right' === e.my[0] ? e.elemWidth : 0,
                p = 'left' === e.at[0] ? e.targetWidth : 'right' === e.at[0] ? -e.targetWidth : 0,
                f = -2 * e.offset[0];
              0 > c
                ? ((i = t.left + d + p + f + e.collisionWidth - a - o), (0 > i || r(c) > i) && (t.left += d + p + f))
                : u > 0 &&
                  ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h),
                  (s > 0 || u > r(s)) && (t.left += d + p + f));
            },
            top: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.top + n.scrollTop,
                a = n.height,
                h = n.isWindow ? n.scrollTop : n.offset.top,
                l = t.top - e.collisionPosition.marginTop,
                c = l - h,
                u = l + e.collisionHeight - a - h,
                d = 'top' === e.my[1],
                p = d ? -e.elemHeight : 'bottom' === e.my[1] ? e.elemHeight : 0,
                f = 'top' === e.at[1] ? e.targetHeight : 'bottom' === e.at[1] ? -e.targetHeight : 0,
                g = -2 * e.offset[1];
              0 > c
                ? ((s = t.top + p + f + g + e.collisionHeight - a - o), (0 > s || r(c) > s) && (t.top += p + f + g))
                : u > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + p + f + g - h),
                  (i > 0 || u > r(i)) && (t.top += p + f + g));
            },
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
            },
          },
        });
    })(),
    t.ui.position,
    t.extend(t.expr[':'], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
    }),
    t.fn.extend({
      disableSelection: (function () {
        var t = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown';
        return function () {
          return this.on(t + '.ui-disableSelection', function (t) {
            t.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.off('.ui-disableSelection');
      },
    });
  var c = 'ui-effects-',
    u = 'ui-effects-style',
    d = 'ui-effects-animated',
    p = t;
  (t.effects = { effect: {} }),
    (function (t, e) {
      function i(t, e, i) {
        var s = u[e.type] || {};
        return null == t
          ? i || !e.def
            ? null
            : e.def
          : ((t = s.floor ? ~~t : parseFloat(t)),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
      }
      function s(i) {
        var s = l(),
          n = (s._rgba = []);
        return (
          (i = i.toLowerCase()),
          f(h, function (t, o) {
            var a,
              r = o.re.exec(i),
              h = r && o.parse(r),
              l = o.space || 'rgba';
            return h ? ((a = s[l](h)), (s[c[l].cache] = a[c[l].cache]), (n = s._rgba = a._rgba), !1) : e;
          }),
          n.length ? ('0,0,0,0' === n.join() && t.extend(n, o.transparent), s) : o[i]
        );
      }
      function n(t, e, i) {
        return (
          (i = (i + 1) % 1),
          1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        );
      }
      var o,
        a =
          'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [t[1], t[2], t[3], t[4]];
            },
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
              return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
            },
          },
          {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (t) {
              return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
            },
          },
          {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (t) {
              return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
            },
          },
          {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: 'hsla',
            parse: function (t) {
              return [t[1], t[2] / 100, t[3] / 100, t[4]];
            },
          },
        ],
        l = (t.Color = function (e, i, s, n) {
          return new t.Color.fn.parse(e, i, s, n);
        }),
        c = {
          rgba: {
            props: { red: { idx: 0, type: 'byte' }, green: { idx: 1, type: 'byte' }, blue: { idx: 2, type: 'byte' } },
          },
          hsla: {
            props: {
              hue: { idx: 0, type: 'degrees' },
              saturation: { idx: 1, type: 'percent' },
              lightness: { idx: 2, type: 'percent' },
            },
          },
        },
        u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
        d = (l.support = {}),
        p = t('<p>')[0],
        f = t.each;
      (p.style.cssText = 'background-color:rgba(1,1,1,.5)'),
        (d.rgba = p.style.backgroundColor.indexOf('rgba') > -1),
        f(c, function (t, e) {
          (e.cache = '_' + t), (e.props.alpha = { idx: 3, type: 'percent', def: 1 });
        }),
        (l.fn = t.extend(l.prototype, {
          parse: function (n, a, r, h) {
            if (n === e) return (this._rgba = [null, null, null, null]), this;
            (n.jquery || n.nodeType) && ((n = t(n).css(a)), (a = e));
            var u = this,
              d = t.type(n),
              p = (this._rgba = []);
            return (
              a !== e && ((n = [n, a, r, h]), (d = 'array')),
              'string' === d
                ? this.parse(s(n) || o._default)
                : 'array' === d
                ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e);
                  }),
                  this)
                : 'object' === d
                ? (n instanceof l
                    ? f(c, function (t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice());
                      })
                    : f(c, function (e, s) {
                        var o = s.cache;
                        f(s.props, function (t, e) {
                          if (!u[o] && s.to) {
                            if ('alpha' === t || null == n[t]) return;
                            u[o] = s.to(u._rgba);
                          }
                          u[o][e.idx] = i(n[t], e, !0);
                        }),
                          u[o] &&
                            0 > t.inArray(null, u[o].slice(0, 3)) &&
                            ((u[o][3] = 1), s.from && (u._rgba = s.from(u[o])));
                      }),
                  this)
                : e
            );
          },
          is: function (t) {
            var i = l(t),
              s = !0,
              n = this;
            return (
              f(c, function (t, o) {
                var a,
                  r = i[o.cache];
                return (
                  r &&
                    ((a = n[o.cache] || (o.to && o.to(n._rgba)) || []),
                    f(o.props, function (t, i) {
                      return null != r[i.idx] ? (s = r[i.idx] === a[i.idx]) : e;
                    })),
                  s
                );
              }),
              s
            );
          },
          _space: function () {
            var t = [],
              e = this;
            return (
              f(c, function (i, s) {
                e[s.cache] && t.push(i);
              }),
              t.pop()
            );
          },
          transition: function (t, e) {
            var s = l(t),
              n = s._space(),
              o = c[n],
              a = 0 === this.alpha() ? l('transparent') : this,
              r = a[o.cache] || o.to(a._rgba),
              h = r.slice();
            return (
              (s = s[o.cache]),
              f(o.props, function (t, n) {
                var o = n.idx,
                  a = r[o],
                  l = s[o],
                  c = u[n.type] || {};
                null !== l &&
                  (null === a
                    ? (h[o] = l)
                    : (c.mod && (l - a > c.mod / 2 ? (a += c.mod) : a - l > c.mod / 2 && (a -= c.mod)),
                      (h[o] = i((l - a) * e + a, n))));
              }),
              this[n](h)
            );
          },
          blend: function (e) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
              s = i.pop(),
              n = l(e)._rgba;
            return l(
              t.map(i, function (t, e) {
                return (1 - s) * n[e] + s * t;
              })
            );
          },
          toRgbaString: function () {
            var e = 'rgba(',
              i = t.map(this._rgba, function (t, e) {
                return null == t ? (e > 2 ? 1 : 0) : t;
              });
            return 1 === i[3] && (i.pop(), (e = 'rgb(')), e + i.join() + ')';
          },
          toHslaString: function () {
            var e = 'hsla(',
              i = t.map(this.hsla(), function (t, e) {
                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + '%'), t;
              });
            return 1 === i[3] && (i.pop(), (e = 'hsl(')), e + i.join() + ')';
          },
          toHexString: function (e) {
            var i = this._rgba.slice(),
              s = i.pop();
            return (
              e && i.push(~~(255 * s)),
              '#' +
                t
                  .map(i, function (t) {
                    return (t = (t || 0).toString(16)), 1 === t.length ? '0' + t : t;
                  })
                  .join('')
            );
          },
          toString: function () {
            return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
          },
        })),
        (l.fn.parse.prototype = l.fn),
        (c.hsla.to = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e,
            i,
            s = t[0] / 255,
            n = t[1] / 255,
            o = t[2] / 255,
            a = t[3],
            r = Math.max(s, n, o),
            h = Math.min(s, n, o),
            l = r - h,
            c = r + h,
            u = 0.5 * c;
          return (
            (e =
              h === r
                ? 0
                : s === r
                ? (60 * (n - o)) / l + 360
                : n === r
                ? (60 * (o - s)) / l + 120
                : (60 * (s - n)) / l + 240),
            (i = 0 === l ? 0 : 0.5 >= u ? l / c : l / (2 - c)),
            [Math.round(e) % 360, i, u, null == a ? 1 : a]
          );
        }),
        (c.hsla.from = function (t) {
          if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
          var e = t[0] / 360,
            i = t[1],
            s = t[2],
            o = t[3],
            a = 0.5 >= s ? s * (1 + i) : s + i - s * i,
            r = 2 * s - a;
          return [
            Math.round(255 * n(r, a, e + 1 / 3)),
            Math.round(255 * n(r, a, e)),
            Math.round(255 * n(r, a, e - 1 / 3)),
            o,
          ];
        }),
        f(c, function (s, n) {
          var o = n.props,
            a = n.cache,
            h = n.to,
            c = n.from;
          (l.fn[s] = function (s) {
            if ((h && !this[a] && (this[a] = h(this._rgba)), s === e)) return this[a].slice();
            var n,
              r = t.type(s),
              u = 'array' === r || 'object' === r ? s : arguments,
              d = this[a].slice();
            return (
              f(o, function (t, e) {
                var s = u['object' === r ? t : e.idx];
                null == s && (s = d[e.idx]), (d[e.idx] = i(s, e));
              }),
              c ? ((n = l(c(d))), (n[a] = d), n) : l(d)
            );
          }),
            f(o, function (e, i) {
              l.fn[e] ||
                (l.fn[e] = function (n) {
                  var o,
                    a = t.type(n),
                    h = 'alpha' === e ? (this._hsla ? 'hsla' : 'rgba') : s,
                    l = this[h](),
                    c = l[i.idx];
                  return 'undefined' === a
                    ? c
                    : ('function' === a && ((n = n.call(this, c)), (a = t.type(n))),
                      null == n && i.empty
                        ? this
                        : ('string' === a &&
                            ((o = r.exec(n)), o && (n = c + parseFloat(o[2]) * ('+' === o[1] ? 1 : -1))),
                          (l[i.idx] = n),
                          this[h](l)));
                });
            });
        }),
        (l.hook = function (e) {
          var i = e.split(' ');
          f(i, function (e, i) {
            (t.cssHooks[i] = {
              set: function (e, n) {
                var o,
                  a,
                  r = '';
                if ('transparent' !== n && ('string' !== t.type(n) || (o = s(n)))) {
                  if (((n = l(o || n)), !d.rgba && 1 !== n._rgba[3])) {
                    for (
                      a = 'backgroundColor' === i ? e.parentNode : e;
                      ('' === r || 'transparent' === r) && a && a.style;

                    )
                      try {
                        (r = t.css(a, 'backgroundColor')), (a = a.parentNode);
                      } catch (h) {}
                    n = n.blend(r && 'transparent' !== r ? r : '_default');
                  }
                  n = n.toRgbaString();
                }
                try {
                  e.style[i] = n;
                } catch (h) {}
              },
            }),
              (t.fx.step[i] = function (e) {
                e.colorInit || ((e.start = l(e.elem, i)), (e.end = l(e.end)), (e.colorInit = !0)),
                  t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
              });
          });
        }),
        l.hook(a),
        (t.cssHooks.borderColor = {
          expand: function (t) {
            var e = {};
            return (
              f(['Top', 'Right', 'Bottom', 'Left'], function (i, s) {
                e['border' + s + 'Color'] = t;
              }),
              e
            );
          },
        }),
        (o = t.Color.names =
          {
            aqua: '#00ffff',
            black: '#000000',
            blue: '#0000ff',
            fuchsia: '#ff00ff',
            gray: '#808080',
            green: '#008000',
            lime: '#00ff00',
            maroon: '#800000',
            navy: '#000080',
            olive: '#808000',
            purple: '#800080',
            red: '#ff0000',
            silver: '#c0c0c0',
            teal: '#008080',
            white: '#ffffff',
            yellow: '#ffff00',
            transparent: [null, null, null, 0],
            _default: '#ffffff',
          });
    })(p),
    (function () {
      function e(e) {
        var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
        if (n && n.length && n[0] && n[n[0]])
          for (s = n.length; s--; ) (i = n[s]), 'string' == typeof n[i] && (o[t.camelCase(i)] = n[i]);
        else for (i in n) 'string' == typeof n[i] && (o[i] = n[i]);
        return o;
      }
      function i(e, i) {
        var s,
          o,
          a = {};
        for (s in i) (o = i[s]), e[s] !== o && (n[s] || ((t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o)));
        return a;
      }
      var s = ['add', 'remove', 'toggle'],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1,
        };
      t.each(['borderLeftStyle', 'borderRightStyle', 'borderBottomStyle', 'borderTopStyle'], function (e, i) {
        t.fx.step[i] = function (t) {
          (('none' !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
            (p.style(t.elem, i, t.end), (t.setAttr = !0));
        };
      }),
        t.fn.addBack ||
          (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
          }),
        (t.effects.animateClass = function (n, o, a, r) {
          var h = t.speed(o, a, r);
          return this.queue(function () {
            var o,
              a = t(this),
              r = a.attr('class') || '',
              l = h.children ? a.find('*').addBack() : a;
            (l = l.map(function () {
              var i = t(this);
              return { el: i, start: e(this) };
            })),
              (o = function () {
                t.each(s, function (t, e) {
                  n[e] && a[e + 'Class'](n[e]);
                });
              }),
              o(),
              (l = l.map(function () {
                return (this.end = e(this.el[0])), (this.diff = i(this.start, this.end)), this;
              })),
              a.attr('class', r),
              (l = l.map(function () {
                var e = this,
                  i = t.Deferred(),
                  s = t.extend({}, h, {
                    queue: !1,
                    complete: function () {
                      i.resolve(e);
                    },
                  });
                return this.el.animate(this.diff, s), i.promise();
              })),
              t.when.apply(t, l.get()).done(function () {
                o(),
                  t.each(arguments, function () {
                    var e = this.el;
                    t.each(this.diff, function (t) {
                      e.css(t, '');
                    });
                  }),
                  h.complete.call(a[0]);
              });
          });
        }),
        t.fn.extend({
          addClass: (function (e) {
            return function (i, s, n, o) {
              return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments);
            };
          })(t.fn.addClass),
          removeClass: (function (e) {
            return function (i, s, n, o) {
              return arguments.length > 1
                ? t.effects.animateClass.call(this, { remove: i }, s, n, o)
                : e.apply(this, arguments);
            };
          })(t.fn.removeClass),
          toggleClass: (function (e) {
            return function (i, s, n, o, a) {
              return 'boolean' == typeof s || void 0 === s
                ? n
                  ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a)
                  : e.apply(this, arguments)
                : t.effects.animateClass.call(this, { toggle: i }, s, n, o);
            };
          })(t.fn.toggleClass),
          switchClass: function (e, i, s, n, o) {
            return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o);
          },
        });
    })(),
    (function () {
      function e(e, i, s, n) {
        return (
          t.isPlainObject(e) && ((i = e), (e = e.effect)),
          (e = { effect: e }),
          null == i && (i = {}),
          t.isFunction(i) && ((n = i), (s = null), (i = {})),
          ('number' == typeof i || t.fx.speeds[i]) && ((n = s), (s = i), (i = {})),
          t.isFunction(s) && ((n = s), (s = null)),
          i && t.extend(e, i),
          (s = s || i.duration),
          (e.duration = t.fx.off
            ? 0
            : 'number' == typeof s
            ? s
            : s in t.fx.speeds
            ? t.fx.speeds[s]
            : t.fx.speeds._default),
          (e.complete = n || i.complete),
          e
        );
      }
      function i(e) {
        return !e || 'number' == typeof e || t.fx.speeds[e]
          ? !0
          : 'string' != typeof e || t.effects.effect[e]
          ? t.isFunction(e)
            ? !0
            : 'object' != typeof e || e.effect
            ? !1
            : !0
          : !0;
      }
      function s(t, e) {
        var i = e.outerWidth(),
          s = e.outerHeight(),
          n =
            /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ['', 0, i, s, 0];
        return {
          top: parseFloat(o[1]) || 0,
          right: 'auto' === o[2] ? i : parseFloat(o[2]),
          bottom: 'auto' === o[3] ? s : parseFloat(o[3]),
          left: parseFloat(o[4]) || 0,
        };
      }
      t.expr &&
        t.expr.filters &&
        t.expr.filters.animated &&
        (t.expr.filters.animated = (function (e) {
          return function (i) {
            return !!t(i).data(d) || e(i);
          };
        })(t.expr.filters.animated)),
        t.uiBackCompat !== !1 &&
          t.extend(t.effects, {
            save: function (t, e) {
              for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]);
            },
            restore: function (t, e) {
              for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && ((i = t.data(c + e[s])), t.css(e[s], i));
            },
            setMode: function (t, e) {
              return 'toggle' === e && (e = t.is(':hidden') ? 'show' : 'hide'), e;
            },
            createWrapper: function (e) {
              if (e.parent().is('.ui-effects-wrapper')) return e.parent();
              var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css('float') },
                s = t('<div></div>')
                  .addClass('ui-effects-wrapper')
                  .css({ fontSize: '100%', background: 'transparent', border: 'none', margin: 0, padding: 0 }),
                n = { width: e.width(), height: e.height() },
                o = document.activeElement;
              try {
                o.id;
              } catch (a) {
                o = document.body;
              }
              return (
                e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger('focus'),
                (s = e.parent()),
                'static' === e.css('position')
                  ? (s.css({ position: 'relative' }), e.css({ position: 'relative' }))
                  : (t.extend(i, { position: e.css('position'), zIndex: e.css('z-index') }),
                    t.each(['top', 'left', 'bottom', 'right'], function (t, s) {
                      (i[s] = e.css(s)), isNaN(parseInt(i[s], 10)) && (i[s] = 'auto');
                    }),
                    e.css({ position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' })),
                e.css(n),
                s.css(i).show()
              );
            },
            removeWrapper: function (e) {
              var i = document.activeElement;
              return (
                e.parent().is('.ui-effects-wrapper') &&
                  (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger('focus')),
                e
              );
            },
          }),
        t.extend(t.effects, {
          version: '1.12.0',
          define: function (e, i, s) {
            return s || ((s = i), (i = 'effect')), (t.effects.effect[e] = s), (t.effects.effect[e].mode = i), s;
          },
          scaledDimensions: function (t, e, i) {
            if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
            var s = 'horizontal' !== i ? (e || 100) / 100 : 1,
              n = 'vertical' !== i ? (e || 100) / 100 : 1;
            return {
              height: t.height() * n,
              width: t.width() * s,
              outerHeight: t.outerHeight() * n,
              outerWidth: t.outerWidth() * s,
            };
          },
          clipToBox: function (t) {
            return {
              width: t.clip.right - t.clip.left,
              height: t.clip.bottom - t.clip.top,
              left: t.clip.left,
              top: t.clip.top,
            };
          },
          unshift: function (t, e, i) {
            var s = t.queue();
            e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
          },
          saveStyle: function (t) {
            t.data(u, t[0].style.cssText);
          },
          restoreStyle: function (t) {
            (t[0].style.cssText = t.data(u) || ''), t.removeData(u);
          },
          mode: function (t, e) {
            var i = t.is(':hidden');
            return 'toggle' === e && (e = i ? 'show' : 'hide'), (i ? 'hide' === e : 'show' === e) && (e = 'none'), e;
          },
          getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
              case 'top':
                i = 0;
                break;
              case 'middle':
                i = 0.5;
                break;
              case 'bottom':
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case 'left':
                s = 0;
                break;
              case 'center':
                s = 0.5;
                break;
              case 'right':
                s = 1;
                break;
              default:
                s = t[1] / e.width;
            }
            return { x: s, y: i };
          },
          createPlaceholder: function (e) {
            var i,
              s = e.css('position'),
              n = e.position();
            return (
              e
                .css({
                  marginTop: e.css('marginTop'),
                  marginBottom: e.css('marginBottom'),
                  marginLeft: e.css('marginLeft'),
                  marginRight: e.css('marginRight'),
                })
                .outerWidth(e.outerWidth())
                .outerHeight(e.outerHeight()),
              /^(static|relative)/.test(s) &&
                ((s = 'absolute'),
                (i = t('<' + e[0].nodeName + '>')
                  .insertAfter(e)
                  .css({
                    display: /^(inline|ruby)/.test(e.css('display')) ? 'inline-block' : 'block',
                    visibility: 'hidden',
                    marginTop: e.css('marginTop'),
                    marginBottom: e.css('marginBottom'),
                    marginLeft: e.css('marginLeft'),
                    marginRight: e.css('marginRight'),
                    float: e.css('float'),
                  })
                  .outerWidth(e.outerWidth())
                  .outerHeight(e.outerHeight())
                  .addClass('ui-effects-placeholder')),
                e.data(c + 'placeholder', i)),
              e.css({ position: s, left: n.left, top: n.top }),
              i
            );
          },
          removePlaceholder: function (t) {
            var e = c + 'placeholder',
              i = t.data(e);
            i && (i.remove(), t.removeData(e));
          },
          cleanUp: function (e) {
            t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
          },
          setTransition: function (e, i, s, n) {
            return (
              (n = n || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (n[i] = o[0] * s + o[1]);
              }),
              n
            );
          },
        }),
        t.fn.extend({
          effect: function () {
            function i(e) {
              function i() {
                r.removeData(d), t.effects.cleanUp(r), 'hide' === s.mode && r.hide(), a();
              }
              function a() {
                t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
              }
              var r = t(this);
              (s.mode = c.shift()),
                t.uiBackCompat === !1 || o
                  ? 'none' === s.mode
                    ? (r[l](), a())
                    : n.call(r[0], s, i)
                  : (r.is(':hidden') ? 'hide' === l : 'show' === l)
                  ? (r[l](), a())
                  : n.call(r[0], s, a);
            }
            var s = e.apply(this, arguments),
              n = t.effects.effect[s.effect],
              o = n.mode,
              a = s.queue,
              r = a || 'fx',
              h = s.complete,
              l = s.mode,
              c = [],
              u = function (e) {
                var i = t(this),
                  s = t.effects.mode(i, l) || o;
                i.data(d, !0),
                  c.push(s),
                  o && ('show' === s || (s === o && 'hide' === s)) && i.show(),
                  (o && 'none' === s) || t.effects.saveStyle(i),
                  t.isFunction(e) && e();
              };
            return t.fx.off || !n
              ? l
                ? this[l](s.duration, h)
                : this.each(function () {
                    h && h.call(this);
                  })
              : a === !1
              ? this.each(u).each(i)
              : this.queue(r, u).queue(r, i);
          },
          show: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = 'show'), this.effect.call(this, n);
            };
          })(t.fn.show),
          hide: (function (t) {
            return function (s) {
              if (i(s)) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = 'hide'), this.effect.call(this, n);
            };
          })(t.fn.hide),
          toggle: (function (t) {
            return function (s) {
              if (i(s) || 'boolean' == typeof s) return t.apply(this, arguments);
              var n = e.apply(this, arguments);
              return (n.mode = 'toggle'), this.effect.call(this, n);
            };
          })(t.fn.toggle),
          cssUnit: function (e) {
            var i = this.css(e),
              s = [];
            return (
              t.each(['em', 'px', '%', 'pt'], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
              }),
              s
            );
          },
          cssClip: function (t) {
            return t
              ? this.css('clip', 'rect(' + t.top + 'px ' + t.right + 'px ' + t.bottom + 'px ' + t.left + 'px)')
              : s(this.css('clip'), this);
          },
          transfer: function (e, i) {
            var s = t(this),
              n = t(e.to),
              o = 'fixed' === n.css('position'),
              a = t('body'),
              r = o ? a.scrollTop() : 0,
              h = o ? a.scrollLeft() : 0,
              l = n.offset(),
              c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
              u = s.offset(),
              d = t("<div class='ui-effects-transfer'></div>")
                .appendTo('body')
                .addClass(e.className)
                .css({
                  top: u.top - r,
                  left: u.left - h,
                  height: s.innerHeight(),
                  width: s.innerWidth(),
                  position: o ? 'fixed' : 'absolute',
                })
                .animate(c, e.duration, e.easing, function () {
                  d.remove(), t.isFunction(i) && i();
                });
          },
        }),
        (t.fx.step.clip = function (e) {
          e.clipInit ||
            ((e.start = t(e.elem).cssClip()),
            'string' == typeof e.end && (e.end = s(e.end, e.elem)),
            (e.clipInit = !0)),
            t(e.elem).cssClip({
              top: e.pos * (e.end.top - e.start.top) + e.start.top,
              right: e.pos * (e.end.right - e.start.right) + e.start.right,
              bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
              left: e.pos * (e.end.left - e.start.left) + e.start.left,
            });
        });
    })(),
    (function () {
      var e = {};
      t.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (t, i) {
        e[i] = function (e) {
          return Math.pow(e, t + 2);
        };
      }),
        t.extend(e, {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
          },
          Back: function (t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
          },
        }),
        t.each(e, function (e, i) {
          (t.easing['easeIn' + e] = i),
            (t.easing['easeOut' + e] = function (t) {
              return 1 - i(1 - t);
            }),
            (t.easing['easeInOut' + e] = function (t) {
              return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            });
        });
    })();
  var f = t.effects;
  t.effects.define('blind', 'hide', function (e, i) {
    var s = {
        up: ['bottom', 'top'],
        vertical: ['bottom', 'top'],
        down: ['top', 'bottom'],
        left: ['right', 'left'],
        horizontal: ['right', 'left'],
        right: ['left', 'right'],
      },
      n = t(this),
      o = e.direction || 'up',
      a = n.cssClip(),
      r = { clip: t.extend({}, a) },
      h = t.effects.createPlaceholder(n);
    (r.clip[s[o][0]] = r.clip[s[o][1]]),
      'show' === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), (r.clip = a)),
      h && h.animate(t.effects.clipToBox(r), e.duration, e.easing),
      n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
  }),
    t.effects.define('bounce', function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = 'hide' === r,
        l = 'show' === r,
        c = e.direction || 'up',
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = 'up' === c || 'down' === c ? 'top' : 'left',
        _ = 'up' === c || 'left' === c,
        v = 0,
        b = a.queue().length;
      for (
        t.effects.createPlaceholder(a),
          o = a.css(m),
          u || (u = a['top' === m ? 'outerHeight' : 'outerWidth']() / 3),
          l &&
            ((n = { opacity: 1 }),
            (n[m] = o),
            a
              .css('opacity', 0)
              .css(m, _ ? 2 * -u : 2 * u)
              .animate(n, f, g)),
          h && (u /= Math.pow(2, d - 1)),
          n = {},
          n[m] = o;
        d > v;
        v++
      )
        (s = {}), (s[m] = (_ ? '-=' : '+=') + u), a.animate(s, f, g).animate(n, f, g), (u = h ? 2 * u : u / 2);
      h && ((s = { opacity: 0 }), (s[m] = (_ ? '-=' : '+=') + u), a.animate(s, f, g)),
        a.queue(i),
        t.effects.unshift(a, b, p + 1);
    }),
    t.effects.define('clip', 'hide', function (e, i) {
      var s,
        n = {},
        o = t(this),
        a = e.direction || 'vertical',
        r = 'both' === a,
        h = r || 'horizontal' === a,
        l = r || 'vertical' === a;
      (s = o.cssClip()),
        (n.clip = {
          top: l ? (s.bottom - s.top) / 2 : s.top,
          right: h ? (s.right - s.left) / 2 : s.right,
          bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
          left: h ? (s.right - s.left) / 2 : s.left,
        }),
        t.effects.createPlaceholder(o),
        'show' === e.mode && (o.cssClip(n.clip), (n.clip = s)),
        o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define('drop', 'hide', function (e, i) {
      var s,
        n = t(this),
        o = e.mode,
        a = 'show' === o,
        r = e.direction || 'left',
        h = 'up' === r || 'down' === r ? 'top' : 'left',
        l = 'up' === r || 'left' === r ? '-=' : '+=',
        c = '+=' === l ? '-=' : '+=',
        u = { opacity: 0 };
      t.effects.createPlaceholder(n),
        (s = e.distance || n['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2),
        (u[h] = l + s),
        a && (n.css(u), (u[h] = c + s), (u.opacity = 1)),
        n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define('explode', 'hide', function (e, i) {
      function s() {
        b.push(this), b.length === u * d && n();
      }
      function n() {
        p.css({ visibility: 'visible' }), t(b).remove(), i();
      }
      var o,
        a,
        r,
        h,
        l,
        c,
        u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = 'show' === f,
        m = p.show().css('visibility', 'hidden').offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];
      for (o = 0; u > o; o++)
        for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++)
          (r = m.left + a * _),
            (l = a - (d - 1) / 2),
            p
              .clone()
              .appendTo('body')
              .wrap('<div></div>')
              .css({ position: 'absolute', visibility: 'visible', left: -a * _, top: -o * v })
              .parent()
              .addClass('ui-effects-explode')
              .css({
                position: 'absolute',
                overflow: 'hidden',
                width: _,
                height: v,
                left: r + (g ? l * _ : 0),
                top: h + (g ? c * v : 0),
                opacity: g ? 0 : 1,
              })
              .animate(
                { left: r + (g ? 0 : l * _), top: h + (g ? 0 : c * v), opacity: g ? 1 : 0 },
                e.duration || 500,
                e.easing,
                s
              );
    }),
    t.effects.define('fade', 'toggle', function (e, i) {
      var s = 'show' === e.mode;
      t(this)
        .css('opacity', s ? 0 : 1)
        .animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define('fold', 'hide', function (e, i) {
      var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        c = l ? ['right', 'bottom'] : ['bottom', 'right'],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = { clip: t.extend({}, p) },
        g = { clip: t.extend({}, p) },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
      h && (r = (parseInt(h[1], 10) / 100) * m[a ? 0 : 1]),
        (f.clip[c[0]] = r),
        (g.clip[c[0]] = r),
        (g.clip[c[1]] = 0),
        o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), (g.clip = p)),
        s
          .queue(function (i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
          })
          .animate(f, u, e.easing)
          .animate(g, u, e.easing)
          .queue(i),
        t.effects.unshift(s, _, 4);
    }),
    t.effects.define('highlight', 'show', function (e, i) {
      var s = t(this),
        n = { backgroundColor: s.css('backgroundColor') };
      'hide' === e.mode && (n.opacity = 0),
        t.effects.saveStyle(s),
        s
          .css({ backgroundImage: 'none', backgroundColor: e.color || '#ffff99' })
          .animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    }),
    t.effects.define('size', function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = ['fontSize'],
        h = ['borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom'],
        l = ['borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight'],
        c = e.mode,
        u = 'effect' !== c,
        d = e.scale || 'both',
        p = e.origin || ['middle', 'center'],
        f = a.css('position'),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);
      t.effects.createPlaceholder(a),
        'show' === c && ((o = _), (_ = v), (v = o)),
        (n = {
          from: { y: _.height / m.height, x: _.width / m.width },
          to: { y: v.height / m.height, x: v.width / m.width },
        }),
        ('box' === d || 'both' === d) &&
          (n.from.y !== n.to.y &&
            ((_ = t.effects.setTransition(a, h, n.from.y, _)), (v = t.effects.setTransition(a, h, n.to.y, v))),
          n.from.x !== n.to.x &&
            ((_ = t.effects.setTransition(a, l, n.from.x, _)), (v = t.effects.setTransition(a, l, n.to.x, v)))),
        ('content' === d || 'both' === d) &&
          n.from.y !== n.to.y &&
          ((_ = t.effects.setTransition(a, r, n.from.y, _)), (v = t.effects.setTransition(a, r, n.to.y, v))),
        p &&
          ((s = t.effects.getBaseline(p, m)),
          (_.top = (m.outerHeight - _.outerHeight) * s.y + g.top),
          (_.left = (m.outerWidth - _.outerWidth) * s.x + g.left),
          (v.top = (m.outerHeight - v.outerHeight) * s.y + g.top),
          (v.left = (m.outerWidth - v.outerWidth) * s.x + g.left)),
        a.css(_),
        ('content' === d || 'both' === d) &&
          ((h = h.concat(['marginTop', 'marginBottom']).concat(r)),
          (l = l.concat(['marginLeft', 'marginRight'])),
          a.find('*[width]').each(function () {
            var i = t(this),
              s = t.effects.scaledDimensions(i),
              o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x,
              },
              a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x,
              };
            n.from.y !== n.to.y &&
              ((o = t.effects.setTransition(i, h, n.from.y, o)), (a = t.effects.setTransition(i, h, n.to.y, a))),
              n.from.x !== n.to.x &&
                ((o = t.effects.setTransition(i, l, n.from.x, o)), (a = t.effects.setTransition(i, l, n.to.x, a))),
              u && t.effects.saveStyle(i),
              i.css(o),
              i.animate(a, e.duration, e.easing, function () {
                u && t.effects.restoreStyle(i);
              });
          })),
        a.animate(v, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            var e = a.offset();
            0 === v.opacity && a.css('opacity', _.opacity),
              u || (a.css('position', 'static' === f ? 'relative' : f).offset(e), t.effects.saveStyle(a)),
              i();
          },
        });
    }),
    t.effects.define('scale', function (e, i) {
      var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : 'effect' !== n ? 0 : 100),
        a = t.extend(
          !0,
          {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || 'both'),
            origin: e.origin || ['middle', 'center'],
          },
          e
        );
      e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)), t.effects.effect.size.call(this, a, i);
    }),
    t.effects.define('puff', 'hide', function (e, i) {
      var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
      t.effects.effect.scale.call(this, s, i);
    }),
    t.effects.define('pulsate', 'show', function (e, i) {
      var s = t(this),
        n = e.mode,
        o = 'show' === n,
        a = 'hide' === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        c = 0,
        u = 1,
        d = s.queue().length;
      for ((o || !s.is(':visible')) && (s.css('opacity', 0).show(), (c = 1)); h > u; u++)
        s.animate({ opacity: c }, l, e.easing), (c = 1 - c);
      s.animate({ opacity: c }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
    }),
    t.effects.define('shake', function (e, i) {
      var s = 1,
        n = t(this),
        o = e.direction || 'left',
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        c = 'up' === o || 'down' === o ? 'top' : 'left',
        u = 'up' === o || 'left' === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;
      for (
        t.effects.createPlaceholder(n),
          d[c] = (u ? '-=' : '+=') + a,
          p[c] = (u ? '+=' : '-=') + 2 * a,
          f[c] = (u ? '-=' : '+=') + 2 * a,
          n.animate(d, l, e.easing);
        r > s;
        s++
      )
        n.animate(p, l, e.easing).animate(f, l, e.easing);
      n
        .animate(p, l, e.easing)
        .animate(d, l / 2, e.easing)
        .queue(i),
        t.effects.unshift(n, g, h + 1);
    }),
    t.effects.define('slide', 'show', function (e, i) {
      var s,
        n,
        o = t(this),
        a = { up: ['bottom', 'top'], down: ['top', 'bottom'], left: ['right', 'left'], right: ['left', 'right'] },
        r = e.mode,
        h = e.direction || 'left',
        l = 'up' === h || 'down' === h ? 'top' : 'left',
        c = 'up' === h || 'left' === h,
        u = e.distance || o['top' === l ? 'outerHeight' : 'outerWidth'](!0),
        d = {};
      t.effects.createPlaceholder(o),
        (s = o.cssClip()),
        (n = o.position()[l]),
        (d[l] = (c ? -1 : 1) * u + n),
        (d.clip = o.cssClip()),
        (d.clip[a[h][1]] = d.clip[a[h][0]]),
        'show' === r && (o.cssClip(d.clip), o.css(l, d[l]), (d.clip = s), (d[l] = n)),
        o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
    });
  var f;
  t.uiBackCompat !== !1 &&
    (f = t.effects.define('transfer', function (e, i) {
      t(this).transfer(e, i);
    })),
    (t.ui.focusable = function (i, s) {
      var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase();
      return 'area' === l
        ? ((n = i.parentNode),
          (o = n.name),
          i.href && o && 'map' === n.nodeName.toLowerCase()
            ? ((a = t("img[usemap='#" + o + "']")), a.length > 0 && a.is(':visible'))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? ((r = !i.disabled), r && ((h = t(i).closest('fieldset')[0]), h && (r = !h.disabled)))
            : (r = 'a' === l ? i.href || s : s),
          r && t(i).is(':visible') && e(t(i)));
    }),
    t.extend(t.expr[':'], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, 'tabindex'));
      },
    }),
    t.ui.focusable,
    (t.fn.form = function () {
      return 'string' == typeof this[0].form ? this.closest('form') : t(this[0].form);
    }),
    (t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this);
        setTimeout(function () {
          var i = e.data('ui-form-reset-instances');
          t.each(i, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        if (((this.form = this.element.form()), this.form.length)) {
          var t = this.form.data('ui-form-reset-instances') || [];
          t.length || this.form.on('reset.ui-form-reset', this._formResetHandler),
            t.push(this),
            this.form.data('ui-form-reset-instances', t);
        }
      },
      _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data('ui-form-reset-instances');
          e.splice(t.inArray(this, e), 1),
            e.length
              ? this.form.data('ui-form-reset-instances', e)
              : this.form.removeData('ui-form-reset-instances').off('reset.ui-form-reset');
        }
      },
    }),
    '1.7' === t.fn.jquery.substring(0, 3) &&
      (t.each(['Width', 'Height'], function (e, i) {
        function s(e, i, s, o) {
          return (
            t.each(n, function () {
              (i -= parseFloat(t.css(e, 'padding' + this)) || 0),
                s && (i -= parseFloat(t.css(e, 'border' + this + 'Width')) || 0),
                o && (i -= parseFloat(t.css(e, 'margin' + this)) || 0);
            }),
            i
          );
        }
        var n = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
          o = i.toLowerCase(),
          a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        (t.fn['inner' + i] = function (e) {
          return void 0 === e
            ? a['inner' + i].call(this)
            : this.each(function () {
                t(this).css(o, s(this, e) + 'px');
              });
        }),
          (t.fn['outer' + i] = function (e, n) {
            return 'number' != typeof e
              ? a['outer' + i].call(this, e)
              : this.each(function () {
                  t(this).css(o, s(this, e, !0, n) + 'px');
                });
          });
      }),
      (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      })),
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.escapeSelector = (function () {
      var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
      return function (e) {
        return e.replace(t, '\\$1');
      };
    })()),
    (t.fn.labels = function () {
      var e, i, s, n, o;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((n = this.eq(0).parents('label')),
          (s = this.attr('id')),
          s &&
            ((e = this.eq(0).parents().last()),
            (o = e.add(e.length ? e.siblings() : this.siblings())),
            (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
            (n = n.add(o.find(i).addBack(i)))),
          this.pushStack(n));
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css('position'),
        s = 'absolute' === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this);
            return s && 'static' === e.css('position')
              ? !1
              : n.test(e.css('overflow') + e.css('overflow-y') + e.css('overflow-x'));
          })
          .eq(0);
      return 'fixed' !== i && o.length ? o : t(this[0].ownerDocument || document);
    }),
    t.extend(t.expr[':'], {
      tabbable: function (e) {
        var i = t.attr(e, 'tabindex'),
          s = null != i;
        return (!s || i >= 0) && t.ui.focusable(e, s);
      },
    }),
    t.fn.extend({
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = 'ui-id-' + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr('id');
        });
      },
    }),
    t.widget('ui.accordion', {
      version: '1.12.0',
      options: {
        active: 0,
        animate: {},
        classes: {
          'ui-accordion-header': 'ui-corner-top',
          'ui-accordion-header-collapsed': 'ui-corner-all',
          'ui-accordion-content': 'ui-corner-bottom',
        },
        collapsible: !1,
        event: 'click',
        header: '> li > :first-child, > :not(li):even',
        heightStyle: 'auto',
        icons: { activeHeader: 'ui-icon-triangle-1-s', header: 'ui-icon-triangle-1-e' },
        activate: null,
        beforeActivate: null,
      },
      hideProps: {
        borderTopWidth: 'hide',
        borderBottomWidth: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide',
        height: 'hide',
      },
      showProps: {
        borderTopWidth: 'show',
        borderBottomWidth: 'show',
        paddingTop: 'show',
        paddingBottom: 'show',
        height: 'show',
      },
      _create: function () {
        var e = this.options;
        (this.prevShow = this.prevHide = t()),
          this._addClass('ui-accordion', 'ui-widget ui-helper-reset'),
          this.element.attr('role', 'tablist'),
          e.collapsible || (e.active !== !1 && null != e.active) || (e.active = 0),
          this._processPanels(),
          0 > e.active && (e.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return { header: this.active, panel: this.active.length ? this.active.next() : t() };
      },
      _createIcons: function () {
        var e,
          i,
          s = this.options.icons;
        s &&
          ((e = t('<span>')),
          this._addClass(e, 'ui-accordion-header-icon', 'ui-icon ' + s.header),
          e.prependTo(this.headers),
          (i = this.active.children('.ui-accordion-header-icon')),
          this._removeClass(i, s.header)
            ._addClass(i, null, s.activeHeader)
            ._addClass(this.headers, 'ui-accordion-icons'));
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, 'ui-accordion-icons'),
          this.headers.children('.ui-accordion-header-icon').remove();
      },
      _destroy: function () {
        var t;
        this.element.removeAttr('role'),
          this.headers.removeAttr('role aria-expanded aria-selected aria-controls tabIndex').removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers.next().css('display', '').removeAttr('role aria-hidden aria-labelledby').removeUniqueId()),
          'content' !== this.options.heightStyle && t.css('height', '');
      },
      _setOption: function (t, e) {
        return 'active' === t
          ? (this._activate(e), void 0)
          : ('event' === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)),
            this._super(t, e),
            'collapsible' !== t || e || this.options.active !== !1 || this._activate(0),
            'icons' === t && (this._destroyIcons(), e && this._createIcons()),
            void 0);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr('aria-disabled', t),
          this._toggleClass(null, 'ui-state-disabled', !!t),
          this._toggleClass(this.headers.add(this.headers.next()), null, 'ui-state-disabled', !!t);
      },
      _keydown: function (e) {
        if (!e.altKey && !e.ctrlKey) {
          var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;
          switch (e.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(n + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(n - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(e);
              break;
            case i.HOME:
              o = this.headers[0];
              break;
            case i.END:
              o = this.headers[s - 1];
          }
          o && (t(e.target).attr('tabIndex', -1), t(o).attr('tabIndex', 0), t(o).trigger('focus'), e.preventDefault());
        }
      },
      _panelKeyDown: function (e) {
        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger('focus');
      },
      refresh: function () {
        var e = this.options;
        this._processPanels(),
          (e.active === !1 && e.collapsible === !0) || !this.headers.length
            ? ((e.active = !1), (this.active = t()))
            : e.active === !1
            ? this._activate(0)
            : this.active.length && !t.contains(this.element[0], this.active[0])
            ? this.headers.length === this.headers.find('.ui-state-disabled').length
              ? ((e.active = !1), (this.active = t()))
              : this._activate(Math.max(0, e.active - 1))
            : (e.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        (this.headers = this.element.find(this.options.header)),
          this._addClass(this.headers, 'ui-accordion-header ui-accordion-header-collapsed', 'ui-state-default'),
          (this.panels = this.headers.next().filter(':not(.ui-accordion-content-active)').hide()),
          this._addClass(this.panels, 'ui-accordion-content', 'ui-helper-reset ui-widget-content'),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
        (this.active = this._findActive(i.active)),
          this._addClass(this.active, 'ui-accordion-header-active', 'ui-state-active')._removeClass(
            this.active,
            'ui-accordion-header-collapsed'
          ),
          this._addClass(this.active.next(), 'ui-accordion-content-active'),
          this.active.next().show(),
          this.headers
            .attr('role', 'tab')
            .each(function () {
              var e = t(this),
                i = e.uniqueId().attr('id'),
                s = e.next(),
                n = s.uniqueId().attr('id');
              e.attr('aria-controls', n), s.attr('aria-labelledby', i);
            })
            .next()
            .attr('role', 'tabpanel'),
          this.headers
            .not(this.active)
            .attr({ 'aria-selected': 'false', 'aria-expanded': 'false', tabIndex: -1 })
            .next()
            .attr({ 'aria-hidden': 'true' })
            .hide(),
          this.active.length
            ? this.active
                .attr({ 'aria-selected': 'true', 'aria-expanded': 'true', tabIndex: 0 })
                .next()
                .attr({ 'aria-hidden': 'false' })
            : this.headers.eq(0).attr('tabIndex', 0),
          this._createIcons(),
          this._setupEvents(i.event),
          'fill' === s
            ? ((e = n.height()),
              this.element.siblings(':visible').each(function () {
                var i = t(this),
                  s = i.css('position');
                'absolute' !== s && 'fixed' !== s && (e -= i.outerHeight(!0));
              }),
              this.headers.each(function () {
                e -= t(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
                })
                .css('overflow', 'auto'))
            : 'auto' === s &&
              ((e = 0),
              this.headers
                .next()
                .each(function () {
                  var i = t(this).is(':visible');
                  i || t(this).show(), (e = Math.max(e, t(this).css('height', '').height())), i || t(this).hide();
                })
                .height(e));
      },
      _activate: function (e) {
        var i = this._findActive(e)[0];
        i !== this.active[0] &&
          ((i = i || this.active[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
      },
      _findActive: function (e) {
        return 'number' == typeof e ? this.headers.eq(e) : t();
      },
      _setupEvents: function (e) {
        var i = { keydown: '_keydown' };
        e &&
          t.each(e.split(' '), function (t, e) {
            i[e] = '_eventHandler';
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: '_panelKeyDown' }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (e) {
        var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          c = o.next(),
          u = { oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l };
        e.preventDefault(),
          (r && !n.collapsible) ||
            this._trigger('beforeActivate', e, u) === !1 ||
            ((n.active = h ? !1 : this.headers.index(a)),
            (this.active = r ? t() : a),
            this._toggle(u),
            this._removeClass(o, 'ui-accordion-header-active', 'ui-state-active'),
            n.icons &&
              ((i = o.children('.ui-accordion-header-icon')),
              this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)),
            r ||
              (this._removeClass(a, 'ui-accordion-header-collapsed')._addClass(
                a,
                'ui-accordion-header-active',
                'ui-state-active'
              ),
              n.icons &&
                ((s = a.children('.ui-accordion-header-icon')),
                this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)),
              this._addClass(a.next(), 'ui-accordion-content-active')));
      },
      _toggle: function (e) {
        var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = i),
          (this.prevHide = s),
          this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)),
          s.attr({ 'aria-hidden': 'true' }),
          s.prev().attr({ 'aria-selected': 'false', 'aria-expanded': 'false' }),
          i.length && s.length
            ? s.prev().attr({ tabIndex: -1, 'aria-expanded': 'false' })
            : i.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(t(this).attr('tabIndex'), 10);
                })
                .attr('tabIndex', -1),
          i.attr('aria-hidden', 'false').prev().attr({ 'aria-selected': 'true', 'aria-expanded': 'true', tabIndex: 0 });
      },
      _animate: function (t, e, i) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css('box-sizing'),
          l = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {},
          u = (l && c.down) || c,
          d = function () {
            a._toggleComplete(i);
          };
        return (
          'number' == typeof u && (o = u),
          'string' == typeof u && (n = u),
          (n = n || u.easing || c.easing),
          (o = o || u.duration || c.duration),
          e.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                e.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: d,
                  step: function (t, i) {
                    (i.now = Math.round(t)),
                      'height' !== i.prop
                        ? 'content-box' === h && (r += i.now)
                        : 'content' !== a.options.heightStyle &&
                          ((i.now = Math.round(s - e.outerHeight() - r)), (r = 0));
                  },
                }),
                void 0)
              : e.animate(this.hideProps, o, n, d)
            : t.animate(this.showProps, o, n, d)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev();
        this._removeClass(e, 'ui-accordion-content-active'),
          this._removeClass(i, 'ui-accordion-header-active')._addClass(i, 'ui-accordion-header-collapsed'),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger('activate', null, t);
      },
    }),
    (t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (i) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    }),
    t.widget('ui.menu', {
      version: '1.12.0',
      defaultElement: '<ul>',
      delay: 300,
      options: {
        icons: { submenu: 'ui-icon-caret-1-e' },
        items: '> *',
        menus: 'ul',
        position: { my: 'left top', at: 'right top' },
        role: 'menu',
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass('ui-menu', 'ui-widget ui-widget-content'),
          this._on({
            'mousedown .ui-menu-item': function (t) {
              t.preventDefault();
            },
            'click .ui-menu-item': function (e) {
              var i = t(e.target),
                s = t(t.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                i.not('.ui-state-disabled').length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has('.ui-menu').length
                  ? this.expand(e)
                  : !this.element.is(':focus') &&
                    s.closest('.ui-menu').length &&
                    (this.element.trigger('focus', [!0]),
                    this.active && 1 === this.active.parents('.ui-menu').length && clearTimeout(this.timer)));
            },
            'mouseenter .ui-menu-item': function (e) {
              if (!this.previousFilter) {
                var i = t(e.target).closest('.ui-menu-item'),
                  s = t(e.currentTarget);
                i[0] === s[0] &&
                  (this._removeClass(s.siblings().children('.ui-state-active'), null, 'ui-state-active'),
                  this.focus(e, s));
              }
            },
            mouseleave: 'collapseAll',
            'mouseleave .ui-menu': 'collapseAll',
            focus: function (t, e) {
              var i = this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, i);
            },
            blur: function (e) {
              this._delay(function () {
                var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                i && this.collapseAll(e);
              });
            },
            keydown: '_keydown',
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t), (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        var e = this.element.find('.ui-menu-item').removeAttr('role aria-disabled'),
          i = e.children('.ui-menu-item-wrapper').removeUniqueId().removeAttr('tabIndex role aria-haspopup');
        this.element
          .removeAttr('aria-activedescendant')
          .find('.ui-menu')
          .addBack()
          .removeAttr('role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex')
          .removeUniqueId()
          .show(),
          i.children().each(function () {
            var e = t(this);
            e.data('ui-menu-submenu-caret') && e.remove();
          });
      },
      _keydown: function (e) {
        var i,
          s,
          n,
          o,
          a = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move('first', 'first', e);
            break;
          case t.ui.keyCode.END:
            this._move('last', 'last', e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active && !this.active.is('.ui-state-disabled') && this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (a = !1),
              (s = this.previousFilter || ''),
              (n = String.fromCharCode(e.keyCode)),
              (o = !1),
              clearTimeout(this.filterTimer),
              n === s ? (o = !0) : (n = s + n),
              (i = this._filterMenuItems(n)),
              (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll('.ui-menu-item') : i),
              i.length || ((n = String.fromCharCode(e.keyCode)), (i = this._filterMenuItems(n))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = n),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        a && e.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is('.ui-state-disabled') &&
          (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
      },
      refresh: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);
        this._toggleClass('ui-menu-icons', null, !!this.element.find('.ui-icon').length),
          (s = h
            .filter(':not(.ui-menu)')
            .hide()
            .attr({ role: this.options.role, 'aria-hidden': 'true', 'aria-expanded': 'false' })
            .each(function () {
              var e = t(this),
                i = e.prev(),
                s = t('<span>').data('ui-menu-submenu-caret', !0);
              a._addClass(s, 'ui-menu-icon', 'ui-icon ' + r),
                i.attr('aria-haspopup', 'true').prepend(s),
                e.attr('aria-labelledby', i.attr('id'));
            })),
          this._addClass(s, 'ui-menu', 'ui-widget ui-widget-content ui-front'),
          (e = h.add(this.element)),
          (i = e.find(this.options.items)),
          i.not('.ui-menu-item').each(function () {
            var e = t(this);
            a._isDivider(e) && a._addClass(e, 'ui-menu-divider', 'ui-widget-content');
          }),
          (n = i.not('.ui-menu-item, .ui-menu-divider')),
          (o = n.children().not('.ui-menu').uniqueId().attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(n, 'ui-menu-item')._addClass(o, 'ui-menu-item-wrapper'),
          i.filter('.ui-state-disabled').attr('aria-disabled', 'true'),
          this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
      },
      _itemRole: function () {
        return { menu: 'menuitem', listbox: 'option' }[this.options.role];
      },
      _setOption: function (t, e) {
        if ('icons' === t) {
          var i = this.element.find('.ui-menu-icon');
          this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
        }
        this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr('aria-disabled', t + ''), this._toggleClass(null, 'ui-state-disabled', !!t);
      },
      focus: function (t, e) {
        var i, s, n;
        this.blur(t, t && 'focus' === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children('.ui-menu-item-wrapper')),
          this._addClass(s, null, 'ui-state-active'),
          this.options.role && this.element.attr('aria-activedescendant', s.attr('id')),
          (n = this.active.parent().closest('.ui-menu-item').children('.ui-menu-item-wrapper')),
          this._addClass(n, null, 'ui-state-active'),
          t && 'keydown' === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children('.ui-menu')),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger('focus', t, { item: e });
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, a, r;
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], 'borderTopWidth')) || 0),
          (s = parseFloat(t.css(this.activeMenu[0], 'paddingTop')) || 0),
          (n = e.offset().top - this.activeMenu.offset().top - i - s),
          (o = this.activeMenu.scrollTop()),
          (a = this.activeMenu.height()),
          (r = e.outerHeight()),
          0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(this.active.children('.ui-menu-item-wrapper'), null, 'ui-state-active'),
            this._trigger('blur', t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          'true' === t.attr('aria-hidden') &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element.find('.ui-menu').not(e.parents('.ui-menu')).hide().attr('aria-hidden', 'true'),
          e.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(i);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = i ? this.element : t(e && e.target).closest(this.element.find('.ui-menu'));
            s.length || (s = this.element),
              this._close(s),
              this.blur(e),
              this._removeClass(s.find('.ui-state-active'), null, 'ui-state-active'),
              (this.activeMenu = s);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false');
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest('.ui-menu').length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e = this.active && this.active.parent().closest('.ui-menu-item', this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e = this.active && this.active.children('.ui-menu ').find(this.options.items).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move('next', 'first', t);
      },
      previous: function (t) {
        this._move('prev', 'last', t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll('.ui-menu-item').length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll('.ui-menu-item').length;
      },
      _move: function (t, e, i) {
        var s;
        this.active &&
          (s =
            'first' === t || 'last' === t
              ? this.active['first' === t ? 'prevAll' : 'nextAll']('.ui-menu-item').eq(-1)
              : this.active[t + 'All']('.ui-menu-item').eq(0)),
          (s && s.length && this.active) || (s = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, s);
      },
      nextPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isLastItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.nextAll('.ui-menu-item').each(function () {
                    return (i = t(this)), 0 > i.offset().top - s - n;
                  }),
                  this.focus(e, i))
                : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? 'last' : 'first']())),
            void 0)
          : (this.next(e), void 0);
      },
      previousPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isFirstItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.prevAll('.ui-menu-item').each(function () {
                    return (i = t(this)), i.offset().top - s + n > 0;
                  }),
                  this.focus(e, i))
                : this.focus(e, this.activeMenu.find(this.options.items).first())),
            void 0)
          : (this.next(e), void 0);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop('scrollHeight');
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest('.ui-menu-item');
        var i = { item: this.active };
        this.active.has('.ui-menu').length || this.collapseAll(e, !0), this._trigger('select', e, i);
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'),
          s = RegExp('^' + i, 'i');
        return this.activeMenu
          .find(this.options.items)
          .filter('.ui-menu-item')
          .filter(function () {
            return s.test(t.trim(t(this).children('.ui-menu-item-wrapper').text()));
          });
      },
    }),
    t.widget('ui.autocomplete', {
      version: '1.12.0',
      defaultElement: '<input>',
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: 'left top', at: 'left bottom', collision: 'none' },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      requestIndex: 0,
      pending: 0,
      _create: function () {
        var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = 'textarea' === n,
          a = 'input' === n;
        (this.isMultiLine = o || (!a && this._isContentEditable(this.element))),
          (this.valueMethod = this.element[o || a ? 'val' : 'text']),
          (this.isNewMenu = !0),
          this._addClass('ui-autocomplete-input'),
          this.element.attr('autocomplete', 'off'),
          this._on(this.element, {
            keydown: function (n) {
              if (this.element.prop('readOnly')) return (e = !0), (s = !0), (i = !0), void 0;
              (e = !1), (s = !1), (i = !1);
              var o = t.ui.keyCode;
              switch (n.keyCode) {
                case o.PAGE_UP:
                  (e = !0), this._move('previousPage', n);
                  break;
                case o.PAGE_DOWN:
                  (e = !0), this._move('nextPage', n);
                  break;
                case o.UP:
                  (e = !0), this._keyEvent('previous', n);
                  break;
                case o.DOWN:
                  (e = !0), this._keyEvent('next', n);
                  break;
                case o.ENTER:
                  this.menu.active && ((e = !0), n.preventDefault(), this.menu.select(n));
                  break;
                case o.TAB:
                  this.menu.active && this.menu.select(n);
                  break;
                case o.ESCAPE:
                  this.menu.element.is(':visible') &&
                    (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                  break;
                default:
                  (i = !0), this._searchTimeout(n);
              }
            },
            keypress: function (s) {
              if (e)
                return (e = !1), (!this.isMultiLine || this.menu.element.is(':visible')) && s.preventDefault(), void 0;
              if (!i) {
                var n = t.ui.keyCode;
                switch (s.keyCode) {
                  case n.PAGE_UP:
                    this._move('previousPage', s);
                    break;
                  case n.PAGE_DOWN:
                    this._move('nextPage', s);
                    break;
                  case n.UP:
                    this._keyEvent('previous', s);
                    break;
                  case n.DOWN:
                    this._keyEvent('next', s);
                }
              }
            },
            input: function (t) {
              return s ? ((s = !1), t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              return this.cancelBlur
                ? (delete this.cancelBlur, void 0)
                : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
            },
          }),
          this._initSource(),
          (this.menu = t('<ul>').appendTo(this._appendTo()).menu({ role: null }).hide().menu('instance')),
          this._addClass(this.menu.element, 'ui-autocomplete', 'ui-front'),
          this._on(this.menu.element, {
            mousedown: function (e) {
              e.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur,
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger('focus');
                });
            },
            menufocus: function (e, i) {
              var s, n;
              return this.isNewMenu && ((this.isNewMenu = !1), e.originalEvent && /^mouse/.test(e.originalEvent.type))
                ? (this.menu.blur(),
                  this.document.one('mousemove', function () {
                    t(e.target).trigger(e.originalEvent);
                  }),
                  void 0)
                : ((n = i.item.data('ui-autocomplete-item')),
                  !1 !== this._trigger('focus', e, { item: n }) &&
                    e.originalEvent &&
                    /^key/.test(e.originalEvent.type) &&
                    this._value(n.value),
                  (s = i.item.attr('aria-label') || n.value),
                  s &&
                    t.trim(s).length &&
                    (this.liveRegion.children().hide(), t('<div>').text(s).appendTo(this.liveRegion)),
                  void 0);
            },
            menuselect: function (e, i) {
              var s = i.item.data('ui-autocomplete-item'),
                n = this.previous;
              this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                (this.element.trigger('focus'),
                (this.previous = n),
                this._delay(function () {
                  (this.previous = n), (this.selectedItem = s);
                })),
                !1 !== this._trigger('select', e, { item: s }) && this._value(s.value),
                (this.term = this._value()),
                this.close(e),
                (this.selectedItem = s);
            },
          }),
          (this.liveRegion = t('<div>', {
            role: 'status',
            'aria-live': 'assertive',
            'aria-relevant': 'additions',
          }).appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible'),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete');
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element.removeAttr('autocomplete'),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          'source' === t && this._initSource(),
          'appendTo' === t && this.menu.element.appendTo(this._appendTo()),
          'disabled' === t && e && this.xhr && this.xhr.abort();
      },
      _isEventTargetInWidget: function (e) {
        var i = this.menu.element[0];
        return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
      },
      _closeOnClickOutside: function (t) {
        this._isEventTargetInWidget(t) || this.close();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return (
          e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          (e && e[0]) || (e = this.element.closest('.ui-front, dialog')),
          e.length || (e = this.document[0].body),
          e
        );
      },
      _initSource: function () {
        var e,
          i,
          s = this;
        t.isArray(this.options.source)
          ? ((e = this.options.source),
            (this.source = function (i, s) {
              s(t.ui.autocomplete.filter(e, i.term));
            }))
          : 'string' == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (e, n) {
              s.xhr && s.xhr.abort(),
                (s.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: 'json',
                  success: function (t) {
                    n(t);
                  },
                  error: function () {
                    n([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            var e = this.term === this._value(),
              i = this.menu.element.is(':visible'),
              s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            (!e || (e && !i && !s)) && ((this.selectedItem = null), this.search(null, t));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : this._trigger('search', e) !== !1
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this._addClass('ui-autocomplete-loading'),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var e = ++this.requestIndex;
        return t.proxy(function (t) {
          e === this.requestIndex && this.__response(t),
            this.pending--,
            this.pending || this._removeClass('ui-autocomplete-loading');
        }, this);
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger('response', null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger('open'))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this._off(this.document, 'mousedown'),
          this.menu.element.is(':visible') &&
            (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger('close', t));
      },
      _change: function (t) {
        this.previous !== this._value() && this._trigger('change', t, { item: this.selectedItem });
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value
          ? e
          : t.map(e, function (e) {
              return 'string' == typeof e
                ? { label: e, value: e }
                : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label });
            });
      },
      _suggest: function (e) {
        var i = this.menu.element.empty();
        this._renderMenu(i, e),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(t.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(),
          this._on(this.document, { mousedown: '_closeOnClickOutside' });
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(Math.max(t.width('').outerWidth() + 1, this.element.outerWidth()));
      },
      _renderMenu: function (e, i) {
        var s = this;
        t.each(i, function (t, i) {
          s._renderItemData(e, i);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data('ui-autocomplete-item', e);
      },
      _renderItem: function (e, i) {
        return t('<li>').append(t('<div>').text(i.label)).appendTo(e);
      },
      _move: function (t, e) {
        return this.menu.element.is(':visible')
          ? (this.menu.isFirstItem() && /^previous/.test(t)) || (this.menu.isLastItem() && /^next/.test(t))
            ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0)
            : (this.menu[t](e), void 0)
          : (this.search(null, e), void 0);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (!this.isMultiLine || this.menu.element.is(':visible')) && (this._move(t, e), e.preventDefault());
      },
      _isContentEditable: function (t) {
        if (!t.length) return !1;
        var e = t.prop('contentEditable');
        return 'inherit' === e ? this._isContentEditable(t.parent()) : 'true' === e;
      },
    }),
    t.extend(t.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      },
      filter: function (e, i) {
        var s = RegExp(t.ui.autocomplete.escapeRegex(i), 'i');
        return t.grep(e, function (t) {
          return s.test(t.label || t.value || t);
        });
      },
    }),
    t.widget('ui.autocomplete', t.ui.autocomplete, {
      options: {
        messages: {
          noResults: 'No search results.',
          results: function (t) {
            return t + (t > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.';
          },
        },
      },
      __response: function (e) {
        var i;
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults),
            this.liveRegion.children().hide(),
            t('<div>').text(i).appendTo(this.liveRegion));
      },
    }),
    t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget('ui.controlgroup', {
    version: '1.12.0',
    defaultElement: '<div>',
    options: {
      direction: 'horizontal',
      disabled: null,
      onlyVisible: !0,
      items: {
        button: 'input[type=button], input[type=submit], input[type=reset], button, a',
        controlgroupLabel: '.ui-controlgroup-label',
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: 'select',
        spinner: '.ui-spinner-input',
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr('role', 'toolbar'), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod('destroy'),
        this.childWidgets.removeData('ui-controlgroup-data'),
        this.element.removeAttr('role'),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find('.ui-controlgroup-label-contents')
            .contents()
            .unwrap();
    },
    _initWidgets: function () {
      var e = this,
        i = [];
      t.each(this.options.items, function (s, n) {
        var o,
          a = {};
        return n
          ? 'controlgroupLabel' === s
            ? ((o = e.element.find(n)),
              o.each(function () {
                var e = t(this);
                e.children('.ui-controlgroup-label-contents').length ||
                  e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
              }),
              e._addClass(o, null, 'ui-widget ui-widget-content ui-state-default'),
              (i = i.concat(o.get())),
              void 0)
            : (t.fn[s] &&
                (e['_' + s + 'Options'] && (a = e['_' + s + 'Options']('middle')),
                e.element.find(n).each(function () {
                  var n = t(this),
                    o = n[s]('instance'),
                    r = t.widget.extend({}, a);
                  if ('button' !== s || !n.parent('.ui-spinner').length) {
                    o || (o = n[s]()[s]('instance')), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                    var h = n[s]('widget');
                    t.data(h[0], 'ui-controlgroup-data', o ? o : n[s]('instance')), i.push(h[0]);
                  }
                })),
              void 0)
          : void 0;
      }),
        (this.childWidgets = t(t.unique(i))),
        this._addClass(this.childWidgets, 'ui-controlgroup-item');
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this),
          s = i.data('ui-controlgroup-data');
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      var i = 'ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all',
        s = this._buildSimpleOptions(e, 'label').classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function (t, e) {
      var i = 'vertical' === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: '',
          first: 'ui-corner-' + (i ? 'top' : 'left'),
          last: 'ui-corner-' + (i ? 'bottom' : 'right'),
          only: 'ui-corner-all',
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, 'ui-spinner');
      return (e.classes['ui-spinner-up'] = ''), (e.classes['ui-spinner-down'] = ''), e;
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, 'ui-button');
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, 'ui-checkboxradio-label');
    },
    _selectmenuOptions: function (t) {
      var e = 'vertical' === this.options.direction;
      return {
        width: e ? 'auto' : !1,
        classes: {
          middle: { 'ui-selectmenu-button-open': '', 'ui-selectmenu-button-closed': '' },
          first: {
            'ui-selectmenu-button-open': 'ui-corner-' + (e ? 'top' : 'tl'),
            'ui-selectmenu-button-closed': 'ui-corner-' + (e ? 'top' : 'left'),
          },
          last: {
            'ui-selectmenu-button-open': e ? '' : 'ui-corner-tr',
            'ui-selectmenu-button-closed': 'ui-corner-' + (e ? 'bottom' : 'right'),
          },
          only: { 'ui-selectmenu-button-open': 'ui-corner-top', 'ui-selectmenu-button-closed': 'ui-corner-all' },
        }[t],
      };
    },
    _resolveClassesValues: function (e, i) {
      var s = {};
      return (
        t.each(e, function (t) {
          var n = i.options.classes[t] || '';
          (n = n.replace(g, '').trim()), (s[t] = (n + ' ' + e[t]).replace(/\s+/g, ' '));
        }),
        s
      );
    },
    _setOption: function (t, e) {
      return (
        'direction' === t && this._removeClass('ui-controlgroup-' + this.options.direction),
        this._super(t, e),
        'disabled' === t ? (this._callChildMethod(e ? 'disable' : 'enable'), void 0) : (this.refresh(), void 0)
      );
    },
    refresh: function () {
      var e,
        i = this;
      this._addClass('ui-controlgroup ui-controlgroup-' + this.options.direction),
        'horizontal' === this.options.direction && this._addClass(null, 'ui-helper-clearfix'),
        this._initWidgets(),
        (e = this.childWidgets),
        this.options.onlyVisible && (e = e.filter(':visible')),
        e.length &&
          (t.each(['first', 'last'], function (t, s) {
            var n = e[s]().data('ui-controlgroup-data');
            if (n && i['_' + n.widgetName + 'Options']) {
              var o = i['_' + n.widgetName + 'Options'](1 === e.length ? 'only' : s);
              (o.classes = i._resolveClassesValues(o.classes, n)), n.element[n.widgetName](o);
            } else i._updateCornerClass(e[s](), s);
          }),
          this._callChildMethod('refresh'));
    },
  }),
    t.widget('ui.checkboxradio', [
      t.ui.formResetMixin,
      {
        version: '1.12.0',
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: { 'ui-checkboxradio-label': 'ui-corner-all', 'ui-checkboxradio-icon': 'ui-corner-all' },
        },
        _getCreateOptions: function () {
          var e,
            i,
            s = this,
            n = this._super() || {};
          return (
            this._readType(),
            (i = this.element.labels()),
            (this.label = t(i[i.length - 1])),
            this.label.length || t.error('No label found for checkboxradio widget'),
            (this.originalLabel = ''),
            this.label
              .contents()
              .not(this.element)
              .each(function () {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
              }),
            this.originalLabel && (n.label = this.originalLabel),
            (e = this.element[0].disabled),
            null != e && (n.disabled = e),
            n
          );
        },
        _create: function () {
          var t = this.element[0].checked;
          this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption('disabled', this.options.disabled),
            this._addClass('ui-checkboxradio', 'ui-helper-hidden-accessible'),
            this._addClass(this.label, 'ui-checkboxradio-label', 'ui-button ui-widget'),
            'radio' === this.type && this._addClass(this.label, 'ui-checkboxradio-radio-label'),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active'),
              this.icon && this._addClass(this.icon, null, 'ui-state-hover')),
            this._on({
              change: '_toggleClasses',
              focus: function () {
                this._addClass(this.label, null, 'ui-state-focus ui-visual-focus');
              },
              blur: function () {
                this._removeClass(this.label, null, 'ui-state-focus ui-visual-focus');
              },
            });
        },
        _readType: function () {
          var e = this.element[0].nodeName.toLowerCase();
          (this.type = this.element[0].type),
            ('input' === e && /radio|checkbox/.test(this.type)) ||
              t.error("Can't create checkboxradio on element.nodeName=" + e + ' and element.type=' + this.type);
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked);
        },
        widget: function () {
          return this.label;
        },
        _getRadioGroup: function () {
          var e,
            i = this.element[0].name,
            s = "input[name='" + t.ui.escapeSelector(i) + "']";
          return i
            ? ((e = this.form.length
                ? t(this.form[0].elements).filter(s)
                : t(s).filter(function () {
                    return 0 === t(this).form().length;
                  })),
              e.not(this.element))
            : t([]);
        },
        _toggleClasses: function () {
          var e = this.element[0].checked;
          this._toggleClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active', e),
            this.options.icon &&
              'checkbox' === this.type &&
              this._toggleClass(this.icon, null, 'ui-icon-check ui-state-checked', e)._toggleClass(
                this.icon,
                null,
                'ui-icon-blank',
                !e
              ),
            'radio' === this.type &&
              this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio('instance');
                e && e._removeClass(e.label, 'ui-checkboxradio-checked', 'ui-state-active');
              });
        },
        _destroy: function () {
          this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function (t, e) {
          return 'label' !== t || e
            ? (this._super(t, e),
              'disabled' === t
                ? (this._toggleClass(this.label, null, 'ui-state-disabled', e), (this.element[0].disabled = e), void 0)
                : (this.refresh(), void 0))
            : void 0;
        },
        _updateIcon: function (e) {
          var i = 'ui-icon ui-icon-background ';
          this.options.icon
            ? (this.icon ||
                ((this.icon = t('<span>')),
                (this.iconSpace = t('<span> </span>')),
                this._addClass(this.iconSpace, 'ui-checkboxradio-icon-space')),
              'checkbox' === this.type
                ? ((i += e ? 'ui-icon-check ui-state-checked' : 'ui-icon-blank'),
                  this._removeClass(this.icon, null, e ? 'ui-icon-blank' : 'ui-icon-check'))
                : (i += 'ui-icon-blank'),
              this._addClass(this.icon, 'ui-checkboxradio-icon', i),
              e || this._removeClass(this.icon, null, 'ui-icon-check ui-state-checked'),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function () {
          this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(),
            this.label.append(this.options.label);
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled;
          this._updateIcon(t),
            this._toggleClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active', t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e });
        },
      },
    ]),
    t.ui.checkboxradio,
    t.widget('ui.button', {
      version: '1.12.0',
      defaultElement: '<button>',
      options: {
        classes: { 'ui-button': 'ui-corner-all' },
        disabled: null,
        icon: null,
        iconPosition: 'beginning',
        label: null,
        showLabel: !0,
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          (this.isInput = this.element.is('input')),
          (t = this.element[0].disabled),
          null != t && (e.disabled = t),
          (this.originalLabel = this.isInput ? this.element.val() : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        );
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
          null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr('title')),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
          this._addClass('ui-button', 'ui-widget'),
          this._setOption('disabled', this.options.disabled),
          this._enhance(),
          this.element.is('a') &&
            this._on({
              keyup: function (e) {
                e.keyCode === t.ui.keyCode.SPACE &&
                  (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger('click'));
              },
            });
      },
      _enhance: function () {
        this.element.is('button') || this.element.attr('role', 'button'),
          this.options.icon && (this._updateIcon('icon', this.options.icon), this._updateTooltip());
      },
      _updateTooltip: function () {
        (this.title = this.element.attr('title')),
          this.options.showLabel || this.title || this.element.attr('title', this.options.label);
      },
      _updateIcon: function (e, i) {
        var s = 'iconPosition' !== e,
          n = s ? this.options.iconPosition : i,
          o = 'top' === n || 'bottom' === n;
        this.icon
          ? s && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = t('<span>')),
            this._addClass(this.icon, 'ui-button-icon', 'ui-icon'),
            this.options.showLabel || this._addClass('ui-button-icon-only')),
          s && this._addClass(this.icon, null, i),
          this._attachIcon(n),
          o
            ? (this._addClass(this.icon, null, 'ui-widget-icon-block'), this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = t('<span> </span>')), this._addClass(this.iconSpace, 'ui-button-icon-space')),
              this._removeClass(this.icon, null, 'ui-wiget-icon-block'),
              this._attachIconSpace(n));
      },
      _destroy: function () {
        this.element.removeAttr('role'),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr('title');
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? 'before' : 'after'](this.iconSpace);
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? 'append' : 'prepend'](this.icon);
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t);
      },
      _setOption: function (t, e) {
        'icon' === t &&
          (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          'iconPosition' === t && this._updateIcon(t, e),
          'showLabel' === t && (this._toggleClass('ui-button-icon-only', null, !e), this._updateTooltip()),
          'label' === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          'disabled' === t &&
            (this._toggleClass(null, 'ui-state-disabled', e), (this.element[0].disabled = e), e && this.element.blur());
      },
      refresh: function () {
        var t = this.element.is('input, button')
          ? this.element[0].disabled
          : this.element.hasClass('ui-button-disabled');
        t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
      },
    }),
    t.uiBackCompat !== !1 &&
      (t.widget('ui.button', t.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon && (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary), (this.options.iconPosition = 'end')),
            this._super();
        },
        _setOption: function (t, e) {
          return 'text' === t
            ? (this._super('showLabel', e), void 0)
            : ('showLabel' === t && (this.options.text = e),
              'icon' === t && (this.options.icons.primary = e),
              'icons' === t &&
                (e.primary
                  ? (this._super('icon', e.primary), this._super('iconPosition', 'beginning'))
                  : e.secondary && (this._super('icon', e.secondary), this._super('iconPosition', 'end'))),
              this._superApply(arguments),
              void 0);
        },
      }),
      (t.fn.button = (function (e) {
        return function () {
          return !this.length ||
            (this.length && 'INPUT' !== this[0].tagName) ||
            (this.length &&
              'INPUT' === this[0].tagName &&
              'checkbox' !== this.attr('type') &&
              'radio' !== this.attr('type'))
            ? e.apply(this, arguments)
            : (t.ui.checkboxradio || t.error('Checkboxradio widget missing'),
              0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments));
        };
      })(t.fn.button)),
      (t.fn.buttonset = function () {
        return (
          t.ui.controlgroup || t.error('Controlgroup widget missing'),
          'option' === arguments[0] && 'items' === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [arguments[0], 'items.button', arguments[2]])
            : 'option' === arguments[0] && 'items' === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], 'items.button'])
            : ('object' == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      })),
    t.ui.button,
    t.extend(t.ui, { datepicker: { version: '1.12.0' } });
  var m;
  t.extend(s.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function (e, i) {
      var s, n, o;
      (s = e.nodeName.toLowerCase()),
        (n = 'div' === s || 'span' === s),
        e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
        (o = this._newInst(t(e), n)),
        (o.settings = t.extend({}, i || {})),
        'input' === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    },
    _newInst: function (e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? n(
              t(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      (i.append = t([])),
        (i.trigger = t([])),
        s.hasClass(this.markerClassName) ||
          (this._attachments(s, i),
          s
            .addClass(this.markerClassName)
            .on('keydown', this._doKeyDown)
            .on('keypress', this._doKeyPress)
            .on('keyup', this._doKeyUp),
          this._autoSize(i),
          t.data(e, 'datepicker', i),
          i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, i) {
      var s,
        n,
        o,
        a = this._get(i, 'appendText'),
        r = this._get(i, 'isRTL');
      i.append && i.append.remove(),
        a &&
          ((i.append = t("<span class='" + this._appendClass + "'>" + a + '</span>')),
          e[r ? 'before' : 'after'](i.append)),
        e.off('focus', this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (s = this._get(i, 'showOn')),
        ('focus' === s || 'both' === s) && e.on('focus', this._showDatepicker),
        ('button' === s || 'both' === s) &&
          ((n = this._get(i, 'buttonText')),
          (o = this._get(i, 'buttonImage')),
          (i.trigger = t(
            this._get(i, 'buttonImageOnly')
              ? t('<img/>').addClass(this._triggerClass).attr({ src: o, alt: n, title: n })
              : t("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(o ? t('<img/>').attr({ src: o, alt: n, title: n }) : n)
          )),
          e[r ? 'before' : 'after'](i.trigger),
          i.trigger.on('click', function () {
            return (
              t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0]
                ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0]))
                : t.datepicker._showDatepicker(e[0]),
              !1
            );
          }));
    },
    _autoSize: function (t) {
      if (this._get(t, 'autoSize') && !t.inline) {
        var e,
          i,
          s,
          n,
          o = new Date(2009, 11, 20),
          a = this._get(t, 'dateFormat');
        a.match(/[DM]/) &&
          ((e = function (t) {
            for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && ((i = t[n].length), (s = n));
            return s;
          }),
          o.setMonth(e(this._get(t, a.match(/MM/) ? 'monthNames' : 'monthNamesShort'))),
          o.setDate(e(this._get(t, a.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - o.getDay())),
          t.input.attr('size', this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) ||
        (s.addClass(this.markerClassName).append(i.dpDiv),
        t.data(e, 'datepicker', i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(e),
        i.dpDiv.css('display', 'block'));
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r,
        h,
        l,
        c,
        u,
        d = this._dialogInst;
      return (
        d ||
          ((this.uuid += 1),
          (r = 'dp' + this.uuid),
          (this._dialogInput = t(
            "<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.on('keydown', this._doKeyDown),
          t('body').append(this._dialogInput),
          (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (d.settings = {}),
          t.data(this._dialogInput[0], 'datepicker', d)),
        a(d.settings, n || {}),
        (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
        this._dialogInput.val(i),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((h = document.documentElement.clientWidth),
          (l = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (u = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [h / 2 - 100 + c, l / 2 - 150 + u])),
        this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
        (d.settings.onSelect = s),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        t.blockUI && t.blockUI(this.dpDiv),
        t.data(this._dialogInput[0], 'datepicker', d),
        this
      );
    },
    _destroyDatepicker: function (e) {
      var i,
        s = t(e),
        n = t.data(e, 'datepicker');
      s.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        t.removeData(e, 'datepicker'),
        'input' === i
          ? (n.append.remove(),
            n.trigger.remove(),
            s
              .removeClass(this.markerClassName)
              .off('focus', this._showDatepicker)
              .off('keydown', this._doKeyDown)
              .off('keypress', this._doKeyPress)
              .off('keyup', this._doKeyUp))
          : ('div' === i || 'span' === i) && s.removeClass(this.markerClassName).empty(),
        m === n && (m = null));
    },
    _enableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, 'datepicker');
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !1),
            o.trigger
              .filter('button')
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter('img')
              .css({ opacity: '1.0', cursor: '' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)),
            s.children().removeClass('ui-state-disabled'),
            s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })));
    },
    _disableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, 'datepicker');
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !0),
            o.trigger
              .filter('button')
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter('img')
              .css({ opacity: '0.5', cursor: 'default' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)),
            s.children().addClass('ui-state-disabled'),
            s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })),
        (this._disabledInputs[this._disabledInputs.length] = e));
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
      return !1;
    },
    _getInst: function (e) {
      try {
        return t.data(e, 'datepicker');
      } catch (i) {
        throw 'Missing instance data for this datepicker';
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n,
        o,
        r,
        h,
        l = this._getInst(e);
      return 2 === arguments.length && 'string' == typeof i
        ? 'defaults' === i
          ? t.extend({}, t.datepicker._defaults)
          : l
          ? 'all' === i
            ? t.extend({}, l.settings)
            : this._get(l, i)
          : null
        : ((n = i || {}),
          'string' == typeof i && ((n = {}), (n[i] = s)),
          l &&
            (this._curInst === l && this._hideDatepicker(),
            (o = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(l, 'min')),
            (h = this._getMinMaxDate(l, 'max')),
            a(l.settings, n),
            null !== r &&
              void 0 !== n.dateFormat &&
              void 0 === n.minDate &&
              (l.settings.minDate = this._formatDate(l, r)),
            null !== h &&
              void 0 !== n.dateFormat &&
              void 0 === n.maxDate &&
              (l.settings.maxDate = this._formatDate(l, h)),
            'disabled' in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
          void 0);
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function (e) {
      var i,
        s,
        n,
        o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is('.ui-datepicker-rtl');
      if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
        switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), (a = !1);
            break;
          case 13:
            return (
              (n = t('td.' + t.datepicker._dayOverClass + ':not(.' + t.datepicker._currentClass + ')', o.dpDiv)),
              n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
              (i = t.datepicker._get(o, 'onSelect')),
              i
                ? ((s = t.datepicker._formatDate(o)), i.apply(o.input ? o.input[0] : null, [s, o]))
                : t.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            t.datepicker._hideDatepicker();
            break;
          case 33:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey ? -t.datepicker._get(o, 'stepBigMonths') : -t.datepicker._get(o, 'stepMonths'),
              'M'
            );
            break;
          case 34:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey ? +t.datepicker._get(o, 'stepBigMonths') : +t.datepicker._get(o, 'stepMonths'),
              'M'
            );
            break;
          case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), (a = e.ctrlKey || e.metaKey);
            break;
          case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), (a = e.ctrlKey || e.metaKey);
            break;
          case 37:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, 'D'),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey ? -t.datepicker._get(o, 'stepBigMonths') : -t.datepicker._get(o, 'stepMonths'),
                  'M'
                );
            break;
          case 38:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, 'D'), (a = e.ctrlKey || e.metaKey);
            break;
          case 39:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, 'D'),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey ? +t.datepicker._get(o, 'stepBigMonths') : +t.datepicker._get(o, 'stepMonths'),
                  'M'
                );
            break;
          case 40:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, 'D'), (a = e.ctrlKey || e.metaKey);
            break;
          default:
            a = !1;
        }
      else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : (a = !1);
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (e) {
      var i,
        s,
        n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, 'constrainInput')
        ? ((i = t.datepicker._possibleChars(t.datepicker._get(n, 'dateFormat'))),
          (s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode)),
          e.ctrlKey || e.metaKey || ' ' > s || !i || i.indexOf(s) > -1)
        : void 0;
    },
    _doKeyUp: function (e) {
      var i,
        s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal)
        try {
          (i = t.datepicker.parseDate(
            t.datepicker._get(s, 'dateFormat'),
            s.input ? s.input.val() : null,
            t.datepicker._getFormatConfig(s)
          )),
            i &&
              (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
        } catch (n) {}
      return !0;
    },
    _showDatepicker: function (e) {
      if (
        ((e = e.target || e),
        'input' !== e.nodeName.toLowerCase() && (e = t('input', e.parentNode)[0]),
        !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
      ) {
        var s, n, o, r, h, l, c;
        (s = t.datepicker._getInst(e)),
          t.datepicker._curInst &&
            t.datepicker._curInst !== s &&
            (t.datepicker._curInst.dpDiv.stop(!0, !0),
            s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
          (n = t.datepicker._get(s, 'beforeShow')),
          (o = n ? n.apply(e, [e, s]) : {}),
          o !== !1 &&
            (a(s.settings, o),
            (s.lastVal = null),
            (t.datepicker._lastInput = e),
            t.datepicker._setDateFromField(s),
            t.datepicker._inDialog && (e.value = ''),
            t.datepicker._pos ||
              ((t.datepicker._pos = t.datepicker._findPos(e)), (t.datepicker._pos[1] += e.offsetHeight)),
            (r = !1),
            t(e)
              .parents()
              .each(function () {
                return (r |= 'fixed' === t(this).css('position')), !r;
              }),
            (h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
            (t.datepicker._pos = null),
            s.dpDiv.empty(),
            s.dpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' }),
            t.datepicker._updateDatepicker(s),
            (h = t.datepicker._checkOffset(s, h, r)),
            s.dpDiv.css({
              position: t.datepicker._inDialog && t.blockUI ? 'static' : r ? 'fixed' : 'absolute',
              display: 'none',
              left: h.left + 'px',
              top: h.top + 'px',
            }),
            s.inline ||
              ((l = t.datepicker._get(s, 'showAnim')),
              (c = t.datepicker._get(s, 'duration')),
              s.dpDiv.css('z-index', i(t(e)) + 1),
              (t.datepicker._datepickerShowing = !0),
              t.effects && t.effects.effect[l]
                ? s.dpDiv.show(l, t.datepicker._get(s, 'showOptions'), c)
                : s.dpDiv[l || 'show'](l ? c : null),
              t.datepicker._shouldFocusInput(s) && s.input.trigger('focus'),
              (t.datepicker._curInst = s)));
      }
    },
    _updateDatepicker: function (e) {
      (this.maxRows = 4), (m = e), e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i,
        s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find('.' + this._dayOverClass + ' a');
      r.length > 0 && o.apply(r.get(0)),
        e.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
        n > 1 && e.dpDiv.addClass('ui-datepicker-multi-' + n).css('width', a * n + 'em'),
        e.dpDiv[(1 !== s[0] || 1 !== s[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
        e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
        e === t.datepicker._curInst &&
          t.datepicker._datepickerShowing &&
          t.datepicker._shouldFocusInput(e) &&
          e.input.trigger('focus'),
        e.yearshtml &&
          ((i = e.yearshtml),
          setTimeout(function () {
            i === e.yearshtml &&
              e.yearshtml &&
              e.dpDiv.find('select.ui-datepicker-year:first').replaceWith(e.yearshtml),
              (i = e.yearshtml = null);
          }, 0));
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(':visible') && !t.input.is(':disabled') && !t.input.is(':focus');
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return (
        (i.left -= this._get(e, 'isRTL') ? n - a : 0),
        (i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
        (i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0),
        (i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0)),
        (i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0)),
        i
      );
    },
    _findPos: function (e) {
      for (
        var i, s = this._getInst(e), n = this._get(s, 'isRTL');
        e && ('hidden' === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

      )
        e = e[n ? 'previousSibling' : 'nextSibling'];
      return (i = t(e).offset()), [i.left, i.top];
    },
    _hideDatepicker: function (e) {
      var i,
        s,
        n,
        o,
        a = this._curInst;
      !a ||
        (e && a !== t.data(e, 'datepicker')) ||
        (this._datepickerShowing &&
          ((i = this._get(a, 'showAnim')),
          (s = this._get(a, 'duration')),
          (n = function () {
            t.datepicker._tidyDialog(a);
          }),
          t.effects && (t.effects.effect[i] || t.effects[i])
            ? a.dpDiv.hide(i, t.datepicker._get(a, 'showOptions'), s, n)
            : a.dpDiv['slideDown' === i ? 'slideUp' : 'fadeIn' === i ? 'fadeOut' : 'hide'](i ? s : null, n),
          i || n(),
          (this._datepickerShowing = !1),
          (o = this._get(a, 'onClose')),
          o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : '', a]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' }),
            t.blockUI && (t.unblockUI(), t('body').append(this.dpDiv))),
          (this._inDialog = !1)));
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar');
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        ((i[0].id !== t.datepicker._mainDivId &&
          0 === i.parents('#' + t.datepicker._mainDivId).length &&
          !i.hasClass(t.datepicker.markerClassName) &&
          !i.closest('.' + t.datepicker._triggerClass).length &&
          t.datepicker._datepickerShowing &&
          (!t.datepicker._inDialog || !t.blockUI)) ||
          (i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s)) &&
          t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) ||
        (this._adjustInstDate(o, i + ('M' === s ? this._get(o, 'showCurrentAtPos') : 0), s), this._updateDatepicker(o));
    },
    _gotoToday: function (e) {
      var i,
        s = t(e),
        n = this._getInst(s[0]);
      this._get(n, 'gotoCurrent') && n.currentDay
        ? ((n.selectedDay = n.currentDay),
          (n.drawMonth = n.selectedMonth = n.currentMonth),
          (n.drawYear = n.selectedYear = n.currentYear))
        : ((i = new Date()),
          (n.selectedDay = i.getDate()),
          (n.drawMonth = n.selectedMonth = i.getMonth()),
          (n.drawYear = n.selectedYear = i.getFullYear())),
        this._notifyChange(n),
        this._adjustDate(s);
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      (o['selected' + ('M' === s ? 'Month' : 'Year')] = o['draw' + ('M' === s ? 'Month' : 'Year')] =
        parseInt(i.options[i.selectedIndex].value, 10)),
        this._notifyChange(o),
        this._adjustDate(n);
    },
    _selectDay: function (e, i, s, n) {
      var o,
        a = t(e);
      t(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(a[0]) ||
        ((o = this._getInst(a[0])),
        (o.selectedDay = o.currentDay = t('a', n).html()),
        (o.selectedMonth = o.currentMonth = i),
        (o.selectedYear = o.currentYear = s),
        this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, '');
    },
    _selectDate: function (e, i) {
      var s,
        n = t(e),
        o = this._getInst(n[0]);
      (i = null != i ? i : this._formatDate(o)),
        o.input && o.input.val(i),
        this._updateAlternate(o),
        (s = this._get(o, 'onSelect')),
        s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger('change'),
        o.inline
          ? this._updateDatepicker(o)
          : (this._hideDatepicker(),
            (this._lastInput = o.input[0]),
            'object' != typeof o.input[0] && o.input.trigger('focus'),
            (this._lastInput = null));
    },
    _updateAlternate: function (e) {
      var i,
        s,
        n,
        o = this._get(e, 'altField');
      o &&
        ((i = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
        (s = this._getDate(e)),
        (n = this.formatDate(i, s, this._getFormatConfig(e))),
        t(o).val(n));
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ''];
    },
    iso8601Week: function (t) {
      var e,
        i = new Date(t.getTime());
      return (
        i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
        (e = i.getTime()),
        i.setMonth(0),
        i.setDate(1),
        Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      );
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw 'Invalid arguments';
      if (((i = 'object' == typeof i ? '' + i : i + ''), '' === i)) return null;
      var n,
        o,
        a,
        r,
        h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = 'string' != typeof l ? l : (new Date().getFullYear() % 100) + parseInt(l, 10),
        u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        g = -1,
        m = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function (t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i;
        },
        w = function (t) {
          var e = y(t),
            s = '@' === t ? 14 : '!' === t ? 20 : 'y' === t && e ? 4 : 'o' === t ? 3 : 2,
            n = 'y' === t ? s : 1,
            o = RegExp('^\\d{' + n + ',' + s + '}'),
            a = i.substring(h).match(o);
          if (!a) throw 'Missing number at position ' + h;
          return (h += a[0].length), parseInt(a[0], 10);
        },
        k = function (e, s, n) {
          var o = -1,
            a = t
              .map(y(e) ? n : s, function (t, e) {
                return [[e, t]];
              })
              .sort(function (t, e) {
                return -(t[1].length - e[1].length);
              });
          if (
            (t.each(a, function (t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase()
                ? ((o = e[0]), (h += s.length), !1)
                : void 0;
            }),
            -1 !== o)
          )
            return o + 1;
          throw 'Unknown name at position ' + h;
        },
        x = function () {
          if (i.charAt(h) !== e.charAt(n)) throw 'Unexpected literal at position ' + h;
          h++;
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1);
        else
          switch (e.charAt(n)) {
            case 'd':
              _ = w('d');
              break;
            case 'D':
              k('D', u, d);
              break;
            case 'o':
              v = w('o');
              break;
            case 'm':
              m = w('m');
              break;
            case 'M':
              m = k('M', p, f);
              break;
            case 'y':
              g = w('y');
              break;
            case '@':
              (r = new Date(w('@'))), (g = r.getFullYear()), (m = r.getMonth() + 1), (_ = r.getDate());
              break;
            case '!':
              (r = new Date((w('!') - this._ticksTo1970) / 1e4)),
                (g = r.getFullYear()),
                (m = r.getMonth() + 1),
                (_ = r.getDate());
              break;
            case "'":
              y("'") ? x() : (b = !0);
              break;
            default:
              x();
          }
      if (i.length > h && ((a = i.substr(h)), !/^\s+/.test(a))) throw 'Extra/unparsed characters found in date: ' + a;
      if (
        (-1 === g
          ? (g = new Date().getFullYear())
          : 100 > g && (g += new Date().getFullYear() - (new Date().getFullYear() % 100) + (c >= g ? 0 : -100)),
        v > -1)
      )
        for (m = 1, _ = v; ; ) {
          if (((o = this._getDaysInMonth(g, m - 1)), o >= _)) break;
          m++, (_ -= o);
        }
      if (
        ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))),
        r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
      )
        throw 'Invalid date';
      return r;
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return '';
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i;
        },
        l = function (t, e, i) {
          var s = '' + e;
          if (h(t)) for (; i > s.length; ) s = '0' + s;
          return s;
        },
        c = function (t, e, i, s) {
          return h(t) ? s[e] : i[e];
        },
        u = '',
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? (u += t.charAt(s)) : (d = !1);
          else
            switch (t.charAt(s)) {
              case 'd':
                u += l('d', e.getDate(), 2);
                break;
              case 'D':
                u += c('D', e.getDay(), n, o);
                break;
              case 'o':
                u += l(
                  'o',
                  Math.round(
                    (new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() -
                      new Date(e.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case 'm':
                u += l('m', e.getMonth() + 1, 2);
                break;
              case 'M':
                u += c('M', e.getMonth(), a, r);
                break;
              case 'y':
                u += h('y') ? e.getFullYear() : (10 > e.getFullYear() % 100 ? '0' : '') + (e.getFullYear() % 100);
                break;
              case '@':
                u += e.getTime();
                break;
              case '!':
                u += 1e4 * e.getTime() + this._ticksTo1970;
                break;
              case "'":
                h("'") ? (u += "'") : (d = !0);
                break;
              default:
                u += t.charAt(s);
            }
      return u;
    },
    _possibleChars: function (t) {
      var e,
        i = '',
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s;
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
        else
          switch (t.charAt(e)) {
            case 'd':
            case 'm':
            case 'y':
            case '@':
              i += '0123456789';
              break;
            case 'D':
            case 'M':
              return null;
            case "'":
              n("'") ? (i += "'") : (s = !0);
              break;
            default:
              i += t.charAt(e);
          }
      return i;
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, 'dateFormat'),
          s = (t.lastVal = t.input ? t.input.val() : null),
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? '' : s;
        }
        (t.selectedDay = o.getDate()),
          (t.drawMonth = t.selectedMonth = o.getMonth()),
          (t.drawYear = t.selectedYear = o.getFullYear()),
          (t.currentDay = s ? o.getDate() : 0),
          (t.currentMonth = s ? o.getMonth() : 0),
          (t.currentYear = s ? o.getFullYear() : 0),
          this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, 'defaultDate'), new Date()));
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date();
          return e.setDate(e.getDate() + t), e;
        },
        o = function (i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, 'dateFormat'), i, t.datepicker._getFormatConfig(e));
          } catch (s) {}
          for (
            var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(),
              o = n.getFullYear(),
              a = n.getMonth(),
              r = n.getDate(),
              h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              l = h.exec(i);
            l;

          ) {
            switch (l[2] || 'd') {
              case 'd':
              case 'D':
                r += parseInt(l[1], 10);
                break;
              case 'w':
              case 'W':
                r += 7 * parseInt(l[1], 10);
                break;
              case 'm':
              case 'M':
                (a += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                break;
              case 'y':
              case 'Y':
                (o += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
            }
            l = h.exec(i);
          }
          return new Date(o, a, r);
        },
        a =
          null == i || '' === i
            ? s
            : 'string' == typeof i
            ? o(i)
            : 'number' == typeof i
            ? isNaN(i)
              ? s
              : n(i)
            : new Date(i.getTime());
      return (
        (a = a && 'Invalid Date' == '' + a ? s : a),
        a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)),
        this._daylightSavingAdjust(a)
      );
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
      (t.selectedDay = t.currentDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
        (n === t.selectedMonth && o === t.selectedYear) || i || this._notifyChange(t),
        this._adjustInstDate(t),
        t.input && t.input.val(s ? '' : this._formatDate(t));
    },
    _getDate: function (t) {
      var e =
        !t.currentYear || (t.input && '' === t.input.val())
          ? null
          : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function (e) {
      var i = this._get(e, 'stepMonths'),
        s = '#' + e.id.replace(/\\\\/g, '\\');
      e.dpDiv.find('[data-handler]').map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, 'M');
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, 'M');
          },
          hide: function () {
            t.datepicker._hideDatepicker();
          },
          today: function () {
            t.datepicker._gotoToday(s);
          },
          selectDay: function () {
            return (
              t.datepicker._selectDay(s, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this), !1
            );
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, 'M'), !1;
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, 'Y'), !1;
          },
        };
        t(this).on(this.getAttribute('data-event'), e[this.getAttribute('data-handler')]);
      });
    },
    _generateHTML: function (t) {
      var e,
        i,
        s,
        n,
        o,
        a,
        r,
        h,
        l,
        c,
        u,
        d,
        p,
        f,
        g,
        m,
        _,
        v,
        b,
        y,
        w,
        k,
        x,
        C,
        D,
        I,
        T,
        P,
        M,
        S,
        H,
        z,
        O,
        A,
        N,
        W,
        E,
        F,
        R,
        L = new Date(),
        B = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
        Y = this._get(t, 'isRTL'),
        j = this._get(t, 'showButtonPanel'),
        q = this._get(t, 'hideIfNoPrevNext'),
        K = this._get(t, 'navigationAsDateFormat'),
        U = this._getNumberOfMonths(t),
        V = this._get(t, 'showCurrentAtPos'),
        X = this._get(t, 'stepMonths'),
        $ = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(
          t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)
        ),
        Q = this._getMinMaxDate(t, 'min'),
        J = this._getMinMaxDate(t, 'max'),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if ((0 > Z && ((Z += 12), te--), J))
        for (
          e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())),
            e = Q && Q > e ? Q : e;
          this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

        )
          Z--, 0 > Z && ((Z = 11), te--);
      for (
        t.drawMonth = Z,
          t.drawYear = te,
          i = this._get(t, 'prevText'),
          i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i,
          s = this._canAdjustMonth(t, -1, te, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'e' : 'w') +
              "'>" +
              i +
              '</span></a>'
            : q
            ? ''
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'e' : 'w') +
              "'>" +
              i +
              '</span></a>',
          n = this._get(t, 'nextText'),
          n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n,
          o = this._canAdjustMonth(t, 1, te, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'w' : 'e') +
              "'>" +
              n +
              '</span></a>'
            : q
            ? ''
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'w' : 'e') +
              "'>" +
              n +
              '</span></a>',
          a = this._get(t, 'currentText'),
          r = this._get(t, 'gotoCurrent') && t.currentDay ? G : B,
          a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
          h = t.inline
            ? ''
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
              this._get(t, 'closeText') +
              '</button>',
          l = j
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (Y ? h : '') +
              (this._isInRange(t, r)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                  a +
                  '</button>'
                : '') +
              (Y ? '' : h) +
              '</div>'
            : '',
          c = parseInt(this._get(t, 'firstDay'), 10),
          c = isNaN(c) ? 0 : c,
          u = this._get(t, 'showWeek'),
          d = this._get(t, 'dayNames'),
          p = this._get(t, 'dayNamesMin'),
          f = this._get(t, 'monthNames'),
          g = this._get(t, 'monthNamesShort'),
          m = this._get(t, 'beforeShowDay'),
          _ = this._get(t, 'showOtherMonths'),
          v = this._get(t, 'selectOtherMonths'),
          b = this._getDefaultDate(t),
          y = '',
          k = 0;
        U[0] > k;
        k++
      ) {
        for (x = '', this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (((D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))), (I = ' ui-corner-all'), (T = ''), $)) {
            if (((T += "<div class='ui-datepicker-group"), U[1] > 1))
              switch (C) {
                case 0:
                  (T += ' ui-datepicker-group-first'), (I = ' ui-corner-' + (Y ? 'right' : 'left'));
                  break;
                case U[1] - 1:
                  (T += ' ui-datepicker-group-last'), (I = ' ui-corner-' + (Y ? 'left' : 'right'));
                  break;
                default:
                  (T += ' ui-datepicker-group-middle'), (I = '');
              }
            T += "'>";
          }
          for (
            T +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              I +
              "'>" +
              (/all|left/.test(I) && 0 === k ? (Y ? o : s) : '') +
              (/all|right/.test(I) && 0 === k ? (Y ? s : o) : '') +
              this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              '<tr>',
              P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, 'weekHeader') + '</th>' : '',
              w = 0;
            7 > w;
            w++
          )
            (M = (w + c) % 7),
              (P +=
                "<th scope='col'" +
                ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : '') +
                '>' +
                "<span title='" +
                d[M] +
                "'>" +
                p[M] +
                '</span></th>');
          for (
            T += P + '</tr></thead><tbody>',
              S = this._getDaysInMonth(te, Z),
              te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)),
              H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
              z = Math.ceil((H + S) / 7),
              O = $ ? (this.maxRows > z ? this.maxRows : z) : z,
              this.maxRows = O,
              A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)),
              N = 0;
            O > N;
            N++
          ) {
            for (
              T += '<tr>',
                W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, 'calculateWeek')(A) + '</td>' : '',
                w = 0;
              7 > w;
              w++
            )
              (E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, '']),
                (F = A.getMonth() !== Z),
                (R = (F && !v) || !E[0] || (Q && Q > A) || (J && A > J)),
                (W +=
                  "<td class='" +
                  ((w + c + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                  (F ? ' ui-datepicker-other-month' : '') +
                  ((A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent) ||
                  (b.getTime() === A.getTime() && b.getTime() === D.getTime())
                    ? ' ' + this._dayOverClass
                    : '') +
                  (R ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +
                  (F && !_
                    ? ''
                    : ' ' +
                      E[1] +
                      (A.getTime() === G.getTime() ? ' ' + this._currentClass : '') +
                      (A.getTime() === B.getTime() ? ' ui-datepicker-today' : '')) +
                  "'" +
                  ((F && !_) || !E[2] ? '' : " title='" + E[2].replace(/'/g, '&#39;') + "'") +
                  (R
                    ? ''
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      A.getMonth() +
                      "' data-year='" +
                      A.getFullYear() +
                      "'") +
                  '>' +
                  (F && !_
                    ? '&#xa0;'
                    : R
                    ? "<span class='ui-state-default'>" + A.getDate() + '</span>'
                    : "<a class='ui-state-default" +
                      (A.getTime() === B.getTime() ? ' ui-state-highlight' : '') +
                      (A.getTime() === G.getTime() ? ' ui-state-active' : '') +
                      (F ? ' ui-priority-secondary' : '') +
                      "' href='#'>" +
                      A.getDate() +
                      '</a>') +
                  '</td>'),
                A.setDate(A.getDate() + 1),
                (A = this._daylightSavingAdjust(A));
            T += W + '</tr>';
          }
          Z++,
            Z > 11 && ((Z = 0), te++),
            (T +=
              '</tbody></table>' +
              ($ ? '</div>' + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : '') : '')),
            (x += T);
        }
        y += x;
      }
      return (y += l), (t._keyEvent = !1), y;
    },
    _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
      var h,
        l,
        c,
        u,
        d,
        p,
        f,
        g,
        m = this._get(t, 'changeMonth'),
        _ = this._get(t, 'changeYear'),
        v = this._get(t, 'showMonthAfterYear'),
        b = "<div class='ui-datepicker-title'>",
        y = '';
      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + '</span>';
      else {
        for (
          h = s && s.getFullYear() === i,
            l = n && n.getFullYear() === i,
            y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
            c = 0;
          12 > c;
          c++
        )
          (!h || c >= s.getMonth()) &&
            (!l || n.getMonth() >= c) &&
            (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : '') + '>' + r[c] + '</option>');
        y += '</select>';
      }
      if ((v || (b += y + (!o && m && _ ? '' : '&#xa0;')), !t.yearshtml))
        if (((t.yearshtml = ''), o || !_)) b += "<span class='ui-datepicker-year'>" + i + '</span>';
        else {
          for (
            u = this._get(t, 'yearRange').split(':'),
              d = new Date().getFullYear(),
              p = function (t) {
                var e = t.match(/c[+\-].*/)
                  ? i + parseInt(t.substring(1), 10)
                  : t.match(/[+\-].*/)
                  ? d + parseInt(t, 10)
                  : parseInt(t, 10);
                return isNaN(e) ? d : e;
              },
              f = p(u[0]),
              g = Math.max(f, p(u[1] || '')),
              f = s ? Math.max(f, s.getFullYear()) : f,
              g = n ? Math.min(g, n.getFullYear()) : g,
              t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            g >= f;
            f++
          )
            t.yearshtml +=
              "<option value='" + f + "'" + (f === i ? " selected='selected'" : '') + '>' + f + '</option>';
          (t.yearshtml += '</select>'), (b += t.yearshtml), (t.yearshtml = null);
        }
      return (b += this._get(t, 'yearSuffix')), v && (b += (!o && m && _ ? '' : '&#xa0;') + y), (b += '</div>');
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.selectedYear + ('Y' === i ? e : 0),
        n = t.selectedMonth + ('M' === i ? e : 0),
        o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ('D' === i ? e : 0),
        a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
      (t.selectedDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = a.getFullYear()),
        ('M' === i || 'Y' === i) && this._notifyChange(t);
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, 'min'),
        s = this._getMinMaxDate(t, 'max'),
        n = i && i > e ? i : e;
      return s && n > s ? s : n;
    },
    _notifyChange: function (t) {
      var e = this._get(t, 'onChangeMonthYear');
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, 'numberOfMonths');
      return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + 'Date'), null);
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    },
    _isInRange: function (t, e) {
      var i,
        s,
        n = this._getMinMaxDate(t, 'min'),
        o = this._getMinMaxDate(t, 'max'),
        a = null,
        r = null,
        h = this._get(t, 'yearRange');
      return (
        h &&
          ((i = h.split(':')),
          (s = new Date().getFullYear()),
          (a = parseInt(i[0], 10)),
          (r = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (a += s),
          i[1].match(/[+\-].*/) && (r += s)),
        (!n || e.getTime() >= n.getTime()) &&
          (!o || e.getTime() <= o.getTime()) &&
          (!a || e.getFullYear() >= a) &&
          (!r || r >= e.getFullYear())
      );
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, 'shortYearCutoff');
      return (
        (e = 'string' != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
        {
          shortYearCutoff: e,
          dayNamesShort: this._get(t, 'dayNamesShort'),
          dayNames: this._get(t, 'dayNames'),
          monthNamesShort: this._get(t, 'monthNamesShort'),
          monthNames: this._get(t, 'monthNames'),
        }
      );
    },
    _formatDate: function (t, e, i, s) {
      e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
      var n = e
        ? 'object' == typeof e
          ? e
          : this._daylightSavingAdjust(new Date(s, i, e))
        : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, 'dateFormat'), n, this._getFormatConfig(t));
    },
  }),
    (t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized ||
        (t(document).on('mousedown', t.datepicker._checkExternalClick), (t.datepicker.initialized = !0)),
        0 === t('#' + t.datepicker._mainDivId).length && t('body').append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return 'string' != typeof e || ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
        ? 'option' === e && 2 === arguments.length && 'string' == typeof arguments[1]
          ? t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this[0]].concat(i))
          : this.each(function () {
              'string' == typeof e
                ? t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this].concat(i))
                : t.datepicker._attachDatepicker(this, e);
            })
        : t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this[0]].concat(i));
    }),
    (t.datepicker = new s()),
    (t.datepicker.initialized = !1),
    (t.datepicker.uuid = new Date().getTime()),
    (t.datepicker.version = '1.12.0'),
    t.datepicker,
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var _ = !1;
  t(document).on('mouseup', function () {
    _ = !1;
  }),
    t.widget('ui.mouse', {
      version: '1.12.0',
      options: { cancel: 'input, textarea, button, select, option', distance: 1, delay: 0 },
      _mouseInit: function () {
        var e = this;
        this.element
          .on('mousedown.' + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on('click.' + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + '.preventClickEvent')
              ? (t.removeData(i.target, e.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .off('mouseup.' + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!_) {
          (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(e), (this._mouseDownEvent = e);
          var i = this,
            s = 1 === e.which,
            n =
              'string' == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1), !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 === t.data(e.target, this.widgetName + '.preventClickEvent') &&
                    t.removeData(e.target, this.widgetName + '.preventClickEvent'),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                    .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (_ = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(e)),
          this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (_ = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >=
          this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    (t.ui.plugin = {
      add: function (e, i, s) {
        var n,
          o = t.ui[e].prototype;
        for (n in s) (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (o && (s || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)))
          for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (t.ui.safeBlur = function (e) {
      e && 'body' !== e.nodeName.toLowerCase() && t(e).trigger('blur');
    }),
    t.widget('ui.draggable', t.ui.mouse, {
      version: '1.12.0',
      widgetEventPrefix: 'drag',
      options: {
        addClasses: !0,
        appendTo: 'parent',
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: 'default',
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: 'both',
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        'original' === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass('ui-draggable'),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e), 'handle' === t && (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        return (this.helper || this.element).is('.ui-draggable-dragging')
          ? ((this.destroyOnClear = !0), void 0)
          : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return (
          this._blurActiveElement(e),
          this.helper || i.disabled || t(e.target).closest('.ui-resizable-handle').length > 0
            ? !1
            : ((this.handle = this._getHandle(e)),
              this.handle ? (this._blockFrames(i.iframeFix === !0 ? 'iframe' : i.iframeFix), !0) : !1)
        );
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t('<div>')
            .css('position', 'absolute')
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
        (this._getHandle(e) && s.closest(i).length) || t.ui.safeBlur(i);
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this._addClass(this.helper, 'ui-draggable-dragging'),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css('position')),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return 'fixed' === t(this).css('position');
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position = this._generatePosition(e, !1)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          this._trigger('start', e) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top });
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo('absolute')),
          !i)
        ) {
          var s = this._uiHash();
          if (this._trigger('drag', e, s) === !1) return this._mouseUp(new t.Event('mouseup', e)), !1;
          this.position = s.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + 'px'),
          (this.helper[0].style.top = this.position.top + 'px'),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1;
        return (
          t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          ('invalid' === this.options.revert && !s) ||
          ('valid' === this.options.revert && s) ||
          this.options.revert === !0 ||
          (t.isFunction(this.options.revert) && this.options.revert.call(this.element, s))
            ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger('stop', e) !== !1 && i._clear();
              })
            : this._trigger('stop', e) !== !1 && this._clear(),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.trigger('focus'),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is('.ui-draggable-dragging')
            ? this._mouseUp(new t.Event('mouseup', { target: this.element[0] }))
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element),
          this._addClass(this.handleElement, 'ui-draggable-handle');
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, 'ui-draggable-handle');
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper),
          n = s
            ? t(i.helper.apply(this.element[0], [e]))
            : 'clone' === i.helper
            ? this.element.clone().removeAttr('id')
            : this.element;
        return (
          n.parents('body').length || n.appendTo('parent' === i.appendTo ? this.element[0].parentNode : i.appendTo),
          s && n[0] === this.element[0] && this._setPositionRelative(),
          n[0] === this.element[0] || /(fixed|absolute)/.test(n.css('position')) || n.css('position', 'absolute'),
          n
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css('position')) || (this.element[0].style.position = 'relative');
      },
      _adjustOffsetFromHelper: function (e) {
        'string' == typeof e && (e = e.split(' ')),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          'left' in e && (this.offset.click.left = e.left + this.margins.left),
          'right' in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
          'top' in e && (this.offset.click.top = e.top + this.margins.top),
          'bottom' in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0];
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top: e.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ('relative' !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top: t.top - (parseInt(this.helper.css('top'), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
          left: t.left - (parseInt(this.helper.css('left'), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css('marginLeft'), 10) || 0,
          top: parseInt(this.element.css('marginTop'), 10) || 0,
          right: parseInt(this.element.css('marginRight'), 10) || 0,
          bottom: parseInt(this.element.css('marginBottom'), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
        return (
          (this.relativeContainer = null),
          n.containment
            ? 'window' === n.containment
              ? ((this.containment = [
                  t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                  t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                  t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ]),
                void 0)
              : 'document' === n.containment
              ? ((this.containment = [
                  0,
                  0,
                  t(o).width() - this.helperProportions.width - this.margins.left,
                  (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                ]),
                void 0)
              : n.containment.constructor === Array
              ? ((this.containment = n.containment), void 0)
              : ('parent' === n.containment && (n.containment = this.helper[0].parentNode),
                (i = t(n.containment)),
                (s = i[0]),
                s &&
                  ((e = /(scroll|auto)/.test(i.css('overflow'))),
                  (this.containment = [
                    (parseInt(i.css('borderLeftWidth'), 10) || 0) + (parseInt(i.css('paddingLeft'), 10) || 0),
                    (parseInt(i.css('borderTopWidth'), 10) || 0) + (parseInt(i.css('paddingTop'), 10) || 0),
                    (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) -
                      (parseInt(i.css('borderRightWidth'), 10) || 0) -
                      (parseInt(i.css('paddingRight'), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) -
                      (parseInt(i.css('borderBottomWidth'), 10) || 0) -
                      (parseInt(i.css('paddingBottom'), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom,
                  ]),
                  (this.relativeContainer = i)),
                void 0)
            : ((this.containment = null), void 0)
        );
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = 'absolute' === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ('fixed' === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ('fixed' === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;
        return (
          (r && this.offset.scroll) ||
            (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((s = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top,
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)),
            a.grid &&
              ((n = a.grid[1]
                ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (l = i
                ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                  ? n - a.grid[1]
                  : n + a.grid[1]
                : n),
              (o = a.grid[0]
                ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (h = i
                ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o)),
            'y' === a.axis && (h = this.originalPageX),
            'x' === a.axis && (l = this.originalPageY)),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
            left:
              h -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this._removeClass(this.helper, 'ui-draggable-dragging'),
          this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo('absolute')), (s.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
    t.ui.plugin.add('draggable', 'connectToSortable', {
      start: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.sortables = []),
          t(s.options.connectToSortable).each(function () {
            var i = t(this).sortable('instance');
            i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger('activate', e, n));
          });
      },
      stop: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.cancelHelperRemoval = !1),
          t.each(s.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css('position'),
                  top: t.placeholder.css('top'),
                  left: t.placeholder.css('left'),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger('deactivate', e, n));
          });
      },
      drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var n = !1,
            o = this;
          (o.positionAbs = s.positionAbs),
            (o.helperProportions = s.helperProportions),
            (o.offset.click = s.offset.click),
            o._intersectsWith(o.containerCache) &&
              ((n = !0),
              t.each(s.sortables, function () {
                return (
                  (this.positionAbs = s.positionAbs),
                  (this.helperProportions = s.helperProportions),
                  (this.offset.click = s.offset.click),
                  this !== o &&
                    this._intersectsWith(this.containerCache) &&
                    t.contains(o.element[0], this.element[0]) &&
                    (n = !1),
                  n
                );
              })),
            n
              ? (o.isOver ||
                  ((o.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (o.currentItem = i.helper.appendTo(o.element).data('ui-sortable-item', !0)),
                  (o.options._helper = o.options.helper),
                  (o.options.helper = function () {
                    return i.helper[0];
                  }),
                  (e.target = o.currentItem[0]),
                  o._mouseCapture(e, !0),
                  o._mouseStart(e, !0, !0),
                  (o.offset.click.top = s.offset.click.top),
                  (o.offset.click.left = s.offset.click.left),
                  (o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left),
                  (o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top),
                  s._trigger('toSortable', e),
                  (s.dropped = o.element),
                  t.each(s.sortables, function () {
                    this.refreshPositions();
                  }),
                  (s.currentItem = s.element),
                  (o.fromOutside = s)),
                o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
              : o.isOver &&
                ((o.isOver = 0),
                (o.cancelHelperRemoval = !0),
                (o.options._revert = o.options.revert),
                (o.options.revert = !1),
                o._trigger('out', e, o._uiHash(o)),
                o._mouseStop(e, !0),
                (o.options.revert = o.options._revert),
                (o.options.helper = o.options._helper),
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                (i.position = s._generatePosition(e, !0)),
                s._trigger('fromSortable', e),
                (s.dropped = !1),
                t.each(s.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    t.ui.plugin.add('draggable', 'cursor', {
      start: function (e, i, s) {
        var n = t('body'),
          o = s.options;
        n.css('cursor') && (o._cursor = n.css('cursor')), n.css('cursor', o.cursor);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._cursor && t('body').css('cursor', n._cursor);
      },
    }),
    t.ui.plugin.add('draggable', 'opacity', {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css('opacity') && (o._opacity = n.css('opacity')), n.css('opacity', o.opacity);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._opacity && t(i.helper).css('opacity', n._opacity);
      },
    }),
    t.ui.plugin.add('draggable', 'scroll', {
      start: function (t, e, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            'HTML' !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (e, i, s) {
        var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
        a !== r && 'HTML' !== a.tagName
          ? ((n.axis && 'x' === n.axis) ||
              (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity
                ? (a.scrollTop = o = a.scrollTop + n.scrollSpeed)
                : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                  (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            (n.axis && 'y' === n.axis) ||
              (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity
                ? (a.scrollLeft = o = a.scrollLeft + n.scrollSpeed)
                : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                  (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed)))
          : ((n.axis && 'x' === n.axis) ||
              (e.pageY - t(r).scrollTop() < n.scrollSensitivity
                ? (o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed))
                : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity &&
                  (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            (n.axis && 'y' === n.axis) ||
              (e.pageX - t(r).scrollLeft() < n.scrollSensitivity
                ? (o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed))
                : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity &&
                  (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
          o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
      },
    }),
    t.ui.plugin.add('draggable', 'snap', {
      start: function (e, i, s) {
        var n = s.options;
        (s.snapElements = []),
          t(n.snap.constructor !== String ? n.snap.items || ':data(ui-draggable)' : n.snap).each(function () {
            var e = t(this),
              i = e.offset();
            this !== s.element[0] &&
              s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left,
              });
          });
      },
      drag: function (e, i, s) {
        var n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;
        for (d = s.snapElements.length - 1; d >= 0; d--)
          (h = s.snapElements[d].left - s.margins.left),
            (l = h + s.snapElements[d].width),
            (c = s.snapElements[d].top - s.margins.top),
            (u = c + s.snapElements[d].height),
            h - g > _ ||
            m > l + g ||
            c - g > b ||
            v > u + g ||
            !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item)
              ? (s.snapElements[d].snapping &&
                  s.options.snap.release &&
                  s.options.snap.release.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = !1))
              : ('inner' !== f.snapMode &&
                  ((n = g >= Math.abs(c - b)),
                  (o = g >= Math.abs(u - v)),
                  (a = g >= Math.abs(h - _)),
                  (r = g >= Math.abs(l - m)),
                  n &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: c - s.helperProportions.height,
                      left: 0,
                    }).top),
                  o && (i.position.top = s._convertPositionTo('relative', { top: u, left: 0 }).top),
                  a &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: h - s.helperProportions.width,
                    }).left),
                  r && (i.position.left = s._convertPositionTo('relative', { top: 0, left: l }).left)),
                (p = n || o || a || r),
                'outer' !== f.snapMode &&
                  ((n = g >= Math.abs(c - v)),
                  (o = g >= Math.abs(u - b)),
                  (a = g >= Math.abs(h - m)),
                  (r = g >= Math.abs(l - _)),
                  n && (i.position.top = s._convertPositionTo('relative', { top: c, left: 0 }).top),
                  o &&
                    (i.position.top = s._convertPositionTo('relative', {
                      top: u - s.helperProportions.height,
                      left: 0,
                    }).top),
                  a && (i.position.left = s._convertPositionTo('relative', { top: 0, left: h }).left),
                  r &&
                    (i.position.left = s._convertPositionTo('relative', {
                      top: 0,
                      left: l - s.helperProportions.width,
                    }).left)),
                !s.snapElements[d].snapping &&
                  (n || o || a || r || p) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })),
                (s.snapElements[d].snapping = n || o || a || r || p));
      },
    }),
    t.ui.plugin.add('draggable', 'stack', {
      start: function (e, i, s) {
        var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
            return (parseInt(t(e).css('zIndex'), 10) || 0) - (parseInt(t(i).css('zIndex'), 10) || 0);
          });
        a.length &&
          ((n = parseInt(t(a[0]).css('zIndex'), 10) || 0),
          t(a).each(function (e) {
            t(this).css('zIndex', n + e);
          }),
          this.css('zIndex', n + a.length));
      },
    }),
    t.ui.plugin.add('draggable', 'zIndex', {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css('zIndex') && (o._zIndex = n.css('zIndex')), n.css('zIndex', o.zIndex);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._zIndex && t(i.helper).css('zIndex', n._zIndex);
      },
    }),
    t.ui.draggable,
    t.widget('ui.resizable', t.ui.mouse, {
      version: '1.12.0',
      widgetEventPrefix: 'resize',
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: 'slow',
        animateEasing: 'swing',
        aspectRatio: !1,
        autoHide: !1,
        classes: { 'ui-resizable-se': 'ui-icon ui-icon-gripsmall-diagonal-se' },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: 'e,s,se',
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _num: function (t) {
        return parseFloat(t) || 0;
      },
      _isNumber: function (t) {
        return !isNaN(parseFloat(t));
      },
      _hasScroll: function (e, i) {
        if ('hidden' === t(e).css('overflow')) return !1;
        var s = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
          n = !1;
        return e[s] > 0 ? !0 : ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
      },
      _create: function () {
        var e,
          i = this.options,
          s = this;
        this._addClass('ui-resizable'),
          t.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper: i.helper || i.ghost || i.animate ? i.helper || 'ui-resizable-helper' : null,
          }),
          this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) &&
            (this.element.wrap(
              t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css('position'),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css('top'),
                left: this.element.css('left'),
              })
            ),
            (this.element = this.element.parent().data('ui-resizable', this.element.resizable('instance'))),
            (this.elementIsWrapper = !0),
            (e = {
              marginTop: this.originalElement.css('marginTop'),
              marginRight: this.originalElement.css('marginRight'),
              marginBottom: this.originalElement.css('marginBottom'),
              marginLeft: this.originalElement.css('marginLeft'),
            }),
            this.element.css(e),
            this.originalElement.css('margin', 0),
            (this.originalResizeStyle = this.originalElement.css('resize')),
            this.originalElement.css('resize', 'none'),
            this._proportionallyResizeElements.push(
              this.originalElement.css({ position: 'static', zoom: 1, display: 'block' })
            ),
            this.originalElement.css(e),
            this._proportionallyResize()),
          this._setupHandles(),
          i.autoHide &&
            t(this.element)
              .on('mouseenter', function () {
                i.disabled || (s._removeClass('ui-resizable-autohide'), s._handles.show());
              })
              .on('mouseleave', function () {
                i.disabled || s.resizing || (s._addClass('ui-resizable-autohide'), s._handles.hide());
              }),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        var e,
          i = function (e) {
            t(e)
              .removeData('resizable')
              .removeData('ui-resizable')
              .off('.resizable')
              .find('.ui-resizable-handle')
              .remove();
          };
        return (
          this.elementIsWrapper &&
            (i(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css('position'),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css('top'),
                left: e.css('left'),
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css('resize', this.originalResizeStyle),
          i(this.originalElement),
          this
        );
      },
      _setOption: function (t, e) {
        switch ((this._super(t, e), t)) {
          case 'handles':
            this._removeHandles(), this._setupHandles();
            break;
          default:
        }
      },
      _setupHandles: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this;
        if (
          ((this.handles =
            a.handles ||
            (t('.ui-resizable-handle', this.element).length
              ? {
                  n: '.ui-resizable-n',
                  e: '.ui-resizable-e',
                  s: '.ui-resizable-s',
                  w: '.ui-resizable-w',
                  se: '.ui-resizable-se',
                  sw: '.ui-resizable-sw',
                  ne: '.ui-resizable-ne',
                  nw: '.ui-resizable-nw',
                }
              : 'e,s,se')),
          (this._handles = t()),
          this.handles.constructor === String)
        )
          for (
            'all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'),
              s = this.handles.split(','),
              this.handles = {},
              i = 0;
            s.length > i;
            i++
          )
            (e = t.trim(s[i])),
              (n = 'ui-resizable-' + e),
              (o = t('<div>')),
              this._addClass(o, 'ui-resizable-handle ' + n),
              o.css({ zIndex: a.zIndex }),
              (this.handles[e] = '.ui-resizable-' + e),
              this.element.append(o);
        (this._renderAxis = function (e) {
          var i, s, n, o;
          e = e || this.element;
          for (i in this.handles)
            this.handles[i].constructor === String
              ? (this.handles[i] = this.element.children(this.handles[i]).first().show())
              : (this.handles[i].jquery || this.handles[i].nodeType) &&
                ((this.handles[i] = t(this.handles[i])), this._on(this.handles[i], { mousedown: r._mouseDown })),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
                ((s = t(this.handles[i], this.element)),
                (o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth()),
                (n = [
                  'padding',
                  /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left',
                ].join('')),
                e.css(n, o),
                this._proportionallyResize()),
              (this._handles = this._handles.add(this.handles[i]));
        }),
          this._renderAxis(this.element),
          (this._handles = this._handles.add(this.element.find('.ui-resizable-handle'))),
          this._handles.disableSelection(),
          this._handles.on('mouseover', function () {
            r.resizing ||
              (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
              (r.axis = o && o[1] ? o[1] : 'se'));
          }),
          a.autoHide && (this._handles.hide(), this._addClass('ui-resizable-autohide'));
      },
      _removeHandles: function () {
        this._handles.remove();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n = !1;
        for (i in this.handles) (s = t(this.handles[i])[0]), (s === e.target || t.contains(s, e.target)) && (n = !0);
        return !this.options.disabled && n;
      },
      _mouseStart: function (e) {
        var i,
          s,
          n,
          o = this.options,
          a = this.element;
        return (
          (this.resizing = !0),
          this._renderProxy(),
          (i = this._num(this.helper.css('left'))),
          (s = this._num(this.helper.css('top'))),
          o.containment && ((i += t(o.containment).scrollLeft() || 0), (s += t(o.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: i, top: s }),
          (this.size = this._helper
            ? { width: this.helper.width(), height: this.helper.height() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }),
          (this.originalPosition = { left: i, top: s }),
          (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
          (this.aspectRatio =
            'number' == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
          (n = t('.ui-resizable-' + this.axis).css('cursor')),
          t('body').css('cursor', 'auto' === n ? this.axis + '-resize' : n),
          this._addClass('ui-resizable-resizing'),
          this._propagate('start', e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];
        return (
          this._updatePrevProperties(),
          h
            ? ((i = h.apply(this, [e, a, r])),
              this._updateVirtualBoundaries(e.shiftKey),
              (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
              (i = this._respectSize(i, e)),
              this._updateCache(i),
              this._propagate('resize', e),
              (s = this._applyChanges()),
              !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
              t.isEmptyObject(s) ||
                (this._updatePrevProperties(), this._trigger('resize', e, this.ui()), this._applyChanges()),
              !1)
            : !1
        );
      },
      _mouseStop: function (e) {
        this.resizing = !1;
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          c = this;
        return (
          this._helper &&
            ((i = this._proportionallyResizeElements),
            (s = i.length && /textarea/i.test(i[0].nodeName)),
            (n = s && this._hasScroll(i[0], 'left') ? 0 : c.sizeDiff.height),
            (o = s ? 0 : c.sizeDiff.width),
            (a = { width: c.helper.width() - o, height: c.helper.height() - n }),
            (r = parseFloat(c.element.css('left')) + (c.position.left - c.originalPosition.left) || null),
            (h = parseFloat(c.element.css('top')) + (c.position.top - c.originalPosition.top) || null),
            l.animate || this.element.css(t.extend(a, { top: h, left: r })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
          t('body').css('cursor', 'auto'),
          this._removeClass('ui-resizable-resizing'),
          this._propagate('stop', e),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updatePrevProperties: function () {
        (this.prevPosition = { top: this.position.top, left: this.position.left }),
          (this.prevSize = { width: this.size.width, height: this.size.height });
      },
      _applyChanges: function () {
        var t = {};
        return (
          this.position.top !== this.prevPosition.top && (t.top = this.position.top + 'px'),
          this.position.left !== this.prevPosition.left && (t.left = this.position.left + 'px'),
          this.size.width !== this.prevSize.width && (t.width = this.size.width + 'px'),
          this.size.height !== this.prevSize.height && (t.height = this.size.height + 'px'),
          this.helper.css(t),
          t
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a = this.options;
        (o = {
          minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
          maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
          minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
          maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
        }),
          (this._aspectRatio || t) &&
            ((e = o.minHeight * this.aspectRatio),
            (s = o.minWidth / this.aspectRatio),
            (i = o.maxHeight * this.aspectRatio),
            (n = o.maxWidth / this.aspectRatio),
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
          (this._vBoundaries = o);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          this._isNumber(t.left) && (this.position.left = t.left),
          this._isNumber(t.top) && (this.position.top = t.top),
          this._isNumber(t.height) && (this.size.height = t.height),
          this._isNumber(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          s = this.axis;
        return (
          this._isNumber(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
          'sw' === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          'nw' === s && ((t.top = e.top + (i.height - t.height)), (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          s && (t.width = e.maxWidth),
          n && (t.height = e.maxHeight),
          o && l && (t.left = r - e.minWidth),
          s && l && (t.left = r - e.maxWidth),
          a && c && (t.top = h - e.minHeight),
          n && c && (t.top = h - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _getPaddingPlusBorderDimensions: function (t) {
        for (
          var e = 0,
            i = [],
            s = [
              t.css('borderTopWidth'),
              t.css('borderRightWidth'),
              t.css('borderBottomWidth'),
              t.css('borderLeftWidth'),
            ],
            n = [t.css('paddingTop'), t.css('paddingRight'), t.css('paddingBottom'), t.css('paddingLeft')];
          4 > e;
          e++
        )
          (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
        return { height: i[0] + i[2], width: i[1] + i[3] };
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
            (t = this._proportionallyResizeElements[e]),
              this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
              t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0,
              });
      },
      _renderProxy: function () {
        var e = this.element,
          i = this.options;
        (this.elementOffset = e.offset()),
          this._helper
            ? ((this.helper = this.helper || t("<div style='overflow:hidden;'></div>")),
              this._addClass(this.helper, this._helper),
              this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: 'absolute',
                left: this.elementOffset.left + 'px',
                top: this.elementOffset.top + 'px',
                zIndex: ++i.zIndex,
              }),
              this.helper.appendTo('body').disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize,
            s = this.originalPosition;
          return { left: s.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var s = this.originalSize,
            n = this.originalPosition;
          return { top: n.top + i, height: s.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
        },
        sw: function (e, i, s) {
          return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
        },
        ne: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
        },
        nw: function (e, i, s) {
          return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
        },
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]), 'resize' !== e && this._trigger(e, i, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
    t.ui.plugin.add('resizable', 'animate', {
      stop: function (e) {
        var i = t(this).resizable('instance'),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - a },
          l = parseFloat(i.element.css('left')) + (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css('top')) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), {
          duration: s.animateDuration,
          easing: s.animateEasing,
          step: function () {
            var s = {
              width: parseFloat(i.element.css('width')),
              height: parseFloat(i.element.css('height')),
              top: parseFloat(i.element.css('top')),
              left: parseFloat(i.element.css('left')),
            };
            n && n.length && t(n[0]).css({ width: s.width, height: s.height }),
              i._updateCache(s),
              i._propagate('resize', e);
          },
        });
      },
    }),
    t.ui.plugin.add('resizable', 'containment', {
      start: function () {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable('instance'),
          l = h.options,
          c = h.element,
          u = l.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
        d &&
          ((h.containerElement = t(d)),
          /document/.test(u) || u === document
            ? ((h.containerOffset = { left: 0, top: 0 }),
              (h.containerPosition = { left: 0, top: 0 }),
              (h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((e = t(d)),
              (i = []),
              t(['Top', 'Right', 'Left', 'Bottom']).each(function (t, s) {
                i[t] = h._num(e.css('padding' + s));
              }),
              (h.containerOffset = e.offset()),
              (h.containerPosition = e.position()),
              (h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }),
              (s = h.containerOffset),
              (n = h.containerSize.height),
              (o = h.containerSize.width),
              (a = h._hasScroll(d, 'left') ? d.scrollWidth : o),
              (r = h._hasScroll(d) ? d.scrollHeight : n),
              (h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r })));
      },
      resize: function (e) {
        var i,
          s,
          n,
          o,
          a = t(this).resizable('instance'),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          c = a._aspectRatio || e.shiftKey,
          u = { top: 0, left: 0 },
          d = a.containerElement,
          p = !0;
        d[0] !== document && /static/.test(d.css('position')) && (u = h),
          l.left < (a._helper ? h.left : 0) &&
            ((a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left)),
            c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
            (a.position.left = r.helper ? h.left : 0)),
          l.top < (a._helper ? h.top : 0) &&
            ((a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top)),
            c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
            (a.position.top = a._helper ? h.top : 0)),
          (n = a.containerElement.get(0) === a.element.parent().get(0)),
          (o = /relative|absolute/.test(a.containerElement.css('position'))),
          n && o
            ? ((a.offset.left = a.parentData.left + a.position.left),
              (a.offset.top = a.parentData.top + a.position.top))
            : ((a.offset.left = a.element.offset().left), (a.offset.top = a.element.offset().top)),
          (i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left))),
          (s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top))),
          i + a.size.width >= a.parentData.width &&
            ((a.size.width = a.parentData.width - i), c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
          s + a.size.height >= a.parentData.height &&
            ((a.size.height = a.parentData.height - s),
            c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
          p ||
            ((a.position.left = a.prevPosition.left),
            (a.position.top = a.prevPosition.top),
            (a.size.width = a.prevSize.width),
            (a.size.height = a.prevSize.height));
      },
      stop: function () {
        var e = t(this).resizable('instance'),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;
        e._helper &&
          !i.animate &&
          /relative/.test(o.css('position')) &&
          t(this).css({ left: r.left - n.left - s.left, width: h, height: l }),
          e._helper &&
            !i.animate &&
            /static/.test(o.css('position')) &&
            t(this).css({ left: r.left - n.left - s.left, width: h, height: l });
      },
    }),
    t.ui.plugin.add('resizable', 'alsoResize', {
      start: function () {
        var e = t(this).resizable('instance'),
          i = e.options;
        t(i.alsoResize).each(function () {
          var e = t(this);
          e.data('ui-resizable-alsoresize', {
            width: parseFloat(e.width()),
            height: parseFloat(e.height()),
            left: parseFloat(e.css('left')),
            top: parseFloat(e.css('top')),
          });
        });
      },
      resize: function (e, i) {
        var s = t(this).resizable('instance'),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
            height: s.size.height - o.height || 0,
            width: s.size.width - o.width || 0,
            top: s.position.top - a.top || 0,
            left: s.position.left - a.left || 0,
          };
        t(n.alsoResize).each(function () {
          var e = t(this),
            s = t(this).data('ui-resizable-alsoresize'),
            n = {},
            o = e.parents(i.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];
          t.each(o, function (t, e) {
            var i = (s[e] || 0) + (r[e] || 0);
            i && i >= 0 && (n[e] = i || null);
          }),
            e.css(n);
        });
      },
      stop: function () {
        t(this).removeData('ui-resizable-alsoresize');
      },
    }),
    t.ui.plugin.add('resizable', 'ghost', {
      start: function () {
        var e = t(this).resizable('instance'),
          i = e.size;
        (e.ghost = e.originalElement.clone()),
          e.ghost.css({
            opacity: 0.25,
            display: 'block',
            position: 'relative',
            height: i.height,
            width: i.width,
            margin: 0,
            left: 0,
            top: 0,
          }),
          e._addClass(e.ghost, 'ui-resizable-ghost'),
          t.uiBackCompat !== !1 && 'string' == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
          e.ghost.appendTo(e.helper);
      },
      resize: function () {
        var e = t(this).resizable('instance');
        e.ghost && e.ghost.css({ position: 'relative', height: e.size.height, width: e.size.width });
      },
      stop: function () {
        var e = t(this).resizable('instance');
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
      },
    }),
    t.ui.plugin.add('resizable', 'grid', {
      resize: function () {
        var e,
          i = t(this).resizable('instance'),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = 'number' == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          c = h[1] || 1,
          u = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / c) * c,
          p = o.width + u,
          f = o.height + d,
          g = s.maxWidth && p > s.maxWidth,
          m = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f;
        (s.grid = h),
          _ && (p += l),
          v && (f += c),
          g && (p -= l),
          m && (f -= c),
          /^(se|s|e)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f))
            : /^(ne)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f), (i.position.top = a.top - d))
            : /^(sw)$/.test(r)
            ? ((i.size.width = p), (i.size.height = f), (i.position.left = a.left - u))
            : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)),
              f - c > 0
                ? ((i.size.height = f), (i.position.top = a.top - d))
                : ((f = c - e.height), (i.size.height = f), (i.position.top = a.top + o.height - f)),
              p - l > 0
                ? ((i.size.width = p), (i.position.left = a.left - u))
                : ((p = l - e.width), (i.size.width = p), (i.position.left = a.left + o.width - p)));
      },
    }),
    t.ui.resizable,
    t.widget('ui.dialog', {
      version: '1.12.0',
      options: {
        appendTo: 'body',
        autoOpen: !0,
        buttons: [],
        classes: { 'ui-dialog': 'ui-corner-all', 'ui-dialog-titlebar': 'ui-corner-all' },
        closeOnEscape: !0,
        closeText: 'Close',
        draggable: !0,
        hide: null,
        height: 'auto',
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: 'center',
          at: 'center',
          of: window,
          collision: 'fit',
          using: function (e) {
            var i = t(this).css(e).offset().top;
            0 > i && t(this).css('top', e.top - i);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      sizeRelatedOptions: {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr('title')),
          null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
          this.options.disabled && (this.options.disabled = !1),
          this._createWrapper(),
          this.element.show().removeAttr('title').appendTo(this.uiDialog),
          this._addClass('ui-dialog-content', 'ui-widget-content'),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1),
          this._trackFocus();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || 'body').eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._untrackInstance(),
          this._destroyOverlay(),
          this.element.removeUniqueId().css(this.originalCss).detach(),
          this.uiDialog.remove(),
          this.originalTitle && this.element.attr('title', this.originalTitle),
          (t = e.parent.children().eq(e.index)),
          t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this;
        this._isOpen &&
          this._trigger('beforeClose', e) !== !1 &&
          ((this._isOpen = !1),
          (this._focusedElement = null),
          this._destroyOverlay(),
          this._untrackInstance(),
          this.opener.filter(':focusable').trigger('focus').length ||
            t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
          this._hide(this.uiDialog, this.options.hide, function () {
            i._trigger('close', e);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (e, i) {
        var s = !1,
          n = this.uiDialog
            .siblings('.ui-front:visible')
            .map(function () {
              return +t(this).css('z-index');
            })
            .get(),
          o = Math.max.apply(null, n);
        return (
          o >= +this.uiDialog.css('z-index') && (this.uiDialog.css('z-index', o + 1), (s = !0)),
          s && !i && this._trigger('focus', e),
          s
        );
      },
      open: function () {
        var e = this;
        return this._isOpen
          ? (this._moveToTop() && this._focusTabbable(), void 0)
          : ((this._isOpen = !0),
            (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css('z-index', this.uiDialog.css('z-index') - 1),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger('focus');
            }),
            this._makeFocusTarget(),
            this._trigger('open'),
            void 0);
      },
      _focusTabbable: function () {
        var t = this._focusedElement;
        t || (t = this.element.find('[autofocus]')),
          t.length || (t = this.element.find(':tabbable')),
          t.length || (t = this.uiDialogButtonPane.find(':tabbable')),
          t.length || (t = this.uiDialogTitlebarClose.filter(':tabbable')),
          t.length || (t = this.uiDialog),
          t.eq(0).trigger('focus');
      },
      _keepFocus: function (e) {
        function i() {
          var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
          i || this._focusTabbable();
        }
        e.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function () {
        (this.uiDialog = t('<div>').hide().attr({ tabIndex: -1, role: 'dialog' }).appendTo(this._appendTo())),
          this._addClass(this.uiDialog, 'ui-dialog', 'ui-widget ui-widget-content ui-front'),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), this.close(e), void 0;
              if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                var i = this.uiDialog.find(':tabbable'),
                  s = i.filter(':first'),
                  n = i.filter(':last');
                (e.target !== n[0] && e.target !== this.uiDialog[0]) || e.shiftKey
                  ? (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (this._delay(function () {
                      n.trigger('focus');
                    }),
                    e.preventDefault())
                  : (this._delay(function () {
                      s.trigger('focus');
                    }),
                    e.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find('[aria-describedby]').length ||
            this.uiDialog.attr({ 'aria-describedby': this.element.uniqueId().attr('id') });
      },
      _createTitlebar: function () {
        var e;
        (this.uiDialogTitlebar = t('<div>')),
          this._addClass(this.uiDialogTitlebar, 'ui-dialog-titlebar', 'ui-widget-header ui-helper-clearfix'),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest('.ui-dialog-titlebar-close') || this.uiDialog.trigger('focus');
            },
          }),
          (this.uiDialogTitlebarClose = t("<button type='button'></button>")
            .button({ label: t('<a>').text(this.options.closeText).html(), icon: 'ui-icon-closethick', showLabel: !1 })
            .appendTo(this.uiDialogTitlebar)),
          this._addClass(this.uiDialogTitlebarClose, 'ui-dialog-titlebar-close'),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (e = t('<span>').uniqueId().prependTo(this.uiDialogTitlebar)),
          this._addClass(e, 'ui-dialog-title'),
          this._title(e),
          this.uiDialogTitlebar.prependTo(this.uiDialog),
          this.uiDialog.attr({ 'aria-labelledby': e.attr('id') });
      },
      _title: function (t) {
        this.options.title ? t.text(this.options.title) : t.html('&#160;');
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = t('<div>')),
          this._addClass(this.uiDialogButtonPane, 'ui-dialog-buttonpane', 'ui-widget-content ui-helper-clearfix'),
          (this.uiButtonSet = t('<div>').appendTo(this.uiDialogButtonPane)),
          this._addClass(this.uiButtonSet, 'ui-dialog-buttonset'),
          this._createButtons();
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons;
        return (
          this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? (this._removeClass(this.uiDialog, 'ui-dialog-buttons'), void 0)
            : (t.each(i, function (i, s) {
                var n, o;
                (s = t.isFunction(s) ? { click: s, text: i } : s),
                  (s = t.extend({ type: 'button' }, s)),
                  (n = s.click),
                  (o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel }),
                  delete s.click,
                  delete s.icon,
                  delete s.iconPosition,
                  delete s.showLabel,
                  t('<button></button>', s)
                    .button(o)
                    .appendTo(e.uiButtonSet)
                    .on('click', function () {
                      n.apply(e.element[0], arguments);
                    });
              }),
              this._addClass(this.uiDialog, 'ui-dialog-buttons'),
              this.uiDialogButtonPane.appendTo(this.uiDialog),
              void 0)
        );
      },
      _makeDraggable: function () {
        function e(t) {
          return { position: t.position, offset: t.offset };
        }
        var i = this,
          s = this.options;
        this.uiDialog.draggable({
          cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
          handle: '.ui-dialog-titlebar',
          containment: 'document',
          start: function (s, n) {
            i._addClass(t(this), 'ui-dialog-dragging'), i._blockFrames(), i._trigger('dragStart', s, e(n));
          },
          drag: function (t, s) {
            i._trigger('drag', t, e(s));
          },
          stop: function (n, o) {
            var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();
            (s.position = {
              my: 'left top',
              at: 'left' + (a >= 0 ? '+' : '') + a + ' ' + 'top' + (r >= 0 ? '+' : '') + r,
              of: i.window,
            }),
              i._removeClass(t(this), 'ui-dialog-dragging'),
              i._unblockFrames(),
              i._trigger('dragStop', n, e(o));
          },
        });
      },
      _makeResizable: function () {
        function e(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css('position'),
          a = 'string' == typeof n ? n : 'n,e,s,w,se,sw,ne,nw';
        this.uiDialog
          .resizable({
            cancel: '.ui-dialog-content',
            containment: 'document',
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: a,
            start: function (s, n) {
              i._addClass(t(this), 'ui-dialog-resizing'), i._blockFrames(), i._trigger('resizeStart', s, e(n));
            },
            resize: function (t, s) {
              i._trigger('resize', t, e(s));
            },
            stop: function (n, o) {
              var a = i.uiDialog.offset(),
                r = a.left - i.document.scrollLeft(),
                h = a.top - i.document.scrollTop();
              (s.height = i.uiDialog.height()),
                (s.width = i.uiDialog.width()),
                (s.position = {
                  my: 'left top',
                  at: 'left' + (r >= 0 ? '+' : '') + r + ' ' + 'top' + (h >= 0 ? '+' : '') + h,
                  of: i.window,
                }),
                i._removeClass(t(this), 'ui-dialog-resizing'),
                i._unblockFrames(),
                i._trigger('resizeStop', n, e(o));
            },
          })
          .css('position', o);
      },
      _trackFocus: function () {
        this._on(this.widget(), {
          focusin: function (e) {
            this._makeFocusTarget(), (this._focusedElement = t(e.target));
          },
        });
      },
      _makeFocusTarget: function () {
        this._untrackInstance(), this._trackingInstances().unshift(this);
      },
      _untrackInstance: function () {
        var e = this._trackingInstances(),
          i = t.inArray(this, e);
        -1 !== i && e.splice(i, 1);
      },
      _trackingInstances: function () {
        var t = this.document.data('ui-dialog-instances');
        return t || ((t = []), this.document.data('ui-dialog-instances', t)), t;
      },
      _minHeight: function () {
        var t = this.options;
        return 'auto' === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(':visible');
        t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
      },
      _setOptions: function (e) {
        var i = this,
          s = !1,
          n = {};
        t.each(e, function (t, e) {
          i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
        }),
          s && (this._size(), this._position()),
          this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', n);
      },
      _setOption: function (e, i) {
        var s,
          n,
          o = this.uiDialog;
        'disabled' !== e &&
          (this._super(e, i),
          'appendTo' === e && this.uiDialog.appendTo(this._appendTo()),
          'buttons' === e && this._createButtons(),
          'closeText' === e &&
            this.uiDialogTitlebarClose.button({
              label: t('<a>')
                .text('' + this.options.closeText)
                .html(),
            }),
          'draggable' === e &&
            ((s = o.is(':data(ui-draggable)')), s && !i && o.draggable('destroy'), !s && i && this._makeDraggable()),
          'position' === e && this._position(),
          'resizable' === e &&
            ((n = o.is(':data(ui-resizable)')),
            n && !i && o.resizable('destroy'),
            n && 'string' == typeof i && o.resizable('option', 'handles', i),
            n || i === !1 || this._makeResizable()),
          'title' === e && this._title(this.uiDialogTitlebar.find('.ui-dialog-title')));
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options;
        this.element.show().css({ width: 'auto', minHeight: 0, maxHeight: 'none', height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog.css({ height: 'auto', width: s.width }).outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i = 'number' == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : 'none'),
          'auto' === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: 'auto' })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', 'minHeight', this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find('iframe').map(function () {
          var e = t(this);
          return t('<div>')
            .css({ position: 'absolute', width: e.outerWidth(), height: e.outerHeight() })
            .appendTo(e.parent())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (e) {
        return t(e.target).closest('.ui-dialog').length ? !0 : !!t(e.target).closest('.ui-datepicker').length;
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = !0;
          this._delay(function () {
            e = !1;
          }),
            this.document.data('ui-dialog-overlays') ||
              this._on(this.document, {
                focusin: function (t) {
                  e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                },
              }),
            (this.overlay = t('<div>').appendTo(this._appendTo())),
            this._addClass(this.overlay, null, 'ui-widget-overlay ui-front'),
            this._on(this.overlay, { mousedown: '_keepFocus' }),
            this.document.data('ui-dialog-overlays', (this.document.data('ui-dialog-overlays') || 0) + 1);
        }
      },
      _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
          var t = this.document.data('ui-dialog-overlays') - 1;
          t
            ? this.document.data('ui-dialog-overlays', t)
            : (this._off(this.document, 'focusin'), this.document.removeData('ui-dialog-overlays')),
            this.overlay.remove(),
            (this.overlay = null);
        }
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.dialog', t.ui.dialog, {
        options: { dialogClass: '' },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function (t, e) {
          'dialogClass' === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments);
        },
      }),
    t.ui.dialog,
    t.widget('ui.droppable', {
      version: '1.12.0',
      widgetEventPrefix: 'drop',
      options: {
        accept: '*',
        addClasses: !0,
        greedy: !1,
        scope: 'default',
        tolerance: 'intersect',
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var e,
          i = this.options,
          s = i.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(s)
            ? s
            : function (t) {
                return t.is(s);
              }),
          (this.proportions = function () {
            return arguments.length
              ? ((e = arguments[0]), void 0)
              : e
              ? e
              : (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
          }),
          this._addToManager(i.scope),
          i.addClasses && this._addClass('ui-droppable');
      },
      _addToManager: function (e) {
        (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []), t.ui.ddmanager.droppables[e].push(this);
      },
      _splice: function (t) {
        for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(e);
      },
      _setOption: function (e, i) {
        if ('accept' === e)
          this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              };
        else if ('scope' === e) {
          var s = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(s), this._addToManager(i);
        }
        this._super(e, i);
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this._addActiveClass(), i && this._trigger('activate', e, this.ui(i));
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this._removeActiveClass(), i && this._trigger('deactivate', e, this.ui(i));
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._addHoverClass(), this._trigger('over', e, this.ui(i)));
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeHoverClass(), this._trigger('out', e, this.ui(i)));
      },
      _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current,
          n = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0]
          ? (this.element
              .find(':data(ui-droppable)')
              .not('.ui-draggable-dragging')
              .each(function () {
                var i = t(this).droppable('instance');
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === s.options.scope &&
                  i.accept.call(i.element[0], s.currentItem || s.element) &&
                  v(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)
                  ? ((n = !0), !1)
                  : void 0;
              }),
            n
              ? !1
              : this.accept.call(this.element[0], s.currentItem || s.element)
              ? (this._removeActiveClass(),
                this._removeHoverClass(),
                this._trigger('drop', e, this.ui(s)),
                this.element)
              : !1)
          : !1;
      },
      ui: function (t) {
        return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
      },
      _addHoverClass: function () {
        this._addClass('ui-droppable-hover');
      },
      _removeHoverClass: function () {
        this._removeClass('ui-droppable-hover');
      },
      _addActiveClass: function () {
        this._addClass('ui-droppable-active');
      },
      _removeActiveClass: function () {
        this._removeClass('ui-droppable-active');
      },
    });
  var v = (t.ui.intersect = (function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }
    return function (e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        h = a + e.helperProportions.height,
        l = i.offset.left,
        c = i.offset.top,
        u = l + i.proportions().width,
        d = c + i.proportions().height;
      switch (s) {
        case 'fit':
          return o >= l && u >= r && a >= c && d >= h;
        case 'intersect':
          return (
            o + e.helperProportions.width / 2 > l &&
            u > r - e.helperProportions.width / 2 &&
            a + e.helperProportions.height / 2 > c &&
            d > h - e.helperProportions.height / 2
          );
        case 'pointer':
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
        case 'touch':
          return (
            ((a >= c && d >= a) || (h >= c && d >= h) || (c > a && h > d)) &&
            ((o >= l && u >= o) || (r >= l && u >= r) || (l > o && r > u))
          );
        default:
          return !1;
      }
    };
  })());
  (t.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function (e, i) {
      var s,
        n,
        o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(':data(ui-droppable)').addBack();
      t: for (s = 0; o.length > s; s++)
        if (!(o[s].options.disabled || (e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element)))) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t;
            }
          (o[s].visible = 'none' !== o[s].element.css('display')),
            o[s].visible &&
              ('mousedown' === a && o[s]._activate.call(o[s], i),
              (o[s].offset = o[s].element.offset()),
              o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight }));
        }
    },
    drop: function (e, i) {
      var s = !1;
      return (
        t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
          this.options &&
            (!this.options.disabled &&
              this.visible &&
              v(e, this, this.options.tolerance, i) &&
              (s = this._drop.call(this, i) || s),
            !this.options.disabled &&
              this.visible &&
              this.accept.call(this.element[0], e.currentItem || e.element) &&
              ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, i)));
        }),
        s
      );
    },
    dragStart: function (e, i) {
      e.element.parentsUntil('body').on('scroll.droppable', function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
        t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var s,
              n,
              o,
              a = v(e, this, this.options.tolerance, i),
              r = !a && this.isover ? 'isout' : a && !this.isover ? 'isover' : null;
            r &&
              (this.options.greedy &&
                ((n = this.options.scope),
                (o = this.element.parents(':data(ui-droppable)').filter(function () {
                  return t(this).droppable('instance').options.scope === n;
                })),
                o.length && ((s = t(o[0]).droppable('instance')), (s.greedyChild = 'isover' === r))),
              s && 'isover' === r && ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
              (this[r] = !0),
              (this['isout' === r ? 'isover' : 'isout'] = !1),
              this['isover' === r ? '_over' : '_out'].call(this, i),
              s && 'isout' === r && ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
          }
        });
    },
    dragStop: function (e, i) {
      e.element.parentsUntil('body').off('scroll.droppable'),
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    },
  }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.droppable', t.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        },
      }),
    t.ui.droppable,
    t.widget('ui.progressbar', {
      version: '1.12.0',
      options: {
        classes: {
          'ui-progressbar': 'ui-corner-all',
          'ui-progressbar-value': 'ui-corner-left',
          'ui-progressbar-complete': 'ui-corner-right',
        },
        max: 100,
        value: 0,
        change: null,
        complete: null,
      },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: 'progressbar', 'aria-valuemin': this.min }),
          this._addClass('ui-progressbar', 'ui-widget ui-widget-content'),
          (this.valueDiv = t('<div>').appendTo(this.element)),
          this._addClass(this.valueDiv, 'ui-progressbar-value', 'ui-widget-header'),
          this._refreshValue();
      },
      _destroy: function () {
        this.element.removeAttr('role aria-valuemin aria-valuemax aria-valuenow'), this.valueDiv.remove();
      },
      value: function (t) {
        return void 0 === t
          ? this.options.value
          : ((this.options.value = this._constrainedValue(t)), this._refreshValue(), void 0);
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = t === !1),
          'number' != typeof t && (t = 0),
          this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value, this._super(t), (this.options.value = this._constrainedValue(e)), this._refreshValue();
      },
      _setOption: function (t, e) {
        'max' === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t), this.element.attr('aria-disabled', t), this._toggleClass(null, 'ui-state-disabled', !!t);
      },
      _percentage: function () {
        return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
      },
      _refreshValue: function () {
        var e = this.options.value,
          i = this._percentage();
        this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + '%'),
          this._toggleClass(this.valueDiv, 'ui-progressbar-complete', null, e === this.options.max)._toggleClass(
            'ui-progressbar-indeterminate',
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr('aria-valuenow'),
              this.overlayDiv ||
                ((this.overlayDiv = t('<div>').appendTo(this.valueDiv)),
                this._addClass(this.overlayDiv, 'ui-progressbar-overlay')))
            : (this.element.attr({ 'aria-valuemax': this.options.max, 'aria-valuenow': e }),
              this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== e && ((this.oldValue = e), this._trigger('change')),
          e === this.options.max && this._trigger('complete');
      },
    }),
    t.widget('ui.selectable', t.ui.mouse, {
      version: '1.12.0',
      options: {
        appendTo: 'body',
        autoRefresh: !0,
        distance: 0,
        filter: '*',
        tolerance: 'touch',
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var e = this;
        this._addClass('ui-selectable'),
          (this.dragged = !1),
          (this.refresh = function () {
            (e.elementPos = t(e.element[0]).offset()),
              (e.selectees = t(e.options.filter, e.element[0])),
              e._addClass(e.selectees, 'ui-selectee'),
              e.selectees.each(function () {
                var i = t(this),
                  s = i.offset(),
                  n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };
                t.data(this, 'selectable-item', {
                  element: this,
                  $element: i,
                  left: n.left,
                  top: n.top,
                  right: n.left + i.outerWidth(),
                  bottom: n.top + i.outerHeight(),
                  startselected: !1,
                  selected: i.hasClass('ui-selected'),
                  selecting: i.hasClass('ui-selecting'),
                  unselecting: i.hasClass('ui-unselecting'),
                });
              });
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = t('<div>')),
          this._addClass(this.helper, 'ui-selectable-helper');
      },
      _destroy: function () {
        this.selectees.removeData('selectable-item'), this._mouseDestroy();
      },
      _mouseStart: function (e) {
        var i = this,
          s = this.options;
        (this.opos = [e.pageX, e.pageY]),
          (this.elementPos = t(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = t(s.filter, this.element[0])),
            this._trigger('start', e),
            t(s.appendTo).append(this.helper),
            this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter('.ui-selected').each(function () {
              var s = t.data(this, 'selectable-item');
              (s.startselected = !0),
                e.metaKey ||
                  e.ctrlKey ||
                  (i._removeClass(s.$element, 'ui-selected'),
                  (s.selected = !1),
                  i._addClass(s.$element, 'ui-unselecting'),
                  (s.unselecting = !0),
                  i._trigger('unselecting', e, { unselecting: s.element }));
            }),
            t(e.target)
              .parents()
              .addBack()
              .each(function () {
                var s,
                  n = t.data(this, 'selectable-item');
                return n
                  ? ((s = (!e.metaKey && !e.ctrlKey) || !n.$element.hasClass('ui-selected')),
                    i
                      ._removeClass(n.$element, s ? 'ui-unselecting' : 'ui-selected')
                      ._addClass(n.$element, s ? 'ui-selecting' : 'ui-unselecting'),
                    (n.unselecting = !s),
                    (n.selecting = s),
                    (n.selected = s),
                    s
                      ? i._trigger('selecting', e, { selecting: n.element })
                      : i._trigger('unselecting', e, { unselecting: n.element }),
                    !1)
                  : void 0;
              }));
      },
      _mouseDrag: function (e) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
          return (
            o > r && ((i = r), (r = o), (o = i)),
            a > h && ((i = h), (h = a), (a = i)),
            this.helper.css({ left: o, top: a, width: r - o, height: h - a }),
            this.selectees.each(function () {
              var i = t.data(this, 'selectable-item'),
                l = !1,
                c = {};
              i &&
                i.element !== s.element[0] &&
                ((c.left = i.left + s.elementPos.left),
                (c.right = i.right + s.elementPos.left),
                (c.top = i.top + s.elementPos.top),
                (c.bottom = i.bottom + s.elementPos.top),
                'touch' === n.tolerance
                  ? (l = !(c.left > r || o > c.right || c.top > h || a > c.bottom))
                  : 'fit' === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom),
                l
                  ? (i.selected && (s._removeClass(i.$element, 'ui-selected'), (i.selected = !1)),
                    i.unselecting && (s._removeClass(i.$element, 'ui-unselecting'), (i.unselecting = !1)),
                    i.selecting ||
                      (s._addClass(i.$element, 'ui-selecting'),
                      (i.selecting = !0),
                      s._trigger('selecting', e, { selecting: i.element })))
                  : (i.selecting &&
                      ((e.metaKey || e.ctrlKey) && i.startselected
                        ? (s._removeClass(i.$element, 'ui-selecting'),
                          (i.selecting = !1),
                          s._addClass(i.$element, 'ui-selected'),
                          (i.selected = !0))
                        : (s._removeClass(i.$element, 'ui-selecting'),
                          (i.selecting = !1),
                          i.startselected && (s._addClass(i.$element, 'ui-unselecting'), (i.unselecting = !0)),
                          s._trigger('unselecting', e, { unselecting: i.element }))),
                    i.selected &&
                      (e.metaKey ||
                        e.ctrlKey ||
                        i.startselected ||
                        (s._removeClass(i.$element, 'ui-selected'),
                        (i.selected = !1),
                        s._addClass(i.$element, 'ui-unselecting'),
                        (i.unselecting = !0),
                        s._trigger('unselecting', e, { unselecting: i.element })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          t('.ui-unselecting', this.element[0]).each(function () {
            var s = t.data(this, 'selectable-item');
            i._removeClass(s.$element, 'ui-unselecting'),
              (s.unselecting = !1),
              (s.startselected = !1),
              i._trigger('unselected', e, { unselected: s.element });
          }),
          t('.ui-selecting', this.element[0]).each(function () {
            var s = t.data(this, 'selectable-item');
            i._removeClass(s.$element, 'ui-selecting')._addClass(s.$element, 'ui-selected'),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              i._trigger('selected', e, { selected: s.element });
          }),
          this._trigger('stop', e),
          this.helper.remove(),
          !1
        );
      },
    }),
    t.widget('ui.selectmenu', [
      t.ui.formResetMixin,
      {
        version: '1.12.0',
        defaultElement: '<select>',
        options: {
          appendTo: null,
          classes: { 'ui-selectmenu-button-open': 'ui-corner-top', 'ui-selectmenu-button-closed': 'ui-corner-all' },
          disabled: null,
          icons: { button: 'ui-icon-triangle-1-s' },
          position: { my: 'left top', at: 'left bottom', collision: 'none' },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var e = this.element.uniqueId().attr('id');
          (this.ids = { element: e, button: e + '-button', menu: e + '-menu' }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = t());
        },
        _drawButton: function () {
          var e,
            i = this,
            s = this._parseOption(this.element.find('option:selected'), this.element[0].selectedIndex);
          (this.labels = this.element.labels().attr('for', this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.focus(), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = t('<span>', {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: 'combobox',
              'aria-expanded': 'false',
              'aria-autocomplete': 'list',
              'aria-owns': this.ids.menu,
              'aria-haspopup': 'true',
              title: this.element.attr('title'),
            }).insertAfter(this.element)),
            this._addClass(this.button, 'ui-selectmenu-button ui-selectmenu-button-closed', 'ui-button ui-widget'),
            (e = t('<span>').appendTo(this.button)),
            this._addClass(e, 'ui-selectmenu-icon', 'ui-icon ' + this.options.icons.button),
            (this.buttonItem = this._renderButtonItem(s).appendTo(this.button)),
            this.options.width !== !1 && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one('focusin', function () {
              i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function () {
          var e = this;
          (this.menu = t('<ul>', { 'aria-hidden': 'true', 'aria-labelledby': this.ids.button, id: this.ids.menu })),
            (this.menuWrap = t('<div>').append(this.menu)),
            this._addClass(this.menuWrap, 'ui-selectmenu-menu', 'ui-front'),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { 'ui-menu': 'ui-corner-bottom' },
                role: 'listbox',
                select: function (t, i) {
                  t.preventDefault(), e._setSelection(), e._select(i.item.data('ui-selectmenu-item'), t);
                },
                focus: function (t, i) {
                  var s = i.item.data('ui-selectmenu-item');
                  null != e.focusIndex &&
                    s.index !== e.focusIndex &&
                    (e._trigger('focus', t, { item: s }), e.isOpen || e._select(s, t)),
                    (e.focusIndex = s.index),
                    e.button.attr('aria-activedescendant', e.menuItems.eq(s.index).attr('id'));
                },
              })
              .menu('instance')),
            this.menuInstance._off(this.menu, 'mouseleave'),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(this._getSelectedItem().data('ui-selectmenu-item') || {}))
            ),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t,
            e = this.element.find('option');
          this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu.find('li').not('.ui-selectmenu-optgroup').find('.ui-menu-item-wrapper')),
            (this._rendered = !0),
            e.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data('ui-selectmenu-item')),
              this._setOption('disabled', this.element.prop('disabled')));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(this.menu.find('.ui-state-active'), null, 'ui-state-active'),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger('open', t)));
        },
        _position: function () {
          this.menuWrap.position(t.extend({ of: this.button }, this.options.position));
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger('close', t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (e) {
          var i = t('<span>');
          return this._setText(i, e.label), this._addClass(i, 'ui-selectmenu-text'), i;
        },
        _renderMenu: function (e, i) {
          var s = this,
            n = '';
          t.each(i, function (i, o) {
            var a;
            o.optgroup !== n &&
              ((a = t('<li>', { text: o.optgroup })),
              s._addClass(
                a,
                'ui-selectmenu-optgroup',
                'ui-menu-divider' + (o.element.parent('optgroup').prop('disabled') ? ' ui-state-disabled' : '')
              ),
              a.appendTo(e),
              (n = o.optgroup)),
              s._renderItemData(e, o);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data('ui-selectmenu-item', e);
        },
        _renderItem: function (e, i) {
          var s = t('<li>'),
            n = t('<div>', { title: i.element.attr('title') });
          return (
            i.disabled && this._addClass(s, null, 'ui-state-disabled'),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html('&#160;');
        },
        _move: function (t, e) {
          var i,
            s,
            n = '.ui-menu-item';
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent('li'))
            : ((i = this.menuItems.eq(this.element[0].selectedIndex).parent('li')), (n += ':not(.ui-state-disabled)')),
            (s =
              'first' === t || 'last' === t
                ? i['first' === t ? 'prevAll' : 'nextAll'](n).eq(-1)
                : i[t + 'All'](n).eq(0)),
            s.length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent('li');
        },
        _toggle: function (t) {
          this[this.isOpen ? 'close' : 'open'](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()), t.removeAllRanges(), t.addRange(this.range))
              : this.range.select(),
            this.button.focus());
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest('.ui-selectmenu-menu, #' + t.ui.escapeSelector(this.ids.button)).length ||
                this.close(e));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? ((t = window.getSelection()), t.rangeCount && (this.range = t.getRangeAt(0)))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (e) {
            var i = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1);
                break;
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e);
                break;
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move('prev', e);
                break;
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move('next', e);
                break;
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                break;
              case t.ui.keyCode.LEFT:
                this._move('prev', e);
                break;
              case t.ui.keyCode.RIGHT:
                this._move('next', e);
                break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move('first', e);
                break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move('last', e);
                break;
              default:
                this.menu.trigger(e), (i = !1);
            }
            i && e.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent('li');
          e.hasClass('ui-state-disabled') || this._select(e.data('ui-selectmenu-item'), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(t))),
            this._setAria(t),
            this._trigger('select', e, { item: t }),
            t.index !== i && this._trigger('change', e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr('id');
          this.button.attr({ 'aria-labelledby': e, 'aria-activedescendant': e }),
            this.menu.attr('aria-activedescendant', e);
        },
        _setOption: function (t, e) {
          if ('icons' === t) {
            var i = this.button.find('span.ui-icon');
            this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
          }
          this._super(t, e),
            'appendTo' === t && this.menuWrap.appendTo(this._appendTo()),
            'width' === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option('disabled', t),
            this.button.attr('aria-disabled', t),
            this._toggleClass(this.button, null, 'ui-state-disabled', t),
            this.element.prop('disabled', t),
            t ? (this.button.attr('tabindex', -1), this.close()) : this.button.attr('tabindex', 0);
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest('.ui-front, dialog')),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _toggleAttr: function () {
          this.button.attr('aria-expanded', this.isOpen),
            this._removeClass(this.button, 'ui-selectmenu-button-' + (this.isOpen ? 'closed' : 'open'))
              ._addClass(this.button, 'ui-selectmenu-button-' + (this.isOpen ? 'open' : 'closed'))
              ._toggleClass(this.menuWrap, 'ui-selectmenu-open', null, this.isOpen),
            this.menu.attr('aria-hidden', !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          return t === !1
            ? (this.button.css('width', ''), void 0)
            : (null === t && ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t),
              void 0);
        },
        _resizeMenu: function () {
          this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width('').outerWidth() + 1));
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop('disabled')), t;
        },
        _parseOptions: function (e) {
          var i = this,
            s = [];
          e.each(function (e, n) {
            s.push(i._parseOption(t(n), e));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent('optgroup');
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr('label') || '',
            disabled: i.prop('disabled') || t.prop('disabled'),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr('for', this.ids.element);
        },
      },
    ]),
    t.widget('ui.slider', t.ui.mouse, {
      version: '1.12.0',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        classes: {
          'ui-slider': 'ui-corner-all',
          'ui-slider-handle': 'ui-corner-all',
          'ui-slider-range': 'ui-corner-all ui-widget-header',
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass('ui-slider ui-slider-' + this.orientation, 'ui-widget ui-widget-content'),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find('.ui-slider-handle'),
          o = "<span tabindex='0'></span>",
          a = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o);
        (this.handles = n.add(t(a.join('')).appendTo(this.element))),
          this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default'),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data('ui-slider-handle-index', e);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(this.range, 'ui-slider-range-min ui-slider-range-max'),
                this.range.css({ left: '', bottom: '' }))
              : ((this.range = t('<div>').appendTo(this.element)), this._addClass(this.range, 'ui-slider-range')),
            ('min' === e.range || 'max' === e.range) && this._addClass(this.range, 'ui-slider-range-' + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this,
          u = this.options;
        return u.disabled
          ? !1
          : ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - c.values(e));
              (n > i || (n === i && (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((n = i), (o = t(this)), (a = e));
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, 'ui-state-active'),
                o.trigger('focus'),
                (h = o.offset()),
                (l = !t(e.target).parents().addBack().is('.ui-slider-handle')),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - h.left - o.width() / 2,
                      top:
                        e.pageY -
                        h.top -
                        o.height() / 2 -
                        (parseInt(o.css('borderTopWidth'), 10) || 0) -
                        (parseInt(o.css('borderBottomWidth'), 10) || 0) +
                        (parseInt(o.css('marginTop'), 10) || 0),
                    }),
                this.handles.hasClass('ui-state-hover') || this._slide(e, a, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, 'ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation = 'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          'horizontal' === this.orientation
            ? ((e = this.elementSize.width),
              (i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          'vertical' === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
        return (
          this._hasMultipleValues() && ((s.value = void 0 !== e ? e : this.values(t)), (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger('start', t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values();
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger('slide', t, this._uiHash(e, i, a))),
            s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
      },
      _stop: function (t, e) {
        this._trigger('stop', t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e), this._trigger('change', t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)), this._refreshValue(), this._change(null, 0), void 0)
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)), this._refreshValue(), this._change(null, e), void 0
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ('range' === e &&
            this.options.range === !0 &&
            ('min' === i
              ? ((this.options.value = this._values(0)), (this.options.values = null))
              : 'max' === i &&
                ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this._removeClass('ui-slider-horizontal ui-slider-vertical')._addClass('ui-slider-' + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css('horizontal' === i ? 'bottom' : 'left', '');
            break;
          case 'value':
            (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
            break;
          case 'values':
            for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
            this._animateOff = !1;
            break;
          case 'step':
          case 'min':
          case 'max':
            (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
            break;
          case 'range':
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, 'ui-state-disabled', !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length) return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
        (t = s + e), t > this.options.max && (t -= i), (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
      },
      _precisionOf: function (t) {
        var e = '' + t,
          i = e.indexOf('.');
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        'vertical' === t && this.range.css({ width: '', left: '' }),
          'horizontal' === t && this.range.css({ height: '', bottom: '' });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          c = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()))),
                (c['horizontal' === h.orientation ? 'left' : 'bottom'] = i + '%'),
                t(this).stop(1, 1)[l ? 'animate' : 'css'](c, r.animate),
                h.options.range === !0 &&
                  ('horizontal' === h.orientation
                    ? (0 === s && h.range.stop(1, 1)[l ? 'animate' : 'css']({ left: i + '%' }, r.animate),
                      1 === s &&
                        h.range[l ? 'animate' : 'css']({ width: i - e + '%' }, { queue: !1, duration: r.animate }))
                    : (0 === s && h.range.stop(1, 1)[l ? 'animate' : 'css']({ bottom: i + '%' }, r.animate),
                      1 === s &&
                        h.range[l ? 'animate' : 'css']({ height: i - e + '%' }, { queue: !1, duration: r.animate }))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (c['horizontal' === this.orientation ? 'left' : 'bottom'] = i + '%'),
            this.handle.stop(1, 1)[l ? 'animate' : 'css'](c, r.animate),
            'min' === a &&
              'horizontal' === this.orientation &&
              this.range.stop(1, 1)[l ? 'animate' : 'css']({ width: i + '%' }, r.animate),
            'max' === a &&
              'horizontal' === this.orientation &&
              this.range.stop(1, 1)[l ? 'animate' : 'css']({ width: 100 - i + '%' }, r.animate),
            'min' === a &&
              'vertical' === this.orientation &&
              this.range.stop(1, 1)[l ? 'animate' : 'css']({ height: i + '%' }, r.animate),
            'max' === a &&
              'vertical' === this.orientation &&
              this.range.stop(1, 1)[l ? 'animate' : 'css']({ height: 100 - i + '%' }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data('ui-slider-handle-index');
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, 'ui-state-active'),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step), (s = n = this._hasMultipleValues() ? this.values(a) : this.value()), e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o);
          }
          this._slide(e, a, n);
        },
        keyup: function (e) {
          var i = t(e.target).data('ui-slider-handle-index');
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, 'ui-state-active'));
        },
      },
    }),
    t.widget('ui.sortable', t.ui.mouse, {
      version: '1.12.0',
      widgetEventPrefix: 'sort',
      ready: !1,
      options: {
        appendTo: 'parent',
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        items: '> *',
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: 'default',
        tolerance: 'intersect',
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return t >= e && e + i > t;
      },
      _isFloating: function (t) {
        return /left|right/.test(t.css('float')) || /inline|table-cell/.test(t.css('display'));
      },
      _create: function () {
        (this.containerCache = {}),
          this._addClass('ui-sortable'),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), 'handle' === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        var e = this;
        this._removeClass(this.element.find('.ui-sortable-handle'), 'ui-sortable-handle'),
          t.each(this.items, function () {
            e._addClass(
              this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item,
              'ui-sortable-handle'
            );
          });
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + '-item');
        return this;
      },
      _mouseCapture: function (e, i) {
        var s = null,
          n = !1,
          o = this;
        return this.reverting
          ? !1
          : this.options.disabled || 'static' === this.options.type
          ? !1
          : (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + '-item') === o ? ((s = t(this)), !1) : void 0;
              }),
            t.data(e.target, o.widgetName + '-item') === o && (s = t(e.target)),
            s
              ? !this.options.handle ||
                i ||
                (t(this.options.handle, s)
                  .find('*')
                  .addBack()
                  .each(function () {
                    this === e.target && (n = !0);
                  }),
                n)
                ? ((this.currentItem = s), this._removeCurrentsFromItems(), !0)
                : !1
              : !1);
      },
      _mouseStart: function (e, i, s) {
        var n,
          o,
          a = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
          t.extend(this.offset, {
            click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css('position', 'absolute'),
          (this.cssPosition = this.helper.css('position')),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
          (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          a.containment && this._setContainment(),
          a.cursor &&
            'auto' !== a.cursor &&
            ((o = this.document.find('body')),
            (this.storedCursor = o.css('cursor')),
            o.css('cursor', a.cursor),
            (this.storedStylesheet = t('<style>*{ cursor: ' + a.cursor + ' !important; }</style>').appendTo(o))),
          a.opacity &&
            (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')),
            this.helper.css('opacity', a.opacity)),
          a.zIndex &&
            (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')),
            this.helper.css('zIndex', a.zIndex)),
          this.scrollParent[0] !== this.document[0] &&
            'HTML' !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger('start', e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s)
        )
          for (n = this.containers.length - 1; n >= 0; n--)
            this.containers[n]._trigger('activate', e, this._uiHash(this));
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this._addClass(this.helper, 'ui-sortable-helper'),
          this._mouseDrag(e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo('absolute'),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== this.document[0] && 'HTML' !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
                  this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed)
                    : e.pageX - this.overflowOffset.left < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed))
                : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                    ? (r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed))
                    : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity &&
                      (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
                  e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                    ? (r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed))
                    : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity &&
                      (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
              r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo('absolute'),
            (this.options.axis && 'y' === this.options.axis) || (this.helper[0].style.left = this.position.left + 'px'),
            (this.options.axis && 'x' === this.options.axis) || (this.helper[0].style.top = this.position.top + 'px'),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((s = this.items[i]),
            (n = s.item[0]),
            (o = this._intersectsWithPointer(s)),
            o &&
              s.instance === this.currentContainer &&
              n !== this.currentItem[0] &&
              this.placeholder[1 === o ? 'next' : 'prev']()[0] !== n &&
              !t.contains(this.placeholder[0], n) &&
              ('semi-dynamic' === this.options.type ? !t.contains(this.element[0], n) : !0))
          ) {
            if (
              ((this.direction = 1 === o ? 'down' : 'up'),
              'pointer' !== this.options.tolerance && !this._intersectsWithSides(s))
            )
              break;
            this._rearrange(e, s), this._trigger('change', e, this._uiHash());
            break;
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger('sort', e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (e, i) {
        if (e) {
          if ((t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert)) {
            var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
            (o && 'x' !== o) ||
              (a.left =
                n.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
              (o && 'y' !== o) ||
                (a.top =
                  n.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                s._clear(e);
              });
          } else this._clear(e, i);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            'original' === this.options.helper
              ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, 'ui-sortable-helper'))
              : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger('deactivate', null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger('out', null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(e.expression || /(.+)[\-=_](.+)/);
            i && s.push((e.key || i[1] + '[]') + '=' + (e.key && e.expression ? i[1] : i[2]));
          }),
          !s.length && e.key && s.push(e.key + '='),
          s.join('&')
        );
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || 'id') || '');
          }),
          s
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = 'x' === this.options.axis || (s + l > r && h > s + l),
          d = 'y' === this.options.axis || (e + c > o && a > e + c),
          p = u && d;
        return 'pointer' === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ('pointer' !== this.options.tolerance &&
            this.helperProportions[this.floating ? 'width' : 'height'] > t[this.floating ? 'width' : 'height'])
          ? p
          : e + this.helperProportions.width / 2 > o &&
              a > i - this.helperProportions.width / 2 &&
              s + this.helperProportions.height / 2 > r &&
              h > n - this.helperProportions.height / 2;
      },
      _intersectsWithPointer: function (t) {
        var e,
          i,
          s =
            'x' === this.options.axis ||
            this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n =
            'y' === this.options.axis ||
            this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;
        return o
          ? ((e = this._getDragVerticalDirection()),
            (i = this._getDragHorizontalDirection()),
            this.floating ? ('right' === i || 'down' === e ? 2 : 1) : e && ('down' === e ? 2 : 1))
          : !1;
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();
        return this.floating && n
          ? ('right' === n && i) || ('left' === n && !i)
          : s && (('down' === s && e) || ('up' === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? 'down' : 'up');
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? 'right' : 'left');
      },
      refresh: function (t) {
        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
      },
      _getItemsAsjQuery: function (e) {
        function i() {
          r.push(this);
        }
        var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith();
        if (l && e)
          for (s = l.length - 1; s >= 0; s--)
            for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--)
              (a = t.data(o[n], this.widgetFullName)),
                a &&
                  a !== this &&
                  !a.options.disabled &&
                  h.push([
                    t.isFunction(a.options.items)
                      ? a.options.items.call(a.element)
                      : t(a.options.items, a.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
                    a,
                  ]);
        for (
          h.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
              : t(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
            this,
          ]),
            s = h.length - 1;
          s >= 0;
          s--
        )
          h[s][0].each(i);
        return t(r);
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(':data(' + this.widgetName + '-item)');
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (e) {
        (this.items = []), (this.containers = [this]);
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this.items,
          u = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, { item: this.currentItem })
                : t(this.options.items, this.element),
              this,
            ],
          ],
          d = this._connectWith();
        if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
            for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)
              (o = t.data(n[s], this.widgetFullName)),
                o &&
                  o !== this &&
                  !o.options.disabled &&
                  (u.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, { item: this.currentItem })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--)
          for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
            (h = t(r[s])),
              h.data(this.widgetName + '-item', a),
              c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 });
      },
      refreshPositions: function (e) {
        (this.floating = this.items.length ? 'x' === this.options.axis || this._isFloating(this.items[0].item) : !1),
          this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var i, s, n, o;
        for (i = this.items.length - 1; i >= 0; i--)
          (s = this.items[i]),
            (s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0]) ||
              ((n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item),
              e || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
              (o = n.offset()),
              (s.left = o.left),
              (s.top = o.top));
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (o = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width = this.containers[i].element.outerWidth()),
              (this.containers[i].containerCache.height = this.containers[i].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (e) {
        e = e || this;
        var i,
          s = e.options;
        (s.placeholder && s.placeholder.constructor !== String) ||
          ((i = s.placeholder),
          (s.placeholder = {
            element: function () {
              var s = e.currentItem[0].nodeName.toLowerCase(),
                n = t('<' + s + '>', e.document[0]);
              return (
                e
                  ._addClass(n, 'ui-sortable-placeholder', i || e.currentItem[0].className)
                  ._removeClass(n, 'ui-sortable-helper'),
                'tbody' === s
                  ? e._createTrPlaceholder(e.currentItem.find('tr').eq(0), t('<tr>', e.document[0]).appendTo(n))
                  : 'tr' === s
                  ? e._createTrPlaceholder(e.currentItem, n)
                  : 'img' === s && n.attr('src', e.currentItem.attr('src')),
                i || n.css('visibility', 'hidden'),
                n
              );
            },
            update: function (t, n) {
              (!i || s.forcePlaceholderSize) &&
                (n.height() ||
                  n.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css('paddingTop') || 0, 10) -
                      parseInt(e.currentItem.css('paddingBottom') || 0, 10)
                  ),
                n.width() ||
                  n.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css('paddingLeft') || 0, 10) -
                      parseInt(e.currentItem.css('paddingRight') || 0, 10)
                  ));
            },
          })),
          (e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem))),
          e.currentItem.after(e.placeholder),
          s.placeholder.update(e, e.placeholder);
      },
      _createTrPlaceholder: function (e, i) {
        var s = this;
        e.children().each(function () {
          t('<td>&#160;</td>', s.document[0])
            .attr('colspan', t(this).attr('colspan') || 1)
            .appendTo(i);
        });
      },
      _contactContainers: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d = null,
          p = null;
        for (i = this.containers.length - 1; i >= 0; i--)
          if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
            if (this._intersectsWith(this.containers[i].containerCache)) {
              if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
              (d = this.containers[i]), (p = i);
            } else
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger('out', e, this._uiHash(this)),
                (this.containers[i].containerCache.over = 0));
        if (d)
          if (1 === this.containers.length)
            this.containers[p].containerCache.over ||
              (this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1));
          else {
            for (
              n = 1e4,
                o = null,
                c = d.floating || this._isFloating(this.currentItem),
                a = c ? 'left' : 'top',
                r = c ? 'width' : 'height',
                u = c ? 'pageX' : 'pageY',
                s = this.items.length - 1;
              s >= 0;
              s--
            )
              t.contains(this.containers[p].element[0], this.items[s].item[0]) &&
                this.items[s].item[0] !== this.currentItem[0] &&
                ((h = this.items[s].item.offset()[a]),
                (l = !1),
                e[u] - h > this.items[s][r] / 2 && (l = !0),
                n > Math.abs(e[u] - h) &&
                  ((n = Math.abs(e[u] - h)), (o = this.items[s]), (this.direction = l ? 'up' : 'down')));
            if (!o && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[p])
              return (
                this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger('over', e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1)),
                void 0
              );
            o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
              this._trigger('change', e, this._uiHash()),
              this.containers[p]._trigger('change', e, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(this.currentContainer, this.placeholder),
              this.containers[p]._trigger('over', e, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1);
          }
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : 'clone' === i.helper
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          s.parents('body').length ||
            t('parent' !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
          s[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css('position'),
              top: this.currentItem.css('top'),
              left: this.currentItem.css('left'),
            }),
          (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
          (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
          s
        );
      },
      _adjustOffsetFromHelper: function (e) {
        'string' == typeof e && (e = e.split(' ')),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          'left' in e && (this.offset.click.left = e.left + this.margins.left),
          'right' in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
          'top' in e && (this.offset.click.top = e.top + this.margins.top),
          'bottom' in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === this.document[0].body ||
            (this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top: e.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ('relative' === this.cssPosition) {
          var t = this.currentItem.position();
          return {
            top: t.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
            left: t.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
          top: parseInt(this.currentItem.css('marginTop'), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options;
        'parent' === n.containment && (n.containment = this.helper[0].parentNode),
          ('document' === n.containment || 'window' === n.containment) &&
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              'document' === n.containment
                ? this.document.width()
                : this.window.width() - this.helperProportions.width - this.margins.left,
              ('document' === n.containment
                ? this.document.height() || document.body.parentNode.scrollHeight
                : this.window.height() || this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(n.containment) ||
            ((e = t(n.containment)[0]),
            (i = t(n.containment).offset()),
            (s = 'hidden' !== t(e).css('overflow')),
            (this.containment = [
              i.left +
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingLeft'), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) +
                (parseInt(t(e).css('paddingTop'), 10) || 0) -
                this.margins.top,
              i.left +
                (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css('borderLeftWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingRight'), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) -
                (parseInt(t(e).css('borderTopWidth'), 10) || 0) -
                (parseInt(t(e).css('paddingBottom'), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = 'absolute' === e ? 1 : -1,
          n =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * s +
            this.offset.parent.top * s -
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
          left:
            i.left +
            this.offset.relative.left * s +
            this.offset.parent.left * s -
            ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s,
        };
      },
      _generatePosition: function (e) {
        var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
        return (
          'relative' !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            n.grid &&
              ((i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1]),
              (a = this.containment
                ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - n.grid[1]
                  : i + n.grid[1]
                : i),
              (s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0]),
              (o = this.containment
                ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2]
                  ? s
                  : s - this.offset.click.left >= this.containment[0]
                  ? s - n.grid[0]
                  : s + n.grid[0]
                : s))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              'down' === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        function i(t, e, i) {
          return function (s) {
            i._trigger(t, s, e._uiHash(e));
          };
        }
        this.reverting = !1;
        var s,
          n = [];
        if (
          (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (s in this._storedCSS)
            ('auto' === this._storedCSS[s] || 'static' === this._storedCSS[s]) && (this._storedCSS[s] = '');
          this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, 'ui-sortable-helper');
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !e &&
            n.push(function (t) {
              this._trigger('receive', t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper')[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              n.push(function (t) {
                this._trigger('update', t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (n.push(function (t) {
                  this._trigger('remove', t, this._uiHash());
                }),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger('receive', e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                n.push(
                  function (t) {
                    return function (e) {
                      t._trigger('update', e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            s = this.containers.length - 1;
          s >= 0;
          s--
        )
          e || n.push(i('deactivate', this, this.containers[s])),
            this.containers[s].containerCache.over &&
              (n.push(i('out', this, this.containers[s])), (this.containers[s].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()),
          this._storedOpacity && this.helper.css('opacity', this._storedOpacity),
          this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex),
          (this.dragging = !1),
          e || this._trigger('beforeStop', t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null)),
          !e)
        ) {
          for (s = 0; n.length > s; s++) n[s].call(this, t);
          this._trigger('stop', t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
      },
      _uiHash: function (e) {
        var i = e || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null,
        };
      },
    }),
    t.widget('ui.spinner', {
      version: '1.12.0',
      defaultElement: '<input>',
      widgetEventPrefix: 'spin',
      options: {
        classes: { 'ui-spinner': 'ui-corner-all', 'ui-spinner-down': 'ui-corner-br', 'ui-spinner-up': 'ui-corner-tr' },
        culture: null,
        icons: { down: 'ui-icon-triangle-1-s', up: 'ui-icon-triangle-1-n' },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption('max', this.options.max),
          this._setOption('min', this.options.min),
          this._setOption('step', this.options.step),
          '' !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete');
            },
          });
      },
      _getCreateOptions: function () {
        var e = this._super(),
          i = this.element;
        return (
          t.each(['min', 'max', 'step'], function (t, s) {
            var n = i.attr(s);
            null != n && n.length && (e[s] = n);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: '_stop',
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() && this._trigger('change', t),
              void 0);
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        'mousedown .ui-spinner-button': function (e) {
          function i() {
            var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
            e ||
              (this.element.trigger('focus'),
              (this.previous = s),
              this._delay(function () {
                this.previous = s;
              }));
          }
          var s;
          (s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, e);
        },
        'mouseup .ui-spinner-button': '_stop',
        'mouseenter .ui-spinner-button': function (e) {
          return t(e.currentTarget).hasClass('ui-state-active')
            ? this._start(e) === !1
              ? !1
              : (this._repeat(null, t(e.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, e), void 0)
            : void 0;
        },
        'mouseleave .ui-spinner-button': '_stop',
      },
      _enhance: function () {
        this.uiSpinner = this.element.attr('autocomplete', 'off').wrap('<span>').parent().append('<a></a><a></a>');
      },
      _draw: function () {
        this._enhance(),
          this._addClass(this.uiSpinner, 'ui-spinner', 'ui-widget ui-widget-content'),
          this._addClass('ui-spinner-input'),
          this.element.attr('role', 'spinbutton'),
          (this.buttons = this.uiSpinner
            .children('a')
            .attr('tabIndex', -1)
            .attr('aria-hidden', !0)
            .button({ classes: { 'ui-button': '' } })),
          this._removeClass(this.buttons, 'ui-corner-all'),
          this._addClass(this.buttons.first(), 'ui-spinner-button ui-spinner-up'),
          this._addClass(this.buttons.last(), 'ui-spinner-button ui-spinner-down'),
          this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            this.uiSpinner.height() > 0 &&
            this.uiSpinner.height(this.uiSpinner.height());
      },
      _keydown: function (e) {
        var i = this.options,
          s = t.ui.keyCode;
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0;
          case s.DOWN:
            return this._repeat(null, -1, e), !0;
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _start: function (t) {
        return this.spinning || this._trigger('start', t) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1;
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && this._trigger('spin', e, { value: i }) === !1) || (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i ? (t.isFunction(i) ? i(e) : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)) : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
      },
      _precisionOf: function (t) {
        var e = '' + t,
          i = e.indexOf('.');
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options;
        return (
          (e = null !== s.min ? s.min : 0),
          (i = t - e),
          (i = Math.round(i / s.step) * s.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger('stop', t));
      },
      _setOption: function (t, e) {
        var i, s, n;
        return 'culture' === t || 'numberFormat' === t
          ? ((i = this._parse(this.element.val())), (this.options[t] = e), this.element.val(this._format(i)), void 0)
          : (('max' === t || 'min' === t || 'step' === t) && 'string' == typeof e && (e = this._parse(e)),
            'icons' === t &&
              ((s = this.buttons.first().find('.ui-icon')),
              this._removeClass(s, null, this.options.icons.up),
              this._addClass(s, null, e.up),
              (n = this.buttons.last().find('.ui-icon')),
              this._removeClass(n, null, this.options.icons.down),
              this._addClass(n, null, e.down)),
            this._super(t, e),
            void 0);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, 'ui-state-disabled', !!t),
          this.element.prop('disabled', !!t),
          this.buttons.button(t ? 'disable' : 'enable');
      },
      _setOptions: r(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          'string' == typeof t &&
            '' !== t &&
            (t =
              window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
          '' === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return '' === t
          ? ''
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          'aria-valuemin': this.options.min,
          'aria-valuemax': this.options.max,
          'aria-valuenow': this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null === t ? !1 : t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        '' !== t && ((i = this._parse(t)), null !== i && (e || (i = this._adjustValue(i)), (t = this._format(i)))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element.prop('disabled', !1).removeAttr('autocomplete role aria-valuemin aria-valuemax aria-valuenow'),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: r(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() && (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: r(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: r(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: r(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
      },
      widget: function () {
        return this.uiSpinner;
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.spinner', t.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr('autocomplete', 'off')
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return '<span>';
        },
        _buttonHtml: function () {
          return '<a></a><a></a>';
        },
      }),
    t.ui.spinner,
    t.widget('ui.tabs', {
      version: '1.12.0',
      delay: 300,
      options: {
        active: null,
        classes: {
          'ui-tabs': 'ui-corner-all',
          'ui-tabs-nav': 'ui-corner-all',
          'ui-tabs-panel': 'ui-corner-bottom',
          'ui-tabs-tab': 'ui-corner-top',
        },
        collapsible: !1,
        event: 'click',
        heightStyle: 'content',
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _isLocal: (function () {
        var t = /#.*$/;
        return function (e) {
          var i, s;
          (i = e.href.replace(t, '')), (s = location.href.replace(t, ''));
          try {
            i = decodeURIComponent(i);
          } catch (n) {}
          try {
            s = decodeURIComponent(s);
          } catch (n) {}
          return e.hash.length > 1 && i === s;
        };
      })(),
      _create: function () {
        var e = this,
          i = this.options;
        (this.running = !1),
          this._addClass('ui-tabs', 'ui-widget ui-widget-content'),
          this._toggleClass('ui-tabs-collapsible', null, i.collapsible),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter('.ui-state-disabled'), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          (this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t()),
          this._refresh(),
          this.active.length && this.load(i.active);
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
        return (
          null === e &&
            (s &&
              this.tabs.each(function (i, n) {
                return t(n).attr('aria-controls') === s ? ((e = i), !1) : void 0;
              }),
            null === e && (e = this.tabs.index(this.tabs.filter('.ui-tabs-active'))),
            (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
          e !== !1 && ((e = this.tabs.index(this.tabs.eq(e))), -1 === e && (e = i ? !1 : 0)),
          !i && e === !1 && this.anchors.length && (e = 0),
          e
        );
      },
      _getCreateEventData: function () {
        return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
      },
      _tabKeydown: function (e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest('li'),
          s = this.tabs.index(i),
          n = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              s++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              (n = !1), s--;
              break;
            case t.ui.keyCode.END:
              s = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              s = 0;
              break;
            case t.ui.keyCode.SPACE:
              return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                this._activate(s === this.options.active ? !1 : s),
                void 0
              );
            default:
              return;
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (s = this._focusNextTab(s, n)),
            e.ctrlKey ||
              e.metaKey ||
              (i.attr('aria-selected', 'false'),
              this.tabs.eq(s).attr('aria-selected', 'true'),
              (this.activating = this._delay(function () {
                this.option('active', s);
              }, this.delay)));
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger('focus')));
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
          : void 0;
      },
      _findNextTab: function (e, i) {
        function s() {
          return e > n && (e = 0), 0 > e && (e = n), e;
        }
        for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); ) e = i ? e + 1 : e - 1;
        return e;
      },
      _focusNextTab: function (t, e) {
        return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger('focus'), t;
      },
      _setOption: function (t, e) {
        return 'active' === t
          ? (this._activate(e), void 0)
          : (this._super(t, e),
            'collapsible' === t &&
              (this._toggleClass('ui-tabs-collapsible', null, e), e || this.options.active !== !1 || this._activate(0)),
            'event' === t && this._setupEvents(e),
            'heightStyle' === t && this._setupHeightStyle(e),
            void 0);
      },
      _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : '';
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(':has(a[href])');
        (e.disabled = t.map(i.filter('.ui-state-disabled'), function (t) {
          return i.index(t);
        })),
          this._processTabs(),
          e.active !== !1 && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1))
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh();
      },
      _refresh: function () {
        this._setOptionDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs.not(this.active).attr({ 'aria-selected': 'false', 'aria-expanded': 'false', tabIndex: -1 }),
          this.panels.not(this._getPanelForTab(this.active)).hide().attr({ 'aria-hidden': 'true' }),
          this.active.length
            ? (this.active.attr({ 'aria-selected': 'true', 'aria-expanded': 'true', tabIndex: 0 }),
              this._addClass(this.active, 'ui-tabs-active', 'ui-state-active'),
              this._getPanelForTab(this.active).show().attr({ 'aria-hidden': 'false' }))
            : this.tabs.eq(0).attr('tabIndex', 0);
      },
      _processTabs: function () {
        var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
        (this.tablist = this._getList().attr('role', 'tablist')),
          this._addClass(this.tablist, 'ui-tabs-nav', 'ui-helper-reset ui-helper-clearfix ui-widget-header'),
          this.tablist
            .on('mousedown' + this.eventNamespace, '> li', function (e) {
              t(this).is('.ui-state-disabled') && e.preventDefault();
            })
            .on('focus' + this.eventNamespace, '.ui-tabs-anchor', function () {
              t(this).closest('li').is('.ui-state-disabled') && this.blur();
            }),
          (this.tabs = this.tablist.find('> li:has(a[href])').attr({ role: 'tab', tabIndex: -1 })),
          this._addClass(this.tabs, 'ui-tabs-tab', 'ui-state-default'),
          (this.anchors = this.tabs
            .map(function () {
              return t('a', this)[0];
            })
            .attr({ role: 'presentation', tabIndex: -1 })),
          this._addClass(this.anchors, 'ui-tabs-anchor'),
          (this.panels = t()),
          this.anchors.each(function (i, s) {
            var n,
              o,
              a,
              r = t(s).uniqueId().attr('id'),
              h = t(s).closest('li'),
              l = h.attr('aria-controls');
            e._isLocal(s)
              ? ((n = s.hash), (a = n.substring(1)), (o = e.element.find(e._sanitizeSelector(n))))
              : ((a = h.attr('aria-controls') || t({}).uniqueId()[0].id),
                (n = '#' + a),
                (o = e.element.find(n)),
                o.length || ((o = e._createPanel(a)), o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr('aria-live', 'polite')),
              o.length && (e.panels = e.panels.add(o)),
              l && h.data('ui-tabs-aria-controls', l),
              h.attr({ 'aria-controls': a, 'aria-labelledby': r }),
              o.attr('aria-labelledby', r);
          }),
          this.panels.attr('role', 'tabpanel'),
          this._addClass(this.panels, 'ui-tabs-panel', 'ui-widget-content'),
          i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
      },
      _getList: function () {
        return this.tablist || this.element.find('ol, ul').eq(0);
      },
      _createPanel: function (e) {
        return t('<div>').attr('id', e).data('ui-tabs-destroy', !0);
      },
      _setOptionDisabled: function (e) {
        var i, s, n;
        for (
          t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1)), n = 0;
          (s = this.tabs[n]);
          n++
        )
          (i = t(s)),
            e === !0 || -1 !== t.inArray(n, e)
              ? (i.attr('aria-disabled', 'true'), this._addClass(i, null, 'ui-state-disabled'))
              : (i.removeAttr('aria-disabled'), this._removeClass(i, null, 'ui-state-disabled'));
        (this.options.disabled = e),
          this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, e === !0);
      },
      _setupEvents: function (e) {
        var i = {};
        e &&
          t.each(e.split(' '), function (t, e) {
            i[e] = '_eventHandler';
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(!0, this.anchors, {
            click: function (t) {
              t.preventDefault();
            },
          }),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: '_tabKeydown' }),
          this._on(this.panels, { keydown: '_panelKeydown' }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (e) {
        var i,
          s = this.element.parent();
        'fill' === e
          ? ((i = s.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(':visible').each(function () {
              var e = t(this),
                s = e.css('position');
              'absolute' !== s && 'fixed' !== s && (i -= e.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
              })
              .css('overflow', 'auto'))
          : 'auto' === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, t(this).height('').height());
              })
              .height(i));
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest('li'),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          c = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h };
        e.preventDefault(),
          o.hasClass('ui-state-disabled') ||
            o.hasClass('ui-tabs-loading') ||
            this.running ||
            (a && !i.collapsible) ||
            this._trigger('beforeActivate', e, c) === !1 ||
            ((i.active = r ? !1 : this.tabs.index(o)),
            (this.active = a ? t() : o),
            this.xhr && this.xhr.abort(),
            l.length || h.length || t.error('jQuery UI Tabs: Mismatching fragment identifier.'),
            h.length && this.load(this.tabs.index(o), e),
            this._toggle(e, c));
      },
      _toggle: function (e, i) {
        function s() {
          (o.running = !1), o._trigger('activate', e, i);
        }
        function n() {
          o._addClass(i.newTab.closest('li'), 'ui-tabs-active', 'ui-state-active'),
            a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
        }
        var o = this,
          a = i.newPanel,
          r = i.oldPanel;
        (this.running = !0),
          r.length && this.options.hide
            ? this._hide(r, this.options.hide, function () {
                o._removeClass(i.oldTab.closest('li'), 'ui-tabs-active', 'ui-state-active'), n();
              })
            : (this._removeClass(i.oldTab.closest('li'), 'ui-tabs-active', 'ui-state-active'), r.hide(), n()),
          r.attr('aria-hidden', 'true'),
          i.oldTab.attr({ 'aria-selected': 'false', 'aria-expanded': 'false' }),
          a.length && r.length
            ? i.oldTab.attr('tabIndex', -1)
            : a.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr('tabIndex');
                })
                .attr('tabIndex', -1),
          a.attr('aria-hidden', 'false'),
          i.newTab.attr({ 'aria-selected': 'true', 'aria-expanded': 'true', tabIndex: 0 });
      },
      _activate: function (e) {
        var i,
          s = this._findActive(e);
        s[0] !== this.active[0] &&
          (s.length || (s = this.active),
          (i = s.find('.ui-tabs-anchor')[0]),
          this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
      },
      _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e);
      },
      _getIndex: function (e) {
        return (
          'string' == typeof e &&
            (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))),
          e
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.tablist.removeAttr('role').off(this.eventNamespace),
          this.anchors.removeAttr('role tabIndex').removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            t.data(this, 'ui-tabs-destroy')
              ? t(this).remove()
              : t(this).removeAttr(
                  'role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded'
                );
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data('ui-tabs-aria-controls');
            i ? e.attr('aria-controls', i).removeData('ui-tabs-aria-controls') : e.removeAttr('aria-controls');
          }),
          this.panels.show(),
          'content' !== this.options.heightStyle && this.panels.css('height', '');
      },
      enable: function (e) {
        var i = this.options.disabled;
        i !== !1 &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null;
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null;
                  }))),
          this._setOptionDisabled(i));
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (i !== !0) {
          if (void 0 === e) i = !0;
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e];
          }
          this._setOptionDisabled(i);
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var s = this,
          n = this.tabs.eq(e),
          o = n.find('.ui-tabs-anchor'),
          a = this._getPanelForTab(n),
          r = { tab: n, panel: a },
          h = function (t, e) {
            'abort' === e && s.panels.stop(!1, !0),
              s._removeClass(n, 'ui-tabs-loading'),
              a.removeAttr('aria-busy'),
              t === s.xhr && delete s.xhr;
          };
        this._isLocal(o[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
          this.xhr &&
            'canceled' !== this.xhr.statusText &&
            (this._addClass(n, 'ui-tabs-loading'),
            a.attr('aria-busy', 'true'),
            this.xhr
              .done(function (t, e, n) {
                setTimeout(function () {
                  a.html(t), s._trigger('load', i, r), h(n, e);
                }, 1);
              })
              .fail(function (t, e) {
                setTimeout(function () {
                  h(t, e);
                }, 1);
              })));
      },
      _ajaxSettings: function (e, i, s) {
        var n = this;
        return {
          url: e.attr('href'),
          beforeSend: function (e, o) {
            return n._trigger('beforeLoad', i, t.extend({ jqXHR: e, ajaxSettings: o }, s));
          },
        };
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr('aria-controls');
        return this.element.find(this._sanitizeSelector('#' + i));
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.tabs', t.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, 'ui-tab');
        },
      }),
    t.ui.tabs,
    t.widget('ui.tooltip', {
      version: '1.12.0',
      options: {
        classes: { 'ui-tooltip': 'ui-corner-all ui-widget-shadow' },
        content: function () {
          var e = t(this).attr('title') || '';
          return t('<a>').text(e).html();
        },
        hide: !0,
        items: '[title]:not([disabled])',
        position: { my: 'left top+15', at: 'left bottom', collision: 'flipfit flip' },
        show: !0,
        track: !1,
        close: null,
        open: null,
      },
      _addDescribedBy: function (e, i) {
        var s = (e.attr('aria-describedby') || '').split(/\s+/);
        s.push(i), e.data('ui-tooltip-id', i).attr('aria-describedby', t.trim(s.join(' ')));
      },
      _removeDescribedBy: function (e) {
        var i = e.data('ui-tooltip-id'),
          s = (e.attr('aria-describedby') || '').split(/\s+/),
          n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1),
          e.removeData('ui-tooltip-id'),
          (s = t.trim(s.join(' '))),
          s ? e.attr('aria-describedby', s) : e.removeAttr('aria-describedby');
      },
      _create: function () {
        this._on({ mouseover: 'open', focusin: 'open' }),
          (this.tooltips = {}),
          (this.parents = {}),
          (this.liveRegion = t('<div>')
            .attr({ role: 'log', 'aria-live': 'assertive', 'aria-relevant': 'additions' })
            .appendTo(this.document[0].body)),
          this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible'),
          (this.disabledTitles = t([]));
      },
      _setOption: function (e, i) {
        var s = this;
        this._super(e, i),
          'content' === e &&
            t.each(this.tooltips, function (t, e) {
              s._updateContent(e.element);
            });
      },
      _setOptionDisabled: function (t) {
        this[t ? '_disable' : '_enable']();
      },
      _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event('blur');
          (n.target = n.currentTarget = s.element[0]), e.close(n, !0);
        }),
          (this.disabledTitles = this.disabledTitles.add(
            this.element
              .find(this.options.items)
              .addBack()
              .filter(function () {
                var e = t(this);
                return e.is('[title]') ? e.data('ui-tooltip-title', e.attr('title')).removeAttr('title') : void 0;
              })
          ));
      },
      _enable: function () {
        this.disabledTitles.each(function () {
          var e = t(this);
          e.data('ui-tooltip-title') && e.attr('title', e.data('ui-tooltip-title'));
        }),
          (this.disabledTitles = t([]));
      },
      open: function (e) {
        var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
        s.length &&
          !s.data('ui-tooltip-id') &&
          (s.attr('title') && s.data('ui-tooltip-title', s.attr('title')),
          s.data('ui-tooltip-open', !0),
          e &&
            'mouseover' === e.type &&
            s.parents().each(function () {
              var e,
                s = t(this);
              s.data('ui-tooltip-open') && ((e = t.Event('blur')), (e.target = e.currentTarget = this), i.close(e, !0)),
                s.attr('title') &&
                  (s.uniqueId(), (i.parents[this.id] = { element: this, title: s.attr('title') }), s.attr('title', ''));
            }),
          this._registerCloseHandlers(e, s),
          this._updateContent(s, e));
      },
      _updateContent: function (t, e) {
        var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;
        return 'string' == typeof s || s.nodeType || s.jquery
          ? this._open(e, t, s)
          : ((i = s.call(t[0], function (i) {
              n._delay(function () {
                t.data('ui-tooltip-open') && (e && (e.type = o), this._open(e, t, i));
              });
            })),
            i && this._open(e, t, i),
            void 0);
      },
      _open: function (e, i, s) {
        function n(t) {
          (l.of = t), a.is(':hidden') || a.position(l);
        }
        var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position);
        if (s) {
          if ((o = this._find(i))) return o.tooltip.find('.ui-tooltip-content').html(s), void 0;
          i.is('[title]') && (e && 'mouseover' === e.type ? i.attr('title', '') : i.removeAttr('title')),
            (o = this._tooltip(i)),
            (a = o.tooltip),
            this._addDescribedBy(i, a.attr('id')),
            a.find('.ui-tooltip-content').html(s),
            this.liveRegion.children().hide(),
            (h = t('<div>').html(a.find('.ui-tooltip-content').html())),
            h.removeAttr('name').find('[name]').removeAttr('name'),
            h.removeAttr('id').find('[id]').removeAttr('id'),
            h.appendTo(this.liveRegion),
            this.options.track && e && /^mouse/.test(e.type)
              ? (this._on(this.document, { mousemove: n }), n(e))
              : a.position(t.extend({ of: i }, this.options.position)),
            a.hide(),
            this._show(a, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (r = this.delayedShow =
                setInterval(function () {
                  a.is(':visible') && (n(l.of), clearInterval(r));
                }, t.fx.interval)),
            this._trigger('open', e, { tooltip: a });
        }
      },
      _registerCloseHandlers: function (e, i) {
        var s = {
          keyup: function (e) {
            if (e.keyCode === t.ui.keyCode.ESCAPE) {
              var s = t.Event(e);
              (s.currentTarget = i[0]), this.close(s, !0);
            }
          },
        };
        i[0] !== this.element[0] &&
          (s.remove = function () {
            this._removeTooltip(this._find(i).tooltip);
          }),
          (e && 'mouseover' !== e.type) || (s.mouseleave = 'close'),
          (e && 'focusin' !== e.type) || (s.focusout = 'close'),
          this._on(!0, i, s);
      },
      close: function (e) {
        var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);
        return o
          ? ((i = o.tooltip),
            o.closing ||
              (clearInterval(this.delayedShow),
              n.data('ui-tooltip-title') && !n.attr('title') && n.attr('title', n.data('ui-tooltip-title')),
              this._removeDescribedBy(n),
              (o.hiding = !0),
              i.stop(!0),
              this._hide(i, this.options.hide, function () {
                s._removeTooltip(t(this));
              }),
              n.removeData('ui-tooltip-open'),
              this._off(n, 'mouseleave focusout keyup'),
              n[0] !== this.element[0] && this._off(n, 'remove'),
              this._off(this.document, 'mousemove'),
              e &&
                'mouseleave' === e.type &&
                t.each(this.parents, function (e, i) {
                  t(i.element).attr('title', i.title), delete s.parents[e];
                }),
              (o.closing = !0),
              this._trigger('close', e, { tooltip: i }),
              o.hiding || (o.closing = !1)),
            void 0)
          : (n.removeData('ui-tooltip-open'), void 0);
      },
      _tooltip: function (e) {
        var i = t('<div>').attr('role', 'tooltip'),
          s = t('<div>').appendTo(i),
          n = i.uniqueId().attr('id');
        return (
          this._addClass(s, 'ui-tooltip-content'),
          this._addClass(i, 'ui-tooltip', 'ui-widget ui-widget-content'),
          i.appendTo(this._appendTo(e)),
          (this.tooltips[n] = { element: e, tooltip: i })
        );
      },
      _find: function (t) {
        var e = t.data('ui-tooltip-id');
        return e ? this.tooltips[e] : null;
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr('id')];
      },
      _appendTo: function (t) {
        var e = t.closest('.ui-front, dialog');
        return e.length || (e = this.document[0].body), e;
      },
      _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event('blur'),
            o = s.element;
          (n.target = n.currentTarget = o[0]),
            e.close(n, !0),
            t('#' + i).remove(),
            o.data('ui-tooltip-title') &&
              (o.attr('title') || o.attr('title', o.data('ui-tooltip-title')), o.removeData('ui-tooltip-title'));
        }),
          this.liveRegion.remove();
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget('ui.tooltip', t.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments);
          return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
        },
      }),
    t.ui.tooltip;
});

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.3
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
!(function (t) {
  'use strict';
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    }),
    t.requestAnimationFrame ||
      (function () {
        for (var e = ['webkit', 'moz'], i = 0; i < e.length && !t.requestAnimationFrame; ++i) {
          var n = e[i];
          (t.requestAnimationFrame = t[n + 'RequestAnimationFrame']),
            (t.cancelAnimationFrame = t[n + 'CancelAnimationFrame'] || t[n + 'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) {
          var o = 0;
          (t.requestAnimationFrame = function (t) {
            var e = Date.now(),
              i = Math.max(o + 16, e);
            return setTimeout(function () {
              t((o = i));
            }, i - e);
          }),
            (t.cancelAnimationFrame = clearTimeout);
        }
      })();
  var e,
    i,
    n = (function () {
      if (!t.getComputedStyle) return !1;
      var e,
        i = document.createElement('p'),
        n = {
          webkitTransform: '-webkit-transform',
          OTransform: '-o-transform',
          msTransform: '-ms-transform',
          MozTransform: '-moz-transform',
          transform: 'transform',
        };
      for (var o in ((document.body || document.documentElement).insertBefore(i, null), n))
        void 0 !== i.style[o] &&
          ((i.style[o] = 'translate3d(1px,1px,1px)'), (e = t.getComputedStyle(i).getPropertyValue(n[o])));
      return (document.body || document.documentElement).removeChild(i), void 0 !== e && e.length > 0 && 'none' !== e;
    })(),
    o = navigator.userAgent.toLowerCase().indexOf('android') > -1,
    a = /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream,
    r = !!t.opera,
    s = /Edge\/\d+/.test(navigator.userAgent),
    l = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
    c = !!Function('/*@cc_on return document.documentMode===10@*/')(),
    m = document.all && !t.atob;
  function h() {
    (e = t.innerWidth || document.documentElement.clientWidth),
      (i = t.innerHeight || document.documentElement.clientHeight);
  }
  h();
  var p = [],
    u = (function () {
      var t = 0;
      return function (e, i) {
        var n;
        if (
          ((this.$item = e),
          (this.defaults = {
            type: 'scroll',
            speed: 0.5,
            imgSrc: null,
            imgWidth: null,
            imgHeight: null,
            enableTransform: !0,
            elementInViewport: null,
            zIndex: -100,
            noAndroid: !1,
            noIos: !0,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          }),
          (n = JSON.parse(this.$item.getAttribute('data-jarallax') || '{}')),
          (this.options = this.extend({}, this.defaults, n, i)),
          !((o && this.options.noAndroid) || (a && this.options.noIos)))
        ) {
          this.options.speed = Math.min(2, Math.max(-1, parseFloat(this.options.speed)));
          var m = this.options.elementInViewport;
          m && 'object' == typeof m && void 0 !== m.length && (m = m[0]),
            !m instanceof Element && (m = null),
            (this.options.elementInViewport = m),
            (this.instanceID = t++),
            (this.image = {
              src: this.options.imgSrc || null,
              $container: null,
              $item: null,
              width: this.options.imgWidth || null,
              height: this.options.imgHeight || null,
              useImgTag: a || o || r || l || c || s,
            }),
            this.initImg() && this.init();
        }
      };
    })();
  function d(t, e, i) {
    t.addEventListener
      ? t.addEventListener(e, i)
      : t.attachEvent('on' + e, function () {
          i.call(t);
        });
  }
  function g(e) {
    t.requestAnimationFrame(function () {
      'scroll' !== e.type && h();
      for (var t = 0, i = p.length; t < i; t++)
        'scroll' !== e.type && (p[t].coverImage(), p[t].clipContainer()), p[t].onScroll();
    });
  }
  (u.prototype.css = function (e, i) {
    if ('string' == typeof i) return t.getComputedStyle ? t.getComputedStyle(e).getPropertyValue(i) : e.style[i];
    for (var n in (i.transform && (i.WebkitTransform = i.MozTransform = i.transform), i)) e.style[n] = i[n];
    return e;
  }),
    (u.prototype.extend = function (t) {
      t = t || {};
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
      return t;
    }),
    (u.prototype.initImg = function () {
      return (
        null === this.image.src &&
          (this.image.src = this.css(this.$item, 'background-image')
            .replace(/^url\(['"]?/g, '')
            .replace(/['"]?\)$/g, '')),
        !(!this.image.src || 'none' === this.image.src)
      );
    }),
    (u.prototype.init = function () {
      var t = this,
        e = {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
        },
        i = { position: 'fixed' };
      t.$item.setAttribute('data-jarallax-original-styles', t.$item.getAttribute('style')),
        'static' === t.css(t.$item, 'position') && t.css(t.$item, { position: 'relative' }),
        'auto' === t.css(t.$item, 'z-index') && t.css(t.$item, { zIndex: 0 }),
        (t.image.$container = document.createElement('div')),
        t.css(t.image.$container, e),
        t.css(t.image.$container, { visibility: 'hidden', 'z-index': t.options.zIndex }),
        t.image.$container.setAttribute('id', 'jarallax-container-' + t.instanceID),
        t.$item.appendChild(t.image.$container),
        t.image.useImgTag && n && t.options.enableTransform
          ? ((t.image.$item = document.createElement('img')),
            t.image.$item.setAttribute('src', t.image.src),
            (i = t.extend({ 'max-width': 'none' }, e, i)))
          : ((t.image.$item = document.createElement('div')),
            (i = t.extend(
              {
                'background-position': '50% 50%',
                'background-size': '100% auto',
                'background-repeat': 'no-repeat no-repeat',
                'background-image': 'url("' + t.image.src + '")',
              },
              e,
              i
            ))),
        m && (i.backgroundAttachment = 'fixed'),
        (t.parentWithTransform = 0);
      for (var o = t.$item; null !== o && o !== document && 0 === t.parentWithTransform; ) {
        var a = t.css(o, '-webkit-transform') || t.css(o, '-moz-transform') || t.css(o, 'transform');
        a &&
          'none' !== a &&
          ((t.parentWithTransform = 1), t.css(t.image.$container, { transform: 'translateX(0) translateY(0)' })),
          (o = o.parentNode);
      }
      function r() {
        t.coverImage(),
          t.clipContainer(),
          t.onScroll(!0),
          t.options.onInit && t.options.onInit.call(t),
          setTimeout(function () {
            t.$item &&
              t.css(t.$item, {
                'background-image': 'none',
                'background-attachment': 'scroll',
                'background-size': 'auto',
              });
          }, 0);
      }
      t.css(t.image.$item, i),
        t.image.$container.appendChild(t.image.$item),
        t.image.width && t.image.height
          ? r()
          : t.getImageSize(t.image.src, function (e, i) {
              (t.image.width = e), (t.image.height = i), r();
            }),
        p.push(t);
    }),
    (u.prototype.destroy = function () {
      for (var t = 0, e = p.length; t < e; t++)
        if (p[t].instanceID === this.instanceID) {
          p.splice(t, 1);
          break;
        }
      var i = this.$item.getAttribute('data-jarallax-original-styles');
      for (var n in (this.$item.removeAttribute('data-jarallax-original-styles'),
      'null' === i ? this.$item.removeAttribute('style') : this.$item.setAttribute('style', i),
      this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles),
      this.image.$container.parentNode.removeChild(this.image.$container),
      this.options.onDestroy && this.options.onDestroy.call(this),
      delete this.$item.jarallax,
      this))
        delete this[n];
    }),
    (u.prototype.getImageSize = function (t, e) {
      if (t && e) {
        var i = new Image();
        (i.onload = function () {
          e(i.width, i.height);
        }),
          (i.src = t);
      }
    }),
    (u.prototype.clipContainer = function () {
      if (!m) {
        var t = this.image.$container.getBoundingClientRect(),
          e = t.width,
          i = t.height;
        if (!this.$clipStyles)
          (this.$clipStyles = document.createElement('style')),
            this.$clipStyles.setAttribute('type', 'text/css'),
            this.$clipStyles.setAttribute('id', '#jarallax-clip-' + this.instanceID),
            (document.head || document.getElementsByTagName('head')[0]).appendChild(this.$clipStyles);
        var n = [
          '#jarallax-container-' + this.instanceID + ' {',
          '   clip: rect(0 ' + e + 'px ' + i + 'px 0);',
          '   clip: rect(0, ' + e + 'px, ' + i + 'px, 0);',
          '}',
        ].join('\n');
        this.$clipStyles.styleSheet ? (this.$clipStyles.styleSheet.cssText = n) : (this.$clipStyles.innerHTML = n);
      }
    }),
    (u.prototype.coverImage = function () {
      if (this.image.width && this.image.height) {
        var t = this.image.$container.getBoundingClientRect(),
          e = t.width,
          o = t.height,
          a = t.left,
          r = this.image.width,
          s = this.image.height,
          l = this.options.speed,
          c = 'scroll' === this.options.type || 'scroll-opacity' === this.options.type,
          m = 0,
          h = 0,
          p = o,
          u = 0,
          d = 0;
        c &&
          ((m = l < 0 ? l * Math.max(o, i) : l * (o + i)),
          l > 1 ? (p = Math.abs(m - i)) : l < 0 ? (p = m / l + Math.abs(m)) : (p += Math.abs(i - o) * (1 - l)),
          (m /= 2)),
          (h = (p * r) / s) < e && (p = ((h = e) * s) / r),
          (this.bgPosVerticalCenter = 0),
          !(c && p < i) || (n && this.options.enableTransform) || ((this.bgPosVerticalCenter = (i - p) / 2), (p = i)),
          c ? ((u = a + (e - h) / 2), (d = (i - p) / 2)) : ((u = (e - h) / 2), (d = (o - p) / 2)),
          n && this.options.enableTransform && this.parentWithTransform && (u -= a),
          (this.parallaxScrollDistance = m),
          this.css(this.image.$item, { width: h + 'px', height: p + 'px', marginLeft: u + 'px', marginTop: d + 'px' }),
          this.options.onCoverImage && this.options.onCoverImage.call(this);
      }
    }),
    (u.prototype.isVisible = function () {
      return this.isElementInViewport || !1;
    }),
    (u.prototype.onScroll = function (t) {
      if (this.image.width && this.image.height) {
        var o = this.$item.getBoundingClientRect(),
          a = o.top,
          r = o.height,
          s = { position: 'absolute', visibility: 'visible', backgroundPosition: '50% 50%' },
          l = o;
        if (
          (this.options.elementInViewport && (l = this.options.elementInViewport.getBoundingClientRect()),
          (this.isElementInViewport = l.bottom >= 0 && l.right >= 0 && l.top <= i && l.left <= e),
          t || this.isElementInViewport)
        ) {
          var c = Math.max(0, a),
            h = Math.max(0, r + a),
            p = Math.max(0, -a),
            u = Math.max(0, a + r - i),
            d = Math.max(0, r - (a + r - i)),
            g = Math.max(0, -a + i - r),
            f = 1 - (2 * (i - a)) / (i + r),
            y = 1;
          if (
            (r < i ? (y = 1 - (p || u) / r) : h <= i ? (y = h / i) : d <= i && (y = d / i),
            ('opacity' !== this.options.type &&
              'scale-opacity' !== this.options.type &&
              'scroll-opacity' !== this.options.type) ||
              ((s.transform = 'translate3d(0, 0, 0)'), (s.opacity = y)),
            'scale' === this.options.type || 'scale-opacity' === this.options.type)
          ) {
            var v = 1;
            this.options.speed < 0 ? (v -= this.options.speed * y) : (v += this.options.speed * (1 - y)),
              (s.transform = 'scale(' + v + ') translate3d(0, 0, 0)');
          }
          if ('scroll' === this.options.type || 'scroll-opacity' === this.options.type) {
            var x = this.parallaxScrollDistance * f;
            n && this.options.enableTransform
              ? (this.parentWithTransform && (x -= a), (s.transform = 'translate3d(0, ' + x + 'px, 0)'))
              : this.image.useImgTag
              ? (s.top = x + 'px')
              : (this.bgPosVerticalCenter && (x += this.bgPosVerticalCenter),
                (s.backgroundPosition = '50% ' + x + 'px')),
              (s.position = m ? 'absolute' : 'fixed');
          }
          this.css(this.image.$item, s),
            this.options.onScroll &&
              this.options.onScroll.call(this, {
                section: o,
                beforeTop: c,
                beforeTopEnd: h,
                afterTop: p,
                beforeBottom: u,
                beforeBottomEnd: d,
                afterBottom: g,
                visiblePercent: y,
                fromViewportCenter: f,
              });
        }
      }
    }),
    d(t, 'scroll', g),
    d(t, 'resize', g),
    d(t, 'orientationchange', g),
    d(t, 'load', g);
  var f = function (t) {
    ('object' == typeof HTMLElement
      ? t instanceof HTMLElement
      : t && 'object' == typeof t && null !== t && 1 === t.nodeType && 'string' == typeof t.nodeName) && (t = [t]);
    for (var e, i = arguments[1], n = Array.prototype.slice.call(arguments, 2), o = t.length, a = 0; a < o; a++)
      if (
        ('object' == typeof i || void 0 === i
          ? t[a].jarallax || (t[a].jarallax = new u(t[a], i))
          : t[a].jarallax && (e = t[a].jarallax[i].apply(t[a].jarallax, n)),
        void 0 !== e)
      )
        return e;
    return t;
  };
  f.constructor = u;
  var y = t.jarallax;
  if (
    ((t.jarallax = f),
    (t.jarallax.noConflict = function () {
      return (t.jarallax = y), this;
    }),
    'undefined' != typeof jQuery)
  ) {
    var v = function () {
      var e = arguments || [];
      Array.prototype.unshift.call(e, this);
      var i = f.apply(t, e);
      return 'object' != typeof i ? i : this;
    };
    v.constructor = u;
    var x = jQuery.fn.jarallax;
    (jQuery.fn.jarallax = v),
      (jQuery.fn.jarallax.noConflict = function () {
        return (jQuery.fn.jarallax = x), this;
      });
  }
  d(t, 'DOMContentLoaded', function () {
    f(document.querySelectorAll('[data-jarallax], [data-jarallax-video]'));
  });
})(window);

/* Zoomit */
!(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (t) {
  t.fn.zoomIt = function (o) {
    var i = {
      enabled: 1,
      status: 0,
      loaded: 0,
      img: t(this),
      offset: [0, 0],
      class: { container: 'zoomit-container', loaded: 'loaded', img: 'zoomit-zoomed', ghost: 'zoomit-ghost' },
      src: function () {
        return this.img.data('zoomed');
      },
      getSrc: function () {
        return 'function' == typeof this.src ? this.src() : this.src;
      },
      imgTag: null,
    };
    (o = t.extend(i, o)),
      (o.execute = function (t) {
        'string' == typeof t && 'function' == typeof o[t] && o[t](o);
      }),
      (o.getContainer = function () {
        return t('<div class="' + o['class'].container + '"></div>');
      }),
      (o.getImgSrc = function () {
        return (
          null === o.imgTag &&
            ((o.imgTag = t('<img />').addClass(o['class'].img).attr('src', this.getSrc())),
            'undefined' != typeof o.img.attr('alt') && o.imgTag.attr('alt', o.img.attr('alt'))),
          o.imgTag
        );
      }),
      (o.getZoomInstance = function () {
        return o.img.parent().find('.' + o['class'].img);
      }),
      (o.restrict = function (t) {
        return t > 1 ? (t = 1) : 0 > t && (t = 0), t;
      }),
      (o.getDimensions = function () {
        o.position = {
          img: { width: o.img.width(), height: o.img.height(), offset: o.img.offset() },
          zoom: { width: o.getZoomInstance().width(), height: o.getZoomInstance().height() },
        };
      }),
      (o.setPosition = function (t) {
        'undefined' != typeof t.originalEvent && (t = t.originalEvent),
          0 === o.loaded && o.getDimensions(),
          o.img.parent().addClass(o['class'].loaded),
          (o.loaded = 1),
          (o.position.x = o.restrict((t.pageX - o.position.img.offset.left) / o.position.img.width)),
          (o.position.y = o.restrict((t.pageY - o.position.img.offset.top) / o.position.img.height)),
          (o.position.zoom.offset = {
            left: (o.position.zoom.width - o.position.img.width) * o.position.x,
            top: (o.position.zoom.height - o.position.img.height) * o.position.y,
          }),
          o
            .getZoomInstance()
            .css({
              transform: 'translate(-' + o.position.zoom.offset.left + 'px, -' + o.position.zoom.offset.top + 'px)',
            });
      }),
      (o.show = function (t) {
        !o.enabled ||
          (1 === o.status && 0 === o.loaded) ||
          ((o.status = 1),
          0 == o.img.parent().find('.' + o['class'].img).length
            ? (o.img.after(o.getImgSrc()),
              o
                .getZoomInstance()
                .on('load', function () {
                  o.setPosition(t);
                })
                .each(function () {
                  this.complete && o.setPosition(t);
                }))
            : o.setPosition(t),
          o.execute('onZoomIn'));
      }),
      (o.hide = function () {
        (o.status = 0),
          (o.loaded = 0),
          (o.imgTag = null),
          o.img.parent().removeClass(o['class'].loaded),
          o.getZoomInstance().remove(),
          o.execute('onZoomOut');
      }),
      (o.move = function (t) {
        o.status && o.show(t);
      }),
      (o.enable = function () {
        o.enabled = 1;
      }),
      (o.disable = function () {
        o.enabled = 0;
      }),
      (o.init = function () {
        o.img.wrap(o.getContainer()).after('<div class="' + o['class'].ghost + '"></div>'),
          (o.ghost = o.img.parent().find('.' + o['class'].ghost)),
          o.ghost
            .on('mouseenter touchstart', function (t) {
              o.show(t);
            })
            .on('mouseleave touchend', function () {
              o.hide();
            })
            .on('mousemove touchmove', function (t) {
              t.stopPropagation(), t.preventDefault(), o.move(t);
            })
            .on('click', function () {
              o.execute('onClick');
            }),
          o.execute('onInit');
      }),
      o.img.data('zoom', o),
      o.init();
  };
});

/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  'function' == typeof define && define.amd
    ? define(b)
    : 'object' == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipe = b());
})(this, function () {
  'use strict';
  var a = function (a, b, c, d) {
    var e = {
      features: null,
      bind: function (a, b, c, d) {
        var e = (d ? 'remove' : 'add') + 'EventListener';
        b = b.split(' ');
        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
      },
      isArray: function (a) {
        return a instanceof Array;
      },
      createEl: function (a, b) {
        var c = document.createElement(b || 'div');
        return a && (c.className = a), c;
      },
      getScrollY: function () {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function (a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function (a, b) {
        var c = new RegExp('(\\s|^)' + b + '(\\s|$)');
        a.className = a.className
          .replace(c, ' ')
          .replace(/^\s\s*/, '')
          .replace(/\s\s*$/, '');
      },
      addClass: function (a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? ' ' : '') + b);
      },
      hasClass: function (a, b) {
        return a.className && new RegExp('(^|\\s)' + b + '(\\s|$)').test(a.className);
      },
      getChildByClass: function (a, b) {
        for (var c = a.firstChild; c; ) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function (a, b, c) {
        for (var d = a.length; d--; ) if (a[d][c] === b) return d;
        return -1;
      },
      extend: function (a, b, c) {
        for (var d in b)
          if (b.hasOwnProperty(d)) {
            if (c && a.hasOwnProperty(d)) continue;
            a[d] = b[d];
          }
      },
      easing: {
        sine: {
          out: function (a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function (a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          },
        },
        cubic: {
          out: function (a) {
            return --a * a * a + 1;
          },
        },
      },
      detectFeatures: function () {
        if (e.features) return e.features;
        var a = e.createEl(),
          b = a.style,
          c = '',
          d = {};
        if (
          ((d.oldIE = document.all && !document.addEventListener),
          (d.touch = 'ontouchstart' in window),
          window.requestAnimationFrame &&
            ((d.raf = window.requestAnimationFrame), (d.caf = window.cancelAnimationFrame)),
          (d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled),
          !d.pointerEvent)
        ) {
          var f = navigator.userAgent;
          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g && g.length > 0 && ((g = parseInt(g[1], 10)), g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
          }
          var h = f.match(/Android\s([0-9\.]*)/),
            i = h ? h[1] : 0;
          (i = parseFloat(i)),
            i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), (d.androidVersion = i)),
            (d.isMobileOpera = /opera mini|opera mobi/i.test(f));
        }
        for (
          var j, k, l = ['transform', 'perspective', 'animationName'], m = ['', 'webkit', 'Moz', 'ms', 'O'], n = 0;
          n < 4;
          n++
        ) {
          c = m[n];
          for (var o = 0; o < 3; o++)
            (j = l[o]), (k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j)), !d[j] && k in b && (d[j] = k);
          c &&
            !d.raf &&
            ((c = c.toLowerCase()),
            (d.raf = window[c + 'RequestAnimationFrame']),
            d.raf && (d.caf = window[c + 'CancelAnimationFrame'] || window[c + 'CancelRequestAnimationFrame']));
        }
        if (!d.raf) {
          var p = 0;
          (d.raf = function (a) {
            var b = new Date().getTime(),
              c = Math.max(0, 16 - (b - p)),
              d = window.setTimeout(function () {
                a(b + c);
              }, c);
            return (p = b + c), d;
          }),
            (d.caf = function (a) {
              clearTimeout(a);
            });
        }
        return (
          (d.svg =
            !!document.createElementNS &&
            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect),
          (e.features = d),
          d
        );
      },
    };
    e.detectFeatures(),
      e.features.oldIE &&
        (e.bind = function (a, b, c, d) {
          b = b.split(' ');
          for (
            var e,
              f = (d ? 'detach' : 'attach') + 'Event',
              g = function () {
                c.handleEvent.call(c);
              },
              h = 0;
            h < b.length;
            h++
          )
            if ((e = b[h]))
              if ('object' == typeof c && c.handleEvent) {
                if (d) {
                  if (!c['oldIE' + e]) return !1;
                } else c['oldIE' + e] = g;
                a[f]('on' + e, c['oldIE' + e]);
              } else a[f]('on' + e, c);
        });
    var f = this,
      g = 25,
      h = 3,
      i = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (a) {
          return 'A' === a.tagName;
        },
        getDoubleTapZoom: function (a, b) {
          return a ? 1 : b.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: 'fit',
      };
    e.extend(i, d);
    var j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X,
      Y,
      Z,
      $,
      _,
      aa,
      ba,
      ca,
      da,
      ea,
      fa,
      ga,
      ha,
      ia,
      ja,
      ka,
      la,
      ma = function () {
        return { x: 0, y: 0 };
      },
      na = ma(),
      oa = ma(),
      pa = ma(),
      qa = {},
      ra = 0,
      sa = {},
      ta = ma(),
      ua = 0,
      va = !0,
      wa = [],
      xa = {},
      ya = !1,
      za = function (a, b) {
        e.extend(f, b.publicMethods), wa.push(a);
      },
      Aa = function (a) {
        var b = ac();
        return a > b - 1 ? a - b : a < 0 ? b + a : a;
      },
      Ba = {},
      Ca = function (a, b) {
        return Ba[a] || (Ba[a] = []), Ba[a].push(b);
      },
      Da = function (a) {
        var b = Ba[a];
        if (b) {
          var c = Array.prototype.slice.call(arguments);
          c.shift();
          for (var d = 0; d < b.length; d++) b[d].apply(f, c);
        }
      },
      Ea = function () {
        return new Date().getTime();
      },
      Fa = function (a) {
        (ja = a), (f.bg.style.opacity = a * i.bgOpacity);
      },
      Ga = function (a, b, c, d, e) {
        (!ya || (e && e !== f.currItem)) && (d /= e ? e.fitRatio : f.currItem.fitRatio),
          (a[E] = u + b + 'px, ' + c + 'px' + v + ' scale(' + d + ')');
      },
      Ha = function (a) {
        ea &&
          (a &&
            (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), (ya = !0)) : ya && (mc(f.currItem), (ya = !1))),
          Ga(ea, pa.x, pa.y, s));
      },
      Ia = function (a) {
        a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a);
      },
      Ja = function (a, b) {
        b[E] = u + a + 'px, 0px' + v;
      },
      Ka = function (a, b) {
        if (!i.loop && b) {
          var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
          ((c < 0 && d > 0) || (c >= ac() - 1 && d < 0)) && (a = tb.x + d * i.mainScrollEndFriction);
        }
        (tb.x = a), Ja(a, n);
      },
      La = function (a, b) {
        var c = ub[a] - sa[a];
        return oa[a] + na[a] + c - c * (b / t);
      },
      Ma = function (a, b) {
        (a.x = b.x), (a.y = b.y), b.id && (a.id = b.id);
      },
      Na = function (a) {
        (a.x = Math.round(a.x)), (a.y = Math.round(a.y));
      },
      Oa = null,
      Pa = function () {
        Oa &&
          (e.unbind(document, 'mousemove', Pa), e.addClass(a, 'pswp--has_mouse'), (i.mouseUsed = !0), Da('mouseUsed')),
          (Oa = setTimeout(function () {
            Oa = null;
          }, 100));
      },
      Qa = function () {
        e.bind(document, 'keydown', f),
          N.transform && e.bind(f.scrollWrap, 'click', f),
          i.mouseUsed || e.bind(document, 'mousemove', Pa),
          e.bind(window, 'resize scroll orientationchange', f),
          Da('bindEvents');
      },
      Ra = function () {
        e.unbind(window, 'resize scroll orientationchange', f),
          e.unbind(window, 'scroll', r.scroll),
          e.unbind(document, 'keydown', f),
          e.unbind(document, 'mousemove', Pa),
          N.transform && e.unbind(f.scrollWrap, 'click', f),
          V && e.unbind(window, p, f),
          clearTimeout(O),
          Da('unbindEvents');
      },
      Sa = function (a, b) {
        var c = ic(f.currItem, qa, a);
        return b && (da = c), c;
      },
      Ta = function (a) {
        return a || (a = f.currItem), a.initialZoomLevel;
      },
      Ua = function (a) {
        return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
      },
      Va = function (a, b, c, d) {
        return d === f.currItem.initialZoomLevel
          ? ((c[a] = f.currItem.initialPosition[a]), !0)
          : ((c[a] = La(a, d)), c[a] > b.min[a] ? ((c[a] = b.min[a]), !0) : c[a] < b.max[a] && ((c[a] = b.max[a]), !0));
      },
      Wa = function () {
        if (E) {
          var b = N.perspective && !G;
          return (u = 'translate' + (b ? '3d(' : '(')), void (v = N.perspective ? ', 0px)' : ')');
        }
        (E = 'left'),
          e.addClass(a, 'pswp--ie'),
          (Ja = function (a, b) {
            b.left = a + 'px';
          }),
          (Ia = function (a) {
            var b = a.fitRatio > 1 ? 1 : a.fitRatio,
              c = a.container.style,
              d = b * a.w,
              e = b * a.h;
            (c.width = d + 'px'),
              (c.height = e + 'px'),
              (c.left = a.initialPosition.x + 'px'),
              (c.top = a.initialPosition.y + 'px');
          }),
          (Ha = function () {
            if (ea) {
              var a = ea,
                b = f.currItem,
                c = b.fitRatio > 1 ? 1 : b.fitRatio,
                d = c * b.w,
                e = c * b.h;
              (a.width = d + 'px'), (a.height = e + 'px'), (a.left = pa.x + 'px'), (a.top = pa.y + 'px');
            }
          });
      },
      Xa = function (a) {
        var b = '';
        i.escKey && 27 === a.keyCode
          ? (b = 'close')
          : i.arrowKeys && (37 === a.keyCode ? (b = 'prev') : 39 === a.keyCode && (b = 'next')),
          b &&
            (a.ctrlKey ||
              a.altKey ||
              a.shiftKey ||
              a.metaKey ||
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1), f[b]()));
      },
      Ya = function (a) {
        a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
      },
      Za = function () {
        f.setScrollOffset(0, e.getScrollY());
      },
      $a = {},
      _a = 0,
      ab = function (a) {
        $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
      },
      bb = function (a) {
        $a[a] && ab(a), $a[a] || (_a++, ($a[a] = {}));
      },
      cb = function () {
        for (var a in $a) $a.hasOwnProperty(a) && ab(a);
      },
      db = function (a, b, c, d, e, f, g) {
        var h,
          i = Ea();
        bb(a);
        var j = function () {
          if ($a[a]) {
            if (((h = Ea() - i), h >= d)) return ab(a), f(c), void (g && g());
            f((c - b) * e(h / d) + b), ($a[a].raf = H(j));
          }
        };
        j();
      },
      eb = {
        shout: Da,
        listen: Ca,
        viewportSize: qa,
        options: i,
        isMainScrollAnimating: function () {
          return fa;
        },
        getZoomLevel: function () {
          return s;
        },
        getCurrentIndex: function () {
          return m;
        },
        isDragging: function () {
          return V;
        },
        isZooming: function () {
          return aa;
        },
        setScrollOffset: function (a, b) {
          (sa.x = a), (M = sa.y = b), Da('updateScrollOffset', sa);
        },
        applyZoomPan: function (a, b, c, d) {
          (pa.x = b), (pa.y = c), (s = a), Ha(d);
        },
        init: function () {
          if (!j && !k) {
            var c;
            (f.framework = e),
              (f.template = a),
              (f.bg = e.getChildByClass(a, 'pswp__bg')),
              (J = a.className),
              (j = !0),
              (N = e.detectFeatures()),
              (H = N.raf),
              (I = N.caf),
              (E = N.transform),
              (L = N.oldIE),
              (f.scrollWrap = e.getChildByClass(a, 'pswp__scroll-wrap')),
              (f.container = e.getChildByClass(f.scrollWrap, 'pswp__container')),
              (n = f.container.style),
              (f.itemHolders = y =
                [
                  { el: f.container.children[0], wrap: 0, index: -1 },
                  { el: f.container.children[1], wrap: 0, index: -1 },
                  { el: f.container.children[2], wrap: 0, index: -1 },
                ]),
              (y[0].el.style.display = y[2].el.style.display = 'none'),
              Wa(),
              (r = {
                resize: f.updateSize,
                orientationchange: function () {
                  clearTimeout(O),
                    (O = setTimeout(function () {
                      qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                    }, 500));
                },
                scroll: Za,
                keydown: Xa,
                click: Ya,
              });
            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
            for (
              (N.animationName && N.transform && !d) || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0;
              c < wa.length;
              c++
            )
              f['init' + wa[c]]();
            if (b) {
              var g = (f.ui = new b(f, e));
              g.init();
            }
            Da('firstUpdate'),
              (m = m || i.index || 0),
              (isNaN(m) || m < 0 || m >= ac()) && (m = 0),
              (f.currItem = _b(m)),
              (N.isOldIOSPhone || N.isOldAndroid) && (va = !1),
              a.setAttribute('aria-hidden', 'false'),
              i.modal &&
                (va
                  ? (a.style.position = 'fixed')
                  : ((a.style.position = 'absolute'), (a.style.top = e.getScrollY() + 'px'))),
              void 0 === M && (Da('initialLayout'), (M = K = e.getScrollY()));
            var l = 'pswp--open ';
            for (
              i.mainClass && (l += i.mainClass + ' '),
                i.showHideOpacity && (l += 'pswp--animate_opacity '),
                l += G ? 'pswp--touch' : 'pswp--notouch',
                l += N.animationName ? ' pswp--css_animation' : '',
                l += N.svg ? ' pswp--svg' : '',
                e.addClass(a, l),
                f.updateSize(),
                o = -1,
                ua = null,
                c = 0;
              c < h;
              c++
            )
              Ja((c + o) * ta.x, y[c].el.style);
            L || e.bind(f.scrollWrap, q, f),
              Ca('initialZoomInEnd', function () {
                f.setContent(y[0], m - 1),
                  f.setContent(y[2], m + 1),
                  (y[0].el.style.display = y[2].el.style.display = 'block'),
                  i.focus && a.focus(),
                  Qa();
              }),
              f.setContent(y[1], m),
              f.updateCurrItem(),
              Da('afterInit'),
              va ||
                (w = setInterval(function () {
                  _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize();
                }, 1e3)),
              e.addClass(a, 'pswp--visible');
          }
        },
        close: function () {
          j && ((j = !1), (k = !0), Da('close'), Ra(), cc(f.currItem, null, !0, f.destroy));
        },
        destroy: function () {
          Da('destroy'),
            Xb && clearTimeout(Xb),
            a.setAttribute('aria-hidden', 'true'),
            (a.className = J),
            w && clearInterval(w),
            e.unbind(f.scrollWrap, q, f),
            e.unbind(window, 'scroll', f),
            zb(),
            cb(),
            (Ba = null);
        },
        panTo: function (a, b, c) {
          c ||
            (a > da.min.x ? (a = da.min.x) : a < da.max.x && (a = da.max.x),
            b > da.min.y ? (b = da.min.y) : b < da.max.y && (b = da.max.y)),
            (pa.x = a),
            (pa.y = b),
            Ha();
        },
        handleEvent: function (a) {
          (a = a || window.event), r[a.type] && r[a.type](a);
        },
        goTo: function (a) {
          a = Aa(a);
          var b = a - m;
          (ua = b), (m = a), (f.currItem = _b(m)), (ra -= b), Ka(ta.x * ra), cb(), (fa = !1), f.updateCurrItem();
        },
        next: function () {
          f.goTo(m + 1);
        },
        prev: function () {
          f.goTo(m - 1);
        },
        updateCurrZoomItem: function (a) {
          if ((a && Da('beforeChange', 0), y[1].el.children.length)) {
            var b = y[1].el.children[0];
            ea = e.hasClass(b, 'pswp__zoom-wrap') ? b.style : null;
          } else ea = null;
          (da = f.currItem.bounds),
            (t = s = f.currItem.initialZoomLevel),
            (pa.x = da.center.x),
            (pa.y = da.center.y),
            a && Da('afterChange');
        },
        invalidateCurrItems: function () {
          x = !0;
          for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
        },
        updateCurrItem: function (a) {
          if (0 !== ua) {
            var b,
              c = Math.abs(ua);
            if (!(a && c < 2)) {
              (f.currItem = _b(m)),
                (ya = !1),
                Da('beforeChange', ua),
                c >= h && ((o += ua + (ua > 0 ? -h : h)), (c = h));
              for (var d = 0; d < c; d++)
                ua > 0
                  ? ((b = y.shift()),
                    (y[h - 1] = b),
                    o++,
                    Ja((o + 2) * ta.x, b.el.style),
                    f.setContent(b, m - c + d + 1 + 1))
                  : ((b = y.pop()), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
              if (ea && 1 === Math.abs(ua)) {
                var e = _b(z);
                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
              }
              (ua = 0), f.updateCurrZoomItem(), (z = m), Da('afterChange');
            }
          }
        },
        updateSize: function (b) {
          if (!va && i.modal) {
            var c = e.getScrollY();
            if (
              (M !== c && ((a.style.top = c + 'px'), (M = c)),
              !b && xa.x === window.innerWidth && xa.y === window.innerHeight)
            )
              return;
            (xa.x = window.innerWidth), (xa.y = window.innerHeight), (a.style.height = xa.y + 'px');
          }
          if (
            ((qa.x = f.scrollWrap.clientWidth),
            (qa.y = f.scrollWrap.clientHeight),
            Za(),
            (ta.x = qa.x + Math.round(qa.x * i.spacing)),
            (ta.y = qa.y),
            Ka(ta.x * ra),
            Da('beforeResize'),
            void 0 !== o)
          ) {
            for (var d, g, j, k = 0; k < h; k++)
              (d = y[k]),
                Ja((k + o) * ta.x, d.el.style),
                (j = m + k - 1),
                i.loop && ac() > 2 && (j = Aa(j)),
                (g = _b(j)),
                g && (x || g.needsUpdate || !g.bounds)
                  ? (f.cleanSlide(g),
                    f.setContent(d, j),
                    1 === k && ((f.currItem = g), f.updateCurrZoomItem(!0)),
                    (g.needsUpdate = !1))
                  : d.index === -1 && j >= 0 && f.setContent(d, j),
                g && g.container && (ic(g, qa), mc(g), Ia(g));
            x = !1;
          }
          (t = s = f.currItem.initialZoomLevel),
            (da = f.currItem.bounds),
            da && ((pa.x = da.center.x), (pa.y = da.center.y), Ha(!0)),
            Da('resize');
        },
        zoomTo: function (a, b, c, d, f) {
          b && ((t = s), (ub.x = Math.abs(b.x) - pa.x), (ub.y = Math.abs(b.y) - pa.y), Ma(oa, pa));
          var g = Sa(a, !1),
            h = {};
          Va('x', g, h, a), Va('y', g, h, a);
          var i = s,
            j = { x: pa.x, y: pa.y };
          Na(h);
          var k = function (b) {
            1 === b
              ? ((s = a), (pa.x = h.x), (pa.y = h.y))
              : ((s = (a - i) * b + i), (pa.x = (h.x - j.x) * b + j.x), (pa.y = (h.y - j.y) * b + j.y)),
              f && f(b),
              Ha(1 === b);
          };
          c ? db('customZoomTo', 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
        },
      },
      fb = 30,
      gb = 10,
      hb = {},
      ib = {},
      jb = {},
      kb = {},
      lb = {},
      mb = [],
      nb = {},
      ob = [],
      pb = {},
      qb = 0,
      rb = ma(),
      sb = 0,
      tb = ma(),
      ub = ma(),
      vb = ma(),
      wb = function (a, b) {
        return a.x === b.x && a.y === b.y;
      },
      xb = function (a, b) {
        return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
      },
      yb = function (a, b) {
        return (pb.x = Math.abs(a.x - b.x)), (pb.y = Math.abs(a.y - b.y)), Math.sqrt(pb.x * pb.x + pb.y * pb.y);
      },
      zb = function () {
        Z && (I(Z), (Z = null));
      },
      Ab = function () {
        V && ((Z = H(Ab)), Qb());
      },
      Bb = function () {
        return !('fit' === i.scaleMode && s === f.currItem.initialZoomLevel);
      },
      Cb = function (a, b) {
        return (
          !(!a || a === document) &&
          !(a.getAttribute('class') && a.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) &&
          (b(a) ? a : Cb(a.parentNode, b))
        );
      },
      Db = {},
      Eb = function (a, b) {
        return (Db.prevent = !Cb(a.target, i.isClickableElement)), Da('preventDragEvent', a, b, Db), Db.prevent;
      },
      Fb = function (a, b) {
        return (b.x = a.pageX), (b.y = a.pageY), (b.id = a.identifier), b;
      },
      Gb = function (a, b, c) {
        (c.x = 0.5 * (a.x + b.x)), (c.y = 0.5 * (a.y + b.y));
      },
      Hb = function (a, b, c) {
        if (a - Q > 50) {
          var d = ob.length > 2 ? ob.shift() : {};
          (d.x = b), (d.y = c), ob.push(d), (Q = a);
        }
      },
      Ib = function () {
        var a = pa.y - f.currItem.initialPosition.y;
        return 1 - Math.abs(a / (qa.y / 2));
      },
      Jb = {},
      Kb = {},
      Lb = [],
      Mb = function (a) {
        for (; Lb.length > 0; ) Lb.pop();
        return (
          F
            ? ((la = 0),
              mb.forEach(function (a) {
                0 === la ? (Lb[0] = a) : 1 === la && (Lb[1] = a), la++;
              }))
            : a.type.indexOf('touch') > -1
            ? a.touches &&
              a.touches.length > 0 &&
              ((Lb[0] = Fb(a.touches[0], Jb)), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb)))
            : ((Jb.x = a.pageX), (Jb.y = a.pageY), (Jb.id = ''), (Lb[0] = Jb)),
          Lb
        );
      },
      Nb = function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
        return (
          (c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1),
          (j = pa[a] + b[a] * c),
          (!i.allowPanToNext && s !== f.currItem.initialZoomLevel) ||
          (ea
            ? 'h' !== ga ||
              'x' !== a ||
              X ||
              (k
                ? (j > da.min[a] && ((c = i.panEndFriction), (h = da.min[a] - j), (d = da.min[a] - oa[a])),
                  (d <= 0 || m < 0) && ac() > 1
                    ? ((g = l), m < 0 && l > nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j))
                : (j < da.max[a] && ((c = i.panEndFriction), (h = j - da.max[a]), (d = oa[a] - da.max[a])),
                  (d <= 0 || m > 0) && ac() > 1
                    ? ((g = l), m > 0 && l < nb.x && (g = nb.x))
                    : da.min.x !== da.max.x && (e = j)))
            : (g = l),
          'x' !== a)
            ? void (fa || $ || (s > f.currItem.fitRatio && (pa[a] += b[a] * c)))
            : (void 0 !== g && (Ka(g, !0), ($ = g !== nb.x)),
              da.min.x !== da.max.x && (void 0 !== e ? (pa.x = e) : $ || (pa.x += b.x * c)),
              void 0 !== g)
        );
      },
      Ob = function (a) {
        if (!('mousedown' === a.type && a.button > 0)) {
          if ($b) return void a.preventDefault();
          if (!U || 'mousedown' !== a.type) {
            if ((Eb(a, !0) && a.preventDefault(), Da('pointerDown'), F)) {
              var b = e.arraySearch(mb, a.pointerId, 'id');
              b < 0 && (b = mb.length), (mb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId });
            }
            var c = Mb(a),
              d = c.length;
            (_ = null),
              cb(),
              (V && 1 !== d) ||
                ((V = ha = !0),
                e.bind(window, p, f),
                (S = ka = ia = T = $ = Y = W = X = !1),
                (ga = null),
                Da('firstTouchStart', c),
                Ma(oa, pa),
                (na.x = na.y = 0),
                Ma(kb, c[0]),
                Ma(lb, kb),
                (nb.x = ta.x * ra),
                (ob = [{ x: kb.x, y: kb.y }]),
                (Q = P = Ea()),
                Sa(s, !0),
                zb(),
                Ab()),
              !aa &&
                d > 1 &&
                !fa &&
                !$ &&
                ((t = s),
                (X = !1),
                (aa = W = !0),
                (na.y = na.x = 0),
                Ma(oa, pa),
                Ma(hb, c[0]),
                Ma(ib, c[1]),
                Gb(hb, ib, vb),
                (ub.x = Math.abs(vb.x) - pa.x),
                (ub.y = Math.abs(vb.y) - pa.y),
                (ba = ca = yb(hb, ib)));
          }
        }
      },
      Pb = function (a) {
        if ((a.preventDefault(), F)) {
          var b = e.arraySearch(mb, a.pointerId, 'id');
          if (b > -1) {
            var c = mb[b];
            (c.x = a.pageX), (c.y = a.pageY);
          }
        }
        if (V) {
          var d = Mb(a);
          if (ga || Y || aa) _ = d;
          else if (tb.x !== ta.x * ra) ga = 'h';
          else {
            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
            Math.abs(f) >= gb && ((ga = f > 0 ? 'h' : 'v'), (_ = d));
          }
        }
      },
      Qb = function () {
        if (_) {
          var a = _.length;
          if (0 !== a)
            if ((Ma(hb, _[0]), (jb.x = hb.x - kb.x), (jb.y = hb.y - kb.y), aa && a > 1)) {
              if (((kb.x = hb.x), (kb.y = hb.y), !jb.x && !jb.y && wb(_[1], ib))) return;
              Ma(ib, _[1]), X || ((X = !0), Da('zoomGestureStarted'));
              var b = yb(hb, ib),
                c = Vb(b);
              c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
              var d = 1,
                e = Ta(),
                g = Ua();
              if (c < e)
                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                  var h = e - c,
                    j = 1 - h / (e / 1.2);
                  Fa(j), Da('onPinchClose', j), (ia = !0);
                } else (d = (e - c) / e), d > 1 && (d = 1), (c = e - d * (e / 3));
              else c > g && ((d = (c - g) / (6 * e)), d > 1 && (d = 1), (c = g + d * e));
              d < 0 && (d = 0),
                (ba = b),
                Gb(hb, ib, rb),
                (na.x += rb.x - vb.x),
                (na.y += rb.y - vb.y),
                Ma(vb, rb),
                (pa.x = La('x', c)),
                (pa.y = La('y', c)),
                (S = c > s),
                (s = c),
                Ha();
            } else {
              if (!ga) return;
              if (
                (ha &&
                  ((ha = !1),
                  Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x),
                  Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)),
                (kb.x = hb.x),
                (kb.y = hb.y),
                0 === jb.x && 0 === jb.y)
              )
                return;
              if ('v' === ga && i.closeOnVerticalDrag && !Bb()) {
                (na.y += jb.y), (pa.y += jb.y);
                var k = Ib();
                return (T = !0), Da('onVerticalDrag', k), Fa(k), void Ha();
              }
              Hb(Ea(), hb.x, hb.y), (Y = !0), (da = f.currItem.bounds);
              var l = Nb('x', jb);
              l || (Nb('y', jb), Na(pa), Ha());
            }
        }
      },
      Rb = function (a) {
        if (N.isOldAndroid) {
          if (U && 'mouseup' === a.type) return;
          a.type.indexOf('touch') > -1 &&
            (clearTimeout(U),
            (U = setTimeout(function () {
              U = 0;
            }, 600)));
        }
        Da('pointerUp'), Eb(a, !1) && a.preventDefault();
        var b;
        if (F) {
          var c = e.arraySearch(mb, a.pointerId, 'id');
          if (c > -1)
            if (((b = mb.splice(c, 1)[0]), navigator.pointerEnabled)) b.type = a.pointerType || 'mouse';
            else {
              var d = { 4: 'mouse', 2: 'touch', 3: 'pen' };
              (b.type = d[a.pointerType]), b.type || (b.type = a.pointerType || 'mouse');
            }
        }
        var g,
          h = Mb(a),
          j = h.length;
        if (('mouseup' === a.type && (j = 0), 2 === j)) return (_ = null), !0;
        1 === j && Ma(lb, h[0]),
          0 !== j ||
            ga ||
            fa ||
            (b ||
              ('mouseup' === a.type
                ? (b = { x: a.pageX, y: a.pageY, type: 'mouse' })
                : a.changedTouches &&
                  a.changedTouches[0] &&
                  (b = { x: a.changedTouches[0].pageX, y: a.changedTouches[0].pageY, type: 'touch' })),
            Da('touchRelease', a, b));
        var k = -1;
        if (
          (0 === j && ((V = !1), e.unbind(window, p, f), zb(), aa ? (k = 0) : sb !== -1 && (k = Ea() - sb)),
          (sb = 1 === j ? Ea() : -1),
          (g = k !== -1 && k < 150 ? 'zoom' : 'swipe'),
          aa && j < 2 && ((aa = !1), 1 === j && (g = 'zoomPointerUp'), Da('zoomGestureEnded')),
          (_ = null),
          Y || X || fa || T)
        )
          if ((cb(), R || (R = Sb()), R.calculateSwipeSpeed('x'), T)) {
            var l = Ib();
            if (l < i.verticalDragRange) f.close();
            else {
              var m = pa.y,
                n = ja;
              db('verticalDrag', 0, 1, 300, e.easing.cubic.out, function (a) {
                (pa.y = (f.currItem.initialPosition.y - m) * a + m), Fa((1 - n) * a + n), Ha();
              }),
                Da('onVerticalDrag', 1);
            }
          } else {
            if (($ || fa) && 0 === j) {
              var o = Ub(g, R);
              if (o) return;
              g = 'zoomPointerUp';
            }
            if (!fa) return 'swipe' !== g ? void Wb() : void (!$ && s > f.currItem.fitRatio && Tb(R));
          }
      },
      Sb = function () {
        var a,
          b,
          c = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (d) {
              ob.length > 1 ? ((a = Ea() - Q + 50), (b = ob[ob.length - 2][d])) : ((a = Ea() - P), (b = lb[d])),
                (c.lastFlickOffset[d] = kb[d] - b),
                (c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d])),
                c.lastFlickDist[d] > 20 ? (c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a) : (c.lastFlickSpeed[d] = 0),
                Math.abs(c.lastFlickSpeed[d]) < 0.1 && (c.lastFlickSpeed[d] = 0),
                (c.slowDownRatio[d] = 0.95),
                (c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d]),
                (c.speedDecelerationRatio[d] = 1);
            },
            calculateOverBoundsAnimOffset: function (a, b) {
              c.backAnimStarted[a] ||
                (pa[a] > da.min[a]
                  ? (c.backAnimDestination[a] = da.min[a])
                  : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]),
                void 0 !== c.backAnimDestination[a] &&
                  ((c.slowDownRatio[a] = 0.7),
                  (c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a]),
                  c.speedDecelerationRatioAbs[a] < 0.05 &&
                    ((c.lastFlickSpeed[a] = 0),
                    (c.backAnimStarted[a] = !0),
                    db('bounceZoomPan' + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
                      (pa[a] = b), Ha();
                    }))));
            },
            calculateAnimOffset: function (a) {
              c.backAnimStarted[a] ||
                ((c.speedDecelerationRatio[a] =
                  c.speedDecelerationRatio[a] *
                  (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - (c.slowDownRatioReverse[a] * c.timeDiff) / 10)),
                (c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a])),
                (c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff),
                (pa[a] += c.distanceOffset[a]));
            },
            panAnimLoop: function () {
              if (
                $a.zoomPan &&
                (($a.zoomPan.raf = H(c.panAnimLoop)),
                (c.now = Ea()),
                (c.timeDiff = c.now - c.lastNow),
                (c.lastNow = c.now),
                c.calculateAnimOffset('x'),
                c.calculateAnimOffset('y'),
                Ha(),
                c.calculateOverBoundsAnimOffset('x'),
                c.calculateOverBoundsAnimOffset('y'),
                c.speedDecelerationRatioAbs.x < 0.05 && c.speedDecelerationRatioAbs.y < 0.05)
              )
                return (pa.x = Math.round(pa.x)), (pa.y = Math.round(pa.y)), Ha(), void ab('zoomPan');
            },
          };
        return c;
      },
      Tb = function (a) {
        return (
          a.calculateSwipeSpeed('y'),
          (da = f.currItem.bounds),
          (a.backAnimDestination = {}),
          (a.backAnimStarted = {}),
          Math.abs(a.lastFlickSpeed.x) <= 0.05 && Math.abs(a.lastFlickSpeed.y) <= 0.05
            ? ((a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0),
              a.calculateOverBoundsAnimOffset('x'),
              a.calculateOverBoundsAnimOffset('y'),
              !0)
            : (bb('zoomPan'), (a.lastNow = Ea()), void a.panAnimLoop())
        );
      },
      Ub = function (a, b) {
        var c;
        fa || (qb = m);
        var d;
        if ('swipe' === a) {
          var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
          g > fb && (h || b.lastFlickOffset.x > 20) ? (d = -1) : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
        }
        var j;
        d &&
          ((m += d),
          m < 0 ? ((m = i.loop ? ac() - 1 : 0), (j = !0)) : m >= ac() && ((m = i.loop ? 0 : ac() - 1), (j = !0)),
          (j && !i.loop) || ((ua += d), (ra -= d), (c = !0)));
        var k,
          l = ta.x * ra,
          n = Math.abs(l - tb.x);
        return (
          c || l > tb.x == b.lastFlickSpeed.x > 0
            ? ((k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333),
              (k = Math.min(k, 400)),
              (k = Math.max(k, 250)))
            : (k = 333),
          qb === m && (c = !1),
          (fa = !0),
          Da('mainScrollAnimStart'),
          db('mainScroll', tb.x, l, k, e.easing.cubic.out, Ka, function () {
            cb(), (fa = !1), (qb = -1), (c || qb !== m) && f.updateCurrItem(), Da('mainScrollAnimComplete');
          }),
          c && f.updateCurrItem(!0),
          c
        );
      },
      Vb = function (a) {
        return (1 / ca) * a * t;
      },
      Wb = function () {
        var a = s,
          b = Ta(),
          c = Ua();
        s < b ? (a = b) : s > c && (a = c);
        var d,
          g = 1,
          h = ja;
        return ia && !S && !ka && s < b
          ? (f.close(), !0)
          : (ia &&
              (d = function (a) {
                Fa((g - h) * a + h);
              }),
            f.zoomTo(a, 0, 200, e.easing.cubic.out, d),
            !0);
      };
    za('Gestures', {
      publicMethods: {
        initGestures: function () {
          var a = function (a, b, c, d, e) {
            (A = a + b), (B = a + c), (C = a + d), (D = e ? a + e : '');
          };
          (F = N.pointerEvent),
            F && N.touch && (N.touch = !1),
            F
              ? navigator.pointerEnabled
                ? a('pointer', 'down', 'move', 'up', 'cancel')
                : a('MSPointer', 'Down', 'Move', 'Up', 'Cancel')
              : N.touch
              ? (a('touch', 'start', 'move', 'end', 'cancel'), (G = !0))
              : a('mouse', 'down', 'move', 'up'),
            (p = B + ' ' + C + ' ' + D),
            (q = A),
            F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
            (f.likelyTouchDevice = G),
            (r[A] = Ob),
            (r[B] = Pb),
            (r[C] = Rb),
            D && (r[D] = r[C]),
            N.touch &&
              ((q += ' mousedown'),
              (p += ' mousemove mouseup'),
              (r.mousedown = r[A]),
              (r.mousemove = r[B]),
              (r.mouseup = r[C])),
            G || (i.allowPanToNext = !1);
        },
      },
    });
    var Xb,
      Yb,
      Zb,
      $b,
      _b,
      ac,
      bc,
      cc = function (b, c, d, g) {
        Xb && clearTimeout(Xb), ($b = !0), (Zb = !0);
        var h;
        b.initialLayout
          ? ((h = b.initialLayout), (b.initialLayout = null))
          : (h = i.getThumbBoundsFn && i.getThumbBoundsFn(m));
        var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function () {
            ab('initialZoom'),
              d
                ? (f.template.removeAttribute('style'), f.bg.removeAttribute('style'))
                : (Fa(1),
                  c && (c.style.display = 'block'),
                  e.addClass(a, 'pswp--animated-in'),
                  Da('initialZoom' + (d ? 'OutEnd' : 'InEnd'))),
              g && g(),
              ($b = !1);
          };
        if (!j || !h || void 0 === h.x)
          return (
            Da('initialZoom' + (d ? 'Out' : 'In')),
            (s = b.initialZoomLevel),
            Ma(pa, b.initialPosition),
            Ha(),
            (a.style.opacity = d ? 0 : 1),
            Fa(1),
            void (j
              ? setTimeout(function () {
                  k();
                }, j)
              : k())
          );
        var n = function () {
          var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
          b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = 'hidden'),
            d ||
              ((s = h.w / b.w), (pa.x = h.x), (pa.y = h.y - K), (f[g ? 'template' : 'bg'].style.opacity = 0.001), Ha()),
            bb('initialZoom'),
            d && !c && e.removeClass(a, 'pswp--animated-in'),
            g &&
              (d
                ? e[(c ? 'remove' : 'add') + 'Class'](a, 'pswp--animate_opacity')
                : setTimeout(function () {
                    e.addClass(a, 'pswp--animate_opacity');
                  }, 30)),
            (Xb = setTimeout(
              function () {
                if ((Da('initialZoom' + (d ? 'Out' : 'In')), d)) {
                  var f = h.w / b.w,
                    i = { x: pa.x, y: pa.y },
                    l = s,
                    m = ja,
                    n = function (b) {
                      1 === b
                        ? ((s = f), (pa.x = h.x), (pa.y = h.y - M))
                        : ((s = (f - l) * b + l), (pa.x = (h.x - i.x) * b + i.x), (pa.y = (h.y - M - i.y) * b + i.y)),
                        Ha(),
                        g ? (a.style.opacity = 1 - b) : Fa(m - b * m);
                    };
                  c ? db('initialZoom', 0, 1, j, e.easing.cubic.out, n, k) : (n(1), (Xb = setTimeout(k, j + 20)));
                } else
                  (s = b.initialZoomLevel),
                    Ma(pa, b.initialPosition),
                    Ha(),
                    Fa(1),
                    g ? (a.style.opacity = 1) : Fa(1),
                    (Xb = setTimeout(k, j + 20));
              },
              d ? 25 : 90
            ));
        };
        n();
      },
      dc = {},
      ec = [],
      fc = {
        index: 0,
        errorMsg:
          '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Yb.length;
        },
      },
      gc = function () {
        return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } };
      },
      hc = function (a, b, c) {
        var d = a.bounds;
        (d.center.x = Math.round((dc.x - b) / 2)),
          (d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top),
          (d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x),
          (d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y),
          (d.min.x = b > dc.x ? 0 : d.center.x),
          (d.min.y = c > dc.y ? a.vGap.top : d.center.y);
      },
      ic = function (a, b, c) {
        if (a.src && !a.loadError) {
          var d = !c;
          if (
            (d && (a.vGap || (a.vGap = { top: 0, bottom: 0 }), Da('parseVerticalMargin', a)),
            (dc.x = b.x),
            (dc.y = b.y - a.vGap.top - a.vGap.bottom),
            d)
          ) {
            var e = dc.x / a.w,
              f = dc.y / a.h;
            a.fitRatio = e < f ? e : f;
            var g = i.scaleMode;
            'orig' === g ? (c = 1) : 'fit' === g && (c = a.fitRatio),
              c > 1 && (c = 1),
              (a.initialZoomLevel = c),
              a.bounds || (a.bounds = gc());
          }
          if (!c) return;
          return (
            hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
          );
        }
        return (
          (a.w = a.h = 0),
          (a.initialZoomLevel = a.fitRatio = 1),
          (a.bounds = gc()),
          (a.initialPosition = a.bounds.center),
          a.bounds
        );
      },
      jc = function (a, b, c, d, e, g) {
        b.loadError ||
          (d &&
            ((b.imageAppended = !0),
            mc(b, d, b === f.currItem && ya),
            c.appendChild(d),
            g &&
              setTimeout(function () {
                b && b.loaded && b.placeholder && ((b.placeholder.style.display = 'none'), (b.placeholder = null));
              }, 500)));
      },
      kc = function (a) {
        (a.loading = !0), (a.loaded = !1);
        var b = (a.img = e.createEl('pswp__img', 'img')),
          c = function () {
            (a.loading = !1),
              (a.loaded = !0),
              a.loadComplete ? a.loadComplete(a) : (a.img = null),
              (b.onload = b.onerror = null),
              (b = null);
          };
        return (
          (b.onload = c),
          (b.onerror = function () {
            (a.loadError = !0), c();
          }),
          (b.src = a.src),
          b
        );
      },
      lc = function (a, b) {
        if (a.src && a.loadError && a.container)
          return b && (a.container.innerHTML = ''), (a.container.innerHTML = i.errorMsg.replace('%url%', a.src)), !0;
      },
      mc = function (a, b, c) {
        if (a.src) {
          b || (b = a.container.lastChild);
          var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
          a.placeholder &&
            !a.loaded &&
            ((a.placeholder.style.width = d + 'px'), (a.placeholder.style.height = e + 'px')),
            (b.style.width = d + 'px'),
            (b.style.height = e + 'px');
        }
      },
      nc = function () {
        if (ec.length) {
          for (var a, b = 0; b < ec.length; b++)
            (a = ec[b]), a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
          ec = [];
        }
      };
    za('Controller', {
      publicMethods: {
        lazyLoadItem: function (a) {
          a = Aa(a);
          var b = _b(a);
          b && ((!b.loaded && !b.loading) || x) && (Da('gettingData', a, b), b.src && kc(b));
        },
        initController: function () {
          e.extend(i, fc, !0),
            (f.items = Yb = c),
            (_b = f.getItemAt),
            (ac = i.getNumItemsFn),
            (bc = i.loop),
            ac() < 3 && (i.loop = !1),
            Ca('beforeChange', function (a) {
              var b,
                c = i.preload,
                d = null === a || a >= 0,
                e = Math.min(c[0], ac()),
                g = Math.min(c[1], ac());
              for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
              for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
            }),
            Ca('initialLayout', function () {
              f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
            }),
            Ca('mainScrollAnimComplete', nc),
            Ca('initialZoomInEnd', nc),
            Ca('destroy', function () {
              for (var a, b = 0; b < Yb.length; b++)
                (a = Yb[b]),
                  a.container && (a.container = null),
                  a.placeholder && (a.placeholder = null),
                  a.img && (a.img = null),
                  a.preloader && (a.preloader = null),
                  a.loadError && (a.loaded = a.loadError = !1);
              ec = null;
            });
        },
        getItemAt: function (a) {
          return a >= 0 && void 0 !== Yb[a] && Yb[a];
        },
        allowProgressiveImg: function () {
          return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200;
        },
        setContent: function (a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
            g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = '');
          Da('gettingData', b, g), (a.index = b), (a.item = g);
          var h = (g.container = e.createEl('pswp__zoom-wrap'));
          if (
            (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : (h.innerHTML = g.html)),
            lc(g),
            ic(g, qa),
            !g.src || g.loadError || g.loaded)
          )
            g.src &&
              !g.loadError &&
              ((d = e.createEl('pswp__img', 'img')),
              (d.style.opacity = 1),
              (d.src = g.src),
              mc(g, d),
              jc(b, g, h, d, !0));
          else {
            if (
              ((g.loadComplete = function (c) {
                if (j) {
                  if (a && a.index === b) {
                    if (lc(c, !0))
                      return (
                        (c.loadComplete = c.img = null),
                        ic(c, qa),
                        Ia(c),
                        void (a.index === m && f.updateCurrZoomItem())
                      );
                    c.imageAppended
                      ? !$b && c.placeholder && ((c.placeholder.style.display = 'none'), (c.placeholder = null))
                      : N.transform && (fa || $b)
                      ? ec.push({ item: c, baseDiv: h, img: c.img, index: b, holder: a, clearPlaceholder: !0 })
                      : jc(b, c, h, c.img, fa || $b, !0);
                  }
                  (c.loadComplete = null), (c.img = null), Da('imageLoadComplete', b, c);
                }
              }),
              e.features.transform)
            ) {
              var k = 'pswp__img pswp__img--placeholder';
              k += g.msrc ? '' : ' pswp__img--placeholder--blank';
              var l = e.createEl(k, g.msrc ? 'img' : '');
              g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), (g.placeholder = l);
            }
            g.loading || kc(g),
              f.allowProgressiveImg() &&
                (!Zb && N.transform
                  ? ec.push({ item: g, baseDiv: h, img: g.img, index: b, holder: a })
                  : jc(b, g, h, g.img, !0, !0));
          }
          Zb || b !== m ? Ia(g) : ((ea = h.style), cc(g, d || g.img)), (a.el.innerHTML = ''), a.el.appendChild(h);
        },
        cleanSlide: function (a) {
          a.img && (a.img.onload = a.img.onerror = null), (a.loaded = a.loading = a.img = a.imageAppended = !1);
        },
      },
    });
    var oc,
      pc = {},
      qc = function (a, b, c) {
        var d = document.createEvent('CustomEvent'),
          e = { origEvent: a, target: a.target, releasePoint: b, pointerType: c || 'touch' };
        d.initCustomEvent('pswpTap', !0, !0, e), a.target.dispatchEvent(d);
      };
    za('Tap', {
      publicMethods: {
        initTap: function () {
          Ca('firstTouchStart', f.onTapStart),
            Ca('touchRelease', f.onTapRelease),
            Ca('destroy', function () {
              (pc = {}), (oc = null);
            });
        },
        onTapStart: function (a) {
          a.length > 1 && (clearTimeout(oc), (oc = null));
        },
        onTapRelease: function (a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), (oc = null), xb(c, pc))) return void Da('doubleTap', c);
            if ('mouse' === b.type) return void qc(a, b, 'mouse');
            var d = a.target.tagName.toUpperCase();
            if ('BUTTON' === d || e.hasClass(a.target, 'pswp__single-tap')) return void qc(a, b);
            Ma(pc, c),
              (oc = setTimeout(function () {
                qc(a, b), (oc = null);
              }, 300));
          }
        },
      },
    });
    var rc;
    za('DesktopZoom', {
      publicMethods: {
        initDesktopZoom: function () {
          L ||
            (G
              ? Ca('mouseUsed', function () {
                  f.setupDesktopZoom();
                })
              : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function (b) {
          rc = {};
          var c = 'wheel mousewheel DOMMouseScroll';
          Ca('bindEvents', function () {
            e.bind(a, c, f.handleMouseWheel);
          }),
            Ca('unbindEvents', function () {
              rc && e.unbind(a, c, f.handleMouseWheel);
            }),
            (f.mouseZoomedIn = !1);
          var d,
            g = function () {
              f.mouseZoomedIn && (e.removeClass(a, 'pswp--zoomed-in'), (f.mouseZoomedIn = !1)),
                s < 1 ? e.addClass(a, 'pswp--zoom-allowed') : e.removeClass(a, 'pswp--zoom-allowed'),
                h();
            },
            h = function () {
              d && (e.removeClass(a, 'pswp--dragging'), (d = !1));
            };
          Ca('resize', g),
            Ca('afterChange', g),
            Ca('pointerDown', function () {
              f.mouseZoomedIn && ((d = !0), e.addClass(a, 'pswp--dragging'));
            }),
            Ca('pointerUp', h),
            b || g();
        },
        handleMouseWheel: function (a) {
          if (s <= f.currItem.fitRatio)
            return (
              i.modal &&
                (!i.closeOnScroll || _a || V
                  ? a.preventDefault()
                  : E && Math.abs(a.deltaY) > 2 && ((l = !0), f.close())),
              !0
            );
          if ((a.stopPropagation(), (rc.x = 0), 'deltaX' in a))
            1 === a.deltaMode
              ? ((rc.x = 18 * a.deltaX), (rc.y = 18 * a.deltaY))
              : ((rc.x = a.deltaX), (rc.y = a.deltaY));
          else if ('wheelDelta' in a)
            a.wheelDeltaX && (rc.x = -0.16 * a.wheelDeltaX),
              a.wheelDeltaY ? (rc.y = -0.16 * a.wheelDeltaY) : (rc.y = -0.16 * a.wheelDelta);
          else {
            if (!('detail' in a)) return;
            rc.y = a.detail;
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
            c = pa.y - rc.y;
          (i.modal || (b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y)) && a.preventDefault(),
            f.panTo(b, c);
        },
        toggleDesktopZoom: function (b) {
          b = b || { x: qa.x / 2 + sa.x, y: qa.y / 2 + sa.y };
          var c = i.getDoubleTapZoom(!0, f.currItem),
            d = s === c;
          (f.mouseZoomedIn = !d),
            f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333),
            e[(d ? 'remove' : 'add') + 'Class'](a, 'pswp--zoomed-in');
        },
      },
    });
    var sc,
      tc,
      uc,
      vc,
      wc,
      xc,
      yc,
      zc,
      Ac,
      Bc,
      Cc,
      Dc,
      Ec = { history: !0, galleryUID: 1 },
      Fc = function () {
        return Cc.hash.substring(1);
      },
      Gc = function () {
        sc && clearTimeout(sc), uc && clearTimeout(uc);
      },
      Hc = function () {
        var a = Fc(),
          b = {};
        if (a.length < 5) return b;
        var c,
          d = a.split('&');
        for (c = 0; c < d.length; c++)
          if (d[c]) {
            var e = d[c].split('=');
            e.length < 2 || (b[e[0]] = e[1]);
          }
        if (i.galleryPIDs) {
          var f = b.pid;
          for (b.pid = 0, c = 0; c < Yb.length; c++)
            if (Yb[c].pid === f) {
              b.pid = c;
              break;
            }
        } else b.pid = parseInt(b.pid, 10) - 1;
        return b.pid < 0 && (b.pid = 0), b;
      },
      Ic = function () {
        if ((uc && clearTimeout(uc), _a || V)) return void (uc = setTimeout(Ic, 500));
        vc ? clearTimeout(tc) : (vc = !0);
        var a = m + 1,
          b = _b(m);
        b.hasOwnProperty('pid') && (a = b.pid);
        var c = yc + '&gid=' + i.galleryUID + '&pid=' + a;
        zc || (Cc.hash.indexOf(c) === -1 && (Bc = !0));
        var d = Cc.href.split('#')[0] + '#' + c;
        Dc
          ? '#' + c !== window.location.hash && history[zc ? 'replaceState' : 'pushState']('', document.title, d)
          : zc
          ? Cc.replace(d)
          : (Cc.hash = c),
          (zc = !0),
          (tc = setTimeout(function () {
            vc = !1;
          }, 60));
      };
    za('History', {
      publicMethods: {
        initHistory: function () {
          if ((e.extend(i, Ec, !0), i.history)) {
            (Cc = window.location),
              (Bc = !1),
              (Ac = !1),
              (zc = !1),
              (yc = Fc()),
              (Dc = 'pushState' in history),
              yc.indexOf('gid=') > -1 && ((yc = yc.split('&gid=')[0]), (yc = yc.split('?gid=')[0])),
              Ca('afterChange', f.updateURL),
              Ca('unbindEvents', function () {
                e.unbind(window, 'hashchange', f.onHashChange);
              });
            var a = function () {
              (xc = !0),
                Ac ||
                  (Bc
                    ? history.back()
                    : yc
                    ? (Cc.hash = yc)
                    : Dc
                    ? history.pushState('', document.title, Cc.pathname + Cc.search)
                    : (Cc.hash = '')),
                Gc();
            };
            Ca('unbindEvents', function () {
              l && a();
            }),
              Ca('destroy', function () {
                xc || a();
              }),
              Ca('firstUpdate', function () {
                m = Hc().pid;
              });
            var b = yc.indexOf('pid=');
            b > -1 && ((yc = yc.substring(0, b)), '&' === yc.slice(-1) && (yc = yc.slice(0, -1))),
              setTimeout(function () {
                j && e.bind(window, 'hashchange', f.onHashChange);
              }, 40);
          }
        },
        onHashChange: function () {
          return Fc() === yc ? ((Ac = !0), void f.close()) : void (vc || ((wc = !0), f.goTo(Hc().pid), (wc = !1)));
        },
        updateURL: function () {
          Gc(), wc || (zc ? (sc = setTimeout(Ic, 800)) : Ic());
        },
      },
    }),
      e.extend(f, eb);
  };
  return a;
});

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
!(function (a, b) {
  'function' == typeof define && define.amd
    ? define(b)
    : 'object' == typeof exports
    ? (module.exports = b())
    : (a.PhotoSwipeUI_Default = b());
})(this, function () {
  'use strict';
  var a = function (a, b) {
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v = this,
      w = !1,
      x = !0,
      y = !0,
      z = {
        barsSize: { top: 44, bottom: 'auto' },
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (a, b) {
          return a.title ? ((b.children[0].innerHTML = a.title), !0) : ((b.children[0].innerHTML = ''), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          { id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}' },
          { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}' },
          {
            id: 'pinterest',
            label: 'Pin it',
            url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}',
          },
          { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: !0 },
        ],
        getImageURLForShare: function () {
          return a.currItem.src || '';
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return a.currItem.title || '';
        },
        indexIndicatorSep: ' / ',
        fitControlsWidth: 1200,
      },
      A = function (a) {
        if (r) return !0;
        (a = a || window.event), q.timeToIdle && q.mouseUsed && !k && K();
        for (var c, d, e = a.target || a.srcElement, f = e.getAttribute('class') || '', g = 0; g < S.length; g++)
          (c = S[g]), c.onTap && f.indexOf('pswp__' + c.name) > -1 && (c.onTap(), (d = !0));
        if (d) {
          a.stopPropagation && a.stopPropagation(), (r = !0);
          var h = b.features.isOldAndroid ? 600 : 30;
          s = setTimeout(function () {
            r = !1;
          }, h);
        }
      },
      B = function () {
        return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth;
      },
      C = function (a, c, d) {
        b[(d ? 'add' : 'remove') + 'Class'](a, 'pswp__' + c);
      },
      D = function () {
        var a = 1 === q.getNumItemsFn();
        a !== p && (C(d, 'ui--one-slide', a), (p = a));
      },
      E = function () {
        C(i, 'share-modal--hidden', y);
      },
      F = function () {
        return (
          (y = !y),
          y
            ? (b.removeClass(i, 'pswp__share-modal--fade-in'),
              setTimeout(function () {
                y && E();
              }, 300))
            : (E(),
              setTimeout(function () {
                y || b.addClass(i, 'pswp__share-modal--fade-in');
              }, 30)),
          y || H(),
          !1
        );
      },
      G = function (b) {
        b = b || window.event;
        var c = b.target || b.srcElement;
        return (
          a.shout('shareLinkClick', b, c),
          !!c.href &&
            (!!c.hasAttribute('download') ||
              (window.open(
                c.href,
                'pswp_share',
                'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' +
                  (window.screen ? Math.round(screen.width / 2 - 275) : 100)
              ),
              y || F(),
              !1))
        );
      },
      H = function () {
        for (var a, b, c, d, e, f = '', g = 0; g < q.shareButtons.length; g++)
          (a = q.shareButtons[g]),
            (c = q.getImageURLForShare(a)),
            (d = q.getPageURLForShare(a)),
            (e = q.getTextForShare(a)),
            (b = a.url
              .replace('{{url}}', encodeURIComponent(d))
              .replace('{{image_url}}', encodeURIComponent(c))
              .replace('{{raw_image_url}}', c)
              .replace('{{text}}', encodeURIComponent(e))),
            (f +=
              '<a href="' +
              b +
              '" target="_blank" class="pswp__share--' +
              a.id +
              '"' +
              (a.download ? 'download' : '') +
              '>' +
              a.label +
              '</a>'),
            q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
        (i.children[0].innerHTML = f), (i.children[0].onclick = G);
      },
      I = function (a) {
        for (var c = 0; c < q.closeElClasses.length; c++) if (b.hasClass(a, 'pswp__' + q.closeElClasses[c])) return !0;
      },
      J = 0,
      K = function () {
        clearTimeout(u), (J = 0), k && v.setIdle(!1);
      },
      L = function (a) {
        a = a ? a : window.event;
        var b = a.relatedTarget || a.toElement;
        (b && 'HTML' !== b.nodeName) ||
          (clearTimeout(u),
          (u = setTimeout(function () {
            v.setIdle(!0);
          }, q.timeToIdleOutside)));
      },
      M = function () {
        q.fullscreenEl &&
          !b.features.isOldAndroid &&
          (c || (c = v.getFullscreenAPI()),
          c
            ? (b.bind(document, c.eventK, v.updateFullscreen),
              v.updateFullscreen(),
              b.addClass(a.template, 'pswp--supports-fs'))
            : b.removeClass(a.template, 'pswp--supports-fs'));
      },
      N = function () {
        q.preloaderEl &&
          (O(!0),
          l('beforeChange', function () {
            clearTimeout(o),
              (o = setTimeout(function () {
                a.currItem && a.currItem.loading
                  ? (!a.allowProgressiveImg() || (a.currItem.img && !a.currItem.img.naturalWidth)) && O(!1)
                  : O(!0);
              }, q.loadingIndicatorDelay));
          }),
          l('imageLoadComplete', function (b, c) {
            a.currItem === c && O(!0);
          }));
      },
      O = function (a) {
        n !== a && (C(m, 'preloader--active', !a), (n = a));
      },
      P = function (a) {
        var c = a.vGap;
        if (B()) {
          var g = q.barsSize;
          if (q.captionEl && 'auto' === g.bottom)
            if (
              (f ||
                ((f = b.createEl('pswp__caption pswp__caption--fake')),
                f.appendChild(b.createEl('pswp__caption__center')),
                d.insertBefore(f, e),
                b.addClass(d, 'pswp__ui--fit')),
              q.addCaptionHTMLFn(a, f, !0))
            ) {
              var h = f.clientHeight;
              c.bottom = parseInt(h, 10) || 44;
            } else c.bottom = g.top;
          else c.bottom = 'auto' === g.bottom ? 0 : g.bottom;
          c.top = g.top;
        } else c.top = c.bottom = 0;
      },
      Q = function () {
        q.timeToIdle &&
          l('mouseUsed', function () {
            b.bind(document, 'mousemove', K),
              b.bind(document, 'mouseout', L),
              (t = setInterval(function () {
                J++, 2 === J && v.setIdle(!0);
              }, q.timeToIdle / 2));
          });
      },
      R = function () {
        l('onVerticalDrag', function (a) {
          x && a < 0.95 ? v.hideControls() : !x && a >= 0.95 && v.showControls();
        });
        var a;
        l('onPinchClose', function (b) {
          x && b < 0.9 ? (v.hideControls(), (a = !0)) : a && !x && b > 0.9 && v.showControls();
        }),
          l('zoomGestureEnded', function () {
            (a = !1), a && !x && v.showControls();
          });
      },
      S = [
        {
          name: 'caption',
          option: 'captionEl',
          onInit: function (a) {
            e = a;
          },
        },
        {
          name: 'share-modal',
          option: 'shareEl',
          onInit: function (a) {
            i = a;
          },
          onTap: function () {
            F();
          },
        },
        {
          name: 'button--share',
          option: 'shareEl',
          onInit: function (a) {
            h = a;
          },
          onTap: function () {
            F();
          },
        },
        { name: 'button--zoom', option: 'zoomEl', onTap: a.toggleDesktopZoom },
        {
          name: 'counter',
          option: 'counterEl',
          onInit: function (a) {
            g = a;
          },
        },
        { name: 'button--close', option: 'closeEl', onTap: a.close },
        { name: 'button--arrow--left', option: 'arrowEl', onTap: a.prev },
        { name: 'button--arrow--right', option: 'arrowEl', onTap: a.next },
        {
          name: 'button--fs',
          option: 'fullscreenEl',
          onTap: function () {
            c.isFullscreen() ? c.exit() : c.enter();
          },
        },
        {
          name: 'preloader',
          option: 'preloaderEl',
          onInit: function (a) {
            m = a;
          },
        },
      ],
      T = function () {
        var a,
          c,
          e,
          f = function (d) {
            if (d)
              for (var f = d.length, g = 0; g < f; g++) {
                (a = d[g]), (c = a.className);
                for (var h = 0; h < S.length; h++)
                  (e = S[h]),
                    c.indexOf('pswp__' + e.name) > -1 &&
                      (q[e.option]
                        ? (b.removeClass(a, 'pswp__element--disabled'), e.onInit && e.onInit(a))
                        : b.addClass(a, 'pswp__element--disabled'));
              }
          };
        f(d.children);
        var g = b.getChildByClass(d, 'pswp__top-bar');
        g && f(g.children);
      };
    (v.init = function () {
      b.extend(a.options, z, !0),
        (q = a.options),
        (d = b.getChildByClass(a.scrollWrap, 'pswp__ui')),
        (l = a.listen),
        R(),
        l('beforeChange', v.update),
        l('doubleTap', function (b) {
          var c = a.currItem.initialZoomLevel;
          a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
        }),
        l('preventDragEvent', function (a, b, c) {
          var d = a.target || a.srcElement;
          d &&
            d.getAttribute('class') &&
            a.type.indexOf('mouse') > -1 &&
            (d.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) &&
            (c.prevent = !1);
        }),
        l('bindEvents', function () {
          b.bind(d, 'pswpTap click', A),
            b.bind(a.scrollWrap, 'pswpTap', v.onGlobalTap),
            a.likelyTouchDevice || b.bind(a.scrollWrap, 'mouseover', v.onMouseOver);
        }),
        l('unbindEvents', function () {
          y || F(),
            t && clearInterval(t),
            b.unbind(document, 'mouseout', L),
            b.unbind(document, 'mousemove', K),
            b.unbind(d, 'pswpTap click', A),
            b.unbind(a.scrollWrap, 'pswpTap', v.onGlobalTap),
            b.unbind(a.scrollWrap, 'mouseover', v.onMouseOver),
            c &&
              (b.unbind(document, c.eventK, v.updateFullscreen),
              c.isFullscreen() && ((q.hideAnimationDuration = 0), c.exit()),
              (c = null));
        }),
        l('destroy', function () {
          q.captionEl && (f && d.removeChild(f), b.removeClass(e, 'pswp__caption--empty')),
            i && (i.children[0].onclick = null),
            b.removeClass(d, 'pswp__ui--over-close'),
            b.addClass(d, 'pswp__ui--hidden'),
            v.setIdle(!1);
        }),
        q.showAnimationDuration || b.removeClass(d, 'pswp__ui--hidden'),
        l('initialZoomIn', function () {
          q.showAnimationDuration && b.removeClass(d, 'pswp__ui--hidden');
        }),
        l('initialZoomOut', function () {
          b.addClass(d, 'pswp__ui--hidden');
        }),
        l('parseVerticalMargin', P),
        T(),
        q.shareEl && h && i && (y = !0),
        D(),
        Q(),
        M(),
        N();
    }),
      (v.setIdle = function (a) {
        (k = a), C(d, 'ui--idle', a);
      }),
      (v.update = function () {
        x && a.currItem
          ? (v.updateIndexIndicator(),
            q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, 'caption--empty', !a.currItem.title)),
            (w = !0))
          : (w = !1),
          y || F(),
          D();
      }),
      (v.updateFullscreen = function (d) {
        d &&
          setTimeout(function () {
            a.setScrollOffset(0, b.getScrollY());
          }, 50),
          b[(c.isFullscreen() ? 'add' : 'remove') + 'Class'](a.template, 'pswp--fs');
      }),
      (v.updateIndexIndicator = function () {
        q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
      }),
      (v.onGlobalTap = function (c) {
        c = c || window.event;
        var d = c.target || c.srcElement;
        if (!r)
          if (c.detail && 'mouse' === c.detail.pointerType) {
            if (I(d)) return void a.close();
            b.hasClass(d, 'pswp__img') &&
              (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio
                ? q.clickToCloseNonZoomable && a.close()
                : a.toggleDesktopZoom(c.detail.releasePoint));
          } else if (
            (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()),
            q.tapToClose && (b.hasClass(d, 'pswp__img') || I(d)))
          )
            return void a.close();
      }),
      (v.onMouseOver = function (a) {
        a = a || window.event;
        var b = a.target || a.srcElement;
        C(d, 'ui--over-close', I(b));
      }),
      (v.hideControls = function () {
        b.addClass(d, 'pswp__ui--hidden'), (x = !1);
      }),
      (v.showControls = function () {
        (x = !0), w || v.update(), b.removeClass(d, 'pswp__ui--hidden');
      }),
      (v.supportsFullscreen = function () {
        var a = document;
        return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
      }),
      (v.getFullscreenAPI = function () {
        var b,
          c = document.documentElement,
          d = 'fullscreenchange';
        return (
          c.requestFullscreen
            ? (b = { enterK: 'requestFullscreen', exitK: 'exitFullscreen', elementK: 'fullscreenElement', eventK: d })
            : c.mozRequestFullScreen
            ? (b = {
                enterK: 'mozRequestFullScreen',
                exitK: 'mozCancelFullScreen',
                elementK: 'mozFullScreenElement',
                eventK: 'moz' + d,
              })
            : c.webkitRequestFullscreen
            ? (b = {
                enterK: 'webkitRequestFullscreen',
                exitK: 'webkitExitFullscreen',
                elementK: 'webkitFullscreenElement',
                eventK: 'webkit' + d,
              })
            : c.msRequestFullscreen &&
              (b = {
                enterK: 'msRequestFullscreen',
                exitK: 'msExitFullscreen',
                elementK: 'msFullscreenElement',
                eventK: 'MSFullscreenChange',
              }),
          b &&
            ((b.enter = function () {
              return (
                (j = q.closeOnScroll),
                (q.closeOnScroll = !1),
                'webkitRequestFullscreen' !== this.enterK
                  ? a.template[this.enterK]()
                  : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              );
            }),
            (b.exit = function () {
              return (q.closeOnScroll = j), document[this.exitK]();
            }),
            (b.isFullscreen = function () {
              return document[this.elementK];
            })),
          b
        );
      });
  };
  return a;
});

/*!
    jqPhotoSwipe v0.1.1 - jQuery for PhotoSwipe
    https://ergec.github.io/jQuery-for-PhotoSwipe/
    */
(function (a) {
  a.fn.jqPhotoSwipe = function (e) {
    if (this.length) {
      var f = function () {
        var l = window.location.hash.substring(1),
          n = {};
        var k = l.split('&');
        for (var j = 0; j < k.length; j++) {
          if (!k[j]) {
            continue;
          }
          var m = k[j].split('=');
          if (m.length < 2) {
            continue;
          }
          n[m[0]] = m[1];
        }
        if (n.gid) {
          n.gid = n.gid;
        }
        return n;
      };
      var i = {};
      var g = { forceSingleGallery: false, galleryOpen: function (j) {} };
      i.galleries = [];
      i.galleriesindex = [];
      var h = 0;
      var d;
      if ($(".pswp[role='dialog']").length) {
        d = $(".pswp[role='dialog']")[0];
      } else {
        var b =
          '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
        d = $(b).appendTo('body')[0];
      }
      var c = 'pswg-forced';
      this.each(function () {
        var j = $.extend(g, e);
        var n = $(this);
        var m = n.data('fancybox-group');
        if (!m) {
          if (j.forceSingleGallery) {
            m = c;
            n.data('fancybox-group', m);
          } else {
            m = 'pswgname' + i.galleriesindex.length;
            n.data('fancybox-group', m);
          }
        }
        if (i.galleriesindex.indexOf(m) === -1) {
          h = i.galleriesindex.length;
          i.galleriesindex.push(m);
          i.galleries[h] = {};
          i.galleries[h].items = [];
          i.galleries[h].i = 0;
        } else {
          h = i.galleriesindex.indexOf(m);
        }
        var k = h;
        n.data('i', i.galleries[h].i);
        n.data('gid', m);
        i.galleries[k].items.push({ src: n.attr('href'), title: n.attr('title'), w: 0, h: 0 });
        n.off('click').on('click', function (q) {
          q.preventDefault();
          var o = $(this).data('i');
          j.index = o;
          j.galleryUID = $(this).data('gid');
          i.galleries[k].obj = new PhotoSwipe(d, PhotoSwipeUI_Default, i.galleries[k].items, j);
          i.galleries[k].obj.init();
          i.galleries[k].obj.listen('initialZoomInEnd', function () {
            j.galleryOpen(i.galleries[k].obj);
          });
          i.galleries[k].obj.listen('imageLoadComplete', function (r, s) {
            p(r, s);
          });
          i.galleries[k].obj.listen('gettingData', function (r, s) {
            p(r, s);
          });
          function p(r, s) {
            if (s.w == 0 && s.h == 0) {
              var t = new Image();
              t.onload = function () {
                s.w = this.width;
                s.h = this.height;
                s.needsUpdate = true;
                i.galleries[k].obj.updateSize(true);
              };
              t.src = s.src;
            }
          }
        });
        var l = f();
        if (l.gid) {
          if (l.gid.toString() === m && l.pid.toString() === (i.galleries[h].i + 1).toString()) {
            n.trigger('click');
          }
        }
        i.galleries[h].i++;
      });
      return i;
    }
  };
})(jQuery);

/*!
 * Account page
 */
if (
  ('undefined' == typeof window.Shopify && (window.Shopify = {}),
  (Shopify.bind = function (a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }),
  (Shopify.setSelectorByValue = function (a, b) {
    for (var c = 0, d = a.options.length; d > c; c++) {
      var e = a.options[c];
      if (b == e.value || b == e.innerHTML) return (a.selectedIndex = c), c;
    }
  }),
  (Shopify.addListener = function (a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent('on' + b, c);
  }),
  (Shopify.postLink = function (a, b) {
    b = b || {};
    var c = b.method || 'post',
      d = b.parameters || {},
      e = document.createElement('form');
    e.setAttribute('method', c), e.setAttribute('action', a);
    for (var f in d) {
      var g = document.createElement('input');
      g.setAttribute('type', 'hidden'), g.setAttribute('name', f), g.setAttribute('value', d[f]), e.appendChild(g);
    }
    document.body.appendChild(e), e.submit(), document.body.removeChild(e);
  }),
  (Shopify.CountryProvinceSelector = function (a, b, c) {
    (this.countryEl = document.getElementById(a)),
      (this.provinceEl = document.getElementById(b)),
      (this.provinceContainer = document.getElementById(c.hideElement || b)),
      Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this)),
      this.initCountry(),
      this.initProvince();
  }),
  (Shopify.CountryProvinceSelector.prototype = {
    initCountry: function () {
      var a = this.countryEl.getAttribute('data-default');
      Shopify.setSelectorByValue(this.countryEl, a), this.countryHandler();
    },
    initProvince: function () {
      var a = this.provinceEl.getAttribute('data-default');
      a && this.provinceEl.options.length > 0 && Shopify.setSelectorByValue(this.provinceEl, a);
    },
    countryHandler: function (a) {
      var b = this.countryEl.options[this.countryEl.selectedIndex],
        c = b.getAttribute('data-provinces'),
        d = JSON.parse(c);
      if ((this.clearOptions(this.provinceEl), d && 0 == d.length)) this.provinceContainer.style.display = 'none';
      else {
        for (var e = 0; e < d.length; e++) {
          var b = document.createElement('option');
          (b.value = d[e][0]), (b.innerHTML = d[e][1]), this.provinceEl.appendChild(b);
        }
        this.provinceContainer.style.display = '';
      }
    },
    clearOptions: function (a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild);
    },
    setOptions: function (a, b) {
      var c = 0;
      for (b.length; c < b.length; c++) {
        var d = document.createElement('option');
        (d.value = b[c]), (d.innerHTML = b[c]), a.appendChild(d);
      }
    },
  }),
  (Shopify.CustomerAddress = {
    toggleForm: function (a) {
      var b = document.getElementById('view_addresses'),
        c = document.getElementById('edit_address_' + a);
      return (
        (b.style.display = 'none' == b.style.display ? '' : 'none'),
        (c.style.display = 'none' == c.style.display ? '' : 'none'),
        !1
      );
    },
    toggleNewForm: function () {
      var a = document.getElementById('add_address'),
        b = document.getElementById('address_tables');
      return (
        (a.style.display = 'none' == a.style.display ? '' : 'none'),
        (b.style.display = 'none' == a.style.display ? '' : 'none'),
        !1
      );
    },
    destroy: function (a, b) {
      confirm(b || 'Are you sure you wish to delete this address?') &&
        Shopify.postLink('/account/addresses/' + a, { parameters: { _method: 'delete' } });
    },
  }),
  (Shopify.queryParams = {}),
  location.search.length)
)
  for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++)
    (aKeyValue = aCouples[i].split('=')),
      aKeyValue.length > 1 &&
        (Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]));

// History
typeof JSON != 'object' && (JSON = {}),
  (function () {
    'use strict';
    function f(e) {
      return e < 10 ? '0' + e : e;
    }
    function quote(e) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(e)
          ? '"' +
            e.replace(escapable, function (e) {
              var t = meta[e];
              return typeof t == 'string' ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    function str(e, t) {
      var n,
        r,
        i,
        s,
        o = gap,
        u,
        a = t[e];
      a && typeof a == 'object' && typeof a.toJSON == 'function' && (a = a.toJSON(e)),
        typeof rep == 'function' && (a = rep.call(t, e, a));
      switch (typeof a) {
        case 'string':
          return quote(a);
        case 'number':
          return isFinite(a) ? String(a) : 'null';
        case 'boolean':
        case 'null':
          return String(a);
        case 'object':
          if (!a) return 'null';
          (gap += indent), (u = []);
          if (Object.prototype.toString.apply(a) === '[object Array]') {
            s = a.length;
            for (n = 0; n < s; n += 1) u[n] = str(n, a) || 'null';
            return (
              (i =
                u.length === 0
                  ? '[]'
                  : gap
                  ? '[\n' + gap + u.join(',\n' + gap) + '\n' + o + ']'
                  : '[' + u.join(',') + ']'),
              (gap = o),
              i
            );
          }
          if (rep && typeof rep == 'object') {
            s = rep.length;
            for (n = 0; n < s; n += 1)
              typeof rep[n] == 'string' &&
                ((r = rep[n]), (i = str(r, a)), i && u.push(quote(r) + (gap ? ': ' : ':') + i));
          } else
            for (r in a)
              Object.prototype.hasOwnProperty.call(a, r) &&
                ((i = str(r, a)), i && u.push(quote(r) + (gap ? ': ' : ':') + i));
          return (
            (i =
              u.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + u.join(',\n' + gap) + '\n' + o + '}'
                : '{' + u.join(',') + '}'),
            (gap = o),
            i
          );
      }
    }
    typeof Date.prototype.toJSON != 'function' &&
      ((Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              '-' +
              f(this.getUTCMonth() + 1) +
              '-' +
              f(this.getUTCDate()) +
              'T' +
              f(this.getUTCHours()) +
              ':' +
              f(this.getUTCMinutes()) +
              ':' +
              f(this.getUTCSeconds()) +
              'Z'
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function (e) {
            return this.valueOf();
          }));
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = { '\b': '\\b', '  ': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' },
      rep;
    typeof JSON.stringify != 'function' &&
      (JSON.stringify = function (e, t, n) {
        var r;
        (gap = ''), (indent = '');
        if (typeof n == 'number') for (r = 0; r < n; r += 1) indent += ' ';
        else typeof n == 'string' && (indent = n);
        rep = t;
        if (!t || typeof t == 'function' || (typeof t == 'object' && typeof t.length == 'number'))
          return str('', { '': e });
        throw new Error('JSON.stringify');
      }),
      typeof JSON.parse != 'function' &&
        (JSON.parse = function (text, reviver) {
          function walk(e, t) {
            var n,
              r,
              i = e[t];
            if (i && typeof i == 'object')
              for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) &&
                  ((r = walk(i, n)), r !== undefined ? (i[n] = r) : delete i[n]);
            return reviver.call(e, t, i);
          }
          var j;
          (text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (e) {
                return '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
              }));
          if (
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
            )
          )
            return (j = eval('(' + text + ')')), typeof reviver == 'function' ? walk({ '': j }, '') : j;
          throw new SyntaxError('JSON.parse');
        });
  })(),
  (function (e, t) {
    'use strict';
    var n = (e.History = e.History || {}),
      r = e.jQuery;
    if (typeof n.Adapter != 'undefined') throw new Error('History.js Adapter has already been loaded...');
    (n.Adapter = {
      bind: function (e, t, n) {
        r(e).bind(t, n);
      },
      trigger: function (e, t, n) {
        r(e).trigger(t, n);
      },
      extractEventData: function (e, n, r) {
        var i = (n && n.originalEvent && n.originalEvent[e]) || (r && r[e]) || t;
        return i;
      },
      onDomLoad: function (e) {
        r(e);
      },
    }),
      typeof n.init != 'undefined' && n.init();
  })(window),
  (function (e, t) {
    'use strict';
    var n = e.document,
      r = e.setTimeout || r,
      i = e.clearTimeout || i,
      s = e.setInterval || s,
      o = (e.History = e.History || {});
    if (typeof o.initHtml4 != 'undefined') throw new Error('History.js HTML4 Support has already been loaded...');
    (o.initHtml4 = function () {
      if (typeof o.initHtml4.initialized != 'undefined') return !1;
      (o.initHtml4.initialized = !0),
        (o.enabled = !0),
        (o.savedHashes = []),
        (o.isLastHash = function (e) {
          var t = o.getHashByIndex(),
            n;
          return (n = e === t), n;
        }),
        (o.isHashEqual = function (e, t) {
          return (
            (e = encodeURIComponent(e).replace(/%25/g, '%')), (t = encodeURIComponent(t).replace(/%25/g, '%')), e === t
          );
        }),
        (o.saveHash = function (e) {
          return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0);
        }),
        (o.getHashByIndex = function (e) {
          var t = null;
          return (
            typeof e == 'undefined'
              ? (t = o.savedHashes[o.savedHashes.length - 1])
              : e < 0
              ? (t = o.savedHashes[o.savedHashes.length + e])
              : (t = o.savedHashes[e]),
            t
          );
        }),
        (o.discardedHashes = {}),
        (o.discardedStates = {}),
        (o.discardState = function (e, t, n) {
          var r = o.getHashByState(e),
            i;
          return (i = { discardedState: e, backState: n, forwardState: t }), (o.discardedStates[r] = i), !0;
        }),
        (o.discardHash = function (e, t, n) {
          var r = { discardedHash: e, backState: n, forwardState: t };
          return (o.discardedHashes[e] = r), !0;
        }),
        (o.discardedState = function (e) {
          var t = o.getHashByState(e),
            n;
          return (n = o.discardedStates[t] || !1), n;
        }),
        (o.discardedHash = function (e) {
          var t = o.discardedHashes[e] || !1;
          return t;
        }),
        (o.recycleState = function (e) {
          var t = o.getHashByState(e);
          return o.discardedState(e) && delete o.discardedStates[t], !0;
        }),
        o.emulated.hashChange &&
          ((o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t = '',
              r,
              i,
              u,
              a,
              f = Boolean(o.getHash());
            return (
              o.isInternetExplorer()
                ? ((r = 'historyjs-iframe'),
                  (i = n.createElement('iframe')),
                  i.setAttribute('id', r),
                  i.setAttribute('src', '#'),
                  (i.style.display = 'none'),
                  n.body.appendChild(i),
                  i.contentWindow.document.open(),
                  i.contentWindow.document.close(),
                  (u = ''),
                  (a = !1),
                  (o.checkerFunction = function () {
                    if (a) return !1;
                    a = !0;
                    var n = o.getHash(),
                      r = o.getHash(i.contentWindow.document);
                    return (
                      n !== t
                        ? ((t = n),
                          r !== n &&
                            ((u = r = n),
                            i.contentWindow.document.open(),
                            i.contentWindow.document.close(),
                            (i.contentWindow.document.location.hash = o.escapeHash(n))),
                          o.Adapter.trigger(e, 'hashchange'))
                        : r !== u && ((u = r), f && r === '' ? o.back() : o.setHash(r, !1)),
                      (a = !1),
                      !0
                    );
                  }))
                : (o.checkerFunction = function () {
                    var n = o.getHash() || '';
                    return n !== t && ((t = n), o.Adapter.trigger(e, 'hashchange')), !0;
                  }),
              o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)),
              !0
            );
          }),
          o.Adapter.onDomLoad(o.hashChangeInit)),
        o.emulated.pushState &&
          ((o.onHashChange = function (t) {
            var n = (t && t.newURL) || o.getLocationHref(),
              r = o.getHashByUrl(n),
              i = null,
              s = null,
              u = null,
              a;
            return o.isLastHash(r)
              ? (o.busy(!1), !1)
              : (o.doubleCheckComplete(),
                o.saveHash(r),
                r && o.isTraditionalAnchor(r)
                  ? (o.Adapter.trigger(e, 'anchorchange'), o.busy(!1), !1)
                  : ((i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0)),
                    o.isLastSavedState(i)
                      ? (o.busy(!1), !1)
                      : ((s = o.getHashByState(i)),
                        (a = o.discardedState(i)),
                        a
                          ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1)
                          : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))));
          }),
          o.Adapter.bind(e, 'hashchange', o.onHashChange),
          (o.pushState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, '%');
            if (o.getHashByUrl(r))
              throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
            if (i !== !1 && o.busy())
              return o.pushQueue({ scope: o, callback: o.pushState, args: arguments, queue: i }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
              u = o.getHashByState(s),
              a = o.getState(!1),
              f = o.getHashByState(a),
              l = o.getHash(),
              c = o.expectedStateId == s.id;
            return (
              o.storeState(s),
              (o.expectedStateId = s.id),
              o.recycleState(s),
              o.setTitle(s),
              u === f
                ? (o.busy(!1), !1)
                : (o.saveState(s),
                  c || o.Adapter.trigger(e, 'statechange'),
                  !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1),
                  o.busy(!1),
                  !0)
            );
          }),
          (o.replaceState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, '%');
            if (o.getHashByUrl(r))
              throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
            if (i !== !1 && o.busy())
              return o.pushQueue({ scope: o, callback: o.replaceState, args: arguments, queue: i }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
              u = o.getHashByState(s),
              a = o.getState(!1),
              f = o.getHashByState(a),
              l = o.getStateByIndex(-2);
            return (
              o.discardState(a, s, l),
              u === f
                ? (o.storeState(s),
                  (o.expectedStateId = s.id),
                  o.recycleState(s),
                  o.setTitle(s),
                  o.saveState(s),
                  o.Adapter.trigger(e, 'statechange'),
                  o.busy(!1))
                : o.pushState(s.data, s.title, s.url, !1),
              !0
            );
          })),
        o.emulated.pushState &&
          o.getHash() &&
          !o.emulated.hashChange &&
          o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, 'hashchange');
          });
    }),
      typeof o.init != 'undefined' && o.init();
  })(window),
  (function (e, t) {
    'use strict';
    var n = e.console || t,
      r = e.document,
      i = e.navigator,
      s = !1,
      o = e.setTimeout,
      u = e.clearTimeout,
      a = e.setInterval,
      f = e.clearInterval,
      l = e.JSON,
      c = e.alert,
      h = (e.History = e.History || {}),
      p = e.history;
    try {
      (s = e.sessionStorage), s.setItem('TEST', '1'), s.removeItem('TEST');
    } catch (d) {
      s = !1;
    }
    (l.stringify = l.stringify || l.encode), (l.parse = l.parse || l.decode);
    if (typeof h.init != 'undefined') throw new Error('History.js Core has already been loaded...');
    (h.init = function (e) {
      return typeof h.Adapter == 'undefined'
        ? !1
        : (typeof h.initCore != 'undefined' && h.initCore(), typeof h.initHtml4 != 'undefined' && h.initHtml4(), !0);
    }),
      (h.initCore = function (d) {
        if (typeof h.initCore.initialized != 'undefined') return !1;
        (h.initCore.initialized = !0),
          (h.options = h.options || {}),
          (h.options.hashChangeInterval = h.options.hashChangeInterval || 100),
          (h.options.safariPollInterval = h.options.safariPollInterval || 500),
          (h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500),
          (h.options.disableSuid = h.options.disableSuid || !1),
          (h.options.storeInterval = h.options.storeInterval || 1e3),
          (h.options.busyDelay = h.options.busyDelay || 250),
          (h.options.debug = h.options.debug || !1),
          (h.options.initialTitle = h.options.initialTitle || r.title),
          (h.options.html4Mode = h.options.html4Mode || !1),
          (h.options.delayInit = h.options.delayInit || !1),
          (h.intervalList = []),
          (h.clearAllIntervals = function () {
            var e,
              t = h.intervalList;
            if (typeof t != 'undefined' && t !== null) {
              for (e = 0; e < t.length; e++) f(t[e]);
              h.intervalList = null;
            }
          }),
          (h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments);
          }),
          (h.log = function () {
            var e = typeof n != 'undefined' && typeof n.log != 'undefined' && typeof n.log.apply != 'undefined',
              t = r.getElementById('log'),
              i,
              s,
              o,
              u,
              a;
            e
              ? ((u = Array.prototype.slice.call(arguments)),
                (i = u.shift()),
                typeof n.debug != 'undefined' ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u]))
              : (i = '\n' + arguments[0] + '\n');
            for (s = 1, o = arguments.length; s < o; ++s) {
              a = arguments[s];
              if (typeof a == 'object' && typeof l != 'undefined')
                try {
                  a = l.stringify(a);
                } catch (f) {}
              i += '\n' + a + '\n';
            }
            return t ? ((t.value += i + '\n-----\n'), (t.scrollTop = t.scrollHeight - t.clientHeight)) : e || c(i), !0;
          }),
          (h.getInternetExplorerMajorVersion = function () {
            var e = (h.getInternetExplorerMajorVersion.cached =
              typeof h.getInternetExplorerMajorVersion.cached != 'undefined'
                ? h.getInternetExplorerMajorVersion.cached
                : (function () {
                    var e = 3,
                      t = r.createElement('div'),
                      n = t.getElementsByTagName('i');
                    while ((t.innerHTML = '<!--[if gt IE ' + ++e + ']><i></i><![endif]-->') && n[0]);
                    return e > 4 ? e : !1;
                  })());
            return e;
          }),
          (h.isInternetExplorer = function () {
            var e = (h.isInternetExplorer.cached =
              typeof h.isInternetExplorer.cached != 'undefined'
                ? h.isInternetExplorer.cached
                : Boolean(h.getInternetExplorerMajorVersion()));
            return e;
          }),
          h.options.html4Mode
            ? (h.emulated = { pushState: !0, hashChange: !0 })
            : (h.emulated = {
                pushState: !Boolean(
                  e.history &&
                    e.history.pushState &&
                    e.history.replaceState &&
                    !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) &&
                    !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)
                ),
                hashChange: Boolean(
                  !('onhashchange' in e || 'onhashchange' in r) ||
                    (h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                ),
              }),
          (h.enabled = !h.emulated.pushState),
          (h.bugs = {
            setHash: Boolean(
              !h.emulated.pushState &&
                i.vendor === 'Apple Computer, Inc.' &&
                /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
            ),
            safariPoll: Boolean(
              !h.emulated.pushState &&
                i.vendor === 'Apple Computer, Inc.' &&
                /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
            ),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7),
          }),
          (h.isEmptyObject = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          }),
          (h.cloneObject = function (e) {
            var t, n;
            return e ? ((t = l.stringify(e)), (n = l.parse(t))) : (n = {}), n;
          }),
          (h.getRootUrl = function () {
            var e = r.location.protocol + '//' + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ':' + r.location.port;
            return (e += '/'), e;
          }),
          (h.getBaseHref = function () {
            var e = r.getElementsByTagName('base'),
              t = null,
              n = '';
            return (
              e.length === 1 && ((t = e[0]), (n = t.href.replace(/[^\/]+$/, ''))),
              (n = n.replace(/\/+$/, '')),
              n && (n += '/'),
              n
            );
          }),
          (h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e;
          }),
          (h.getPageUrl = function () {
            var e = h.getState(!1, !1),
              t = (e || {}).url || h.getLocationHref(),
              n;
            return (
              (n = t.replace(/\/+$/, '').replace(/[^\/]+$/, function (e, t, n) {
                return /\./.test(e) ? e : e + '/';
              })),
              n
            );
          }),
          (h.getBasePageUrl = function () {
            var e =
              h
                .getLocationHref()
                .replace(/[#\?].*/, '')
                .replace(/[^\/]+$/, function (e, t, n) {
                  return /[^\/]$/.test(e) ? '' : e;
                })
                .replace(/\/+$/, '') + '/';
            return e;
          }),
          (h.getFullUrl = function (e, t) {
            var n = e,
              r = e.substring(0, 1);
            return (
              (t = typeof t == 'undefined' ? !0 : t),
              /[a-z]+\:\/\//.test(e) ||
                (r === '/'
                  ? (n = h.getRootUrl() + e.replace(/^\/+/, ''))
                  : r === '#'
                  ? (n = h.getPageUrl().replace(/#.*/, '') + e)
                  : r === '?'
                  ? (n = h.getPageUrl().replace(/[\?#].*/, '') + e)
                  : t
                  ? (n = h.getBaseUrl() + e.replace(/^(\.\/)+/, ''))
                  : (n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, ''))),
              n.replace(/\#$/, '')
            );
          }),
          (h.getShortUrl = function (e) {
            var t = e,
              n = h.getBaseUrl(),
              r = h.getRootUrl();
            return (
              h.emulated.pushState && (t = t.replace(n, '')),
              (t = t.replace(r, '/')),
              h.isTraditionalAnchor(t) && (t = './' + t),
              (t = t.replace(/^(\.\/)+/g, './').replace(/\#$/, '')),
              t
            );
          }),
          (h.getLocationHref = function (e) {
            return (
              (e = e || r),
              e.URL === e.location.href
                ? e.location.href
                : e.location.href === decodeURIComponent(e.URL)
                ? e.URL
                : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, '')) === e.location.hash
                ? e.location.href
                : e.URL.indexOf('#') == -1 && e.location.href.indexOf('#') != -1
                ? e.location.href
                : e.URL || e.location.href
            );
          }),
          (h.store = {}),
          (h.idToState = h.idToState || {}),
          (h.stateToId = h.stateToId || {}),
          (h.urlToId = h.urlToId || {}),
          (h.storedStates = h.storedStates || []),
          (h.savedStates = h.savedStates || []),
          (h.normalizeStore = function () {
            (h.store.idToState = h.store.idToState || {}),
              (h.store.urlToId = h.store.urlToId || {}),
              (h.store.stateToId = h.store.stateToId || {});
          }),
          (h.getState = function (e, t) {
            typeof e == 'undefined' && (e = !0), typeof t == 'undefined' && (t = !0);
            var n = h.getLastSavedState();
            return (
              !n && t && (n = h.createStateObject()), e && ((n = h.cloneObject(n)), (n.url = n.cleanUrl || n.url)), n
            );
          }),
          (h.getIdByState = function (e) {
            var t = h.extractId(e.url),
              n;
            if (!t) {
              n = h.getStateString(e);
              if (typeof h.stateToId[n] != 'undefined') t = h.stateToId[n];
              else if (typeof h.store.stateToId[n] != 'undefined') t = h.store.stateToId[n];
              else {
                for (;;) {
                  t = new Date().getTime() + String(Math.random()).replace(/\D/g, '');
                  if (typeof h.idToState[t] == 'undefined' && typeof h.store.idToState[t] == 'undefined') break;
                }
                (h.stateToId[n] = t), (h.idToState[t] = e);
              }
            }
            return t;
          }),
          (h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != 'object') e = {};
            if (typeof e.normalized != 'undefined') return e;
            if (!e.data || typeof e.data != 'object') e.data = {};
            return (
              (t = {}),
              (t.normalized = !0),
              (t.title = e.title || ''),
              (t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref())),
              (t.hash = h.getShortUrl(t.url)),
              (t.data = h.cloneObject(e.data)),
              (t.id = h.getIdByState(t)),
              (t.cleanUrl = t.url.replace(/\??\&_suid.*/, '')),
              (t.url = t.cleanUrl),
              (n = !h.isEmptyObject(t.data)),
              (t.title || n) &&
                h.options.disableSuid !== !0 &&
                ((t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, '')),
                /\?/.test(t.hash) || (t.hash += '?'),
                (t.hash += '&_suid=' + t.id)),
              (t.hashedUrl = h.getFullUrl(t.hash)),
              (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl),
              t
            );
          }),
          (h.createStateObject = function (e, t, n) {
            var r = { data: e, title: t, url: n };
            return (r = h.normalizeState(r)), r;
          }),
          (h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n;
          }),
          (h.getStateString = function (e) {
            var t, n, r;
            return (
              (t = h.normalizeState(e)), (n = { data: t.data, title: e.title, url: e.url }), (r = l.stringify(n)), r
            );
          }),
          (h.getStateId = function (e) {
            var t, n;
            return (t = h.normalizeState(e)), (n = t.id), n;
          }),
          (h.getHashByState = function (e) {
            var t, n;
            return (t = h.normalizeState(e)), (n = t.hash), n;
          }),
          (h.extractId = function (e) {
            var t, n, r, i;
            return (
              e.indexOf('#') != -1 ? (i = e.split('#')[0]) : (i = e),
              (n = /(.*)\&_suid=([0-9]+)$/.exec(i)),
              (r = n ? n[1] || e : e),
              (t = n ? String(n[2] || '') : ''),
              t || !1
            );
          }),
          (h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t;
          }),
          (h.extractState = function (e, t) {
            var n = null,
              r,
              i;
            return (
              (t = t || !1),
              (r = h.extractId(e)),
              r && (n = h.getStateById(r)),
              n ||
                ((i = h.getFullUrl(e)),
                (r = h.getIdByUrl(i) || !1),
                r && (n = h.getStateById(r)),
                !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))),
              n
            );
          }),
          (h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n;
          }),
          (h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t;
          }),
          (h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t;
          }),
          (h.hasUrlDuplicate = function (e) {
            var t = !1,
              n;
            return (n = h.extractState(e.url)), (t = n && n.id !== e.id), t;
          }),
          (h.storeState = function (e) {
            return (h.urlToId[e.url] = e.id), h.storedStates.push(h.cloneObject(e)), e;
          }),
          (h.isLastSavedState = function (e) {
            var t = !1,
              n,
              r,
              i;
            return h.savedStates.length && ((n = e.id), (r = h.getLastSavedState()), (i = r.id), (t = n === i)), t;
          }),
          (h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0);
          }),
          (h.getStateByIndex = function (e) {
            var t = null;
            return (
              typeof e == 'undefined'
                ? (t = h.savedStates[h.savedStates.length - 1])
                : e < 0
                ? (t = h.savedStates[h.savedStates.length + e])
                : (t = h.savedStates[e]),
              t
            );
          }),
          (h.getCurrentIndex = function () {
            var e = null;
            return h.savedStates.length < 1 ? (e = 0) : (e = h.savedStates.length - 1), e;
          }),
          (h.getHash = function (e) {
            var t = h.getLocationHref(e),
              n;
            return (n = h.getHashByUrl(t)), n;
          }),
          (h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return (t = decodeURIComponent(t)), t;
          }),
          (h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, '').replace(/#.*/, '');
            return t;
          }),
          (h.setHash = function (e, t) {
            var n, i;
            return t !== !1 && h.busy()
              ? (h.pushQueue({ scope: h, callback: h.setHash, args: arguments, queue: t }), !1)
              : (h.busy(!0),
                (n = h.extractState(e, !0)),
                n && !h.emulated.pushState
                  ? h.pushState(n.data, n.title, n.url, !1)
                  : h.getHash() !== e &&
                    (h.bugs.setHash
                      ? ((i = h.getPageUrl()), h.pushState(null, null, i + '#' + e, !1))
                      : (r.location.hash = e)),
                h);
          }),
          (h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return (
              (n = e.encodeURIComponent(n)),
              h.bugs.hashEscape ||
                (n = n.replace(/\%21/g, '!').replace(/\%26/g, '&').replace(/\%3D/g, '=').replace(/\%3F/g, '?')),
              n
            );
          }),
          (h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, '$2');
            return (t = h.unescapeHash(t)), t;
          }),
          (h.setTitle = function (e) {
            var t = e.title,
              n;
            t || ((n = h.getStateByIndex(0)), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
              r.getElementsByTagName('title')[0].innerHTML = t
                .replace('<', '&lt;')
                .replace('>', '&gt;')
                .replace(' & ', ' &amp; ');
            } catch (i) {}
            return (r.title = t), h;
          }),
          (h.queues = []),
          (h.busy = function (e) {
            typeof e != 'undefined' ? (h.busy.flag = e) : typeof h.busy.flag == 'undefined' && (h.busy.flag = !1);
            if (!h.busy.flag) {
              u(h.busy.timeout);
              var t = function () {
                var e, n, r;
                if (h.busy.flag) return;
                for (e = h.queues.length - 1; e >= 0; --e) {
                  n = h.queues[e];
                  if (n.length === 0) continue;
                  (r = n.shift()), h.fireQueueItem(r), (h.busy.timeout = o(t, h.options.busyDelay));
                }
              };
              h.busy.timeout = o(t, h.options.busyDelay);
            }
            return h.busy.flag;
          }),
          (h.busy.flag = !1),
          (h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || []);
          }),
          (h.pushQueue = function (e) {
            return (h.queues[e.queue || 0] = h.queues[e.queue || 0] || []), h.queues[e.queue || 0].push(e), h;
          }),
          (h.queue = function (e, t) {
            return (
              typeof e == 'function' && (e = { callback: e }),
              typeof t != 'undefined' && (e.queue = t),
              h.busy() ? h.pushQueue(e) : h.fireQueueItem(e),
              h
            );
          }),
          (h.clearQueue = function () {
            return (h.busy.flag = !1), (h.queues = []), h;
          }),
          (h.stateChanged = !1),
          (h.doubleChecker = !1),
          (h.doubleCheckComplete = function () {
            return (h.stateChanged = !0), h.doubleCheckClear(), h;
          }),
          (h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), (h.doubleChecker = !1)), h;
          }),
          (h.doubleCheck = function (e) {
            return (
              (h.stateChanged = !1),
              h.doubleCheckClear(),
              h.bugs.ieDoubleCheck &&
                (h.doubleChecker = o(function () {
                  return h.doubleCheckClear(), h.stateChanged || e(), !0;
                }, h.options.doubleCheckInterval)),
              h
            );
          }),
          (h.safariStatePoll = function () {
            var t = h.extractState(h.getLocationHref()),
              n;
            if (!h.isLastSavedState(t))
              return (n = t), n || (n = h.createStateObject()), h.Adapter.trigger(e, 'popstate'), h;
            return;
          }),
          (h.back = function (e) {
            return e !== !1 && h.busy()
              ? (h.pushQueue({ scope: h, callback: h.back, args: arguments, queue: e }), !1)
              : (h.busy(!0),
                h.doubleCheck(function () {
                  h.back(!1);
                }),
                p.go(-1),
                !0);
          }),
          (h.forward = function (e) {
            return e !== !1 && h.busy()
              ? (h.pushQueue({ scope: h, callback: h.forward, args: arguments, queue: e }), !1)
              : (h.busy(!0),
                h.doubleCheck(function () {
                  h.forward(!1);
                }),
                p.go(1),
                !0);
          }),
          (h.go = function (e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) h.forward(t);
            else {
              if (!(e < 0)) throw new Error('History.go: History.go requires a positive or negative integer passed.');
              for (n = -1; n >= e; --n) h.back(t);
            }
            return h;
          });
        if (h.emulated.pushState) {
          var v = function () {};
          (h.pushState = h.pushState || v), (h.replaceState = h.replaceState || v);
        } else
          (h.onPopState = function (t, n) {
            var r = !1,
              i = !1,
              s,
              o;
            return (
              h.doubleCheckComplete(),
              (s = h.getHash()),
              s
                ? ((o = h.extractState(s || h.getLocationHref(), !0)),
                  o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, 'anchorchange'), h.busy(!1)),
                  (h.expectedStateId = !1),
                  !1)
                : ((r = h.Adapter.extractEventData('state', t, n) || !1),
                  r
                    ? (i = h.getStateById(r))
                    : h.expectedStateId
                    ? (i = h.getStateById(h.expectedStateId))
                    : (i = h.extractState(h.getLocationHref())),
                  i || (i = h.createStateObject(null, null, h.getLocationHref())),
                  (h.expectedStateId = !1),
                  h.isLastSavedState(i)
                    ? (h.busy(!1), !1)
                    : (h.storeState(i),
                      h.saveState(i),
                      h.setTitle(i),
                      h.Adapter.trigger(e, 'statechange'),
                      h.busy(!1),
                      !0))
            );
          }),
            h.Adapter.bind(e, 'popstate', h.onPopState),
            (h.pushState = function (t, n, r, i) {
              if (h.getHashByUrl(r) && h.emulated.pushState)
                throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
              if (i !== !1 && h.busy())
                return h.pushQueue({ scope: h, callback: h.pushState, args: arguments, queue: i }), !1;
              h.busy(!0);
              var s = h.createStateObject(t, n, r);
              return (
                h.isLastSavedState(s)
                  ? h.busy(!1)
                  : (h.storeState(s),
                    (h.expectedStateId = s.id),
                    p.pushState(s.id, s.title, s.url),
                    h.Adapter.trigger(e, 'popstate')),
                !0
              );
            }),
            (h.replaceState = function (t, n, r, i) {
              if (h.getHashByUrl(r) && h.emulated.pushState)
                throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
              if (i !== !1 && h.busy())
                return h.pushQueue({ scope: h, callback: h.replaceState, args: arguments, queue: i }), !1;
              h.busy(!0);
              var s = h.createStateObject(t, n, r);
              return (
                h.isLastSavedState(s)
                  ? h.busy(!1)
                  : (h.storeState(s),
                    (h.expectedStateId = s.id),
                    p.replaceState(s.id, s.title, s.url),
                    h.Adapter.trigger(e, 'popstate')),
                !0
              );
            });
        if (s) {
          try {
            h.store = l.parse(s.getItem('History.store')) || {};
          } catch (m) {
            h.store = {};
          }
          h.normalizeStore();
        } else (h.store = {}), h.normalizeStore();
        h.Adapter.bind(e, 'unload', h.clearAllIntervals),
          h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))),
          s &&
            ((h.onUnload = function () {
              var e, t, n;
              try {
                e = l.parse(s.getItem('History.store')) || {};
              } catch (r) {
                e = {};
              }
              (e.idToState = e.idToState || {}), (e.urlToId = e.urlToId || {}), (e.stateToId = e.stateToId || {});
              for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t];
              }
              for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t];
              }
              for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t];
              }
              (h.store = e), h.normalizeStore(), (n = l.stringify(e));
              try {
                s.setItem('History.store', n);
              } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                s.length && (s.removeItem('History.store'), s.setItem('History.store', n));
              }
            }),
            h.intervalList.push(a(h.onUnload, h.options.storeInterval)),
            h.Adapter.bind(e, 'beforeunload', h.onUnload),
            h.Adapter.bind(e, 'unload', h.onUnload));
        if (!h.emulated.pushState) {
          h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
          if (i.vendor === 'Apple Computer, Inc.' || (i.appCodeName || '') === 'Mozilla')
            h.Adapter.bind(e, 'hashchange', function () {
              h.Adapter.trigger(e, 'popstate');
            }),
              h.getHash() &&
                h.Adapter.onDomLoad(function () {
                  h.Adapter.trigger(e, 'hashchange');
                });
        }
      }),
      (!h.options || !h.options.delayInit) && h.init();
  })(window);

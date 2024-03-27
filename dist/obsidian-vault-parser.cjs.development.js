'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var glob = _interopDefault(require('glob-promise'));
var matter = _interopDefault(require('gray-matter'));
var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var getFileName = function getFileName(filepath) {
  var parsed = path.parse(filepath);
  var name = parsed.name.toLowerCase();
  var ext = parsed.ext.toLowerCase();
  if (ext !== '.md') {
    name = name + ext;
  }
  return {
    name: name,
    ext: ext
  };
};
var readFile = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
    var contents, stats;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fs.promises.readFile(path, "utf-8");
        case 2:
          contents = _context.sent;
          _context.next = 5;
          return fs.promises.stat(path);
        case 5:
          stats = _context.sent;
          return _context.abrupt("return", {
            contents: contents,
            stats: stats
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function readFile(_x) {
    return _ref.apply(this, arguments);
  };
}();
var parseWikiLinks = function parseWikiLinks(content) {
  var linkRegex = /\[\[([a-zA-Z0-9\s-]+\|?[a-zA-Z0-9\s]*)\]\]/g;
  var matches = Array.from(content.matchAll(linkRegex));
  return matches.map(function (m) {
    var splits = m[1].split("|");
    return splits[0].toLowerCase();
  });
};

var non_md_extensions = ['svg', 'png', 'jpeg', 'jpg', 'gif'];
var non_md_extension = /*#__PURE__*/new RegExp("(" + /*#__PURE__*/non_md_extensions.join('|') + ")$");
var connectLinks = function connectLinks(vault) {
  for (var _i = 0, _Object$values = Object.values(vault.files); _i < _Object$values.length; _i++) {
    var file = _Object$values[_i];
    var links = file.content ? parseWikiLinks(file.content).filter(function (name) {
      return vault.files[name] != null;
    }) : [];
    file.links = links;
  }
};
var findFilesThatLinkTo = function findFilesThatLinkTo(vault, name) {
  var files = Object.values(vault.files).filter(function (f) {
    return f.name !== name && f.links.includes(name);
  });
  return files.map(function (f) {
    return f.name;
  });
};
var connectBackLinks = function connectBackLinks(vault) {
  for (var _i2 = 0, _Object$values2 = Object.values(vault.files); _i2 < _Object$values2.length; _i2++) {
    var file = _Object$values2[_i2];
    file.backLinks = findFilesThatLinkTo(vault, file.name);
  }
};
var removeUnpublished = function removeUnpublished(vault, isPublished) {
  for (var _i3 = 0, _Object$values3 = Object.values(vault.files); _i3 < _Object$values3.length; _i3++) {
    var file = _Object$values3[_i3];
    if (!isPublished(file)) {
      delete vault.files[file.name];
    }
  }
};
var parseFile = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(abs_file_path, abs_vault_path) {
    var _getFileName, name, ext, vault_relative_path, stats, _yield$readFile, rawContent, _stats, _matter, frontMatter, content;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _getFileName = getFileName(abs_file_path), name = _getFileName.name, ext = _getFileName.ext;
          console.log('parsed', name, ext);
          vault_relative_path = path.relative(abs_vault_path, abs_file_path);
          if (!(abs_file_path.toLowerCase().match(non_md_extension) !== null)) {
            _context.next = 11;
            break;
          }
          console.log('parsed non-md', abs_file_path);
          _context.next = 7;
          return fs.promises.stat(abs_file_path);
        case 7:
          stats = _context.sent;
          return _context.abrupt("return", {
            path: vault_relative_path,
            name: name,
            ext: ext,
            links: [],
            backLinks: [],
            tags: [],
            frontMatter: {},
            content: null,
            createdAt: stats.birthtimeMs,
            updatedAt: stats.mtimeMs
          });
        case 11:
          console.log('parsed md', abs_file_path);
          _context.next = 14;
          return readFile(abs_file_path);
        case 14:
          _yield$readFile = _context.sent;
          rawContent = _yield$readFile.contents;
          _stats = _yield$readFile.stats;
          _matter = matter(rawContent), frontMatter = _matter.data, content = _matter.content;
          return _context.abrupt("return", {
            path: vault_relative_path,
            name: name,
            ext: ext,
            links: [],
            backLinks: [],
            tags: [],
            frontMatter: frontMatter,
            content: content,
            createdAt: _stats.birthtimeMs,
            updatedAt: _stats.mtimeMs
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function parseFile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var emptyVault = function emptyVault(path) {
  return {
    path: path,
    files: {},
    config: {}
  };
};
var readVaultConfig = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(path) {
    var _yield$readFile2, configContents;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return readFile(path + "/.obsidian/config");
        case 3:
          _yield$readFile2 = _context2.sent;
          configContents = _yield$readFile2.contents;
          return _context2.abrupt("return", JSON.parse(configContents));
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {});
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function readVaultConfig(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var readVault = /*#__PURE__*/function () {
  var _ref3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(vault_path, options) {
    var abs_vault_path, files, vault, _iterator, _step, filePath, file;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          abs_vault_path = path.normalize(vault_path);
          _context3.next = 3;
          return glob(abs_vault_path + "/**/*.{md," + non_md_extensions.join(',') + "}");
        case 3:
          files = _context3.sent;
          vault = emptyVault(abs_vault_path);
          _context3.next = 7;
          return readVaultConfig(abs_vault_path);
        case 7:
          vault.config = _context3.sent;
          _iterator = _createForOfIteratorHelperLoose(files);
        case 9:
          if ((_step = _iterator()).done) {
            _context3.next = 17;
            break;
          }
          filePath = _step.value;
          _context3.next = 13;
          return parseFile(filePath, abs_vault_path);
        case 13:
          file = _context3.sent;
          vault.files[file.name] = file;
        case 15:
          _context3.next = 9;
          break;
        case 17:
          if ((options == null ? void 0 : options.isPublished) != null) {
            removeUnpublished(vault, options.isPublished);
          }
          connectLinks(vault);
          connectBackLinks(vault);
          return _context3.abrupt("return", vault);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function readVault(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.connectBackLinks = connectBackLinks;
exports.connectLinks = connectLinks;
exports.emptyVault = emptyVault;
exports.parseFile = parseFile;
exports.readVault = readVault;
exports.readVaultConfig = readVaultConfig;
exports.removeUnpublished = removeUnpublished;
//# sourceMappingURL=obsidian-vault-parser.cjs.development.js.map

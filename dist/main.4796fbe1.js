// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var demo = document.querySelector("#demo");
var style = document.querySelector("#style");
var str = "\n/*\u4F60\u597D\u6211\u662F\u4E00\u4E2A\u524D\u7AEF\u65B0\u4EBA\uFF0C\n\u63A5\u4E0B\u6765\u6211\u8981\u52A0\u6837\u5F0F\u4E86*/\n\nbody {\n    margin: 0;\n    padding: 0;\n  }\n  /*\u5C06div1\u505A\u51FA\u4E00\u4E2A\u592A\u6781\uFF0C\u5148\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u56FA\u5B9A\u4F4D\u7F6E*/\n  .div1 {\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n    position: fixed;\n    left:50%;\n    transform: translateX(-50%);\n   \n    top: 20px;\n  }\n  /* \u5C06\u5176\u53D8\u6210\u4E00\u4E2A\u5706\u5F62\uFF0C\u52A0\u9634\u5F71\uFF0C\u53BB\u9664\u8FB9\u6846 */\n  .div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border: none;\n  }\n  /* \u5C06\u5DE6\u8FB9\u53D8\u6210\u767D\u8272\u53F3\u8FB9\u53D8\u6210\u9ED1\u8272 */\n  \n  .div1 {\n    background: rgb(255, 255, 255);\n    background: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 50%,\n      rgba(0, 0, 0, 1) 50%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  /* \u5728div1\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u4F2A\u5143\u7D20\uFF0C\u53EF\u4EE5\u770B\u505Aspan\uFF0C\u6240\u4EE5\u5C06\u5176\u53D8\u6210block */\n  .div1::before {\n    display: block;\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    content: \"\";\n  \n    background-color: white;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    /* \u6A2A\u5411\u5C45\u4E2D */\n    transform: translateX(-50%);\n    /* \u5229\u7528\u955C\u50CF\u6E10\u53D8\u5C06\u767D\u8272\u53D8\u6210\u767D\u9ED1\u767D */\n    background: rgb(0, 0, 0);\n    background: radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(255, 255, 255, 1) 100%\n    );\n  }\n  /* \u540C\u6837\u7C7B\u4F3C\u5728div1\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u505A\u6B64\u5904\u7406 */\n  .div1::after {\n    display: block;\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    content: \"\";\n    position: absolute;\n    background-color: black;\n    left: 50%;\n    top: 50%;\n    /* \u6A2A\u5411\u5C45\u4E2D */\n    transform: translateX(-50%);\n    /* \u5229\u7528\u955C\u50CF\u6E10\u53D8\u5C06\u767D\u8272\u53D8\u6210\u9ED1\u767D\u9ED1 */\n    background: rgb(255, 255, 255);\n    background: radial-gradient(\n      circle,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n  /*\u8BBE\u7F6E\u6362\u884C*/\n  #demo {\n    word-break: break-all;\n  }\n";
var str2 = "";

var n = 0;

var step = function step() {
  setTimeout(function () {
    if (str[n] === "\n") {
      str2 += "</br>";
    } else if (str[n] === " ") {
      str2 += "&nbsp;";
    } else {
      str2 += str[n];
    }
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 9999999); //window向下滚动99999行；
    demo.scrollTo(0, 99999999);
    demo.innerHTML = str2;
    if (n + 1 < str.length) {
      n += 1;
      step();
    } else {}
  }, 50);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.4796fbe1.map
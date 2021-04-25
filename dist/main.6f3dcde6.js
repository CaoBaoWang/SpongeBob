// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"AQoi":[function(require,module,exports) {

},{}],"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u80A4\u8272*/\n.wrapper {\n    background-color: #fff400;\n    display: flex;\n    justify-content: center;\n}\n\n\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u773C\u775B*/\n.eye {\n    border: 5px solid black;\n    border-radius: 50%;\n    width: 190px;\n    height: 190px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    /*transform: translate(-50%);*/\n    background: white;\n}\n\n.eye.left {\n    transform: translate(-96%);\n}\n.eye.right {\n    transform: translate(-4%);\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u77B3\u5B54*/\n\n.eye .eyeball {\n\n\n    border:3px solid black;\n    border-radius: 50%;\n    width: 58px;\n    height: 58px;\n    position: absolute;\n    top: 70px;\n    background-color: #0093dc;\n}\n.eye.left .eyeball {\n    position: absolute;\n    right: 40px;\n}\n.eye.right .eyeball {\n    left: 40px;\n}\n\n.eyeball::before {\n    display: block;\n    content: '';\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    background-color: black;\n    border-radius: 50%;\n\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u7709\u6BDB*/\n\n.eyelash {\n    width: 100px;\n    height: 30px;\n    position: absolute;\n    left: 50%;\n    top: 72px;\n    display: flex;\n    justify-content: space-between;\n}\n.eyelash.left {\n    transform: translate(-140%);\n}\n\n.eyelash.right {\n    transform: translate(40%);\n}\n.eyelash div {\n    width: 10px;\n    height: 100%;\n    background-color: black;\n}\n.eyelash1 , .eyelash4{\n    transform: rotate(-.05turn) translatey(10px);\n}\n.eyelash3 , .eyelash6{\n    transform: rotate(.05turn) translatey(10px);\n}\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u9F3B\u5B50*/\n\n.nose {\n    border: 5px solid black;\n    width: 46px;\n    height: 114px;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%);\n    top: 176px;\n    border-radius: 50% / 54%;\n    background-color: #fff400;\n    border-bottom: none;\n\n}\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u8138\u988A*/\n\n.cheek {\n    border: 4px solid #d9241c;\n    border-top-width: 5px;\n    border-bottom: 2px solid transparent;\n    width: 86px;\n    height: 54px;\n    position: absolute;\n    left: 50%;\n    top: 246px;\n    border-radius: 50%;\n    background-color: #fff400;\n    display: flex;\n\n}\n.cheek.left {\n    transform: translate(-240%) rotate(-8deg);\n}\n.cheek.right {\n    transform: translate(140%) rotate(8deg);\n}\n.cheek div{\n    border: 1px solid red;\n    width: 6px;\n    height: 6px;\n    border-radius:50%;\n    background-color: #d9241c;\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u75D8\u75D8*/\n\n.pimple1 {\n    position: absolute;\n    left: 30%;\n    top: 35%;\n}\n\n.pimple2 {\n    position: absolute;\n    left: 60%;\n    top: 35%;\n}\n\n.pimple3 {\n    position: absolute;\n    left: 45%;\n    top: 65%;\n}\n\n.pimple4 {\n    position: absolute;\n    left: 30%;\n    top: 35%;\n}\n.pimple5 {\n    position: absolute;\n    left: 60%;\n    top: 35%;\n}\n\n.pimple6 {\n    position: absolute;\n    left: 45%;\n    top: 65%;\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u5634\u5DF4*/\n\n.mouth {\n    /*border:1px solid red;*/\n    width: 400px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 290px;\n    transform: translate(-50%);\n}\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u5634\u89D2*/\n.corners {\n    border : 1px solid transparent;\n    border-top:5px solid black ;\n    border-radius: 50%;\n    width: 60px;\n    height: 50px;\n    position: absolute;\n\n}\n.corners.left{\n    left: 10px;\n    transform: rotate(-25deg);\n}\n.corners.right{\n    right: 10px;\n    transform: rotate(25deg);\n\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u5634\u5507*/\n\n.lip {\n    width: 380px;\n    height: 80px;\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    transform: translate(-50% );\n    overflow: hidden;\n}\n\n.lip:before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    width: 100%;\n    height: 200px;\n    border-bottom: 5px solid black;\n    border-radius: 50%;\n    border-top: transparent;\n    position: absolute;\n    top: -128px;\n\n}\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u7259\u9F7F*/\n\n.tooth {\n    width: 90px;\n    height: 50px;\n    position: absolute;\n    left: 50%;\n    top: 78px;\n    transform: translate(-50%);\n    display: flex;\n    justify-content: space-between;\n\n}\n.tooth div {\n    border: 5px solid black;\n    height: 100%;\n    width: 40px;\n    background-color:white;\n}\n.tooth .left {\n    transform: rotate(5deg);\n}\n\n.tooth .right {\n    transform: rotate(-5deg);\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u7684\u4E0B\u5DF4*/\n\n.jaw {\n    width:  200px;\n    height: 80px;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%);\n    top: 430px;\n    display: flex;\n}\n\n.jaw > div {\n    border:2px solid transparent;\n    flex-grow: 1;\n    border-bottom: 8px solid #d9241c;\n    border-radius: 50%;\n    position: relative;\n    top: -50px;\n\n}\n.jaw > .left {\n    transform: rotate(12deg) translateX(11px);\n\n}\n\n.jaw > .right {\n    transform: rotate(-12deg) translateX(-11px);\n}\n\n/*\u51C6\u5907\u6D77\u7EF5\u5B9D\u5B9D\u8EAB\u4E0A\u7684\u5B54*/\n\n.hole {\n    border-radius: 50%;\n    background-color: #d1c900;\n    position: absolute;\n    left: 50%;\n}\n\n.hole.n1 {\n    width: 48px;\n    height: 48px;\n    transform: translate(-350px,100px);\n\n}\n\n.hole.n2 {\n    width: 60px;\n    height: 60px;\n    transform: translate(200px, 40px);\n}\n\n.hole.n3 {\n    width:  42px;\n    height: 42px;\n    transform: translate(240px,200px);\n\n}\n\n.hole.n4 {\n    width:  48px;\n    height: 48px;\n    transform: translate(200px,340px);\n\n}\n\n\n.hole.n5 {\n    width: 36px;\n    height: 36px;\n    transform: translate(-250px,330px);\n}\n\n\n\n.hole.n6 {\n    width:  48px;\n    height: 48px;\n    transform: translate(-170px,460px);\n\n}\n\n.hole.n7 {\n    width:  30px;\n    height: 30px;\n    transform: translate(130px,470px);\n\n}\n\n";
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

require("./reset.css");

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style.css'
if (/(iPhone|iPad|iPod|iOS|(Android))/i.test(navigator.userAgent)) {//移动端
  // if(spongeBob)spongeBob.classList.add('mobile-scale')
}

var n = 0; // const style = document.getElementById('style')
// const html = document.getElementById('html')
// style.textContent = str
// html.textContent = str

var player = {
  id: undefined,
  n: 1,
  speed: 20,
  content: '',
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#pause': 'pause',
    '#play': 'play',
    '#slowly': 'slowly',
    '#middle': 'middle',
    '#fast': 'fast'
  },
  init: function init() {
    Object.keys(player.events).forEach(function (key) {
      document.querySelector(key).addEventListener('click', player[player.events[key]]);
    });
    player.play();
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.speed);
  },
  run: function run() {
    if (n === _css.default.length - 1) {
      console.log(_css.default.length);
      window.clearInterval(player.id);
      return;
    }

    if (_css.default[n] === '\n') {
      player.content += '<br>';
    } else if (_css.default[n] === ' ') {
      player.content += '&nbsp';
    } else {
      player.content += _css.default[n];
    }

    player.ui.style.innerHTML = _css.default.substr(0, n);
    player.ui.html.innerHTML = player.content;
    player.ui.html.scrollTo(0, player.ui.html.scrollHeight);
    n++;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slowly: function slowly() {
    player.speed = 50;
    player.play();
  },
  middle: function middle() {
    player.speed = 20;
    player.play();
  },
  fast: function fast() {
    player.speed = 0;
    player.play();
  }
};
player.init();
},{"./reset.css":"AQoi","./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.6f3dcde6.js.map
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
})({"songs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var songsList = [{
  id: 1,
  url: "./music/don't-hmu.mp3",
  title: "Don't HMU",
  artist: "Savantloup",
  time: "2:43",
  cover: "https://images.genius.com/b3aaf5ffd4cf4b4eab294086ad7949eb.1000x1000x1.jpg",
  color: "rgb(122, 112, 190)"
}, {
  id: 2,
  url: "./music/clout-hill.mp3",
  title: "Cloud Hill",
  artist: "F5",
  time: "3:18",
  cover: "https://i1.sndcdn.com/artworks-28upo8zYFyIfi1ZB-NMQ4BQ-t500x500.jpg",
  color: "rgb(120, 141, 46)"
}, {
  id: 3,
  url: "./music/stargazing.mp3",
  title: "STARGAZING",
  artist: "Travis Scott",
  time: "4:32",
  cover: "https://images.genius.com/9c8508d3056b146aee2ad72d5f0606e7.926x926x1.jpg",
  color: "rgb(90, 152, 193)"
}, {
  id: 4,
  url: "./music/anime-thighs.mp3",
  title: "Anime Thighs",
  artist: "MC Virgin",
  time: "2:35",
  cover: "https://images.genius.com/bac3a0dd317844c6bf98f0896c75bdf2.1000x1000x1.jpg",
  color: "rgb(195, 138, 61)"
}, {
  id: 5,
  url: "./music/a-lot.mp3",
  title: "A lot",
  artist: "21 Savage feat. J. Cole",
  time: "4:49",
  cover: "https://images.genius.com/fdf55cd3f0aaf3b48e1437d99bdfbcd1.1000x1000x1.jpg",
  color: "rgb(184, 177, 174)"
}, {
  id: 6,
  url: "./music/toosie-slide.mp3",
  title: "Toosie Slide",
  artist: "Drake",
  time: "4:08",
  cover: "https://images.genius.com/c27f4115b093ba3744f4784ec6f03c29.1000x1000x1.png",
  color: "rgb(121, 163, 191)"
}, {
  id: 7,
  url: './music/through-the-wire.mp3',
  title: "Through the Wire",
  artist: "Kanye West",
  time: "3:41",
  cover: "https://images.genius.com/0bffd93463afe53e7f651f72bedfc78b.1000x1000x1.jpg",
  color: "rgb(204, 142, 34)"
}, {
  id: 8,
  url: "./music/stay-schemin.mp3",
  title: "Stay Schemin'",
  artist: "Rick Ross feat. Drake",
  time: "4:28",
  cover: "https://images.genius.com/8696d51bb67d330c6690792e2d975c62.700x700x1.jpg",
  color: "rgb(204, 203, 195)"
}, {
  id: 9,
  url: "./music/mask-off.mp3",
  title: "Mask Off",
  artist: "Future",
  time: "3:25",
  cover: "https://images.genius.com/ee2a2f360d0b469d8cebfe6dc5a058d7.1000x994x1.jpg",
  color: "rgb(220, 197, 86)"
}, {
  id: 10,
  url: "./music/fresh.mp3",
  title: "Fresh",
  artist: "Kool & the Gang",
  time: "4:24",
  cover: "https://images.genius.com/2cb7d1f8e124a549624c53fa91624f95.1000x1000x1.jpg",
  color: "rgb(200, 84, 76)"
}, {
  id: 11,
  url: "./music/dirty-money.mp3",
  title: "Dirty Money",
  artist: "Clipse",
  time: "3:45",
  cover: "https://images.genius.com/7521267b7988b507395d65324d39651d.1000x1000x1.jpg",
  color: "rgb(202, 186, 166)"
}, {
  id: 12,
  url: "./music/protect-ya-neck.mp3",
  title: "Protect Ya Neck",
  artist: "Wu-Tang Clan",
  time: "5:03",
  cover: "https://images.genius.com/d73cfa7698dd285430e7fb0682f2d02e.1000x1000x1.jpg",
  color: "rgb(220, 197, 86)"
}, {
  id: 13,
  url: "./music/easy-lover.mp3",
  title: "Easy Lover",
  artist: "Philip Bailey feat. Phil Collins",
  time: "5:06",
  cover: "https://images.genius.com/8cf608268596d3f6da530c54a32cbbc4.1000x996x1.jpg",
  color: "rgb(107, 71, 66)"
}, {
  id: 14,
  url: "./music/do-not-disturb.mp3",
  title: "Do Not Disturb",
  artist: "Drake",
  time: "4:44",
  cover: "https://images.genius.com/492890e920533797aa7eccf68e467b8a.1000x1000x1.jpg",
  color: "rgb(15, 98, 164)"
}, {
  id: 15,
  url: "./music/enormous-penis.mp3",
  title: "Enormous Penis",
  artist: "Da Vinci's Notebook",
  time: "2:45",
  cover: "https://images.genius.com/450fa42aaf301d77867ed1ec74b96c49.999x999x1.png",
  color: "rgb(168, 207, 211)"
}];
var _default = songsList;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _songs = _interopRequireDefault(require("./songs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var App = function () {
  //data and state of the player
  var songs = _songs.default;
  var currentPlayingIndex = 0;
  var currentSong = new Audio(songs[currentPlayingIndex].url);
  var isPlaying = false; //cache the DOM

  var playlistEl = document.querySelector(".playlist");
  var background = document.querySelector("body");
  var playPause = document.querySelector("button");
  var headerImage = document.querySelector("img");
  var headerSong = document.querySelector(".player__song");
  var headerArtist = document.querySelector(".player__artist");
  var trackbar = document.querySelector(".trackbar");
  var trackbarInner = document.querySelector(".trackbar-inner"); //functions

  var init = function init() {
    render();
  };

  var render = function render() {
    var htmlMarkUp = "";
    songs.forEach(function (songObject, index) {
      htmlMarkUp += "\n                <li class=\"playlist__song ".concat(index === currentPlayingIndex ? "playlist__song-active" : "", "\">\n                    <div class=\"play__pause\">\n                        ").concat(index === currentPlayingIndex ? "<i class=\"fas fa-pause\"></i>" : "", "\n                    </div>\n                    <div class=\"playlist__song-details\">\n                        <span class=\"playlist__song-name\">").concat(songObject.title, "</span>\n                        <br>\n                        <span class=\"playlist__song-artist ").concat(index === currentPlayingIndex ? "playlist__song-artist-active" : "", "\">").concat(songObject.artist, "</span>\n                    </div>\n                    <div class=\"playlist__song-duration ").concat(index === currentPlayingIndex ? "playlist__song-duration-active" : "", "\">\n                        ").concat(songObject.time, "\n                    </div>\n                    <div class=\"playlist__song-blocker\"></div>\n                </li>\n            ");
    });
    playlistEl.innerHTML = htmlMarkUp;
    changeBackground();
    togglePlayPauseButton();
    renderHeader();
    listners();
  };

  var changeBackground = function changeBackground() {
    background.style.background = "linear-gradient(to bottom, ".concat(songs[currentPlayingIndex].color, ", black)");
  };

  var togglePlayPauseButton = function togglePlayPauseButton() {
    if (isPlaying) {
      playPause.innerText = "Pause";
      playlistEl.children[currentPlayingIndex].firstElementChild.innerHTML = "<i class=\"fas fa-pause\"></i>";
    } else {
      playPause.innerText = "Play";
      playlistEl.children[currentPlayingIndex].firstElementChild.innerHTML = "<i class=\"fas fa-play\"></i>";
    }
  };

  var renderHeader = function renderHeader() {
    headerImage.src = songs[currentPlayingIndex].cover;
    headerSong.innerText = songs[currentPlayingIndex].title;
    headerArtist.innerText = songs[currentPlayingIndex].artist;
  };

  var addPlayButton = function addPlayButton(e) {
    if (!e.target.parentElement.classList.contains("playlist__song-active")) {
      e.target.parentElement.children[0].innerHTML = "<i class=\"fas fa-play\"></i>";
    }
  };

  var deletePlayButton = function deletePlayButton(e) {
    if (!e.target.parentElement.classList.contains("playlist__song-active")) {
      e.target.parentElement.children[0].innerHTML = "";
    }
  };

  var mainPlay = function mainPlay(e) {
    var songIndexArr = _toConsumableArray(playlistEl.children);

    if (currentPlayingIndex === songIndexArr.indexOf(e.target.parentElement)) {
      togglePlayPause();
    } else {
      currentPlayingIndex = songIndexArr.indexOf(e.target.parentElement);
      changeSongSource();
      togglePlayPause();
      render();
    }
  };

  var togglePlayPause = function togglePlayPause() {
    if (currentSong.paused) {
      currentSong.play();
      isPlaying = true;
      togglePlayPauseButton();
      setInterval(setTrackBar, 100);
    } else {
      currentSong.pause();
      isPlaying = false;
      togglePlayPauseButton();
    }
  };

  var changeSongSource = function changeSongSource() {
    currentSong.src = songs[currentPlayingIndex].url;
  };

  var playNext = function playNext() {
    if (currentPlayingIndex === 14) {
      currentPlayingIndex = 0;
    } else {
      currentPlayingIndex++;
      currentSong = new Audio(songs[currentPlayingIndex].url);
      currentSong.play();
      render();
    }
  };

  var setTrackBar = function setTrackBar() {
    var percentage = currentSong.currentTime / currentSong.duration * 100;
    trackbarInner.style.width = "".concat(percentage, "%");
  };

  var listners = function listners() {
    Array.prototype.forEach.call(playlistEl.children, function (song) {
      song.addEventListener("mouseover", addPlayButton);
      song.addEventListener("mouseout", deletePlayButton);
      song.addEventListener("click", mainPlay);
    });
    currentSong.addEventListener("ended", playNext);
    playPause.addEventListener("click", togglePlayPause);
  };

  return {
    init: init,
    listners: listners
  };
}();

App.init();
},{"./songs.js":"songs.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63801" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
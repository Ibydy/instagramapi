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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSONP = function () {
    function JSONP() {
        _classCallCheck(this, JSONP);
    }

    _createClass(JSONP, null, [{
        key: 'send',
        value: function send(src, options) {
            var callback_name = options.callbackName || 'callback',
                on_success = options.onSuccess || function () {},
                on_timeout = options.onTimeout || function () {},
                timeout = options.timeout || 10; // sec

            var timeout_trigger = window.setTimeout(function () {
                window[callback_name] = function () {};
                on_timeout();
            }, timeout * 1000);

            window[callback_name] = function (data) {
                window.clearTimeout(timeout_trigger);
                on_success(data);
            };

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = src;

            document.getElementsByTagName('head')[0].appendChild(script);
        }
    }]);

    return JSONP;
}();

module.exports.JSONP = JSONP;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSONPOptions = function JSONPOptions(onSuccess) {
    _classCallCheck(this, JSONPOptions);

    this.callbackName = 'handleStuff';
    this.onTimeout = function () {
        return console.log('timeout!');
    };
    this.timeout = 5;
    this.onSuccess = onSuccess ? onSuccess : function (json) {
        return console.log('success!', json);
    };
};

module.exports.JSONPOptions = JSONPOptions;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostCreator = function () {
    function PostCreator(postData) {
        _classCallCheck(this, PostCreator);

        this.postData = postData;

        this.createPost();
    }

    _createClass(PostCreator, [{
        key: 'createPost',
        value: function createPost() {
            this.element = document.createElement('div');
            this.element.classList = [].concat(_toConsumableArray(this.element.classList), ['col']);
            this.element.appendChild(this.createProfile());
            this.element.appendChild(this.createMainImg());
            this.element.appendChild(this.createLikes());
            this.element.appendChild(this.createTags());
            var grid = document.getElementsByClassName('grid')[0];
            grid.appendChild(this.element);
        }
    }, {
        key: 'createProfileImg',
        value: function createProfileImg() {
            var profileImg = document.createElement("img");
            profileImg.setAttribute("src", this.postData.user.profile_picture);
            profileImg.classList = [].concat(_toConsumableArray(profileImg.classList), ['profile-image']);
            return profileImg;
        }
    }, {
        key: 'createProfileText',
        value: function createProfileText() {
            var profileText = document.createElement("div");
            profileText.classList = [].concat(_toConsumableArray(profileText.classList), ['profile-text']);
            var profileNickName = document.createElement("div");
            profileNickName.innerText = this.postData.user.username;
            var profileFullName = document.createElement("span");
            profileFullName.innerText = this.postData.user.full_name;
            profileText.appendChild(profileNickName);
            profileText.appendChild(profileFullName);

            return profileText;
        }
    }, {
        key: 'createProfile',
        value: function createProfile() {
            var profile = document.createElement('div');
            profile.classList = [].concat(_toConsumableArray(profile.classList), ['profile']);
            profile.appendChild(this.createProfileImg());
            profile.appendChild(this.createProfileText());
            return profile;
        }
    }, {
        key: 'createMainImg',
        value: function createMainImg() {
            var img = document.createElement("img");
            img.setAttribute("src", this.postData.images.low_resolution.url);
            img.classList = [].concat(_toConsumableArray(img.classList), ['image']);
            return img;
        }
    }, {
        key: 'createLikes',
        value: function createLikes() {
            var _this = this;

            var likes = document.createElement("div");
            likes.innerText = this.postData.likes.count;
            likes.onclick = function () {
                alert(_this.postData.id);
            };
            return likes;
        }
    }, {
        key: 'createTags',
        value: function createTags() {
            var tags = document.createElement("div");
            this.postData.tags.forEach(function (tag) {
                var el = document.createElement("span");
                el.innerText = '#' + tag;
                tags.appendChild(el);
            });
            return tags;
        }
    }]);

    return PostCreator;
}();

module.exports.PostCreator = PostCreator;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var JSONP = __webpack_require__(0).JSONP;
var JSONPOptions = __webpack_require__(1).JSONPOptions;
var PostCreator = __webpack_require__(2).PostCreator;
var URL = 'https://api.instagram.com/v1/users/691623/media/recent?callback=handleStuff&access_token=691623.1419b97.479e4603aff24de596b1bf18891729f3&count=20&_=1493110540271';

var onSuccess = function onSuccess(response) {
   response.data.forEach(function (post) {
      return new PostCreator(post);
   });
};

JSONP.send(URL, new JSONPOptions(onSuccess));

/***/ })
/******/ ]);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lenis = _interopRequireDefault(require("@studio-freight/lenis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var lenis = function lenis() {
  var lenis = new _lenis["default"]({
    duration: 1,
    easing: function easing(t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

var _default = lenis;
exports["default"] = _default;
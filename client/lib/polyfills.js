(function(window) {
    if(!("console" in window)) {
        window.console = {
            log:    function() {},
            warn:   function() {},
            error:  function() {}
        };
    }
})(window);

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
    'use strict';
    if (this == null) {
      throw new TypeError();
    }
    var n, k, t = Object(this),
        len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }
    n = 0;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) { // shortcut for verifying if it's NaN
        n = 0;
      } else if (n != 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if (n >= len) {
      return -1;
    }
    for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}
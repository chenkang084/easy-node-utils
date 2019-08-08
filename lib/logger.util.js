"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var warning = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.warn.apply(console, args);
};
exports.warning = warning;
var info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.info.apply(console, args);
};
exports.info = info;

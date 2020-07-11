"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.uuid = void 0;
var uuid_1 = require("uuid");
exports.uuid = function () {
    return uuid_1.v4();
};
exports.generateId = function (length) {
    if (length === void 0) { length = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var noceStr = '', maxPos = chars.length;
    while (length--)
        noceStr += chars[(Math.random() * maxPos) | 0];
    return noceStr;
};

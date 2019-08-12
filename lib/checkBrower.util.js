"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIE() {
    var ua = window.navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    return is_ie;
}
exports.isIE = isIE;

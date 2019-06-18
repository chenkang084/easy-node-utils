"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
function convertNumberWithCommas(val) {
    if (val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    src_1.loggerUtil.warning("the [" + val + "] paramters of convertNumberWithCommas is null.");
    return val;
}
exports.convertNumberWithCommas = convertNumberWithCommas;

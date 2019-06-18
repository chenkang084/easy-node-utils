"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
function convertNumberWithCommas(val) {
    if (val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    index_1.loggerUtil.warning("the [" + val + "] paramters of convertNumberWithCommas is null.");
    return val;
}
exports.convertNumberWithCommas = convertNumberWithCommas;

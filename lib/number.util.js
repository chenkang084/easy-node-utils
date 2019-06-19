"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_util_1 = require("./logger.util");
function convertNumberWithCommas(val) {
    if (val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    logger_util_1.warning("the paramters:" + val + " of convertNumberWithCommas is null.");
    return val;
}
exports.convertNumberWithCommas = convertNumberWithCommas;

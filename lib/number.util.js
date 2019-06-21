"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_util_1 = require("./logger.util");
function convertNumberWithCommas(val) {
    if (isNumber(val)) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    logger_util_1.warning("the paramters:" + val + " of convertNumberWithCommas is null or not a number.");
    return val;
}
exports.convertNumberWithCommas = convertNumberWithCommas;
/**
 * check the parameter if it is a number type
 * @param val
 * @returns true is a number
 */
function isNumber(val) {
    return !isNaN(val);
}
exports.isNumber = isNumber;

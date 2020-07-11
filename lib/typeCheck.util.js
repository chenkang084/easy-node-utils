"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isTrue = exports.isObject = void 0;
exports.isObject = function (paramter) {
    return typeof paramter === 'object';
};
exports.isTrue = function (paramter) {
    return !!paramter;
};
exports.isEmpty = function (paramter) {
    console.log(paramter);
    var type = typeof paramter;
    if (type === 'undefined') {
        return true;
    }
    else if (type === 'string') {
        return paramter.length === 0;
    }
    else if (type === 'number') {
        return false;
    }
    else if (type === 'object') {
        return Object.keys(paramter).length === 0;
    }
    else {
        return false;
    }
};

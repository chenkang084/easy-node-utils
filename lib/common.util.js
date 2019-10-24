"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = function (seconds) {
    if (!seconds) {
        throw new Error('seconds must be not null.');
    }
    else {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, seconds);
        });
    }
};

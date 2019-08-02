"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
exports.convertMinutesToDayHourMinute = function (minutes) {
    var days = Math.floor(minutes / (60 * 24));
    var hours = days
        ? Math.floor((minutes - days * 60 * 24) / 60)
        : Math.floor(minutes / 60);
    var minute = Math.floor(minutes - days * 60 * 24 - hours * 60);
    var text = '';
    if (days > 1) {
        text += days + " days ";
    }
    else if (days === 1) {
        text += days + " day ";
    }
    if (hours > 1) {
        text += hours + " hours ";
    }
    else if (hours === 1) {
        text += hours + " hour ";
    }
    if (minute > 1) {
        text += minute + " minutes";
    }
    else if (minute === 1) {
        text += minute + " minute";
    }
    return text;
};
exports.convertMinutesToDayHourMinute(86399999 / 1000 / 60);
exports.convertDateByType = function (date, dateType) {
    return moment_1.default(date).format(dateType);
};
exports.convertDateToYYYYMMDD = function (date, dateType) {
    return moment_1.default(date, dateType).format('YYYYMMDD');
};
exports.getCurrentDayAsYYYYMMDD = function () {
    return moment_1.default().format('YYYYMMDD');
};

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
    var minute = minutes - days * 60 * 24 - hours * 60;
    return "" + (days ? days + " days " : '') + (hours ? hours + " hours " : '') + (minute ? minute + " minutes" : '');
};
exports.convertDateToYYYYMMDD = function (date, dateType) {
    return moment_1.default(date, dateType).format('YYYYMMDD');
};
exports.getCurrentDayAsYYYYMMDD = function () {
    return moment_1.default().format('YYYYMMDD');
};

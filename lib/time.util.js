"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertMinutesToDayHourMinute(minutes) {
    var days = Math.floor(minutes / (60 * 24));
    var hours = days
        ? Math.floor((minutes - days * 60 * 24) / 60)
        : Math.floor(minutes / 60);
    var minute = minutes - days * 60 * 24 - hours * 60;
    return "" + (days ? days + " days " : '') + (hours ? hours + " hours " : '') + (minute ? minute + " minutes" : '');
}
exports.convertMinutesToDayHourMinute = convertMinutesToDayHourMinute;

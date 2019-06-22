"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkBrower_util_1 = require("./checkBrower.util");
var logger_util_1 = require("./logger.util");
var handleDownload = function (contentDisposition, data, filename) {
    try {
        if (contentDisposition) {
            filename = contentDisposition
                .split(';')
                .filter(function (item) { return !!item; })[1]
                .split('=')[1];
        }
    }
    catch (error) {
        logger_util_1.warning(error);
    }
    var downloadUrl = window.URL.createObjectURL(data);
    var a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
};
exports.fetchDownload = function (fetch, url, filename) {
    if (checkBrower_util_1.isIE()) {
        window.location.href = url;
    }
    else {
        if (!url || !filename) {
            throw new Error('url or filename can not be null!');
        }
        fetch(url, {
            method: 'GET'
        }).then(function (res) {
            res.blob().then(function (data) {
                handleDownload(res.headers.get('content-disposition'), data, filename);
            });
        });
    }
};
exports.axiosDownload = function (axios, url, filename) {
    if (checkBrower_util_1.isIE()) {
        window.location.href = url;
    }
    else {
        if (!url || !filename) {
            throw new Error('url or filename can not be null!');
        }
        axios({
            method: 'GET',
            url: url,
            responseType: 'blob',
            withCredentials: true
        }).then(function (res) {
            handleDownload(res.headers['content-disposition'], res.data, filename);
        });
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosDownload = exports.fetchDownload = void 0;
var checkBrower_util_1 = require("./checkBrower.util");
var logger_util_1 = require("./logger.util");
var handleDownload = function (contentDisposition, data, filename) {
    try {
        // filename undefined , use api data's filename
        if (!filename && contentDisposition) {
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
        if (!url) {
            throw new Error('url can not be null!');
        }
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                credentials: 'include'
            })
                .then(function (res) {
                if (res.ok) {
                    res.blob().then(function (data) {
                        handleDownload(res.headers.get('content-disposition'), data, filename);
                        resolve(data);
                    });
                }
                else {
                    throw new Error(res.statusText);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    }
};
exports.axiosDownload = function (axios, url, filename) {
    if (checkBrower_util_1.isIE()) {
        window.location.href = url;
    }
    else {
        if (!url) {
            throw new Error('url can not be null!');
        }
        return new Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                url: url,
                responseType: 'blob',
                withCredentials: true
            })
                .then(function (res) {
                handleDownload(res.headers['content-disposition'], res.data, filename);
                resolve(res.data);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    }
};

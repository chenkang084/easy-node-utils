"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDownload = function (fetch, url, filename) {
    if (!url || !filename) {
        throw new Error('url or filename can not be null!');
    }
    fetch(url, {
        method: 'GET'
    })
        .then(function (res) {
        console.log(res);
        return res.blob();
    })
        .then(function (blob) {
        var downloadUrl = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove(); // afterwards we remove the element again
    });
};
exports.axiosDownload = function (axios, url, filename) {
    if (!url || !filename) {
        throw new Error('url or filename can not be null!');
    }
    axios({
        method: 'GET',
        url: url,
        responseType: 'blob',
        withCredentials: true
    })
        .then(function (res) {
        console.log(res);
        return new Blob([res.data]);
    })
        .then(function (blob) {
        var downloadUrl = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
};

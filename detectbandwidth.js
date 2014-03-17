"use strict";

self.addEventListener('message', function (e) {
    var data, url, start, fileSize;
    
    data = e.data;
    url = data.testFile;

    start=new Date();
    start=start.getTime();
    getFileSize();
    analyze();

    function getFileSize() {
        debugger;
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        fileSize = xhr.getResponseHeader('Content-Length');
                    }
                }
            };
            xhr.send(null);
        } catch (e) {

        }
    }
    
    function analyze() {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        result();
                    }
                }
            };
            xhr.send(null);
        } catch (e) {
            postMessage(null);
        }
    }
     
    function result(v) {
        var end, rate, duration, message;
        
        end = new Date();
        end = end.getTime();
        duration = end-start;
        rate = Math.round( (fileSize/(end-start)) *10 ) /10;
        message = '{"fileSize":' + fileSize + ',"rate":'+ rate + ',"duration":' + duration + '}';
        
        postMessage(message);
    }
}, false);
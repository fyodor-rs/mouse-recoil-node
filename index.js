var mouseEvents = require("global-mouse-events")
var robot = require("robotjs")
var ngkl = require('node-global-key-listener')
var v = new ngkl.GlobalKeyboardListener();

var t;
var s = true
var o = false
var recoilN=8
var rate=1

v.addListener(function (e, down) {
    if (e.name === 'HOME' && e.state === 'UP') {
        s = !s
    }
    if (e.name === 'END') {
        process.exit(1)
    }
});

mouseEvents.on("mousedown", data => {
    if (data.button === 2) {
        o = true
    }
    if (s) {
        if (o && data.button === 1) {
            t = setInterval(function () {
                robot.moveMouseRelative(0,recoilN)
            }, rate)
        }
    }
});

mouseEvents.on("mouseup", data => {
    if (data.button === 2) {
        o = false
    }
    clearInterval(t)
});                                                                                                                 

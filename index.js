(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.strToNum = factory();
    }
})(this, function () {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%()*+,-./\\:;=?@[]^_`{|}~\"'&<> ";
    let exports = {};
    exports.encode = function (s) {
        let r = "";
        for (let l of String(s)) {
            r += chars.indexOf(l) + 1 < 10 ? `0${chars.indexOf(l) + 1}` : `${chars.indexOf(l) + 1}`;
        }
        return `${r}00`;
    };
    exports.decode = function (n, l = 0, o = false) {
        let r = "";
        l = o && l > 0 ? l - 1 : l;
        let t = String(n).slice(l).match(/[^][^]?/g);
        for (let c in t) {
            if (t[c] === "00") {
                return r;
            }
            r += chars[t[c] - 1];
        }
        return r;
    };

    return exports;
});

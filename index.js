(function (factory) {
	try {
		module.exports = factory();
	} catch {
		window.strToNum = factory();
	};
})(function () {
	let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%()*+,-./\\:;=?@[]^_`{|}~\"'&<> "
	let exports = {
		encode: function (s) {
			let r = "";
			for (let l of s) {
				r += (chars.indexOf(l) + 1) < 10 ? `0${chars.indexOf(l)}` : `${chars.indexOf(l)}`;
			}
			return `${r}00`;
		},
		decode: function(n) {
			let r = "";
			let t = n.match(/[^][^]?/g);
			if (t[t.length - 1] === "00") {
				t.pop();
			};
			for (let p of t) {
				r += chars[p];
			}
			return r;
		}
	}

	return exports;
});

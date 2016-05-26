"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var composeLeft = function composeLeft() {
	for (var _len = arguments.length, transforms = Array(_len), _key = 0; _key < _len; _key++) {
		transforms[_key] = arguments[_key];
	}

	return function (a) {
		return transforms.reduce(function (x, f) {
			return f(x);
		}, a);
	};
};

var trim = function trim(a) {
	return a.trim();
};
var lines = function lines(a) {
	return a.split(/\n/);
};
var ignoreCrunches = function ignoreCrunches(a) {
	return a.filter(function (b) {
		return !/^\#/.test(b);
	});
};

var simple = exports.simple = composeLeft(trim, lines, ignoreCrunches);
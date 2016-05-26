'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _fs = require('fs');

var _path = require('path');

var _reader = require('./reader');

var floor = Math.floor;
var random = Math.random;

var sample = function sample(list) {
	return list[floor(random() * list.length)];
};

var fallback = ['https://www.google.com'];

var jsonRoute = function jsonRoute(data) {
	var router = (0, _express.Router)();
	var _data$links = data.links;
	var links = _data$links === undefined ? fallback : _data$links;
	var _data$sub = data.sub;
	var sub = _data$sub === undefined ? {} : _data$sub;


	router.get('/', function (req, res) {
		res.redirect(sample(links));
	});

	for (var k in sub) {
		router.use('/' + k, jsonRoute(sub[k]));
	}
	return router;
};

exports.default = function (file) {
	switch ((0, _path.extname)(file)) {
		case '.js':
			{
				var module = require(file);
				return module.default || module;
			}
		case '.json':
			return jsonRoute(require(file));
		default:
			{
				var _ret = function () {
					var links = (0, _reader.simple)((0, _fs.readFileSync)(file, 'utf8')) || fallback;
					var router = (0, _express.Router)();
					router.get('/', function (req, res) {
						return res.redirect(sample(links));
					});
					return {
						v: router
					};
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
	}
};
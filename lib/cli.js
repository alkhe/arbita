'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _bootstrap = require('./bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();

var args = process.argv.slice(2);

var _args = _slicedToArray(args, 2);

var root = _args[0];
var _args$ = _args[1];
var port = _args$ === undefined ? 80 : _args$;


var app = (0, _express2.default)();
app.use((0, _bootstrap2.default)((0, _path.resolve)(cwd, root)));

app.listen(port, '::', function (err) {
	if (err) {
		return console.err(err);
	}
	console.log('listening on :::' + port);
});
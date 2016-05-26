#!/usr/bin/env node

import express from 'express';
import morgan from 'morgan';
import { resolve } from 'path';
import bootstrap from './bootstrap';

let cwd = process.cwd();

let args = process.argv.slice(2);
let [root, port = 80] = args;

morgan.token('redir', req => req.redir || '');

let app = express()
	.use(morgan('[:date[web]] :remote-addr :method/:http-version :url -- :status :response-time ms > :redir'))
	.use(bootstrap(resolve(cwd, root)));

app.listen(port, '::', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on :::${ port }`);
});

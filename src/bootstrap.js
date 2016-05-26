import { Router } from 'express';
import { readFileSync } from 'fs';
import { extname } from 'path';
import { simple } from './reader';

const { floor, random } = Math;
const sample = list => list[floor(random() * list.length)];

const fallback = ['https://www.google.com'];

const jsonRoute = data => {
	let router = Router();
	let { links = fallback, sub = {} } = data;

	router.get('/', (req, res) => {
		res.redirect(sample(links));
	});

	for (let k in sub) {
		router.use(`/${ k }`, jsonRoute(sub[k]));
	}
	return router;
}

export default file => {
	switch (extname(file)) {
		case '.js': {
			const module = require(file);
			return module.default || module;
		}
		case '.json':
			return jsonRoute(require(file));
		default: {
			let links = simple(readFileSync(file, 'utf8')) || fallback;
			let router = Router();
			router.get('/', (req, res) =>
				res.redirect(sample(links))
			);
			return router;
		}
	}
}

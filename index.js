import express from 'express';
import { readFileSync } from 'fs';
import { simple } from './reader';

let app = express();

let links = simple(readFileSync('links.at', 'utf8'));

let { floor, random } = Math;
let sample = list => list[floor(random() * list.length)];

app.get('/', (req, res) => {
	res.redirect(sample(links));
});

app.listen(80, '::', err => {
	if (err) {
		return console.err(err);
	}
	console.log('listening on :::80');
});

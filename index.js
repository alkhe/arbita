import express from 'express';
import { resolve } from 'path';
import bootstrap from './bootstrap';

let cwd = process.cwd();

let args = process.argv.slice(2);
let [port, root] = args;

let app = express();
app.use(bootstrap(resolve(cwd, root)));

app.listen(port, '::', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on :::${ port }`);
});

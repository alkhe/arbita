let composeLeft = (...transforms) => a =>
	transforms.reduce((x, f) => f(x), a);

let trim = a => a.trim();
let lines = a => a.split(/\n/);
let ignoreCrunches = a => a.filter(b => !/^\#/.test(b));

export let simple = composeLeft(trim, lines, ignoreCrunches);

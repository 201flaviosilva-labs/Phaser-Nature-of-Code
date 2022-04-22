// Based: https://github.com/processing/p5.js/blob/main/src/math/random.js#L209

let _gaussian_previous = false;
let y2;
function randomGaussian(mean, sd = 1) {
	let y1, x1, x2, w;
	if (_gaussian_previous) {
		y1 = y2;
		_gaussian_previous = false;
	} else {
		do {
			x1 = Math.random() * 2 - 1;
			x2 = Math.random() * 2 - 1;
			w = x1 * x1 + x2 * x2;
		} while (w >= 1);
		w = Math.sqrt(-2 * Math.log(w) / w);
		y1 = x1 * w;
		y2 = x2 * w;
		_gaussian_previous = true;
	}

	const m = mean || 0;
	return y1 * sd + m;
}

export default randomGaussian;

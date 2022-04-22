// Based: https://github.com/processing/p5.js/blob/main/src/math/random.js#L209
function randomGaussian(mean, sd = 1) {
	console.log(this);
	let y1, x1, x2, w;
	if (this._gaussian_previous) {
		y1 = y2;
		this._gaussian_previous = false;
	} else {
		do {
			x1 = Math.random() * 2 - 1;
			x2 = Math.random() * 2 - 1;
			w = x1 * x1 + x2 * x2;
		} while (w >= 1);
		w = Math.sqrt(-2 * Math.log(w) / w);
		y1 = x1 * w;
		y2 = x2 * w;
		this._gaussian_previous = true;
	}

	const m = mean || 0;
	return y1 * sd + m;
}

class Ellipse extends Phaser.GameObjects.Arc {
	constructor(scene, x, y, radius, color, alpha) {
		super(scene, x, y, radius);
		this.setFillStyle(color);
		this.setAlpha(alpha);
		scene.add.existing(this);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.ellipse = new Ellipse(this, 400, 300, 10, 0xffffff, 0.1);
	}

	update() {
		let localization = randomGaussian(800 / 2, 100);
		this.ellipse.x = localization;
	}
}

const config = {
	width: 800,
	height: 600,
	type: Phaser.Auto,
	backgroundColor: "#000000",
	render: {
		clearBeforeRender: false,
		preserveDrawingBuffer: true,
	},
	scene: [MainScene],
};

new Phaser.Game(config);

import randomGaussian from "../../utils/gaussian.js";

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

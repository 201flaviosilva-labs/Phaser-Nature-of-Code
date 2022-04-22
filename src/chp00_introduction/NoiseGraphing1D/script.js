import noise from "../../utils/noise.js";

class Graphics extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y, color) {
		super(scene, {
			x, y,
			lineStyle: {
				width: 1,
				color,
				alpha: 1,
			},
			add: true
		});
		scene.add.existing(this);
	}

	update(time) {
		this.clear();
		this.beginPath();

		for (let i = 0; i < 800; i++) {
			this.lineTo(i, 300 + noise(time / 1000, i / 800) * 300);
		}
		this.strokePath();
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.graphics = new Graphics(this, 0, 0, 0xffffff);
	}

	update(time) {
		this.graphics.update(time);
	}
}

const config = {
	width: 800,
	height: 600,
	type: Phaser.Auto,
	backgroundColor: "#000000",
	scene: [MainScene],
};

new Phaser.Game(config);

import { noise, noiseDetail } from "../../utils/noise.js";

class Graphics extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y) {
		super(scene, {
			x, y,
			fillStyle: {
				color: 0xffffff,
				alpha: 1
			},
		});
		scene.add.existing(this);
	}

	update(time) {
		this.clear();

		for (let i = 0; i < 600; i++) {
			for (let j = 0; j < 400; j++) {
				const n = noise(time / 1000, i / 400, j / 300);
				const color = Phaser.Display.Color.GetColor(n * 255, n * 255, n * 255);
				this.fillStyle(color);
				this.fillRect(i, j, 1, 1);
			}
		}
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.graphics = new Graphics(this, 0, 0);
	}

	update(time) {
		this.graphics.update(time);
	}
}

const config = {
	width: 600,
	height: 400,
	type: Phaser.Auto,
	backgroundColor: "#000000",
	scene: [MainScene],
};

new Phaser.Game(config);

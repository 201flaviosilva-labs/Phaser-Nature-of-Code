import { RandomVector2D } from "../../utils/math.js";

class Lines extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y, color) {
		super(scene, {
			x, y,
			fillStyle: {
				color,
			},
			lineStyle: {
				color: 0x00ff00,
				width: 1,
			},
		});
		scene.add.existing(this);
	}

	update() {
		const randomVector2 = RandomVector2D();
		randomVector2.normalize();
		randomVector2.scale(Phaser.Math.Between(0, 300));

		this.lineBetween(0, 0, randomVector2.x, randomVector2.y);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.lines = new Lines(this, 400, 300, 0xff0000);
	}

	update() {
		this.lines.update();
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

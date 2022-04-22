import noise from "../../utils/noise.js";

class Walker extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, width, height, color) {
		super(scene, x, y, width, height, color);
		scene.add.existing(this);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.walker = new Walker(this, 400, 300, 10, 10, 0xffffff);
	}

	update(time, delta) {
		this.walker.x = noise(time / 1000, 0) * 800;
		this.walker.y = noise(time / 1000, 1) * 600;
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

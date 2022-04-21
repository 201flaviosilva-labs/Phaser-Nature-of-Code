class Walker extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, width, height, color) {
		super(scene, x, y, width, height, color);
		scene.add.existing(this);
	}

	step() {
		const rnd = Math.random();
		if (rnd < 0.4) this.x += 1;  // Right
		else if (rnd < 0.5) this.x -= 1;  // Left
		else if (rnd < 0.7) this.y += 1; // Down
		else this.y -= 1; // Up
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.walker = new Walker(this, 400, 300, 1, 1, 0xffffff);
	}

	update() {
		this.walker.step();
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

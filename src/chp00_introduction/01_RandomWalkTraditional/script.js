class Walker extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, width, height, color) {
		super(scene, x, y, width, height, color);
		scene.add.existing(this);
	}

	step() {
		switch (Phaser.Math.Between(0, 3)) {
			case 0: // Right
				this.x++;
				break;

			case 1: // Left
				this.x--;
				break;

			case 2: // Up
				this.y--;
				break;

			case 3: // Down
				this.y++;
				break;

			default:
				break;
		}
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

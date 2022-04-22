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

	update() {
		this.clear();

		for (let i = 0; i < 600; i++) {
			for (let j = 0; j < 400; j++) {
				const color = new Phaser.Display.Color();
				this.fillStyle(color.randomGray().color);
				this.fillRect(i, j, 1, 1);
			}
		}
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.graphics = new Graphics(this, 0, 0);
	}

	update() {
		this.graphics.update();
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

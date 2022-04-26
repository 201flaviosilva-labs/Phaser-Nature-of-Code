class Rect extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, color) {
		super(scene, x, y, 98, 0, color);
		this.setOrigin(0);
		scene.add.existing(this);
	}

	grow() {
		this.height += 1;
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.bars = [];
		for (let i = 0; i < 8; i++) {
			const randomColor = Phaser.Math.RND.integerInRange(0x000000, 0xffffff);
			this.bars.push(new Rect(this, i * 100 + 1, 0, randomColor));
		}
	}

	update() {
		const rnd = Phaser.Math.RND.integerInRange(0, 7);
		this.bars[rnd].grow();
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

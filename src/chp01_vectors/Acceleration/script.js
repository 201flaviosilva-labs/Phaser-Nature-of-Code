import { RandomVector2D } from "../../utils/math.js";

class Ball extends Phaser.GameObjects.Arc {
	constructor(scene, x, y, radius, color) {
		super(scene, x, y, radius);
		scene.add.existing(this);

		this.setFillStyle(color);

		this.speed = RandomVector2D().scale(2);
		this.acceleration = RandomVector2D().scale(0.01);
	}

	update() {
		this.speed.add(this.acceleration);
		this.setPosition(this.x + this.speed.x, this.y + this.speed.y);

		if (this.x < 0) this.x = 800;
		else if (this.x > 800) this.x = 0;

		if (this.y < 0) this.y = 600;
		else if (this.y > 600) this.y = 0;
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.ball = new Ball(this, 400, 300, 10, 0xff0000);
	}

	update() {
		this.ball.update();
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

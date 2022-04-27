class Ball extends Phaser.GameObjects.Arc {
	constructor(scene, x, y, radius, color) {
		super(scene, x, y, radius);
		this.setFillStyle(color);

		this.velocity = Phaser.Math.Vector2.ZERO;
		this.acceleration = Phaser.Math.Vector2.ZERO;

		scene.add.existing(this);
	}

	// Acceleration to the mouse
	update(mouseX, mouseY) {
		const mouse = new Phaser.Math.Vector2(mouseX, mouseY);
		const position = new Phaser.Math.Vector2(this.x, this.y);

		mouse.subtract(position).normalize().scale(0.05);

		this.velocity.add(mouse);

		this.setPosition(this.x + this.velocity.x, this.y + this.velocity.y);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.ball = new Ball(this, 400, 300, 10, 0xff0000);
	}

	update() {
		this.ball.update(this.input.activePointer.x, this.input.activePointer.y);
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

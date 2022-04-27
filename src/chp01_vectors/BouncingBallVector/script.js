class Ball extends Phaser.GameObjects.Arc {
	constructor(scene, x, y, radius, color) {
		super(scene, x, y, radius);
		this.setFillStyle(color);

		this.position = new Phaser.Math.Vector2(x, y);
		this.speed = new Phaser.Math.Vector2(Phaser.Math.FloatBetween(-2.5, 2.5), Phaser.Math.FloatBetween(-2, 2));

		scene.add.existing(this);
	}

	update() {
		if ((this.position.x > 800) || (this.position.x < 0)) this.speed.x *= -1;
		if ((this.position.y > 600) || (this.position.y < 0)) this.speed.y *= -1;
		this.position.add(this.speed);
		this.setPosition(this.position.x, this.position.y);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.ball = new Ball(this, 400, 300, 25, 0xff0000);
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

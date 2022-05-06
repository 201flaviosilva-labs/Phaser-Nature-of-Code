class TestDummy extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, width, height, color) {
		super(scene, x, y, width, height, color);
		scene.add.existing(this);

		this.mass = 1;
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.acceleration = new Phaser.Math.Vector2(0, 0);
	}

	applyForce(force) {
		const finalForce = force.scale(1 / this.mass);
		this.acceleration.add(finalForce);
	}

	update() {
		this.velocity.add(this.acceleration);
		this.setPosition(this.x + this.velocity.x, this.y + this.velocity.y);
		this.acceleration.set(0, 0);

		if (this.x > 800) {
			this.x = 800;
			this.velocity.x *= -1;
		} else if (this.x < 0) {
			this.x = 0;
			this.velocity.x *= -1;
		}

		if (this.y < 0 || this.y > 600) {
			this.velocity.y *= -1;
			this.y = Phaser.Math.Clamp(this.y, 0, 600);
		}
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.wind = new Phaser.Math.Vector2(0.5, 0);
		this.gravity = new Phaser.Math.Vector2(0, 0.1);
		this.testDummy = new TestDummy(this, 400, 300, 10, 10, 0xffffff);

		this.mouse = this.input.mousePointer;
	}

	update() {
		if (this.mouse.isDown) this.testDummy.applyForce(this.wind);
		this.testDummy.applyForce(this.gravity);
		this.testDummy.update();
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

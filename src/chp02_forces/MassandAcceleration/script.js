class TestDummy extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, size, mass, color) {
		super(scene, x, y, size * mass, size * mass, color);
		scene.add.existing(this);

		this.mass = mass;
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.acceleration = new Phaser.Math.Vector2(0, 0);
	}

	applyForce(force) {
		const massVector2 = new Phaser.Math.Vector2(this.mass, this.mass);
		const finalForce = force.clone().divide(massVector2);
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
		this.testDummies = [
			new TestDummy(this, 200, 300, 10, 1, 0xffffff),
			new TestDummy(this, 400, 300, 10, 2, 0xff0000),
		];

		this.mouse = this.input.mousePointer;
	}

	update() {
		this.testDummies.forEach((dummy) => {
			if (this.mouse.isDown) dummy.applyForce(this.wind);
			const weight = new Phaser.Math.Vector2(this.gravity).multiply(new Phaser.Math.Vector2(dummy.mass));
			dummy.applyForce(weight);
			dummy.update();
		});
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

class MyLine extends Phaser.GameObjects.Line {
	constructor(scene, x, y, x2, y2, color) {
		super(scene, x, y, 0, 0, x2, y2, color);
		scene.add.existing(this);
	}

	update(mouseX, mouseY) {
		const mouse = new Phaser.Math.Vector2(mouseX, mouseY);
		const center = new Phaser.Math.Vector2(this.x, this.y);
		mouse.subtract(center) // mouse - center -> Get the vector from the center to the mouse
			.normalize() // Normalize the vector -> Make it a unit vector
			.scale(100); // Scale the vector to length 100

		this.setTo(0, 0, mouse.x, mouse.y);
	}
}

class MainScene extends Phaser.Scene {
	create() {
		this.line = new MyLine(this, 400, 300, 10, 10, 0xff0000);

		this.input.on("pointermove", (pointer) => {
			this.line.update(pointer.x, pointer.y);
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

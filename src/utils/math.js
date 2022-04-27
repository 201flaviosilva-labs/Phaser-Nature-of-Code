export function RandomVector2D(minX = -1, maxX = 1, minY = minX, maxY = maxX) {
	return new Phaser.Math.Vector2(Phaser.Math.FloatBetween(minX, maxX), Phaser.Math.FloatBetween(minY, maxY));
}

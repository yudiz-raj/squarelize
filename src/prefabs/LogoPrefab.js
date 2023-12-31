
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// squareQuadz
		const squareQuadz = scene.add.image(0, 0, "squareQuadz");
		this.add(squareQuadz);

		// avatar_1
		const avatar_1 = scene.add.image(-273, 49, "avatar_1");
		avatar_1.scaleX = 0.3;
		avatar_1.scaleY = 0.3;
		avatar_1.angle = -20;
		avatar_1.setOrigin(1, 0);
		this.add(avatar_1);

		// avatar_2
		const avatar_2 = scene.add.image(-219, 67, "avatar_2");
		avatar_2.scaleX = 0.3;
		avatar_2.scaleY = 0.3;
		avatar_2.setOrigin(0.5, 0);
		this.add(avatar_2);

		this.avatar_1 = avatar_1;
		this.avatar_2 = avatar_2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	avatar_1;
	/** @type {Phaser.GameObjects.Image} */
	avatar_2;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

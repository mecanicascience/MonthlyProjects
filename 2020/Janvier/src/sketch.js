function runSimulator(simulator) {
	simulator
		.setEngineConfig((engineConf) => {
			engineConf.plotter.scale = {x: 100, y: 100, squareByX: true};
			engineConf.plotter.displayGrid = false;
		})
		.setCustomConfig((customConf) => {
			customConf.drawSizeMultiplier = 5;
		})
		.addObjects(Particle, 2, -80, ["_RUN_F", random, -50, 50])
	;
}

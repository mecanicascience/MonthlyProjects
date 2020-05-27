function runSimulator(simulator) {
	simulator
		.setEngineConfig((engineConf) => {
			engineConf.plotter.displayGrid = false;
		})
		.addObjects(MSM, 1, 22)
	;
}

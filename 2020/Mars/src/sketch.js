function runSimulator(simulator) {
	simulator
		// configuration du moteur
		.setEngineConfig((engineConf) => {
			// taille de l'affichage
			engineConf.plotter.scale = {
				x: 100,			// taille de l'écran en largeur <=> 100 m
				y: 200,			// taille de l'écran en hauteur <=> 200 m
			};
			engineConf.plotter.displayGrid = false; // affichage du quadriage
		})
		// variables personnelle
		.setCustomConfig((customConf) => {
			customConf.rayonParticule = 20;
		})
		// ajout d'objets
		.addObjects(Particle, 1, ["_RUN_F", random, -100, 100], ["_RUN_F", random, -100, 100], 'M1')
		.addObjects(Particle, 1, ["_RUN_F", random, -100, 100], ["_RUN_F", random, -100, 100], 'M2')
		.addObjects(Particle, 1, ["_RUN_F", random, -100, 100], ["_RUN_F", random, -100, 100], 'M3')
	;
}

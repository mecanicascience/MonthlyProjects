class Particle {
    constructor(x0, y0, name) {
        // position de la particule => à t=0, définie en fonction des paramètres
        this.pos = new Vector(x0, y0);
        this.name = name;
    }

    update(dt, everyObjects) {
        // this.pos.x += dt * 5;
    }

    draw(drawer) {
        // rayon défini dans la configuration personnelle
        let radius = getCustomConfig().rayonParticule;
        drawer
            .noStroke()
            .fill('rgba(255, 0, 0, 0.7)') // couleur rouge
            .ellipse(this.pos.x, this.pos.y, radius, radius);

        this.pos.draw();

        textSize(20);
        fill(0, 102, 153);

        let p = (this.pos.copy()).mult(0.5);
        let pos = _pSimulationInstance.plotter.computeForXY(p.x, p.y);

        let c = 13;
        if(pos.x < 0)
            pos.x -= c;
        else
            pos.x += c;
        if(pos.y < 0)
            pos.y -= c;
        else
            pos.y += c;
        text(this.name, pos.x, pos.y);
    }
}

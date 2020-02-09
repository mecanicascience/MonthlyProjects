class Particle {
    constructor(x0, y0, positionName, vectorName) {
        // position de la particule => à t=0, définie en fonction des paramètres
        this.pos = new Point(x0, y0, "#FFFFFF", positionName, undefined, vectorName);

        // couleur du vecteur de la particule
        this.pos.pos.color = "#bfbcbc";
    }

    update(dt, everyObjects) { }

    draw(drawer) {
        this.pos.draw(drawer, false);
    }
}

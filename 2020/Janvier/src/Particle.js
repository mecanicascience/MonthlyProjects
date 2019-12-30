class Particle {
    constructor(x0, y0) {
        this.pos = new Vector(x0, y0);
    }

    update(dt, everyObjects) {
        this.pos.x += 5 * dt;
    }

    draw(drawer) {
        let radius = getCustomConfig().drawSizeMultiplier;
        drawer
            .noStroke()
            .fill(255, 255, 255)
            .ellipse(this.pos.x, this.pos.y, radius, radius);
    }
}

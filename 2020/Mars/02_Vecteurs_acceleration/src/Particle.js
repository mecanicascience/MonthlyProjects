class Particle {
    constructor(x0, y0, positionName, accelerationName) {
        // position de la particule => à t=0, définie en fonction des paramètres
        this.point = new Point(x0, y0, "#FFFFFF", positionName);

        // couleur du vecteur de la particule
        this.point.pos.color = "#bfbcbc";
        this.point.textPadding = 0.9;
        this.positionName = positionName;

        this.litteAccel   = [];
        this.acceleration = new Vector(10, 10, 'red', accelerationName);
    }

    update(dt, everyObjects) {
        if(this.positionName != 'M1') // affichage des accélérations uniquement pour le vecteur M1
            return;

        this.litteAccel = [];

        for (let obj = 0; obj < everyObjects.length; obj++) {
            if(everyObjects[obj] instanceof Particle && everyObjects[obj] != this) {
                // Calcul de l'accélération de ce point
                let v = Vector.sub(this.point.pos, everyObjects[obj].point.pos);
                let dist = Vector.dist(this.point.pos, everyObjects[obj].point.pos);

                this.litteAccel.push(v.mult(-1 / (dist * dist * dist) * 300).limit(1, 5)); // valeurs non-réelle pour la visualisation
            }
        }

        // calcul de l'accélération globale
        this.acceleration.set(0, 0);
        for (let obj = 0; obj < this.litteAccel.length; obj++)
            this.acceleration.add(this.litteAccel[obj]);

        noLoop();
    }

    draw(drawer) {
        this.point.draw(drawer, false);

        if(this.positionName != 'M1') // affichage des accélérations uniquement pour le vecteur M1
            return;

        // Affichage de chaque vecteur force (en gris)
        for (let i = 0; i < this.litteAccel.length; i++) {
            this.litteAccel[i].color = "gray";
            this.litteAccel[i].draw(this.point.pos);
        }

        // Affichage de l'accélération globale
        this.acceleration.draw(this.point.pos);
    }
}

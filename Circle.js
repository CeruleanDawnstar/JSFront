class Circle {
    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
    }
    area() {
        console.log(Math.round(Math.PI * 2 * this.radius));
    }

    containsPoint(p) {
        const difX = this.point.getX() - p.getX();
        const difY = this.point.getY() - p.getY();
        const length = Math.sqrt((difX * difX) + (difY * difY));

        if (length >= 0 && length <= this.radius) {
            console.log('Le point est dans le cercle.');
        } else {
            console.log("Le point n'est pas dans ce cercle");
        }
    }
}
module.exports = Circle;
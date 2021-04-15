class Circle {
    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
    }
    area() {
        return Math.round(Math.PI * 2 * this.radius);
    }

    containsPoint(p) {
        const difX = this.point.getX() - p.getX();
        const difY = this.point.getY() - p.getY();
        const length = Math.sqrt((difX * difX) + (difY * difY));

        if (length >= 0 && length <= this.radius) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = Circle;
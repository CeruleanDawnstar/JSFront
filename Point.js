class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    setX(value) {
        this.x = value;
    }

    getY() {
        return this.y;
    }

    setY(value) {
        this.y = value;
    }

    toString() {
        console.log(`Les coordonnées du point en X est ${this.getX()} et en Y est ${this.getY()}`);
    }
}
module.exports = Point;
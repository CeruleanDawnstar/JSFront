module.export = Point;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    setX() {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY() {
        this.y = y;
    }

    toString() {
        console.log(`Les coordonnées du point en X est ${this.x} et en Y est ${this.y}`);
    }
}

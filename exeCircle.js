const Circle = require('./Circle.js');
const Point = require('./Point.js');

let p2 = new Point(1,2);
let circle = new Circle(p2, 7);

circle.area();
circle.containsPoint(p2);
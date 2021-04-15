const Hippo = require('./Hippopotamus.js');

let Hippo1 = new Hippo('Lars', 1000000, 20);
let Hippo2 = new Hippo('Ozymandias', 90000, 21);

Hippo1.toString();
Hippo2.toString();

Hippo1.fight(Hippo2);
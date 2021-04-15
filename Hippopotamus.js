class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }
    

    swim() { // fonction nager, enlève 300g
        this.weight = this.weight - 300;
    }

    eat() { // fonction manger, gagne 1000g / 1kg
        this.weight = this.weight + 1000;
    }

    fight(hippopotamus) {
        if(this.tusksSize > hippopotamus.tusksSize) {
            console.log(`${this.name} remporte le fight`);
        }
        else {
            console.log(`${hippopotamus.name} remporte le fight`);
        }
    }

    toString() {
        console.log(`L'hippo se nomme ${this.name}, pèse ${this.weight} et ses défenses sont ${this.tusksSize} cm de long.`);
    }

    cycleDeVie() {
        for(let jour = 0 ; jour < 21 ; jour++) { // nb de jours dans 3 semaines
            for(let heures = 0 ; heures < 15 ; heures++) { // nb d'heures actifs
                this.eat();
                this.eat();
                this.swim();
                this.swim();
                this.swim();
            }
            this.toString();
        }
    }

}
module.exports = Hippopotamus;
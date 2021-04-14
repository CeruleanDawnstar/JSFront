class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }
    

    swim() {
        this.weight = this.weight - 300;
    }

    eat() {
        this.weight = this.weight + 1000;
    }

    fight(Hippopotamus) {
        // if (this.tusksSize < Hippopotamus.tusksSize) {
        //     console.log("");
        // }
    }

    toString() {
        console.log(`L'hippo se nomme ${this.name}, pèse ${this.weight} et ses défenses sont ${this.tusksSize} cm de long.`);
    }

    cycleDeVie() {
        for(i=0; i < 21; i++) {
            for(j=0; j < 15; j++) {
                this.eat();
                this.eat();
                this.swim();
                this.swim();
                this.swim();
                console.log("C'est la " + j + "e heure.")
            }
            console.log("Jour " + i)
            console.log(`L'hippo ${this.name} pèse actuellement ${this.weight} grammes.`)
            console.log('');
        }
    }

}
module.export = Hippopotamus;
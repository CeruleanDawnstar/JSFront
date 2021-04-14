classe Hippopotamus(name, weight, tusksSize)
name : chaine
weight : entier
tusksSize : entier

    fonction swim()     // fonction swim retire 300g
    debut
        affecter à weight : weight - 300
    fin

    fonction eat()      // fonction eat ajoute 1000g / 1kg
    debut
        affecter à weight : weight + 1000
    fin

    fonction fight(Hippopotamus)    // fonction de simulation de combat prenant en objet Hippopotamus
    debut
        si tusksSize(Hippopotamus1) < tusksSize(Hippopotamus2)
            afficher "Le gagnant est " + name(Hippopotamus2)
        si tusksSize(Hippopotamus1) = tusksSize(Hippopotamus2)
            afficher name(Hippopotamus1) + " et " + name(Hippopotamus2) + " sont de force égales."
        sinon
            afficher "Le gagnant est " + name(Hippopotamus1)

    fonction toString()     // affiche les propriétés du Hippo
    debut
        afficher "Le nom de l'Hippopotamus est " + name + ", son poids est de " + weight + " et la longeur de ses défenses est de " + tusksSize
    fin

    fonction cycleDeVie()   // fonction du cycle de vie d'un Hippo
    i : entier
    j : entier
    debut
    tant que j != 21 //     tant qu'on arrive pas au dernier jour(21)
        affecter j à 1
            pour i de 1 à 15        // boucle sur une journée de 15h
            affecter i à 1
            appeler la fonction eat() * 2
            appeler la fonction swim() * 3
            affecter i : i + 1
            finpour
        appeler la fonction toString()      // à la fin de la journée affiche l'etat du Hippo
        affecter j : j + 1
    fin


H1 = nouveau Hippopotamus(Bert,100000,20)       // affectation du Hippo 1
H2 = nouveau Hippopotamus(Lars,90000,21)        // affectation du Hippo 2

H1.fight(H2)     // simulation d'un combat entre Bert qui pèse 100000g avec des défenses de 20cm de long et Lars qui pèse 90000g avec des défenses de 21cm de long


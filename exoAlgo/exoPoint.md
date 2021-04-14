classe Point(x, y)
x : entier
y : entier

    x <- affecter le point x
    y <- affecter le point y

    fonction getX()     // fonction get de X
    debut
        afficher x
    fin

    fonction setX(x)    // fonction set de X
    debut
        afficher "Entrez la valeur de x"
        affecter la valeur de x
    fin

    fonction getY()     // fonction get de Y
    debut
        afficher y
    fin

    fonction setY(y)    // fonction set de Y
    debut
        afficher "Entrez la valeur de y"
        affecter la valeur  de y
    fin

    fonction toString() // affiche les propriétés du point Y
    debut
        afficher "Le point a pour valeur x " + x + " et pour valeur y " + y
    fin

Point(1,2).toString()      // utilise la fonction toString sur un point dont les valeurs x et y sont de 1 et 2 respectivement
classe Circle(Point, radius)
point : Point
radius : entier

    point <- affecter l'objet Point
    radius <- affecter le radius

    fonction area() // fonction calcul d'aire
    aire : 0
    debut
        affecter aire à : π x radius²
    fin

    fonction containsPoint(p)
		debut
			Affecter à diffX: point.getX() - p.getX()
			Affecter à diffY: point.getY() - p.getY()
			Affecter à longueur: sqrt((diffX * diffX) + (diffY * diffY))
			si longueur <= this.radius et longueur >= 0 alors
				retourner Vrai
			finsi
			retourner Faux
		fin

    fonction toString() // affiche les propriétés du cercle
    debut
        afficher "Le rayon du cercle est de " + radius + " et possède le point " + point
    fin
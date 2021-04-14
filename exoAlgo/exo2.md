nbsomme : entier
nbtop : entier

debut
	afficher "Entrez un chiffre"
	saisir nbtop

	si nbtop = 1
		afficher "La somme est de 1"
	sinon
		affecter à nbsomme 0
		pour i de 0 à nbtop
			affecter à nbsomme : nbsomme + 1
		finpour
	afficher "La somme est de " + nbsomme
fin
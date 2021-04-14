chaine1 : chaine
chaine2 : chaine
nbchar1 : entier
nbchar2 : entier

debut
	afficher "Entrez la première chaine de caractère"
	saisir chaine1
	mesure de chaine1
	afficher "Entrez la deuxième chaine de caractère"
	saisir chaine2
	mesure de chaine2

	si nbchar1 = 2(nbchar2)
		afficher "La première chaine est 2 fois plus grande que la deuxième chaine"
	sinon
		afficher "La première chaine n'est pas 2 fois plus grande que la deuxième chaine"
	finsi
fin
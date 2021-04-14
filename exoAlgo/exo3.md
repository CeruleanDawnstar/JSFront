nb[0..4] : réel
nbgrand : entier
compteur : entier
total : réel
moyenne : réel

debut
	tantque taille(notes) < 5  //tant que le tableau est pas rempli, on ajoute
		afficher "Entrez une note"
		saisir notes[]
	fintantque

	affecter nbgrand à nb[0]    // on affecte par défaut le nombre le plus grand à la première case
	affecter compteur à nb[1]   // on met en place un compteur sur la 2e case
	tantque compteur != nb[4]   // on met en place la limite de la condition
	pour i de 1 à 4
		si nbgrand < compteur    // comparaison de 2 valeurs
		affecter compteur à nbgrand    // on remplace nbgrand par la valeur de compteur si elle est plus grande
		affecter à compteur : nb[i+1]
	afficher "Le plus grand nombre est " + nbgrand

		affecter total : 0
		pour j de 0 à 4
			affecter à total : total + nb[j]
		finpour

		moyenne = total/5
	afficher "La moyenne est de " + moyenne
fin
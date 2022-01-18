Site entièrement en React JSX avec les composants. Rien dans l'index à part les balises de bases
CSS en React
Utilisation des props
Utilisation des states et d'un formulaire à plusieurs input

Exemple : un site découppé en 3 sous composant (Header(), Content(), Footer())d'un composant App()
Formulaire de contact qui gère les messages d'erreur. 

# Tout
Style minimal pour le site {true}

# Header

Phrase de bienvenue {true}

# Content 
Choisir parmis une liste de 6 compétences, 3 que nous maitrisons pour le projet et qui s'ajouteront à une liste. {true}
Limiter le nombre de skills à 3. {true}

# Footer
Formulaire de contact
Ajouter un input avec son adresse mail, une fois l'adresse donnée, afficher un message de bon envoi du mail {true}
Utilisation d'un state pour gérer le mail qu'il y ait un arobase {true}
Boutton de show Skills qui permet de récapituler en message d'alerte les skills qui seront submit.


# -------------------------------------------Challenge React Patterns-------------------------------------------------------- #
# Maj de tout le site (props, states pour qu'il soit conforme aux paterns vus)

# Proxy component
Remplacer button par le composant button pour éviter la répétition. V

# Props function
Utiliser le système de fonction de calcul vu avec une fonction appelée direct onClick={() => handleChange(a, b)}

# Props drilling
Utiliser des props le plus possible mais seulement depuis App() V

# Un peu de HOC (réutiliser les fonctionnalités vu à l'exercice)
Utilisation d'une dataSource
Utilisation de withFunction()

# Réutiliser les fonctionnalités vu dans l'exercice lifting state up/ State hoisting
Les states sont déclarés dans le composant App V
Sytème de prénom comme vu dans l'exerciceV

# ---------------------------------------------Challenge invoice app----------------------------------------------------------- #
Voir les modèles pour la partie design

Temps estimé au projet : 

- Créer une fausse API dans un data JSON qui recoupe toutes les infos et data à réutiliser V
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page => a faire demain
- Create, read, update, and delete invoices => 
- Receive form validations when trying to create/edit an invoice => 
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- Bonus: Keep track of any changes, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)

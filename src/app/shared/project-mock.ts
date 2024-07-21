export const projects = [
    {
        id: 1,
        name: 'Sparkle',
        shortDescription : "Site pour un pressing haut de gamme",
        description: '<p>Dans le cadre de ma formation, j\'ai un site à réaliser de A à Z pour un pressing. L\'objectif est de créer un logiciel de gestion leur permettant de gérer plus facilement les dépôts clients et l\'assignation des tâches à leurs employés. Le but de cette plateforme est de permettre à l\'utilisateur de choisir les articles qu\'il souhaite déposer, d\'indiquer la date de dépôt ainsi que de payer la prestation. La partie administrative sera disponible uniquement pour les gérants et leurs employés. Elle permettra la gestion de toutes les informations disponibles sur le site selon les droits attribués aux différents comptes.</p> <p> La partie front est développée sous angular, et la partie back est une API rest sous Symfony.</p>',
        stack: ['Angular', 'Bootstrap', 'Symfony', 'PHP', 'Typescript', 'JavaScript', 'SQL', 'Figma'],
        img: 'sparkle.png',
        github: 'https://github.com/AmelieRolland/ngSparkle'
    },

    { 
        id: 2, 
        name: 'That\'s what she said',
        shortDescription : "Générateur aléatoire de citations de femmes inspirantes",
        description: '<p>L\’idée était de pratiquer avec mes premiers acquis en SQL, et de prendre un peu d\’avance sur les cours de php à venir. 💡L\’idée : un générateur aléatoire de citations de femmes inspirantes à travers le monde. Les outils : HTML/CSS Bootstrap, php, SQL</p> <p>Le nom : “That’s what she said !” en clin d\'œil à une série qui me remonte le moral en toute circonstance. Une phrase dont j\’ai un peu détourné le sens, évidemment ;)</p> <p>🍃Très intéressée par l\’éco-conception, j\’ai essayé de concevoir ce petit site en toute sobriété, sans animations, en utilisant des polices natives et en convertissant les images en format webp. Si vous avez des recommandations en plus ici, je prends!</p> <p>👀J\’ai beaucoup appris sur ce projet, et pas seulement techniquement. En souhaitant partager une parole encore peu valorisée, de toutes ces représentations féminines qui me manquaient plus jeune, j\’ai découvert de nombreuses femmes, artistes, scientifiques, écrivaines, dont je n\’avais jamais entendu parler auparavant; quelle réjouissance de les découvrir et de contribuer à les rendre visibles. J\’ai encore toute une liste de citations à intégrer, et si vous avez des références, n\’hésitez pas à me les partager!</p>', 
        stack: ['Bootstrap', 'PHP', 'SQL'], 
        img: 'whatdidshesay.png' ,
        github: 'https://github.com/AmelieRolland/thats-what-she-said'
    },

    { 
        id: 3, 
        name: 'Art Gallery', 
        shortDescription : "Portfolio d'une artiste",
        description: ' <p><strong> Fonctionnalités du site : </strong> </p> <p> Affiche de façon dynamique toutes les oeuvres (images) de la table Artwork grâce à une boucle et une connection à la base de donnée. Au clic sur chaque image, affiche une page (\'oeuvre.php\') détaillée avec son image, sa description complète.<br> - Possibilité de trier le résultat selon la technique grâce à des boutons. <br> - Connexion/authentification à une page Admin Dans la page d\'accueil côté client, espace \"contact\" avec formulaire.</p> <p>Page Admin : <br> Tout message envoyé via le formulaire de contact apparaîtra de façon résumée dans la page \"messagerie\", puis plus en détail si besoin en cliquant sur \"tout voir\".<br>Inscription nouveau user pour partie admin<br>Possibilité d\'ajouter une oeuvre via un formulaire, avec un upload pour l\'image, et des checkbox pour cocher le ou les matériaux/techniques utilisés.<br>Possibilité d\'ajouter un matériau/technique qui s\'ajoutera aussi dans le formulaire précédent.<br>Possibilité de supprimer une oeuvre.<br>Possibilité d\'éditer quelques champs d\'une oeuvre <br>Sécurité<br>Hashage de mot de passe en BCRYPT à la création de compte<br>Filtrage de caractères spéciaux dans la messagerie contact</p> <img src="../../../img/accueil-php.jpg" width="600" alt="" class="mx-auto">', 
        stack: ['PHP', 'Tailwind', 'SQL'], 
        img: 'art-php.jpg',
        github: 'https://github.com/AmelieRolland/Galerie---php',
    
    },

    { 
        id: 4, 
        name: 'Meteo App', 
        shortDescription : "Changement d'API pour une application météo",
        description: '<p>Fonctionnalités</p><ul><li>Heure et date locales actuelles</li><li>Températures et humidité</li><li>Vitesse et direction du vent</li><li>Heures de lever et de coucher du soleil</li><li>Gestion des erreurs et informations de chargement</li><li>Possibilité de définir la ville à partir d\’un fichier de configuration</li><li>Horloge intégrée</li></ul><p>LE PROJET</p><p>Il s\’agit d\’un projet-test pour une école que j\’aimerais vraiment intégrer. Ça n\a pas été si facile car je l\’ai réalisé avant mon cours de JS, donc j\’ai dû apprendre beaucoup de choses par moi-même.</p><p>Ils m\’ont demandé de changer l\’API qu\’ils utilisaient (weathermeteo) et d\’utiliser openmeteo, avec de nouvelles requêtes. C\’est la première fois que je travaille avec du code existant, c\’était très intéressant.</p><p>Il y a une grande communauté JS sur internet, donc j\’ai pu trouver la plupart des solutions à mes problèmes.</p><p>Cependant, j\’ai intégré une horloge en temps réel, mais je n\’ai pas trouvé comment la faire utiliser le fuseau horaire... Donc, jusqu\’à présent, apparemment je ne peux l\’utiliser qu\’en France métropolitaine ; si je définis une ville différente à l\’étranger, l\’heure ne changera pas. (J\’ai découvert que lorsque j\’utilise les données, le setInterval ne fonctionne pas comme il devrait.) Je vais travailler là-dessus.</p><p>Note</p><p>MISE À JOUR J\’ai enfin trouvé un moyen d\’ajouter le fuseau horaire avec une fonction ! 🎉</p><p>J\’ai ajouté un fichier, dans Services, où j\’ai créé une fonction pour changer l\’image principale + la description en fonction du code météo.</p><p>De plus, comme je me suis formé moi-même, j\’ai peut-être utilisé des méthodes ou des fonctions qui ne sont pas les plus optimisées ; je suis sûr que j\’apprendrai bientôt plus et que je les modifierai si nécessaire.</p>', 
        stack: ['NextJs', 'Node.js', 'JavaScript'], 
        img: 'openmeteo.jpg' ,
        github: 'https://github.com/AmelieRolland/weather-app'
    },
]
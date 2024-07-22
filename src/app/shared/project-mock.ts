import { Project } from "./entities";

export const projects : Project[] = [
    {
        id: 1,
        name: 'Sparkle',
        shortDescription: {
            fr: "Site pour un pressing haut de gamme",
            en: "Site for a high-end dry cleaner"
        },
        description: {
            fr: '<p>En cours </p><p>Dans le cadre de ma formation, j\'ai un site à réaliser de A à Z pour un pressing. L\'objectif est de créer un logiciel de gestion leur permettant de gérer plus facilement les dépôts clients et l\'assignation des tâches à leurs employés. Le but de cette plateforme est de permettre à l\'utilisateur de choisir les articles qu\'il souhaite déposer, d\'indiquer la date de dépôt ainsi que de payer la prestation. La partie administrative sera disponible uniquement pour les gérants et leurs employés. Elle permettra la gestion de toutes les informations disponibles sur le site selon les droits attribués aux différents comptes.</p> <p> La partie front est développée sous angular, et la partie back est une API rest sous Symfony.</p>',
            en: '<p>As part of my training, I have to create a site from A to Z for a dry cleaner. The goal is to develop a management software that makes it easier to handle customer deposits and task assignments to employees. This platform allows users to select the items they wish to deposit, indicate the deposit date, and pay for the service. The administrative part will be available only to managers and their employees, allowing the management of all site information according to the rights assigned to different accounts.</p> <p>The front end is developed with Angular, and the back end is a REST API on Symfony.</p>'
        },
        stack: ['Angular', 'Bootstrap', 'Symfony', 'PHP', 'Typescript', 'JavaScript', 'SQL', 'Figma'],
        img: 'sparkle.png',
        github: 'https://github.com/AmelieRolland/ngSparkle'
    },

    { 
        id: 2, 
        name: 'That\'s what she said',
        shortDescription: {
            fr: "Générateur aléatoire de citations de femmes inspirantes",
            en: "Random generator of quotes by inspiring women"
        },
        description: {
            fr: '<p>L\’idée était de pratiquer avec mes premiers acquis en SQL, et de prendre un peu d\’avance sur les cours de php à venir. <br> 💡L\’idée : un générateur aléatoire de citations de femmes inspirantes à travers le monde. Les outils : HTML/CSS Bootstrap, php, SQL</p> <p>Le nom : “That’s what she said !” en clin d\'œil à une série qui me remonte le moral en toute circonstance. Une phrase dont j\’ai un peu détourné le sens, évidemment ;)</p> <p>🍃Très intéressée par l\’éco-conception, j\’ai essayé de concevoir ce petit site en toute sobriété, sans animations, en utilisant des polices natives et en convertissant les images en format webp. Si vous avez des recommandations en plus ici, je prends!</p> <p>👀J\’ai beaucoup appris sur ce projet, et pas seulement techniquement. En souhaitant partager une parole encore peu valorisée, de toutes ces représentations féminines qui me manquaient plus jeune, j\’ai découvert de nombreuses femmes, artistes, scientifiques, écrivaines, dont je n\’avais jamais entendu parler auparavant; quelle réjouissance de les découvrir et de contribuer à les rendre visibles. J\’ai encore toute une liste de citations à intégrer, et si vous avez des références, n\’hésitez pas à me les partager!</p>',
            en: '<p>The idea was to practice my initial SQL skills and get a head start on upcoming PHP courses. <br> 💡 The concept: a random generator of quotes by inspiring women from around the world. The stack used: HTML/CSS Bootstrap, PHP, SQL.</p> <p>The name: “That’s what she said!” is a nod to a series that lifts my spirits in any situation. I have slightly twisted the meaning, of course ;)</p> <p>🍃 Very interested in eco-design, I aimed to create this small site with simplicity, avoiding animations, using native fonts, and converting images to webp format. If you have additional recommendations, I’m open to them!</p> <p>👀 I learned a lot from this project, not just technically. In my desire to share voices that are still undervalued, representing the female figures I missed out on when I was younger, I discovered many women, artists, scientists, writers, whom I had never heard of before; it was a joy to discover them and to contribute to make them visible. I still have a list of quotes to add, and if you have any references, feel free to share them with me!</p>'
        },
        stack: ['Bootstrap', 'PHP', 'SQL'], 
        img: 'whatdidshesay.png' ,
        github: 'https://github.com/AmelieRolland/thats-what-she-said'
    },

    { 
        id: 3, 
        name: 'Art Gallery', 
        shortDescription: {
            fr: "Portfolio d'une artiste",
            en: "Artist portfolio"
        },
        description: {
            fr: '<p><strong> Fonctionnalités du site : </strong> </p> <p> Affiche de façon dynamique toutes les oeuvres via une connection à la base de donnée. Au clic sur chaque image, affiche une page (\'oeuvre.php\') détaillée avec son image, sa description complète.<br> - Possibilité de trier le résultat selon la technique grâce à des boutons. <br> - Connexion/authentification à une page Admin Dans la page d\'accueil côté client, espace "contact" avec formulaire.</p> <p>Page Admin : <br> Tout message envoyé via le formulaire de contact apparaîtra de façon résumée dans la page "messagerie", puis plus en détail si besoin en cliquant sur "tout voir".<br>Inscription nouveau user pour partie admin<br>Possibilité d\'ajouter une oeuvre via un formulaire, avec un upload pour l\'image, et des checkbox pour cocher le ou les matériaux/techniques utilisés.<br>Possibilité d\'ajouter un matériau/technique qui s\'ajoutera aussi dans le formulaire précédent.<br>Possibilité de supprimer une oeuvre.<br>Possibilité d\'éditer quelques champs d\'une oeuvre <br>Sécurité<br>Hashage de mot de passe en BCRYPT à la création de compte<br>Filtrage de caractères spéciaux dans la messagerie contact</p> <img src="../../../img/accueil-php.jpg" width="600" alt="" class="mx-auto">',
            en: '<p><strong> Site Features: </strong> </p> <p> Dynamically displays all artworks from a database connection. On clicking each image, a detailed page (`oeuvre.php`) opens with its image and full description.<br> - Ability to sort results by technique using buttons. <br> - Admin page login/authentication In the client-side homepage, a "contact" space with a form.</p> <p>Admin Page: <br> All messages sent via the contact form will appear summarized in the "messaging" page, and in more detail if needed by clicking "see all".<br> New user registration for admin section<br> Ability to add a work via a form, with an image upload, and checkboxes to select the materials/techniques used.<br> Ability to add a new material/technique which will also be added in the previous form.<br> Ability to delete a work.<br> Ability to edit some fields of a work <br>Security<br>Password hashing with BCRYPT during account creation<br>Filtering of special characters in the contact messaging</p> <img src="../../../img/accueil-php.jpg" width="600" alt="" class="mx-auto">'
        },
        stack: ['PHP', 'Tailwind', 'SQL'], 
        img: 'art-php.jpg',
        github: 'https://github.com/AmelieRolland/Galerie---php',
    
    },

    { 
        id: 4, 
        name: 'Meteo App', 
        shortDescription: {
            fr: "Changement d'API pour une application météo",
            en: "API change for a weather application"
        },
        description: {
            fr: '<p>Fonctionnalités</p><ul><li>Heure et date locales actuelles</li><li>Températures et humidité</li><li>Vitesse et direction du vent</li><li>Heures de lever et de coucher du soleil</li><li>Gestion des erreurs et informations de chargement</li><li>Possibilité de définir la ville à partir d\’un fichier de configuration</li><li>Horloge intégrée</li></ul><p>LE PROJET</p><p>Il s\’agit d\’un projet-test pour une école que j\’aimerais vraiment intégrer. Ça n\a pas été si facile car je l\’ai réalisé avant mon cours de JS, donc j\’ai dû apprendre beaucoup de choses par moi-même.</p><p>Ils m\’ont demandé de changer l\’API qu\’ils utilisaient (weathermeteo) et d\’utiliser openmeteo, avec de nouvelles requêtes. C\’est la première fois que je travaille avec du code existant, c\’était très intéressant.</p><p>Il y a une grande communauté JS sur internet, donc j\’ai pu trouver la plupart des solutions à mes problèmes.</p><p>J\’ai ajouté un fichier, dans Services, où j\’ai créé une fonction pour changer l\’image principale + la description en fonction du code météo.</p><p>Comme je me suis formé moi-même, j\’ai peut-être utilisé des méthodes ou des fonctions qui ne sont pas les plus optimisées ; je suis sûr que j\’apprendrai bientôt plus et que je les modifierai si nécessaire.</p>',
            en: '<p>Features</p><ul><li>Current local time and date</li><li>Temperatures and humidity</li><li>Wind speed and direction</li><li>Sunrise and sunset times</li><li>Error handling and loading information</li><li>Ability to set the city from a configuration file</li><li>Integrated clock</li></ul><p>THE PROJECT</p><p>This is a test project for a school that I really want to join. It wasn’t easy as I completed it before my JS course, so I had to learn a lot on my own.</p><p>They asked me to change the API they were using (weathermeteo) and use openmeteo, with new queries. It was my first time working with existing code, and it was very interesting.</p><p>There is a large JS community online, so I was able to find most solutions to my problems.</p><p>I added a file in Services where I created a function to change the main image + description based on the weather code.</p><p>Additionally, as I taught myself, I may have used methods or functions that are not the most optimized; I’m sure I will learn more soon and adjust them as needed.</p>'
        },
        stack: ['NextJs', 'Node.js', 'JavaScript'], 
        img: 'openmeteo.jpg' ,
        github: 'https://github.com/AmelieRolland/weather-app'
    },
]
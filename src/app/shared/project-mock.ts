export const projects = [
    {
        id: 1,
        name: 'Sparkle',
        shortDescription : "Site pour un pressing haut de gamme",
        description: 'Dans le cadre de ma formation, j\'ai un site à réaliser de A à Z pou un pressing.L\'objectif est de créer un logiciel de gestion leur permettant de gérer plus facilement les dépôts clients et l\'assignation des tâches à leurs employés.Le but de cette plateforme est de permettre à l\'utilisateur de choisir les articles qu\'il souhaite déposer, d\'indiquer la date de dépôt ainsi que de payer la prestation.La partie administrative sera disponible uniquement pour les gérants et leurs employés.Elle permettra la gestion de toutes les informations disponibles sur le site selon les droits attribués aux différents comptes.',
        stack: ['Angular', 'Bootstrap', 'Symfony', 'PHP', 'Typescript', 'JavaScript'],
        img: 'sparkle.png'
    },

    { 
        id: 2, 
        name: 'That\'s what she said',
        shortDescription : "Générateur aléatoire de citations de femmes inspirantes",
        description: '', 
        stack: ['Bootstrap', 'PHP', 'SQL'], 
        img: 'whatdidshesay.png' 
    },

    { 
        id: 3, 
        name: 'Art Gallery', 
        shortDescription : "Portfolio d'une artiste",
        description: ' <p><strong> Fonctionnalités du site : </strong> </p> <p> Affiche de façon dynamique toutes les oeuvres (images) de la table Artwork grâce à une boucle et une connection à la base de donnée. Au clic sur chaque image, affiche une page (\'oeuvre.php\') détaillée avec son image, sa description complète.<br> - Possibilité de trier le résultat selon la technique grâce à des boutons. <br> - Connexion/authentification à une page Admin Dans la page d\'accueil côté client, espace \"contact\" avec formulaire.</p> <p>Page Admin : <br> Tout message envoyé via le formulaire de contact apparaîtra de façon résumée dans la page \"messagerie\", puis plus en détail si besoin en cliquant sur \"tout voir\".<br>Inscription nouveau user pour partie admin<br>Possibilité d\'ajouter une oeuvre via un formulaire, avec un upload pour l\'image, et des checkbox pour cocher le ou les matériaux/techniques utilisés.<br>Possibilité d\'ajouter un matériau/technique qui s\'ajoutera aussi dans le formulaire précédent.<br>Possibilité de supprimer une oeuvre.<br>Possibilité d\'éditer quelques champs d\'une oeuvre <br>Sécurité<br>Hashage de mot de passe en BCRYPT à la création de compte<br>Filtrage de caractères spéciaux dans la messagerie contact</p>', 
        stack: ['PHP', 'Tailwind', 'SQL'], 
        img: 'art-php.jpg' 
    },

    { 
        id: 4, 
        name: 'Meteo App', 
        shortDescription : "Changement d'API pour une application météo",
        description: 'A portfolio website', 
        stack: ['NextJs', 'Node.js', 'JavaScript'], 
        img: 'openmeteo.jpg' 
    },
]
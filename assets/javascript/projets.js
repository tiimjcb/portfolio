document.addEventListener('DOMContentLoaded', () => {
    const projectCardsContainer = document.getElementById('project-cards');
    const isGithubPages = window.location.hostname.includes('github.io');
    
    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            title: "Installations domotiques",
            date: "2022-07-01",
            closedDescription: "Installation de systèmes domotiques compatibles avec le protocole HomeKit.",
            openDescription: "Réalisation de multiples installations domotiques pour contrôler les appareils de la maison à l'aide de l'application Maison d'Apple, grâce au programme open-source Homebridge.",
            footerText: "Compétences renforcées : Linux, NodeJS, Protocoles réseaux",
            icon: "/assets/icons/homekit.png"
        },
        {
            title: "Analyse base de données",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            openDescription: "Projet dans le cadre des études. Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            footerText: "Compétences renforcées : SQL, Analyse de données, Travail d'équipe",
            icon: "/assets/icons/boatEmoji.png"
        },
        {
            title: "Site web pour ESN",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            openDescription: "Projet dans le cadre des études. Conception et réal. d'un site web pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            footerText: "Compétences renforcées : HTML, CSS, Conception web",
            icon: "/assets/icons/globeEmoji.png"
        },
        {
            title: "App. de classification Java",
            date: "2024-02-01",
            closedDescription: "Développement d'un programme de classification de dépêches en Java.",
            openDescription: "Projet dans le cadre des études. Développement d'un programme de classification de dépêches en Java, utilisant des algorithmes de machine learning pour prédire la catégorie d'une dépêche.",
            footerText: "Compétences renforcées : Java",
            icon: "/assets/icons/journalEmoji.png"
        },
        {
            title: "Pwnagotchi",
            date: "2024-03-01",
            closedDescription: "Création d'un Pwnagotchi pour apprendre les bases de la sécurité des réseaux.",
            openDescription: "Création d'un Pwnagotchi, dispositif basé sur un Raspberry Zero interceptant les handshakes Wi-Fi : une manière ludique d'apprendre le fonctionnement d'un réseau Wi-Fi et les bases de la sécurité.",
            footerText: "Compétences renforcées : Réseaux, Linux, Python",
            icon: "/assets/icons/pwnagotchi.png"
        },
        {
            title: "Tri base de données",
            date: "2024-04-01",
            closedDescription: "Tri d'une BD répertoriant des infos. sur le Nutri-Score des produits alimentaires.",
            openDescription: "Projet dans le cadre des études. Tri et rédaction d'un rapport sur une BD contenant des infos. relatives au Nutri-Score de denrées alimentaires, afin d'en comprendre son fonctionnement et ses failles.",
            footerText: "Compétences renforcées : SQL, Analyse de données, RMD",
            icon: "/assets/icons/barchartEmoji.png"
        },
        {
            title: "Installation serveur Debian",
            date: "2024-05-01",
            closedDescription: "Installation d'un serveur Debian avec outils basiques.",
            openDescription: "Projet dans le cadre des études. Installation d'un serveur Debian avec outils basiques (Apache, Postgres) afin d'en rédiger un guide détaillé en Anglais pour des étudiants débutants.",
            footerText: "Compétences renforcées : Linux, Serveurs, Rédaction anglaise",
            icon: "/assets/icons/tux.png"
        },
        {
            title: "App. de gestion d'évènements",
            date: "2024-06-01",
            closedDescription: "Développement d'une app. de gestion d'évènements avec interface graphique.",
            openDescription: "Projet dans le cadre des études. Développement d'une application de gestion d'évènements en Java, avec interface graphique, permettant de gérer des évènements et des participants.",
            footerText: "Compétences renforcées : JavaFX, Leadership, Gestion de projet",
            icon: "/assets/icons/partyEmoji.png"
        },
    ];

    // Fonction pour formater les dates
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('fr-FR', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pour créer les cartes de projet
    projects.forEach((project) => {
        // Nécessaire sinon ça déconne avec GitHub Pages
        const iconPath = isGithubPages ? `/portfolio${project.icon}` : project.icon;

        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Création du conteneur pour la nouvelle disposition
        card.innerHTML = `
            <div class="card-content">
                <div class="card-image-wrapper">
                    <img src="${iconPath}" alt="${project.title}">
                </div>
                <div class="card-text-wrapper">
                    <h3>${project.title}</h3>
                    <p class="desc">${project.closedDescription}</p>
                </div>
                <p class="date">${formatDate(project.date)}</p>
            </div>
            <div class="card-overlay">
                <h4>${project.title}</h4>
                <div class="card-details">
                    <p>${project.openDescription}</p>
                </div>
                <p class="footer-text">${project.footerText}</p>
            </div>
        `;

        // Ajoute la carte au conteneur
        projectCardsContainer.appendChild(card);

        // Gestion du clic pour afficher l'overlay
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllCards();
        
            card.classList.add('active');

            // Ajuster la hauteur de .card-content en fonction de .card-overlay
            const cardContent = card.querySelector('.card-content');
            const cardOverlay = card.querySelector('.card-overlay');
            cardContent.style.height = `${cardOverlay.scrollHeight}px`;
        });
    });

    function closeAllCards() {
        document.querySelectorAll('.project-card.active').forEach(card => {
            card.classList.remove('active');
    
            // Réinitialise la hauteur de la carte
            card.querySelector('.card-content').style.height = 'auto'; // Hauteur initiale
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.project-card')) {
            closeAllCards(); // Appelle cette fonction pour fermer toutes les cartes
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const projectCardsContainer = document.getElementById('project-cards');
    const isGithubPages = window.location.hostname.includes('.io');

    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            id: "project1",
            title: "Installations domotiques",
            date: "2022-07-01",
            closedDescription: "Installation de systèmes domotiques compatibles avec le protocole HomeKit.",
            openDescription: "Réalisation de multiples installations domotiques pour contrôler les appareils de la maison à l'aide de l'application Maison d'Apple, grâce au programme open-source Homebridge.",
            footerText: "Compétences renforcées : Linux, NodeJS, Protocoles réseaux",
            icon: "/assets/icons/homekit.png"
        },
        {
            id: "project2",
            title: "Analyse base de données",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            openDescription: "Projet dans le cadre des études. Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            footerText: "Compétences renforcées : SQL, Analyse de données, Travail d'équipe",
            icon: "/assets/icons/boatEmoji.png"
        },
        {
            id: "project3",
            title: "Site web pour ESN",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            openDescription: "Projet dans le cadre des études. Conception et réal. d'un site web pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            footerText: "Compétences renforcées : HTML, CSS, Conception web",
            icon: "/assets/icons/globeEmoji.png"
        },
        {
            id: "project4",
            title: "App. de classification Java",
            date: "2024-02-01",
            closedDescription: "Développement d'un programme de classification de dépêches en Java.",
            openDescription: "Projet dans le cadre des études. Développement d'un programme de classification de dépêches en Java, utilisant des algorithmes de machine learning pour prédire la catégorie d'une dépêche.",
            footerText: "Compétences renforcées : Java",
            icon: "/assets/icons/journalEmoji.png"
        },
        {
            id: "project5",
            title: "Pwnagotchi",
            date: "2024-03-01",
            closedDescription: "Création d'un Pwnagotchi pour apprendre les bases de la sécurité des réseaux.",
            openDescription: "Création d'un Pwnagotchi, dispositif basé sur un Raspberry Zero interceptant les handshakes Wi-Fi : une manière ludique d'apprendre le fonctionnement d'un réseau Wi-Fi et les bases de la sécurité.",
            footerText: "Compétences renforcées : Réseaux, Linux, Python",
            icon: "/assets/icons/pwnagotchi.png"
        },
        {
            id: "project6",
            title: "Tri base de données",
            date: "2024-04-01",
            closedDescription: "Tri d'une BD répertoriant des infos. sur le Nutri-Score des produits alimentaires.",
            openDescription: "Projet dans le cadre des études. Tri et rédaction d'un rapport sur une BD contenant des infos. relatives au Nutri-Score de denrées alimentaires, afin d'en comprendre son fonctionnement et ses failles.",
            footerText: "Compétences renforcées : SQL, Analyse de données, RMD",
            icon: "/assets/icons/barchartEmoji.png",
            hasFile:true,
            fileLink:"/assets/files/rapportNutriScore.pdf"
        },
        {
            id: "project7",
            title: "Guide d'install. serveur Debian",
            date: "2024-05-01",
            closedDescription: "Installation d'un serveur Debian avec outils basiques.",
            openDescription: "Projet dans le cadre des études. Installation d'un serveur Debian avec outils basiques (Apache, Postgres) afin d'en rédiger un guide détaillé en Anglais pour des étudiants débutants.",
            footerText: "Compétences renforcées : Linux, Serveurs, Rédaction anglaise",
            icon: "/assets/icons/debian.png",
            hasFile:true,
            fileLink:"/assets/files/guideInstallServeurDebian.pdf"
        },
        {
            id: "project8",
            title: "App. de gestion d'évènements",
            date: "2024-06-01",
            closedDescription: "Développement d'une app. de gestion d'évènements avec interface graphique.",
            openDescription: "Projet dans le cadre des études. Développement d'une application de gestion d'évènements en Java, avec interface graphique, permettant de gérer des évènements et des participants.",
            footerText: "Compétences renforcées : JavaFX, Leadership, Gestion de projet",
            icon: "/assets/icons/partyEmoji.png"
        },
        {
            id:"project9",
            title:"Tempo for PiZero",
            date:"2024-11-01",
            closedDescription:"Développement d'un écran E-Ink pour afficher la tarification de l'électricité.",
            openDescription:"Projet en cours. Développement d'un programme Python pour un écran E-Ink connecté à un Raspberry Pi Zero, affichant la tarification de l'électricité pour l'abonnement EDF Tempo.",
            footerText:"Compétences renforcées : Python, Linux",
            icon:"/assets/icons/electricityEmoji.png",
            hasGitRepo:true,
            gitRepoLink:"https://github.com/tiimjcb/tempoForPiZero",
            inProgress:true
        },
        {
            id:"project10",
            title:"Dauphinéo",
            date:"2024-12-01",
            closedDescription:"Développement d'une app. web mettant en avant le patrimoine culturel.",
            openDescription:"Projet en cours dans le cadre des études. Développement en équipe d'une application web pour mettre en avant les Sites Patrimoniaux Remarquables (SPR).",
            footerText:"Compétences renforcées : HTML/CSS, React (JS), Conception web",
            icon:"/assets/icons/castleEmoji.png",
            inProgress:true
        }
    ];

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Stockage de la hauteur initiale de chaque carte
    const initialHeights = {};

    // Créer les cartes des projets
    projects.forEach((project) => {
        const iconPath = isGithubPages ? `/portfolio${project.icon}` : project.icon;

        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('id', project.id); // Ajout d'un ID unique pour chaque projet

        if(project.inProgress){
            card.classList.add('in-progress');
        }

        card.innerHTML = `
            <div class="card-content">
                <div class="card-image-wrapper">
                    <img src="${iconPath}" alt="${project.title}">
                </div>
                <div class="card-text-wrapper">
                    <h3>${project.title}</h3>
                    <p class="date">${formatDate(project.date)}</p>
                    <p class="desc">${project.closedDescription}</p>
                </div>
            </div>
            <div class="card-overlay">
                <h4>${project.title}</h4>
                <p class="dateOnLeft">${formatDate(project.date)}</p>
                <div class="card-details">
                    <p>${project.openDescription}</p>
                </div>
                <p class="footer-text">${project.footerText}</p>
                ${project.hasGitRepo ? `<a href="${project.gitRepoLink}" class="btn" target="_blank">Voir le projet ➔</a>` : ''}
                ${project.hasFile ? `<a href="${project.fileLink}" class="btn" target="_blank">Voir le fichier ➔</a>` : ''}
            </div>
        `;

        projectCardsContainer.appendChild(card);

        const cardContent = card.querySelector('.card-content');
        cardContent.style.height = 'auto';

        // Stocker la hauteur initiale de chaque carte après que l'image a été chargée -- nécéssaire sinon ca déconne au niveau de la taille restaurée
        const img = card.querySelector('img');
        img.onload = () => {
            initialHeights[project.id] = cardContent.scrollHeight;
        };

    
        // Gestion du clic pour afficher l'overlay
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('active')) {
            e.stopPropagation();
            const wasAnyCardOpen = document.querySelector('.project-card.active');
            closeAllCards();

            img.onload = () => {
                initialHeights[project.id] = cardContent.scrollHeight;
            };
            
            const cardOverlay = card.querySelector('.card-overlay');
            
            cardContent.style.height = `${initialHeights[project.id]}px`;
            cardContent.offsetHeight; // Forcer le recalcul de la mise en page

            const applyHeight = () => {
                requestAnimationFrame(() => {
                cardContent.style.height = `${cardOverlay.scrollHeight}px`;
                card.classList.add('active');
                });
            };

            if (wasAnyCardOpen && window.innerWidth > 650) {
                setTimeout(applyHeight, 200); // Appliquer un délai de 200ms si une autre carte était ouverte et si la largeur de l'écran est supérieure à 650px
            } else {
                applyHeight();
            }
            }
        });
    });

    // Fermer une carte spécifique
    function closeCard(card, projectId) {
        const cardContent = card.querySelector('.card-content');
        card.classList.remove('active');
        cardContent.style.height = `${initialHeights[projectId]}px`;
        setTimeout(() => {
            cardContent.style.height = 'auto';
        }, 300);
    }


    // Fermer toutes les cartes
    function closeAllCards() {
        document.querySelectorAll('.project-card.active').forEach(card => {
            const cardId = card.getAttribute('id');
            closeCard(card, cardId);
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.project-card')) {
            closeAllCards(); // Ferme toutes les cartes si on clique ailleurs
        }
    });

    // Fonction pour formater les dates
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    }
});
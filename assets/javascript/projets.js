document.addEventListener('DOMContentLoaded', () => {
    const projectCardsContainer = document.getElementById('project-cards');
    const isGithubPages = window.location.hostname.includes('.io');

    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            id: "project1",
            title: "Installations domotiques",
            titleEN: "Home Automation Installations",
            date: "2022-07-01",
            closedDescription: "Installation de systèmes domotiques compatibles avec le protocole HomeKit.",
            closedDescriptionEN: "Installation of home automation systems compatible with the HomeKit protocol.",
            openDescription: "Réalisation de multiples installations domotiques pour contrôler les appareils de la maison à l'aide de l'application Maison d'Apple, grâce au programme open-source Homebridge.",
            openDescriptionEN: "Completed multiple home automation setups to control household devices using Apple's Home app, powered by the open-source Homebridge program.",
            footerText: "Compétences renforcées : Linux, NodeJS, Protocoles réseaux",
            footerTextEN: "Skills improved: Linux, NodeJS, Network Protocols",
            icon: "/assets/icons/homekit.png"
        },
        {
            id: "project2",
            title: "Analyse base de données",
            titleEN: "Database Analysis",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            closedDescriptionEN: "Analysis of a database containing information on Titanic passengers.",
            openDescription: "Projet dans le cadre des études.<br>Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            openDescriptionEN: "Academic project.<br>Analyzed a database to understand factors influencing Titanic passenger survival using SQL commands.",
            footerText: "Compétences renforcées : PostgreSQL, Analyse de données, Travail d'équipe",
            footerTextEN: "Skills improved: PostgreSQL, Data Analysis, Teamwork",
            icon: "/assets/icons/boatEmoji.png"
        },
        {
            id: "project3",
            title: "Site web pour ESN",
            titleEN: "Website for IT Company",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            closedDescriptionEN: "Development of a website for an IT service company to showcase its business.",
            openDescription: "Projet dans le cadre des études.<br>Conception et réalisation d'un site web (fictif) pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            openDescriptionEN: "Academic project.<br>Designed and developed a (fictitious) website for an IT service company, targeting Generation Alpha to promote its business and values.",
            footerText: "Compétences renforcées : HTML, CSS, Gestion de projet",
            footerTextEN: "Skills improved: HTML, CSS, Project Management",
            icon: "/assets/icons/globeEmoji.png"
        },
        {
            id: "project4",
            title: "App. de classification Java",
            titleEN: "Java Classification App",
            date: "2024-02-01",
            closedDescription: "Développement d'un programme de classification de dépêches en Java.",
            closedDescriptionEN: "Development of a news classification program in Java.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'un programme de classification de dépêches en Java, utilisant des algorithmes de machine learning pour prédire la catégorie d'une dépêche.",
            openDescriptionEN: "Academic project.<br>Developed a news classification program in Java using machine learning algorithms to predict news categories.",
            footerText: "Compétences renforcées : Java",
            footerTextEN: "Skills improved: Java",
            icon: "/assets/icons/journalEmoji.png"
        },
        {
            id: "project5",
            title: "Pwnagotchi",
            titleEN: "Pwnagotchi",
            date: "2024-03-01",
            closedDescription: "Création d'un Pwnagotchi pour apprendre les bases de la sécurité des réseaux.",
            closedDescriptionEN: "Created a Pwnagotchi to learn the basics of network security.",
            openDescription: "Création d'un Pwnagotchi, dispositif basé sur un Raspberry Zero interceptant les handshakes Wi-Fi : une manière ludique d'apprendre le fonctionnement d'un réseau Wi-Fi et les bases de la sécurité.",
            openDescriptionEN: "Created a Pwnagotchi, a Raspberry Zero-based device intercepting Wi-Fi handshakes: a fun way to learn Wi-Fi network functionality and basic security principles.",
            footerText: "Compétences renforcées : Réseaux, Linux, Python",
            footerTextEN: "Skills improved: Networking, Linux, Python",
            icon: "/assets/icons/pwnagotchi.png"
        },
        {
            id: "project6",
            title: "Tri base de données",
            titleEN: "Database Sorting",
            date: "2024-04-01",
            closedDescription: "Tri d'une BD répertoriant des infos. sur le Nutri-Score des produits alimentaires.",
            closedDescriptionEN: "Sorting of a database listing information on food product Nutri-Scores.",
            openDescription: "Projet dans le cadre des études.<br>Tri et rédaction d'un rapport sur une BD contenant des infos. relatives au Nutri-Score de denrées alimentaires, afin d'en comprendre son fonctionnement et ses failles.",
            openDescriptionEN: "Academic project.<br>Sorted and wrote a report on a database containing information on the Nutri-Score of food products to understand its function and limitations.",
            footerText: "Compétences renforcées : SQL, Analyse de données, RMD",
            footerTextEN: "Skills improved: SQL, Data Analysis, RMD",
            icon: "/assets/icons/barchartEmoji.png",
            hasFile: true,
            fileLink: "/assets/files/rapportNutriscore.pdf"
        },
        {
            id: "project7",
            title: "Guide d'install. serveur Debian",
            titleEN: "Debian Server Install. Guide",
            date: "2024-05-01",
            closedDescription: "Installation d'un serveur Debian avec outils basiques.",
            closedDescriptionEN: "Installation of a Debian server with basic tools.",
            openDescription: "Projet dans le cadre des études.<br>Installation d'un serveur Debian avec outils basiques (Apache, Postgres) afin d'en rédiger un guide détaillé en Anglais pour des étudiants débutants.",
            openDescriptionEN: "Academic project.<br>Installed a Debian server with basic tools (Apache, Postgres) and wrote a detailed guide in English for beginner students.",
            footerText: "Compétences renforcées : Linux, Serveurs, Rédaction anglaise",
            footerTextEN: "Skills improved: Linux, Servers, English Writing",
            icon: "/assets/icons/debian.png",
            hasFile: true,
            fileLink: "/assets/files/guideInstallServeurDebian.pdf"
        },
        {
            id: "project8",
            title: "App. de gestion d'évènements",
            titleEN: "Event Management App",
            date: "2024-06-01",
            closedDescription: "Développement d'une app. de gestion d'évènements avec interface graphique.",
            closedDescriptionEN: "Development of an event management app with a graphical interface.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'une application de gestion d'évènements en Java, avec interface graphique, permettant de gérer des évènements et des participants.",
            openDescriptionEN: "Academic project.<br>Developed an event management application in Java with a graphical interface, allowing for the management of events and participants.",
            footerText: "Compétences renforcées : JavaFX, Leadership, Gestion de projet",
            footerTextEN: "Skills improved: JavaFX, Leadership, Project Management",
            icon: "/assets/icons/partyEmoji.png"
        },
        {
            id: "project9",
            title: "Portfolio",
            titleEN: "Portfolio",
            date: "2024-09-01",
            closedDescription: "Création de ce portfolio pour présenter mes projets et compétences.",
            closedDescriptionEN: "Creation of this portfolio to showcase my projects and skills.",
            openDescription: "Projet évolutif.<br>Développement de ce portfolio pour présenter mes projets et compétences, en utilisant HTML, CSS et JavaScript. Je considère cela comme un projet, car il contribue à mon apprentissage.",
            openDescriptionEN: "Evolutive project.<br>Developing this portfolio to showcase my projects and skills, using HTML, CSS, and JavaScript. I consider this as a project as it contributes to my learning.",
            footerText: "Compétences renforcées : HTML, CSS, JavaScript",
            footerTextEN: "Skills improved: HTML, CSS, JavaScript",
            icon: "/assets/icons/openfolderEmoji.png",
            hasGitRepo: true,
            gitRepoLink: "https://github.com/tiimjcb/portfolio"
        },
        {
            id: "project10",
            title: "Tempo for PiZero",
            titleEN: "Tempo for PiZero",
            date: "2024-11-01",
            closedDescription: "Développement d'un écran E-Ink pour afficher la tarification de l'électricité.",
            closedDescriptionEN: "Development of an E-Ink screen to display electricity pricing.",
            openDescription: "Projet en cours.<br>Développement d'un programme Python pour un écran E-Ink connecté à un Raspberry Pi Zero, affichant la tarification de l'électricité pour l'abonnement EDF Tempo.",
            openDescriptionEN: "Ongoing project.<br>Developing a Python program for an E-Ink screen connected to a Raspberry Pi Zero to display electricity pricing for the EDF Tempo subscription.",
            footerText: "Compétences renforcées : Python, Linux",
            footerTextEN: "Skills improved: Python, Linux",
            icon: "/assets/icons/electricityEmoji.png",
            hasGitRepo: true,
            gitRepoLink: "https://github.com/tiimjcb/tempoForPiZero",
            inProgress: true
        },
        {
            id: "project11",
            title: "FSD Discord Bot",
            titleEN: "FSD Discord Bot",
            date: "2024-12-01",
            closedDescription: "Développement d'un bot Discord amusant envoyant des smileys au design horrible.",
            closedDescriptionEN: "Development of a funny Discord bot that sends horribly designed smileys.",
            openDescription: "Projet personnel.<br>Développement à zéro de <i>Free Smiley Dealer Bot Revived</i>, un bot Discord envoyant d'affreux emojis : le merveilleux résultat d'un mème international (Free Smiley Faces)",
            openDescriptionEN: "Personal project.<br>Developed from scratch <i>Free Smiley Dealer Bot Revived</i>, a Discord bot sending awful emojis: the wonderful result of an international meme (Free Smiley Faces)",
            footerText: "Compétences renforcées : Python, Discord API",
            footerTextEN: "Skills improved: Python, Discord API",
            icon: "/assets/icons/smilingEmoji.png",
            hasGitRepo: true,
            gitRepoLink: "https://github.com/tiimjcb/freeSmileyDealerBotRevived"
        },
        {
            id: "project12",
            title: "Dauphinéo",
            titleEN: "Dauphinéo",
            date: "2025-01-01",
            closedDescription: "Développement d'une app. web mettant en avant le patrimoine culturel.",
            closedDescriptionEN: "Development of a web application showcasing cultural heritage.",
            openDescription: "Projet en cours dans le cadre des études.<br>Développement en équipe d'une application web pour mettre en avant les Sites Patrimoniaux Remarquables (SPR).",
            openDescriptionEN: "Ongoing academic project.<br>Team development of a web application to highlight remarkable heritage sites (SPR).",
            footerText: "Compétences renforcées : HTML/CSS, React (JS), Conception web",
            footerTextEN: "Skills improved: HTML/CSS, React (JS), Web Design",
            icon: "/assets/icons/castleEmoji.png",
            inProgress: true
        }
    ];

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Stockage de la hauteur initiale de chaque carte
    const initialHeights = {};

    // Vérifier si la page est "indexEN.html"
    const isEnglish = window.location.pathname.includes("indexEN.html");

    // Créer les cartes des projets
    projects.forEach((project) => {
        const iconPath = isGithubPages ? `/portfolio${project.icon}` : project.icon;
    
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('id', project.id); // Ajout d'un ID unique pour chaque projet
    
        if (project.inProgress) {
            card.classList.add('in-progress');
        }
    
        // Choisir les attributs en fonction de la langue
        const title = isEnglish ? project.titleEN : project.title;
        const closedDescription = isEnglish ? project.closedDescriptionEN : project.closedDescription;
        const openDescription = isEnglish ? project.openDescriptionEN : project.openDescription;
        const footerText = isEnglish ? project.footerTextEN : project.footerText;
    
        card.innerHTML = `
            <div class="card-content">
            <div class="card-image-wrapper">
                <img src="${iconPath}" alt="${title}">
            </div>
            <div class="card-text-wrapper">
                <h3>${title}</h3>
                <p class="date">${formatDate(project.date)}</p>
                <p class="desc">${closedDescription}</p>
            </div>
            </div>
            <div class="card-overlay">
            <h4>${title}</h4>
            <p class="dateOnLeft">${formatDate(project.date)}</p>
            <div class="card-details">
                <p>${openDescription}</p>
            </div>
            <p class="footer-text">${footerText}</p>
            ${project.hasGitRepo ? `<a href="${isGithubPages ? `/portfolio${project.gitRepoLink}` : project.gitRepoLink}" class="btn" target="_blank">${isEnglish ? 'See the project ➔' : 'Voir le projet ➔'}</a>` : ''}
            ${project.hasFile ? `<a href="${isGithubPages ? `/portfolio${project.fileLink}` : project.fileLink}" class="btn" target="_blank">${isEnglish ? 'See the file ➔' : 'Voir le fichier ➔'}</a>` : ''}
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
        return date.toLocaleDateString(isEnglish ? 'en-US' : 'fr-FR', options);
    }
});
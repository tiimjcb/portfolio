document.addEventListener('DOMContentLoaded', () => {
    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            title: "Installations domotiques",
            date: "2022-07-01",
            closedDescription: "Installation de systèmes domotiques compatibles avec le protocole HomeKit.",
            openDescription: "Réalisation de multiples installations domotiques pour contrôler les appareils de la maison à l'aide de l'application Maison d'Apple, grâce au programme open-source Homebridge.",
            footerText: "Compétences renforcées : Linux, NodeJS, protocoles réseaux",
            icon: "../assets/icons/homekit.png"
        },
        {
            title: "Analyse base de données",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            openDescription: "Projet dans le cadre des études. Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            footerText: "Compétences renforcées : SQL, analyse de données, travail d'équipe",
            icon: "/assets/icons/boatEmoji.png"
        },
        {
            title: "Site web pour ESN",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            openDescription: "Projet dans le cadre des études. Conception et réal. d'un site web pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            footerText: "Compéétences renforcées : HTML, CSS, Conception web",
            icon: "/assets/icons/globeEmoji.png"
        },
        {
            title: "Programme de classification Java",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            openDescription: "Projet dans le cadre des études. Conception et réal. d'un site web pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            footerText: "Compéétences renforcées : HTML, CSS, Conception web",
            icon: "/assets/icons/globeEmoji.png"
        },
    ];

    const projectCardsContainer = document.getElementById('project-cards');

    // Fonction pour formater les dates en "Mois Année"
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('fr-FR', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Mettre la première lettre en majuscule
    }

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Crée les cartes de projet
    projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-content">
                <img src="${project.icon}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p class="date">${formatDate(project.date)}</p> <!-- Affiche la date formatée -->
                <p class="desc">${project.closedDescription}</p>
            </div>
            <div class="card-overlay">
                <h4>${project.title}</h4>
                <div class="card-details">
                    <p>${project.openDescription}</p>
                </div>
                <p class="footer-text">${project.footerText}</p>
            </div>
        `;

        // Gestion du clic pour afficher l'overlay
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation du clic à l'élément parent
            closeAllCards(); // Ferme toutes les cartes avant d'ouvrir une nouvelle
            card.classList.add('active'); // Ajouter la classe active pour déclencher l'animation
        });

        projectCardsContainer.appendChild(card);
    });

    // Fonction pour fermer toutes les cartes
    function closeAllCards() {
        document.querySelectorAll('.project-card.active').forEach(card => {
            card.classList.remove('active');
        });
    }

    // Gestion du clic en dehors des cartes pour fermer l'overlay
    document.addEventListener('click', (e) => {
        // Vérifie si le clic n'a pas eu lieu à l'intérieur d'une carte
        if (!e.target.closest('.project-card')) {
            closeAllCards(); // Ferme toutes les cartes
        }
    });
});
const skills = [
    {
        link: 'https://www.python.org/',
        imgSrc: 'assets/icons/python.png',
        title: 'Python',
        level: 3
    },
    {
        link: 'https://isocpp.org/',
        imgSrc: 'assets/icons/cpp.png',
        title: 'C++',
        level: 2
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        imgSrc: 'assets/icons/html5.png',
        title: 'HTML5',
        level: 4
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        imgSrc: 'assets/icons/css3.png',
        title: 'CSS3',
        level: 4
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        imgSrc: 'assets/icons/js.png',
        title: 'JavaScript',
        level: 2
    },
    {
        link: 'https://www.php.net/',
        imgSrc: 'assets/icons/php.png',
        title: 'PHP',
        level: 2
    },
    {
        link: 'https://fr.wikipedia.org/wiki/Structured_Query_Language',
        imgSrc: 'assets/icons/sql.png',
        title: 'SQL',
        level: 3
    },
    {
        link: 'https://www.postgresql.org/',
        imgSrc: 'assets/icons/postgres.png',
        title: 'PostgreSQL',
        level: 3
    },
    {
        link: 'https://git-scm.com/',
        imgSrc: 'assets/icons/git.png',
        title: 'Git',
        level: 4
    }
];

/// Fonction pour trier par nom
function sortByName() {
    skills.sort((a, b) => a.title.localeCompare(b.title));
    generateSkillCards(); 
}

// Fonction pour trier par niveau
function sortByCompetence() {
    skills.sort((a, b) => b.level - a.level);
    generateSkillCards(); 
}

// Fonction pour trier par compétence ET nom
function sortByCompetenceAndName() {
    skills.sort((a, b) => {
        if (b.level !== a.level) {
            return b.level - a.level; 
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    generateSkillCards(); 
}

// Fonction pour générer les cartes dynamiquement
function generateSkillCards() {
    const container = document.querySelector('.skillCards');
    container.innerHTML = ''; 

    skills.forEach(skill => {
        const card = document.createElement('a');
        card.href = skill.link;
        card.classList.add('skillCard');

        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.alt = skill.title;

        const h4 = document.createElement('h4');
        h4.textContent = skill.title;

        const hr = document.createElement('hr');

        const p = document.createElement('p');
        p.innerHTML = getLevelString(skill.level); 

        card.appendChild(img);
        card.appendChild(h4);
        card.appendChild(hr);
        card.appendChild(p);

        container.appendChild(card);
    });
}


function getLevelString(level) {
    const filledCircles = '<i class="fas fa-circle" style="background: linear-gradient(to bottom right, #EF4765, #ff6404); -webkit-background-clip: text; color: transparent;"></i>'.repeat(level); // Cercle plein avec dégradé
    const emptyCircles = '<i class="far fa-circle" style="background: linear-gradient(to bottom right, #EF4765, #ff6404); -webkit-background-clip: text; color: transparent; opacity: 0.5;"></i>'.repeat(5 - level); // Cercle vide en gris avec opacité réduite
    return filledCircles + emptyCircles;
}



document.getElementById('sort-by-name').addEventListener('click', sortByName);
document.getElementById('sort-by-competence').addEventListener('click', sortByCompetenceAndName);

window.onload = sortByCompetenceAndName;

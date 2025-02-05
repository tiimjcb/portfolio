const langSkills = [
    {
        link: 'https://www.python.org/',
        imgSrc: 'assets/icons/python.png',
        title: 'Python'
    },
    {
        link: 'https://isocpp.org/',
        imgSrc: 'assets/icons/cpp.png',
        title: 'C++'
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        imgSrc: 'assets/icons/html5.png',
        title: 'HTML5'
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        imgSrc: 'assets/icons/css3.png',
        title: 'CSS3'
    },
    {
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        imgSrc: 'assets/icons/js.png',
        title: 'JavaScript'
    },
    {
        link: 'https://www.php.net/',
        imgSrc: 'assets/icons/php.png',
        title: 'PHP'
    },
    {
        link: 'https://fr.wikipedia.org/wiki/Structured_Query_Language',
        imgSrc: 'assets/icons/sql.svg',
        title: 'SQL'
    },
    {
        link : 'https://doc.ubuntu-fr.org/bash',
        imgSrc : 'assets/icons/bash.svg',
        title : 'Bash'
    },
    {
        link: 'https://www.java.com/',
        imgSrc: 'assets/icons/java.png',
        title: 'Java'
    },
    {
        link: 'https://reactjs.org/',
        imgSrc: 'assets/icons/react.png',
        title: 'React'
    }
    
];

const toolSkills = [
    {
        link: 'https://www.postgresql.org/',
        imgSrc: 'assets/icons/postgres.png',
        title: 'PostgreSQL'
    },
    {
        link: 'https://git-scm.com/',
        imgSrc: 'assets/icons/git.png',
        title: 'Git'
    },
    {
        link: 'https://ubuntu.com/',
        imgSrc: 'assets/icons/ubuntu.png',
        title: 'Ubuntu'
    },
    {
        link: 'https://www.debian.org/',
        imgSrc: 'assets/icons/debian.png',
        title: 'Debian'
    },
    {
        link: 'https://www.vegascreativesoftware.com/us/vegas-pro/',
        imgSrc: 'assets/icons/vegaspro.png',
        title: 'Vegas Pro'
    },
    {
        link: 'https://www.microsoft.com/en-us/microsoft-365',
        imgSrc: 'assets/icons/office.svg',
        title: 'Office'
    },
    {
        link: 'https://www.virtualbox.org/',
        imgSrc: 'assets/icons/virtualbox.png',
        title: 'VirtualBox'
    },
    {
        link: 'https://code.visualstudio.com/',
        imgSrc: 'assets/icons/vscode.png',
        title: 'VS Code'
    },
    {
        link: 'https://www.jetbrains.com/',
        imgSrc: 'assets/icons/jetbrains.png',
        title: 'JetBrains'
    },
    {
        link: 'https://www.latex-project.org/',
        imgSrc: 'assets/icons/latex.png',
        title: 'LaTeX'
    },
    {
        link: 'https://www.sqlite.org/',
        imgSrc: 'assets/icons/sqlite.png',
        title: 'SQLite'
    }
];

// Fonction pour trier par nom
function sortAtoZ() {
    langSkills.sort((a, b) => a.title.localeCompare(b.title));
    toolSkills.sort((a, b) => a.title.localeCompare(b.title));
    generateSkillCards(); 
    document.getElementById('sort-z-to-a').classList.remove('toggled');
    document.getElementById('sort-a-to-z').classList.add('toggled');
}

// Fonction pour trier par nom (inversé)
function sortZtoA() {
    langSkills.sort((a, b) => b.title.localeCompare(a.title));
    toolSkills.sort((a, b) => b.title.localeCompare(a.title));
    generateSkillCards(); 
    document.getElementById('sort-a-to-z').classList.remove('toggled');
    document.getElementById('sort-z-to-a').classList.add('toggled');
}

// Fonction pour générer les cartes dynamiquement
function generateSkillCards() {
    const container = document.querySelector('.skillCardsContainer');
    container.innerHTML = ''; 

    // Vérifier si la page est "indexEN.html"
    const isEnglishPage = window.location.pathname.includes('indexEN.html');

    // Générer les cartes pour les langages
    const langHeader = document.createElement('h3');
    langHeader.textContent = isEnglishPage ? 'Languages and Frameworks' : 'Langages et frameworks';
    langHeader.classList.add('revealL');
    container.appendChild(langHeader);

    const langHr = document.createElement('hr');
    langHr.classList.add('revealB');
    container.appendChild(langHr);

    const langContainer = document.createElement('div');
    langContainer.classList.add('skillCards', 'revealB');
    langSkills.forEach(skill => {
        const card = document.createElement('a');
        card.href = skill.link;
        card.classList.add('skillCard');
        card.target = '_blank';

        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.alt = skill.title;

        const h4 = document.createElement('h4');
        h4.textContent = skill.title;

        card.appendChild(img);
        card.appendChild(h4);

        langContainer.appendChild(card);
    });
    container.appendChild(langContainer);

    // Générer les cartes pour les outils
    const toolHeader = document.createElement('h3');
    toolHeader.textContent = isEnglishPage ? 'Tools' : 'Outils';
    toolHeader.classList.add('revealL');
    container.appendChild(toolHeader);

    const toolHr = document.createElement('hr');
    toolHr.classList.add('revealB');
    container.appendChild(toolHr);

    const toolContainer = document.createElement('div');
    toolContainer.classList.add('skillCards', 'revealB');
    toolSkills.forEach(skill => {
        const card = document.createElement('a');
        card.href = skill.link;
        card.classList.add('skillCard');
        card.target = '_blank';

        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.alt = skill.title;

        const h4 = document.createElement('h4');
        h4.textContent = skill.title;

        card.appendChild(img);
        card.appendChild(h4);

        toolContainer.appendChild(card);
    });
    container.appendChild(toolContainer);
}
const skills = [...langSkills, ...toolSkills];

document.getElementById('sort-a-to-z').addEventListener('click', sortAtoZ);
document.getElementById('sort-z-to-a').addEventListener('click', sortZtoA);

window.onload = sortAtoZ(); // Tri par défaut

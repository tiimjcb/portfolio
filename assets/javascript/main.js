/* --------- ScrollReveal --------- */
const sr = ScrollReveal();

// ---------- Without delay
sr.reveal('.revealL', {
    duration: 1000, 
    origin: 'left',
    distance: '50px',
    reset: false, 
    viewFactor: 0, 
});

sr.reveal('.revealR', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        reset: false,
        viewFactor: 0,
        });

sr.reveal('.revealT', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false,
        viewFactor: 0,
        });

sr.reveal('.revealB', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: false,
        viewFactor: 0,
});

// ---------- With delay
sr.reveal('.revealLwD', {
        duration: 1000, 
        origin: 'left',
        distance: '50px',
        reset: false, 
        delay: 80,
        viewFactor: 0, 
    });

sr.reveal('.revealRwD', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
        });

sr.reveal('.revealTwD', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
        });

sr.reveal('.revealBwD', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
});




/* --------- Retraction du header --------- */

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function updateHello() {
    const now = new Date();
    const hours = now.getHours();
    const greetingElement = document.getElementById('hello');
    
    if (hours >= 18 || hours < 6) {
        greetingElement.textContent = 'Bonsoir !';
    }
}

/* --------- Animation du HR --------- */

document.addEventListener('DOMContentLoaded', function() {
    const hrElements = document.querySelectorAll('.sectionHeader hr');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1 // 10%
    });

    hrElements.forEach(hr => {
        observer.observe(hr);
    });
});


/* --------- Smooth scroll --------- */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = -50; // Décalage nécéssaire sinon ca passe en dessous du header
                const targetPosition = targetElement.offsetTop + offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' 
                });
            }
        });
    });
});


/* --------- Formulaire de contact --------- */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const email = 'timothe.jacob@icloud.com'; 

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\n\nMessage: ${message}`)}`;

        window.location.href = mailtoLink;
    });
});


/* --------- Date de dernière mise à jour --------- */
document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdatedDate = new Date(document.lastModified);
    lastUpdatedElement.textContent = lastUpdatedDate.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const backToTopLink = document.querySelector('.back-to-top');
    backToTopLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* --------- Age --------- */
function updateAge() {
    const birthDate = new Date('2005-09-14');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    const ageElement = document.getElementById('age');
    ageElement.textContent = age;
}

document.addEventListener('DOMContentLoaded', updateAge);

/* --------- Main --------- */
updateHello();
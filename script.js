
const sr = ScrollReveal();

sr.reveal('.revealL', {
  duration: 1000, // Durée de l'animation en millisecondes
  origin: 'left', // L'animation démarre du bas
  distance: '50px', // Distance de déplacement de l'élément pendant l'animation
  reset: true, // Permet à l'animation de se répéter au scroll
  viewFactor: 0, // Permet de définir à quel point l'élément doit être visible avant de déclencher l'animation
});

sr.reveal('.revealR', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    reset: true,
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
        greetingElement.textContent = 'Bonsoir!';
    }
}




/* --------- Main --------- */
updateHello();
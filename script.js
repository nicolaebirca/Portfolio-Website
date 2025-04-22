/*============ toggle icon navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============ scroll sections active link ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============ sticky navbar ================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============ remove toggle icon and navbar when click navbar link (scroll) ================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============ sticky navbar ================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============ typed js ================*/
const typed = new Typed('.multiple-text', {
    strings: ["And I'm a Frontend Developer", "I Create for You"],
    typeSpeed: 90,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
} else {
    document.body.classList.add("light-mode");
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    localStorage.setItem('theme', 'light');
  }
});

document.getElementById('language-selector').addEventListener('change', function(event) {
    changeLanguage(event.target.value);
});

// Obiect cu textele pentru fiecare limbă
const translations = {
    en: {
      homeTitle: "Hello, It's Me,",
      name: "Nicolae Birca",
      aboutHeading: "About Me",
      skillsHeading: "My skills",
      contactHeading: "Contact Me!",
      // adaugă mai multe traduceri după necesitate
    },
    de: {
      homeTitle: "Hallo, es ist mich,",
      name: "Nicolae Birca",
      aboutHeading: "Über mich",
      skillsHeading: "Meine Fähigkeiten",
      contactHeading: "Kontaktiere mich!",
      // adaugă mai multe traduceri după necesitate
    }
  };
  
  // Selectează elementele care trebuie traduse
  const homeTitleElement = document.querySelector('.home-content h3');
  const nameElement = document.querySelector('.home-content h1');
  const aboutHeadingElement = document.querySelector('.about-content .heading');
  const skillsHeadingElement = document.querySelector('.skills-header .heading');
  const contactHeadingElement = document.querySelector('.contact .heading');
  
  // Funcție pentru a schimba limba
  function changeLanguage(language) {
    homeTitleElement.textContent = translations[language].homeTitle;
    nameElement.textContent = translations[language].name;
    aboutHeadingElement.innerHTML = translations[language].aboutHeading;
    skillsHeadingElement.innerHTML = translations[language].skillsHeading;
    contactHeadingElement.innerHTML = translations[language].contactHeading;
  }
  
  // Ascultător de evenimente pentru selectorul de limbă
  const languageSelector = document.getElementById('language-selector');
  languageSelector.addEventListener('change', (event) => {
    changeLanguage(event.target.value);
  });
  
  // Setează limba implicită (de exemplu, engleză)
  changeLanguage('en');
  

  document.getElementById('language-selector').addEventListener('change', function() {
    let selectedLanguage = this.value;
    
    // Selectează toate elementele care au atributul "data"
    let elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(element => {
        let translation = element.getAttribute('data-' + selectedLanguage); // Alege traducerea corespunzătoare
        element.innerText = translation; // Schimbă textul
    });
});



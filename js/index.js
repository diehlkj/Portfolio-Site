// Page Cover Waits Until All Content Is Loaded To Hide
window.onload = function hideLoad() {
    document.getElementById('loading').style.display = 'none';
}

// Navigation animations and such
        // Add soft scroll 'animation' to anchor location
const navButton = document.getElementById('nav-button');
const navLinks= document.querySelector('nav div');

navButton.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
    navLinks.classList.toggle('hide-nav');
});

// Project section functionality
const   oladButton = document.getElementById('olad'),
        oladInfo = document.getElementById('olad-info'),
        // olad = One Line A Day
        ajltButton = document.getElementById('ajlt'),
        ajltInfo = document.getElementById('ajlt-info');
        // ajlt = Applied JavaScript Lambda Times

oladButton.addEventListener('click', () => {
    oladInfo.classList.toggle('info-hide');
    oladInfo.classList.toggle('info-show');
});

ajltButton.addEventListener('click', () => {
    ajltInfo.classList.toggle('info-hide');
    ajltInfo.classList.toggle('info-show');
});

// This event listener thing is temp. Later, all project cards will be created from component function below and auto populate data from JSON file.


//Constructor for Projects --== WORK IN PROGRESS ==--

const projectsList = [
    {
        figure: '../img/one-line-a-day.png',
        title: 'ONE LINE A DAY',

    }
];

const newProject = (data) => {
    const article   = document.createElement('article'),
          figure  = document.createElement('figure'),
          aside  = document.createElement('aside'),
          titleContainer  = document.createElement('div'),
          title  = document.createElement('a'),
          tagContainer  = document.createElement('div'),
          tag  = document.createElement('span'),
          desc  = document.createElement('p'),
          buttonContainer  = document.createElement('div'),
          button  = document.createElement('a');

    return article;
};

// HTML, JS, CSS/LESS, React JS, Node.js, Python, C


// Develop function to create random word splash for background of landing section
// wordList = [array of words]
// reference iPad notes doc for psudo code function
// Make sure no words with the same font weight are next to each other through subtractive style selection process and RNG...
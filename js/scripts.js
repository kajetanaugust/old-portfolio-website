const experience = document.getElementById('experience');
const moreInfoDiv = document.getElementById('more-info-div');

const mobileMenuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');

const portfolioWrap = document.getElementById('portfolio-wrap');
const modalWindow = document.getElementById('modal-window');
const modalBackground = document.getElementById('modal-background');


const technologiesAdditionalInfo = {
  HTML5: `<p>HTML5 - "describes the basic structure and content of a web page."</p>`,
  CSS3: `<p>CSS3 - "forms the presentational layer of web pages."</p>`,
  JavaScript: `<p>JavaScript - "programming language that allows you to add interactivity to websites."</p>`,
  Sass: `<p>Sass - "CSS preprocessor which adds functionality souch as mixins or nesting"</p>`,
  jQuery: `<p>jQuery - "JavaScript library designed to simplify HTML DOM tree manipulations."</p>`,
  Bootstrap: `<p>Bootstrap - "CSS framework directed at responsive front-end web development."</p>`
};

const projectsInfo = {
  project1: `<h3>WebApp Dashboard</h3>
                                 <p class='modal-text'>The WebApp dashboard is built with mobile-first approach so it is responsive through all the resolutions.
                                 It includes Chartist.js plugin for displaying charts.
                                 It uses sessionStorage to save settings</p>
                                 <p class='technology-name'>HTML</p>
                                 <p class='technology-name'>CSS</p>
                                 <p class='technology-name'>JavaScript</p>
                                 <p class='technology-name'>Fetch API</p>
                                 `,

  project2: `<h3>Users Directory</h3>
                                 <p class='modal-text'>This is the employee directory, it uses fetch API to get 12 random users. Users can be filtered with search bar. The detailed informations are displayed in modal window.</p>

                                 <p class='technology-name'>HTML</p>
                                 <p class='technology-name'>CSS</p>
                                 <p class='technology-name'>JavaScript</p>
                                 <p class='technology-name'>Fetch API</p>
                                 `,

  project3: `<h3>Game Show App With OOP</h3>
                                 <p class='modal-text'>It's the browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase. It utilizes Object Oriented Programing Concept</p>

                                 <p class='technology-name'>HTML</p>
                                 <p class='technology-name'>CSS</p>
                                 <p class='technology-name'>JavaScript</p>
                                 `,

  project4: `<h3>Sign-Up Form with RegEx</h3>
                                 <p class='modal-text'>This is a contact form I have created to fit the provided mockup. It uses mobile first approach and media query for 768px and 1024px widths.
                                 It uses RegEx for fields validation and displays messages if validation is failed.</p>

                                 <p class='technology-name'>HTML</p>
                                 <p class='technology-name'>CSS</p>
                                 <p class='technology-name'>JavaScript</p>
                                 <p class='technology-name'>RegEx</p>
                                 `,


  project5: `<h3>Scss Web Style Guide</h3>
                                 <p class='modal-text'>Web style guide is a sass micro-framework created for quick prototyping.</p>

                                   <p class='technology-name'>HTML</p>
                                   <p class='technology-name'>Scss</p>
                                 `,

  project6: `<h3>Design Quotes Generator</h3>
                                 <p class='modal-text'>It's the random quote generator which displays quotes by designers and artists. It draws a random quote and a random background color when the page loads. The quote is changed every 10 seconds by setInterval method.</p>

                                   <p class='technology-name'>HTML</p>
                                   <p class='technology-name'>CSS</p>
                                   <p class='technology-name'>JavaScript</p>
                                 `
};

const projectsLinks = {
  project1: `<a href='https://github.com/KajetanAugust/WEB_APP_DASHBOARD' target='_blank'>
                                  <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/WEB_APP_DASHBOARD/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`,

  project2: `<a href='https://github.com/KajetanAugust/EMPLOYEE_DIRECTORY_WITH_FETCH_API' target='_blank'>
                                    <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/EMPLOYEE_DIRECTORY_WITH_FETCH_API/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`,

  project3: `<a href='https://github.com/KajetanAugust/OOP_GAME_SHOW_APP' target='_blank'>
                                    <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/OOP_GAME_SHOW_APP/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`,

  project4: `<a href='https://github.com/KajetanAugust/INTERACTIVE_FORM'' target='_blank'>
                                    <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/INTERACTIVE_FORM/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`,

  project5: `<a href='https://github.com/KajetanAugust/SCSS_WEB_STYLE_GUIDE' target='_blank'>
                                    <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/SCSS_WEB_STYLE_GUIDE/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`,

  project6: `<a href='https://github.com/KajetanAugust/A_RANDOM_QUOTE_GENERATOR' target='_blank'>
                                    <p class='git-button'>GitHub</p>
                                  </a>

                                  <a href='https://kajetanaugust.github.io/A_RANDOM_QUOTE_GENERATOR/' target='_blank'>
                                    <p class='www-button'>WWW</p>
                                  </a>`
};

function closingModal() {
  const closingModal = document.getElementById('modal-x');
  closingModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    modalWindow.classList.remove('visible');
    modalBackground.style.display = 'none';
    modalBackground.classList.remove('visible');
  });
}


experience.addEventListener('mouseover', (e) => {
  const hovered = ` ' ${e.target} ' `;

  if (hovered.includes('Image')) {
    const selection = e.target;
    const selectionAttr = selection.getAttribute('title');
    moreInfoDiv.innerHTML = technologiesAdditionalInfo[selectionAttr];
  } else {
    moreInfoDiv.innerHTML = '';
  }

});


mobileMenuButton.addEventListener('click', () => {
  if (mobileNav.style.display === 'flex') {
    mobileNav.style.display = 'none';
    mobileMenuButton.textContent = 'MENU';
  } else {
    mobileNav.style.display = 'flex';
    mobileMenuButton.textContent = 'CLOSE';
  }
});


portfolioWrap.addEventListener('click', (e) => {
  const target = e.target.getAttribute('class');
  const chosenProject = target.substr(0, 8);
  if (target.includes('mockup') ||target.includes('project')) {

    modalWindow.innerHTML = `
        <p id='modal-x'>x</p>
        <div id='basic-info'>
            <img class='${chosenProject} modal-mockup' src='images/${chosenProject}.svg' alt='mockup'>
            ${projectsLinks[chosenProject]}
        </div>
        <div id='modal-info'>
            ${projectsInfo[chosenProject]}
        </div>


        `;
    modalWindow.style.display = 'flex';
    modalBackground.style.display = 'initial';
    closingModal();
  }

});

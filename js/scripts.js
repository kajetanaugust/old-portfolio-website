
const technologyIcons = document.getElementsByClassName('technology-icon');
const experience = document.getElementById('experience');
const moreInfoDiv = document.getElementById('more-info-div');

const mobileMenuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');

const portfolioWrap = document.getElementById('portfolio-wrap');
const modalWindow = document.getElementById('modal-window');
const modalInfo = document.getElementById('modal-info');

const technologiesAdditionalInfo = {HTML5:`<p>HTML5 - "describes the basic structure and content of a web page."</p>`,
                                    CSS3:`<p>CSS3 - "forms the presentational layer of web pages."</p>`,
                                    JavaScript:`<p>JavaScript - "programming language that allows you to add interactivity to websites."</p>`,
                                    Sass:`<p>Sass - "CSS preprocessor which adds functionality souch as mixins or nesting"</p>`,
                                    jQuery:`<p>jQuery - "JavaScript library designed to simplify HTML DOM tree traversal and manipulation."</p>`,
                                    Bootstrap:`<p>Bootstrap - "open-source CSS framework directed at responsive, mobile-first front-end web development."</p>`
                                  };

const projectsInfo = { project1:`It's the fully functional web dashboard. The app is built with mobile-first approach so it is responsive through all the resolutions.
                                 It includes Chartist.js plugin for displaying charts and CSS TOGGLE SWITCH for altering the apperance of switches.
                                 It uses sessionStorage to save settings `,

                       project2:`<p>This is the employee directory, it uses fetch API to get 12 random users from https://randomuser.me. Users can be filtered with search bar. The detailed informations about users are displayed in modal window.</p>
                                 <p>Technologies:</p>
                                 <ul>
                                 <li>HTML</li>
                                 <li>CSS</li>
                                 <li>JavaScript</li>
                                 <li>Fetch API</li>
                                 </ul>`,

                       project3:`<p>It's the browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.</p>
                                 <p>Technologies:</p>
                                 <ul>
                                 <li>HTML</li>
                                 <li>CSS</li>
                                 <li>JavaScript</li>
                                 </ul>`,

                       project4:`<p>This is a contact form I have created to fit the provided mockup. It uses mobile first approach and changes it's apperance using media query for 768px and 1024px widths.</p>
                                 <p>Technologies:</p>
                                 <ul>
                                 <li>HTML</li>
                                 <li>CSS</li>
                                 </ul>`,


                       project5:`<p>Web style guide is a sass micro-framework created for quick prototyping.</p>
                                 <p>Technologies</p>
                                 <ul>
                                 <li>HTML</li>
                                 <li>Scss</li>
                                 </ul>`
                      };

experience.addEventListener('mouseover', (e) => {
  const hovered = ` ' ${e.target} ' `;

  if(hovered.includes('Image')){
    const selection = e.target;
    const selectionAttr = selection.getAttribute('title');
    moreInfoDiv.innerHTML = technologiesAdditionalInfo[selectionAttr];
  } else {
    moreInfoDiv.innerHTML = '';
  }

});


mobileMenuButton.addEventListener('click', () =>{
  if (mobileNav.style.display === 'flex'){
    mobileNav.style.display = 'none';
    mobileMenuButton.textContent = 'MENU'
  }else {
    mobileNav.style.display = 'flex';
    mobileMenuButton.textContent = 'CLOSE'
  }
});


portfolioWrap.addEventListener( 'click', (e) => {
    const target = e.target.getAttribute('class');
    const chosenProject = target.substr(0,8);
  if(target.includes('mockup')){

      modalInfo.innerHTML = projectsInfo[chosenProject];
      modalWindow.style.display = 'flex';
  }
});


const technologyIcons = document.getElementsByClassName('technology-icon');
const experience = document.getElementById('experience');
const moreInfoDiv = document.getElementById('more-info-div');

const technologiesAdditionalInfo = {HTML5:`<p>HTML5 - "describes the basic structure and content of a web page."</p>`,
                                    CSS3:`<p>CSS3 - "forms the presentational layer of web pages."</p>`,
                                    JavaScript:`<p>JavaScript - "programming language that allows you to add interactivity to websites."</p>`,
                                    Sass:`<p>Sass - "CSS preprocessor which adds functionality souch as mixins or nesting"</p>`,
                                    jQuery:`<p>jQuery - "JavaScript library designed to simplify HTML DOM tree traversal and manipulation."</p>`,
                                    Bootstrap:`<p>Bootstrap - "open-source CSS framework directed at responsive, mobile-first front-end web development."</p>`
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

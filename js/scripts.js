
const technologyIcons = document.getElementsByClassName('technology-icon');
const experience = document.getElementById('experience');

const technologiesAdditionalInfo = {HTML5:'HTML5 - "describes the basic structure and content of a web page."',
                                    CSS3:'CSS3 - "forms the presentational layer of web pages."',
                                    JavaScript:'"JavaScript - programming language that allows you to add interactivity to websites."',
                                    Sass:'Sass - "CSS preprocessor which adds functionality souch as mixins, nesting or inheritance"',
                                    jQuery:'jQuery - "JavaScript library designed to simplify HTML DOM tree traversal and manipulation."',
                                    Bootstrap:'Bootstrap - "free and open-source CSS framework directed at responsive, mobile-first front-end web development."'
                                  };

experience.addEventListener('mouseover', (e) => {
  const hovered = ` ' ${e.target} ' `;

  if(hovered.includes('Image')){
    const selection = e.target;
    const selectionAttr = selection.getAttribute('title');
    console.log(technologiesAdditionalInfo[selectionAttr]);
  }
});

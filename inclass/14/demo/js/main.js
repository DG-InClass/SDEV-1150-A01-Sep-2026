console.log('Lesson 14 main.js loaded');
import '@picocss/pico/css/pico.green.min.css';

const pageHeading = document.querySelector('h1');
const mainContent = document.querySelector('main');
const navLinks = document.querySelectorAll('nav a');

console.log(pageHeading);
console.log(mainContent);
console.log(navLinks);

// Convert the NodeList to an array when array methods are useful
// [...navLinks]  // use the spread operator
const navLinkLabels = [...navLinks].map((link) => {
    return link.textContent;
});

console.log(navLinkLabels);

// If something doesn't exist on the page, a .querySelector()
// will give a result of null
const missingPanel = document.querySelector('.announcement-panel');
console.log(missingPanel);

const languageList = mainContent.querySelector('ul');
const languageItems = languageList.querySelectorAll('li');

console.log(languageList);
console.log(languageItems);
// debugger // comment this out when not needed
const listParent = languageList.parentElement;
const firstLanguage = languageList.firstElementChild;
const lastLanguage = languageList.lastElementChild;

console.log(listParent);
console.log(firstLanguage);
console.log(lastLanguage);


const paragraphBeforeList = languageList.previousElementSibling;
const ruleAfterList = languageList.nextElementSibling;

console.log(paragraphBeforeList);
console.log(ruleAfterList);

// Modifying existing elements
pageHeading.textContent = 'DOM API Practice';
paragraphBeforeList.textContent = 'JavaScript can select, navigate, and modify the live DOM.';

languageList.style.borderLeft = '0.4rem solid var(--pico-primary)';
languageList.style.paddingLeft = '1.5rem';

const asideImage = document.querySelector('aside img');
if(asideImage) {
    // Notice that the conditional expression above relies on truthy/falsy values
    asideImage.setAttribute('width', '180');
    asideImage.alt = 'A person building a website';
    asideImage.src = './img/undraw_code-review_jdgp.svg';
}

// Create elements to add to our page
const statusMessage = document.createElement('p');
statusMessage.textContent = 'Created with document.createElement() and .textContent.';
mainContent.append(statusMessage);

// HOMEWORK: Continue working on the instructions from the section heading 
//           Create Text Nodes

import '@picocss/pico/css/pico.green.min.css'; // Add the stylesheet

console.log('Lesson 11 main.js loaded');

const courseCode = 'SDEV-1150';
const lessonNumber = 11;

console.log(courseCode);
console.log(`Lesson number: ${lessonNumber}`);

// Now we'll explore how JavaScript can be used to select/find parts of
// our page inside the DOM (Document Object Model).
const pageHeading = document.querySelector('h1');
console.log(pageHeading);
console.log(typeof pageHeading);
console.log(pageHeading.__proto__.constructor.name);

const brandName = document.querySelector('#brand-name');
console.log(brandName);

const firstContainer = document.querySelector('.container');
console.log(firstContainer);

const missingElement = document.querySelector('.missing-card');
console.log(missingElement);

// Search inside a smaller part of the page
const mainContent = document.querySelector('main'); // <main></main>
console.log(mainContent);

const languageList = mainContent.querySelector('ul');
console.log(languageList);

// If I search for a `<ul>` starting at the document, I'll get something else
const firstUnorderedList = document.querySelector('ul');
console.log(firstUnorderedList);

// Once we have a reference (variable) for some part of our page,
// we can then interact with it to modify our web page.
pageHeading.textContent = 'JavaScript Can Update the DOM';

const brandLabel = brandName.querySelector('strong');
brandLabel.textContent = 'Dynamic DOM';

const threeTrustedLanguages = `
    <li><strong>HTML</strong> gives the page <u>structure</u>.</li>
    <li><strong>CSS</strong> controls how the page <u>looks</u>.</li>
    <li><strong>JavaScript</strong> can <u>update</u> the live DOM.</li>
`;

languageList.innerHTML = threeTrustedLanguages;

const asideImage = document.querySelector('aside img');
asideImage.setAttribute('width', '180');
asideImage.setAttribute('alt', 'A person building a website');
asideImage.src = './img/undraw_code-review_jdgp.svg';

languageList.style.borderLeft = '0.4rem solid var(--pico-primary)';
languageList.style.paddingLeft = '1rem';

// Normally, I would put this import statement near the top of this file
import { fillCredits } from './credits';
fillCredits(2026, 'Stew Dent'); // Use YOUR name

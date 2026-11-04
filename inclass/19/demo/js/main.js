import { fetchJsonData, postData } from './utils.js';

const loadButton = document.querySelector('#load-bodies');
const addForm = document.querySelector('#add-body');
const bodyList = document.querySelector('#body-list');
const statusMessage = document.querySelector('#status-message');

const endpoint = 'http://localhost:3000/bodies';

function showStatus(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.dataset.status = type;
}

function renderBodies(bodies) {
  // TODO: Clear the current list.
  console.log(bodies);
  bodyList.replaceChildren(); // replace all the child elements with nothing
  // TODO: Create and append one <li> for each body.
  bodies.forEach((body) => {
    // Instead of using the bodyList.innerHTML, we will build the DOM fragment
    // the "proper" way using the document.createElement() function
    const item = document.createElement('li'); // <li></li>
    const image = document.createElement('img'); // <img />
    image.src = `http://localhost:3000/${body.image}`;
    image.alt = body.name;
    const span = document.createElement('span'); // <span></span>
    span.textContent = `${body.name} - ${body.category} - ${body.orbitalPeriod}`;

    // Assemble all these document fragments and add them to our bodyList
    item.append(image, span);
    bodyList.append(item);
  });
}

function loadHandler() {
  // TODO: Show a loading message.
  showStatus('Loading the celestial bodies');
  // TODO: Call fetchJsonData(endpoint).
  fetchJsonData(endpoint).then(renderBodies).catch(err => {
    showStatus(err, 'error');
  });
}

async function submitHandler(event) {
  event.preventDefault();

  // TODO: Collect form values with FormData.
  const theForm = event.target; // <form>
  const formData = new FormData(theForm); // 
  // name, category, description, orbitalPeriod
  // The property names for my payload object should match what my
  // JSON server expects for the POST data
  const payload = {
    name: formData.get('name'),
    category: formData.get('category'),
    description: formData.get('description'),
    orbitalPeriod: formData.get('orbitalPeriod'),
    image: 'saturn.jpg', // until we learn how to upload images
  }
  // TODO: POST the body, reset the form, and reload the list.
  postData(endpoint, payload).then((data) => showStatus('Data sent')).catch((err) => showStatus(err, 'error'));
  // TODO: reset the form
  loadHandler();
  // TODO: Show a user-facing error on failure.
}

loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);

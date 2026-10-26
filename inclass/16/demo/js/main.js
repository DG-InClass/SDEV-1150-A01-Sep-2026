const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  const { fullName, email, bio } = formEl.elements; // <input type="text" or similar>
  const plan = formEl.elements.plan.value; // This happens to be a collection of radio inputs
  //                          \___/   <input name="plan" />

  // TODO: Collect the checked topic checkboxes into an array.
  //  <input type="checkbox" ... /> are not going to have a .value on the collection
  console.clear(); // remove later
  const topics = formEl.elements.topics; // This is the collection of inputs
  console.log(topics);
  // topics is a RadioNodeList of checkbox inputs.
  // Because arrays have extra functions that make working with data easier,
  // we'll generate a new array from the RadioNodeList
  const topicsArray = Array.from(topics);
  // One of the useful array functions is .forEach()
  topicsArray.forEach((el) => {
    console.log(el, el.checked, el.value);
  });
  // Another useful array function is .filter()
  // The .filter() expects a callback function that returns true | false
  const selectedTopics = topicsArray.filter((el) => el.checked);

  const selectedTopicValues = selectedTopics.map((el) => el.value); // Just get each input's value

  // TODO: Return an object with the trimmed form values.
  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics: selectedTopicValues,
    bio: bio.value.trim(),
    submittedAt: new Date().toLocaleString(),
  };
}

function formatSubmission(data) {
  return `Submission received:
    - Name: ${ data.fullName || '(none)'}
    - Email: ${ data.email || '(none)' }
    - Skill: ${ data.plan || '(none)' }
    - Strengths: ${ data.topics.length ? data.topics.join(', ') : '(none)' }
    - Bio: ${ data.bio || '(none)' }
    - Time: ${ data.submittedAt }
  `;
}

function validateFullName(inputElement) {
  const nameParts = inputElement.value.trim().split(/\s+/).filter(Boolean);
  //                \__________/\____/\_____/\___________/\______________/
  // inputElement <input />  |     |     |        |            |
  // .value is the "data" (string) |     |        |            |
  // .trim() is a method of strings      |        |            |
  // .split() turns a string into an array of     |            |   (/\s+/) - any whitespace
  //                                   strings                 |
  // .filter() returns items that match the predicate          |  Boolean constructor
  // 
  // nameParts will be an array of strings (with no "blank" entries)

  if (nameParts.length < 2) {
    inputElement.setCustomValidity('Full Name must contain at least two parts (e.g.: first last)');
  } else {
    inputElement.setCustomValidity(''); // Clear the validation message
  }
}

function validateEmail(input) {
  if (!input.value.includes('@')) {
    input.setCustomValidity('Email must contain an "@" symbol.');
  } else {
    input.setCustomValidity('');
  }
}

function validateBio(textArea) {
  if (textArea.value.trim().length < 40) {
    textArea.setCustomValidity('Bio must be at least 40 characters long.');
  } else {
    textArea.setCustomValidity('');
  }
}


function validateField(field) {
  // TODO: Use setCustomValidity() for fullName, email, and bio.

}

function validateForm() {
  // TODO: Validate each field that has custom validation rules.
  validateFullName(form.elements.fullName);
  validateEmail(form.elements.email);
  validateBio(form.elements.bio);
}

function clearCustomValidity() {
  // TODO: Clear custom validity messages when the form resets.
}

form.addEventListener('input', (event) => {
  // TODO: Validate the field that triggered the input event.
  event.target.setCustomValidity('');
  // TODO: Use reportValidity() to show dynamic browser feedback.
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // 📍 This stops the browser from submitting the form to the webserver. That is important because we do NOT have a "backend" to this website that handles the form's content.
  console.log(event.target); // This is the HTML <form> element
  console.log(event.target.elements); // This is all of the input controls on the form

  // TODO: Validate the form before processing the submission.
  validateForm();

  // TODO: If the form is valid, serialize it and echo the result.
  if (!form.checkValidity()) {
    // then there are errors on the form
    form.reportValidity();
    return;
  }

  const data = serializeForm(form); // The term "serialization" is about making the data as something that can be "transported" accross the network
  result.textContent = formatSubmission(data);
});

form.addEventListener('reset', () => {
  // TODO: Clear the output area and custom validation messages.
});

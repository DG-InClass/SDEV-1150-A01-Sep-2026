export function setupClickEvents() {
  // TODO: Select #btn-toggle, #btn-message, and #message.
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.getElementById('btn-message');
  const message = document.querySelector('#message');

  // make sure I found stuff...
  if (!btnToggle || !btnMessage || !message) {
    console.error('🤔 Hmm. Cannot find the elements...');
    return;
  }
  
  // TODO: Add click listeners that update the page.
  btnToggle.addEventListener('click', function() {
    document.body.classList.toggle('highlight');

    const isHighlighted = document.body.classList.contains('highlight');
    btnToggle.textContent = isHighlighted ? 'Highlight is ON' : 'Highlight is OFF';
  });

  btnMessage.addEventListener('click', function() {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
  });
}

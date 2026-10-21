export function setupKeyboardEvents() {
  // TODO: Select #key-output.
  const keyOutput = document.querySelector('#key-output');
  // 🤔 Can you find which element in the HTML has the id above??

  if (!keyOutput) {
    return; // Can't find it, so we can't add an event listener (nothing to do)
  }

  // TODO: Add a keydown listener on document.
  // Note that we are adding an event listener for the WHOLE document.
  const keyDownHandler = function(event) {
    keyOutput.textContent = `Last key: ${event.key} (code: ${event.code})`;
  }
  
  document.addEventListener('keydown', keyDownHandler);
}

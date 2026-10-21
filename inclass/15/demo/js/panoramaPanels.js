export function setupPanoramaPanels() {
  // TODO: Select #panorama, #panorama-status, and #panorama-credit.
  const panorama = document.getElementById('panorama');
  const panoramaStatus = document.getElementById('panorama-status');
  const panoramaCredit = document.querySelector('#panorama-credit');

  if(!panorama || !panoramaStatus ||!panoramaCredit) {
    return; // not on the right page for this setup
  }

  // TODO: Add mouseover and mouseout listeners to the panorama container.
  panorama.addEventListener('mouseover', function (event){
    /** @type {HTMLElement} */
    const target = event.target;
    const panel = target.closest('.panorama-panel');

    if (!panel || !panorama.contains(panel)) {
      return; // not hovering over an actual image in the panels
    }

    panorama.classList.add('is-joined'); // Add a CSS class to the HTMLElement
    panoramaStatus.textContent = 'Panorama: panels joined';
    panoramaCredit.hidden = false;
  });

  panorama.addEventListener('mouseout', function (event){
    if (panorama.contains(event.relatedTarget)) {
      return;
    }

    panorama.classList.remove('is-joined');
    panoramaStatus.textContent = 'Panorama: separated panels';
    panoramaCredit.hidden = true;
  });
}

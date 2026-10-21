export function setupHoverCard() {
  console.log('Hover card setup starting....');
  // TODO: Select #hover-card and #hover-status.
  // <div id="hover-card" class="card">
  const hoverCard = document.querySelector('#hover-card');
  // <p id="hover-status" class="muted">Status: none</p>
  const hoverStatus = document.querySelector('#hover-status');
  
  // TODO: Add mouseover and mouseout listeners.
  if (!hoverCard || !hoverStatus) {
    // We don't have these elements on the page, so we must not
    // be on our default page (index.html)
    return; // nothing to "wire up"
  }

  hoverCard.addEventListener('mouseover', function (evt) {
    console.log(evt); // This is the Event Object
    hoverStatus.textContent = 'Status: hovering';
    hoverStatus.textContent += ` ${evt.screenX}-${evt.screenY}`;
  });
  hoverCard.addEventListener('mouseout', function () {
    hoverStatus.textContent = 'Status: Not hovering';
  });
}

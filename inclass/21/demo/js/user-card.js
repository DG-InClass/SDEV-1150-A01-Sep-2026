const template = document.createElement('template');

template.innerHTML = `
  <style>
    .card {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 0.85rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid #9aa8ba;
      border-radius: 8px;
      background: #ffffff;
      color: #172033;
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }

    .name {
      display: block;
      font-weight: 700;
    }

    .description {
      display: block;
      margin-top: 0.25rem;
      color: #5f6f84;
      line-height: 1.4;
    }
  </style>

  <article class="card">
    <img src="" alt="">
    <div>
      <slot name="name" class="name">Unknown user</slot>
      <slot name="description" class="description">No description provided.</slot>
    </div>
  </article>
`;

// TODO: Create a UserCard class that extends HTMLElement.
class UserCard extends HTMLElement {
  constructor() {
    super(); // Call the constructor of the HTMLElement class
    // TODO: Attach an open shadow root in the constructor.
    const shadow = this.attachShadow({ mode: 'open' });
    // TODO: Clone the template content and append it to the shadow root.
    const content = template.content.cloneNode(true);
    // TODO: Read the avatar attribute and use it as the image src.
    const image = content.querySelector('img');
    const name = this.querySelector('[slot="name"]')?.textContent ?? 'user';
    //                                              \/            \/
    //  If this is not null, then use .textContent   |             |
    //    If the overall result is null, then use the 'user' value |
    // <span slot="name">   <--- we'll use this text for the alt attribute of our image
    image.src = this.getAttribute('avatar') || 'assets/avatars/avatar.png';
    image.alt= `Profile photo for ${name}`;

    shadow.append(content);
  }
}
// TODO: Register the custom element with customElements.define('user-card', UserCard).
customElements.define('user-card', UserCard);

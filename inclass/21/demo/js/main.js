import './user-card.js';
import { users } from './users.js';

const programmaticCards = document.querySelector('#programmatic-cards');

function createSlottedText(slotName, text) {
  const span = document.createElement('span');
  span.slot = slotName;
  span.textContent = text;
  return span;
}

function createUserCard(user) {
  // TODO: Create a <user-card> element with document.createElement().
  const card = document.createElement('user-card');
  // TODO: Create slotted spans for the name and description.
  card.append(
    createSlottedText('name', user.name),
    createSlottedText('description', user.about)
  )
  // TODO: Set the avatar attribute before appending the element.
  card.setAttribute('avatar', user.avatar);
  // TODO: Append the finished card to programmaticCards.
  programmaticCards.append(card);
}

users.slice(2).forEach(createUserCard);

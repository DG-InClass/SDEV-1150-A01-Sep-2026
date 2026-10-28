const container = document.getElementById('players');

const form = document.querySelector('form');
// TODO: Add Event Listener for the 'submit' event of the form
form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // to stop the default browser behaviour

    // Get the names that the user entered into the input
    // <input name="playerNames" ... />
    const theForm = evt.target; // the target is the <form>
    const allTheFormControls = theForm.elements;
    const inputNames = allTheFormControls.playerNames;
    // const inputNames = evt.target.elements.playerNames
    console.log(inputNames); // <input ... />
    console.log('The user entered: ', inputNames.value);

    const names = inputNames.value; // names holds a string
    const allNames = names.split(','); // allNames holds an array of string
    console.log(allNames);

    if (allNames.length > 0) { // TODO: 🐞 slight logic problem
        // Loop through them to create "placeholders" on the page
        allNames.forEach((player, index) => {
            console.log(index + 1, ' ', player);
            container.innerHTML += `<div id="player-${index}">
                <h2>${player}</h2>
            </div>`;
        });
    } else {
        console.warn('The user did not enter info');
    }

    container.classList.remove('hidden');
});

const dealButton = document.getElementById('deal-me-in');
// TODO: Add Event Listener to deal cards on the button click
dealButton.addEventListener('click', function(evt) {
    console.clear(); // so that the other console output is cleared
    const players = container.querySelectorAll('div');
    players.forEach(playerHand => {
        // pull a card from the top of the deck
        const card = shuffledCards.pop(); // remove from the top
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        playerHand.innerHTML += img;
        console.log(playerHand, card);
    });
});

const shuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]

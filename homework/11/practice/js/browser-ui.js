export function fillCredits(year, author) {
    const yearSpan = document.querySelector('#copyright-year');
    const authorSpan = document.querySelector('#copyright-author');

    yearSpan.textContent = year;
    authorSpan.innerText = author;
}

export function displayHeading(text, marker = "-") {
    let heading = document.querySelector('h1');
    heading.textContent = text;
    heading.className = ''; // Clear all CSS classes
    switch(marker) {
        case '-':
            heading.classList.add('underline');
            break;
        case '=':
            heading.classList.add('thick');
            break;
        case '~':
            heading.classList.add('wavy');
            break;
        default:
            break; // do nothing
    }
}

export function print(selector, text){
    if(selector && text) {
        let element = document.getElementById(selector);
        element.textContent = text;
    }
}

export function table(marks) {
    let table = document.querySelector('table');
    table.innerHTML = `<tr><th>Bucket</th><th>Earned</th><th>Possible</th><th>Percent</th></tr>`;

    // We haven't taught looping yet, but you can see your first example right here.
    for(let index = 0; index < marks.length; index++) {
        table.innerHTML += buildRow(index + 1, marks[index]);
    }
}

function buildRow(number, data) {
    return `
    <tr>
        <td>${number}</td>
        <td>${data.earned}</td>
        <td>${data.possible}</td>
        <td>${data.percent} %</td>
    </tr>`
}

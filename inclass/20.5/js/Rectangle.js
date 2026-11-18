/* Notes:
    - Members of a class can be either static or instance
    - Instance members belong to the individual objects created with the new keyword.
    - Static members are "shared" among all the objects.
*/

const Rectangle = class {
    // All the "members" of a class are defined inside the
    // curly braces

    // #region Properties/Fields
    // Properties/fields are "variables" that are "members of"
    // or "belong to" a class/object
    height; // Declaring the variable without a let or const

    // When we use the static keyword for either a field (such as
    // #count) or a getter/setter or a function, then that means
    // the static item is being "shared" among all the instances
    // of the class.
    static #count = 0; // Static private property
    //     | The # symbol before a name makes that member private

    // Static public getter function/property
    static get count() {
        return Rectangle.#count;
    }
    // #endregion

    // #region Constructor
    // A class can only have one constructor function.
    // The name of that function is always `constructor`
    constructor(height, width) {
        // The body of the constructor
        // The job of the constructor is to make sure that all
        // the properties have "meaningful" values.
        this.height = height; // using a declared/explicit property
        this.width = width; // dynamically creating a width property
        Rectangle.#count++; // Keeping track of how many rectangles have been created
    }
    // #endregion

    // #region Methods
    report() {
        let message = `There are ${Rectangle.#count} rectangles in total. This rectanglehas a height of ${this.height} and a width of ${this.width}.`;
        console.log(message);
    }

    /**
     * Render this rectangle into the DOM.
     * @param {HTMLElement} container - The DOM element to hold this shape
     * @returns {HTMLDivElement} - This rectangle as a `<div>`
     */
    render(container) {
        // Create a `<div>` with certain styles
        // - w-[{width}px]
        // - h-[{height}px]
        const divEl = document.createElement('div');
        divEl.classList.add('border', 'border-green-500', 'border-5');
        // NOTE: (re: Tailwind) Because the width/height styling is
        //       being dynamically calculated, we have to apply them
        //       to the divEl via the styles properties rather than
        //       adding CSS class names.
        divEl.style.width = `${this.width}px`;
        divEl.style.height = `${this.height}px`;

        // Append the div to the container
        container.appendChild(divEl);

        // return a reference
        return divEl;
    }
    // #endregion
} // end of the Rectangle class

export { Rectangle }

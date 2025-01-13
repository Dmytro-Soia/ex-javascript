/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  /** @type {HTMLElement} */
  const redCSS = document.querySelector('#change-my-color');
  redCSS.style.color = "red"
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  const newParagraph = document.querySelector("#add-your-elements-in-this-element")
  const firstp = document.createElement("p")
  firstp.innerText = "Bonjour"
  const secondp = document.createElement("p")
  secondp.innerText = "Toto"
  newParagraph.appendChild(firstp)
  newParagraph.appendChild(secondp)
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  const main = document.querySelector("#add-list-here")
  const el = {}
  const ul = document.createElement("ul")
  main.appendChild(ul)
  listElements.forEach((element) => {
    el[element.name] = element.color
  })
  for (const [key, value] of Object.entries(el)) {
    const ii = document.createElement("li")
    ii.style.backgroundColor = `${value}`
    ii.innerText = `${key}`
    ul.appendChild(ii)
  }
}
/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
  let  paragraph = document.querySelector("#mouse-coordinates")
  document.addEventListener("mousemove", movement)
    function movement(e) {
      paragraph.innerText = `
    x: ${e.screenX}, y: ${e.screenY}`;
}
  }
const randomRGB = () => {
  const o = Math.round
  const r = Math.random
  const s = 255
  return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = randomRGB()

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
  const input = document.querySelector("#focus-me")
  const papadiv = input.parentElement
  const perviy = papadiv.children[1]
  const vtoroy = papadiv.lastElementChild
  input.addEventListener("mouseover", (event) => {
    perviy.innerText = 'Yes, you hover me !'
    vtoroy.innerText = 'Yes, you hover me !'
  })
  input.addEventListener("mouseout", (event) => {
    perviy.innerText = 'Focus me:'
    vtoroy.innerText = 'A second label ! just for fun'
  })

  input.addEventListener("focus", (event) => {
    event.target.style.borderColor = randomRGB()
  })
  input.addEventListener("blur", (event) => {
    event.target.style.borderColor = enteringColor
  })
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
  const input = document.querySelector("#focus-me")
  input.addEventListener("input", (e) => {
    input.labels.forEach(label => {label.style.color = enteringColor});
    })
}
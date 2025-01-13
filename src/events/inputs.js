

/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  const input = document.querySelector('#write-some-text')
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const inputValue = document.querySelector('#write-some-text').value
      if (inputValue.length > 0) {
        alert(inputValue)
      }
    }
  });
}
/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */

export function addElementsInListOnEnterKey() {

  const input = document.querySelector('#list-input')
  const ul = document.querySelector('#list')

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      main()
    }
  });
  input.addEventListener('blur', main);
  function main() {
    const inputValue = document.querySelector('#list-input').value
    if (inputValue.length > 0) {
      let li = document.createElement('li')
      li.innerText = inputValue
      ul.appendChild(li)
      document.querySelector('#list-input').value = ''
    }
  }
}


/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  const ul = document.querySelector('#list')
  ul.addEventListener('click', (event) => {
    event.target.remove()
  });
}
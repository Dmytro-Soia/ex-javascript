/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  const saved = []
  for (let str of array) {
    const words = str.split(" ");

    for (let word of words) {
      if (word === "") {
        word.trim()
      } else {
        saved.push(word)
      }
    }
  }
  const removed = array.splice(0)
  array = array.concat(saved)
  return array
}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  return array1 = array1.concat(array2)
}

/**
 * @param {array} array an array of arbitrary elements
 * @param {number} index where you need to replace the element in the array
 * @param {...*} newElements
 * @return {array<*>} A new array, sorted, **the original array should not be modified**
 */
export function replaceElementsInArrayAtAGivenPlace(
  array,
  index,
  ...newElements
) {
  const arrayCopy = [...array]
  const deleteCount = newElements.length  
  arrayCopy.splice(index, deleteCount, ...newElements)
  console.log(arrayCopy)
  return arrayCopy
} 
//console.log(array.toSpliced(index,0, newElements)) 

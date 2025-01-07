/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof haystack === 'string' && typeof needle === 'string' && typeof newWord === 'string') {
    let regex = new RegExp(needle, "gi")
    const replacedText = haystack.replaceAll(regex, (match) => {
      console.log("------")
      console.log(match)
      console.log(newWord)
      let finword = ""
      for (let i = 0; (i < match.length && i < newWord.length); i++) {

        if (match[i] === match[i].toUpperCase()) {
          // Put a u ppercasein the new world at the same position
          finword += newWord[i].toUpperCase()
        } else {
          // Put a lowercase
          finword += newWord[i].toLowerCase()
        }
      }
      // Check where the caps are
      // In the new word, place caps at the same place

      // Cut the new word to the legth of the old oned
      console.log(finword)
      return finword
    })
    console.log("----", replacedText)
    return replacedText
  } else {
    throw new Error("Passed value is not a string")
  }
}



//for (let i = 0; i < haystack.length; i++) {
//  console.log(words[i])
//  if (words[i] === needle) {
//    words.replaceAll(needle, newWord)
//  }
//} 
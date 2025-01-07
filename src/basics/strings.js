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
          finword += newWord[i].toUpperCase()
        } else {
          finword += newWord[i].toLowerCase()
        }
      }
      console.log(finword)
      return finword
    })
    console.log("----", replacedText)
    return replacedText
  } else {
    throw new Error("Passed value is not a string")
  }
}
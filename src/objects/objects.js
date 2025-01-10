/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

import { log } from "console"

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  let person = {
    first_name: "Toto",
    last_name: "Tutu"
  }
  return person
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  return object.first_name + " " + object.last_name
}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  const upperKeys = Object.keys(object)
  const lowerValues = Object.values(object)

  let toUpper = function (x) {
    return x.toUpperCase();
  }

  let toLower = function (x) {
    return x.toLowerCase();
  }

  const lowerValues2 = lowerValues.map(toLower)

  const upperKeys2 = upperKeys.map(toUpper)

  const newObject = {
    keys: upperKeys2,
    values: lowerValues2
  }
  
  return newObject
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {Array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  let min = Math.min(...users.map(item => item.age));
  let max = Math.max(...users.map(item => item.age));

  let nameMin = ""
  let nameMax = ""
  for (const object of users) {
    if (object.age === min) {
      nameMin = object.name
      break
    }
  for (var i = users.length; i >= 0; i--) {
    for ( const object of users) {
      if (object.age === max) {
        nameMax = object.name
      }
  }
}
    if (object.age === max) {
      nameMax = object.name
  }
}
  const MinMax = {
    younger: nameMin,
    older: nameMax
  }
  console.log(MinMax)
  return MinMax
}

/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  let objString = JSON.parse(string)
  return objString
}

/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  let stringObj = JSON.stringify(object)
  return stringObj
}
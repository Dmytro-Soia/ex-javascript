/**
 * JavaScript is different from Rust or Java, the typing system is fully dynamic.
 * This mean 2 important things :
 * - You cannon precise variables types, function parameters types and return
 *   types, so there are no guaranties that the type you expect would be provided
 * - JavaScript engine will try to match types dynamically, so you can do things like
 *   comparing numbers and string, but internally JS always do type conversion, this
 *   can lead to unexpected behaviors
 */

import { error } from "console"
import { expect } from "vitest"

/**
 * @param {number} n
 * @return {boolean} true if n is bigger than 2
 */
export function isBiggerThan2(n) {
  if(isNaN(n)){
    throw new Error("Passed value is not a number");
  }
  if (n > 2)
    return true
  else if (0 < n < 2)
   return false
  console.log("test")
}

/**
 * @param {number} n
 * @param {number} m
 * @return {boolean} true if n is a multiple of m
 */
export function isMult(n, m) {
  // Type verifications
  if(isNaN(n) || isNaN(m)){
    throw new Error("Passed value is not a number");
  }
  const x = n % m
  if (x === 0)
    return true
  else if (x !== 0)
   return false
}
/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (isNaN(diameter)) {
    throw new Error("Passed value is not a number");
  } else if (diameter < 0) {
    throw new Error("Passed value is not a negative");
  } else {
    return 4 / 3 * Math.PI * ((diameter / 2) ** 3)
  }
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (isNaN(n)) {
    throw new Error("Passed value is not a number");
  } else {
    return Math.round(n * 10) / 10
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  if (grades instanceof Array) {
    for (let index = 0; index < grades.length; index++) {
      if (typeof grades[index]!== 'number' || isNaN(grades[index])) {
        throw new Error("Not a number")
      }
    }
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
    }
    return sum / grades.length
  } else {
    throw new Error("Passed value is not a number");
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  if (grades instanceof Array) {
    for (let index = 0; index < grades.length; index++) {
      if (typeof grades[index]!== 'number' || isNaN(grades[index])) {
        throw new Error("Not a number")
      }
    }
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
    }
    return Math.round((sum / grades.length) *10) / 10
  } else {
    throw new Error("Passed value is not a number");
  }
}

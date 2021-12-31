/**
 * filter
 */

function filterIterative(predicateFn, array) {
  const result = []
  const len = array.length
  for (let i = 0; i < len; i++) {
    if (predicateFn(array[i])) result.push(array[i])
  }
  return result
}

function filterRecursive(predicateFn, array) {
  if (array.length === 0) return []

  return predicateFn(array[0])
    ? [array[0]].concat(filterRecursive(predicateFn, array.slice(1)))
    : filterRecursive(predicateFn, array.slice(1))
}

// test (greater than 5)
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testFn = n => n > 5

const resultIterative = filterIterative(testFn, testArr)
const resultRecursive = filterRecursive(testFn, testArr)
console.log({ resultIterative, resultRecursive })

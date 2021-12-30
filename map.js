/**
 * map
 */

function mapIterative(fn, arr) {
  var result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]))
  }

  return result
}

function mapRecursive(fn, arr) {
  if (arr.length === 0) return []

  return [fn(arr[0])].concat(mapRecursive(fn, arr.slice(1)))
}

// test
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testFn = n => n * n

const resultIterative = mapIterative(testFn, testArr)
const resultRecursive = mapRecursive(testFn, testArr)
console.log({ resultIterative, resultRecursive })

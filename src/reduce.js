/**
 * reduce
 */

function reduceIterative(reduceFn, initialValue, array) {
  let acc = initialValue
  const len = array.length
  for (let i = 0; i < len; i++) {
    acc = reduceFn(acc, array[i])
  }
  return acc
}

function reduceRecursive(reduceFn, initialValue, array) {
  if (array.length === 0) return initialValue

  const newInitialValue = reduceFn(initialValue, array[0])
  return reduceRecursive(reduceFn, newInitialValue, array.slice(1))
}

// test (sum)
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testFn = (acc, n) => acc + n

const resultIterative = reduceIterative(testFn, 0, testArr)
const resultRecursive = reduceRecursive(testFn, 0, testArr)
console.log({ resultIterative, resultRecursive })

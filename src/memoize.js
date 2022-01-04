/**
 * memoize
 */

function memoize(fn) {
  const cache = new Map()
  function memoizedFn(...args) {
    const key = JSON.stringify(args)
    if (!cache.has(key)) {
      cache.set(key, fn(...args))
    }
    return cache.get(key)
  }
  memoizedFn.cache = cache

  return memoizedFn
}

// test
const add = memoize((a, b) => {
  console.log('add called')
  return a + b
})

console.log(add(1, 2))
console.log(add(2, 3))
console.log(add(1, 2)) // should not call add again
console.log(add.cache.entries())

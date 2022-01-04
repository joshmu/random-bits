/**
 * memoize function
 */

function memoize(fn) {
  const cache = {}

  const memoized = (...args) => {
    const key = JSON.stringify(args)
    if (cache[key]) {
      console.log('using cache...', cache[key])
      return cache[key]
    }
    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }

  memoized.cache = cache

  return memoized
}

function add(a, b) {
  console.log('calculating...', a + b)
  return a + b
}

const memoizedAdd = memoize(add)

memoizedAdd(1, 2)
memoizedAdd(2, 3)
memoizedAdd(1, 2)

console.log(memoizedAdd.cache)

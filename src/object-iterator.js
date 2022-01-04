/**
 * object iterator
 * typically we shouldn't use 'for of' to iterate over an object
 * arrays have 'iterator' function built-in, however we can apply this manually to give the same functionality to objects
 */

const x = {
  a: 1,
  b: 2,
  c: 3,
}

try {
  for (let val of x) {
    console.log({ val })
  }
} catch (e) {
  // TypeError: x is not iterable
  console.log(e.toString())
}

x[Symbol.iterator] = function* () {
  for (let key in this) {
    yield this[key]
  }
}

for (let val of x) {
  console.log({ val })
}

// define iterator without using generator function
const y = {
  a: 1,
  b: 2,
}
Object.defineProperty(y, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    const o = this
    let idx = 0
    const ks = Object.keys(o)
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        }
      },
    }
  },
})

// iterate y object manually
const it = y[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let val of y) {
  console.log({ val })
}

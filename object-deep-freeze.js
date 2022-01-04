/**
 * deep freeze an object
 */

function deepFreeze(obj) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(obj)
  // Freeze properties before freezing self
  propNames.forEach(name => {
    const propValue = obj[name]
    if (typeof propValue === 'object' && propValue !== null) {
      deepFreeze(propValue)
    }
  })
  return Object.freeze(obj)
}

// test
const x = {
  a: 1,
}
const y = {
  hello: 'world',
  x,
}

const frozenObj = deepFreeze(y)

console.log({ frozenObj })
try {
  frozenObj.test = 'test'
} catch (e) {
  // TypeError: Cannot add property test, object is not extensible
  console.error(e.toString())
}
try {
  frozenObj.x.b = 2
} catch (e) {
  // TypeError: Cannot add property test, object is not extensible
  console.error(e.toString())
}

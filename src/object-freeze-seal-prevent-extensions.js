/**
 * object freeze, seal & prevent extensions
 */

// FREEZE OBJECT
// Object.freeze() simply converts an object passed as the argument into a frozen state.
// An object called by this method can not have any further changes on it.
const x = {
  a: 1,
  b: 2,
}
Object.freeze(x)
try {
  x.a = 2
} catch (e) {
  // TypeError: Cannot assign to read only property 'a' of object '#<Object>'
  console.log(e.toString())
}

// SEAL OBJECT
// Object.seal() simply converts an object passed as the argument into a sealed state.
// An object called by this method can not have any new properties being added.
// But it can change existing property values as long as writable metadata is true.
const y = {
  a: 1,
  b: 2,
}
Object.seal(y)
y.a = 2
console.log(y.a) // 2

try {
  y.c = 3
} catch (e) {
  // TypeError: Cannot add property c, object is not extensible
  console.log(e.toString())
}

try {
  delete y.b
} catch (e) {
  // TypeError: Cannot delete property 'b' of #<Object>
  console.log(e.toString())
}

// PREVENT EXTENSION
// Object.preventExtensions() simply converts an object passed as the argument into a non-extensible state.
// An object called by this method can not have any new properties being added.
// This method inherits functionality from its superset object.seal.
// Hence, it can change existing property values as long as writable metadata is true.
// * In contrast to sealed objects, non-extensible objects can be deleted or reconfigured.
const z = {
  a: 1,
  b: 2,
}
Object.preventExtensions(z)

z.a = 2
console.log(z.a) // 2

try {
  y.c = 3
} catch (e) {
  // TypeError: Cannot add property c, object is not extensible
  console.log(e.toString())
}

delete z.b
console.log(z)

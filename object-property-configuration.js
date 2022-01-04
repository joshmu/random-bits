/**
 * object property configuration
 */

const x = {
  a: 1,
  b: 2,
  c: 3,
}

// 1. x.a is no longer enumerable
Object.defineProperty(x, 'a', {
  // configurable?: boolean;
  // enumerable?: boolean;
  enumerable: false,
  // value?: any;
  // writable?: boolean;
  // get?(): any;
  // set?(v: any): void;
})
console.log('1 >>>', Object.entries(x))

// 2. x.a is now enumerable and has value 10
Object.defineProperty(x, 'a', {
  enumerable: true,
  value: 10,
})
console.log('2 >>>', Object.entries(x))

// 3. x.a will not be able to be overridden
Object.defineProperty(x, 'a', {
  writable: false,
})
try {
  x.a = 999 // TypeError: cannot reassign to read only property
  console.log('3 >>>', x.a)
} catch (e) {
  console.error('3 >>>', e.toString())
}

// 4. x.a will not be able to be deleted
Object.defineProperty(x, 'a', {
  configurable: false,
})
try {
  delete x.a
  console.log('4 >>>', x)
} catch (e) {
  console.error('4 >>>', e.toString())
}

// 5. show x.a property configuration
console.log('5 >>>', Object.getOwnPropertyDescriptor(x, 'a'))

// 6. attempt to revert configuration
// ! this cannot be done as it is a one way change when setting configurable to false
try {
  Object.defineProperty(x, 'a', {
    writable: true,
    configurable: true,
  })
} catch (e) {
  // TypeError: Cannot redefine property: a
  console.log('6 >>>', e.toString())
}

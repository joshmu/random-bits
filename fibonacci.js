/**
 * fibonacci
 */

function iterativeFibonacci(n) {
  const fibList = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibList[i] = fibList[i - 1] + fibList[i - 2]
  }

  return fibList[n]
}

function recursiveFibonacci(n) {
  if (n < 2) return n

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(iterativeFibonacci(2))
console.log(iterativeFibonacci(6))
console.log(iterativeFibonacci(10))
console.log(iterativeFibonacci(20))
console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(10))
console.log(recursiveFibonacci(20))

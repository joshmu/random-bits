/**
 * array group by
 * group an array of objects by one of the objects properties
 */

function groupBy(array, fn) {
  return array.reduce((acc, item) => {
    const key = fn(item)
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
}

console.log(groupBy([{ a: 1 }, { a: 2 }, { a: 1 }], o => o.a))
//  { '1': [ { a: 1 }, { a: 1 } ], '2': [ { a: 2 } ] }

console.log(
  groupBy(
    [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 1, b: 4 },
      { a: 2, b: 5 },
    ],
    o => o.b
  )
)
/**
{
  '2': [ { a: 1, b: 2 } ],
  '3': [ { a: 1, b: 3 } ],
  '4': [ { a: 1, b: 4 } ],
  '5': [ { a: 2, b: 5 } ]
}
*/

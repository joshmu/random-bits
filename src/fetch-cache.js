import fetch from 'node-fetch'

/**
 * cache any repeated fetch calls
 */

function fetchCacheInit() {
  const cache = {}

  async function fetchCache(url, options) {
    if (typeof url !== 'string') {
      throw new Error('url must be a string')
    }
    if (typeof options !== 'object') {
      throw new Error('options must be an object')
    }

    const key = JSON.stringify([...arguments])

    if (cache[key]) {
      console.log({ cached: cache[key] })
      return cache[key]
    }

    const res = await fetch(url, options)
    const result = await res.json()

    cache[key] = result

    console.log({ result })
    return result
  }

  fetchCache.cache = cache

  return fetchCache
}

;(async () => {
  const fetchCache = fetchCacheInit()

  const url = 'https://jsonplaceholder.typicode.com'
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  await fetchCache(url + '/todos/1', options)
  await fetchCache(url + '/todos/2', options)
  await fetchCache(url + '/todos/1', options) // cached

  console.log('cache', fetchCache.cache)
})()

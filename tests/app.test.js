import tap from 'tap'
import buildApp from '../src/app.js'

const { test } = tap

test('requests the "/" route', async (t) => {
  const app = buildApp()

  const response = await app.inject({
    method: 'GET',
    url: '/',
  })
  t.strictEqual(response.statusCode, 200, 'returns a status code of 200')
})

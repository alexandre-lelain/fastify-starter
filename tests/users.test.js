import tap from 'tap'
import buildApp from '../src/app.js'
import User from '../src/models/User.js'

const { test } = tap

test('POST /api/users', (t) => {
  t.test('with correct params', async (t) => {
    const app = buildApp()
    const params = { name: 'Alex', age: 25 }
    const responsePayload = { ...params, _id: 'some-id' }
    User.create = () => responsePayload

    const response = await app.inject({
      method: 'POST',
      url: '/api/users',
      payload: params,
    })
    t.strictEqual(response.statusCode, 201, 'returns a status code of 201')
    t.deepEqual(response.json(), responsePayload, 'returns created user')
  })

  t.test('with incorrect params', async (t) => {
    const app = buildApp()
    const params = { color: 'blue' }
    User.create = () => {}

    const response = await app.inject({
      method: 'POST',
      url: '/api/users',
      payload: params,
    })
    t.strictEqual(response.statusCode, 400, 'returns a status code of 400')
  })

  t.done()
})

test('GET /api/users', async (t) => {
  const app = buildApp()
  const usersList = [
    { name: 'Alex', age: 25 },
    { name: 'Totocap', age: 27 },
  ]
  User.find = () => usersList

  const response = await app.inject({
    method: 'GET',
    url: '/api/users',
  })
  t.strictEqual(response.statusCode, 200, 'returns a status code of 200')
  t.deepEqual(response.json(), usersList, 'returns the list of users')
})

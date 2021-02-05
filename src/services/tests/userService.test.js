import tap from 'tap'
import { calculateAge } from './../userService.js'

const { test } = tap

test('user services test -', (t) => {
  t.test('calculateAge(21)', async (t) => {
    t.equal(calculateAge(21), 42, 'returns 42')
  })

  t.done()
})

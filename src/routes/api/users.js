import m2s from 'mongoose-to-swagger'

import usersController from '../../controllers/usersController.js'
import User from '../../models/user.js'

const body = m2s(User)

export default (app, _, next) => {
  app.post(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'Add a user.',
        body,
        response: {
          201: {
            description: 'The new user was added successfuly.',
            type: 'object',
            properties: body.properties,
          },
        },
      },
    },
    usersController.create,
  )

  app.get(
    '/users',
    {
      schema: {
        tags: ['users'],
      },
      preValidation: [app.authenticate],
    },
    usersController.fetch,
  )

  app.get(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
      },
    },
    usersController.get,
  )

  app.put(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
      },
    },
    usersController.update,
  )

  app.delete(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
      },
    },
    usersController.delete,
  )

  next()
}

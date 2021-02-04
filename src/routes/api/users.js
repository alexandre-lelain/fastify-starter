import m2s from 'mongoose-to-swagger'

import usersController from '../../controllers/usersController.js'
import User from '../../models/user.js'

const { properties: userOutputProperties } = m2s(User)
const userInputProperties = Object.assign({}, userOutputProperties)
delete userInputProperties._id

export default (app, _, next) => {
  app.post(
    '/users',
    {
      schema: {
        description: 'Add a user.',
        body: {
          type: 'object',
          properties: userInputProperties,
          required: ['name'],
        },
        response: {
          201: {
            description: 'The new user was added successfuly.',
            type: 'object',
            properties: userOutputProperties,
          },
        },
      },
    },
    usersController.create,
  )

  app.get('/users', usersController.fetch)

  app.get('/users/:id', usersController.get)

  app.put('/users/:id', usersController.update)

  app.delete('/users/:id', usersController.delete)

  next()
}

import usersController from '../controllers/usersController.js'

export default (app) => {
  app.post('/api/users', usersController.create)

  app.get('/api/users', usersController.fetch)

  app.get('/api/users/:id', usersController.get)

  app.put('/api/users/:id', usersController.update)

  app.delete('/api/users/:id', usersController.delete)
}

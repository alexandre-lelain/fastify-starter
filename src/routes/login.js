import loginController from '../controllers/loginController.js'

export default (app, _, next) => {
  app.post(
    '/login',
    {
      schema: {
        tags: ['login'],
        description: 'Login',
        body: {
          required: ['email', 'password'],
          type: 'object',
          properties: {
            login: { type: 'string' },
            password: { type: 'string' },
          },
        },
      },
    },
    (req, rep) => loginController.login(app, req, rep),
  )

  next()
}

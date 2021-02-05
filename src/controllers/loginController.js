import User from '../models/user.js'

export default {
  login: async (app, request, reply) => {
    try {
      const {
        body: { email, password },
      } = request
      const user = await User.findOne({ email })
      const isPasswordValid = user ? await user.validatePassword(password) : false
      if (isPasswordValid) {
        const token = app.jwt.sign({ payload: request.body })
        reply.code(200).send({ token })
      } else {
        reply.code(401).send('Wrong email/password.')
      }
    } catch (e) {
      reply.code(500).send(e)
    }
  },
}

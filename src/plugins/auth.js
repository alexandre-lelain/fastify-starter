import fp from 'fastify-plugin'
import jwt from 'fastify-jwt'

export default fp((app, _, next) => {
  app.register(jwt, {
    secret: 'supersecret',
  })

  app.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  next()
})

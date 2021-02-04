import fastify from 'fastify'
import autoload from 'fastify-autoload'

const build = (opts) => {
  const app = fastify(opts)

  app.register(autoload, {
    dir: './src/plugins',
  })

  app.register(autoload, {
    dir: './src/routes',
  })

  app.get('/', (_, reply) => {
    try {
      reply.code(200).send('Hello, World!')
    } catch (e) {
      reply.code(500).send(e)
    }
  })

  return app
}

export default build

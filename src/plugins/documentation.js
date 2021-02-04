import fp from 'fastify-plugin'
import Swagger from 'fastify-swagger'

import config from '../../config.js'

export default fp((app, _, next) => {
  app.register(Swagger, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Fastify Starter',
        description: 'Testing the fastify starter api',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: `localhost:${config.api.port}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    exposeRoute: true,
  })

  next()
})

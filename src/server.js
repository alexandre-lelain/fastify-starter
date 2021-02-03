import fastify from 'fastify'
import mongoose from 'mongoose'

import addRoutes from './routes/index.js'

const app = fastify()

addRoutes(app)

//connected fastify to mongoose
try {
  mongoose.connect('mongodb://127.0.0.1:2424/fastify-server', { useNewUrlParser: true, useUnifiedTopology: true })
} catch (e) {
  console.error(e)
}

// hello World
app.get('/', (request, reply) => {
  try {
    reply.code(200).send('Hello, World!')
  } catch (e) {
    reply.code(500).send(e)
  }
})

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server running on ${address}`)
})

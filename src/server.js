import mongoose from 'mongoose'

import buildApp from './app.js'
import config from '../config.js'

const app = buildApp()

try {
  mongoose.connect('mongodb://127.0.0.1:2424/fastify-starter', { useNewUrlParser: true, useUnifiedTopology: true })
} catch (e) {
  console.error(e)
}

app.listen(config.api.port, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
    [Success] Server is up and running on ${address}.
    ---
    API's documentation is available here: ${address}/documentation.
  `)
})

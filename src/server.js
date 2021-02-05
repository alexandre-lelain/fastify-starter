import mongoose from 'mongoose'

import buildApp from './app.js'
import logger from './logger.js'
import config from '../config.js'

const app = buildApp({ logger })

try {
  mongoose.connect(config.mongodb.address, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
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

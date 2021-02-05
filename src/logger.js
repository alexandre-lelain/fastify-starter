import pino from 'pino'

import config from '../config.js'

export default pino({
  level: config.logsLevel || 'info',
  formatters: {
    level: (label) => ({ level: label }),
    bindings: () => ({}),
  },
})

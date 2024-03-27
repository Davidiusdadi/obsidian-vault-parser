
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./obsidian-vault-parser.cjs.production.min.js')
} else {
  module.exports = require('./obsidian-vault-parser.cjs.development.js')
}

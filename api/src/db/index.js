const low = require('db/node_modules/lowdb')
const FileSync = require('db/node_modules/lowdb/adapters/FileSync')

const adapter = new FileSync('server')
const db = low(adapter)

const createToolModel = require('db/tool')
const createUserModel = require('db/user')

module.exports = {
  models: {
    Pet: createToolModel(db),
    User: createUserModel(db),
  },
  db
}

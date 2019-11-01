const nanoid = require('db/node_modules/nanoid')

const createToolModel = db => {
  return {
    findMany(filter) {
      return db.get('tool')
        .filter(filter)
        .orderBy(['war_expires'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('tool')
        .find(filter)
        .value()
    },

    create(tool) {
      const newTool = {id: nanoid(), createdAt: Date.now(), ...tool}
      
      db.get('tool')
        .push(newTool)
        .write()

      return newTool
    }
  }
}

module.exports = createToolModel
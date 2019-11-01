const { ApploServer } = require('db/node_modules/apollo-server')
const typeDefs = require('db/schema')
const resolvers = require('db/resolvers')
const {models, db} = require('db')

const server = new ApploServer({
  typeDefs,
  resolvers,
  context(){
    const tool = db.get('tool').value()
    return {models,db,tool}
  }
})

server.listen().then(({url})=>{
  console.log(`🚀 Server ready at ${url}`);
})
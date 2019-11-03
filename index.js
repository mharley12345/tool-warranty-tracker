require('dotenv').config()
const server = require('./api/server')
const algoliasearch = require('algoliasearch')
const appId = process.env.APP_ID
const apiKey = process.env.API_KEY
const client = algoliasearch(appId,apiKey)


// const objects = require('./data')
const index =client.initIndex('tools_2')
server.get('/db/search')
   index.search({ query: 'query string' }, (err, { hits } = {}) => {
        if (err) {
          console.log(err);
          console.log(err.debugData);
          return;
        }
    })

server.get('/', (req,res)=>{
    res.send(`<title>Warranty Tracker</title>`)
})
const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
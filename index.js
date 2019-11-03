const server = require('./api/server')


server.get('/', (req,res)=>{
    res.send(`<title>Warranty Tracker</title>`)
})
const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
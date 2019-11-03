const db = require('../db/dbConfig');

module.exports = {
     add,
      getbyId,
     getByFilter,
    getAll    };


function getAll(){
    return db('tools')
    .select('*')
    .then(tools => tools)
}
function getbyId(id) {
    console.log(id)
    return db('tools as t')
          .select('t.id','t.name', 't.quanity', 't.expires', 't.expected','t.notes')
           .where({ id })
     
           .first()
           .then(tools => tools)
     
   
          
        }   
        function getByFilter(filter) {
       
            return db('tools as t')
         
              .select('t.id','t.name', 't.quanity', 't.expires', 't.expected','t.notes')
              .where({expires:filter})
          }

function add(tools) {
    

    return db('tools')
        .insert(tools,"id");
};


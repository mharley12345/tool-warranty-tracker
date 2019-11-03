const db = require('../db/dbConfig');

module.exports = {
     add,
      getbyId,
     getByExp,
    getAll    };


function getAll(){
    return db('tools')
    .select('*')
    .then(tools => tools)
}
function getbyId(id) {
    return db('tools as t')
          .select('t.id','t.name', 't.quanity', 't.expires', 't.expected','t.notes')
           .where({ id })
           .first()
           .then(tools => tools)
     
   
          
        }   
        function getByExp(range) {
       
            return db('tools as t')
         
              .select('*')
              .where({expires:range})
          }

function add(tool) {
    

    return db('tools')
        .insert(tools,"id");
};


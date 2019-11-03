
exports.up = function(knex) {
    return knex.schema
    .createTable('tools',(t) =>{
     t.increments('id')
     t.string('name',128)
     t.integer('quanity',1000)
     t.string('expires',10)
     t.string('expected',10)
     t.string('notes',2000)
    })
    
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tools')
    
  };
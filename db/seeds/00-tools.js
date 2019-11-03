
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools')
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {name:'Wrenches' ,quanity:10 ,expires:'12-31-2019' ,expected:'11-30-2019' ,notes:'Box wrenches set of 10 will replace individual wrench' },
        {name:'Air Compressor' ,quanity:1 ,expires:'12-31-2020' ,expected:'11-30-2020' ,notes:'' },
        {name:'Floor Jack' ,quanity:2 ,expires:'04-21-2020' ,expected:'03-21-2020' ,notes:'' }
      ]);
    });
};

exports.seed = function (knex, Promse) {
  return knex('games')
    .truncate()
    .then(function() {
      return knex('games').insert([
        {
          title: 'Command & Conquer',
          genre: 'Real-Time Strategy',
          release_year: 1995
        }
      ]);
    });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').truncate()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('favourites').insert({
          user_id: 1,
          map_id: 1
        }),

        knex('favourites').insert({
          user_id: 2,
          map_id: 1
        }),

        knex('favourites').insert({
          user_id: 1,
          map_id: 2
        })



      ]);
    });
};

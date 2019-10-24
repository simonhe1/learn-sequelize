const { Genre, Actor, Movie } = require('./models');

/*
  currently, the genre table only has: Action, Comedy, and Drama
  Add one more Genre.
*/
function insertNewGenre() {
  return Genre.create({ name: 'Horror'});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({title: 'The Dark Knight Rises', year: 2012});
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return Movie.findOne({
    where:{
      id: [2]
    }
  }).then(movie => {
    return movie.title
  });
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
  return Actor.findAll().then(actor =>{
    actor = actor.map(act =>{
      return act.name;
    });
    return actor;
  });
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({
    where : {
      year : [2008],
    }
  }).then(movie => {
    movie = movie.map(mov => {
      return mov.title;
    })
    return movie;
  });
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  return Genre.destroy({
    where: {
      name: ['Horror'],
    }
  });
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
async function associateRosarioToEagleEye() {
  let actor = await Actor.findOne({where: {name: 'Rosario Dawson'}});
  let movie = await Movie.findOne({where: {title: 'Eagle Eye'}});
  return actor.addMovie(movie);
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
async function associateRobertToTropicThunder() {
  let actor = await Actor.findOne({where: {name: 'Robert Downey Jr.'}});
  let movie = await Movie.findOne({where: {title: 'Tropic Thunder'}});
  return actor.addMovie(movie);
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
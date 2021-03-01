const express = require('express');
const MoviesService = require('../services/movies');
const { moviesMock } = require('../utils/mocks/movies');

const {
  createMovieSchema,
  updateMovieSchema,
  movieIdSchema,
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandlers');

const moviesService = new MoviesService();

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        mesagge: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;

      try {
        const movie = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          mesagge: 'movie retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      try {
        const createMovieId = await moviesService.createMovie({ movie });

        res.status(201).json({
          data: createMovieId,
          mesagge: 'movie created',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovieId,
          mesagge: 'movie updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });

        res.status(200).json({
          data: deletedMovieId,
          mesagge: 'movie deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;

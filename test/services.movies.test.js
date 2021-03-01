const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock } = require('../utils/mocks/movies');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

describe('services - movies', function () {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });
  const movieService = new MoviesService();
  describe('when getMovies method is called', async function () {
    it('should call the getAll MongoLib Method', async function () {
      await movieService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });
    it('should return an array of movies', async function () {
      const result = await movieService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    });
  });
});

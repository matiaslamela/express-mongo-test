const moviesMock = [
  {
    title: 'avengers',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description: 'toni stack se hace pelota cuando chasquea los dedos',
    duration: '3000',
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama',
    ],
  },
  {
    title: 'Logan',
    year: 2018,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:
      'Logan se hace pelota cuando proteje a la hija que le encajaron',
    duration: '240',
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: ['Action|Adventure', 'Horror|Western'],
  },
  {
    title: 'V de venganza',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description: 'V se hace pelota destruyendo un regimen autoritario',
    duration: '66',
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama',
    ],
  },
];

function filteredMovieMocks(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async getMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  MovieServiceMock,
  filteredMovieMocks,
};

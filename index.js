const express = require('express');
const { config } = require('./config/index');

const app = express();
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandlers');
app.use(express.json());

moviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

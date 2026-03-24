var routes = require('express').Router();

var AuthorControllers = require('../controllers/authors');

routes.get('/authors', AuthorControllers.getAuthors);
routes.post('/authors', AuthorControllers.postAuthor);

module.exports = routes;
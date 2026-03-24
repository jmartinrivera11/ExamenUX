var routes = require('express').Router();

var notesControllers = require('../controllers/notes');

routes.get('/notes', notesControllers.getNotes);
routes.post('/notes', notesControllers.postNote);

module.exports = routes;
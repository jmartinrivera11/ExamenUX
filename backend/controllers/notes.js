const { Notes } = require('../models');

let getNotes = async (request, response) => {
  try {
    let notes = await Notes.findAll({
      order: [['priority', 'DESC']]
    });
    response.status(200).json({
      status: 200,
      data: notes
    });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error al obtener las notas',
      error: error.message
    });
  }
};

let postNote = async (request, response) => {
  try {
    if (!request.body.authorId) {
      return response.status(406).json({
        status: 406,
        message: 'El autor no existe'
      });
    }
    let newNote = await Notes.create(request.body);
    response.status(201).json({
      status: 201,
      data: newNote
    });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error al crear la nota',
      error: error.message
    });
  }
};

module.exports = {
  getNotes,
  postNote
};
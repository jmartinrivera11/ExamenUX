const { Authors } = require('../models');

let getAuthors = async (request, response) => {
  try {
    let authors = await Authors.findAll();
    if (authors.length <= 0) {
      response.status(204).json({
        status: 204,
        message: 'No authors found'
      })
    } else {
      response.status(200).json({
        status: 200,
        data: authors
      })
    }
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error fetching authors',
      error: error.message
    })
  }
}

let postAuthor = async (request, response) => {
  try {
    if(request.body.name === undefined || request.body.name === "") {
      response.status(406).json({
        status: 406,
        message: 'Invalid author data'
      })
    }
    let newAuthor = await Authors.create(request.body);
    response.status(201).json({
      status: 201,
      data: newAuthor
    })
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error creating author',
      error: error.message
    })
  }
}

module.exports = {
  getAuthors,
  postAuthor
}
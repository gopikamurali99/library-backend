const express = require('express')
const { getAllAuthors, getAuthorById, addNewAuthor, UpdateAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()

//  get all authors
router.get ('/', getAllAuthors)

//  get author by id
router.get('/:authorId', getAuthorById)

//add a new author
router.post('/', addNewAuthor)

//update a current author
router.patch('/:authorId',UpdateAuthor)

//delete a current author
router.delete('/:authorId', deleteAuthor)
  
module.exports = router

const express = require('express')
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()


  //2.get al books
  router.get('/',getAllBooks)

  //3.get a book by id
  router.get('/:bookId', getBookById)

  
  //4.Add a new book
  router.post('/', addNewBook)

  //4.Update a current book
  router.patch('/:bookId',updateBook)

//5.delete a book
  router.delete('/:bookId', deleteBook )

module.exports = router

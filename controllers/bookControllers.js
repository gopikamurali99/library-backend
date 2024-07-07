const express = require('express');
const Book = require("../models/bookModels")

const getAllBooks = async (req,res) => {
    const books = await Book.find({}).exec();
    res.status(200).json(books)

}

const getBookById = async (req,res) => {
    try {
        const books = await Book.findById(req.params.bookId).exec();
    res.status(200).json(books)
    }
    catch(error) {
        res.status(404).send('Book not found')
    }
}

const addNewBook = async (req,res) => {
  const bookData = req.body;
  const book = new Book (bookData)
  await book.save()
  res.status(201).json(book)
}
const updateBook =async (req,res) => {
   try { 
    const books = await Book.findByIdAndUpdate(req.params.bookId,req.body,{new:true});
      res.json(books)
   }
   catch(error){
    console.log(error)
    res.status(404).send('The book you want to update is not found')
   

   }
}

const deleteBook =async (req,res) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId)
        res.status(200).send('deleted')

    }
    catch(error){
        res.status(404).send('The book that you want to delete is not found')
    }
}

module.exports ={
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
}

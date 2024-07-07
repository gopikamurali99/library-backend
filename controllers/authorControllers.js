const express = require('express')
const Author = require('../models/authorModel')

const getAllAuthors = async (req,res) =>{
   const author =await Author.find({}).exec()
   res.status(200).json(author);
}

const getAuthorById = (req,res) =>{
    res.send('Note written')
}

const addNewAuthor = async (req,res) =>{
    const authorData = req.body
    const author = new Author(authorData)
    await author.save()
    res.status(201).json(author)
}

const UpdateAuthor =async  (req,res) =>{
  try {
  const authors =await Author.findByIdAndUpdate(req.params.authorId,req.body,{new:true});
   res.status(201).json(authors)
  }
  catch(error) {
    res.status(404).send("the author you want to update is not found")
  }
}
const deleteAuthor = async (req,res) =>{
    try {
    await Author.findByIdAndDelete(req.params.authorId)
    res.status(200).send('deleted')

    }
    catch(error){
        res.status(404).send('the author that you want to delete is not available in the list')
    }
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    UpdateAuthor,
    deleteAuthor
    
}

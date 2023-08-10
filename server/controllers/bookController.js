import express from "express";
import Book from "../models/bookModel.js";

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({message: "No Books Found"})
    }
}

const addBook = async (req, res) => {
    try {
        const {name, author, description, price, available} = req.body;

        const newBook = new Book({
            name, author, description, price, available
        });

        const createdBook = await newBook.save();

        res.status(201).json({message: "Book created successfully", book: createdBook});

    } catch (error) {
        res.status(500).json({message: "Error creating book", error: error.message})
    }
}


const updateBook = async (req, res) => {
    try {
        const 
    } catch (error) {
        
    }
}

export {getAllBooks,addBook};

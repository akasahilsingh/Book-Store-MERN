import express from "express";
import { Book } from "../models/book.model.js";

const route = express.Router();

// Add new book
route.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send("Send all required fields: title, author, publishYear");
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(
      `You are seeing this error from addinng new book catch block
      ${error.message}`
    );
    res.status(500).send(error.message);
  }
});
// Get books details
route.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .send(`We can not find any books right now ${error.message}`);
  }
});
//Get one book by ID
route.get("/:id", async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .send(`We can not find any books right now ${error.message}`);
  }
});

// Update a book

route.post("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res
        .status(400)
        .send("Send all required fields: title, author, publishYear");
    }

    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book updated successfully");
  } catch (error) {
    res
      .status(500)
      .send(`We can not find any books right now ${error.message}`);
  }
});

// Delete book
route.delete("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send("Send all required fields: title, author, publishYear");
    }

    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


export default route;
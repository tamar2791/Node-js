import Book from "../models/book.model.js";

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (error) {
        next({ message: error.message });
    }
}
export const getBookById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = await Book.find((b) => b.id == id);
        if (!book) {
            return next({ message: "Book not found", status: 404 });
        }
        res.json(book);
    }
    catch (error) {
        next({ message: error.message });
    }
}
export const addBook = async (req, res, next) => {
    try {
        const { name, price, categories, auther } = req.body;
        const newBook = new Book({ name, price, categories, auther });
        await newBook.save();
        res.status(201).json(newBook);
    }
    catch (error) {
        next({ message: error.message });
    }
}
export const updateBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const { _id, name, price, categories, auther } = req.body;
        if (bookId != _id) {
            return next({ status: 409, message: 'id conflict' });
        }

        const book = await Book.findByIdAndUpdate(bookId, {
            $set: { name, price, price, categories, auther },
        }, { new: true });
        res.status(200).json(book);
    }
    catch (error) {
        next({ message: error.message });
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return next({ message: "Book not found", status: 404 });
        }
        res.status(204).json({ message: "Book deleted successfully" });
    }
    catch (error) {
        next({ message: error.message });
    }
}
import { arrBooks } from "../books.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json(arrBooks);
})
router.get("/:id",(req,res)=>{
    const id=req.params.id
    const book=arrBooks.find((book)=>book.id==id)
    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    res.json(book)
})
router.post("/", (req, res) => {
    const newBook = req.body;
    const book=arrBooks.find((book) => book.id == newBook.id);
    if (book) {
        return res.status(400).json({ message: "Book with this ID already exists" });
    }
    arrBooks.push(newBook);
    res.status(201).json(newBook);
});
router.put("/:id", (req, res) => {
    const bookId = req.params.id;
    const bookIndex = arrBooks.findIndex((book) => book.id == bookId);
    if (bookIndex !== -1) {
        arrBooks[bookIndex] = { ...arrBooks[bookIndex], ...req.body };
        res.status(200).json(arrBooks[bookIndex]);
    } else {
        res.status(404).send("Book not found");
    }
});
router.delete("/:id", (req, res) => {
    const bookId = req.params.id;
    const bookIndex = arrBooks.findIndex((book) => book.id == bookId);
    if (bookIndex !== -1) {
        arrBooks.splice(bookIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});
export default router;
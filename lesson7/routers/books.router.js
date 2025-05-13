import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/books.controller.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id",getBookById)
router.post("/", addBook);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);

export default router;
import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import {config} from 'dotenv';
import booksRouter from './routers/books.router.js';
import usersRouter from './routers/users.router.js';
import { addDate, blockOnShabbat, printDate } from './middleweres/date.middlewere.js';
import { errorHandler, notFound } from './middleweres/error.middleware.js';
import {connectDB} from './config/db.js';

config();
connectDB();
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cors());
if (process.env.NODE_ENV === 'development') {
    server.use(morgan('dev'));
}
server.use(addDate, printDate, blockOnShabbat);
server.get('/', (req, res) => {
    res.send('Hello To You!');
});
server.use('/books', booksRouter);
server.use('/users', usersRouter);
server.use(notFound,errorHandler);
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
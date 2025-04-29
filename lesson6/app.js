import express from 'express';
import booksRouter from './routers/books.router.js';
import usersRouter from './routers/users.router.js';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello To You!');
});

server.use('/books',booksRouter);
server.use('/users',usersRouter);
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
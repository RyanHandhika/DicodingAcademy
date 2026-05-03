import { nanoid } from 'nanoid';
import { books } from './bookShelf.js';

const getAllBooks = (req, res) => {
  const { reading, finished, name } = req.query;

  let result = books;

  if (reading !== undefined) {
    result = result.filter(
      (book) => Number(book.reading) === Number(reading)
    );
  }

  if (finished !== undefined) {
    result = result.filter(
      (book) => Number(book.finished) === Number(finished)
    );
  }

  if (name) {
    result = result.filter(
      (book) => book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      books: result.map(({ id, name, publisher }) => ({
        id,
        name,
        publisher,
      })),
    },
  });
};

const getBookById = (req, res) => {
  const { id } = req.params;
  const bookValidation = books.filter((book) => book.id === id)[0];

  if (bookValidation === undefined) {
    res.status(404).json({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      book: books.filter((book) => book.id === id)[0]
    }
  });
};

const addBook = (req, res) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  let finished = false;
  if (pageCount === readPage) finished = true;

  if (name === undefined) {
    res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    return;
  } else if (readPage > pageCount) {
    res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    return;
  }

  const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt };

  books.push(newBook);

  res.status(201).json({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    }
  });
};

const updateBook = (req, res) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
  const updatedAt = new Date().toISOString();
  const { id } = req.params;
  const bookId = books.findIndex((book) => book.id === id);

  if (bookId === -1) {
    res.status(404).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
  }

  if (name === undefined) {
    res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    return;
  } else if (readPage > pageCount) {
    res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    return;
  }

  if (bookId !== -1) {
    books[bookId] = {
      ...books[bookId],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
  }

  res.status(200).json({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const bookId = books.findIndex((book) => book.id === id);

  if (bookId === -1) {
    res.status(404).json({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
  }

  if (bookId !== -1) books.splice(bookId, 1);

  res.status(200).json({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
};

export { getAllBooks, getBookById, addBook, updateBook, deleteBook };

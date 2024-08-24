import connection from './connection.ts'
import { Book } from '../../models/Book.ts'

const db = connection

export async function getAllBooks(): Promise<Book[]> {
  return db('books').select()
}

export async function getAllBooksById(id: number): Promise<Book> {
  return db('books').where({ id }).select().first()
}

export async function addBook(newBook: Book) {
  return db('books').insert(newBook)
}

export async function updateBook(id: number, data: Book) {
  return db('books').where({ id }).update(data)
}

export async function deleteBook(id: number): Promise<Book | null> {
  return db('books').where({ id }).del()
}

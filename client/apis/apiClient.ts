import request from 'superagent'
import { Book } from '../../models/Book.ts'

const rootURL = '/api/v1/books'

export async function fetchBooks(): Promise<Book[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function fetchBookById(id: number): Promise<Book> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addBook(newBook: Book) {
  return await request.post(rootURL).send(newBook)
}

export async function deleteBookById(id: number | undefined) {
  await request.del(`${rootURL}/${id}`)
}

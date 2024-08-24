import express from 'express'
import * as db from '../db/books.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.send(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const book = await db.getAllBooksById(id)
    res.json(book)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const newBook = req.body
  try {
    await db.addBook(newBook)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updateBook(id, req.body)
    res.sendStatus(200)
  } catch (error) {
    console.log('Failed to update task', error)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBook(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

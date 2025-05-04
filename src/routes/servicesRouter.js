import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
  res.render('services')
})

router.get('/diamond', (req, res) => {
  res.render('diamond')
})

router.get('/warehouse', (req, res) => {
  res.render('warehouse')
})

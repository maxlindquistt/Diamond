import { router as homeRouter } from './homeRouter.js'
import { router as servicesRouter } from './servicesRouter.js'
import { router as contactRouter } from './contactRouter.js'
import { router as aboutRouter } from './aboutRouter.js'

import express from 'express'

const router = express.Router()

router.use('/', homeRouter)
router.use('/services', servicesRouter)
router.use('/contact', contactRouter)
router.use('/about', aboutRouter)

router.use((req, res) => {
  res.status(404).render('errors/404')
})

export default router

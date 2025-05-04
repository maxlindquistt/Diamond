import express from 'express'
import { createRequire } from 'module'
import router from './routes/router.js'
try {
  const require = createRequire(import.meta.url)
  const path = require('path')
  const app = express()
  const PORT = process.env.PORT || 3000

  // Middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(process.cwd(), 'public')))

  // View engine setup
  app.use(express.static(path.join(process.cwd(), 'public')))
  app.set('views', path.join(process.cwd(), 'src/views'))
  app.set('view engine', 'ejs')

  // Routes
  app.use('/', router)

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
} catch (error) {
  console.error('Error starting the server:', error)
  process.exit(1)
}

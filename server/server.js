// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './configs/mongodb.js'
// import { clerkWebhooks } from './controllers/webhooks.js'

// //Initialize Express
// const app = express()

// // Connect to data base
// await connectDB()

// //Middlewares
// app.use(cors())

// //Routes
// app.get('/', (req, res) => res.send("API Working"))
// app.post('/clerk', express.json(), clerkWebhooks)

// //Port
// const PORT = process.env.PORT || 5000

// app.listen(PORT, ()=> {
//     console.log(`Server is running on port ${PORT} `)
// })

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Create Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to database on each request
let isDBConnected = false
app.use(async (req, res, next) => {
  if (!isDBConnected) {
    try {
      await connectDB()
      isDBConnected = true
    } catch (err) {
      console.error("DB connection error:", err)
      return res.status(500).send("Database connection failed")
    }
  }
  next()
})

// Routes
app.get('/', (req, res) => {
  res.send("API Working")
})

app.post('/clerk', clerkWebhooks)

// Export the app for Vercel serverless function
export default app
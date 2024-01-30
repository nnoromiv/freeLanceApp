import express from 'express' 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import getJobRoutes from './routes/getJobRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()  // Loads .env file contents into process.env.
connectDB() // Runs the db.js files which tries connecting to the mongoDB 
const app=express() // Assigns the constant app to the outsourced function `Express` initialization of app


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api is running.....')  // Sends a response to DOM
})

app.use('/gigs', gigRoutes)
app.use('/postjob', jobRoutes)
app.use('/getjob', getJobRoutes)
app.use('/user', userRoutes)

app.use((req,res,next) => {
    const error = new Error('Not found')
    res.status(404)
    next(error)
})

app.use((req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Served ${ process.env.NODE_ENV } mode on ${ PORT }`)) // The app listens to the portnumber{`5000`}, the call'sback a function 
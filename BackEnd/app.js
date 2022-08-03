const express=require('express')
const app=express()
// connect Database
const connectDB=require('./config/connection')
connectDB()

//middleware
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

// app.use('/api/users',require('./routes/user'))

app.use('/api/items',require('./routes/item'))

const port=1000
app.listen(port,()=>console.log(`server started on port ${port}`))
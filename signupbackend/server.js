const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors = require('cors')
//const dotenv = require('dotenv')
//dotenv.config()
//mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Database Connected"))

mongoose.connect('mongodb+srv://mandeepk2985:opB0OjjyeRpQEFmO@cluster0.te4i3ix.mongodb.net/mytable?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  //initialize routes as a middle ware to connect server and router.js
  app.use(express.json())//activated body parser
  app.use(cors())
  app.use('/app', routesUrls)

app.listen(4000,()=> console.log("server is up in running"))
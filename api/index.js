"use strict"
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session'); 
const express = require('express')
const cors = require('cors');
const chalk = require('chalk')
const { MongoClient } = require('mongodb');





dotenv.config()
const app = express()
app.use(cookieParser())
// app.use(expressSession({
// 	secret: process.env.SECRET_KEY,
// }));
app.use(cors({
  origin: ' http://localhost:3000', // replace with the actual origin of your frontend
  credentials: true,
}
))
app.use(express.json())


// const url = 'mongodb://localhost:27017/tic-tac-toe-local';

// const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology: true})

// client.connect((err) => {
//   if (err) { 
//     console.error('Failed to connect to MongoDB: ', err);
//   } else {
//     console.log('Connected to MongoDB');
//   }
// })


// const client

// console.log(chalk.cyan("sdfdfs"))


// const gamesData = {
//   scope: {
//     cross: 0,
//     zerro: 0
//   },
//   queue: true,
// }


app.post('/create', async (req, res) => {
  const dataToInsert = req.body
  const dataBase = client.db('tic-tac-toe-local')
  const collections = dataBase.collection('users')
  const collectionUsers = dataBase.collection('games')

  try { 
    const result = await collections.insertOne(dataToInsert)
    const reslt = await collectionUsers.insertOne(gamesData)

    res.status(200).json(reslt)
  }
  catch (err) {
    console.error('Failed to insert data:', err);
    res.status(500).send('Internal Server Error');
  }
})


app.get('/quit', (req, res) => {
  console.log("quit!!!!")
  res.status(200).send("ok")
})

app.get('/get', (req, res) => {
  // res.setHeader('Set-Cookie','test=value');
  // res.cookie('userTest', 'IlyaMishkov', { maxAge: 1000 * 60 * 10,httpOnly: false, path:'/',secure:false})
  res.cookie('userTest', 'IlyaMishkov', {sameSite:'lax', httpOnly: false })
  res.json("sending").status(200);

})




const PORT = process.env.PORT_EXPRESS_SERVER || 5500
app.listen(PORT, () => {
  console.log(`server is working on server ${PORT}`) 
})

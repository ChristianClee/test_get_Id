const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors');
const chalk = require('chalk')
dotenv.config()
const { MongoClient } = require('mongodb');




const app = express()
app.use(cors())
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


app.get('/get', (req, res) => {
  try {
    const idUser = req.ip
    if(idUser) res.status(200).json(idUser)
    else res.status(300).json('server error')
  }
  catch (err) {
    res.status(500).json('server error', err)
   }
})




const PORT = process.env.PORT_EXPRESS_SERVER || 5500
app.listen(PORT, () => {
  console.log(`server is working on server ${PORT}`) 
})

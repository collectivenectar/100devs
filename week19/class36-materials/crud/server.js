//server
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
app.set('view engine', 'ejs')

MongoClient.connect('mongodb+srv://collectivenectar:testingstarwars123@cluster0.lilgo.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({extended: true}))

    app.listen(3000, function() {
      console.log('listening on 3000')
    })

    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
      .then(results => {
        console.log(results)
      })
      .catch(error => console.error(error))
    })

    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
        res.render('index.ejs', {})
    })
  })
  .catch(error => console.error(error))

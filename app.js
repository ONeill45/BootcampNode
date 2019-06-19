//pull in required libraries
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

//initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  }));
  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }));
let port = 3001;
MongoClient.connect('mongodb+srv://dbUser:Odj5W2hHzVhi8WsR@cluster0-xfzxk.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true }, (err, client) => {
    if(err) return console.log(err);
    db = client.db('Cluster0');
    app.listen(process.env.port || port, () => {
        console.log(`Server is running on ${port}`);
    });
    
    app.get('/', (req, res) => {
        res.json('Hello world');
    });
    app.post('/history', (req, res) => {
        db.collection('history').insert(req.body, (err, result) => {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                console.log('Saved');
                res.json('Success');
            }
        });
    });
    //client.close();
});

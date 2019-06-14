//pull in required libraries
const express = require('express');
const bodyParser = require('body-parser');

//initialize express app
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world');
})
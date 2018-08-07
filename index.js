const express = require('express');
const app = express();
const router = express.Router()

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('Could NOT connect to DB: ', err);
  } else {
    console.log("Connected to DB: " + config.db);
  }
});


//middlewares



app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/ejecutivoFront/dist'));
app.use('/authentication', authentication);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/ejecutivoFront/dist/index.html'))
// });


app.listen(port, () => {
  console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});

// app.listen(8080, () => {
//   console.log('Listening on port 8080');
// });
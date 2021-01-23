var bodyParser= require('body-parser');
let mysql = require('mysql');
var express = require('express');
const dotenv= require('dotenv');
const app = express();

app.use(express.json({
  extended: true
}));
app.use(bodyParser.json());

const getDiem = require('./routes/getDiem');
const createUser = require('./routes/createUser');

app.use(bodyParser.urlencoded({ extended: false}));
dotenv.config({
  path:'./configs/config.env'
});

app.use("/getDiem",getDiem);
app.use("/createUser", createUser);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
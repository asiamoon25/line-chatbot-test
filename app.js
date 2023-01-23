const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const line = require('@line/bot-sdk');
const hook = require("./lineEvent/hook");
const indexRouter = require('./routes/index')
require('dotenv').config();

const config = {
    channelAccessToken:process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret:process.env.CHANNEL_SECRET
}
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use('/',indexRouter)

app.listen(9001, function (){
    console.log("Server is running on port" + 9001);
})
module.exports = app;




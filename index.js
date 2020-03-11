const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
var db = require ("./models");
const path = require('path')
const apiRoute = require("./controllers/chores_controller")


require('dotenv').config();
app.use(logger('dev'));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(apiRoute)

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});
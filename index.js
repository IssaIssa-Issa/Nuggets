const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
var db = require ("./models");

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

require('dotenv').config();
app.use(logger('dev'));

app.use(bodyParser.json());
// app.use('/api', routes);
app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Import routes and give the server access to them.
require("./controllers/chores_controller")(app);

// sequilize
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    })
});
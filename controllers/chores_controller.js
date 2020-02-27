var db = require("../models");

module.exports = function (app) {


    // GET (show all transactions)
    app.get("/api/transaction/", function (req, res) {
        db.sequelize.query('SELECT * FROM transaction')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });


    // GET (show all chores)
    app.get("/api/chores/", function (req, res) {
        db.sequelize.query('SELECT * FROM chores')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all children)
    app.get("/api/children/", function (req, res) {
        db.sequelize.query('SELECT * FROM children')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all admin)
    app.get("/api/admin/", function (req, res) {
        db.sequelize.query('SELECT * FROM admin')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });


    // GET (show all login) KK: Not sure if this route is needed
    app.get("/api/login/", function (req, res) {
        db.sequelize.query('SELECT * FROM login')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });



}
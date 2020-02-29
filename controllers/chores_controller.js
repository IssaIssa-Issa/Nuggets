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


    // GET (show all login) 
    app.get("/api/login/", function (req, res) {
        db.sequelize.query('SELECT * FROM login')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // POST (add chore)
    app.post("/api/chores", function (req, res) {
        db.Chores.create({
            //Add code here for team info req.body
        })
            .then(function (dbTeam) {
                res.send(dbTeam);
            });
    });
    //POST (add transaction)
    app.post("/api/transaction", function (req, res) {
        db.Transactions.create({
            //Add code here for team info req.body
        })
            .then(function (dbTeam) {
                res.send(dbTeam);
            });
    });

    //POST (add parent)
    app.post("/api/teams", function (req, res) {
        db.Admin.create({
            //Add code here for team info req.body
        })
            .then(function (dbTeam) {
                res.send(dbTeam);
            });
    });

    //POST(add child)
    app.post("/api/teams", function (req, res) {
        db.Children.create({
            //Add code here for team info req.body
        })
            .then(function (dbTeam) {
                res.send(dbTeam);
            });
    });

    //POST(add login)
    app.post("/api/teams", function (req, res) {
        db.Login.create({
            //Add code here for team info req.body
        })
            .then(function (dbTeam) {
                res.send(dbTeam);
            });
    });




}
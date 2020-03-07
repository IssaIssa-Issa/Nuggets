var db = require("../models");
const router = require("express").Router()



///////////////////////////////////////////GET ROUTES////////////////////////////////////////////////

    // GET (show all transactions)
    router.route("/api/transaction/").get( function (req, res) {
        db.sequelize.query('SELECT * FROM transaction')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });


    // GET (show all chores)
    router.route("/api/chores").get(function (req, res) {
        db.sequelize.query('SELECT * FROM chores')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all children)
    router.route("/api/children/").get(function (req, res) {
        db.sequelize.query('SELECT * FROM children')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all admin)
    router.route("/api/admin/").get(function (req, res) {
        db.sequelize.query('SELECT * FROM admin')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });


    // GET (show all login) 
    router.route("/api/login/").get(function (req, res) {
        db.sequelize.query('SELECT * FROM login')
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });


///////////////////////////////////////////POST ROUTES////////////////////////////////////////////////


    // POST (add chore)
    router.route("/api/chores/").post(function (req, res) {
        db.Chores.create({
            admin_id: req.body.admin_id,
            chore_name: req.body.chore_name,
            amount: req.body.amount,
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });
    //POST (add transaction)
    router.route("/api/transaction/").post(function (req, res) {
        db.Transactions.create({
            amount: req.body.amount,
            admin_id: req.body.admin_id,
            child_id: req.body.child_id,
            admin_notes: req.body.admin_notes,
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });

    //POST (add parent)
    router.route("/api/admin/").post(function (req, res) {
        db.Admin.create({
            admin_name: req.body.admin_name
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });

    //POST(add child)
    router.route("/api/children/").post(function (req, res) {
        db.Children.create({
            child_name: req.body.child_name,
            admin_id: req.body.admin_id,
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });

    //POST(add login)
    router.route("/api/login").post(function (req, res) {
        db.Login.create({
            username: req.body.username,
            password: req.body.password
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });

///////////////////////////////////////////UPDATE ROUTES////////////////////////////////////////////////

    // UPDATE (update chore)
    router.route("/api/chores/:id").put(function (req, res) {
        db.Teambuilder.update({
            date_approved: NOW(),
            date_completed: NOW(), 
            admin_comments: req.body.admin_comments,
            child_comments: req.body.child_comments
        },{
          where: {
            id: req.params.id
          }
        })
          .then(function (dbNuggets) {
            res.json(dbNuggets);
          })
      });



///////////////////////////////////////////DELETE ROUTES////////////////////////////////////////////////

// DELETE (delete chore)
router.route("/api/chores/:id").delete(function (req, res) {
    db.Teambuilder.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbNuggets) {
        res.json(dbNuggets);
      })
  });


  module.exports = router;
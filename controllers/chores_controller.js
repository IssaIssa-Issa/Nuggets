var db = require("../models/index");
const router = require("express").Router()
///////////////////////////////////////////GET ROUTES////////////////////////////////////////////////
    // GET (show all transactions)
    router.route("/api/transaction/").get( function (req, res) {
        db.Transactions.findAll({})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });
    // GET (show all chores)
    router.route("/api/chores").get(function (req, res) {
        db.Chores.findAll({})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });
    // GET (show one)
    router.route("/api/chores/:chores_id").get(function (req, res) {
        db.Chores.findOne({where: {chores_id: req.params.chores_id}})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all goals)
    router.route("/api/goals").get(function (req, res) {
        db.Goals.findAll({})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });

    // GET (show all children)
    router.route("/api/children/").get(function (req, res) {
        db.Children.findAll({})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });
        // GET (show one)
        router.route("/api/children/:child_id").get(function (req, res) {
            db.Children.findOne({where: {child_id: req.params.child_id}})
                .then(function (dbNuggets) {
                    res.json(dbNuggets);
                })
        });
    // GET (show all admin)
    router.route("/api/admin/").get(function (req, res) {
        db.Admin.findAll({})
            .then(function (dbNuggets) {
                res.json(dbNuggets);
            })
    });
    // GET (show all login) 
    router.route("/api/login/").get(function (req, res) {
        db.Login.findAll({})
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
            chore_amount: req.body.chore_amount,
        })
            .then(function (dbNuggets) {
                res.send(dbNuggets);
            });
    });

    // POST (add goal)
    router.route("/api/goals/").post(function (req, res) {
        db.Goals.create({
            child_id: req.body.admin_id,
            goal_name: req.body.goal_name,
            goal_amount: req.body.goal_amount,
            goal_color: req.body.goal_color
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
            admin_comments: req.body.admin_comments,
            date: req.body.date
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
    router.route("/api/chores/:chores_id").put(function (req, res) {
        db.Chores.update({
            date_approved: req.body.date_approved,
            date_completed: req.body.date_completed,
            admin_comments: req.body.admin_comments,
            child_comments: req.body.child_comments
        },{
          where: {
            chores_id: req.params.chores_id
          }
        })
          .then(function (dbNuggets) {
            res.json(dbNuggets);
          })
      });
          // UPDATE (update chore)
    router.route("/api/chores/:child_id").put(function (req, res) {
        db.Children.update({
            balance: req.body.balance
        },{
          where: {
            child_id: req.params.child_id
          }
        })
          .then(function (dbNuggets) {
            res.json(dbNuggets);
          })
      });
///////////////////////////////////////////DELETE ROUTES////////////////////////////////////////////////
// DELETE (delete chore)
router.route("/api/chores/:chores_id").delete(function (req, res) {
    db.Chores.destroy({
      where: {
        chores_id: req.params.chores_id
      }
    })
      .then(function (dbNuggets) {
        res.json(dbNuggets);
      })
  });


// DELETE (delete goal)
router.route("/api/goals/:goal_id").delete(function (req, res) {
    db.Goals.destroy({
      where: {
        goal_id: req.params.goal_id
      }
    })
      .then(function (dbNuggets) {
        res.json(dbNuggets);
      })
  });


  // DELETE (delete transaction)
router.route("/api/transaction/:transaction_id").delete(function (req, res) {
    db.Transactions.destroy({
      where: {
        transaction_id: req.params.transaction_id
      }
    })
      .then(function (dbNuggets) {
        res.json(dbNuggets);
      })
  });
  module.exports = router;
// console.log("controller loaded")
var db = require("../models");

var express = require("express");

var router = express.Router();


console.log("controller loaded")

router.get("/", function(req, res) {

    console.log("route get")

    db.Burgerz.findAll({})
        .then(function(data) {
            var hdbrsObject = {
                burgers: data
            };
            console.log(hdbrsObject);
            res.render("index", hdbrsObject);

        });
});

router.get("/home", function(req, res) {

    console.log("route get home")

    db.Burgerz.findAll({})
        .then(function(data) {
            var hdbrsObject = {
                burgers: data
            };
            console.log(hdbrsObject);
            res.render("index", hdbrsObject);

        });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body)

    db.Burgerz.create({
            text: req.body.burgerName,
            complete: false,

        })
        .then(function(resBurger) {
            res.json(resBurger)

        })

    // burger.create(["burger_name", "devoured"],

    //     [req.body.burgerName, false],
    //     function(result) {

    //         res.json({ id: result.insertId });
    //     }

    // );



});

router.put("/api/burgers/:id", function(req, res) {

    db.Burgerz.update({
            complete: true,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(resBurger) {
            res.json(resBurger);
        })
        // console.log("router");
        // var condition = "id = " + req.params.id;

    // console.log("condition", condition);
    // console.log('!!!', req.body.devoured);


    // burger.update({ devoured: req.body.devoured }, condition, function(result) {
    //     if (result.changedRows == 0) {
    //         console.log('I am a 404 error')
    //         return res.status(404).end();

    //     } else {
    //         res.status(200).end();
    //     }

    // });
});

router.delete("/api/burgers/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    console.log("delete condition", req.params.id);

    db.Burgerz.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(resBurger) {

            res.json(resBurger);
        })

    // burger.delete(condition, function(result) {

    //     res.status(200).end();


    // });
});

module.exports = router;
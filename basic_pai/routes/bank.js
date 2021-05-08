var express = require("express");
var bank = require("../model/bank");
var validator = require("validator");

var router = express.Router();

// router get
router.get("/get", async function (req, res, next) {
  await bank
    .select()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//insert
router.post("/post-bank", async function (req, res, next) {
  let body = req.body;
  let validate =
    validator.isEmpty(body.ac) ||
    validator.isEmpty(body.bl);

  if (validate) return res.status(400).json("Invalid value");

  await bank
    .insert(body.ac, body.bl)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//update 
router.put("/put-bank", async function (req, res, next) {
    let body = req.body;
    let validate =
      validator.isEmpty(body.ac.toString()) ||
      validator.isEmpty(body.bl);
  
    if (validate) return res.status(400).json("Invalid value");
  
    await bank
      .update(body.bl,body.ac)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

  //delete 
router.delete("/delete-bank", async function (req, res, next) {
    let body = req.body;
    let validate =
      validator.isEmpty(body.ac.toString());
    if (validate) return res.status(400).json("Invalid value");
    await bank
      .delete(body.ac)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

module.exports = router;

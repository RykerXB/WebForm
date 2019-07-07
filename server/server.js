const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const custdataRoutes = express.Router();

let Custdata = require("./custdata.model");

app.use(cors());

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/custdata", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

custdataRoutes.route("/").get(function(req, res) {
  Custdata.find(function(err, custdata) {
    if (err) {
      console.log(err);
    } else {
      res.json(custdata);
    }
  });
});

custdataRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Custdata.findById(id, function(err, custdata) {
    res.json(custdata);
  });
});

custdataRoutes.route("/add").post(function(req, res) {
  let custdata = new Custdata(req.body);
  custdata
    .save()
    .then(custdata => {
      res.status(200).json({ custdata: "customer data added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new customer data failed");
    });
});

custdataRoutes.route("/update/:id").post(function(req, res) {
  Custdata.findById(req.params.id, function(err, custdata) {
    if (!custdata) res.status(404).send("data is not found");
    else custdata.customer_name = req.body.customer_name;
    custdata.customer_mobile = req.body.customer_mobile;
    custdata.amount = req.body.amount;
    custdata.purchased_online = req.body.purchased_online;

    custdata
      .save()
      .then(custdata => {
        res.json("Custdata updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use("/custdata", custdataRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Custdata = new Schema({
  customer_name: {
    type: String
  },
  customer_mobile: {
    type: String
  },
  amount: {
    type: String
  },
  purchased_online: {
    type: Boolean,
    default: "true"
  }
});

module.exports = mongoose.model("Custdata", Custdata);

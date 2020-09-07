const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EmailsSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  language:{
    type:String,
    default:"en"
  }
});
module.exports =Emails = mongoose.model("emails", EmailsSchema);
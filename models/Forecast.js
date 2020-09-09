const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ForecastSchema = new Schema({
    regionName: {
      type: String,
      required:true
    },
    date: {
      type: Date,
      default: Date.now
    },
    subRegionName:{
        type:String,
        required:true
    },

    spotName:{
      type:String,
      required:true
    },
    climacell:{
      type:Object,
      default:[] 
  }, 
});
module.exports = Forecast = mongoose.model("Forecast", ForecastSchema);

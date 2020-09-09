const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const request = require('request-promise');
require('dotenv').config();


const options = {
  method: 'GET',
  url: 'https://api.climacell.co/v3/weather/forecast/hourly',
  qs: {
    lat: '-61.9011977',
    lon: '47.3877013',
    unit_system: 'si',
    start_time: 'now',
    fields: 'wind_gust,wind_speed',
    apikey: process.env.climacell_key
  }
};

  

// Load Forecast Model
const Forecast = require("../../models/Forecast");
const mySpots= ["Étang","Gros-Cap"]

router.post('/climacell',(req, res)=>{
  const apiResults=[]
  Forecast.find({regionName:"IDM"})
  .then(forecast=>{
    // Gets all the spotNames needded in the region could fiffer depending on the user preferences..
    // This way it limts the amount of api calls
    var d = new Date();
    var hoursNow = d.getHours();
    forecast.map(spot=>{
        // Spots already exists on the database.. should be 99% of the time true
        // now verify the dates. we put an expiry date of one hour so the data is valid one hour.
        // This limits the calls to the weather forecasts api (The most expensive costs of the webapp)
        if (spot.date.getHours()==hoursNow) {
          //Query our Database Use the imported forecast info and push it to the array to return to front-end
          apiResults.push(spot)
        }
        else {
          // Query the weather api and update the in our Database
          request(options)
          .then( climacell=>{
            let json = JSON.parse(climacell);
            Forecast.findByIdAndUpdate(spot._id,{climacell:json,date:d})
            .then(newForecast=>apiResults.push(newForecast))
            .catch(err=>console.log(err))}
          )
          .catch(err=>console.log(err))
        }
    })
      if (apiResults.length==forecast.length){
        res.json(apiResults)
      }
        })
    .catch(err=>console.log(err))
     
  })
  
    

    // Create Spot
router.post('/newSpot',(req, res)=>{
    request(options)
    .then(body=>{
      if (error) throw new Error(error);
      let json = JSON.parse(body);
      const spot = new Forecast({
        regionName: "IDM",
        subRegionName:"Cap-Aux-Meules",
        spotName:mySpot,
        climacell:json    
      })
      spot.save().then(a=>console.log("spot created")).catch(err => console.log(err))
    })   
    .catch(err=>console.log(err))  
  })

module.exports = router;
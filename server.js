const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv= require('dotenv');
const mail = require("./routes/api/mail");
const blogs = require("./routes/api/blogs");
const forecastApi = require("./routes/api/forecastApi");
const path= require('path')
const sslRedirect = require('heroku-ssl-redirect');
require('dotenv').config();

app.use(sslRedirect());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db =  process.env.MONGODB_URI;



// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);



// Routes

app.use("/api/mail", mail);
app.use("/api/blogs", blogs);
app.use("/api/forecastApi", forecastApi);


//Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'))
  
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


  const port = process.env.PORT || 5000; // 3306 process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

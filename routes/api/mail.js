const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv= require('dotenv');
const zoho = require('@trifoia/zcrmsdk');
const config = require('../../resources/zoho.config');
// Bodyparser middleware
require('dotenv').config();

// Load User model
const Emails = require("../../models/Emails");

let transporter = nodemailer.createTransport({
    host: "mail.supremecluster.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@nemesisintelligence.com', // generated ethereal user
      pass: process.env.EMAIL_PWD // generated ethereal password
    }
  });





router.post('/contact',(req, sent)=>{
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
    let toEmail = (subject) => ({
        "general":"<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "scanning":"<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "prometheus": "<alexandre@nemesisintelligence.com>,<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "support": "<alexandre@nemesisintelligence.com>,<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "business":"<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "buying": "<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "career": "<jerome@nemesisintelligence.com>,<info@nemesisintelligence.com>",
        "api":"<alexandre@nemesisintelligence.com>,<info@nemesisintelligence.com>"
      })[subject]
   

    // send mail with defined transport object
    let info = transporter.sendMail({
    from: `NEMESIS ⛏ <info@nemesisintelligence.com>`, // sender address
    to: toEmail(req.body.subject), // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.subject, // plain text body
    html: `<div style='background-color:#ef3340; width:100%%'>
    <h2 style='color:white;font-family:sans-serif; padding-top:4px; padding-bottom:4px' align="center">//\\//\\//\\ NEMESIS</h2>
    </div>
    <h3 style='font-family:sans-serif'>You have received a message from website</h3>
    <p style='font-family:sans-serif'>From:  <b>${req.body.name}</b></p>
    <p style='font-family:sans-serif'>Email: <b>${req.body.email}</b></p>
    <p style='font-family:sans-serif'>Subject: <b>${req.body.subject}</b></p>
    <p style='font-family:sans-serif'>Company: <b>${req.body.company}</b></p>
    <p style='font-family:sans-serif'>Position: <b>${req.body.position}</b></p>
    <p style='font-family:sans-serif'>Message: <i>${req.body.comments} </i></p>` // html body
    });
    let toInfo = transporter.sendMail({
        from: "NEMESIS ⛏ <info@nemesisintelligence.com>", // sender address
        to: req.body.email, // list of receivers
        subject: "Thanks for contacting us", // Subject line
        text: req.body.subject, // plain text body
        html: `<div style='background-color:#ef3340; width:100%%'>
        <h2 style='color:white;font-family:sans-serif; padding-top:4px; padding-bottom:4px' align="center">//\\//\\//\\ NEMESIS</h2>
        </div>
        <h3 style='font-family:sans-serif'>Thanks ${req.body.name} for contacting us. You'll hear from us soon</h3>
        <p style='font-family:sans-serif'>Subject: <b>${req.body.subject}</b></p>
        <p style='font-family:sans-serif'>Company: <b>${req.body.company}</b></p>
    <p style='font-family:sans-serif'>Position: <b>${req.body.position}</b></p>
        <p style='font-family:sans-serif'>Message: <i>${req.body.comments} </i></p>` // html body
    }).then(e=>sent.json(e)).catch(err=>console.log(err))


    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", toInfo.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    const newEmail = new Emails({
        email:req.body.email,
        language:req.body.language
    })
    Emails.findOne({email:req.body.email})
        .then(res=>{
            console.log(res)
            if(!res){
                newEmail.save().then(e=>console.log(e)).catch(err=>console.log(err))
                var input = {};
                var jsonData = JSON.parse(`{ "data": [ { "First_Name": "NEWSLETTER_${req.body.language.toUpperCase()}", "Last_Name": "${req.body.name}","Email":"${req.body.email}","Company":"${req.body.company}", "Description":"${req.body.position}" }]}`);
                input.module = 'Contacts';
                input.body = jsonData;
                //input.duplicateCheck=1
                zoho.initialize(config).then((client) => {
                    client.API.MODULES.post(input).then((response) => {
                        var result=JSON.parse(response.body) 
                        var id=result.data[0].details.id;
                        console.log(id) }).catch(err=>console.log(err));})
            }
            else {
                console.log("Already Registered")
            }})


    })

router.post('/unsubscribe',(req,res)=>{
    Emails.findOneAndDelete({email:req.body.email}).then(r=>res.json(r)).catch(e=>console.log(e))

})

router.post('/newsletter',(req, sent)=>{
    
        // Generate test SMTP service account from ethereal.email
        const newEmail = new Emails({
            email:req.body.email,
            language:req.body.language
        })
        Emails.findOne({email:req.body.email})
        .then(res=>{
            console.log(res)
            if(!res){
                var input = {};
                var jsonData = JSON.parse(`{ "data": [ { "First_Name": "NEWSLETTER_${req.body.language.toUpperCase()}", "Last_Name": "SUBSCRIBER","Email":"${req.body.email}"  }]}`);
                input.module = 'Contacts';
                input.body = jsonData;
                //input.duplicateCheck=1
                zoho.initialize(config).then((client) => {
                    client.API.MODULES.post(input).then((response) => {
                        var result=JSON.parse(response.body) 
                        var id=result.data[0].details.id;
                        console.log(response.body)
                    }).catch(err=>console.log(err));})

                newEmail
                .save()
                .then(e=>{
                    transporter.sendMail({
                        from: `NEMESIS ⛏ <info@nemesisintelligence.com>`, // sender address
                        to: "<info@nemesisintelligence.com>,<jeanb@nemesisintelligence.com>", // list of receivers
                        subject: "NEW SUBSCRIBER", // Subject line
                        text: req.body.email, // plain text body
                        html: `<div style='background-color:#ef3340; width:100%%'>
                        <h2 style='color:white;font-family:sans-serif; padding-top:4px; padding-bottom:4px' align="center">//\\//\\//\\ NEMESIS</h2>
                        </div>
                        <h3 style='font-family:sans-serif'>You have a new subscriber</h3>
                        <p style='font-family:sans-serif'>Email: <b>${req.body.email}</b></p>` // html body
                        }).then(e=>console.log(e)).catch(err=>console.log(err))
                    transporter.sendMail({
                        from: "NEMESIS ⛏ <info@nemesisintelligence.com>", // sender address
                        to: req.body.email, // list of receivers
                        subject: "Thanks for subscribing", // Subject line
                        text: "Nemesis News Letter", // plain text body
                        html: `<div style='background-color:#ef3340; width:100%%'>
                        <h2 style='color:white;font-family:sans-serif; padding-top:4px; padding-bottom:4px' align="center">//\\//\\//\\ NEMESIS</h2>
                        </div>
                        <h3 style='font-family:sans-serif'>Thanks for subscribing to Nemesis Newsletter</h3>`
                        }).then(e=>console.log(e)).catch(err=>console.log(err))
                    sent.json(e)
            })}
            else {
                console.log('Already In Database Mothafucker')
                sent.json({error:"already in data base"})
            }
        }).catch(err=>console.log(err))
        })
module.exports = router;
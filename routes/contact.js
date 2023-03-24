const app = (module.exports = require('express')())
const sendMail = require('../auth/email')
app.get('/', (req, res) => {
    res.render('../views/pages/contact.ejs')
}).post('/', (req, res) => {
    let receipentEmail = 'junkiri271@gmail.com'

    let subject = "Query Received"
    let descriptionWithHtml = ` <div style="height: 100%; background-color: azure; border: 5px solid grey; border-radius: 5px; padding: 2%; margin: 2%;">
    <div  style="height: 25px; background-color: rgb(81, 81, 81); font-weight: bold; color: whitesmoke; padding: 2%;"> Hello ${req.body.fullname}</div>
    <div style="margin-top: 2%;"> We have received your query, We will get back to you shortly </div>
    <div style="margin-top: 1%;"> Kind regards, </div>
    <div style="margin-top: 1%;"> Delta solution </div>
</div>`

    let descriptionWithHtmlForAdmin = ` <div style="height: 100%; background-color: azure; border: 5px solid grey; border-radius: 5px; padding: 2%; margin: 2%;">
<div  style="height: 25px; background-color: rgb(81, 81, 81); font-weight: bold; color: whitesmoke; padding: 2%;"> Email from ${req.body.fullname}</div>
<div style="margin-top: 2%;"> Email:  ${req.body.email} </div>
<div style="margin-top: 1%;"> Message:  ${req.body.message}  </div>
</div>`



    console.log(sendMail.sendEmail(receipentEmail, subject, descriptionWithHtmlForAdmin))
    console.log(sendMail.sendEmail(req.body.email, subject, descriptionWithHtml))



    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify(
            {
                success: true,
                msg: "Email send successfully",

            },
            null,
            3
        )
    );
})
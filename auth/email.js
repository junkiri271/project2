var nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = {


    async sendEmail(receipentEmail, Subject, descriptionWithHtml) {

        let transporter = nodemailer.createTransport({
           
            host: 'mail.privateemail.com',
            secure: false,
            port:587,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.EMAIL_PASSWORD
            }
        })


        try {
            let responeFromEmail = await transporter.sendMail({
                from: process.env.EMAIL_SENDER,
                to: receipentEmail,
                subject: Subject,
                html: descriptionWithHtml
            })
            console.log(responeFromEmail)
            return true
        } catch (err) {
            console.log(err)
           
            return false
        }
    }
}
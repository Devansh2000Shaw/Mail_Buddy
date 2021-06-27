let Nodemailer = require('nodemailer');
var cron = require('node-cron');

// Email Message options
const mailOptions = {
    from: "akashshaw8783@gmail.com",
    to: "khushi.roy005@gmail.com",
    subject: "Testing Email",
    text: "Hi, This is Devansh Shaw."
};

// Email transport configuration

const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
        users: "akashshaw8783@gmail.com",
        pass: "Deva@2000"
    },
    tls: {
        rejectUnauthorized: false
      }
});

// send Email

cron.schedule('* * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
        }
        else{
            console.log('Email send: ' + info.response);
        }
    });
});
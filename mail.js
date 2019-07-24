const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN_NAME
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, callback) => {
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Message from ${name} (abdulmujeeb.com)`,
    text: message
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = sendMail;

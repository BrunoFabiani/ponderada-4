const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  inputs: {
    emailAddress: {
      type: 'string'
    },
    emailSubject: {
      type: 'string'
    },
    emailBody: {
      type: 'string'
    }
  },
  exits: {
    success: {
      description: 'The message was sent successfully.'
    },
    userNotFound: {
      description: 'The user was not found, check if the e-mail is correct.',
    }
  },
  fn: async function({ emailAddress, emailSubject, emailBody }) {

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'abandono.zero@outlook.com',
        pass: 'InT3l1@2024'
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });
    
    const info = await transporter.sendMail({
      from: `"Abandono Zero" <abandono.zero@outlook.com>`,
      to: emailAddress,
      subject: emailSubject,
      text: emailBody,
      html: emailBody,
    });
    
    return info;
  }
};

require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const body = JSON.parse(event.body);
  const mail = {
    from: process.env.SEND_CONTACT_FORM_EMAIL_FROM,
    to: process.env.SEND_CONTACT_FORM_EMAIL_TO,
    subject: `New Message from ${body.name || 'Portfolio Contact Form'}`,
    text: `
      name: ${body.name} \n
      email: ${body.email} \n
      message: ${body.message}
    `,
  };

  const transport = nodemailer.createTransport(JSON.parse(process.env.SMTP_TRANSPORT_CONFIG));

  const result = await transport.sendMail(mail);
  transport.close();
  if (result.messageId) return { statusCode: 200 };
  return { statusCode: 500 };
};

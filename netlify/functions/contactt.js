// netlify/functions/contact.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Ограничим только POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  const { name, email, subject, message } = data;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Заполните имя, email и сообщение.' }),
    };
  }

  // Настраиваем transporter, читаем переменные из env (их зададим на Netlify)
  const port = Number(process.env.SMTP_PORT) || 587;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // 465 — secure, 587 — нет
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site contact form" <${process.env.SMTP_USER}>`,
      to: process.env.TARGET_EMAIL || process.env.SMTP_USER,
      subject: subject || 'Новое сообщение с сайта',
      text: `
Имя: ${name}
Email: ${email}

Сообщение:
${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Ошибка отправки письма:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Не удалось отправить письмо.' }),
    };
  }
};

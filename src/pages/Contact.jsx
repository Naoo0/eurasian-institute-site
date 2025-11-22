// src/pages/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const cardVariants = {};
const socialLinkVariants = {};
const formVariants = {};
const formItemVariants = {};

const Contact = () => {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/.netlify/functions/contactt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Ошибка ответа сервера");
      }

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="contact-header">
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда готовы ответить на ваши вопросы и обсудить сотрудничество.</p>
      </header>

      {/* Основная контактная информация */}
      <section className="contact-info">
        <motion.div className="contact-card" variants={cardVariants}>
          <h2>📞 Телефон</h2>
          <p><a href="tel:+70001234567">+7 (000) 123-45-67</a></p>
        </motion.div>
        <motion.div className="contact-card" variants={cardVariants}>
          <h2>📧 Электронная почта</h2>
          <p><a href="mailto:info@eurasian.institute">info@eurasian.institute</a></p>
        </motion.div>
        <motion.div className="contact-card" variants={cardVariants}>
          <h2>📍 Адрес</h2>
          <p>г. Город, ул. Университетская, д. 1, офис 101</p>
        </motion.div>
      </section>

      {/* Форма обратной связи */}
      <motion.section
        className="contact-form-section"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Отправить сообщение</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
            variants={formItemVariants}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Ваш Email"
            required
            variants={formItemVariants}
          />
          <motion.input
            type="text"
            name="subject"
            placeholder="Тема (необязательно)"
            variants={formItemVariants}
          />
          <motion.textarea
            name="message"
            placeholder="Ваше сообщение"
            rows={5}
            required
            variants={formItemVariants}
          />
          <motion.button
            type="submit"
            variants={formItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Отправка..." : "Отправить"}
          </motion.button>
        </form>

        {status === "success" && (
          <p className="form-status success">Сообщение отправлено!</p>
        )}
        {status === "error" && (
          <p className="form-status error">
            Ошибка при отправке. Попробуйте позже.
          </p>
        )}
      </motion.section>
    </motion.div>
  );
};

export default Contact;

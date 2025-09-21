// src/pages/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css"; // Подключаем наши стили

const Contact = () => {
  // Убрали i18next, вставили текст напрямую

  // Анимации оставляем, они красивые
  const cardVariants = { /* ... */ };
  const socialLinkVariants = { /* ... */ };
  const formVariants = { /* ... */ };
  const formItemVariants = { /* ... */ };

  return (
    <motion.div
      className="page-container" // Используем наш общий класс для отступов
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
        <form className="contact-form">
          <motion.input 
            type="text" 
            placeholder="Ваше имя" 
            required
            variants={formItemVariants}
          />
          <motion.input 
            type="email" 
            placeholder="Ваш Email" 
            required
            variants={formItemVariants}
          />
          <motion.textarea 
            placeholder="Ваше сообщение" 
            required
            variants={formItemVariants}
          ></motion.textarea>
          <motion.button 
            type="submit"
            variants={formItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Отправить
          </motion.button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
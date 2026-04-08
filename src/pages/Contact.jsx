import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const cardVariants = {};
const socialLinkVariants = {};
const formVariants = {};
const formItemVariants = {};

const Contact = ({ lang = "ru" }) => {
  const [status, setStatus] = useState(null);

  const translations = {
    ru: {
      title: "Свяжитесь с нами",
      subtitle: "Мы всегда готовы ответить на ваши вопросы и обсудить сотрудничество.",
      phoneTitle: "📞 Телефон",
      emailTitle: "📧 Электронная почта",
      addressTitle: "📍 Адрес",
      formTitle: "Отправить сообщение",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш Email",
      subjectPlaceholder: "Тема (необязательно)",
      messagePlaceholder: "Ваше сообщение",
      sending: "Отправка...",
      send: "Отправить",
      success: "Сообщение отправлено!",
      error: "Ошибка при отправке. Попробуйте позже.",
    },
    kz: {
      title: "Бізбен байланысыңыз",
      subtitle: "Біз сіздің сұрақтарыңызға жауап беруге және ынтымақтастықты талқылауға әрқашан дайынбыз.",
      phoneTitle: "📞 Телефон",
      emailTitle: "📧 Электрондық пошта",
      addressTitle: "📍 Мекенжай",
      formTitle: "Хабарлама жіберу",
      namePlaceholder: "Атыңыз",
      emailPlaceholder: "Email мекенжайыңыз",
      subjectPlaceholder: "Тақырып (міндетті емес)",
      messagePlaceholder: "Сіздің хабарламаңыз",
      sending: "Жіберілуде...",
      send: "Жіберу",
      success: "Хабарлама жіберілді!",
      error: "Жіберу кезінде қате шықты. Кейінірек қайталап көріңіз.",
    },
    en: {
      title: "Contact Us",
      subtitle: "We are always ready to answer your questions and discuss cooperation.",
      phoneTitle: "📞 Phone",
      emailTitle: "📧 Email",
      addressTitle: "📍 Address",
      formTitle: "Send a Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject (optional)",
      messagePlaceholder: "Your message",
      sending: "Sending...",
      send: "Send",
      success: "Message sent!",
      error: "An error occurred while sending. Please try again later.",
    },
  };

  const t = translations[lang] || translations.ru;

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
        throw new Error("Server response error");
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
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="contact-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <section className="contact-info">
        <motion.div className="contact-card" variants={cardVariants}>
          <h2>{t.phoneTitle}</h2>
          <p>
            <a href="tel:+77711777713">+7 771 177 7713</a>
          </p>
        </motion.div>

        <motion.div className="contact-card" variants={cardVariants}>
          <h2>{t.emailTitle}</h2>
          <p>
            <a href="mailto:info@eurasian.institute">info@eurasian.institute</a>
          </p>
        </motion.div>

        <motion.div className="contact-card" variants={cardVariants}>
          <h2>{t.addressTitle}</h2>
          <p>61/1 Markov st., Bostandyk dis., Almaty</p>
        </motion.div>
      </section>

      <motion.section
        className="contact-form-section"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>{t.formTitle}</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            required
            variants={formItemVariants}
          />

          <motion.input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            required
            variants={formItemVariants}
          />

          <motion.input
            type="text"
            name="subject"
            placeholder={t.subjectPlaceholder}
            variants={formItemVariants}
          />

          <motion.textarea
            name="message"
            placeholder={t.messagePlaceholder}
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
            {status === "sending" ? t.sending : t.send}
          </motion.button>
        </form>

        {status === "success" && (
          <p className="form-status success">{t.success}</p>
        )}

        {status === "error" && (
          <p className="form-status error">{t.error}</p>
        )}
      </motion.section>
    </motion.div>
  );
};

export default Contact;
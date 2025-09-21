// src/components/SubscribeModal.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SubscribeModal.css';

// Компонент принимает два пропса:
// isOpen - булево значение, которое говорит, открыто ли окно
// onClose - функция, которая будет вызвана для закрытия окна
const SubscribeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-50px", opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие по клику внутри окна
          >
            <button className="close-button" onClick={onClose}>×</button>
            <h3>Подпишитесь на нашу рассылку</h3>
            <p>Получайте последние новости, статьи и анонсы мероприятий прямо на вашу почту.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Введите ваш email" required />
              <button type="submit">Подписаться</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
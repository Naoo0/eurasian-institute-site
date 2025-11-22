// src/components/Header.jsx

import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import "../styles/Header.css";
import SubscribeModal from './SubscribeModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-top">

          {/* Левая часть (поиск) */}
          <div className="header-left">
            <input type="text" placeholder="Поиск" className="search-input" />
          </div>

          {/* Центральная часть (логотип + название) */}
          <div className="header-center">
            <Link to="/" className="logo-link">
              <img
                src={logoImage}
                alt="Логотип Eurasian Institute"
                className="logo-image"
              />
            </Link>
            <h2 className="header-title">
              Eurasian Institute for Interdisciplinary Studies
            </h2>
          </div>

          {/* Правая часть (кнопки и соцсети) */}
          <div className="header-right">
            <div className="actions">
              <button className="btn">Вход/Регистрация</button>
              <button
                className="btn btn-yellow"
                onClick={() => setIsModalOpen(true)}
              >
                Подписаться
              </button>
            </div>
            <div className="socials">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
          </div>

        </div>
      </header>

      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Header;

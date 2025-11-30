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

          {/* Левая часть: только логотип */}
          <div className="header-left">
            <Link to="/" className="logo-link">
              <img
                src={logoImage}
                alt="Логотип Eurasian Institute"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Центральная часть: большая надпись */}
          <div className="header-center">
            <h1 className="header-title">
              Eurasian Institute for Interdisciplinary Studies
            </h1>
          </div>

          {/* Правая часть: кнопка и соцсети */}
          <div className="header-right">
            <div className="actions">
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

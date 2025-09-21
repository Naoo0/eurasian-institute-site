// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Убедись, что путь к стилям правильный

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about">О нас</Link></li>
        {/* ВОТ НУЖНАЯ ССЫЛКА */}
        <li><Link to="/projects">Исследования и проекты</Link></li>
        {/* ^^^^^^^^^^^^^^^^^^^^
           `to="/projects"` здесь должно точно совпадать с `path="/projects"` в App.jsx
        */}
        <li><Link to="/team">Команда</Link></li>
        <li><Link to="/news">Новости и события</Link></li>
        <li><Link to="/publications">Публикации</Link></li>
        <li><Link to="/partnership">Партнёрство и сотрудничество</Link></li>
        <li><Link to="/careers">Карьера и вакансии</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
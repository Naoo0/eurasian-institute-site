import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ lang = "ru" }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, lang]);

  const translations = {
    ru: {
      about: "О нас",
      projects: "Исследования и проекты",
      team: "Исследовательская группа",
      news: "Новости и события",
      partnership: "Партнёрство и сотрудничество",
      contacts: "Контакты",
      menu: "Меню",
    },
    kz: {
      about: "Біз туралы",
      projects: "Зерттеулер мен жобалар",
      team: "Зерттеу тобы",
      news: "Жаңалықтар мен оқиғалар",
      partnership: "Серіктестік және ынтымақтастық",
      contacts: "Байланыс",
      menu: "Мәзір",
    },
    en: {
      about: "About us",
      projects: "Research and Projects",
      team: "Research Team",
      news: "News and Events",
      partnership: "Partnership and Cooperation",
      contacts: "Contacts",
      menu: "Menu",
    },
  };

  const t = translations[lang] || translations.ru;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button
          className={`navbar-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label={t.menu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-list ${isOpen ? "is-open" : ""}`}>
          <li><Link to="/about">{t.about}</Link></li>
          <li><Link to="/projects">{t.projects}</Link></li>
          <li><Link to="/team">{t.team}</Link></li>
          <li><Link to="/news">{t.news}</Link></li>
          <li><Link to="/partnership">{t.partnership}</Link></li>
          <li><Link to="/contacts">{t.contacts}</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
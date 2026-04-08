import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ lang = "ru" }) {
  const translations = {
    ru: {
      about: "О нас",
      projects: "Исследования и проекты",
      team: "Исследовательская группа",
      news: "Новости и события",
      partnership: "Партнёрство и сотрудничество",
      contacts: "Контакты",
    },
    kz: {
      about: "Біз туралы",
      projects: "Зерттеулер мен жобалар",
      team: "Зерттеу тобы",
      news: "Жаңалықтар мен оқиғалар",
      partnership: "Серіктестік және ынтымақтастық",
      contacts: "Байланыс",
    },
    en: {
      about: "About us",
      projects: "Research and Projects",
      team: "Research Team",
      news: "News and Events",
      partnership: "Partnership and Cooperation",
      contacts: "Contacts",
    },
  };

  const t = translations[lang] || translations.ru;

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about">{t.about}</Link></li>
        <li><Link to="/projects">{t.projects}</Link></li>
        <li><Link to="/team">{t.team}</Link></li>
        <li><Link to="/news">{t.news}</Link></li>
        <li><Link to="/partnership">{t.partnership}</Link></li>
        <li><Link to="/contacts">{t.contacts}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
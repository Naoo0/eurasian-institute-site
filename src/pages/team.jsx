// src/pages/Team.jsx

import { FaLandmark, FaRegSmile, FaVolleyballBall, FaLeaf } from 'react-icons/fa';
import '../styles/Team.css';
import TeamMemberCard from '../components/TeamMemberCard'; // <-- Импортируем нашу карточку
import placeholderImage from '../assets/placeholder.png'; // <-- Используем заглушку для фото

// Создадим массив с данными учёных для примера
const teamData = [
  {
    id: 1,
    name: 'Профессор Иван Иванов',
    position: 'Ведущий научный сотрудник',
    degree: 'Доктор физико-математических наук',
    photo: placeholderImage,
    bio: 'Окончил МГУ в 2005 году. Специализируется на квантовой механике и теоретической физике. Автор более 50 научных работ.',
    interests: 'Квантовые вычисления, теория струн, космология.',
    publications: [
      { title: 'Исследование бозона Хиггса', url: '#' },
      { title: 'Новые подходы к теории гравитации', url: '#' },
    ],
    email: 'ivanov.i@eurasian.institute',
    profiles: [
      { name: 'Google Scholar', url: '#' },
      { name: 'ORCID', url: '#' },
    ]
  },
  {
    id: 2,
    name: 'Доцент Мария Петрова',
    position: 'Старший научный сотрудник',
    degree: 'Кандидат исторических наук',
    photo: placeholderImage,
    bio: 'Специалист по истории Центральной Азии. Работала в ведущих архивах региона. Участник международных конференций.',
    interests: 'Этнография, политическая история, культурное наследие.',
    publications: [
      { title: 'Социальные трансформации в XX веке', url: '#' },
      { title: 'Культурное взаимодействие кочевых народов', url: '#' },
    ],
    email: 'petrova.m@eurasian.institute',
    profiles: [
      { name: 'ResearchGate', url: '#' },
    ]
  },
];

function Team() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>КОМАНДА</h1>
      </header>

      {/* --- Секция с карточками сотрудников --- */}
      <section className="team-grid">
        {teamData.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>

      <hr className="divider" />

      {/* --- Секция "Категории" остается без изменений --- */}
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
           <a href="#" className="category-card">
            <div className="card-icon"><FaLandmark /></div>
            <span className="card-label">Politics Zoom</span>
          </a>
          <a href="#" className="category-card">
            <div className="card-icon"><strong>+1</strong></div>
            <span className="card-label">Daily Minute</span>
          </a>
          <a href="#" className="category-card">
            <div className="card-icon"><FaRegSmile /></div>
            <span className="card-label">Funny Stories</span>
          </a>
          <a href="#" className="category-card">
            <div className="card-icon"><FaVolleyballBall /></div>
            <span className="card-label">Sports Time</span>
          </a>
          <a href="#" className="category-card">
            <div className="card-icon"><FaLeaf /></div>
            <span className="card-label">Mindfulness</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Team;
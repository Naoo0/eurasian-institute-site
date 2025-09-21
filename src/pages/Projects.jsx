// src/pages/Projects.jsx

import "../styles/Projects.css";
import placeholderImage from '../assets/placeholder.png';

const Projects = () => {
  // Данные остаются теми же
  const projects = [
    {
      title: 'Внедрение SIEM-системы',
      description: 'Комплексный мониторинг безопасности для крупного финансового холдинга.',
      image: placeholderImage,
      link: "#",
      category: 'SIEM'
    },
    {
      title: 'Тест на проникновение',
      description: 'Анализ защищенности веб-приложений для банковского сектора.',
      image: placeholderImage,
      link: "#",
      category: 'Пентест'
    },
    {
      title: 'Корпоративное обучение',
      description: 'Повышение осведомленности сотрудников в области кибербезопасности.',
      image: placeholderImage,
      link: "#",
      category: 'Обучение'
    },
  ];

  const testimonials = [
    {
      name: 'Иван Петров, Технический директор',
      feedback: 'Профессиональный подход и глубокая экспертиза помогли нам выявить критические уязвимости.',
      avatar: placeholderImage
    },
    {
      name: 'Елена Сидорова, Руководитель IT-отдела',
      feedback: 'Благодаря внедренной системе мониторинга мы смогли предотвратить несколько серьезных инцидентов.',
      avatar: placeholderImage
    },
  ];

  // Мы просто возвращаем HTML без <motion.div> оберток
  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="hero-content">
          <h1>Наши Проекты</h1>
          <p className="subtitle">Мы решаем сложные задачи в области кибербезопасности</p>
        </div>
      </header>

      <section className="projects-section">
        <div className="section-header">
          <h2>Кейсы</h2>
          <p>Примеры наших успешных проектов</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  Подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>Отзывы клиентов</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="feedback">"{testimonial.feedback}"</p>
                <p className="author">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
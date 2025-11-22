// src/pages/Projects.jsx

import "../styles/Projects.css";
import placeholderImage from '../assets/placeholder.png';

const Projects = () => {
  // Кейсы под сайт университета
  const projects = [
    {
      title: 'Цифровой кампус университета',
      description:
        'Разработка единого онлайн-кабинета студента: расписание, успеваемость, доступ к учебным материалам и заявкам в деканат в одном интерфейсе.',
      image: placeholderImage,
      link: "#",
      category: 'Цифровизация'
    },
    {
      title: 'Учебная лаборатория кибербезопасности',
      description:
        'Создание практико-ориентированной лаборатории: виртуальные стенды, тестовые сети, тренажёры инцидентов и учебные стендовые задания для студентов.',
      image: placeholderImage,
      link: "#",
      category: 'Кибербезопасность'
    },
    {
      title: 'Программа развития цифровых компетенций',
      description:
        'Обновление курсов по информатике и ИКТ, внедрение модулей по работе с данными, онлайн-сервисами и безопасностью в сети для студентов колледжа и вуза.',
      image: placeholderImage,
      link: "#",
      category: 'Образовательные проекты'
    },
  ];

  const testimonials = [
    {
      name: 'Алия К., студентка 3 курса',
      feedback:
        'Новый цифровой кабинет упростил доступ к расписанию и материалам. Практические занятия в лаборатории кибербезопасности помогают готовиться к реальной работе.',
      avatar: placeholderImage
    },
    {
      name: 'Рустем Т., преподаватель информатики',
      feedback:
        'Благодаря обновлённым учебным программам и цифровым сервисам мы можем больше внимания уделять практике и развитию цифровых навыков студентов.',
      avatar: placeholderImage
    },
  ];

  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="hero-content">
          <h1>Наши проекты</h1>
          <p className="subtitle">
            Инициативы университета по развитию цифровой среды и образования
          </p>
        </div>
      </header>

      <section className="projects-section">
        <div className="section-header">
          <h2>Кейсы</h2>
          <p>Ключевые проекты по цифровизации и модернизации обучения</p>
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
          <h2>Отзывы</h2>
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

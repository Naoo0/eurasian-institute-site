// src/components/TeamMemberCard.jsx
import { FaEnvelope, FaLink } from 'react-icons/fa';
import '../styles/Team.css'; // Мы будем использовать тот же файл стилей

function TeamMemberCard({ member }) {
  return (
    <div className="team-member-card">
      <div className="team-member-photo">
        <img src={member.photo} alt={member.name} />
      </div>
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p className="position">{member.position} | {member.degree}</p>
        
        <div className="info-block">
          <h4>Биография</h4>
          <p>{member.bio}</p>
        </div>

        <div className="info-block">
          <h4>Научные интересы</h4>
          <p>{member.interests}</p>
        </div>

        <div className="info-block">
          <h4>Основные публикации</h4>
          <ul className="publications-list">
            {member.publications.map((pub, index) => (
              <li key={index}><a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.title}</a></li>
            ))}
          </ul>
        </div>

        <div className="info-block contacts">
          {member.email && <a href={`mailto:${member.email}`} className="contact-link"><FaEnvelope /> Контактная почта</a>}
          {member.profiles.map((profile, index) => (
             <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="contact-link"><FaLink /> {profile.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
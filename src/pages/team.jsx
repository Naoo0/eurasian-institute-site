import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import '../styles/Team.css';
import TeamMemberCard from '../components/TeamMemberCard';

const getLocalizedValue = (field, lang = 'ru') => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.ru || field.kz || field.en || '';
};

function Team({ lang = 'ru' }) {
  const [members, setMembers] = useState([]);

  const translations = {
    ru: {
      title: 'Исследовательская группа',
    },
    kz: {
      title: 'Зерттеу тобы',
    },
    en: {
      title: 'Research Team',
    },
  };

  const t = translations[lang] || translations.ru;

  useEffect(() => {
    client
      .fetch(
        `*[_type == "teamMember"] | order(order asc){
          _id,
          name,
          position,
          degree,
          photo,
          bio,
          interests,
          scopusId,
          orcidId,
          hIndex
        }`
      )
      .then(setMembers)
      .catch(console.error);
  }, []);

  if (!members.length) {
    return null;
  }

  return (
    <div className="team-page">
      <header className="team-page-header">
        <h1>{t.title}</h1>
      </header>

      <section className="team-grid">
        {members.map((m) => (
          <TeamMemberCard
            key={m._id}
            member={{
              ...m,
              position: getLocalizedValue(m.position, lang),
              degree: getLocalizedValue(m.degree, lang),
              bio: getLocalizedValue(m.bio, lang),
              interests: getLocalizedValue(m.interests, lang),
              photo: m.photo ? urlFor(m.photo).width(500).height(500).url() : null,
            }}
            lang={lang}
          />
        ))}
      </section>
    </div>
  );
}

export default Team;
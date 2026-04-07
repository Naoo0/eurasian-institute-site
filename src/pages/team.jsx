// src/pages/Team.jsx
import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import '../styles/Team.css';
import TeamMemberCard from '../components/TeamMemberCard';

function Team() {
  const [members, setMembers] = useState([]);

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
    return null; // или "Загрузка..."
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Исследовательская группа</h1>
      </header>

      <section className="team-grid">
        {members.map((m) => (
          <TeamMemberCard
            key={m._id}
            member={{
              ...m,
              photo: m.photo ? urlFor(m.photo).width(500).height(500).url() : null,
            }}
          />
        ))}
      </section>
    </div>
  );
}

export default Team;

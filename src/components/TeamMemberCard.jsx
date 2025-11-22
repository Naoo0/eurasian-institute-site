// src/components/TeamMemberCard.jsx
import { FaEnvelope, FaLink } from 'react-icons/fa';
import '../styles/Team.css';

function TeamMemberCard({ member }) {
  const hasPublications = member.publications && member.publications.length > 0;
  const hasProfiles = member.profiles && member.profiles.length > 0;

  const hasMetrics =
    member.scopusId ||
    member.scopusProfileUrl ||
    member.orcidId ||
    member.orcidProfileUrl ||
    member.researcherId ||
    member.researcherProfileUrl ||
    member.hIndex;

  return (
    <div className="team-member-card">
      <div className="team-member-photo">
        <img src={member.photo} alt={member.name} />
      </div>

      <div className="team-member-info">
        <h3>{member.name}</h3>

        {(member.position || member.degree) && (
          <p className="position">
            {member.position}
            {member.position && member.degree ? ' | ' : ''}
            {member.degree}
          </p>
        )}

        {member.bio && (
          <div className="info-block">
            <h4>Биография</h4>
            <p>{member.bio}</p>
          </div>
        )}

        {member.interests && (
          <div className="info-block">
            <h4>Научные интересы</h4>
            <p>{member.interests}</p>
          </div>
        )}

        {hasMetrics && (
          <div className="info-block">
            <h4>Идентификаторы и метрики</h4>
            <ul className="metrics-list">
              {member.scopusId && (
                <li>
                  Scopus Author ID:{' '}
                  {member.scopusProfileUrl ? (
                    <a
                      href={member.scopusProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.scopusId}
                    </a>
                  ) : (
                    member.scopusId
                  )}
                </li>
              )}

              {member.orcidId && (
                <li>
                  ORCID:{' '}
                  {member.orcidProfileUrl ? (
                    <a
                      href={member.orcidProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.orcidId}
                    </a>
                  ) : (
                    member.orcidId
                  )}
                </li>
              )}

              {member.researcherId && (
                <li>
                  Researcher ID:{' '}
                  {member.researcherProfileUrl ? (
                    <a
                      href={member.researcherProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.researcherId}
                    </a>
                  ) : (
                    member.researcherId
                  )}
                </li>
              )}

              {member.hIndex && (
                <li>
                  H-index: {member.hIndex}
                </li>
              )}
            </ul>
          </div>
        )}

        {hasPublications && (
          <div className="info-block">
            <h4>Основные публикации</h4>
            <ul className="publications-list">
              {member.publications.map((pub, index) => (
                <li key={index}>
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="info-block contacts">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="contact-link"
            >
              <FaEnvelope /> Контактная почта
            </a>
          )}

          {hasProfiles &&
            member.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLink /> {profile.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;

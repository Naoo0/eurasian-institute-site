// src/pages/Team.jsx

import { FaLandmark, FaRegSmile, FaVolleyballBall, FaLeaf } from 'react-icons/fa';
import '../styles/Team.css';
import TeamMemberCard from '../components/TeamMemberCard';
import placeholderImage from '../assets/placeholder.png';

// Фото участников
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import photo4 from '../assets/4.png';
import photo5 from '../assets/5.png';
import photo6 from '../assets/6.png';
import photo7 from '../assets/7.png';
import photo8 from '../assets/8.png';
import photo9 from '../assets/9.png';
import photo10 from '../assets/10.png';
import photo11 from '../assets/11.png';
import photo12 from '../assets/12.png';
import photo13 from '../assets/13.png';
import photo14 from '../assets/14.png';
import photo15 from '../assets/15.png';
import photo16 from '../assets/16.png';
import photo17 from '../assets/17.png';
import photo18 from '../assets/18.png';
import photo19 from '../assets/19.png';

// Все исследователи / сотрудники из списка
const teamData = [
  {
    id: 1,
    name: 'Danyar Kaldiyarov',
    position: 'Professor',
    degree: 'PhD in Economics',
    photo: photo1, // 1.png
    bio: 'He has led research projects funded by grants and participated in Kazakhstani and international research projects. He is the author of over 200 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Economics of the Agro-Industrial Complex, Food Security, Regional Economic Management, Analysis and Evaluation of investment projects, Investment Attractiveness, Planning and Management in Higher and Postgraduate Education.',
    scopusId: '56127906700',
    orcidId: '0000-0002-0181-2962',
    hIndex: 6,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 2,
    name: 'MANSUROVA TALIFA MARATOVNA',
    position: 'Director of Eurasian Institute of Interdisciplinary Studies',
    degree: 'Master of Humanitarian Studies',
    photo: placeholderImage, // без фото
    bio: 'PhD candidate of English Language and Literature Department at Karabuk University, participated in international conferences and was an editor of several materials written in English. She has coordinated International Relations in Egyptian University of Islamic Culture Nur-Mubarak and was a member of the ERASMUS Office at Karabuk University.',
    interests:
      'Translation Studies, Psychology, Pedagogical Sciences, Contemporary Literature, Comparative Literature.',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 3,
    name: 'Nurmuhanqyzy Daniya',
    position: 'Associate Professor',
    degree: 'PhD in Law',
    photo: photo2, // 2.png
    bio: 'She is a participant and executor of Kazakhstani and international scientific projects and grants, and an expert in the analysis of draft laws. She is the author of more than 100 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Environmental Law, Anti-Corruption research, Information Law, Digital Law.',
    scopusId: '56677820100',
    researcherId: 'P-4529-2017',
    orcidId: '0000-0003-3817-1975',
    hIndex: 4,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 4,
    name: 'STEFAN DYRKA',
    position: 'Professor at V. Korfantego Upper Silesian Academy in Katowice, Poland',
    degree: 'PhD in Economics',
    photo: photo3, // 3.png
    bio: 'He has coordinated International Relations at the Upper Silesian Academy and has extensive experience in reviewing research papers and projects. He is an expert for the Agency for Quality Assurance in Education and an international expert for the accreditation council.',
    interests:
      'Human Capital Management, Human Resources Development, Organizational Management, Tools for Professional Development of personnel.',
    scopusId: '57222052263',
    orcidId: '0000-0002-5677-0675',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 5,
    name: 'UKILIAY KERIMOVA KERIMOVNA',
    position: 'Professor',
    degree: 'PhD in Economics',
    photo: photo4, // 4.png
    bio: 'She has led and participated in research projects funded by grants in the field of agricultural economics, agribusiness, management, and marketing. She has extensive experience in consulting and business plan development in the agricultural sector.',
    interests:
      'Agricultural Economics, Agribusiness, Agriculture, Food Security, Management and Marketing in the Agro-Industrial Complex.',
    scopusId: '56625280000',
    hIndex: 3,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 6,
    name: 'ALTAEV ZHAKIPBEK ALTAEVICH',
    position: 'Professor',
    degree: 'PhD in Philosophical Sciences',
    photo: photo5, // 5.png
    bio: 'One of the leading specialists in the history of Kazakh national philosophy and social philosophy. He supervises numerous young scientists studying the current issues of Farabi Studies, the history of Kazakh philosophy, and the spiritual culture of the Kazakh people. He is the author of more than 35 textbooks and teaching aids, monographs, and about 300 scientific articles, including in journals with a non-zero impact factor.',
    interests:
      'Social Philosophy, History of Philosophy, Islamic Philosophy, History of Kazakh Philosophy.',
    scopusId: '56299912000',
    orcidId: '0000-0002-3925-0045',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 7,
    name: 'VALERY DZUTSATI',
    position: 'Associate Professor, Political Scientist at Southern Illinois University',
    degree: 'PhD in Political Sciences',
    photo: photo6, // 6.png
    bio: 'Associate Professor in the Department of Practical Activities at the School of Anthropology, Political Science, and Sociology at Southern Illinois University. Has extensive international research experience and is a member of associations of political sciences, computational linguistics, Slavic, East European, Eurasian, and international studies.',
    interests:
      'Politics, Conflict Management, Interethnic and Ethnic issues, Religious issues.',
    scopusId: '56786520100',
    orcidId: '0000-0002-1610-6585',
    hIndex: 3,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 8,
    name: 'ERTAI SULTAN',
    position: '',
    degree: 'PhD in Literary Studies',
    photo: photo7, // 7.png
    bio: 'Recipient of the Bolashak International Scholarship, member of the Council of Young Scientists of the Republic of Kazakhstan, and member of the Academic Council of the M. Auezov Institute of Literature and Art.',
    interests:
      'Comparative Literary Studies, Data Journalism, Media effects and content, Internet novels, Contemporary Literature, Top-management in education and science, ideological concepts.',
    scopusId: '57216705450',
    researcherId: 'V-7381-2019',
    orcidId: '0000-0003-3240-2744',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 9,
    name: 'SHARIPOV ASKAR KALIEVICH',
    position: 'Professor',
    degree: 'Doctor of Economics',
    photo: photo8, // 8.png
    bio: 'A practitioner-scientist and certified national project management trainer. Member of the Union of Accountants and Professional Accounting Organizations of Kazakhstan. Participant and executor of Kazakhstani scientific projects in the field of agriculture and chairman of a regional branch of the Association of Farmers of Kazakhstan.',
    interests:
      'Accounting and Audit, Audit activities, issues of the Agro-Industrial Complex, Agriculture, sugar beet industry, mechanisms of state and local governance.',
    scopusId: '57203155678',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 10,
    name: 'BEDELBAYEVA ASSEL YERIKOVNA',
    position: '',
    degree: 'Master of Economics and Business',
    photo: photo9, // 9.png
    bio: 'Recipient of the Bolashak International Scholarship and national expert in evaluating educational programs. Participant and executor of Kazakhstani and international scientific projects in business and management, higher and postgraduate education. Author of over 100 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Agro-Industrial Complex Economics, competitiveness of the economy and its subjects, analysis and evaluation of investment projects, food security, planning and management in higher and postgraduate education.',
    scopusId: '56127515900',
    orcidId: '0000-0002-0747-0799',
    hIndex: 5,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 11,
    name: 'KELESBAYEV DINMUKHAMED NURMAKHANBETOVICH',
    position: 'Associate Professor',
    degree: 'PhD in Management',
    photo: photo10, // 10.png
    bio: 'He supervised internal university grants and business contract projects on methods of improving the quality of educational services and building systems for continuous quality improvement in institutions.',
    interests:
      'Management and Control of Higher Education Services, Quality and Measurement of Higher Education Services, structuring (deployment) of the Quality function, Kano model.',
    scopusId: '56623085400',
    hIndex: 4,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 12,
    name: 'OZENBAYEVA AIGERIM TOYLYBAYEVNA',
    position: '',
    degree: 'PhD in Law',
    photo: photo11, // 11.png
    bio: 'Head, participant, and executor of Kazakhstani scientific projects funded by grants and an expert in the analysis of draft laws. Author of over 100 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Agricultural Law, Land Law, Environmental Law.',
    scopusId: '56770061300',
    hIndex: 3,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 13,
    name: 'IBRAYEV ALISHER SERIKBOLOVICH',
    position: '',
    degree: 'PhD in Law',
    photo: photo12, // 12.png
    bio: 'Legal practitioner and academic researcher. Specialist in legal consulting, contract drafting, and employee qualification enhancement in educational organizations.',
    interests:
      'Environmental Law, Land Law, Civil Law.',
    scopusId: '57879500600',
    researcherId: 'X-1235-2018',
    orcidId: '0000-0002-7082-4393',
    hIndex: 1,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 14,
    name: 'SMAĞULOVA BOTAKÖZ AMANGELDІQYZY',
    position: '',
    degree: 'Master of Humanities, Master of International Relations',
    photo: photo13, // 13.png
    bio: 'Worked as the Chief Expert at the Information Analysis Center of the Ministry of Information and Social Development of the Republic of Kazakhstan, engaged in media and social network monitoring, analysis of the information field, writing analytical briefs, preparing guidelines and reports. Currently works at the Regional Environmental Center for Central Asia as a PR and Communication Specialist and a specialist in the development of the Eurasian Basin Management Portal.',
    interests:
      'International Relations, Political Science, External and Internal Policies, Ecology.',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 15,
    name: 'SHMIDT MARIYA ALEKSANDROVNA',
    position: '',
    degree: 'Master of Pedagogical Sciences in "Defectology"',
    photo: photo14, // 14.png
    bio: 'Psychologist, clinical psychologist, and psychology teacher. Participant and executor of Kazakhstani and international research projects. Author of over 40 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Inclusive Education, Special Education, Ethnopedagogy, Conflictology, Clinical Psychology.',
    scopusId: '57211470442',
    orcidId: '0000-0002-7048-6267',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 16,
    name: 'MUSEKENOVA AIZHAN AIDYNOVNA',
    position: '',
    degree: 'Master of Laws',
    photo: photo15, // 15.png
    bio: 'Law specialist. Short bio to be completed: work experience, number of publications, and awards (no more than 50 words).',
    interests:
      'Penitentiary law, human rights, international law.',
    researcherId: '/X-1512-2018',
    orcidId: '0000-0003-3544-2311',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 17,
    name: 'SEILKASIMOVA ROZA ASKAROVNA',
    position: '',
    degree: 'Master of Laws, PhD candidate',
    photo: photo16, // 16.png
    bio: 'PhD candidate at Zhetysu State University named after Ilyas Zhansugurov, Higher School of Law and Economics, educational program "8D04201 – Jurisprudence". Participated in the project "Legal regulation of energy security in the field of digital mining in the Republic of Kazakhstan". Dissertation topic: "Legal regulation of the medical waste disposal process in the Republic of Kazakhstan".',
    interests: '',
    scopusId: '57222558740',
    scopusProfileUrl: 'https://www.scopus.com/authid/detail.uri?authorId=57222558740',
    orcidId: '0009-0000-8026-9605',
    orcidProfileUrl: 'https://orcid.org/my-orcid?orcid=0009-0000-8026-9605',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 18,
    name: 'ISAZHANOVA AIŽAN NURBOLATOVA',
    position: '',
    degree: 'Master of Education',
    photo: photo17, // 17.png
    bio: 'Specialist in the fields of history, archaeology, and ethnology. Expert in the development and updating of educational programs and member of the young scientists’ working group in Kazakhstan. Certified analyst-collector of the National Center for Higher Education Development.',
    interests:
      'Issues of History, Archaeology, and Ethnology; problems of Higher and Postgraduate Education.',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 19,
    name: 'MUKUSHEV ALISHER MURATZHANULY',
    position: '',
    degree: 'Master of Economics and Business',
    photo: photo18, // 18.png
    bio: 'Has experience as an expert in international cooperation and strategic development, organizing academic mobility programs, negotiating with foreign educational organizations, implementing international projects, and IT consulting as a Bitrix24 information system consultant. Grant recipient for training in the Data Science course as part of the Tech Orda IT specialist training program.',
    interests:
      'International Relations, Education, Academic Mobility, Economics, Business, Public Administration, Information Technology.',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 20,
    name: 'ISHKIBAYEVA MADINA MARATOVNA',
    position: '',
    degree: 'PhD Candidate in Pedagogy and Psychology (L. Gumilyov Eurasian National University)',
    photo: photo19, // 19.png
    bio: 'Has experience as a researcher focusing on interdisciplinary projects and as a guest researcher at Lund University (Sweden), conducting phenomenological interviews on unethical resistance practices. Highly skilled in research methodologies and software, including Python, R, Praat, NVivo 15.0, and SPSS. Fluently multilingual in Kazakh (native), English (IELTS 7.0), and Russian, with strong proficiency in French and Spanish.',
    interests:
      'Professional and academic identity formation.',
    scopusId: '59831131900',
    researcherId: 'RID-119-108',
    orcidId: '0009-0002-3859-2083',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 21,
    name: 'ISHKIBAYEVA GULMIRA MARATOVNA',
    position: '',
    degree: 'PhD in Law (Zhetysu State University named after I. Zhansugurov)',
    photo: placeholderImage,
    bio: 'Head of a department at the Joint Stock Company "Republican Center for Space Communications" of the Aerospace Committee of the Ministry of Digital Development, Innovation and Aerospace Industry. Has practical experience working in the space industry of Kazakhstan.',
    interests:
      'Space Law, Business Law, Digital Technologies; legal regulation and practice in the space industry of Kazakhstan.',
    researcherId: 'JLM-3358-2023',
    orcidId: '0000-0001-9216-5037',
    scopusId: '57945907100',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 22,
    name: 'ZHANSAYA TURGAMBEKOVA',
    position: '',
    degree: '',
    photo: placeholderImage,
    bio: '',
    interests: '',
    publications: [],
    email: '',
    profiles: [],
  },
];

function Team() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>КОМАНДА</h1>
      </header>

      <section className="team-grid">
        {teamData.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>

      <hr className="divider" />

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

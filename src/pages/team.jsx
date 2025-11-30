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

// Все исследователи / сотрудники из нового списка
const teamData = [
  {
    id: 1,
    name: 'Kaldiyarov Daniyar',
    position: 'Professor',
    degree: 'Doctor of Economic Sciences',
    photo: photo1,
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
    name: 'Mansurova Talifa Maratovna',
    position: 'Director of Eurasian Institute of Interdisciplinary Studies',
    degree: 'Master of Humanitarian Studies',
    photo: placeholderImage,
    bio: 'PhD candidate of English language and Literature Department at Karabuk University, participated in international conferences and was an editor of several materials written in English. She has coordinated International Relations in Egyptian University of Islamic culture Nur-Mubarak and was a member of ERASMUS Office at Karabuk University.',
    interests:
      'Translation Studies, Psychology, Pedagogical Sciences, Contemporary Literature, Comparative Literature.',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 3,
    name: 'Nurmuhankyzy Daniya',
    position: 'Associate Professor',
    degree: 'PhD in Law',
    photo: photo2,
    bio: 'She is a participant and executor of Kazakhstani and international scientific projects and grants, an expert in the analysis of Draft Laws. She is the author of more than 100 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Environmental Law, Anti-Corruption research, Information Law, Digital Law.',
    scopusId: '56677820100',
    researcherId: 'P-4529-2017 (Web of Science)',
    orcidId: '0000-0003-3817-1975',
    hIndex: 4,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 4,
    name: 'Kerimova Ukiliay Kerimovna',
    position: 'Professor',
    degree: 'PhD in Economics',
    photo: photo4,
    bio: 'She has led and participated in research projects funded by grants in the field of Agricultural Economics, Agribusiness, Management, and Marketing. She has extensive experience in consulting and business plan development in the agricultural sector.',
    interests:
      'Agricultural Economics, Agribusiness, Agriculture, Food Security, Management, and Marketing in the Agro-Industrial Complex.',
    scopusId: '56625280000',
    hIndex: 3,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 5,
    name: 'Altaev Zhakipbek Altaevich',
    position: 'Professor',
    degree: 'PhD in Philosophical Sciences',
    photo: photo5,
    bio: 'One of the leading specialists in the field of the history of Kazakh national philosophy and social philosophy. He supervises numerous young scientists studying the current issues of Farabi Studies, the History of Kazakh Philosophy, and the spiritual culture of the Kazakh people. He is the author of more than 35 textbooks, teaching aids, monographs, and 300 scientific articles, including in journals with a non-zero impact factor.',
    interests:
      'Social Philosophy, History of Philosophy, Islamic Philosophy, History of Kazakh Philosophy.',
    scopusId: '56299912000',
    orcidId: '0000-0002-3925-0045',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 6,
    name: 'Valery Dzutsati',
    position: 'Associate Professor, Political Scientist at Southern Illinois University',
    degree: 'PhD in Political Sciences',
    photo: photo6,
    bio: 'Associate Professor in the Department of Practical Activities at the School of Anthropology, Political Science, and Sociology at the University of Southern Illinois. Has extensive international research experience. Member of Associations of Political Sciences, Computer Linguistics, Slavic, East European, Eurasian, and International Studies.',
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
    id: 7,
    name: 'Ertai Sultan',
    position: '',
    degree: 'PhD in Literary Studies',
    photo: photo7,
    bio: 'Recipient of the Bolashak International Scholarship, member of the Council of Young Scientists of the Republic of Kazakhstan, member of the Academic Council of the Institute of Literature and Art named after M. Auyezov.',
    interests:
      'Comparative Literary Studies, Data Journalism, Media effects and content, Internet novels, Contemporary Literature, Top-management in education and science, ideological concepts.',
    scopusId: '57216705450',
    researcherId: 'V-7381-2019 (Web of Science)',
    orcidId: '0000-0003-3240-2744',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 8,
    name: 'Sharipov Askar Kalievich',
    position: 'Professor',
    degree: 'Doctor of Economics',
    photo: photo8,
    bio: 'A practitioner-scientist, certified national project management trainer, Member of the Union of Accountants and Professional Accounting Organizations of Kazakhstan. He is a participant and executor of Kazakhstani scientific projects in the field of Agriculture, Chairman of the regional branch of the Association of Farmers of Kazakhstan.',
    interests:
      'Accounting and Audit, Audit activities, issues of the Agro-Industrial complex, Agriculture, sugar beet industry, mechanisms of state and local governance.',
    scopusId: '57203155678',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 9,
    name: 'Kelesbayev Dinmukhamed Nurmaganbetovich',
    position: 'Associate Professor',
    degree: 'PhD in Management',
    photo: photo10,
    bio: 'He supervised internal university grants and business contract projects on methods of improving the quality of educational services and systems for continuous quality improvement in institutions.',
    interests:
      'Management and Control of Higher Education Services, Quality and Measurement of Higher Education Services, Structuring (deployment) of the Quality function, Kano model.',
    scopusId: '56623085400',
    hIndex: 4,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 10,
    name: 'Ozenbayeva Aigerim Toylybayeva',
    position: '',
    degree: 'PhD in Law',
    photo: photo11,
    bio: 'Head, participant, and executor of Kazakhstani scientific projects funded by grants, expert in the analysis of draft laws. She is an author of over 100 scientific works, research articles, reports, monographs, and educational materials.',
    interests:
      'Agricultural Law, Land Law, Environmental Law.',
    scopusId: '56770061300',
    hIndex: 3,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 11,
    name: 'Ibrayev Alisher Serikbolovich',
    position: '',
    degree: 'PhD in Law',
    photo: photo12,
    bio: 'Legal practitioner, scientific practitioner. Specialist in legal consulting, contract conclusion features, and employee qualification enhancement in educational organizations.',
    interests:
      'Environmental Law, Land Law, Civil Law.',
    scopusId: '57879500600',
    researcherId: 'X-1235-2018 (Web of Science)',
    orcidId: '0000-0002-7082-4393',
    hIndex: 1,
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 12,
    name: 'Seilkasimova Roza Askarovna',
    position: '',
    degree: 'Master of Laws, PhD candidate in Jurisprudence',
    photo: photo16,
    bio: 'PhD candidate at Zhetysu State University named after Ilyas Zhansugurov, Higher School of Law and Economics in the educational program "8D04201 - Jurisprudence". Participated in the project "Legal regulation of energy security in the field of digital mining in the Republic of Kazakhstan". PhD dissertation topic: "Legal regulation of the medical waste disposal process in the Republic of Kazakhstan".',
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
    id: 13,
    name: 'Ishkibayeva Madina Maratovna',
    position: 'Researcher',
    degree: 'PhD Candidate in Pedagogy and Psychology',
    photo: photo19,
    bio: 'PhD Candidate in Pedagogy and Psychology (L. Gumilyov Eurasian National University). Has experience as a Researcher focusing on interdisciplinary projects and a Guest Researcher at Lund University (Sweden) conducting phenomenological interviews on unethical resistance practices. Highly skilled in research methodologies and software, including Python, R programming, Praat, NVivo 15.0, and SPSS. Fluently multilingual: Kazakh (Native), English (Fluent - IELTS 7.0), Russian (Fluent), with strong proficiency in French and Spanish.',
    interests:
      'Publications focus on topics such as professional and academic identity formation.',
    scopusId: '59831131900',
    researcherId: 'RID-119-108',
    orcidId: '0009-0002-3859-2083',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 14,
    name: 'Ishkibayeva Gulmira Maratovna',
    position: 'Head of Department, Republican Center for Space Communications',
    degree: 'PhD in Law',
    photo: placeholderImage,
    bio: 'Head of the Department of the Joint Stock Company "Republican Center for Space Communications" of the Aerospace Committee of the Ministry of Digital Development, Innovation and Aerospace Industry. The Project Manager deals with issues of Space Law and has practical experience working in the space industry of Kazakhstan.',
    interests:
      'Space Law, Business Law, Digital Technologies.',
    researcherId: 'JLM-3358-2023',
    orcidId: '0000-0001-9216-5037',
    scopusId: '57945907100',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 15,
    name: 'Turgambekova Zhansaya Yerzhanqyzy',
    position: 'Researcher',
    degree: 'Doctor of Philosophy (PhD) in «8D11102 - Tourist service: government foresight»',
    photo: placeholderImage,
    bio: 'A young researcher whose educational background includes public and local administration, destination branding, and tourism. The findings of the study, aimed at shaping the national and regional brand, are used in the development plans and programs of state and local authorities. The results of the study have been published in domestic and foreign scientific journals, including the Scopus-based Q1 journal.',
    interests:
      'Destination branding, State and local government, tourism improvement, effective research methods.',
    scopusId: '58662996900',
    orcidId: '0000-0002-1254-4561',
    publications: [],
    email: '',
    profiles: [],
  },
  {
    id: 16,
    name: 'Dinara Rakhmatullayeva',
    position: 'Associate Professor, Researcher',
    degree: 'PhD in Economics',
    photo: placeholderImage,
    bio: 'She has led research projects funded by grants and participated in Kazakhstani and international research projects. She is the author of over 70 scientific works, including research articles, monographs, and educational materials like tutorials.',
    interests:
      'Fundamental and applied research, including regional economics and investment (FDI, private equity, ESG, business operations, and the social impact of FDI in the regions); digital tools (interactive indices and a platform for assessing the business environment); and interdisciplinary research (politics/economics, the economics of corruption).',
    scopusId: '57190409585',
    orcidId: '0000-0002-6532-1652',
    hIndex: 2,
    publications: [],
    email: '',
    profiles: [],
  },
];

function Team() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Исследовательская группа</h1>
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

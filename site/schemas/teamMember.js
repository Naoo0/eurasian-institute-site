export default {
  name: 'teamMember',
  title: 'Член команды',
  type: 'document',
  fields: [
    { name: 'name', title: 'Имя', type: 'string' },
    { name: 'position', title: 'Должность', type: 'string' },
    { name: 'degree', title: 'Учёная степень', type: 'string' },
    { name: 'photo', title: 'Фото', type: 'image' },
    { name: 'interests', title: 'Интересы', type: 'text' },
    { name: 'scopusId', title: 'Scopus ID', type: 'string' },
    { name: 'orcidId', title: 'ORCID ID', type: 'string' },
    { name: 'hIndex', title: 'H-index', type: 'number' },
    { name: 'order', title: 'Порядок', type: 'number' },
  ],
};

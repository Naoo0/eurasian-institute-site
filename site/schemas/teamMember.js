export default {
  name: 'teamMember',
  title: 'Член команды',
  type: 'document',
  fields: [
    { name: 'name', title: 'Имя', type: 'localeString' },

    { name: 'position', title: 'Должность', type: 'localeString' },
    { name: 'degree', title: 'Учёная степень', type: 'localeString' },

    {
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: {
      hotspot: true,
      },
    },

    { name: 'bio', title: 'Биография', type: 'localeText' },
    { name: 'interests', title: 'Интересы', type: 'localeText' },

    { name: 'scopusId', title: 'Scopus ID', type: 'string' },
    { name: 'orcidId', title: 'ORCID ID', type: 'string' },
    { name: 'hIndex', title: 'H-index', type: 'number' },
    { name: 'order', title: 'Порядок', type: 'number' },
  ],
};
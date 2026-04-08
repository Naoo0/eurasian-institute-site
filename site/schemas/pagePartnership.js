export default {
  name: 'pagePartnership',
  title: 'Страница партнёрства',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Заголовок hero-блока',
      type: 'localeString',
    },
    {
      name: 'heroSubtitle',
      title: 'Подзаголовок hero-блока',
      type: 'localeText',
    },
    {
      name: 'benefitsTitle',
      title: 'Заголовок блока "Почему стоит сотрудничать с нами?"',
      type: 'localeString',
    },
    {
      name: 'fullText',
      title: 'Основной текст',
      type: 'localizedPortableText',
    },
    {
      name: 'directionsTitle',
      title: 'Заголовок блока "Направления сотрудничества"',
      type: 'localeString',
    },
    {
      name: 'directions',
      title: 'Направления сотрудничества (список)',
      type: 'localizedArrayString',
    },
  ],
};
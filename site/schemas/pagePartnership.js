export default {
  name: 'pagePartnership',
  title: 'Страница партнёрства',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Заголовок hero-блока',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Подзаголовок hero-блока',
      type: 'text',
    },
    {
      name: 'fullText',
      title: 'Основной текст (Почему стоит сотрудничать с нами?)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'directions',
      title: 'Направления сотрудничества (список)',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

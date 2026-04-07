export default {
  name: 'newsItem',
  title: 'Новость',
  type: 'document',
  fields: [
    { name: 'title', title: 'Заголовок', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'date', title: 'Дата', type: 'datetime' },
    {
      name: 'body',
      title: 'Текст новости',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'tag', title: 'Тег / метка', type: 'string' },
  ],
};

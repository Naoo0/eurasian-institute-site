export default {
  name: 'newsItem',
  title: 'Новость',
  type: 'document',
  fields: [
    { name: 'title', title: 'Заголовок', type: 'localeString' },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => doc?.title?.ru || doc?.title?.en || '',
        maxLength: 96,
      },
    },

    { name: 'date', title: 'Дата', type: 'datetime' },

    {
      name: 'body',
      title: 'Текст новости',
      type: 'localizedPortableText',
    },

    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: { hotspot: true },
    },

    { name: 'tag', title: 'Тег / метка', type: 'localeString' },
  ],
};
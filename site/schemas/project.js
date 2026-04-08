export default {
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название проекта',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'kk', title: 'Қазақша', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) =>
          doc?.title?.en || doc?.title?.ru || doc?.title?.kk || 'project',
        maxLength: 96,
      },
    },
    {
      name: 'tag',
      title: 'Тег / программа',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'kk', title: 'Қазақша', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'order',
      title: 'Порядок в слайдере',
      type: 'number',
      description: 'Меньше число — раньше в слайдере',
    },
    {
      name: 'image',
      title: 'Картинка проекта',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'paragraphs',
      title: 'Основной текст (абзацы)',
      type: 'object',
      fields: [
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'kk',
          title: 'Қазақша',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'text' }],
        },
      ],
    },
    {
      name: 'bullets',
      title: 'Ключевые пункты',
      type: 'object',
      fields: [
        {
          name: 'ru',
          title: 'Русский',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'kk',
          title: 'Қазақша',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'footer',
      title: 'Финальный абзац / вывод',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'kk', title: 'Қазақша', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title.ru',
      subtitle: 'tag.ru',
      media: 'image',
    },
  },
};
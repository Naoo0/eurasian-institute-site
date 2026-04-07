// schemas/pageAbout.js
export default {
  name: 'pageAbout',
  title: 'Страница "О нас"',
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

    // История
    {
      name: 'historyTitle',
      title: 'Заголовок блока истории',
      type: 'string',
    },
    {
      name: 'historySubtitle',
      title: 'Подзаголовок блока истории',
      type: 'string',
    },
    {
      name: 'historyParagraphs',
      title: 'Абзацы истории',
      type: 'array',
      of: [{ type: 'text' }],
    },

    // Миссия и видение
    {
      name: 'missionItems',
      title: 'Пункты "Миссия и видение"',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Заголовок пункта', type: 'string' },
            { name: 'body', title: 'Текст пункта', type: 'text' },
          ],
        },
      ],
    },

    // Структура
    {
      name: 'structureText',
      title: 'Текст блока "Структура института"',
      type: 'text',
    },

    // Ценности
    {
      name: 'values',
      title: 'Наши ценности',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Иконка (эмодзи или короткий текст)',
              type: 'string',
            },
            { name: 'title', title: 'Заголовок', type: 'string' },
            { name: 'body', title: 'Текст', type: 'text' },
          ],
        },
      ],
    },

    // Партнёры
    {
      name: 'partnersIntro',
      title: 'Текст перед блоком партнёров',
      type: 'text',
    },
    {
      name: 'partners',
      title: 'Партнёры',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Название', type: 'string' },
            { name: 'url', title: 'Ссылка', type: 'url' },
            {
              name: 'logo',
              title: 'Логотип',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};

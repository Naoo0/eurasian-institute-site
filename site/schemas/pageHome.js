// site/schemas/pageHome.js
export default {
  name: 'pageHome',
  title: 'Главная страница',
  type: 'document',
  fields: [
    {
      name: 'introBlocks',
      title: 'Верхние блоки (GridSection)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Заголовок', type: 'string' },
            {
              name: 'image',
              title: 'Картинка',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'reverse',
              title: 'Развернуть блок (картинка справа)',
              type: 'boolean',
            },
          ],
        },
      ],
    },

    // Featured-новость посередине
    {
      name: 'featuredNewsLabel',
      title: 'Лейбл над новостью (например, НОВОСТИ)',
      type: 'string',
    },
    {
      name: 'featuredNews',
      title: 'Новость на главной',
      type: 'reference',
      to: [{ type: 'newsItem' }],
    },

    // Правый сайтбар
    {
      name: 'sidebarCards',
      title: 'Карточки справа',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Заголовок', type: 'string' },
            { name: 'subtitle', title: 'Подпись (опционально)', type: 'string' },
            { name: 'url', title: 'Ссылка (опционально)', type: 'url' },
            {
              name: 'image',
              title: 'Картинка',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },

    // Newsletter
    {
      name: 'newsletterTitle',
      title: 'Заголовок блока Newsletter',
      type: 'string',
    },
    {
      name: 'newsletterText',
      title: 'Текст блока Newsletter',
      type: 'text',
    },
    {
      name: 'newsletterButton',
      title: 'Текст кнопки Newsletter',
      type: 'string',
    },
  ],
};

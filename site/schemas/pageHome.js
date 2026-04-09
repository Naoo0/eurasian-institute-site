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
            {
              name: 'title',
              title: 'Заголовок',
              type: 'object',
              fields: [
                { name: 'ru', title: 'Русский', type: 'string' },
                { name: 'kk', title: 'Қазақша', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
              ],
            },
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

    {
      name: 'featuredNewsLabel',
      title: 'Лейбл над новостью',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'kk', title: 'Қазақша', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'featuredNews',
      title: 'Новость на главной',
      type: 'reference',
      to: [{ type: 'newsItem' }],
    },

    {
      name: 'sidebarCards',
      title: 'Карточки справа',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'object',
              fields: [
                { name: 'ru', title: 'Русский', type: 'string' },
                { name: 'kk', title: 'Қазақша', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
              ],
            },
            {
              name: 'subtitle',
              title: 'Подпись (опционально)',
              type: 'object',
              fields: [
                { name: 'ru', title: 'Русский', type: 'string' },
                { name: 'kk', title: 'Қазақша', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
              ],
            },
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

    {
      name: 'newsletterTitle',
      title: 'Заголовок блока Newsletter',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'kk', title: 'Қазақша', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'newsletterText',
      title: 'Текст блока Newsletter',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'text' },
        { name: 'kk', title: 'Қазақша', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    },
    {
      name: 'newsletterButton',
      title: 'Текст кнопки Newsletter',
      type: 'object',
      fields: [
        { name: 'ru', title: 'Русский', type: 'string' },
        { name: 'kk', title: 'Қазақша', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Главная страница',
      };
    },
  },
};
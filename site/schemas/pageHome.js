export default {
  name: 'pageHome',
  title: 'Главная страница',
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
      name: 'historyTitle',
      title: 'Заголовок блока истории',
      type: 'localeString',
    },
    {
      name: 'historySubtitle',
      title: 'Подзаголовок блока истории',
      type: 'localeString',
    },
    {
      name: 'historyParagraphs',
      title: 'Абзацы истории',
      type: 'localizedArrayText',
    },

    {
      name: 'missionSectionTitle',
      title: 'Заголовок секции "Миссия и видение"',
      type: 'localeString',
    },
    {
      name: 'missionItems',
      title: 'Пункты "Миссия и видение"',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Заголовок пункта', type: 'localeString' },
            { name: 'body', title: 'Текст пункта', type: 'localeText' },
          ],
        },
      ],
    },

    {
      name: 'structureSectionTitle',
      title: 'Заголовок блока "Структура института"',
      type: 'localeString',
    },
    {
      name: 'structureText',
      title: 'Текст блока "Структура института"',
      type: 'localeText',
    },

    {
      name: 'valuesSectionTitle',
      title: 'Заголовок секции "Наши ценности"',
      type: 'localeString',
    },
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
            { name: 'title', title: 'Заголовок', type: 'localeString' },
            { name: 'body', title: 'Текст', type: 'localeText' },
          ],
        },
      ],
    },

    {
      name: 'partnersSectionTitle',
      title: 'Заголовок секции партнёров',
      type: 'localeString',
    },
    {
      name: 'partnersIntro',
      title: 'Текст перед блоком партнёров',
      type: 'localeText',
    },
    {
      name: 'keyProjectsTitle',
      title: 'Заголовок "Ключевые международные проекты"',
      type: 'localeString',
    },
    {
      name: 'partners',
      title: 'Партнёры',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Название', type: 'localeString' },
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
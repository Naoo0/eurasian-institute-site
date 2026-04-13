export default {
  name: "pageHome",
  title: 'Главная страница',
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Заголовок hero-блока",
      type: "localeString",
    },
    {
      name: "heroSubtitle",
      title: "Подзаголовок hero-блока",
      type: "localeText",
    },
    {
      name: "heroPrimaryButtonText",
      title: "Текст главной кнопки",
      type: "localeString",
    },
    {
      name: "heroPrimaryButtonLink",
      title: "Ссылка главной кнопки",
      type: "string",
      description: 'Например: /about или /projects',
    },
    {
      name: "heroSecondaryButtonText",
      title: "Текст второй кнопки",
      type: "localeString",
    },
    {
      name: "heroSecondaryButtonLink",
      title: "Ссылка второй кнопки",
      type: "string",
      description: 'Например: /partnership',
    },

    {
      name: "introTitle",
      title: "Заголовок блока о нас",
      type: "localeString",
    },
    {
      name: "introText",
      title: "Текст блока о нас",
      type: "localeText",
    },
    {
      name: "introImage",
      title: "Изображение блока о нас",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "directionsSectionTitle",
      title: "Заголовок секции направлений",
      type: "localeString",
    },
    {
      name: "directions",
      title: "Направления",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Заголовок",
              type: "localeString",
            },
            {
              name: "body",
              title: "Текст",
              type: "localeText",
            },
          ],
        },
      ],
    },

    {
      name: "valuesSectionTitle",
      title: "Заголовок секции ценностей",
      type: "localeString",
    },
    {
      name: "values",
      title: "Ценности",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Иконка (эмодзи или короткий текст)",
              type: "string",
            },
            {
              name: "title",
              title: "Заголовок",
              type: "localeString",
            },
            {
              name: "body",
              title: "Текст",
              type: "localeText",
            },
          ],
        },
      ],
    },

    {
      name: "partnershipTitle",
      title: "Заголовок CTA-блока",
      type: "localeString",
    },
    {
      name: "partnershipText",
      title: "Текст CTA-блока",
      type: "localeText",
    },
    {
      name: "partnershipButtonText",
      title: "Текст кнопки CTA",
      type: "localeString",
    },
    {
      name: "partnershipButtonLink",
      title: "Ссылка кнопки CTA",
      type: "string",
      description: 'Например: /partnership',
    },
  ],
};
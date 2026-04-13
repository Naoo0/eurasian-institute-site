const localizedString = (name, title) => ({
  name,
  title,
  type: "object",
  fields: [
    { name: "ru", title: "Русский", type: "string" },
    { name: "kk", title: "Қазақша", type: "string" },
    { name: "en", title: "English", type: "string" },
  ],
});

const localizedText = (name, title) => ({
  name,
  title,
  type: "object",
  fields: [
    { name: "ru", title: "Русский", type: "text", rows: 4 },
    { name: "kk", title: "Қазақша", type: "text", rows: 4 },
    { name: "en", title: "English", type: "text", rows: 4 },
  ],
});

export default {
  name: "pageProjects",
  title: "Страница Projects",
  type: "document",
  fields: [
    localizedString("heroTitle", "Заголовок hero"),
    localizedText("heroSubtitle", "Подзаголовок hero"),

    localizedString("projectsTitle", "Заголовок секции проектов"),
    localizedText("projectsSubtitle", "Подзаголовок секции проектов"),

    {
      name: "projects",
      title: "Проекты",
      type: "array",
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          type: "object",
          title: "Проект",
          fields: [
            localizedString("title", "Название проекта"),
            localizedText("description", "Описание"),
            {
              name: "image",
              title: "Изображение",
              type: "image",
              options: { hotspot: true },
            },
            localizedString("linkText", "Текст кнопки"),
            {
              name: "linkUrl",
              title: "Ссылка",
              type: "url",
            },
          ],
          preview: {
            select: {
              title: "title.ru",
              subtitle: "title.en",
              media: "image",
            },
          },
        },
      ],
    },
  ],
};
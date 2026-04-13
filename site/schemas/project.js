export default {
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название проекта',
      type: 'localeString',
    },
    {
      name: 'tag',
      title: 'Тег / программа',
      type: 'localeString',
    },
    {
      name: 'order',
      title: 'Порядок',
      type: 'number',
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
      type: 'localizedArrayText',
    },
    {
      name: 'bullets',
      title: 'Ключевые пункты',
      type: 'localizedArrayString',
    },
    {
      name: 'footer',
      title: 'Финальный абзац / вывод',
      type: 'localeText',
    },
  ],
};
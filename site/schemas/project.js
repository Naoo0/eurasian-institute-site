// site/schemas/project.js
export default {
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название проекта',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'tag',
      title: 'Тег / программа (MSCA, Horizon 2020 и т.п.)',
      type: 'string',
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
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'bullets',
      title: 'Ключевые пункты (буллеты)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'footer',
      title: 'Финальный абзац / вывод',
      type: 'text',
    },
  ],
};

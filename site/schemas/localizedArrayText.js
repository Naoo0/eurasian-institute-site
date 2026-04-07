export default {
  name: 'localizedArrayText',
  title: 'Localized array of text',
  type: 'object',
  fields: [
    {
      name: 'ru',
      title: 'Русский',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'kz',
      title: 'Казахский',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'en',
      title: 'Английский',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
};
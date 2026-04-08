export default {
  name: 'localizedArrayString',
  title: 'Localized array of strings',
  type: 'object',
  fields: [
    {
      name: 'ru',
      title: 'Русский',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'kz',
      title: 'Казахский',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'en',
      title: 'Английский',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
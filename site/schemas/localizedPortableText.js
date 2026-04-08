export default {
  name: 'localizedPortableText',
  title: 'Localized portable text',
  type: 'object',
  fields: [
    {
      name: 'ru',
      title: 'Русский',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'kz',
      title: 'Казахский',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'en',
      title: 'Английский',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
const localizedString = (name, title) => ({
  name,
  title,
  type: 'object',
  fields: [
    { name: 'ru', title: 'Русский', type: 'string' },
    { name: 'kk', title: 'Қазақша', type: 'string' },
    { name: 'en', title: 'English', type: 'string' },
  ],
});

const localizedText = (name, title) => ({
  name,
  title,
  type: 'object',
  fields: [
    { name: 'ru', title: 'Русский', type: 'text', rows: 4 },
    { name: 'kk', title: 'Қазақша', type: 'text', rows: 4 },
    { name: 'en', title: 'English', type: 'text', rows: 4 },
  ],
});

const localizedStringArray = (name, title) => ({
  name,
  title,
  type: 'object',
  fields: [
    {
      name: 'ru',
      title: 'Русский',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'kk',
      title: 'Қазақша',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});

export default {
  name: 'pagePartnership',
  title: 'Страница Partnership',
  type: 'document',
  fields: [
    localizedString('heroTitle', 'Заголовок hero'),
    localizedText('heroSubtitle', 'Подзаголовок hero'),

    localizedString('firstSectionTitle', 'Заголовок 1 блока'),
    localizedText('firstSectionSubtitle', 'Подзаголовок 1 блока'),
    localizedStringArray('firstSectionPoints', 'Пункты 1 блока'),
    {
      name: 'firstSectionImage',
      title: 'Изображение 1 блока',
      type: 'image',
      options: { hotspot: true },
    },

    localizedString('secondSectionTitle', 'Заголовок 2 блока'),
    localizedText('secondSectionSubtitle', 'Подзаголовок 2 блока'),
    localizedStringArray('secondSectionPoints', 'Пункты 2 блока'),

    localizedString('thirdSectionTitle', 'Заголовок 3 блока'),
    localizedText('thirdSectionSubtitle', 'Подзаголовок 3 блока'),
    localizedStringArray('thirdSectionPoints', 'Пункты 3 блока'),
    {
      name: 'thirdSectionImage',
      title: 'Изображение 3 блока',
      type: 'image',
      options: { hotspot: true },
    },

    localizedString('finalSectionTitle', 'Заголовок финального блока'),
    localizedStringArray('finalSectionPoints', 'Пункты финального блока'),
  ],
};
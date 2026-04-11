export default {
  name: 'pagePartnership',
  title: 'Страница партнёрства',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: '1. Заголовок',
      type: 'localeString',
    },
    {
      name: 'heroSubtitle',
      title: '2. Подзаголовок',
      type: 'localeText',
    },

    {
      name: 'firstSectionTitle',
      title: '3. Первый блок — заголовок',
      type: 'localeString',
    },
    {
      name: 'firstSectionSubtitle',
      title: '4. Первый блок — подзаголовок',
      type: 'localeText',
    },
    {
      name: 'firstSectionPoints',
      title: '5. Первый блок — 2 пункта',
      type: 'localizedArrayString',
    },
    {
      name: 'firstSectionImage',
      title: '6. Первый блок — картинка',
      type: 'image',
      options: { hotspot: true },
    },

    {
      name: 'secondSectionTitle',
      title: '7. Второй блок — заголовок',
      type: 'localeString',
    },
    {
      name: 'secondSectionSubtitle',
      title: '8. Второй блок — подзаголовок',
      type: 'localeText',
    },
    {
      name: 'secondSectionPoints',
      title: '9. Второй блок — 2 пункта',
      type: 'localizedArrayString',
    },

    {
      name: 'thirdSectionTitle',
      title: '10. Третий блок — заголовок',
      type: 'localeString',
    },
    {
      name: 'thirdSectionSubtitle',
      title: '11. Третий блок — подзаголовок',
      type: 'localeText',
    },
    {
      name: 'thirdSectionPoints',
      title: '12. Третий блок — 2 пункта',
      type: 'localizedArrayString',
    },
    {
      name: 'thirdSectionImage',
      title: '13. Третий блок — картинка',
      type: 'image',
      options: { hotspot: true },
    },

    {
      name: 'finalSectionTitle',
      title: '14. Финальный блок — заголовок',
      type: 'localeString',
    },
    {
      name: 'finalSectionPoints',
      title: '15. Финальный блок — 5 пунктов',
      type: 'localizedArrayString',
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Страница партнёрства',
      };
    },
  },
};
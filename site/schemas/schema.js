// site/schemas/schema.js
import newsItem from './newsItem';
import pagePartnership from './pagePartnership';
import teamMember from './teamMember';
import project from './project';
import pageAbout from './pageAbout';
import pageHome from './pageHome';

import localeString from './localeString';
import localeText from './localeText';
import localizedArrayText from './localizedArrayText';

export const schemaTypes = [
  localeString,
  localeText,
  localizedArrayText,

  newsItem,
  pagePartnership,
  teamMember,
  project,
  pageAbout,
  pageHome,
];
// site/schemas/schema.js
import newsItem from './newsItem';
import pagePartnership from './pagePartnership';
import teamMember from './teamMember';
import project from './project';
import pageAbout from './pageAbout';
import pageHome from './pageHome';        // <- НОВОЕ

export const schemaTypes = [
  newsItem,
  pagePartnership,
  teamMember,
  project,
  pageAbout,
  pageHome,                               // <- НОВОЕ
];

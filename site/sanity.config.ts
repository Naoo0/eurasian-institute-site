import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'; // ВАЖНО: путь к файлу schema.js

export default defineConfig({
  name: 'default',
  title: 'Site',

  projectId: 'rmis9th4',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

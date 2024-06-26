import loadEnv from './src/utils/load-env'
await loadEnv

import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'a6epfn',
  env: {
    API_URL: '**/api/v1',
    API_TOURS_PER_PAGE: process.env?.VITE_API_TOURS_PER_PAGE
  },
  e2e: {
    baseUrl: 'http://localhost:3000'
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // }
  }
})

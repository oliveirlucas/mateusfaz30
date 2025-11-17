import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#00d4ff',
          secondary: '#0066ff',
          accent: '#00ffff',
          background: '#0a0a0f',
          surface: '#0f0f1a',
        },
      },
    },
  },
})

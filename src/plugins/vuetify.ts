import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1D3557',
        secondary: '#A8DABC',
        warning: '#E63946',
        accent: '#457B9D',
      },
    },
    options: {
      customProperties: true,
    },
  },
});

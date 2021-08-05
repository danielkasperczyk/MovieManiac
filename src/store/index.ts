import Vue from 'vue';
import Vuex from 'vuex';
import movies from '@/store/modules/movies';

Vue.use(Vuex);

const initialModules = {
  movies,
};

const storePattern = {
  modules: { ...initialModules },
};

export default new Vuex.Store({
  ...storePattern,
});

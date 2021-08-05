import { actionTree } from 'typed-vuex';
import genreRepository from '@/services/repositories/MovieAPI/genreRepository/genreRepository';

import state from './state';
import getters from './getters';
import mutations from './mutations';

export default actionTree(
  { state, getters, mutations },
  {
    async moviesGenres({ commit }) {
      const {
        data: { genres },
      } = await genreRepository.genreList();
      commit('SET_GENRES', genres);
    },
  },
);

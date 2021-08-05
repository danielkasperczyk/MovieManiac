import { mutationTree } from 'typed-vuex';
import { Genre } from '@/services/repositories/MovieAPI/genreRepository/types';
import initialState from './state';

export default mutationTree(initialState, {
  SET_GENRES(state, payload: Genre[]) {
    state.genres = payload;
  },
});

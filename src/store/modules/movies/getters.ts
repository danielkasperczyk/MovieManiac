import { getterTree } from 'typed-vuex';
import initState from './state';

/* eslint-disable implicit-arrow-linebreak */

export default getterTree(initState, {
  genreName: (state) => (name: string) =>
    state.genres.find(
      (genre) => genre.name.toLowerCase() === name.toLowerCase(),
    ),
});

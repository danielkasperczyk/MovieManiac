/* eslint-disable operator-linebreak */

import movieRepository from '@/services/repositories/MovieAPI/movieRepository/MovieRepository';
import discoverRepository from '@/services/repositories/MovieAPI/discoverRepository/discoverRepository';
import searchRepository from '@/services/repositories/MovieAPI/searchRepository/searchRepository';

import state from '@/store/modules/movies/state';

const getRepository = (
  name: string,
  page: string | (string | null)[],
  query: string | (string | null)[],
) => {
  let repository;
  if (
    name === 'search' &&
    typeof page === 'string' &&
    typeof query === 'string'
  ) {
    repository = searchRepository.findMovie(query, page);
  } else {
    switch (name) {
      case 'popular':
        repository = movieRepository.popular(page);
        break;
      case 'top_rated':
        repository = movieRepository.topRated(page);
        break;
      case 'upcoming':
        repository = movieRepository.upcoming(page);
        break;
      default: {
        const genre = state.genres.find(
          (genreItem) => genreItem.name.toLowerCase() === name.toLowerCase(),
        )!;
        repository = discoverRepository.moviesByGenre(genre.id, page);
        break;
      }
    }
  }
  return repository;
};

export default getRepository;

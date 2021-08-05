import initAxios from '@/services/repositories/MovieAPI/repository';
import { MovieRepository } from '@/services/repositories/MovieAPI/types';

const movieRepository: MovieRepository = {
  resource: 'movie/',

  popular(page) {
    return initAxios.get(`${this.resource}popular`, {
      params: {
        page,
      },
    });
  },
  topRated(page) {
    return initAxios.get(`${this.resource}top_rated`, {
      params: {
        page,
      },
    });
  },
  upcoming(page) {
    return initAxios.get(`${this.resource}upcoming`, {
      params: {
        page,
      },
    });
  },
  details(movieId) {
    return initAxios.get(`${this.resource}${movieId}`);
  },
  trailer(movieId) {
    return initAxios.get(`${this.resource}${movieId}/videos`);
  },
  similar(movieId) {
    return initAxios.get(`${this.resource}${movieId}/similar`);
  },
};

export default movieRepository;

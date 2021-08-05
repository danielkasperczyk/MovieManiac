import initAxios from '@/services/repositories/MovieAPI/repository';
import { GenreRepository } from '@/services/repositories/MovieAPI/types';

const genreRepository: GenreRepository = {
  resource: 'genre/movie/list',

  genreList() {
    return initAxios.get(this.resource);
  },
};

export default genreRepository;

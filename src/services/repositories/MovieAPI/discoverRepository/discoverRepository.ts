import initAxios from '@/services/repositories/MovieAPI/repository';
import { DiscoverRepository } from '@/services/repositories/MovieAPI/types';

const discoverRepository: DiscoverRepository = {
  resource: 'discover/movie',

  moviesByGenre(genreId, page) {
    return initAxios.get(this.resource, {
      params: {
        page,
        with_genres: genreId,
      },
    });
  },
};

export default discoverRepository;

import initAxios from '@/services/repositories/MovieAPI/repository';
import { SearchRepository } from '@/services/repositories/MovieAPI/types';

const searchRepository: SearchRepository = {
  resource: 'search/',

  findMovie(title, page) {
    return initAxios.get(`${this.resource}movie`, {
      params: {
        query: title,
        page,
      },
    });
  },
};

export default searchRepository;

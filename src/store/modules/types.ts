import { Genre } from '@/services/repositories/MovieAPI/genreRepository/types';

export interface MoviesState {
  genres: Genre[];
}

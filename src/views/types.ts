import { Movie } from '@/services/repositories/MovieAPI/movieRepository/types';

export interface MoviesState {
  error: boolean;
  fetching: boolean;
  maxPages: number;
  movies: Movie[];
}

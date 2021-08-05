import { Movie } from '@/services/repositories/MovieAPI/movieRepository/types';

export interface DiscoverResponse {
  page: number;
  results: Movie[];
}

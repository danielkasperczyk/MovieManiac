import {
  MovieDetails,
  TrailerResult,
  PopularityResponse,
} from '@/services/repositories/MovieAPI/movieRepository/types';

export interface MovieDetailsState {
  fetching: boolean;
  error: boolean;
  movie: MovieDetails;
  movieTrailer: TrailerResult | {};
  similarMovies: PopularityResponse | {};
}

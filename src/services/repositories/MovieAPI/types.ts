import { AxiosResponse } from 'axios';
import { GenresResponse } from '@/services/repositories/MovieAPI/genreRepository/types';
import {
  PopularityResponse,
  UpcomingResponse,
  MovieDetails,
  TrailerResponse,
} from '@/services/repositories/MovieAPI/movieRepository/types';
import { DiscoverResponse } from '@/services/repositories/MovieAPI/discoverRepository/types';

export interface MovieRepository {
  resource: string;

  popular: (page: string | (string | null)[]) => Promise<AxiosResponse<PopularityResponse>>;
  topRated: (page: string | (string | null)[]) => Promise<AxiosResponse<PopularityResponse>>;
  upcoming: (page: string | (string | null)[]) => Promise<AxiosResponse<UpcomingResponse>>;
  details: (movieId: string) => Promise<AxiosResponse<MovieDetails>>;
  trailer: (movieId: string) => Promise<AxiosResponse<TrailerResponse>>;
  similar: (movieId: string) => Promise<AxiosResponse<PopularityResponse>>;
}

export interface GenreRepository {
  resource: string;

  genreList: () => Promise<AxiosResponse<GenresResponse>>;
}

export interface DiscoverRepository {
  resource: string;

  moviesByGenre: (
    genreId: string,
    page: string | (string | null)[],
  ) => Promise<AxiosResponse<DiscoverResponse>>;
}

export interface SearchRepository {
  resource: string;

  findMovie: (title: string, page: string) => Promise<AxiosResponse<any>>;
}

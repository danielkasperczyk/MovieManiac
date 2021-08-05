<template>
  <v-container :fill-height="fetching || error ? true : false">
    <div v-if="!fetching">
      <MovieDetailsMain
        v-if="Object.values(movie).length"
        :movie="movie"
        :movieTrailer="movieTrailer"
        :fetching="fetching"
      />
      <div v-if="!fetching" class="d-flex flex-wrap justify-center mt-5">
        <movies-item
          v-for="(movie, index) in similarMovies"
          :key="index"
          :movie="movie"
          :loading="fetching"
        />
      </div>
    </div>
    <div class="d-flex justify-center align-centers flex-grow-1" v-if="fetching">
      <v-progress-circular color="primary" type="image" indeterminate />
    </div>
    <ErrorHandler v-if="error" :backToHome="true" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import movieRepository from '@/services/repositories/MovieAPI/movieRepository/MovieRepository';
import { MovieDetailsState } from './types';

export default Vue.extend({
  name: 'MovieDetails',
  data() {
    return {
      fetching: false,
      error: false,
      movie: {},
      movieTrailer: {},
      similarMovies: {},
    } as MovieDetailsState;
  },
  components: {
    MoviesItem: () => import('@/components/MoviesItem.vue'),
    MovieDetailsMain: () => import('@/views/movieDetails/MovieDetailsMain.vue'),
    ErrorHandler: () => import('@/components/ErrorHandler.vue'),
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async movieDetails(): Promise<void> {
      const { data } = await movieRepository.details(this.movieId);
      this.movie = data;
    },
    async getMovieTrailer(): Promise<void> {
      const {
        data: { results },
      } = await movieRepository.trailer(this.movieId);

      const trailer = results.find((movie) => movie.type === 'Trailer' && movie.site === 'YouTube');
      this.movieTrailer = trailer || {};
    },
    async getSimilarMovies(): Promise<void> {
      const {
        data: { results },
      } = await movieRepository.similar(this.movieId);
      this.similarMovies = results;
    },
    async initComponent(): Promise<void> {
      this.fetching = true;
      this.error = false;
      try {
        await this.movieDetails();
        await this.getMovieTrailer();
        await this.getSimilarMovies();
      } catch (err) {
        this.error = true;
      }
      this.fetching = false;
    },
  },
  watch: {
    movieId() {
      this.initComponent();
    },
    movie() {
      document.title = `Movie Maniac | ${this.movie.title}`;
    },
  },
  created() {
    this.initComponent();
  },
});
</script>

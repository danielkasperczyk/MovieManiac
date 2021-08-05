<template>
  <v-container fill-height>
    <div class="d-flex flex-wrap justify-center" v-if="movies.length">
      <template>
        <movies-item v-for="(movie, index) in movies" :key="index" :movie="movie" />
        <MoviesButtons :maxPages="maxPages" />
      </template>
    </div>
    <div class="d-flex justify-center align-centers flex-grow-1" v-if="fetching">
      <v-progress-circular color="primary" type="image" indeterminate />
    </div>
    <ErrorHandler v-if="error" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import getRepository from '@/utilities/getRepository';
import { MoviesState } from '@/views/types';

export default Vue.extend({
  name: 'Movies',
  data() {
    return {
      error: false,
      fetching: true,
      maxPages: 0,
      movies: [],
    } as MoviesState;
  },
  props: {
    filtered_by: {
      type: String,
      required: true,
    },
  },
  components: {
    MoviesItem: () => import('@/components/MoviesItem.vue'),
    MoviesButtons: () => import('@/views/movies/MoviesButtons.vue'),
    ErrorHandler: () => import('@/components/ErrorHandler.vue'),
  },

  methods: {
    async getMovies() {
      this.error = false;
      this.fetching = true;
      const { page, query } = this.$route.query;
      try {
        const {
          data: { results, total_pages: totalPages },
        } = await getRepository(this.filtered_by, page, query);
        this.maxPages = totalPages;
        this.movies = results;
        this.fetching = false;
      } catch (error) {
        this.fetching = false;
        this.error = true;
      }
    },
  },
  watch: {
    '$route.fullpath': {
      handler() {
        this.getMovies();
      },
    },
    '$route.query.page': {
      handler() {
        this.getMovies();
      },
    },
  },
  created() {
    this.getMovies();
    document.title = 'Movie Maniac';
  },
});
</script>

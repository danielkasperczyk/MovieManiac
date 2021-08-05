<template>
  <div :class="flexClass" v-if="Object.values(movie).length">
    <v-card :max-width="imageWidth">
      <v-img
        v-if="!fetching"
        :src="image"
        transition="scale-transition"
        :lazy-src="lazyImage"
      ></v-img>
    </v-card>
    <div :class="isMediumDevice ? 'ma-3' : 'mt-3'">
      <h1>{{ movie.title }}</h1>
      <h3>{{ movie.tagline }}</h3>
      <MovieDetailsRating :rating="movie.vote_average" />
      <p class="subtitle-1">{{ movie.overview }}</p>
      <MovieDetailsLinks
        :imdb="movie.imdb_id"
        :youtube="movieTrailer.key"
        :homepage="movie.homepage"
      />
      <MovieDetailsGenres :genres="movie.genres" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import getImage from '@/utilities/getImage';

export default Vue.extend({
  name: 'MovieDetailsMain',
  components: {
    MovieDetailsGenres: () => import('@/views/movieDetails/MovieDetailsGenres.vue'),
    MovieDetailsLinks: () => import('@/views/movieDetails/MovieDetailsLinks.vue'),
    MovieDetailsRating: () => import('@/views/movieDetails/MovieDetailsRaiting.vue'),
  },
  props: ['movie', 'movieTrailer', 'fetching'],
  computed: {
    lazyImage(): string {
      return 'https://source.unsplash.com/user/anniespratt/yI3weKNBRTc';
    },
    isMediumDevice(): boolean {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    flexClass(): string {
      const styleClass = this.isMediumDevice ? 'd-flex' : 'd-flex flex-column';
      return styleClass;
    },
    image(): string {
      const { poster_path: poster, backdrop_path: backdrop } = this.movie;
      if (poster !== undefined && backdrop !== undefined) {
        return this.isMediumDevice ? getImage('original', poster) : getImage('original', backdrop);
      }
      return '';
    },
    imageWidth(): string {
      return this.isMediumDevice ? '350px' : '100%';
    },
  },
});
</script>

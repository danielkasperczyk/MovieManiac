<template>
  <v-card :max-width="cardWidth" class="ma-2 text-center" @click="goToDetails" v-if="posterImage">
    <div>
      <v-img
        :src="posterImage"
        alt="no image"
        transition="fade-transition"
        :lazy-src="lazyImage"
      ></v-img>
      <div class="d-flex flex-column align-center">
        <v-card-title class="subtitle-1">{{ movie.title }}</v-card-title>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import getImage from '@/utilities/getImage';

export default Vue.extend({
  name: 'MoviesItem',
  props: ['movie'],

  computed: {
    isMobile(): boolean {
      return this.$vuetify.breakpoint.mobile;
    },
    lazyImage(): string {
      return 'https://source.unsplash.com/user/anniespratt/yI3weKNBRTc';
    },
    posterImage(): string | undefined {
      const { poster_path: poster } = this.movie;
      return poster
        ? getImage('poster', poster)
        : 'https://source.unsplash.com/user/anniespratt/yI3weKNBRTc';
    },
    cardWidth(): string {
      return this.isMobile ? '120px' : '250px';
    },
    movieId(): string {
      return `${this.movie.id}`;
    },
  },
  methods: {
    goToDetails(): void {
      this.$router.push({ name: 'movieDetails', params: { movieId: this.movieId } });
    },
  },
});
</script>
<style lang="scss" scoped>
.v-sheet.v-card {
  background-color: transparent;
}
</style>

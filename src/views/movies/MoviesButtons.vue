<template>
  <v-container :class="justifyButtons">
    <v-btn v-show="showPrevButton" color="accent" @click="changePage(prevPage())">
      <v-icon class="mr-2" dense>mdi-arrow-left</v-icon>
      {{ $t('BUTTONS.PREV') }}
    </v-btn>
    <v-btn v-show="showNextButton" color="accent" @click="changePage(nextPage())">
      {{ $t('BUTTONS.NEXT') }}
      <v-icon class="ml-2" dense>mdi-arrow-right</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import MovieMixins from '@/mixins/MoviesMixins';

export default MovieMixins.extend({
  name: 'MoviesButtons',
  props: {
    maxPages: {
      type: Number,
    },
  },
  computed: {
    justifyButtons(): string {
      return this.showPrevButton ? 'd-flex justify-space-between' : 'd-flex justify-end';
    },
    showPrevButton(): boolean {
      return typeof this.currentPage === 'string' && parseInt(this.currentPage, 10) > 1;
    },
    showNextButton(): boolean {
      return typeof this.currentPage === 'string' && parseInt(this.currentPage, 10) < this.maxPages;
    },
    currentGenre(): string {
      return this.$route.params.filtered_by;
    },
  },
  methods: {
    prevPage(): string {
      return `${parseInt(`${this.currentPage}`, 10) - 1}`;
    },
    nextPage(): string {
      return `${parseInt(`${this.currentPage}`, 10) + 1}`;
    },
  },
});
</script>

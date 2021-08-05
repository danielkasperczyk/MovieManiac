<template>
  <div class="d-flex justify-space-between">
    <div>
      <v-btn v-if="imdb" rounded color="primary" @click="goToImdb">{{ $t('LINKS.IMDB') }}</v-btn>
      <v-btn v-if="youtube" rounded color="warning" @click="goToYoutube" class="mx-3">
        {{ $t('LINKS.YOUTUBE') }}
      </v-btn>
      <v-btn v-if="homepage" rounded color="secondary" @click="goToMoviepage">
        <v-icon>mdi-link</v-icon>
      </v-btn>
    </div>
    <v-btn rounded color="accent" @click="goBack">
      <v-icon class="mr-1" dense>mdi-arrow-left</v-icon>
      {{ $t('BUTTONS.BACK') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MovieDetailsLinks',

  props: {
    imdb: {
      type: String,
    },
    youtube: {
      type: String,
    },
    homepage: {
      type: String,
    },
  },
  methods: {
    goToImdb(): void {
      window.open(`https://www.imdb.com/title/${this.imdb}`, '_blank');
    },
    goToYoutube(): void {
      window.open(`https://www.youtube.com/watch?v=${this.youtube}`, '_blank');
    },
    goToMoviepage(): void {
      window.open(this.homepage, '_blank');
    },
    goBack(): void {
      this.$router.go(-1);
    },
  },
});
</script>

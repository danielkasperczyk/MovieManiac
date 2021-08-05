<template>
  <div class="d-flex flex-wrap">
    <v-chip v-for="({ name }, index) in genres" :key="index" class="mb-0 mr-3 my-2 body-1">
      {{ name }}
    </v-chip>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MovieDetailsGenres',
  props: {
    genres: {
      type: Array,
    },
  },
});
</script>

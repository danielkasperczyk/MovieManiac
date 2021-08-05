<template>
  <div class="d-flex align-center">
    <h3 class="mb-0 mr-2">{{ $t('RATING') }}</h3>
    <v-rating
      empty-icon="mdi-star-outline"
      full-icon="mdi-star"
      length="5"
      readonly
      size="20"
      :value="ratingValue()"
    ></v-rating>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MovieDetailsRating',
  props: {
    rating: {
      type: Number,
    },
  },
  methods: {
    ratingValue(): number {
      return Math.ceil(this.rating / 2);
    },
  },
});
</script>

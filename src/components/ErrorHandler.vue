<template>
  <v-container class="d-flex justify-center align-center">
    <v-card color="warning">
      <v-alert type="warning">
        <p>{{ $t('ERRORS.PAGE_NOT_EXIST') }}</p>
      </v-alert>
      <v-flex>
        <v-btn lnik dense @click="back" color="primary" block>
          {{ $t('BUTTONS.FIRST_PAGE') }}
        </v-btn>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import MovieMixins from '@/mixins/MoviesMixins';

export default MovieMixins.extend({
  name: 'ErrorHanlder',
  props: {
    backToHome: {
      type: Boolean,
    },
  },
  methods: {
    back(): void {
      if (this.backToHome) {
        this.backToPopular();
      } else {
        this.changeToFirstPage();
      }
    },
    backToPopular(): void {
      this.$router.push({
        path: '/popular?page=1',
      });
    },
    changeToFirstPage(): void {
      this.changePage('1');
    },
  },
});
</script>

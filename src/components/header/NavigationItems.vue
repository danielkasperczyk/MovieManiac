<template>
  <div>
    <div class="d-flex justify-center py-3">
      <h2 color="primary">{{ $t('APP_TITLE') }}</h2>
    </div>
    <v-divider />
    <v-list>
      <v-list-item-group v-model="selectedGenre">
        <h4 class="text-uppercase ma-2">{{ $t('DISCOVER') }}</h4>
        <v-list-item
          v-for="{ text, icon, value } in discoverMovies"
          :key="value"
          :value="value"
          @click="setUrlProps(value)"
          :disabled="selectedGenre === value"
        >
          <v-list-item-icon>
            <v-icon dense>
              {{ icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ $t(text) }}
          </v-list-item-content>
        </v-list-item>
        <h4 class="text-uppercase ma-2">{{ $t('GENRES') }}</h4>
        <v-list-item
          v-for="{ id, name } in genres"
          :key="id"
          :value="name"
          @click="setUrlProps(name)"
          :disabled="selectedGenre === name"
        >
          <v-list-item-icon>
            <v-icon dense>mdi-album</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ name }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'NavigationItems',
  data() {
    return {
      selectedGenre: '',
    };
  },
  computed: {
    ...mapState('movies', ['genres']),
    discoverMovies() {
      return [
        {
          text: 'POPULAR',
          icon: 'mdi-heart',
          value: 'Popular',
        },
        {
          text: 'TOP_RATED',
          icon: 'mdi-star',
          value: 'Top_rated',
        },
        {
          text: 'UPCOMING',
          icon: 'mdi-calendar',
          value: 'Upcoming',
        },
      ];
    },
  },
  methods: {
    setUrlProps(newUrl: string, query = '', page = '1'): void {
      this.$router.push({
        name: 'movies',
        params: { filtered_by: newUrl.toLowerCase() },
        query: query !== '' ? { query, page } : { page },
      });
    },
  },
  watch: {
    '$route.params.filtered_by': {
      handler(newVal: string) {
        if (newVal === 'search' || newVal === 'movie') {
          this.selectedGenre = '';
        } else if (newVal !== undefined) {
          this.selectedGenre = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        }
      },
    },
  },
  created() {
    const { filtered_by: filteredBy, movieId } = this.$route.params;
    const { page, query } = this.$route.query;
    if (filteredBy !== undefined) {
      const path: string = filteredBy.charAt(0).toUpperCase() + filteredBy.slice(1);
      this.selectedGenre = path;

      this.setUrlProps(this.selectedGenre, query, page);
    } else if (movieId !== undefined) {
      this.selectedGenre = '';
    } else {
      this.selectedGenre = 'Popular';
      this.setUrlProps(this.selectedGenre);
    }
  },
});
</script>
<style lang="scss" scoped>
.v-list-item-group .v-list-item--active {
  color: $application__color--light;
  background-color: var(--v-primary-base);
}
</style>

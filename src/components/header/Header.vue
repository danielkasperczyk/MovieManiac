<template>
  <v-card>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-form @submit.prevent="findMovie">
        <v-text-field
          color="primary"
          v-model="movieSearch"
          :placeholder="$t('INPUTS.FIND_MOVIE')"
          hide-details="true"
        ></v-text-field>
      </v-form>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app light>
      <NavigationItems />
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      movieSearch: '',
      drawer: null,
    };
  },
  components: {
    NavigationItems: () => import('@/components/header/NavigationItems.vue'),
  },
  methods: {
    findMovie(): void {
      this.$router.push({
        name: 'movies',
        params: { filtered_by: 'search' },
        query: { query: this.movieSearch, page: '1' },
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.v-navigation-drawer__content {
  -webkit-scrollbar: hidden;
  overflow-y: scroll;
}
</style>

<template>
  <v-app app>
    <Header />
    <v-main>
      <transition name="fade" mode="in-out">
        <router-view :key="$route.path"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Header from '@/components/header/Header.vue';

export default Vue.extend({
  name: 'App',
  components: { Header },
  methods: {
    ...mapActions('movies', ['moviesGenres']),
  },
  created() {
    this.moviesGenres();
  },
});
</script>

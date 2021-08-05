import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/:filtered_by',
    name: 'movies',
    component: () => import('@/views/movies/Movies.vue'),
    props: true,
  },
  {
    path: '/movie/:movieId',
    name: 'movieDetails',
    component: () => import('@/views/movieDetails/MovieDetails.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0, behavior: 'smooth' };
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;

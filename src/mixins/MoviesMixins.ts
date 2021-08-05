import Vue from 'vue';

export default Vue.extend({
  computed: {
    currentPage(): string {
      const { page } = this.$route.query;
      return typeof page === 'string' ? page : '';
    },
  },
  methods: {
    changePage(page: string): void {
      const { filtered_by: filteredBy } = this.$route.params;
      const { query } = this.$route.query;
      if (query !== undefined) {
        this.$router.push({
          name: 'movies',
          params: { filteredBy },
          query: { query, page },
        });
      } else {
        this.$router.push({
          name: 'movies',
          params: { filteredBy },
          query: { page },
        });
      }
    },
  },
});

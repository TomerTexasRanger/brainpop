<template>
  <div class="filters">
    <base-filter v-for="filter in filterOptions" :key="filter" :filter=filter></base-filter>
  </div>
</template>

<script>
import BaseFilter from "@/components/BaseFilter.vue";

export default {
  name: 'feed-filters',
  components: {BaseFilter},
  props: {
    filterOptions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedFilter: null,
    };
  },
  methods: {
    applyFilter(filter) {
      this.selectedFilter = filter;
      this.$emit('filter-changed', filter);
    }
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}


</style>

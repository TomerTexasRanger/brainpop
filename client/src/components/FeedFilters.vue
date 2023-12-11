<template>
  <div class="filters">
    <base-filter v-for="filter in filterOptions" :key="filter" :selectedFilter="selectedFilter" :filter=filter @select-filter="applyFilter"></base-filter>
  </div>
</template>

<script>
import BaseFilter from "@/components/BaseFilter.vue";
import {ACTIVITY_FEED_FILTERS} from "@/resources/const";

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
  },
  mounted() {
    this.applyFilter(ACTIVITY_FEED_FILTERS['ALL_WORK'])
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

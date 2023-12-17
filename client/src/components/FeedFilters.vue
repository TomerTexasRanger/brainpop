<template>
  <div class="filters">
    <base-button v-for="filter in filterOptions" :key="filter" :text="filter"
                 :button-icon="selectedFilter === filter ? 'fa fa-check-circle' : ''"
                 :btn-class="{'with-border': true, 'active': selectedFilter === filter, 'bp-font-md bp-font-normal' : true}" @btn-action="applyFilter"></base-button>
  </div>
</template>

<script>
import {ACTIVITY_FEED_FILTERS} from "@/resources/const";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: 'feed-filters',
  components: {BaseButton},
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
}
@media (max-width: 992px) {
  .filters {
    flex-wrap: nowrap;
  }

}

</style>

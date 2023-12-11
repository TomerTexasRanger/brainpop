<template>
  <button
    class="filter"
    :key="filter"
    :class="{ 'active': isSelected }"
    @click="applyFilter(filter)">
    <i v-if="isSelected" class="fa fa-check-circle"></i>{{ filter }}
  </button>
</template>

<script>
export default {
  name: 'base-filter',
  props: {
    filter: {
      type: String,
      default: () => ''
    },
    selectedFilter: String
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    applyFilter(filter) {
      this.$emit('select-filter', filter);
    }
  },
  watch:{
    selectedFilter(newVal){
      this.isSelected = newVal === this.filter;
    },
  }
};
</script>

<style scoped>
.filter {
  color: var(--turquoise);
  padding: 0.3rem 0.4rem;
  border: 2px solid var(--turquoise);
  border-radius: 5px;
  font-size: 0.5rem;
  font-weight: 600;
  background-color: white;
}

.filter.active,
.filter:hover {
  background-color: var(--search-button-active);
  border-color: var(--turquoise);
}

</style>

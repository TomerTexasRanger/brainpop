<template>

  <button
    class="filter"
    :key="filter"
    :class="{ 'active': isSelected }"
    @click="applyFilter(filter)">
    <i class="fa fa-check-circle"></i>    {{ filter }}
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
  color: var(--search-button);
  padding: 10px 10px;
  border: 2px solid var(--search-button);
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: white;
}

.filter.active,
.filter:hover {
  background-color: var(--search-button-active);
  border-color: var(--search-button);
}

</style>

<template>
  <form class="search-container" @submit.prevent="emitSearch">
    <input
      class="search-input bp-font-sm bp-font-normal"
      type="text"
      v-model="searchTerm"
      placeholder="Search Timeline"
      @input="filterSuggestions"
      @keydown.down="navigateSuggestions('down')"
      @keydown.up="navigateSuggestions('up')"
      @keydown.enter="selectSuggestionViaEnterKey"
    >
    <ul v-if="filteredSuggestions.length" class="suggestions-list">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        :class="{ 'active-suggestion': index === activeIndex }"
        @click="selectSuggestion(suggestion)"
        @mouseover="activeIndex = index"
      >
        {{ suggestion }}
      </li>
    </ul>
    <button class="search-button" type="submit">
      <i class="fa fa-search"></i>
    </button>
  </form>
</template>
<script>
export default
{
  name: 'base-search',
  data() {
    return {
      searchTerm: '',
      filteredSuggestions: [],
      activeIndex: -1
    };
  },
  props: {
    suggestions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitSearch(event) {
      this.$emit('search', this.searchTerm);
      this.filteredSuggestions = [];
    },
    filterSuggestions() {
      this.activeIndex = -1;
      if (!this.searchTerm) {
        this.filteredSuggestions = [];
        return;
      }
      this.filteredSuggestions = this.suggestions.filter(
        suggestion => suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    navigateSuggestions(direction) {
      if (direction === 'down' && this.activeIndex < this.filteredSuggestions.length - 1) {
        this.activeIndex++;
      } else if (direction === 'up' && this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    selectSuggestionViaEnterKey() {
      if (this.activeIndex !== -1) {
        this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
      }
    },
    selectSuggestion(suggestion) {
      this.searchTerm = suggestion;
        this.emitSearch()
    }
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  position: relative;
}

.search-input {
  width: 90%;
  padding: 0.6rem 0.5rem;
  border: 0.15rem solid var(--border-gray-light);
  border-inline-end: none;
  border-radius: 5px;
  border-end-end-radius: 0;
  border-start-end-radius: 0;
}

.search-button {
  width: 10%;
  border: none;
  border-end-end-radius: 5px;
  border-start-end-radius: 5px;
  background: var(--turquoise) none;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  font-size: 0.7rem;
}

.search-button i {
  color: white;
  font-size: 1.5rem;
  padding-bottom: 0.2rem;
}

.suggestions-list {
  position: absolute;
  max-height: 8rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0.15rem solid var(--border-gray-light);
  border-top: none;
  overflow: auto;
}

.suggestions-list::-webkit-scrollbar {
  width: 25px;
}

.suggestions-list::-webkit-scrollbar-track {
  background-color: var(--background-gray-light);
}

.suggestions-list::-webkit-scrollbar-thumb {
  background: var(--border-gray-light);
  border-radius: 50px;
  border: 6px solid var(--background-gray-light);
}

.suggestions-list li {
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.suggestions-list li:hover {
  background-color: transparent;
}

.search-input:-webkit-any-link:focus {
  background-color: transparent !important;
  border: 1px solid var(--background-gray-light);
}

.active-suggestion {
  background-color: var(--border-gray-light);
}

.suggestions-list::-webkit-scrollbar-thumb:hover {
  background: var(--font-gray-light);
}
</style>

<template>
    <form  class="search-container" @submit.prevent="emitSearch">
      <input
        class="search-input"
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
export default {
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
      this.selectSuggestion(this.filteredSuggestions[this.activeIndex] || this.searchTerm);
      this.$emit('search', this.searchTerm);
      this.filteredSuggestions = [];
      this.searchTerm = null;
    },
    filterSuggestions() {
      this.activeIndex = -1; // Reset active index on input change
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
    }
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  position: relative;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0.09rem solid var(--border-gray-light);
  border-top: none;
  height: 8rem;
  overflow: auto;
  scrollbar-track-color: var(--border-gray-light);
}

.suggestions-list li {
  padding: 0.3rem;
  cursor: pointer;
  font-size: 0.8rem;
}

.suggestions-list li:hover {
  background-color: transparent;
}

.search-container {
  display: flex;
}

.search-input {
  width: 100%;
  padding: 0.25rem;
  border: 0.09rem solid var(--border-gray-light);
  border-inline-end: none;
  border-radius: 4px;
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  font-size: 0.6rem;
}

.search-input:-webkit-any-link:focus {
  background-color: transparent !important;
  border: 1px solid var(--font-gray-light);
}

.search-button {
  border: none;
  border-end-end-radius: 4px;
  border-start-end-radius: 4px;
  background: var(--turquoise) none;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  font-size: 0.7rem;
}

.active-suggestion {
  background-color: var(--font-gray-light);
}

.search-button i {
  color: white;
}

.suggestions-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.suggestions-list::-webkit-scrollbar-thumb {
  background: var(--font-gray-light);
  border-radius: 4px;
}

.suggestions-list::-webkit-scrollbar-thumb:hover {
  background: var(--border-gray-light);
}

.suggestions-list::-webkit-scrollbar {
  width: 15px;
}
</style>

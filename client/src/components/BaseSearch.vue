<!--<template>-->
<!--  <div class="search-container">-->
<!--    <input class="search-input" type="text"  v-model="searchTerm" placeholder="Search Timeline" @keyup.enter="emitSearch">-->
<!--    <button class="search-button" @click="emitSearch"><i class="fas fa-search"></i></button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'base-search',-->
<!--  data() {-->
<!--    return {-->
<!--      searchTerm: '',-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    emitSearch() {-->
<!--      this.$emit('search', this.searchTerm);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.search-container {-->
<!--  display: flex;-->
<!--}-->

<!--.search-input {-->
<!--  width: 100%;-->
<!--  padding: 10px;-->
<!--  border: 1px solid #ccc;-->
<!--  border-inline-end: none ;-->
<!--  border-radius: 4px;-->
<!--  border-end-end-radius: 0;-->
<!--  border-start-end-radius: 0;-->
<!--  font-size: 16px;-->
<!--}-->

<!--.search-button {-->
<!--  right: 0;-->
<!--  top: 0;-->
<!--  border: none;-->
<!--  border-end-end-radius: 4px;-->
<!--  border-start-end-radius: 4px;-->
<!--  background: var(&#45;&#45;search-button) none;-->
<!--  padding: 10px;-->
<!--  cursor: pointer;-->
<!--}-->
<!--.search-button i{-->
<!--  color: white;-->
<!--}-->

<!--</style>-->


<template>
  <div class="search-container">
    <input
      class="search-input"
      type="text"
      v-model="searchTerm"
      placeholder="Search Timeline"
      @input="filterSuggestions"
      @keyup.enter="emitSearch"
    >
    <ul v-if="filteredSuggestions.length" class="suggestions-list">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
    <button class="search-button" @click="emitSearch">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'base-search',
  data() {
    return {
      searchTerm: '',
      suggestions: ['cells', 'dogs','dogs','dogs','dogs','dogs', 'dogs','dogs','dogs','dogs','dogs','dogs','dogs','dogs','dogs'], // This should be populated with your autocomplete suggestions.
      filteredSuggestions: []
    };
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.searchTerm);
      this.filteredSuggestions = [];
    },
    filterSuggestions() {
      if (!this.searchTerm) {
        this.filteredSuggestions = [];
        return;
      }
      this.filteredSuggestions = this.suggestions.filter(
        suggestion => suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    selectSuggestion(suggestion) {
      this.searchTerm = suggestion;
      this.emitSearch();
    }
  },
  // You might want to add a watcher or a computed property if your suggestions are dynamic or come from an API.
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
  border: 1px solid #ccc;
  border-top: none;
  height: 200px;
  overflow: auto;
  scrollbar-track-color: #00a3f5;
}

.suggestions-list li {
  padding: 10px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background-color: #f0f0f0;
}

.search-container {
  display: flex;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-inline-end: none;
  border-radius: 4px;
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  font-size: 16px;
}

.search-button {
  right: 0;
  top: 0;
  border: none;
  border-end-end-radius: 4px;
  border-start-end-radius: 4px;
  background: var(--search-button) none;
  padding: 10px;
  cursor: pointer;
}

.search-button i {
  color: white;
}

/* The scrollbar track (the part that the handle slides within) */
.suggestions-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

/* The draggable scrolling handle */
.suggestions-list::-webkit-scrollbar-thumb {
  background: var(--search-text);
  border-radius: 4px;
}

/* On hover of the scrolling handle */
.suggestions-list::-webkit-scrollbar-thumb:hover {
  background: var(--container-outline);
}

/* The scrollbar itself (including track and handle) */
.suggestions-list::-webkit-scrollbar {
  width: 15px; /* You can set the width of the scrollbar here */
}


</style>

<template>
  <div class="activities-feed">
    <header>
      <h1>Timeline</h1>
      <div>
        <router-link :to=toRoute>API: {{ toRoute }}</router-link>
      </div>
    </header>
    <base-search :suggestions="getSuggestions" class="feed-search" @search="handleSearch"></base-search>
    <div class="feed-filters">
      <h3>Filters by:</h3>
      <feed-filters :filterOptions="filterOptions" @filter-changed="handleFilterChange"/>
    </div>

    <div>
      <base-group v-for="(monthGroup, index) in paginatedActivities"
                  :key="monthGroup.name"
                  :group-name="monthGroup.month"
                  :group="monthGroup.activities"
                  :last-index="index === paginatedActivities.length - 1"
                  @group-card-action="handleViewWork"
      ></base-group>
      <div  v-if="hasMoreActivities" class="load-more-row">
        <button class="load-more-btn" @click="loadMore"><small><i
          class="fa fa-angle-down"></i></small> Load more
        </button>
      </div>
    </div>


    <feed-item-view v-if="showZoomView" :card="getSelectedActivity"
                    @close-modal="handleCloseModal"/>


  </div>
</template>


<script>

import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';

import FeedFilters from "@/components/FeedFilters.vue";
import FeedItemView from "@/components/FeedItemView.vue";
import BaseGroup from "@/components/BaseGroup.vue";
import BaseSearch from "@/components/BaseSearch.vue";
import {ACTIVITY_FEED_FILTERS} from "@/resources/const";


export default {
  name: 'app-feed',
  components: {
    BaseSearch,
    BaseGroup,
    FeedItemView,
    FeedFilters,
  },
  data() {
    return {
      filterOptions: Object.values(ACTIVITY_FEED_FILTERS),
      toRoute: this.$route.name === 'v1' ? '/v2' : '/v1',
    };
  },
  computed: {
    ...mapState(['activities', 'selectedActivity', 'searchTerm', 'selectedFilter', 'showZoomModal']),
    ...mapGetters(['paginatedActivities', 'currentPage', 'pageSize', 'showZoomView', 'getSelectedActivity','getSuggestions']),
    hasMoreActivities() {
      return this.paginatedActivities.length < this.activities.length;
    },

  },
  methods: {
    ...mapMutations(['setSelectedActivity', 'nextPage', 'setSearchTerm', 'setSelectedFilter', 'setShowView', 'setActivities']),

    loadMore() {
      this.nextPage();
    },
    handleSearch(searchTerm) {
      // console.log(searchTerm)
      this.setSearchTerm(searchTerm);
    },
    handleFilterChange(selectedFilter) {
      this.setSelectedFilter(selectedFilter);
    },
    handleViewWork(activity) {
      this.$router.push({name: `view_${this.$route.name}`, params: {id: activity.id}}).finally()
    },

    handleCloseModal() {
      this.setShowView(false);
      this.setSelectedActivity(null);
      this.$router.back();
    },
  },
  watch: {
    '$route'(to) {
      this.toRoute = to.name === 'v1' ? '/v2' : '/v1';
    }
  },


}
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.feed-search {
  width: 40%;
  margin-bottom: 0.8rem;
}
.feed-filters{
  margin-bottom: 0.8rem;
}
.feed-filters h3 {
  margin-bottom: 0.8rem;
}

.load-more-btn {
  border: none;
  background-color: transparent;
  color: var(--search-button);
  font-weight: bold;
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  gap: 2px;
  cursor: pointer;

}

.load-more-row {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
</style>

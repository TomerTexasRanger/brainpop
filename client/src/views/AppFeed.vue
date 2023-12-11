<template>
  <div class="activities-feed">
    <h1>Timeline</h1>
    <button @click="routeDurp()">hurf durf</button>
    <base-search class="feed-search" @search="handleSearch"></base-search>
    <h2>
     <span>Filters:</span>
    <feed-filters :filterOptions="filterOptions" @filter-changed="handleFilterChange"/>
    </h2>
    <div>
      <base-group v-for="(monthGroup, index) in paginatedActivities"
                  :key="monthGroup.name"
                  :group-name="monthGroup.month"
                  :group="monthGroup.activities"
                  :last-index="index === paginatedActivities.length - 1"
                  @group-card-action="handleViewWork"
      ></base-group>
      <div class="load-more-row">
        <button class="load-more-btn" v-if="hasMoreActivities" @click="loadMore"><small><i
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
      filterOptions: ACTIVITY_FEED_FILTERS,
    };
  },
  computed: {
    ...mapState(['activities', 'selectedActivity', 'searchTerm', 'selectedFilter', 'showZoomModal']),
    ...mapGetters(['paginatedActivities', 'currentPage', 'pageSize', 'showZoomView', 'getSelectedActivity']),
    hasMoreActivities() {
      return this.paginatedActivities.length < this.activities.length;
    },

  },
  methods: {
    ...mapMutations(['setSelectedActivity', 'nextPage', 'setSearchTerm', 'setSelectedFilter', 'setShowView', 'setActivities']),
    routeDurp() {
      this.$router.push({name: 'v2'})
    },
    loadMore() {
      this.nextPage();
    },
    handleSearch(searchTerm) {
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

}
</script>
<style>
.activities-feed h2 span{
  margin: 0 0 10px;
  font-weight: 300;
  font-size: 1.3rem;
}
.feed-search {
  width: 30%;
  margin-bottom: 20px;
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

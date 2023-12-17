<template>
  <div class="activities-feed">
    <header>
      <h1 class="bp-font-bold bp-font-xl">Timeline</h1>
      <div>
        <router-link class="bp-font-md bp-font-bold" :to=toRoute>API: {{ toRoute }}</router-link>
      </div>
    </header>
    <base-search :suggestions="getSuggestions" class="feed-search"
                 @search="handleSearch"></base-search>
    <div class="feed-filters">
      <h2 class="bp-font-light bp-font-md">Filter by:</h2>
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
      <div class="load-more-row">
        <base-button :btn-class="{'bp-font-md bp-font-normal' : true}" v-if="hasMoreActivities" :button-icon="'fa fa-angle-down'" :text="'Show more'"
                     @btn-action="loadMore"></base-button>
      </div>
    </div>
    <base-modal v-if="showZoomView">
      <base-card :card-vertical="true">
        <template #CardActionBtn>
          <base-button @btn-action="handleCloseModal" :text="''"
                       :button-icon="'fa-regular fa-times-circle'"
                       :btn-class="{'bp-font-lg': true, 'bp-text-light-gray': true}"></base-button>
        </template>
        <template #cardIcon>
          <base-card-icon  :src="getSelectedActivity.topicData.iconPath" :alt="getSelectedActivity.displayTitle"
                           :icon-class="{[getSelectedActivity.product]: true}">
            <base-tag v-if="getSelectedActivity.product === 'bpjr'" :tag-class="{'bg-yellow': true}"
                      :text="'jr.'"></base-tag>
          </base-card-icon>
        </template>
        <template #cardTitle>
          <base-card-title>
            <template #mainTitle><h3 class="bp-font-md bp-font-normal">{{
                getSelectedActivity.displayTitle
              }}</h3></template>
            <template #secTitle><small
              class="bp-font-light bp-font-sm">{{ getSelectedActivity.createdDate | formatDate }}</small>
            </template>
          </base-card-title>
        </template>
        <template #cardData>

          <div class="">
            <p class="bp-font-md bp-font-light">{{getSelectedActivity.comment}}</p>
          </div>
          <div v-if="getSelectedActivity.hasScore"
               class="bp-text-turquoise bp-d-flex align-items-end bp-flex-gap-2">
            <span class="bp-font-sm bp-font-light">Score</span>
            <span class="bp-font-bold bp-font-sm">{{ getSelectedActivity.score }}/{{ getSelectedActivity.possibleScore }}</span>
          </div>
        </template>

      </base-card>
    </base-modal>

  </div>
</template>
<script>

import {mapState, mapMutations, mapGetters} from 'vuex';

import FeedFilters from "@/components/FeedFilters.vue";
import BaseGroup from "@/components/BaseGroup.vue";
import BaseSearch from "@/components/BaseSearch.vue";
import {ACTIVITY_FEED_FILTERS} from "@/resources/const";
import BaseCard from "@/components/BaseCard.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCardIcon from "@/components/BaseCardIcon.vue";
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseTag from "@/components/BaseTag.vue";

export default {
  name: 'app-feed',
  components: {
    BaseTag,
    BaseCardTitle,
    BaseCardIcon,
    BaseButton,
    BaseModal,
    BaseCard,
    BaseSearch,
    BaseGroup,
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
    ...mapGetters(['paginatedActivities', 'currentPage', 'pageSize', 'showZoomView', 'getSelectedActivity', 'getSuggestions']),
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
      this.toRoute = to.name.includes('v1') ? '/v2' : '/v1';
    }
  },
}
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
}

.feed-search {
  width: 35%;
  margin-bottom: 1rem;
}

.feed-filters {
  margin-bottom: 1rem;
}

.feed-filters h2 {
  margin-bottom: 1rem;
}

.load-more-row {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

@media (max-width: 992px) {
  .feed-search {
    width: 70%;
  }
  .feed-filters {
    overflow: auto;
  }
}

@media (max-width: 576px) {
  .feed-search {
    width: 100%;
  }
}

</style>

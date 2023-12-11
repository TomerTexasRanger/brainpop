import Vue from 'vue';
import Vuex from 'vuex';
import {ActivityFormattingService} from "@/services/client/activityFormattingService";
import {ACTIVITY_FEED_FILTERS} from "@/resources/const";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    activities: [],
    pageSize: 10,
    currentPage: 1,
    selectedActivity: null,
    searchTerm: '',
    selectedFilter: null,
    showZoomModal: false,
    filters: []
  },
  getters: {
    currentPage(state) {
      return state.currentPage;
    },
    getSelectedActivity(state) {
      return state.selectedActivity;
    },
    pageSize(state) {
      return state.pageSize;
    },
    showZoomView(state) {
      return state.showZoomModal;
    },
    paginatedActivities(state, getters) {
      return new ActivityFormattingService(getters.filteredActivities).sliceArr(state).groupByMonths().mapGroups().getSorted
    },
    getSuggestions(state) {
      return state.activities.map(item => item.displayTitle)
    },

    filteredActivities(state) {
      if ((!state.searchTerm && !state.selectedFilter) || !state.searchTerm && state.selectedFilter && state.selectedFilter.toLowerCase() === 'all work') return state.activities;
      if (state.searchTerm) {
        return state.activities.filter(activity => {
          return activity.displayTitle.toLowerCase().includes(state.searchTerm.toLowerCase());
        });
      } else {
        return state.activities.filter(activity => {
          return ACTIVITY_FEED_FILTERS[activity.resourceType] === state.selectedFilter;
        });
      }

    },
  },
  mutations: {
    setActivities(state, activities) {
      state.activities = activities;
    },
    setSelectedActivity(state, id) {
      state.selectedActivity = state.activities.find(item => item.id === id);
    },
    setShowView(state, show) {
      state.showZoomModal = show;
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;
      state.selectedFilter = null;
    },
    setSelectedFilter(state, filter) {
      state.searchTerm = null
      state.selectedFilter = filter;
    },
    nextPage(state) {
      state.currentPage++;
    },
    resetState(state) {
      state.currentPage = 1;
      state.selectedFilter = ACTIVITY_FEED_FILTERS['ALL_WORK']
      state.searchTerm = null;
      state.showZoomModal = false;
    }

  },
  actions: {
    processActivities({commit}, data) {
      commit('resetState')
      commit('setActivities', new ActivityFormattingService(data).parseData().sortByDate().createResource().getFormattedData);
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import {ActivityFormattingService} from "@/services/client/activityFormattingService";

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

    filteredActivities(state) {
      console.log(state.selectedFilter)
      if (!state.searchTerm && !state.selectedFilter || state.selectedFilter && state.selectedFilter.toLowerCase() === 'all work') return state.activities;
      if (state.searchTerm) {
        return state.activities.filter(activity => {
          return activity.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        });
      } else {
        return state.activities.filter(activity => {
          console.log(activity.resourceType.toLowerCase(), state.selectedFilter.toLowerCase() )
          return activity.resourceType.toLowerCase() === (state.selectedFilter.toLowerCase());
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
    },
    setSelectedFilter(state, filter) {
      state.selectedFilter = filter;
    },
    nextPage(state) {
      state.currentPage++;
    },

  },
  actions: {
    processActivities({commit}, data) {
      commit('setActivities', new ActivityFormattingService(data).parseData().sortByDate().createResource().getFormattedData);
    },
  },
});

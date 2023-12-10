import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const sliceArr = ({
                      pageSize,
                      currentPage
                  }, activities) => activities.slice(0, pageSize * currentPage);
const groupByMonths = (activities) => {
    return activities.reduce((acc, activity) => {
        const date = new Date(activity.d_created * 1000);
        const monthYear = date.toLocaleString('en', {month: 'long', year: 'numeric'});

        if (!acc[monthYear]) acc[monthYear] = [];

        acc[monthYear].push(activity);
        return acc;
    }, {});
};

const parseData = (data) => {
    if (data[0].activities) {
        return data.map(({resource_type, activities}) => {
            return activities.map(activity => {
                return {
                    ...activity,
                    resource_type
                }
            })
        }).flat();
    } else {
        return data;
    }
}

const mapGroups = (groups) => {
    return Object.keys(groups).map(monthYear => ({
        month: monthYear,
        activities: groups[monthYear]
    }));
}


export default new Vuex.Store({

    state: {
        activities: [],
        pageSize: 10,
        currentPage: 1,
        selectedActivity: null,
        searchTerm: '',
        selectedFilter: null,
        showZoomModal: false,
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
            const paginatedActivities = sliceArr(state, getters.filteredActivities);
            const groups = groupByMonths(paginatedActivities)
            return mapGroups(groups);
        },
        groupedActivities(state, getters) {
            const groups = groupByMonths(getters.filteredActivities);
            return mapGroups(groups);
        },
        filteredActivities(state) {
            if (!state.searchTerm && !state.selectedFilter || state.selectedFilter.toLowerCase() === 'all work') return state.activities;
            if (state.searchTerm) {
                return state.activities.filter(activity => {
                    return activity.topic_data.name.toLowerCase().includes(state.searchTerm.toLowerCase());
                });
            } else {
                return state.activities.filter(activity => {
                    return activity.resource_type.toLowerCase().includes(state.selectedFilter.toLowerCase());
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
            console.log(show)
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
            const parsedData = parseData(data);
            const sortedActivities = parsedData.sort((a, b) => b.d_created - a.d_created);
            commit('setActivities', sortedActivities);
        },
    },
});

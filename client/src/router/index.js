import Vue from 'vue';
import VueRouter from 'vue-router';
import AppFeed from "@/views/AppFeed.vue";
import {fetchActivities, setModalData} from "@/router/routeGuards";
import FeedItemView from "@/components/BaseModal.vue";

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: 'v1'},
  {
    path: '/v1',
    component: AppFeed,
    children: [
      {path: '', name: 'v1', beforeEnter: fetchActivities},
      {path: 'view/:id', name: 'view_v1', component: FeedItemView, beforeEnter: setModalData}
    ]
  },
  {
    path: '/v2',
    name: 'v2',
    component: AppFeed,
    beforeEnter: fetchActivities,
    children: [
      {path: 'view/:id', name: 'view_v2', component: FeedItemView, beforeEnter: setModalData}
    ]
  },
  {path: '*', redirect: 'v1'},

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

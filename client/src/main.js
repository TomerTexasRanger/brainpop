import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/global.css'


Vue.config.productionTip = false;
Vue.filter('formatDate', function(value) {
  if (!value) return '';

  const options = { month: 'short', day: '2-digit', year: 'numeric', hour: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(value));
});
Vue.mixin({
  data() {
    return {
      screenWidth: window.innerWidth
    };
  },
  created() {
    this.handleResize = () => {
      this.screenWidth = window.innerWidth;
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');




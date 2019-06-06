import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './store';
import 'bootswatch/dist/solar/bootstrap.min.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;
const routes = [
  { path: '/', component: App.components.Home },
  { path: '/rated', component: App.components.Rated },
  { path: '/latest', component: App.components.Latest },
  { path: '/list', component: App.components.List },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    this.$store.dispatch('getFilms')
  },
}).$mount('#app');

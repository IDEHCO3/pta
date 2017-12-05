// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';
import Vuetify from 'vuetify';
import('../node_modules/vuetify/dist/vuetify.min.css');
import store from './vuex';

axios.defaults.baseURL = 'http://172.30.11.26:3000/adm-list/';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});

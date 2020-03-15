// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Scroller from './components/Scroll'
import Loading from './components/Loading'
import store from  './components/store'
Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/,arg);
});
Vue.component('Scroller',Scroller);
Vue.component('Loading',Loading);
Vue.config.productionTip = false
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

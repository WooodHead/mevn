import Vue from 'vue'
import App from './App.vue'
import About from './About.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');

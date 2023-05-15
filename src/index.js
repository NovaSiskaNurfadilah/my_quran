import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import HomeVue from './components/Home.vue';
import MainVue from './components/Main.vue';
const routes = [
  {
    path: '/',
    component: HomeVue,
  },
  {
    path: '/Main',
    component: MainVue,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App), // mount the base component
  router,
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-upppercase');

new Vue({
  el: '#app',
  render: h => h(App)
})

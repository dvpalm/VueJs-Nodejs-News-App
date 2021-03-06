import Vue from 'vue';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import AOS from 'aos';
import "aos/dist/aos.css";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')

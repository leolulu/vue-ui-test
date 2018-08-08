import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto'


Vue.use(MuseUI)

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

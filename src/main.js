//main.js는 라이브러리 등 프로젝트의 구조를 한눈에 볼 수 있게 설정.
import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

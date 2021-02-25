import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from 'vue'
import App from './App.vue'
import VueJSModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
import "tailwindcss/tailwind.css"
import VueFlashMessage from 'vue-flash-message';
require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    important: true,
    pauseOnInteract: true
  }
});

Vue.use(VueJSModal, {componentName: 'Modal'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

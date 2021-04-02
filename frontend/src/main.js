import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
createApp(App).use(store).use(router).mount('#app')
// Vue.config.ignoredElements = [/^ion-/] // Icons
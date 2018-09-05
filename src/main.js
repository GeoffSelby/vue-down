import './assets/css/app.css'
import 'github-markdown-css'
import Vue from 'vue'
import Vuex from 'vuex'
import Showdown from 'showdown'
Vue.use(Vuex)
import App from './App.vue'

Vue.config.productionTip = false

window.store = new Vuex.Store({
    state: {
        code: ''
    },

    mutations: {
        convertToHtml (state, payload) {
            let converter = new Showdown.Converter();
            converter.setFlavor('github');

            state.code = converter.makeHtml(payload.source);
        }
    }
})

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { Button, Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.component(Button.name, Button)
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

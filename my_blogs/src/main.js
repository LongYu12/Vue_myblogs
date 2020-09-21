import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI);

// // 自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color ='#' + Math.random().toString(16).slice(2, 8);
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value === 'wide'){
      el.style.maxWidth = "1260px"
    }

    if (binding.arg === 'column'){
      el.style.background = "#f1c4cd"
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


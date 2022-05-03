import Vue from 'vue';
import Button from  './button.vue';
import Icon from  './icon.vue';
import VueClassNames from 'vue-classnames';


Vue.component('y-button',Button);
Vue.component('y-icon',Icon);
Vue.use(VueClassNames);

new Vue({
    el:'#app',
    data:{
        message:'hi'
    }
})
import Vue from 'vue';
import Button from  './button.vue';
import Icon from  './icon.vue';
import ButtonGroup from './button-group.vue'
import VueClassNames from 'vue-classnames';


Vue.component('y-button',Button);
Vue.component('y-button-group',ButtonGroup);
Vue.component('y-icon',Icon);
Vue.use(VueClassNames);

new Vue({
    el:'#app',
    data:{
        message:'hi'
    }
})
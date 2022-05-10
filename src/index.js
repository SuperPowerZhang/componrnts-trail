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

// 单元测试
import chai from 'chai';

const expect = chai.expect;
{
    const Constructor = Vue.extend(Icon);
    const icon = new Constructor({
           propsData:{
               icon:'loading-fish'
           }
    } );
    //TODO 这里还是undefined
// console.log(222, icon?.$el?.tagName);
setTimeout(()=>{
// console.log(4444, icon?.$el?.tagName);
const {tagName}= icon.$el;
expect(tagName).to.eq('svg')
},100)
    icon.$mount("#test")
}
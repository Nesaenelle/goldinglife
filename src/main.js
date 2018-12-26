// import Vue from 'vue'
// // import App from './App.vue'

// new Vue({
//   el: '#app',
//   // render: h => h(App),
//   mounted () {
//     // You'll need this for renderAfterDocumentEvent.
//     // document.dispatchEvent(new Event('render-event'))
//   }
// })


import './scss/index.scss';

import { bus } from './components/bus.js'
import { scrollToAnimate, isInViewport } from './components/Utils.js';

let scrollInstance = new scrollToAnimate();

import AppCounter from './components/AppCounter.vue';

Vue.component('app-counter', AppCounter);


Vue.directive('animate', {

  bind: (el, binding, vnode) => {

  },
  // Когда привязанный элемент вставлен в DOM...
  inserted: (el, binding, vnode) => {
    let once = false;

    // bus.$on('page-is-ready', () => {
      update();
      window.addEventListener('scroll', () => {
        if (!once) {
          update();
        }
      });

      function update() {
        if (isInViewport(el, 50)) {
          el.classList.add(binding.value);
          if (binding.arg === 'once') {
            once = true;
          }
        } else {
          el.classList.remove(binding.value);
        }
      }
    // });
  },
  update: function() {

  }
})

var app = new Vue({
  el: '#app',
  data: {
    onTop: false,
    isLoading: true,
    showMenu: false
  },
  mounted: function() {
    let self = this;

    window.addEventListener('scroll', () => {
      this.onTop = document.documentElement.scrollTop > 300;
    });
    window.addEventListener('mousewheel', () => {
      scrollInstance.clear();
    });
  },
  methods: {
    goTop() {
      scrollInstance.animate(document.documentElement, 0, 1250);
    }
  }
})

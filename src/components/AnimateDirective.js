import Vue from 'vue';
import { isInViewport } from './Utils.js'

import { bus } from './bus.js'

Vue.directive('animate', {

  bind: (el, binding, vnode) => {

  },
  // Когда привязанный элемент вставлен в DOM...
  inserted: (el, binding, vnode) => {
    let once = false;

    bus.$on('page-is-ready', () => {
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
    });
  },
  update: function() {

  }
})

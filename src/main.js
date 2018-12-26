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
import { scrollToAnimate, isInViewport, isScrolledIntoView } from './components/Utils.js';

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

    window.addEventListener('mousewheel', () => {
      scrollInstance.clear();
    });

    this.isOnTop();
    window.addEventListener('scroll', () => {
     this.isOnTop();
    });

    window.addEventListener('click', (e) => {
      if (!this.$refs.menu.contains(e.target)) {
        this.showMenu = false;
      }
    });

    var tabs = document.querySelectorAll('[data-navigation]');
    var links = this.$el.querySelectorAll('a[href]');

    checkNavItems();
    window.addEventListener('scroll', () => {
      checkNavItems();
    }, false);

    function checkNavItems() {
      tabs.forEach((elem) => {
        if (isScrolledIntoView(elem, 80)) {
          var id = elem.getAttribute('data-navigation');
          links.forEach((link) => {
            if (link.getAttribute('href').substr(1) === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }


    this.initFeedback();
    this.initRangeSlider();
  },


  methods: {
    scrollTo(e) {
      var id = e.currentTarget.getAttribute('href').substr(1);
      var elem = document.querySelector(`[data-navigation="${id}"]`);
      if (elem) {
        scrollInstance.animate(document.documentElement, elem.offsetTop - 78, 1250);
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    goTop() {
      scrollInstance.animate(document.documentElement, 0, 1250);
    },
    isOnTop() {
      this.onTop = document.documentElement.scrollTop > 100;
    },
    initFeedback() {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.slider-arrow-prev'),
        nextArrow: $('.slider-arrow-next')
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        accessibility: false,
        pauseOnHover: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      });
    },
    initRangeSlider() {
      $('.range-slider').slick({
        dots: false,
          infinite: true,
          arrows: true,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          prevArrow: $('.range-slider-arrow-prev'),
          nextArrow: $('.range-slider-arrow-next'),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });     
    }
  }
})

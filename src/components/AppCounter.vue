<template>
  <div class="counter">
    <div class="counter__value" ref="counter">0{{val}}</div>
    <div class="counter__descr" v-html="title"></div>
  </div>
</template>
<script>
import { isInViewport } from './Utils.js'

export default {
  props: {
    number: Number,
    val: String,
    title: String
  },
  data: () => {
    return {

    }
  },
  computed: {

  },

  mounted() {
    let value = this.val ? this.val : '';

    function animateValue(element, start, end, duration) {
      let range = end - start;
      let current = start;
      let increment = (end / duration) * 10; //;end > start ? (duration/end) : (-1);
      let stepTime = 20; //Math.abs(Math.floor(duration / range));
      let timer = setInterval(function() {
        current += increment;
        element.innerHTML = formatNumber(Math.round(current)) + value;
        if (current >= end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    let elem = this.$refs.counter;
    let counter = this.number;


    window.addEventListener('scroll', () => {
      if (isInViewport(this.$el, 170)) {
        if (!this.$el.getAttribute('data-init')) {
          this.$el.setAttribute('data-init', true);
          animateValue(this.$refs.counter, 0, counter, 2000);
        }
      } else {
        
      }
    });
  },

  methods: {

  }
}

</script>
<style lang="scss">
.counter {
  position: relative;
  width: 20%;

  @media screen and(max-width: 1280px) {
    width: 48%;
    margin-bottom: 20px;
  }
  @media screen and(max-width: 768px) {
    width: 100%;
  }
  &:before {
    content: '';
    width: 100px;
    left: 0;
    right: 0;
    top: 0px;
    margin: auto;
    position: absolute;
    height: 2px;
    background: #e0c249;
  }

  &__value {
    font-size: 92px;
    text-align: center;
    color: #e0c249;
    letter-spacing: 1.9px;
    white-space: nowrap;
    background: linear-gradient(to right, #a0812e, #fcd99f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and(max-width: 1600px) {
      font-size: 78px;
    }
  }

  &__descr {
    font-size: 14px;
    font-family: Montserrat;
    margin-top: 4px;
    text-align: center;
    line-height: 1.5em;
  }
}

</style>

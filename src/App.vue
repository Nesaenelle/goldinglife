<template>
  <div id="app">
    <div class="preloader" :class="{active: isLoading}">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <app-header />
    <main data-navigation="start">
      <app-start />
      <app-about />
      <app-top-form />
      <app-advantages />
      <app-range />
      <app-stats />
      <app-partners />
      <app-middle-form />
      <app-roadmap />
      <app-feedback />
      <app-bottom-form />
    </main>
    <div class="go-top" @click="goTop()" v-bind:class="{ 'on-top': onTop }"></div>
    <app-footer />
  </div>
</template>

<script>
  import Vue from 'vue'
import AppStart from './components/AppStart.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppAbout from './components/AppAbout.vue'
import AppTopForm from './components/AppTopForm.vue'
import AppAdvantages from './components/AppAdvantages.vue'
import AppRange from './components/AppRange.vue'
import AppStats from './components/AppStats.vue'
import AppCounter from './components/AppCounter.vue'
import AppSliderMany from './components/AppSliderMany.vue'
import AppPartners from './components/AppPartners.vue'
import AppMiddleForm from './components/AppMiddleForm.vue'
import AppRoadmap from './components/AppRoadmap.vue'
import AppFeedback from './components/AppFeedback.vue'
import AppBottomForm from './components/AppBottomForm.vue'

import './components/AnimateDirective.js'

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);

Vue.component('app-counter', AppCounter);
Vue.component('app-slider-many', AppSliderMany);
Vue.component('app-start', AppStart);

Vue.component('app-about', AppAbout);
Vue.component('app-top-form', AppTopForm);

Vue.component('app-advantages', AppAdvantages);
Vue.component('app-range', AppRange);
Vue.component('app-stats', AppStats);
Vue.component('app-partners', AppPartners);
Vue.component('app-middle-form', AppMiddleForm);
Vue.component('app-roadmap', AppRoadmap);
Vue.component('app-feedback', AppFeedback);
Vue.component('app-bottom-form', AppBottomForm);

import { bus } from './components/bus.js'
import { scrollToAnimate } from './components/Utils.js';

let scrollInstance = new scrollToAnimate();

export default {
  name: 'app',
  data() {
    return {
      onTop: false,
      isLoading: true
    }
  },
  mounted () {
    let self = this;

    window.addEventListener('scroll', () => {
      this.onTop = document.documentElement.scrollTop > 300;
    });
    window.addEventListener('mousewheel', () => {
      scrollInstance.clear();
    });

    fetch('./video_1.mp4')
      .then((response) => response.blob())
      .then((response) => {
        let video = document.querySelector("video");
        let videoBlob = response;
        let vid = URL.createObjectURL(videoBlob);
        video.src = vid;
        video.play();

        self.isLoading = false;
        document.body.style.overflow = 'initial';
        bus.$emit('page-is-ready');
      })
      .catch(() => {
        self.isLoading = false;
        document.body.style.overflow = 'initial';
        bus.$emit('page-is-ready');
      });
  },
  methods: {
    goTop() {
      scrollInstance.animate(document.documentElement, 0, 1250);
    }
  }
}
</script>

<style lang="scss">
@import './assets/reset.css';
@import './assets/slick.css';
body {
  font-family: Linux, sans-serif;
  min-width: 300px;
  overflow: hidden;
}

main {
  height: 100%;
}

a {
  color: inherit;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  // background: rgba(207, 173, 86, 0.95);
  background: linear-gradient(20deg, #a1812e, #cfad56, #f4de8b);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(19px, 0);
    }
  }


}

.container {
  width: 100%;
  max-width: 1240px;
  margin: auto;
  padding: 0 40px;

  @media screen and(max-width: 600px) {
    padding: 0 20px;
  }
}

section {
  overflow: hidden;
}

.title {
  text-align: center;
  font-size: 48px;

  line-height: 1.2em;

  @media screen and(max-width: 1024px) {
    font-size: 42px;
  }

  @media screen and(max-width: 768px) {
    font-size: 34px;
    line-height: 1em;

    br {
      display: none;
    }
  }

  @media screen and(max-width: 480px) {
    font-size: 26px;
    text-align: center !important;
  }
}

.btn {
  padding: 15px 15px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: auto;
  display: block;
  font-family: Montserrat;
  background: linear-gradient(to right, #a1812e, #a1812e, #f4de8b);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  color: #634e19;
  border: 1px solid #cba76d;

  background-position: center;
  background-size: 100% 100%;
  moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;

  &:active {
    transform: translateY(1px);
  }

  &:hover {
    color: #260900;
    background-position: right;
    background-size: 200% 100%;
  }
}


@font-face {
  font-family: 'Linux'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/LinLibertine_R.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 400;
}

@font-face {
  font-family: 'Linux'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/LinLibertine_RB.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 600;
}



@font-face {
  font-family: 'Montserrat'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/Montserrat-Light.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 300;
}

@font-face {
  font-family: 'Montserrat'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/Montserrat-Regular.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 400;
}

@font-face {
  font-family: 'Montserrat'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/Montserrat-SemiBold.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 500;
}

@font-face {
  font-family: 'Montserrat'; // src: url('fonts/Rubik-Light.eot'); /* IE9 Compat Modes */
  src: //url('fonts/Rubik-Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    // url('fonts/Rubik-Light.woff2') format('woff2'), /* Super Modern Browsers */
    // url('fonts/Rubik-Light.woff') format('woff'), /* Pretty Modern Browsers */
    url('./assets/Montserrat-Bold.ttf') format('truetype');
  /* Safari, Android, iOS */
  // url('fonts/Rubik-Light.svg#svgFontName') format('svg'); /* Legacy iOS */
  font-weight: 600;
}



.subscribe-form {
  form {
    >div:first-child {
      padding-bottom: 0 !important;

      .wrapp-iput {
        border: double 2px transparent;
        background-origin: border-box;
        background-clip: content-box, border-box;
        border-radius: 3px;
        margin-bottom: 10px;

        &:first-child {
          background-image: linear-gradient(white, white), radial-gradient(circle at top left, #a0812e, #fcd99f);
        }

        &:last-child {
          background-image: linear-gradient(white, white), radial-gradient(circle at top left, #fcd99f, #a0812e);
        }
      }
    }

    input {
      width: 100%;
      // border: 2px solid #e0c249;
      border: none;
      margin-bottom: 10px;
      border-radius: 3px;
      background: none;
      padding: 15px 26px;
      color: #949390;
      font-family: Montserrat;
      outline: none;
      margin-bottom: 0;
    }
  }

  &__bottom-text {
    font-size: 12px;
    color: #949390;
    font-family: Montserrat;
    text-align: center;
    width: 100%;
    margin-top: 15px;
    line-height: 1.5em;

    @media screen and(max-width: 480px) {
      br {
        display: none;
      }
    }
  }

  &__title {
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 14px;
    color: #949390;
    text-align: center;
  }
}


.go-top {
  background: #260900;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  &.on-top {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    top: 5px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: rotate(225deg);
  }
}






.animate {
  // transform: translate3d(-100vw, 0, 0px);
  opacity: 0;
  // visibility: hidden;
  animation-fill-mode: forwards;
  animation-duration: 1.6s;
  will-change: opacity;
}

@keyframes slideinLeft {
  from {
    // transform: translateX(-100%);
    // transform: translate3d(-100vw, 0, 0px);
    opacity: 0;
    // visibility: hidden;
  }

  to {
    // transform: translateY(0);
    // transform: translate3d(0, 0, 0);
    opacity: 1;
    // visibility: visible;
  }
}

@keyframes slideinRight {
  from {
    // transform: translateX(100%);
    // transform: translate3d(100vw, 0, 0px);
    opacity: 0;
    // visibility: hidden;
  }

  to {
    // transform: translate3d(0, 0, 0);
    opacity: 1;
    // visibility: visible;
  }
}

@keyframes slideinUp {
  from {
    // transform: translateX(-100%);
    // transform: translate3d(0, 100vh, 0px);
    opacity: 0;
    // visibility: hidden;
  }

  to {
    // transform: translateY(0);
    // transform: translate3d(0, 0, 0);
    opacity: 1;
    // visibility: visible;
  }
}

@keyframes slideinDown {
  from {
    // transform: translateX(-100%);
    // transform: translate3d(0, -100vh, 0px);
    opacity: 0;
    // visibility: hidden;
  }

  to {
    // transform: translateY(0);
    // transform: translate3d(0, 0, 0);
    opacity: 1;
    // visibility: visible;
  }
}


.slide-left {
  // opacity: 1;
  // visibility: visible;
  // transform: translate3d(-100vw, 0, 0px);
  opacity: 0;
  animation-name: slideinLeft;
}

.slide-right {
  opacity: 0;
  // opacity: 1;
  // visibility: visible;
  // transform: translate3d(100vw, 0, 0px);
  animation-name: slideinRight;
}

.slide-up {
  opacity: 0;
  // opacity: 1;
  // visibility: visible;
  // transform: translate3d(0, 100vh, 0px);
  animation-name: slideinUp;
}


.slide-down {
  opacity: 0;
  // opacity: 1;
  // visibility: visible;
  // transform: translate3d(0, -100vh, 0px);
  animation-name: slideinDown;
}

</style>
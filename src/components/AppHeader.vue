<template>
  <header v-bind:class="{ 'on-top': onTop }">
    <nav class="my-nav">
      <ul>
        <li><a  class="" href="#about" @click.prevent="scrollTo($event)">О нас</a></li>
        <li><a  class="" href="#advantages" @click.prevent="scrollTo($event)">Возможности</a></li>
        <li><a  class="" href="#roadmap" @click.prevent="scrollTo($event)">Как начать</a></li>
        <li><a  class="logo" href="#start" @click.prevent="scrollTo($event)"><img src="./../assets/logo.svg" alt=""></a></li>
        <li><a  class="" href="#feedback" @click.prevent="scrollTo($event)">Отзывы</a></li>
        <li><a  class="" href="#middle-form" @click.prevent="scrollTo($event)">Регистрация</a></li>
        <li><a  class="" href="/site/login#enter">Вход</a></li>
      </ul>
    </nav>
    <div class="burger" @click.stop="toggleMenu()" :class="{opened: showMenu}">
      <span></span>
    </div>
    <div class="dropdown-menu" :class="{opened: showMenu, 'on-top': onTop }" ref="menu">
      <nav>
        <ul>
          <li><a  class="" href="#about" @click.prevent="scrollTo($event)">О нас</a></li>
          <li><a  class="" href="#advantages" @click.prevent="scrollTo($event)">Возможности</a></li>
          <li><a  class="" href="#roadmap" @click.prevent="scrollTo($event)">Как начать</a></li>
          <li><a  class="" href="#feedback" @click.prevent="scrollTo($event)">Отзывы</a></li>
          <li><a  class="" href="#middle-form" @click.prevent="scrollTo($event)">Регистрация</a></li>
          <li><a  class="" href="/site/login#enter">Вход</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { isScrolledIntoView, scrollToAnimate } from './Utils.js'

// let setTimeoutInst;
let scrollInstance = new scrollToAnimate();
export default {
  data: () => {
    return {
      onTop: false,
      showMenu: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.onTop = document.documentElement.scrollTop > 100;
    });

    window.addEventListener('mousewheel', () => {
      scrollInstance.clear();
    });

    window.addEventListener('click', (e) => {
      if (!this.$refs.menu.contains(e.target)) {
        this.showMenu = false;
      }
    });

    var tabs = document.querySelectorAll('[data-navigation]');
    var links = this.$el.querySelectorAll('a[href]');

    window.addEventListener('scroll', () => {
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
    }, false);
  },

  methods: {
    scrollTo(e) {
      var id = e.currentTarget.getAttribute('href').substr(1);
      var elem = document.querySelector(`[data-navigation="${id}"]`);
      if (elem) {
        scrollInstance.animate(document.documentElement, elem.offsetTop - 70, 1250);
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}

</script>
<style lang="scss" scoped>

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


header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  position: absolute;
  z-index: 100;
  padding: 0px 20px;
  position: fixed;
  left: 0;
  top: 0;
  transition: 0.1s;
  min-height: 78px;


  opacity: 0;
  animation-duration: 3s;
  animation-name: slideinLeft;
  animation-fill-mode: forwards;

  // height: 100px;
  @media screen and(max-width: 1024px) {
    min-height: 60px;
  }

  &:before {
    content: '';
    position: absolute;
    background: rgba(38,9,0,0.98);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    z-index: -1;
    transition: 0.2s;
  }

  &.on-top {
    &:before {
      transform: translateY(0%);
    }

    nav {
      ul {
        li {
          a {
            padding: 6px 20px;
          }
        }
      }
    }

    .logo {
      width: 120px;
      padding: 10px 15px;

      @media screen and(max-width: 1024px) {
        width: 100px
      }
    }
  }

  .logo {
    width: 160px;
    transition: 0.3s;
    padding: 29px 0px 10px 0;
    margin: 0 28px;

    @media screen and(max-width: 1024px) {
      width: 120px;
      padding: 10px 0px 10px 0;
    }

    img {
      margin: auto;
      display: block;
      width: 100%;
      transition: 0.3s;
    }

  }

  .active {
    position: relative;

    &.logo {
      &:after {
        display: none;
      }
    }

    &:after {
      opacity: 1;
      visibility: visible;
    }
  }

  nav {

    ul {
      height: 100%;
      display: flex;
      position: relative;
      left: -23px;

      @media screen and(max-width: 1024px) {
        position: static;
      }

      li {
        height: 100%;

        a {
          height: 100%;
          padding: 32px 20px 32px 20px;
          display: block;
          color: #f7ebbc;
          font-size: 16px;
          font-weight: 500;
          transition: 0.3s;
          display: flex;
          align-items: center;
          letter-spacing: 1.2px;
          position: relative;
          white-space: nowrap;
          &:after {
            width: 100%;
            bottom: 0;
            left: 0;
            content: '';
            visibility: hidden;
            opacity: 0;
            position: absolute;
            height: 3px;
            bottom: 0;
            background: linear-gradient(20deg, #a1812e, #cfad56, #f4de8b);
            // transition: 0.2s;
          }

          @media screen and(max-width: 1024px) {
            display: none;

            &.logo {
              display: block;
            }
          }
        }
      }
    }
  }

  .burger {

    display: none;
    width: 30px;
    height: 26px;
    position: static;
    z-index: 10;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    @media screen and(max-width: 1024px) {
      display: block;
    }

    &.opened {
      span {
        background: none;

        &:before {
          top: 0px;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        &:after {
          top: 0px;
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
    }

    span {
      position: relative;
      width: 100%;
      height: 2px;
      display: inline-block;
      background: linear-gradient(20deg, #a1812e, #cfad56, #f4de8b);
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-transition: all .2s linear;
      -moz-transition: all .2s linear;
      -ms-transition: all .2s linear;
      -o-transition: all .2s linear;
      transition: all .2s linear;

      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(20deg, #a1812e, #cfad56, #f4de8b);
        position: absolute;
        left: 0;
        top: -7px;
        -webkit-transition: all .2s linear;
        -moz-transition: all .2s linear;
        -ms-transition: all .2s linear;
        -o-transition: all .2s linear;
        transition: all .2s linear;
      }

      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(20deg, #a1812e, #cfad56, #f4de8b);
        position: absolute;
        left: 0;
        top: 7px;
        -webkit-transition: all .2s linear;
        -moz-transition: all .2s linear;
        -ms-transition: all .2s linear;
        -o-transition: all .2s linear;
        transition: all .2s linear;
      }
    }
  }

  .dropdown-menu {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 100%;
    background: rgba(38,9,0,0.98);
    padding: 20px;
    left: 0;
    top: -20px;
    transition: 0.2s;
    box-shadow: 0 11px 30px -5px #000;
    // border-top: 1px solid #2d2d2d;
    will-change: transform;

    &.opened {
      opacity: 1;
      visibility: visible;
      top: 0;
    }

    &.on-top {
      top: 64px;
    }

    nav {

      ul {
        flex-wrap: wrap;

        li {
          width: 100%;

          a {
            padding: 14px;
            display: block;
            text-align: center;

            &.active {

              // color: $c-blue;
              &:after {
                width: 150px;
                // max-width: 200px;
                left: 0;
                right: 0;
                margin: auto;
                bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
}

</style>

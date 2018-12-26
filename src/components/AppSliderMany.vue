<template>
  <div class="slider" ref="slider">
    <div class="slider__wrapper">
      <div class="slider__scroller" :style="{ width: scrollerWidth, transform: translateX}">
        <div class="slider__item" v-for="(slide, index) in slides" :key="index">
          <div class="slider__item_img">
            <img :src="require(`./../assets/${slide.img}`)" >
            <div class="slider__item_img_hover">{{slide.text}}</div>
          </div>
          <div class="slider__item_title">{{slide.title}}</div>
        </div>
      </div>
    </div>
    <div class="slider__arrows">
      <div class="slider__arrows_left" @click="prev()" :class="{inactive: activeIndex === 0}">
      </div>
      <div class="slider__arrows_right" @click="next()" :class="{inactive: activeIndex === slides.length - 1}">
      </div>
    </div>
  </div>
</template>
<script>
import AppSlider from './AppSlider.vue'

export default {
  extends: AppSlider,
  data: () => {
    return {
      slidesCountToShow: 1
    }
  },
  computed: {
    translateX(state) {
      let val = -state.activeIndex * (state.sliderWidth / state.slidesCountToShow);
      return `translateX(${ val }px)`;
    },
    scrollerWidth(state) {
      return state.slides.length * (state.sliderWidth / state.slidesCountToShow) + this.slidesCountToShow + 'px';
    }
  },
  mounted() {
    this.checkToShow();
    this.resizeSlide();
  },
  methods: {
    handleResize() {
      AppSlider.methods.handleResize.call(this)
      this.activeIndex = 0;
      this.checkToShow();
      this.resizeSlide();
    },

    checkToShow() {
      if (window.outerWidth >= 1920) {
        this.slidesCountToShow = 6;
      } else if (window.outerWidth >= 1600) {
        this.slidesCountToShow = 5;
      } else if (window.outerWidth >= 1280) {
        this.slidesCountToShow = 4;
      } else if (window.outerWidth >= 1078) {
        this.slidesCountToShow = 3;
      } else if (window.outerWidth >= 768) {
        this.slidesCountToShow = 2;
      } else {
        this.slidesCountToShow = 1;
      }
    },

    resizeSlide() {
      this.$el.querySelectorAll('.slider__item').forEach(item => {
        item.style.width = ((this.sliderWidth - this.slidesCountToShow * 10) / this.slidesCountToShow) - 1 + 'px';
      });
    },

    next() {
      let newIndex = this.activeIndex + 1;
      if (newIndex >= (this.slides.length - this.slidesCountToShow)) {
        newIndex = (this.slides.length - this.slidesCountToShow);
      }
      this.activeIndex = newIndex;
    }
  }
}

</script>
<style lang="scss" scoped>
.slider {
  margin-top: 61px;
  position: relative;
  height: 490px;

  &__wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &__scroller {
    display: flex;
    height: 100%;
    transition: 0.3s;

  }

  &__arrows {

    &_left,
    &_right {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin: auto;
      width: 70px;
      height: 70px;
      // border: 1px solid;
      background-size: cover !important;
      cursor: pointer;
      background: rgba(0, 0, 0, .3);
      transition: 0.3s;
      @media screen and(max-width: 768px) {
        width: 45px;
        height: 45px;
      }
      // display: flex;
      &.inactive {
        opacity: 0;
        visibility: hidden;
      }
      @media (hover) {
        &:hover {
          background: #260901;

          &:after {
            border: solid #fff;
            border-width: 0 2px 2px 0;
          }
        }
      }

      &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border: solid #a1812e;
        border-width: 0 2px 2px 0;
        display: inline-block;
        transition: 0.3s;
        padding: 4px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }

    &_left {
      left: 0px;

      &:after {
        transform: rotate(135deg);
      }

      &:active {
        transform: translateY(1px);
      }
    }

    &_right {
      right: 0px;
      transform: rotate(0deg);

      &:after {
        transform: rotate(-45deg);
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }

  &__item {
    position: relative;
    margin-left: 10px;

    img {
      display: block;
      margin: auto;
      width: 100%;
      max-width: 297px;
    }

    &_img {
      position: relative;

      &_hover {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        max-width: 297px;
        margin: auto;
        right: 0;
        transition: 0.3s;
        background: url(./../assets/gradient.png);
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Montserrat;
        text-align: center;
        padding: 16px 38px 1px 26px;
        line-height: 1.5em;
        letter-spacing: 0.1px;
        font-weight: 300;
  
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          height: calc(100% - 12px);
          width: calc(100% - 12px);
          border-radius: 8px;
          // border: 2px solid #f8ce9c;
          background: url(./../assets/border.png) no-repeat;
          // background-size: cover;
          background-position: center;
        }
      }
    }

    @media (hover) {
      &:hover {
        .slider {
          &__item {
            &_title {
              color: #a0812e;
              // background: linear-gradient(to right, #a0812e, #fcd99f);
              // -webkit-background-clip: text;
              // -webkit-text-fill-color: transparent;
            }

            &_img {
              &_hover {
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
      }
    }

    &_title {
      transition: 0.3s;
      font-weight: 600;
      text-align: center;
      font-size: 17px;
      margin-top: 30px;
      text-transform: uppercase;

    }

  }
}

</style>

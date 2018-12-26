<template>
  <div class="slider">
<!--     <div class="slider__wrapper">
      <div class="slider__thumbs" ref="thumb">
        <div class="slider__thumbs_wrapper" :style="{ width: thumbsWidth, transform: translateX}">
          <div class="slider__thumbs_wrapper_cont" v-for="(slide, index) in slides" :key="index">
            <div class="slider__thumbs_item" :class="{active: activeIndex === index}" @click="goTo(index)">
              <img :src="require(`@/assets/${slide.img}`)" >
                   </div>
            </div>
          </div>
        </div>
        <div class="slider__scroller" :style="{ width: scrollerWidth, transform: translateX}">
          <div class="slider__item" v-for="(slide, index) in slides" :key="index">
            <div class="slider__item_name">{{slide.name}}</div>
            <div class="slider__item_text">{{slide.text}}</div>
          </div>
        </div>
      </div>
      <div class="slider__arrows">
        <div class="slider__arrows_left" @click="prev()" :class="{inactive: activeIndex === 0}">
        </div>
        <div class="slider__arrows_right" @click="next()" :class="{inactive: activeIndex === slides.length - 1}">
        </div>
      </div> -->
    </div>
</template>
<script>
export default {
  props: { slides: Array },
  data: () => {
    return {
      activeIndex: 0,
      sliderWidth: 0,
      thumbWidth: 0
    }
  },
  computed: {
    translateX(state) {
      let val = -state.activeIndex * state.sliderWidth;
      return `translateX(${ val }px)`;
    },
    scrollerWidth(state) {
      return state.slides.length * state.sliderWidth + 'px';
    },
    thumbsWidth(state) {
      return 2000 + 'px';
    },
    thumbsTranslateX() {
      let val = -state.activeIndex * state.thumbWidth / 5;
      return `translateX(${ val }px)`;
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    this.sliderWidth = this.$el.clientWidth;


    if (this.$refs.thumb) {
      this.thumbWidth = this.$refs.thumb.clientWidth;
    }

    window.addEventListener('resize', this.handleResize)

    var pageWidth = window.innerWidth || document.body.clientWidth;
    var treshold = Math.max(1, Math.floor(0.01 * (pageWidth)));
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;

    var limit = Math.tan(45 * 1.5 / 180 * Math.PI);
    var gestureZone = this.$el; //document.getElementById('modalContent');

    gestureZone.addEventListener('touchstart', (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      // handleGesture(event);
      var x = touchendX - touchstartX;
      var y = touchendY - touchstartY;
      var xy = Math.abs(x / y);
      var yx = Math.abs(y / x);
      if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
          if (x < 0) {
            this.next();
          } else {
            this.prev();
          }
        }
        if (xy <= limit) {
          if (y < 0) {
            console.log("top");
          } else {
            console.log("bottom");
          }
        }
      } else {
        console.log("tap");
      }
    }, false);
  },
  methods: {
    handleResize() {
      this.sliderWidth = this.$el.clientWidth;
    },
    prev() {
      let newIndex = this.activeIndex - 1;
      if (newIndex <= 0) {
        newIndex = 0;
      }
      this.activeIndex = newIndex;
    },
    next() {
      let newIndex = this.activeIndex + 1;
      if (newIndex >= this.slides.length - 1) {
        newIndex = this.slides.length - 1;
      }
      this.activeIndex = newIndex;
    },
    goTo(index) {
      //TODO if exist
      this.activeIndex = index;
    }
  }
}

</script>
<style lang="scss" scoped>
// .slider {
//   margin-top: 50px;
//   position: relative;
//   height: 274px;

//   @media screen and(max-width: 768px) {
//     height: auto;
//   }

//   @media screen and(max-width: 480px) {
//     margin-top: 0px;
//   }

//   &__thumbs {
//     width: 388px;
//     margin: auto;
//     padding: 0px 0;
//     height: 120px;
//     overflow: hidden;

//     &_wrapper {

//       &_cont {
//         width: calc(388px/5);
//         display: flex;
//         // flex-wrap: wrap;
//         justify-content: center;
//         align-items: center;
//         float: left;
//       }
//     }

//     @media screen and(max-width: 768px) {
//       width: 90%;
//       padding: 0 10px;

//       .slider__thumbs_item.active {
//         // transform: scale(1.4);
//         width: 55px;
//         height: 55px;
//         margin: 0 10px;
//       }
//     }

//     &_item {
//       border-radius: 100%;
//       // border: 2px solid #e0c249;
//       background-image: linear-gradient(#fff, #fff), radial-gradient(circle at top left, #a1812e, #cfad56, #f4de8b);
//       border: double 2px transparent;
//       background-origin: border-box;
//       background-clip: content-box, border-box;

//       width: 40px;
//       height: 40px;
//       max-width: 40px;
//       max-width: 40px;
//       transition: 0.3s;
//       cursor: pointer;
//       opacity: 0.6;



//       img {
//         width: 100%;
//         -webkit-filter: grayscale(100%);
//         /* Safari 6.0 - 9.0 */
//         filter: grayscale(100%);
//       }

//       &.active {
//         margin: 0 20px;

//         img {
//           -webkit-filter: none;
//           /* Safari 6.0 - 9.0 */
//           filter: none;
//         }

//         width: 68px;
//         height: 68px;
//         max-width: 68px;
//         max-height: 68px;
//         min-height: 68px;
//         min-width: 68px;
//         opacity: 1;
//         // transform: scale(1.9);/
//         background-image: linear-gradient(#fff, #fff),
//         radial-gradient(circle at top left, #a1812e, #cfad56, #f4de8b);
//         border: double 2px transparent;
//       }
//     }
//   }

//   &__wrapper {
//     position: relative;
//     overflow: hidden;
//     width: 100%;
//     height: 100%;
//   }

//   &__scroller {
//     display: flex;
//     height: 100%;
//     transition: 0.3s;
//     justify-content: space-between; // transition: 0.2s; // height: 427px;
//   }

//   &__arrows {

//     &_left,
//     &_right {
//       position: absolute;
//       // top: 0px;
//       bottom: 20px;
//       margin: auto;
//       width: 70px;
//       height: 70px;
//       // border: 1px solid;
//       background-size: cover !important;
//       cursor: pointer;
//       background: #fff;
//       // display: flex;
//       transition: 0.3s;

//       @media screen and(max-width: 768px) {
//         width: 45px;
//         height: 45px;
//         top: 115px;
//         bottom: auto;
//       }

//       &:hover {
//         background: #000;
//       }

//       &.inactive {
//         opacity: 0;
//         visibility: hidden;
//       }

//       &:after {
//         content: '';
//         position: absolute;
//         width: 5px;
//         height: 5px;
//         border: solid #a1812e;
//         border-width: 0 2px 2px 0;
//         display: inline-block;
//         padding: 4px;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         margin: auto;
//       }
//     }

//     &_left {
//       left: 0px;

//       &:after {
//         transform: rotate(135deg);
//         right: -5px;
//       }

//       &:active {
//         transform: translateY(1px);
//       }
//     }

//     &_right {
//       right: 0px;
//       transform: rotate(0deg);

//       &:after {
//         transform: rotate(-45deg);
//       }

//       &:active {
//         transform: translateY(1px);
//       }
//     }
//   }

//   &__controls {
//     display: flex;
//     justify-content: center;
//     position: absolute;
//     bottom: 22px;
//     width: 200px;
//     margin: auto;
//     left: 0;
//     right: 0;
//     align-items: center;

//     &_item {
//       width: 6px;
//       min-width: 6px;
//       height: 6px;
//       min-height: 6px;
//       background: #fe90b0;
//       border-radius: 100%;
//       margin: 0 10px;
//       transition: 0.2s;
//       cursor: pointer;
//       position: relative;

//       &.active {
//         transform: scale(1.7);
//         // background: #ed2984;
//       }

//       &:before {
//         content: '';
//         position: absolute;
//         z-index: 1;
//         width: calc(100% + 14px);
//         height: calc(100% + 14px);
//         margin-left: -7px;
//         margin-top: -7px;
//         pointer-events: auto;
//       }
//     }
//   }

//   &__item {
//     width: 100%;
//     position: relative;

//     &_name {
//       font-weight: 600;
//       text-align: center;
//       font-size: 17px;
//       margin-top: 8px;
//     }

//     &_text {
//       font-size: 13px;
//       text-align: center;
//       line-height: 1.6em;
//       width: 64%;
//       margin: 32px auto 0;
//       letter-spacing: 0.4px;
//       font-family: Montserrat;

//       @media screen and(max-width: 768px) {
//         width: 80%;
//       }

//       @media screen and(max-width: 480px) {
//         width: 100%;
//       }
//     }

//   }
// }

</style>

<template>
  <section>
    <div class="left-image" ref="left-img">
      <div></div>
    </div>
    <div class="right-image" ref="right-img">
      <div></div>
    </div>
    <video loop muted poster="preview.jpg">
      <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
      <source>
    </video>
    <div class="container">
      <h1 class="title animate" v-animate="'slide-left'">Золото</h1>
      <div class="subtitle animate" v-animate="'slide-right'">Самая надёжная инвестиция</div>
        <img class="animate" src="./../assets/divider_main.svg" v-animate="'slide-left'" alt="">
      <div class="tagline animate" v-animate="'slide-right'">Начните свой бизнес на золоте с Golding Life</div>
      <button class="btn animate" v-animate="'slide-up'">Узнать больше</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'start',
  mounted() {
    // window.addEventListener('mousemove', (e) => {
    //   let item1 = this.$refs['left-img'];
    //   let item2 = this.$refs['right-img'];
    //   if(item1) {
    //     let valX = (e.clientX) / 50;
    //     let valY = (e.clientY) / 50;
    //     item1.style.transform = 'translate(' + valX + 'px, ' + valY + 'px)'
    //   }

    //   if(item2) {
    //     let valX = -((e.clientX) / 50);
    //     let valY = -((e.clientY) / 50);
    //     item2.style.transform = 'translate(' + valX + 'px, ' + valY + 'px)'
    //   }
     
    // });
  }
}

</script>
<style lang="scss" scoped>
.container {
  z-index: 10;
  position: relative;
}

@keyframes float {
  0% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0px, 0px);
  }
  50% {
    // box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translate(-5px, -20px);
  }
  100% {
    // box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0px, 0px);
  }
}

.left-image {
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0;
  left: 0;
  transition: 0.25s;
  z-index: 10;
  // will-change: transform;
  animation: float 6s ease-in-out infinite;
  div {
    width: 120%;
    height: 120%;
    background: url(./../assets/lineleft.png) no-repeat;
    background-size: 100%;
    transform: translate(-40%, -5%);
    background-position: center;
    @media screen and(max-width: 1600px) {
      transform: translate(-60%, -10%);
    }
    @media screen and(max-width: 1440px) {
      width: 150%;
      height: 150%;
      transform: translate(-70%, -10%);
    }
    @media screen and(max-width: 1280px) {

    }

    @media screen and(max-width: 1024px) {
      display: none;
    }
  }
}

.right-image {
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0;
  right: 0;
  transition: 0.25s;
  z-index: 10;
  will-change: transform;
  animation: float 5s ease-in-out infinite;
  div {
    width: 120%;
    height: 120%;
    background: url(./../assets/lineright.png) no-repeat;
    background-size: 100%;
    transform: translate(30%, -10%);
    background-position: center;
    @media screen and(max-width: 1600px) {
      transform: translate(40%, -10%);
    }
    @media screen and(max-width: 1440px) {
      width: 150%;
      height: 150%;
    transform: translate(40%, -10%);
    }
    @media screen and(max-width: 1024px) {
      display: none;
    }
  }
}

.title {
  font-size: 96px;
  color: #e0c249;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;

  background: linear-gradient(to right, #a1812e, #f4de8b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-delay: 0s;

  @media screen and(max-width: 1024px) {
    font-size: 72px;
  }

  @media screen and(max-width: 768px) {
    font-size: 56px;
  }

  @media screen and(max-width: 480px) {
    font-size: 42px;
  }
}

.subtitle {
  color: #f7ebbc;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  // margin-top: 5px;
  letter-spacing: 1.2px;
  animation-delay: 0.5s;

  @media screen and(max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and(max-width: 768px) {
    font-size: 14px;
  }

  @media screen and(max-width: 480px) {
    margin-top: 5px;
  }
}

img, svg{
  // height: 140px;
  display: block;
  margin: 50px auto 40px;
  animation-delay: 1s;
  @media screen and(max-width: 1024px) {
    width: 120px;
  }
}

.tagline {
  color: #f7ebbc;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.3px;
  animation-delay: 1.5s;

  @media screen and(max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and(max-width: 480px) {
    font-size: 20px;
  }
}

.btn {
  margin: 33px auto 0;
  width: 220px;
  animation-delay: 2s;
  background-image: linear-gradient(to right, #a1812e, #c39f41, #e2ce80, #f4de8b);
}

section {
  padding-top: 250px;
  height: 780px;
  overflow: hidden;
  position: relative;

  @media screen and(max-width: 1024px) {
    height: 600px;
    padding-top: 180px;
  }

  @media screen and(max-width: 768px) {
    // padding-top: 100px;
    height: 100vh;
    min-height: 480px;
    display: flex;
  }

  @media screen and(max-width: 480px) {
    padding-top: 100px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    // background: linear-gradient(to right, rgba(37, 8, 0, 1) 0%, rgba(95, 20, 0, 1) 100%);
    // background: linear-gradient(20deg, rgba(37, 8, 0, 1) 0%, rgba(95, 20, 0, 1) 100%);
    // z-index: 10;
    opacity: 0.5;
    background: url(./../assets/bg.png) no-repeat;
    background-size: cover;
  }

  video {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    object-fit: cover;
  }

  video::-webkit-media-controls-overlay-play-button {
    display: none;
  }

  video::-webkit-media-controls {
    display: none !important;
  }
}

</style>

<template>
  <section>
    <div class="container">
      <!-- <div class="map"></div> -->
      <h2 class="title animate" v-animate="'slide-left'">Партнеры Golding Life <br>
зарабатывают по всему миру!</h2>
      <!-- <img src="~assets/dividerdark.png" v-animate="'slide-right'" alt="" class="curve animate"> -->
      <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">
      <img src="./../assets/map.png" v-animate="'slide-up'" alt="" class="map animate">
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding: 104px 0 107px 0;
  background: url(./../assets/collage.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.title {
  @media screen and(max-width: 375px) {
    padding: 0 25px;
  }
}

.curve {
  display: block;
  margin: 30px auto 55px;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.map {

  width: 100%;
}

</style>

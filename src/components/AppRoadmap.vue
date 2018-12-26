<template>
  <section data-navigation="roadmap">
    <div class="container">
      <div class="wrapper">
        <div class="wrapper__left">
          <h2 class="title animate" v-animate="'slide-left'">Как зарабатывать <br>
          на золоте?</h2>
          <div class="subtitle animate" v-animate="'slide-up'">Начните зарабатывать сразу после <br>регистрации в системе - уже сегодня!</div>
          <!-- <img src="~assets/dividebigr.png" v-animate="'slide-up'" alt="" class="animate"> -->
          <img class="curve animate" src="./../assets/divider_color.svg" v-animate="'slide-right'" alt="">
        </div>
          <div class="list" v-animate="'roadmap-anim'">
            <div class="list__item">
              <div class="list__item_img"><i></i><span>1</span></div>
              <div class="list__item_right">
                <div class="list__item_title">Регистрируйтесь</div>
                <div class="list__item_descr">Просто оставьте свои контактные данные в форме.</div>
              </div>
            </div>
            <div class="list__item">
              <div class="list__item_img"><i></i><span>2</span></div>
              <div class="list__item_right">
                <div class="list__item_title">Выберите способ заработка</div>
                <div class="list__item_descr">И начинайте зарабатывать в выбранном вами направлении бизнеса!</div>
              </div>
            </div>
            <div class="list__item">
              <div class="list__item_img"><i></i><span>3</span></div>
              <div class="list__item_right">
                <div class="list__item_title">Обучайтесь</div>
                <div class="list__item_descr">После регистрации вы получаете доступ закрытой системы обучения,
                  где работают профессиональные наставники, команда
                  единомышленников и сотни уникальных решений для бизнеса.</div>
              </div>
            </div>
            <div class="list__item">
              <div class="list__item_img"><i></i><span>4</span></div>
              <div class="list__item_right">
                <div class="list__item_title">Рекомендуйте программу</div>
                <div class="list__item_descr">Привлекайте своих знакомых, друзей и партнеров к участию
                  в системе и получайте за это вознаграждение.</div>
              </div>
            </div>
            <div class="list__item">
              <div class="list__item_img"><i></i><span>5</span></div>
              <div class="list__item_right">
                <div class="list__item_title">Выводите средства</div>
                <div class="list__item_descr">Вы можете сами распоряжаться своим заработком так, как это удобно
                  — это ваш бизнес и ваши желания.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<style lang="scss" scoped>
.title {
  text-align: left;
  text-shadow:  3px 3px 12px rgba(56,27,2, 0.3);

}

section {
  padding: 104px 0 80px 0;
  background: url(./../assets/about-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.subtitle {
  font-size: 18px;
  font-family: Montserrat;
  margin-top: 14px;
  line-height: 1.5em;

  @media screen and(max-width: 1280px) {
    font-size: 16px;
  }

  @media screen and(max-width: 480px) {
    text-align: center;
    font-size: 14px;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;

  @media screen and(max-width: 1024px) {
    flex-wrap: wrap;
  }

  &__left {
    width: 35%;
    position: relative;

    .curve {
      width: 100%;
      position: absolute;
      bottom: 30px;
      width: 406px;
      @media screen and(max-width: 480px) {
        margin: 25px auto;
        width: 120px;
      }
    }

    @media screen and(max-width: 1024px) {
      width: 100%;

      .curve {
        position: static;
        max-width: 200px;
        margin: 20px auto;
        display: block;
      }
    }
  }
}


.list {
  width: 57%;
  padding-top: 15px;

  @media screen and(max-width: 1024px) {
    width: 100%;
  }
  position: relative;

  &:after {
    content: '';
    width: 2px;
    height: 0;
    background: #000;
    left: 0;
    top: 20px;
    height: 0;
    left: 40px;
    position: absolute;
    animation-delay: 3.0s;
    // opacity: 0;
    // visibility: none;
    animation-fill-mode: forwards;
    animation-duration: 1.5s;
  }

  &.roadmap-anim {
    &:after { 
     animation-name: heightAnim;
    }

    .list__item {
      animation-name: slideinUp;
      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.5s;
      }

      &:nth-child(3) {
        animation-delay: 1s;
      }

      &:nth-child(4) {
        animation-delay: 1.5s;
      }

      &:nth-child(5) {
        animation-delay: 2.0s;
      }
    }
  }

  // $c: &;
  &__item {
    margin-bottom: 33px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    z-index: 10;

  // transform: translate3d(0, 100vh, 0px);
    opacity: 0;
    // visibility: none;
    animation-fill-mode: forwards;
    animation-duration: 1s;

    // &.slide-right {
    //   transition-duration: 2.5s;
    // }

    &:nth-child(2) {
      margin-bottom: 38px;
    }

    &_right {
      width: calc(100% - 128px);

      @media screen and(max-width: 1024px) {
        width: calc(100% - 110px);
      }

    }

    &_img {
      width: 80px;
      height: 80px;
      // background: url(~assets/coin.svg);
      // background-size: cover;
      // margin: auto;
      border-radius: 100%;
      box-shadow: 0 6px 25px -4px #000;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      i {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background: url(./../assets/coin.svg);
        background-size: cover;
        z-index: 2;
      }

      span {
        position: absolute;
        font-size: 32px;
        font-weight: 600;
        // color:
        background: linear-gradient(to right, #a0812e, #fcd99f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: -9px;
        bottom: 0px;
        margin: auto;
        height: 30px;
        z-index: 2;
      }
    }

    &_title {
      text-transform: uppercase;
      font-weight: 600;
      width: 100%;
      font-size: 18px;

      @media screen and(max-width: 1024px) {
        font-size: 16px;
      }
    }

    &_descr {
      font-size: 14px;
      letter-spacing: -0.1px;
      margin-top: 10px;
      width: 100%;
      font-family: Montserrat;
      line-height: 1.6em;

      @media screen and(max-width: 1024px) {
        font-size: 12px;
      }
      @media screen and(max-width: 600px) {
        padding-right: 46px;
      }

      @media screen and(max-width: 375px) {
        padding-right: 0px;
      }
         
    }
  }
}


@keyframes heightAnim {
    from {
        height: 0;
        opacity: 0;
        visibility: hidden;
    }

    to {
        height: calc(100% - 100px);
        opacity: 1;
        visibility: visible;
    }
}

</style>

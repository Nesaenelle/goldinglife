<template>
  <section data-navigation="about">
    <div class="container">
      <h2 class="title animate" v-animate="'slide-left'">Golding Life – это уникальный <br>проект, благодаря которому вы:</h2>
      <!-- <img class="animate" src="~assets/dividerlight.png"  v-animate="'slide-right'" alt=""> -->
         <img class="curve animate" src="./../assets/divider_color.svg" v-animate="'slide-right'" alt="">
      <div class="list">
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-gold" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Начнёте свой бизнес на золоте и товарах премиум-класса</div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-money" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Узнаете новые способы заработка на золоте</div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-chart" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Получите высокий доход,
            зависящий только от вас</div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-head" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Примете участие во множестве
            закрытых обучающих программ
            и семинаров</div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-group-1" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Присоединитесь к команде,
            работающейв более чем 105
            странах мира</div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-medal" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_title">Сможете покупать уникальную
            продукцию по минимальной цене</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding: 105px 0 72px 0;
  background: url(./../assets/about-bg.jpg) no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.title {
  color: #010101;
  letter-spacing: -1px;
  text-align: left;
  text-shadow:  3px 3px 12px rgba(56,27,2, 0.3);
}

.curve{
  // height: 125px;
  margin: 27px 0 0px 0;
  display: block;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.list {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .slide-up {
      &:nth-child(1) {
        animation-delay: .0s;
      }

      &:nth-child(2) {
        animation-delay: .4s;
      }

      &:nth-child(3) {
        animation-delay: .8s;
      }

      &:nth-child(4) {
        animation-delay: 0s;
      }

      &:nth-child(5) {
        animation-delay: 0.4s;
      }

      &:nth-child(6) {
        animation-delay: 0.8s;
      }

      @media screen and(max-width: 1024px) {
        &:nth-child(1) {
          animation-delay: .0s;
        }

        &:nth-child(2) {
          animation-delay: .4s;
        }

        &:nth-child(3) {
          animation-delay: 0s;
        }

        &:nth-child(4) {
          animation-delay: 0.4s;
        }

        &:nth-child(5) {
          animation-delay: 0s;
        }

        &:nth-child(6) {
          animation-delay: 0.4s;
        }
      }

      @media screen and(max-width: 600px) {
        &:nth-child(1) {
          animation-delay: 0s;
        }

        &:nth-child(2) {
          animation-delay: 0s;
        }

        &:nth-child(3) {
          animation-delay: 0s;
        }

        &:nth-child(4) {
          animation-delay: 0s;
        }

        &:nth-child(5) {
          animation-delay: 0s;
        }

        &:nth-child(6) {
          animation-delay: 0s;
        }
      }
    
  }



  @media screen and(max-width: 480px) {
    margin-top: 20px;
  }

  &__item {
    width: calc(100%/3 - 20px);
    margin-bottom: 50px;
    padding: 0 15px;
  
    @media screen and(max-width: 1280px) {
      padding: 0 25px;
    }

    @media screen and(max-width: 1024px) {
      width: calc(100%/2 - 20px);
    }

    @media screen and(max-width: 768px) {
      width: calc(100%/2 - 0px);
      padding: 0 38px;
    }

    @media screen and(max-width: 600px) {
      width: 100%;
      padding: 0 58px;
    }

    @media screen and(max-width: 480px) {
  
      padding: 0 48px;
    }

    @media screen and(max-width: 375px) {
      width: 100%;
      padding: 0 30px;
    }

    @media screen and(max-width: 320px) {
      width: 100%;
      padding: 0 6px;
    }

    @media (hover) {
      &:hover {
        .list__item_img {
          box-shadow: 0 6px 35px 0px #000;

          .icon {
            transform: scale(1.2);
          }
        }
      }
    }

    &_img {
      width: 110px;
      height: 110px;
      background: url(./../assets/coin.svg);
      background-size: cover;
      margin: auto;
      border-radius: 100%;
      box-shadow: 0 6px 25px -4px #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      .icon {
        width: 35px;
        height: 35px;
        transition: 0.3s;

        @media screen and(max-width: 480px) {
          width: 25px;
          height: 25px;
        }
      }

      @media screen and(max-width: 480px) {
        width: 80px;
        height: 80px;
      }
    }

    &_title {
      font-size: 21px;
      text-align: center;
      font-weight: 600;
      line-height: 1.2em;
      margin-top: 26px;

      @media screen and(max-width: 1024px) {
        font-size: 18px;
      }

      @media screen and(max-width: 768px) {
       font-size: 16px;
      }

      @media screen and(max-width: 600px) {
       font-size: 18px;
      }

      @media screen and(max-width: 480px) {
        font-size: 16px;
      }
    }
  }
}

</style>

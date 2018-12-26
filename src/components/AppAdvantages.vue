<template>
  <section data-navigation="advantages">
    <div class="container">
      <h2 class="title animate" v-animate="'slide-left'">Почему стоит зарегистрироваться <br>
в системе Goldingn Life?</h2>
      <!-- <img src="~assets/dividerlight.png" class="curve animate" v-animate="'slide-right'" alt=""> -->
      <img class="curve animate" src="./../assets/divider_color.svg" v-animate="'slide-right'" alt="">
      <div class="list">
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-premium" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">Товары премиум-сегмента</div>
            <div class="list__item_descr">Получите доступ к возможности работать
              с уникальными товарами премиум-класса
              и продуктами, содержащими золото. Собственное производство, запатентованная продукция и бренд, известный в более чем 100 странах мира.</div>
          </div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-guarantee" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">Гарантия прибыли</div>
            <div class="list__item_descr">Бизнес участников системы развивается и приносит стабильный доход. Golding Life – единственный проект в сфере золотого бизнеса, который предоставляет реальные гарантии прибыли или возврата средств в случае отказа.</div>
          </div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-group-2" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">Обучение и команда</div>
            <div class="list__item_descr">Принимайте участие в закрытых семинарах, знакомьтесь с лекциями и открывайте новые возможности для ведения бизнеса на золоте. Постоянная поддержка и команда профессионалов из сотен человек по всему миру.
            </div>
          </div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-gift" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">Превосходные подарки</div>
            <div class="list__item_descr">Хотите радовать друзей и близких яркими, неординарными и престижными подарками? Можете зарегистрироваться в системе только ради этого — и получить доступ к уникальной продукции из золота по минимальной цене.</div>
          </div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-growth" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">Надёжные инвестиции</div>
            <div class="list__item_descr">Золото практически никогда не падает в цене — инвестируйте в золотые монеты или банковские слитки, чтобы обеспечить себе гарантированный, стабильный и высокий доход с первого дня регистрации в Golding Life.</div>
          </div>
        </div>
        <div class="list__item animate" v-animate="'slide-up'">
          <div class="list__item_img">
            <svg class="icon">
              <use xlink:href="#icon-settings" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
            </svg>
          </div>
          <div class="list__item_info">
            <div class="list__item_title">бизнес-инструменты </div>
            <div class="list__item_descr">Вы получаете собственный сайт и доступ к полному функционалу системы. Для работы с инструментарием не нужно образование или опыт — можно начать вести бизнес без каких-либо дополнительных знаний и навыков.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding: 104px 0 61px 0;
  background: url(./../assets/about-bg.jpg) no-repeat;
  background-size: cover;

  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.title {
  text-align: left;
  text-shadow:  3px 3px 12px rgba(56,27,2, 0.3);
}

.curve {
  // height: 100px;
  margin: 27px 0 0 0;
  display: block;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 48px;

  .slide-up {
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

      @media screen and(max-width: 768px) {
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
    width: calc(100% / 2 - 10px);
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;

    @media screen and(max-width: 1024px) {
      // width: 100%;
    }

    @media screen and(max-width: 768px) {
      width: 100%;
    }

    @media screen and(max-width: 480px) {
      flex-wrap: wrap;
      margin-bottom: 25px;
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

    &:nth-child(even) {
      padding-left: 25px;

      @media screen and(max-width: 1280px) {
        padding-left: 0;
      }
    }

    &_info {
      width: calc(100% - 170px);
      padding-left: 40px;

      @media screen and(max-width: 1024px) {
        padding-left: 25px;
        width: calc(100% - 110px);
      }

      @media screen and(max-width: 480px) {
        width: 100%;
        padding-left: 0;
      }
    }

    &_img {
      width: 170px;
      height: 170px;
      background: url(./../assets/coin.svg);
      background-size: cover;
      margin: auto;
      border-radius: 100%;
      box-shadow: 0 6px 25px -4px #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      @media screen and(max-width: 480px) {
        margin-bottom: 20px;
      }

      .icon {
        width: 50px;
        height: 50px;
        transition: 0.3s;

        @media screen and(max-width: 480px) {
          width: 25px;
          height: 25px;
        }
      }

      @media screen and(max-width: 1024px) {
        width: 110px;
        height: 110px;
      }

      @media screen and(max-width: 480px) {
        width: 80px;
        height: 80px;
      }
    }

    &_title {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;

      @media screen and(max-width: 1024px) {
        font-size: 16px;
      }

      @media screen and(max-width: 480px) {
        text-align: center;
      }
    }

    &_descr {
      margin-top: 22px;
      font-size: 14px;
      font-family: Montserrat;
      line-height: 1.5em;
      letter-spacing: -0.1px;
      font-weight: 400;
      padding-right: 20px;

      @media screen and(max-width: 1024px) {
        font-size: 12px;
        letter-spacing: initial;
        padding-right: 0;
      }

      @media screen and(max-width: 980px) {
        letter-spacing: 0.9px;
      }

      @media screen and(max-width: 768px) {
        letter-spacing: 0.5px;
      }
      @media screen and(max-width: 600px) {
        padding-right: 32px;
        letter-spacing: 0.9px;
      }

      @media screen and(max-width: 480px) {
        text-align: center;
        padding: 0;
        letter-spacing: 0.5px;
      }
      @media screen and(max-width: 480px) {
        letter-spacing: initial;
      }
    }
  }
}

</style>

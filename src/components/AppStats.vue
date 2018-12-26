<template>
  <section>
    <div class="container">
      <h2 class="title animate" v-animate="'slide-left'">Golding Life в цифрах</h2>
      <div class="subtitle animate" v-animate="'slide-up'">Простые факты о бизнес-системе</div>
    <!-- <img src="./../assets/dividerdark.png" class="animate" v-animate="'slide-right'" alt=""> -->
          <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">
      <div class="list">
        <app-counter class="animate" v-animate="'slide-up'" :number="100000" title="Продажа товаров под брендом Golding Life"></app-counter>
        <app-counter class="animate" v-animate="'slide-up'" :number="105" title="Страны, в которых работает система"></app-counter>
        <app-counter class="animate" v-animate="'slide-up'" :number="2000" val="€" title="Средний заработок на второй <br> месяц работы"></app-counter>
        <app-counter class="animate" v-animate="'slide-up'" :number="98" val="%" title="Успешных стартов бизнеса"></app-counter>
        <app-counter class="animate" v-animate="'slide-up'" :number="100" val="%" title="Возврат средств при невозможности <br>получить доход от бизнеса"></app-counter>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>

.subtitle {
  font-size: 17px;
  font-family: Montserrat;
  text-align: center;
  color: #949390;
  margin-top: 15px;
}

.curve {
  display: block;
  margin: 30px auto 60px;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

section {
  padding: 100px 0 118px 0;
  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.container {
  max-width: 100%;
  padding: 0 10px;
}

.list {
  display: flex;
  justify-content: space-between;


  .slide-up {
    &:nth-child(1) {
      animation-delay: .1s;
    }
    &:nth-child(2) {
      animation-delay: .4s;
    }
    &:nth-child(3) {
      animation-delay: .8s;
    }
    &:nth-child(4) {
      animation-delay: 1.2s;
    }
    &:nth-child(5) {
      animation-delay: 1.5s;
    }
  }

  @media screen and(max-width: 1280px) {
    flex-wrap: wrap;
    justify-content: center;
    .slide-up {
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
    }
  }
}

</style>

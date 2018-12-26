<template>
  <section id="range">
    <!-- <div class="container"> -->
      <h2 class="title animate" v-animate="'slide-left'">Ассортимент продукции. <br>
Идеи, воплощенные в золоте</h2>
      <div class="subtitle animate" v-animate="'slide-up'">Уникальная продукция, которой вы можете воспользоваться уже сегодня</div>
      <!-- <img src="./../assets/dividerdark.png" class="animate" v-animate="'slide-right'" alt=""> -->
      <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">

      <app-slider-many :slides="slides" class="animate" v-animate="'slide-up'"></app-slider-many>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [{
          img: 'goldpic.jpg',
          title: 'слитки',
          text: 'Слитки высшей пробы 999,9 пробы от лучших мировых производителей, а так же слитки производимые под собственным брендом компании GoldingLife — самый надёжный способ хранения и приумножения средств.'
        }, {
          img: 'goldpic.jpg',
          title: 'монеты',
          text: 'Золотые монеты Австрийского и Канадского монетного двора, которые с каждым годом растут в цене. Оригинальное дополнение для любой коллекции, стильный подарок и хорошая инвестиция.'
        },
        {
          img: 'alco.jpg',
          title: 'шампанское',
          text: 'Идеальный подарок — во множестве вариантов. Тончайшие хлопья сусального золота в шампанском для ваших ярких праздников.Удивите друзей, близких и окружающих вашим вкусом и роскошным стилем жизни.'
        }, {
          img: 'sweet.jpg',
          title: 'шоколад',
          text: 'Конфеты с настоящим золотом — изысканный подарок для изысканных людей, ценящих каждое мгновение. Универсальный подарок, поражающий своей оригинальностью, который точно не оставит в равнодушии.'
        }, {
          img: 'watch.jpg',
          title: 'часы',
          text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        },
        // {
        //   img: 'card.jpg',
        //   title: 'премиум-карты'
        // }, 
        {
          img: 'goldpic.jpg',
          title: '',
          text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        }, {
          img: 'goldpic.jpg',
          title: '',
          text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        },
        {
          img: 'goldpic.jpg',
          title: '',
          text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        }, {
          img: 'goldpic.jpg',
          title: '',
          text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        }, {
          img: 'goldpic.jpg',
          title: '',
 text: 'Выверенный стиль и идеальный финальный штрих для любого образа успешного человека — для тех, кто по-настоящему ценит время на вес золота. Обязательный и универсальный аксессуар для бизнесмена.'
        }
      ]

    }
  },
  // mounted() {

  // }
}

</script>


<style lang="scss" scoped>
section {
  overflow: hidden;
  padding: 105px 0 109px 0;
  background: url(./../assets/range-bg.png) no-repeat;
  @media screen and(max-width: 1280px) {
    padding: 60px 20px;
  }
}

.title {
  @media screen and(max-width: 375px) {
    br {
      display: none;
    }
    padding: 0 10px;
  }
}

.subtitle {
  text-align: center;
  font-size: 16px;
  font-family: Montserrat;
  color: #949390;
  margin-top: 15px;
  @media screen and(max-width: 600px) {
    padding: 0 10px;
  }

  @media screen and(max-width: 375px) {
    padding: 0;
  }
}

.curve {
  display: block;
  margin: 30px auto;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

</style>

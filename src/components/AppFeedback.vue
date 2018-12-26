<template>
<section data-navigation="feedback">
    <div class="container">
        <h2 class="title animate" v-animate="'slide-left'">
          Что говорят участники системы
        </h2>
        <!-- <img src="~assets/dividerdark.png" alt="" v-animate="'slide-right'" class="animate"> -->
        <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">
        <!-- <app-slider :slides="slides" v-animate="'slide-up'" class="animate"></app-slider> -->
        <div class="slider_wrapper">
          <div class="slider-arrow-prev slider-arrow"></div>
          <div class="slider-arrow-next slider-arrow"></div>
            <div class="slider-nav">
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
                <div class="slide_item">
                    <div class="img_wrap"><img src="./../assets/julie_cortez.png" alt=""></div>
                </div>
            </div>
            <div class="slider-for">
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
                <div class="slide_item">
                    <div class="slide_name">Анжела, 28 лет</div>
                    <p class="slide_desc">Я всегда мечтала стать светской львицей и чтобы меня могли отнести к «золотой молодёжи». Теперь — это не проблема для меня. А главное — я добилась успеха сама с программой Golding Life без чьей-то помощи. Теперь меня ждут на всех закрытых вечеринках города, ведь только у меня есть доступ к уникальному золотому шампанскому и конфетам с чистым пищевым золотом.</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>


export default {
  data() {
    return {

    }
  },
  mounted() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: true,
      asNavFor: '.slider-nav',
      prevArrow: $('.slider-arrow-prev'),
      nextArrow: $('.slider-arrow-next')
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      accessibility: false,
      pauseOnHover: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
}

</script>
<style lang="scss" scoped>
section {
  padding: 105px 0 107px 0;
  background: url(./../assets/range-bg.png) no-repeat;

  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.curve {
  margin: 30px auto 30px;
  display: block;
  width: 167px;

  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.slide_item {
  text-align: center;
}

.img_wrap {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.slide_item img {
  display: inline-block;
  width: 38px;
  height: 38px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px;
  // border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
  background-color: #fff;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
  cursor: pointer;
  border-radius: 100%;
  // border: 2px solid #e0c249;
  background-image: linear-gradient(#fff, #fff), radial-gradient(circle at top left, #a1812e, #cfad56, #f4de8b);
  border: double 0px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.slide_item img {
  -webkit-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
}

.slide_item.slick-center img {
  width: 68px;
  height: 68px;
  padding: 3px;
  -webkit-filter: grayscale(0);
  -o-filter: grayscale(0);
  filter: grayscale(0);
}

.slide_name {
  font-weight: 600;
  text-align: center;
  font-size: 17px;
  margin-top: 8px;
}

.slide_item {}

.slide_desc {
  font-size: 13px;
  text-align: center;
  line-height: 1.65em;
  margin: 32px auto 0;
  letter-spacing: 0.4px;
  font-family: Montserrat;
  @media screen and(max-width: 1024px) {
   width: 80%;
   margin: 32px auto 0;
  }
  @media screen and(max-width: 768px) {
    width: 100%;
  }
}

.rev_name {
  display: inline-block;
  font-weight: 500;
  color: var(--green);
  text-transform: uppercase;
  margin-top: 22px;
  text-decoration: none;
}

.rev_name:hover {
  text-decoration: underline;
}

.slider_wrapper {
  margin-bottom: 10px;
  margin-top: 63px;
  position: relative;
}

.slick-list.draggable {
  padding: 0 !important;
}

.slider-for {
  max-width: 750px;
  margin: auto;
}

.slider-nav {
  max-width: 430px;
  margin: auto;
  margin-bottom: 10px;
}

.slider-arrow {
  position: absolute;
  // top: 0px;
  bottom: 20px;
  margin: auto;
  width: 70px;
  height: 70px;
  // border: 1px solid;
  background-size: cover !important;
  cursor: pointer;
  background: #fff;
  // display: flex;
  transition: 0.3s;
    z-index: 10;
  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border: solid #a1812e;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 100;
  }

  @media screen and(max-width: 768px) {
    width: 45px;
    height: 45px;
    top: 115px;
    bottom: auto;
  }

  &:hover {
    background: #000;
  }

  &-prev {
    left: 0px;

    &:after {
      transform: rotate(135deg);
      right: -5px;
    }

    &:active {
      transform: translateY(1px);
    }
  }

  &-next {
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

</style>

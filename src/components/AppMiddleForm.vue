<template>
  <section data-navigation="middle-form">
    <div class="container">
      <h2 class="title animate" v-animate="'slide-left'">Получите доступ ко всем товарам <br>
и возможностям для заработка сразу <br>
после регистрации!</h2>
      <!-- <img src="~assets/dividerdark.png" v-animate="'slide-right'" alt="" class="animate"> -->
      <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">
      <div class="subscribe-form animate" v-animate="'slide-up'">
        <form>
          <div style="overflow: inherit;padding-bottom:20px;display: inline-block;width: 100%;">
            <div class="wrapp-iput">
              <input class="name name-input" size="12" maxlength="12" placeholder="Имя" required="required" name="UsersTemp[username]" id="UsersTemp_username" type="text"> <label class="error name-input-error" for="login_username" style="display: block;"> </label>
            </div>
            <div class="wrapp-iput">
              <input class="pass mail-input" size="50" maxlength="50" placeholder="E-mail" required="required" name="UsersTemp[email]" id="UsersTemp_email" type="text"> <label class="error email-input-error" for="login_email" style="display: block;"> </label>
            </div>
          </div>
          <div class="bottom-buttons">
            <button class="btn" type="button">Получить доступ</button>
          </div>
        </form>
        <div class="subscribe-form__bottom-text">Мы гарантируем конфиденциальность ваших данных <br>
          и не рассылаем спам</div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding: 106px 0 118px 0;
  background: url(./../assets/middle-form.jpg) no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}

.curve {
  margin: 27px auto 59px;
  display: block;
  width: 167px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.subscribe-form {
  margin: 20px auto 0;
  max-width: 360px;

  .btn {
    margin: auto;
    width: 242px;
    background-image: linear-gradient(90deg, #a1812e, #bd9b41,  #f4de8b,  #f4de8b);
    @media screen and(max-width: 768px) {
      width: 100%;
    }
  }

  form {
    >div:first-child {
      .wrapp-iput {
        &:first-child {}

        &:last-child {}
      }
    }
  }
}

.title {
  color: #e0c249;
  background: linear-gradient(to right, #a0812e, #fcd99f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


  @media screen and(max-width: 768px) {
    padding: 0 25px;
  }

  @media screen and(max-width: 600px) {
    padding: 0;
  }

  // @media screen and(max-width: 375px) {
  //   padding: 0;
  // }

}

</style>

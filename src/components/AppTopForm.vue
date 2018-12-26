<template>
  <section id="top-form">
    <div class="container">
      <h2 class="title animate" v-animate="'slide-left'">Золото всегда было в цене</h2>
      <div class="subtitle animate" v-animate="'slide-up'">Посмотрите видео, и узнайте, как на нём заработать!</div>
      <!-- <img src="./../assets/dividerdark.png" class="animate" v-animate="'slide-right'" alt=""> -->
      <img class="curve animate" src="./../assets/divider_second.svg" v-animate="'slide-right'" alt="">
      <div class="wrapper">
        <div class="video animate" v-animate="'slide-up'">
          <iframe  src="https://www.youtube.com/embed/uaAN7uyQ8l0"></iframe>
        </div>
        <div class="subscribe-form animate" v-animate="'slide-up'">
          <div class="subscribe-form__title">Пройдите простую регистрацию <br>
            и начните зарабатывать уже сейчас</div>
          <div class="subscribe-form__subtitle">Мы гарантируем конфиденциальность
            ваших данных и не рассылаем спам</div>
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
        </div>
        <!-- {$subscribeform} -->
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  padding: 105px 0 115px 0;
  background: url(./../assets/top-form-bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and(max-width: 1280px) {
    padding: 60px 0;
  }
}
.title {
  letter-spacing: -0.7px;
  @media screen and(max-width: 320px) {
    padding: 0 12px;
  }
}

.subtitle {
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
  color: #949390;
  font-family: Montserrat;
  letter-spacing: -0.2px;
  @media screen and(max-width: 480px) {
    padding: 0 30px;
  }

  @media screen and(max-width: 375px) {
    padding: 0 10px;
  }

  @media screen and(max-width: 375px) {
    padding: 0 0px;
  }
}

iframe {
  width: 100%;
  max-width: 550px;
  height: 311px;
  box-shadow: 5px  15px 80px -15px #000;
  border: none;
  @media screen and(max-width: 1280px) {
    width: 100%;
    display: block;
    margin: 10px  auto 30px;
    // height: auto;
  }
}
.curve {
  // height: 120px;
  width: 167px;
  display: block;
  margin: 30px auto 60px;
  @media screen and(max-width: 480px) {
    margin: 25px auto;
    width: 120px;
  }
}

.wrapper {
  display: flex;
  margin-top: 20px;
  width: 100%;
  @media screen and(max-width: 1280px) {
    flex-wrap: wrap;
  }
}

.video {
  width: 58%;
  @media screen and(max-width: 1280px) {
    width: 100%;
  }
}

.btn {
  margin: auto;
  width: 242px;
  background-image: linear-gradient(90deg, #a1812e, #bd9b41,  #f4de8b,  #f4de8b);
  border: none;
  box-shadow: 1px 1px 1px -1px #000;
}

.subscribe-form {
  padding-top: 8px;
  @media screen and(max-width: 1280px) {
    width: 100%;
    margin: auto;
  }
  form {
    max-width: 360px;
    margin: 29px auto 0;

    >div:first-child {
      padding-bottom: 0 !important;
    }

    input {
      background: #fff;
    }
    .btn {
      @media screen and(max-width: 768px) {
        width: 100%;
      }
    }
  }

  &__title {
    max-width: 400px;
    margin: auto;
    line-height: 1.5em;
    font-size: 16px;
    @media screen and(max-width: 375px) {
      padding: 0 3px;
      font-size: 15px;
      br {
        display: none;
      }
    }
  }

  &__subtitle {
    width: 300px;
    margin: 10px auto 0px;
    font-size: 12px;
    font-family: Montserrat;
    letter-spacing: 0px;
    padding: 0 16px;
    line-height: 1.5em;
  }
}

</style>

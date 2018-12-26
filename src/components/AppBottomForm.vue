<template>
  <section>
    <div class="subscribe-form animate" v-animate="'slide-left'">
      <div class="subscribe-form__wrapper">
        <h2 class="title">Начните зарабатывать сразу после
регистрации в системе - уже сегодня!</h2>
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
        <div class="subscribe-form__bottom-text">Мы гарантируем конфиденциальность ваших данных и не рассылаем спам</div>
      </div>
    </div>
    <div class="mentor animate" v-animate="'slide-right'">
      <div>
        <div class="mentor__title">
          Ваш персональный наставник
          в системе Golding Life
        </div>
        <div class="mentor__info">
          <div class="mentor__info_img">
            <img src="./../assets/Jake Schneider.png" alt="">
          </div>
            <div>
              <!-- <div class="mentor__name">Eddie Edwardsp</div> -->
              <div class="mentor__name">{$fiosponsor}</div>
              <!-- {$fiosponsor}  -->
              <div class="mentor__phone">
                <a href="">
                  <svg class="icon icon-phone">
                      <use xlink:href="#icon-phone" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                  </svg>
                    <!-- <span>+7 89 000-00-00</span> -->
                    <span>{$phonesponsor}</span>
                  </a>
              </div>
              <div class="mentor__email">
                <a href="mailto:{$emailsponsor}">
                <svg class="icon icon-email">
                    <use xlink:href="#icon-email" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
                <!-- <span>sample@company.com</span> -->
                <span>{$emailsponsor}</span>
                <!-- {$emailsponsor} -->
              </a>
              </div>
              <div class="mentor__skype">
                <a href="skype:{$skypesponsor}">
                <svg class="icon icon-skype">
                    <use xlink:href="#icon-skype" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
                <!-- <span>skype.contact</span> -->
                <span>{$skypesponsor}</span>
                <!-- {$skypesponsor} -->
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and(max-width: 1280px) {
    flex-wrap: wrap;
  }
}

.title {
  color: #e0c249;

  background: linear-gradient(to right, #a0812e, #fcd99f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and(max-width: 480px) {
    padding: 0 10px;
  }

  @media screen and(max-width: 480px) {
    padding: 0;
  }
}

.subscribe-form {
  width: 67%;
  padding: 105px 0px 118px 0;
  background: url(./../assets/linedwn.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and(max-width: 1280px) {
    width: 100%;
    padding: 60px 40px;
  }

  @media screen and(max-width: 480px) {
    padding: 30px 20px;
  }


  &__wrapper {
    width: 855px;

    @media screen and(max-width: 1024px) {
      width: 100%;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 56px;
    padding: 0 47px;

    @media screen and(max-width: 768px) {
      flex-wrap: wrap;
    }

    @media screen and(max-width: 480px) {
      padding: 0 0;
    }

    >div:first-child {
      display: flex !important;
      justify-content: space-between;
      width: calc(70% - 20px) !important;
      padding-bottom: 0 !important;

      @media screen and(max-width: 768px) {
        width: 100% !important;
        flex-wrap: wrap;
      }
    }

    >div:last-child {
      width: calc(30% + 10px) !important;
      display: flex;
      justify-content: flex-end;

      @media screen and(max-width: 768px) {
        width: 100% !important;
      }
    }

    .wrapp-iput {
      width: calc(100%/2 - 5px);
      margin-bottom: 0 !important;

      @media screen and(max-width: 768px) {
        width: 100%;
        margin-bottom: 10px !important;
      }

      input {
        margin: 0;
      }
    }

    .bottom-buttons {
      width: 200px;
    }

    .btn {
      width: 100%;
      background-image: linear-gradient(90deg, #a1812e, #bd9b41,  #f4de8b,  #f4de8b);
    }
  }
}

.mentor {
  width: 33%;
  padding: 113px 100px 91px 100px;
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;

  @media screen and(max-width: 1600px) {
    padding: 113px 60px 91px 60px;
  }

  @media screen and(max-width: 1280px) {
    width: 100%;
    padding: 60px 40px;
  }

  @media screen and(max-width: 480px) {

    padding: 30px 20px;

  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin-top: 44px;

    @media screen and(max-width: 480px) {
      flex-wrap: wrap;
    }

    >div {
      width: calc(100% - 155px);

      @media screen and(max-width: 480px) {
        width: 100%;
      }
    }

    &_img {

      max-width: 130px;
      min-width: 130px;
      min-height: 130px;
      max-height: 130px;
      border: double 2px transparent;
      background-image: linear-gradient(white, white), radial-gradient(circle at top left, #a58531, #f1da87);
      background-origin: border-box;
      background-clip: content-box, border-box;
      border-radius: 100%;
      overflow: hidden;
      position: relative;

      @media screen and(max-width: 480px) {
        margin: auto;
      }

      img {
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5em;

    @media screen and(max-width: 480px) {
      text-align: center;
      font-size: 20px;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 19px;
    margin-top: 13px;

    @media screen and(max-width: 480px) {
      text-align: center;
    }
  }

  &__phone {
    margin-top: 22px;
  }

  &__phone,
  &__email,
  &__skype {
    color: #a1812e;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    margin-bottom: 6px;
    transition: 0.3s;

    &:hover {
      color: #000;

      a {
        svg {
          fill: #000;
        }
      }
    }

    a {
      display: flex;
      align-items: center;

      @media screen and(max-width: 480px) {
        justify-content: center;
      }

      svg {
        transition: 0.3s;
        fill: #a1812e;
        width: 14px;
        height: 14px;
        margin-right: 10px;
        min-width: 14px;
      }
    }
  }

  &__skype {
    a {
      svg {
        padding: 1px;
      }
    }
  }
}

</style>

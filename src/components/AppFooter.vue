<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="copyright">Golding Life © 2018</div>
        <div class="developed">developed by: <a href="http://effex-it.com/">effex-it</a></div>
      </div>
      <div class="socials">
        <a href="">
          <!-- {$linkfacebook} -->
          <svg class="icon">
              <use xlink:href="#icon-facebook" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
          </svg>
        </a>
        <a href="">
          <svg class="icon">
              <use xlink:href="#icon-twitter" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
          </svg>
        </a>
        <a href="">
          <svg class="icon">
              <use xlink:href="#icon-instagram" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
          </svg>
        </a>
      </div>
      <div class="links">
        <a href="/politica">Политика конфиденциальности</a>
        <a href="/pravila">Правила пользования сайтом</a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: #260900;
  border-top: 2px solid #e0c249;
}

.copyright {
  font-size: 14px;
  color: #fff;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 28px;
}

.container {
  padding: 33px 47px 38px 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and(max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px;
  }
}

.left {
  @media screen and(max-width: 768px) {
    width: 100%;
    text-align: center;
  }
}

.developed {
  color: #949390;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;

  a {
    color: #a1812e;
  }
}

.socials {
  display: flex;
  font-size: 0;
  overflow: hidden;
  position: relative;
  left: 58px;

  @media screen and(max-width: 768px) {
    position: static;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  a {
    margin-right: 7px;
    display: block;
    border-radius: 4px;
    // border: 2px solid #a1812e;

    // background-image: linear-gradient(to right, #a1812e, #cfad56, #f4de8b);
    background-image: linear-gradient(#260900, #260900), radial-gradient(circle at top left, #a1812e, #cfad56, #f4de8b);
    border: double 2px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;

    transition: 0.3s;

    &:hover {
      svg {
        background: #a1812e52;
      }
    }

    svg {
      transition: 0.3s;
      padding: 7px;
      width: 29px;
      height: 29px;
      fill: #a1812e;
    }
  }
}

.links {
  text-align: right;
  line-height: 24px;

  @media screen and(max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  a {
    display: block;
    width: 100%;
    color: #a1812e;
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat;
  }
}

</style>

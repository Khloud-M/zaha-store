<template>
    <div class="contaier-arrival d-flex my-4">
      <div>
        <div class="content">
          <h2>New Arrivals !</h2>
          <p>Arabian Abya Is Avaliable! 30% Discount</p>
          <router-link to="/">
            <bace-button> Shop Now</bace-button>
          </router-link>
        </div>
      </div>
      <div>
        <div class="content">
          <h2>New Arrivals !</h2>
          <p>Arabian Abya Is Avaliable! 30% Discount</p>
          <router-link to="/">
            <bace-button> Shop Now</bace-button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  <style lang="scss" scoped>
  .contaier-arrival {
    overflow: hidden;
    justify-content: space-between;
    div {
      background-position: center;
      background-size: cover;
      height: 40vh;
      width: 48%;
      position: relative;
      color: var(--main_theme_clr);
    }
    & > :nth-child(1) {
      background-image: url(../../assets/image/imageCom2.png);
    }
    & > :nth-child(2) {
      background-image: url(../../assets/image/imageCom3.png);
    }
    .content {
      position: absolute;
      top: 22%;
      left: 5%;
      width: 40%;
  
      h2 {
        font-weight: 400;
        font-size: 40px;
      }
      p {
        font-size: 20px;
        font-weight: 380;
        margin-top: 15px;
        margin-bottom: 15px;
        word-spacing: 0px;
        color: var(--main_theme_clr);
      }
    }
  }
  </style>
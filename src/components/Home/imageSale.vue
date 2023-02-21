<template>
    <div class="imageCom my-5">
      <div class="content">
        <h2>50% Sale</h2>
        <p>Arabian Abaya Is Available!</p>
        <router-link to="/">
          <bace-button> Shop Now</bace-button>
        </router-link>
      </div>
    </div>
  </template>
  <style lang="scss">
  .imageCom {
    background-image: url(../../assets/image/banner.4dac09f.png);
    background-position: center;
    background-size: cover;
    height: 50vh;
    position: relative;
    color: var(--main_theme_clr);
    .content {
      position: absolute;
      top: 22%;
      left: 6%;
  
      h2 {
        font-weight: 500;
        font-size: 50px;
      }
      p {
        font-size: 26px;
        font-weight: 350;
        margin-top: 15px;
        margin-bottom: 15px;
        color: var(--main_theme_clr);
      }
    }
  }
  </style>
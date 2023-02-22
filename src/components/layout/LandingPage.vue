<template>
    <section class="landing mt-3">
      <div class="landing-content">
        <h2>{{ getPath }}</h2>
        <div class="link">
          <li><router-link to="/">home</router-link></li>
          <span> >> </span>
          <li>{{ getPath }}</li>
        </div>
      </div>
    </section>
  </template>
  <style lang="scss" scoped>
  .landing {
    background-image: url(../../assets/image/banner.4dac09f.png);
    background-position: center;
    background-size: cover;
    height: 50vh;
    position: relative;
    color: var(--main_theme_clr);
  }
  .landing-content {
    height: 200px;
    z-index: 99;
    position: absolute;
    top: 35%;
    left: 5%;
    h2 {
      font-weight: 400;
      font-size: 50px;
      text-transform: capitalize;
    }
    .link {
      font-size: 17px;
      display: flex;
      gap: 15px;
      margin-top: 20px;
      li  , a  {
        color: var(--main_theme_clr) ;
      }
    }
    .link > :nth-child(1) {
      font-weight: 300;
     
    }
    .link > :nth-child(3) {
      font-weight: bold;
    }
  }
  </style>
  <script>
  export default {
    computed: {
      getPath() {
        return this.$route.path.replace("/", "");
      },
    },
  };
  </script>
  
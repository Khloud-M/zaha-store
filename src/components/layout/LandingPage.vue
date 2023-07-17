<template>
  <section class="landing">
    <div class="landing_content">
      <h2>{{ getPath() }}</h2>
      <div class="link">
        <li><router-link to="/">home</router-link></li>
        <span> >> </span>
        <li>{{ getPath() }}</li>
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
  margin-bottom: var(--marginTopBottom);
}
.landing_content {
  height: 200px;
  z-index: 99;
  position: absolute;
  top: 35%;
  left: 5%;
  h2 {
    font-weight: 400;
    font-size: 50px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  .link {
    font-size: 17px;
    display: flex;
    gap: 15px;
    margin-top: 20px;
    li,
    a {
      color: var(--main_theme_clr);
      text-transform: capitalize;
    }
  }
  .link > :nth-child(1) {
    font-weight: 500;
  }
  .link > :nth-child(3) {
    font-weight: bold;
  }
}
</style>
  <script>
export default {
  data() {
    return {
      mypath: window.location.pathname,
    };
  },
  methods: {
    getPath() {
      this.mypath = this.mypath.replace("/", "");
      if (this.mypath === "hotoffer") {
        const newPath = "hot offer";
        return newPath;
      }
      if (this.mypath === "products") {
        const newPath = " all products";
        return newPath;
      } else {
        return this.mypath;
      }
    },
  },
};
</script>
  
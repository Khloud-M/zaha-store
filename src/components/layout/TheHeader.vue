<template>
  <header>
    <v-container>
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/image/logo.svg"
              alt="logo"
              width="56"
              height="68"
            />
          </router-link>
        </div>
        <!-- logo -->
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/categore"> categories </router-link></li>
          <li><router-link to="/hotoffer"> Hot Offer</router-link></li>
          <li><router-link to="/products"> all products</router-link></li>
          <li><router-link to="/about"> about</router-link></li>
          <li><router-link to="/contact"> contact us</router-link></li>
          <li><router-link to="/"> Ar</router-link></li>
        </ul>
        <!-- end list-->
        <div class="navbar_btns_wrapper">
          <form class="search-form">
            <button class="search_btn">
              <img
                src="@/assets/image/download.svg"
                alt="searchIcon"
                width="20"
                height="20"
              />
            </button>
            <input
              class="headerSearch"
              type="text"
              placeholder="search"
              v-model="search"
              @blur="rebackWidth"
              @click="changeWidth"
              :style="{ width: Width + 'px' }"
            />
          </form>
          <router-link to="/">
            <bace-button> Register Now</bace-button>
          </router-link>
          <!-- <router-link v-else>
            <bace-button @click="removeToken"> log out </bace-button> 
           </router-link> -->
        </div>
      </div>
      <!--header_content-->
    </v-container>
  </header>
</template>
<script>
export default {
  data() {
    return {
      Width: "100",
      search: "",
    };
  },
  methods: {
    changeWidth() {
      this.Width = "160";
    },
    rebackWidth() {
      if (this.search === "") return (this.Width = "100");
      else {
        return (this.Width = "160");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 25%;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
    li a {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 400;
      color: #b6b6b6;
      transition: all 0.5s linear;
    }
    .active,
    a:hover {
      color: var(--main_theme_clr);
    }
  }
  .cart {
    .button-cart {
      border: none;
      position: relative;
      width: 60px;
      height: 60px;
      background-color: blue;

      img {
        width: 60px;
        height: 60px;
      }
      span {
        display: block;
        position: absolute;
        left: 35%;
        top: 10%;
        color: var(--main_theme_clr);
        font-weight: bold;
        background-color: var(--dark_secondary_theme_clr);
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
      }
    }
  }
  .navbar_btns_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    .search-form {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 8px;
      border: 1px solid var(--border_clr);
      border-radius: 4px;
      button {
        touch-action: manipulation;
        background-color: transparent;
        border-style: none;
      }
      input {
        color: var(--light_gray_clr);
        transition: all 0.4s linear;
        border: none;
        outline: none;
        font-weight: 300;
      }
    }
  }
}
</style>
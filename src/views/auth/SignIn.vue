<template>
  <div class="col-md-6 col-sm-12 form">
    <form @submit.prevent="submitForm">
      <h2>sign In</h2>
      <div class="floating-label">
        <input
          class="floating-input"
          type="email"
          name="email"
          id="email"
          v-model="useremail"
        />
        <span class="input-highlight"></span>
        <label for="email"> Email </label>
      </div>
      <!-- email-->
      <div class="floating-label">
        <input
          class="floating-input"
          type="password"
          name="Password"
          id="Password"
          v-model="password"
        />
        <span class="input-highlight"></span>
        <label for="Password"> Password </label>
      </div>
      <!-- Password-->
      <div class="forget_password">
        <router-link to="/:auth/resetPass"> Forget Password </router-link>
      </div>
      <!-- forget_password-->
      <bace-button class="sign" type="submit"> Sign In</bace-button>
      <div class="footer-form d-flex justify-content-center mt-3">
        <router-link to="/:auth">
          <p>Don't Have Account?</p>
        </router-link>
        <router-link to="/:auth" class="singIn"> Sign Up </router-link>
      </div>
    </form>
  </div>
  <div class="col-md-6 col-sm-12 image"></div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // send request
    submitForm() {
      const myData = new FormData();
      myData.append("email", this.email);
      myData.append("password", this.password);
      myData.append("device_type", "ios");
      myData.append("device_token", "asdfghjklkjhgfdsdfghjkl");
      this.axios({
        method: "POST",
        url: "/auth/login",
        data: myData,
      })
        .then((response) => {
          this.$toast.success(`login success`);

          // ملهاش اي لازمة
          if (response.data.status == true) {
            this.$store.commit("authModle/setCurrentUserData", {
              token: response.data.data.token,
              email: response.data.data.email,
            });
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          this.$toast.error(`login faild`);
        });
    },
    // end send request
  },
};
</script>
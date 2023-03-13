<template>
  <div class="col-md-6 col-sm-12 form">
    <form @submit.prevent="submitForm">
      <h2>Reset Password</h2>
      <p>Please Enter Your Phone Number Below To Recovery Your Password</p>
      <div class="floating-label">
        <input
          class="floating-input"
          type="tel"
          name="phone"
          id="phone"
          v-model="userPhone"
        />
        <span class="input-highlight"></span>
        <label for="phone"> Phone Number </label>
      </div>
      <!-- phone number-->
      <!-- this is test -->
      <router-link to="/:auth/varifecation">test ruter</router-link>
      <bace-button class="sign" type="submit"> Send </bace-button>
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
      userPhone: null,

    };
} ,
methods: {
    submitForm() {
      const myData = new FormData();
      myData.append("phone", this.userPhone);
      this.axios({
        method: "POST",
        url: "/auth/password/forget",
        data: myData,
      })
        .then((response) => {
          // ملهاش اي لازمة
          if (response.data.status == true) {
            this.$router.push("/:auth/signIn");
          }
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    },
  },
}
</script>
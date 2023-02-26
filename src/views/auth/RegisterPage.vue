<template>
    <div class="col-md-6 col-sm-12 form">
          <form @submit.prevent="submitForm">
            <h2>sign up</h2>
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=""
                name="FullName"
                id="FullName"
                v-model="FullName"
              />
              <span class="input-highlight"></span>
              <label id="FullName">Full Name</label>
            </div>
            <!-- full name-->
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=""
                name="user-name"
                id="user-name"
                v-model="userName"
              />
              <span class="input-highlight"></span>
              <label>User Name</label>
            </div>
            <!-- user name-->
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
                type="tel"
                name="phone"
                id="phone"
                v-model="userPhone"
              />
              <span class="input-highlight"></span>
              <label for="phone"> Phone Number </label>
            </div>
            <!-- phone number-->
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
            <div class="floating-label">
              <input
                class="floating-input"
                type="password"
                name="ConfPassword"
                id="ConfPassword"
                v-model="ConfPassword"
              />
              <span class="input-highlight"></span>
              <label for="ConfPassword"> Confirm Password </label>
            </div>
            <!-- ConfPassword-->
            <bace-button class="sign" type="submit"> Sign Up</bace-button>
            <div class="footer-form  d-flex justify-content-center mt-3">
              <router-link to="/:auth/signIn"> <p> Already Have An Account?</p> </router-link>
              <router-link to="/:auth/signIn" class="singIn"> Sign In </router-link>
               </div>
          </form>
        </div>
        <div class="col-md-6 col-sm-12 image"></div>
</template>>
  <script>
  export default {
    data() {
      return {
        isValid: true,
        FullName: "",
        userName: "",
        userPhone: null,
        useremail: "",
        password: "",
        ConfPassword: "",
      };
    },
}
</script>

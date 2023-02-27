<template>
     <div class="col-md-6 col-sm-12 form">
          <form @submit.prevent="submitForm">
            <h2>Reset Password</h2>
            <p>
              Please Enter Your Phone Number Below To Recovery Your Password
            </p>
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
            <bace-button class="sign" type="submit"> Save </bace-button>
            <div class="footer-form d-flex justify-content-center mt-3">
              <router-link to="/:auth/register">
                <p>Don't Have Account?</p>
              </router-link>
              <router-link to="/:auth/register" class="singIn">
                Sign Up
              </router-link>
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
      ConfPassword:null,
      password:null
    };
}
}
</script>
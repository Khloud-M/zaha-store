<template>
    <div class="col-md-6 col-sm-12">
      <!-- start varifaction  rigester-->
      <form @submit.prevent="submitForm" v-if="doubleRoute">
        <h2>Verification</h2>
        <p class="text-lg-center" >Please Enter The Code That Sent To Your Email Address</p>
        <div class="myOtp">
          <v-otp-input
            ref="otpInput"
            input-classes="otp-input"
            separator="-"
            :num-inputs="5"
            :should-auto-focus="true"
            :is-input-num="true"
            :conditionalClass="['one', 'two', 'three', 'four', 'five']"
            :placeholder="['', '', '', '']"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
            v-model="verification_code"
          />
        </div>
        <bace-button class="sign" type="submit"> Submit</bace-button>
        <div class="footer-form d-flex justify-content-center mt-3">
          <router-link to="/:auth/register">
            <p>Dont Have An Account?</p>
          </router-link>
          <router-link to="/:auth/register" class="singIn">
            Sign Up
          </router-link>
        </div>
      </form>

      <!-- end varifaction rigester -->
    </div>
    <div class="col-md-6 col-sm-12 image"></div>
</template>
<style>

.myOtp {
  display: flex;
  flex-direction: row;
  justify-content: space-around !important;
  margin: 15px 0;
}
.otp-input {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>

<script>
export default {
  data() {
    return {
      phone: null,
      verification_code: null,
      doubleRoute: true,
    };
  },
  methods: {
    submitForm() {
      // if api is not there
      if (this.doubleRoute) this.$router.push("/:auth/newPasswrod");
      // if api is there
      const myData = new FormData();
      myData.append("phone", this.phone);
      myData.append("verification_code", this.verification_code);
      myData.append("device_type", "ios");
      myData.append("device_token", "asdasdasdasdasda");
      this.axios({
        method: "POST",
        url: "/auth/email/verify",
        data: myData,
      })
        .then((response) => {
          if (response.data.status == true) {
            if (this.doubleRoute) this.$router.push("/:auth/newPasswrod");
          }
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    },
  },
};
</script>
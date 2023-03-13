<template>
       <div class="col-md-6 col-sm-12 form">
          <!-- start varifaction  rigester-->
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
          <!-- end varifaction rigester -->
        </div>
        <div class="col-md-6 col-sm-12 image"></div>
</template>
<style>
.myOtp {
  display: flex;
  flex-direction: row;
  justify-content: space-around !important;
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
      doubleRoute:true
    };
  },
  methods: {
    submitForm() {
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
            if(this.doubleRoute)
            this.$router.push("/:auth/signIn");
          }
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    },
  },
};
  </script>
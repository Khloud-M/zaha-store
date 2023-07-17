<template>
  <div class="checkout container">
    <h4>YOUR ORDER PRODUCTS</h4>
    <div class="container_totalCost">
      <div>
        <span>SubTotal</span>
        <hr />
        <span> 200 R.S</span>
      </div>
      <div>
        <span>Shipping Price </span>
        <hr />
        <span> 20 R.S</span>
      </div>
      <div>
        <span>Total </span>
        <hr />
        <span> 220 R.S</span>
      </div>
    </div>
    <h4>CHECKOUT</h4>
    <div class="progressbar">
      <div class="div_step">
        <span class="step1 circle active" ref="step1"></span>
        <div>Address</div>
      </div>
      <hr />

      <div class="div_step">
        <span class="step2 circle" ref="step2"></span>
        <div>Payment</div>
      </div>
      <hr />
      <div class="div_step">
        <span class="step3 circle" ref="step3"></span>
        <div>Done</div>
      </div>
    </div>
    <!-- progrressbar -->
    <form action="" class="shipping_form" @submit.prevent="submitForm">
      <div class="shipping">
        <h4>Saved Shipping Addresses</h4>
        <div class="radio">
          <div
            class="form_shipping"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="form_check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                v-model="mansoura"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                <h4>Mansoura</h4>
                <p>
                  Saudi Ariba - Riyadh - Velit in lorem elige - Suscipit est
                  volupt
                </p>
              </label>
            </div>
          </div>

          <div
            class="form_shipping"
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <div class="form_check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                v-model="home"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                <h4>Home</h4>
                <p>Saudi Ariba - Riyadh - 100 - king khaled Road</p>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="Container_form">
        <!-- name -->
        <div class="formm form-control">
          <input
            type="text"
            name="user-name"
            id="username"
            v-model.trim="username"
            required
          />
          <label for="name" class="label-name">
            <span class="content-name">Receiver Name</span>
          </label>
        </div>

        <!-- phone number-->
        <div class="formm form-control">
          <input
            type="tel"
            name="phone"
            id="username"
            v-model.number="usernumber"
            required
          />
          <label for="name" class="label-name">
            <span class="content-name">Receiver Phone </span>
          </label>
        </div>
      </div>

      <button class="formbtn">
        <bace-button class="mainbtn"> Next</bace-button>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: "",
      mansoura: "",
      username: "",
      usernumber: null,
    };
  },
  methods: {
    submitForm() {
      //   this.username = this.username;
      //   this.usernumber = this.usernumber;
      if (this.username && this.usernumber && (this.home || this.mansoura)) {
        this.$refs.step1.classList.add("done");
        this.$refs.step2.classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss">
.checkout {
  margin: 30px auto;
  h4 {
    color: var(--main_theme_clr);
    text-align: center;
    margin: 30px 0;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .container_totalCost {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 10% 80% 10%);
      column-gap: 5px;
      font-weight: 900;
      color: var(--main_theme_clr);
      @media (max-width: 480px) {
        grid-template-columns: repeat(3, 20% 60% 20%);
      }
      hr {
        color: rgb(139, 137, 137);
      }
    }
  }
  .progressbar {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 40px 0;
    hr {
      color: #888;
      width: 100%;
      border: 1px solid #888;
      text-align: center;
      margin: -18px -4px 0;
    }
    .div_step div {
      color: rgba(0, 0, 0, 0.38);
      font-size: 17px;
      font-weight: 600;
    }
    .circle {
      align-items: center;
      background-color: #fff;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      border: 1px solid #888;
      justify-content: center;
      transition: 0.4s ease;
      position: relative;
      color: #ecb737;
    }
    .circle::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      background: #fff;
      width: 25px;
      height: 25px;
      border-radius: 100px;
      margin: auto;
    }
    .active {
      background: #ecb737;
      border-color: #ecb737;
    }
    .done {
      background: var(--main_theme_clr);
      border-color: var(--main_theme_clr);
    }
  }
}
.shipping {
  margin: 50px 0;
  h4 {
    text-align: start;
  }
  label p {
    color: #52004a85;
  }
  .radio {
    border: 0;
    width: 100%;
  }
  .radio {
    display: flex;
    align-items: center;
    justify-items: start;
    justify-content: space-between;
    column-gap: 20px;
    overflow: hidden;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .form_shipping {
    background: rgb(224 182 220 / 30%);
    width: 100%;
    border-radius: 4px;
    padding: 50px 25px;
    margin: 10px 0;
    // overflow: hidden;

    .form_check input {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      right: 20px;
      border: 1px solid var(--main_theme_clr);
    }
    .form_check input:checked,
    .form_check input:active {
      background-color: var(--main_theme_clr);
      box-shadow: none;
    }
  }
  //
}
.Container_form {
  display: flex;
  align-items: center;
  justify-items: start;
  justify-content: space-between;
  column-gap: 20px;
  .formm {
    position: relative;
    height: 55px;
    border-radius: 10px;
    z-index: 1;
    margin-bottom: 20px;
  }
}

.formm input,
textarea {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: none;
  outline: none;
}

.formm label {
  position: absolute;
  bottom: 7px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: gray;
  transition: all 0.4s ease-in-out;
}

/* El último hijo */
.formm label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  height: 100%;
  width: 100%;
  /* border-bottom: 5px solid  var(--vt-c-volite); */
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.content-name {
  position: absolute;
  bottom: 8px;
  left: 10px;
  transition: all 0.3s ease;
  font-size: 16px;
  padding-left: 10px;
  z-index: 2;
}
.lastform .content-name {
  top: 20%;
}

.formm input:focus + .label-name .content-name,
.formm input:valid + .label-name .content-name {
  transform: translateY(-180%);
  background: #fff;
  z-index: 4;
  font-size: 12px;
  color: var(--main_theme_clr);
  outline: none;
  transition: 0.3s all ease-in-out;
}
.formbtn {
  border: 0;
  background: 0;
  display: block;
  margin: auto;
  margin-top: 20px;
}
</style>
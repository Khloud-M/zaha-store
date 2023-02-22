<template>
  <div class="contact">
    <landing-page />
      <div class="container">
    <section class="contact_form">
          <div class="col-lg-6 image">
            <img src="@/assets/image/contact.png" alt="" />
          </div>
          <div class="col-lg-5 content">
            <h3>CONTACT US</h3>
            <form @submit.prevent="submitForm">
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
                <label>Full Name</label>
              </div>
              <!-- full name-->
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
                  type="email"
                  name="email"
                  id="email"
                  v-model="useremail"
                />
                <span class="input-highlight"></span>
                <label for="email"> Email </label>
              </div>
              <!-- email-->
              <div class="floating-label text_area">
                <textarea v-model="text" class="floating-input"></textarea>
                <span class="input-highlight"></span>
                <label for="name"> How can We Help </label>
              </div>
              <!-- texteara-->
              <bace-button class="send"> Send Message</bace-button>
            </form>
        </div>
        <div class="map"></div>
      <!-- end container-->
    </section>
  </div> 
  </div> <!--contact -->
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userPhone: null,
      useremail: "",
      text: null,
    };
  },
  methods: {
    submitForm() {
      this.userName = "";
      this.userPhone = null;
      this.useremail = "";
      this.text = null;
    },
  },
};
</script>
<style lang="scss" scoped>
.contact{
  margin:var(--marginTopBottom) 0 ;
  .contact_form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
  .image img {
    width: 100%;
    height: 100%;
  }
  h3 {
    margin-bottom: 30px;
    font-style: italic;
    letter-spacing: 5px;
    color: var(--theme_text_clr);
    font-size: 28px;
    font-weight: 400;
  }

.send{
    width: 100%;
  }
/*  */
</style>
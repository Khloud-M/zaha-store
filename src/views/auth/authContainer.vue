<template>
  <section class="auth_page">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/image/logo.svg" width="200" height="100" />
      </router-link>
    </div>
    <!-- logo-->
    <div class="container">
      <div
        class="row d-flex"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
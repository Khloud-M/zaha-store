<template>
    <section class="slider"> 
        <Carousel 
        :autoplay="2000" 
        :wrap-around="true" 
        :items-to-show="1"
        :transition="1500">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <img :src="slide.img" alt="image" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
    </section>
</template>
<script >
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "BasicName",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: [
        { img: require("@/assets/image/banner1.jpg") },
        { img: require("@/assets/image/banner2.jpg") },
        { img: require("@/assets/image/banne3.jpg") },
      ],
    };
  },
};
</script>
<style scoped>
.slider{
    margin-bottom: var(--marginTopBottom) ;
}
.carousel__item {
  height: 80vh;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
}
.carousel__item img {
  max-width: 100%;
  height: 100%;
}
</style>
<template>
  <section class="product_details">
    <div class="container" v-if="selectedItem">
      <div class="row d-flex">
        <div class="col-lg-4 carsoul-img">
          <div class="slider-top">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
            >
              <Slide v-for="slide in selectedItem.collectImg" :key="slide">
                <div class="carousel__item">
                  <img :src="slide" alt="" class="img-fluid" />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="slider-bottom mt-3">
            <Carousel
              id="thumbnails"
              :items-to-show="4"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide
                v-for="(slide, index) in selectedItem.collectImg"
                :key="slide.id"
              >
                <div class="carousel__item" @click="slideTo(index + 1 - 1)">
                  <img
                    :src="slide"
                    alt=""
                    class="img-fluid"
                    width="60"
                    height="60"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <!-- casoul img-->
        <div class="col-lg-5 data d-flex mt-5">
          <div class="sale-avlible d-flex gap-2" v-if="selectedItem">
            <span> {{ selectedItem.sale }} </span>
            <span> {{ selectedItem.not }} </span>
          </div>
          <!--sale-avlible -->
          <span class="name"> {{ selectedItem.itemName }} </span>
          <span class="code">{{ selectedItem.code }} </span>
          <div class="price d-flex gap-2">
            <span> {{ selectedItem.soonMoney }} </span>
            <del> {{ selectedItem.oldPrice }} </del>
          </div>
          <!--sale-avlible -->
          <div class="size">
            <span class="name-size">Sizes:</span>
            <ul>
              <li v-for="sizes in selectedItem.size" :key="sizes.id">
                {{ sizes }}
              </li>
            </ul>
          </div>
          <!-- sizes-->
          <div class="discription">
            <span> discription:</span>
            <p>{{ selectedItem.description }}</p>
          </div>
          <div class="fooooter">
            <span>Quantity:</span>
            <div class="footer-data d-flex">
              <product-quantity  :selectedItem="selectedItem"/>
              <!--quanty-->
              <div class="add cart">
                <bace-button class="add-cartt" @click="addToCart">
                  Add To Cart
                </bace-button>
              </div>
            </div>
          </div>
        </div>
        <!-- data -->
        <!-- <carItem></carItem> -->
      </div>
    </div>
  </section>
</template>
  <script>
import { Carousel, Slide } from "vue3-carousel";
import { mapGetters } from "vuex";
import ProductQuantity from './ProductQuantity.vue';
//   import carItem from "../component/layout/carItem.vue";
export default {
  components: {
    Carousel,
    Slide,
    ProductQuantity
    //   carItem,
  },
  props: ["id"],
  data() {
    return {
      currentSlide: 0,
      selectedItem: [],

      qty: 1,
    };
  },
  computed: {
    ...mapGetters({
      // currentUser: "authModle/currentUser",
      itemProdcut: "Categery/prodcuts",
    }),
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    reduceItem() {
      if (this.qty <= 1) return;

      this.qty = this.qty - 1;
    },
    increaseItem() {
      this.qty = this.qty + 1;
    },

    addToCart() {
      if (this.$store.state.authModle.userToken) {
        this.$store.dispatch("chooseCategory/addToCart", {
          product: this.selectedItem,
          qty: this.qty,
        });
      } else {
        this.$router.push("/:auth/register");
      }
    },
  },
  mounted() {
    this.selectedItem = this.itemProdcut.find(
      (selectedItem) => selectedItem.id === this.id
    );
  },
};
</script>
  <style lang="scss" scoped>
  .product_details{
    margin: var(--marginTopBottom) 0;
  }
.row {
  justify-content: center;
  gap: 30px;
  img {
    object-fit: cover;
  }
  // start div of data
  .data {
    flex-direction: column;
    row-gap: 15px;
    color: var(--main_theme_clr);
    font-weight: 300;
    .sale-avlible span {
      background-color: #b40000;
      color: white;
      font-size: 20px;
      padding: 10px;
      border-radius: 5px;
    }
    .name {
      font-size: 25px;
      font-weight: 400;
    }
    .code,
    .size,
    .discription span {
      font-size: 22px;
      display: block;
      font-weight: 400;
    }
    .discription p {
      padding-left: 5px;
      font-size: 16px;
      color: var(--light_gray_clr);
    }
    .price {
      span {
        font-size: 22px;
        color: #b40000;
        font-weight: 400;

        del {
          color: var(--light_gray_clr);
          font-size: 22px;
          font-weight: 400;
        }
      }
    }
    .size {
      ul {
        display: flex;
        margin-left: 0;
        padding-left: 0;
        gap: 20px;
        margin-top: 10px;
      }
      ul li {
        border: 1px solid var(--border_clr);
        padding: 8px;
        cursor: pointer;
      }
    }
  }
  // end div of data
}
.fooooter {
  span {
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .footer-data {
    justify-content: space-between;
    align-items: center;
    .quanty {
      width: 200px;
      justify-content: space-between;
      font-size: 25px;
      border: 1px solid var(--border_clr);
      border-radius: 10px;
      padding: 10px;
      button {
        border: none;
        background-color: white;
        width: 30%;
      }
    }
    .add-cartt {
      padding: 10px 50px 10px 50px;
    }
  }
}
</style>
  
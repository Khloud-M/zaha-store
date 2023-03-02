<template>
<Section class="product_item">
    <v-container>
      <div class="row d-flex">
        <div
          class="col-lg-3 col-md-4 col-sm-12 k"
          v-for="item in products"
          :key="item.id"
        >
          <div class="cards">
            <router-link :to="`/products/${item.id}`">
              <div class="image">
                <img :src="item.img" alt="" />
                <span class="sale">{{ item.sale }} </span>
                <div class="colors d-flex">
                  <span
                    v-for="colors in item.color"
                    :key="colors"
                    :style="{ background: colors }"
                  >
                  </span>
                </div>
              </div>
              <!-- image-->
            </router-link>
            <!-- start content-cards -->
            <div class="content_cards">
              <p>{{ item.itemName }}</p>
              
              <div class="rates d-flex">
                <div>
                    <svg
                      v-for="rate in item.rate"
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                    <svg
                      v-for="rate in 5 - item.rate"
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                      />
                    </svg>
                </div>
              
              </div>
              <div class="price d-flex gap-3">
                <span>{{ item.soonMoney }} R.S </span>
                <del>{{ item.oldPrice }} R.S</del>
              </div>
              <!-- price-->
            </div>
          </div>
          <!-- end cards-->
        </div>
      </div>
    </v-container>
</Section>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            products :"Categery/prodcuts",
        })  
    }
    }
</script>
<style lang="scss" scoped>
.row {
  justify-content: space-evenly;
}
.cards {
  height: 510px;
  max-width: 300px;
  overflow: hidden;
  margin-bottom: 30px;
  margin-left: 10px;
  .image:hover img {
    transform: scale(1.04);
  }
  .image:hover .colors span {
    transform: scale(1.01);
    transition: all 0.3s linear;

  }
  .image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 5px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.5s linear;
      position: absolute;
      z-index: 2;
      object-fit: cover;
      object-position: top;
    }
    .sale {
      position: absolute;
      z-index: 33;
      right: 0;
      background-color: #b40000;
      height: 40px;
      color: white;
      line-height: 40px;
      width: 120px;
      text-align: center;
      border-radius: 20px 0 0 20px;
    }
   
    .colors {
      flex-direction: column;
      gap: 10px;
      position: absolute;
      z-index: 99999999;
      left: 10px;
      top: 10px;
      span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: scale(0);
      transition: all 0.3s linear;
      }
    }
  }
  // content-cards
  .content_cards {
    height: 100px;
    padding:10px;
    width: 100%;
    font-weight: 300;
    color: var(--light_gray_clr);
    margin-left: 5px;
    img , svg{
       margin:10px  5px 10px 0  ;
    }
    p {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight:500;
      
    }
    span {
      color: var(--theme_text_clr);
      font-size: 18px;
      font-weight:400;
        }
    del {
      font-size: 15px;
    }
  }
}

</style>
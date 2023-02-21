<template>
    <section class="chooseCategery">
        <h3>CATEGORIES</h3>
    <v-container>
      <ul v-if="hascategery" class="row d-flex">
        <li class="col-lg-3" v-for="choose in Categery" :key="choose.id">
          <div class="cards">
            <div class="image">
              <img class="img-fluid" :src="choose.img" alt="" />
            </div>
            <div class="title-card">
              <p>{{ choose.itemName }}</p>
            </div>
          </div>
        </li>
      </ul>
      <h3 v-else>No categery found.</h3>
    </v-container>    
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            Categery :"Categery/chooseCategey",
            hascategery:"Categery/hascategery"
        })  
    }
}
</script>
<style lang="scss" scoped>
.chooseCategery{
    margin:var(--marginTopBottom) 0 ;
}
.cards {
  overflow: hidden;
  height: 450px;
  position: relative;
  margin-bottom: 30px;
  border-radius: 4px;
  .image {
    width: 100%;
    transition: all 0.5s linear;
    overflow: hidden;
    position: absolute;
    z-index: 8;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
}
    }
  }
  .title-card {
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    background-color: var(--main_theme_clr);
    z-index: 9;
  }
  .title-card p {
    color: white;
    text-align: center;
    text-transform: uppercase;
    line-height: 80px;
    font-size: 20px;
    font-weight: 300;
  }

.cards:hover .image {
  transform: scale(1.04);
}
li:last-child {
  margin: auto;
  .image {
    height: 420px;
  }
}
</style>
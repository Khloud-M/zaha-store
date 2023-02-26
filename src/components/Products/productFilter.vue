<template>
  <section class="fiter">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            PRODCUT TYPE
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="prodcut_list px-0">
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="sale"
                    name="prodcutType"
                    class="form-check-input"
                  />
                  <label for="sale">Sale Upto 60%</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Jellabiya"
                    name="prodcutType"
                    class="form-check-input"
                  />
                  <label for="Jellabiya">Jellabiya</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Faracha"
                    class="form-check-input"
                    name="prodcutType"
                  />
                  <label for="Faracha">Faracha</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Cloche"
                    class="form-check-input"
                    name="prodcutType"
                  />
                  <label for="Cloche">Cloche</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Abaya"
                    name="prodcutType"
                    class="form-check-input"
                  />
                  <label for="Abaya">Abaya</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- pouduct -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            SIZE
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="size px-0">
              <li
                :class="{ changeBoder: active }"
                @click="change"
                v-for="size in SizeFilter"
                :key="size.id"
              >
                {{ size }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- size -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            PRICE
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body"></div>
        </div>
      </div>
      <!-- price -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            colours
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="colors px-0">
              <!-- <li :class="{changeBoder:active}" @click="change"> <span> </span> </li> -->
              <li v-for="color in colours" :key="color">
                <!-- <span :style="{background : color}> </span> -->
                <span v-bind:style="{ background: color }"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            PRAND
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="filter_prodcut">
              <input type="checkbox" id="Sony" class="form-check-input" />
              <label for="Sony">Sony</label>
            </div>
          </div>
        </div>
      </div>
      <!-- prand -->
     
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
          RATE

          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
           
          </div>
        </div>
      </div>
            <!-- rate -->

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
          OTHER OPTION

          </button>
        </h2>
        <div
          id="collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
              <ul class="prodcut_list px-0">
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Low"
                    name="prodcutOption"
                    class="form-check-input"
                  />
                  <label for="Low"> Height To Low Price</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="Height"
                    name="prodcutOption"
                    class="form-check-input"
                  />
                  <label for="Height">Low To Height Price</label>
                </div>
              </li>
              <li>
                <div class="filter_prodcut">
                  <input
                    type="radio"
                    id="popular"
                    class="form-check-input"
                    name="prodcutOption"
                  />
                  <label for="popular">popular</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-button d-flex">
      <router-link to="/">
        <bace-button class="apply"> Apply</bace-button>
      </router-link>
      <router-link to="/">
        <bace-button class="reset"> Reset</bace-button>
      </router-link>
    </div>
  </section>
</template>
  <script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapGetters({
      SizeFilter: "Categery/SizeFilter",
      colours: "Categery/colours",
    }),
  },

  methods: {
    change() {
      this.active = !this.active;
    },
  },
};
</script>
  <style  scoped>
.accordion-button {
  font-weight: 300;
  font-size: 16px;
  color: var(--main_theme_clr);
}
.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: white;
  box-shadow: none;
}
.accordion-button:focus {
  z-index: 3;
  border-color: black;
  outline: 0;
  box-shadow: none;
}
.accordion-button[data-v-04d7710d]:not(.collapsed) {
  color: var(--main_theme_clr);
}
.filter_prodcut {
  display: flex;
  gap: 15px;
}
.form-check-input:checked {
  background-color: var(--main_theme_clr);
  border-color: var(--main_theme_clr);
}
.form-check-input:focus {
  box-shadow: 0 0 0 0.2rem hsl(306, 100%, 16%, 0.3);
}
label {
  font-size: 16px;
  color: #001514;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 300;
}

.colors,
.size {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.colors li,
.size li {
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: 300;

  /* border-radius: 50%; */
  border: 1px solid var(--border_clr);
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.2s ease;
  color: var(--main_theme_clr);
}
.colors li span {
  width: 30px;
  height: 30px;
  /* background-color: brown; */
  align-self: center;
  cursor: pointer;
}
.colors .changeBoder,
.size .changeBoder {
  border: 1.5px solid black;
}
.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid
    var(--bs-accordion-border-color);
  margin-bottom: 25px;
}
.footer-button {
  flex-direction: column;
  gap: 10px;
}
.apply,
.reset {
  width: 100%;
}
</style>
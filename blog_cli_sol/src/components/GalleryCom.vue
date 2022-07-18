<template>
  <div id="content">
    <section id="main-section">
      <article>
        <div class="article-body">
          <div id="container">
            <br />
            <h1 id="heading">뿌꾸의 모든 순간</h1>
            <div id="prod-pic">
              <img
                src="@/assets/images/bbuggu_sea_regend.jpg"
                alt="뿌꾸의 모든 순간"
                id="cup"
                width="500"
                height="580"
                requried
              />
              <div id="small-pic">
                <img
                  src="@/assets/images/bbuggu_sea_regend.jpg"
                  class="small"
                />
                <img src="@/assets/images/bbuggu_far12.jpg" class="small" />
                <img src="@/assets/images/bbuggu_cookie3.jpg" class="small" />
                <img src="@/assets/images/bbuggu_far.jpg" class="small" />
                <img src="@/assets/images/bbuggu_far3.jpg" class="small" />
                <img src="@/assets/images/bbuggu_sea4.jpg" class="small" />
                <img src="@/assets/images/bbuggu_grass6.jpg" class="small" />
                <img src="@/assets/images/bbuggu_far5.jpg" class="small" />
                <img src="@/assets/images/bbuggu_grass8.jpg" class="small" />
                <img src="@/assets/images/bbuggu_smile12.jpg" class="small" />
                <img src="@/assets/images/bbuggu_smile13.jpg" class="small" />
                <img src="@/assets/images/bed_bbuggu2.jpg" class="small" />
                <img src="@/assets/images/bbuggu_in_car.jpg" class="small" />
                <img src="@/assets/images/bbuggu_in_car4.jpg" class="small" />
                <img src="@/assets/images/bbuggu_iwant.jpg" class="small" />
                <img src="@/assets/images/bbuggu_sea19.jpg" class="small" />
                <img src="@/assets/images/home_bbuggu5.jpg" class="small" />
                <img src="@/assets/images/sit_bbuggu.jpg" class="small" />
                <img src="@/assets/images/sun_bbuggu.jpg" class="small" />
                <img src="@/assets/images/sun_bbuggu2.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu10.jpg" class="small" />
                <img
                  src="@/assets/images/baby_bbuggu_ggumi2.jpg"
                  class="small"
                />
                <img src="@/assets/images/baby_bbuggu4.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu6.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu7.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu12.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu9.jpg" class="small" />
                <img src="@/assets/images/bed_bbuggu.jpg" class="small" />
                <img src="@/assets/images/baby_bbuggu13.jpg" class="small" />
                <img src="@/assets/images/back_bbuggu.jpg" class="small" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { picture, changePic, showDetail, hideDetail } from "../util/product.js";

export default {
  methods: {
    picture() {
      picture();
    },
    changePic() {
      changePic();
    },
    showDetail() {
      showDetail();
    },
    hideDetail() {
      hideDetail();
    },
  },
    
};
</script>

<style scoped>
@import "../assets/css/bbugguproduct2.css";
</style>

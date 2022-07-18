<template>
  <div id="app">

    <HeaderCom></HeaderCom>

    <NavCom></NavCom>

    <router-view/>

    <FooterCom></FooterCom>

  </div>
</template>

<script>
import HeaderCom from "@/components/common/HeaderCom.vue";
import NavCom from "@/components/common/NavCom.vue";
import FooterCom from "@/components/common/FooterCom.vue";

export default {
  components: {
    HeaderCom,
    NavCom,
    FooterCom
  }

}
</script>


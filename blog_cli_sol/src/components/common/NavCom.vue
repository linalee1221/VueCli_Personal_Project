<template>
  <nav id="main-navigation">
    <div class="pull-left">
      <ul class="outer-menu">
        <li
          class="outer-menu-item"
          v-on:mouseover="isShow = true"
          v-on:mouseleave="isShow = false"
        >
          <span class="menu-title">
            <router-link to="/">HOME</router-link>
          </span>
          <ul class="inner-menu" v-if="isShow">
            <li class="inner-menu-item">
              <router-link to="/*">Intro</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="*">About Us</router-link>
            </li>
          </ul>
        </li>

        <li
          class="outer-menu-item"
          v-on:mouseover="isShow02 = true"
          v-on:mouseleave="isShow02 = false"
        >
          <span class="menu-title">
            <router-link to="/">SHOP</router-link>
          </span>
          <ul class="inner-menu" v-if="isShow02">
            <li class="inner-menu-item">
              <router-link to="/shopping">Shopping</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="*">Contact Us</router-link>
            </li>
          </ul>
        </li>

        <li class="outer-menu-item">
          <span class="menu-title">
            <router-link to="gallery">GALLERY</router-link>
          </span>
        </li>
        <li class="outer-menu-item">
          <span class="menu-title">
            <router-link to="/register">SIGN UP</router-link>
          </span>
        </li>
      </ul>
    </div>
    <div class="pull-right">
      <div class="search-bar">
        <form>
          <input type="text" class="input-search" />
          <input type="submit" class="input-search-submit" value="검색" />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isShow02: false,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/navigation.css";
</style>

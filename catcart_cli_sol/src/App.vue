<template>
  <div id="app">
    <!-- 애니메이션 설정 추가 -->
    <!-- out-in : 끝부분이 transition 애니메이션 -->
    <!-- in-out : 첫부분이 transition 애니메이션 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

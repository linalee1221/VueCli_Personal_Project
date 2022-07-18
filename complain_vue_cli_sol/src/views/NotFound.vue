<template>
  <div id="content">
      <h3>{{ title }}</h3>
      <br>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: "잘못된 접근입니다. Not Found Page."
        }
    },
}
</script>

<style>
#content {
    margin-top: 200px;
}
</style>
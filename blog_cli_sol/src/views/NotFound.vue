<template>
  <div id="notfound">
      <h2> {{ title }} </h2>
      <h3> {{ title2 }} </h3>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: "404 Not Found",
            title2: "요청하신 페이지를 찾을 수 없습니다."
        }
    }
}
</script>

<style>
#notfound{
    margin-top: 210px;
    margin-bottom: 100px;
    text-align: center;
}
</style>
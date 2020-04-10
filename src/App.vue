<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    /*min-height: 100%;*/
    background-image: url("/static/img/timg2.jpg");
  }

  #app{
    margin: 0 auto;
    width: 1179px;
    height: 100%;
    /*padding: 0 25px;*/
    /*border: 1px solid #000;*/
    background: rgba(255,255,255,0.85);
  }
</style>

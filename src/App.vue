<template>
  <div id="app">
    <HelloWorld app-name="CC - 常用内容盒子" icon-image = "http://img.leozhou.me/picGo/icon-white@3x.png"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'PingHei', 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'STHeitiSC-Light', 'Arial', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #505A78;
  margin-top: 60px;
  margin-bottom: 80px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga","kern";
}

body {
  margin: 8px 0px;
}
</style>

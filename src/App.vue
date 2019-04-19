<template>
  <div id="app">
    <a href="#" class="lang-change" @click="changeLocale">中文/EN</a> 
    <HelloWorld icon-image = "http://img.leozhou.me/picGo/icon-white@3x.png"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { switchLang }  from '@/locales'

export default {
  name: 'app',
  data: function() {
    return {};
  },
  components: {
    HelloWorld
  },
  methods: {
    changeLocale () {
      switchLang()
    },
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

a {
  color: #42b983;
}

.lang-change {
  float: right;
  margin-right: 32px;
}
</style>

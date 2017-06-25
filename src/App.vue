<template>
  <div id="app">
    <!--首页顶部容器-->
    <div class="top">
      <top-nav></top-nav>
    </div>
    <div class="main">
      <sidebar-menu></sidebar-menu>
    </div>
    <div class="bottom">
      <bottom-tab></bottom-tab>
    </div>
  </div>
</template>

<script>
import topNav from './components/topnav/topnav'
import sidebarMenu from './components/sidebarmenu/sidebarmenu'
import dialog from './components/dialog/dialog'
import bottomTab from './components/bottomtab/bottomtab'
import message from './components/message/message'
export default {
  name: 'app',
  components: {
    topNav,
    sidebarMenu,
    bottomTab,
    message,
    dialog
  }
}
</script>

<style>
#app {
  width:100%;
  min-height:100vh;
  position:relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6vh;
}
</style>

<template>
  <mu-drawer :open="sidebarmenu.open" :docked="sidebarmenu.docked" @close="showSidebar()">
    <div class="sidebar-top">
      <div class="sidebar-top-main">
        <mu-avatar slot="left" src="/static/images/avatar.jpg" :size="150"/>
        <h2>{{user.nickname}}</h2>
        <p>{{user.maxim}}</p>
      </div>
    </div>
    <mu-list @itemClick="sidebarmenu.docked ? '' : showSidebar()">
      <mu-list-item title="了解会员特权"/>
      <mu-list-item title="QQ钱包"/>
      <mu-list-item title="个性装扮"/>
      <mu-list-item title="我的收藏"/>
      <mu-list-item title="我的相册"/>
      <mu-list-item title="我的文件"/>
      <mu-list-item v-if="sidebarmenu.docked" @click.native="sidebarmenu.open = false" title="Close"/>
    </mu-list>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sidebarMenu',
  computed: mapState({
    sidebarmenu: 'sidebarmenu',
    user: state => state.data.self
  }),
  methods: {
    ...mapMutations(['showSidebar'])
  }
}
</script>

<style scoped>
  .mu-drawer{
    width:65vw;
  }
  .sidebar-top{
   display: table;
   width:100%;
   height:30vh;
   vertical-align: middle;
   background-image: url('/static/images/bg.jpg');
 }
  .sidebar-top-main{
   display: table-cell;
   width:30vw;
   height:30vh;
   vertical-align: middle;
   margin:0 auto;
 }
 .sidebar-top-main h2{
   margin-top:3vh;
   font-size:3.5rem;
   font-weight:bold;
 }
 .sidebar-top-main p{
   margin:0 auto;
   height: 5vh;
   width:30vw;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   font-size:2.5rem;
 }
 .mu-list{
   padding-top: 5vh;
 }
 .mu-list>div{
   margin-top:1vh;
 }
</style>

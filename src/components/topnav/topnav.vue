<template>
<mu-appbar>
  <mu-avatar slot="left" :src="avatar" @click="showsidebar_local(true)" :size="60"/>
  <div class="page-info" slot="default">
    <span>{{page_info}}</span>
  </div>
  <mu-icon-menu
      icon="add"
      slot="right"
      iconClass="icon-class"
  >
      <mu-menu-item title="创建群聊" />
      <mu-menu-item title="加好友/群" />
      <mu-menu-item title="扫一扫" />
      <mu-menu-item title="面对面快传" />
      <mu-menu-item title="付款" />
      <mu-menu-item title="拍摄" />
    </mu-icon-menu>
</mu-appbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'topNav',
  data () {
    //临时数据
    return {
      page_info: '首页'
    }
  },
  computed: mapState({
    avatar: state => state.data.self.avatar,
    page_info: 'page_info'
  }),
  methods: {
    ...mapMutations(['showSidebar']),
    showsidebar_local (flag) {
      this.showSidebar({flag})
    }
  }
}
</script>


<style scoped>
  .mu-appbar{
      position:absolute;
      top:0;
      width:100vw;
      height: 6vh;
  }
  .mu-appbar .left{
      margin-left:1%;
  }
  .icon-class{
    font-size: 30px;
  }
</style>

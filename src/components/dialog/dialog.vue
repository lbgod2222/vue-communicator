<template>
  <!--高优先率页面，所有对话简掠-->
  <!--这是抬头-->
  <div class="dialog">
    <mu-appbar>
      <mu-icon-button icon="arrow_back" slot="left" @click="showDialog_local" />
      <div class="page-info" slot="default">
        <span>{{page_info}}</span>
      </div>
      <!--通话方式-->
      <div class="dialog-opt" slot="right">
        <mu-icon-button icon="call" />
        <mu-icon-button icon="person" @click="showPersonindex_local" />
      </div>
    </mu-appbar>
    <!--这是对话条目-->
    <div class="dialog-main">
      <div class="pad-1"></div>
      <dialog-detail :userData="userData"></dialog-detail>
      <div class="pad-2"></div>
    </div>
    <div class="anchor" ref="anchor_hidden"></div>
    <!--这是底部栏-->
    <div class="footer" ref="typearea">
      <div class="upper">
        <mu-text-field hintText="Type something" v-model="value" @focus="focus" @blur="blur" @keyup.enter.native="emitmessage" />
        <mu-icon-button icon="send" @click="emitmessage" />
      </div>
      <div class="functiontab">
        <mu-icon-button icon="mic_none" />
        <mu-icon-button icon="photo_size_select_actual" />
        <mu-icon-button icon="tag_faces" />
        <mu-icon-button icon="switch_video" />
        <mu-icon-button icon="cloud_queue" />
        <mu-icon-button icon="photo_camera" />
        <mu-icon-button icon="folder_open" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import dialogDetail from './dialogdetail'

export default {
  name: "dialog",
  components: {
    dialogDetail
  },
  data() {
    return {
      value: '',
      timer: {}
    }
  },
  computed: {
    ...mapState({
      user: state => state.data.self,
      headerTitle: 'headerTitle'
    }),
    userData() {
      return {
        self: this.user,
        friend: this.$store.getters.friendgetters.friend
      }
    }
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveID', 'showPersonPage']),
    showDialog_local() {
      this.showDialog()
      this.getActiveID({ activeID: 0 })
      this.$router.push(this.headerTitle)
    },
    showPersonPage_local() {
      this.showDialog()
      this.showPersonPage()
      this.$router.push(this.headerTitle)
    },
    emitmessage() {
      if (this.value.length) {
        this.$store.dispatch('emitmessage', {
          _id: this.userData.friend._id,
          message: this.value,
          that: this
        })
      }
      this.value = ''
    },
    focus() {
      this.$refs.typearea.scrollIntoView(false)
    },
    //每次触发一次滚动最底
    scrolling() {
      this.$refs.anchor_hidden.scrollIntoViewView()
    }
  }
}
</script>

<style scoped>
  .dialog{
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .pad-1{
    height: 60px;
  }
  .pad-2{
    height: 60px;
  }
  .mu-appbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6vh;
  }
  .upper{
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }
  .upper > .mu-icon-button{
    display:inline-block;
    margin-left: 18px;
  }
</style>

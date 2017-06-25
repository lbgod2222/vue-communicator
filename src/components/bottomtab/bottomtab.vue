<template>
  <mu-bottom-nav class="bottom-tab" :value="bottomTab" @change="handleChange">
    <mu-bottom-nav-item iconClass="bottomnav-icon" titleClass="bottomnav-title"  value="message" title="消息" icon="chat_bubble_outline"/>
    <mu-bottom-nav-item iconClass="bottomnav-icon" titleClass="bottomnav-title"  value="friends" title="通讯录" icon="people"/>
    <mu-bottom-nav-item iconClass="bottomnav-icon" titleClass="bottomnav-title"  value="discover" title="发现" icon="explore"/>
  </mu-bottom-nav>
</template>

<script>
export default {
  name: 'bottomTab',
  data () {
    return {
      bottomTab: 'message'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomTab = val
    }
  }
}
</script>

<style scoped>
  .bottom-tab{
    position: absolute;
    width:100%;
    height:100%;
  }
  .bottom-tab .bottomnav-icon{
    font-size:30px;
  }
  .bottomnav-title{

  }
</style>

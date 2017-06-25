<template>
  <mu-list>
    <div v-for="(item, index) of message":class="[{swipeleft: this.$refs.child[index].getAttribute(isSwipe)}, 'wrap']" @click="getActiveID_local(item._id)" ref="child" :key="index" isSwipe="false">
      <mu-list-item :title="item.friend.name" :describeLine="1" :disableRipple="true" class="lists">
        <mu-avatar :src="item.friend.avatar" slot="leftAvatar" />
        <span class="describe" slot="describe">{{item.list[item.list.length-1].message}}</span>
        <div class="list-right" slot="right">
          <span class="time">{{item.lsit[item.lsit.length-1].time}}</span>
          <mu-badge :content="`${{item.lsit.length-1}}`" />
        </div>
      </mu-list-item>
      <div class="remove" @click.stop="removemessage(index)">删除</div>
    </div>        
  </mu-list>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'message',
  data() {
    return message
  },
  computed: {
    ...mapState({
      message: (state) => {
        let list = state.messageList
        list.forEach(x => {
          // 由_id筛选出对应的好友
          let friend = state.data.friends.filter(i => i._id === x._id)[0]
          x.friend = friend
        })
        return list  
      }
    })
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveID']),
    removemessage: (index) => {
      this.message.splice(index,1)
    },
    getActiveID_local(id) {
      this.getActiveID({ activeID: id })
      this.showDialog()
    }
  },
  created() {
    //判断是否有信息
    if (this.$refs.child) {
      this.$refs.child.forEach((element, index) => {
        let x, y, X, Y, swipeX, swipeY
          // 监听touchstart
          element.addEventListener('touchstart', e => {
            x = e.changedTouches[0].pageX
            y = e.changedTouches[0].pageY
            swipeX = true
            swipeY = true
          })
          element.addEventListener('touchmove', e => {
            X = event.changedTouches[0].pageX
            Y = event.changedTouches[0].pageY
            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
              // 阻止默认事件
              e.stopPropagation()
              // 右滑
              if (X - x > 10) {
                e.preventDefault()
                e.setAttribute('isSwipe','false')
              }
              if (x - X > 10) {
                e.preventDefault()
                e.setAttribute('isSwipe','true')
              }
              swipeY = false
            }
            if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
              swipeX = false
            }
          })
      })
    }
  }
}
</script>

<style scoped>
  .mu-list{
    overflow: hidden;
  }
  .mu-list .swiperleft{
    transform: translateX(-20%);
  }
  .mu-list .wrap{
    width: 125%;
    overflow: hidden;
    transition: all .3s linear;
  }
  .wrap .lists{
    float: left;
    width: 80%;
    height: 10vh;
    transition: all .3s linear;
  }
  .wrap .remove{
    float:right;
    display: block;
    height: 10vh;
    line-height: 10vh;
    width: 20%;
    text-align: center;
    font-size: 1.2em;
  }
  .list-right{
    position: relative;
  }
  .list-right .time{
    display: inline-block;
    position: absolute;
    top: -10px;
    left: -10px;
  }
  .mu-badge{
    display: inline-block;
    position: absolute;
    top: 0;
    left: -10px;
    border-radius: 5px;
  }
</style>

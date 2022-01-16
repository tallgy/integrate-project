<template>
  <tab-bar :tab-bar-list="tabBarList"></tab-bar>
</template>

<script>
import tabBar from '@/components/common/tab-bar/tab-bar'

export default {
  name: "main-tab-bar",
  components: {
    tabBar
  },
  data() {
    return {
      tabBarList: [
        {
          name: '主页',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png',
        },
        {
          name: '功能',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png', 
        },
        {
          name: '我的',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
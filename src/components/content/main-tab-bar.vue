<template>
  <tab-bar class="main" :tab-bar-list="tabBarList"></tab-bar>
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
          id: 'home',
          name: '主页',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png',
        },
        {
          id: 'function',
          name: '功能',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png', 
        },
        {
          id: 'profile',
          name: '我的',
          selectImg: '../../static/img/tab-bar/tab-bar-select.png',
          unselectImg: '../../static/img/tab-bar/tab-bar-unselect.png',
        }
      ],
    }
  }
}
</script>

<style scoped lang="scss">

.main {
}

</style>

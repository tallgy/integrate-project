<template>
  <tab-bar :tab-bar-list="tabBarList" :img-info="tabBarImgInfo"></tab-bar>
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
          imgName: 'tab-bar',
        },
        {
          name: '功能',
          imgName: 'tab-bar',
        },
        {
          name: '我的',
          imgName: 'tab-bar',
        }
      ],
      tabBarImgInfo: {
        path: '/static/img/tab-bar',
        active: 'select',
        notActive: 'unselect',
      },
    }
  }
}
</script>

<style scoped>

</style>
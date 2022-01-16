<template>
  <view class="item">
    <view class="item-img">
      <img :src="tabBarItem.unselectImg">
    </view>
    <p>{{ tabBarItem.name }}</p>
  </view>
</template>

<script>
export default {
  name: "tab-bar-item",
  props: {
    tabBarItem: {
      type: Object
    }
  }
}
</script>

<style scoped>
.item {
  height: inherit;
  width: inherit;

  font-size: 10px;
}

.item-img {
  width: inherit;
  height: inherit;
}

.item-img img {
  width: inherit;
}
</style>
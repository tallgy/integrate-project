<template>
  <view class="item">
    <view class="item-img">
      <image :src="tabBarItem.unselectImg" />
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
  },
  created() {
  }
}
</script>

<style scoped>
.item {
  height: inherit;
  width: inherit;

  font-size: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-img {
  width: inherit;
  height: inherit;
}

.item-img image {
  width: inherit;
  height: inherit;
}
</style>
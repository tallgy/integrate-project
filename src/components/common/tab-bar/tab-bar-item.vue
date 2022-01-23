<template>
  <view class="item" @click="selectTabBar">
    <view class="item-img">
      <image :src="tabBarImg" />
    </view>
    <p class="item-text" :class="[{'text-select': isSelected}]">{{ tabBarItem.name }}</p>
  </view>
</template>

<script>
export default {
  name: "tab-bar-item",
  props: {
    tabBarItem: {
      type: Object
    },
    selected: {
      type: String,
    }
  },
  data() {
    return {
      // tabBarImg: this.tabBarItem.unselectImg
    }
  },
  created() {
  },
  methods: {
    selectTabBar() {
      this.$emit('click', this.tabBarItem.id)
    }
  },
  computed: {
    isSelected() {
      return this.selected === this.tabBarItem.id
    },
    tabBarImg() {
      return this.isSelected ? this.tabBarItem.selectImg : this.tabBarItem.unselectImg
    }
  },
  watch: {
    // selected(oldValue, newValue) {
    //   if (oldValue !== newValue) {
    //     this.tabBarImg =
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
$font-size-sm: 15px;
$icon-width-sm: 30px;
$icon-height-sm: 30px;
$padding-sm: 5px;

.item {
  padding: $padding-sm;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: $uni-text-color-grey;

  font-size: $font-size-sm;
	
	.item-img {
    width: $icon-width-sm;
    height: $icon-height-sm;

		image {
		  width: inherit;
		  height: inherit;
		}
	}
	
	.item-text {
	  padding-top: $padding-sm;
	}

  .text-unselect {
    color: $uni-text-color-grey;
  }
  .text-select {
    color: $uni-color-primary;
  }
}
</style>
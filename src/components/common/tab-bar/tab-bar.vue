<template>
	<view class="tab-bar">
		<tab-bar-item @click="selectTabBar" :selected="tabBarSelected" class="tab-bar-item" v-for="item in tabBarList" :key="item.id" :tab-bar-item="item"></tab-bar-item>
	</view>
</template>

<script>
	import tabBarItem from './tab-bar-item'
	import {
		pathJoin
	} from '@/utils/exportUtils'

	export default {
		name: "tab-bar",
		props: {
			tabBarList: {
				type: Array,
				default: []
			},
			// 如果写了图片的路径，就可以使用这个来代替 原图片，因为这个是一个数组，所以减少重复。
			imgInfo: {
				type: Object,
				default: null
			}
		},
		data() {
			return {
				normalImgType: 'png',
        // 默认的选择，第一个
        tabBarSelected: this.tabBarList[0] && this.tabBarList[0].id,
			}
		},
		created() {
			this.imgInit()
		},
		components: {
			tabBarItem
		},
		methods: {
			// 图片路径初始化, 路径拼接有问题，拼好之后已经不能用了
			imgInit() {
				// 存在则初始化
				if (this.imgInfo) {
					this.tabBarList.forEach((value) => {
						// 存在图片的名字，那么就会自动拼接图片
						if (value.imgName) {
							value.selectImg = pathJoin(this.imgInfo.path, value.imgName + '-' + this.imgInfo
								.active + '.' + (value.imgType ||
									this.normalImgType))
							value.unselectImg = pathJoin(this.imgInfo.path, value.imgName + '-' + this.imgInfo
								.notActive + '.' + (value.imgType ||
									this.normalImgType))
						}
					})
				}
			},
      // 点击 tab-bar 调用方法，emit事件，然后调用选择方法，将其他的设置为
      selectTabBar(id) {
        this.tabBarSelected = id
      }
		}
	}
</script>

<style scoped lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;

		display: flex;
		overflow-x: scroll;
		width: 100vw;
		justify-content: center;

		background-color: inherit;
		
		.tab-bar-item {
			flex-grow: 1;
			flex-shrink: 1;
		}
	}
</style>

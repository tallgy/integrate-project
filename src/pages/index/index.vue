<template>
	<view class="content">
    <mainTabBar></mainTabBar>
	</view>
</template>

<script>
import mainTabBar from '@/components/content/main-tab-bar'

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
    components: {
      mainTabBar
    }
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200px;
		width: 200px;
		margin: 200px auto 50px auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36px;
		color: #8f8f94;
	}
</style>

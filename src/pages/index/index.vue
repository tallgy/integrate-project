<template>
	<view class="content">
    asdfasdf
    <router-link to="/home">home</router-link>
    <router-link to="/setting">setting</router-link>
    <router-view style="width: 100%; height: 20px;"></router-view>
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

<style scoped lang="scss">
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

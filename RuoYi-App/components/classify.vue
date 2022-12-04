<template>
	<view>
		<view class="classify_characteristic">
			<view class="ul">
				<!-- 渲染顶部切换下面的图片 -->
				<view class="li" v-if="index < 9" v-for="(item,index) in threeLevelcategoryList" :key="index">
					<image :src="item.categoryImg" alt="" />
					<text>{{item.categoryName}}</text>
				</view>
				<view class="li">
					<image src="https://static.biyao.com/mnew/img/master/index/classify_more@2x_0ed30f2.png" alt=""/>
					<text>查看更多</text>
				</view>
			</view>
		</view>
		<view class="blockline"></view>
		<view class="home_operational">
			<view class="ull">
				<view>热门</view>
				<view>销量</view>
				<view>上新</view>
				<view>价格</view>
				<view>筛选</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["threeLevelcategoryList"]
	}
</script>

<style scoped>
	@import url("../static/css/index.css");

	.classify_characteristic {
		background: #fff;
		padding-top: 0.32rem;
		margin-bottom: 0.2rem;
	}

	.classify_characteristic .ul {
		width: 7.3rem;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.classify_characteristic .ul .li {
		width: 20%;
		margin-bottom: 0.25rem;
		text-align: center;
	}

	.classify_characteristic .ul .li image {
		width: 0.88rem;
		height: 0.88rem;
		border-radius: 0.44rem;
	}

	.classify_characteristic .ul .li text {
		font-size: 0.22rem;
		color: #4a4a4a;
		line-height: 0.46rem;
		width: 1.3rem;
		text-align: center;
		display: block;
	}
</style>

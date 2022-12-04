<template>
	<view>
		<!-- 首页轮番图 -->
		<swiper 
		    class="swiper" 
		    indicator-dots="indicatorDots"
		    circular="circular"
		    indicator-active-color="red"
		    autoplay="true"
		    interval = "2000"
		    easing-function="easeInOutCubic"
		    >
		    <swiper-item v-for="(item,index) in banner" :key="index">
		        <image :src="item.image"></image>
		    </swiper-item>
		</swiper>
		<!-- 轮番底部 -->
		<view class="home_characteristic">
			<view class="ul">
				<view>大牌品质</view>
				<view>/</view>
				<view>工厂价格</view>
				<view>/</view>
				<view>分期支付</view>
				<view>/</view>
				<view>顺丰包邮</view>
				<view>/</view>
				<view>无忧退款</view>
			</view>
		</view>
		<!-- 渲染品质男装一列 -->
		<view class="home_operational">
			<view class="ull">
				<view v-for="(item,index) in pznz" :key="index">
					 <image class="ullimg" :src="item.icon" alt="" />
					 <text>{{item.title}}</text>
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["banner","pznz"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	@import url("../static/css/index.css");
</style>
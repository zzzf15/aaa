<template>
	<page-meta :root-font-size="fontsize+'vw'" style="display: block;">
		<view id="wrapper">
			<view class="bigbox">
				<view class="heard_fixed">
					<view class="heard">
						<!-- 搜索框 -->
						<view class="heard_search" @click="searchClick">
							<view class="search_input">
								<uni-icons type="search" size="18" color="#bbb"></uni-icons>
								<text>请输入您想要的商品</text>
							</view>
						</view>
						<!-- 渲染顶部列表 -->
						<view class="heard_list">
							<scroll-view class="list" scroll-x="true">
								<view :class="num == index ? 'active' : ''" v-for="(item,index) in header_List" @click="headerListClick(item,index)">{{item.categoryName}}</view>
							</scroll-view>
						</view>
					</view>
				</view>
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
				<view class="blockline"></view>
				<!-- 渲染首页内容列表 -->
				<view class="product_list" id="product_list">
					<view class="module_list" v-for="(item,index) in floorList" :key="index">
						<view class="a">
							<image :src="item.image" alt=""/>
						<view class="shop_show">
							<view class="price">
								<text>￥</text>
								<text>{{item.priceStr}}</text>
							</view>
							<view class="labels">
								<text>爆品</text>
								<text>一起拼</text>
							</view>
							<view class="escp module_subtitle">{{item.subtitle}}</view>
							<view class="escp module_title">{{item.mainTitle}}</view>
							<view class="last_line">{{item.thirdContent}}</view>
						</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</page-meta>
</template>

<script>
	import {getIndexBanner,getIndexBottom} from '@/api/index'
	export default {
		data(){
			return{
				fontsize:13.333333,
				header_List:[],
				num:0,
				banner:[],
				pznz:[],
				floorList:[],
				pageIndex:1
			}
		},
		methods: {
			// 首页搜索框点击
			searchClick(){
				this.$tab.navigateTo('/search/search');
			},
			headerListClick(item,index){
				this.num = index;
			},
			async indexRender() {
				let res = await getIndexBanner();
				console.log(res);
				const {typeonearr,banner,pznz,floorList} = res;
				this.header_List = typeonearr;
				this.banner = banner;
				this.pznz = pznz;
				this.floorList = floorList;
				this.header_List.unshift({categoryName:"热门"});
			}
		},
		created() {
			this.indexRender();
		},
		onReachBottom() {
			this.pageIndex++;
			getIndexBottom(this.pageIndex).then(res=>{
				if(res){
					res.forEach(item=>{
						this.floorList.push(item)
					})
					console.log(this.floorList)
				}else{
					this.$modal.msg("到底了~");
				}
			})
		}
	}
</script>

<style scoped>
	@import url("../static/css/index.css");
</style>

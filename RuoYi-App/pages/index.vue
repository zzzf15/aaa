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
				<!-- 首页轮番 -->
				<banner :banner="banner" :pznz="pznz" v-show="flag"></banner>
				<!-- 点击头部列表切换 -->
				<classify :threeLevelcategoryList="threeLevelcategoryList" v-show="!flag"></classify>
				<view class="blockline" v-show="flag"></view>
				<!-- 渲染首页内容列表 -->
				<view class="product_list" id="product_list">
					<view class="module_list" v-for="(item,index) in floorList" :key="index">
						<view class="a">
							<image v-if="item.image" :src="item.image" alt=""/>
							<image v-else :src="item.data[1].image" alt=""/>
						<view class="shop_show">
							<view class="price">
								<text>￥</text>
								<text v-if="item.priceStr">{{item.priceStr}}</text>
								<text v-else>{{item.data[1].priceStr}}</text>
							</view>
							<view class="labels">
								<text>爆品</text>
								<text>一起拼</text>
							</view>
							<view class="escp module_subtitle" v-if="item.subtitle">{{item.subtitle}}</view>
							<view class="escp module_subtitle" v-else>{{item.data[1].subtitle}}</view>
							<view class="escp module_title" v-if="item.mainTitle">{{item.mainTitle}}</view>
							<view class="escp module_title" v-else>{{item.data[1].mainTitle}}</view>
							<view class="last_line" v-if="item.thirdContent">{{item.thirdContent}}</view>
							<view class="last_line" v-else>{{item.data[1].thirdContent}}</view>
						</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</page-meta>
</template>

<script>
	import {getIndexBanner,getIndexBottom,getHeaderClassify} from "@/api/index"
	import banner from "../components/banner.vue"
	import classify from "../components/classify.vue"
	export default {
		components:{
			banner,
			classify
		},
		data(){
			return{
				fontsize:13.333333,
				header_List:[],
				num:0,
				banner:[],
				pznz:[],
				floorList:[],
				pageIndex:1,
				flag:true,
				threeLevelcategoryList:[]
			}
		},
		methods: {
			// 首页搜索框点击
			searchClick(){
				this.$tab.navigateTo('/search/search');
			},
			// 头部列表点击
			headerListClick(item,index){
				this.num = index;
				const {categoryName,categoryId} = item;
				// console.log(categoryName,index);
				if(categoryName == "热门"){
					this.flag = true;
				}else{
					this.flag = false;
					getHeaderClassify(categoryId).then(res=>{
						// console.log(res);
						this.threeLevelcategoryList = res.subCategory.threeLevelcategoryList;
						this.floorList = res.blockList[0].block;
					})
				}
			},
			async indexRender() {
				let res = await getIndexBanner();
				// console.log(res);
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

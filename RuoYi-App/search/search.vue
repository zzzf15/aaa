<template>
	<page-meta :root-font-size="fontsize+'vw'" style="display: block;">
		<view class="search_pre">
			<view class="search_pre_head">
				<view class="search_pre_back" @click="goIndex">
					<uni-icons type="back" size="22"></uni-icons>
				</view>
				<view class="search_pre_input">
					<input type="text" placeholder="请输入您想要的商品">
				</view>
				<view class="search_pre_search">
					搜索
				</view>
			</view>
			<!-- 历史记录 -->
			<view class="search-pre-history-wrap clear">
				<view class="search-pre-history-head">
					<text class="h2">历史记录</text>
					<uni-icons type="trash-filled" size="22" style="line-height: 0.6rem;"></uni-icons>
				</view>
				<view class="clear ul" id="historyUl">
					<view>洗发水</view>
					<view>洗发水</view>
					<view>洗发水</view>
					<view>洗发水</view>
					<view>洗发水</view>
					<view>洗发水</view>
					<view>洗发水</view>
				</view>
			</view>
			<view class="blockline"></view>
			<!-- 大家都在搜 -->
			<view class="search_pre_host_wrap">
				<text class="p">大家都在搜</text>
				<view class="search_list">
					<text>疯狂上新</text>
					<text>口红</text>
					<text>乳液</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
					<text>洗面奶</text>
				</view>
			</view>
		</view>
	</page-meta>
</template>

<script>
	export default {
		data() {
			return {
				fontsize: 13.333333
			}
		},
		methods: {
			goIndex() {
				this.$tab.switchTab("/pages/index")
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}

	.search_pre {
		width: 7.5rem;
	}

	.search_pre_head {
		width: 100%;
		padding: 0 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		margin-top: 0.1rem;
		background: #fff;
	}

	.search_pre_head .search_pre_input input {
		width: 5.68rem;
		height: 0.64rem;
		line-height: 0.64rem;
		background: #f4f4f4;
		border-radius: 0.32rem;
		border: none;
		text-indent: 0.1rem;
	}

	.search_pre_head .search_pre_search {
		width: 1rem;
		height: 0.64rem;
		line-height: 0.64rem;
		text-align: center;
		color: #7f4395;
	}

	.search_pre_host_wrap {
		width: 7.5rem;
		background: #fff;
	}

	.search_pre_host_wrap .p {
		width: 100%;
		line-height: 0.46rem;
		color: #333;
		font-size: 0.33rem;
		margin: 0.2rem 0;
	}

	.search_pre_host_wrap .search_list {
		width: 7.5rem;
		line-height: 0.6rem;
		padding: 0 0.2rem;
		box-sizing: border-box;
		margin-bottom: 0.2rem;
	}

	.search_pre_host_wrap .search_list text {
		display: inline-block;
		padding: 0 0.3rem;
		background: #f4f4f4;
		border-radius: 0.32rem;
		text-align: center;
		margin: 0.1rem 0.1rem 0.1rem 0.1rem;
	}

	.blockline {
		width: 100%;
		height: 0.2rem;
		background: rgb(244, 244, 244);
	}
	
	.search-pre-history-wrap {
	    width: 7.5rem;
		background: #fff;
	}
	
	.search-pre-history-head {
	    display: -webkit-box;
	    display: flex;
	    padding: .05rem 0rem;
	}
	.search-pre-history-head .h2 {
	    width: 6.5rem;
	    height: .64rem;
	    display: -webkit-box;
	    display: flex;
	    line-height: .64rem;
	    font-family: PingFangSC-Semibold;
	    font-size: .3rem;
	    color: #333;
		font-weight: 400;
	}
	.search-pre-history-wrap .ul {
	    clear: both;
		background: #fff;
		overflow: hidden;
	}
	.search-pre-history-wrap .ul view {
	    float: left;
	    max-width: 3.2rem;
	    height: .56rem;
	    line-height: .56rem;
	    margin-right: .18rem;
	    margin-bottom: .24rem;
	    padding: 0 .28rem;
	    background: #F5F5F5;
	    border-radius: .35rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    font-size: .26rem;
	}
</style>

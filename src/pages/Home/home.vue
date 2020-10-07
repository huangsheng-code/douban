<template>
	<div class="wrap">
		<Header>
			<!-- <template #insearch>
				<input type="text" placeholder="search">
				<img src="../../assets/images/ic_search_gray.png" alt="" class="search">
				<img src="../../assets/images/ic_scan_gray.png" alt="" class="scan">
			</template> -->
			<template #insearch>
				<input type="text" placeholder="影视 图书 唱片 小组等" />
				<img src="../../assets/images/ic_group_search_small.png" alt="" class="insearch">
				<img src="../../assets/images/ic_scan_gray.png" alt="" class="scan">
			</template>
			<template #rImg>
				<img src="../../assets/images/ic_chat_white.png" alt="" class="rightImg">
			</template>
		</Header>
		<Banner swiperID="swiperID1" :swiperbuttonshow='false'>
			<template #swiper-slide>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/01.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/02.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/03.jpg" alt="">
				</div>
			</template>
		</Banner>
		<!-- <Banner swiperID="swiperID2" effect='cube'>
			<template #swiper-slide>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/01.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/02.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/03.jpg" alt="">
				</div>	
			</template>
		</Banner>
		<Banner swiperID="swiperID3" :paginationshow='true' paginationtype='fraction'>
			<template #swiper-slide>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/02.jpg" alt="">
				</div>
				<div class="swiper-slide">
					<img src="@/assets/images/banner/03.jpg" alt="">
				</div>	
			</template>
		</Banner> -->
		<Newslist v-for="(item,index) in arr" :key="index" :imgSrc="item.target.cover_url" :title="item.title" :content="item.target.desc" :author="item.target.author.name">

		</Newslist>
	</div>
</template>

<script>
import Header from "@/components/header";
import Banner from "@/components/banner";
import Newslist from "@/components/newslist";
export default {
	components: { Header, Banner, Newslist },
	data() {
		return {
			arr: []
		};
	},
	mounted() {
		this.$axios.get("../../../static/data/homeData.json").then(res => {
			console.log("homedata:", res.data);
			this.arr = res.data.recommend_feeds;
		});
	}
};
</script>

<style lang="less">
.wrap {
	margin-top: 0.8rem;
	margin-bottom: 1rem;
	.headerWrap {
		background-color: #05c312;
		.insearch,
		.scan {
			left: 0.24rem;
			top: 0.2rem;
			width: 0.4rem;
		}
		.scan {
			left: 5.8rem;
		}
	}
	input {
		width: 85%;
		height: 0.58rem;
		text-indent: 0.8rem;
		position: absolute;
		left: 0.12rem;
		top: 0.12rem;
		border-radius: 0.1rem;
		border: none;
	}
}
</style>
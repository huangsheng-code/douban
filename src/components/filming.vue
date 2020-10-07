<template>
	<div class="film">
		<div class="film-ing">
			<h1>正在上映的电影-北京</h1>
			<div class="film-box">
				<FilmingItem v-for="(item,index) in arr" :key="index" :imgsrc="item.cover_url" :title="item.title" :rate="score"></FilmingItem>
			</div>
		</div>
		<div class="film-ing">
			<h1>即将上映的电影</h1>
			<div class="film-box">
				<FilmingItem v-for="(item,index) in arr2" :key="index" :imgsrc="item.cover_url" :title="item.title" :rate="score"></FilmingItem>
			</div>
		</div>
	</div>
</template>

<script>
import FilmingItem from "@/components/filmingItem.vue";
export default {
	components: { FilmingItem },
	data() {
		return { arr: [], arr2: [] };
	},
	mounted() {
		this.$axios.get("../../static/data/broadcast.json").then(res => {
			console.log("homedata:", res.data);
			this.arr = res.data.recommend_one;
			this.arr2 = res.data.recommend_two;
		});
	}
};
</script>

<style lang="less">
.film {
	margin-bottom: 1rem;
}
.film-ing {
	padding: 0 0.18rem;
	margin-bottom: 0.18rem;
	h1 {
		font-size: 0.3rem;
		color: #141414;
		font-weight: normal;
		line-height: 0.9rem;
		text-align: left;
		margin-left: 0.32rem;
	}
	.film-box {
		height: 4.6rem;
		width: auto;
		overflow-x: auto;
		white-space: nowrap;
	}
}

.film-box::-webkit-scrollbar {
	display: none;
}
</style>
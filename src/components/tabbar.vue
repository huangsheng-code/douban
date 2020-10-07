<template>
	<div class="tabbarWrap">
		<Item mark='home' :curr='currnav' @change='getVal' txt="首页">
			<template #normalImg>
				<img src="../assets/images/ic_tab_home_active.png" alt="">
			</template>
			<template #activeImg>
				<img src='../assets/images/ic_tab_home_normal.png' alt="">
			</template>
		</Item>
		<Item mark='broadcast' :curr='currnav' @change='getVal' txt="书影音">
			<template #normalImg>
				<img src='../assets/images/ic_tab_subject_active.png' alt="">
			</template>
			<template #activeImg>
				<img src='../assets/images/ic_tab_subject_normal.png' alt="">
			</template>
		</Item>
		<Item mark='audio' :curr='currnav' @change='getVal' txt="广播">
			<template #normalImg>
				<img src='../assets/images/ic_tab_status_active.png' alt="">
			</template>
			<template #activeImg>
				<img src='../assets/images/ic_tab_status_normal.png' alt="">
			</template>
		</Item>
		<Item mark='group' :curr='currnav' @change='getVal' txt="小组">
			<template #normalImg>
				<img src='../assets/images/ic_tab_group_active.png' alt="">
			</template>
			<template #activeImg>
				<img src='../assets/images/ic_tab_group_normal.png' alt="">
			</template>
		</Item>
		<Item mark='mine' :curr='currnav' @change='getVal' txt="我的">
			<template #normalImg>
				<img src='../assets/images/ic_tab_profile_active.png' alt="">
			</template>
			<template #activeImg>
				<img src='../assets/images/ic_tab_profile_normal.png' alt="">
			</template>
		</Item>
	</div>
</template>

<script>
import Item from "./item";
export default {
	components: { Item },
	data() {
		return {
			currnav: "home"
		};
	},
	methods: {
		getVal(inmark) {
			this.currnav = inmark;
		}
	}
};
</script>

<style lang='less'>
.tabbarWrap {
	display: flex;
	height: 1rem;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	border-top: 1px solid #ccc;
	background-color: #fff;
	.item {
		flex: 1;
		font-size: 0.24rem;
		img {
			width: 0.6rem;
		}
		span.active {
			color: #42bd56;
		}
	}
}
</style>
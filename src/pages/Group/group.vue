<template>
	<div class="group-wrap">
		<Header>
			<template #title>
				<p>小组</p>
			</template>
			<template #lIMg>
				<img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="leftImg">
			</template>
			<template #rImg>
				<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg">
			</template>
		</Header>
		<NewGroup :title="parr[0].title" :arr="parr[0].group_list"></NewGroup>
		<NewGroup :title="parr[1].title" :arr="parr[1].group_list"></NewGroup>
		<NewGroup :title="parr[2].title" :arr="parr[2].group_list"></NewGroup>
	</div>
</template>

<script>
import Header from "@/components/header";
import NewGroup from "@/components/newgroup";
export default {
	components: { Header, NewGroup },
	data() {
		return {
			parr: []
		};
	},
	mounted() {
		this.$axios.get("../../../static/data/groupData.json").then(res => {
			console.log(
				"groupData",
				res.data.group[0].group_list[0].group_name
			);
			this.parr = res.data.group;
		});
	}
};
</script>

<style lang="less">
.group-wrap {
	margin-top: 0.8rem;
	margin-bottom: 1rem;
	.headerWrap {
		background-color: #fff;
	}
}
</style>
<template>
	<ul class="ul-list">
		<UlListItem title="风险承受能力评估" iconclass="icon-fengxianpinggu"></UlListItem>
		<UlListItem title="安全保障" iconclass="icon-anquanbaozhang"></UlListItem>
		<UlListItem title="我的关注" iconclass="icon-wodeguanzhu"></UlListItem>
		<UlListItem title="帮助中心" iconclass="icon-help"></UlListItem>
		<UlListItem title="关于我们" iconclass="icon-web__guanyuwomen
"></UlListItem>
		<UlListItem title="检查更新" iconclass="icon-jianchagengxin
"></UlListItem>
		<UlListItem title="联系客服" iconclass="icon-kefu"></UlListItem>
	</ul>
</template>

<script>
import UlListItem from "@/components/ullistitem";
export default {
	components: { UlListItem }
};
</script>

<style lang="less">
.ul-list {
	text-align: left;
	li:nth-of-type(2) {
		margin-bottom: 0.4rem;
	}
	li:nth-of-type(3) {
		margin-bottom: 0.4rem;
	}
}
</style>
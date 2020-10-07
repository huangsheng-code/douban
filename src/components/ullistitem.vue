<template>
	<li class="list-item">
		<i :class="iconclass" class="iconfont icon"></i>
		<p>{{title}}<i class="iconfont icon-youjiantou"></i></p>
	</li>
</template>

<script>
export default {
	props: ["title", "iconclass"]
};
</script>

<style lang="less">
.list-item {
	padding: 0 0.32rem;
	position: relative;
	border-bottom: 1px solid #eee;
	i.icon {
		font-size: 0.42rem;
		color: #44bd58;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	p {
		font-size: 0.3rem;
		color: #676767;
		margin-left: 0.8rem;
		line-height: 1rem;
		i {
			position: absolute;
			font-size: 0.42rem;
			top: 50%;
			right: 0.32rem;
			transform: translateY(-50%);
			color: #44bd58;
		}
	}
}
</style>
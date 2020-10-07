<template>
	<div class="headerWrap">
		<slot name='title'></slot>
		<slot name="lIMg"></slot>
		<slot name="insearch"></slot>
		<slot name="rImg"></slot>
	</div>
</template>

<script>
export default {
	props: ["title"]
};
</script>

<style lang="less">
.headerWrap {
	width: 100%;
	height: 0.8rem;
	position: fixed;
	top: 0;
	z-index: 2;
	border-bottom: 1px solid #e3e3e3;
	margin-bottom: 14px;
	margin-bottom: 0;
	box-sizing: border-box;
	background-color: #fff;
	img {
		width: 0.54rem;
		position: absolute;
	}
	p {
		font-size: 0.32rem;
		line-height: 0.8rem;
	}
	.leftImg {
		top: 0.16rem;
		right: 1.1rem;
	}
	.rightImg {
		top: 0.16rem;
		right: 0.2rem;
	}
}
</style>
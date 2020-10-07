<template>
	<div class="mine-wrap">
		<div class="mine-header">
			<div class="item">
				<i class="iconfont icon-suo"></i>
				<p>密码管理</p>
			</div>
			<div class="item">
				<i class="iconfont icon-yinxingqia"></i>
				<p>密码管理</p>
			</div>
		</div>
		<Header>
			<template #title>
				<p>我的</p>
			</template>
			<template #rImg>
				<img src="../../assets/images/ic_settings.png" alt="" class="rightImg">
			</template>
		</Header>
		<UlList></UlList>
	</div>
</template>

<script>
import Header from "@/components/header";
import UlList from "@/components/ullist";
export default {
	components: { Header, UlList }
};
</script>

<style lang="less">
@import "../../assets/font_2112881_6y92ctmzum5/iconfont.css";
.mine-wrap {
	margin-top: 0.8rem;
	margin-bottom: 1rem;
	.headerWrap {
		background-color: #fff;
	}
	.mine-header {
		display: flex;
		border-bottom: 1px solid #eee;
		padding: 0.26rem 0rem;
		margin-bottom: 0.32rem;
		div {
			flex: 1;
			font-size: 0.3rem;
			color: #676767;
			i {
				font-size: 0.56rem;
				display: block;
				margin: 0 auto;
				color: #44bd58;
			}
			p {
				margin-top: 0.2rem;
			}
		}
	}
}
</style>
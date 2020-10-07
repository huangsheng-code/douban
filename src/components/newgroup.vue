<template>
	<div class="newgroup">
		<h2>{{title}}</h2>
		<ul>
			<li v-for="(item,index) in arr" :key="index">
				<span><img :src="item.img_url" alt="" />{{item.group_name}}<em>{{item.group_member}}</em></span>
				<div>{{item.topic_title}}</div>
			</li>
		</ul>
		<div class="xg"><a href="#">更多相关小组</a></div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["arr", "title"]
};
</script>

<style lang="less">
.newgroup {
	overflow: hidden;
	text-align: left;
}
.newgroup h2 {
	padding-left: 0.4rem;
	margin-top: 0.24rem;
	font-size: 0.36rem;
	font-weight: normal;
}
.newgroup ul {
	overflow: hidden;
	padding-left: 0.4rem;
	margin-top: 0.26666667rem;
}
.newgroup ul li {
	position: relative;
	border-bottom: 1px solid #ccc;
	margin-bottom: 0.36rem;
	padding-bottom: 0.32rem;
}
.newgroup ul li span {
	display: block;
	color: black;
	font-size: 0.3rem;
}
.newgroup ul li span img {
	display: inline-block;
	width: 0.8rem;
	height: 0.8rem;
	vertical-align: middle;
	margin-right: 0.13333333rem;
}
.newgroup ul li span em {
	float: right;
	margin-right: 0.26666667rem;
	color: #aaa;
}
.newgroup ul li div {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-top: 0.26666667rem;
	font-size: 0.3rem;
	color: #aaa;
}
.newgroup .xg {
	padding-left: 0.4rem;
	text-align: center;
	margin-bottom: 0.2rem;
}
.newgroup .xg a {
	color: #47bf5a;
	font-size: 0.33333333rem;
}
</style>
<template>
	<div class="audioitem">
		<div class="note" v-for="(item,index) in arr" :key="index">
			<div class="lt"><i>豆</i></div>
			<div class="rt">
				<div class="note-header">
					<div class="top-text">
						<span><em>{{item.title1}}</em>写了日记</span>
						<span>{{item.time}}</span>
					</div>
				</div>
				<div class="note-body">
					<h3>{{item.bodyTitle}}</h3>
					<span>{{item.bodyTitle2}}</span>
				</div>
				<div class="note-footer">
					<span><i></i>{{item.good}}</span>
					<span><i></i>{{item.pinglun}}</span>
					<span><i></i>{{item.zhuanfa}}</span>
					<a href="#" class="dot"><span></span><span></span><span></span></a>
				</div>
			</div>
		</div>`
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: []
		};
	},
	mounted() {
		this.$axios.get("../../static/data/guangbo.json").then(res => {
			console.log(res.data);
			this.arr = res.data;
		});
	}
};
</script>

<style lang="less">
.audioitem {
	margin-bottom: 1rem;
}
.note {
	padding: 0.36rem 0.53333333rem;
	display: flex;
	text-align: left;
}
.note .lt {
	width: 2rem;
	margin-right: 0.2rem;
}
.note .lt i {
	display: block;
	width: 0.86666667rem;
	height: 0.86666667rem;
	background: #05c112;
	border-radius: 50%;
	line-height: 0.86666667rem;
	text-align: center;
	color: white;
	font-style: normal;
	font-size: 0.5rem;
}
.note .rt .note-header {
	margin-bottom: 0.26666667rem;
}
.note .rt .note-header .top-text em {
	font-style: normal;
}

.note .rt .note-header span {
	display: block;
}
.note .rt .note-header span:nth-of-type(1) {
	color: #999;
	font-size: 0.32rem;
	margin-bottom: 0.13333333rem;
}
.note .rt .note-header span:nth-of-type(1) em {
	color: black;
	margin-right: 0.13333333rem;
}
.note .rt .note-header span:nth-of-type(2) {
	color: #999;
	font-size: 0.26rem;
}
.note .rt .note-header span:nth-of-type(2) em {
	color: black;
	margin-right: 0.13333333rem;
}
.note .rt .note-body {
	background: #f9f9f9;
	padding: 0.2rem;
	border-radius: 0.13333333rem;
	margin-bottom: 0.2rem;
}
.note .rt .note-body h3 {
	font-size: 0.3rem;
	margin-bottom: 0.26666667rem;
}
.note .rt .note-body span {
	color: #999;
	font-size: 0.28rem;
}
.note .rt .note-footer span {
	font-size: 0.28rem;
}
.note .rt .note-footer span:nth-of-type(1) {
	margin-right: 0.16rem;
	color: #999;
}
.note .rt .note-footer span:nth-of-type(1) i {
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: url(../assets/images/icon-1.png);
	background-size: 0.4rem 0.4rem;
	vertical-align: middle;
}
.note .rt .note-footer span:nth-of-type(2) {
	margin-right: 0.16rem;
	color: #999;
}
.note .rt .note-footer span:nth-of-type(2) i {
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: url(../assets/images/icon-2.png);
	background-size: 0.4rem 0.4rem;
	vertical-align: middle;
}
.note .rt .note-footer span:nth-of-type(3) {
	margin-right: 0.16rem;
	color: #999;
}
.note .rt .note-footer span:nth-of-type(3) i {
	display: inline-block;
	width: 0.4rem;
	height: 0.4rem;
	background: url(../assets/images/icon-3.png);
	background-size: 0.4rem 0.4rem;
	vertical-align: middle;
}
.note .rt .note-footer a {
	float: right;
}
.note .rt .note-footer a.dot span {
	display: inline-block;
	width: 0.08rem;
	height: 0.08rem;
	background: #999;
	border-radius: 50%;
	margin-right: 0.1rem;
}
</style>
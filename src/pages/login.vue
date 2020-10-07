<template>
	<div class="login">
		<div class="header">
			<router-link to="/audio"><i class="icon-chacha iconfont"></i></router-link>
			<h1>登录豆瓣</h1>
			<p>登录注册表示同意<span> 豆瓣使用协议、隐私政策</span></p>
		</div>
		<form action="#">
			<div class="phone">
				<button>+86</button><input type="text" placeholder="手机号">
			</div>
			<div class="tokey">
				<input type="text" placeholder="手机验证码">
				<button>获取验证码</button>
			</div>
			<p class="submit">
				<input type="submit" value="登录">
			</p>
			<p class="sub"><a href="#" class="submitkey">账号密码登录</a><a href="#" class="unget">验证码收不到?</a></p>
		</form>
		<p class="other-submit">第三方登录</p>
		<ul>
			<li><i class="iconfont icon-28 weibo"></i></li>
			<li><i class="iconfont icon-weixin"></i></li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../assets/font_2112881_6y92ctmzum5/iconfont.css";
.login {
	text-align: left;
	padding: 0.3rem 0.3rem;
	.header {
		i {
			font-weight: 900;
		}
		h1 {
			margin-top: 0.15rem;
			font-size: 0.48rem;
			font-weight: 200;
			text-align: center;
		}
		p {
			margin-top: 0.1rem;
			font-size: 0.26rem;
			color: #ccc;
			text-align: center;
			span {
				color: #42bd56;
			}
		}
	}
	form {
		margin-top: 0.56rem;
		div {
			border: 1px solid #ccc;
			padding: 0.1rem 0;
		}
		.phone {
			input {
				border: none;
				text-indent: 0.16rem;
				font-size: 0.28rem;
			}
			button {
				border: none;
				background-color: #fff;
				font-weight: bolder;
				padding: 0.13rem;
				border-right: 1px solid #ccc;
			}
		}
		.tokey {
			input {
				border: none;
				text-indent: 0.16rem;
				width: 75.4%;
				font-size: 0.28rem;
			}
			button {
				border: none;
				background-color: #fff;
				color: #a0deaa;
				padding: 0.13rem;
			}
		}
	}
	.submit {
		margin-top: 0.4rem;
		input {
			color: #fff;
			background-color: #a0deaa;
			border: none;
			height: 0.8rem;
			line-height: 0.8rem;
			font-size: 0.28rem;
			width: 100%;
			border-radius: 0.08rem;
		}
	}
	.sub {
		margin-top: 0.42rem;
		a {
			color: #a0deaa;
			font-size: 0.28rem;
		}
		.unget {
			color: #494949;
			float: right;
		}
	}
	.other-submit {
		margin-top: 3rem;
		font-size: 0.24rem;
		text-align: center;
		color: #ccc;
	}
	ul {
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-around;
		li {
			width: 1rem;
			height: 1rem;
			border: 1px solid #eee;
			border-radius: 50%;
			text-align: center;
			line-height: 1rem;
			i {
				font-size: 0.6rem;
				color: #39bb4a;
			}
			i.weibo {
				color: #e84b4e;
			}
		}
	}
}
</style>
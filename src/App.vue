<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view />
		<Tabbar v-if="tabbarshow"></Tabbar>
	</div>
</template>

<script>
import Tabbar from "./components/tabbar";
import { obj } from "../static/utils.js";
export default {
	name: "App",
	data() {
		return {
			tabbarshow: true
		};
	},
	mounted() {
		obj.setRem();
	},
	components: {
		Tabbar
	},
	watch: {
		$route(to, from) {
			if (to.name == "login") {
				this.tabbarshow = false;
			} else {
				this.tabbarshow = true;
			}
		}
	}
};
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html {
	font-size: 100px;
}
body {
	font-size: 16px;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
a {
	text-decoration: none;
}
#app {
	margin: 0 auto;
	max-width: 750px;
	position: relative;
	.tabbarWrap {
		max-width: 750px;
	}
	.headerWrap {
		max-width: 750px;
	}
}
</style>

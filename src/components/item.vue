<template>
	<div class="item" @click='fn'>
		<template v-if='flag'>
			<slot name='normalImg'></slot>
		</template>
		<template v-if='!flag'>
			<slot name='activeImg'></slot>
		</template>
		<br />
		<span :class="{active:flag}">{{txt}}</span>
	</div>
</template>

<script>
export default {
	props: ["mark", "curr", "txt"],
	computed: {
		flag() {
			if (this.mark == this.curr) {
				return true;
			}
			return false;
		}
	},
	methods: {
		fn() {
			this.$emit("change", this.mark);
			this.$router.push("/" + this.mark);
		}
	}
};
</script>

<style>
</style>
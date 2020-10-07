<template>
	<div class="audio-wrap">
		<Header>
			<template #title>
				<p>广播</p>
			</template>
			<template #lIMg>
				<img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="leftImg" />
			</template>
			<template #rImg>
				<img src="../../assets/images/ic_chat_green.png" alt="" class="rightImg" />
			</template>
		</Header>
		<LoginAudio></LoginAudio>
		<AudioItem></AudioItem>
	</div>
</template>

<script>
import Header from "@/components/header";
import LoginAudio from "@/components/loginAudio";
import AudioItem from "@/components/audioitem";
export default {
	components: { Header, LoginAudio, AudioItem }
};
</script>

<style lang="less">
.audio-wrap {
	.headerWrap {
		background-color: #fff;
	}
}
</style>
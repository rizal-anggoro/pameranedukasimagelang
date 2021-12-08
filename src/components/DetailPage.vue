<template>
	<div class="detailPage">
		<AppBarDetail />
		<vue-page-transition class="fade">
			<MenuDetail v-if="isMenuVisible" />
		</vue-page-transition>
		<div class="divContent">
			<component :is="contentScreen[dataType]" />
		</div>
	</div>
</template>
<script src="../scripts/detailPageScript.js" />
<style lang="scss" src="../styles/detailPageStyle.scss" />

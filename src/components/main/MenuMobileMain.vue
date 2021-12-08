<template>
	<div class="menuMobileMain">
		<div class="divMenuHeader">
			<svg @click="closeMenuMobileMain" class="iconClose" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0V0z" fill="none"/>
				<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
			</svg>
		</div>
		<div class="divMenuContent">
			<p @click="onMenuMobileMainClick(listMenuMain[index - 1]['key'])" class="menuItem" v-for="index in listMenuMain.length" :key="listMenuMain[index - 1]['key']">{{listMenuMain[index - 1]['menu']}}</p>
		</div>
	</div>
</template>
<script src="../../scripts/main/menuMobileMainScript.js" />
<style lang="scss" src="../../styles/main/menuMobileMainStyle.scss" />

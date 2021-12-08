<template>
	<div class="menuDetail">
		<div class="mobile" v-responsive.sm.xs>
			<div class="header">
				<div class="divider" />
				<div class="divIconClose">
					<svg @click="onClickCloseMenu" class="iconClose" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
					</svg>
				</div>
			</div>
			<div class="content">
				<div @click="onClickMenuMobile(listScrollTo[index - 1]['scrollId'])" class="listItemMenu" v-for="index in listScrollTo.length" :key="index - 1">
					<p class="mobileBody">{{listScrollTo[index - 1]['title']}}</p>
				</div>
			</div>
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<div class="header">
				<div class="divider" />
				<div class="divIconClose">
					<svg @click="onClickCloseMenu" class="iconClose" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
					</svg>
				</div>
			</div>
			<div class="content">
				<div @click="onClickMenu(listScrollTo[index - 1]['scrollId'])" class="listItemMenu" v-for="index in listScrollTo.length" :key="index - 1">
					<p class="desktopBody">{{listScrollTo[index - 1]['title']}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {EventBus} from "@/utils/scripts/eventBusScript";

	export default {
		name: 'MenuDetail',
		data() {
			return {
				universityId: '',
				listScrollTo: [],
			}
		},
		created() {
			this.initializeRoute()
		},
		methods: {
			initializeRoute() {
				let _query = this.$route.query
				this.universityId = _query.id;
				this.initializeMenu()
			},
			initializeMenu() {
				let _jsonListScrollTo = sessionStorage.getItem(`scrollTo-${this.universityId}`)
				if (_jsonListScrollTo !== null) {
					this.listScrollTo = JSON.parse(_jsonListScrollTo)
				}
			},
			onClickCloseMenu() {
				EventBus.$emit('onClickCloseMenu')
			},
			onClickMenu(_scrollId) {
				let _element = document.getElementsByClassName(_scrollId)[0]
				_element.scrollIntoView({
					behavior: 'smooth',
				})
				EventBus.$emit('onClickCloseMenu')
			},
			onClickMenuMobile(_scrollId) {
				let _element = document.getElementsByClassName(`${_scrollId}Mobile`)[0]
				_element.scrollIntoView({
					behavior: 'smooth',
				})
				EventBus.$emit('onClickCloseMenu')
			},
		},
	}
</script>
<style lang="scss" src="../../styles/detail/menuDetailStyle.scss" />

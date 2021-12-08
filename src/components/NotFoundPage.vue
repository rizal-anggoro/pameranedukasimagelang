<template>
	<div class="notFoundPage">
		<!-- mobile -->
		<div class="mobile" style="height: 100vh; width: 100%;" v-responsive.sm.xs>
			<div class="divContent" style="position: relative; top: 50%; transform: translateY(-50%);">
				<img style="max-width: 84%; margin: 0 8%;" v-lazy="require('@/assets/image/undraw/undrawNotFound.png')">
				<p class="mobileTitle" style="margin-top: .64em; text-align: center">Error: page not found!</p>
				<div class="divButton" style="display: flex;margin-top: 2em;">
					<div style="flex: 1"></div>
					<p @click="onClickBackToMain" class="mobileFillButton">Kembali ke main</p>
					<div style="flex: 1"></div>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div style="height: 100vh; width: 100%; display: flex;" class="desktop" v-responsive.md.lg.xl>
			<div style="flex: 1"></div>
			<div class="divCenter">
				<div class="divContent" style="width: fit-content; position: relative; top: 50%; transform: translateY(-50%)">
					<img style="height: 16em; object-fit: contain" v-lazy="require('@/assets/image/undraw/undrawNotFound.png')">
					<p class="desktopTitle" style="margin-top: .64em; text-align: center">Error: page not found!</p>
					<div class="divButton" style="display: flex;margin-top: 2em;">
						<div style="flex: 1"></div>
						<p @click="onClickBackToMain" class="desktopFillButton">Kembali ke main</p>
						<div style="flex: 1"></div>
					</div>
				</div>
			</div>
			<div style="flex: 1"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NotFoundPage",
		methods: {
			onClickBackToMain() {
				this.$router.push({
					path: '/',
				})
			},
		}
	}
</script>

<style scoped lang="scss">

</style>

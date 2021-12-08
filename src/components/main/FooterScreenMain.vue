<template>
	<div class="footerScreenMain">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<p class="title">Pameran Edukasi Magelang</p>
			<div class="listMenu">
				<p class="menuItem" :key="menu" v-for="menu in listMenu">{{menu}}</p>
			</div>
			<div class="divider"></div>
			<p class="copyright">Copyright SMANSA 2020. All right reserved.</p>
		</div>
	</div>
</template>
<script src="../../scripts/main/footerScreenMainScript.js" />
<style lang="scss" src="../../styles/main/footerScreenMainStyle.scss" />

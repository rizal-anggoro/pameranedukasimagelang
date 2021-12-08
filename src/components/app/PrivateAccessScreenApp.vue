<template>
	<div class="privateAccessAppScreen">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="root">
				<img class="image" src="../../assets/image/undraw/undrawNotify.png">
				<p class="title">Hanya akses privat</p>
				<p class="mobileBody">Hanya orang - orang yang memiliki kode akses yang dapat masuk.</p>
				<div class="divButton">
					<div class="divider" />
					<p @click="onClickButtonHaveCode" class="mobileFillButton">Saya memiliki kode</p>
					<div class="divider" />
				</div>
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="root">
				<img class="image" src="../../assets/image/undraw/undrawNotify.png">
				<p class="title">Hanya akses privat</p>
				<p class="desktopBody">Hanya orang - orang yang memiliki kode akses yang dapat masuk.</p>
				<div class="divButton">
					<div class="divider" />
					<p @click="onClickButtonHaveCode" class="desktopFillButton">Saya memiliki kode</p>
					<div class="divider" />
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/app/privateAccessScreenAppScript.js" />
<style lang="scss" src="../../styles/app/privateAccessScreenAppStyle.scss" />

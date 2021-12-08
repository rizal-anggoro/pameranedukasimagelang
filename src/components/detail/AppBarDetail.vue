<template>
	<div class="appBarDetail">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="root">
				<img class="logo" :src="jsonUniversityData['logoUrl']">
				<div class="divTitle">
					<p class="mobileBody">{{jsonUniversityData['universityName']}}</p>
				</div>
				<div v-if="dataType === 0" class="divMenu">
					<svg @click="onClickMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-menu">
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</div>
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="root">
				<img class="logo" :src="jsonUniversityData['logoUrl']">
				<div class="divTitle">
					<p class="title">{{jsonUniversityData['universityName']}}</p>
				</div>
				<div v-if="dataType === 0" class="divMenu">
					<svg @click="onClickMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menuIcon">
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/detail/appBarDetailScript.js" />
<style lang="scss" src="../../styles/detail/appBarDetailStyle.scss" />

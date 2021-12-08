<template>
	<div class="aboutScreenMain">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div id="scrollToAboutScreenMainMobile" class="mobileScrollTo"></div>
			<div class="divTitle">
				<p id="aboutScreenMainMobileTextBackground" class="mobileTextBackground">About.</p>
				<p class="mobileTextBackground hidden">About.</p>
				<div class="textContent">
					<p class="mobileHeading">Pameran Edukasi<br>Magelang</p>
				</div>
			</div>
			<vue-clamp autoresize :max-lines="aboutBodyMaxLines" class="body">{{pemDescription[1]}}</vue-clamp>
			<p @click="readMore" class="mobileOutlineButton">{{buttonReadMore}}</p>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div id="scrollToAboutScreenMainDesktop" class="desktopScrollTo"></div>
			<div class="divTitle">
				<p id="aboutScreenMainDesktopTextBackground" class="desktopTextBackground">About.</p>
				<p class="desktopTextBackground hidden">About.</p>
				<div class="textContent">
					<p class="desktopHeading">Pameran Edukasi<br>Magelang</p>
				</div>
			</div>
			<vue-clamp autoresize :max-lines="aboutBodyMaxLines" id="aboutScreenMainDesktopBody" class="desktopBody">{{pemDescription[1]}}</vue-clamp>
			<p @click="readMore" id="aboutScreenMainDesktopButtonReadMore" class="desktopOutlineButton">{{buttonReadMore}}</p>
		</div>
	</div>
</template>
<script src="../../scripts/main/aboutScreenMainScript.js" />
<style lang="scss" src="../../styles/main/aboutScreenMainStyle.scss" />

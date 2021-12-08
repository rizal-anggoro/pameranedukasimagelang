<template>
	<div class="tryOutScreenMain">
		<div class="mobile" v-responsive.sm.xs>
			<div class="divTitle">
				<p id="tryOutScreenMainMobileTextBackground" class="mobileTextBackground">Other.</p>
				<p class="mobileTextBackground hidden">Other.</p>
				<div class="textContent">
					<p class="mobileHeading">Try out UTBK 2021</p>
				</div>
			</div>
			<div class="divContent">
				<img class="poster" v-lazy="src">
				<p class="mobileTitle">{{title}}</p>
				<a :href="buttonLink" target="_blank" style="text-decoration: none">
					<p class="mobileOutlineButton">{{buttonText}}</p>
				</a>
			</div>
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<div class="textBackground">
				<p class="desktopTextBackground" id="tryOutScreenMainDesktopTextBackground">Other event.</p>
				<p class="desktopTextBackground hidden">Other event.</p>
				<p class="desktopHeading">Try out UTBK 2021</p>
			</div>
			<div class="divContent">
				<div class="leftSide">
					<img v-lazy="src">
				</div>
				<div class="rightSide">
					<div class="divText">
						<p class="desktopTitle">{{title}}</p>
						<a :href="buttonLink" target="_blank" style="text-decoration: none">
							<p class="desktopOutlineButton">{{buttonText}}</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/tryOutScreenMainScript.js" />
<style lang="scss" src="../../styles/main/tryOutScreenMainStyle.scss" />

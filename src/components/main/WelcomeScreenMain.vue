<template>
	<div class="welcomeScreenMain">
		<!-- mobile app bar -->
		<div v-responsive.sm.xs class="welcomeScreenMainMobile">
			<div class="root" :class="{'rootOverflowed' : mobileIsOverflowed}">
				<div id="mobileDivImage" class="divImage">
					<img @load="mobileInitializeResponsive" class="image" v-lazy="require('@/assets/image/other/imageWelcomeScreen.png')">
				</div>
				<div id="mobileDivContent" class="divContent">
					<div class="content">
						<p class="mobileHeading">Pameran Edukasi<br>Magelang</p>
						<p class="mobileBody" id="welcomeScreenMainMobileSubtitle">
							{{pemDescription[0]}}
						</p>
						<a href="https://t.me/pemvirtual2021" target="_blank" style="text-decoration: none">
							<p id="welcomeScreenMainMobileButtonExplore" class="mobileFillButton">Saluran Telegram</p>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div v-responsive.md.lg.xl class="welcomeScreenMainDesktop">
			<div class="root">
				<div class="welcomeScreenMainLeftSide">
					<div class="content">
						<p class="desktopHeading">Pameran Edukasi<br>Magelang</p>
						<p class="desktopBody" id="welcomeScreenMainDesktopSubtitle">
							{{pemDescription[0]}}
						</p>
						<a href="https://t.me/pemvirtual2021" target="_blank" style="text-decoration: none">
							<p class="desktopFillButton" id="welcomeScreenMainDesktopButtonExplore">Saluran Telegram</p>
						</a>
					</div>
				</div>
				<img style="display: block" class="image" v-lazy="require('@/assets/image/other/imageWelcomeScreen.png')">
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/welcomeScreenMainScript.js" />
<style lang="scss" src="../../styles/main/welcomeScreenMainStyle.scss" />

<template>
	<div class="universitiesScreenMain">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div id="scrollToUniversitiesScreenMainMobile" class="mobileScrollTo"></div>
			<div class="divTitle">
				<p id="universitiesScreenMainMobileTextBackground" class="mobileTextBackground">Universities.</p>
				<p class="mobileTextBackground hidden">Universities.</p>
				<p class="mobileSubheading">Temukan universitas<br>favoritmu sekarang!</p>
			</div>
			<div class="listUniversities">
				<div @click="onClickListItem(university['id'])" :key="university['name']" v-for="university in listPopularUniversities" class="listItem">
					<div class="divImage">
						<img class="image" v-lazy="university['logoUrl']" />
					</div>
					<div class="divText">
						<div class="divSubtitle">
							<div class="divider"></div>
							<vue-clamp :max-lines="2" autoresize class="mobileSubtitle">{{university['universityName']}}</vue-clamp>
						</div>
						<vue-clamp autoresize :max-lines="3" class="mobileBody">{{university['universityDescription']}}</vue-clamp>
					</div>
				</div>
			</div>
			<p @click="viewMore" class="mobileOutlineButton">Lihat lainnya</p>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div id="scrollToUniversitiesScreenMainDesktop" class="desktopScrollTo"></div>
			<div class="divTitle">
				<p id="universitiesScreenMainDesktopTextBackground" class="desktopTextBackground">Universities.</p>
				<p class="desktopTextBackground hidden">Universities.</p>
				<p id="universitiesScreenMainDesktopTitle" class="desktopHeading">Temukan universitas<br>favoritmu sekarang!</p>
			</div>
			<div class="universities">
				<div class="divButtonScroll">
					<img :class="{'buttonScrollLeftHidden' : isListUniversitiesMinScroll}" @click="scrollListUniversities(1)" class="buttonScrollLeft" src="../../assets/svg/icon/arrow_back_ios-24px.svg">
					<img :class="{'buttonScrollRightHidden' : isListUniversitiesMaxScroll}" @click="scrollListUniversities(0)" class="buttonScrollRight" src="../../assets/svg/icon/arrow_forward_ios-24px.svg">
				</div>
				<div id="listUniversities" class="listUniversities">
					<div @click="onClickListItem(university['id'])" :key="university['id']" v-for="university in listPopularUniversities" class="listItem">
						<div class="divImage">
							<img class="image" v-lazy="university['logoUrl']" />
						</div>
						<div class="divText">
							<div class="divSubtitle">
								<div class="divider"></div>
								<vue-clamp autoresize :max-lines="2" class="desktopSubtitle">{{university['universityName']}}</vue-clamp>
							</div>
							<vue-clamp autoresize :max-lines="3" class="desktopBody">{{university['universityDescription']}}</vue-clamp>
						</div>
					</div>
				</div>
			</div>
			<p @click="viewMore" id="universitiesScreenMainButtonViewMore" class="desktopOutlineButton">Lihat lainnya</p>
		</div>
	</div>
</template>
<script src="../../scripts/main/universitiesScreenMainScript.js" />
<style lang="scss" src="../../styles/main/universitiesScreenMainStyle.scss" />

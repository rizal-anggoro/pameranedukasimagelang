<template>
	<div class="mainPage">
		<AppBarMain></AppBarMain>
		<div class="divMenuMobile" v-responsive.sm.xs>
			<vue-page-transition class="fade">
				<MenuMobileMain v-if="isMenuMobileMainOpened"></MenuMobileMain>
			</vue-page-transition>
		</div>
		<div class="content">
			<WelcomeScreenMain></WelcomeScreenMain>
			<SponsorScreenMain />
			<WelcomeSpeechScreenMain></WelcomeSpeechScreenMain>
			<AboutScreenMain></AboutScreenMain>
			<UniversitiesScreenMain></UniversitiesScreenMain>
			<!--<TryOutScreenMain />-->
			<ZoomScreenMain />
			<ContactScreenMain></ContactScreenMain>
		</div>
	</div>
</template>
<script src="../scripts/mainPageScript.js" />
<style lang="scss" src="../styles/mainPageStyle.scss" />

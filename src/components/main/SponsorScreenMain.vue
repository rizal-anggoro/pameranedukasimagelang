<template>
	<div class="sponsorScreenMain">
		<div class="mobile" v-responsive.sm.xs>
			<div id="scrollToSponsorScreenMainMobile"></div>
			<p class="mobileSubtitle powered">Dipersembahkan oleh</p>
			<div class="divPowered">
				<img v-for="i in listPowered.length" :key="i - 1" :src="listPowered[i - 1]">
			</div>
			<p class="mobileSubtitle sponsor">Sponsor</p>
			<div class="divSponsorSmall">
				<img :src="sponsor" :key="sponsor" v-for="sponsor in listSponsorSmall">
			</div>
			<div class="divSponsorMedium">
				<img :src="sponsor" :key="sponsor" v-for="sponsor in listSponsorMedium">
			</div>
			<p class="mobileSubtitle mediaPartner">Media partner</p>
			<div class="divMediaPartnerSmall">
				<img :src="mediaPartner" :key="mediaPartner" v-for="mediaPartner in listMediaPartnerSmall">
			</div>
			<div class="divMediaPartnerMedium">
				<img :src="mediaPartner" :key="mediaPartner" v-for="mediaPartner in listMediaPartnerMedium">
			</div>
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<div id="scrollToSponsorScreenMainDesktop"></div>
			<p class="desktopSubtitle powered">Dipersembahkan oleh</p>
			<div class="divPowered">
				<img v-for="i in listPowered.length" :key="i - 1" v-lazy="listPowered[i - 1]">
			</div>
			<p class="desktopSubtitle sponsor">Sponsor</p>
			<div class="divSponsorSmall">
				<img :src="sponsor" :key="sponsor" v-for="sponsor in listSponsorSmall">
			</div>
			<div class="divSponsorMedium">
				<img :src="sponsor" :key="sponsor" v-for="sponsor in listSponsorMedium">
			</div>
			<p class="desktopSubtitle mediaPartner">Media partner</p>
			<div class="divMediaPartnerSmall">
				<img :src="mediaPartner" :key="mediaPartner" v-for="mediaPartner in listMediaPartnerSmall">
			</div>
			<div class="divMediaPartnerMedium">
				<img :src="mediaPartner" :key="mediaPartner" v-for="mediaPartner in listMediaPartnerMedium">
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/sponsorScreenMainScript.js" />
<style lang="scss" src="../../styles/main/sponsorScreenMainStyle.scss" />

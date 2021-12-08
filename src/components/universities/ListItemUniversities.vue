<template>
	<div class="listItemUniversities">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="root" @click="showMore(source['id'])">
				<div class="divImageMobile">
					<img class="imageMobile" v-lazy="source['logoUrl']">
				</div>
				<div class="divContentMobile">
					<p class="mobileSubtitle">{{source['universityName']}}</p>
					<vue-clamp autoresize :max-lines="3" class="mobileBody">{{source['universityDescription']}}</vue-clamp>
				</div>
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="root" @click="showMore(source['id'])">
				<div class="leftSide">
					<img class="imageDesktop" v-lazy="source['logoUrl']">
				</div>
				<div class="rightSide">
					<div class="content">
						<p class="desktopSubtitle">{{source['universityName']}}</p>
						<vue-clamp autoresize :max-lines="3" class="desktopBody">{{source['universityDescription']}}</vue-clamp>
						<p @click="showMore(source['id'])" class="desktopOutlineButton">Lihat detail</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/universities/listItemUniversitiesScript.js" />
<style lang="scss" src="../../styles/universities/listItemUniversitiesStyle.scss" />

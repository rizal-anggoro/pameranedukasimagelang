<template>
	<div class="universitiesScreenUniversities">
		<div id="emToPxDiv" style="height: 1em; position: absolute; visibility: hidden; z-index: -1;"></div>
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div id="divTitleUniversitiesScreenUniversitiesMobile" class="divTitle">
				<p class="textBackground">Universities.</p>
				<p class="textBackgroundHidden">Universities.</p>
				<p class="title">Temukan universitas<br>favoritmu sekarang!</p>
			</div>
			<virtual-list
				v-if="filterStatus !== -1"
				ref="virtualListMobile"
				:keeps="10"
				:estimate-size="81"
				:page-mode="true"
				:data-key="'id'"
				:data-sources="filterStatus === 1 ? listUniversitiesFiltered : listUniversities"
				:data-component="listItemUniversities"/>
			<div v-if="filterStatus === -1" class="divNotFound">
				<p>Universitas tidak ditemukan.</p>
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div v-if="filterStatus !== -1" id="divTitleUniversitiesScreenUniversitiesDesktop" class="divTitle">
				<p class="textBackground">Universities.</p>
				<p class="textBackgroundHidden">Universities.</p>
				<p class="title">Temukan universitas<br>favoritmu sekarang!!</p>
			</div>
			<virtual-list
				v-if="filterStatus !== -1"
				ref="virtualListDesktop"
				:estimate-size="81"
				:keeps="5"
				:page-mode="false"
				:data-key="'id'"
				:data-sources="filterStatus === 1 ? listUniversitiesFiltered : listUniversities"
				:data-component="listItemUniversities"/>
			<div v-if="filterStatus === -1" class="divNotFound">
				<img class="imageNotFound" src="../../assets/image/undraw/undrawNotFound.png">
				<p class="title">Uh ooh!</p>
				<p class="desktopBody">Universitas yang Anda cari tidak dapat kami temukan.<br>Silahkan coba kata kunci yang lain.</p>
			</div>
			<!--<div v-if="filterStatus !== -1" @click="scrollToLastPosition" class="divButtonScrollDown">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="buttonScrollDown">
					<line x1="12" y1="5" x2="12" y2="19" />
					<polyline points="19 12 12 19 5 12" />
				</svg>
			</div>-->
		</div>
	</div>
</template>
<script src="../../scripts/universities/universitiesScreenUniversitiesScript.js" />
<style lang="scss" src="../../styles/universities/universitiesScreenUniversitiesStyle.scss" />

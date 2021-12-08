<template>
	<div class="universitiesScreenUniversities">
		<div id="emToPxDiv" style="height: 1em; position: absolute; visibility: hidden; z-index: -1;"></div>
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<!-- div not found -->
			<div v-if="filterStatus === -1" class="divNotFound">
				<img class="imageNotFound" src="../../assets/image/undraw/undrawNotFound.png">
				<p class="mobileTitle">Uh ooh!</p>
				<p class="mobileBody">Universitas yang Anda cari tidak dapat kami temukan. Silahkan coba kata kunci yang lain.</p>
			</div>

			<!-- content -->
			<div v-if="filterStatus !== -1" id="divTitleUniversitiesScreenUniversitiesMobile" class="divTitle">
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
				:data-sources="filterStatus === 1 ? listUniversitiesFiltered : listUniversity"
				:data-component="listItemUniversities"/>


			<!-- university index -->
			<div v-if="filterStatus === 0" class="divIndex">
				<div class="divider" />
				<p @click="onClickUniversityIndex(index)" class="mobileBody" :class="{'selected': index === selectedIndex, 'unselected': index !== selectedIndex}" :key="index" v-for="index in (universityCount / universityCountInIndex)">{{index}}</p>
				<div class="divider" />
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<!-- div not found -->
			<div v-if="filterStatus === -1" class="divNotFound">
				<img class="imageNotFound" src="../../assets/image/undraw/undrawNotFound.png">
				<p class="title">Uh ooh!</p>
				<p class="desktopBody">Universitas yang Anda cari tidak dapat kami temukan.<br>Silahkan coba kata kunci yang lain.</p>
			</div>

			<!-- content -->
			<div v-if="filterStatus !== -1" id="divTitleUniversitiesScreenUniversitiesDesktop" class="divTitle">
				<p class="textBackground">Universities.</p>
				<p class="textBackgroundHidden">Universities.</p>
				<p class="title">Temukan universitas<br>favoritmu sekarang!</p>
			</div>
			<virtual-list
				v-if="filterStatus !== -1"
				ref="virtualListDesktop"
				:keeps="filterStatus === 1 ? listUniversitiesFiltered.length : listUniversity.length"
				:page-mode="true"
				:data-key="'id'"
				:data-sources="filterStatus === 1 ? listUniversitiesFiltered : listUniversity"
				:data-component="listItemUniversities"/>

			<!-- university index -->
			<div v-if="filterStatus === 0" class="divIndex">
				<div class="divider" />
				<p @click="onClickUniversityIndex(index)" class="desktopBody" :class="{'selected': index === selectedIndex, 'unselected': index !== selectedIndex}" :key="index" v-for="index in (universityCount / universityCountInIndex)">{{index}}</p>
				<div class="divider" />
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/universities/universitiesScreenUniversitiesScript2.js" />
<style lang="scss" src="../../styles/universities/universitiesScreenUniversitiesStyle2.scss" />

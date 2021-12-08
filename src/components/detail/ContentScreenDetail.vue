<template>
	<div class="contentScreenDetail">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<virtual-list
				:keeps="jsonUniversityData.length"
				:data-component="listItemDataDetailMobile"
				:data-sources="jsonUniversityData"
				:data-key="'id'"
				:page-mode="true" />
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<virtual-list
				:keeps="jsonUniversityData.length"
				:data-component="listItemDataDetail"
				:data-sources="jsonUniversityData"
				:data-key="'id'"
				:page-mode="true" />
		</div>
	</div>
</template>
<script src="../../scripts/detail/contentScreenDetailScript.js" />
<style lang="scss" src="../../styles/detail/contentScreenDetailStyle.scss" />

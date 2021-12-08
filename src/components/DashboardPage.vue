<template>
	<div class="dashboardPage">
		<div class="mobile" v-responsive.sm.xs>
			tampilan mobile tidak didukung.
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<div class="leftSide">
				<p class="title">Dashboard</p>
				<div class="horizontalLine" />
				<div class="divNavigations">
					<div @click="onClickNavigation(index - 1)" class="navigation" :key="index - 1" v-for="index in navigations.length">
						<p :class="{'selected': (index - 1) === selectedNavigation, 'unselected': (index - 1) !== selectedNavigation}">{{navigations[index - 1]['title']}}</p>
					</div>
				</div>
				<div class="horizontalLine" />
				<div class="divVersion">
					<p class="version">2021.1.6-2217beta</p>
				</div>
			</div>
			<div class="rightSide">
				<component v-bind:is="navigations[selectedNavigation]['screen']" />
			</div>
		</div>

	</div>
</template>
<script src="../scripts/dashboardPageScript.js" />
<style lang="scss" src="../styles/dashboardPageStyle.scss" />

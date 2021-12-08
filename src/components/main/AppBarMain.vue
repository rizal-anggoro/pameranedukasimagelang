<template>
	<div class="appBarMain">
		<!-- mobile app bar -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="root" :class="{'rootScrolled': isScrolled}">
				<div class="divTitle">
					<p class="title">Pameran Edukasi Magelang</p>
				</div>
				<div class="divMenu">
					<svg @click="openMenuMobileMain" class="menu" height="24" width="24" viewBox="0 0 24 24">
						<path d="M4,18H17.576a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2Zm0-5h9.387a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2ZM3,7A1,1,0,0,0,4,8H20a1,1,0,0,0,0-2H4A1,1,0,0,0,3,7Z" />
					</svg>
				</div>
			</div>
		</div>

		<!-- desktop app bar -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="root" :class="{'rootScrolled': isScrolled}">
				<div class="divTitle">
					<p class="title">Pameran Edukasi Magelang</p>
				</div>
				<div class="divMenu">
					<p @click="onMenuItemClick(menu.key)" v-for="menu in listMenuMain" :key="menu.key" class="menuItem">{{menu.menu}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/appBarMainScript.js" />
<style lang="scss" src="../../styles/main/appBarMainStyle.scss" />

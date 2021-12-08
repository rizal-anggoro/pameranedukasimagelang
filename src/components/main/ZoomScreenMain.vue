<template>
	<div class="zoomScreenMain">
		<!-- mobile -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="divTitle">
				<p id="tryOutScreenMainMobileTextBackground" class="mobileTextBackground">Zoom.</p>
				<p class="mobileTextBackground hidden">Zoom.</p>
				<div class="textContent">
					<p class="mobileHeading">Sesi tanya jawab</p>
				</div>
			</div>
			<p class="mobileSubtitle">Sabtu, 16 Januari 2021</p>
			<div class="rootTable">
				<div class="divTable">
					<div class="header" style="display: flex">
						<div class="col" style="flex: .32">
							<p class="mobileBody">Sesi</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 1</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 2</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 3</p>
						</div>
					</div>
					<div class="content">
						<div class="listItem" :key="index - 1" v-for="index in 9">
							<div :class="{'odd': index % 2}" class="row">
								<div class="col0">
									<p class="mobileBody" style="font-weight: bold">{{zoom[0][0][index - 1]}}</p>
								</div>
								<div class="col1">
									<p class="mobileBody">{{zoom[0][1][index - 1]}}</p>
								</div>
								<div class="col2">
									<p class="mobileBody">{{zoom[0][2][index - 1]}}</p>
								</div>
								<div class="col3">
									<p class="mobileBody">{{zoom[0][3][index - 1]}}</p>
								</div>
							</div>
							<div v-if="index - 1 === 2 || index - 1 === 5 || index - 1 === 8" class="divider"></div>
						</div>
					</div>
					<div class="divButton">
						<div class="col0">
							<div class="textDivider"></div>
							<p class="mobileBody">Link</p>
							<div class="textDivider"></div>
						</div>
						<div class="col1" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[0][0]" target="_blank">
								<p class="mobileFillButton">Zoom 1</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
						<div class="col2" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[0][1]" target="_blank">
								<p class="mobileFillButton">Zoom 2</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
						<div class="col3" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[0][2]" target="_blank">
								<p class="mobileFillButton">Zoom 3</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
					</div>
				</div>
			</div>

			<p class="mobileSubtitle">Minggu, 17 Januari 2021</p>
			<div class="rootTable">
				<div class="divTable">
					<div class="header" style="display: flex">
						<div class="col" style="flex: .32">
							<p class="mobileBody">Sesi</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 1</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 2</p>
						</div>
						<div class="col" style="flex: 1">
							<p class="mobileBody">Zoom 3</p>
						</div>
					</div>
					<div class="content">
						<div class="listItem" :key="index - 1" v-for="index in 9">
							<div :class="{'odd': index % 2}" class="row">
								<div class="col0">
									<p class="mobileBody" style="font-weight: bold">{{zoom[1][0][index - 1]}}</p>
								</div>
								<div class="col1">
									<p class="mobileBody">{{zoom[1][1][index - 1]}}</p>
								</div>
								<div class="col2">
									<p class="mobileBody">{{zoom[1][2][index - 1]}}</p>
								</div>
								<div class="col3">
									<p class="mobileBody">{{zoom[1][3][index - 1]}}</p>
								</div>
							</div>
							<div v-if="index - 1 === 2 || index - 1 === 5 || index - 1 === 8" class="divider"></div>
						</div>
					</div>
					<div class="divButton">
						<div class="col0">
							<div class="textDivider"></div>
							<p class="mobileBody">Link</p>
							<div class="textDivider"></div>
						</div>
						<div class="col1" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[1][0]" target="_blank">
								<p class="mobileFillButton">Zoom 1</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
						<div class="col2" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[1][1]" target="_blank">
								<p class="mobileFillButton">Zoom 2</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
						<div class="col3" style="flex: 1">
							<div class="buttonDivider"></div>
							<a style="text-decoration: none" :href="zoomLink[1][2]" target="_blank">
								<p class="mobileFillButton">Zoom 3</p>
							</a>
							<div class="buttonDivider"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="textBackground">
				<p class="desktopTextBackground" id="tryOutScreenMainDesktopTextBackground">Zoom.</p>
				<p class="desktopTextBackground hidden">Zoom.</p>
				<p class="desktopHeading">Sesi tanya jawab</p>
			</div>
			<p class="desktopSubtitle">Sabtu, 16 Januari 2021</p>
			<div class="divTable">
				<div class="header" style="display: flex">
					<div class="col" style="flex: .32">
						<p class="desktopBody">Sesi</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 1</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 2</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 3</p>
					</div>
				</div>
				<div class="content">
					<div class="listItem" :key="index - 1" v-for="index in 9">
						<div :class="{'odd': index % 2}" class="row">
							<div class="col0">
								<p class="desktopBody" style="font-weight: 500">{{zoom[0][0][index - 1]}}</p>
							</div>
							<div class="col1">
								<p class="desktopBody">{{zoom[0][1][index - 1]}}</p>
							</div>
							<div class="col2">
								<p class="desktopBody">{{zoom[0][2][index - 1]}}</p>
							</div>
							<div class="col3">
								<p class="desktopBody">{{zoom[0][3][index - 1]}}</p>
							</div>
						</div>
						<div v-if="index - 1 === 2 || index - 1 === 5 || index - 1 === 8" class="divider"></div>
					</div>
				</div>
				<div class="divButton">
					<div class="col0">
						<div class="textDivider"></div>
						<p class="desktopBody">Link</p>
						<div class="textDivider"></div>
					</div>
					<div class="col1" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[0][0]" target="_blank">
							<p class="desktopFillButton">Zoom 1</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
					<div class="col2" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[0][1]" target="_blank">
							<p class="desktopFillButton">Zoom 2</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
					<div class="col3" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[0][2]" target="_blank">
							<p class="desktopFillButton">Zoom 3</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
				</div>
			</div>

			<p class="desktopSubtitle">Minggu, 17 Januari 2021</p>
			<div class="divTable">
				<div class="header" style="display: flex">
					<div class="col" style="flex: .32">
						<p class="desktopBody">Sesi</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 1</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 2</p>
					</div>
					<div class="col" style="flex: 1">
						<p class="desktopBody">Zoom 3</p>
					</div>
				</div>
				<div class="content">
					<div class="listItem" :key="index - 1" v-for="index in 9">
						<div :class="{'odd': index % 2}" class="row">
							<div class="col0">
								<p class="desktopBody" style="font-weight: 500">{{zoom[1][0][index - 1]}}</p>
							</div>
							<div class="col1">
								<p class="desktopBody">{{zoom[1][1][index - 1]}}</p>
							</div>
							<div class="col2">
								<p class="desktopBody">{{zoom[1][2][index - 1]}}</p>
							</div>
							<div class="col3">
								<p class="desktopBody">{{zoom[1][3][index - 1]}}</p>
							</div>
						</div>
						<div v-if="index - 1 === 2 || index - 1 === 5 || index - 1 === 8" class="divider"></div>
					</div>
				</div>
				<div class="divButton">
					<div class="col0">
						<div class="textDivider"></div>
						<p class="desktopBody">Link</p>
						<div class="textDivider"></div>
					</div>
					<div class="col1" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[1][0]" target="_blank">
							<p class="desktopFillButton">Zoom 1</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
					<div class="col2" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[1][1]" target="_blank">
							<p class="desktopFillButton">Zoom 2</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
					<div class="col3" style="flex: 1">
						<div class="buttonDivider"></div>
						<a style="text-decoration: none" :href="zoomLink[1][2]" target="_blank">
							<p class="desktopFillButton">Zoom 3</p>
						</a>
						<div class="buttonDivider"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/zoomScreenMainScript.js" />
<style lang="scss" src="../../styles/main/zoomScreenMainStyle.scss" />

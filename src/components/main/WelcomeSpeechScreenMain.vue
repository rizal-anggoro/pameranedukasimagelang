<template>
	<div class="welcomeSpeechScreenMain">
		<!-- mobile -->
		<div class="mobile" v-responsive.sm.xs>
			<div id="scrollToWelcomeSpeechScreenMainMobile" class="mobileScrollTo"></div>
			<div class="divWelcomeSpeechVideo">
				<div class="divVideo">
					<img class="decorationLine" src="../../assets/decorationLine.svg" />
					<img class="decorationBlob" src=../../assets/decorationBlob.svg>
					<video controls class="videoPlayer">
						<source type="video/mp4" :src="urlVideo">
					</video>
				</div>
			</div>
			<div class="divWelcomeSpeech">
				<div class="textBackground">
					<p class="mobileTextBackground">Welcome<br>Speech.</p>
				</div>
				<div :key="welcomeSpeech['title']" v-for="welcomeSpeech in listWelcomeSpeech" class="listItemWelcomeSpeech">
					<div class="divImage">
						<img class="image" :src="welcomeSpeech['imageMobile']">
					</div>
					<div class="divContent">
						<p class="mobileTitle">{{welcomeSpeech['title']}}</p>
						<p id="welcomeSpeechScreenMainMobileCaption" class="mobileBody" style="font-family: 'Montserrat', sans-serif;">{{welcomeSpeech['subtitle']}}</p>
						<vue-clamp autoresize :max-lines="isExpanded ? 0 : 5" style="text-align: justify" class="mobileBody">{{welcomeSpeech['body']}}</vue-clamp>
						<p @click="onClickButtonReadMore" class="mobileOutlineButton">{{isExpanded ? 'Sembunyikan' : 'Baca selengkapnya'}}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div id="scrollToWelcomeSpeechScreenMainDesktop" class="desktopScrollTo"></div>
			<div class="divWelcomeSpeechVideo">
				<div class="divVideo">
					<img class="decorationLine" src="../../assets/decorationLine.svg" />
					<img class="decorationBlob" src=../../assets/decorationBlob.svg>
					<video controls class="videoPlayer">
						<source type="video/mp4" :src="urlVideo">
					</video>
				</div>
			</div>
			<div class="rootWelcomeSpeech">
				<div class="textBackground">
					<p class="desktopTextBackground">Welcome<br>Speech.</p>
				</div>
				<div class="divWelcomeSpeech">
					<div class="itemImageLeft">
						<img class="image" :src="listWelcomeSpeech[0]['imageDesktop']">
						<div class="rightSide">
							<div class="content">
								<p class="desktopTitle">{{listWelcomeSpeech[0]['title']}}</p>
								<p id="welcomeSpeechScreenMainDesktopCaption0" class="desktopBody" style="font-family: 'Montserrat', sans-serif;">{{listWelcomeSpeech[0]['subtitle']}}</p>
								<vue-clamp autoresize :max-lines="isExpanded ? 0 : 3" id="welcomeSpeechScreenMainDesktopSubtitle0" class="desktopBody">{{listWelcomeSpeech[0]['body']}}</vue-clamp>
								<p @click="onClickButtonReadMore" id="welcomeSpeechScreenMainDesktopButtonReadMore0" class="desktopOutlineButton">{{isExpanded ? 'Sembunyikan' : 'Baca selengkapnya'}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/main/welcomeSpeechScreenMainScript.js" />
<style lang="scss" src="../../styles/main/welcomeSpeechScreenMainStyle.scss" />

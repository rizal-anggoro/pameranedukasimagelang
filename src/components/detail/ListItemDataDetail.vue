<template>
	<div class="listItemContentDetail">
		<div class="desktop" v-responsive.md.lg.xl>
			<div @click="onClickId(source['id'])" v-if="showId" class="divIndex">
				<p>{{source['id']}}</p>
			</div>
			<div class="divComponents">
				<!-- type footer facebook -->
				<div v-if="source['type'] === 'footerFacebook'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.title}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer twitter -->
				<div v-if="source['type'] === 'footerTwitter'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.title}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer youtube -->
				<div v-if="source['type'] === 'footerYoutube'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.title}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer phone -->
				<div v-if="source['type'] === 'footerPhone'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg width="24" height="24" viewBox="0 0 24 24" class="icon">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.number}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer instagram -->
				<div v-if="source['type'] === 'footerInstagram'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.name}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- footer copyright -->
				<div v-if="source['type'] === 'footerCopyright'" class="footerCopyright">
					<div class="horizontalLine"></div>
					<div class="divCopyright">
						<p class="desktopBody">Copyright © 2021. SMA Negeri 1 Magelang. All right reserved.</p>
					</div>
				</div>

				<!-- type footer website -->
				<div v-if="source['type'] === 'footerWebsite'" class="footerMail">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divMail">
							<div class="divIcon">
								<svg class="icon" width="24" height="24" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<line x1="2" y1="12" x2="22" y2="12" />
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
								</svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="desktopBody">{{source.title}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer email -->
				<div v-if="source['type'] === 'footerEmail'" class="footerMail">
					<div class="divMail">
						<div class="divIcon">
							<svg class="icon" width="24" height="24" viewBox="0 0 24 24">
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
								<polyline points="22,6 12,13 2,6" />
							</svg>
						</div>
						<div class="divText">
							<div class="textContent">
								<p class="desktopBody">{{source.email}}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- type footer whatsApp -->
				<div v-if="source['type'] === 'footerWhatsApp'" class="footerWhatsApp">
					<a :href="source.link" style="text-decoration: none" target="_blank">
						<div class="divWhatsApp">
							<div class="divIcon">
								<svg class="icon" viewBox="0 0 448 512">
									<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
								</svg>
							</div>
							<div class="divText">
								<div class="textContent">
									<p class="name">{{source.name}}</p>
									<p class="desktopBody">{{source.number}}</p>
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- type footer title -->
				<div style="background-color: #F6F1EE" :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'footerTitle'" class="textBackground">
					<p style="margin-bottom: .12em;" :style="getStyleJSON(false, 'textBackgroundStyle')" id="listItemContentDetailDesktopFooterTitle" class="desktopTextBackground">{{source['textBackground']}}</p>
					<p style="margin-bottom: .12em;" :style="getStyleJSON(false, 'textBackgroundStyle')" class="desktopTextBackground hidden">{{source['textBackground']}}</p>
					<p :style="getStyleJSON(false, 'titleStyle')" class="desktopHeading">{{source['title']}}</p>
				</div>

				<!-- scroll to id -->
				<div style="position: relative; width: 100%; height: 1px;" v-if="source['type'] === 'scrollToId'">
					<div :style="getStyleJSON(false, 'parentStyle')" :class="'scrollToId ' + source['scrollId']"></div>
				</div>

				<!-- custom html -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'customHtml'" class="customHtml" v-html="getStyleJSON(false, 'html')" />

				<!-- list item with index -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'listItemWithIndex'" class="listItemWithIndex">
					<div class="div0">
						<p :style="getStyleJSON(false, 'indexStyle')" class="desktopSubtitle">{{source['index']}}</p>
					</div>
					<div class="div1">
						<p :style="getStyleJSON(false, 'bodyStyle')" class="desktopBody" v-html="source['body']"></p>
					</div>
				</div>

				<!-- image with title and body -->
				<div style="padding: 2em 8%; box-sizing: border-box;" :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'imageWithTitleAndBody'" class="imageWithTitleAndBody">
					<div class="divImage">
						<img :style="getStyleJSON(false, 'srcStyle')" v-lazy="source['src']">
					</div>
					<div class="divContent">
						<div class="divText">
							<p :style="getStyleJSON(false, 'titleStyle')" class="desktopSubtitle">{{source['title']}}</p>
							<p style="padding-top: .64em; box-sizing: border-box" :style="getStyleJSON(false, 'subtitleStyle')" class="desktopBody" v-html="source['subtitle']"></p>
						</div>
					</div>
				</div>

				<!-- big image -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'bigImage'" class="bigImage">
					<img :style="getStyleJSON(false, 'bigImageStyle')" v-lazy="source['src']">
				</div>

				<!-- logo with name and location -->
				<div style="margin: 4em 0;" :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'logoContent'" class="logoContent">
					<div class="leftSide">
						<img :style="getStyleJSON(false, 'logoStyle')" v-lazy="source['logoSrc']">
					</div>
					<div class="rightSide">
						<div class="divContent">
							<p class="desktopHeading" :style="getStyleJSON(false, 'universityNameStyle')">{{source['universityName']}}</p>
							<p class="desktopBody" :style="getStyleJSON(false, 'universityLocationStyle')" v-html="source['universityLocation']"></p>
						</div>
					</div>
				</div>

				<!-- horizontal line -->
				<div
					:style="getStyleJSON(false, 'horizontalLineStyle')"
					v-if="source['type'] === 'horizontalLine'" class="horizontalLine" />

				<!-- type text background -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'textBackground'" class="textBackground">
					<p style="margin-bottom: .12em;" :style="getStyleJSON(false, 'textBackgroundStyle')" id="listItemContentDetailDesktopTextBackground" class="desktopTextBackground">{{source['textBackground']}}</p>
					<p style="margin-bottom: .12em;" :style="getStyleJSON(false, 'textBackgroundStyle')" class="desktopTextBackground hidden">{{source['textBackground']}}</p>
					<p :style="getStyleJSON(false, 'titleStyle')" class="desktopHeading">{{source['title']}}</p>
				</div>

				<!-- heading -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'heading'" class="heading">
					<p :style="getStyleJSON(false, 'headingStyle')" class="desktopHeading">{{source['heading']}}</p>
				</div>

				<!-- title -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'title'" class="title">
					<p style="font-family: 'Montserrat', sans-serif;" :style="getStyleJSON(false, 'titleStyle')" class="desktopTitle">{{source['title']}}</p>
				</div>

				<!-- subtitle -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'subtitle'" class="subtitle">
					<p style="font-family: 'Montserrat', sans-serif; font-weight: 500;" :style="getStyleJSON(false, 'subtitleStyle')" class="desktopSubtitle">{{source['subtitle']}}</p>
				</div>

				<!-- body -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'body'" class="body">
					<p :style="getStyleJSON(false, 'bodyStyle')" class="desktopBody" v-html="source['body']"></p>
				</div>

				<!-- 1 image -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'oneImage'" class="oneImage">
					<img :style="getStyleJSON(false, 'oneImageStyle')" v-lazy="source['src']">
				</div>

				<!-- 3 images -->
				<div :style="getStyleJSON(false, 'parentStyle')" v-if="source['type'] === 'threeImages'" class="threeImages">
					<img :style="getStyleJSON(false, 'threeImageStyle')" v-lazy="src" :key="src" v-for="src in source['src'].split(';')">
				</div>

				<!-- spacer -->
				<div v-if="source['type'] === 'spacer'" class="spacer" :style="getStyleJSON(false, 'spacerStyle')"/>
			</div>
		</div>
	</div>
</template>
<script src="../../scripts/detail/listItemDataDetailScript.js" />
<style scoped lang="scss" src="../../styles/detail/listItemDataDetailStyle.scss" />

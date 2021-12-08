<template>
	<div class="registrationScreenApp">
		<!-- mobile -->
		<div class="mobile" v-responsive.sm.xs>
			<div class="divPoster">
				<img class="poster" v-lazy="require('@/assets/image/png/pamflet-transparent.png')">
			</div>
			<div class="divContent">
				<p class="mobileTitle">Registrasi</p>
				<div class="divEditText">
					<input v-model="nameModel" class="mobileBody" placeholder="Nama">
					<input v-model="schoolModel" class="mobileBody" placeholder="Asal sekolah (*)">
					<div class="divSelect">
						<select v-model="facultyModel" class="mobileBody">
							<option>-</option>
							<option>Bahasa</option>
							<option>IPA</option>
							<option>IPS</option>
							<option>Lainnya</option>
						</select>
					</div>
					<input type="number" v-model="phoneModel" class="mobileBody" placeholder="Nomor telepon">
					<input type="email" v-model="emailModel" class="mobileBody" placeholder="Email">
				</div>
				<p class="mobileBody textOptional">* opsional</p>
				<div class="divButton">
					<div class="divider"></div>
					<p @click="onClickButtonDone" class="mobileFillButton">{{isRegistering ? 'Loading' : 'Selesai'}}</p>
					<div class="divider"></div>
				</div>
			</div>
		</div>

		<!-- desktop -->
		<div class="desktop" v-responsive.md.lg.xl>
			<div class="divLeft">
				<div class="divContent">
					<p class="desktopTitle">Registrasi</p>
					<div class="divEditText">
						<input v-model="nameModel" class="desktopBody" placeholder="Nama">
						<input v-model="schoolModel" class="desktopBody" placeholder="Asal sekolah (*)">
						<div class="divSelect">
							<select v-model="facultyModel" class="desktopBody">
								<option>-</option>
								<option>Bahasa</option>
								<option>IPA</option>
								<option>IPS</option>
								<option>Lainnya</option>
							</select>
						</div>
						<input type="number" v-model="phoneModel" class="desktopBody" placeholder="Nomor telepon">
						<input type="email" v-model="emailModel" class="desktopBody" placeholder="Email">
					</div>
					<p class="desktopBody textOptional">* opsional</p>
					<div class="divButton">
						<p @click="onClickButtonDone" class="desktopFillButton">{{isRegistering ? 'Loading' : 'Selesai'}}</p>
					</div>
				</div>
			</div>
			<div class="divRight">
				<div class="divCenter">
					<div class="divPoster">
						<img class="poster" v-lazy="require('@/assets/image/png/pamflet-transparent.png')">
					</div>
					<div class="divPowered">
						<div class="divider"></div>
						<div class="poweredItem" :key="index" v-for="index in 3">
							<img class="image" v-lazy="require(`@/assets/image/powered/powered${index}.png`)">
						</div>
						<div class="divider"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../../scripts/app/registrationScreenAppScript.js" />
<style lang="scss" src="../../styles/app/registrationScreenAppStyle.scss" />

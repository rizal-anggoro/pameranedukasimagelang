<template>
	<div class="builderPage">
		<div class="mobile" v-responsive.sm.xs>
			Versi mobile tidak didukung.
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<div class="root">
				<div class="divPreview">
					<div class="previewWeb">
						<!-- data list -->
						<virtual-list
							:keeps="jsonUniversityData.length"
							:data-component="listItemDataDetail"
							:data-sources="jsonUniversityData"
							:data-key="'id'"
							:page-mode="true" />
					</div>
					<div class="previewCode">
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 0" :placeholder="typeValue[0]" v-model="typeValueModel0" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 1" :placeholder="typeValue[1]" v-model="typeValueModel1" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 2" :placeholder="typeValue[2]" v-model="typeValueModel2" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 3" :placeholder="typeValue[3]" v-model="typeValueModel3" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 4" :placeholder="typeValue[4]" v-model="typeValueModel4" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 5" :placeholder="typeValue[5]" v-model="typeValueModel5" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 6" :placeholder="typeValue[6]" v-model="typeValueModel6" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 7" :placeholder="typeValue[7]" v-model="typeValueModel7" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 8" :placeholder="typeValue[8]" v-model="typeValueModel8" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 9" :placeholder="typeValue[9]" v-model="typeValueModel9" />
						<textarea @keydown="onKeyDown" v-if="typeValue.length > 10" :placeholder="typeValue[10]" v-model="typeValueModel10" />
					</div>
				</div>
				<div class="divEditor">
					<div class="divToolbar">
						<div class="divType">
							<p>Type</p>
							<select v-model="typeModel" @change="onChangeType">
								<option :key="type" v-for="type in listItemDataType" :value="type">{{type}}</option>
							</select>
						</div>
						<div class="spacer"></div>
						<div class="divAutoResetModel">
							<label>Auto save</label>
							<input v-model="autoSaveModel" type="checkbox">
						</div>
						<div class="divAutoResetModel">
							<label>Auto reset model</label>
							<input v-model="autoResetModel" type="checkbox">
						</div>
						<button @click="onClickClear">Clear</button>
						<button @click="onClickImport">Import JSON</button>
						<button @click="onClickImportEncrypt">Import Encrypt</button>
					</div>
					<div class="divBody">
						<div class="divContent0">
							<div class="divHeader" style="display: flex; padding: .64em; box-sizing: border-box">
								<button @click="generateCategoryData">Generate categoryData</button>
							</div>
							<textarea readonly v-model="generatedScrollTo"></textarea>
						</div>
						<div class="divContent1">
							<textarea readonly v-model="generated"></textarea>
						</div>
						<div class="divContent2">
							<button id="btnAdd" @click="onClickAdd">Add</button>
							<input @keydown="onKeyDown" v-model="addBeforeIdModel" placeholder="before id (num)">
							<br>
							<br>
							<button id="btnDelete" @click="onClickDelete">Delete</button>
							<input @keydown="onKeyDown" v-model="deleteIdModel" placeholder="id (num)">
							<br>
							<br>
							<button id="btnUpdate" @click="onClickUpdate">Update</button>
							<input @keydown="onKeyDown" v-model="updateIdModel" placeholder="to id (num)">
						</div>
						<div class="divContent3">
							<p>Local Storage</p>
							<br>
							<button @click="onClickSave">Save to local storage</button>
							<br>
							<br>
							<p>Click to load</p>
							<br>
							<p @click="onClickSavedKey(key)" class="listItemSavedKey" :key="key" v-for="key in savedKeyJSON">{{key}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../scripts/builderPageScript.js" />
<style lang="scss" src="../styles/builderPageStyle.scss" />

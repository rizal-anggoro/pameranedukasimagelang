<template>
  <div id="app">
    <div class="divWebApp" v-if="isWebApp">
      <router-view></router-view>
    </div>
    <div v-else class="divCom">
      <router-view v-if="fetchAccessStatus === 2" />

      <!-- registration screen-->
      <RegistrationScreenApp v-else-if="fetchAccessStatus === 1" />

      <!-- private access -->
      <PrivateAccessScreenApp v-else-if="fetchAccessStatus === -1" />
    </div>
  </div>
</template>
<script>
  import PrivateAccessScreenApp from '@/components/app/PrivateAccessScreenApp'
  import RegistrationScreenApp from "@/components/app/RegistrationScreenApp";

  import {settingApi} from "@/assets/js/apiUrl";
  import {isWebApp} from "@/assets/js/apiUrl";

  export default {
    name: 'App',
    components: {
      PrivateAccessScreenApp,
      RegistrationScreenApp,
    },
    data() {
      return {
        isWebApp: isWebApp,
        fetchAccessStatus: 0,
      }
    },
    beforeMount() {
      this.fetchAccessFromDatabase()
    },
    methods: {
      fetchAccessFromDatabase() {
        this.axios.post(
          settingApi,
          {
            'request': 'get-access',
          }, {
            headers: {
              'Content-Type': 'text/plain',
            },
          }
        ).then((result) => {
          let _jsonData = result.data
          let _data = _jsonData['data']
          this.fetchAccessStatus = _data === 'private' ? -1 : 1
        })
      },
    }
  }
</script>
<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1000ms;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<template>
  <router-view></router-view>
</template>

<script>
  import { CIcon } from '@coreui/icons-vue';
  import * as icon from '@coreui/icons';
  export default {
    name: 'App',
    components: {
      CIcon
    },
    setup() {
      return {
        icon,
      }
    }
  }
</script>

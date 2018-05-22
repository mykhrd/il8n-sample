<template>
  <Index></Index>
</template>
<script>
  import Index from "~/pages/_lang/index"

  export default {
    components: {
      Index
    },

    mounted: function () {
      this.init()
    },

    methods: {
      init: function () {

        console.log('test')

      }
    }
  }
</script>

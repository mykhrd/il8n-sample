<template>
    <about></about>
</template>


<script>
import About from "~/pages/_lang/about"

export default {
    components: {
        About
    },

    mounted: function() {
        this.init()
    },

    methods: {
        init: function() {}
    }
}
</script>

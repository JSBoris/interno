<script setup>
defineProps({
    showIntro: {
        type: Boolean,
        default: true,
    },
    bannerTitle: {
        type: String,
        default: '',
    },
    bannerImage: {
        type: String,
        default: '/public/img/nb_Banner.jpg'
    }
})
</script>

<template>
    <div class="nb_banner">
            <img :src="bannerImage" alt="Banner" class="nb_banner_img">
            <div v-if="showIntro" class="nb_intro">
                <h1 v-html="bannerTitle" class="h1-banner">
                    
                </h1>
            </div>
        </div>
</template>

<style scoped>



</style>
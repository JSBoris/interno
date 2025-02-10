<script setup>

import Header from '../components/layout/header.vue';
import BannerPages from '../components/layout/banner-pages.vue'
import BlogDetalisMain from '../components/03_BlogDitalisComponents/blog-detalis-main.vue'
import Footer from '../components/layout/footer.vue'

</script>

<template>
    <Header />
    <BannerPages 
    :showIntro="false" 
    bannerImage="/public/img/blog_detalis_Banner.jpg"
    
    />
    <BlogDetalisMain />
    <Footer />

</template>

<style scoped>
 
    

</style>


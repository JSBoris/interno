<script setup>
    import Header from '../components/layout/header.vue';
    import BannerPages from '../components/layout/banner-pages.vue';
    import Footer from '../components/layout/footer.vue';
    import ProjectContent from '../components/04_ProjectContent/project-content.vue'

</script>

<template>
    <Header />
    <BannerPages 
        :showIntro="true"
        bannerTitle="Наш проект"
        bannerImage="/public/Project_page_img/Project_Banner.jpg"
    />
    <ProjectContent />
    <Footer />


</template>

<style scoped>
    
</style>
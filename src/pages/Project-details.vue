<script setup>
    import Header from '../components/layout/header.vue';
    import BannerPages from '../components/layout/banner-pages.vue';
    import Footer from '../components/layout/footer.vue';
    import ProjectDetailsMain from '../components/05_ProjectDetails/project-details-main.vue';

    

</script>

<template>
    
    <Header />
    <BannerPages 
        :showIntro="false"
        bannerImage="/img/Project_Details_Banner.jpg"
    />
    <ProjectDetailsMain />
    <Footer />

</template>
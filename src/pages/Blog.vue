<script setup>
    import Header from '../components/layout/header.vue';
    import BannerPages from '../components/layout/banner-pages.vue';
    import articlesNewsMain from '../components/02_BlogComponents/blog-main.vue';
    import Footer from '../components/layout/footer.vue';
</script>

<template>
    <Header />
    <BannerPages 
    :showIntro="true"
    bannerTitle="Статьи & <br> Новости"
    bannerImage="/img/nb_Banner.jpg"
    />
    <articlesNewsMain />
    <Footer />



</template>
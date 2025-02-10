<script setup>
import Header from '../components/layout/header.vue';
import Banner from '../components/01_HomePageComponents/banner.vue';
import LatestProject from '../components/01_HomePageComponents/latest-project.vue';
import Footer from '../components/layout/footer.vue'
</script>

<template>
  <!-- top navigation , logo -->
  <Header />
  <!-- Banner -->
  <Banner />
  <!-- main contant -->
  <LatestProject />
  <!-- bread crumbs, social media, feedback and address -->
  <Footer />
</template>
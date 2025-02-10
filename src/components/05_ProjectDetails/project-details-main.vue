<script setup>
import { useRoute } from 'vue-router';
import { useArticleStore } from '../../store/project-details.js';
import { computed, ref } from 'vue';

const route = useRoute();
const articleStore = useArticleStore();

const articleId = Number(route.params.id);
const article = computed(() => articleStore.getArticleById(articleId));

const currentIndex = ref(0);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % article.value.images.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + article.value.images.length) % article.value.images.length;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};

</script>

<template>
    <h1 class="h1-banner">{{ article.title }}</h1>
    <p class="p_content_text">{{ article.content }}</p>

    <div class="slider" v-if="article.images.length">

        <img :src="article.images[currentIndex]" alt="Project Image" />

        <div class="slider_pagination">
            <button @click="prevSlide"><</button>

            <div class="dots">
                <span v-for="(img, index) in article.images" 
                :key="index" 
                :class="{ active: index === currentIndex }"
                @click="goToSlide(index)"></span>
            </div>

            <button @click="nextSlide"> > </button>

        </div>

    </div>

</template>



<style scoped>
.slider {
    margin-top: 103px;
    margin-bottom: 200px;
}

img {
    border-radius: 70px;
    width: 1201px;
    height: 799px;

    
}

.slider_pagination {
    
    display: flex;
    justify-content: center;
}

.slider_pagination button {
    background-color: #fff;
    border: none;
    font-weight: 400;
    font-size: 25px;
    cursor: pointer;
    color: #4d5053;
}

.dots {
    margin: 21px;
}

.dots span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid  #4d5053; /* граница */
    border-radius: 50%;     /* делает круг */
    margin: 0 5px;
    cursor: pointer;
    background-color: transparent; /* прозрачный фон */
    transition: background-color 0.3s;
}

.dots span.active {
  background-color: #4d5053; /* заливка для активной точки */
}
</style>
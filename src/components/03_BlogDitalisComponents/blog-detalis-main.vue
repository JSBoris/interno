<script setup>

import { ref } from 'vue';

import Article1 from '../03_BlogDitalisComponents/article1.vue';
import Article2 from '../03_BlogDitalisComponents/article2.vue';
import Article3 from '../03_BlogDitalisComponents/article3.vue';
import Article4 from '../03_BlogDitalisComponents/article4.vue';

const articles = ref([
    { tag: 'Кабинет', component: Article1 },
    { tag: 'Зал', component: Article2 },
    { tag: 'Кухня', component: Article3 },
    { tag: 'Спальня', component: Article4 }
]);

const sortByTag = (tag) => {
    // Находим статью с нужным тегом
    const articleIndex = articles.value.findIndex(article => article.tag === tag);

    if (articleIndex !== -1) {
        // Перемещаем статью с этим тегом в начало массива
        const [article] = articles.value.splice(articleIndex, 1);
        articles.value.unshift(article);
    }
};

</script>

<template>
    <div class="blog_details_content_wrapper">
        <div class="article_container">
            <div v-for="(article, index) in articles" :key="index">
                <component :is="article.component" />
            </div>
        </div>
        <div class="tag_button">
            <h4>Теги</h4>
            <button @click="sortByTag('Зал')">Зал</button>
            <button @click="sortByTag('Кухня')">Кухня</button>
            <button @click="sortByTag('Спальня')">Спальня</button>
            <button @click="sortByTag('Кабинет')">Кабинет</button>
        </div>
    </div>
</template>
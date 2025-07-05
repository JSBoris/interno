<script setup>
import Card from '../common/card.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const cards = ref([
    { id: 1, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '05 Января 2025', link: '' },
    { id: 2, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '10 Января 2025', link: '' },
    { id: 3, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '15 Января 2025', link: '' },
    { id: 4, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '20 Января 2025', link: '' },
    { id: 5, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '25 Января 2025', link: '' },
    { id: 6, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '30 Января 2025', link: '' },
    { id: 7, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '04 Февраля 2025', link: '' },
    { id: 8, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '09 Февраля 2025', link: '' },
    { id: 9, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '14 Февраля 2025', link: '' },
    { id: 10, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '19 Февраля 2025', link: '' },
    { id: 11, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '24 Февраля 2025', link: '' },
    { id: 12, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '01 Марта 2025', link: '' },
    { id: 13, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '06 Марта 2025', link: '' },
    { id: 14, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '11 Марта 2025', link: '' },
    { id: 15, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '16 Марта 2025', link: '' },
    { id: 16, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '21 Марта 2025', link: '' },
    { id: 17, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '26 Марта 2025', link: '' },
    { id: 18, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '31 Марта 2025', link: '' },
    { id: 19, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '05 Апреля 2025', link: '' },
    { id: 20, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '10 Апреля 2025', link: '' },
    { id: 21, category: 'Кухня', image: '', description: '', title: 'Кухня', date: '15 Апреля 2025', link: '' },
    { id: 22, category: 'Ванная', image: '', description: '', title: 'Ванная', date: '20 Апреля 2025', link: '' },
    { id: 23, category: 'Гостиная', image: '', description: '', title: 'Гостиная', date: '25 Апреля 2025', link: '' },
    { id: 24, category: 'Спальня', image: '', description: '', title: 'Спальня', date: '30 Апреля 2025', link: '' }
]);

function sortProjectCards(category) {
    cards.value = [
        ...cards.value.filter(card => card.category === category),
        ...cards.value.filter(card => card.category !== category)
    ];
}

const currentPage = ref(1); // Текущая страница
const itemsPerPage = 6;     // Количество карточек на странице

// Вычисляем карточки для текущей страницы
const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return cards.value.slice(start, end);
});

// Функция для перехода на выбранную страницу
function goToPage(page) {
    currentPage.value = page;
}

// Функция для перехода на страницу ProjectDetails по id карточки с помощью useRouter
const goToProjectDetails = (id) => {
    router.push(`/ProjectDetails/${id}`);
};

</script>

<template>
    <div class="project_content">

        <div class="project_button">
            <button @click="sortProjectCards('Ванная')">Ванная комната</button>
            <button @click="sortProjectCards('Спальня')">Спальня</button>
            <button @click="sortProjectCards('Кухня')">Кухня</button>
            <button @click="sortProjectCards('Гостиная')">Гостинная</button>
        </div>

        <div class="project_cards">
            <Card v-for="card in paginatedCards" @click="goToProjectDetails(card.id)" :key="card.id"
                :category="card.category" :image="card.image" :description="card.description" :title="card.title"
                :date="card.date" :link="card.link" />
        </div>

        <div class="project_pagination">
            <button v-for="page in Math.ceil(cards.length / itemsPerPage)" :key="page" @click="goToPage(page)"
                :class="'pagination-button'">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"
                        :fill="currentPage === page ? '#f4f0ec' : 'none'" />
                </svg>
                <span class="page-number">{{ page }}</span>
            </button>
        </div>

    </div>
</template>


<style scoped>
.project_content {
    margin-top: 104px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center
}

.project_button {
    border-radius: 18px;
    border: 1px solid #cda274;
    display: inline-flex;
}

.project_button button {
    background-color: #fff;
    border: none;
    border-radius: 18px;
    padding: 26px 66px;
    height: 75px;

    font-family: 'Jost';
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #292f36;

}

.project_button button:hover {
    background: #cda274;
    color: #fff;
    cursor: pointer;
}

.project_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
}

.project_pagination {
    margin-top: 61px;
}

.pagination-button {
    position: relative;
    border: none;
    background-color: #fff;
    border-radius: 100%;
    stroke-width: 1px;
    stroke: #cda274;
    cursor: pointer;
    padding: 0px;
    margin-right: 20px;
}

.pagination-button:hover {
    background-color: #f4f0ec;
}

.page-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Jost';
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-transform: capitalize;
    color: #292f36;
}
</style>
<script setup>
import Card from '../common/card.vue';

const cards = [
    {
        id: 1,
        image: '/img/Newscard1.jpg',
        description: 'Дизайн Кухни',
        title: 'Создадим лучший макет перепланировки',
        date: '22 Декабря 2024',
        link: '/blogDetalis',
    },
    {
        id: 2,
        image: '/img/Newscard2.jpg',
        description: 'Дизайн Дома',
        title: 'Лучшие интерьерные идеи для дома',
        date: '10 Января 2025',
        link: '/blogDetalis',
    },
    {
        id: 3,
        image: '/img/Newscard3.jpg',
        description: 'Дизайн Офиса',
        title: 'Лучшие идеи интерьера для офиса',
        date: '22 Января 2025',
        link: '/blogDetalis',
    },
    {
        id: 4,
        image: '/img/Newscard4.jpg',
        description: 'Спальня',
        title: 'Как создать место для отдыха',
        date: '7 Декабря 2024',
        link: '/blogDetalis',
    },
    {
        id: 5,
        image: '/img/Newscard5.jpg',
        description: 'Балкон',
        title: 'Идеи для маленького пространства',
        date: '15 Ноября 2024',
        link: '/blogDetalis',
    },
    {
        id: 6,
        image: '/img/Newscard6.jpg',
        description: 'Рабочий кабинет',
        title: 'Функциональность и комфорт',
        date: '18 Октября 2024',
        link: '/blogDetalis',
    }
];
</script>

<template>
    <div class="latest_post">
        <h1>Последние пост</h1>
        <div class="latest_post_container">
            <img src="/img/Latest_post_img.jpg" alt="" class="latest_post_img">
            <div class="latest_post_content">
                <h3>Low Cost Latest Invented Interior <br>
                    Designing Ideas</h3>
                <p class="p_content_text">
                    С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для
                    примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в
                    работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек
                    с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения
                    текста на странице.
                </p>
                <span>26 December,2024</span>
                <router-link to="/blogDetalis">
                    <a href="#">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26" r="26" fill="#F4F0EC" />
                            <path d="M23.771 32.6855L29.7139 25.9998L23.771 19.3141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
    <div class="news_and_blogs">
        <h1 class="h1-banner">Статьи & Новости</h1>
        <div class="news_card_wrapper_news_blogs">
            <Card v-for="card in cards" :key="card.id" :image="card.image" :description="card.description"
                :title="card.title" :date="card.date" :link="card.link" />
        </div>
    </div>
</template>
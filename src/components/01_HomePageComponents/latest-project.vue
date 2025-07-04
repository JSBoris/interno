<script setup>
    import Card from '../common/card.vue';

    const cards = [
  {
    id: 1,
    image: '/img/Newscard1.jpg',
    description: 'Дизайн Кухни',
    title: 'Создадим лучший макет перепланировки',
    date: '22 Декабря 2024',
    link: '#',
  },
  {
    id: 2,
    image: '/img/Newscard2.jpg',
    description: 'Дизайн Дома',
    title: 'Лучшие интерьерные идеи для дома',
    date: '22 Декабря 2024',
    link: '#',
  },
  {
    id: 3,
    image: '/img/Newscard3.jpg',
    description: 'Дизайн Офиса',
    title: 'Лучшие идеи интерьера для офиса',
    date: '22 Декабря 2024',
    link: '#',
  },
];

</script>

<template>
    <div class="content">
        <div class="content-text">
            <h2 class="h2_content_text">Следите за нашими проектами</h2>
            <p class="p_content_text">
                Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы
            </p>
        </div>
        <div class="content-grid">
            <div class="card-br-tr item ">
                <img src="/img/Card1.png" alt="Современная Кухня" class="content_card_img">
                <div class="content_card_text_box">
                    <div class="flex_div_for_tetx">
                        <h4 class="content_card_h4">Современная кухня</h4>
                        <p class="content_card_p">Декор / Планировка</p>
                    </div>
                    <div>
                        <a href="#" class="content_card_a">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <!-- Круг -->
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />

                                <!-- Стрелка -->
                                <svg x="30" y="25" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </svg>

                        </a>
                    </div>
                </div>

            </div>
            <div class="card-br-tl item ">
                <img src="/img/Card2.png" alt="Современная Кухня" class="content_card_img">
                <div class="content_card_text_box">
                    <div class="flex_div_for_tetx">
                        <h4 class="content_card_h4">Современная кухня</h4>
                        <p class="content_card_p">Декор / Планировка</p>
                    </div>
                    <div>
                        <a href="#" class="content_card_a">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <!-- Круг -->
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />

                                <!-- Стрелка -->
                                <svg x="30" y="25" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </svg>

                        </a>
                    </div>
                </div>

            </div>
            <div class="card-br-br item ">
                <img src="/img/Card3.png" alt="Современная Кухня" class="content_card_img">
                <div class="content_card_text_box">
                    <div class="flex_div_for_tetx">
                        <h4 class="content_card_h4">Современная кухня</h4>
                        <p class="content_card_p">Декор / Планировка</p>
                    </div>
                    <div>
                        <a href="#" class="content_card_a">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <!-- Круг -->
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />

                                <!-- Стрелка -->
                                <svg x="30" y="25" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </svg>

                        </a>
                    </div>
                </div>

            </div>
            <div class="card-br-bl item ">
                <img src="/img/Card4.png" alt="Современная Кухня" class="content_card_img">
                <div class="content_card_text_box">
                    <div class="flex_div_for_tetx">
                        <h4 class="content_card_h4">Современная кухня</h4>
                        <p class="content_card_p">Декор / Планировка</p>
                    </div>
                    <div>
                        <a href="#" class="content_card_a">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <!-- Круг -->
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />

                                <!-- Стрелка -->
                                <svg x="30" y="25" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </svg>

                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="info-wrapper">
        <div class="info">
            <div class="info_data">
                <span>12</span>
                <p>лет опыта</p>
            </div>
            <div class="info_data">
                <span>85</span>
                <p>успешных проектов</p>
            </div>
            <div class="info_data">
                <span>15</span>
                <p>проектов в работе</p>
            </div>
            <div class="info_data">
                <span>95</span>
                <p>счастливых клиентов</p>
            </div>
        </div>
    </div>
    <div class="news">
        <div class="news-title">
            <h2>Статьи & <br> Новости</h2>
            <p>
                Хорошо известно, что читатель будет отвлекаться <br> на читабельный контент страницы
            </p>
        </div>
        <div class="news_card_wrapper">
            <Card 
            v-for="card in cards"
            :key="card.id"
            :image="card.image"
            :description="card.description"
            :title="card.title"
            :date="card.date"
            :link="card.link"
            />
        </div>
    </div>


</template>
<script setup>

const props = defineProps({
    image: String,
    description: String,
    title: String,
    date: String,
    link: String,
});

</script>

<template>

    <div class="news-card">
        <div class="card">
            <div class="card-image">
                <img :src="image" alt="Card image" />
                <span class="card-label">{{ description }}</span>
            </div>
            <div class="card-content">
                <h2>{{ title }}</h2>
                <div class="flex-helper">
                    <p>{{ date }}</p>
                    <router-link :to="link">
                        <a href="#" class="card-button">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
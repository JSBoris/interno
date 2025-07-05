import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useArticleStore = defineStore('articleStore', () => {
    const articles = ref([
        {
            id: 1,
            title: 'Заголовок id 1',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 2,
            title: 'Заголовок id 2',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 3,
            title: 'Заголовок id 3',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 4,
            title: 'Заголовок id 4',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 5,
            title: 'Заголовок id 5',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 6,
            title: 'Заголовок id 6',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 7,
            title: 'Заголовок id 7',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 8,
            title: 'Заголовок id 8',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 9,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 10,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 11,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 12,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 13,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 14,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 15,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 16,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 17,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 18,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 19,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 20,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 21,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 22,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 23,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        },
        {
            id: 24,
            title: 'Заголовок',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur assumenda voluptates mollitia consectetur dolore id beatae explicabo corporis ab corrupti natus qui perferendis? Suscipit debitis laboriosam aperiam ad modi.',
            images: [
                '/project_page_img/slide_photo_1.jpg', 
                '/project_page_img/slide_photo_2.jpg', 
                '/project_page_img/slide_photo_3.jpg'
            ]
        }
    ]);

    const getArticleById = (id) => {
        return articles.value.find(article => article.id === id);
    };

    return { articles, getArticleById };
});

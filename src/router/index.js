import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home-page.vue';
import ArticlesAndNews from '../pages/Blog.vue';
import BlogDetalis from '../pages/Blog-details.vue';
import Project from '../pages/Project.vue';
import ProjectDetails from '../pages/Project-details.vue';
import { useArticleStore } from '../store/project-details.js';


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/blog', name: 'ArticlesAndNews', component: ArticlesAndNews },
  { path: '/blogDetalis', name: 'BlogDetalis', component: BlogDetalis },
  { path: '/Project', name: 'Project', component: Project },

  { path: '/ProjectDetails/:id(\\d+)', 
    name: 'ProjectDetails', 
    component: ProjectDetails,
    beforeEnter: (to, from, next) => {
      const articleStore = useArticleStore(); // Подключаем store
      const articleId = Number(to.params.id); // Получаем ID из URL
      const articleExists = articleStore.articles.some(article => article.id === articleId); // Проверяем наличие статьи
  
      if (articleExists) {
        next(); // Переход к статье
      } else {
        next({ name: 'Error404' }); // Переход на 404
      }
    }
  },

  {
    path: '/:pathMatch(.*)*', name: 'Error404', component: () => import('../../src/pages/Error-404.vue')
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Если есть сохранённая позиция (например, при нажатии кнопки "Назад")
    // if (savedPosition) {
    //   return savedPosition;
    // }
    // Всегда прокручиваем вверх для новых страниц
    return { top: 0 };
  },
});

export default router;
//  для асинхронной загрузки компонента чтоб не тормозила прокрутка
// import { nextTick } from 'vue';

// scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition;
//   }
//   return new Promise((resolve) => {
//     nextTick(() => {
//       resolve({ top: 0 });
//     });
//   });
// }

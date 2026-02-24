import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Author from '@/pages/Author.vue';
import About from '@/pages/About.vue';
import BlogPost from '@/pages/BlogPost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

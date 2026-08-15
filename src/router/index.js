import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import BlogPost from '../views/BlogPost.vue';
import NewPost from '../views/NewPost.vue';
import Login from '../views/Login.vue';
import EditPost from '../views/EditPost.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: BlogPost },
  { path: '/blog/new', component: NewPost },
  { path: '/login', component: Login },
  { path: '/blog/edit/:slug', component: EditPost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
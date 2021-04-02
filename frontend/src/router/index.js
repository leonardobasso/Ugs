import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SinglePage from '../views/SinglePage.vue'
import PostList from '../views/PostList.vue'
import Admin from '../views/Admin.vue'
import ArticleAdmin from '../views/ArticleAdmin.vue'
import AdminEditArticle from '../views/EditArticle.vue'
import NewArticle from '../views/NewArticle.vue'
const routes = [
  { // HomePage Link
    path: '/',
    name: 'Home',
    component: Home
  },
  { // Article Detail Page Link
    path: '/single',
    name: 'SinglePage',
    component: SinglePage,
  },
  { // Article Page Link
    path: '/articoli',
    name: 'PostList',
    component: PostList,
  },
  { // Admin Page
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  { // Admin Article List Page
    path: '/admin/article',
    name: 'AdminArticle',
    component: ArticleAdmin,
  },
  { // Admin Article Edit Page
    path: '/admin/article/edit/:Postslug',
    name: 'AdminEditArticle',
    component: AdminEditArticle,
  },
  { // Admin Article Edit Page
    path: '/admin/article/add',
    name: 'NewArticle',
    component: NewArticle,
  },
]  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDash from '../views/AdminDash.vue'
import CategoryPage from '../views/CatManager/CategoryPage.vue'
import CreateCategory from '../views/CatManager/CreateCategory.vue'
import ProductPage from '../views/ProdManager/ProductPage.vue'
import CreateProduct from '../views/ProdManager/CreateProduct.vue'
import ProductDetail from '../views/ProdManager/ProductDetail.vue'
import CategoryDetail from '../views/CatManager/CategoryDetail.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessPage from '../views/StripePayment/SuccessPage.vue'
import FailurePage from '../views/StripePayment/FailurePage.vue'
import CheckOut from '../views/CheckOut.vue'
import AdminLogin from '../views/AdminLogin.vue'
import RecentSales from '../views/RecentSales.vue'
import BannerPage from '../views/BannerPage.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin/recentsales',
    name: 'salesPage',
    component: RecentSales

  },
  {
    path: '/admin/banner',
    name: 'bannerpage',
    component: BannerPage
  },

  {
    path: '/category/detail',
    name: 'CategoryDetail',
    component: CategoryDetail
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'adminPanel',
    component: AdminDash
  },

  {
    path: '/admin/category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/admin/category/create',
    name: 'CreateCategory',
    component: CreateCategory
  },
  {
    path: '/admin/product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/admin/product/create',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/product/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage

  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/payment/success',
    name: 'SuccessPage',
    component: SuccessPage
  },
  {
    path: '/payment/failed',
    name: 'FailurePage',
    component: FailurePage
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: AdminLogin
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
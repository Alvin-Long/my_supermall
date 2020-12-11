import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('views/home/Home')
const Profile = () =>
    import ('views/profile/Profile')
const Category = () =>
    import ('views/category/Category')
const Cart = () =>
    import ('views/cart/Cart')

Vue.use(Router)

//获取原型对象上的push函数
const originalReplace = Router.prototype.replace
    //修改原型对象中的push方法
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/cart',
        component: Cart
    }
]





const router = new Router({
        routes,
        mode: 'history'
    })
    // 导出router
export default router
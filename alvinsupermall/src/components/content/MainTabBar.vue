<template>
     <tab-bar>
        <tab-bar-item path='/home' activeColor='pink'>
           <img src="~assets/img/tabbar/home_active.svg" slot="tab-bar-icon" />
           <img src="~assets/img/tabbar/home.svg" alt="" slot="tab-bar-icon-active"/>
           <p slot="tab-bar-text">首页</p>
        </tab-bar-item>
        <tab-bar-item path='/cart' activeColor='red'>
        <img src="../../assets/img/tabbar/shopcart_active.svg" slot="tab-bar-icon" />
           <img src="../../assets/img/tabbar/shopcart.svg" alt="" slot="tab-bar-icon-active"/>
           <p slot="tab-bar-text">购物车</p>
        </tab-bar-item>
        <tab-bar-item path='/category' activeColor='green'>
        <img src="../../assets/img/tabbar/category_active.svg" slot="tab-bar-icon" />
           <img src="../../assets/img/tabbar/category.svg" alt="" slot="tab-bar-icon-active"/>
           <p slot="tab-bar-text">分类</p>
        </tab-bar-item>
        <tab-bar-item path='/profile' activeColor='yellow'>
        <img src="../../assets/img/tabbar/profile_active.svg" slot="tab-bar-icon" />
           <img src="../../assets/img/tabbar/profile.svg" alt="" slot="tab-bar-icon-active"/>
           <p slot="tab-bar-text">个人</p>
        </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
}
</script>
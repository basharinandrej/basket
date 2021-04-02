import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products.js'
import recentlyWatchedProducts from '@/store/modules/recentlyWatchedProducts.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        products, recentlyWatchedProducts
    }
})
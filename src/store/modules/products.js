import axios from "axios";

const state = {
    items: [],
    isLoading: false,
    errorMessage: ''
}

const actions = {
    async actionFetchProducts({commit}) {
        commit('startFetchProducts', {
            isLoading: true
        })

        try {
            const response = await axios
                .get('http://localhost:8081/products')

            const products = await response.data
            commit('successFetchProducts', {
                items: products,
                isLoading: false
            })
        } catch (e) {
            commit('failureFetchProducts', {
                isLoading: true,
                errorMessage: 'Error_FetchProducts'
            })
        }
    }
}

const mutations = {
    startFetchProducts(state, payload) {
        state.isLoading = payload.isLoading
    },
    successFetchProducts(state, payload) {
        state.items = payload.items
        state.isLoading = payload.isLoading
    },
    failureFetchProducts(state, payload) {
        state.isLoading = payload.isLoading
        state.errorMessage = payload.errorMessage
    },
    removeIdProduct(state, payload) {
        state.items = state.items.filter(el => el.id !== payload)
    },
    removeAllProduct(state) {
        state.items = []
    },
    incrementPrizeCurrentProduct(state, payload) {
        state.items = state.items.map(el => {
            switch(el.id) {
                case payload:
                   return {
                        ...el,
                        totalPrice: el.totalPrice + el.price
                   }
                default:
                    return {
                        ...el
                    }
            }
        })
    },
    decrementPrizeCurrentProduct(state, payload) {
        state.items = state.items.map(el => {
            switch(el.id) {
                case payload:
                   return {
                        ...el,
                        totalPrice: el.totalPrice - el.price < el.price 
                            ? el.price 
                            : el.totalPrice - el.price
                   }
                default:
                    return {
                        ...el
                    }
            }
        })
    }
}

const getters = {
    getTotalPriceAllProducts(state) {
        return state.items.reduce((total, el) => {
            return total + el.totalPrice
        }, 0)
    }
}

export default {
    state, actions, mutations, getters
}
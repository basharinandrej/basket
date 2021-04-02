import axios from "axios";
import {baseUrl} from '@/helpers/baseUrl';

const state = {
    items: [],
    isLoading: false,
    errorMessage: '',
    isInstallation: false
}

const actions = {
    async actionFetchProducts({commit}) {
        commit('startFetchProducts', {
            isLoading: true
        })

        try {
            const response = await axios
                .get(`${baseUrl}/products.json`)

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
    },
    incrementCounterCurrentProduct(state, payload) {
        state.items = state.items.map(el => {
            switch(el.id) {
                case payload:
                   return {
                        ...el,
                        counterCurrentProduct: el.counterCurrentProduct + 1
                   }
                default:
                    return {
                        ...el
                    }
            }
        })
    },
    decrementCounterCurrentProduct(state, payload) {
        state.items = state.items.map(el => {
            switch(el.id) {
                case payload:
                   return {
                        ...el,
                        counterCurrentProduct: el.counterCurrentProduct > 1 
                            ? el.counterCurrentProduct - 1
                            : el.counterCurrentProduct
                   }
                default:
                    return {
                        ...el
                    }
            }
        })
    },
    toggleInstallationServices(state, payload) {
        state.isInstallation = payload
    },
    setDefaultInstalitionSerices(state) {
        state.isInstallation = false
    }
}

const getters = {
    getTotalPriceAllProducts(state) {
        return state.items.reduce((total, el) => {
            return total + el.totalPrice
        }, 0)
    },
    getTotalProducts(state) {
        return state.items.reduce((total, el) => {
            return total + el.counterCurrentProduct
        }, 0)
    }
}

export default {
    state, actions, mutations, getters
}
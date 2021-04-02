import axios from "axios";

const state = {
    items: [],
    isLoading: false,
    errorMessage: ''
}

const actions = {
    async actionFetchProductsRecently({commit}) {
        commit('startFetchProductsRecently', {
            isLoading: true
        })

        try {
            const response = await axios
                .get('http://localhost:8081/recentlyWatchedProducts')

            const products = await response.data
            commit('successFetchProductsRecently', {
                items: products,
                isLoading: false
            })
        } catch (e) {
            commit('failureFetchProductsRecently', {
                isLoading: true,
                errorMessage: 'Error_FetchProducts'
            })
        }
    }
}

const mutations = {
    startFetchProductsRecently(state, payload) {
        state.isLoading = payload.isLoading
    },
    successFetchProductsRecently(state, payload) {
        state.items = payload.items
        state.isLoading = payload.isLoading
    },
    failureFetchProductsRecently(state, payload) {
        state.isLoading = payload.isLoading
        state.errorMessage = payload.errorMessage
    }
}


export default {
    state, actions, mutations
}